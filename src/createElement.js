export function createElement(tag,content,className, parent, position){
    const element = document.createElement(tag)
    element.innerText = content;
    element.classList.add(className);
    parent.insertAdjacentElement(position, element)
return element;
}