declare namespace cocoascript {
  /**
   * A panel that prompts the user for information about where to save a file.
   * doc://com.apple.documentation/documentation/appkit/nssavepanel
   */
  interface NSSavePanel extends NSPanel {
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1532570-delegate
    delegate(): cocoascript.NSOpenSavePanelDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1535870-beginsheetmodalforwindow
    beginSheetModalForWindow_completionHandler(window: cocoascript.NSWindow, handler: cocoascript.NSModalResponse):void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1527007-beginwithcompletionhandler
    beginWithCompletionHandler(handler: cocoascript.NSModalResponse):void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1525357-runmodal
    runModal():cocoascript.NSModalResponse;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1526381-validatevisiblecolumns
    validateVisibleColumns():void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1534384-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1535071-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1525227-prompt
    prompt(): cocoascript.NSString;
    setPrompt(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1528581-message
    message(): cocoascript.NSString;
    setMessage(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1535411-namefieldlabel
    nameFieldLabel(): cocoascript.NSString;
    setNameFieldLabel(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1529299-namefieldstringvalue
    nameFieldStringValue(): cocoascript.NSString;
    setNameFieldStringValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1531279-directoryurl
    directoryURL(): cocoascript.NSURL;
    setDirectoryURL(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1525544-accessoryview
    accessoryView(): cocoascript.NSView;
    setAccessoryView(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1525589-showstagfield
    showsTagField(): cocoascript.BOOL;
    setShowsTagField(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1535928-tagnames
    tagNames(): cocoascript.NSString;
    setTagNames(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1532626-cancreatedirectories
    canCreateDirectories(): cocoascript.BOOL;
    setCanCreateDirectories(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1535360-canselecthiddenextension
    canSelectHiddenExtension(): cocoascript.BOOL;
    setCanSelectHiddenExtension(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1524285-showshiddenfiles
    showsHiddenFiles(): cocoascript.BOOL;
    setShowsHiddenFiles(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1529267-extensionhidden
    extensionHidden(): cocoascript.BOOL;
    setExtensionHidden(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1534515-expanded
    expanded(): cocoascript.BOOL;
    setExpanded(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/3566857-allowedcontenttypes
    allowedContentTypes(): cocoascript.UTType;
    setAllowedContentTypes(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1526960-allowsotherfiletypes
    allowsOtherFileTypes(): cocoascript.BOOL;
    setAllowsOtherFileTypes(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1529384-treatsfilepackagesasdirectories
    treatsFilePackagesAsDirectories(): cocoascript.BOOL;
    setTreatsFilePackagesAsDirectories(): void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1535364-ok
    ok(sender: cocoascript.NSSavePanel):void;
    // doc://com.apple.documentation/documentation/appkit/nssavepanel/1534357-cancel
    cancel(sender: cocoascript.NSSavePanel):void;
    //
    alloc():cocoascript.NSSavePanel;
    //
    init():cocoascript.NSSavePanel;
  }
}

declare const NSSavePanel: cocoascript.NSSavePanel;
