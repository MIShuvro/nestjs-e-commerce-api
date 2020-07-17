import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypegooseModule } from 'nestjs-typegoose'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';
import { LocationModule } from './location/location.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { SessionModule } from './session/session.module';

import {JwtModule} from '@nestjs/jwt'
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

const config: ConfigService = new ConfigService()

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    {
      ...JwtModule.register({ secret: config.get('APP_SECRET') }),
      global:true
    },
    TypegooseModule.forRoot(config.get('DATABASE_URL'), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }),
    CategoryModule,
    TagModule,
    LocationModule,
    AdminModule,
    AuthModule,
    SessionModule,
    ProductModule,
    CartModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
