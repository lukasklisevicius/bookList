'use strict'

//book class

class Book{
    constructor(title,author,total,readed,rate){
        this.title = title
        this.author = author
        this.total = total
        this.readed = readed
        this.rate = rate
    }
    get leftPages() {
        return this.total - this.readed
        }
}

class Table{
    static displayBooks(){
    const books = Store.getBooks()
    books.forEach((book) => Table.createTableData(book)
    )}

    static createTableData(book) {
    
    const table = document.querySelector('.table')
    const row = document.createElement('div')
    row.classList = 'tb-data'
    const structure = `<div class="td-title td1">${book.title}</div> <div class="td td2 ">${book.author}</div> <div class="td td3 ">${Book.leftPages}</div> <div class="td-rate td4"> <div class="ratings"> <ul class="stars"> ${Table.showRate(book)} </ul> </div> <div class="btns"> <button id="edit"><i class="far fa-edit"></i></button> <button><i class="fas fa-trash-alt"></i></button> </div> </div>`
    row.innerHTML = structure
    table.appendChild(row)
    }

    static showRate(book) {
        let strg = ""
        for(let i=1;i<=5;i++){
        if(i <= book.rate){
        strg += `<li class="star-rate active disabled"><i class="fas fa-star"></i>`
        }else {
        strg += `<li class="star-rate disabled"><i class="fas fa-star"></i>`
        }
        
            }
            return strg
        
        }

    static clearFields() {
            document.querySelector('#title').value = ''
            document.querySelector('#author').value = ''
            document.querySelector('#total').value = ''
            document.querySelector('#readed').value = ''
            const rating = document.querySelector('.ratings')
        const stars = document.getElementsByName('star')
          }    

     static removeTableData(e) {
            if(e.classList.contains('fa-trash-alt')){
              e.parentElement.parentElement.parentElement.parentElement.remove()
              Store.removeBook()
            }
        }      
}
//store class

class Store{
    static getBooks() {
        let books
        if(localStorage.getItem('books') === null){
            books = []
        }else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books
    }
    static addBook(book) {
        const books = Store.getBooks()
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }

}

// event display

document.addEventListener('DOMContentLoaded',Table.displayBooks)
//event add

const form = document.querySelector('#input-form')
const btn = document.querySelector('#button')
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  //get form values
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const total = document.querySelector('#total').value
  const readed = document.querySelector('#readed').value
  const curentRate = rate

  const book = new Book(title,author,total,readed,curentRate)
  console.log(book)
  Table.createTableData(book)
  Store.addBook(book)

  Table.clearFields()

})

const rating = document.querySelector('.ratings')
const stars = document.getElementsByName('star')
let rate = 0;
rating.onclick = e => {
e.preventDefault()
const elClass = e.target.classList
if (!elClass.contains('active')) {
stars.forEach(star => star.classList.remove('active'))
elClass.add('active')
rate = e.target.value
console.log(rate)
}
}

const cont = document.querySelector('.footer').addEventListener('click', (e) => {
    Table.removeTableData(e.target)
  })