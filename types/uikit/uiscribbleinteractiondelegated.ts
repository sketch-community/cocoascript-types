declare namespace cocoascript {
/**
 * Methods for customizing or suppressing Scribble behavior within text input views.
 * doc://com.apple.documentation/documentation/uikit/uiscribbleinteractiondelegate
 */
interface UIScribbleInteractionDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiscribbleinteractiondelegate/3566752-scribbleinteraction
  scribbleInteraction_shouldBeginAtLocation(interaction: cocoascript.UIScribbleInteraction, location: cocoascript.CGPoint):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiscribbleinteractiondelegate/3566754-scribbleinteractionshoulddelayfo
  scribbleInteractionShouldDelayFocus(interaction: cocoascript.UIScribbleInteraction):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiscribbleinteractiondelegate/3566755-scribbleinteractionwillbeginwrit
  scribbleInteractionWillBeginWriting(interaction: cocoascript.UIScribbleInteraction):void;
  // doc://com.apple.documentation/documentation/uikit/uiscribbleinteractiondelegate/3566753-scribbleinteractiondidfinishwrit
  scribbleInteractionDidFinishWriting(interaction: cocoascript.UIScribbleInteraction):void;
}
}

