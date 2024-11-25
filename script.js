 var getul= document.getElementById('ul')
function add(){
    var getinp=document.getElementById('inp')
    var createli=document.createElement('li')
    var litext=document.createTextNode(getinp.value)
    createli.appendChild(litext)
    getul.appendChild(createli)
    getinp.value='' 
    var deletetbtn= document.createElement('button')
    var deletettext=document.createTextNode('Delete')
    deletetbtn.appendChild(deletettext)
    createli.appendChild(deletetbtn)
    deletetbtn.setAttribute('onclick','del(this)')
   var editbtn=document.createElement('button')
   var editbtntext=document.createTextNode('Edit')
   editbtn.appendChild(editbtntext)
   createli.appendChild(editbtn)
   editbtn.setAttribute('onclick','edittext(this)')
    
}
function del(e){
    e.parentNode.remove()
}
function deleteall(){
    getul.innerHTML=''
}
function edittext(e){
     //border-radius: 19px;
    // e.style.border-radius '19px'
 
  var a=  prompt( 'enter edit text',e.parentNode.firstChild.nodeValue)
      e.parentNode.firstChild.nodeValue =  a
      
}