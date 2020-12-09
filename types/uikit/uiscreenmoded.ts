declare namespace cocoascript {
/**
 * A possible set of attributes that can be applied to a screen object.  
 * doc://com.apple.documentation/documentation/uikit/uiscreenmode
 */
interface UIScreenMode extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiscreenmode/1620083-size
  size(): cocoascript.CGSize;
  setSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreenmode/1620082-pixelaspectratio
  pixelAspectRatio(): cocoascript.CGFloat;
  setPixelAspectRatio(): void;
  // 
  alloc():cocoascript.UIScreenMode;
  // 
  init():cocoascript.UIScreenMode;
}
}
declare const UIScreenMode: cocoascript.UIScreenMode;

