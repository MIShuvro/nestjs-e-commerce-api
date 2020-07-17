import { IsNotEmpty, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'


export class CategoryDTO {

    @ApiProperty({
        type: String,
        required: true,
        description: 'Name Needed.'
    })
    @IsNotEmpty()
    @MinLength(4, { message: "Name Atleast 4 character." })
    name: string
}