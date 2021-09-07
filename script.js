var app = new Vue({

    el: '#app',
    data: {
        name: "",
        course: "",
        period: "",
        students: [
        ]
    },

    methods: {
        addStudent: function () {
            this.students.push({ id: this.students.length + 1, name: this.name, course: this.course, period: this.period })
        }
    }
})
