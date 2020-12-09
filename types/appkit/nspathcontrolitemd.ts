declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/appkit/nspathcontrolitem
 */
interface NSPathControlItem extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nspathcontrolitem/1388289-url
  URL(): cocoascript.NSURL;
  setURL(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrolitem/1388287-attributedtitle
  attributedTitle(): cocoascript.NSAttributedString;
  setAttributedTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrolitem/1388295-image
  image(): cocoascript.NSImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrolitem/1388293-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // 
  alloc():cocoascript.NSPathControlItem;
  // 
  init():cocoascript.NSPathControlItem;
}
}
declare const NSPathControlItem: cocoascript.NSPathControlItem;

