declare namespace cocoascript {
  /**
   * The interface an object implements to provide information about a spring-loaded interaction.
   * doc://com.apple.documentation/documentation/uikit/uispringloadedinteractioncontext
   */
  interface UISpringLoadedInteractionContext extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uispringloadedinteractioncontext/2897357-state
    state(): cocoascript.UISpringLoadedInteractionEffectState;
    setState(): void;
    // doc://com.apple.documentation/documentation/uikit/uispringloadedinteractioncontext/2897330-targetitem
    targetItem(): cocoascript.id;
    setTargetItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uispringloadedinteractioncontext/2897394-targetview
    targetView(): cocoascript.UIView;
    setTargetView(): void;
    // doc://com.apple.documentation/documentation/uikit/uispringloadedinteractioncontext/2897468-locationinview
    locationInView(view: cocoascript.UIView):cocoascript.CGPoint;
  }
}
