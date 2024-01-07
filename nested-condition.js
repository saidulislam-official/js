var math = false;
var physics = true;
var chemistry = true;


if(math == true){
    if(physics == true){
        if(chemistry == true){
            console.log("You are Rocket Scientist .");
        }
        else{
            console.log("You are an Engineer.");
        }  
    }
    else if(math == true){
        console.log("You are a Mathematician.");
    }
}
else{
    console.log("You are not eligible.");
}