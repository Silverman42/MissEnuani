<template>
    <div>
        <section
            class="mt-16 px-5 py-10 shadow-offset shadow-offset_yellow bg-primary-800"
        >
            <span
                class="inline-block text-gray-500 uppercase tracking-widest text-xs"
            >
                Competitions
            </span>
            <h1 class="text-3xl md:text-6xl text-white secondary-font">
                All beauty pageants <br />
                till present
            </h1>
        </section>

        <div
            v-if="$page.competitions.data.length > 0"
            class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-5 mt-16"
        >
            <inertia-link
                v-for="(competition, index) in $page.competitions.data"
                :key="index"
                :href="
                    $route.relativePath(
                        'landing.competition_view',
                        competition.id
                    )
                "
                class="border border-gray-500 hover:shadow-lg hover:border-yellow-600 p-3 py-8 flex flex-col items-center"
            >
                <img
                    :src="`${$page.auth.settings.app_url}/assets/img/crown.png`"
                    class="w-12 mb-4"
                    alt="crown"
                />
                <p
                    class="text-center text-sm uppercase tracking-wider text-gray-800"
                >
                    Miss Enuani Beauty Pageant
                </p>
                <p class="text-center text-primary-700 text-xl font-bold">
                    {{ competition.year }}
                </p>
            </inertia-link>
        </div>
        <div v-else class="text-center">
            <h1 class="text-lg text-primary-600">No competition found</h1>
            <p class="text-gray-600 text-xs">Please check again</p>
        </div>
        <div class="mt-16" v-if="$page.competitions.data.length > 0">
            <div class="mx-auto flex justify-between w-56">
                <a
                    :href="$page.competitions.prev_page_url || '#'"
                    class="bg-gray-800 p-4 py-2 text-white inline-block hover:text-yellow-500"
                >
                    Previous
                </a>
                <a
                    v-if="
                        $page.competitions.from !==
                        $page.competitions.current_page
                    "
                    :href="$page.competitions.first_page_url || '#'"
                    class="p-4 py-2 inline-block border border-transparent hover:border-gray-600"
                >
                    {{ $page.competitions.from }}
                </a>
                <div
                    v-if="
                        $page.competitions.from !==
                        $page.competitions.current_page
                    "
                    class="p-4 py-2 border border-transparent hover:border-gray-600"
                >
                    ...
                </div>
                <div
                    class="p-4 py-2 border border-transparent hover:border-gray-600"
                >
                    {{ $page.competitions.current_page }}
                </div>

                <div
                    v-if="
                        $page.competitions.last_page !==
                        $page.competitions.current_page
                    "
                    class="p-4 py-2 border border-transparent hover:border-gray-600"
                >
                    ...
                </div>
                <a
                    v-if="
                        $page.competitions.last_page !==
                        $page.competitions.current_page
                    "
                    :href="$page.competitions.last_page_url || '#'"
                    class="p-4 py-2 inline-block border border-transparent hover:border-gray-600"
                >
                    {{ $page.competitions.last_page }}
                </a>
                <a
                    :href="$page.competitions.next_page_url || '#'"
                    class="bg-gray-800 p-4 py-2 text-white hover:text-yellow-500"
                >
                    Next
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Layout from "../../Layout/Landing.vue";
export default {
    layout: Layout,
    name: "CompetitionList",
    mounted() {},
};
</script>

<style></style>
