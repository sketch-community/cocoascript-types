declare namespace cocoascript {
/**
 * A protocol that a text field delegate can use to control its field editor action menu.
 * doc://com.apple.documentation/documentation/appkit/nstextfielddelegate
 */
interface NSTextFieldDelegate extends NSControlTextEditingDelegate {
  // doc://com.apple.documentation/documentation/appkit/nstextfielddelegate/2539556-textfield
  textField_textView_candidates_forSelectedRange(textField: cocoascript.NSTextField, textView: cocoascript.NSTextView, candidates: cocoascript.NSTextCheckingResult, selectedRange: cocoascript.NSRange):cocoascript.NSTextCheckingResult;
  // doc://com.apple.documentation/documentation/appkit/nstextfielddelegate/2539552-textfield
  textField_textView_candidatesForSelectedRange(textField: cocoascript.NSTextField, textView: cocoascript.NSTextView, selectedRange: cocoascript.NSRange):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/appkit/nstextfielddelegate/2539557-textfield
  textField_textView_shouldSelectCandidateAtIndex(textField: cocoascript.NSTextField, textView: cocoascript.NSTextView, index: cocoascript.NSUInteger):cocoascript.BOOL;
}
}

