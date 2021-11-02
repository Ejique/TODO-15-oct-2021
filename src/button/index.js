import {createElement} from '../createElement';



export default class Btn{
      
    constructor(content, className, parent, positon){
 
 this.content = content; //внутреннему контексту из объекта назначается свойство конструктора
 this.className = className;
 this.parent = parent;
 this.position = positon;
 
    }
//какие доп элементы нужны в классе которые нужно использовать:
// создание самого элемента, 
// методы добавления классов, 
// методы добавления стилей

$createElement(){
    return createElement("button", this.content,this.className, this.parent, 
    this.position)

}
$addClasses(element, arrayClasses){
arrayClasses.map((className)=>{
    element.classList.add(className)
})
}
}