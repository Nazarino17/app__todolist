const input = document.querySelector('.task-input input'),
      list = document.querySelector('.task-box');

// create elements
const createItem = (e) => {
    if (e.code == 'Enter') {
        let listItem = document.createElement('li');
        let img = '<img class="del" src="img/icons8-waste-24.png">';
        listItem.classList.add('task-box_item');
        listItem.innerHTML = `<span class="item-text">${input.value}</span>`;
        listItem.insertAdjacentHTML("afterbegin", img);
        list.append(listItem);
        input.value = '';
    }
};
input.addEventListener('keydown', createItem);


//delete item in list
const deleteitem = (e) => {
    if (e.target.matches('.del')) {
        e.target.parentNode.remove();
    } else {
        return false;
    }
};
list.addEventListener('click', deleteitem);

//add line
const lineItem = (e) => {
    if (e.target.matches('.item-text')) {
        e.target.classList.toggle('line');
    }
};
list.addEventListener('click', lineItem);


//btn clear list and localstorage
document.querySelector('.clear-btn').addEventListener('click', () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    localStorage.clear();
});

//save list localstorage
document.querySelector('.save-btn').addEventListener('click', () => {
    localStorage.setItem('todoList', list.innerHTML);
});

const loadTodo = () => {
    if (localStorage.getItem('todoList')) {
        list.innerHTML = localStorage.getItem('todoList');
    }
};  

loadTodo();