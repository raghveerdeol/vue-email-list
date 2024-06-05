const { createApp } = Vue

createApp({
    data() {
        return {
            emails: '',
            datas: ''
        }
    },
    methods:{
        getEmail() {
            let data = [];
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail ').then(function (response) {
                    data.push(response.data.response);
                })
            }
            this.emails = data;
            console.log(data, this.emails)
        },
        getData() {
            let x = 0;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail ').then((response) => {
                let data = [];
                while (x < 10) {
                data.push(response.data.response);
                x++;
                }
                this.datas = data;
                console.log(data)
            })
        }
    },
    created(){
        this.getEmail();
        this.getData();
    },
}).mount('#app')