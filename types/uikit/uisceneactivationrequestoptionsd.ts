declare namespace cocoascript {
/**
 * An object containing information you want the system to use when activating the session associated with a scene.  
 * doc://com.apple.documentation/documentation/uikit/uisceneactivationrequestoptions
 */
interface UISceneActivationRequestOptions extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uisceneactivationrequestoptions/3197937-requestingscene
  requestingScene(): cocoascript.UIScene;
  setRequestingScene(): void;
  // doc://com.apple.documentation/documentation/uikit/uisceneactivationrequestoptions/3623235-collectionjoinbehavior
  collectionJoinBehavior(): cocoascript.UISceneCollectionJoinBehavior;
  setCollectionJoinBehavior(): void;
  // 
  alloc():cocoascript.UISceneActivationRequestOptions;
  // 
  init():cocoascript.UISceneActivationRequestOptions;
}
}
declare const UISceneActivationRequestOptions: cocoascript.UISceneActivationRequestOptions;

