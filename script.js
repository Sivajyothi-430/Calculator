const input =document.getElementById("display")

function addFun(a){
    input.value += a
}
function cleared(){
    input.value=' '
}
function calculate(){
    try{
        input.value = eval(input.value)
    }
    catch{
        input.value='Error'
    }
}