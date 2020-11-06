document.addEventListener("click",function(e){
    
    let colorClasses={
        "box1":"color-code1","box2":"color-code2",
        "box3":"color-code3","box4":"color-code4",
        "box5":"color-code5","box6":"color-code6"}
    let objClassname=e.target.className.split(" ")[0]
    var newClipText=document.getElementById(colorClasses[objClassname]).textContent
    var promise = navigator.clipboard.writeText(newClipText)
    alert("Copied the text: " + newClipText);
    
 })

document.getElementsByClassName("nav-icon")[0].addEventListener("click",
 function(){
    if (document.getElementById("nav-on-switch").style.display=="none"){
       
        document.getElementById("nav-on-switch").style.display="inline";
        document.getElementById("nav-off-switch").style.display="none";
        document.getElementById("hamburger").style.display="none"
        
    }

    else{
        
        document.getElementById("nav-on-switch").style.display="none";
        document.getElementById("nav-off-switch").style.display="inline"
        document.getElementById("hamburger").style.display="block"
    }
})



function copyColorCode(elementId) {
    var copyText = document.getElementById(elementId)
    console.log(copyText)
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
  function copy() {
    var copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copy");
  }
  