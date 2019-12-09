const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')
const search = document.querySelector('.search input');

// add todo list
const generateTempate=todo=>{
    const html =`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
}

// add todo
addForm.addEventListener('submit' , e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo);

    if(todo.length){
        generateTempate(todo);
        addForm.reset();   
    }
    
})

// delete todo
list.addEventListener('click' , e=>{
    e.preventDefault();
    console.log(e.target)
    if(e.target.classList.contains('delete')){ // can use contains or includes
        e.target.parentElement.remove();
    }
})

const filterTodos=(term)=>{
    // console.log(Array.from(list.children));
    Array.from(list.children)
        .filter((todo)=>{
            // console.log(todo.textContent) // to get the only inner text of the li tag
            return !todo.textContent.toLowerCase().includes(term);
        })
        .forEach((todo)=>{
            todo.classList.add("filtered");
        })

    Array.from(list.children)
        .filter((todo)=>{
            // console.log(todo.textContent) // to get the only inner text of the li tag
            return todo.textContent.toLowerCase().includes(term);
        })
        .forEach((todo)=>{
            todo.classList.remove('filtered');
        })

}

// key event
search.addEventListener('keyup',e=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);

})