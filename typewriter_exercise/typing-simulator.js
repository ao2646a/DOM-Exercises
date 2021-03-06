"use strict";
// Part 1: Implement start feature
// - clear input/output
// - clear timer
// Part 2: Change Start to start/stop
// Part 3: Implement reset feature (try on your own!)

(function() {
  window.addEventListener("load", init);
    let state = false;
    let timerid = null;
    let i = 0;
    
  function init() {
    document.getElementById("animate-btn").addEventListener("click", animateText);
    document.getElementById("reset-btn").addEventListener("click", reset);
  }

  /**
   * Toggles typing animation - if animation is already in progress,
   * pauses it. Otherwise, starts animation.
   */
  function animateText() {
    // Part 1: Implement start feature: Add the character at index 0 to output,
    // and at each tick update index and keep adding the next character
      //get user input//
      if (state == false){
          let inputTxt = document.getElementById("input-text").value;
          console.log(inputTxt);
          let outputPlace = document.getElementById("output");
          let arr = Array.from(inputTxt);
          console.log(arr);
          timerid = setInterval(function(){
              if (i < arr.length){
                outputPlace.innerHTML +=  arr[i];
                i++
              } else {
                    clearInterval(timerid);
                    timerid = null;
                    i = 0;
                     }
                        }, 1000)
             state = true;
          } else {
            clearInterval(timerid);
            timerid = null;
            state = false;
            }
        
        }
//     Part 2: Change Start to start/stop - what should happen
//     when we pause animation? Restart at index 0 or keep the current index?
//    document.getElementById("animate-btn").addEventListener("click", typeWriter);
//        animateText.pause();
      

  // Part 3: Implement reset: Clear the text, output, and timer.
  function reset() {
      document.getElementById("output").innerHTML = "";
      document.getElementById("input-text").value = "";     
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
//  function id(idName) {
//    return document.getElementById(idName);
//  }

})();



