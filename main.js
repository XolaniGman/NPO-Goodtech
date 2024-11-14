const menu =document.querySelector(".menu");
const navbar =document.querySelector(".navbar");
menu.addEventListener("click",() =>{
     navbar.classList.toggle("active")
})

window.onscroll = () => {
     navbar.classList.remove('active');
}



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
<button href="https://outlook.live.com/mail/0/" class="btn">Upload</button>
</div>
</form>
`
;
dropArea.innerHTML = filedata;
});
     

const wrapper = document.querySelector(".wrapper"),
header = wrapper.querySelector("header");

function onDrag({movementX, movementY}){
  let getStyle = window.getComputedStyle(wrapper);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  wrapper.style.left = `${leftVal + movementX}px`;
  wrapper.style.top = `${topVal + movementY}px`;
}

header.addEventListener("mousedown", ()=>{
  header.classList.add("active");
  header.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", ()=>{
  header.classList.remove("active");
  header.removeEventListener("mousemove", onDrag);
});

const apply =document.querySelector(".apply");
//  const navbar =document.querySelector(".navbar");
apply.addEventListener("click",() =>{
    wrapper.classList.toggle("active")
 })
 
const vid = document.querySelector('#vid');
const pipBtn = document.querySelector('#pip-btn');

// On click of button, enter PIP mode
pipBtn.addEventListener('click', () => {
  vid.requestPictureInPicture();
});

vid.addEventListener('enterpictureinpicture', () => {
  pipBtn.textContent = 'Vid is now PIP';
  pipBtn.disabled = true;
});

vid.addEventListener('leavepictureinpicture', () => {
  pipBtn.textContent = 'Enter PIP';
  pipBtn.disabled = false;
});