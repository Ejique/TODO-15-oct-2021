
const root = document.getElementById("root");//корневой элемент, точка отрисовки всего сайта
import {createElement}from './createElement';
import { drawTodos } from './drawTodos';

const main_columns = createElement("div", "", "columns", root, "afterbegin");
main_columns.style.marginTop = "2em";
const column = createElement('div',"","column", main_columns,"afterbegin");
column.classList.add("is-half");
column.classList.add("is-offset-one-quarter");
const input = createElement('input','', 'input', column,'afterbegin');
const column2 = createElement('div',"","column", main_columns,"beforeEnd");
const btn = createElement('button','add','button',column2,'beforeEnd');
const toggle = createElement("input",'','toggle', column2, 'beforeEnd');
toggle.setAttribute("type","checkbox")
btn.classList.add("is-primary");
const ol = createElement('ol',"","ol",column,"beforeEnd")//ol - куда кладётся список,"обёртка" списка
ol.style.margin = "1em 0 0 2em";
ol.setAttribute("type","A");
let todo = [];//создаётся новый массив
let delete_btns =[];//const - значение котор напрямую не переназначается 

window.onload=()=>{
    if(localStorage.getItem("todo")){
    todo = JSON.parse(localStorage.getItem('todo'))
}
if(todo){
    drawTodos(todo, ol, delete_btns)
}
}

btn.onclick = () => {
    addTodo()
    };

input.onkeydown = (e) => {
   if(e.code == "Enter"){
       addTodo();
   }
};
let flag = false;
toggle.onchange = ()=>{
if(!flag){
    document.body.style.backgroundColor = "black";
    flag = true
}else{
    document.body.style.backgroundColor = "white";
    flag = false;
}
   
    }

function addTodo(){
    if(input.value == ''){
        return;
    }
    todo.push(input.value);
 localStorage.setItem("todo", JSON.stringify(todo) )
    ol.innerHTML = "";//команда обнуления значений того. что вводится в строке
    input.value = "";
  drawTodos(todo, ol, delete_btns);
}


// ДЗ:1. оформить интерфейс (уменьшить input, разместить кнопке посередине, li добавить марджинов), 
// 2. добавление todo на нажатие Enter
// 3.удаление li (довавить для этого кновку к li)
// 4. редактирование to do

