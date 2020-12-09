declare namespace cocoascript {
/**
 * An 
 * doc://com.apple.documentation/documentation/appkit/nsimagecell
 */
interface NSImageCell extends NSCell {
  // doc://com.apple.documentation/documentation/appkit/nsimagecell/1524421-imagealignment
  imageAlignment(): cocoascript.NSImageAlignment;
  setImageAlignment(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagecell/1532559-imagescaling
  imageScaling(): cocoascript.NSImageScaling;
  setImageScaling(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagecell/1526164-imageframestyle
  imageFrameStyle(): cocoascript.NSImageFrameStyle;
  setImageFrameStyle(): void;
  // 
  alloc():cocoascript.NSImageCell;
  // 
  init():cocoascript.NSImageCell;
}
}
declare const NSImageCell: cocoascript.NSImageCell;

