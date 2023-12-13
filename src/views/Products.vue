// TODO: Необходимо прокинуть данные на страницу админ!
<template>
  <Card>
    <template #title> Приветствую в каталоге магазина </template>

    <template #content >
      <div class="product-card">
        <product
          :products="listProduct"
        />
      </div>
    </template>
  </Card>

</template>

<script>
import Product from '@/components/Product.vue'
import {mapState} from "vuex";

export default {
  components: { Product },

  computed:{
    ...mapState({
      listProduct: state => state.products
    }),
  }
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