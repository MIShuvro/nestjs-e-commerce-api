import { Pre, Prop, plugin, ModelOptions, Ref } from '@typegoose/typegoose'
import { slugify } from 'src/shared/slug'
import * as uniqueValidator from 'mongoose-unique-validator'
import { Product } from 'src/product/product.type'


@plugin(uniqueValidator, { message: '{VALUE} to be unique.' })

@Pre<Category>("save", function () {
    this.slug = slugify(this.name, true)
})


// @Pre<Category>(/^find/, function () {
//     this.populate('products')
// })

@ModelOptions({ schemaOptions: { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } } })
export class Category {

    @Prop({ required: true, trim: true })
    name: string

    @Prop({ trim: true, unique: true })
    slug: string

    @Prop({ ref: 'Product', localField: '_id', foreignField: 'categories' })
    products: Ref<Product>[];
}