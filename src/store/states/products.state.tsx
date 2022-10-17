import { ProductDetail } from "../../components/Models/product/ProductDetails";

export const _state = {
    loading: false,
    products:[],
    userProducts:[],
    singleProduct: new ProductDetail(),
    singleUserProduct: new ProductDetail(),
    message: "",
    isSuccessful: false,
}