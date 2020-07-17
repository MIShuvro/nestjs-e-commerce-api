import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Cart } from './cart.type';

@Module({
  imports: [TypegooseModule.forFeature([Cart])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule { }
