declare namespace cocoascript {
  /**
   * A command that moves one or more scriptable objects.
   * doc://com.apple.documentation/documentation/foundation/nsmovecommand
   */
  interface NSMoveCommand extends NSScriptCommand {
    // doc://com.apple.documentation/documentation/foundation/nsmovecommand/1413005-keyspecifier
    keySpecifier(): cocoascript.NSScriptObjectSpecifier;
    setKeySpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmovecommand/1414654-setreceiversspecifier
    setReceiversSpecifier(receiversRef: cocoascript.NSScriptObjectSpecifier):void;
    //
    alloc():cocoascript.NSMoveCommand;
    //
    init():cocoascript.NSMoveCommand;
  }
}

declare const NSMoveCommand: cocoascript.NSMoveCommand;
