const buttons =document.querySelectorAll('.button')
const body = document.querySelector('body')
 buttons .forEach(button => {
    button.addEventListener('click',function(e){
        if(e.target.id==='blue'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'white';
        }
        if(e.target.id==='green'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
        if(e.target.id==='black'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'white';
        }

    })

    
 });
 
// const div=createElement('div')
// div.setAttribute('id','select')
// div.innerText="hello me"
// document.body.appendChild(div)