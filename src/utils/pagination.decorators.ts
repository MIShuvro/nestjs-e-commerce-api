
import { applyDecorators } from '@nestjs/common'
import { ApiQuery } from '@nestjs/swagger'

export const ApiPagination = (): any => {

    return applyDecorators(

        ApiQuery({
            name: 'page',
            required: false
        }),

        ApiQuery({
            name: 'limit',
            required: false
        }),

        ApiQuery({
            name: 'sort',
            required: false
        }),


    )
}