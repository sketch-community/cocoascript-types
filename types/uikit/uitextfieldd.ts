declare namespace cocoascript {
/**
 * An object that displays an editable text area in your interface.  
 * doc://com.apple.documentation/documentation/uikit/uitextfield
 */
interface UITextField extends UIControl {
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619595-delegate
  delegate(): cocoascript.UITextFieldDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619635-text
  text(): cocoascript.NSString;
  setText(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619602-attributedtext
  attributedText(): cocoascript.NSAttributedString;
  setAttributedText(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619621-placeholder
  placeholder(): cocoascript.NSString;
  setPlaceholder(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619610-attributedplaceholder
  attributedPlaceholder(): cocoascript.NSAttributedString;
  setAttributedPlaceholder(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619618-defaulttextattributes
  defaultTextAttributes(): cocoascript.id;
  setDefaultTextAttributes(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619604-font
  font(): cocoascript.UIFont;
  setFont(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619617-textcolor
  textColor(): cocoascript.UIColor;
  setTextColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619643-textalignment
  textAlignment(): cocoascript.NSTextAlignment;
  setTextAlignment(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619632-typingattributes
  typingAttributes(): cocoascript.id;
  setTypingAttributes(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619625-adjustsfontsizetofitwidth
  adjustsFontSizeToFitWidth(): cocoascript.BOOL;
  setAdjustsFontSizeToFitWidth(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619605-minimumfontsize
  minimumFontSize(): cocoascript.CGFloat;
  setMinimumFontSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619608-editing
  editing(): cocoascript.BOOL;
  setEditing(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619639-clearsonbeginediting
  clearsOnBeginEditing(): cocoascript.BOOL;
  setClearsOnBeginEditing(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619631-clearsoninsertion
  clearsOnInsertion(): cocoascript.BOOL;
  setClearsOnInsertion(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619628-allowseditingtextattributes
  allowsEditingTextAttributes(): cocoascript.BOOL;
  setAllowsEditingTextAttributes(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfielddidendeditingreasonkey
  UITextFieldDidEndEditingReasonKey(): cocoascript.const;
  setUITextFieldDidEndEditingReasonKey(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619624-borderstyle
  borderStyle(): cocoascript.UITextBorderStyle;
  setBorderStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619623-background
  background(): cocoascript.UIImage;
  setBackground(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619611-disabledbackground
  disabledBackground(): cocoascript.UIImage;
  setDisabledBackground(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619622-clearbuttonmode
  clearButtonMode(): cocoascript.UITextFieldViewMode;
  setClearButtonMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619597-leftview
  leftView(): cocoascript.UIView;
  setLeftView(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619588-leftviewmode
  leftViewMode(): cocoascript.UITextFieldViewMode;
  setLeftViewMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619596-rightview
  rightView(): cocoascript.UIView;
  setRightView(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619607-rightviewmode
  rightViewMode(): cocoascript.UITextFieldViewMode;
  setRightViewMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619636-textrectforbounds
  textRectForBounds(bounds: cocoascript.CGRect):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619587-drawtextinrect
  drawTextInRect(rect: cocoascript.CGRect):void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619615-placeholderrectforbounds
  placeholderRectForBounds(bounds: cocoascript.CGRect):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619637-drawplaceholderinrect
  drawPlaceholderInRect(rect: cocoascript.CGRect):void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619642-borderrectforbounds
  borderRectForBounds(bounds: cocoascript.CGRect):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619589-editingrectforbounds
  editingRectForBounds(bounds: cocoascript.CGRect):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619600-clearbuttonrectforbounds
  clearButtonRectForBounds(bounds: cocoascript.CGRect):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619586-leftviewrectforbounds
  leftViewRectForBounds(bounds: cocoascript.CGRect):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619638-rightviewrectforbounds
  rightViewRectForBounds(bounds: cocoascript.CGRect):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619620-inputview
  inputView(): cocoascript.UIView;
  setInputView(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextfield/1619627-inputaccessoryview
  inputAccessoryView(): cocoascript.UIView;
  setInputAccessoryView(): void;
  // 
  alloc():cocoascript.UITextField;
  // 
  init():cocoascript.UITextField;
}
}
declare const UITextField: cocoascript.UITextField;

