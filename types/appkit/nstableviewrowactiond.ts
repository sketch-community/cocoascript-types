declare namespace cocoascript {
/**
 * A single action to present when the user swipes horizontally on a table row. 
 * doc://com.apple.documentation/documentation/appkit/nstableviewrowaction
 */
interface NSTableViewRowAction extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstableviewrowaction/1401982-style
  style(): cocoascript.NSTableViewRowActionStyle;
  setStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewrowaction/1401992-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewrowaction/1401984-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewrowaction/2177311-image
  image(): cocoascript.NSImage;
  setImage(): void;
  // 
  alloc():cocoascript.NSTableViewRowAction;
  // 
  init():cocoascript.NSTableViewRowAction;
}
}
declare const NSTableViewRowAction: cocoascript.NSTableViewRowAction;

