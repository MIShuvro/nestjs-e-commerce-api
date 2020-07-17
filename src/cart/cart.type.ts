import { Prop, Ref } from "@typegoose/typegoose";
import { Product } from "src/product/product.type";
import { Admin } from "src/admin/admin.type";


export class Cart {

    @Prop({ ref: "Admin" })
    author: Ref<Admin>

    @Prop({ ref: "Product" })
    products: Ref<Product>[]

}