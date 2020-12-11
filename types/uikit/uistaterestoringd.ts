declare namespace cocoascript {
  /**
   * Methods for adding objects to your state restoration archives.
   * doc://com.apple.documentation/documentation/uikit/uistaterestoring
   */
  interface UIStateRestoring extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uistaterestoring/1616867-restorationparent
    restorationParent(): cocoascript.UIStateRestoring;
    setRestorationParent(): void;
    // doc://com.apple.documentation/documentation/uikit/uistaterestoring/1616851-objectrestorationclass
    objectRestorationClass(): cocoascript.UIObjectRestoration;
    setObjectRestorationClass(): void;
    // doc://com.apple.documentation/documentation/uikit/uistaterestoring/1616866-encoderestorablestatewithcoder
    encodeRestorableStateWithCoder(coder: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/uikit/uistaterestoring/1616854-decoderestorablestatewithcoder
    decodeRestorableStateWithCoder(coder: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/uikit/uistaterestoring/1616864-applicationfinishedrestoringstat
    applicationFinishedRestoringState():void;
  }
}
