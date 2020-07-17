import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Admin } from './admin.type';

@Module({
  imports: [TypegooseModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService]
})
export class AdminModule { }
