declare namespace cocoascript {
/**
 * A target element referenced by a custom rotor.
 * doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotoritemresult
 */
interface UIAccessibilityCustomRotorItemResult extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotoritemresult/1649911-initwithtargetelement
  initWithTargetElement_targetRange(targetElement: cocoascript.NSObject, targetRange: cocoascript.UITextRange):cocoascript.UIAccessibilityCustomRotorItemResult;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotoritemresult/1649842-targetelement
  targetElement(): cocoascript.NSObject;
  setTargetElement(): void;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotoritemresult/1649803-targetrange
  targetRange(): cocoascript.UITextRange;
  setTargetRange(): void;
  // 
  alloc():cocoascript.UIAccessibilityCustomRotorItemResult;
  // 
  init():cocoascript.UIAccessibilityCustomRotorItemResult;
}
}
declare const UIAccessibilityCustomRotorItemResult: cocoascript.UIAccessibilityCustomRotorItemResult;

