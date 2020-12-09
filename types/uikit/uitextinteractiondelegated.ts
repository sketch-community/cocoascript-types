declare namespace cocoascript {
/**
 * An interface that an object implements to receive information about text interaction events.
 * doc://com.apple.documentation/documentation/uikit/uitextinteractiondelegate
 */
interface UITextInteractionDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextinteractiondelegate/3255089-interactionshouldbegin
  interactionShouldBegin_atPoint(interaction: cocoascript.UITextInteraction, point: cocoascript.CGPoint):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitextinteractiondelegate/3255090-interactionwillbegin
  interactionWillBegin(interaction: cocoascript.UITextInteraction):void;
  // doc://com.apple.documentation/documentation/uikit/uitextinteractiondelegate/3255088-interactiondidend
  interactionDidEnd(interaction: cocoascript.UITextInteraction):void;
}
}

