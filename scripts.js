function displayCategory(category) {
    const leftSection = document.querySelector('.leftSection')

    const toDoListCategory = document.createElement('div')
    toDoListCategory.classList.add('categorySelector')
    toDoListCategory.innerText = category.categoryName
    toDoListCategory.addEventListener('click', () => {
        category.displayToDoList()
        currentCategory = category
    })
    leftSection.appendChild(toDoListCategory)
}

function editToDoItem(category, arrayNumber) {
    const toDoItem = category.getToDoList()[arrayNumber]

    const modal = document.getElementById('editModal')

    const toDoNameInput = document.querySelector('input[name="toDoNameEdit"]')
    const toDoDescriptionInput = document.querySelector('input[name="descriptionEdit"]')
    const toDoDueDateInput = document.querySelector('input[name="dueDateEdit"]')
    const toDoPriorityInput = document.querySelector('input[name="priorityEdit"]')

    toDoNameInput.value = toDoItem.toDoName
    toDoDescriptionInput.value = toDoDescription.toDoName
    toDoDueDateInput.value = toDoDueDate.toDoName
    toDoPriorityInput.value = toDoPriority.toDoName

    
    
}

function displayToDos(category, arrayNumber) {
    const rightSection = document.querySelector('.rightSection')
    rightSection.innerHTML = ''
    
    const editButton = document.createElement('button')
    editButton.setAttribute('type','button')
    editButton.innerText = 'Edit'
    editButton.addEventListener('click', () => {
        editToDoItem(category, arrayNumber)
    })

    const toDoListItem = document.createElement('div')
    
    const toDoListItemName = document.createElement('p')
    const toDoListItemDescription = document.createElement('p')
    const toDoListItemDueDate = document.createElement('p')
    const toDoListItemPriority = document.createElement('p')
    
    toDoListItemName.innerText = `Title: ${category.getToDoList()[arrayNumber].toDoName}`
    toDoListItemDescription.innerText = `Description: ${category.getToDoList()[arrayNumber].description}`
    toDoListItemDueDate.innerText = `Due Date: ${category.getToDoList()[arrayNumber].dueDate}`
    toDoListItemPriority.innerText = `Priority: ${category.getToDoList()[arrayNumber].priority}`

    toDoListItemName.innerText != 'undefined' ? rightSection.appendChild(toDoListItem.appendChild(toDoListItemName)) : null
    toDoListItemDescription.innerText != 'undefined' ? rightSection.appendChild(toDoListItem.appendChild(toDoListItemDescription)) : null
    toDoListItemDueDate.innerText != 'undefined' ? rightSection.appendChild(toDoListItem.appendChild(toDoListItemDueDate)) : null
    toDoListItemPriority.innerText != 'undefined' ? rightSection.appendChild(toDoListItem.appendChild(toDoListItemPriority)) : null
    toDoListItemName.innerText != 'undefined' ? rightSection.appendChild(editButton) : null
}

function addCategoryForm() {

    const modal = document.getElementById('categoryForm')

    modal.showModal()

    const saveButtonCategory = document.getElementById('saveButtonCategory')
    saveButtonCategory.addEventListener('click', () => {

        const categoryName = document.querySelector('input[name="categoryName"]').value

        createCategory(categoryName)

        categoryName.value = ''

        modal.close()
    })
}

function addToDoForm() {

    const modal = document.getElementById('toDoListForms')
    
    modal.showModal()

    const saveButtonToDo = document.getElementById('saveButtonToDo')
    saveButtonToDo.addEventListener('click', () => {

        const toDoName = document.querySelector('input[name="toDoName"]')
        const toDoDescription = document.querySelector('input[name="description"]')
        const toDoDueDate = document.querySelector('input[name="dueDate"]')
        const toDoPriority = document.querySelector('input[name="priority"]')

        if (toDoName.value != '') {
        currentCategory.toDoListItem(toDoName.value, toDoDescription.value, toDoDueDate.value, toDoPriority.value)
        displayToDos(currentCategory, currentCategory.getToDoList().length - 1)
        }
        toDoName.value = ''
        toDoDescription.value = ''
        toDoDueDate.value = ''
        toDoPriority.value = ''
        

        modal.close()
        
        currentCategory.displayToDoList()
    })
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

        const toDoListContainer = document.createElement('div')
        toDoListContainer.classList.add('toDoListContainer')

        const addToDoButton = document.createElement('button')
        addToDoButton.setAttribute('type','button')
        addToDoButton.classList.add('addButton')
        addToDoButton.innerText = 'Add To Do'
        toDoListContainer.appendChild(addToDoButton)
    
        const rightSection = document.querySelector('.rightSection')
        rightSection.innerHTML = ''

        for (let i = 0; i < toDoList.length; i++) {
            const middleSection = document.querySelector('.middleSection')
            const toDoListItemContainer = document.createElement('div')
            toDoListItemContainer.classList.add('toDoListItemContainer')

            const completeButton = document.createElement('div')
            completeButton.classList.add('completeButton')
            completeButton.addEventListener('click', () => {
                toDoList.splice(i,1)
                toDoListItemContainer.remove()

                const rightSection = document.querySelector('.rightSection')
                rightSection.innerHTML = ''
            })

            const toDoListItems = document.createElement('p')
            toDoListItems.classList.add('itemSelector')
            toDoListItems.innerText = toDoList[i].toDoName
            toDoListItems.addEventListener('click', () => displayToDos(category, i))
        
            toDoListItemContainer.appendChild(completeButton)
            toDoListItemContainer.appendChild(toDoListItems)
            toDoListContainer.appendChild(toDoListItemContainer)
        }
        middleSection.appendChild(toDoListContainer)

        addToDoButton.addEventListener('click', addToDoForm)
    }

    const category = {categoryName, toDoListItem, getToDoList, displayToDoList}
    displayCategory(category)
    return category
})

const addCategoryButton = document.getElementById('addCategoryButton')
addCategoryButton.addEventListener('click', addCategoryForm)

let general = createCategory('General');
let main = createCategory('Main');

let currentCategory = general;

currentCategory.displayToDoList();
let first = general.toDoListItem('call doc', 'call 716-970-8530', 'tomorrow', 'priority')
let second = general.toDoListItem('hello')

let seconds = main.toDoListItem('hello')

console.log(general.categoryName)
console.log(general.getToDoList())
console.log(first.toDoName)
general.displayToDoList()