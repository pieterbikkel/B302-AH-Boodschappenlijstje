import axios from "axios";

class ProductService {
    async getProducts(search: string) {
        const response = await axios.get(`http://localhost:8000/api/searchProduct/${search}`);
        return response.data;
    }
}

export default new ProductService();