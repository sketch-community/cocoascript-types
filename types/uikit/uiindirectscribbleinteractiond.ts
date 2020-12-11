declare namespace cocoascript {
  /**
   * An interaction for using Scribble to enter text by writing on a view that isn’t formally a text input.
   * doc://com.apple.documentation/documentation/uikit/uiindirectscribbleinteraction
   */
  interface UIIndirectScribbleInteraction extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiindirectscribbleinteraction/3566737-initwithdelegate
    initWithDelegate(delegate: cocoascript.UIIndirectScribbleInteractionDelegate):cocoascript.UIIndirectScribbleInteraction;
    // doc://com.apple.documentation/documentation/uikit/uiindirectscribbleinteraction/3566735-delegate
    delegate(): cocoascript.UIIndirectScribbleInteractionDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uiindirectscribbleinteraction/3566736-handlingwriting
    handlingWriting(): cocoascript.BOOL;
    setHandlingWriting(): void;
    //
    alloc():cocoascript.UIIndirectScribbleInteraction;
    //
    init():cocoascript.UIIndirectScribbleInteraction;
  }
}

declare const UIIndirectScribbleInteraction: cocoascript.UIIndirectScribbleInteraction;
