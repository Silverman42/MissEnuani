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
                    The Miss Enuani Beauty Peagent is a celebration of elegance,
                    rich culture and beauty of the Enuani people of Delta State
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
                    :src="`${$page.auth.settings.app_url}/assets/img/hero_2.jpeg`"
                    class="w-full"
                    alt=""
                />
            </div>
        </section>
        <section
            id="about"
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
                        >The Miss Enuani Beauty Pageant</span
                    >
                    Miss enuani focuses on exploring and developing the overall
                    talents of participants <br /><br />
                    Miss Enuani is now in its third year, as an annual event it
                    is opened to all all beautiful young girls of age 17-29 who
                    are talented and hungry to explore their inner talents and
                    beauty who also ready to project image of Enuani people
                    positively
                </p>
            </div>
            <div class="w-full md:w-6/12 shadow-offset shadow-offset_yellow">
                <img
                    :src="`${$page.auth.settings.app_url}/assets/img/home_1.jpg`"
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
                    :src="`${$page.auth.settings.app_url}/assets/img/home_2.jpg`"
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
                    The MEBP is a two part event that consists of beauty pageant
                    show and an award night
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
                            MEBP has been designed to be a 6day event. A
                            compulsory 5 days camping for contestants, in which
                            they are made to engaged in numerous activities
                            culminating on the Grand finale which is on the 6th
                            and final day of the event
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
                            Enuani Achievers Award
                        </h3>
                        <p class="text-gray-700">
                            The enuani achievers award is design to give special
                            recognition to outstanding individuals from all
                            works of life who have immensely contributed their
                            quota in projecting our people positively in their
                            fields of endeavor
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
                        <a
                            class="text-black hover:text-yellow-500"
                            href="/register"
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
