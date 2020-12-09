declare namespace cocoascript {
/**
 * An object that manages bar button items that display in the shortcuts bar above the keyboard on iPad.  
 * doc://com.apple.documentation/documentation/uikit/uitextinputassistantitem
 */
interface UITextInputAssistantItem extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextinputassistantitem/1614575-leadingbarbuttongroups
  leadingBarButtonGroups(): cocoascript.UIBarButtonItemGroup;
  setLeadingBarButtonGroups(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextinputassistantitem/1614532-trailingbarbuttongroups
  trailingBarButtonGroups(): cocoascript.UIBarButtonItemGroup;
  setTrailingBarButtonGroups(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextinputassistantitem/1614529-allowshidingshortcuts
  allowsHidingShortcuts(): cocoascript.BOOL;
  setAllowsHidingShortcuts(): void;
  // 
  alloc():cocoascript.UITextInputAssistantItem;
  // 
  init():cocoascript.UITextInputAssistantItem;
}
}
declare const UITextInputAssistantItem: cocoascript.UITextInputAssistantItem;

