declare namespace cocoascript {
/**
 * An object that displays and manages custom input for a view when that view becomes the first responder.  
 * doc://com.apple.documentation/documentation/uikit/uiinputview
 */
interface UIInputView extends UIView {
  // doc://com.apple.documentation/documentation/uikit/uiinputview/1619477-initwithframe
  initWithFrame_inputViewStyle(frame: cocoascript.CGRect, inputViewStyle: cocoascript.UIInputViewStyle):cocoascript.UIInputView;
  // doc://com.apple.documentation/documentation/uikit/uiinputview/1619475-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIInputView;
  // doc://com.apple.documentation/documentation/uikit/uiinputview/1619471-inputviewstyle
  inputViewStyle(): cocoascript.UIInputViewStyle;
  setInputViewStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uiinputview/1619473-allowsselfsizing
  allowsSelfSizing(): cocoascript.BOOL;
  setAllowsSelfSizing(): void;
  // 
  alloc():cocoascript.UIInputView;
  // 
  init():cocoascript.UIInputView;
}
}
declare const UIInputView: cocoascript.UIInputView;

