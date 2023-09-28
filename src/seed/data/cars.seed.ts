import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
	{ id: uuid(), brand: 'toyota', model: 'corolla' },
	{ id: uuid(), brand: 'fiat', model: 'palio' },
	{ id: uuid(), brand: 'jeep', model: 'renegade' },
];
