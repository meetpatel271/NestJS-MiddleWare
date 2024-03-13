import { Controller, Delete, Get, Post, Put, Param, Req  } from "@nestjs/common";

@Controller("book")
export class BookController{

    @Post("/add")
    addBook() : string{
        return "This will add book";
    } 

    @Delete("/delete")
    deleteBook() : string{
        return "This will delete book";
    }

    @Put("/update")
    updateBook() : string{
        return "This will updatebook";
    }

    @Get("/id")
    findAllBooks() : string {
        return "This will find all book"
    }

    @Get('findBookById/:bookId')
    findBookById(@Param() params): string {
  console.log(params.bookId);
  return `This action returns a #${params.bookId} `;
}

    @Get("/req")
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

}