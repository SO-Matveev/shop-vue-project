<template>
  <div class="card relative z-2">
    <Menubar :model="items" class="transparent">
      <template #start>
        <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" height="40" class="mr-2" />
      </template>
      <template #end>
        <InputText placeholder="Поиск продукта" type="text" />
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: 'Каталог',
    icon: 'pi pi-list',
    to: '/products'
  }
]);
</script>
<style scoped>
.transparent{
  background: none;
  color: transparent;
  border: none;
  border-radius: 0px;
}
</style>