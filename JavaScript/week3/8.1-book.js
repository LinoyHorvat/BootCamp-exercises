const Book ={
  book_name : "Mikey",
  author_name : "Alon Lila",
  publishing_yeary : "2016",
  summary : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio doloribus reiciendis dolorum placeat, at beatae inventore temporibus voluptatem veniam dolores fuga accusantium quod pariatur, cum expedita deleniti, consequuntur quidem."
}

function printBook(Book){
  console.log(`The book ${Book.book_name} was written by ${Book.author_name} in the year ${Book.publishing_yeary}`)
}

console.log(printBook(Book));