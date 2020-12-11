declare namespace cocoascript {
  /**
   * A panel that queries the user for information such as paper type and orientation.
   * doc://com.apple.documentation/documentation/appkit/nspagelayout
   */
  interface NSPageLayout extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nspagelayout/1397794-beginsheetwithprintinfo
    beginSheetWithPrintInfo_modalForWindow_delegate_didEndSelector_contextInfo(printInfo: cocoascript.NSPrintInfo, docWindow: cocoascript.NSWindow, delegate: cocoascript.NSPageLayout, didEndSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nspagelayout/1397798-runmodal
    runModal():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nspagelayout/1397784-runmodalwithprintinfo
    runModalWithPrintInfo(printInfo: cocoascript.NSPrintInfo):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nspagelayout/1397790-addaccessorycontroller
    addAccessoryController(accessoryController: cocoascript.NSViewController):void;
    // doc://com.apple.documentation/documentation/appkit/nspagelayout/1397802-removeaccessorycontroller
    removeAccessoryController(accessoryController: cocoascript.NSViewController):void;
    // doc://com.apple.documentation/documentation/appkit/nspagelayout/1397788-accessorycontrollers
    accessoryControllers(): cocoascript.NSViewController;
    setAccessoryControllers(): void;
    // doc://com.apple.documentation/documentation/appkit/nspagelayout/1397804-printinfo
    printInfo(): cocoascript.NSPrintInfo;
    setPrintInfo(): void;
    // doc://com.apple.documentation/documentation/appkit/nspagelayout/1397800-accessoryview
    accessoryView():cocoascript.NSView;
    // doc://com.apple.documentation/documentation/appkit/nspagelayout/1397786-setaccessoryview
    setAccessoryView(accessoryView: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nspagelayout/1397796-readprintinfo
    readPrintInfo():void;
    // doc://com.apple.documentation/documentation/appkit/nspagelayout/1397792-writeprintinfo
    writePrintInfo():void;
    //
    alloc():cocoascript.NSPageLayout;
    //
    init():cocoascript.NSPageLayout;
  }
}

declare const NSPageLayout: cocoascript.NSPageLayout;
