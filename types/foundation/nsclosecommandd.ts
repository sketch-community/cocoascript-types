declare namespace cocoascript {
/**
 * A command that closes one or more scriptable objects.
 * doc://com.apple.documentation/documentation/foundation/nsclosecommand
 */
interface NSCloseCommand extends NSScriptCommand {
  // doc://com.apple.documentation/documentation/foundation/nsclosecommand/1415647-saveoptions
  saveOptions(): cocoascript.NSSaveOptions;
  setSaveOptions(): void;
  // 
  alloc():cocoascript.NSCloseCommand;
  // 
  init():cocoascript.NSCloseCommand;
}
}
declare const NSCloseCommand: cocoascript.NSCloseCommand;

