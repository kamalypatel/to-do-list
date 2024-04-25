const createCategory = ( (categoryName) => {
    let toDoList = []
    const toDoListItem = ( (toDoName, description, dueDate, priority) => {
        let item = {toDoName, description, dueDate, priority }
        toDoList.push(item)
        return item
    })
    
    let getToDoList = toDoList;
    
    return { categoryName, toDoListItem, getToDoList}

})

let general = createCategory('General')
let first = general.toDoListItem('call doc', 'call 716-970-8530', 'tomorrow', 'priority')


console.log(general.categoryName)
console.log(general.getToDoList)
console.log(first.toDoName)