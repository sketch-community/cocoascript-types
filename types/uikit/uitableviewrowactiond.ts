declare namespace cocoascript {
/**
 * A single action to present when the user swipes horizontally in a table row. 
 * doc://com.apple.documentation/documentation/uikit/uitableviewrowaction
 */
interface UITableViewRowAction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitableviewrowaction/1614887-style
  style(): cocoascript.UITableViewRowActionStyle;
  setStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewrowaction/1614993-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewrowaction/1614995-backgroundcolor
  backgroundColor(): cocoascript.UIColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewrowaction/1614990-backgroundeffect
  backgroundEffect(): cocoascript.UIVisualEffect;
  setBackgroundEffect(): void;
  // 
  alloc():cocoascript.UITableViewRowAction;
  // 
  init():cocoascript.UITableViewRowAction;
}
}
declare const UITableViewRowAction: cocoascript.UITableViewRowAction;

