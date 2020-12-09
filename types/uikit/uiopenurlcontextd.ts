declare namespace cocoascript {
/**
 * A system-provided object that contains the information you need to open a single URL. 
 * doc://com.apple.documentation/documentation/uikit/uiopenurlcontext
 */
interface UIOpenURLContext extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiopenurlcontext/3238053-url
  URL(): cocoascript.NSURL;
  setURL(): void;
  // doc://com.apple.documentation/documentation/uikit/uiopenurlcontext/3238054-options
  options(): cocoascript.UISceneOpenURLOptions;
  setOptions(): void;
  // 
  alloc():cocoascript.UIOpenURLContext;
  // 
  init():cocoascript.UIOpenURLContext;
}
}
declare const UIOpenURLContext: cocoascript.UIOpenURLContext;

