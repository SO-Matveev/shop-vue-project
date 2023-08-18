<template>
  <Card>

    <template #title> Приветствую в каталоге магазина </template>

    <template #content >
      <div class="product-card">
        <product/>
      </div>
    </template>

    <template #footer>
      <Paginator :rows="3" :totalRecords="5" :rowsPerPageOptions="[3, 5, 15]" template=getProduct()></Paginator>
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
  .product-card {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
}
</style>