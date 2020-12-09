declare namespace cocoascript {
/**
 * An object that executes AppleScript scripts.
 * doc://com.apple.documentation/documentation/foundation/nsuserapplescripttask
 */
interface NSUserAppleScriptTask extends NSUserScriptTask {
  // doc://com.apple.documentation/documentation/foundation/nsuserapplescripttask/1416515-executewithappleevent
  executeWithAppleEvent_completionHandler(event: cocoascript.NSAppleEventDescriptor, handler: cocoascript.NSUserAppleScriptTaskCompletionHandler):void;
  // 
  alloc():cocoascript.NSUserAppleScriptTask;
  // 
  init():cocoascript.NSUserAppleScriptTask;
}
}
declare const NSUserAppleScriptTask: cocoascript.NSUserAppleScriptTask;

