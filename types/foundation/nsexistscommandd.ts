declare namespace cocoascript {
  /**
   * A command that determines whether a scriptable object exists.
   * doc://com.apple.documentation/documentation/foundation/nsexistscommand
   */
  interface NSExistsCommand extends NSScriptCommand {
    //
    alloc():cocoascript.NSExistsCommand;
    //
    init():cocoascript.NSExistsCommand;
  }
}

declare const NSExistsCommand: cocoascript.NSExistsCommand;
