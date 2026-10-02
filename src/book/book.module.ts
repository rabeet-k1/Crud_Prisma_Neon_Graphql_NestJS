import { Module } from '@nestjs/common';
import { BookService } from './book.service.js';
import { BookResolver } from './book.resolver.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  providers: [BookService, BookResolver],
})
export class BookModule {}
