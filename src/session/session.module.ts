import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Session } from './session.type';

@Module({
  imports: [TypegooseModule.forFeature([Session])],
  controllers: [SessionController],
  providers: [SessionService],
  exports: [SessionService]
})
export class SessionModule { }
