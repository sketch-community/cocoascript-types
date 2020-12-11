declare namespace cocoascript {
  /**
   * The interface for specifying the behavior of a spring-loaded interaction.
   * doc://com.apple.documentation/documentation/uikit/uispringloadedinteractionbehavior
   */
  interface UISpringLoadedInteractionBehavior extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uispringloadedinteractionbehavior/2897297-shouldallowinteraction
    shouldAllowInteraction_withContext(interaction: cocoascript.UISpringLoadedInteraction, context: cocoascript.UISpringLoadedInteractionContext):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uispringloadedinteractionbehavior/2897322-interactiondidfinish
    interactionDidFinish(interaction: cocoascript.UISpringLoadedInteraction):void;
  }
}
