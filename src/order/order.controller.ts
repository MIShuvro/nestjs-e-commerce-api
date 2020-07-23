import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.type';
import { Types } from 'mongoose';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async placeOrder(
    @Body() data: any,
    @Param('authorId') sub: Types.ObjectId,
  ): Promise<Order> {
    return this.orderService.placeOrder(sub, data);
  }
}
