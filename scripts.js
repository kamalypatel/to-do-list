function displayCategory(category) {
    const leftSection = document.querySelector('.leftSection')
    const toDoListCategory = document.createElement('div')
    toDoListCategory.classList.add('categorySelector')
    toDoListCategory.innerText = category.categoryName
    toDoListCategory.addEventListener('click', category.displayToDoList)
    leftSection.appendChild(toDoListCategory)
}

function displayToDos(category, arrayNumber) {
    const rightSection = document.querySelector('.rightSection')
    rightSection.innerHTML = ''
    const toDoListItem = document.createElement('div')
    toDoListItem.innerText = category.getToDoList()[arrayNumber].toDoName
    rightSection.appendChild(toDoListItem)
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
        const rightSection = document.querySelector('.rightSection')
        rightSection.innerHTML = ''
        for (let i = 0; i < toDoList.length; i++) {
            const middleSection = document.querySelector('.middleSection')
            const toDoListItems = document.createElement('div')
            toDoListItems.classList.add('itemSelector')
            toDoListItems.innerText = toDoList[i].toDoName
            toDoListItems.addEventListener('click', () => displayToDos(category, i))
            middleSection.appendChild(toDoListItems)
        }
    }

    const category = {categoryName, toDoListItem, getToDoList, displayToDoList}
    displayCategory(category)
    return category
})

let general = createCategory('General')
let first = general.toDoListItem('call doc', 'call 716-970-8530', 'tomorrow', 'priority')
let second = general.toDoListItem('hello')
let main = createCategory('Main')
let seconds = main.toDoListItem('hello')

console.log(general.categoryName)
console.log(general.getToDoList())
console.log(first.toDoName)
general.displayToDoList()