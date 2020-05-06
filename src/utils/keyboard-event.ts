/**
 * Handle a keyboard event
 *
 * @param {Object} event
 * @returns String
 */

var keyboardKey = require("keyboard-key");

function keyboardEvent(event) {
  if (event.key) {
    return event.key;
  }
  return keyboardKey.getKey(event);
}

export default keyboardEvent;
