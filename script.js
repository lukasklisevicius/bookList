// formos generavimo logika naudojant oop
// apziureti butinas klaidas pagal pvz
// zvaigdutes ir DOM DOM

//modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("edit");
const span = document.getElementsByClassName("close")[0];
//table
const table = document.querySelector('.table')
const td = document.querySelectorAll('.td')
const th = document.querySelectorAll('.th')

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
