class Book {
// object construktor
constructor(title,author,totalPages,readPages,rating){
this.title = title
this.author = author
this.totalPages = totalPages
this.readPages = readPages
this.rating = rating
}
// shows left to read pages
get leftPages() {
return this.totalPages - this.readPages
}
// shows rating stars
get showRate() {
let strg = ""
for(let i=1;i<=5;i++){
if(i <= this.rating){
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
// edit the object

}

//stars function
const rating = document.querySelector('.stars')
const stars = document.getElementsByName('.star')
let rate = 0;
rating.onclick = e => {
const elClass = e.target.classList
if (!elClass.contains('active')) {
stars.forEach(star => star.classList.remove('active'))
elClass.add('active')
rate = e.target.value
}else{}

}

//modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("edit");
const span = document.getElementsByClassName("close")[0];

//modal logic
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

    <!-- The Modal -->
    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <form action="">
                <label for="title">Title:</label>
                <input type="text" id="title" value="">
                <label for="author">Author:</label>
                <input type="text" id="author">
                <label for="total">Total:</label>
                <input type="number" id="total">
                <label for="readed">Pages already read:</label>
                <input type="number" id="readed">
                <div class="ratings">
                    <ul class="modal-stars">
                        <li class="star" value="1"></li>
                        <li class="star" value="2"></li>
                        <li class="star" value="3"></li>
                        <li class="star" value="4"></li>
                        <li class="star" value="5"></i></li>
                    </ul>
                </div>
                <button class="submit" type="submit">Edit</button>
                <div><span class="close">&times;</span></div>
            </form>
        </div>
    </div>
