<template>
    <div>
        <div class="mb-5">
            <h3 class="text-lg font-bold">Social</h3>
            <p class="text-sm">Social media links and contact</p>
        </div>
        <form action="" @submit.prevent="submitForm" id="social"></form>
        <div class="mb-3">
            <text-input
                form="social"
                :error="$page.errors.facebook_url"
                label="Facebook link"
                v-model="facebook_url"
            />
        </div>
        <div class="mb-3">
            <text-input
                form="social"
                :error="$page.errors.twitter_url"
                label="Twitter link"
                v-model="twitter_url"
            />
        </div>
        <div class="mb-3">
            <text-input
                form="social"
                :error="$page.errors.instagram_url"
                label="Instagram link"
                v-model="instagram_url"
            />
        </div>
        <div class="mb-10">
            <text-input
                type="number"
                form="social"
                :error="$page.errors.phone_number"
                label="Phone Number (with call code)"
                v-model="phone_number"
                placeholder="+234**********"
                >Required</text-input
            >
        </div>
        <primary-btn
            type="submit"
            form="social"
            width="w-full"
            color="yellow"
            fontColor="text-black"
            >Update Social Data</primary-btn
        >
    </div>
</template>

<script>
export default {
    name: "Social",
    data() {
        return {
            facebook_url: "",
            twitter_url: "",
            instagram_url: "",
            phone_number: "",
        };
    },
    methods: {
        assignDefault() {
            this.facebook_url = this.$page.user.facebook_url || "";
            this.twitter_url = this.$page.user.twitter_url || "";
            this.instagram_url = this.$page.user.instagram_url || "";
            this.phone_number = this.$page.user.phone_number || "";
        },
        submitForm() {
            const { facebook_url, twitter_url, phone_number, instagram_url } =
                this;
            this.$inertia.post(
                this.$route.relativePath("client.profile.update.social"),
                { facebook_url, twitter_url, phone_number, instagram_url }
            );
        },
    },
    mounted() {
        this.assignDefault();
    },
};
</script>

<style></style>
