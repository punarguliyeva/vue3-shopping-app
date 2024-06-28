export async function getProducts() {
  try {
    const data = await fetch(import.meta.env.VITE_BASE_URL + '/products')
    const res = await data.json()
    return res
  } catch (err) {
    console.error(err)
  } finally {
    // TODO: add loading
  }
}

export async function getProduct(productId) {
  try {
    const data = await fetch(import.meta.env.VITE_BASE_URL + '/products/' + productId)
    const res = await data.json()
    return res
  } catch (err) {
    console.error(err)
  } finally {
    // TODO: add loading
  }
}

export function getListedProducts(arr) {
  return Promise.all(arr.map((productId) => getProduct(productId)))
}
