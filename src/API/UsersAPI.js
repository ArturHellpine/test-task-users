import axios from "axios";

export default class usersAPI {
    static async getUsers() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data
    }

    static async getUsersById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        return response.data
    }
}