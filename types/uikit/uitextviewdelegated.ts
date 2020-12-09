declare namespace cocoascript {
/**
 * The methods for receiving editing-related messages for text view objects. 
 * doc://com.apple.documentation/documentation/uikit/uitextviewdelegate
 */
interface UITextViewDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextviewdelegate/1618608-textviewshouldbeginediting
  textViewShouldBeginEditing(textView: cocoascript.UITextView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitextviewdelegate/1618610-textviewdidbeginediting
  textViewDidBeginEditing(textView: cocoascript.UITextView):void;
  // doc://com.apple.documentation/documentation/uikit/uitextviewdelegate/1618603-textviewshouldendediting
  textViewShouldEndEditing(textView: cocoascript.UITextView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitextviewdelegate/1618628-textviewdidendediting
  textViewDidEndEditing(textView: cocoascript.UITextView):void;
  // doc://com.apple.documentation/documentation/uikit/uitextviewdelegate/1618630-textview
  textView_shouldChangeTextInRange_replacementText(textView: cocoascript.UITextView, range: cocoascript.NSRange, text: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitextviewdelegate/1618599-textviewdidchange
  textViewDidChange(textView: cocoascript.UITextView):void;
  // doc://com.apple.documentation/documentation/uikit/uitextviewdelegate/1618620-textviewdidchangeselection
  textViewDidChangeSelection(textView: cocoascript.UITextView):void;
  // doc://com.apple.documentation/documentation/uikit/uitextviewdelegate/1649336-textview
  textView_shouldInteractWithTextAttachment_inRange_interaction(textView: cocoascript.UITextView, textAttachment: cocoascript.NSTextAttachment, characterRange: cocoascript.NSRange, interaction: cocoascript.UITextItemInteraction):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitextviewdelegate/1649337-textview
  textView_shouldInteractWithURL_inRange_interaction(textView: cocoascript.UITextView, URL: cocoascript.NSURL, characterRange: cocoascript.NSRange, interaction: cocoascript.UITextItemInteraction):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitextviewdelegate/1618621-textview
  textView_shouldInteractWithTextAttachment_inRange(textView: cocoascript.UITextView, textAttachment: cocoascript.NSTextAttachment, characterRange: cocoascript.NSRange):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitextviewdelegate/1618606-textview
  textView_shouldInteractWithURL_inRange(textView: cocoascript.UITextView, URL: cocoascript.NSURL, characterRange: cocoascript.NSRange):cocoascript.BOOL;
}
}

