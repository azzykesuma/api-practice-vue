<template>
    <h1>API practive VUE</h1>
    <h3>Search rule</h3>
    <h6> nb : to search for the first name, use capital letter</h6>
    <input type="text" placeholder="Search name..." v-model="search">
    <div class="table_container">
      <div v-for='item in data' key="item.id">
        <table v-if='item.name.includes(search)'>
          <tr>
            <th>Name</th>
            <th>action</th>
          </tr>
          <tr>
            <td>
              <p>{{ item.name }}</p>
            </td>
            <td>
              <router-link  :to="{name : 'detail', params : {id : item.id}}">Detail</router-link>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <p v-if="error">{{ error }} </p>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import GetPosts from '../composable/GetPosts';
  
    const search = ref('')
  
    const { error, loadData, data } = GetPosts()
    loadData()
        
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  input {
    max-width: 300px;
    padding : 10px;
    font-size: 1.2em;
  }
  
  .table_container {
    margin-top :2em;
  }
  
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  .action_detail {
    padding : 5px 10px;
    background-color: #3E1929;
    color : #dddddd;
    border-radius: 5px;
    border : none;
  }
  
  td, th {
    border: 1px solid #eeee;
    text-align: left;
    padding: 8px;
    width: 100px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }

  </style>
  