import{fullName as fn } from './model,js';
window.addEventListener('load', bind);

export function bind(){
   let button=document.getElementById('greetbt');
   button.addEventListener('click',takeinput);
  document.getElementById('clearbt').addEventListener('click', clearAll);

}

export function takeinput(){
   let firstName= document.getElementById("fName").value;
   let lastName= document.getElementById("lName").value;
   output(firstName, lastName);
}

 export const clearAll=()=>{
   document.getElementById("fName").value='';
   document.getElementById('lName').value='';
   document.getElementById('msg').innerText='';
   document.getElementById('fName').focus();
}
 export const output=( firstName, lastName)=> document.getElementById('msg').innerText= `Wlecome ${fullName(firstName,lastName)}`
