declare namespace cocoascript {
  /**
   * A command that counts the number of objects of a specified class in the specified object container.
   * doc://com.apple.documentation/documentation/foundation/nscountcommand
   */
  interface NSCountCommand extends NSScriptCommand {
    //
    alloc():cocoascript.NSCountCommand;
    //
    init():cocoascript.NSCountCommand;
  }
}

declare const NSCountCommand: cocoascript.NSCountCommand;
