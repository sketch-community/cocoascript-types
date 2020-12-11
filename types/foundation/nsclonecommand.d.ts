declare namespace cocoascript {
  /**
   * A command that clones one or more scriptable objects.
   * doc://com.apple.documentation/documentation/foundation/nsclonecommand
   */
  interface NSCloneCommand extends NSScriptCommand {
    // doc://com.apple.documentation/documentation/foundation/nsclonecommand/1407603-keyspecifier
    keySpecifier(): cocoascript.NSScriptObjectSpecifier;
    setKeySpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsclonecommand/1414796-setreceiversspecifier
    setReceiversSpecifier(receiversRef: cocoascript.NSScriptObjectSpecifier):void;
    //
    alloc():cocoascript.NSCloneCommand;
    //
    init():cocoascript.NSCloneCommand;
  }
}

declare const NSCloneCommand: cocoascript.NSCloneCommand;
