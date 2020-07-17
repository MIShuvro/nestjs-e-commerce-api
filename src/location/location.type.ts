import { Prop, Pre, plugin, Ref, ModelOptions } from "@typegoose/typegoose";
import { slugify } from "src/shared/slug";

import * as uniqueValidator from 'mongoose-unique-validator'
import { Product } from "src/product/product.type";


@plugin(uniqueValidator, { message: '{VALUE} alrady taken' })

@Pre<Location>("save", function () {
    this.slug = slugify(this.name)
})

@ModelOptions({ schemaOptions: { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } } })
export class Location {

    @Prop({ required: true, trim: true })
    name: string

    @Prop({ trim: true, unique: true })
    slug: string

    @Prop({ ref: "Product", localField: "_id", foreignField: "locations" })
    products: Ref<Product>[]
}