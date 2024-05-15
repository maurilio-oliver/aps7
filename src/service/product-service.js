import axios from "axios";
import returnPromiseComAtraso from "./helper-developer.js";

3

const ProductService = {
     getProducyById : (productId) => {
        return  returnPromiseComAtraso({id:1,title:"title", name:"name", price:15.05,description:"one desciption", imagePath:"/src/img/blusa_de_trico_bege-removebg-preview.png"})
         //return service.get(`product/find-by-id/${productId}`)
     },
     getRecommender: (productDate) => {
        return returnPromiseComAtraso([
            {id: 1, name: "A", price: 199.20, imagePath: "/src/img/blusa_de_trico_bege-removebg-preview.png"},
            {id: 2, name: "B", price: 69.99, imagePath: "/src/img/blusa_de_trico_bege-removebg-preview.png"},
            {id: 3, name: "C", price: 159.00, imagePath: "/src/img/blusa_de_trico_bege-removebg-preview.png"},
            {id: 4, name: "D", price: 99.00, imagePath: "/src/img/blusa_de_trico_bege-removebg-preview.png"},
            {id: 4, name: "E", price: 99.00, imagePath: "/src/img/blusa_de_trico_bege-removebg-preview.png"},
            {id: 4, name: "F", price: 99.00, imagePath: "/src/img/blusa_de_trico_bege-removebg-preview.png"}
        ]) //service.post(`product/recommender/*`, productDate)
     },
    getProductBySellerId: (sellerId) => {
        return returnPromiseComAtraso() //service.get(`/orders/find-by/${sellerId}/seller`)
    },
    createProduct: ( newProduct) => {
        return returnPromiseComAtraso() //service.post(`product/recommender/*`, newProduct)
    },

}
export default ProductService