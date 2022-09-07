<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <form>
  <label for="code">Codigo</label>
  <InputNumber id="code"/>
  <Button label="validar"></Button>
    <br>
    <label for="code">Nombre*</label>
    <InputText id="nombre"/>
  </form>
</template>

<style scoped>

</style>
