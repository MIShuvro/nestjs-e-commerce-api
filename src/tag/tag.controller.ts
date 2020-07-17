import { Controller, Post, Body, UsePipes, ValidationPipe, Get, Query, Param, Put,Delete } from '@nestjs/common';
import { TagService } from './tag.service';
import { ApiTags } from '@nestjs/swagger';
import { TagDTO } from './tag.dto';
import { DocumentType } from '@typegoose/typegoose'
import { Tag } from './tag.type';
import { PaginationQueryDTO, ResourceList } from 'src/utils/types';
import { ApiPagination } from 'src/utils/pagination.decorators';


@ApiTags('Tag')
@Controller('tag')
export class TagController {

    constructor(private readonly tagService: TagService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async createService(@Body() data: TagDTO): Promise<DocumentType<Tag>> {
        return this.tagService.createService(data)
    }

    @ApiPagination()
    @Get()
    async indexService(@Query() query: PaginationQueryDTO): Promise<ResourceList<Tag>> {
        return this.tagService.indexService(query)
    }

    @Get('/:_id')
    async showService(@Param('_id') _id: string): Promise<DocumentType<Tag>> {
        return this.tagService.showService(_id)
    }

    @Put('/:_id')
    async updateService(@Param('_id') _id: string, @Body() data: TagDTO): Promise<DocumentType<Tag>> {
        return this.tagService.updateService(_id, data)
    }

    @Delete('/:_id')
    async deleteService(@Param('_id') _id: string): Promise<DocumentType<Tag>> {
        return this.tagService.deleteService(_id)
    }
}
