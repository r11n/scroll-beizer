"use strict";

HTMLElement.prototype.ScrollTo = function () {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.scrollTop;

  var interval;
  var current = this.scrollTop;
  function Uroller() {
    current = Math.floor(0.6 * current + 0.4 * target);
    this.scrollTop = current;
    if (current <= target) {
      clearInterval(interval);
    }
  }
  function Droller() {
    current = Math.ceil(0.6 * current + 0.4 * target);
    this.scrollTop = current;
    if (current >= target) {
      clearInterval(interval);
    }
  }
  if (current > target) {
    interval = setInterval(Uroller, 30);
  } else {
    interval = setInterval(Droller, 30);
  }
};
