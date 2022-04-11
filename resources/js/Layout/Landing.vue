<template>
    <div class="relative font-sans">
        <div
            class="absolute w-64 h-64 bg-yellow-300 rounded-full opacity-60"
            style="filter: blur(3.5rem); z-index: -50px; right: 0; top: -20px"
        ></div>
        <div
            class="absolute w-64 h-64 bg-primary-300 rounded-full opacity-60"
            style="filter: blur(3.5rem); z-index: -50px; left: 0; top: -20px"
        ></div>
        <div
            class="absolute w-40 h-40 bg-yellow-300 rounded-full"
            style="filter: blur(3.5rem); z-index: -5px; right: 0; bottom: 20px"
        ></div>
        <div
            class="absolute w-40 h-40 bg-primary-300 rounded-full"
            style="filter: blur(3.5rem); z-index: -5px; left: 0; bottom: 20px"
        ></div>
        <header class="w-full px-5 z-10 relative">
            <div
                class="mx-auto max-w-7xl py-5 flex flex-wrap lg:flex-no-wrap flex-col items-center lg:flex-row justify-between"
            >
                <inertia-link href="/" class="block w-16">
                    <img
                        :src="`${$page.auth.settings.app_url}/assets/img/app_logo.png`"
                        alt="logo"
                        class="w-14"
                    />
                </inertia-link>
                <nav
                    class="inline-flex justify-end items-center overflow-x-auto lg:overflow-visible"
                >
                    <inertia-link
                        class="inline-block text-black hover:text-yellow-500 font-medium"
                        href="/"
                        >Home</inertia-link
                    >
                    <inertia-link
                        class="inline-block ml-6 text-black hover:text-yellow-500 font-medium"
                        href="/competitions"
                        >Competitions</inertia-link
                    >
                    <a
                        class="inline-block ml-6 text-black hover:text-yellow-500 font-medium"
                        href="#"
                        >About</a
                    >
                    <a
                        class="inline-block ml-6 text-black hover:text-yellow-500 font-medium"
                        href="/login"
                        >Login</a
                    >
                    <a
                        class="inline-block ml-6 py-3 px-4 bg-primary-500 text-white hover:bg-primary-700 font-medium"
                        href="/register"
                        >Register</a
                    >
                </nav>
            </div>
        </header>
        <div class="max-w-7xl mx-auto px-5 lg:px-10">
            <slot />
            <section
                class="mt-16 px-5 md:px-0 py-10 flex shadow-offset shadow-offset_black flex-wrap justify-around items-center bg-yellow-500"
            >
                <div class="w-full md:w-4/12 mb-5 md:mb-0">
                    <h2 class="text-3xl md:text-6xl secondary-font text-black">
                        Join our Newsletter
                    </h2>
                </div>
                <div class="w-full md:w-6/12">
                    <form action="" method="post">
                        <div
                            class="p-3 border flex justify-between items-stretch flex-wrap border-gray-900"
                        >
                            <input
                                type="text"
                                class="outline-none flex-grow mr-3 mb-5 bg-transparent text-black text-lg placeholder-black"
                                placeholder="You@mail.com"
                            />
                            <button
                                type="button"
                                class="inline-block w-full md:w-auto uppercase tracking-widest py-4 px-8 text-md leading-3 text-sm bg-gray-800 hover:bg-black text-yellow-300"
                            >
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <footer
                class="mt-16 py-10 grid md:grid-cols-3 grid-cols-1 space-y-5 md:space-x-5 relative"
            >
                <div class="mb-10 flex">
                    <div class="w-10 h-10">
                        <img
                            class="w-full"
                            :src="`${$page.auth.settings.app_url}/assets/img/app_logo.png`"
                            alt="logo"
                        />
                    </div>
                    <div class="ml-3">
                        <p>
                            Miss Enuani Beauty <br />
                            Peagent
                        </p>
                        <span class="text-xs text-gray-500">{{
                            getYear()
                        }}</span>
                    </div>
                </div>
                <div class="mb-10">
                    <h2
                        class="tracking-widest text-xs uppercase font-bold text-black"
                    >
                        LEGAL
                    </h2>
                    <div class="flex flex-wrap mt-5">
                        <a
                            href=""
                            class="inline-block mr-5 mb-5 text-sm uppercase"
                            >Privacy Policy</a
                        >
                        <a
                            href=""
                            class="inline-block mr-5 mb-5 text-sm uppercase"
                            >Terms and Condition</a
                        >
                    </div>
                </div>
                <div class="mb-10">
                    <h2
                        class="tracking-widest text-xs uppercase font-bold text-black"
                    >
                        SOCIAL
                    </h2>
                    <div class="flex flex-wrap mt-5">
                        <a
                            href="https://web.facebook.com/Missenuanibeautypagaent"
                            target="_blank"
                            class="inline-block mr-5 mb-5 text-sm uppercase"
                            >Facebook</a
                        >
                        <a
                            href="https://twitter.com/MissEnuani"
                            target="_blank"
                            class="inline-block mr-5 mb-5 text-sm uppercase"
                            >Twitter</a
                        >
                        <a
                            href="https://instagram.com/missenuanibeautypageant"
                            target="_blank"
                            class="inline-block mr-5 mb-5 text-sm uppercase"
                            >Instagram</a
                        >
                        <a
                            href="https://wa.me/2347054520815"
                            target="_blank"
                            class="inline-block mr-5 mb-5 text-sm uppercase"
                            >Whatsapp</a
                        >
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getYear() {
            var date = new Date();
            return date.getFullYear();
        },
    },
};
</script>

<style>
.font-sans {
    font-family: "Source Sans Pro", sans-serif;
}
.secondary-font {
    font-family: "Montserrat", sans-serif;
}
.shadow-offset {
    position: relative;
}

.shadow-offset_black::before,
.shadow-offset_yellow::before,
.shadow-offset_bg-image::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -100;
    top: 10px;
    left: -10px;
}
.shadow-offset_black::before {
    @apply bg-primary-800;
}
.shadow-offset_yellow::before {
    background: #fcd34d;
}
.shadow-offset_bg-image::before {
    background: url();
}
</style>
