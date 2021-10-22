
const root = document.getElementById("root");//корневой элемент, точка отрисовки всего сайта
function createElement(tag,content,className, parent, position){
    const element = document.createElement(tag)
    element.innerText = content;
    element.classList.add(className);
    parent.insertAdjacentElement(position, element)
return element;
}
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
const todo = [];//создаётся новый массив
let delete_btns =[];//const - значение котор напрямую не переназначается 


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
 
    ol.innerHTML = "";//команда обнуления значений того. что вводится в строке
    input.value = "";
    todo.map((item,index)=>{
        let li = createElement('li', item,"li",ol,'beforeend');
        li.style.marginTop = "1em";
        li.setAttribute("key",index)//key нужен в качестве некого артикула товара
        let btn_delete = createElement("button","delete","button",li,"beforeend");
        btn_delete.classList.add('is-danger');
        btn_delete.classList.add("is-small");
        btn_delete.style.marginLeft = "3em";
        delete_btns = [];
        delete_btns.push(btn_delete);
        delete_btns.map((btn)=>{  //ф-я удаления кнопки с экрана
            btn.onclick = () =>{
                const key = btn.parentNode.getAttribute("key");
                todo.splice(key, 1)
                btn.parentNode.remove()
                }
            })
            // })

        })
}


// ДЗ:1. оформить интерфейс (уменьшить input, разместить кнопке посередине, li добавить марджинов), 
// 2. добавление todo на нажатие Enter
// 3.удаление li (довавить для этого кновку к li)
// 4. редактирование to do

