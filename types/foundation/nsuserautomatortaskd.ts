declare namespace cocoascript {
/**
 * An object that executes Automator workflows.
 * doc://com.apple.documentation/documentation/foundation/nsuserautomatortask
 */
interface NSUserAutomatorTask extends NSUserScriptTask {
  // doc://com.apple.documentation/documentation/foundation/nsuserautomatortask/1418079-executewithinput
  executeWithInput_completionHandler(input: cocoascript.NSSecureCoding, handler: cocoascript.NSUserAutomatorTaskCompletionHandler):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserautomatortask/1418099-variables
  variables(): cocoascript.id;
  setVariables(): void;
  // 
  alloc():cocoascript.NSUserAutomatorTask;
  // 
  init():cocoascript.NSUserAutomatorTask;
}
}
declare const NSUserAutomatorTask: cocoascript.NSUserAutomatorTask;

