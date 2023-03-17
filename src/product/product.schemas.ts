import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// export const ProductSchema = new Schema({
// 	name: { type: String, required: true },
// });

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
	@Prop({ required: true })
	name: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
