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

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-5 mt-16">
            <inertia-link
                v-for="(count, index) in 20"
                :key="index"
                :href="$route.relativePath('landing.competition_view', 10001)"
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
                    2022
                </p>
            </inertia-link>
        </div>
        <div class="mt-16">
            <div class="mx-auto flex justify-between w-56">
                <button
                    class="bg-gray-800 p-4 py-2 text-white hover:text-yellow-500"
                >
                    Previous
                </button>
                <div
                    class="p-4 py-2 border border-transparent hover:border-gray-600"
                >
                    1
                </div>
                <div
                    class="p-4 py-2 border border-transparent hover:border-gray-600"
                >
                    2
                </div>
                <button
                    class="bg-gray-800 p-4 py-2 text-white hover:text-yellow-500"
                >
                    Next
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Layout from "../../Layout/Landing.vue";
export default {
    layout: Layout,
    name: "CompetitionList",
};
</script>

<style></style>
