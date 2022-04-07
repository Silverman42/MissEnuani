<template>
    <div>
        <section
            class="mt-16 px-5 md:px-0 py-10 shadow-offset shadow-offset_yellow flex flex-wrap justify-around items-center bg-primary-800"
        >
            <div class="w-full md:w-4/12 mb-10 md:mb-0">
                <h1 class="text-3xl md:text-6xl secondary-font text-white">
                    Beauty, Hardwork and Virtue
                </h1>
                <p class="mt-10 text-gray-300">
                    The Miss May Day Beauty Peagent is a celebration of elegance
                    and commitment to human development made possible by
                    humanitarians from all works of life
                </p>
                <a
                    href="/register"
                    class="inline-block uppercase tracking-widest py-4 px-8 text-md leading-3 text-sm bg-yellow-400 hover:bg-yellow-600 text-black mt-4"
                >
                    Sign Up today
                </a>
            </div>
            <div class="w-full md:w-6/12">
                <img
                    :src="`${$page.auth.settings.app_url}/assets/img/hero.jpg`"
                    class="w-full"
                    alt=""
                />
            </div>
        </section>
        <section
            class="mt-16 py-10 flex flex-wrap justify-between items-center"
        >
            <div class="w-full md:w-5/12 mb-5 md:mb-0">
                <span class="inline-block tracking-widest text-xs"
                    >ABOUT MMDBP</span
                >
                <h1 class="text-3xl md:text-6xl text-gray-900 secondary-font">
                    Discovers and Empower Young Ladies
                </h1>
                <p class="mt-10 text-gray-700">
                    <span class="text-black"
                        >The Miss May Day Beauty Peagent</span
                    >
                    is designed to celebrate workers across the globe while
                    providing a platform that discovers , encourage and empower
                    young ladies to empower others from different nations
                    towards noble attainments/achievements through diligence and
                    hard work.
                </p>
            </div>
            <div class="w-full md:w-6/12 shadow-offset shadow-offset_yellow">
                <img
                    :src="`${$page.auth.settings.app_url}/assets/img/about.jpg`"
                    class="w-full"
                    alt=""
                />
            </div>
        </section>
        <section
            class="mt-16 py-10 flex flex-wrap justify-between items-center"
        >
            <div
                class="w-full md:w-6/12 mb-10 shadow-offset shadow-offset_yellow"
            >
                <img
                    :src="`${$page.auth.settings.app_url}/assets/img/events.jpg`"
                    class="w-full inline-block shadow-offset shadow-offset_yellow"
                    alt="events"
                />
            </div>
            <div class="w-full md:w-5/12 mb-5 md:mb-0">
                <span class="inline-block tracking-widest text-xs"
                    >THE EVENT</span
                >
                <h2
                    class="text-3xl text-gray-900 font-medium md:text-6xl secondary-font"
                >
                    A Two Part Memorable Event
                </h2>
                <p class="mt-10 text-gray-700">
                    The MMDBP show is a two part event that consist of the
                    beauty peagent show and an award night. Both events occur on
                    the
                    <span class="text-gray-800">1st day of May every year</span>
                </p>
                <div class="mt-10 grid grid-cols-1 md:grid-cols-2 col-gap-4">
                    <div class="mb-5 md:mb-0">
                        <span
                            class="inline-flex justify-center items-center mb-3 w-10 h-10 rounded-full bg-yellow-500"
                        >
                            <img
                                :src="`${$page.auth.settings.app_url}/assets/img/crown.svg`"
                                class="w-5 h-auto"
                                alt=""
                            />
                        </span>
                        <h3 class="text-xl text-gray-900 font-medium mb-3">
                            The Beauty Peagent
                        </h3>
                        <p class="text-gray-700">
                            MMDI has been designed to be a 6day event. A
                            compulsory 5 days camping for contestants, in which
                            they are made to engaged in numerous activities
                            culminating on the Grand finale which is on the 6th
                            and final day of the event
                            <span class="text-black"
                                >(1st of May Annually)</span
                            >
                        </p>
                    </div>
                    <div>
                        <span
                            class="inline-flex justify-center items-center mb-3 w-10 h-10 rounded-full bg-yellow-500"
                        >
                            <img
                                :src="`${$page.auth.settings.app_url}/assets/img/trophy.svg`"
                                class="w-5 h-auto"
                                alt=""
                            />
                        </span>
                        <h3 class="text-xl text-gray-900 font-medium mb-3">
                            Labor Excellence Award
                        </h3>
                        <p class="text-gray-700">
                            Labor Excellence Award will be celebrated on the 1st
                            of May annually, being International workers’ day
                            Celebration. It will be a single gathering where
                            diligence and hard work is celebrated in all sectors
                            of the economy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-16 py-10">
            <div class="mb-10">
                <span class="inline-block tracking-widest text-xs uppercase"
                    >Registration</span
                >
                <h2 class="text-3xl font-medium md:text-6xl secondary-font">
                    Become a Contestant with <br />
                    these simple steps
                </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 col-gap-6">
                <div class="mb-10">
                    <span
                        class="inline-flex justify-center items-center mb-3 w-10 h-10 rounded-full bg-primary-800 text-white"
                    >
                        1
                    </span>
                    <h3 class="text-xl font-medium text-gray-900 mb-3">
                        Register Account
                    </h3>
                    <p class="text-gray-700">
                        Fill in your full name, email and password in the
                        registration page. <br />
                        Click
                        <a class="text-black hover:text-yellow-500" href="#"
                            >here</a
                        >
                        to begin registration
                    </p>
                </div>
                <div class="mb-10">
                    <span
                        class="inline-flex justify-center items-center mb-3 w-10 h-10 rounded-full bg-primary-800 text-white"
                    >
                        2
                    </span>
                    <h3 class="text-xl text-gray-900 font-medium mb-3">
                        Verify your account
                    </h3>
                    <p class="text-gray-700">
                        After registration, a mail will be sent to your email.
                        Click the link contained in the mail to verify your
                        account
                    </p>
                </div>
                <div class="mb-10">
                    <span
                        class="inline-flex justify-center items-center mb-3 w-10 h-10 rounded-full bg-primary-800 text-white"
                    >
                        3
                    </span>
                    <h3 class="text-xl text-gray-900 font-medium mb-3">
                        Pay Registration Fee
                    </h3>
                    <p class="text-gray-700">
                        On your dashboard, enter your nationality and click on
                        the 'make payment' button
                    </p>
                </div>
                <div class="mb-10">
                    <span
                        class="inline-flex justify-center items-center mb-3 w-10 h-10 rounded-full bg-primary-800 text-white"
                    >
                        4
                    </span>
                    <h3 class="text-xl font-medium mb-3">Complete Biodata</h3>
                    <p class="text-gray-700">
                        After making payment, you will be permitted to complete
                        your biodata. A complete biodata qualifies you for the
                        physical auditioning
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Layout from "../../Layout/Landing.vue";
export default {
    name: "Index",
    layout: Layout,
};
</script>

<style></style>
