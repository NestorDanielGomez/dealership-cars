import { Brand } from 'src/brands/entities/brand.entity';

import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
	{ id: uuid(), name: 'toyota', createAt: new Date().getTime() },
	{ id: uuid(), name: 'fiat', createAt: new Date().getTime() },
	{ id: uuid(), name: 'volvo', createAt: new Date().getTime() },
	{ id: uuid(), name: 'renault', createAt: new Date().getTime() },
];
