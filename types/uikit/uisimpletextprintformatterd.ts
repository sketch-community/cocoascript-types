declare namespace cocoascript {
/**
 * An object that lays out plain text for printing, possibly over multiple pages. 
 * doc://com.apple.documentation/documentation/uikit/uisimpletextprintformatter
 */
interface UISimpleTextPrintFormatter extends UIPrintFormatter {
  // doc://com.apple.documentation/documentation/uikit/uisimpletextprintformatter/1621838-initwithattributedtext
  initWithAttributedText(attributedText: cocoascript.NSAttributedString):cocoascript.UISimpleTextPrintFormatter;
  // doc://com.apple.documentation/documentation/uikit/uisimpletextprintformatter/1621822-initwithtext
  initWithText(text: cocoascript.NSString):cocoascript.UISimpleTextPrintFormatter;
  // doc://com.apple.documentation/documentation/uikit/uisimpletextprintformatter/1621820-attributedtext
  attributedText(): cocoascript.NSAttributedString;
  setAttributedText(): void;
  // doc://com.apple.documentation/documentation/uikit/uisimpletextprintformatter/1621833-text
  text(): cocoascript.NSString;
  setText(): void;
  // doc://com.apple.documentation/documentation/uikit/uisimpletextprintformatter/1621837-font
  font(): cocoascript.UIFont;
  setFont(): void;
  // doc://com.apple.documentation/documentation/uikit/uisimpletextprintformatter/1621830-color
  color(): cocoascript.UIColor;
  setColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uisimpletextprintformatter/1621832-textalignment
  textAlignment(): cocoascript.NSTextAlignment;
  setTextAlignment(): void;
  // 
  alloc():cocoascript.UISimpleTextPrintFormatter;
  // 
  init():cocoascript.UISimpleTextPrintFormatter;
}
}
declare const UISimpleTextPrintFormatter: cocoascript.UISimpleTextPrintFormatter;

