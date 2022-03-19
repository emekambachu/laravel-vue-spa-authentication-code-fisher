<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>

                <div class="card-body">
                    <form method="POST" action="">
                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text"
                                       class="form-control"
                                       name="name" required
                                       autocomplete="name" autofocus
                                        v-model="form.name">
                                <span v-if="errors.name"
                                      class="invalid-feedback"
                                      role="alert">
                                    <strong>{{ errors.name[0] }}</strong>
                                    </span>
                            </div>
                        </div>

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
                            <label for="password-confirm"
                                   class="col-md-4 col-form-label text-md-end">
                                Confirm Password</label>

                            <div class="col-md-6">
                                <input id="password-confirm"
                                       type="password"
                                       class="form-control"
                                       name="password_confirmation"
                                       required
                                       autocomplete="new-password" v-model="form.password_confirmation">
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button @click.prevent="saveForm"
                                        type="submit"
                                        class="btn btn-primary">
                                    Register
                                </button>
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
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                errors:[]
            }
        },
        methods: {
            saveForm(){
                axios.post('api/register', this.form).then(() => {
                    console.log('saved');
                }).catch((error) => {
                    this.errors = error.response.data.errors;
                })
            }
        }
    }
</script>

<style scoped>

</style>
