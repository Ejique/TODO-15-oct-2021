
const root = document.getElementById("root");//корневой элемент, точка отрисовки всего сайта
function createElement(tag,content,className, parent, position){
    const element = document.createElement(tag)
    element.innerText = content;
    element.classList.add(className);
    parent.insertAdjacentElement(position, element)
return element;
}
const input = createElement('input','', 'input', root,'afterbegin');
const btn = createElement('button','add','btn',root,'beforeend');

const ul = createElement('ul',"","ul",root,"beforeend")
const todo = new Array();//создаётся новый массив


btn.onclick = () => {
    todo.push(input.value);
    ul.innerHTML = "";
    input.value = "";
    todo.map((item)=>{
        createElement('li', item,"li",ul,'beforeend');
    });
};

