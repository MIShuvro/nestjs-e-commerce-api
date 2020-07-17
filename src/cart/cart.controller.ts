import { Controller, Post, Body, Query, Get, Delete, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDTO } from './cart.dto';
import { } from '@typegoose/typegoose'
import { DocumentType } from '@typegoose/typegoose'
import { Cart } from './cart.type';
import { ApiTags } from '@nestjs/swagger';
import { PaginationQueryDTO, ResourceList } from 'src/utils/types';
import { ApiPagination } from 'src/utils/pagination.decorators';

@ApiTags("Cart")
@Controller('cart')
export class CartController {

    constructor(private readonly cartService: CartService) { }

    @Post()
    async createService(@Body() data: CartDTO): Promise<DocumentType<Cart>> {
        return this.cartService.createService(data)
    }

    @ApiPagination()
    @Get('/:authorId')
    async indexService(@Param('authorId') authorId: string, @Query() query: PaginationQueryDTO): Promise<ResourceList<Cart>> {
        
        return this.cartService.indexService(authorId, query)
    }

    @Delete('/:_id')
    async destoryService(@Param('_id') _id: string): Promise<ResourceList<Cart>> {
        return this.cartService.destoryService(_id)
    }
}
