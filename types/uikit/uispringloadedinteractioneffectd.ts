declare namespace cocoascript {
/**
 * The interface for providing visual styling to a spring-loaded interaction based on the interaction state.
 * doc://com.apple.documentation/documentation/uikit/uispringloadedinteractioneffect
 */
interface UISpringLoadedInteractionEffect extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uispringloadedinteractioneffect/2897374-interaction
  interaction_didChangeWithContext(interaction: cocoascript.UISpringLoadedInteraction, context: cocoascript.UISpringLoadedInteractionContext):void;
}
}

