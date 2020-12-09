declare namespace cocoascript {
/**
 * An interaction for customizing the behavior of Scribble on text input views, or for suppressing it entirely in specific cases.
 * doc://com.apple.documentation/documentation/uikit/uiscribbleinteraction
 */
interface UIScribbleInteraction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiscribbleinteraction/3566749-initwithdelegate
  initWithDelegate(delegate: cocoascript.UIScribbleInteractionDelegate):cocoascript.UIScribbleInteraction;
  // doc://com.apple.documentation/documentation/uikit/uiscribbleinteraction/3566747-delegate
  delegate(): cocoascript.UIScribbleInteractionDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscribbleinteraction/3566748-handlingwriting
  handlingWriting(): cocoascript.BOOL;
  setHandlingWriting(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscribbleinteraction/3566750-pencilinputexpected
  pencilInputExpected(): cocoascript.BOOL;
  setPencilInputExpected(): void;
  // 
  alloc():cocoascript.UIScribbleInteraction;
  // 
  init():cocoascript.UIScribbleInteraction;
}
}
declare const UIScribbleInteraction: cocoascript.UIScribbleInteraction;

