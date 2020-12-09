declare namespace cocoascript {
/**
 * An object representing a menu, action, or command.
 * doc://com.apple.documentation/documentation/uikit/uimenuelement
 */
interface UIMenuElement extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uimenuelement/3261458-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uimenuelement/3261457-image
  image(): cocoascript.UIImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uimenuelement/3335208-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIMenuElement;
  // 
  alloc():cocoascript.UIMenuElement;
  // 
  init():cocoascript.UIMenuElement;
}
}
declare const UIMenuElement: cocoascript.UIMenuElement;

