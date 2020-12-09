declare namespace cocoascript {
/**
 * The entity that receives the proceeds from a bill payment.
 * doc://com.apple.documentation/documentation/sirikit/inbillpayee
 */
interface INBillPayee extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inbillpayee/2851532-initwithnickname
  initWithNickname_number_organizationName(nickname: cocoascript.INSpeakableString, number: cocoascript.NSString, organizationName: cocoascript.INSpeakableString):cocoascript.INBillPayee;
  // doc://com.apple.documentation/documentation/sirikit/inbillpayee/2851533-nickname
  nickname(): cocoascript.INSpeakableString;
  setNickname(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbillpayee/2799316-organizationname
  organizationName(): cocoascript.INSpeakableString;
  setOrganizationName(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbillpayee/2799312-accountnumber
  accountNumber(): cocoascript.NSString;
  setAccountNumber(): void;
  // 
  alloc():cocoascript.INBillPayee;
  // 
  init():cocoascript.INBillPayee;
}
}
declare const INBillPayee: cocoascript.INBillPayee;

