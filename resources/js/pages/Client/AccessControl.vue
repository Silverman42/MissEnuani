<template>
    <div>
        <section class="mb-10">
            <title-board
                boardTitle="Access Control"
                boardText="Update password and logout"
                :hostName="$page.auth.settings.app_url"
                boardImgLink="img/board_img/user.svg"
            >
            </title-board>
        </section>
        <section class="flex flex-wrap md:flex-no-wrap justify-between">
            <div class="w-full mb-10 md:w-3/12 md:mr-10">
                <profile-card
                    :firstName="$page.user.first_name || ''"
                    :lastName="$page.user.last_name || ''"
                    :avatar="$page.user.avatar || ''"
                    :active="$page.user.is_active == 1 ? true : false"
                >
                    <a
                        :href="$page.user.twitter_url || '#'"
                        title="Twitter"
                        class="mr-2 hover:text-primary-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <iconify-icon width="15" :icon="icons.twitter" />
                    </a>
                    <a
                        :href="$page.user.facebook_url || '#'"
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
                        :href="`tel:${$page.user.phone_number || ''}`"
                        title="Phone"
                        class="hover:text-primary-500"
                    >
                        <iconify-icon width="15" :icon="icons.phone" />
                    </a>
                </profile-card>
            </div>
            <div class="w-full md:flex-grow" style="--delay: 0.3s">
                <card-bg extend="mb-10">
                    <div class="mb-6">
                        <h3 class="text-lg font-bold">Update Password</h3>
                        <p class="text-sm">Change your password</p>
                    </div>
                    <div class="mb-6">
                        <form
                            @submit.prevent="updatePassword"
                            id="update-password"
                        ></form>
                        <div class="mb-3">
                            <text-input
                                type="password"
                                label="Old password"
                                :error="$page.errors.old_password || ''"
                                v-model="old_password"
                                form="update-password"
                            ></text-input>
                        </div>
                        <div class="mb-3">
                            <text-input
                                type="password"
                                label="New password"
                                :error="$page.errors.new_password || ''"
                                v-model="new_password"
                                form="update-password"
                            ></text-input>
                        </div>
                        <div class="mb-8">
                            <text-input
                                type="password"
                                label="Confirm new password"
                                :error="
                                    $page.errors.new_password_confirmation || ''
                                "
                                v-model="new_password_confirmation"
                                form="update-password"
                            ></text-input>
                        </div>
                        <div>
                            <primary-btn
                                type="submit"
                                form="update-password"
                                width="w-full"
                                fontColor="text-black"
                                color="yellow"
                                >Update Password
                            </primary-btn>
                        </div>
                    </div>
                </card-bg>
                <card-bg extend="mb-10">
                    <div class="mb-6">
                        <h3 class="text-lg font-bold">Logout</h3>
                        <p class="text-sm">Logout from your account</p>
                    </div>
                    <form
                        method="POST"
                        :action="$route.url('logout')"
                        ref="logout_form"
                    >
                        <input
                            type="hidden"
                            name="_token"
                            :value="$page.auth.csrf_token"
                        />
                    </form>
                    <primary-btn
                        type="submit"
                        color="red"
                        fontColor="text-white"
                        width="w-full"
                        @click="logout"
                        >Logout
                    </primary-btn>
                </card-bg>
            </div>
        </section>
    </div>
</template>

<script>
import Layout from "../../Layout/ClientLayout";
import twitter from "@iconify/icons-feather/twitter";
import facebook from "@iconify/icons-feather/facebook";
import mail from "@iconify/icons-feather/mail";
import phone from "@iconify/icons-feather/phone-call";
export default {
    name: "AccessControl",
    layout: Layout,
    data() {
        return {
            icons: {
                twitter,
                facebook,
                mail,
                phone,
            },
            new_password_confirmation: "",
            old_password: "",
            new_password: "",
        };
    },
    components: {
        ProfileCard: () =>
            import(
                /* webpackChunkName: "user_list_comps" */ "../../components/ProfileCard2"
            ),
    },
    methods: {
        logout() {
            if (confirm("Are you sure you want to logout") === true) {
                this.$refs.logout_form.submit();
            }
        },
        updatePassword() {
            const form = new FormData();
            form.append("new_password", this.new_password);
            form.append(
                "new_password_confirmation",
                this.new_password_confirmation
            );
            form.append("old_password", this.old_password);
            this.$inertia.post(
                this.$route.relativePath("client.ac_password_change"),
                form
            );
        },
    },
};
</script>

<style></style>
