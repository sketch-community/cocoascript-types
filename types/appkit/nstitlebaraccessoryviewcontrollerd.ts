declare namespace cocoascript {
  /**
   * An object that manages a custom view—known as an accessory view—in the title bar–toolbar area of a window.
   * doc://com.apple.documentation/documentation/appkit/nstitlebaraccessoryviewcontroller
   */
  interface NSTitlebarAccessoryViewController extends NSViewController {
    // doc://com.apple.documentation/documentation/appkit/nstitlebaraccessoryviewcontroller/1397782-fullscreenminheight
    fullScreenMinHeight(): cocoascript.CGFloat;
    setFullScreenMinHeight(): void;
    // doc://com.apple.documentation/documentation/appkit/nstitlebaraccessoryviewcontroller/1397778-layoutattribute
    layoutAttribute(): cocoascript.NSLayoutAttribute;
    setLayoutAttribute(): void;
    // doc://com.apple.documentation/documentation/appkit/nstitlebaraccessoryviewcontroller/1397780-viewdidappear
    viewDidAppear():void;
    // doc://com.apple.documentation/documentation/appkit/nstitlebaraccessoryviewcontroller/1397776-viewdiddisappear
    viewDidDisappear():void;
    // doc://com.apple.documentation/documentation/appkit/nstitlebaraccessoryviewcontroller/1397774-viewwillappear
    viewWillAppear():void;
    // doc://com.apple.documentation/documentation/appkit/nstitlebaraccessoryviewcontroller/3656518-automaticallyadjustssize
    automaticallyAdjustsSize(): cocoascript.BOOL;
    setAutomaticallyAdjustsSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nstitlebaraccessoryviewcontroller/2097084-hidden
    hidden(): cocoascript.BOOL;
    setHidden(): void;
    //
    alloc():cocoascript.NSTitlebarAccessoryViewController;
    //
    init():cocoascript.NSTitlebarAccessoryViewController;
  }
}

declare const NSTitlebarAccessoryViewController: cocoascript.NSTitlebarAccessoryViewController;
