function displayCategory(categoryName) {
    const leftSection = document.querySelector('.leftSection')
    const toDoListCategory = document.createElement('div')
    toDoListCategory.classList.add('categorySelector')
    toDoListCategory.innerText = categoryName
    leftSection.appendChild(toDoListCategory)
}

const createCategory = ( (categoryName) => {
    let toDoList = []
    const toDoListItem = ( (toDoName, description, dueDate, priority) => {
        let item = {toDoName, description, dueDate, priority }
        toDoList.push(item)
        return item
    })
    
    let getToDoList = () => toDoList;

    let displayToDoList = () => {
        const middleSection = document.querySelector('.middleSection')
        middleSection.innerHTML = ''
        for (let i = 0; i < toDoList.length; i++) {
            const middleSection = document.querySelector('.middleSection')
            const toDoListItems = document.createElement('div')
            toDoListItems.innerText = toDoList[i].toDoName
            middleSection.appendChild(toDoListItems)
        }
    }
    
    displayCategory(categoryName)
    return { categoryName, toDoListItem, getToDoList, displayToDoList}
})

let general = createCategory('General')
let first = general.toDoListItem('call doc', 'call 716-970-8530', 'tomorrow', 'priority')
let second = general.toDoListItem('hello')

console.log(general.categoryName)
console.log(general.getToDoList())
console.log(first.toDoName)
general.displayToDoList()