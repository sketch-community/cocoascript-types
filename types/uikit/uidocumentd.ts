declare namespace cocoascript {
/**
 * An abstract base class for managing discrete portions of your app's data. 
 * doc://com.apple.documentation/documentation/uikit/uidocument
 */
interface UIDocument extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619979-initwithfileurl
  initWithFileURL(url: cocoascript.NSURL):cocoascript.UIDocument;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619990-fileurl
  fileURL(): cocoascript.NSURL;
  setFileURL(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619959-localizedname
  localizedName(): cocoascript.NSString;
  setLocalizedName(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619992-filetype
  fileType(): cocoascript.NSString;
  setFileType(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619952-filemodificationdate
  fileModificationDate(): cocoascript.NSDate;
  setFileModificationDate(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619982-documentstate
  documentState(): cocoascript.UIDocumentState;
  setDocumentState(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1648564-progress
  progress(): cocoascript.NSProgress;
  setProgress(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619976-closewithcompletionhandler
  closeWithCompletionHandler(completionHandler: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619978-contentsfortype
  contentsForType_error(typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.UIDocument;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619988-savetourl
  saveToURL_forSaveOperation_completionHandler(url: cocoascript.NSURL, saveOperation: cocoascript.UIDocumentSaveOperation, completionHandler: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619951-writecontents
  writeContents_andAttributes_safelyToURL_forSaveOperation_error(contents: cocoascript.UIDocument, additionalFileAttributes: cocoascript.NSDictionary, url: cocoascript.NSURL, saveOperation: cocoascript.UIDocumentSaveOperation, outError: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619989-writecontents
  writeContents_toURL_forSaveOperation_originalContentsURL_error(contents: cocoascript.UIDocument, url: cocoascript.NSURL, saveOperation: cocoascript.UIDocumentSaveOperation, originalContentsURL: cocoascript.NSURL, outError: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619991-savingfiletype
  savingFileType(): cocoascript.NSString;
  setSavingFileType(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619947-fileattributestowritetourl
  fileAttributesToWriteToURL_forSaveOperation_error(url: cocoascript.NSURL, saveOperation: cocoascript.UIDocumentSaveOperation, outError: cocoascript._Nullable):cocoascript.NSDictionary;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619969-filenameextensionfortype
  fileNameExtensionForType_saveOperation(typeName: cocoascript.NSString, saveOperation: cocoascript.UIDocumentSaveOperation):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619977-openwithcompletionhandler
  openWithCompletionHandler(completionHandler: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619971-loadfromcontents
  loadFromContents_ofType_error(contents: cocoascript.UIDocument, typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619967-readfromurl
  readFromURL_error(url: cocoascript.NSURL, outError: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619980-performasynchronousfileaccessusi
  performAsynchronousFileAccessUsingBlock(block: void):void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619974-reverttocontentsofurl
  revertToContentsOfURL_completionHandler(url: cocoascript.NSURL, completionHandler: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619958-disableediting
  disableEditing():void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619987-enableediting
  enableEditing():void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619965-hasunsavedchanges
  hasUnsavedChanges(): cocoascript.BOOL;
  setHasUnsavedChanges(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619961-updatechangecount
  updateChangeCount(change: cocoascript.UIDocumentChangeKind):void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619953-undomanager
  undoManager(): cocoascript.NSUndoManager;
  setUndoManager(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619954-changecounttokenforsaveoperation
  changeCountTokenForSaveOperation(saveOperation: cocoascript.UIDocumentSaveOperation):cocoascript.UIDocument;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619975-updatechangecountwithtoken
  updateChangeCountWithToken_forSaveOperation(changeCountToken: cocoascript.UIDocument, saveOperation: cocoascript.UIDocumentSaveOperation):void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619981-autosavewithcompletionhandler
  autosaveWithCompletionHandler(completionHandler: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619963-useractivity
  userActivity(): cocoascript.NSUserActivity;
  setUserActivity(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619973-restoreuseractivitystate
  restoreUserActivityState(userActivity: cocoascript.NSUserActivity):void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619986-updateuseractivitystate
  updateUserActivityState(userActivity: cocoascript.NSUserActivity):void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619955-handleerror
  handleError_userInteractionPermitted(error: cocoascript.NSError, userInteractionPermitted: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619960-finishedhandlingerror
  finishedHandlingError_recovered(error: cocoascript.NSError, recovered: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uidocument/1619993-userinteractionnolongerpermitted
  userInteractionNoLongerPermittedForError(error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/uikit/nsuseractivitydocumenturlkey
  NSUserActivityDocumentURLKey(): cocoascript.const;
  setNSUserActivityDocumentURLKey(): void;
  // 
  alloc():cocoascript.UIDocument;
  // 
  init():cocoascript.UIDocument;
}
}
declare const UIDocument: cocoascript.UIDocument;

