
document.getElementById("submit").addEventListener("click", submitForm);

function submitForm() {
    if (item.value.length > 0) {
        let entry = document.getElementById('item').innerHTML = item.value;
        let container = document.querySelector('#list');
        let li = document.createElement("li");
        li.textContent = entry;
        container.appendChild(li);

        let deleteButton = document.createElement('buttom');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('deleteButton')
        li.appendChild(deleteButton);

        li.addEventListener("click", done);
        deleteButton.addEventListener("click", deleteItem);

        function done() {
            li.classList.toggle('done');
        }

        function deleteItem() {
            li.remove()
        }
    } else {
        alert('Need to enter a value. Please try again.')
        return false;
    }
}