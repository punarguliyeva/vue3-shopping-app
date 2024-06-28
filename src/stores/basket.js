import { reactive } from 'vue'
import { defineStore } from 'pinia'

const useBasketStore = defineStore('basket', () => {
  const basket = reactive({})

  function incProduct(productId) {
    getFromLocalStorage()
    if (basket[productId]) {
      basket[productId]++
    } else {
      basket[productId] = 1
    }
    setToLocalStorage()
  }

  function decProduct(productId) {
    getFromLocalStorage()
    if (basket[productId] > 0) {
      basket[productId]--
    }
    setToLocalStorage()
  }

  function removeProduct(productId) {
    getFromLocalStorage()
    delete basket[productId]
    setToLocalStorage()
  }

  function setToLocalStorage() {
    const str = JSON.stringify(basket)
    localStorage.setItem('basket', str)
  }

  function getFromLocalStorage() {
    const str = localStorage.getItem('basket')
    Object.assign(basket, JSON.parse(str))
  }

  return { basket, incProduct, decProduct, removeProduct, setToLocalStorage, getFromLocalStorage }
})

export default useBasketStore
