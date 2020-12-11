declare namespace cocoascript {
  /**
   * Methods for presenting custom content in the Siri and Maps interfaces.
   * doc://com.apple.documentation/documentation/sirikit/inuihostedviewcontrolling
   */
  interface INUIHostedViewControlling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inuihostedviewcontrolling/2915897-configureviewforparameters
    configureViewForParameters_ofInteraction_interactiveBehavior_context_completion(parameters: cocoascript.INParameter, interaction: cocoascript.INInteraction, interactiveBehavior: cocoascript.INUIInteractiveBehavior, context: cocoascript.INUIHostedViewContext, completion: cocoascript.CGSize):void;
    // doc://com.apple.documentation/documentation/sirikit/inuihostedviewcontrolling/1649168-configurewithinteraction
    configureWithInteraction_context_completion(interaction: cocoascript.INInteraction, context: cocoascript.INUIHostedViewContext, completion: cocoascript.CGSize):void;
  }
}
