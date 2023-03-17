import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from '../product/product.schemas';

// export const StoreSchema = new Schema({
// 	name: { type: String, required: true },
// 	products: { type: [ProductSchema], required: true, default: [] },
// });

export type StoreDocument = HydratedDocument<Store>;

@Schema()
export class Store {
	@Prop({ required: true })
	name: string;

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
	products: Product[];
}

export const StoreSchema = SchemaFactory.createForClass(Store);
