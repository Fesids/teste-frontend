import { Product } from "./Product";

export interface APIResp{
    success: boolean,
    products: Array<Product>
}