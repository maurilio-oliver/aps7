import axios from "axios";

const service = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
})

const ProductService = {
     getProducyById : (productId) => {
        return  service.get(`product/find-by-id/${productId}`)
     },
     getRecommender: (productDate) => {
        return service.post(`product/recommender/*`, productDate)
     },
    getProductBySellerId: (sellerId) => {
        return service.get(`/orders/find-by/${sellerId}/seller`)
    },
    createProduct: ( newProduct) => {
        return service.post(`product/recommender/*`, newProduct)
    },

}
export default ProductService