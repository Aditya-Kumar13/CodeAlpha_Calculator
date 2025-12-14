

const maindisp =document.querySelector(".maindisp");

const outdisp =document.querySelector(".outdisp");

var mainvalue=""



function add(value){
    mainvalue+=value;
    display(value)
}

function total(){
    try {
    if (mainvalue[0]=='+' || mainvalue[0]=='*' ||mainvalue[0]=='/' ||mainvalue[0]=='%'){
        outdisp.textContent="Syntax Error";
    } else if (mainvalue[mainvalue.length -1]=='+' || mainvalue[mainvalue[mainvalue.length -1]]=='-' || mainvalue[mainvalue[mainvalue.length -1]]=='*' ||mainvalue[mainvalue[mainvalue.length -1]]=='/' ||mainvalue[mainvalue[mainvalue.length -1]]=='%'){
        outdisp.textContent="Syntax Error";
    }
    else{
    var k=eval(mainvalue);
    outdisp.textContent=k;
    }
    } catch (Error){
        outdisp.textContent="Syntax Error"
    }
    
}

function clean(){
    mainvalue="";
    outdisp.textContent=0;
    display()
    
}

function display(){
    maindisp.textContent=mainvalue;
    
}


function remove(){
    mainvalue=mainvalue.slice(0,-1);
    display()
}

document.addEventListener('keydown', function(event) {
    
    const key = event.key;
    if (/[0-9]/.test(key) || key === '.') {
        add(key);
    }

    // OPERATOR KEYS (+, -, *, /)
    else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        // Prevent default browser behavior (like '/' opening "Find in page")
        event.preventDefault(); 
        add(key);
    }

    // ENTER KEY (=)
    else if (key === 'Enter') {
        event.preventDefault(); // Stop form submission behavior
        total(); // Call the calculate function
    }

    //BACKSPACE (<)
    else if (key === 'Backspace') {
        remove();
    }

     //ESCAPE KEY (AC)
    else if (key === 'Escape') {
        clean();
    }
});