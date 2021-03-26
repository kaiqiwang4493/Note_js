const myNodelist = document.getElementsByTagName('LI');
for (let i = 0; i < myNodelist.length; i++) {
    addItem(myNodelist[i]);
}


function newElement(){
    const row = document.createElement('li');
    const inputValue = document.getElementById('myInput').value;
    const textNode = document.createTextNode(inputValue)

    row.appendChild(textNode);
    if(inputValue ===''){
        alert("You must write something")
    }else{
        //list is the appended child, list is li.
        var list =document.getElementById('myUL').appendChild(row);
        addItem(list, inputValue);
    }
    document.getElementById('myInput').value='';
}


function addColorSelect(row) {
    const array = ['white', 'green','blue','yellow'];

    const selectList = document.createElement('select')
    selectList.setAttribute('id', 'colors');
    selectList.setAttribute('name', 'colors');
    row.appendChild(selectList);

    for (let i = 0; i < array.length; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', array[i]);
        option.text = array[i];
        selectList.appendChild(option);
    }

    selectList.value = row.style.backgroundColor || 'white';
    selectList.addEventListener('change', onChooseColor);
}


function onChooseColor(event) {
    event.target.parentElement.style.backgroundColor = event.target.value;
}

function addItem(row, content) {
    const span = document.createElement('SPAN');
    const spanText = document.createTextNode("\u00D7");
    const button = document.createElement('BUTTON')
    const buttonText = document.createTextNode("Edit")

    span.className = "close";
    span.appendChild(spanText);
    button.className='edit';
    button.appendChild(buttonText);

    span.onclick = function (event) {
        console.log(event);
        event.target.parentNode.style.display = 'none'
    }

    row.onkeyup = function (event) {
        if(event.key === 'Enter'){
            addItem(this, this.querySelector('input').value);
        }
    }

    button.onclick = function (event) {
        const input = document.createElement('input');
        const parent = this.parentElement;
        input.value = parent.childNodes[0].textContent;
        input.placeholder = "Press enter to save"
        //removre the span and edit button in edit mode.
        parent.innerHTML = '';
        parent.appendChild(input);
    }


    if(content){
        row.innerHTML=content;
    }
    addColorSelect(row);
    row.appendChild(button);
    row.appendChild(span);

}