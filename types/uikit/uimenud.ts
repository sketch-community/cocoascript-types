declare namespace cocoascript {
/**
 * A container for grouping related menu elements in an app menu or contextual menu. 
 * doc://com.apple.documentation/documentation/uikit/uimenu
 */
interface UIMenu extends UIMenuElement {
  // doc://com.apple.documentation/documentation/uikit/uimenu/3281978-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIMenu;
  // doc://com.apple.documentation/documentation/uikit/uimenu/3261448-children
  children(): cocoascript.UIMenuElement;
  setChildren(): void;
  // doc://com.apple.documentation/documentation/uikit/uimenu/3261450-menubyreplacingchildren
  menuByReplacingChildren(newChildren: cocoascript.UIMenuElement):cocoascript.UIMenu;
  // doc://com.apple.documentation/documentation/uikit/uimenu/3261449-identifier
  identifier(): cocoascript.UIMenuIdentifier;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/uikit/uimenu/3261451-options
  options(): cocoascript.UIMenuOptions;
  setOptions(): void;
  // 
  alloc():cocoascript.UIMenu;
  // 
  init():cocoascript.UIMenu;
}
}
declare const UIMenu: cocoascript.UIMenu;

