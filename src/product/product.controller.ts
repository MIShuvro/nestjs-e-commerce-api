import { Controller, Post, ValidationPipe, UsePipes, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';
import { ProductDTO, ProductUpdateDTO } from './product.dto';
import { SessionRequest } from 'src/session/session.utils';
import { Product } from './product.type';
import { DocumentType } from '@typegoose/typegoose'
import { ResourceList, PaginationQueryDTO } from 'src/utils/types';
import { ApiPagination } from 'src/utils/pagination.decorators';


@ApiTags("Product")
@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) { }


    @Post()
    @UsePipes(ValidationPipe)
    async createService(@Body() data: ProductDTO): Promise<DocumentType<Product>> {
        return this.productService.createService(data)
    }


    @ApiPagination()
    @Get()
    async indexService(@Query() query: PaginationQueryDTO): Promise<ResourceList<Product>> {
        return this.productService.indexService(query)
    }

    @Get('/:_id')
    async showService(@Param('_id') _id: string): Promise<DocumentType<Product>> {
        return this.productService.showService(_id)
    }

    @Put('/:_id')
    async updateService(@Param('_id') _id: string, @Body() data: ProductUpdateDTO): Promise<DocumentType<Product>> {
        return this.productService.updateService(_id, data)
    }

    @Delete('/:_id')
    async deleteService(@Param('_id') _id: string): Promise<DocumentType<Product>> {
        return this.productService.destroyService(_id)
    }
}
