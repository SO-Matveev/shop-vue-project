// TODO: Необходимо прокинуть данные на страницу админ!
<template>
  <admin @create="createProduct"/>
  <Card>
    <template #title> Приветствую в каталоге магазина </template>

    <template #content >
      <div class="product-card">
        <product
          :products="products"
        />
      </div>
    </template>
  </Card>

</template>

<script>
import Product from '@/components/Product.vue'
import Admin from "@/views/Admin.vue";

export default {
  components: { Product, Admin },

  data: () => {
    return {
      products: [
        {id: 1, name: 'Ботинки', price: '82$', description: 'Крутые ботинки', section: 'Ботинки', src:'https://img.alicdn.com/imgextra/i2/887702101/TB2CcfXeVXXXXXcXpXXXXXXXXXX_!!887702101.jpg'},
        {id: 2, name: 'Шуба', price: '82$', description: 'Шуба-дуба', section: 'Верхняя одежда', src:'https://uhd.name/uploads/posts/2022-09/1662232601_10-uhd-name-p-mariya-furs-vkontakte-17.jpg'},
        {id: 3, name: 'Шапка', price: '82$', description: 'Шапка ушанка', section: 'Акссесуары', src:'https://ae04.alicdn.com/kf/HTB1hONoKqmWBuNjy1Xaq6xCbXXaM.jpg'},
        {id: 4, name: 'Штаны', price: '82$', description: 'Штаны теплые', section: 'Верхняя одежда', src:'https://www.sportkult.ru/ipreview/goods/820/820/Noname_Winter_Pants.jpg'},
      ]
    }
  },
  methods: {
    createProduct (product) {
      console.log('product', product)
      this.products.push(product)
    }
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