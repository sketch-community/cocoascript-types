declare namespace cocoascript {
/**
 * The inset distances for views. 
 * doc://com.apple.documentation/documentation/uikit/uiedgeinsets
 */
interface UIEdgeInsets {
  // doc://com.apple.documentation/documentation/uikit/1624475-uiedgeinsetsmake
  UIEdgeInsetsMake(): cocoascript.CGFloat;
  setUIEdgeInsetsMake(): void;
  // doc://com.apple.documentation/documentation/uikit/uiedgeinsets/1624528-bottom
  bottom(): cocoascript.CGFloat;
  setBottom(): void;
  // doc://com.apple.documentation/documentation/uikit/uiedgeinsets/1624510-left
  left(): cocoascript.CGFloat;
  setLeft(): void;
  // doc://com.apple.documentation/documentation/uikit/uiedgeinsets/1624490-right
  right(): cocoascript.CGFloat;
  setRight(): void;
  // doc://com.apple.documentation/documentation/uikit/uiedgeinsets/1624516-top
  top(): cocoascript.CGFloat;
  setTop(): void;
  // doc://com.apple.documentation/documentation/uikit/1624499-uiedgeinsetsinsetrect
  UIEdgeInsetsInsetRect(): cocoascript.UIEdgeInsets;
  setUIEdgeInsetsInsetRect(): void;
  // doc://com.apple.documentation/documentation/uikit/1624527-nsstringfromuiedgeinsets
  NSStringFromUIEdgeInsets(): cocoascript.UIEdgeInsets;
  setNSStringFromUIEdgeInsets(): void;
  // doc://com.apple.documentation/documentation/uikit/1624525-uiedgeinsetsfromstring
  UIEdgeInsetsFromString(): cocoascript.NSString;
  setUIEdgeInsetsFromString(): void;
}
}

