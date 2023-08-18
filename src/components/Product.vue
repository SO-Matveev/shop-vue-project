<template>
  <div class="grid -mt-3 -ml-3 -mr-3">
    <div class="col-12 md:col-6 lg:col-4 product" v-for="product in products" :key="product.id">
      <div class="p-2">
        <div class="shadow-2 p-4 surface-card border-round">
          <div class="relative mb-3">
            <span class="surface-card text-900 shadow-2 px-3 py-2 absolute" style="border-radius: 1.5rem; left: 1rem; top: 1rem;">
              {{ product.section }}
            </span>
            <img alt="image product" :src="product.src" class="w-full"/>
          </div>
          <div class="flex justify-content-between align-items-center mb-3">
            <span class="text-900 font-medium text-xl">
              {{ product.name }}
            </span>
            <span>
              <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
              <span class="font-medium">5.0</span>
            </span>
          </div>
          <p class="mt-0 mb-3 text-700 line-height-3">{{ product.description }}</p>
          <div class="flex justify-content-between align-items-center mb-3">
            <span class="text-900 font-medium text-xl">
              {{ product.price }}
            </span>
            <span>
              <Button icon="pi pi-shopping-cart" severity="success" outlined aria-label="Search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
    export default{
        data: () => {
            return {
                products: [
                    {id: 1, name: 'Ботинки', price: '82$', description: 'Крутые ботинки', section: 'Ботинки', src:'https://img.alicdn.com/imgextra/i2/887702101/TB2CcfXeVXXXXXcXpXXXXXXXXXX_!!887702101.jpg'},
                    {id: 2, name: 'Шуба', price: '82$', description: 'Шуба-дуба', section: 'Верхняя одежда', src:'https://uhd.name/uploads/posts/2022-09/1662232601_10-uhd-name-p-mariya-furs-vkontakte-17.jpg'},
                    {id: 3, name: 'Шапка', price: '82$', description: 'Шапка ушанка', section: 'Акссесуары', src:'https://ae04.alicdn.com/kf/HTB1hONoKqmWBuNjy1Xaq6xCbXXaM.jpg'},
                    {id: 4, name: 'Штаны', price: '82$', description: 'Штаны теплые', section: 'Верхняя одежда', src:'https://www.sportkult.ru/ipreview/goods/820/820/Noname_Winter_Pants.jpg'}
                ]
            }
        }
    }

</script>


<style scoped>
.product{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
