declare namespace cocoascript {
/**
 * A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.
 * doc://com.apple.documentation/documentation/uikit/uidocumentmenuviewcontroller
 */
interface UIDocumentMenuViewController extends UIViewController {
  // doc://com.apple.documentation/documentation/uikit/uidocumentmenuviewcontroller/1614187-initwithdocumenttypes
  initWithDocumentTypes_inMode(allowedUTIs: cocoascript.NSString, mode: cocoascript.UIDocumentPickerMode):cocoascript.UIDocumentMenuViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentmenuviewcontroller/1614191-initwithurl
  initWithURL_inMode(url: cocoascript.NSURL, mode: cocoascript.UIDocumentPickerMode):cocoascript.UIDocumentMenuViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentmenuviewcontroller/1614182-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIDocumentMenuViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentmenuviewcontroller/1614192-delegate
  delegate(): cocoascript.UIDocumentMenuDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentmenuviewcontroller/1614193-addoptionwithtitle
  addOptionWithTitle_image_order_handler(title: cocoascript.NSString, image: cocoascript.UIImage, order: cocoascript.UIDocumentMenuOrder, handler: void):void;
  // 
  alloc():cocoascript.UIDocumentMenuViewController;
  // 
  init():cocoascript.UIDocumentMenuViewController;
}
}
declare const UIDocumentMenuViewController: cocoascript.UIDocumentMenuViewController;

