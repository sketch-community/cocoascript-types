declare namespace cocoascript {
  /**
   * A panel or sheet that allows the user to create a keychain.
   * doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel
   */
  interface SFKeychainSavePanel extends NSSavePanel {
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel/1580414-setpassword
    setPassword(password: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel/1580416-beginsheetfordirectory
    beginSheetForDirectory_file_modalForWindow_modalDelegate_didEndSelector_contextInfo(path: cocoascript.NSString, name: cocoascript.NSString, docWindow: cocoascript.NSWindow, delegate: cocoascript.SFKeychainSavePanel, didEndSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel/1580415-runmodalfordirectory
    runModalForDirectory_file(path: cocoascript.NSString, name: cocoascript.NSString):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel/1580417-error
    error():cocoascript.NSError;
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel/1580412-keychain
    keychain():cocoascript.SecKeychainRef;
    //
    alloc():cocoascript.SFKeychainSavePanel;
    //
    init():cocoascript.SFKeychainSavePanel;
  }
}

declare const SFKeychainSavePanel: cocoascript.SFKeychainSavePanel;
