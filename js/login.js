let formObject=document.querySelector('#entryForm');
let buttonObject=document.querySelector('#gobtn');
let nameTextBox=document.querySelector('#name');
let nameErrorObject=document.querySelector('.nameError');


function validateFormItems(formItems){
    let formErrorFlag=false;
    if(nameTextBox.value==''){
        //console.log('name error');
        nameErrorObject.style.visibility='visible';
        nameTextBox.style.border='1px solid red';
        nameTextBox.classList.add('textboxBorderError');
        formErrorFlag=true;
    }else if(!isNaN(Number(nameTextBox.value))){
        nameErrorObject.style.visibility='visible';
        nameTextBox.style.border='1px solid red';
        nameTextBox.classList.add('textboxBorderError');
        nameErrorObject.innerText='Name Should be a String Not a Number...!';
        formErrorFlag=true;
    }else if(nameTextBox.value.length<2){
        nameErrorObject.style.visibility='visible';
        nameTextBox.style.border='1px solid red';
        nameTextBox.classList.add('textboxBorderError');
        nameErrorObject.innerText='Name Should Consists of at least 2 characters...!';
        formErrorFlag=true
    }else{
        nameErrorObject.style.visibility='hidden';
        nameTextBox.style.border='1px solid green';
    }
    return !formErrorFlag;
}

nameTextBox.onblur=function(){
    if(nameTextBox.value===''){
        nameErrorObject.style.visibility='visible';
        nameErrorObject.classList.add('error');
        nameTextBox.style.border='1px solid red';
        nameErrorObject.innerText='Name Required...!';
    }else{
        nameErrorObject.style.visibility='hidden';
        nameTextBox.style.border='1px solid green';
    }
}

nameTextBox.onfocus=function(){
    nameErrorObject.style.visibility='hidden';
    nameTextBox.style.border='1px solid green';
}


formObject.addEventListener('submit',event=>{
    const valid=validateFormItems(formObject);
    if(!valid){
        event.preventDefault();
    }else{
        console.log('success.');
    }
});





