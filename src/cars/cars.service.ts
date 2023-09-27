import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
	private cars: Car[] = [
		{ id: uuid(), brand: 'toyota', model: 'corolla' },
		{ id: uuid(), brand: 'fiat', model: 'palio' },
		{ id: uuid(), brand: 'jeep', model: 'renegade' },
	];

	findAll() {
		return this.cars;
	}

	findOneById(id: string) {
		const car = this.cars.find((car) => car.id === id);

		if (!car) throw new NotFoundException(`El auto con el id:${id} no existe`);

		return car;
	}

	create(createCarDto: CreateCarDto) {
		const newCar: Car = {
			id: uuid(),
			model: createCarDto.brand,
			brand: createCarDto.model,
		};

		this.cars.push(newCar);
		return newCar;
	}

	update(id: string, updateCarDto: UpdateCarDto) {
		let carDB = this.findOneById(id);

		if (updateCarDto.id && updateCarDto.id !== id)
			throw new BadRequestException(
				'El id del auto no coincide con el ID del body'
			);

		this.cars = this.cars.map((car) => {
			if (car.id === id) {
				carDB = {
					...carDB,
					...updateCarDto,
					id,
				};
				return carDB;
			}
			return car;
		});

		return carDB;
	}

	delete(id: string) {
		let carDB = this.findOneById(id);

		this.cars = this.cars.filter((car) => car.id !== id);
	}
}
