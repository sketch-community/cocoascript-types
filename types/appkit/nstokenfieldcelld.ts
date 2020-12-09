declare namespace cocoascript {
/**
 * A text field cell subclass that enables tokenized editing of an array of objects.
 * doc://com.apple.documentation/documentation/appkit/nstokenfieldcell
 */
interface NSTokenFieldCell extends NSTextFieldCell {
  // doc://com.apple.documentation/documentation/appkit/nstokenfieldcell/1523827-tokenstyle
  tokenStyle(): cocoascript.NSTokenStyle;
  setTokenStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nstokenfieldcell/1523808-defaulttokenizingcharacterset
  defaultTokenizingCharacterSet(): cocoascript.NSCharacterSet;
  setDefaultTokenizingCharacterSet(): void;
  // doc://com.apple.documentation/documentation/appkit/nstokenfieldcell/1523822-tokenizingcharacterset
  tokenizingCharacterSet(): cocoascript.NSCharacterSet;
  setTokenizingCharacterSet(): void;
  // doc://com.apple.documentation/documentation/appkit/nstokenfieldcell/1523806-completiondelay
  completionDelay(): cocoascript.NSTimeInterval;
  setCompletionDelay(): void;
  // doc://com.apple.documentation/documentation/appkit/nstokenfieldcell/1523817-defaultcompletiondelay
  defaultCompletionDelay(): cocoascript.NSTimeInterval;
  setDefaultCompletionDelay(): void;
  // doc://com.apple.documentation/documentation/appkit/nstokenfieldcell/1523813-delegate
  delegate(): cocoascript.NSTokenFieldCellDelegate;
  setDelegate(): void;
  // 
  alloc():cocoascript.NSTokenFieldCell;
  // 
  init():cocoascript.NSTokenFieldCell;
}
}
declare const NSTokenFieldCell: cocoascript.NSTokenFieldCell;

