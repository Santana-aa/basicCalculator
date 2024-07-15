let display= document.getElementById("display");
let buttons= document.querySelectorAll('button');
let string =''
buttons.forEach(element =>{
    element.addEventListener('click',(b)=>{
        if(b.target.innerText == '='){
            try{
            string = String(eval(string))
            display.value = string;}
            catch(error){
                string='Error'
                display.value = string;
            }
        }
        else if (b.target.innerText=='AC'){
            string=''
            display.value= string;
        }
        else{
            string +=b.target.innerText
            display.value = string
        }
    })
    }
)