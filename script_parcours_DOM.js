var q1 = document.getElementsByTagName("p").length;
console.log(q1)

var q2 = document.getElementById("coucou").textContent;
console.log(q2)

var q3 = document.getElementsByTagName("a")[2].getAttribute("href");
console.log(q3)

var q4 = document.getElementsByClassName("compte-moi").length;
console.log(q4)

var q5 = document.querySelectorAll("li.compte-moi").length;
console.log(q5)

var q6 = document.querySelectorAll("ol > li.compte-moi").length;
console.log(q6)

var q7 = document.querySelectorAll("div > ul")[1].getElementsByTagName("li")[0].textContent;
console.log(q7)
