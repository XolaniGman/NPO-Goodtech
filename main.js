const menu =document.querySelector(".menu");
const navbar =document.querySelector(".navbar");
menu.addEventListener("click",() =>{
     navbar.classList.toggle("active")
})

window.onscroll = () => {
     navbar.classList.remove('active');
}

const applyBtn =document.querySelector(".applyBtn");
const appycontainer =document.querySelector(".appycontainer");
applyBtn.addEventListener("click",() =>{
     appycontainer.classList.toggle("active")
})

///upload///
const dropArea = document.querySelector(".drop_box"),
button = dropArea.querySelector("button"),
dragText = dropArea.querySelector("header"),
input = dropArea.querySelector("input");
let file;
var filename;
button.onclick = () => {
input.click();
};
input.addEventListener("change", function (e) {
var fileName = e.target.files[0].name;
let filedata = 
`
<form action="" method="post">
<div class="form">
<h4>${fileName}</h4>
<input type="email" placeholder="Enter email upload file">
<button class="btn">Upload</button>
</div>
</form>
`
;
dropArea.innerHTML = filedata;
});
