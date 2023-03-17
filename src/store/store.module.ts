import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Store, StoreSchema } from 'src/store/store.schemas';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }]),
	],
	controllers: [StoreController],
	providers: [StoreService],
	exports: [StoreService],
})
export class StoreModule {}
