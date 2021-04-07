"use strict"

// BOOK CLASS     
class Book{
    //book obj constructor
    constructor(title,author,total,readed,rate){
        this.title = title
        this.author = author
        this.total = total
        this.readed = readed
        this.rate = rate
    }
    // gets number of left to read pages
    get leftPages() {
        return this.total - this.readed
    }
    // to set new values to the book
    edited(title,author,total,readed,rate){
        this.title = title
        this.author = author
        this.total = total
        this.readed = readed
        this.rate = rate
    }
    }


//INTERFACE CLASS
class UI{
    //to display book row in the table
    static displayBook(book){
        const table = document.querySelector('.table')
        const row = document.createElement('div')
        row.classList = 'tb-data'
        const structure = `<div class="td-title td1">${book.title}</div> <div class="td td2 ">${book.author}</div> <div class="td td3 ">${book.leftPages}</div> <div class="td-rate td4"> <div class="ratings"> <ul class="stars"> ${UI.displayRate(book)} </ul> </div> <div class="btns"> <button id="edit"><i class="far fa-edit"></i></button> <button><i class="fas fa-trash-alt"></i></button> </div> </div>`
        row.innerHTML = structure
        table.appendChild(row)
    }
    //to show rating of the book with the stars
    static displayRate(book){
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
    //to display Err or success msg
    static displayMsg(){}
    //to remove book from the table
    static removeBook(e){
        e.parentElement.parentElement.parentElement.parentElement.remove()
    }
    //to edit book values
    static editBook(book) {
        const cont = document.querySelector('.footer').addEventListener('click', (e) => {
            let clicked = e.target
            console.log(clicked)
            if((clicked.classList.contains('fa-edit'))){
                console.log(book.rate)
                document.querySelector('#title').value = book.title
                document.querySelector('#author').value = book.author
                document.querySelector('#total').value = book.total
                document.querySelector('#readed').value = book.readed
                rate = book.rate
                document.querySelector('#button').value = 'edit'
                form.addEventListener('edit',(e)=>{
                    e.preventDefault()
                    //get form values
                    const title = document.querySelector('#title').value
                    const author = document.querySelector('#author').value
                    const total = document.querySelector('#total').value
                    const readed = document.querySelector('#readed').value
                    const curentRate = rate
                  
                    book.edited(title,author,total,readed,curentRate)
                    console.log(book)
                  })
            }
        })}

    
    //to clear form
    static clearFields() {
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#total').value = ''
        document.querySelector('#readed').value = ''
      }  
}


//EVENTS
//to get value of star rating
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
//to submit form, and create new book
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
  UI.displayBook(book)
  UI.editBook(book)
  UI.clearFields()

})
//to remove the row from the table, or edit book
const cont = document.querySelector('.footer').addEventListener('click', (e) => {
    let clicked = e.target
    if((clicked.classList.contains('fa-trash-alt'))){
        UI.removeBook(clicked)
    }
  })



    
