//Task1 - Change the font size of p tag to 50 pixels.
//document.getElementById("myText").style.fontSize = "50px"




//Task2 -Show value  of input tag on console on keyup event.
// let inp = document.getElementById("myInput")
// inp.addEventListener("keyup", function(e) {
//     e.preventDefault();
//     let a = document.getElementById("myInput").value
//     console.log(a);
// })




//Task3- Add text class and title attribute with value  myTitle to p tag.
// let x = document.getElementById("myText");
// x.setAttribute("title", "myTitle");
// document.getElementById("myText").classList.add("text");





//Task4 -Change background color of div tag (with toggle class,with style property)
//document.querySelector("#myStatement").style.backgroundColor = "red";
//document.querySelector("#myStatement").classList.toggle("mystyle");





//Task5 -Write a Javascript program to set the background color of a paragraph(p tag)
// let setBackground=()=>{
//     document.querySelector("p").style.backgroundColor = "red";
// }
// setBackground();



//Task6 -Write a javascript function that crates a table,accept row,column numbers from the user,and input row-column number as content(e.g Row-0;Column-0) of a cell.
// let createTable = () => {
//     let rownum = prompt("Input number of rows");
//     let columnnum = prompt("Input number of columns");
//     let table = document.getElementById("myTable");


//     for (let r = 0; r < Number(rownum, 10); r++) {
//         let x = table.insertRow(r);
//         for (let c = 0; c < Number(columnnum, 10); c++) {
//             let y = x.insertCell(c);
//             y.innerHTML = "Row-" + r + " Column-" + c;
//         }
//     }

// }


//Task7 -Write a javascript program to remove items from a dropdown list.
// let remove = () => {
//     let x = document.getElementById("selectNow");
//     x.remove(x.selectedIndex);

// }



//Task8 -Write a javascript program to get the width and height of the window (any time the window is resized)
// let getSize = () => {
//     document.getElementById("size").innerHTML =
//         "Browser window width: " + window.innerWidth + "px<br>" +
//         "Browser window height: " + window.innerHeight + "px";

// }









// function myFunction() {
//     document.getElementById("myDiv").style.border = "5px solid green";
//     document.getElementById("myDiv").style.backgroundColor = "orange";

// }