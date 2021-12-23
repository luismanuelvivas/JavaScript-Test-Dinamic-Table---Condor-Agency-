let addItemBtn = document.getElementById('addItem');
let itemsContainer = document.getElementById('itemsContainer');
let inputField = document.getElementById('inputField')
let checkedItemsContainer = document.getElementById('checked-items-container');
let deleteBtn = document.getElementById('deleteBtn')
let deleteMode = false;
let editBtn = document.getElementById('editBtn')
let editMode = false;
let searchBtn = document.getElementById('searchBtn')
let inputSearchBar = document.getElementById('input-search-bar')
let showAllBtn = document.getElementById('showAllBtn')

addItemBtn.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value; 
    itemsContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', function(){

            var paragraph2 = document.createElement('p');
            paragraph2.innerText = paragraph.innerText; 
            checkedItemsContainer.appendChild(paragraph2);
            itemsContainer.removeChild(paragraph);
        


        paragraph2.addEventListener('click', function(){
    
            checkedItemsContainer.removeChild(paragraph2);
            paragraph.innerText = paragraph2.innerText;
            itemsContainer.appendChild(paragraph);
            
        })
    })    
})