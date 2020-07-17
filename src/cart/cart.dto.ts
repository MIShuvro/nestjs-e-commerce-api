import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class CartDTO {

    @ApiProperty({
        type: String,
        required: true,
        description: 'Product Author Id'
    })
    @IsNotEmpty()
    author: string


    @ApiProperty({
        type: String,
        required: true,
        description: 'Product Id'
    })
    @IsNotEmpty()
    products: string[]
}