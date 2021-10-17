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

class Book {
    constructor(title, genre, author, read) {
        this.title = title
        this.genre = genre
        this.author = author
        this.read = read
        this.readDate = undefined
    }
}

class BookList extends Book {
    constructor() {
        super()
        this.booksReads = [];
        this.booksNread = [];
        this.library = [];
    }

    bookObject = () => {
        const toRead = [];
        const inRead = [];
        let lastRead = undefined
        let counttR = 0;
        let countRe = 0;
        let countlast = 0;


        const Rlist = (this.booksNread.filter(bookNread => (bookNread.read === 'reading')
            ? (inRead.push(bookNread.title), countRe += 1)
            : countRe));
        if (countRe > 0) {
            console.log('You/re reading now:')
            console.table(inRead)
        }
        else console.log("Sorry, but you don't set none book as reading")

        const Nlist = (this.booksNread.filter(bookNread => (bookNread.read === "not yet")
            ? (toRead.push(bookNread.title), counttR += 1)
            : counttR));
        if (counttR > 0) {
            console.log('You may read:')
            console.table(toRead)
        }
        else console.log("Sorry, has no new suggestions to read")

        const Llist = (this.booksReads.length > 0)
            ? (countlast = this.booksReads.length - 1)
            : countlast;
        if (countlast > 0) {
            lastRead = this.booksReads[countlast]
            console.log('The last read book was:')
            console.table(lastRead)
        }
        else console.log("You don't set any book as read")
    }

    serchByAuthor = (writerName) => {
        const searchresult = [];
        let countA = 0;
        const returnAuthor = this.library.map((writer) => {
            (writer.author === writerName) ? (searchresult.push(writer), countA += 1)
                : (countA)
        }
        );
        if (countA > 0) {
            console.log('Your search return:')
            console.table(searchresult)
        }
        else console.log("Sorry none book was found for this author")
    }

    searchByTitle = (titleXName) => {
        const searchresultT = [];
        let countT = 0;
        const returnTitle = this.library.map((titler) => {
            (titler.title === titleXName) ? (searchresultT.push(titler), countT += 1)
                : (countT)
        }
        );
        if (countT > 0) {
            console.log('Your search return:')
            console.table(searchresultT)
        }
        else console.log("Sorry none book was found with this title")
    }

    searchByGenre = (genderName) => {
        const searchresultG = [];
        let countG = 0;
        const returnTitle = this.library.map((genderr) => {
            (genderr.gender === genderName) ? (searchresultG.push(genderr), countG += 1)
                : (countG)
        }
        );
        if (countG > 0) {
            console.log('Your search return:')
            console.table(searchresultG)
        }
        else console.log("Sorry none book was found with this kind of gender")
    }

    addBook(title, genre, author, read, readDate) {
        const newBook = new Book(title, genre, author, read, readDate)
        if (newBook.read === 'read') {
            newBook.readDate = new Date();
            this.booksReads.push(newBook);
            this.library.push(newBook);
            console.log(`Book ${newBook.title} registered, marked as finished read on ${newBook.readDate}`)
            console.log(`Congratulations, You've read ${this.booksReads.length} books`)
            console.log(`But still have ${this.booksNread.length} books to read`)
        }

        if (newBook.read === "reading") {
            newBook.readDate = undefined;
            this.booksNread.push(newBook);
            this.library.push(newBook);
            console.log(`Book ${newBook.title} registered, please return soon to check it as finished`)
            console.log(`You still have ${this.booksNread.length} books to read`)
        }

        if (newBook.read === "not yet") {
            newBook.readDate = undefined;
            this.booksNread.push(newBook);
            this.library.push(newBook);
            console.log(`Book ${newBook.title} registered and it's amazing, let's start to read?`)
            console.log(` You still have ${this.booksNread.length} books to read`)
        }
    };

    finished = (title, genre, author, read, readDate) => {
        let updateBook = new Book(title, genre, author, read, readDate)
        if (updateBook.read === "reading" || updateBook.read === "not yet") {
            let shelf = this.booksNread.indexOf(updateBook)
            this.booksNread.splice(shelf)
            updateBook.read = 'read'
            updateBook.readDate = new Date()
            this.booksReads.push(updateBook)
            console.log(`Book ${updateBook.title} registered, marked as finished read on ${updateBook.readDate}`)
            console.log(`Congratulations, You've read ${this.booksReads.length} books`)
            console.log(`But still have ${this.booksNread.length} books to read`)

        }
        else console.log('Book was marked as read before')
    }
}


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

console.log("The books to read:");
console.table(bookshelf.booksNread);
console.log("The finished books:");
console.table(bookshelf.booksReads);
console.log("The book plan:");

bookshelf.bookObject()

console.log("The entire list:");
console.table(bookshelf.library);

bookshelf.finished('ves iv', 'thriller', 'monahon', 'not yet');
bookshelf.finished('ve v', 'thriller', 'monahon', 'reading');
bookshelf.finished('ntos vi', 'thriller', 'monahon', 'reading');
bookshelf.finished("O livro muito loco", "terror", "Ygor", "reading");

console.log("New books to read:");
console.table(bookshelf.booksNread);
console.log("New finished books:");
console.table(bookshelf.booksReads);
console.log("New book plan:");

bookshelf.bookObject()

console.log("New entire list:");
console.table(bookshelf.library);

bookshelf.serchByAuthor('Paulo Coelho')
bookshelf.serchByAuthor('J. K. Rowling')

bookshelf.searchByGenre('terror')
bookshelf.searchByGenre('Comedy')

bookshelf.searchByTitle("O livro muito loco")
bookshelf.searchByTitle("Mulan")