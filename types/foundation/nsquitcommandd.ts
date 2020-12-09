declare namespace cocoascript {
/**
 * A command that quits the specified app.
 * doc://com.apple.documentation/documentation/foundation/nsquitcommand
 */
interface NSQuitCommand extends NSScriptCommand {
  // doc://com.apple.documentation/documentation/foundation/nsquitcommand/1407440-saveoptions
  saveOptions(): cocoascript.NSSaveOptions;
  setSaveOptions(): void;
  // 
  alloc():cocoascript.NSQuitCommand;
  // 
  init():cocoascript.NSQuitCommand;
}
}
declare const NSQuitCommand: cocoascript.NSQuitCommand;

