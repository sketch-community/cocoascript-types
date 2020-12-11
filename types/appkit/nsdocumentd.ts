declare namespace cocoascript {
  /**
   * An abstract class that defines the interface for macOS documents.
   * doc://com.apple.documentation/documentation/appkit/nsdocument
   */
  interface NSDocument extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515181-init
    init():cocoascript.NSDocument;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515097-initwithcontentsofurl
    initWithContentsOfURL_ofType_error(url: cocoascript.NSURL, typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.NSDocument;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515041-initforurl
    initForURL_withContentsOfURL_ofType_error(urlOrNil: cocoascript.NSURL, contentsURL: cocoascript.NSURL, typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.NSDocument;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515159-initwithtype
    initWithType_error(typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.NSDocument;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515144-readfromurl
    readFromURL_ofType_error(url: cocoascript.NSURL, typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515044-readfromfilewrapper
    readFromFileWrapper_ofType_error(fileWrapper: cocoascript.NSFileWrapper, typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515198-readfromdata
    readFromData_ofType_error(data: cocoascript.NSData, typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515177-canasynchronouslywritetourl
    canAsynchronouslyWriteToURL_ofType_forSaveOperation(url: cocoascript.NSURL, typeName: cocoascript.NSString, saveOperation: cocoascript.NSSaveOperationType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515238-unblockuserinteraction
    unblockUserInteraction():void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515076-writetourl
    writeToURL_ofType_error(url: cocoascript.NSURL, typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515150-writesafelytourl
    writeSafelyToURL_ofType_forSaveOperation_error(url: cocoascript.NSURL, typeName: cocoascript.NSString, saveOperation: cocoascript.NSSaveOperationType, outError: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515089-filewrapperoftype
    fileWrapperOfType_error(typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.NSFileWrapper;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515205-dataoftype
    dataOfType_error(typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515203-writetourl
    writeToURL_ofType_forSaveOperation_originalContentsURL_error(url: cocoascript.NSURL, typeName: cocoascript.NSString, saveOperation: cocoascript.NSSaveOperationType, absoluteOriginalContentsURL: cocoascript.NSURL, outError: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515148-savetourl
    saveToURL_ofType_forSaveOperation_delegate_didSaveSelector_contextInfo(url: cocoascript.NSURL, typeName: cocoascript.NSString, saveOperation: cocoascript.NSSaveOperationType, delegate: cocoascript.NSDocument, didSaveSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515178-savetourl
    saveToURL_ofType_forSaveOperation_completionHandler(url: cocoascript.NSURL, typeName: cocoascript.NSString, saveOperation: cocoascript.NSSaveOperationType, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515062-fileattributestowritetourl
    fileAttributesToWriteToURL_ofType_forSaveOperation_originalContentsURL_error(url: cocoascript.NSURL, typeName: cocoascript.NSString, saveOperation: cocoascript.NSSaveOperationType, absoluteOriginalContentsURL: cocoascript.NSURL, outError: cocoascript._Nullable):cocoascript.NSDocument;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515038-fileurl
    fileURL(): cocoascript.NSURL;
    setFileURL(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515053-entirefileloaded
    entireFileLoaded(): cocoascript.BOOL;
    setEntireFileLoaded(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515039-filemodificationdate
    fileModificationDate(): cocoascript.NSDate;
    setFileModificationDate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515060-keepbackupfile
    keepBackupFile(): cocoascript.BOOL;
    setKeepBackupFile(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515065-draft
    draft(): cocoascript.BOOL;
    setDraft(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515121-filetype
    fileType(): cocoascript.NSString;
    setFileType(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515091-documentedited
    documentEdited(): cocoascript.BOOL;
    setDocumentEdited(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515086-inviewingmode
    inViewingMode(): cocoascript.BOOL;
    setInViewingMode(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515104-readabletypes
    readableTypes(): cocoascript.NSString;
    setReadableTypes(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515236-writabletypes
    writableTypes(): cocoascript.NSString;
    setWritableTypes(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515186-writabletypesforsaveoperation
    writableTypesForSaveOperation(saveOperation: cocoascript.NSSaveOperationType):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515074-filenameextensionfortype
    fileNameExtensionForType_saveOperation(typeName: cocoascript.NSString, saveOperation: cocoascript.NSSaveOperationType):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515220-makewindowcontrollers
    makeWindowControllers():void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515179-addwindowcontroller
    addWindowController(windowController: cocoascript.NSWindowController):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515242-removewindowcontroller
    removeWindowController(windowController: cocoascript.NSWindowController):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515156-windowcontrollers
    windowControllers(): cocoascript.NSWindowController;
    setWindowControllers(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515174-windownibname
    windowNibName(): cocoascript.NSNibName;
    setWindowNibName(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515221-windowcontrollerdidloadnib
    windowControllerDidLoadNib(windowController: cocoascript.NSWindowController):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515116-windowcontrollerwillloadnib
    windowControllerWillLoadNib(windowController: cocoascript.NSWindowController):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515247-shouldclosewindowcontroller
    shouldCloseWindowController_delegate_shouldCloseSelector_contextInfo(windowController: cocoascript.NSWindowController, delegate: cocoascript.NSDocument, shouldCloseSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515049-showwindows
    showWindows():void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515217-setwindow
    setWindow(window: cocoascript.NSWindow):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515064-windowforsheet
    windowForSheet(): cocoascript.NSWindow;
    setWindowForSheet(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515077-displayname
    displayName(): cocoascript.NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515143-setdisplayname
    setDisplayName(displayNameOrNil: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515245-defaultdraftname
    defaultDraftName():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/2876345-encoderestorablestatewithcoder
    encodeRestorableStateWithCoder_backgroundQueue(coder: cocoascript.NSCoder, queue: cocoascript.NSOperationQueue):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515106-autosavesinplace
    autosavesInPlace(): cocoascript.BOOL;
    setAutosavesInPlace(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515109-autosavesdrafts
    autosavesDrafts(): cocoascript.BOOL;
    setAutosavesDrafts(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515114-preservesversions
    preservesVersions(): cocoascript.BOOL;
    setPreservesVersions(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515232-autosavedcontentsfileurl
    autosavedContentsFileURL(): cocoascript.NSURL;
    setAutosavedContentsFileURL(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515136-autosavingfiletype
    autosavingFileType(): cocoascript.NSString;
    setAutosavingFileType(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515149-autosavingisimplicitlycancellabl
    autosavingIsImplicitlyCancellable(): cocoascript.BOOL;
    setAutosavingIsImplicitlyCancellable(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515061-checkautosavingsafetyandreturner
    checkAutosavingSafetyAndReturnError(outError: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515079-hasunautosavedchanges
    hasUnautosavedChanges(): cocoascript.BOOL;
    setHasUnautosavedChanges(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515119-scheduleautosaving
    scheduleAutosaving():void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515225-autosavedocumentwithdelegate
    autosaveDocumentWithDelegate_didAutosaveSelector_contextInfo(delegate: cocoascript.NSDocument, didAutosaveSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515096-autosavewithimplicitcancellabili
    autosaveWithImplicitCancellability_completionHandler(autosavingIsImplicitlyCancellable: cocoascript.BOOL, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515200-backupfileurl
    backupFileURL(): cocoascript.NSURL;
    setBackupFileURL(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515193-browsedocumentversions
    browseDocumentVersions(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/2177310-browsingversions
    browsingVersions(): cocoascript.BOOL;
    setBrowsingVersions(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/2177312-stopbrowsingversionswithcompleti
    stopBrowsingVersionsWithCompletionHandler(completionHandler: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515210-movedocumenttoubiquitycontainer
    moveDocumentToUbiquityContainer(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515085-usesubiquitousstorage
    usesUbiquitousStorage(): cocoascript.BOOL;
    setUsesUbiquitousStorage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515166-undomanager
    undoManager(): cocoascript.NSUndoManager;
    setUndoManager(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515103-hasundomanager
    hasUndoManager(): cocoascript.BOOL;
    setHasUndoManager(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515083-updatechangecountwithtoken
    updateChangeCountWithToken_forSaveOperation(changeCountToken: cocoascript.NSDocument, saveOperation: cocoascript.NSSaveOperationType):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515223-updatechangecount
    updateChangeCount(change: cocoascript.NSDocumentChangeType):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515129-changecounttokenforsaveoperation
    changeCountTokenForSaveOperation(saveOperation: cocoascript.NSSaveOperationType):cocoascript.NSDocument;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1526257-encoderestorablestatewithcoder
    encodeRestorableStateWithCoder(coder: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1526237-restorestatewithcoder
    restoreStateWithCoder(coder: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1526232-restorablestatekeypaths
    restorableStateKeyPaths(): cocoascript.NSString;
    setRestorableStateKeyPaths(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1526250-invalidaterestorablestate
    invalidateRestorableState():void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1524586-restoredocumentwindowwithidentif
    restoreDocumentWindowWithIdentifier_state_completionHandler(identifier: cocoascript.NSUserInterfaceItemIdentifier, state: cocoascript.NSCoder, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515180-runmodalsavepanelforsaveoperatio
    runModalSavePanelForSaveOperation_delegate_didSaveSelector_contextInfo(saveOperation: cocoascript.NSSaveOperationType, delegate: cocoascript.NSDocument, didSaveSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515094-preparesavepanel
    prepareSavePanel(savePanel: cocoascript.NSSavePanel):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515183-shouldrunsavepanelwithaccessoryv
    shouldRunSavePanelWithAccessoryView(): cocoascript.BOOL;
    setShouldRunSavePanelWithAccessoryView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515240-filetypefromlastrunsavepanel
    fileTypeFromLastRunSavePanel(): cocoascript.NSString;
    setFileTypeFromLastRunSavePanel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515092-filenameextensionwashiddeninlast
    fileNameExtensionWasHiddenInLastRunSavePanel(): cocoascript.BOOL;
    setFileNameExtensionWasHiddenInLastRunSavePanel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1526106-useractivity
    userActivity(): cocoascript.NSUserActivity;
    setUserActivity(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1529014-updateuseractivitystate
    updateUserActivityState(activity: cocoascript.NSUserActivity):void;
    // doc://com.apple.documentation/documentation/uikit/nsuseractivitydocumenturlkey
    NSUserActivityDocumentURLKey(): cocoascript.const;
    setNSUserActivityDocumentURLKey(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515190-validateuserinterfaceitem
    validateUserInterfaceItem(item: cocoascript.NSValidatedUserInterfaceItem):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515227-performsynchronousfileaccessusin
    performSynchronousFileAccessUsingBlock(block: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515124-performasynchronousfileaccessusi
    performAsynchronousFileAccessUsingBlock(block: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515066-performactivitywithsynchronouswa
    performActivityWithSynchronousWaiting_usingBlock(waitSynchronously: cocoascript.BOOL, block: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515151-continueactivityusingblock
    continueActivityUsingBlock(block: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515069-continueasynchronousworkonmainth
    continueAsynchronousWorkOnMainThreadUsingBlock(block: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515154-printdocument
    printDocument(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515140-runpagelayout
    runPageLayout(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515059-revertdocumenttosaved
    revertDocumentToSaved(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515147-savedocument
    saveDocument(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515171-savedocumentas
    saveDocumentAs(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515208-savedocumentto
    saveDocumentTo(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515048-savedocumentwithdelegate
    saveDocumentWithDelegate_didSaveSelector_contextInfo(delegate: cocoascript.NSDocument, didSaveSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515206-canclosedocumentwithdelegate
    canCloseDocumentWithDelegate_shouldCloseSelector_contextInfo(delegate: cocoascript.NSDocument, shouldCloseSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515237-close
    close():void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515122-reverttocontentsofurl
    revertToContentsOfURL_ofType_error(url: cocoascript.NSURL, typeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515201-duplicateandreturnerror
    duplicateAndReturnError(outError: cocoascript._Nullable):cocoascript.NSDocument;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515226-duplicatedocument
    duplicateDocument(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515133-duplicatedocumentwithdelegate
    duplicateDocumentWithDelegate_didDuplicateSelector_contextInfo(delegate: cocoascript.NSDocument, didDuplicateSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515231-renamedocument
    renameDocument(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515118-movedocument
    moveDocument(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515043-movedocumentwithcompletionhandle
    moveDocumentWithCompletionHandler(completionHandler: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515057-movetourl
    moveToURL_completionHandler(url: cocoascript.NSURL, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515218-lockdocument
    lockDocument(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515068-unlockdocument
    unlockDocument(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515233-lockdocumentwithcompletionhandle
    lockDocumentWithCompletionHandler(completionHandler: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515189-lockwithcompletionhandler
    lockWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515248-unlockdocumentwithcompletionhand
    unlockDocumentWithCompletionHandler(completionHandler: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515131-unlockwithcompletionhandler
    unlockWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515212-locked
    locked(): cocoascript.BOOL;
    setLocked(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515163-printinfo
    printInfo(): cocoascript.NSPrintInfo;
    setPrintInfo(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515169-preparepagelayout
    preparePageLayout(pageLayout: cocoascript.NSPageLayout):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515100-runmodalpagelayoutwithprintinfo
    runModalPageLayoutWithPrintInfo_delegate_didRunSelector_contextInfo(printInfo: cocoascript.NSPrintInfo, delegate: cocoascript.NSDocument, didRunSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515234-runmodalprintoperation
    runModalPrintOperation_delegate_didRunSelector_contextInfo(printOperation: cocoascript.NSPrintOperation, delegate: cocoascript.NSDocument, didRunSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515243-shouldchangeprintinfo
    shouldChangePrintInfo(newPrintInfo: cocoascript.NSPrintInfo):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515058-printdocumentwithsettings
    printDocumentWithSettings_showPrintPanel_delegate_didPrintSelector_contextInfo(printSettings: cocoascript.NSDocument, showPrintPanel: cocoascript.BOOL, delegate: cocoascript.NSDocument, didPrintSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515070-printoperationwithsettings
    printOperationWithSettings_error(printSettings: cocoascript.NSDocument, outError: cocoascript._Nullable):cocoascript.NSPrintOperation;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515246-pdfprintoperation
    PDFPrintOperation(): cocoascript.NSPrintOperation;
    setPDFPrintOperation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515176-savedocumenttopdf
    saveDocumentToPDF(sender: cocoascript.NSDocument):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/2902303-allowsdocumentsharing
    allowsDocumentSharing(): cocoascript.BOOL;
    setAllowsDocumentSharing(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/2902326-preparesharingservicepicker
    prepareSharingServicePicker(sharingServicePicker: cocoascript.NSSharingServicePicker):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/2902309-sharedocumentwithsharingservice
    shareDocumentWithSharingService_completionHandler(sharingService: cocoascript.NSSharingService, completionHandler: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1500136-handleclosescriptcommand
    handleCloseScriptCommand(command: cocoascript.NSCloseCommand):cocoascript.NSDocument;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1500135-handleprintscriptcommand
    handlePrintScriptCommand(command: cocoascript.NSScriptCommand):cocoascript.NSDocument;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1500138-handlesavescriptcommand
    handleSaveScriptCommand(command: cocoascript.NSScriptCommand):cocoascript.NSDocument;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1500134-objectspecifier
    objectSpecifier(): cocoascript.NSScriptObjectSpecifier;
    setObjectSpecifier(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1500132-lastcomponentoffilename
    lastComponentOfFileName(): cocoascript.NSString;
    setLastComponentOfFileName(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515051-presenterror
    presentError_modalForWindow_delegate_didPresentSelector_contextInfo(error: cocoascript.NSError, window: cocoascript.NSWindow, delegate: cocoascript.NSDocument, didPresentSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515184-presenterror
    presentError(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515229-willpresenterror
    willPresentError(error: cocoascript.NSError):cocoascript.NSError;
    // doc://com.apple.documentation/documentation/appkit/nsdocument/1515188-willnotpresenterror
    willNotPresentError(error: cocoascript.NSError):void;
    //
    alloc():cocoascript.NSDocument;
    //
    init():cocoascript.NSDocument;
  }
}

declare const NSDocument: cocoascript.NSDocument;
