<template>
    <Card style="width: 25em" class="product" v-for="product in products" :key="product.id">
    <template #header>
        <img alt="image product" :src="product.src" style="width: 100%"/>
    </template>
    <template #title> {{ product.title }} </template>
    <template #content>
        <p>
            {{ product.description }}
        </p>
    </template>
    <template #footer>
        <Button icon="pi pi-cart-plus" severity="success" label="Купить" outlined />
    </template>
</Card>
</template>

<script >
    export default{
        data: () => {
            return {
                products: [
                    {id: 1, title: 'Ботинки', description: 'Крутые ботинки', section: 'Ботинки', src:'https://img.alicdn.com/imgextra/i2/887702101/TB2CcfXeVXXXXXcXpXXXXXXXXXX_!!887702101.jpg'},
                    {id: 2, title: 'Шуба', description: 'Шуба-дуба', section: 'Верхняя одежда', src:'https://uhd.name/uploads/posts/2022-09/1662232601_10-uhd-name-p-mariya-furs-vkontakte-17.jpg'},
                    {id: 3, title: 'Шапка', description: 'Шапка ушанка', section: 'Акссесуары', src:'https://ae04.alicdn.com/kf/HTB1hONoKqmWBuNjy1Xaq6xCbXXaM.jpg'},
                    {id: 4, title: 'Штаны', description: 'Штаны теплые', section: 'Верхняя одежда', src:'https://www.sportkult.ru/ipreview/goods/820/820/Noname_Winter_Pants.jpg'}
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
