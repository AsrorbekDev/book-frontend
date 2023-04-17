<script>
import {mapActions} from "vuex";

export default {
    name: "RegisterPage",
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
        ...mapActions(['createUser', 'fetchToken']),
        registerUser() {
            this
                .createUser(this.form)
                .then(() => {
                    console.log("Registered.");
                    this.login();
                })
                .catch((reason) => {
                    console.log(reason);
                });
        },
        login() {
            this.fetchToken({email: this.form.email, password: this.form.password})
                .then(() => {
                    this.$router.push('/');
                })
                .catch(() => {
                    console.log("Failed to get token while login.");
                });
        },
    },
};
</script>

<template>
    <form @submit.prevent="registerUser" class="col-6">
        <div>
            <h1>Registration</h1>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="form.email"
                    aria-describedby="email"
            />
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="form.password"
            />
        </div>
        <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-primary">Register</button>
            <RouterLink class="btn btn-danger" to="/">Back</RouterLink>
        </div>
    </form>
</template>

<style scoped></style>
