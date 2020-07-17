import { IsNotEmpty, MinLength } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"


export class ProductDTO {

    @ApiProperty({
        type: String,
        required: true,
        description: 'Product Name.'
    })
    @IsNotEmpty()
    @MinLength(4)
    title: string

    @ApiProperty({
        type: String,
        required: true,
        description: 'Product Description.'
    })
    @IsNotEmpty()
    description: string

    @ApiProperty({
        type: Boolean,
        description: 'isFeatured?.'
    })
    @IsNotEmpty()
    isFeatured: boolean

    @ApiProperty({
        type: Number,
        required: true,
        description: 'Product Price.'
    })
    @IsNotEmpty()
    price: number

    @ApiProperty({
        type: Number,
        description: 'Product Discount price..'
    })
    @IsNotEmpty()
    discountPrice: number

    @ApiProperty({
        type: String,
        required: true,
        description: 'Product Banner.'
    })
    @IsNotEmpty()
    thumbnail: string

    @ApiProperty({
        type: String,
        description: 'Product Picture.'
    })
    @IsNotEmpty()
    gallery: string[];


    @ApiProperty({
        type: String,
        description: 'Product Author.'
    })
    @IsNotEmpty()
    author: string;

    @ApiProperty({
        type: String,
        description: 'Product Category.'
    })
    @IsNotEmpty()
    categories: string[];

    @ApiProperty({
        type: String,
        description: 'Product Tag.'
    })
    @IsNotEmpty()
    tags: string[];

    @ApiProperty({
        type: String,
        description: 'Product Location.'
    })
    @IsNotEmpty()
    locations: string[];

}



export class ProductUpdateDTO {
    @ApiProperty({
        type: String,
        description: 'Product Name.'
    })
    @IsNotEmpty()
    @MinLength(4)
    title: string

    @ApiProperty({
        type: String,
        description: 'Product Description.'
    })
    @IsNotEmpty()
    description: string


    @ApiProperty({
        type: Boolean,
        description: 'isFeatured?.'
    })
    @IsNotEmpty()
    isFeatured: boolean

    @ApiProperty({
        type: Number,
        description: 'Product Price.'
    })
    @IsNotEmpty()
    price: number

    @ApiProperty({
        type: Number,
        description: 'Product Discount price..'
    })
    @IsNotEmpty()
    discountPrice: number


    @ApiProperty({
        type: String,
        description: 'Product Category.'
    })
    @IsNotEmpty()
    categories: string[];
}