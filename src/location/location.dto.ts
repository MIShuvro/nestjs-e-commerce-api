import { IsNotEmpty, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'


export class LocationDTO {

    @ApiProperty({
        type: String,
        required: true,
        description: "Location Khubi Dorkari"
    })
    @IsNotEmpty()
    @MinLength(4)
    name: string
}