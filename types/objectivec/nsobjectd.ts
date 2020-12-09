declare namespace cocoascript {
/**
 * The root class of most Objective-C class hierarchies, from which subclasses inherit a basic interface to the runtime system and the ability to behave as Objective-C objects.
 * doc://com.apple.documentation/documentation/objectivec/nsobject
 */
interface NSObject {
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1418641-init
  init():cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1418807-copy
  copy():cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1418978-mutablecopy
  mutableCopy():cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1571947-dealloc
  dealloc():void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1418863-methodforselector
  methodForSelector(aSelector: cocoascript.SEL):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1571960-methodsignatureforselector
  methodSignatureForSelector(aSelector: cocoascript.SEL):cocoascript.NSMethodSignature;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1409224-autocontentaccessingproxy
  autoContentAccessingProxy(): cocoascript.id;
  setAutoContentAccessingProxy(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1416176-performselector
  performSelector_withObject_afterDelay(aSelector: cocoascript.SEL, anArgument: cocoascript.NSObject, delay: cocoascript.NSTimeInterval):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1415652-performselector
  performSelector_withObject_afterDelay_inModes(aSelector: cocoascript.SEL, anArgument: cocoascript.NSObject, delay: cocoascript.NSTimeInterval, modes: cocoascript.NSRunLoopMode):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1414900-performselectoronmainthread
  performSelectorOnMainThread_withObject_waitUntilDone(aSelector: cocoascript.SEL, arg: cocoascript.NSObject, wait: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411637-performselectoronmainthread
  performSelectorOnMainThread_withObject_waitUntilDone_modes(aSelector: cocoascript.SEL, arg: cocoascript.NSObject, wait: cocoascript.BOOL, array: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1414476-performselector
  performSelector_onThread_withObject_waitUntilDone(aSelector: cocoascript.SEL, thr: cocoascript.NSThread, arg: cocoascript.NSObject, wait: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1417922-performselector
  performSelector_onThread_withObject_waitUntilDone_modes(aSelector: cocoascript.SEL, thr: cocoascript.NSThread, arg: cocoascript.NSObject, wait: cocoascript.BOOL, array: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1412390-performselectorinbackground
  performSelectorInBackground_withObject(aSelector: cocoascript.SEL, arg: cocoascript.NSObject):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1418855-forwardingtargetforselector
  forwardingTargetForSelector(aSelector: cocoascript.SEL):cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1571955-forwardinvocation
  forwardInvocation(anInvocation: cocoascript.NSInvocation):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1418637-doesnotrecognizeselector
  doesNotRecognizeSelector(aSelector: cocoascript.SEL):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1417074-awakeafterusingcoder
  awakeAfterUsingCoder(coder: cocoascript.NSCoder):cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411359-classforarchiver
  classForArchiver(): cocoascript.Class;
  setClassForArchiver(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411876-classforcoder
  classForCoder(): cocoascript.Class;
  setClassForCoder(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1410512-classforkeyedarchiver
  classForKeyedArchiver(): cocoascript.Class;
  setClassForKeyedArchiver(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1580076-classforportcoder
  classForPortCoder(): cocoascript.Class;
  setClassForPortCoder(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1409971-replacementobjectforarchiver
  replacementObjectForArchiver(archiver: cocoascript.NSArchiver):cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1416843-replacementobjectforcoder
  replacementObjectForCoder(coder: cocoascript.NSCoder):cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1417663-replacementobjectforkeyedarchive
  replacementObjectForKeyedArchiver(archiver: cocoascript.NSKeyedArchiver):cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1415656-attributekeys
  attributeKeys(): cocoascript.NSString;
  setAttributeKeys(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411858-classdescription
  classDescription(): cocoascript.NSClassDescription;
  setClassDescription(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411046-inverseforrelationshipkey
  inverseForRelationshipKey(relationshipKey: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1415662-tomanyrelationshipkeys
  toManyRelationshipKeys(): cocoascript.NSString;
  setToManyRelationshipKeys(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1414814-toonerelationshipkeys
  toOneRelationshipKeys(): cocoascript.NSString;
  setToOneRelationshipKeys(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1413991-classcode
  classCode(): cocoascript.FourCharCode;
  setClassCode(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411337-classname
  className(): cocoascript.NSString;
  setClassName(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1410291-copyscriptingvalue
  copyScriptingValue_forKey_withProperties(value: cocoascript.NSObject, key: cocoascript.NSString, properties: cocoascript.NSObject):cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1418458-newscriptingobjectofclass
  newScriptingObjectOfClass_forValueForKey_withContentsValue_properties(objectClass: cocoascript.Class, key: cocoascript.NSString, contentsValue: cocoascript.NSObject, properties: cocoascript.NSObject):cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1417254-scriptingproperties
  scriptingProperties(): cocoascript.id;
  setScriptingProperties(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1409268-scriptingvalueforspecifier
  scriptingValueForSpecifier(objectSpecifier: cocoascript.NSScriptObjectSpecifier):cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/2369549-selectable
  selectable(): cocoascript.BOOL;
  setSelectable(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1409884-objectspecifier
  objectSpecifier(): cocoascript.NSScriptObjectSpecifier;
  setObjectSpecifier(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1504653-acceptspreviewpanelcontrol
  acceptsPreviewPanelControl(panel: cocoascript.QLPreviewPanel):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411302-actionproperty
  actionProperty():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1416402-attemptrecoveryfromerror
  attemptRecoveryFromError_optionIndex(error: cocoascript.NSError, recoveryOptionIndex: cocoascript.NSUInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411071-attemptrecoveryfromerror
  attemptRecoveryFromError_optionIndex_delegate_didRecoverSelector_contextInfo(error: cocoascript.NSError, recoveryOptionIndex: cocoascript.NSUInteger, delegate: cocoascript.NSObject, didRecoverSelector: cocoascript.SEL, contextInfo: void):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411010-authorizationviewcreatedauthoriz
  authorizationViewCreatedAuthorization(view: cocoascript.SFAuthorizationView):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411002-authorizationviewdidauthorize
  authorizationViewDidAuthorize(view: cocoascript.SFAuthorizationView):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411017-authorizationviewdiddeauthorize
  authorizationViewDidDeauthorize(view: cocoascript.SFAuthorizationView):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411034-authorizationviewdidhide
  authorizationViewDidHide(view: cocoascript.SFAuthorizationView):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1410992-authorizationviewreleasedauthori
  authorizationViewReleasedAuthorization(view: cocoascript.SFAuthorizationView):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411006-authorizationviewshoulddeauthori
  authorizationViewShouldDeauthorize(view: cocoascript.SFAuthorizationView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1402907-awakefromnib
  awakeFromNib():void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1504204-beginpreviewpanelcontrol
  beginPreviewPanelControl(panel: cocoascript.QLPreviewPanel):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1385360-candidates
  candidates(sender: cocoascript.NSObject):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1514145-certificatepanelshowhelp
  certificatePanelShowHelp(sender: cocoascript.SFCertificatePanel):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1514140-chooseidentitypanelshowhelp
  chooseIdentityPanelShowHelp(sender: cocoascript.SFChooseIdentityPanel):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1385539-commitcomposition
  commitComposition(sender: cocoascript.NSObject):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1385416-composedstring
  composedString(sender: cocoascript.NSObject):cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1505265-compositionparameterview
  compositionParameterView_didChangeParameterWithKey(parameterView: cocoascript.QCCompositionParameterView, portKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503523-compositionparameterview
  compositionParameterView_shouldDisplayParameterWithKey_attributes(parameterView: cocoascript.QCCompositionParameterView, portKey: cocoascript.NSString, portAttributes: cocoascript.NSDictionary):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1447352-compositionpickerview
  compositionPickerView_didSelectComposition(pickerView: cocoascript.QCCompositionPickerView, composition: cocoascript.QCComposition):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1447342-compositionpickerviewdidstartani
  compositionPickerViewDidStartAnimating(pickerView: cocoascript.QCCompositionPickerView):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1447348-compositionpickerviewwillstopani
  compositionPickerViewWillStopAnimating(pickerView: cocoascript.QCCompositionPickerView):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1385394-didcommandbyselector
  didCommandBySelector_client(aSelector: cocoascript.SEL, sender: cocoascript.NSObject):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1393848-doescontain
  doesContain(object: cocoascript.NSObject):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1505044-endpreviewpanelcontrol
  endPreviewPanelControl(panel: cocoascript.QLPreviewPanel):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1489854-exceptionhandler
  exceptionHandler_shouldHandleException_mask(sender: cocoascript.NSExceptionHandler, exception: cocoascript.NSException, aMask: cocoascript.NSUInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1489856-exceptionhandler
  exceptionHandler_shouldLogException_mask(sender: cocoascript.NSExceptionHandler, exception: cocoascript.NSException, aMask: cocoascript.NSUInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1430046-filetransferservicesabortcomplet
  fileTransferServicesAbortComplete_error(inServices: cocoascript.OBEXFileTransferServices, inError: cocoascript.OBEXError):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1428872-filetransferservicesconnectionco
  fileTransferServicesConnectionComplete_error(inServices: cocoascript.OBEXFileTransferServices, inError: cocoascript.OBEXError):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1432094-filetransferservicescopyremotefi
  fileTransferServicesCopyRemoteFileComplete_error(inServices: cocoascript.OBEXFileTransferServices, inError: cocoascript.OBEXError):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1431422-filetransferservicescopyremotefi
  fileTransferServicesCopyRemoteFileProgress_transferProgress(inServices: cocoascript.OBEXFileTransferServices, inProgressDescription: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1430913-filetransferservicescreatefolder
  fileTransferServicesCreateFolderComplete_error_folder(inServices: cocoascript.OBEXFileTransferServices, inError: cocoascript.OBEXError, inFolderName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1434806-filetransferservicesdisconnectio
  fileTransferServicesDisconnectionComplete_error(inServices: cocoascript.OBEXFileTransferServices, inError: cocoascript.OBEXError):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1432086-filetransferservicesfilepreparat
  fileTransferServicesFilePreparationComplete_error(inServices: cocoascript.OBEXFileTransferServices, inError: cocoascript.OBEXError):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1432583-filetransferservicespathchangeco
  fileTransferServicesPathChangeComplete_error_finalPath(inServices: cocoascript.OBEXFileTransferServices, inError: cocoascript.OBEXError, inPath: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1434702-filetransferservicesremoveitemco
  fileTransferServicesRemoveItemComplete_error_removedItem(inServices: cocoascript.OBEXFileTransferServices, inError: cocoascript.OBEXError, inItemName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1434777-filetransferservicesretrievefold
  fileTransferServicesRetrieveFolderListingComplete_error_listing(inServices: cocoascript.OBEXFileTransferServices, inError: cocoascript.OBEXError, inListing: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1434240-filetransferservicessendfilecomp
  fileTransferServicesSendFileComplete_error(inServices: cocoascript.OBEXFileTransferServices, inError: cocoascript.OBEXError):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1430365-filetransferservicessendfileprog
  fileTransferServicesSendFileProgress_transferProgress(inServices: cocoascript.OBEXFileTransferServices, inProgressDescription: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1385363-handleevent
  handleEvent_client(event: cocoascript.NSEvent, sender: cocoascript.NSObject):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503526-imagebrowser
  imageBrowser_backgroundWasRightClickedWithEvent(aBrowser: cocoascript.IKImageBrowserView, event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1504701-imagebrowser
  imageBrowser_cellWasDoubleClickedAtIndex(aBrowser: cocoascript.IKImageBrowserView, index: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503802-imagebrowser
  imageBrowser_cellWasRightClickedAtIndex_withEvent(aBrowser: cocoascript.IKImageBrowserView, index: cocoascript.NSUInteger, event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503488-imagebrowser
  imageBrowser_groupAtIndex(aBrowser: cocoascript.IKImageBrowserView, index: cocoascript.NSUInteger):cocoascript.NSDictionary;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1504064-imagebrowser
  imageBrowser_itemAtIndex(aBrowser: cocoascript.IKImageBrowserView, index: cocoascript.NSUInteger):cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503616-imagebrowser
  imageBrowser_moveItemsAtIndexes_toIndex(aBrowser: cocoascript.IKImageBrowserView, indexes: cocoascript.NSIndexSet, destinationIndex: cocoascript.NSUInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503834-imagebrowser
  imageBrowser_removeItemsAtIndexes(aBrowser: cocoascript.IKImageBrowserView, indexes: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1504208-imagebrowser
  imageBrowser_writeItemsAtIndexes_toPasteboard(aBrowser: cocoascript.IKImageBrowserView, itemIndexes: cocoascript.NSIndexSet, pasteboard: cocoascript.NSPasteboard):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503765-imagebrowserselectiondidchange
  imageBrowserSelectionDidChange(aBrowser: cocoascript.IKImageBrowserView):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1504801-imagerepresentation
  imageRepresentation():cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503547-imagerepresentationtype
  imageRepresentationType():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503725-imagesubtitle
  imageSubtitle():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1504080-imagetitle
  imageTitle():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503516-imageuid
  imageUID():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1504444-imageversion
  imageVersion():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1417806-indicesofobjectsbyevaluatingobje
  indicesOfObjectsByEvaluatingObjectSpecifier(specifier: cocoascript.NSScriptObjectSpecifier):cocoascript.NSNumber;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1385446-inputtext
  inputText_client(string: cocoascript.NSString, sender: cocoascript.NSObject):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1385436-inputtext
  inputText_key_modifiers_client(string: cocoascript.NSString, keyCode: cocoascript.NSInteger, flags: cocoascript.NSUInteger, sender: cocoascript.NSObject):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1393837-iscaseinsensitivelike
  isCaseInsensitiveLike(object: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1393823-isequalto
  isEqualTo(object: cocoascript.NSObject):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1393885-isgreaterthan
  isGreaterThan(object: cocoascript.NSObject):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1393862-isgreaterthanorequalto
  isGreaterThanOrEqualTo(object: cocoascript.NSObject):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1393841-islessthan
  isLessThan(object: cocoascript.NSObject):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1393827-islessthanorequalto
  isLessThanOrEqualTo(object: cocoascript.NSObject):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1393866-islike
  isLike(object: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1393843-isnotequalto
  isNotEqualTo(object: cocoascript.NSObject):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503514-numberofgroupsinimagebrowser
  numberOfGroupsInImageBrowser(aBrowser: cocoascript.IKImageBrowserView):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503497-numberofitemsinimagebrowser
  numberOfItemsInImageBrowser(aBrowser: cocoascript.IKImageBrowserView):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1385400-originalstring
  originalString(sender: cocoascript.NSObject):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411298-performactionforperson
  performActionForPerson_identifier(person: cocoascript.ABPerson, identifier: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1402908-prepareforinterfacebuilder
  prepareForInterfaceBuilder():void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1438175-provideimagedata
  provideImageData_bytesPerRow_origin__size__userInfo(data: void, rowbytes: cocoascript.size_t, x: cocoascript.size_t, y: cocoascript.size_t, width: cocoascript.size_t, height: cocoascript.size_t, info: cocoascript.NSObject):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1504951-quartzfiltermanager
  quartzFilterManager_didAddFilter(sender: cocoascript.QuartzFilterManager, filter: cocoascript.QuartzFilter):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503494-quartzfiltermanager
  quartzFilterManager_didModifyFilter(sender: cocoascript.QuartzFilterManager, filter: cocoascript.QuartzFilter):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503483-quartzfiltermanager
  quartzFilterManager_didRemoveFilter(sender: cocoascript.QuartzFilterManager, filter: cocoascript.QuartzFilter):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503484-quartzfiltermanager
  quartzFilterManager_didSelectFilter(sender: cocoascript.QuartzFilterManager, filter: cocoascript.QuartzFilter):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1430075-readlinkqualityfordevicecomplete
  readLinkQualityForDeviceComplete_device_info_error(controller: cocoascript.NSObject, device: cocoascript.IOBluetoothDevice, info: cocoascript.BluetoothHCILinkQualityInfo, error: cocoascript.IOReturn):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1428399-readrssifordevicecomplete
  readRSSIForDeviceComplete_device_info_error(controller: cocoascript.NSObject, device: cocoascript.IOBluetoothDevice, info: cocoascript.BluetoothHCIRSSIInfo, error: cocoascript.IOReturn):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503501-saveoptions
  saveOptions_shouldShowUTType(saveOptions: cocoascript.IKSaveOptions, utType: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411300-shouldenableactionforperson
  shouldEnableActionForPerson_identifier(person: cocoascript.ABPerson, identifier: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411304-titleforperson
  titleForPerson_identifier(person: cocoascript.ABPerson, identifier: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494234-pdepanelsfortype
  PDEPanelsForType_withHostInfo(pdeType: cocoascript.NSString, host: cocoascript.NSObject):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494230-pmprinter
  PMPrinter():cocoascript.PMPrinter;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494202-ppdoptionkeyvaluedidchange
  PPDOptionKeyValueDidChange_ppdChoice(option: cocoascript.NSString, choice: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1572039-url
  URL_resourceDataDidBecomeAvailable(sender: cocoascript.NSURL, newBytes: cocoascript.NSData):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1572040-url
  URL_resourceDidFailLoadingWithReason(sender: cocoascript.NSURL, reason: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1572048-urlresourcedidcancelloading
  URLResourceDidCancelLoading(sender: cocoascript.NSURL):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1572036-urlresourcedidfinishloading
  URLResourceDidFinishLoading(sender: cocoascript.NSURL):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494285-application
  application_delegateHandlesKey(sender: cocoascript.NSApplication, key: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1532638-changecolor
  changeColor(sender: cocoascript.NSObject):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1462311-changefont
  changeFont(sender: cocoascript.NSObject):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1458190-commitediting
  commitEditing():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1458181-commiteditingandreturnerror
  commitEditingAndReturnError(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1458179-commiteditingwithdelegate
  commitEditingWithDelegate_didCommitSelector_contextInfo(delegate: cocoascript.NSObject, didCommitSelector: cocoascript.SEL, contextInfo: void):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1428934-controltextdidbeginediting
  controlTextDidBeginEditing(obj: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1428982-controltextdidchange
  controlTextDidChange(obj: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1428847-controltextdidendediting
  controlTextDidEndEditing(obj: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1458076-discardediting
  discardEditing():void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1415986-draggedimage
  draggedImage_beganAt(image: cocoascript.NSImage, screenPoint: cocoascript.NSPoint):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1416014-draggedimage
  draggedImage_endedAt_deposited(image: cocoascript.NSImage, screenPoint: cocoascript.NSPoint, flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1416054-draggedimage
  draggedImage_endedAt_operation(image: cocoascript.NSImage, screenPoint: cocoascript.NSPoint, operation: cocoascript.NSDragOperation):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1416008-draggedimage
  draggedImage_movedTo(image: cocoascript.NSImage, screenPoint: cocoascript.NSPoint):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1415984-draggingsourceoperationmaskforlo
  draggingSourceOperationMaskForLocal(flag: cocoascript.BOOL):cocoascript.NSDragOperation;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1416100-ignoremodifierkeyswhiledragging
  ignoreModifierKeysWhileDragging():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494220-initwithbundle
  initWithBundle(theBundle: cocoascript.NSBundle):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1483574-layer
  layer_shouldInheritContentsScale_fromWindow(layer: cocoascript.CALayer, newScale: cocoascript.CGFloat, window: cocoascript.NSWindow):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1458092-objectdidbeginediting
  objectDidBeginEditing(editor: cocoascript.NSEditor):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1458187-objectdidendediting
  objectDidEndEditing(editor: cocoascript.NSEditor):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494209-pageformat
  pageFormat():cocoascript.PMPageFormat;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1539083-panel
  panel_compareFilename_with_caseSensitive(sender: cocoascript.NSObject, name1: cocoascript.NSString, name2: cocoascript.NSString, caseSensitive: cocoascript.BOOL):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1539080-panel
  panel_directoryDidChange(sender: cocoascript.NSObject, path: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1538970-panel
  panel_isValidFilename(sender: cocoascript.NSObject, filename: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1539030-panel
  panel_shouldShowFilename(sender: cocoascript.NSObject, filename: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494208-panelkind
  panelKind():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494224-panelname
  panelName():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494214-panelview
  panelView():cocoascript.NSView;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1525907-pasteboard
  pasteboard_provideDataForType(sender: cocoascript.NSPasteboard, type: cocoascript.NSPasteboardType):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1532824-pasteboardchangedowner
  pasteboardChangedOwner(sender: cocoascript.NSPasteboard):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494226-ppdfile
  ppdFile():void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494218-printsession
  printSession():cocoascript.PMPrintSession;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494206-printsettings
  printSettings():cocoascript.PMPrintSettings;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494236-printwindowwillclose
  printWindowWillClose(userCanceled: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494216-restorevaluesandreturnerror
  restoreValuesAndReturnError(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494222-savevaluesandreturnerror
  saveValuesAndReturnError(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494210-shouldhide
  shouldHide():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494213-shouldprint
  shouldPrint():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494228-shouldshowhelp
  shouldShowHelp():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494212-summaryinfo
  summaryInfo():cocoascript.NSDictionary;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494232-supportedppdoptionkeys
  supportedPPDOptionKeys():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1539424-tableview
  tableView_writeRows_toPasteboard(tableView: cocoascript.NSTableView, rows: cocoascript.NSArray, pboard: cocoascript.NSPasteboard):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1534415-validmodesforfontpanel
  validModesForFontPanel(fontPanel: cocoascript.NSFontPanel):cocoascript.NSFontPanelModeMask;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1518160-validatemenuitem
  validateMenuItem(menuItem: cocoascript.NSMenuItem):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1524282-validatetoolbaritem
  validateToolbarItem(item: cocoascript.NSToolbarItem):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1483693-view
  view_stringForToolTip_point_userData(view: cocoascript.NSView, tag: cocoascript.NSToolTipTag, point: cocoascript.NSPoint, data: void):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494235-willchangeppdoptionkeyvalue
  willChangePPDOptionKeyValue_ppdChoice(option: cocoascript.NSString, choice: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1494204-willshow
  willShow():void;
  // 
  alloc():cocoascript.NSObject;
  // 
  init():cocoascript.NSObject;
}
}
declare const NSObject: cocoascript.NSObject;

