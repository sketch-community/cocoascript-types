declare namespace cocoascript {
  /**
   * A placeholder menu element that the system replaces with the result of the block’s completion handler.
   * doc://com.apple.documentation/documentation/uikit/uideferredmenuelement
   */
  interface UIDeferredMenuElement extends UIMenuElement {
    //
    alloc():cocoascript.UIDeferredMenuElement;
    //
    init():cocoascript.UIDeferredMenuElement;
  }
}

declare const UIDeferredMenuElement: cocoascript.UIDeferredMenuElement;
