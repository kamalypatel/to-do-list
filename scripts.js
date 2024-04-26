let currentCategory = 'General'

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
    
    const toDoListItemName = document.createElement('p')
    const toDoListItemDescription = document.createElement('p')
    const toDoListItemDueDate = document.createElement('p')
    const toDoListItemPriority = document.createElement('p')
    
    toDoListItemName.innerText = category.getToDoList()[arrayNumber].toDoName
    toDoListItemDescription.innerText = category.getToDoList()[arrayNumber].description
    toDoListItemDueDate.innerText = category.getToDoList()[arrayNumber].dueDate
    toDoListItemPriority.innerText = category.getToDoList()[arrayNumber].priority
    
    toDoListItemName.innerText != 'undefined' ? rightSection.appendChild(toDoListItem.appendChild(toDoListItemName)) : null
    toDoListItemDescription.innerText != 'undefined' ? rightSection.appendChild(toDoListItem.appendChild(toDoListItemDescription)) : null
    toDoListItemDueDate.innerText != 'undefined' ? rightSection.appendChild(toDoListItem.appendChild(toDoListItemDueDate)) : null
    toDoListItemPriority.innerText != 'undefined' ? rightSection.appendChild(toDoListItem.appendChild(toDoListItemPriority)) : null
}

const createCategory = ( (categoryName) => {
    let toDoList = []
    const toDoListItem = ( (toDoName, description, dueDate, priority) => {
        let item = {toDoName, description, dueDate, priority }
        toDoList.push(item)
        displayToDoList()
        
        return item
    })
    
    let getToDoList = () => toDoList;

    let displayToDoList = () => {
        const middleSection = document.querySelector('.middleSection')
        middleSection.innerHTML = ''
        const addToDoButton = document.createElement('button')
        addToDoButton.setAttribute('type','button')
        addToDoButton.classList.add('addButton')
        addToDoButton.innerText = 'Add To Do'
        middleSection.appendChild(addToDoButton)
    
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