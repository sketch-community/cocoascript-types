declare namespace cocoascript {
  /**
   * Methods that customize behavior on views that aren’t formally text input views.
   * doc://com.apple.documentation/documentation/uikit/uiindirectscribbleinteractiondelegate
   */
  interface UIIndirectScribbleInteractionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiindirectscribbleinteractiondelegate/3566742-indirectscribbleinteraction
    indirectScribbleInteraction_isElementFocused(interaction: cocoascript.UIIndirectScribbleInteraction, elementIdentifier: cocoascript.UIScribbleElementIdentifier):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiindirectscribbleinteractiondelegate/3566740-indirectscribbleinteraction
    indirectScribbleInteraction_focusElementIfNeeded_referencePoint_completion(interaction: cocoascript.UIIndirectScribbleInteraction, elementIdentifier: cocoascript.UIScribbleElementIdentifier, focusReferencePoint: cocoascript.CGPoint, completion: cocoascript.UITextInput):void;
    // doc://com.apple.documentation/documentation/uikit/uiindirectscribbleinteractiondelegate/3566744-indirectscribbleinteraction
    indirectScribbleInteraction_shouldDelayFocusForElement(interaction: cocoascript.UIIndirectScribbleInteraction, elementIdentifier: cocoascript.UIScribbleElementIdentifier):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiindirectscribbleinteractiondelegate/3566745-indirectscribbleinteraction
    indirectScribbleInteraction_willBeginWritingInElement(interaction: cocoascript.UIIndirectScribbleInteraction, elementIdentifier: cocoascript.UIScribbleElementIdentifier):void;
    // doc://com.apple.documentation/documentation/uikit/uiindirectscribbleinteractiondelegate/3566739-indirectscribbleinteraction
    indirectScribbleInteraction_didFinishWritingInElement(interaction: cocoascript.UIIndirectScribbleInteraction, elementIdentifier: cocoascript.UIScribbleElementIdentifier):void;
    // doc://com.apple.documentation/documentation/uikit/uiindirectscribbleinteractiondelegate/3566741-indirectscribbleinteraction
    indirectScribbleInteraction_frameForElement(interaction: cocoascript.UIIndirectScribbleInteraction, elementIdentifier: cocoascript.UIScribbleElementIdentifier):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uiindirectscribbleinteractiondelegate/3566743-indirectscribbleinteraction
    indirectScribbleInteraction_requestElementsInRect_completion(interaction: cocoascript.UIIndirectScribbleInteraction, rect: cocoascript.CGRect, completion: cocoascript.UIScribbleElementIdentifier):void;
  }
}
