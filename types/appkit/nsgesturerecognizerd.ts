declare namespace cocoascript {
  /**
   * An object that monitors events and calls its action method when a predefined sequence of events occur.
   * doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer
   */
  interface NSGestureRecognizer extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1535012-initwithtarget
    initWithTarget_action(target: cocoascript.NSGestureRecognizer, action: cocoascript.SEL):cocoascript.NSGestureRecognizer;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1529280-action
    action(): cocoascript.SEL;
    setAction(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1530932-target
    target(): cocoascript.id;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1524261-locationinview
    locationInView(view: cocoascript.NSView):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1535694-state
    state(): cocoascript.NSGestureRecognizerState;
    setState(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1527192-view
    view(): cocoascript.NSView;
    setView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1535263-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1533619-delaysprimarymousebuttonevents
    delaysPrimaryMouseButtonEvents(): cocoascript.BOOL;
    setDelaysPrimaryMouseButtonEvents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1535204-delayssecondarymousebuttonevents
    delaysSecondaryMouseButtonEvents(): cocoascript.BOOL;
    setDelaysSecondaryMouseButtonEvents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1530375-delaysothermousebuttonevents
    delaysOtherMouseButtonEvents(): cocoascript.BOOL;
    setDelaysOtherMouseButtonEvents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1529788-delayskeyevents
    delaysKeyEvents(): cocoascript.BOOL;
    setDelaysKeyEvents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1529974-delaysmagnificationevents
    delaysMagnificationEvents(): cocoascript.BOOL;
    setDelaysMagnificationEvents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1535384-delaysrotationevents
    delaysRotationEvents(): cocoascript.BOOL;
    setDelaysRotationEvents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1529879-delegate
    delegate(): cocoascript.NSGestureRecognizerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1527219-reset
    reset():void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1524901-mousedown
    mouseDown(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1534535-mousedragged
    mouseDragged(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1526116-mouseup
    mouseUp(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1534433-othermousedown
    otherMouseDown(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1534208-othermousedragged
    otherMouseDragged(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1527874-othermouseup
    otherMouseUp(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1527421-rightmousedown
    rightMouseDown(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1529778-rightmousedragged
    rightMouseDragged(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1525729-rightmouseup
    rightMouseUp(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1528828-magnifywithevent
    magnifyWithEvent(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1531401-rotatewithevent
    rotateWithEvent(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1534587-canbepreventedbygesturerecognize
    canBePreventedByGestureRecognizer(preventingGestureRecognizer: cocoascript.NSGestureRecognizer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1534503-canpreventgesturerecognizer
    canPreventGestureRecognizer(preventedGestureRecognizer: cocoascript.NSGestureRecognizer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1530755-shouldberequiredtofailbygesturer
    shouldBeRequiredToFailByGestureRecognizer(otherGestureRecognizer: cocoascript.NSGestureRecognizer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1532939-shouldrequirefailureofgesturerec
    shouldRequireFailureOfGestureRecognizer(otherGestureRecognizer: cocoascript.NSGestureRecognizer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1532158-keydown
    keyDown(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1526578-keyup
    keyUp(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1529889-tabletpoint
    tabletPoint(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1532604-flagschanged
    flagsChanged(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1527009-pressurechangewithevent
    pressureChangeWithEvent(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1535895-pressureconfiguration
    pressureConfiguration(): cocoascript.NSPressureConfiguration;
    setPressureConfiguration(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/1534865-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSGestureRecognizer;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/2588249-allowedtouchtypes
    allowedTouchTypes(): cocoascript.NSTouchTypeMask;
    setAllowedTouchTypes(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/2544794-touchesbeganwithevent
    touchesBeganWithEvent(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/2544757-touchescancelledwithevent
    touchesCancelledWithEvent(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/2544740-touchesendedwithevent
    touchesEndedWithEvent(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizer/2544863-touchesmovedwithevent
    touchesMovedWithEvent(event: cocoascript.NSEvent):void;
    //
    alloc():cocoascript.NSGestureRecognizer;
    //
    init():cocoascript.NSGestureRecognizer;
  }
}

declare const NSGestureRecognizer: cocoascript.NSGestureRecognizer;
