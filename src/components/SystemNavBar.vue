<template>
  <div class="card relative z-2">
    <Menubar :model="items"/>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: 'Домой',
    icon: 'pi pi-home',
    to:'/'

  },
  {
    label: 'Контакты',
    icon: 'pi pi-book',
    to: 'Contacts'
  },
  {
    label: 'О Магазине',
    icon: 'pi pi-info-circle',
    to: '/about'

  },
]);
</script>
<style>

</style>
