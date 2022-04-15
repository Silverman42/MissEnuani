<template>
    <div>
        <div class="mb-5">
            <h3 class="text-lg font-bold">Identity</h3>
            <p class="text-sm">Information used to identify contestant</p>
        </div>
        <form action="" @submit.prevent="submitForm" id="identity"></form>
        <div class="mb-3">
            <text-input
                label="First Name"
                v-model="firstName"
                :error="$page.errors.first_name"
                form="identity"
            >
                Required
            </text-input>
        </div>
        <div class="mb-3">
            <text-input
                label="Last Name"
                v-model="lastName"
                :error="$page.errors.last_name"
                form="identity"
            >
                Required
            </text-input>
        </div>
        <div class="mb-3">
            <select-input
                label="Nationality"
                :error="$page.errors.nationality"
                :value="nationality"
                v-model="nationality"
                form="identity"
            >
                <option value="Nigeria">Nigeria</option>
            </select-input>
        </div>
        <div class="mb-3">
            <textarea-input
                label="Address"
                :error="$page.errors.address"
                v-model="address"
                form="identity"
            >
                <template slot="detail"> Required </template>
            </textarea-input>
        </div>
        <div class="mb-3">
            <textarea-input
                label="Bio (About me)"
                :error="$page.errors.bio"
                v-model="bio"
                form="identity"
            >
            </textarea-input>
        </div>
        <div class="mb-3">
            <text-input
                type="text"
                label="Representing town"
                :error="$page.errors.town"
                v-model="town"
                form="identity"
            >
                Required
            </text-input>
        </div>
        <div class="mb-3">
            <text-input
                type="text"
                label="Youtube video link"
                :error="$page.errors.youtube_link"
                v-model="youtube_link"
                form="identity"
            >
                Required
            </text-input>
        </div>
        <div class="mb-3">
            <text-input
                type="number"
                label="Age"
                :error="$page.errors.age"
                v-model="age"
                form="identity"
            >
                Required
            </text-input>
        </div>
        <div class="mb-3">
            <text-input
                type="date"
                label="Date of Birth"
                :error="$page.errors.date_of_birth"
                v-model="dateOfBirth"
                form="identity"
                >Required
            </text-input>
        </div>
        <div class="mb-3">
            <text-input
                label="Place of Birth"
                :error="$page.errors.place_of_birth"
                v-model="placeOfBirth"
                form="identity"
                >Required</text-input
            >
        </div>
        <div class="mb-3">
            <file-input
                form="identity"
                :error="$page.errors.avatar || ''"
                @input="changeAvatar($event)"
                label="Upload your Profile Picture"
            />
        </div>
        <div class="mb-10">
            <file-input
                form="identity"
                :error="$page.errors.signature || ''"
                @input="changeSignature($event)"
                label="Upload an Image of your signtaure"
            />
        </div>
        <primary-btn
            type="submit"
            form="identity"
            color="yellow"
            fontColor="text-black"
            width="w-full"
            >Update Identity
        </primary-btn>
    </div>
</template>

<script>
export default {
    name: "Identity",
    data() {
        return {
            age: "",
            address: "",
            nationality: this.$page.user.nationality,
            firstName: "",
            lastName: "",
            placeOfBirth: "",
            dateOfBirth: "",
            youtube_link: "",
            signature: "",
            avatar: "",
            town: "",
            bio: "",
            countries: [],
        };
    },
    methods: {
        changeAvatar(file) {
            this.avatar = file;
        },
        changeSignature(file) {
            this.signature = file;
        },
        async getCountries() {
            return await import("../../plugins/countries");
        },
        assignDefaults() {
            this.firstName = this.$page.user.first_name || "";
            this.lastName = this.$page.user.last_name || "";
            this.age = this.$page.user.age || "";
            this.youtube_link = this.$page.user.youtube_link || "";
            this.placeOfBirth = this.$page.user.place_of_birth || "";
            this.nationality = this.$page.user.nationality;
            this.dateOfBirth = this.$page.user.date_of_birth || "";
            this.address = this.$page.user.address || "";
            this.town = this.$page.user.town || "";
            this.bio = this.$page.user.bio || "";
        },
        submitForm() {
            const form = new FormData();
            form.append("first_name", this.firstName);
            form.append("last_name", this.lastName);
            form.append("age", this.age);
            form.append("place_of_birth", this.placeOfBirth);
            form.append("nationality", this.nationality);
            form.append("signature", this.signature);
            form.append("avatar", this.avatar);
            form.append("town", this.town);
            form.append("bio", this.bio);
            form.append("date_of_birth", this.dateOfBirth);
            form.append("address", this.address);
            form.append("youtube_link", this.youtube_link);
            this.$inertia.post(
                this.$route.relativePath("client.profile.update.identity"),
                form
            );
        },
    },
    mounted() {
        const vm = this;
        this.getCountries().then((country) => {
            vm.countries = country.default;
        });
        this.assignDefaults();
    },
};
</script>

<style></style>
