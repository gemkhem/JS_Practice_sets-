function change_Color(){
    document.getElementById('abc').style.backgroundColor='pink'
}

function change_Case(){
   let name = document.getElementById('xyz').value
   console.log(name)
   document.getElementById('xyz').value = name.toUpperCase()
}