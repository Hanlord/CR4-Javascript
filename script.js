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
    <p>&ensp;Priority level: &nbsp;</p> <a class="btn-prio btn btn-success"><span class="result">${x.imp}</span></a>
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

function counterAction() {
  let btns = document.getElementsByClassName("btn-prio");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      tasks[i].imp++;
      document.getElementsByClassName("result")[i].innerHTML = tasks[i].imp;
      if(btns[i]>2){
        document.getElementsbyClassName("result")[i].innerHTML.style.backgroundColor="yellow";
        return
      } else if(btns[i]>5){
        document.getElementsbyClassName("result")[i].innerHTML.style.backgroundColor="red";
      }
  

      var sortedArray = tasks.sort((a, b) => b.imp - a.imp);
      updateHTML(sortedArray);
    });
  }
}

// function sortprio() {
//   let btnprio = document.getElementById("sorti");
//   for (let i = 0; i < btns.length;i++){
//     btnprio[i].addEventListener("click", function(){
//       tasks[i].sort((a, b)=> b.imp - a.imp);
//       updateHTML(sortprio);
//       var sortedArray = tasks.sort((a, b) => b.imp - a.imp);
//       updateHTML(sortedArray);
//     })
//   }
//   var sortedArray = tasks.sort((a, b) => b.imp - a.imp);
//   updateHTML(sortedArray);
  
  
// }

// const btnArr2 = document.getElementsbyClassName("btn-prio")
// const btnArr = document.getElementById("sorti");
// for(i = 0;i < btnArr.length;i++){
//   btnArr[i].addEventlistener("click",changeColor);
// }
// function changeColor(){
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);
//   let btns = document.getElementsByClassName("btn-prio")
//   if(btns[i]>2){
//     document.getElementsbyClassName("btn-prio")[i].innerHTML.style.backgroundColor="yellow";
//     return
//   } else if(btns[i]>5){
//     document.getElementsbyClassName("btn-prio")[i].innerHTML.style.backgroundColor="red";
//   }
//   document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
// }
// changeColor()




updateHTML(tasks);
counterAction();



