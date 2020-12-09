declare namespace cocoascript {
/**
 * An object that represents one instance of your app's user interface.
 * doc://com.apple.documentation/documentation/uikit/uiscene
 */
interface UIScene extends UIResponder {
  // doc://com.apple.documentation/documentation/uikit/uiscene/3197910-initwithsession
  initWithSession_connectionOptions(session: cocoascript.UISceneSession, connectionOptions: cocoascript.UISceneConnectionOptions):cocoascript.UIScene;
  // doc://com.apple.documentation/documentation/uikit/uiscene/3197909-delegate
  delegate(): cocoascript.UISceneDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscene/3197908-activationstate
  activationState(): cocoascript.UISceneActivationState;
  setActivationState(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscene/3197912-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscene/3238055-activationconditions
  activationConditions(): cocoascript.UISceneActivationConditions;
  setActivationConditions(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscene/3197911-session
  session(): cocoascript.UISceneSession;
  setSession(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscene/3327319-openurl
  openURL_options_completionHandler(url: cocoascript.NSURL, options: cocoascript.UISceneOpenExternalURLOptions, completion: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uiscene/3601229-pointerlockstate
  pointerLockState(): cocoascript.UIPointerLockState;
  setPointerLockState(): void;
  // 
  alloc():cocoascript.UIScene;
  // 
  init():cocoascript.UIScene;
}
}
declare const UIScene: cocoascript.UIScene;

