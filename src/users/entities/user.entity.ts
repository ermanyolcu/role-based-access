import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/role.enums';

export class User {
	username: string;
	email: string;
	password: string;
	role: UserRole;
}
