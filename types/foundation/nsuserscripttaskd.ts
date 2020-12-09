declare namespace cocoascript {
/**
 * An object that executes scripts.
 * doc://com.apple.documentation/documentation/foundation/nsuserscripttask
 */
interface NSUserScriptTask extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsuserscripttask/1409998-initwithurl
  initWithURL_error(url: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.NSUserScriptTask;
  // doc://com.apple.documentation/documentation/foundation/nsuserscripttask/1408618-scripturl
  scriptURL(): cocoascript.NSURL;
  setScriptURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuserscripttask/1410967-executewithcompletionhandler
  executeWithCompletionHandler(handler: cocoascript.NSUserScriptTaskCompletionHandler):void;
  // 
  alloc():cocoascript.NSUserScriptTask;
  // 
  init():cocoascript.NSUserScriptTask;
}
}
declare const NSUserScriptTask: cocoascript.NSUserScriptTask;

