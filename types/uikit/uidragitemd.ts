declare namespace cocoascript {
/**
 * A representation of an underlying data item being dragged from one location to another.
 * doc://com.apple.documentation/documentation/uikit/uidragitem
 */
interface UIDragItem extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uidragitem/2890994-initwithitemprovider
  initWithItemProvider(itemProvider: cocoascript.NSItemProvider):cocoascript.UIDragItem;
  // doc://com.apple.documentation/documentation/uikit/uidragitem/2890975-itemprovider
  itemProvider(): cocoascript.NSItemProvider;
  setItemProvider(): void;
  // doc://com.apple.documentation/documentation/uikit/uidragitem/2890981-localobject
  localObject(): cocoascript.id;
  setLocalObject(): void;
  // doc://com.apple.documentation/documentation/uikit/uidragitem/2890972-previewprovider
  previewProvider(): void;
  setPreviewProvider(): void;
  // 
  alloc():cocoascript.UIDragItem;
  // 
  init():cocoascript.UIDragItem;
}
}
declare const UIDragItem: cocoascript.UIDragItem;

