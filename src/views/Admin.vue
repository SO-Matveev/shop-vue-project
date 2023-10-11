<template>
  <div>
    <span class="block text-900 font-bold text-xl mb-4"></span>
    <form @submit.prevent class="grid grid-nogutter flex-wrap justify-content-end gap-3 p-fluid" >
      <div class="col-12 lg:col-12">
        <div class="grid formgrid">
          <div class="col-12 field">
            <InputText type="text" v-model="product.name" placeholder="Имя товара" />
          </div>
          <div class="col-12 lg:col-4 field">
            <InputText type="text" v-model="product.price" placeholder="Цена" />
          </div>
          <div class="col-12 lg:col-4 field">
            <InputText type="text" v-model="product.id" placeholder="id" />
          </div>
          <div class="col-12 lg:col-4 field">
            <InputText type="text" v-model="product.section" placeholder="Секция" />
          </div>
          <div class="col-12 p-float-label mt-4">
              <Textarea v-bind:value="product.description" autoResize rows="10" cols="30" />
              <label>Описание товара</label>
          </div>
        </div>
      </div>
      <div class="flex gap-3">
        <Button @click="createProduct"  label="Публиковать" severity="help" icon="pi pi-check" />
        <Button label="Сбросить" severity="danger" outlined icon="pi pi-trash" />
      </div>
    </form>
    </div>
</template>

<script>

export default {
  data() {
    return {
      product: {
        name: '',
        price: '',
        id: '',
        section: '',
        description: '',
        src: ''
      }
    }
  },

  methods: {
      createProduct() {
        this.$emit('create', this.product);
        this.product = {
          name: '',
          price: '',
          id: '',
          section: '',
          description: '',
          src: ''
        }
    }
  }
}
</script>

<style scoped>

</style>