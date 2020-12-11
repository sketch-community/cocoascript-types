declare namespace cocoascript {
  /**
   * An object that controls swipe navigation and animations between views or view content.
   * doc://com.apple.documentation/documentation/appkit/nspagecontroller
   */
  interface NSPageController extends NSViewController {
    // doc://com.apple.documentation/documentation/appkit/nspagecontroller/1435019-delegate
    delegate(): cocoascript.NSPageControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontroller/1435001-arrangedobjects
    arrangedObjects(): cocoascript.NSArray;
    setArrangedObjects(): void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontroller/1434990-navigateforwardtoobject
    navigateForwardToObject(object: cocoascript.NSPageController):void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontroller/1434988-selectedindex
    selectedIndex(): cocoascript.NSInteger;
    setSelectedIndex(): void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontroller/1435017-navigateback
    navigateBack(sender: cocoascript.NSPageController):void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontroller/1435004-navigateforward
    navigateForward(sender: cocoascript.NSPageController):void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontroller/1435011-takeselectedindexfrom
    takeSelectedIndexFrom(sender: cocoascript.NSPageController):void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontroller/1434999-transitionstyle
    transitionStyle(): cocoascript.NSPageControllerTransitionStyle;
    setTransitionStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontroller/1434994-completetransition
    completeTransition():void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontroller/1435013-selectedviewcontroller
    selectedViewController(): cocoascript.NSViewController;
    setSelectedViewController(): void;
    //
    alloc():cocoascript.NSPageController;
    //
    init():cocoascript.NSPageController;
  }
}

declare const NSPageController: cocoascript.NSPageController;
