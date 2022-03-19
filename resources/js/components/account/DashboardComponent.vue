<template>
    <h5>Dashboard</h5>
<!--    <p>Name: {{ user.name }}</p>-->
<!--    <p>Email: {{ user.email }}</p>-->
</template>

<script>
    export default {
        data(){
            return{
                user: null
            }
        },
        mounted(){
            axios.get('/api/user').then((res) => {
                this.user = res.data
            })
        }
    }
</script>

<style scoped>

</style>
