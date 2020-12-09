declare namespace cocoascript {
/**
 * An object that represents a special condition that interrupts the normal flow of program execution.
 * doc://com.apple.documentation/documentation/foundation/nsexception
 */
interface NSException extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsexception/1414506-initwithname
  initWithName_reason_userInfo(aName: cocoascript.NSExceptionName, aReason: cocoascript.NSString, aUserInfo: cocoascript.NSDictionary):cocoascript.NSException;
  // doc://com.apple.documentation/documentation/foundation/nsexception/1416135-raise
  raise():void;
  // doc://com.apple.documentation/documentation/foundation/nsexception/1410925-name
  name(): cocoascript.NSExceptionName;
  setName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsexception/1415537-reason
  reason(): cocoascript.NSString;
  setReason(): void;
  // doc://com.apple.documentation/documentation/foundation/nsexception/1418149-userinfo
  userInfo(): cocoascript.NSDictionary;
  setUserInfo(): void;
  // doc://com.apple.documentation/documentation/foundation/nsexception/1412165-callstackreturnaddresses
  callStackReturnAddresses(): cocoascript.NSNumber;
  setCallStackReturnAddresses(): void;
  // doc://com.apple.documentation/documentation/foundation/nsexception/1416845-callstacksymbols
  callStackSymbols(): cocoascript.NSString;
  setCallStackSymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/1416853-nsgetuncaughtexceptionhandler
  NSGetUncaughtExceptionHandler(): void;
  setNSGetUncaughtExceptionHandler(): void;
  // 
  alloc():cocoascript.NSException;
  // 
  init():cocoascript.NSException;
}
}
declare const NSException: cocoascript.NSException;

