declare namespace cocoascript {
/**
 * A concrete view subclass for displaying text for an item in a scrubber.
 * doc://com.apple.documentation/documentation/appkit/nsscrubbertextitemview
 */
interface NSScrubberTextItemView extends NSScrubberItemView {
  // doc://com.apple.documentation/documentation/appkit/nsscrubbertextitemview/2544795-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubbertextitemview/2544844-textfield
  textField(): cocoascript.NSTextField;
  setTextField(): void;
  // 
  alloc():cocoascript.NSScrubberTextItemView;
  // 
  init():cocoascript.NSScrubberTextItemView;
}
}
declare const NSScrubberTextItemView: cocoascript.NSScrubberTextItemView;

