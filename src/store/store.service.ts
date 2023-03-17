import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store, StoreDocument } from 'src/store/store.schemas';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoreService {
	constructor(
		@InjectModel(Store.name)
		private userModel: Model<StoreDocument>
	) {}

	create(createStoreDto: CreateStoreDto) {
		return 'This action adds a new store';
	}

	findAll() {
		return `This action returns all store`;
	}

	findOne(id: number) {
		return `This action returns a #${id} store`;
	}

	update(id: number, updateStoreDto: UpdateStoreDto) {
		return `This action updates a #${id} store`;
	}

	remove(id: number) {
		return `This action removes a #${id} store`;
	}
}
