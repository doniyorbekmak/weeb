window.addEventListener("mousemove", function(event){
    console.log(event.clientX);
   document.getElementsByClassName("element")[0].style.top = event.clientY + "px";  document.getElementsByClassName("element")[0].style.left = event.clientX + "px";
  });

  let elm = document.getElementById('GFG');
        let div = document.getElementById('GFG_DIV');
 
        /* Function to add class name to hide
           cursor element */
        function GFG_Fun() {
            div.classList.add("newClass");
            down.innerHTML = "Cursor is removed from DIV!";
        }