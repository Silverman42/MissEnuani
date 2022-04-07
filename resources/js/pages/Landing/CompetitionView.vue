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
                        Life church, Idumu-Ogbo <br />
                        Asaba <br />
                        Delta State
                    </p>
                </div>
                <div class="py-5">
                    <span
                        class="inline-block text-gray-500 uppercase tracking-widest text-xs"
                    >
                        Date
                    </span>
                    <p class="mt-3 text-gray-300">20th December 2019</p>
                </div>
            </div>
            <div class="w-full md:w-6/12">
                <img
                    :src="`${$page.auth.settings.app_url}/assets/img/hero.jpg`"
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
                    class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-4"
                >
                    <inertia-link
                        v-for="(count, index) in 12"
                        :key="index"
                        :href="
                            $route.relativePath('landing.one_contestant', 10001)
                        "
                        class="border border-gray-500 hover:shadow-lg hover:border-yellow-600 p-3 py-8 flex flex-col items-center"
                    >
                        <img
                            :src="``"
                            class="w-full h-32 mb-3 object-cover object-center bg-gray-400"
                            alt="crown"
                        />
                        <p
                            class="text-center text-lg uppercase tracking-wider text-gray-800"
                        >
                            NGOZI <br />
                            VERONICA
                        </p>
                        <p
                            class="text-center text-primary-700 text-xs uppercase font-bold"
                        >
                            MISS ISSELE-UKu
                        </p>
                    </inertia-link>
                </div>
                <div class="mt-8">
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
        </section>
    </div>
</template>

<script>
import Layout from "../../Layout/Landing.vue";
export default {
    layout: Layout,
    name: "CompetitionView",
};
</script>

<style></style>
