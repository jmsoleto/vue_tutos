new Vue({
    el: '#app',
    template: '#app',
    data () {
        return {
            counter:0
        }
    },
    methods: {
        incrementCounter(){
            this.counter ++;
        }
    }
})