declare namespace cocoascript {
/**
 * A display of image data from an 
 * doc://com.apple.documentation/documentation/appkit/nsimageview
 */
interface NSImageView extends NSControl {
  // doc://com.apple.documentation/documentation/appkit/nsimageview/1404952-image
  image(): cocoascript.NSImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimageview/1404948-imageframestyle
  imageFrameStyle(): cocoascript.NSImageFrameStyle;
  setImageFrameStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimageview/1404963-imagealignment
  imageAlignment(): cocoascript.NSImageAlignment;
  setImageAlignment(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimageview/1404956-imagescaling
  imageScaling(): cocoascript.NSImageScaling;
  setImageScaling(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimageview/1404950-animates
  animates(): cocoascript.BOOL;
  setAnimates(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimageview/1404954-editable
  editable(): cocoascript.BOOL;
  setEditable(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimageview/1404961-allowscutcopypaste
  allowsCutCopyPaste(): cocoascript.BOOL;
  setAllowsCutCopyPaste(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimageview/3000783-contenttintcolor
  contentTintColor(): cocoascript.NSColor;
  setContentTintColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimageview/3667456-symbolconfiguration
  symbolConfiguration(): cocoascript.NSImageSymbolConfiguration;
  setSymbolConfiguration(): void;
  // 
  alloc():cocoascript.NSImageView;
  // 
  init():cocoascript.NSImageView;
}
}
declare const NSImageView: cocoascript.NSImageView;

