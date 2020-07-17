import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { async } from 'rxjs';
import { AdminModule } from 'src/admin/admin.module';
import { SessionModule } from 'src/session/session.module';

@Module({
  imports: [JwtModule.registerAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get('APP_SECRET')
    })
  }),
    AdminModule,
    SessionModule,
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
