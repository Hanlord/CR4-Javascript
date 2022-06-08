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
    <p>&ensp;Priority level: &nbsp;</p> <button id="button1" type="button" class="btn-prio btn ${prioritybuttonclass(x.imp)}">${x.imp}</button>
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
      document.getElementsByClassName("btn-prio")[i].innerHTML = tasks[i].imp;
      // test color change
      // if (tasks[i] > 1){
      //   this.style.backgroundColor = "yellow";
      // } else if(tasks[i] > 3){
      //   this.style.backgroundColor = "red";
      // }
    })
  }
}
//sort button
let btnsort =document.getElementById("sorti").addEventListener("click",sortTasks);
    function sortTasks(){
    let sortedArray = tasks.sort((a, b) => a.imp - b.imp);
      updateHTML(sortedArray);
    }
    sortTasks();
       
//background random generator bonus
let btnArr = document.getElementById("result");
        for(i = 0; i < btnArr.length; i++){
            btnArr[i].addEventListener("click", changeColor);
        }
        function changeColor(){
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let yellow = Math.floor(Math.random() * 255);
            document.body.style.backgroundColor = `rgb(${red},${green},${yellow})`;
        }
 changeColor();

updateHTML(tasks);

function prioritybuttonclass(p) {
  if ([0,1].includes(p)) {
    return "btn-success"
    } else if ([2,3].includes(p)) {
      return "btn-warning"
    } else {
      return "btn-danger"
    }
  }
  
















