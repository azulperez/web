const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".side-bar");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    sideBar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
        hamburger.classList.remove("active");
        sideBar.classList.remove("active");
    })
)

const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");


function openFullImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeimg(){
    fulImgBox.style.display = "none";
}
