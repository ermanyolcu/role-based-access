import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { StoreModule } from './store/store.module';
import { ProductModule } from './product/product.module';
import { StoreController } from './store/store.controller';
import { ProductController } from './product/product.controller';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
	imports: [
		MongooseModule.forRoot(process.env.MONGO_URI),
		AuthModule,
		UsersModule,
		StoreModule,
		ProductModule,
	],
	controllers: [
		AppController,
		UsersController,
		StoreController,
		ProductController,
	],
	providers: [AppService],
})
export class AppModule {}
