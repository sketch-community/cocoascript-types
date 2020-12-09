declare namespace cocoascript {
/**
 * A set of optional methods implemented by delegates of 
 * doc://com.apple.documentation/documentation/appkit/nscontroltexteditingdelegate
 */
interface NSControlTextEditingDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscontroltexteditingdelegate/1428873-control
  control_isValidObject(control: cocoascript.NSControl, obj: cocoascript.NSControlTextEditingDelegate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscontroltexteditingdelegate/1428941-control
  control_didFailToValidatePartialString_errorDescription(control: cocoascript.NSControl, string: cocoascript.NSString, error: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nscontroltexteditingdelegate/1428883-control
  control_didFailToFormatString_errorDescription(control: cocoascript.NSControl, string: cocoascript.NSString, error: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscontroltexteditingdelegate/1428865-control
  control_textShouldBeginEditing(control: cocoascript.NSControl, fieldEditor: cocoascript.NSText):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscontroltexteditingdelegate/1428984-control
  control_textShouldEndEditing(control: cocoascript.NSControl, fieldEditor: cocoascript.NSText):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscontroltexteditingdelegate/1428925-control
  control_textView_completions_forPartialWordRange_indexOfSelectedItem(control: cocoascript.NSControl, textView: cocoascript.NSTextView, words: cocoascript.NSString, charRange: cocoascript.NSRange, index: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nscontroltexteditingdelegate/1428898-control
  control_textView_doCommandBySelector(control: cocoascript.NSControl, textView: cocoascript.NSTextView, commandSelector: cocoascript.SEL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscontroltexteditingdelegate/3005176-controltextdidbeginediting
  controlTextDidBeginEditing(obj: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nscontroltexteditingdelegate/3005177-controltextdidchange
  controlTextDidChange(obj: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nscontroltexteditingdelegate/3005178-controltextdidendediting
  controlTextDidEndEditing(obj: cocoascript.NSNotification):void;
}
}

