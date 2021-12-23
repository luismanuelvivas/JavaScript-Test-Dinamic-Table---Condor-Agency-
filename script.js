let addItemBtn = document.getElementById('addItem');
let itemsContainer = document.getElementById('itemsContainer');
let inputField = document.getElementById('inputField')
let checkedItemsContainer = document.getElementById('checked-items-container');
let deleteBtn = document.getElementById('deleteBtn')
let deleteMode = false;
let editBtn = document.getElementById('editBtn')
let editMode = false;
let searchBtn = document.getElementById('searchBtn')
let inputSearchBar = document.getElementById('inputSearchBar')
let showAllBtn = document.getElementById('showAllBtn')

deleteBtn.addEventListener('click', function(){
    
    if(deleteMode === false){
        deleteMode = true;
        editMode =false; 
        itemsContainer.style.color = 'red'
        checkedItemsContainer.style.color ='red'
    }else{
        deleteMode = false
        itemsContainer.style.color = 'black'
        checkedItemsContainer.style.color ='black'
    }

})

editBtn.addEventListener('click', function(){
    
    if(editMode === false){
        editMode = true;
        deleteMode = false;
        itemsContainer.style.color = 'blue'
    }else{
        editMode = false
        itemsContainer.style.color = 'black'
    }

})

addItemBtn.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value; 
    itemsContainer.appendChild(paragraph);
    inputField.value = "";

    searchBtn.addEventListener('click', function(){
        if(inputSearchBar.value != ''){
            if(paragraph.innerText.includes(inputSearchBar.value) === false){  
                paragraph.style.display = 'none';
            }
        }else{
            window.alert('The input is empty')
        }     
    })

    showAllBtn.addEventListener('click', function(){ 
        paragraph.style.display = 'block';
        inputSearchBar.value = '';
    })

    paragraph.addEventListener('click', function(){

        if(deleteMode === true){
            itemsContainer.removeChild(paragraph);
        }else if(editMode === true){
            if(inputField.value != ''){
                paragraph.innerText = inputField.value;
                inputField.value = '';
            }else{
                window.alert('The input is empty!')
            }
        }else if(deleteMode ===false && editMode === false){
            var paragraph2 = document.createElement('p');
            paragraph2.innerText = paragraph.innerText; 
            checkedItemsContainer.appendChild(paragraph2);
            itemsContainer.removeChild(paragraph);
        }

        searchBtn.addEventListener('click',function(){

            if(inputSearchBar.value != ''){
                if(paragraph2.innerText.includes(inputSearchBar.value)== false){  
                    paragraph2.style.display = 'none';
                }
            }else{
                window.alert('The input is empty')
            }

        })

        showAllBtn.addEventListener('click', function(){ 
            paragraph2.style.display = 'block';
            inputSearchBar.value = '';
        })

        paragraph2.addEventListener('click', function(){
            if(deleteMode === true){
                checkedItemsContainer.removeChild(paragraph2);
            }else{
                checkedItemsContainer.removeChild(paragraph2);
                paragraph.innerText = paragraph2.innerText;
                itemsContainer.appendChild(paragraph);
            }
        })
    })    
})