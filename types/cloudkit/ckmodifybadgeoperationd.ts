declare namespace cocoascript {
  /**
   * An operation that sets the value of the app icon’s badge.
   * doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation
   */
  interface CKModifyBadgeOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation/1391678-init
    init():cocoascript.CKModifyBadgeOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation/1391676-initwithbadgevalue
    initWithBadgeValue(badgeValue: cocoascript.NSUInteger):cocoascript.CKModifyBadgeOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation/1391674-badgevalue
    badgeValue(): cocoascript.NSUInteger;
    setBadgeValue(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation/1391682-modifybadgecompletionblock
    modifyBadgeCompletionBlock(): cocoascript.NSError;
    setModifyBadgeCompletionBlock(): void;
    //
    alloc():cocoascript.CKModifyBadgeOperation;
    //
    init():cocoascript.CKModifyBadgeOperation;
  }
}

declare const CKModifyBadgeOperation: cocoascript.CKModifyBadgeOperation;
