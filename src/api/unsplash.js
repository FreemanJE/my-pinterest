import axios from 'axios';


export default axios.create({
    baseUrl: 'http://api.unsplash.com',
    headers: {
        Authorization: "Client-ID kHVmj2oyXt3Wyw-7QP0zAv-qoEHbDgcI0nL76C4wt9E",
    },
})