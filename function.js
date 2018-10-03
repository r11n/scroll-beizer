"use strict";

function scrollTo(elem, target) {
  var interval;
  var current = elem.scrollTop;
  function Uroller() {
    current = Math.floor(0.6 * current + 0.4 * target);
    elem.scrollTop = current;
    if (current <= target) {
      clearInterval(interval);
    }
  }
  function Droller() {
    current = Math.ceil(0.6 * current + 0.4 * target);
    elem.scrollTop = current;
    if (current <= target) {
      clearInterval(interval);
    }
  }
  if (current > target) {
    interval = setInterval(Uroller, 30);
  } else {
    interval = setInterval(Droller, 30);
  }
}
