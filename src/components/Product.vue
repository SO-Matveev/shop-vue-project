<template>
  <div class="grid -mt-3 -ml-3 -mr-3">
    <div class="col-12 md:col-6 lg:col-4 product" v-for="product in products">
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
    export default {
      props: {
        products: {
          type: Array,
          required: true
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
