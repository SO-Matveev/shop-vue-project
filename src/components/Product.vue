<template >
    <Card style="width: 25em" class="product" v-for="product in products" :key="product.id">
    <template #header>
        <img alt="user header" src="/images/usercard.png" />
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
                    {id: 1, title: 'Ботинки', description: 'Крутые ботинки'},
                    {id: 2, title: 'Шуба', description: 'Шуба-дуба'},
                    {id: 3, title: 'Шапка', description: 'Шапка ушанка'},
                    {id: 4, title: 'Штаны', description: 'Штаны теплые'}
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
