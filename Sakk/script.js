const chessboard = document.getElementById("chessboard");
let selectedPiece;
let offsetX;
let offsetY;


for (let i = 0; i < chessboard.rows.length; i++) {
  for (let j = 0; j < chessboard.rows[i].cells.length; j++) {
    let cell = chessboard.rows[i].cells[j];
    let chessPiece = cell.getElementsByClassName("chess-piece")[0];
    if (chessPiece) {
      dragElement(chessPiece)
     
    }
  }
}




function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
  
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
  
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {

    document.onmouseup = null;
    document.onmousemove = null;
  }
}