import Btn from './button';
import {createElement}from './createElement';

export function drawTodos(todo, ol, delete_btns){
    todo.map((item,index)=>{
        let li = createElement('li', item,"li",ol,'beforeend');
        li.style.marginTop = "1ms";
        li.setAttribute("key",index)//key нужен в качестве некого артикула товара
        let btn = new Btn("", "button", li, "beforeend")
        let btn_delete = btn.$createElement()
        // let btn_delete = createElement(
        //     "button",
        //     "",
        //     "button",
        //     li,
        //     "beforeend"
        //     );
        btn_delete.classList.add('is-danger');
        btn_delete.classList.add("is-small");
        btn_delete.style.marginLeft = "3em";
        let bucket = createElement("span", "", "mdi-bucket-outline", btn_delete, "beforeEnd");
        bucket.classList.add('mdi')
        delete_btns = [];
        delete_btns.push(btn_delete);
        delete_btns.map((btn)=>{  //ф-я удаления кнопки с экрана
            btn.onclick = () =>{
                const key = btn.parentNode.getAttribute("key");
                todo.splice(key, 1)
                localStorage.setItem("todo", JSON.stringify(todo))
                btn.parentNode.remove()
                }
            })
            

        })
}