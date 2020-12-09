declare namespace cocoascript {
/**
 * Information about a form of payment supported by your app.
 * doc://com.apple.documentation/documentation/sirikit/inpaymentmethod
 */
interface INPaymentMethod extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inpaymentmethod/2211609-initwithtype
  initWithType_name_identificationHint_icon(type: cocoascript.INPaymentMethodType, name: cocoascript.NSString, identificationHint: cocoascript.NSString, icon: cocoascript.INImage):cocoascript.INPaymentMethod;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentmethod/1638590-type
  type(): cocoascript.INPaymentMethodType;
  setType(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentmethod/1638237-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentmethod/2211608-identificationhint
  identificationHint(): cocoascript.NSString;
  setIdentificationHint(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentmethod/1639364-icon
  icon(): cocoascript.INImage;
  setIcon(): void;
  // 
  alloc():cocoascript.INPaymentMethod;
  // 
  init():cocoascript.INPaymentMethod;
}
}
declare const INPaymentMethod: cocoascript.INPaymentMethod;

