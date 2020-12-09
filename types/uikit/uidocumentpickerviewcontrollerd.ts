declare namespace cocoascript {
/**
 * A view controller that provides access to documents or destinations outside your app’s sandbox.
 * doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller
 */
interface UIDocumentPickerViewController extends UIViewController {
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/1618678-initwithdocumenttypes
  initWithDocumentTypes_inMode(allowedUTIs: cocoascript.NSString, mode: cocoascript.UIDocumentPickerMode):cocoascript.UIDocumentPickerViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/1618684-initwithurl
  initWithURL_inMode(url: cocoascript.NSURL, mode: cocoascript.UIDocumentPickerMode):cocoascript.UIDocumentPickerViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/2921628-initwithurls
  initWithURLs_inMode(urls: cocoascript.NSURL, mode: cocoascript.UIDocumentPickerMode):cocoascript.UIDocumentPickerViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/1618686-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIDocumentPickerViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/1618690-delegate
  delegate(): cocoascript.UIDocumentPickerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/2902365-allowsmultipleselection
  allowsMultipleSelection(): cocoascript.BOOL;
  setAllowsMultipleSelection(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/3183918-directoryurl
  directoryURL(): cocoascript.NSURL;
  setDirectoryURL(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/3152920-shouldshowfileextensions
  shouldShowFileExtensions(): cocoascript.BOOL;
  setShouldShowFileExtensions(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/1618681-documentpickermode
  documentPickerMode(): cocoascript.UIDocumentPickerMode;
  setDocumentPickerMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/3566730-initforexportingurls
  initForExportingURLs(urls: cocoascript.NSURL):cocoascript.UIDocumentPickerViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/3566731-initforexportingurls
  initForExportingURLs_asCopy(urls: cocoascript.NSURL, asCopy: cocoascript.BOOL):cocoascript.UIDocumentPickerViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/3566732-initforopeningcontenttypes
  initForOpeningContentTypes(contentTypes: cocoascript.UTType):cocoascript.UIDocumentPickerViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerviewcontroller/3566733-initforopeningcontenttypes
  initForOpeningContentTypes_asCopy(contentTypes: cocoascript.UTType, asCopy: cocoascript.BOOL):cocoascript.UIDocumentPickerViewController;
  // 
  alloc():cocoascript.UIDocumentPickerViewController;
  // 
  init():cocoascript.UIDocumentPickerViewController;
}
}
declare const UIDocumentPickerViewController: cocoascript.UIDocumentPickerViewController;

