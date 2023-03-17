import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/product/product.schemas';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(Product.name)
		private userModel: Model<ProductDocument>
	) {}

	create(createProductDto: CreateProductDto) {
		return 'This action adds a new product';
	}

	findAll() {
		return `This action returns all product`;
	}

	findOne(id: number) {
		return `This action returns a #${id} product`;
	}

	update(id: number, updateProductDto: UpdateProductDto) {
		return `This action updates a #${id} product`;
	}

	remove(id: number) {
		return `This action removes a #${id} product`;
	}
}