const questionArea = document.querySelector('.anwers__area');

// button
const addBtn = document.querySelector('.add__btn');

// let insertInput = ''
addBtn.addEventListener('click', ()=>{

    
 
    const addDiv = document.createElement('div')
    addDiv.classList.add('form-group');

     


    // input creation
    const addInput = document.createElement('input');
     addInput.setAttribute('name', 'question');
     addInput.setAttribute('placeholder', 'Type anwser here...');
     addInput.classList.add('form-control', 'answer');
     
   
     // add remove button
   const addRemove = document.createElement('button')
   addRemove.classList.add('btn__remove')
   addRemove.setAttribute('type','button')
   addRemove.innerText = 'Remove'

    


    // adding all the content in main div
     addDiv.appendChild(addInput);

     // addDiv.appendChild(addRemove)
    addInput.insertAdjacentElement('afterend', addRemove);


    questionArea.appendChild(addDiv)

      // questionArea.innerHTML = insertInput;
     addRemove.addEventListener('click', (e)=>{
         const parent = e.target.parentElement;

         parent.remove();
     })
})







