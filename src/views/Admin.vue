<template>
  <div>
    <span class="block text-900 font-bold text-xl mb-4"></span>
    <form @submit.prevent class="grid grid-nogutter flex-wrap gap-3 p-fluid" >
      <div class="col-12 lg:col-8">
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
<!--          <div class="col-12 mt-3">-->
<!--            <FileUpload mode="advanced" name="fileupload" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload">-->
<!--              <template #empty>-->
<!--                <p>Drag and drop files to here to upload.</p>-->
<!--              </template>-->
<!--            </FileUpload>-->
<!--          </div>-->
        </div>
      </div>
      <div class="flex-1 w-full lg:w-3 xl:w-4 flex flex-column row-gap-3">
<!--        <div class="border-1 surface-border border-round">-->
<!--          <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Категория</span>-->
<!--          <div class="p-3">-->
<!--            <Dropdown v-model="selectedCategory" :options="categoryProduct" optionLabel="name" placeholder="Выберите категорию товара" class="w-full md:w-14rem" ></Dropdown>-->
<!--          </div>-->
<!--        </div>-->
        <div class="flex justify-content-between gap-3">
          <Button label="Сбросить" severity="danger" outlined icon="pi pi-trash" />
          <Button @click="createProduct"  label="Публиковать" severity="help" icon="pi pi-check" />
        </div>
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