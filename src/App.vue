<template>
    <div class="card">
    <TabMenu :model="items" />
      <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
      label: 'Домой',
      icon: 'pi pi-home',
      to: '/'
  },
  {
      label: 'Каталог',
      icon: 'pi pi-table',
      to: '/products'
  },
  {
      label: 'О Магазине',
      icon: 'pi pi-info-circle',
      to: '/about'
  },
  {
      label: 'Корзина',
      icon: 'pi pi-trash',
      to: '/trash'
  },
]);
</script>
<style>

</style>
