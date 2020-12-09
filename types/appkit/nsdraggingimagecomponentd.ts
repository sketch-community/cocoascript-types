declare namespace cocoascript {
/**
 * A single object in a dragging item.
 * doc://com.apple.documentation/documentation/appkit/nsdraggingimagecomponent
 */
interface NSDraggingImageComponent extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsdraggingimagecomponent/1534187-initwithkey
  initWithKey(key: cocoascript.NSDraggingImageComponentKey):cocoascript.NSDraggingImageComponent;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingimagecomponent/1535631-key
  key(): cocoascript.NSDraggingImageComponentKey;
  setKey(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingimagecomponent/1529426-contents
  contents(): cocoascript.id;
  setContents(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingimagecomponent/1535507-frame
  frame(): cocoascript.NSRect;
  setFrame(): void;
  // 
  alloc():cocoascript.NSDraggingImageComponent;
  // 
  init():cocoascript.NSDraggingImageComponent;
}
}
declare const NSDraggingImageComponent: cocoascript.NSDraggingImageComponent;

