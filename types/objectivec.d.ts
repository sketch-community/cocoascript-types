declare namespace cocoascript {
  /**
   * The root class of most Objective-C class hierarchies, from which subclasses inherit a basic interface to the runtime system and the ability to behave as Objective-C objects.
   * https://developer.apple.com/documentation/objectivec/nsobject
   */
  interface NSObject {
    // https://developer.apple.com/documentation/objectivec/nsobject/1418639-initialize
    initialize():void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418815-load
    load():void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1571958-alloc
    alloc():NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1571945-allocwithzone
    allocWithZone(zone: _NSZone):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418641-init
    init():NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418807-copy
    copy():NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1571953-copywithzone
    copyWithZone(zone: _NSZone):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418978-mutablecopy
    mutableCopy():NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1571956-mutablecopywithzone
    mutableCopyWithZone(zone: _NSZone):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1571947-dealloc
    dealloc():void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1571948-new
    new():NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1571950-class
    class():Class;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418803-superclass
    superclass():Class;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418669-issubclassofclass
    isSubclassOfClass(aClass: Class):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418555-instancesrespondtoselector
    instancesRespondToSelector(aSelector: SEL):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418893-conformstoprotocol
    conformsToProtocol(protocol: Protocol):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418863-methodforselector
    methodForSelector(aSelector: SEL):any;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418713-instancemethodforselector
    instanceMethodForSelector(aSelector: SEL):any;
    // https://developer.apple.com/documentation/objectivec/nsobject/1571959-instancemethodsignatureforselect
    instanceMethodSignatureForSelector(aSelector: SEL):NSMethodSignature;
    // https://developer.apple.com/documentation/objectivec/nsobject/1571960-methodsignatureforselector
    methodSignatureForSelector(aSelector: SEL):NSMethodSignature;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418799-description
    description():NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1409224-autocontentaccessingproxy
    autoContentAccessingProxy(): id;
    setAutoContentAccessingProxy(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1416176-performselector
    performSelector_withObject_afterDelay(aSelector: SEL, anArgument: NSObject, delay: NSTimeInterval):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1415652-performselector
    performSelector_withObject_afterDelay_inModes(aSelector: SEL, anArgument: NSObject, delay: NSTimeInterval, modes: NSRunLoopMode):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1414900-performselectoronmainthread
    performSelectorOnMainThread_withObject_waitUntilDone(aSelector: SEL, arg: NSObject, wait: BOOL):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411637-performselectoronmainthread
    performSelectorOnMainThread_withObject_waitUntilDone_modes(aSelector: SEL, arg: NSObject, wait: BOOL, array: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1414476-performselector
    performSelector_onThread_withObject_waitUntilDone(aSelector: SEL, thr: NSThread, arg: NSObject, wait: BOOL):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1417922-performselector
    performSelector_onThread_withObject_waitUntilDone_modes(aSelector: SEL, thr: NSThread, arg: NSObject, wait: BOOL, array: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1412390-performselectorinbackground
    performSelectorInBackground_withObject(aSelector: SEL, arg: NSObject):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1417611-cancelpreviousperformrequestswit
    cancelPreviousPerformRequestsWithTarget(aTarget: NSObject):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1410849-cancelpreviousperformrequestswit
    cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: NSObject, aSelector: SEL, anArgument: NSObject):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418855-forwardingtargetforselector
    forwardingTargetForSelector(aSelector: SEL):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1571955-forwardinvocation
    forwardInvocation(anInvocation: NSInvocation):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418889-resolveclassmethod
    resolveClassMethod(sel: SEL):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418500-resolveinstancemethod
    resolveInstanceMethod(sel: SEL):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418637-doesnotrecognizeselector
    doesNotRecognizeSelector(aSelector: SEL):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1417074-awakeafterusingcoder
    awakeAfterUsingCoder(coder: NSCoder):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411359-classforarchiver
    classForArchiver(): Class;
    setClassForArchiver(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411876-classforcoder
    classForCoder(): Class;
    setClassForCoder(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1410512-classforkeyedarchiver
    classForKeyedArchiver(): Class;
    setClassForKeyedArchiver(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411048-classfallbacksforkeyedarchiver
    classFallbacksForKeyedArchiver():NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1410547-classforkeyedunarchiver
    classForKeyedUnarchiver():Class;
    // https://developer.apple.com/documentation/objectivec/nsobject/1580076-classforportcoder
    classForPortCoder(): Class;
    setClassForPortCoder(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1409971-replacementobjectforarchiver
    replacementObjectForArchiver(archiver: NSArchiver):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1416843-replacementobjectforcoder
    replacementObjectForCoder(coder: NSCoder):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1417663-replacementobjectforkeyedarchive
    replacementObjectForKeyedArchiver(archiver: NSKeyedArchiver):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1416538-setversion
    setVersion(aVersion: NSInteger):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1415151-version
    version():NSInteger;
    // https://developer.apple.com/documentation/objectivec/nsobject/1415656-attributekeys
    attributeKeys(): string | cocoascript.NSString;
    setAttributeKeys(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411858-classdescription
    classDescription(): NSClassDescription;
    setClassDescription(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411046-inverseforrelationshipkey
    inverseForRelationshipKey(relationshipKey: string | cocoascript.NSString):NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1415662-tomanyrelationshipkeys
    toManyRelationshipKeys(): string | cocoascript.NSString;
    setToManyRelationshipKeys(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1414814-toonerelationshipkeys
    toOneRelationshipKeys(): string | cocoascript.NSString;
    setToOneRelationshipKeys(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1413991-classcode
    classCode(): any;
    setClassCode(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411337-classname
    className(): string | cocoascript.NSString;
    setClassName(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1410291-copyscriptingvalue
    copyScriptingValue_forKey_withProperties(value: NSObject, key: string | cocoascript.NSString, properties: NSObject):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418458-newscriptingobjectofclass
    newScriptingObjectOfClass_forValueForKey_withContentsValue_properties(objectClass: Class, key: string | cocoascript.NSString, contentsValue: NSObject, properties: NSObject):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1417254-scriptingproperties
    scriptingProperties(): id;
    setScriptingProperties(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1409268-scriptingvalueforspecifier
    scriptingValueForSpecifier(objectSpecifier: NSScriptObjectSpecifier):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1534050-accessibilitynotifieswhendestroy
    accessibilityNotifiesWhenDestroyed(): BOOL;
    setAccessibilityNotifiesWhenDestroyed(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/2369549-selectable
    selectable(): BOOL;
    setSelectable(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1409884-objectspecifier
    objectSpecifier(): NSScriptObjectSpecifier;
    setObjectSpecifier(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1504653-acceptspreviewpanelcontrol
    acceptsPreviewPanelControl(panel: QLPreviewPanel):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411302-actionproperty
    actionProperty():NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1416402-attemptrecoveryfromerror
    attemptRecoveryFromError_optionIndex(error: NSError, recoveryOptionIndex: NSUInteger):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411071-attemptrecoveryfromerror
    attemptRecoveryFromError_optionIndex_delegate_didRecoverSelector_contextInfo(error: NSError, recoveryOptionIndex: NSUInteger, delegate: NSObject, didRecoverSelector: SEL, contextInfo: void):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411010-authorizationviewcreatedauthoriz
    authorizationViewCreatedAuthorization(view: SFAuthorizationView):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411002-authorizationviewdidauthorize
    authorizationViewDidAuthorize(view: SFAuthorizationView):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411017-authorizationviewdiddeauthorize
    authorizationViewDidDeauthorize(view: SFAuthorizationView):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411034-authorizationviewdidhide
    authorizationViewDidHide(view: SFAuthorizationView):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1410992-authorizationviewreleasedauthori
    authorizationViewReleasedAuthorization(view: SFAuthorizationView):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411006-authorizationviewshoulddeauthori
    authorizationViewShouldDeauthorize(view: SFAuthorizationView):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1402907-awakefromnib
    awakeFromNib():void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1504204-beginpreviewpanelcontrol
    beginPreviewPanelControl(panel: QLPreviewPanel):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1385360-candidates
    candidates(sender: NSObject):NSArray;
    // https://developer.apple.com/documentation/objectivec/nsobject/1514145-certificatepanelshowhelp
    certificatePanelShowHelp(sender: SFCertificatePanel):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1514140-chooseidentitypanelshowhelp
    chooseIdentityPanelShowHelp(sender: SFChooseIdentityPanel):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1385539-commitcomposition
    commitComposition(sender: NSObject):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1385416-composedstring
    composedString(sender: NSObject):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1505265-compositionparameterview
    compositionParameterView_didChangeParameterWithKey(parameterView: QCCompositionParameterView, portKey: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503523-compositionparameterview
    compositionParameterView_shouldDisplayParameterWithKey_attributes(parameterView: QCCompositionParameterView, portKey: string | cocoascript.NSString, portAttributes: NSDictionary):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1447352-compositionpickerview
    compositionPickerView_didSelectComposition(pickerView: QCCompositionPickerView, composition: QCComposition):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1447342-compositionpickerviewdidstartani
    compositionPickerViewDidStartAnimating(pickerView: QCCompositionPickerView):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1447348-compositionpickerviewwillstopani
    compositionPickerViewWillStopAnimating(pickerView: QCCompositionPickerView):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1385394-didcommandbyselector
    didCommandBySelector_client(aSelector: SEL, sender: NSObject):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1393848-doescontain
    doesContain(object: NSObject):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1505044-endpreviewpanelcontrol
    endPreviewPanelControl(panel: QLPreviewPanel):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1489854-exceptionhandler
    exceptionHandler_shouldHandleException_mask(sender: NSExceptionHandler, exception: NSException, aMask: NSUInteger):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1489856-exceptionhandler
    exceptionHandler_shouldLogException_mask(sender: NSExceptionHandler, exception: NSException, aMask: NSUInteger):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1430046-filetransferservicesabortcomplet
    fileTransferServicesAbortComplete_error(inServices: OBEXFileTransferServices, inError: OBEXError):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1428872-filetransferservicesconnectionco
    fileTransferServicesConnectionComplete_error(inServices: OBEXFileTransferServices, inError: OBEXError):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1432094-filetransferservicescopyremotefi
    fileTransferServicesCopyRemoteFileComplete_error(inServices: OBEXFileTransferServices, inError: OBEXError):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1431422-filetransferservicescopyremotefi
    fileTransferServicesCopyRemoteFileProgress_transferProgress(inServices: OBEXFileTransferServices, inProgressDescription: NSDictionary):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1430913-filetransferservicescreatefolder
    fileTransferServicesCreateFolderComplete_error_folder(inServices: OBEXFileTransferServices, inError: OBEXError, inFolderName: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1434806-filetransferservicesdisconnectio
    fileTransferServicesDisconnectionComplete_error(inServices: OBEXFileTransferServices, inError: OBEXError):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1432086-filetransferservicesfilepreparat
    fileTransferServicesFilePreparationComplete_error(inServices: OBEXFileTransferServices, inError: OBEXError):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1432583-filetransferservicespathchangeco
    fileTransferServicesPathChangeComplete_error_finalPath(inServices: OBEXFileTransferServices, inError: OBEXError, inPath: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1434702-filetransferservicesremoveitemco
    fileTransferServicesRemoveItemComplete_error_removedItem(inServices: OBEXFileTransferServices, inError: OBEXError, inItemName: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1434777-filetransferservicesretrievefold
    fileTransferServicesRetrieveFolderListingComplete_error_listing(inServices: OBEXFileTransferServices, inError: OBEXError, inListing: NSArray):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1434240-filetransferservicessendfilecomp
    fileTransferServicesSendFileComplete_error(inServices: OBEXFileTransferServices, inError: OBEXError):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1430365-filetransferservicessendfileprog
    fileTransferServicesSendFileProgress_transferProgress(inServices: OBEXFileTransferServices, inProgressDescription: NSDictionary):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1385363-handleevent
    handleEvent_client(event: NSEvent, sender: NSObject):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503526-imagebrowser
    imageBrowser_backgroundWasRightClickedWithEvent(aBrowser: IKImageBrowserView, event: NSEvent):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1504701-imagebrowser
    imageBrowser_cellWasDoubleClickedAtIndex(aBrowser: IKImageBrowserView, index: NSUInteger):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503802-imagebrowser
    imageBrowser_cellWasRightClickedAtIndex_withEvent(aBrowser: IKImageBrowserView, index: NSUInteger, event: NSEvent):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503488-imagebrowser
    imageBrowser_groupAtIndex(aBrowser: IKImageBrowserView, index: NSUInteger):NSDictionary;
    // https://developer.apple.com/documentation/objectivec/nsobject/1504064-imagebrowser
    imageBrowser_itemAtIndex(aBrowser: IKImageBrowserView, index: NSUInteger):NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503616-imagebrowser
    imageBrowser_moveItemsAtIndexes_toIndex(aBrowser: IKImageBrowserView, indexes: NSIndexSet, destinationIndex: NSUInteger):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503834-imagebrowser
    imageBrowser_removeItemsAtIndexes(aBrowser: IKImageBrowserView, indexes: NSIndexSet):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1504208-imagebrowser
    imageBrowser_writeItemsAtIndexes_toPasteboard(aBrowser: IKImageBrowserView, itemIndexes: NSIndexSet, pasteboard: NSPasteboard):NSUInteger;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503765-imagebrowserselectiondidchange
    imageBrowserSelectionDidChange(aBrowser: IKImageBrowserView):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1504801-imagerepresentation
    imageRepresentation():NSObject;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503547-imagerepresentationtype
    imageRepresentationType():NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503725-imagesubtitle
    imageSubtitle():NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1504080-imagetitle
    imageTitle():NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503516-imageuid
    imageUID():NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1504444-imageversion
    imageVersion():NSUInteger;
    // https://developer.apple.com/documentation/objectivec/nsobject/1417806-indicesofobjectsbyevaluatingobje
    indicesOfObjectsByEvaluatingObjectSpecifier(specifier: NSScriptObjectSpecifier):NSNumber;
    // https://developer.apple.com/documentation/objectivec/nsobject/1385446-inputtext
    inputText_client(string: string | cocoascript.NSString, sender: NSObject):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1385436-inputtext
    inputText_key_modifiers_client(string: string | cocoascript.NSString, keyCode: NSInteger, flags: NSUInteger, sender: NSObject):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1393837-iscaseinsensitivelike
    isCaseInsensitiveLike(object: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1393823-isequalto
    isEqualTo(object: NSObject):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1393885-isgreaterthan
    isGreaterThan(object: NSObject):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1393862-isgreaterthanorequalto
    isGreaterThanOrEqualTo(object: NSObject):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1393841-islessthan
    isLessThan(object: NSObject):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1393827-islessthanorequalto
    isLessThanOrEqualTo(object: NSObject):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1393866-islike
    isLike(object: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1393843-isnotequalto
    isNotEqualTo(object: NSObject):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503514-numberofgroupsinimagebrowser
    numberOfGroupsInImageBrowser(aBrowser: IKImageBrowserView):NSUInteger;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503497-numberofitemsinimagebrowser
    numberOfItemsInImageBrowser(aBrowser: IKImageBrowserView):NSUInteger;
    // https://developer.apple.com/documentation/objectivec/nsobject/1385400-originalstring
    originalString(sender: NSObject):NSAttributedString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411298-performactionforperson
    performActionForPerson_identifier(person: ABPerson, identifier: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1402908-prepareforinterfacebuilder
    prepareForInterfaceBuilder():void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1438175-provideimagedata
    provideImageData_bytesPerRow_origin__size__userInfo(data: void, rowbytes: any, x: any, y: any, width: any, height: any, info: NSObject):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1504951-quartzfiltermanager
    quartzFilterManager_didAddFilter(sender: QuartzFilterManager, filter: QuartzFilter):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503494-quartzfiltermanager
    quartzFilterManager_didModifyFilter(sender: QuartzFilterManager, filter: QuartzFilter):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503483-quartzfiltermanager
    quartzFilterManager_didRemoveFilter(sender: QuartzFilterManager, filter: QuartzFilter):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503484-quartzfiltermanager
    quartzFilterManager_didSelectFilter(sender: QuartzFilterManager, filter: QuartzFilter):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1430075-readlinkqualityfordevicecomplete
    readLinkQualityForDeviceComplete_device_info_error(controller: NSObject, device: IOBluetoothDevice, info: BluetoothHCILinkQualityInfo, error: any):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1428399-readrssifordevicecomplete
    readRSSIForDeviceComplete_device_info_error(controller: NSObject, device: IOBluetoothDevice, info: BluetoothHCIRSSIInfo, error: any):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503501-saveoptions
    saveOptions_shouldShowUTType(saveOptions: IKSaveOptions, utType: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411300-shouldenableactionforperson
    shouldEnableActionForPerson_identifier(person: ABPerson, identifier: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411304-titleforperson
    titleForPerson_identifier(person: ABPerson, identifier: string | cocoascript.NSString):NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494234-pdepanelsfortype
    PDEPanelsForType_withHostInfo(pdeType: string | cocoascript.NSString, host: NSObject):NSArray;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494230-pmprinter
    PMPrinter():PMPrinter;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494202-ppdoptionkeyvaluedidchange
    PPDOptionKeyValueDidChange_ppdChoice(option: string | cocoascript.NSString, choice: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1572039-url
    URL_resourceDataDidBecomeAvailable(sender: NSURL, newBytes: NSData):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1572040-url
    URL_resourceDidFailLoadingWithReason(sender: NSURL, reason: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1572048-urlresourcedidcancelloading
    URLResourceDidCancelLoading(sender: NSURL):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1572036-urlresourcedidfinishloading
    URLResourceDidFinishLoading(sender: NSURL):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494285-application
    application_delegateHandlesKey(sender: NSApplication, key: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1532638-changecolor
    changeColor(sender: NSObject):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1462311-changefont
    changeFont(sender: NSObject):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1458190-commitediting
    commitEditing():BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1458181-commiteditingandreturnerror
    commitEditingAndReturnError(error: NSError):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1458179-commiteditingwithdelegate
    commitEditingWithDelegate_didCommitSelector_contextInfo(delegate: NSObject, didCommitSelector: SEL, contextInfo: void):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1428934-controltextdidbeginediting
    controlTextDidBeginEditing(obj: NSNotification):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1428982-controltextdidchange
    controlTextDidChange(obj: NSNotification):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1428847-controltextdidendediting
    controlTextDidEndEditing(obj: NSNotification):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1458076-discardediting
    discardEditing():void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1415986-draggedimage
    draggedImage_beganAt(image: NSImage, screenPoint: NSPoint):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1416014-draggedimage
    draggedImage_endedAt_deposited(image: NSImage, screenPoint: NSPoint, flag: BOOL):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1416054-draggedimage
    draggedImage_endedAt_operation(image: NSImage, screenPoint: NSPoint, operation: NSDragOperation):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1416008-draggedimage
    draggedImage_movedTo(image: NSImage, screenPoint: NSPoint):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1415984-draggingsourceoperationmaskforlo
    draggingSourceOperationMaskForLocal(flag: BOOL):NSDragOperation;
    // https://developer.apple.com/documentation/objectivec/nsobject/1473892-getl2capchannelref
    getL2CAPChannelRef():IOBluetoothL2CAPChannelRef;
    // https://developer.apple.com/documentation/objectivec/nsobject/1416100-ignoremodifierkeyswhiledragging
    ignoreModifierKeysWhileDragging():BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494220-initwithbundle
    initWithBundle(theBundle: NSBundle):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1483574-layer
    layer_shouldInheritContentsScale_fromWindow(layer: CALayer, newScale: CGFloat, window: NSWindow):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1458092-objectdidbeginediting
    objectDidBeginEditing(editor: NSEditor):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1458187-objectdidendediting
    objectDidEndEditing(editor: NSEditor):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494209-pageformat
    pageFormat():PMPageFormat;
    // https://developer.apple.com/documentation/objectivec/nsobject/1539083-panel
    panel_compareFilename_with_caseSensitive(sender: NSObject, name1: string | cocoascript.NSString, name2: string | cocoascript.NSString, caseSensitive: BOOL):NSComparisonResult;
    // https://developer.apple.com/documentation/objectivec/nsobject/1539080-panel
    panel_directoryDidChange(sender: NSObject, path: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1538970-panel
    panel_isValidFilename(sender: NSObject, filename: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1539030-panel
    panel_shouldShowFilename(sender: NSObject, filename: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494208-panelkind
    panelKind():NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494224-panelname
    panelName():NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494214-panelview
    panelView():NSView;
    // https://developer.apple.com/documentation/objectivec/nsobject/1525907-pasteboard
    pasteboard_provideDataForType(sender: NSPasteboard, type: NSPasteboardType):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1532824-pasteboardchangedowner
    pasteboardChangedOwner(sender: NSPasteboard):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494226-ppdfile
    ppdFile():void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494218-printsession
    printSession():PMPrintSession;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494206-printsettings
    printSettings():PMPrintSettings;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494236-printwindowwillclose
    printWindowWillClose(userCanceled: BOOL):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1473896-registerincomingdatalistener
    registerIncomingDataListener_refCon(listener: IOBluetoothL2CAPChannelIncomingDataListener, refCon: void):any;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494216-restorevaluesandreturnerror
    restoreValuesAndReturnError(error: NSError):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494222-savevaluesandreturnerror
    saveValuesAndReturnError(error: NSError):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494210-shouldhide
    shouldHide():BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494213-shouldprint
    shouldPrint():BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494228-shouldshowhelp
    shouldShowHelp():BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494212-summaryinfo
    summaryInfo():NSDictionary;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494232-supportedppdoptionkeys
    supportedPPDOptionKeys():NSArray;
    // https://developer.apple.com/documentation/objectivec/nsobject/1539424-tableview
    tableView_writeRows_toPasteboard(tableView: NSTableView, rows: NSArray, pboard: NSPasteboard):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1534415-validmodesforfontpanel
    validModesForFontPanel(fontPanel: NSFontPanel):NSFontPanelModeMask;
    // https://developer.apple.com/documentation/objectivec/nsobject/1518160-validatemenuitem
    validateMenuItem(menuItem: NSMenuItem):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1524282-validatetoolbaritem
    validateToolbarItem(item: NSToolbarItem):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1483693-view
    view_stringForToolTip_point_userData(view: NSView, tag: NSToolTipTag, point: NSPoint, data: void):NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494235-willchangeppdoptionkeyvalue
    willChangePPDOptionKeyValue_ppdChoice(option: string | cocoascript.NSString, choice: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/objectivec/nsobject/1494204-willshow
    willShow():void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1473874-write
    write_length(data: void, length: UInt16):any;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418711-debugdescription
    debugDescription():NSString;
    // https://developer.apple.com/documentation/objectivec/nsobject/1418561-hash
    hash():NSUInteger;
    // https://developer.apple.com/documentation/objectivec/nsobject/1473857-withl2capchannelref
    withL2CAPChannelRef(l2capChannelRef: IOBluetoothL2CAPChannelRef):IOBluetoothL2CAPChannel;
    //
    alloc():NSObject;
    //
    init():NSObject;
  }
}

declare const NSObject: cocoascript.NSObject;
declare namespace cocoascript {
  /**
   * The group of methods that are fundamental to all Objective-C objects.
   * https://developer.apple.com/documentation/objectivec/1418956-nsobject
   */
  interface NSObject {
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1571949-class
    class():Class;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418793-superclass
    superclass(): Class;
    setSuperclass(): void;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418795-isequal
    isEqual(object: NSObject):BOOL;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418859-hash
    hash(): NSUInteger;
    setHash(): void;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418954-self
    self():NSObject;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418511-iskindofclass
    isKindOfClass(aClass: Class):BOOL;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418766-ismemberofclass
    isMemberOfClass(aClass: Class):BOOL;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418583-respondstoselector
    respondsToSelector(aSelector: SEL):BOOL;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418515-conformstoprotocol
    conformsToProtocol(aProtocol: Protocol):BOOL;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418746-description
    description(): string | cocoascript.NSString;
    setDescription(): void;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418703-debugdescription
    debugDescription(): string | cocoascript.NSString;
    setDebugDescription(): void;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418867-performselector
    performSelector(aSelector: SEL):NSObject;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418764-performselector
    performSelector_withObject(aSelector: SEL, object: NSObject):NSObject;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418667-performselector
    performSelector_withObject_withObject(aSelector: SEL, object1: NSObject, object2: NSObject):NSObject;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418528-isproxy
    isProxy():BOOL;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1571946-retain
    retain():NSObject;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1571957-release
    release():void;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1571951-autorelease
    autorelease():NSObject;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1571952-retaincount
    retainCount():NSUInteger;
    // https://developer.apple.com/documentation/objectivec/1418956-nsobject/1571954-zone
    zone():struct;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/objectivec/nsuinteger
  type NSUInteger = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/objectivec/nsinteger
  type NSInteger = number;
}
declare namespace cocoascript {
  interface id {
  }
}
declare namespace cocoascript {
  interface Class {
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/objectivec/protocol
   */
  interface Protocol extends NSObject {
    //
    alloc():Protocol;
    //
    init():Protocol;
  }
}

declare const Protocol: cocoascript.Protocol;
// https://developer.apple.com/documentation/objectivec/1418635-class_getname
declare const class_getName: cocoascript.Class;
// https://developer.apple.com/documentation/objectivec/1418918-class_getivarlayout
declare const class_getIvarLayout: cocoascript.Class;
// https://developer.apple.com/documentation/objectivec/1418508-class_getweakivarlayout
declare const class_getWeakIvarLayout: cocoascript.Class;
// https://developer.apple.com/documentation/objectivec/1418547-object_getclassname
declare const object_getClassName: cocoascript.id;
// https://developer.apple.com/documentation/objectivec/1418922-ivar_getname
declare const ivar_getName: cocoascript.Ivar;
// https://developer.apple.com/documentation/objectivec/1418569-ivar_gettypeencoding
declare const ivar_getTypeEncoding: cocoascript.Ivar;
// https://developer.apple.com/documentation/objectivec/1418488-method_gettypeencoding
declare const method_getTypeEncoding: cocoascript.Method;
// https://developer.apple.com/documentation/objectivec/1418970-objc_copyimagenames
declare const objc_copyImageNames: number;
// https://developer.apple.com/documentation/objectivec/1418539-class_getimagename
declare const class_getImageName: cocoascript.Class;
// https://developer.apple.com/documentation/objectivec/1418485-objc_copyclassnamesforimage
declare const objc_copyClassNamesForImage: number;
// https://developer.apple.com/documentation/objectivec/1418571-sel_getname
declare const sel_getName: cocoascript.SEL;
// https://developer.apple.com/documentation/objectivec/1418826-protocol_getname
declare const protocol_getName: cocoascript.Protocol;
// https://developer.apple.com/documentation/objectivec/1418903-property_getname
declare const property_getName: cocoascript.objc_property_t;
// https://developer.apple.com/documentation/objectivec/1418909-property_getattributes
declare const property_getAttributes: cocoascript.objc_property_t;
declare namespace cocoascript {
  interface Method {
  }
}
declare namespace cocoascript {
  interface Ivar {
  }
}
declare namespace cocoascript {
  interface Category {
  }
}
declare namespace cocoascript {
  interface objc_property_t {
  }
}
declare namespace cocoascript {
  interface SEL {
  }
}
declare namespace cocoascript {
  interface objc_property_attribute_t {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/objectivec/bool
  type BOOL = boolean;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/objectivec/objc_associationpolicy
  type objc_AssociationPolicy = cocoascript.uintptr_t;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/objectivec/objc_func_loadimage
  type objc_func_loadImage = cocoascript.mach_header;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/objectivec/objc_hook_getclass
  type objc_hook_getClass = cocoascript._Nullable;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/objectivec/objc_hook_getimagename
  type objc_hook_getImageName = cocoascript._Nullable;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/objectivec/objc_hook_lazyclassnamer
  type objc_hook_lazyClassNamer = cocoascript.Class;
}
declare namespace cocoascript {
  interface NXHashState {
  }
}
declare namespace cocoascript {
  interface NXHashTable {
  }
}
declare namespace cocoascript {
  interface NXHashTablePrototype {
  }
}
// https://developer.apple.com/documentation/objectivec/nxptrprototype
declare const NXPtrPrototype: cocoascript.NXHashTablePrototype;
// https://developer.apple.com/documentation/objectivec/nxptrstructkeyprototype
declare const NXPtrStructKeyPrototype: cocoascript.NXHashTablePrototype;
// https://developer.apple.com/documentation/objectivec/nxstrprototype
declare const NXStrPrototype: cocoascript.NXHashTablePrototype;
// https://developer.apple.com/documentation/objectivec/nxstrstructkeyprototype
declare const NXStrStructKeyPrototype: cocoascript.NXHashTablePrototype;
// https://developer.apple.com/documentation/objectivec/objc_property_attribute_t/1418734-name
declare const name: string;
// https://developer.apple.com/documentation/objectivec/objc_property_attribute_t/1418797-value
declare const value: string;
// https://developer.apple.com/documentation/objectivec/nxhashtable/1430264-info
declare const info: void;
// https://developer.apple.com/documentation/objectivec/nxhashtable/1430270-prototype
declare const prototype: cocoascript.NXHashTablePrototype;
