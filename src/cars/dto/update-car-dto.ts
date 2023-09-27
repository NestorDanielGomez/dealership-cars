import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
	@IsString()
	@IsUUID()
	@IsOptional()
	readonly id?: string;

	@IsString({ message: 'El mensaje es personalizado' })
	@IsOptional()
	readonly bran?: string;

	@IsString()
	@MinLength(3)
	@IsOptional()
	readonly model?: string;
}
