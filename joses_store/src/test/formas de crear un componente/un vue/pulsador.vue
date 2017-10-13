<template>
    <div id="app">
        <input type="text" placeholder="Pon un numero y pulsa el boton" value="{{numberEntered}}">
        <button v-on:click='buttonPressed'>Pulsame</button>
    </div>
</template>

<script>
    export default {
        name:'app',
        data() {
            return {
                numberEntered:0
            }
        },
        methods: {
            buttonPresed() {
                alert(`Has puesto el número {{this.numberEntered}}`)
            }
        }
    }
</script>

<style>
    #app{
        color: red;
        font-size: 10px;
        line-height: 1.4;
    }
</style>