declare namespace cocoascript {
/**
 * An Objective-C message rendered as an object.  
 * doc://com.apple.documentation/documentation/foundation/nsinvocation
 */
interface NSInvocation extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437836-selector
  selector(): cocoascript.SEL;
  setSelector(): void;
  // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437852-target
  target(): cocoascript.id;
  setTarget(): void;
  // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437834-setargument
  setArgument_atIndex(argumentLocation: void, idx: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437830-getargument
  getArgument_atIndex(argumentLocation: void, idx: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437842-argumentsretained
  argumentsRetained(): cocoascript.BOOL;
  setArgumentsRetained(): void;
  // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437838-retainarguments
  retainArguments():void;
  // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437848-setreturnvalue
  setReturnValue(retLoc: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437832-getreturnvalue
  getReturnValue(retLoc: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437850-invoke
  invoke():void;
  // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437854-invokewithtarget
  invokeWithTarget(target: cocoascript.NSInvocation):void;
  // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437846-methodsignature
  methodSignature(): cocoascript.NSMethodSignature;
  setMethodSignature(): void;
  // 
  alloc():cocoascript.NSInvocation;
  // 
  init():cocoascript.NSInvocation;
}
}
declare const NSInvocation: cocoascript.NSInvocation;

