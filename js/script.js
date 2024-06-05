const { createApp } = Vue

createApp({
    data() {
        return {
            emails: '',
            
        }
    },
    methods:{
        getEmail(){
            let data = [];
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail ').then((response) => {
                for (let index = 0; data.length < 10; index++) {
                    data.push(response.data.response);
                }
                this.emails = data
            })
        }
    },
    created(){
        this.getEmail();
    }
}).mount('#app')