import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Order } from './order.type';

@Module({
  imports: [TypegooseModule.forFeature([Order])],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
