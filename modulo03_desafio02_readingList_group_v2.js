///////////////////////////////////////////////////////////

//Integrantes do Grupo

//Yan Matheus
//Marisa Salles
//Heloísa Bezerra


////////////////////////////////////////////////////////////


//Para leitura do enunciado e maiores detalhes, por favor leia o arquivo 
//modulo03_desafio02_readingList_group_v1_README.txt

//Alguns exemplos para teste deste código seguem ao final do mesmo na seção
//SAMPLES BELLOW

///////////////////////////////////////////////////////////

class BookLists {
  constructor() {
    this.allBooks = [];
    this.numberOfReadBooks;
    this.numberOfUnreadBooks;
    this.nextBookToRead;
    this.currentBookToRead;
    this.lastBookToRead;
  }

  listBooks() {
    return this.allBooks;
  }

  get numberOfReadBooks() {
    return this.allBooks.filter((book) => book.hasRead).length;
  }

  get numberOfUnreadBooks() {
    return this.allBooks.filter((book) => !book.hasRead).length;
  }

  readBooks() {
    const readBooks = this.allBooks.filter((book) => book.hasRead);
    return readBooks;
  }

  unreadBooks() {
    const unreadBooks = this.allBooks.filter((book) => !book.hasRead);
    return unreadBooks;
  }

  setCurrentBookToRead(title) {
    if (this.currentBookToRead != undefined) {
      return "You already reading a book, try to finish to start other";
    }
    for (const book of this.allBooks) {
      if (book.title === title) {
        this.currentBookToRead = book;
        return;
      }
    }
    return "The Book was not found";
  }

  finishCurrentBook() {
    if (this.currentBookToRead === undefined) {
      return "You don't have a current book";
    }
    for (const book of this.allBooks) {
      if (book === this.currentBookToRead) {
        book.hasRead = true;
        this.lastBookToRead = book;
        this.currentBookToRead = undefined;
        this.nextBookToRead = this.allBooks.find((book) => !book.hasRead);
      }
    }
  }

  addBook(title, genre, author, hasRead) {
    const newBook = new Book(title, genre, author, hasRead);
    if (this.allBooks.includes(newBook)) {
      return "The Book already added, try add other book";
    }
    this.allBooks = [...this.allBooks, newBook];
  }

  getBookBy(bookAtribute, userEntries) {
    const entriesToUpper = userEntries.toUpperCase();
    const filterBooks = this.allBooks.filter(
      (book) => book[bookAtribute].toUpperCase() === entriesToUpper
    );
    return filterBooks.length > 0
      ? filterBooks
      : `No book by this ${bookAtribute} was found`;
  }

  getReadingSuggestions() {
    if (this.nextBookToRead === undefined) {
      return "We don't have none suggestions for you, try again later";
    }
    return `We find a new book for you read, 
            how about reading ${this.nextBookToRead}`;
  }
}

class Book {
  constructor(title, genre, author, hasRead) {
    this.title = title || "Unknown title";
    this.genre = genre || "Unknown genre";
    this.author = author || "Unknown author";
    this.hasRead = hasRead || false;
    this.readDate = this.hasRead ? new Date(Date.now()) : "No read date";
  }
}

/////////////////////////////////// SAMPLES BELLOW /////////////////////////////////

let bookshelf = new BookLists;

bookshelf.addBook('ventos', 'thriller', 'monahon', 'hasRead');
bookshelf.addBook('ventos ii', 'thriller', 'monahon');
bookshelf.addBook('ventos iii', 'thriller', 'monahon');
bookshelf.addBook('ventos iv', 'thriller', 'monahon');
bookshelf.addBook('ventos v', 'thriller', 'monahon');
bookshelf.addBook('ventos vi', 'thriller', 'monahon');
bookshelf.addBook('rios', 'romance', 'hon', 'hasRead');
bookshelf.addBook('picos ii', 'comedy', 'mona', 'hasRead');
bookshelf.addBook('idos iii', 'thriller', 'monahon');
bookshelf.addBook('ves iv', 'thriller', 'monahon');
bookshelf.addBook('ve v', 'thriller', 'monahon');
bookshelf.addBook('ntos vi', 'thriller', 'monahon');
bookshelf.addBook("O livro muito loco", "terror", "Ygor");
bookshelf.setCurrentBookToRead("Meu novo mundo", "ação", "Leonardo");
bookshelf.addBook("Meu novo mundo", "ação", "Leonardo");
bookshelf.setCurrentBookToRead("Meu novo mundo", "ação", "Leonardo");
bookshelf.addBook('Harry Potter and the Prisoner of Azkaban', 'Fantasy', 'J. K. Rowling');
bookshelf.addBook('Harry Potter and the Chamber of Secrets', 'Fantasy', 'J. K. Rowling');
bookshelf.addBook("Harry Potter and the Philosopher's Stone", 'Fantasy', 'J. K. Rowling');

bookshelf.listBooks()
bookshelf.readBooks()
bookshelf.unreadBooks()

bookshelf.finishCurrentBook('ves iv', 'thriller', 'monahon');
bookshelf.finishCurrentBook('ve v', 'thriller', 'monahon');
bookshelf.finishCurrentBook('ntos vi', 'thriller', 'monahon');
bookshelf.finishCurrentBook("O livro muito loco", "terror", "Ygor");



bookshelf.getBookBy('author','Paulo Coelho')
bookshelf.getBookBy('author','J. K. Rowling')

bookshelf.listBooks()
bookshelf.readBooks()
bookshelf.unreadBooks()
bookshelf.setCurrentBookToRead()


