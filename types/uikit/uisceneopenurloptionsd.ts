declare namespace cocoascript {
/**
 * Options that UIKit provides when asking your app to open a URL.
 * doc://com.apple.documentation/documentation/uikit/uisceneopenurloptions
 */
interface UISceneOpenURLOptions extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uisceneopenurloptions/3197945-sourceapplication
  sourceApplication(): cocoascript.NSString;
  setSourceApplication(): void;
  // doc://com.apple.documentation/documentation/uikit/uisceneopenurloptions/3197943-annotation
  annotation(): cocoascript.id;
  setAnnotation(): void;
  // doc://com.apple.documentation/documentation/uikit/uisceneopenurloptions/3197944-openinplace
  openInPlace(): cocoascript.BOOL;
  setOpenInPlace(): void;
  // 
  alloc():cocoascript.UISceneOpenURLOptions;
  // 
  init():cocoascript.UISceneOpenURLOptions;
}
}
declare const UISceneOpenURLOptions: cocoascript.UISceneOpenURLOptions;

