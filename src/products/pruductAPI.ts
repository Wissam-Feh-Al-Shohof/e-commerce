import axios from "axios";

export interface ProductType {
    title:string;
    image: string;
    price:number;
    category:string;
    description: string;
    id:string;
}
export class ProductAPI {
  getProducts() : Promise<Partial<ProductType>[]> {
    return axios.get("https://fakestoreapi.com/products").then((r) => r.data);
  }

  getProductsByCategory(category:string) : Promise<Partial<ProductType>[]>  {
    return axios.get("https://fakestoreapi.com/products/category/"+category).then((r) => r.data);
  }

  getProductsSorted(sort:'asc'|'desc'|'default') {
    if(sort === 'default') {
        return this.getProducts();
    }
    return axios.get("https://fakestoreapi.com/products?sort="+sort).then((r) => r.data);
  }
}
