<template>
  <div class="card relative z-2">
    <Menubar :model="items" class="transparent">
      <template #end>
        <Button  icon="pi pi-user" severity="info" rounded outlined aria-label="User" @click="goToAminPage"/>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";

const goToAminPage = () => {
  router.push({ path: 'admin' });
}
const items = ref([
  {
    label: 'Домой',
    icon: 'pi pi-home',
    to:'/'

  },
  {
    label: 'О Магазине',
    icon: 'pi pi-info-circle',
    to: '/about'

  },
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
