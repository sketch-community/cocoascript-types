declare namespace cocoascript {
/**
 * The principal class for the Document Picker View Controller extension. 
 * doc://com.apple.documentation/documentation/uikit/uidocumentpickerextensionviewcontroller
 */
interface UIDocumentPickerExtensionViewController extends UIViewController {
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerextensionviewcontroller/1614391-dismissgrantingaccesstourl
  dismissGrantingAccessToURL(url: cocoascript.NSURL):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerextensionviewcontroller/1614393-documentpickermode
  documentPickerMode(): cocoascript.UIDocumentPickerMode;
  setDocumentPickerMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerextensionviewcontroller/1614390-documentstorageurl
  documentStorageURL(): cocoascript.NSURL;
  setDocumentStorageURL(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerextensionviewcontroller/1614392-originalurl
  originalURL(): cocoascript.NSURL;
  setOriginalURL(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerextensionviewcontroller/1614395-prepareforpresentationinmode
  prepareForPresentationInMode(mode: cocoascript.UIDocumentPickerMode):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerextensionviewcontroller/1614396-provideridentifier
  providerIdentifier(): cocoascript.NSString;
  setProviderIdentifier(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentpickerextensionviewcontroller/1614394-validtypes
  validTypes(): cocoascript.NSString;
  setValidTypes(): void;
  // 
  alloc():cocoascript.UIDocumentPickerExtensionViewController;
  // 
  init():cocoascript.UIDocumentPickerExtensionViewController;
}
}
declare const UIDocumentPickerExtensionViewController: cocoascript.UIDocumentPickerExtensionViewController;

