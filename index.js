getApi();

var grids = document.getElementById("cardActions");
grids.setAttribute("onClick","cardActions1()");

var form = document.getElementById("formButton");
form.setAttribute("onClick","formActions()");

var formSubmit = document.getElementById("formSubmit");
formSubmit.setAttribute("onClick","getForm()");

function formActions(){
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("phone").value="";
    document.getElementById("address").value="";
    var form = document.getElementById("forms")
    form.classList.toggle("d-flex")
    var grid = document.getElementById("outputs")
    if(grid.className.search("d-grid")!=-1){
        grid.classList.toggle("d-grid")
    }
    
}

function cardActions1(){
    var grid = document.getElementById("outputs");
    grid.classList.toggle("d-grid");
    var form = document.getElementById("forms")
    if(form.className.search("d-flex")!=-1){
        form.classList.toggle("d-flex")
    }
}

function getForm(){
    let output="";
    output+=`
    Firstname = ${document.getElementById("fname").value}
    Lastname = ${document.getElementById("lname").value}
    Phone = ${document.getElementById("phone").value}
    Address = ${document.getElementById("address").value}
    Favorite Web Language = ${document.querySelector('input[name="fav_language"]:checked').value}
    Age = ${document.querySelector('input[name="age"]:checked').value}
    `
    alert(output)
}

function getApi(){
    fetch("https://jsonplaceholder.typicode.com/posts").then(function(response){

    return response.json();
    }).then(function(users){
        let output="";
        for(i=0;i<10;i++){
            output+= `<div class="gridCell">
            <img class="gridImg"
                src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg" alt="">
            <h3 class="title">${users[i].title}</h3>
            <p>
                ${users[i].body}
            </p>
            <div>
                <a href="">
                <p>Submit</p>
                </a>
            </div>
        </div>  `
        }
        // users.forEach(function(user){
        //     output += `
        //     <div class="gridCell">
        //         <img class="gridImg"
        //             src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg" alt="">
        //         <h3 class="title">${user.title}</h3>
        //         <p>
        //             ${user.body}
        //         </p>
        //         <div>
        //             <a href="">
        //             <p>Submit</p>
        //             </a>
        //         </div>
        //     </div>            
        //     `            
        // })
        document.getElementById("outputs").innerHTML += output;
    })
}
function search (){
    console.log("a");
    var input, filter, value, cell, cellTitle;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    cellTitle=document.getElementsByClassName("title");
    cell = document.getElementsByClassName("gridCell");
    for(i=0;i<cellTitle.length;i++){
        value=cellTitle[i].textContent;
        if(value.toUpperCase().indexOf(filter)>-1){
                cell[i].style.display="";
        }
        else{
            cell[i].style.display="none";
        }
    }
}