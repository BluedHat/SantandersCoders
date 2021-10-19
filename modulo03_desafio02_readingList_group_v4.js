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

class Book {
    constructor(title, genre, author, read) {
        this.title = title || 'Unknown title';
        this.genre = genre || 'Unknown genre';
        this.author = author || 'Unknown author';
        this.read = read || "not yet";
        this.readDate = undefined;
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
    };

    statistics( ){

        const readBooks   = this.booksReads.length;        
        const unreadBooks = this.booksNread.length;
        const totalBooks  = readBooks + unreadBooks;
        const inReadingBooks = this.booksNread.filter((book) => book.read === "reading").length
        return `This library have ${totalBooks}, ${readBooks} are finished and  ${unreadBooks} not finished yet just to remmember you has ${inReadingBooks} tagged like reading`
    };

    getSuggestion( ) {
        return (this.booksNread[0])
          ? `How about "${this.booksNread[0].title}" written by ${this.booksNread[0].author}?`
          : "We don't have any suggestions right now. Try again later";
    };

    searchBookby(bookAtribute, userEntries) {
        const entriesToUpper = userEntries.toUpperCase();
        const filterBooks = this.library.filter(
          (book) => book[bookAtribute].toUpperCase() === entriesToUpper
        );
        return filterBooks.length > 0
          ? filterBooks
          : `No book by this ${bookAtribute} was found`;
    };

    searchByAuthor(authorName) {
		const upperCaseEntry = authorName.toUpperCase();
		const byAuthor = this.library.filter(
			(book) => book.author.toUpperCase() === upperCaseEntry
		);
		return byAuthor.length > 0 ? byAuthor : `Author ${authorName} not found.`;
	};

    searchByTitle (titleName) {
		const upperCaseEntry = titleName.toUpperCase();
		const byTitle = this.library.filter(
			(book) => book.title.toUpperCase() === upperCaseEntry
		);
		return byTitle.length > 0 ? byTitle : `Genre ${titleName} not found.`;
	};

    searchByGenre (genreType) {
		const upperCaseEntry = genreType.toUpperCase();
		const byGenre = this.library.filter(
			(book) => book.genre.toUpperCase() === upperCaseEntry
		);
		return byGenre.length > 0 ? byGenre : `Genre ${genreType} not found.`;
	};


    addBook(title, genre, author, read, readDate) {
        //TODO Bloquear a inserção de livros repetidos
        const newBook = new Book(title, genre, author, read, readDate)
        if (newBook.read === 'read') {
            newBook.readDate = new Date();
            this.booksReads.push(newBook);
            this.library.push(newBook);
            return `Book ${newBook.title} registered, marked as finished read on ${newBook.readDate}
                    Congratulations, You've read ${this.booksReads.length} books
                    But still have ${this.booksNread.length} books to read`
        }
        

        if (newBook.read === "reading") {
            newBook.readDate = undefined;
            this.booksNread.push(newBook);
            this.library.push(newBook);
            return `Book ${newBook.title} registered, please return soon to check it as finished
                    You still have ${this.booksNread.length} books to read`
        }
        

        if (newBook.read === "not yet") {
            newBook.readDate = undefined;
            this.booksNread.push(newBook);
            this.library.push(newBook);
            return `Book ${newBook.title} registered and it's amazing, let's start to read?
                    You still have ${this.booksNread.length} books to read`
        }};


    finished = (title, genre, author, read, readDate) => {
        let updateBook = new Book(title, genre, author, read, readDate)
        if (updateBook.read === "reading" || updateBook.read === "not yet") {
            let shelf = this.booksNread.indexOf(updateBook)
            this.booksNread.splice(shelf)
            updateBook.read = 'read'
            updateBook.readDate = new Date()
            this.booksReads.push(updateBook)
                 return `Book ${updateBook.title} registered, marked as finished read on ${updateBook.readDate}
                         Congratulations, You've read ${this.booksReads.length} books
                         But still have ${this.booksNread.length} books to read`

        }
                 return  'Book was marked as read before'
    };
};
