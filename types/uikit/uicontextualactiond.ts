declare namespace cocoascript {
/**
 * An action to display when the user swipes a table row.
 * doc://com.apple.documentation/documentation/uikit/uicontextualaction
 */
interface UIContextualAction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicontextualaction/2902342-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uicontextualaction/2902335-backgroundcolor
  backgroundColor(): cocoascript.UIColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uicontextualaction/2902337-image
  image(): cocoascript.UIImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uicontextualaction/2902341-handler
  handler(): cocoascript.UIContextualActionHandler;
  setHandler(): void;
  // doc://com.apple.documentation/documentation/uikit/uicontextualaction/2902334-style
  style(): cocoascript.UIContextualActionStyle;
  setStyle(): void;
  // 
  alloc():cocoascript.UIContextualAction;
  // 
  init():cocoascript.UIContextualAction;
}
}
declare const UIContextualAction: cocoascript.UIContextualAction;

