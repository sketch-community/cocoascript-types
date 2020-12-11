declare namespace cocoascript {
  /**
   * A means to display additional content related to existing content on the screen.
   * doc://com.apple.documentation/documentation/appkit/nspopover
   */
  interface NSPopover extends NSResponder {
    // doc://com.apple.documentation/documentation/appkit/nspopover/1526794-contentviewcontroller
    contentViewController(): cocoascript.NSViewController;
    setContentViewController(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1533539-behavior
    behavior(): cocoascript.NSPopoverBehavior;
    setBehavior(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1532113-showrelativetorect
    showRelativeToRect_ofView_preferredEdge(positioningRect: cocoascript.NSRect, positioningView: cocoascript.NSView, preferredEdge: cocoascript.NSRectEdge):void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1526090-positioningrect
    positioningRect(): cocoascript.NSRect;
    setPositioningRect(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1529859-appearance
    appearance(): cocoascript.NSAppearance;
    setAppearance(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1526863-effectiveappearance
    effectiveAppearance(): cocoascript.NSAppearance;
    setEffectiveAppearance(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1526527-animates
    animates(): cocoascript.BOOL;
    setAnimates(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1524677-contentsize
    contentSize(): cocoascript.NSSize;
    setContentSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1535120-shown
    shown(): cocoascript.BOOL;
    setShown(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1534278-detached
    detached(): cocoascript.BOOL;
    setDetached(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1534290-performclose
    performClose(sender: cocoascript.NSPopover):void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1526823-close
    close():void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1526708-delegate
    delegate(): cocoascript.NSPopoverDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopoverclosereasonkey
    NSPopoverCloseReasonKey(): cocoascript.const;
    setNSPopoverCloseReasonKey(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1526851-init
    init():cocoascript.NSPopover;
    // doc://com.apple.documentation/documentation/appkit/nspopover/1524631-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSPopover;
    //
    alloc():cocoascript.NSPopover;
    //
    init():cocoascript.NSPopover;
  }
}

declare const NSPopover: cocoascript.NSPopover;
