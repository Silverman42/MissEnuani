<template>
    <div class="border-4 min-h-screen px-4 bg-gray-100 border-primary-500">
        <div
            class="max-w-xl my-5 mt-20 py-8 px-5 bg-white rounded-md shadow-lg mx-auto"
        >
            <a
                href="/"
                class="inline-flex mx-auto items-center mb-5 w-auto rounded-md border border-primaryBg-400 p-2"
            >
                <img class="w-10" :src="$page.auth.settings.auth_logo" alt="" />
                <p class="ml-3 text-black font-bold capitalize">
                    {{ $page.auth.settings.app_name }}
                </p>
            </a>
            <h1 class="text-2xl md:text-4xl font-bold mb-4">{{ title }}</h1>
            <div class="text-sm mb-6">{{ description }}</div>
            <div>
                <a
                    :href="previous_url"
                    class="py-2 px-4 rounded-lg text-black bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-700"
                    >Go back to previous page</a
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        status: Number,
        previous_url: String,
    },
    computed: {
        title() {
            return {
                503: "Website on maintenance mode",
                500: "Server Error",
                404: "Page Not Found",
                403: "Forbidden",
            }[this.status];
        },
        description() {
            return {
                503: "Sorry, we are doing some maintenance. Please check back soon.",
                500: "Whoops, something went wrong on our servers.",
                404: "Sorry, the page you are looking for could not be found.",
                403: "Sorry, you are forbidden from accessing this page.",
            }[this.status];
        },
    },
};
</script>
