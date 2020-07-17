import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Location } from './location.type';

@Module({
  imports: [TypegooseModule.forFeature([Location])],
  controllers: [LocationController],
  providers: [LocationService]
})
export class LocationModule { }
