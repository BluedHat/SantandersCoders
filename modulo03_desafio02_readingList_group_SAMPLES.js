///////////////////////////////////////////////////////////

//Integrantes do Grupo

//Yan Matheus
//Marisa Salles
//Heloísa Bezerra

////////////////////////////////////////////////////////////

//Para leitura do enunciado e maiores detalhes, por favor leia o arquivo 
//modulo03_desafio02_readingList_group_v1_README.txt

//Alguns exemplos para teste deste código seguem no arquivo 
//modulo03_desafio02_readingList_group_v4_SAMPLES.js

///////////////////////////////////////////////////////////

/////////////// SAMPLES BELLOW  //////////////////////////////////////////

let bookshelf = new BookList;

bookshelf.addBook('ventos', 'thriller', 'monahon', 'read');
bookshelf.addBook('ventos ii', 'thriller', 'monahon', 'reading');
bookshelf.addBook('ventos iii', 'thriller', 'monahon', 'not yet');
bookshelf.addBook('ventos iv', 'thriller', 'monahon', 'not yet');
bookshelf.addBook('ventos v', 'thriller', 'monahon', 'not yet');
bookshelf.addBook('ventos vi', 'thriller', 'monahon', 'not yet');
bookshelf.addBook('rios', 'romance', 'hon', 'read');
bookshelf.addBook('picos ii', 'comedy', 'mona', 'read');
bookshelf.addBook('idos iii', 'thriller', 'monahon', 'not yet');
bookshelf.addBook('ves iv', 'thriller', 'monahon', 'not yet');
bookshelf.addBook('ve v', 'thriller', 'monahon', 'reading');
bookshelf.addBook('ntos vi', 'thriller', 'monahon', 'reading');
bookshelf.addBook("O livro muito loco", "terror", "Ygor", "reading");
bookshelf.addBook("Meu novo mundo", "ação", "Leonardo", "not yet");
bookshelf.addBook('Harry Potter and the Prisoner of Azkaban', 'Fantasy', 'J. K. Rowling', 'not yet');
bookshelf.addBook('Harry Potter and the Chamber of Secrets', 'Fantasy', 'J. K. Rowling', 'read');
bookshelf.addBook("Harry Potter and the Philosopher's Stone", 'Fantasy', 'J. K. Rowling', 'read');

bookshelf.statistics()
console.log("The books to read:");
console.table(bookshelf.booksNread);
console.log("The finished books:");
console.table(bookshelf.booksReads);
console.log("The book plan:");

bookshelf.bookObject();

console.log("The entire list:");
console.table(bookshelf.library);

bookshelf.finished('ves iv', 'thriller', 'monahon', 'not yet');
bookshelf.finished('ve v', 'thriller', 'monahon', 'reading');
bookshelf.finished('ntos vi', 'thriller', 'monahon', 'reading');
bookshelf.finished("O livro muito loco", "terror", "Ygor", "reading");
bookshelf.addBook('The Shining', 'Horror','Stephen King');

bookshelf.statistics();
bookshelf.getSuggestion();

console.log("New books to read:");
console.table(bookshelf.booksNread);
console.log("New finished books:");
console.table(bookshelf.booksReads);
console.log("New book plan:");

bookshelf.bookObject();

console.log("New entire list:");
console.table(bookshelf.library);

bookshelf.searchByAuthor('Paulo Coelho');
bookshelf.searchByAuthor('J. K. Rowling');

bookshelf.searchByGenre('terror');
bookshelf.searchByGenre('Comedy');

bookshelf.searchByTitle("O livro muito loco");
bookshelf.searchByTitle("Mulan");

bookshelf.searchBookby('title','The Shining');

bookshelf.statistics();
bookshelf.getSuggestion();
