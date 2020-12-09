declare namespace cocoascript {
/**
 * An object that executes unix applications.
 * doc://com.apple.documentation/documentation/foundation/nsuserunixtask
 */
interface NSUserUnixTask extends NSUserScriptTask {
  // doc://com.apple.documentation/documentation/foundation/nsuserunixtask/1412077-executewitharguments
  executeWithArguments_completionHandler(arguments: cocoascript.NSString, handler: cocoascript.NSUserUnixTaskCompletionHandler):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserunixtask/1411522-standarderror
  standardError(): cocoascript.NSFileHandle;
  setStandardError(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuserunixtask/1407821-standardinput
  standardInput(): cocoascript.NSFileHandle;
  setStandardInput(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuserunixtask/1418151-standardoutput
  standardOutput(): cocoascript.NSFileHandle;
  setStandardOutput(): void;
  // 
  alloc():cocoascript.NSUserUnixTask;
  // 
  init():cocoascript.NSUserUnixTask;
}
}
declare const NSUserUnixTask: cocoascript.NSUserUnixTask;

