declare namespace cocoascript {
/**
 * A record of the type information for the return value and parameters of a method. 
 * doc://com.apple.documentation/documentation/foundation/nsmethodsignature
 */
interface NSMethodSignature extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsmethodsignature/1519660-getargumenttypeatindex
  getArgumentTypeAtIndex(idx: cocoascript.NSUInteger):cocoascript.char;
  // doc://com.apple.documentation/documentation/foundation/nsmethodsignature/1519662-numberofarguments
  numberOfArguments(): cocoascript.NSUInteger;
  setNumberOfArguments(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmethodsignature/1519658-framelength
  frameLength(): cocoascript.NSUInteger;
  setFrameLength(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmethodsignature/1519667-methodreturntype
  methodReturnType(): cocoascript.char;
  setMethodReturnType(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmethodsignature/1519666-methodreturnlength
  methodReturnLength(): cocoascript.NSUInteger;
  setMethodReturnLength(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmethodsignature/1519664-isoneway
  isOneway():cocoascript.BOOL;
  // 
  alloc():cocoascript.NSMethodSignature;
  // 
  init():cocoascript.NSMethodSignature;
}
}
declare const NSMethodSignature: cocoascript.NSMethodSignature;

