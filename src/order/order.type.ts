import { Prop, Ref, ModelOptions } from '@typegoose/typegoose';
import { Cart } from 'src/cart/cart.type';

@ModelOptions({ schemaOptions: { timestamps: true } })
export class Order {
  @Prop({ ref: 'Cart' })
  products?: Ref<Cart>[];

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  contactNumber: string;

  @Prop({ required: true })
  agree: boolean;
}
