import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  private data = [
    { id: 1, name: 'Islom', age: 16 },
    { id: 2, name: 'Ali', age: 20 },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getById(id: number) {
    const item = this.data.find((i) => i.id === Number(id));
    return item || null;
  }

  create(dto: any) {
    const newItem = {
      id: this.data.length + 1,
      ...dto,
    };
    this.data.push(newItem);
    return newItem;
  }

  update(id: number, dto: any) {
    const index = this.data.findIndex((i) => i.id === Number(id));

    if (index === -1) {
      throw new NotFoundException('Item not found');
    }

    this.data[index] = { id: Number(id), ...dto };
    return this.data[index];
  }

  remove(id: number) {
    const index = this.data.findIndex((i) => i.id === Number(id));

    if (index === -1) {
      throw new NotFoundException('Item not found');
    }

    this.data.splice(index, 1);

    return { success: true };
  }
}