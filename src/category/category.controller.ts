import { Controller, Body, Post, Get, Param, Query, Delete, Put, ValidationPipe, UsePipes, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { CategoryService } from './category.service';
import { CategoryDTO } from './category.dto';
import { Category } from './category.type';
import { DocumentType } from '@typegoose/typegoose'
import { PaginationQueryDTO, ResourceList } from 'src/utils/types';
import { ApiPagination } from 'src/utils/pagination.decorators';

@ApiTags("Category")
@Controller('category')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) { }


    @Post()
    @UsePipes(ValidationPipe)
    createService(@Body() data: CategoryDTO): Promise<DocumentType<Category>> {
        return this.categoryService.createService(data)
    }

    @Get('/:_id')
    showService(@Param('_id') _id: string): Promise<DocumentType<Category>> {
        return this.categoryService.showService(_id)
    }

    @ApiPagination()
    @Get()
    indexService(@Query() query: PaginationQueryDTO): Promise<ResourceList<Category>> {
        return this.categoryService.indexService(query)
    }

    @Delete('/:_id')
    destoryService(@Param('_id') _id: string): Promise<DocumentType<Category>> {
        return this.categoryService.destoryService(_id)
    }

    @Put('/:_id')
    updateService(@Param('_id') _id: string, @Body() data: CategoryDTO): Promise<DocumentType<Category>> {
        return this.categoryService.updateService(_id, data)
    }
}
