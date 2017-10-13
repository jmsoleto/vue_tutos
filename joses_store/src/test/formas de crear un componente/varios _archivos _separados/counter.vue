<template>
    <div id="app">
        <p>Has pulsado el boton {{counter}} veces</p>
        <button v-on:click="incrementCounter">Pulsame</button>
    </div>
</template>
<script src="./app.js"></script>
<style src="./app.css"></style>