declare namespace cocoascript {
/**
 * The context in which the current script command is executed.
 * doc://com.apple.documentation/documentation/foundation/nsscriptexecutioncontext
 */
interface NSScriptExecutionContext extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsscriptexecutioncontext/1415288-toplevelobject
  topLevelObject(): cocoascript.id;
  setTopLevelObject(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptexecutioncontext/1412411-objectbeingtested
  objectBeingTested(): cocoascript.id;
  setObjectBeingTested(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptexecutioncontext/1416391-rangecontainerobject
  rangeContainerObject(): cocoascript.id;
  setRangeContainerObject(): void;
  // 
  alloc():cocoascript.NSScriptExecutionContext;
  // 
  init():cocoascript.NSScriptExecutionContext;
}
}
declare const NSScriptExecutionContext: cocoascript.NSScriptExecutionContext;

