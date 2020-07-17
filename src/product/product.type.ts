import { AUTH_DOOMAIN } from "src/session/session.utils";
import { Prop, Pre, plugin, Ref, ModelOptions, } from '@typegoose/typegoose'
import { Location } from "src/location/location.type";
import { Tag } from "src/tag/tag.type";
import { Category } from "src/category/category.type";
import { slugify } from "src/shared/slug";
import * as uniqueValidator from 'mongoose-unique-validator'

import { Admin } from "src/admin/admin.type";

@Pre<Product>("save", function () {
    this.slug = slugify(this.title, true)
})
    
    @Pre<Product>(/^find/, function () {
    this.populate('tags categories locations')
})

@plugin(uniqueValidator, { message: '{VALUE} already taken.' })



@ModelOptions({ schemaOptions: { timestamps: true } })
export class Product {

    @Prop({ required: true, trim: true })
    title: string;

    @Prop({ unique: true, trim: true })
    slug: string;

    @Prop({ required: true, trim: true })
    description: string;


    isFeatured: boolean;

    @Prop({ required: true})
    price: number;

    discountPrice: number;

    @Prop({ required: true, trim: true })
    thumbnail: string;

    @Prop({ required: true})
    gallery: string[];


    @Prop({ ref: "Admin" })
    author?: Ref<Admin> 

    @Prop({ ref: 'Category' })
    categories?: Ref<Category>[];

    @Prop({ ref: "Tag" })
    tags?: Ref<Tag>[]

    @Prop({ ref: 'Location' })
    locations?: Ref<Location>[]

}