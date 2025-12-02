(function() {
'use strict';
  const mnuFontSize = function() {
    return 24;  // <- menu font size! Change this number.
  };
  // All selectable windows
  Window_Selectable.prototype.standardFontSize = mnuFontSize;
  // Show Choices
  Window_ChoiceList.prototype.standardFontSize = Window_Base.prototype.standardFontSize;
  // Input Number
  Window_NumberInput.prototype.standardFontSize = Window_Base.prototype.standardFontSize;
  // Select Item
  Window_EventItem.prototype.standardFontSize = Window_Base.prototype.standardFontSize;
})();


(function() {
'use strict';
  const msgFontSize = function() {
    return 24;  // <- message font size! Change this number.
  };
  // Show Text
  Window_Message.prototype.standardFontSize = msgFontSize;
  // Show Scrolling Text
  Window_ScrollText.prototype.standardFontSize = msgFontSize;
  // Show Choices
  Window_ChoiceList.prototype.standardFontSize = msgFontSize;
  // Input Number
  Window_NumberInput.prototype.standardFontSize = msgFontSize;
  // Select Item
  Window_EventItem.prototype.standardFontSize = msgFontSize;
  // YEP Message Core - Show Text - name window
  Window_NameBox.prototype.standardFontSize = msgFontSize;
})();

