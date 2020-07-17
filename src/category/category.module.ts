import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Category } from './category.type';

@Module({
  imports: [TypegooseModule.forFeature([Category])],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule { }
