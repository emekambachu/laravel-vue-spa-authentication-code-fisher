<template>
    <h5>Dashboard</h5>
    <div v-if="user">
        <p>Name: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
    </div>
    <button @click.prevent="logout">Logout</button>
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
                    this.$router.push({ name: "Home" });
                });
            }
        },
        created(){
            axios.get('/api/user').then((res) => {
                this.user = res.data
            });
        }
    }
</script>

<style scoped>

</style>
