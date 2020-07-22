import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Order } from './order.type';
import { Types } from 'mongoose';
import { index, store } from 'quick-crud';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) readonly model: ReturnModelType<typeof Order>) {}

  async placeOrder(sub: Types.ObjectId, data: Order): Promise<Order> {
    return store({ model: this.model, data });
  }
}
