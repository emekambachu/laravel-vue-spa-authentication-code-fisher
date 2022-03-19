<template>
    <h5>Dashboard</h5>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
</template>

<script>
    export default {
        data(){
            return{
                user: null
            }
        },
        methods: {
            logout(){
                axios.post('/api/logout').then(() =>{
                    this.$routes.push({ name: "Home" });
                })
            }
        },
        created(){
            axios.get('/api/user').then((res) => {
                this.user = res.data
            })
        }
    }
</script>

<style scoped>

</style>
