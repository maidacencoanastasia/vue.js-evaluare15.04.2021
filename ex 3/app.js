const app = new Vue({
    el: '#app',
    data: {
        experience: '',
        language: '',
        salary: 0
    },
    watch: {
        experience() {
            this.salary = this.calcSalary(this.language, this.experience);
        },
        language() {
            this.salary = this.calcSalary(this.language, this.experience);
        }
    },
    methods: {
        calcSalary(language, experience) {
            let coeficent = 0;
            switch (language) {
                case 'JS':
                    coeficent = 1;
                    break;
                case 'Python':
                    coeficent = 0.7;
                    break;
                case 'Java':
                    coeficent = 1.3;
                    break;
            }

            let minSalary = 0;
            if (experience === '1') {
                minSalary = 10000;
            } else if (experience === '2') {
                minSalary = 12000;
            } else if (experience === '3') {
                minSalary = 13500;
            } else if (experience === '4') {
                minSalary = 14000;
            } else if (experience === '5') {
                minSalary = 15000;
            }
            return minSalary * coeficent;
        }
    }
})