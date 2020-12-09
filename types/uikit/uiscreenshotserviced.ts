declare namespace cocoascript {
/**
 * An object that coordinates the creation of PDF screenshots of an app’s content.
 * doc://com.apple.documentation/documentation/uikit/uiscreenshotservice
 */
interface UIScreenshotService extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiscreenshotservice/3213934-delegate
  delegate(): cocoascript.UIScreenshotServiceDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreenshotservice/3213935-windowscene
  windowScene(): cocoascript.UIWindowScene;
  setWindowScene(): void;
  // 
  alloc():cocoascript.UIScreenshotService;
  // 
  init():cocoascript.UIScreenshotService;
}
}
declare const UIScreenshotService: cocoascript.UIScreenshotService;

