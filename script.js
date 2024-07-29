function sendMail(){
  emailjs.send("service_gf7rdbo","template_qg4mjlc",{
    name: document.querySelector(".name").value,
    message: document.querySelector(".email").value,
    email: document.querySelector(".message").value,
    }).then(alert("Email is Sent Successfully 👍🤩!"))
}



let li=document.querySelectorAll("li a");
li[0].style.color="rgb(121, 0, 255)"

li[0].addEventListener("click",()=>{
  li[0].style.color="rgb(121, 0, 255)";
  li[1].style.color=""
  li[2].style.color=""
  li[3].style.color=""
  li[4].style.color=""
  li[5].style.color=""

  

})
li[1].addEventListener("click",()=>{
  li[0].style.color="";
  li[1].style.color="rgb(121, 0, 255)"
  li[2].style.color=""
  li[3].style.color=""
  li[4].style.color=""
  li[5].style.color=""

})

li[2].addEventListener("click",()=>{
  li[0].style.color="";
  li[1].style.color=""
  li[2].style.color="rgb(121, 0, 255)"
  li[3].style.color=""
  li[4].style.color=""
  li[5].style.color=""

})
li[3].addEventListener("click",()=>{
  li[0].style.color="";
  li[1].style.color=""
  li[2].style.color=""
  li[3].style.color="rgb(121, 0, 255)"
  li[4].style.color=""
  li[5].style.color=""

})
li[4].addEventListener("click",()=>{
  li[0].style.color="";
  li[1].style.color=""
  li[2].style.color=""
  li[3].style.color=""
  li[4].style.color="rgb(121, 0, 255)"
  li[5].style.color=""

})
li[5].addEventListener("click",()=>{
  li[0].style.color="";
  li[1].style.color=""
  li[2].style.color=""
  li[3].style.color=""
  li[4].style.color=""
  li[5].style.color="rgb(121, 0, 255)"

})