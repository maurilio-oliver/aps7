import axios from "axios";


const SellerServiceClient = {

findbyId: async (url) => {
   await axios.get(url).then(response => {console.log(response.data)}).catch(error => {console.log(error)})
}

}

export default SellerServiceClient