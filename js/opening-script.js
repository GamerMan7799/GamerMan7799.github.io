/**
 * @description Javascript code that handles opening and closing modal dialog in webpage
 * @type jQuery
 * @name opening-script.js
 * @author GamerMan7799
 */
/*
# Change Log
## [1.0.0] - 2019-03-21
### Notes
* Initial Release

*/
"use strict";
/*****************************************************************************/
function openModalDialog() {
  UIkit.modal.dialog(document.getElementById("pgp-full-key").innerHTML); 
};
/*****************************************************************************/
function closeModalDialog() {
  document.getElementById("pgp-full-key").style.display = "none";
};
/*****************************************************************************/
// add listener events on document load
function toDoOnLoad() {
  document.getElementById("closePGPdetails").addEventListener("click", function() { 
    closeModalDialog(); 
  });
  document.getElementById("FullPGPButton").addEventListener("click", function() {
    openModalDialog(); 
  });
};
/*****************************************************************************/
