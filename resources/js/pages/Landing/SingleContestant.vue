<template>
    <div>
        <!-- Create User Modal Start -->
        <modal :isOpen.sync="modalIsOpen">
            <div class="mb-10 reveal-left" style="--delay: 0.1s">
                <h3 class="text-lg font-extrabold">Vote for Ngozi</h3>
                <p class="text-sm">Each vote cost #100</p>
            </div>
            <form id="create-vote"></form>
            <div class="mb-2">
                <text-input
                    type="number"
                    form="create-vote"
                    :error="$page.errors.vote_count || ''"
                    v-model="vote_count"
                    label="Vote count"
                />
            </div>
            <div class="my-10">
                <primary-btn
                    width="w-full"
                    type="submit"
                    :loading="loading"
                    form="create-vote"
                    >Make vote</primary-btn
                >
            </div>
        </modal>
        <!--Create User Modal end-->
        <section
            class="mt-16 px-5 md:px-0 py-10 shadow-offset shadow-offset_yellow flex flex-wrap justify-around items-center bg-primary-800"
        >
            <div class="w-full md:w-4/12 mb-10 md:mb-0">
                <h1 class="text-3xl md:text-6xl secondary-font text-white">
                    {{ $page.contestant.first_name }} <br />
                    {{ $page.contestant.last_name }} <br />
                    <span
                        class="inline-block text-yellow-500 uppercase tracking-widest text-lg"
                    >
                        MISS {{ $page.contestant.town }}
                    </span>
                </h1>
                <div class="py-5">
                    <span
                        class="inline-block text-gray-500 uppercase tracking-widest text-xs"
                    >
                        About me
                    </span>
                    <p class="mt-3 text-gray-300">
                        {{ $page.contestant.bio || "No bio found" }}
                    </p>
                </div>
                <div
                    v-if="$page.contestant.profile_stage === 'finals'"
                    class="py-5"
                >
                    <span
                        class="inline-block text-gray-500 uppercase tracking-widest text-xs"
                    >
                        Position
                    </span>
                    <p class="mt-3 text-gray-300">
                        {{ $page.contestant.position }}
                    </p>
                </div>
                <!-- <div class="py-5">
                    <button
                        v-if="$page.contestant.profile_stage === 'audition'"
                        @click="openModal"
                        class="inline-block uppercase tracking-widest py-4 px-8 text-md leading-3 text-sm bg-yellow-400 hover:bg-yellow-600 text-black mt-4"
                    >
                        Vote for me
                    </button>
                </div> -->
                <div class="py-5">
                    <button
                        v-if="$page.contestant.profile_stage === 'audition'"
                        class="inline-block uppercase tracking-widest py-4 px-8 text-md leading-3 text-sm bg-yellow-400 hover:bg-yellow-600 text-black mt-4"
                    >
                        Voting starts soon !!
                    </button>
                </div>
            </div>
            <div class="w-full md:w-6/12">
                <img :src="$page.contestant.avatar" class="w-full" alt="" />
            </div>
        </section>
        <section
            class="mt-16 py-10 px-5 bg-white border border-primary-500 shadow-xl grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
            <div>
                <span
                    class="inline-block text-gray-800 uppercase tracking-widest text-sm"
                >
                    Height
                </span>
                <p class="text-gray-900 text-lg">
                    {{ $page.contestant.height }}ft
                </p>
            </div>
            <div>
                <span
                    class="inline-block text-gray-800 uppercase tracking-widest text-sm"
                >
                    Hobbies
                </span>
                <p class="text-gray-900 text-lg">
                    {{ $page.contestant.hobbies }}
                </p>
            </div>
            <div>
                <span
                    class="inline-block text-gray-800 uppercase tracking-widest text-sm"
                >
                    Profession
                </span>
                <p class="text-gray-900 text-lg">
                    {{ $page.contestant.profession }}
                </p>
            </div>
            <div>
                <span
                    class="inline-block text-gray-800 uppercase tracking-widest text-sm"
                >
                    Facebook handle
                </span>
                <p class="text-gray-900 text-lg">
                    {{ $page.contestant.facebook_url }}
                </p>
            </div>
            <div>
                <span
                    class="inline-block text-gray-800 uppercase tracking-widest text-sm"
                >
                    Instagram handle
                </span>
                <p class="text-gray-900 text-lg">
                    {{ $page.contestant.instagram_url }}
                </p>
            </div>
            <div>
                <span
                    class="inline-block text-gray-800 uppercase tracking-widest text-sm"
                >
                    Twitter handle
                </span>
                <p class="text-gray-900 text-lg">
                    {{ $page.contestant.twitter_url }}
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import Layout from "../../Layout/Landing.vue";
export default {
    layout: Layout,
    name: "SingleContestant",
    components: {
        Modal: () =>
            import(
                /* webpackChunkName: "user_page" */ "../../components/Modal"
            ),
    },
    data() {
        return {
            loading: false,
            modalIsOpen: false,
        };
    },
    methods: {
        openModal() {
            this.modalIsOpen = true;
        },
    },
};
</script>

<style></style>
