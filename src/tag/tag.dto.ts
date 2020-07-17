import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class TagDTO {

    @ApiProperty({
        type: String,
        required: true,
        description: "Tag Name."
    })
    @IsNotEmpty()
    name: string
}