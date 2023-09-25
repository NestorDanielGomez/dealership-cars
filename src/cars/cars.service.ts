import {
  Body,
  Injectable,
  NotFoundException,
  Post,
  Patch,
  Delete,
  ParseIntPipe,
  Param,
} from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'toyota', model: 'corolla' },
    { id: 2, brand: 'fiat', model: 'palio' },
    { id: 3, brand: 'jeep', model: 'renegade' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`El auto con el id:${id} no existe`);

    return car;
  }
  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
