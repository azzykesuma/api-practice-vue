<template>
    <div v-if="data">
        <h3>User Details</h3>
        <table>
            <tr>
                <th>Name</th>
                <th>{{ data.name }}</th>
            </tr>
            <tr>
                <th>Email</th>
                <th>{{ data.email }}</th>
            </tr>
            <tr>
                <th>Adress</th>
                <th>{{ data.address.street }} - {{ data.address.city}}</th>
            </tr>
            <tr>
                <th>Phone</th>
                <th>{{ data.phone }}</th>
            </tr>
        </table>
    </div>
    <div v-else-if="error">
        {{ error }}
    </div>
    <p v-else>loading...</p>
    <router-link class="link_back" to="/">Back</router-link>
</template>

<script setup>
import { useRoute } from 'vue-router';
import GetUserDetail from '../composable/GetUserDetail'

    // getting params
    const route = useRoute()
    const id = route.params.id

    const { data, error, loadData } =  GetUserDetail(id)
    loadData()

</script>

<style scoped>
    table {
        margin-bottom: 2em;
    }

    .link_back {
        text-decoration: none;
        padding : 10px;
        background-color: aqua;
        border-radius: 5px;
    }
</style>