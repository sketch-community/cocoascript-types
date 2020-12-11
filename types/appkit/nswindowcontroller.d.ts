declare namespace cocoascript {
  /**
   * A controller that manages a window, usually a window stored in a nib file.
   * doc://com.apple.documentation/documentation/appkit/nswindowcontroller
   */
  interface NSWindowController extends NSResponder {
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1533442-initwithwindow
    initWithWindow(window: cocoascript.NSWindow):cocoascript.NSWindowController;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1527041-initwithwindownibname
    initWithWindowNibName(windowNibName: cocoascript.NSNibName):cocoascript.NSWindowController;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1535239-initwithwindownibname
    initWithWindowNibName_owner(windowNibName: cocoascript.NSNibName, owner: cocoascript.NSWindowController):cocoascript.NSWindowController;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1532584-initwithwindownibpath
    initWithWindowNibPath_owner(windowNibPath: cocoascript.NSString, owner: cocoascript.NSWindowController):cocoascript.NSWindowController;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1535137-loadwindow
    loadWindow():void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1534037-showwindow
    showWindow(sender: cocoascript.NSWindowController):void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1527496-windowloaded
    windowLoaded(): cocoascript.BOOL;
    setWindowLoaded(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1535593-window
    window(): cocoascript.NSWindow;
    setWindow(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1534205-windowdidload
    windowDidLoad():void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1524557-windowwillload
    windowWillLoad():void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1534220-document
    document(): cocoascript.id;
    setDocument(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1534261-setdocumentedited
    setDocumentEdited(dirtyFlag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1535390-close
    close():void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1526933-shouldclosedocument
    shouldCloseDocument(): cocoascript.BOOL;
    setShouldCloseDocument(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1532707-owner
    owner(): cocoascript.id;
    setOwner(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1527268-storyboard
    storyboard(): cocoascript.NSStoryboard;
    setStoryboard(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1527084-windownibname
    windowNibName(): cocoascript.NSNibName;
    setWindowNibName(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1524719-windownibpath
    windowNibPath(): cocoascript.NSString;
    setWindowNibPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1528177-shouldcascadewindows
    shouldCascadeWindows(): cocoascript.BOOL;
    setShouldCascadeWindows(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1528616-windowframeautosavename
    windowFrameAutosaveName(): cocoascript.NSWindowFrameAutosaveName;
    setWindowFrameAutosaveName(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1524667-synchronizewindowtitlewithdocume
    synchronizeWindowTitleWithDocumentName():void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1528112-windowtitlefordocumentdisplaynam
    windowTitleForDocumentDisplayName(displayName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1532552-contentviewcontroller
    contentViewController(): cocoascript.NSViewController;
    setContentViewController(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1531963-dismisscontroller
    dismissController(sender: cocoascript.NSWindowController):void;
    // doc://com.apple.documentation/documentation/appkit/nswindowcontroller/1529004-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSWindowController;
    //
    alloc():cocoascript.NSWindowController;
    //
    init():cocoascript.NSWindowController;
  }
}

declare const NSWindowController: cocoascript.NSWindowController;
