declare namespace cocoascript {
/**
 * A view controller for browsing and performing actions on documents stored locally and in the cloud.
 * doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller
 */
interface UIDocumentBrowserViewController extends UIViewController {
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/2874203-initforopeningfileswithcontentty
  initForOpeningFilesWithContentTypes(allowedContentTypes: cocoascript.NSString):cocoascript.UIDocumentBrowserViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/2874185-delegate
  delegate(): cocoascript.UIDocumentBrowserViewControllerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/2927800-importdocumentaturl
  importDocumentAtURL_nextToDocumentAtURL_mode_completionHandler(documentURL: cocoascript.NSURL, neighbourURL: cocoascript.NSURL, importMode: cocoascript.UIDocumentBrowserImportMode, completion: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/2874182-allowedcontenttypes
  allowedContentTypes(): cocoascript.NSString;
  setAllowedContentTypes(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/2874172-allowsdocumentcreation
  allowsDocumentCreation(): cocoascript.BOOL;
  setAllowsDocumentCreation(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/2874179-allowspickingmultipleitems
  allowsPickingMultipleItems(): cocoascript.BOOL;
  setAllowsPickingMultipleItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/2915849-revealdocumentaturl
  revealDocumentAtURL_importIfNeeded_completion(url: cocoascript.NSURL, importIfNeeded: cocoascript.BOOL, completion: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/2875748-browseruserinterfacestyle
  browserUserInterfaceStyle(): cocoascript.UIDocumentBrowserUserInterfaceStyle;
  setBrowserUserInterfaceStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/2874191-additionalleadingnavigationbarbu
  additionalLeadingNavigationBarButtonItems(): cocoascript.UIBarButtonItem;
  setAdditionalLeadingNavigationBarButtonItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/2874180-additionaltrailingnavigationbarb
  additionalTrailingNavigationBarButtonItems(): cocoascript.UIBarButtonItem;
  setAdditionalTrailingNavigationBarButtonItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/3153159-shouldshowfileextensions
  shouldShowFileExtensions(): cocoascript.BOOL;
  setShouldShowFileExtensions(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/3114622-localizedcreatedocumentactiontit
  localizedCreateDocumentActionTitle(): cocoascript.NSString;
  setLocalizedCreateDocumentActionTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/3123949-defaultdocumentaspectratio
  defaultDocumentAspectRatio(): cocoascript.CGFloat;
  setDefaultDocumentAspectRatio(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/2874181-customactions
  customActions(): cocoascript.UIDocumentBrowserAction;
  setCustomActions(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/3019587-transitioncontrollerfordocumenta
  transitionControllerForDocumentAtURL(documentURL: cocoascript.NSURL):cocoascript.UIDocumentBrowserTransitionController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/2874177-transitioncontrollerfordocumentu
  transitionControllerForDocumentURL(documentURL: cocoascript.NSURL):cocoascript.UIDocumentBrowserTransitionController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/3566729-initforopeningcontenttypes
  initForOpeningContentTypes(contentTypes: cocoascript.UTType):cocoascript.UIDocumentBrowserViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/3566728-contenttypesforrecentdocuments
  contentTypesForRecentDocuments(): cocoascript.UTType;
  setContentTypesForRecentDocuments(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontroller/3356325-recentdocumentscontenttypes
  recentDocumentsContentTypes(): cocoascript.NSString;
  setRecentDocumentsContentTypes(): void;
  // 
  alloc():cocoascript.UIDocumentBrowserViewController;
  // 
  init():cocoascript.UIDocumentBrowserViewController;
}
}
declare const UIDocumentBrowserViewController: cocoascript.UIDocumentBrowserViewController;

