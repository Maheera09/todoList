let inputVal = document.querySelector('#textBox')
let addBtn = document.querySelector('#btn')
let list = document.querySelector('.list')

addBtn.addEventListener('click', ()=>{
    if (inputVal.value === ''){
        alert('Add Tasks')
    }
    else {
        var li = document.createElement('li')
        li.innerHTML = inputVal.value
        list.appendChild(li)

        var edit = document.createElement('button')
        edit.innerHTML = 'Edit'
        edit.id="edits"
        edit.classList.add('edit')
        li.appendChild(edit)

        var del = document.createElement('button')
        del.innerHTML = 'Delete'
        del.id='dels'
        del.classList.add('delete')
        li.appendChild(del)

        const currentTime = new Date().toLocaleTimeString();

        var label = document.createElement('label')
        label.classList.add('label1')
        label.textContent = `${currentTime}`
        li.appendChild(label)
        storedData()
    }
    inputVal.value=''
})

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        if (e.target.classList.contains('checked')) {
            let editButton = e.target.querySelector('.edit');
            let delBtn = e.target.querySelector('.delete');
            let timelabel = e.target.querySelector('.label1');
            if (editButton) editButton.remove();
            if (delBtn) delBtn.remove();
            if (timelabel) timelabel.remove();
            storedData()
        } else {
            let edit = document.createElement('button');
            edit.textContent = 'Edit';
            edit.classList.add('edit');
            e.target.appendChild(edit);

            let del = document.createElement('button');
            del.textContent = 'Delete';
            del.classList.add('delete');
            e.target.appendChild(del);

            const currentTime = new Date().toLocaleTimeString();

            let label = document.createElement('label');
            label.classList.add('label1');
            label.textContent = `${currentTime}`;
            e.target.appendChild(label);
            storedData()
        }
    } else if (e.target.tagName === 'BUTTON') {
        let li = e.target.parentElement;
        if (e.target.classList.contains('delete')) {
            li.remove();
            storedData()
        } else if (e.target.classList.contains('edit')) {
            let currentText = li.firstChild.textContent;
            
            li.innerHTML = ''; 

            let input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;
            input.classList.add('editing');
            li.appendChild(input);

            let saveBtn = document.createElement('button');
            saveBtn.textContent = 'Save';
            saveBtn.classList.add('save');
            saveBtn.classList.add('edit');
            li.appendChild(saveBtn);

            let cancelBtn = document.createElement('button');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.classList.add('cancel');
            cancelBtn.classList.add('delete');
            li.appendChild(cancelBtn);

            saveBtn.addEventListener('click', () => {
                let newText = input.value;
                li.innerHTML = newText; 
                

        var edit = document.createElement('button')
        edit.innerHTML = 'Edit'
         edit.id="edits"
        edit.classList.add('edit')
        li.appendChild(edit)

        var del = document.createElement('button')
        del.innerHTML = 'Delete'
        del.id='dels'
        del.classList.add('delete')
        li.appendChild(del)

        const currentTime = new Date().toLocaleTimeString();

        var label = document.createElement('label')
        label.classList.add('label1')
        label.textContent = `${currentTime}`
        li.appendChild(label)
        storedData()
            });

        cancelBtn.addEventListener('click', () => {
        li.innerHTML = currentText; 
        var edit = document.createElement('button')
        edit.innerHTML = 'Edit'
        edit.id="edits"
        edit.classList.add('edit')
        li.appendChild(edit)

        var del = document.createElement('button')
        del.innerHTML = 'Delete'
        del.id='dels'
        del.classList.add('delete')
        li.appendChild(del)

        const currentTime = new Date().toLocaleTimeString();

        var label = document.createElement('label')
        label.classList.add('label1')
        label.textContent = `${currentTime}`
        li.appendChild(label) 
        storedData()
            });
        }
    }
});

function storedData(){
    localStorage.setItem('data', list.innerHTML)
    }
    
    function showList(){
        list.innerHTML = localStorage.getItem('data')
    }
    showList()
