declare namespace cocoascript {
/**
 * An object that logs an assertion to the console.
 * doc://com.apple.documentation/documentation/foundation/nsassertionhandler
 */
interface NSAssertionHandler extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsassertionhandler/1417391-currenthandler
  currentHandler(): cocoascript.NSAssertionHandler;
  setCurrentHandler(): void;
  // doc://com.apple.documentation/documentation/foundation/nsassertionhandler/1569532-handlefailureinfunction
  handleFailureInFunction_file_lineNumber_description(functionName: cocoascript.NSString, fileName: cocoascript.NSString, line: cocoascript.NSInteger, format: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsassertionhandler/1569513-handlefailureinmethod
  handleFailureInMethod_object_file_lineNumber_description(selector: cocoascript.SEL, object: cocoascript.NSAssertionHandler, fileName: cocoascript.NSString, line: cocoascript.NSInteger, format: cocoascript.NSString):void;
  // 
  alloc():cocoascript.NSAssertionHandler;
  // 
  init():cocoascript.NSAssertionHandler;
}
}
declare const NSAssertionHandler: cocoascript.NSAssertionHandler;

