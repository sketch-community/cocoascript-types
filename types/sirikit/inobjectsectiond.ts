declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/sirikit/inobjectsection
 */
interface INObjectSection extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inobjectsection/3552214-initwithtitle
  initWithTitle_items(title: cocoascript.NSString, items: cocoascript.NSArray):cocoascript.INObjectSection;
  // doc://com.apple.documentation/documentation/sirikit/inobjectsection/3552215-items
  items(): any;
  setItems(): void;
  // doc://com.apple.documentation/documentation/sirikit/inobjectsection/3552216-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // 
  alloc():cocoascript.INObjectSection;
  // 
  init():cocoascript.INObjectSection;
}
}
declare const INObjectSection: cocoascript.INObjectSection;

