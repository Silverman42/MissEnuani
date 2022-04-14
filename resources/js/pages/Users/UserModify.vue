<template>
    <div>
        <form @submit.prevent="modifyUser" id="create-user"></form>
        <div class="mb-10 reveal-left" style="--delay: 0.3s">
            <h4
                class="text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2"
            >
                Biodata
            </h4>
            <div class="mb-2">
                <text-input
                    form="create-user"
                    :error="$page.errors.first_name || ''"
                    v-model="biodata.first_name"
                    label="First name"
                />
            </div>
            <div class="mb-2">
                <text-input
                    form="create-user"
                    :error="$page.errors.last_name || ''"
                    v-model="biodata.last_name"
                    label="Last name"
                />
            </div>
            <div class="mb-2">
                <text-input
                    form="create-user"
                    :error="$page.errors.email || ''"
                    type="email"
                    v-model="biodata.email"
                    label="Email"
                />
            </div>
            <div class="mb-2">
                <text-input
                    type="password"
                    :error="$page.errors.password || ''"
                    v-model="biodata.password"
                    form="create-user"
                    label="Password"
                />
            </div>
            <div class="mb-2">
                <text-input
                    type="password"
                    form="create-user"
                    v-model="biodata.password_confirmation"
                    label="Confirm Password"
                />
            </div>
        </div>

        <div class="mb-10 reveal-left" style="--delay: 0.5s">
            <h4
                class="text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2"
            >
                Social
            </h4>
            <div class="mb-2">
                <text-input
                    v-model="social.facebook_url"
                    :error="$page.errors.facebook_url || ''"
                    form="create-user"
                    label="Facebook URL"
                >
                    <span class="italic text-gray-500 text-xs">Optional</span>
                </text-input>
            </div>
            <div class="mb-2">
                <text-input
                    v-model="social.twitter_url"
                    :error="$page.errors.twitter_url || ''"
                    form="create-user"
                    label="Twitter URL"
                >
                    <span class="italic text-gray-500 text-xs">Optional</span>
                </text-input>
            </div>
            <div class="mb-2">
                <text-input
                    v-model="social.phone_number"
                    :error="$page.errors.phone_number || ''"
                    type="number"
                    form="create-user"
                    label="Phone Number"
                >
                    <span class="italic text-gray-500 text-xs">Optional</span>
                </text-input>
            </div>
        </div>

        <div class="mb-10 reveal-left" style="--delay: 0.7s">
            <h4
                class="text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2"
            >
                Avatar
            </h4>
            <file-input
                form="create-user"
                :error="$page.errors.avatar || ''"
                @input="changeAvatar($event)"
                label="Image should have a size of 800kb max and should be among the following file type: JPG, PNG"
            />
        </div>

        <div class="mb-10 reveal-left">
            <h4
                class="text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2"
            >
                Permissions
            </h4>
            <div class="mb-4">
                <checkbox
                    v-model="permissions.modify_tickets"
                    layout="widthFull"
                >
                    <p class="ml-2 text-sm font-bold">Tickets</p>
                    <p class="ml-2 text-xs">
                        Create, delete and update tickets
                    </p>
                </checkbox>
                <p
                    class="text-xs text-red-500"
                    v-if="$page.errors.modify_tickets"
                >
                    {{ $page.errors.modify_tickets }}
                </p>
            </div>
            <div class="mb-4">
                <checkbox
                    v-model="permissions.modify_transactions"
                    layout="widthFull"
                >
                    <p class="ml-2 text-sm font-bold">Transaction</p>
                    <p class="ml-2 text-xs">View transactions</p>
                </checkbox>
                <p
                    class="text-xs text-red-500"
                    v-if="$page.errors.modify_transactions"
                >
                    {{ $page.errors.modify_transactions }}
                </p>
            </div>
            <div class="mb-4">
                <checkbox
                    v-model="permissions.modify_competitions"
                    layout="widthFull"
                >
                    <p class="ml-2 text-sm font-bold">Competition</p>
                    <p class="ml-2 text-xs">
                        Add, view, delete and update competitions
                    </p>
                </checkbox>
                <p
                    class="text-xs text-red-500"
                    v-if="$page.errors.modify_competitions"
                >
                    {{ $page.errors.modify_competitions }}
                </p>
            </div>
            <div class="mb-4">
                <checkbox v-model="permissions.modify_users" layout="widthFull">
                    <p class="ml-2 text-sm font-bold">Users</p>
                    <p class="ml-2 text-xs">
                        Add, view, delete and update users
                    </p>
                </checkbox>
                <p
                    class="text-xs text-red-500"
                    v-if="$page.errors.modify_users"
                >
                    {{ $page.errors.modify_users }}
                </p>
            </div>
            <div class="mb-4">
                <checkbox
                    v-model="permissions.modify_settings"
                    layout="widthFull"
                >
                    <p class="ml-2 text-sm font-bold">Settings</p>
                    <p class="ml-2 text-xs">
                        Add, view, delete and update settings
                    </p>
                </checkbox>
                <p
                    class="text-xs text-red-500"
                    v-if="$page.errors.modify_settings"
                >
                    {{ $page.errors.modify_settings }}
                </p>
            </div>
        </div>

        <div class="mb-10 reveal-left flex justify-end" style="--delay: 1.3s">
            <primary-btn
                width="w-full md:w-auto"
                type="submit"
                :loading="loading"
                form="create-user"
                >{{ buttonTitle }}</primary-btn
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "UserModify",
    watch: {
        $page: {
            handler() {
                this.loading = false;
                if (this.$page.auth.alert_type === "success") {
                    this.resetValues();
                    this.$emit("completeRegistration");
                }
            },
            deep: true,
        },
    },
    props: {
        permissionSet: {
            type: Object,
            default() {
                return {};
            },
        },
        biodataSet: {
            type: Object,
            default() {
                return {};
            },
        },
        socialSet: {
            type: Object,
            default() {
                return {};
            },
        },
        buttonTitle: {
            type: String,
            default: "Create Users",
        },
        actionURLPath: String,
        canResetValues: {
            type: Boolean,
            default: true,
        },
        userRole: {
            type: String,
            default: "super-admin",
        },
    },
    data() {
        return {
            loading: false,
            roles: this.userRole,
            biodata: {
                ...this.biodataSet,
                password: "",
                password_confirmation: "",
            },
            social: {
                ...this.socialSet,
            },
            avatar: "",
            permissions: {
                ...this.permissionSet,
            },
        };
    },
    methods: {
        selectRole(role) {
            this.roles = role;
        },
        changeAvatar(file) {
            this.avatar = file;
        },
        resetValues() {
            if (this.canResetValues === true) {
                this.permissions = {
                    subjects: true,
                    topics: true,
                    questions: true,
                    collections: true,
                    users: false,
                    settings: false,
                    profile: false,
                };
                this.social = {
                    facebook_url: "",
                    twitter_url: "",
                    phone_number: "",
                };
                this.avatar = null;
                this.roles = "admin";
            }
        },
        modifyUser() {
            this.loading = true;
            const form = new FormData();
            form.append("avatar", this.avatar);
            form.append("roles", this.roles);
            for (let key of Object.entries(this.biodata)) {
                form.append(key[0], this.biodata[key[0]]);
            }
            for (let key of Object.entries(this.social)) {
                form.append(key[0], this.social[key[0]]);
            }
            for (let key of Object.entries(this.permissions)) {
                form.append(key[0], this.permissions[key[0]]);
            }
            this.$inertia.post(this.actionURLPath, form);
        },
    },
};
</script>

<style></style>
