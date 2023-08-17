<template>
  <Card>

    <template #title> Приветствую в каталоге магазина </template>

    <template #content >
      <div class="product-card">
        <product/>
      </div>
    </template>

    <template #footer>
      <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
    </template>

  </Card>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
    components: { Product },

}

</script>

<style scoped>
  .product-card{

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}
</style>