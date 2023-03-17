import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle('Role-Based Access Store API')
		.setDescription(
			'An API to manage users, roles, store and products with authentication and authorization.'
		)
		.setVersion('1.0')
		.addBasicAuth()
		.addBearerAuth()
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(3000);

	console.log(`Application is running on: ${await app.getUrl()}`);
	console.log(`API SwaggerUI is running on: ${await app.getUrl()}/api`);
}
bootstrap();
