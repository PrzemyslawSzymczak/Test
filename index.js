let length = 10;

function change(){
    length = document.getElementById("a-input").value
}

function generate(){
    genEl("1-input")
    genEl("2-input")
    genEl("3-input")
    genEl("4-input")
}

function genEl(str){
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let el = document.getElementById(str)
    el.value = ""
    for(let i = 0; i < length; i++)
        el.value += characters[Math.floor(Math.random() * characters.length)]
}