declare namespace cocoascript {
/**
 * The identifying information for a user of your app.
 * doc://com.apple.documentation/documentation/sirikit/inpersonhandle
 */
interface INPersonHandle extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inpersonhandle/2716071-initwithvalue
  initWithValue_type_label(value: cocoascript.NSString, type: cocoascript.INPersonHandleType, label: cocoascript.INPersonHandleLabel):cocoascript.INPersonHandle;
  // doc://com.apple.documentation/documentation/sirikit/inpersonhandle/2138303-initwithvalue
  initWithValue_type(value: cocoascript.NSString, type: cocoascript.INPersonHandleType):cocoascript.INPersonHandle;
  // doc://com.apple.documentation/documentation/sirikit/inpersonhandle/2138309-type
  type(): cocoascript.INPersonHandleType;
  setType(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpersonhandle/2138297-value
  value(): cocoascript.NSString;
  setValue(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpersonhandle/2716072-label
  label(): cocoascript.INPersonHandleLabel;
  setLabel(): void;
  // 
  alloc():cocoascript.INPersonHandle;
  // 
  init():cocoascript.INPersonHandle;
}
}
declare const INPersonHandle: cocoascript.INPersonHandle;

