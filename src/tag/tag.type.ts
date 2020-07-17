import { Prop, Pre, plugin, ModelOptions, Ref } from "@typegoose/typegoose";
import { slugify } from "src/shared/slug";
import * as uniqueValidator from 'mongoose-unique-validator'
import { Product } from "src/product/product.type";

@Pre<Tag>("save", function () {
    this.slug = slugify(this.name)
})

@plugin(uniqueValidator, { message: '{VALUE} already taken.' })

@ModelOptions({ schemaOptions: { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } } })
export class Tag {

    @Prop({ required: true, trim: true })
    name: string;

    @Prop({ trim: true, unique: true })
    slug: string

    @Prop({ ref: "Product", localField: "_id", foreignField: "tags" })
    products: Ref<Product>[]
}