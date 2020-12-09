declare namespace cocoascript {
/**
 * An interaction that provides text selection gestures and UI to custom text views.
 * doc://com.apple.documentation/documentation/uikit/uitextinteraction
 */
interface UITextInteraction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextinteraction/3255084-textinput
  textInput(): cocoascript.UITextInput;
  setTextInput(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextinteraction/3255082-delegate
  delegate(): cocoascript.UITextInteractionDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextinteraction/3255083-gesturesforfailurerequirements
  gesturesForFailureRequirements(): cocoascript.UIGestureRecognizer;
  setGesturesForFailureRequirements(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextinteraction/3255086-textinteractionmode
  textInteractionMode(): cocoascript.UITextInteractionMode;
  setTextInteractionMode(): void;
  // 
  alloc():cocoascript.UITextInteraction;
  // 
  init():cocoascript.UITextInteraction;
}
}
declare const UITextInteraction: cocoascript.UITextInteraction;

