import { Controller, Post, Body, Get, Param, Query, UsePipes, ValidationPipe, Put, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { ApiTags } from '@nestjs/swagger'
import { LocationDTO } from './location.dto';
import { Location } from './location.type';
import { DocumentType } from '@typegoose/typegoose'
import { ResourceList, PaginationQueryDTO } from 'src/utils/types';
import { ApiPagination } from 'src/utils/pagination.decorators';

@ApiTags("Location")
@Controller('location')
export class LocationController {

    constructor(private readonly locationService: LocationService) { }


    @Post()
    @UsePipes(ValidationPipe)
    async createService(@Body() data: LocationDTO): Promise<DocumentType<Location>> {
        return this.locationService.createService(data)
    }

    @ApiPagination()
    @Get()
    async indexService(@Query() query: PaginationQueryDTO): Promise<ResourceList<Location>> {
        return this.locationService.indexService(query)
    }

    @Get('/:_id')
    async showService(@Param('_id') _id: string): Promise<DocumentType<Location>> {
        return this.locationService.showService(_id)
    }

    @Put('/:_id')
    async updateService(@Param('_id') _id: string, @Body() data: LocationDTO): Promise<DocumentType<Location>> {
        return this.locationService.updateService(_id, data)
    }

    @Delete('/:_id')
    async destoryService(@Param('_id') _id: string): Promise<DocumentType<Location>> {
        return this.locationService.destoryService(_id)
    }

}
