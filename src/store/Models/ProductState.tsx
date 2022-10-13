import { ProductDetail } from "../../components/Models/product/ProductDetails";

export interface IProductState {
    loading: boolean,
    products: ProductDetail[],
    userProducts:ProductDetail[],
    message: string,
    isSuccessful: boolean,
}