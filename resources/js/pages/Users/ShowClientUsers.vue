<template>
    <div>
        <section class="mb-10">
            <title-board
                boardTitle="Show Users"
                boardText="View and edit user information"
                :hostName="$page.auth.settings.app_url"
                boardImgLink="img/board_img/user.svg"
            >
                <breadcrumb>
                    <inertia-link
                        :href="$route.relativePath('users.view')"
                        class="text-primary-100 hover:text-white"
                    >
                        User</inertia-link
                    >
                    <b-seperator />
                    <a href="#" class="hover:text-white">Show Users</a>
                </breadcrumb>
            </title-board>
        </section>
        <section class="flex flex-wrap md:flex-no-wrap justify-between">
            <div class="w-full mb-10 md:w-4/12 md:mr-10">
                <profile-card
                    :firstName="$page.user.first_name || ''"
                    :lastName="$page.user.last_name || ''"
                    :avatar="$page.user.avatar || ''"
                    :active="$page.user.is_active == 1 ? true : false"
                >
                    <a
                        :href="$page.user.twitter || '#'"
                        title="Twitter"
                        class="mr-2 hover:text-primary-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <iconify-icon width="15" :icon="icons.twitter" />
                    </a>
                    <a
                        :href="$page.user.facebook || '#'"
                        title="Facebook"
                        class="mr-2 hover:text-primary-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <iconify-icon width="15" :icon="icons.facebook" />
                    </a>
                    <a
                        :href="`mailto:${$page.user.email || ''}`"
                        title="phone"
                        class="mr-2 hover:text-primary-500"
                    >
                        <iconify-icon width="15" :icon="icons.mail" />
                    </a>
                    <a
                        :href="`tel:${$page.user.phone || ''}`"
                        title="Phone"
                        class="hover:text-primary-500"
                    >
                        <iconify-icon width="15" :icon="icons.phone" />
                    </a>
                </profile-card>
            </div>
            <div class="w-full">
                <div
                    class="w-full md:flex-grow px-2 py-8 md:p-12 mb-5 rounded-md bg-white shadow-sm reveal-left"
                    style="--delay: 0.3s"
                >
                    <h2 class="text-lg text-gray-800 font-bold py-2">
                        Profile
                    </h2>
                    <tabs :tabs="tabs" defaultActiveTab="identity">
                        <template v-slot:tab-body-identity>
                            <identity-tab
                                :user="$page.user"
                                :canEdit="false"
                                @updateProfile="showUpdateView('identity')"
                            ></identity-tab>
                        </template>
                        <template v-slot:tab-body-medicals>
                            <medicals-tab
                                :user="$page.user"
                                :canEdit="false"
                                @updateProfile="showUpdateView('medicals')"
                            ></medicals-tab>
                        </template>
                        <template v-slot:tab-body-social>
                            <social-tab
                                :user="$page.user"
                                :canEdit="false"
                                @updateProfile="showUpdateView('social')"
                            ></social-tab>
                        </template>
                        <template v-slot:tab-body-emergency>
                            <emergency-tab
                                :user="$page.user"
                                :canEdit="false"
                                @updateProfile="showUpdateView('emergency')"
                            ></emergency-tab>
                        </template>
                        <template v-slot:tab-body-persona>
                            <persona-tab
                                :user="$page.user"
                                :canEdit="false"
                                @updateProfile="showUpdateView('persona')"
                            ></persona-tab>
                        </template>
                        <template v-slot:tab-body-travel>
                            <travel-tab
                                :user="$page.user"
                                :canEdit="false"
                                @updateProfile="showUpdateView('travel')"
                            ></travel-tab>
                        </template>
                    </tabs>
                </div>
                <div
                    class="w-full md:flex-grow px-2 py-8 md:p-12 mb-5 rounded-md bg-white shadow-sm reveal-left"
                    style="--delay: 0.3s"
                >
                    <h2 class="text-lg text-gray-800 font-bold py-2">
                        Competition Information
                    </h2>
                    <form
                        action=""
                        @submit="updateCompetitionInfo()"
                        id="update_comp_info"
                    ></form>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 col-gap-5 row-gap-8"
                    >
                        <div class="col-span-1 md:col-span-2">
                            <text-input
                                v-model="competition.position"
                                :error="$page.errors.position || ''"
                                type="number"
                                form="update_comp_info"
                                label="Contestant position"
                            >
                                <span class="italic text-gray-500 text-xs"
                                    >Optional</span
                                >
                            </text-input>
                        </div>
                        <select-input
                            :value="competition.competition_id"
                            v-model="competition.competition_id"
                            form="update_comp_info"
                            label="Competition year"
                            :error="$page.errors.competition_id || ''"
                        >
                            <option value="">Select year</option>
                            <option
                                v-for="(year, index) in $page.competitions"
                                :key="index"
                                :value="year.id"
                            >
                                {{ year.year }}
                            </option>
                        </select-input>
                        <select-input
                            :value="competition.profile_stage"
                            v-model="competition.profile_stage"
                            form="update_comp_info"
                            label="Profile stage"
                            :error="$page.errors.profile_stage || ''"
                        >
                            <option value="payment">Payment</option>
                            <option value="audition">Audition</option>
                            <option value="finals">Finals</option>
                        </select-input>
                        <div class="col-span-1 md:col-span-2">
                            <switch-input
                                :error="$page.errors.has_paid || ''"
                                v-model="competition.has_paid"
                                label="Contestant has paid"
                            />
                        </div>
                        <div class="col-span-1 md:col-span-2">
                            <primary-btn
                                width="w-full"
                                type="submit"
                                :loading="loading"
                                form="update_comp_info"
                                >Update info</primary-btn
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Layout from "../../Layout/Layout";
import twitter from "@iconify/icons-feather/twitter";
import facebook from "@iconify/icons-feather/facebook";
import mail from "@iconify/icons-feather/mail";
import phone from "@iconify/icons-feather/phone-call";
export default {
    name: "ShowUsers",
    layout: Layout,
    watch: {
        $page: {
            handler() {
                this.loading = false;
            },
            deep: true,
        },
    },
    data() {
        return {
            loading: false,
            tabs: [
                "identity",
                "medicals",
                "social",
                "emergency",
                "persona",
                "travel",
            ],
            icons: {
                twitter,
                facebook,
                mail,
                phone,
            },
            biodata: {
                first_name: this.$page.user.first_name || "",
                last_name: this.$page.user.last_name || "",
                email: this.$page.user.email,
            },
            social: {
                facebook_url: this.$page.user.facebook_url,
                twitter_url: this.$page.user.twitter_url,
                phone_number: this.$page.user.phone_number,
            },
            competition: {
                position: 0,
                competition_id: 1,
                profile_stage: "payment",
                has_paid: false,
            },
            userRole: "",
        };
    },
    methods: {
        updateCompetionInfo() {},
    },
    components: {
        ProfileCard: () =>
            import(
                /* webpackChunkName: "user_list_comps" */ "../../components/ProfileCard2"
            ),
        IdentityTab: () =>
            import(
                /* webpackChunkName: "profile_comps" */ "../Profile/Tabs/Identity"
            ),
        MedicalsTab: () =>
            import(
                /* webpackChunkName: "profile_comps" */ "../Profile/Tabs/Medicals"
            ),
        EmergencyTab: () =>
            import(
                /* webpackChunkName: "profile_comps" */ "../Profile/Tabs/Emergency"
            ),
        SocialTab: () =>
            import(
                /* webpackChunkName: "profile_comps" */ "../Profile/Tabs/Social"
            ),
        TravelTab: () =>
            import(
                /* webpackChunkName: "profile_comps" */ "../Profile/Tabs/Travel"
            ),
        PersonaTab: () =>
            import(
                /* webpackChunkName: "profile_comps" */ "../Profile/Tabs/Persona"
            ),
    },
    mounted() {},
};
</script>

<style></style>
