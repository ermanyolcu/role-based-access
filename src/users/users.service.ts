import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/user.schemas';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User.name)
		private userModel: Model<UserDocument>
	) {}

	async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
		return this.userModel.create(createUserDto);
	}

	async findAll(): Promise<User[]> {
		return this.userModel.find().exec();
	}

	async findOne(username: string): Promise<User> {
		return this.userModel.findOne({ username: username });
	}

	async findById(id: string): Promise<User> {
		return this.userModel.findById(id);
	}

	async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
		return this.userModel.findByIdAndUpdate(id, updateUserDto);
	}

	async remove(id: string) {
		return this.userModel.findByIdAndDelete(id);
	}
}
