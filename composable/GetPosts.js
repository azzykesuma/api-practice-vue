import { ref } from "vue";

const GetPosts = () => {
    const axios = require('axios').default;
    const data = ref([])
    const error = ref(null)

    const loadData = async() => {
        try {
            await axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => data.value = res.data)
        } catch(err) {
            error.value = err.message
        }
    }

    return { data, error, loadData}
}

export default GetPosts