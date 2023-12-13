import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    products: [
      {id: 1, name: 'Ботинки', price: '82$', description: 'Крутые ботинки', section: 'Ботинки', src:'https://img.alicdn.com/imgextra/i2/887702101/TB2CcfXeVXXXXXcXpXXXXXXXXXX_!!887702101.jpg'},
      {id: 2, name: 'Шуба', price: '82$', description: 'Шуба-дуба', section: 'Верхняя одежда', src:'https://uhd.name/uploads/posts/2022-09/1662232601_10-uhd-name-p-mariya-furs-vkontakte-17.jpg'},
      {id: 3, name: 'Шапка', price: '82$', description: 'Шапка ушанка', section: 'Акссесуары', src:'https://ae04.alicdn.com/kf/HTB1hONoKqmWBuNjy1Xaq6xCbXXaM.jpg'},
      {id: 4, name: 'Штаны', price: '82$', description: 'Штаны теплые', section: 'Верхняя одежда', src:'https://www.sportkult.ru/ipreview/goods/820/820/Noname_Winter_Pants.jpg'},
    ]
  }),
  getters: {

  },
  mutations: {
      getListProducts(state, products){
        state.products = products
      },
      addProduct (state, payload){
        state.products.push(payload);
      },
  },
  actions: {
    createProductOnStore(context, payload) {
      context.commit("addProduct", payload)
    }
  },
  modules: {
  }
})
