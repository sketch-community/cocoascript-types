declare namespace cocoascript {
/**
 * An object that manages an app's documents. 
 * doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller
 */
interface NSDocumentController extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514981-shareddocumentcontroller
  sharedDocumentController(): cocoascript.NSDocumentController;
  setSharedDocumentController(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1515007-init
  init():cocoascript.NSDocumentController;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514955-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSDocumentController;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514939-documentforurl
  documentForURL(url: cocoascript.NSURL):cocoascript.NSDocument;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514982-duplicatedocumentwithcontentsofu
  duplicateDocumentWithContentsOfURL_copying_displayName_error(url: cocoascript.NSURL, duplicateByCopying: cocoascript.BOOL, displayNameOrNil: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.NSDocument;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514992-opendocumentwithcontentsofurl
  openDocumentWithContentsOfURL_display_completionHandler(url: cocoascript.NSURL, displayDocument: cocoascript.BOOL, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1515014-openuntitleddocumentanddisplay
  openUntitledDocumentAndDisplay_error(displayDocument: cocoascript.BOOL, outError: cocoascript._Nullable):cocoascript.NSDocument;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514930-makedocumentforurl
  makeDocumentForURL_withContentsOfURL_ofType_error(urlOrNil: cocoascript.NSURL, contentsURL: cocoascript.NSURL, typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.NSDocument;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514949-makedocumentwithcontentsofurl
  makeDocumentWithContentsOfURL_ofType_error(url: cocoascript.NSURL, typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.NSDocument;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514963-makeuntitleddocumentoftype
  makeUntitledDocumentOfType_error(typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.NSDocument;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514935-reopendocumentforurl
  reopenDocumentForURL_withContentsOfURL_display_completionHandler(urlOrNil: cocoascript.NSURL, contentsURL: cocoascript.NSURL, displayDocument: cocoascript.BOOL, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1515003-documents
  documents(): cocoascript.NSDocument;
  setDocuments(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1515013-adddocument
  addDocument(document: cocoascript.NSDocument):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514957-currentdocument
  currentDocument(): cocoascript.NSDocument;
  setCurrentDocument(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514970-documentforwindow
  documentForWindow(window: cocoascript.NSWindow):cocoascript.NSDocument;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514964-hasediteddocuments
  hasEditedDocuments(): cocoascript.BOOL;
  setHasEditedDocuments(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514984-removedocument
  removeDocument(document: cocoascript.NSDocument):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514988-documentclassnames
  documentClassNames(): cocoascript.NSString;
  setDocumentClassNames(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514986-defaulttype
  defaultType(): cocoascript.NSString;
  setDefaultType(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514947-documentclassfortype
  documentClassForType(typeName: cocoascript.NSString):cocoascript.Class;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514937-displaynamefortype
  displayNameForType(typeName: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514946-typeforcontentsofurl
  typeForContentsOfURL_error(url: cocoascript.NSURL, outError: cocoascript._Nullable):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514953-autosavingdelay
  autosavingDelay(): cocoascript.NSTimeInterval;
  setAutosavingDelay(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514995-closealldocumentswithdelegate
  closeAllDocumentsWithDelegate_didCloseAllSelector_contextInfo(delegate: cocoascript.NSDocumentController, didCloseAllSelector: cocoascript.SEL, contextInfo: void):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514940-reviewunsaveddocumentswithalertt
  reviewUnsavedDocumentsWithAlertTitle_cancellable_delegate_didReviewAllSelector_contextInfo(title: cocoascript.NSString, cancellable: cocoascript.BOOL, delegate: cocoascript.NSDocumentController, didReviewAllSelector: cocoascript.SEL, contextInfo: void):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514997-newdocument
  newDocument(sender: cocoascript.NSDocumentController):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1515005-opendocument
  openDocument(sender: cocoascript.NSDocumentController):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514959-savealldocuments
  saveAllDocuments(sender: cocoascript.NSDocumentController):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1515001-beginopenpanelwithcompletionhand
  beginOpenPanelWithCompletionHandler(completionHandler: cocoascript.NSURL):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514969-beginopenpanel
  beginOpenPanel_forTypes_completionHandler(openPanel: cocoascript.NSOpenPanel, inTypes: cocoascript.NSString, completionHandler: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514960-runmodalopenpanel
  runModalOpenPanel_forTypes(openPanel: cocoascript.NSOpenPanel, types: cocoascript.NSString):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514942-currentdirectory
  currentDirectory(): cocoascript.NSString;
  setCurrentDirectory(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514972-urlsfromrunningopenpanel
  URLsFromRunningOpenPanel():cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514991-maximumrecentdocumentcount
  maximumRecentDocumentCount(): cocoascript.NSUInteger;
  setMaximumRecentDocumentCount(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514933-clearrecentdocuments
  clearRecentDocuments(sender: cocoascript.NSDocumentController):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514967-notenewrecentdocumenturl
  noteNewRecentDocumentURL(url: cocoascript.NSURL):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1515009-notenewrecentdocument
  noteNewRecentDocument(document: cocoascript.NSDocument):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514976-recentdocumenturls
  recentDocumentURLs(): cocoascript.NSURL;
  setRecentDocumentURLs(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514943-validateuserinterfaceitem
  validateUserInterfaceItem(item: cocoascript.NSValidatedUserInterfaceItem):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514977-presenterror
  presentError(error: cocoascript.NSError):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514954-presenterror
  presentError_modalForWindow_delegate_didPresentSelector_contextInfo(error: cocoascript.NSError, window: cocoascript.NSWindow, delegate: cocoascript.NSDocumentController, didPresentSelector: cocoascript.SEL, contextInfo: void):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514994-willpresenterror
  willPresentError(error: cocoascript.NSError):cocoascript.NSError;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514999-documentforfilename
  documentForFileName(fileName: cocoascript.NSString):cocoascript.NSDocumentController;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514961-fileextensionsfromtype
  fileExtensionsFromType(typeName: cocoascript.NSString):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514983-filenamesfromrunningopenpanel
  fileNamesFromRunningOpenPanel():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1515010-makeuntitleddocumentoftype
  makeUntitledDocumentOfType(type: cocoascript.NSString):cocoascript.NSDocumentController;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1515012-makedocumentwithcontentsofurl
  makeDocumentWithContentsOfURL_ofType(url: cocoascript.NSURL, type: cocoascript.NSString):cocoascript.NSDocumentController;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514944-makedocumentwithcontentsoffile
  makeDocumentWithContentsOfFile_ofType(fileName: cocoascript.NSString, type: cocoascript.NSString):cocoascript.NSDocumentController;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514938-opendocumentwithcontentsoffile
  openDocumentWithContentsOfFile_display(fileName: cocoascript.NSString, display: cocoascript.BOOL):cocoascript.NSDocumentController;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514950-opendocumentwithcontentsofurl
  openDocumentWithContentsOfURL_display(url: cocoascript.NSURL, display: cocoascript.BOOL):cocoascript.NSDocumentController;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514951-opendocumentwithcontentsofurl
  openDocumentWithContentsOfURL_display_error(url: cocoascript.NSURL, displayDocument: cocoascript.BOOL, outError: cocoascript._Nullable):cocoascript.NSDocumentController;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514978-openuntitleddocumentoftype
  openUntitledDocumentOfType_display(type: cocoascript.NSString, display: cocoascript.BOOL):cocoascript.NSDocumentController;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514979-reopendocumentforurl
  reopenDocumentForURL_withContentsOfURL_error(url: cocoascript.NSURL, contentsURL: cocoascript.NSURL, outError: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514989-setshouldcreateui
  setShouldCreateUI(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514932-shouldcreateui
  shouldCreateUI():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/1514966-typefromfileextension
  typeFromFileExtension(fileNameExtensionOrHFSFileType: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/2902308-allowsautomaticsharemenu
  allowsAutomaticShareMenu(): cocoascript.BOOL;
  setAllowsAutomaticShareMenu(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdocumentcontroller/2902324-standardsharemenuitem
  standardShareMenuItem():cocoascript.NSMenuItem;
  // 
  alloc():cocoascript.NSDocumentController;
  // 
  init():cocoascript.NSDocumentController;
}
}
declare const NSDocumentController: cocoascript.NSDocumentController;

