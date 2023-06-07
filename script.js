const todobtn = document.getElementById('btn');
const todobox = document.getElementById('box');
const input = document.getElementById('inp');

todobtn.addEventListener('click', () => {
    let para = document.createElement("p");
    para.classList.add('para-style');
    para.innerText = input.value;
    todobox.appendChild(para);
    input.value = "";

    //click to get a strike mark
    para.addEventListener('click', () => {
        para.style.textDecoration = "line-through";
    })

    //double click , it will get deleted
    para.addEventListener('dblclick', () => {
        todobox.removeChild(para);
    })
})