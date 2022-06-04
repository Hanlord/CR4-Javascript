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
      if (count[i] > 1){
        document.btns.style.backgroundColor = "yellow";
      } else if(count[i] > 3){
        document.btns.style.backgroundColor = "red";
      }
    
      // document.getElementById("button1").addEventListener("click", colorChange);
      // function colorChange(){
      // if("result")[i]

    // }

      // function changebackground(){
      //   if (tasks[i]>1){
      //   document.getElementById("result").style.backgroundColor='yellow';
      // }else if (tasks[i]>2){
      //   btns[i].addEventListener("click", function(){
      //     tasks[i];
      //     document.getElementsByClassName("result").style.backgroundColor='red';
      //   })
      // }
      // }
      // changebackground()
    })
  }
}

let btnsort =document.getElementById("sorti").addEventListener("click",sort);
    function sort(){
    let sortedArray = tasks.sort((a, b) => b.imp - a.imp);
      updateHTML(sortedArray);
    }
    sort();
       
//background random bonus
let btnArr = document.getElementsByClassName("result");
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


//test colorChange with arrow (e.target)
const colorBtn = document.querySelector(".btn-prio");
const colorChange = (e) => {
  console.log(e.target.value);
  if(e.target.value > 1){
    e.target.style.backgroundColor="red";
  }else if(e.target.value = 3){
    e.target.style.backgroundColor="yellow";
  }
}

colorBtn.addEventListener("click", colorChange);

//test2 colorChange 
// const colorBtn = () => {
//   const priobtn = document.querySelector(".btn-prio");
//   priobtn.forEach((btn, i) => {
//     btn.addEventListener("click", colorChange);
//     function colorChange(){
//       if(i > 1){
//         btn.style.backgroundColor="yellow";
//       }else if( i > 3){
//         btn.style.backgroundColor="red";
//       }
//     }
//   })
// }
// colorChange();














