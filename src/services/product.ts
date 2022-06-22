import axios from "axios";

class ProductService {
    async getProducts(search: string) {
        const response = await axios.get(`https://burobroodje.000webhostapp.com/public/api/searchProduct/${search}`);
        return response.data;
    }
}

export default new ProductService();