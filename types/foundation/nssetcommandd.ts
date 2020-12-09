declare namespace cocoascript {
/**
 * A command that sets one or more attributes or relationships to one or more values.
 * doc://com.apple.documentation/documentation/foundation/nssetcommand
 */
interface NSSetCommand extends NSScriptCommand {
  // doc://com.apple.documentation/documentation/foundation/nssetcommand/1415804-keyspecifier
  keySpecifier(): cocoascript.NSScriptObjectSpecifier;
  setKeySpecifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nssetcommand/1407407-setreceiversspecifier
  setReceiversSpecifier(receiversRef: cocoascript.NSScriptObjectSpecifier):void;
  // 
  alloc():cocoascript.NSSetCommand;
  // 
  init():cocoascript.NSSetCommand;
}
}
declare const NSSetCommand: cocoascript.NSSetCommand;

