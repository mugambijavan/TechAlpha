const inpbox = document.getElementById('inpbox');
const addbtn = document.getElementById('addbtn');
const todolist = document.getElementById('todolist');

let editToDo = null;

const addToDo = () =>{
const inputtext = inpbox.value.trim();
  if(inputtext.length <= 0){
    alert('you must write in your to do');
     return false;
  }

  if(addbtn.value === 'Edit'){
    editToDo.target.previousElementSibling.innerHTML = inputtext;
    editLocaltodos(inputtext);
    addbtn.value = "Add";
    inpbox.value = "";
  }
  else{

  
  // creating text
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = inputtext;
  li.appendChild(p);

  // creating edit
   const Editbtn = document.createElement('button');
   Editbtn.innerText = "Edit";
   Editbtn.classList.add("btn","Editbtn")
   li.appendChild(Editbtn)

    // creating delete
  const deletebtn = document.createElement('button');
  deletebtn.innerText = "Remove";
  deletebtn.classList.add("btn","deletebtn");
  li.appendChild(deletebtn)

  todolist.appendChild(li);
  inpbox.value = "";
   
  savaLocalToDo (inputtext);
}
}
const updateToDo = (e) => {
  if(e.target.innerHTML === "Remove"){
       todolist.removeChild(e.target.parentElement)
  }
  if(e.target.innerHTML === "Edit"){
    inpbox.value = e.target.previousElementSibling.innerHTML;
    inpbox.focus();
    addbtn.value = "Edit";
    editToDo = e;
  }
}
const savaLocalToDo = (todo) => {
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos" ,JSON.stringify(todos))
}

const getLocalToDos = () => {
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach(todo => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerHTML = todo;
      li.appendChild(p);
    
      // creating edit
       const Editbtn = document.createElement('button');
       Editbtn.innerText = "Edit";
       Editbtn.classList.add("btn","Editbtn")
       li.appendChild(Editbtn)
    
        // creating delete
      const deletebtn = document.createElement('button');
      deletebtn.innerText = "Remove";
      deletebtn.classList.add("btn","deletebtn");
      li.appendChild(deletebtn)
    
      todolist.appendChild(li);
    });
  }
}

// const deleteLocalToDos = (todo) => {
//   let todos;
//   if(localStorage.getItem("todos") === null){
//     todos = [];
//   }else{
//     todos = JSON.parse(localStorage.setItem("todo"));
//   }
//   let todotext = todos.children[0].innerHTML;
//   let todoindex = todo.indexOf(todotext);
//   todos.splice(todoindex,1);
//   localStorage.setItem("todos" ,JSON.stringify(todo));
//   console.log(todoindex);
// }

// const editLocaltodos = (todo) => {
//   let todos = JSON.parse(localStorage.setItem("todo"));
// let todoindex = todos.indexOf(todotext);
// todo[todoindex] = inpbox.value;
// localStorage.setItem("todos" , JSON.stringify(todo));
// }

// document.addEventListener("DOMContentLoaded" , getLocalToDos);
addbtn.addEventListener('click', addToDo);
todolist.addEventListener('click',updateToDo);