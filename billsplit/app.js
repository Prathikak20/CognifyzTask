function bill(){
 let amount = document.getElementById("amount").value;
 let people = document.getElementById("people").value;
 let result = (amount / people).toFixed(2);
 document.getElementById("res").innerText = "Each person should pay: " + result;
}