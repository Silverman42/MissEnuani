<template>
    <div>
        <section
            class="mt-16 px-5 md:px-0 py-10 shadow-offset shadow-offset_yellow flex flex-wrap justify-around items-center bg-primary-800"
        >
            <div class="w-full md:w-4/12 mb-10 md:mb-0">
                <h1 class="text-3xl md:text-6xl secondary-font text-white">
                    Miss Enuani Beauty Pageant <br />
                    <span class="text-yellow-500">2022</span>
                </h1>
                <div class="py-5">
                    <span
                        class="inline-block text-gray-500 uppercase tracking-widest text-xs"
                    >
                        Venue
                    </span>
                    <p class="mt-3 text-gray-300">
                        {{ $page.competition.venue || "To be relesed soon" }}
                    </p>
                </div>
                <div class="py-5">
                    <span
                        class="inline-block text-gray-500 uppercase tracking-widest text-xs"
                    >
                        Event Date
                    </span>
                    <p class="mt-3 text-gray-300">
                        {{ $page.competition.event_date || "Coming Soon" }}
                    </p>
                </div>
                <div
                    class="py-5"
                    v-if="$page.competition.has_expired === false"
                >
                    <a
                        href="/register"
                        class="inline-block uppercase tracking-widest py-4 px-8 text-md leading-3 text-sm bg-yellow-400 hover:bg-yellow-600 text-black mt-4"
                    >
                        Register now
                    </a>
                </div>
            </div>
            <div class="w-full md:w-6/12">
                <img
                    :src="`${$page.auth.settings.app_url}/assets/img/home_5.jpg`"
                    class="w-full"
                    alt=""
                />
            </div>
        </section>
        <section class="mt-16 flex flex-wrap justify-between">
            <div class="w-full lg:w-4/12 mb-5">
                <span
                    class="inline-block text-gray-800 uppercase tracking-widest text-sm"
                >
                    Pageant finalists
                </span>
                <h2 class="text-3xl md:text-6xl secondary-font text-gray-900">
                    Enuani beauty queens
                </h2>
            </div>
            <div class="w-full lg:w-8/12">
                <div
                    v-if="$page.contestants.data.length > 0"
                    class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-4"
                >
                    <inertia-link
                        v-for="(contestant, index) in $page.contestants.data"
                        :key="index"
                        :href="
                            $route.relativePath(
                                'landing.one_contestant',
                                contestant.id
                            )
                        "
                        class="border border-gray-500 hover:shadow-lg hover:border-yellow-600 p-3 py-8 flex flex-col items-center"
                    >
                        <img
                            :src="contestant.avatar"
                            class="w-full h-32 mb-3 object-cover object-center bg-gray-400"
                            alt="crown"
                        />
                        <p
                            class="text-center text-lg uppercase tracking-wider text-gray-800"
                        >
                            {{ contestant.first_name }} <br />
                            {{ contestant.last_name }}
                        </p>
                        <p
                            class="text-center text-primary-700 text-xs uppercase font-bold"
                        >
                            MISS {{ contestant.town }}
                        </p>
                    </inertia-link>
                </div>
                <div v-else class="text-center py-6 px-3">
                    <h1 class="text-lg text-primary-600">No finalist found</h1>
                    <p class="text-gray-600 text-xs">
                        No contestant finalist chosen at the moment, Please
                        check again
                    </p>
                </div>
                <div class="mt-8" v-if="$page.contestants.data.length > 0">
                    <div class="mx-auto flex justify-between w-56">
                        <a
                            :href="$page.contestants.prev_page_url || '#'"
                            class="bg-gray-800 p-4 py-2 text-white inline-block hover:text-yellow-500"
                        >
                            Previous
                        </a>
                        <a
                            v-if="
                                $page.contestants.from !==
                                $page.contestants.current_page
                            "
                            :href="$page.contestants.first_page_url || '#'"
                            class="p-4 py-2 inline-block border border-transparent hover:border-gray-600"
                        >
                            {{ $page.contestants.from }}
                        </a>
                        <div
                            v-if="
                                $page.contestants.from !==
                                $page.contestants.current_page
                            "
                            class="p-4 py-2 border border-transparent hover:border-gray-600"
                        >
                            ...
                        </div>
                        <div
                            class="p-4 py-2 border border-transparent hover:border-gray-600"
                        >
                            {{ $page.contestants.current_page }}
                        </div>

                        <div
                            v-if="
                                $page.contestants.last_page !==
                                $page.contestants.current_page
                            "
                            class="p-4 py-2 border border-transparent hover:border-gray-600"
                        >
                            ...
                        </div>
                        <a
                            v-if="
                                $page.contestants.last_page !==
                                $page.contestants.current_page
                            "
                            :href="$page.contestants.last_page_url || '#'"
                            class="p-4 py-2 inline-block border border-transparent hover:border-gray-600"
                        >
                            {{ $page.contestants.last_page }}
                        </a>
                        <a
                            :href="$page.contestants.next_page_url || '#'"
                            class="bg-gray-800 p-4 py-2 text-white hover:text-yellow-500"
                        >
                            Next
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Layout from "../../Layout/Landing.vue";
export default {
    layout: Layout,
    name: "CompetitionView",
    mounted() {
        console.log(this.$page.competition);
    },
};
</script>

<style></style>
