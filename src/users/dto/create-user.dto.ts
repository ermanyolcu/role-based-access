import { UserRole } from 'src/role.enums';

export class CreateUserDto {
	username: string;
	email: string;
	password: string;
	role: UserRole;
}
