<script>
import {mapActions} from "vuex";

export default {
    name: "LoginPage",
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
        ...mapActions(['fetchToken', 'fetchCategories']),
        auth() {
            console.log("Form sent.");
            this.fetchToken(this.form)
                .then(() => {
                    this.$router.push('/');
                    this.fetchCategories();
                })
                .catch(() => {
                    console.log("Email or Password incorrect.");
                });
        },
    },
};
</script>

<template>
    <form @submit.prevent="auth" class="col-6">
        <div>
            <h1>Login</h1>
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
            <button type="submit" class="btn btn-success">Login</button>
            <RouterLink class="btn btn-primary" to="/register">Register</RouterLink>
        </div>
    </form>
</template>

<style scoped></style>
