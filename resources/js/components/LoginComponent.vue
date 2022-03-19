<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login</div>

                <div class="card-body">
                    <form method="POST">

                        <div class="row mb-3">
                            <label for="email"
                                   class="col-md-4 col-form-label text-md-end">
                                Email Address</label>
                            <div class="col-md-6">
                                <input id="email" type="email"
                                       class="form-control" name="email"
                                       required autocomplete="email"
                                       v-model="form.email">
                                <span v-if="errors.email"
                                      class="invalid-feedback"
                                      role="alert">
                                <strong>{{ errors.email[0] }}</strong>
                                </span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password"
                                   class="col-md-4 col-form-label text-md-end">
                                Password</label>
                            <div class="col-md-6">
                                <input id="password" type="password"
                                       class="form-control"
                                       name="password" required
                                       autocomplete="new-password"
                                       v-model="form.password">
                                <span class="invalid-feedback"
                                      role="alert">
                                <strong>{{ errors.password[0] }}</strong>
                                </span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"
                                           name="remember" id="remember">
                                    <label class="form-check-label" for="remember"></label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button @click.prevent="loginUser"
                                        type="submit" class="btn btn-primary">
                                    Login</button>
                                <a class="btn btn-link" href="">
                                    Forgot your password
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                form: {
                    email: '',
                    password: ''
                },
                errors: []
            }
        },
        methods: {
            loginUser(){
                axios.post('/api/login', this.form).then(() => {
                    this.$router.push({ name: "AccountDashboard" });
                }).catch((error) => {
                    this.errors = error.response.data.errors;
                })
            }
        }
    }
</script>

<style scoped>

</style>
