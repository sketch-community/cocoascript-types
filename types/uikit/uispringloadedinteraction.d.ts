declare namespace cocoascript {
  /**
   * An interaction object for configuring and controlling spring-loaded, user-driven navigation during a drag activity.
   * doc://com.apple.documentation/documentation/uikit/uispringloadedinteraction
   */
  interface UISpringLoadedInteraction extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uispringloadedinteraction/2897337-initwithinteractionbehavior
    initWithInteractionBehavior_interactionEffect_activationHandler(interactionBehavior: cocoascript.UISpringLoadedInteractionBehavior, interactionEffect: cocoascript.UISpringLoadedInteractionEffect, handler: cocoascript.UISpringLoadedInteractionContext):cocoascript.UISpringLoadedInteraction;
    // doc://com.apple.documentation/documentation/uikit/uispringloadedinteraction/2897354-initwithactivationhandler
    initWithActivationHandler(handler: cocoascript.UISpringLoadedInteractionContext):cocoascript.UISpringLoadedInteraction;
    // doc://com.apple.documentation/documentation/uikit/uispringloadedinteraction/2897325-interactionbehavior
    interactionBehavior(): cocoascript.UISpringLoadedInteractionBehavior;
    setInteractionBehavior(): void;
    // doc://com.apple.documentation/documentation/uikit/uispringloadedinteraction/2897379-interactioneffect
    interactionEffect(): cocoascript.UISpringLoadedInteractionEffect;
    setInteractionEffect(): void;
    //
    alloc():cocoascript.UISpringLoadedInteraction;
    //
    init():cocoascript.UISpringLoadedInteraction;
  }
}

declare const UISpringLoadedInteraction: cocoascript.UISpringLoadedInteraction;
