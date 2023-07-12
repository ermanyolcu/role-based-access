import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/role.enums';

@created
export class CreateUserDto {
	username: string;
	email: string;
	password: string;
	role: UserRole;
}
function created(target: typeof CreateUserDto): void | typeof CreateUserDto {
	throw new Error('Function not implemented.');
}
