declare namespace cocoascript {
  /**
   * A panel that prompts the user to select a file to open.
   * doc://com.apple.documentation/documentation/appkit/nsopenpanel
   */
  interface NSOpenPanel extends NSSavePanel {
    // doc://com.apple.documentation/documentation/appkit/nsopenpanel/1527060-canchoosefiles
    canChooseFiles(): cocoascript.BOOL;
    setCanChooseFiles(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenpanel/1532668-canchoosedirectories
    canChooseDirectories(): cocoascript.BOOL;
    setCanChooseDirectories(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenpanel/1533625-resolvesaliases
    resolvesAliases(): cocoascript.BOOL;
    setResolvesAliases(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenpanel/1530786-allowsmultipleselection
    allowsMultipleSelection(): cocoascript.BOOL;
    setAllowsMultipleSelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenpanel/1535036-accessoryviewdisclosed
    accessoryViewDisclosed(): cocoascript.BOOL;
    setAccessoryViewDisclosed(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenpanel/1529845-urls
    URLs(): cocoascript.NSURL;
    setURLs(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenpanel/1533418-candownloadubiquitouscontents
    canDownloadUbiquitousContents(): cocoascript.BOOL;
    setCanDownloadUbiquitousContents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenpanel/1533261-canresolveubiquitousconflicts
    canResolveUbiquitousConflicts(): cocoascript.BOOL;
    setCanResolveUbiquitousConflicts(): void;
    //
    alloc():cocoascript.NSOpenPanel;
    //
    init():cocoascript.NSOpenPanel;
  }
}

declare const NSOpenPanel: cocoascript.NSOpenPanel;
