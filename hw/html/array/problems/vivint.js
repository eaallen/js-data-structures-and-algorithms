// takes a string reverse of string "hello"=>"olleh"
function reverseString(str) {
  // half length of string

  const arr_words = str.split(' ')
  const output = []
  // for (const word of arr_words) {
  //   output.unshift(word)
  // }

  for (let index = arr_words.length - 1; index >= 0; index--) {
    output.push(arr_words[index])
  }

  return output.join(' ')
}

console.log(reverseString('hello world'))

class Users {
  constructor() {
    this.name
    this.id
    this.books = []
  }
  getBook(book) {
    this.books.push(book)
  }
}

class Books {
  constructor() {
    this.title
    this.author
    this.quantity
    this.active_users = {}
  }
  checkOut(user) {
    user.getBook(this)
    this.active_users[user.id] = user
    this.quantity--
  }
}

async function getBookByAuthor(author) {
  const books = await Lib.getAllBooks() // []
  return books.filter(book => book.author === author)
}