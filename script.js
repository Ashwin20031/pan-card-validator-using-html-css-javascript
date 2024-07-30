

function validate(){

    const input = document.querySelector("input").value;



    if(input.length<8){
        alert("Pan number should contain atleast 8 characters");
        return false
    }


     
    const msg= document.querySelector(".valid");

    if (/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(input)){
        msg.innerHTML="Valid pan number"
        msg.style.color="green"
    }
    else{
        msg.innerHTML="Invalid pan number"
        msg.style.color="red"

    }






}




