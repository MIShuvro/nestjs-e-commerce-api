import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Tag } from './tag.type';

@Module({
  imports: [TypegooseModule.forFeature([Tag])],
  providers: [TagService],
  controllers: [TagController]
})
export class TagModule { }
