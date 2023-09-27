import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
	@IsString({ message: 'El mensaje es personalizado' })
	readonly brand: string;

	@IsString()
	@MinLength(3)
	readonly model: string;
}
