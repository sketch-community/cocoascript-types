declare namespace cocoascript {
/**
 * A lock that can be associated with specific, user-defined conditions.
 * doc://com.apple.documentation/documentation/foundation/nsconditionlock
 */
interface NSConditionLock extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1413018-initwithcondition
  initWithCondition(condition: cocoascript.NSInteger):cocoascript.NSConditionLock;
  // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1408807-condition
  condition(): cocoascript.NSInteger;
  setCondition(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1418253-lockbeforedate
  lockBeforeDate(limit: cocoascript.NSDate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1417832-lockwhencondition
  lockWhenCondition(condition: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1408215-lockwhencondition
  lockWhenCondition_beforeDate(condition: cocoascript.NSInteger, limit: cocoascript.NSDate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1409458-trylock
  tryLock():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1413548-trylockwhencondition
  tryLockWhenCondition(condition: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1412052-unlockwithcondition
  unlockWithCondition(condition: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1411294-name
  name(): cocoascript.NSString;
  setName(): void;
  // 
  alloc():cocoascript.NSConditionLock;
  // 
  init():cocoascript.NSConditionLock;
}
}
declare const NSConditionLock: cocoascript.NSConditionLock;

