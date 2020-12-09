declare namespace cocoascript {
/**
 * A command that deletes a scriptable object.
 * doc://com.apple.documentation/documentation/foundation/nsdeletecommand
 */
interface NSDeleteCommand extends NSScriptCommand {
  // doc://com.apple.documentation/documentation/foundation/nsdeletecommand/1414705-keyspecifier
  keySpecifier(): cocoascript.NSScriptObjectSpecifier;
  setKeySpecifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdeletecommand/1407286-setreceiversspecifier
  setReceiversSpecifier(receiversRef: cocoascript.NSScriptObjectSpecifier):void;
  // 
  alloc():cocoascript.NSDeleteCommand;
  // 
  init():cocoascript.NSDeleteCommand;
}
}
declare const NSDeleteCommand: cocoascript.NSDeleteCommand;

