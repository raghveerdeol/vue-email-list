const { createApp } = Vue

createApp({
    data() {
        return {
            emails: '',
            
        }
    },
    methods:{
        getEmail: () => {
            let data = [];
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail ').then(function (response) {
                    data.push(response.data.response);
                })
            }
            this.emails = data;
            console.log(data, this.emails)
        }
    },
    created(){
        this.getEmail();
    }
}).mount('#app')