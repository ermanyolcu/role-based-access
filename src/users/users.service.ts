import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/user.schemas';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User.name)
		private userModel: Model<UserDocument>
	) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		const createdUser = new this.userModel(createUserDto);
		return createdUser.save();
	}

	async findAll(): Promise<User[]> {
		return this.userModel.find().exec();
	}

	async findOne(username: string): Promise<User> {
		return this.userModel.findOne({ username: username });
	}

	async findById(id: number): Promise<User> {
		return this.userModel.findById(id);
	}

	async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
		return this.userModel.findByIdAndUpdate(id, updateUserDto);
	}

	async remove(id: number) {
		return this.userModel.findByIdAndDelete(id);
	}
}
