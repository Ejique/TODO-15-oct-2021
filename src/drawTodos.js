import {createElement}from './createElement';

export function drawTodos(todo, ol, delete_btns){
    todo.map((item,index)=>{
        let li = createElement('li', item,"li",ol,'beforeend');
        li.style.marginTop = "1ms";
        li.setAttribute("key",index)//key нужен в качестве некого артикула товара
        let btn_delete = createElement(
            "button",
            "delete",
            "button",
            li,
            "beforeend"
            );
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
            

        })
}