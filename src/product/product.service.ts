import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Product } from './product.type';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { ProductDTO, ProductUpdateDTO } from './product.dto';
import { store, index, show, destroy, destroyAll, update } from 'quick-crud';
import { PaginationQueryDTO, ResourceList } from 'src/utils/types';
import { Types } from 'mongoose';
import { jwtPayload } from 'src/session/session.utils';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product) private readonly model: ReturnModelType<typeof Product>) { }

    async createService(body: ProductDTO): Promise<DocumentType<Product>> {
        if (body.price) body.price = +body.price;
        if (body.discountPrice) body.discountPrice = +body.discountPrice;
        //@ts-ignore
        return this.model.create(body)
    }

    async indexService(query: PaginationQueryDTO): Promise<ResourceList<Product>> {

        if (query.limit) query.limit = +query.limit;
        if (query.page) query.limit = +query.page;
        return index({ model: this.model, paginationOptions: query })
    }

    async showService(_id: string): Promise<DocumentType<Product>> {
        return show({ model: this.model, where: { _id } })
    }

    async updateService(_id: string, data: ProductUpdateDTO): Promise<DocumentType<Product>> {
        return update({ model: this.model, where: { _id }, data })
    }

    async destroyService(_id: string): Promise<DocumentType<Product>> {
        return destroy({ model: this.model, where: { _id } })
    }


}
