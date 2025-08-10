function live() {

    let heading=document.getElementById("heading");
    heading.innerHTML="Hello, this is a simple JavaScript alert!";
    let p=document.getElementsByTagName("p");
    p[0].innerHTML="Thank you";


    //to hide button as it is clicked

    let mybutton=document.getElementById("myButton");
    mybutton.style.display="none";
    document.body.style.backgroundColor = "lightblue";
   
}
