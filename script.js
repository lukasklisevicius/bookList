class Book{
  constructor(title,author,total,readed,rate){
    this.title = title
    this.author = author
    this.total = total
    this.readed = readed
    this.rate = rate
  }

  // shows left to read pages
get leftPages() {
  return this.total - this.readed
  }
  // shows rating stars
  get showRate() {
  let strg = ""
  for(let i=1;i<=5;i++){
  if(i <= this.rate){
  strg += `<li class="star-rate active disabled"><i class="fas fa-star"></i>`
  }else {
  strg += `<li class="star-rate disabled"><i class="fas fa-star"></i>`
  }
  
      }
      return strg
  
  }
  
  // creates table data
  createTableData() {
  const table = document.querySelector('.table')
  const row = document.createElement('div')
  row.classList = 'tb-data'
  const structure = `<div class="td-title td1">${this.title}</div> <div class="td td2 ">${this.author}</div> <div class="td td3 ">${this.leftPages}</div> <div class="td-rate td4"> <div class="ratings"> <ul class="stars"> ${this.showRate} </ul> </div> <div class="btns"> <button id="edit"><i class="far fa-edit"></i></button> <button><i class="fas fa-trash-alt"></i></button> </div> </div>`
  // need to add edit and delete functions here
  row.innerHTML = structure
  table.appendChild(row)
  
  }

  clearFields() {
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#total').value = ''
    document.querySelector('#readed').value = ''
    const rating = document.querySelector('.ratings')
const stars = document.getElementsByName('star')
  }


}
class UI {
   static removeTableData(e) {
      if(e.classList.contains('fa-trash-alt')){
        e.parentElement.parentElement.parentElement.parentElement.remove()
        
      }
  }
}


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
}else{}
}

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
  book.createTableData()

  book.clearFields()

})

const cont = document.querySelector('.footer').addEventListener('click', (e) => {
  UI.removeTableData(e.target)
})

