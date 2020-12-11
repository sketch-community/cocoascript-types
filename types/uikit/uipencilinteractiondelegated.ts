declare namespace cocoascript {
  /**
   * The interface an object implements to handle double taps the user makes on their Apple Pencil.
   * doc://com.apple.documentation/documentation/uikit/uipencilinteractiondelegate
   */
  interface UIPencilInteractionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uipencilinteractiondelegate/3039595-pencilinteractiondidtap
    pencilInteractionDidTap(interaction: cocoascript.UIPencilInteraction):void;
  }
}
