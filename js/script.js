let tasks = JSON.parse(cards);
console.table(tasks);
function updateHTML(arr) {
  document.getElementById("result").innerHTML = "";
  for (let x of arr) {
    document.getElementById("result").innerHTML += `
    <div class="col-lg-4 col-sm-6 col-xs-12">
    <div class="card" style="width: 18rem;">
    <div class="d-flex justify-content-between">
    <div><p class="bg-info p-1">Task<p>
    </div> 
    <div>
    <i class="fa-solid fa-bookmark"></i>&nbsp;
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    </div>
  <img src="${x.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${x.name}</h5>
    <p class="card-text">${x.text}</p><hr>
    <div class="d-flex justify-content-start">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <p>&ensp;Priority level: &nbsp;</p> <a id="button1" type="button" class="btn-prio btn btn-success"><span class="result">${x.imp}</span></a>
    </div>
    <div class="d-flex justify-content-start">
    <i class="fa-solid fa-calendar-days"></i>
    <p>&ensp;Deadline:&ensp;${x.line}</p>
    </div><hr>
    <div class="d-flex justify-content-end"><button class="btn btn-danger"><i class="fa-solid fa-trash-can"></i>&nbsp;Delete</button>&ensp;
    <button class="btn btn-success"><i class="fa-solid fa-check"></i>&nbsp;Done</button>
    
    </div>
  </div>
</div>
</div>
    `;
  }
  counterAction();
  
}
//button counter
function counterAction() {
  let btns = document.getElementsByClassName("btn-prio");
  let count = 0;
  for (let i = 0; i < btns.length; i++ ) {
    btns[i].addEventListener("click", function () {
      tasks[i].imp++;
      document.getElementsByClassName("result")[i].innerHTML = tasks[i].imp;
      // let sortedArray = tasks.sort((a, b) => b.imp - a.imp);
      // updateHTML(sortedArray);
    })
  }
}
//button color forloop test
// function colorButn(){
//   let btns = document.getElementsByClassName("btn-prio");
//   for (let i = 2; i < btns.length; i++){
//     btns[i].addEventListener("click",changeColor);
//     document.getElementsByClassName("btn-prio")[i].innerHTML.style.backgroundColor="yellow";
//     }
//   }
//   colorButn()
  

// color change switch test

// function change(){
//   let btns = document.getElementsByClassName("btn-prio");
//   console.log(btns);
//   switch (true){
//     case btns > 2:
//     btns.style.backgorundColor="yellow";
//     console.log(btns);

//     case btns > 4:
//       btns.style.backgroundColor="red";
//       console.log(btns);
    
//   }
// }
// change()

// background

let btnArr = document.getElementsByClassName("btn-prio");
        for(i = 0; i < btnArr.length; i++){
            btnArr[i].addEventListener("click", changeColor);
        }
        function changeColor(){
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let pink = Math.floor(Math.random() * 255);
            document.body.style.backgroundColor = `rgb(${red},${green},${pink})`;
        }
 changeColor();
//Sort Button

//test1
// const btnSort = document.querySelector("#sorti");
// function  sorti(){
//   let btnSort = tasks.sort((a, b));
//   btnSort.addEventListener("click", sorti());
//   var sortedArray = tasks.sort((a, b) => b.imp - a.imp);
//       updateHTML(sortedArray);
  
// }
// sorti()


 //test2 for loop test
// function sortprio() {
//   let btnsorti = document.getElementById("sorti");
//   for (let i = 0; i < btnsorti.length;i++){
//     btnsorti[i].addEventListener("click", function(){
//       tasks[i].sort((a, b)=> b.imp - a.imp);
//       updateHTML(sortprio);
//       let sortedArrays = tasks.sort((a, b) => b.imp - a.imp);
//       console.log(sortedArrays);
//       sortprio(sortedArrays);
//     })
//   }
// }
// sortprio()

//test3 .....
// function sortCards(){
//   Review.all = Review.all.sort((a,b)){
//     if (impA < impB){
//       return -1;
//     }
//     if (impA > impB){
//       return 1;
//     }
//     return 0;
//   }
// }
// document.getElementById("sorti").innerHTML="";
// Review.all.forEach((r) =>{
//   document.getElementById("sorti").innerHTML += r.renderReveiwCard();
// })
// sortCards();
updateHTML(tasks);


//test colorChange with arrow (e.target)
const colorBtn = document.querySelector(".btn-prio");

const btnAdd = document.querySelector(".btn-prio");

btnAdd.addEventListener("click", (e)=>{
  e.preventDefault();
  console.log("works")
})
const colorChange = (e) => {
  console.log(e.target.value);
  if(e.target.value > 2){
    e.target.style.backgroundColor="red";
  }else if(e.target.value = 4){
    e.target.style.backgroundColor="yellow";
  }
}

colorBtn.addEventListener("click", colorChange);















