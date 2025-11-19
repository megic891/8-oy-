import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      host: 'postgres', 
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true, 
    }),

    
    MongooseModule.forRoot(process.env.MONGO_URL || ''),
  ],
})
export class AppModule {}