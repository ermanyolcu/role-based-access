import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Role } from '../schemas/role.schemas';
import { UserRole } from 'src/role.enums';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
	@Prop({ required: true })
	username: string;

	@Prop({ required: true })
	email: string;

	@Prop({ required: true })
	password: string;

	// @Prop({
	// 	type: UserRole,
	// 	required: true,
	// 	default: UserRole.User,
	// })
	role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
