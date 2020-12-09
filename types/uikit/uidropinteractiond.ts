declare namespace cocoascript {
/**
 * An interaction to enable dropping of items onto a view, employing a delegate to instantiate objects and respond to calls from the drop session.
 * doc://com.apple.documentation/documentation/uikit/uidropinteraction
 */
interface UIDropInteraction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uidropinteraction/2890891-initwithdelegate
  initWithDelegate(delegate: cocoascript.UIDropInteractionDelegate):cocoascript.UIDropInteraction;
  // doc://com.apple.documentation/documentation/uikit/uidropinteraction/2890890-delegate
  delegate(): cocoascript.UIDropInteractionDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uidropinteraction/2890871-allowssimultaneousdropsessions
  allowsSimultaneousDropSessions(): cocoascript.BOOL;
  setAllowsSimultaneousDropSessions(): void;
  // 
  alloc():cocoascript.UIDropInteraction;
  // 
  init():cocoascript.UIDropInteraction;
}
}
declare const UIDropInteraction: cocoascript.UIDropInteraction;

