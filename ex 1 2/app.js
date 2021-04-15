const App = {
    data() {
        return {
            username: 'maidacenco100',
            placeholderString: 'Introduce the age',
            currentDate: new Date().getFullYear(),
            inputValue: undefined,
            userBDate: undefined,
            form: {
                date2: '2000-01-01'
            }
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        }
    },
    computed: {
        calculateAge() {
            return this.currentDate - this.userBDate;
        }
    },
    watch: {
        inputValue(value) {
            this.userBDate = new Date(value).getFullYear();
        }
    }
}
const app = Vue.createApp(App)
app.mount('#app')

// function getAge(dateString) 
// {
//     var today = new Date();
//     var birthDate = new Date(dateString);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
//     {
//         age--;
//     }
//     return age;
// }
