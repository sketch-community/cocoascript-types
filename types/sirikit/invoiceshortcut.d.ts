declare namespace cocoascript {
  /**
   * A shortcut the user added to Siri.
   * doc://com.apple.documentation/documentation/sirikit/invoiceshortcut
   */
  interface INVoiceShortcut extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/invoiceshortcut/2963084-identifier
    identifier(): cocoascript.NSUUID;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/invoiceshortcut/2963088-invocationphrase
    invocationPhrase(): cocoascript.NSString;
    setInvocationPhrase(): void;
    // doc://com.apple.documentation/documentation/sirikit/invoiceshortcut/2994363-shortcut
    shortcut(): cocoascript.INShortcut;
    setShortcut(): void;
    //
    alloc():cocoascript.INVoiceShortcut;
    //
    init():cocoascript.INVoiceShortcut;
  }
}

declare const INVoiceShortcut: cocoascript.INVoiceShortcut;
