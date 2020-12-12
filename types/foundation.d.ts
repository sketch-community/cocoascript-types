declare namespace cocoascript {
  /**
   * A representation of the state of your app at a moment in time.
   * doc://com.apple.documentation/documentation/foundation/nsuseractivity
   */
  interface NSUserActivity extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1410714-initwithactivitytype
    initWithActivityType(activityType: cocoascript.NSString):cocoascript.NSUserActivity;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1409240-init
    init():cocoascript.NSUserActivity;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1409611-activitytype
    activityType(): cocoascript.NSString;
    setActivityType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1413375-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1417256-requireduserinfokeys
    requiredUserInfoKeys(): cocoascript.NSString;
    setRequiredUserInfoKeys(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1411706-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1410066-adduserinfoentriesfromdictionary
    addUserInfoEntriesFromDictionary(otherDictionary: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1408791-needssave
    needsSave(): cocoascript.BOOL;
    setNeedsSave(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1616398-contentattributeset
    contentAttributeSet(): cocoascript.CSSearchableItemAttributeSet;
    setContentAttributeSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1408023-keywords
    keywords(): cocoascript.NSString;
    setKeywords(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2980675-persistentidentifier
    persistentIdentifier(): cocoascript.NSUserActivityPersistentIdentifier;
    setPersistentIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/3580315-appclipactivationpayload
    appClipActivationPayload(): cocoascript.APActivationPayload;
    setAppClipActivationPayload(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1410971-eligibleforhandoff
    eligibleForHandoff(): cocoascript.BOOL;
    setEligibleForHandoff(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1417761-eligibleforsearch
    eligibleForSearch(): cocoascript.BOOL;
    setEligibleForSearch(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1414701-eligibleforpublicindexing
    eligibleForPublicIndexing(): cocoascript.BOOL;
    setEligibleForPublicIndexing(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1413745-expirationdate
    expirationDate(): cocoascript.NSDate;
    setExpirationDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1413665-becomecurrent
    becomeCurrent():void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1409596-resigncurrent
    resignCurrent():void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1416401-invalidate
    invalidate():void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1412329-delegate
    delegate(): cocoascript.NSUserActivityDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1409195-supportscontinuationstreams
    supportsContinuationStreams(): cocoascript.BOOL;
    setSupportsContinuationStreams(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1409931-getcontinuationstreamswithcomple
    getContinuationStreamsWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1418086-webpageurl
    webpageURL(): cocoascript.NSURL;
    setWebpageURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2980674-eligibleforprediction
    eligibleForPrediction(): cocoascript.BOOL;
    setEligibleForPrediction(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2976237-suggestedinvocationphrase
    suggestedInvocationPhrase(): cocoascript.NSString;
    setSuggestedInvocationPhrase(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/3552239-shortcutavailability
    shortcutAvailability(): cocoascript.INShortcutAvailabilityOptions;
    setShortcutAvailability(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1690346-interaction
    interaction(): cocoascript.INInteraction;
    setInteraction(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2968463-ndefmessagepayload
    ndefMessagePayload(): cocoascript.NFCNDEFMessage;
    setNdefMessagePayload(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1690596-mapitem
    mapItem(): cocoascript.MKMapItem;
    setMapItem(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2866826-contextidentifierpath
    contextIdentifierPath(): cocoascript.NSString;
    setContextIdentifierPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2935570-detectedbarcodedescriptor
    detectedBarcodeDescriptor(): cocoascript.CIBarcodeDescriptor;
    setDetectedBarcodeDescriptor(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2921646-externalmediacontentidentifier
    externalMediaContentIdentifier(): cocoascript.NSString;
    setExternalMediaContentIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2953056-isclasskitdeeplink
    isClassKitDeepLink(): cocoascript.BOOL;
    setIsClassKitDeepLink(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2875762-referrerurl
    referrerURL(): cocoascript.NSURL;
    setReferrerURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivity/3238062-targetcontentidentifier
    targetContentIdentifier(): cocoascript.NSString;
    setTargetContentIdentifier(): void;
    //
    alloc():cocoascript.NSUserActivity;
    //
    init():cocoascript.NSUserActivity;
  }
}

declare const NSUserActivity: cocoascript.NSUserActivity;
// doc://com.apple.documentation/documentation/foundation/nsuseractivitytypebrowsingweb
declare const NSUserActivityTypeBrowsingWeb: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An iCloud-based container of key-value pairs you use to share data among instances of your app running on a user's connected devices.
   * doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore
   */
  interface NSUbiquitousKeyValueStore extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1413949-defaultstore
    defaultStore(): cocoascript.NSUbiquitousKeyValueStore;
    setDefaultStore(): void;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1412191-arrayforkey
    arrayForKey(aKey: cocoascript.NSString):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1417350-boolforkey
    boolForKey(aKey: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1417800-dataforkey
    dataForKey(aKey: cocoascript.NSString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1416241-dictionaryforkey
    dictionaryForKey(aKey: cocoascript.NSString):cocoascript.NSUbiquitousKeyValueStore;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1409319-doubleforkey
    doubleForKey(aKey: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1413240-longlongforkey
    longLongForKey(aKey: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1407436-objectforkey
    objectForKey(aKey: cocoascript.NSString):cocoascript.NSUbiquitousKeyValueStore;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1418249-stringforkey
    stringForKey(aKey: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1417721-setarray
    setArray_forKey(anArray: cocoascript.NSArray, aKey: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1415054-setbool
    setBool_forKey(value: cocoascript.BOOL, aKey: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1416218-setdata
    setData_forKey(aData: cocoascript.NSData, aKey: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1417155-setdictionary
    setDictionary_forKey(aDictionary: cocoascript.NSUbiquitousKeyValueStore, aKey: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1412608-setdouble
    setDouble_forKey(value: number, aKey: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1407812-setlonglong
    setLongLong_forKey(value: number, aKey: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1416434-setobject
    setObject_forKey(anObject: cocoascript.NSUbiquitousKeyValueStore, aKey: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1414610-setstring
    setString_forKey(aString: cocoascript.NSString, aKey: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1415989-synchronize
    synchronize():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1410916-removeobjectforkey
    removeObjectForKey(aKey: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1411129-dictionaryrepresentation
    dictionaryRepresentation(): cocoascript.id;
    setDictionaryRepresentation(): void;
    //
    alloc():cocoascript.NSUbiquitousKeyValueStore;
    //
    init():cocoascript.NSUbiquitousKeyValueStore;
  }
}

declare const NSUbiquitousKeyValueStore: cocoascript.NSUbiquitousKeyValueStore;
declare namespace cocoascript {
  /**
   * The host app context from which an app extension is invoked.
   * doc://com.apple.documentation/documentation/foundation/nsextensioncontext
   */
  interface NSExtensionContext extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1412773-cancelrequestwitherror
    cancelRequestWithError(error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1411301-completerequestreturningitems
    completeRequestReturningItems_completionHandler(items: cocoascript.NSArray, completionHandler: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1416791-openurl
    openURL_completionHandler(URL: cocoascript.NSURL, completionHandler: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1649133-widgetlargestavailabledisplaymod
    widgetLargestAvailableDisplayMode(): cocoascript.NCWidgetDisplayMode;
    setWidgetLargestAvailableDisplayMode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1649134-widgetactivedisplaymode
    widgetActiveDisplayMode(): cocoascript.NCWidgetDisplayMode;
    setWidgetActiveDisplayMode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1649135-widgetmaximumsizefordisplaymode
    widgetMaximumSizeForDisplayMode(displayMode: cocoascript.NCWidgetDisplayMode):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1414827-inputitems
    inputItems(): cocoascript.NSArray;
    setInputItems(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1648523-mediaplayingstarted
    mediaPlayingStarted():void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1648527-mediaplayingpaused
    mediaPlayingPaused():void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/3180173-intent
    intent(): cocoascript.INIntent;
    setIntent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1649166-hostedviewminimumallowedsize
    hostedViewMinimumAllowedSize(): cocoascript.CGSize;
    setHostedViewMinimumAllowedSize(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1649164-hostedviewmaximumallowedsize
    hostedViewMaximumAllowedSize(): cocoascript.CGSize;
    setHostedViewMaximumAllowedSize(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/2915893-interfaceparametersdescription
    interfaceParametersDescription():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/2968488-notificationactions
    notificationActions(): cocoascript.UNNotificationAction;
    setNotificationActions(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/2143167-completerequestwithbroadcasturl
    completeRequestWithBroadcastURL_broadcastConfiguration_setupInfo(broadcastURL: cocoascript.NSURL, broadcastConfiguration: cocoascript.RPBroadcastConfiguration, setupInfo: cocoascript.NSCoding):void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/2891095-completerequestwithbroadcasturl
    completeRequestWithBroadcastURL_setupInfo(broadcastURL: cocoascript.NSURL, setupInfo: cocoascript.NSCoding):void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/2977624-dismissnotificationcontentextens
    dismissNotificationContentExtension():void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1845240-loadbroadcastingapplicationinfow
    loadBroadcastingApplicationInfoWithCompletion(handler: cocoascript.UIImage):void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/2968489-performnotificationdefaultaction
    performNotificationDefaultAction():void;
    //
    alloc():cocoascript.NSExtensionContext;
    //
    init():cocoascript.NSExtensionContext;
  }
}

declare const NSExtensionContext: cocoascript.NSExtensionContext;
// doc://com.apple.documentation/documentation/foundation/nsextensionhostdidbecomeactivenotification
declare const NSExtensionHostDidBecomeActiveNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsextensionhostwillresignactivenotification
declare const NSExtensionHostWillResignActiveNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsextensionhostdidenterbackgroundnotification
declare const NSExtensionHostDidEnterBackgroundNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsextensionhostwillenterforegroundnotification
declare const NSExtensionHostWillEnterForegroundNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The interface an app extension uses to respond to a request from a host app.
   * doc://com.apple.documentation/documentation/foundation/nsextensionrequesthandling
   */
  interface NSExtensionRequestHandling extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsextensionrequesthandling/1413395-beginrequestwithextensioncontext
    beginRequestWithExtensionContext(context: cocoascript.NSExtensionContext):void;
  }
}
declare namespace cocoascript {
  /**
   * A server that your app uses to provide a spell checker service to other apps running in the system.
   * doc://com.apple.documentation/documentation/foundation/nsspellserver
   */
  interface NSSpellServer extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsspellserver/1414240-delegate
    delegate(): cocoascript.NSSpellServerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsspellserver/1411187-registerlanguage
    registerLanguage_byVendor(language: cocoascript.NSString, vendor: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsspellserver/1414343-run
    run():void;
    // doc://com.apple.documentation/documentation/foundation/nsspellserver/1412254-iswordinuserdictionaries
    isWordInUserDictionaries_caseSensitive(word: cocoascript.NSString, flag: cocoascript.BOOL):cocoascript.BOOL;
    //
    alloc():cocoascript.NSSpellServer;
    //
    init():cocoascript.NSSpellServer;
  }
}

declare const NSSpellServer: cocoascript.NSSpellServer;
declare namespace cocoascript {
  /**
   * A string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.
   * doc://com.apple.documentation/documentation/foundation/nsattributedstring
   */
  interface NSAttributedString extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1407481-initwithstring
    initWithString(str: cocoascript.NSString):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1408136-initwithstring
    initWithString_attributes(str: cocoascript.NSString, attrs: cocoascript.NSAttributedString):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1415342-initwithattributedstring
    initWithAttributedString(attrStr: cocoascript.NSAttributedString):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1524613-initwithdata
    initWithData_options_documentAttributes_error(data: cocoascript.NSData, options: cocoascript.NSAttributedString, dict: cocoascript.NSAttributedString, error: cocoascript.NSError):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1534329-initwithdocformat
    initWithDocFormat_documentAttributes(data: cocoascript.NSData, dict: cocoascript.NSAttributedString):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1525953-initwithhtml
    initWithHTML_documentAttributes(data: cocoascript.NSData, dict: cocoascript.NSAttributedString):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1524624-initwithhtml
    initWithHTML_baseURL_documentAttributes(data: cocoascript.NSData, base: cocoascript.NSURL, dict: cocoascript.NSAttributedString):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1535412-initwithhtml
    initWithHTML_options_documentAttributes(data: cocoascript.NSData, options: cocoascript.NSAttributedString, dict: cocoascript.NSAttributedString):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1532912-initwithrtf
    initWithRTF_documentAttributes(data: cocoascript.NSData, dict: cocoascript.NSAttributedString):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1530987-initwithrtfd
    initWithRTFD_documentAttributes(data: cocoascript.NSData, dict: cocoascript.NSAttributedString):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1533594-initwithrtfdfilewrapper
    initWithRTFDFileWrapper_documentAttributes(wrapper: cocoascript.NSFileWrapper, dict: cocoascript.NSAttributedString):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1530490-initwithurl
    initWithURL_options_documentAttributes_error(url: cocoascript.NSURL, options: cocoascript.NSAttributedString, dict: cocoascript.NSAttributedString, error: cocoascript.NSError):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1412616-string
    string(): cocoascript.NSString;
    setString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1418432-length
    length(): cocoascript.NSUInteger;
    setLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1415682-attributesatindex
    attributesAtIndex_effectiveRange(location: cocoascript.NSUInteger, range: cocoascript.NSRangePointer):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1410494-attributesatindex
    attributesAtIndex_longestEffectiveRange_inRange(location: cocoascript.NSUInteger, range: cocoascript.NSRangePointer, rangeLimit: cocoascript.NSRange):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1408174-attribute
    attribute_atIndex_effectiveRange(attrName: cocoascript.NSAttributedStringKey, location: cocoascript.NSUInteger, range: cocoascript.NSRangePointer):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1412701-attribute
    attribute_atIndex_longestEffectiveRange_inRange(attrName: cocoascript.NSAttributedStringKey, location: cocoascript.NSUInteger, range: cocoascript.NSRangePointer, rangeLimit: cocoascript.NSRange):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1414808-isequaltoattributedstring
    isEqualToAttributedString(other: cocoascript.NSAttributedString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1414283-attributedsubstringfromrange
    attributedSubstringFromRange(range: cocoascript.NSRange):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1412461-enumerateattribute
    enumerateAttribute_inRange_options_usingBlock(attrName: cocoascript.NSAttributedStringKey, enumerationRange: cocoascript.NSRange, opts: cocoascript.NSAttributedStringEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1412070-enumerateattributesinrange
    enumerateAttributesInRange_options_usingBlock(enumerationRange: cocoascript.NSRange, opts: cocoascript.NSAttributedStringEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1528371-fontattributesinrange
    fontAttributesInRange(range: cocoascript.NSRange):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1524469-rulerattributesinrange
    rulerAttributesInRange(range: cocoascript.NSRange):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1534748-doubleclickatindex
    doubleClickAtIndex(location: cocoascript.NSUInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1526887-linebreakbeforeindex
    lineBreakBeforeIndex_withinRange(location: cocoascript.NSUInteger, aRange: cocoascript.NSRange):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1534114-linebreakbyhyphenatingbeforeinde
    lineBreakByHyphenatingBeforeIndex_withinRange(location: cocoascript.NSUInteger, aRange: cocoascript.NSRange):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1535305-nextwordfromindex
    nextWordFromIndex_forward(location: cocoascript.NSUInteger, isForward: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1527303-itemnumberintextlist
    itemNumberInTextList_atIndex(list: cocoascript.NSTextList, location: cocoascript.NSUInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1534045-rangeoftextblock
    rangeOfTextBlock_atIndex(block: cocoascript.NSTextBlock, location: cocoascript.NSUInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1525314-rangeoftextlist
    rangeOfTextList_atIndex(list: cocoascript.NSTextList, location: cocoascript.NSUInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1534365-rangeoftexttable
    rangeOfTextTable_atIndex(table: cocoascript.NSTextTable, location: cocoascript.NSUInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1534090-datafromrange
    dataFromRange_documentAttributes_error(range: cocoascript.NSRange, dict: cocoascript.NSAttributedString, error: cocoascript.NSError):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1530461-filewrapperfromrange
    fileWrapperFromRange_documentAttributes_error(range: cocoascript.NSRange, dict: cocoascript.NSAttributedString, error: cocoascript.NSError):cocoascript.NSFileWrapper;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1528592-docformatfromrange
    docFormatFromRange_documentAttributes(range: cocoascript.NSRange, dict: cocoascript.NSAttributedString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1535158-rtffromrange
    RTFFromRange_documentAttributes(range: cocoascript.NSRange, dict: cocoascript.NSAttributedString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1530578-rtfdfromrange
    RTFDFromRange_documentAttributes(range: cocoascript.NSRange, dict: cocoascript.NSAttributedString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1527502-rtfdfilewrapperfromrange
    RTFDFileWrapperFromRange_documentAttributes(range: cocoascript.NSRange, dict: cocoascript.NSAttributedString):cocoascript.NSFileWrapper;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1529478-drawatpoint
    drawAtPoint(point: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1531631-drawinrect
    drawInRect(rect: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1524971-drawwithrect
    drawWithRect_options_context(rect: cocoascript.CGRect, options: cocoascript.NSStringDrawingOptions, context: cocoascript.NSStringDrawingContext):void;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1528362-size
    size():cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1529154-boundingrectwithsize
    boundingRectWithSize_options_context(size: cocoascript.CGSize, options: cocoascript.NSStringDrawingOptions, context: cocoascript.NSStringDrawingContext):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1525086-containsattachmentsinrange
    containsAttachmentsInRange(range: cocoascript.NSRange):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1535409-texttypes
    textTypes(): cocoascript.NSString;
    setTextTypes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1528269-textunfilteredtypes
    textUnfilteredTypes(): cocoascript.NSString;
    setTextUnfilteredTypes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1525939-initwithpath
    initWithPath_documentAttributes(path: cocoascript.NSString, dict: cocoascript.NSDictionary):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1533913-initwithurl
    initWithURL_documentAttributes(url: cocoascript.NSURL, dict: cocoascript.NSDictionary):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1620492-initwithfileurl
    initWithFileURL_options_documentAttributes_error(url: cocoascript.NSURL, options: cocoascript.NSDictionary, dict: cocoascript.NSDictionary, error: cocoascript.NSError):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1533869-containsattachments
    containsAttachments(): cocoascript.BOOL;
    setContainsAttachments(): void;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1535059-urlatindex
    URLAtIndex_effectiveRange(location: cocoascript.NSUInteger, effectiveRange: cocoascript.NSRangePointer):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1525782-drawwithrect
    drawWithRect_options(rect: cocoascript.NSRect, options: cocoascript.NSStringDrawingOptions):void;
    // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1532013-boundingrectwithsize
    boundingRectWithSize_options(size: cocoascript.NSSize, options: cocoascript.NSStringDrawingOptions):cocoascript.NSRect;
    //
    alloc():cocoascript.NSAttributedString;
    //
    init():cocoascript.NSAttributedString;
  }
}

declare const NSAttributedString: cocoascript.NSAttributedString;
// doc://com.apple.documentation/documentation/appkit/nsunderlinebywordmask
declare const NSUnderlineByWordMask: cocoascript.NSUInteger;
declare namespace cocoascript {
  /**
   * A mutable string object that also contains attributes (such as visual style, hyperlinks, or accessibility data) associated with various portions of its text content.
   * doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring
   */
  interface NSMutableAttributedString extends NSAttributedString {
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1416955-mutablestring
    mutableString(): cocoascript.NSMutableString;
    setMutableString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1418451-replacecharactersinrange
    replaceCharactersInRange_withString(range: cocoascript.NSRange, str: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1410610-deletecharactersinrange
    deleteCharactersInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1412179-setattributes
    setAttributes_range(attrs: cocoascript.NSMutableAttributedString, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1417080-addattribute
    addAttribute_value_range(name: cocoascript.NSAttributedStringKey, value: cocoascript.NSMutableAttributedString, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1414304-addattributes
    addAttributes_range(attrs: cocoascript.NSMutableAttributedString, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1409691-removeattribute
    removeAttribute_range(name: cocoascript.NSAttributedStringKey, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1532734-applyfonttraits
    applyFontTraits_range(traitMask: cocoascript.NSFontTraitMask, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1530762-setalignment
    setAlignment_range(alignment: cocoascript.NSTextAlignment, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1532923-setbasewritingdirection
    setBaseWritingDirection_range(writingDirection: cocoascript.NSWritingDirection, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1529906-subscriptrange
    subscriptRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1533592-superscriptrange
    superscriptRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1530210-unscriptrange
    unscriptRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1417879-appendattributedstring
    appendAttributedString(attrString: cocoascript.NSAttributedString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1414947-insertattributedstring
    insertAttributedString_atIndex(attrString: cocoascript.NSAttributedString, loc: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1417045-replacecharactersinrange
    replaceCharactersInRange_withAttributedString(range: cocoascript.NSRange, attrString: cocoascript.NSAttributedString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1411894-setattributedstring
    setAttributedString(attrString: cocoascript.NSAttributedString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1411853-beginediting
    beginEditing():void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1416707-endediting
    endEditing():void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1508389-updateattachmentsfrompath
    updateAttachmentsFromPath(path: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1533823-fixattributesinrange
    fixAttributesInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1526389-fixattachmentattributeinrange
    fixAttachmentAttributeInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1534303-fixfontattributeinrange
    fixFontAttributeInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1527082-fixparagraphstyleattributeinrang
    fixParagraphStyleAttributeInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1535465-readfromdata
    readFromData_options_documentAttributes_error(data: cocoascript.NSData, opts: cocoascript.NSMutableAttributedString, dict: cocoascript.NSMutableAttributedString, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1524892-readfromurl
    readFromURL_options_documentAttributes_error(url: cocoascript.NSURL, opts: cocoascript.NSMutableAttributedString, dict: cocoascript.NSMutableAttributedString, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1525145-readfromdata
    readFromData_options_documentAttributes(data: cocoascript.NSData, options: cocoascript.NSDictionary, dict: cocoascript.NSDictionary):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1530903-readfromurl
    readFromURL_options_documentAttributes(url: cocoascript.NSURL, options: cocoascript.NSDictionary, dict: cocoascript.NSDictionary):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1620496-readfromfileurl
    readFromFileURL_options_documentAttributes_error(url: cocoascript.NSURL, opts: cocoascript.NSDictionary, dict: cocoascript.NSDictionary, error: cocoascript.NSError):cocoascript.BOOL;
    //
    alloc():cocoascript.NSMutableAttributedString;
    //
    init():cocoascript.NSMutableAttributedString;
  }
}

declare const NSMutableAttributedString: cocoascript.NSMutableAttributedString;
declare namespace cocoascript {
  /**
   * A protocol that enables an object to be encoded and decoded for archiving and distribution.
   * doc://com.apple.documentation/documentation/foundation/nscoding
   */
  interface NSCoding {
    // doc://com.apple.documentation/documentation/foundation/nscoding/1416145-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSCoding;
    // doc://com.apple.documentation/documentation/foundation/nscoding/1413933-encodewithcoder
    encodeWithCoder(coder: cocoascript.NSCoder):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface to the user’s defaults database, where you store key-value pairs persistently across launches of your app.
   * doc://com.apple.documentation/documentation/foundation/nsuserdefaults
   */
  interface NSUserDefaults extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1416603-standarduserdefaults
    standardUserDefaults(): cocoascript.NSUserDefaults;
    setStandardUserDefaults(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414356-init
    init():cocoascript.NSUserDefaults;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1409957-initwithsuitename
    initWithSuiteName(suitename: cocoascript.NSString):cocoascript.NSUserDefaults;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1410095-objectforkey
    objectForKey(defaultName: cocoascript.NSString):cocoascript.NSUserDefaults;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408648-urlforkey
    URLForKey(defaultName: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414792-arrayforkey
    arrayForKey(defaultName: cocoascript.NSString):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408563-dictionaryforkey
    dictionaryForKey(defaultName: cocoascript.NSString):cocoascript.NSUserDefaults;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1416700-stringforkey
    stringForKey(defaultName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1416414-stringarrayforkey
    stringArrayForKey(defaultName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1409590-dataforkey
    dataForKey(defaultName: cocoascript.NSString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1416388-boolforkey
    boolForKey(defaultName: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1407405-integerforkey
    integerForKey(defaultName: cocoascript.NSString):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414027-floatforkey
    floatForKey(defaultName: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1416581-doubleforkey
    doubleForKey(defaultName: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1415919-dictionaryrepresentation
    dictionaryRepresentation():cocoascript.NSUserDefaults;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414067-setobject
    setObject_forKey(value: cocoascript.NSUserDefaults, defaultName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1413320-setfloat
    setFloat_forKey(value: number, defaultName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408646-setdouble
    setDouble_forKey(value: number, defaultName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1413614-setinteger
    setInteger_forKey(value: cocoascript.NSInteger, defaultName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408905-setbool
    setBool_forKey(value: cocoascript.BOOL, defaultName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414194-seturl
    setURL_forKey(url: cocoascript.NSURL, defaultName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1411182-removeobjectforkey
    removeObjectForKey(defaultName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1410294-addsuitenamed
    addSuiteNamed(suiteName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408047-removesuitenamed
    removeSuiteNamed(suiteName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1417065-registerdefaults
    registerDefaults(registrationDictionary: cocoascript.NSUserDefaults):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1412197-persistentdomainforname
    persistentDomainForName(domainName: cocoascript.NSString):cocoascript.NSUserDefaults;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408187-setpersistentdomain
    setPersistentDomain_forName(domain: cocoascript.NSUserDefaults, domainName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1417339-removepersistentdomainforname
    removePersistentDomainForName(domainName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1589081-persistentdomainnames
    persistentDomainNames():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414231-volatiledomainnames
    volatileDomainNames(): cocoascript.NSString;
    setVolatileDomainNames(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1409592-volatiledomainforname
    volatileDomainForName(domainName: cocoascript.NSString):cocoascript.NSUserDefaults;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1413720-setvolatiledomain
    setVolatileDomain_forName(domain: cocoascript.NSUserDefaults, domainName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1415955-removevolatiledomainforname
    removeVolatileDomainForName(domainName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408635-objectisforcedforkey
    objectIsForcedForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1416306-objectisforcedforkey
    objectIsForcedForKey_inDomain(key: cocoascript.NSString, domain: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1589066-initwithuser
    initWithUser(username: cocoascript.NSString):cocoascript.NSUserDefaults;
    // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414005-synchronize
    synchronize():cocoascript.BOOL;
    //
    alloc():cocoascript.NSUserDefaults;
    //
    init():cocoascript.NSUserDefaults;
  }
}

declare const NSUserDefaults: cocoascript.NSUserDefaults;
// doc://com.apple.documentation/documentation/foundation/nsargumentdomain
declare const NSArgumentDomain: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsglobaldomain
declare const NSGlobalDomain: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsregistrationdomain
declare const NSRegistrationDomain: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that represents the location of a resource, such as an item on a remote server or the path to a local file.
   * doc://com.apple.documentation/documentation/foundation/nsurl
   */
  interface NSURL extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurl/1413146-initwithstring
    initWithString(URLString: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1417949-initwithstring
    initWithString_relativeToURL(URLString: cocoascript.NSString, baseURL: cocoascript.NSURL):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1417505-initfileurlwithpath
    initFileURLWithPath_isDirectory(path: cocoascript.NSString, isDir: cocoascript.BOOL):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1415077-initfileurlwithpath
    initFileURLWithPath_relativeToURL(path: cocoascript.NSString, baseURL: cocoascript.NSURL):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1417932-initfileurlwithpath
    initFileURLWithPath_isDirectory_relativeToURL(path: cocoascript.NSString, isDir: cocoascript.BOOL, baseURL: cocoascript.NSURL):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1410301-initfileurlwithpath
    initFileURLWithPath(path: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1413475-initbyresolvingbookmarkdata
    initByResolvingBookmarkData_options_relativeToURL_bookmarkDataIsStale_error(bookmarkData: cocoascript.NSData, options: cocoascript.NSURLBookmarkResolutionOptions, relativeURL: cocoascript.NSURL, isStale: cocoascript.BOOL, error: cocoascript.NSError):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1415117-getfilesystemrepresentation
    getFileSystemRepresentation_maxLength(buffer: string, maxBufferLength: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1411210-initfileurlwithfilesystemreprese
    initFileURLWithFileSystemRepresentation_isDirectory_relativeToURL(path: string, isDir: cocoascript.BOOL, baseURL: cocoascript.NSURL):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1410750-initabsoluteurlwithdatarepresent
    initAbsoluteURLWithDataRepresentation_relativeToURL(data: cocoascript.NSData, baseURL: cocoascript.NSURL):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1416851-initwithdatarepresentation
    initWithDataRepresentation_relativeToURL(data: cocoascript.NSData, baseURL: cocoascript.NSURL):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1407656-datarepresentation
    dataRepresentation(): cocoascript.NSData;
    setDataRepresentation(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1410597-checkresourceisreachableandretur
    checkResourceIsReachableAndReturnError(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1408507-isfilereferenceurl
    isFileReferenceURL():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1408782-fileurl
    fileURL(): cocoascript.BOOL;
    setFileURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1409868-absolutestring
    absoluteString(): cocoascript.NSString;
    setAbsoluteString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1414266-absoluteurl
    absoluteURL(): cocoascript.NSURL;
    setAbsoluteURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1412311-baseurl
    baseURL(): cocoascript.NSURL;
    setBaseURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1412925-filesystemrepresentation
    fileSystemRepresentation(): string;
    setFileSystemRepresentation(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1413775-fragment
    fragment(): cocoascript.NSString;
    setFragment(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1413640-host
    host(): cocoascript.NSString;
    setHost(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1417444-lastpathcomponent
    lastPathComponent(): cocoascript.NSString;
    setLastPathComponent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1412797-parameterstring
    parameterString(): cocoascript.NSString;
    setParameterString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1412096-password
    password(): cocoascript.NSString;
    setPassword(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1408809-path
    path(): cocoascript.NSString;
    setPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1407365-pathcomponents
    pathComponents(): cocoascript.NSString;
    setPathComponents(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1410208-pathextension
    pathExtension(): cocoascript.NSString;
    setPathExtension(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1413455-port
    port(): cocoascript.NSNumber;
    setPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1407543-query
    query(): cocoascript.NSString;
    setQuery(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1410263-relativepath
    relativePath(): cocoascript.NSString;
    setRelativePath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1411417-relativestring
    relativeString(): cocoascript.NSString;
    setRelativeString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1415309-resourcespecifier
    resourceSpecifier(): cocoascript.NSString;
    setResourceSpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1413437-scheme
    scheme(): cocoascript.NSString;
    setScheme(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1411073-standardizedurl
    standardizedURL(): cocoascript.NSURL;
    setStandardizedURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1418335-user
    user(): cocoascript.NSString;
    setUser(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1417657-resourcevaluesforkeys
    resourceValuesForKeys_error(keys: cocoascript.NSURLResourceKey, error: cocoascript.NSError):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1408874-getresourcevalue
    getResourceValue_forKey_error(value: cocoascript.NSURL, key: cocoascript.NSURLResourceKey, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1413819-setresourcevalue
    setResourceValue_forKey_error(value: cocoascript.NSURL, key: cocoascript.NSURLResourceKey, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1408208-setresourcevalues
    setResourceValues_error(keyedValues: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1417078-removeallcachedresourcevalues
    removeAllCachedResourceValues():void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1410758-removecachedresourcevalueforkey
    removeCachedResourceValueForKey(key: cocoascript.NSURLResourceKey):void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1411094-settemporaryresourcevalue
    setTemporaryResourceValue_forKey(value: cocoascript.NSURL, key: cocoascript.NSURLResourceKey):void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1408442-filepathurl
    filePathURL(): cocoascript.NSURL;
    setFilePathURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1408631-filereferenceurl
    fileReferenceURL():cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1410614-urlbyappendingpathcomponent
    URLByAppendingPathComponent(pathComponent: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1413953-urlbyappendingpathcomponent
    URLByAppendingPathComponent_isDirectory(pathComponent: cocoascript.NSString, isDirectory: cocoascript.BOOL):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1417082-urlbyappendingpathextension
    URLByAppendingPathExtension(pathExtension: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1411592-urlbydeletinglastpathcomponent
    URLByDeletingLastPathComponent(): cocoascript.NSURL;
    setURLByDeletingLastPathComponent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1412357-urlbydeletingpathextension
    URLByDeletingPathExtension(): cocoascript.NSURL;
    setURLByDeletingPathExtension(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1415965-urlbyresolvingsymlinksinpath
    URLByResolvingSymlinksInPath(): cocoascript.NSURL;
    setURLByResolvingSymlinksInPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1414302-urlbystandardizingpath
    URLByStandardizingPath(): cocoascript.NSURL;
    setURLByStandardizingPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1411475-hasdirectorypath
    hasDirectoryPath(): cocoascript.BOOL;
    setHasDirectoryPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1417795-bookmarkdatawithoptions
    bookmarkDataWithOptions_includingResourceValuesForKeys_relativeToURL_error(options: cocoascript.NSURLBookmarkCreationOptions, keys: cocoascript.NSURLResourceKey, relativeURL: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1417051-startaccessingsecurityscopedreso
    startAccessingSecurityScopedResource():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1413736-stopaccessingsecurityscopedresou
    stopAccessingSecurityScopedResource():void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1410411-checkpromiseditemisreachableandr
    checkPromisedItemIsReachableAndReturnError(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1414238-getpromiseditemresourcevalue
    getPromisedItemResourceValue_forKey_error(value: cocoascript.NSURL, key: cocoascript.NSURLResourceKey, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1407746-promiseditemresourcevaluesforkey
    promisedItemResourceValuesForKeys_error(keys: cocoascript.NSURLResourceKey, error: cocoascript.NSError):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1532980-writetopasteboard
    writeToPasteboard(pasteBoard: cocoascript.NSPasteboard):void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1414181-initwithscheme
    initWithScheme_host_path(scheme: cocoascript.NSString, host: cocoascript.NSString, path: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1572051-urlhandleusingcache
    URLHandleUsingCache(shouldUseCache: cocoascript.BOOL):cocoascript.NSURLHandle;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1572043-loadresourcedatanotifyingclient
    loadResourceDataNotifyingClient_usingCache(client: cocoascript.NSURL, shouldUseCache: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1572037-resourcedatausingcache
    resourceDataUsingCache(shouldUseCache: cocoascript.BOOL):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1572038-setresourcedata
    setResourceData(data: cocoascript.NSData):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1572044-propertyforkey
    propertyForKey(propertyKey: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/1572041-setproperty
    setProperty_forKey(property: cocoascript.NSURL, propertyKey: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/3564810-urlbyappendingpathcomponent
    URLByAppendingPathComponent_conformingToType(partialName: cocoascript.NSString, contentType: cocoascript.UTType):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurl/3584837-urlbyappendingpathextensionforty
    URLByAppendingPathExtensionForType(contentType: cocoascript.UTType):cocoascript.NSURL;
    //
    alloc():cocoascript.NSURL;
    //
    init():cocoascript.NSURL;
  }
}

declare const NSURL: cocoascript.NSURL;
// doc://com.apple.documentation/documentation/foundation/nsurlfileprotectionkey
declare const NSURLFileProtectionKey: cocoascript.NSURLResourceKey;
declare namespace cocoascript {
  /**
   * A universally unique value that can be used to identify types, interfaces, and other items.
   * doc://com.apple.documentation/documentation/foundation/nsuuid
   */
  interface NSUUID extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsuuid/1415797-init
    init():cocoascript.NSUUID;
    // doc://com.apple.documentation/documentation/foundation/nsuuid/1411662-initwithuuidstring
    initWithUUIDString(string: cocoascript.NSString):cocoascript.NSUUID;
    // doc://com.apple.documentation/documentation/foundation/nsuuid/1417039-initwithuuidbytes
    initWithUUIDBytes(bytes: string):cocoascript.NSUUID;
    // doc://com.apple.documentation/documentation/foundation/nsuuid/1411420-getuuidbytes
    getUUIDBytes(uuid: string):void;
    // doc://com.apple.documentation/documentation/foundation/nsuuid/1416585-uuidstring
    UUIDString(): cocoascript.NSString;
    setUUIDString(): void;
    //
    alloc():cocoascript.NSUUID;
    //
    init():cocoascript.NSUUID;
  }
}

declare const NSUUID: cocoascript.NSUUID;
declare namespace cocoascript {
  /**
   * A mechanism for registering handler routines for specific types of Apple events and dispatching events to those handlers.
   * doc://com.apple.documentation/documentation/foundation/nsappleeventmanager
   */
  interface NSAppleEventManager extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1411880-removeeventhandlerforeventclass
    removeEventHandlerForEventClass_andEventID(eventClass: cocoascript.AEEventClass, eventID: cocoascript.AEEventID):void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1416131-seteventhandler
    setEventHandler_andSelector_forEventClass_andEventID(handler: cocoascript.NSAppleEventManager, handleEventSelector: cocoascript.SEL, eventClass: cocoascript.AEEventClass, eventID: cocoascript.AEEventID):void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1409260-dispatchrawappleevent
    dispatchRawAppleEvent_withRawReply_handlerRefCon(theAppleEvent: cocoascript.AppleEvent, theReply: cocoascript.AppleEvent, handlerRefCon: cocoascript.SRefCon):void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1410477-appleeventforsuspensionid
    appleEventForSuspensionID(suspensionID: cocoascript.NSAppleEventManagerSuspensionID):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1414690-currentappleevent
    currentAppleEvent(): cocoascript.NSAppleEventDescriptor;
    setCurrentAppleEvent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1413207-currentreplyappleevent
    currentReplyAppleEvent(): cocoascript.NSAppleEventDescriptor;
    setCurrentReplyAppleEvent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1415286-replyappleeventforsuspensionid
    replyAppleEventForSuspensionID(suspensionID: cocoascript.NSAppleEventManagerSuspensionID):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1412315-resumewithsuspensionid
    resumeWithSuspensionID(suspensionID: cocoascript.NSAppleEventManagerSuspensionID):void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1415997-setcurrentappleeventandreplyeven
    setCurrentAppleEventAndReplyEventWithSuspensionID(suspensionID: cocoascript.NSAppleEventManagerSuspensionID):void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1413501-suspendcurrentappleevent
    suspendCurrentAppleEvent():cocoascript.NSAppleEventManagerSuspensionID;
    //
    alloc():cocoascript.NSAppleEventManager;
    //
    init():cocoascript.NSAppleEventManager;
  }
}

declare const NSAppleEventManager: cocoascript.NSAppleEventManager;
declare namespace cocoascript {
  /**
   * A representation of the code and resources stored in a bundle directory on disk.
   * doc://com.apple.documentation/documentation/foundation/nsbundle
   */
  interface NSBundle extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1410786-mainbundle
    mainBundle(): cocoascript.NSBundle;
    setMainBundle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1408056-allframeworks
    allFrameworks(): cocoascript.NSBundle;
    setAllFrameworks(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1413705-allbundles
    allBundles(): cocoascript.NSBundle;
    setAllBundles(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1409352-initwithurl
    initWithURL(url: cocoascript.NSURL):cocoascript.NSBundle;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1412741-initwithpath
    initWithPath(path: cocoascript.NSString):cocoascript.NSBundle;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1618147-loadnibnamed
    loadNibNamed_owner_options(name: cocoascript.NSString, owner: cocoascript.NSBundle, options: cocoascript.NSBundle):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1402909-loadnibnamed
    loadNibNamed_owner_topLevelObjects(nibName: cocoascript.NSNibName, owner: cocoascript.NSBundle, topLevelObjects: cocoascript.NSArray):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1402910-loadnibfile
    loadNibFile_externalNameTable_withZone(fileName: cocoascript.NSString, context: cocoascript.NSDictionary, zone: cocoascript.NSZone):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1416712-urlforresource
    URLForResource_withExtension_subdirectory(name: cocoascript.NSString, ext: cocoascript.NSString, subpath: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1411540-urlforresource
    URLForResource_withExtension(name: cocoascript.NSString, ext: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1407424-urlsforresourceswithextension
    URLsForResourcesWithExtension_subdirectory(ext: cocoascript.NSString, subpath: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1417378-urlforresource
    URLForResource_withExtension_subdirectory_localization(name: cocoascript.NSString, ext: cocoascript.NSString, subpath: cocoascript.NSString, localizationName: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1414688-urlsforresourceswithextension
    URLsForResourcesWithExtension_subdirectory_localization(ext: cocoascript.NSString, subpath: cocoascript.NSString, localizationName: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1410989-pathforresource
    pathForResource_ofType(name: cocoascript.NSString, ext: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1409670-pathforresource
    pathForResource_ofType_inDirectory(name: cocoascript.NSString, ext: cocoascript.NSString, subpath: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1413471-pathforresource
    pathForResource_ofType_inDirectory_forLocalization(name: cocoascript.NSString, ext: cocoascript.NSString, subpath: cocoascript.NSString, localizationName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1413058-pathsforresourcesoftype
    pathsForResourcesOfType_inDirectory(ext: cocoascript.NSString, subpath: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1416940-pathsforresourcesoftype
    pathsForResourcesOfType_inDirectory_forLocalization(ext: cocoascript.NSString, subpath: cocoascript.NSString, localizationName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1519886-urlforimageresource
    URLForImageResource(name: cocoascript.NSImageName):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1519854-pathforimageresource
    pathForImageResource(name: cocoascript.NSImageName):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1519901-imageforresource
    imageForResource(name: cocoascript.NSImageName):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1477280-pathforsoundresource
    pathForSoundResource(name: cocoascript.NSSoundName):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1417694-localizedstringforkey
    localizedStringForKey_value_table(key: cocoascript.NSString, value: cocoascript.NSString, tableName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1500918-contexthelpforkey
    contextHelpForKey(key: cocoascript.NSHelpManagerContextHelpKey):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1414821-resourceurl
    resourceURL(): cocoascript.NSURL;
    setResourceURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1410470-executableurl
    executableURL(): cocoascript.NSURL;
    setExecutableURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1417617-privateframeworksurl
    privateFrameworksURL(): cocoascript.NSURL;
    setPrivateFrameworksURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1411774-sharedframeworksurl
    sharedFrameworksURL(): cocoascript.NSURL;
    setSharedFrameworksURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1409603-builtinpluginsurl
    builtInPlugInsURL(): cocoascript.NSURL;
    setBuiltInPlugInsURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1411412-urlforauxiliaryexecutable
    URLForAuxiliaryExecutable(executableName: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1416823-sharedsupporturl
    sharedSupportURL(): cocoascript.NSURL;
    setSharedSupportURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1407276-appstorereceipturl
    appStoreReceiptURL(): cocoascript.NSURL;
    setAppStoreReceiptURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1417723-resourcepath
    resourcePath(): cocoascript.NSString;
    setResourcePath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1409078-executablepath
    executablePath(): cocoascript.NSString;
    setExecutablePath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1415562-privateframeworkspath
    privateFrameworksPath(): cocoascript.NSString;
    setPrivateFrameworksPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1417226-sharedframeworkspath
    sharedFrameworksPath(): cocoascript.NSString;
    setSharedFrameworksPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1408900-builtinpluginspath
    builtInPlugInsPath(): cocoascript.NSString;
    setBuiltInPlugInsPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1415214-pathforauxiliaryexecutable
    pathForAuxiliaryExecutable(executableName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1411609-sharedsupportpath
    sharedSupportPath(): cocoascript.NSString;
    setSharedSupportPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1415654-bundleurl
    bundleURL(): cocoascript.NSURL;
    setBundleURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1407973-bundlepath
    bundlePath(): cocoascript.NSString;
    setBundlePath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1418023-bundleidentifier
    bundleIdentifier(): cocoascript.NSString;
    setBundleIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1413477-infodictionary
    infoDictionary(): cocoascript.id;
    setInfoDictionary(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1408696-objectforinfodictionarykey
    objectForInfoDictionaryKey(key: cocoascript.NSString):cocoascript.NSBundle;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1417415-localizations
    localizations(): cocoascript.NSString;
    setLocalizations(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1413220-preferredlocalizations
    preferredLocalizations(): cocoascript.NSString;
    setPreferredLocalizations(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1417526-developmentlocalization
    developmentLocalization(): cocoascript.NSString;
    setDevelopmentLocalization(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1407645-localizedinfodictionary
    localizedInfoDictionary(): cocoascript.id;
    setLocalizedInfoDictionary(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1614845-setpreservationpriority
    setPreservationPriority_forTags(priority: number, tags: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1614839-preservationpriorityfortag
    preservationPriorityForTag(tag: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1407299-classnamed
    classNamed(className: cocoascript.NSString):cocoascript.Class;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1409048-principalclass
    principalClass(): cocoascript.Class;
    setPrincipalClass(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1415499-executablearchitectures
    executableArchitectures(): cocoascript.NSNumber;
    setExecutableArchitectures(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1415083-preflightandreturnerror
    preflightAndReturnError(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1415927-load
    load():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1411819-loadandreturnerror
    loadAndReturnError(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1412388-unload
    unload():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsbundle/1413594-loaded
    loaded(): cocoascript.BOOL;
    setLoaded(): void;
    //
    alloc():cocoascript.NSBundle;
    //
    init():cocoascript.NSBundle;
  }
}

declare const NSBundle: cocoascript.NSBundle;
// doc://com.apple.documentation/documentation/foundation/nsloadedclasses
declare const NSLoadedClasses: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A protocol that objects adopt to provide functional copies of themselves.
   * doc://com.apple.documentation/documentation/foundation/nscopying
   */
  interface NSCopying {
    // doc://com.apple.documentation/documentation/foundation/nscopying/1410311-copywithzone
    copyWithZone(zone: cocoascript.NSZone):cocoascript.NSCopying;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsuseractivitypersistentidentifier
  type NSUserActivityPersistentIdentifier = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * The interface through which a user activity instance notifies its delegate of updates.
   * doc://com.apple.documentation/documentation/foundation/nsuseractivitydelegate
   */
  interface NSUserActivityDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsuseractivitydelegate/1407386-useractivity
    userActivity_didReceiveInputStream_outputStream(userActivity: cocoascript.NSUserActivity, inputStream: cocoascript.NSInputStream, outputStream: cocoascript.NSOutputStream):void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivitydelegate/1413276-useractivitywascontinued
    userActivityWasContinued(userActivity: cocoascript.NSUserActivity):void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivitydelegate/1414848-useractivitywillsave
    userActivityWillSave(userActivity: cocoascript.NSUserActivity):void;
  }
}
declare namespace cocoascript {
  /**
   * A static, plain-text Unicode string object.
   * doc://com.apple.documentation/documentation/foundation/nsstring
   */
  interface NSString extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsstring/1409306-init
    init():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407339-initwithbytes
    initWithBytes_length_encoding(bytes: void, len: cocoascript.NSUInteger, encoding: cocoascript.NSStringEncoding):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1413830-initwithbytesnocopy
    initWithBytesNoCopy_length_encoding_freeWhenDone(bytes: void, len: cocoascript.NSUInteger, encoding: cocoascript.NSStringEncoding, freeBuffer: cocoascript.BOOL):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1410997-initwithcharacters
    initWithCharacters_length(characters: cocoascript.unichar, length: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1412121-initwithcharactersnocopy
    initWithCharactersNoCopy_length_freeWhenDone(characters: cocoascript.unichar, length: cocoascript.NSUInteger, freeBuffer: cocoascript.BOOL):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1411293-initwithstring
    initWithString(aString: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1411950-initwithcstring
    initWithCString_encoding(nullTerminatedCString: string, encoding: cocoascript.NSStringEncoding):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1412128-initwithutf8string
    initWithUTF8String(nullTerminatedCString: string):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497402-initwithformat
    initWithFormat(format: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407827-initwithformat
    initWithFormat_arguments(format: cocoascript.NSString, argList: cocoascript.va_list):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497317-initwithformat
    initWithFormat_locale(format: cocoascript.NSString, locale: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1408503-initwithformat
    initWithFormat_locale_arguments(format: cocoascript.NSString, locale: cocoascript.NSString, argList: cocoascript.va_list):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416374-initwithdata
    initWithData_encoding(data: cocoascript.NSData, encoding: cocoascript.NSStringEncoding):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1412610-initwithcontentsoffile
    initWithContentsOfFile_encoding_error(path: cocoascript.NSString, enc: cocoascript.NSStringEncoding, error: cocoascript.NSError):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1418227-initwithcontentsoffile
    initWithContentsOfFile_usedEncoding_error(path: cocoascript.NSString, enc: cocoascript.NSStringEncoding, error: cocoascript.NSError):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414463-initwithcontentsofurl
    initWithContentsOfURL_encoding_error(url: cocoascript.NSURL, enc: cocoascript.NSStringEncoding, error: cocoascript.NSError):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414472-initwithcontentsofurl
    initWithContentsOfURL_usedEncoding_error(url: cocoascript.NSURL, enc: cocoascript.NSStringEncoding, error: cocoascript.NSError):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414212-length
    length(): cocoascript.NSUInteger;
    setLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1410710-lengthofbytesusingencoding
    lengthOfBytesUsingEncoding(enc: cocoascript.NSStringEncoding):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1411611-maximumlengthofbytesusingencodin
    maximumLengthOfBytesUsingEncoding(enc: cocoascript.NSStringEncoding):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414645-characteratindex
    characterAtIndex(index: cocoascript.NSUInteger):cocoascript.unichar;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1408720-getcharacters
    getCharacters_range(buffer: cocoascript.unichar, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1413453-getbytes
    getBytes_maxLength_usedLength_encoding_options_range_remainingRange(buffer: void, maxBufferCount: cocoascript.NSUInteger, usedBufferCount: cocoascript.NSUInteger, encoding: cocoascript.NSStringEncoding, options: cocoascript.NSStringEncodingConversionOptions, range: cocoascript.NSRange, leftover: cocoascript.NSRangePointer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1408489-cstringusingencoding
    cStringUsingEncoding(encoding: cocoascript.NSStringEncoding):string;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1415702-getcstring
    getCString_maxLength_encoding(buffer: string, maxBufferCount: cocoascript.NSUInteger, encoding: cocoascript.NSStringEncoding):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1411189-utf8string
    UTF8String(): string;
    setUTF8String(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414769-caseinsensitivecompare
    caseInsensitiveCompare(string: cocoascript.NSString):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1417333-localizedcaseinsensitivecompare
    localizedCaseInsensitiveCompare(string: cocoascript.NSString):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414082-compare
    compare(string: cocoascript.NSString):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416999-localizedcompare
    localizedCompare(string: cocoascript.NSString):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1410893-compare
    compare_options(string: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1408732-compare
    compare_options_range(string: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions, rangeOfReceiverToCompare: cocoascript.NSRange):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414561-compare
    compare_options_range_locale(string: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions, rangeOfReceiverToCompare: cocoascript.NSRange, locale: cocoascript.NSString):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1409742-localizedstandardcompare
    localizedStandardCompare(string: cocoascript.NSString):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1410309-hasprefix
    hasPrefix(str: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416529-hassuffix
    hasSuffix(str: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407803-isequaltostring
    isEqualToString(aString: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1417245-hash
    hash(): cocoascript.NSUInteger;
    setHash(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497272-stringbyappendingformat
    stringByAppendingFormat(format: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1412307-stringbyappendingstring
    stringByAppendingString(aString: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416395-stringbypaddingtolength
    stringByPaddingToLength_withString_startingAtIndex(newLength: cocoascript.NSUInteger, padString: cocoascript.NSString, padIndex: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1408467-lowercasestring
    lowercaseString(): cocoascript.NSString;
    setLowercaseString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414125-localizedlowercasestring
    localizedLowercaseString(): cocoascript.NSString;
    setLocalizedLowercaseString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1417298-lowercasestringwithlocale
    lowercaseStringWithLocale(locale: cocoascript.NSLocale):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1409855-uppercasestring
    uppercaseString(): cocoascript.NSString;
    setUppercaseString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1413331-localizeduppercasestring
    localizedUppercaseString(): cocoascript.NSString;
    setLocalizedUppercaseString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1413316-uppercasestringwithlocale
    uppercaseStringWithLocale(locale: cocoascript.NSLocale):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416784-capitalizedstring
    capitalizedString(): cocoascript.NSString;
    setCapitalizedString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414885-localizedcapitalizedstring
    localizedCapitalizedString(): cocoascript.NSString;
    setLocalizedCapitalizedString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414023-capitalizedstringwithlocale
    capitalizedStringWithLocale(locale: cocoascript.NSLocale):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1413214-componentsseparatedbystring
    componentsSeparatedByString(separator: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1410120-componentsseparatedbycharactersi
    componentsSeparatedByCharactersInSet(separator: cocoascript.NSCharacterSet):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1415462-stringbytrimmingcharactersinset
    stringByTrimmingCharactersInSet(set: cocoascript.NSCharacterSet):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414368-substringfromindex
    substringFromIndex(from: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1418469-substringwithrange
    substringWithRange(range: cocoascript.NSRange):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1408017-substringtoindex
    substringToIndex(to: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1409474-decomposedstringwithcanonicalmap
    decomposedStringWithCanonicalMapping(): cocoascript.NSString;
    setDecomposedStringWithCanonicalMapping(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1415417-decomposedstringwithcompatibilit
    decomposedStringWithCompatibilityMapping(): cocoascript.NSString;
    setDecomposedStringWithCompatibilityMapping(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1412645-precomposedstringwithcanonicalma
    precomposedStringWithCanonicalMapping(): cocoascript.NSString;
    setPrecomposedStringWithCanonicalMapping(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1412625-precomposedstringwithcompatibili
    precomposedStringWithCompatibilityMapping(): cocoascript.NSString;
    setPrecomposedStringWithCompatibilityMapping(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1413779-stringbyfoldingwithoptions
    stringByFoldingWithOptions_locale(options: cocoascript.NSStringCompareOptions, locale: cocoascript.NSLocale):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407787-stringbyapplyingtransform
    stringByApplyingTransform_reverse(transform: cocoascript.NSStringTransform, reverse: cocoascript.BOOL):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414563-containsstring
    containsString(str: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1412098-localizedcaseinsensitivecontains
    localizedCaseInsensitiveContainsString(str: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416328-localizedstandardcontainsstring
    localizedStandardContainsString(str: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1411930-rangeofcharacterfromset
    rangeOfCharacterFromSet(searchSet: cocoascript.NSCharacterSet):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416898-rangeofcharacterfromset
    rangeOfCharacterFromSet_options(searchSet: cocoascript.NSCharacterSet, mask: cocoascript.NSStringCompareOptions):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1411461-rangeofcharacterfromset
    rangeOfCharacterFromSet_options_range(searchSet: cocoascript.NSCharacterSet, mask: cocoascript.NSStringCompareOptions, rangeOfReceiverToSearch: cocoascript.NSRange):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1410144-rangeofstring
    rangeOfString(searchString: cocoascript.NSString):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416849-rangeofstring
    rangeOfString_options(searchString: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1415073-rangeofstring
    rangeOfString_options_range(searchString: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions, rangeOfReceiverToSearch: cocoascript.NSRange):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1417348-rangeofstring
    rangeOfString_options_range_locale(searchString: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions, rangeOfReceiverToSearch: cocoascript.NSRange, locale: cocoascript.NSLocale):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1413574-localizedstandardrangeofstring
    localizedStandardRangeOfString(str: cocoascript.NSString):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1408459-enumeratelinesusingblock
    enumerateLinesUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416774-enumeratesubstringsinrange
    enumerateSubstringsInRange_options_usingBlock(range: cocoascript.NSRange, opts: cocoascript.NSStringEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1412937-stringbyreplacingoccurrencesofst
    stringByReplacingOccurrencesOfString_withString(target: cocoascript.NSString, replacement: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416484-stringbyreplacingoccurrencesofst
    stringByReplacingOccurrencesOfString_withString_options_range(target: cocoascript.NSString, replacement: cocoascript.NSString, options: cocoascript.NSStringCompareOptions, searchRange: cocoascript.NSRange):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1410029-stringbyreplacingcharactersinran
    stringByReplacingCharactersInRange_withString(range: cocoascript.NSRange, replacement: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1408169-commonprefixwithstring
    commonPrefixWithString_options(str: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1412161-enumeratelinguistictagsinrange
    enumerateLinguisticTagsInRange_scheme_options_orthography_usingBlock(range: cocoascript.NSRange, scheme: cocoascript.NSLinguisticTagScheme, options: cocoascript.NSLinguisticTaggerOptions, orthography: cocoascript.NSOrthography, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416530-linguistictagsinrange
    linguisticTagsInRange_scheme_options_orthography_tokenRanges(range: cocoascript.NSRange, scheme: cocoascript.NSLinguisticTagScheme, options: cocoascript.NSLinguisticTaggerOptions, orthography: cocoascript.NSOrthography, tokenRanges: cocoascript.NSValue):cocoascript.NSLinguisticTag;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1415111-getlinestart
    getLineStart_end_contentsEnd_forRange(startPtr: cocoascript.NSUInteger, lineEndPtr: cocoascript.NSUInteger, contentsEndPtr: cocoascript.NSUInteger, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407736-linerangeforrange
    lineRangeForRange(range: cocoascript.NSRange):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416407-getparagraphstart
    getParagraphStart_end_contentsEnd_forRange(startPtr: cocoascript.NSUInteger, parEndPtr: cocoascript.NSUInteger, contentsEndPtr: cocoascript.NSUInteger, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1408548-paragraphrangeforrange
    paragraphRangeForRange(range: cocoascript.NSRange):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416036-rangeofcomposedcharactersequence
    rangeOfComposedCharacterSequenceAtIndex(index: cocoascript.NSUInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1410993-rangeofcomposedcharactersequence
    rangeOfComposedCharacterSequencesForRange(range: cocoascript.NSRange):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407654-writetofile
    writeToFile_atomically_encoding_error(path: cocoascript.NSString, useAuxiliaryFile: cocoascript.BOOL, enc: cocoascript.NSStringEncoding, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1417341-writetourl
    writeToURL_atomically_encoding_error(url: cocoascript.NSURL, useAuxiliaryFile: cocoascript.BOOL, enc: cocoascript.NSStringEncoding, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1413115-propertylist
    propertyList():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407697-propertylistfromstringsfileforma
    propertyListFromStringsFileFormat():cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1533109-drawatpoint
    drawAtPoint_withAttributes(point: cocoascript.CGPoint, attrs: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1529855-drawinrect
    drawInRect_withAttributes(rect: cocoascript.CGRect, attrs: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1530195-drawwithrect
    drawWithRect_options_attributes_context(rect: cocoascript.CGRect, options: cocoascript.NSStringDrawingOptions, attributes: cocoascript.NSString, context: cocoascript.NSStringDrawingContext):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1524729-boundingrectwithsize
    boundingRectWithSize_options_attributes_context(size: cocoascript.CGSize, options: cocoascript.NSStringDrawingOptions, attributes: cocoascript.NSString, context: cocoascript.NSStringDrawingContext):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1531844-sizewithattributes
    sizeWithAttributes(attrs: cocoascript.NSString):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1413104-variantfittingpresentationwidth
    variantFittingPresentationWidth(width: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414031-doublevalue
    doubleValue(): number;
    setDoubleValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1412321-floatvalue
    floatValue(): number;
    setFloatValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414988-intvalue
    intValue(): number;
    setIntValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1410267-integervalue
    integerValue(): cocoascript.NSInteger;
    setIntegerValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1417731-longlongvalue
    longLongValue(): number;
    setLongLongValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1409420-boolvalue
    boolValue(): cocoascript.BOOL;
    setBoolValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1417579-availablestringencodings
    availableStringEncodings(): cocoascript.NSStringEncoding;
    setAvailableStringEncodings(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1410091-defaultcstringencoding
    defaultCStringEncoding(): cocoascript.NSStringEncoding;
    setDefaultCStringEncoding(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1409496-canbeconvertedtoencoding
    canBeConvertedToEncoding(encoding: cocoascript.NSStringEncoding):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416696-datausingencoding
    dataUsingEncoding(encoding: cocoascript.NSStringEncoding):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1413692-datausingencoding
    dataUsingEncoding_allowLossyConversion(encoding: cocoascript.NSStringEncoding, lossy: cocoascript.BOOL):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1410889-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1409567-fastestencoding
    fastestEncoding(): cocoascript.NSStringEncoding;
    setFastestEncoding(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1418037-smallestencoding
    smallestEncoding(): cocoascript.NSStringEncoding;
    setSmallestEncoding(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414489-pathcomponents
    pathComponents(): cocoascript.NSString;
    setPathComponents(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1411841-completepathintostring
    completePathIntoString_caseSensitive_matchesIntoArray_filterTypes(outputName: cocoascript.NSString, flag: cocoascript.BOOL, outputArray: cocoascript.NSString, filterTypes: cocoascript.NSString):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1414559-filesystemrepresentation
    fileSystemRepresentation(): string;
    setFileSystemRepresentation(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1410269-getfilesystemrepresentation
    getFileSystemRepresentation_maxLength(cname: string, max: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1409068-absolutepath
    absolutePath(): cocoascript.BOOL;
    setAbsolutePath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1416528-lastpathcomponent
    lastPathComponent(): cocoascript.NSString;
    setLastPathComponent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407801-pathextension
    pathExtension(): cocoascript.NSString;
    setPathExtension(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407943-stringbyabbreviatingwithtildeinp
    stringByAbbreviatingWithTildeInPath(): cocoascript.NSString;
    setStringByAbbreviatingWithTildeInPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1417069-stringbyappendingpathcomponent
    stringByAppendingPathComponent(str: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1412501-stringbyappendingpathextension
    stringByAppendingPathExtension(str: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1411141-stringbydeletinglastpathcomponen
    stringByDeletingLastPathComponent(): cocoascript.NSString;
    setStringByDeletingLastPathComponent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1418214-stringbydeletingpathextension
    stringByDeletingPathExtension(): cocoascript.NSString;
    setStringByDeletingPathExtension(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407716-stringbyexpandingtildeinpath
    stringByExpandingTildeInPath(): cocoascript.NSString;
    setStringByExpandingTildeInPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1417783-stringbyresolvingsymlinksinpath
    stringByResolvingSymlinksInPath(): cocoascript.NSString;
    setStringByResolvingSymlinksInPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407194-stringbystandardizingpath
    stringByStandardizingPath(): cocoascript.NSString;
    setStringByStandardizingPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1415100-stringsbyappendingpaths
    stringsByAppendingPaths(paths: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1411946-stringbyaddingpercentencodingwit
    stringByAddingPercentEncodingWithAllowedCharacters(allowedCharacters: cocoascript.NSCharacterSet):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1409569-stringbyremovingpercentencoding
    stringByRemovingPercentEncoding(): cocoascript.NSString;
    setStringByRemovingPercentEncoding(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497394-initwithcstring
    initWithCString(bytes: string):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497403-initwithcstring
    initWithCString_length(bytes: string, length: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497281-initwithcstringnocopy
    initWithCStringNoCopy_length_freeWhenDone(bytes: string, length: cocoascript.NSUInteger, freeBuffer: cocoascript.BOOL):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497398-initwithcontentsoffile
    initWithContentsOfFile(path: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497390-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497362-writetofile
    writeToFile_atomically(path: cocoascript.NSString, useAuxiliaryFile: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497299-writetourl
    writeToURL_atomically(url: cocoascript.NSURL, atomically: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1415132-getcharacters
    getCharacters(buffer: cocoascript.unichar):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497307-cstring
    cString():string;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497263-lossycstring
    lossyCString():string;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497303-cstringlength
    cStringLength():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497249-getcstring
    getCString(bytes: string):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497296-getcstring
    getCString_maxLength(bytes: string, maxLength: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1497298-getcstring
    getCString_maxLength_range_remainingRange(bytes: string, maxLength: cocoascript.NSUInteger, aRange: cocoascript.NSRange, leftoverRange: cocoascript.NSRangePointer):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1415058-stringbyaddingpercentescapesusin
    stringByAddingPercentEscapesUsingEncoding(enc: cocoascript.NSStringEncoding):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407783-stringbyreplacingpercentescapesu
    stringByReplacingPercentEscapesUsingEncoding(enc: cocoascript.NSStringEncoding):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1619917-sizewithfont
    sizeWithFont(font: cocoascript.UIFont):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1619914-sizewithfont
    sizeWithFont_forWidth_lineBreakMode(font: cocoascript.UIFont, width: cocoascript.CGFloat, lineBreakMode: cocoascript.NSLineBreakMode):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1619903-sizewithfont
    sizeWithFont_minFontSize_actualFontSize_forWidth_lineBreakMode(font: cocoascript.UIFont, minFontSize: cocoascript.CGFloat, actualFontSize: cocoascript.CGFloat, width: cocoascript.CGFloat, lineBreakMode: cocoascript.NSLineBreakMode):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1619910-sizewithfont
    sizeWithFont_constrainedToSize(font: cocoascript.UIFont, size: cocoascript.CGSize):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1619915-sizewithfont
    sizeWithFont_constrainedToSize_lineBreakMode(font: cocoascript.UIFont, size: cocoascript.CGSize, lineBreakMode: cocoascript.NSLineBreakMode):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1619898-drawatpoint
    drawAtPoint_withFont(point: cocoascript.CGPoint, font: cocoascript.UIFont):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1619896-drawatpoint
    drawAtPoint_forWidth_withFont_lineBreakMode(point: cocoascript.CGPoint, width: cocoascript.CGFloat, font: cocoascript.UIFont, lineBreakMode: cocoascript.NSLineBreakMode):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1619919-drawatpoint
    drawAtPoint_forWidth_withFont_fontSize_lineBreakMode_baselineAdjustment(point: cocoascript.CGPoint, width: cocoascript.CGFloat, font: cocoascript.UIFont, fontSize: cocoascript.CGFloat, lineBreakMode: cocoascript.NSLineBreakMode, baselineAdjustment: cocoascript.UIBaselineAdjustment):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1619894-drawatpoint
    drawAtPoint_forWidth_withFont_minFontSize_actualFontSize_lineBreakMode_baselineAdjustment(point: cocoascript.CGPoint, width: cocoascript.CGFloat, font: cocoascript.UIFont, minFontSize: cocoascript.CGFloat, actualFontSize: cocoascript.CGFloat, lineBreakMode: cocoascript.NSLineBreakMode, baselineAdjustment: cocoascript.UIBaselineAdjustment):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1619909-drawinrect
    drawInRect_withFont(rect: cocoascript.CGRect, font: cocoascript.UIFont):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1619908-drawinrect
    drawInRect_withFont_lineBreakMode(rect: cocoascript.CGRect, font: cocoascript.UIFont, lineBreakMode: cocoascript.NSLineBreakMode):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1619912-drawinrect
    drawInRect_withFont_lineBreakMode_alignment(rect: cocoascript.CGRect, font: cocoascript.UIFont, lineBreakMode: cocoascript.NSLineBreakMode, alignment: cocoascript.NSTextAlignment):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1527536-drawwithrect
    drawWithRect_options_attributes(rect: cocoascript.NSRect, options: cocoascript.NSStringDrawingOptions, attributes: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1535578-boundingrectwithsize
    boundingRectWithSize_options_attributes(size: cocoascript.NSSize, options: cocoascript.NSStringDrawingOptions, attributes: cocoascript.NSString):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/foundation/nsstring/3547179-initwithbytesnocopy
    initWithBytesNoCopy_length_encoding_deallocator(bytes: void, len: cocoascript.NSUInteger, encoding: cocoascript.NSStringEncoding, deallocator: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/3547180-initwithcharactersnocopy
    initWithCharactersNoCopy_length_deallocator(chars: cocoascript.unichar, len: cocoascript.NSUInteger, deallocator: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/1407488-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/3564808-stringbyappendingpathcomponent
    stringByAppendingPathComponent_conformingToType(partialName: cocoascript.NSString, contentType: cocoascript.UTType):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsstring/3564809-stringbyappendingpathextensionfo
    stringByAppendingPathExtensionForType(contentType: cocoascript.UTType):cocoascript.NSString;
    //
    alloc():cocoascript.NSString;
    //
    init():cocoascript.NSString;
  }
}

declare const NSString: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The interface a file coordinator uses to inform an object presenting a file about changes to that file made elsewhere in the system.
   * doc://com.apple.documentation/documentation/foundation/nsfilepresenter
   */
  interface NSFilePresenter extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1414861-presenteditemurl
    presentedItemURL(): cocoascript.NSURL;
    setPresentedItemURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1415250-presenteditemoperationqueue
    presentedItemOperationQueue(): cocoascript.NSOperationQueue;
    setPresentedItemOperationQueue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1415415-primarypresenteditemurl
    primaryPresentedItemURL(): cocoascript.NSURL;
    setPrimaryPresentedItemURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1410743-relinquishpresenteditemtoreader
    relinquishPresentedItemToReader(reader: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1413688-relinquishpresenteditemtowriter
    relinquishPresentedItemToWriter(writer: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1414407-savepresenteditemchangeswithcomp
    savePresentedItemChangesWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1414732-accommodatepresenteditemdeletion
    accommodatePresentedItemDeletionWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1417861-presenteditemdidmovetourl
    presentedItemDidMoveToURL(newURL: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1416103-presenteditemdidchange
    presentedItemDidChange():void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1415018-presenteditemdidgainversion
    presentedItemDidGainVersion(version: cocoascript.NSFileVersion):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1417258-presenteditemdidloseversion
    presentedItemDidLoseVersion(version: cocoascript.NSFileVersion):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1418445-presenteditemdidresolveconflictv
    presentedItemDidResolveConflictVersion(version: cocoascript.NSFileVersion):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1415472-presentedsubitematurl
    presentedSubitemAtURL_didGainVersion(url: cocoascript.NSURL, version: cocoascript.NSFileVersion):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1413957-presentedsubitematurl
    presentedSubitemAtURL_didLoseVersion(url: cocoascript.NSURL, version: cocoascript.NSFileVersion):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1416913-presentedsubitematurl
    presentedSubitemAtURL_didResolveConflictVersion(url: cocoascript.NSURL, version: cocoascript.NSFileVersion):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1415657-accommodatepresentedsubitemdelet
    accommodatePresentedSubitemDeletionAtURL_completionHandler(url: cocoascript.NSURL, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1408642-presentedsubitemdidappearaturl
    presentedSubitemDidAppearAtURL(url: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1409465-presentedsubitematurl
    presentedSubitemAtURL_didMoveToURL(oldURL: cocoascript.NSURL, newURL: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/1411135-presentedsubitemdidchangeaturl
    presentedSubitemDidChangeAtURL(url: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/2909022-observedpresenteditemubiquityatt
    observedPresentedItemUbiquityAttributes(): cocoascript.NSURLResourceKey;
    setObservedPresentedItemUbiquityAttributes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilepresenter/2909021-presenteditemdidchangeubiquityat
    presentedItemDidChangeUbiquityAttributes(attributes: cocoascript.NSURLResourceKey):void;
  }
}
// doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestoredidchangeexternallynotification
declare const NSUbiquitousKeyValueStoreDidChangeExternallyNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * An object wrapper for primitive scalar numeric values.
   * doc://com.apple.documentation/documentation/foundation/nsnumber
   */
  interface NSNumber extends NSValue {
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1415728-initwithbool
    initWithBool(value: cocoascript.BOOL):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1409777-initwithchar
    initWithChar(value: string):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407545-initwithdouble
    initWithDouble(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1412999-initwithfloat
    initWithFloat(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407580-initwithint
    initWithInt(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1409397-initwithinteger
    initWithInteger(value: cocoascript.NSInteger):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1410739-initwithlong
    initWithLong(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1408171-initwithlonglong
    initWithLongLong(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1411886-initwithshort
    initWithShort(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1416533-initwithunsignedchar
    initWithUnsignedChar(value: string):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1414598-initwithunsignedint
    initWithUnsignedInt(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1412531-initwithunsignedinteger
    initWithUnsignedInteger(value: cocoascript.NSUInteger):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1410728-initwithunsignedlong
    initWithUnsignedLong(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1416550-initwithunsignedlonglong
    initWithUnsignedLongLong(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407718-initwithunsignedshort
    initWithUnsignedShort(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1410865-boolvalue
    boolValue(): cocoascript.BOOL;
    setBoolValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407838-charvalue
    charValue(): string;
    setCharValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407409-decimalvalue
    decimalValue(): cocoascript.NSDecimal;
    setDecimalValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1414104-doublevalue
    doubleValue(): number;
    setDoubleValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1418317-floatvalue
    floatValue(): number;
    setFloatValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407153-intvalue
    intValue(): number;
    setIntValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1412554-integervalue
    integerValue(): cocoascript.NSInteger;
    setIntegerValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1416870-longlongvalue
    longLongValue(): number;
    setLongLongValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1412566-longvalue
    longValue(): number;
    setLongValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407601-shortvalue
    shortValue(): number;
    setShortValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1409016-unsignedcharvalue
    unsignedCharValue(): string;
    setUnsignedCharValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1413324-unsignedintegervalue
    unsignedIntegerValue(): cocoascript.NSUInteger;
    setUnsignedIntegerValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1417875-unsignedintvalue
    unsignedIntValue(): number;
    setUnsignedIntValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1414524-unsignedlonglongvalue
    unsignedLongLongValue(): number;
    setUnsignedLongLongValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1415252-unsignedlongvalue
    unsignedLongValue(): number;
    setUnsignedLongValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1410604-unsignedshortvalue
    unsignedShortValue(): number;
    setUnsignedShortValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1409984-descriptionwithlocale
    descriptionWithLocale(locale: cocoascript.NSNumber):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1415802-stringvalue
    stringValue(): cocoascript.NSString;
    setStringValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1413562-compare
    compare(otherNumber: cocoascript.NSNumber):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1411315-isequaltonumber
    isEqualToNumber(number: cocoascript.NSNumber):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1411476-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSNumber;
    //
    alloc():cocoascript.NSNumber;
    //
    init():cocoascript.NSNumber;
  }
}

declare const NSNumber: cocoascript.NSNumber;
declare namespace cocoascript {
  /**
   * A representation of a specific point in time, independent of any calendar or time zone.
   * doc://com.apple.documentation/documentation/foundation/nsdate
   */
  interface NSDate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdate/1415407-init
    init():cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1411701-initwithtimeintervalsincenow
    initWithTimeIntervalSinceNow(secs: cocoascript.NSTimeInterval):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1414201-initwithtimeinterval
    initWithTimeInterval_sinceDate(secsToBeAdded: cocoascript.NSTimeInterval, date: cocoascript.NSDate):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1409769-initwithtimeintervalsincereferen
    initWithTimeIntervalSinceReferenceDate(ti: cocoascript.NSTimeInterval):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1416453-initwithtimeintervalsince1970
    initWithTimeIntervalSince1970(secs: cocoascript.NSTimeInterval):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1412602-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1415385-distantfuture
    distantFuture(): cocoascript.NSDate;
    setDistantFuture(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1418197-distantpast
    distantPast(): cocoascript.NSDate;
    setDistantPast(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1416400-isequaltodate
    isEqualToDate(otherDate: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1412791-earlierdate
    earlierDate(anotherDate: cocoascript.NSDate):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1409058-laterdate
    laterDate(anotherDate: cocoascript.NSDate):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1409748-compare
    compare(other: cocoascript.NSDate):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1410206-timeintervalsincedate
    timeIntervalSinceDate(anotherDate: cocoascript.NSDate):cocoascript.NSTimeInterval;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1407937-timeintervalsincenow
    timeIntervalSinceNow(): cocoascript.NSTimeInterval;
    setTimeIntervalSinceNow(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1417376-timeintervalsincereferencedate
    timeIntervalSinceReferenceDate(): cocoascript.NSTimeInterval;
    setTimeIntervalSinceReferenceDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1407504-timeintervalsince1970
    timeIntervalSince1970(): cocoascript.NSTimeInterval;
    setTimeIntervalSince1970(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1408189-timeintervalsincereferencedate
    timeIntervalSinceReferenceDate(): cocoascript.NSTimeInterval;
    setTimeIntervalSinceReferenceDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1408823-datebyaddingtimeinterval
    dateByAddingTimeInterval(ti: cocoascript.NSTimeInterval):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1409767-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1414108-descriptionwithlocale
    descriptionWithLocale(locale: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1407172-initwithstring
    initWithString(description: cocoascript.NSString):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1591575-addtimeinterval
    addTimeInterval(seconds: cocoascript.NSTimeInterval):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1407899-datewithcalendarformat
    dateWithCalendarFormat_timeZone(format: cocoascript.NSString, aTimeZone: cocoascript.NSTimeZone):cocoascript.NSCalendarDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1415983-descriptionwithcalendarformat
    descriptionWithCalendarFormat_timeZone_locale(format: cocoascript.NSString, aTimeZone: cocoascript.NSTimeZone, locale: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdate/3180113-now
    now(): cocoascript.NSDate;
    setNow(): void;
    //
    alloc():cocoascript.NSDate;
    //
    init():cocoascript.NSDate;
  }
}

declare const NSDate: cocoascript.NSDate;
declare namespace cocoascript {
  /**
   * A static byte buffer in memory.
   * doc://com.apple.documentation/documentation/foundation/nsdata
   */
  interface NSData extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdata/1412793-initwithbytes
    initWithBytes_length(bytes: void, length: cocoascript.NSUInteger):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1409454-initwithbytesnocopy
    initWithBytesNoCopy_length(bytes: void, length: cocoascript.NSUInteger):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1417337-initwithbytesnocopy
    initWithBytesNoCopy_length_deallocator(bytes: void, length: cocoascript.NSUInteger, deallocator: cocoascript.NSUInteger):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1416020-initwithbytesnocopy
    initWithBytesNoCopy_length_freeWhenDone(bytes: void, length: cocoascript.NSUInteger, b: cocoascript.BOOL):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1417055-initwithdata
    initWithData(data: cocoascript.NSData):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1408672-initwithcontentsoffile
    initWithContentsOfFile(path: cocoascript.NSString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1411145-initwithcontentsoffile
    initWithContentsOfFile_options_error(path: cocoascript.NSString, readOptionsMask: cocoascript.NSDataReadingOptions, errorPtr: cocoascript.NSError):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1413892-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1407864-initwithcontentsofurl
    initWithContentsOfURL_options_error(url: cocoascript.NSURL, readOptionsMask: cocoascript.NSDataReadingOptions, errorPtr: cocoascript.NSError):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1413302-initwithcontentsofmappedfile
    initWithContentsOfMappedFile(path: cocoascript.NSString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1408033-writetofile
    writeToFile_atomically(path: cocoascript.NSString, useAuxiliaryFile: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1414800-writetofile
    writeToFile_options_error(path: cocoascript.NSString, writeOptionsMask: cocoascript.NSDataWritingOptions, errorPtr: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1415134-writetourl
    writeToURL_atomically(url: cocoascript.NSURL, atomically: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1410595-writetourl
    writeToURL_options_error(url: cocoascript.NSURL, writeOptionsMask: cocoascript.NSDataWritingOptions, errorPtr: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1417833-initwithbase64encodeddata
    initWithBase64EncodedData_options(base64Data: cocoascript.NSData, options: cocoascript.NSDataBase64DecodingOptions):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1547237-initwithbase64encoding
    initWithBase64Encoding(base64String: cocoascript.NSString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1410081-initwithbase64encodedstring
    initWithBase64EncodedString_options(base64String: cocoascript.NSString, options: cocoascript.NSDataBase64DecodingOptions):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1412739-base64encodeddatawithoptions
    base64EncodedDataWithOptions(options: cocoascript.NSDataBase64EncodingOptions):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1413546-base64encodedstringwithoptions
    base64EncodedStringWithOptions(options: cocoascript.NSDataBase64EncodingOptions):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1547242-base64encoding
    base64Encoding():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1410616-bytes
    bytes(): void;
    setBytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1408400-enumeratebyterangesusingblock
    enumerateByteRangesUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1416532-getbytes
    getBytes(buffer: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1411450-getbytes
    getBytes_length(buffer: void, length: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1407224-getbytes
    getBytes_range(buffer: void, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1410128-subdatawithrange
    subdataWithRange(range: cocoascript.NSRange):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1410391-rangeofdata
    rangeOfData_options_range(dataToFind: cocoascript.NSData, mask: cocoascript.NSDataSearchOptions, searchRange: cocoascript.NSRange):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1409330-isequaltodata
    isEqualToData(other: cocoascript.NSData):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1416769-length
    length(): cocoascript.NSUInteger;
    setLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1412579-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/3174960-compresseddatausingalgorithm
    compressedDataUsingAlgorithm_error(algorithm: cocoascript.NSDataCompressionAlgorithm, error: cocoascript.NSError):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/3174961-decompresseddatausingalgorithm
    decompressedDataUsingAlgorithm_error(algorithm: cocoascript.NSDataCompressionAlgorithm, error: cocoascript.NSError):cocoascript.NSData;
    //
    alloc():cocoascript.NSData;
    //
    init():cocoascript.NSData;
  }
}

declare const NSData: cocoascript.NSData;
declare namespace cocoascript {
  /**
   * A static ordered collection of objects.
   * doc://com.apple.documentation/documentation/foundation/nsarray
   */
  interface NSArray extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsarray/1414315-init
    init():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1412169-initwitharray
    initWithArray(array: any):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1408557-initwitharray
    initWithArray_copyItems(array: any, flag: cocoascript.BOOL):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1413844-initwithcontentsoffile
    initWithContentsOfFile(path: cocoascript.NSString):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1410518-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1460068-initwithobjects
    initWithObjects(firstObj: any):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1415056-initwithobjects
    initWithObjects_count(objects: any, cnt: cocoascript.NSUInteger):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1407477-containsobject
    containsObject(anObject: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1409982-count
    count(): cocoascript.NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1410317-getobjects
    getObjects(objects: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1414725-getobjects
    getObjects_range(objects: any, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1412852-firstobject
    firstObject(): any;
    setFirstObject(): void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1408316-lastobject
    lastObject(): any;
    setLastObject(): void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1417555-objectatindex
    objectAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1414084-objectatindexedsubscript
    objectAtIndexedSubscript(idx: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1411296-objectsatindexes
    objectsAtIndexes(indexes: cocoascript.NSIndexSet):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1416048-objectenumerator
    objectEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1415734-reverseobjectenumerator
    reverseObjectEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1417076-indexofobject
    indexOfObject(anObject: any):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1415248-indexofobject
    indexOfObject_inRange(anObject: any, range: cocoascript.NSRange):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1410847-indexofobjectidenticalto
    indexOfObjectIdenticalTo(anObject: any):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1415805-indexofobjectidenticalto
    indexOfObjectIdenticalTo_inRange(anObject: any, range: cocoascript.NSRange):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1408043-indexofobjectpassingtest
    indexOfObjectPassingTest(predicate: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1417053-indexofobjectwithoptions
    indexOfObjectWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1407652-indexofobjectatindexes
    indexOfObjectAtIndexes_options_passingTest(s: cocoascript.NSIndexSet, opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1417603-indexesofobjectspassingtest
    indexesOfObjectsPassingTest(predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1415087-indexesofobjectswithoptions
    indexesOfObjectsWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1413512-indexesofobjectsatindexes
    indexesOfObjectsAtIndexes_options_passingTest(s: cocoascript.NSIndexSet, opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1412722-indexofobject
    indexOfObject_inSortedRange_options_usingComparator(obj: any, r: cocoascript.NSRange, opts: cocoascript.NSBinarySearchingOptions, cmp: cocoascript.NSComparator):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1460115-makeobjectsperformselector
    makeObjectsPerformSelector(aSelector: cocoascript.SEL):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1460107-makeobjectsperformselector
    makeObjectsPerformSelector_withObject(aSelector: cocoascript.SEL, argument: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1415846-enumerateobjectsusingblock
    enumerateObjectsUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1413010-enumerateobjectswithoptions
    enumerateObjectsWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1417577-enumerateobjectsatindexes
    enumerateObjectsAtIndexes_options_usingBlock(s: cocoascript.NSIndexSet, opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1408825-firstobjectcommonwitharray
    firstObjectCommonWithArray(otherArray: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1411770-isequaltoarray
    isEqualToArray(otherArray: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1408534-arraybyaddingobject
    arrayByAddingObject(anObject: any):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1412087-arraybyaddingobjectsfromarray
    arrayByAddingObjectsFromArray(otherArray: any):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1411033-filteredarrayusingpredicate
    filteredArrayUsingPredicate(predicate: cocoascript.NSPredicate):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1415157-subarraywithrange
    subarrayWithRange(range: cocoascript.NSRange):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1413063-sortedarrayhint
    sortedArrayHint(): cocoascript.NSData;
    setSortedArrayHint(): void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1408213-sortedarrayusingfunction
    sortedArrayUsingFunction_context(comparator: void, context: void):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1414839-sortedarrayusingfunction
    sortedArrayUsingFunction_context_hint(comparator: void, context: void, hint: cocoascript.NSData):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1415069-sortedarrayusingdescriptors
    sortedArrayUsingDescriptors(sortDescriptors: cocoascript.NSSortDescriptor):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1410025-sortedarrayusingselector
    sortedArrayUsingSelector(comparator: cocoascript.SEL):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1411195-sortedarrayusingcomparator
    sortedArrayUsingComparator(cmptr: cocoascript.NSComparator):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1417804-sortedarraywithoptions
    sortedArrayWithOptions_usingComparator(opts: cocoascript.NSSortOptions, cmptr: cocoascript.NSComparator):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1412075-componentsjoinedbystring
    componentsJoinedByString(separator: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1413042-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1412374-descriptionwithlocale
    descriptionWithLocale(locale: cocoascript.NSArray):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1416257-descriptionwithlocale
    descriptionWithLocale_indent(locale: cocoascript.NSArray, level: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1414742-writetofile
    writeToFile_atomically(path: cocoascript.NSString, useAuxiliaryFile: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1411480-writetourl
    writeToURL_atomically(url: cocoascript.NSURL, atomically: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1418275-pathsmatchingextensions
    pathsMatchingExtensions(filterTypes: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1409775-addobserver
    addObserver_forKeyPath_options_context(observer: cocoascript.NSObject, keyPath: cocoascript.NSString, options: cocoascript.NSKeyValueObservingOptions, context: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1414976-removeobserver
    removeObserver_forKeyPath(observer: cocoascript.NSObject, keyPath: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1418441-removeobserver
    removeObserver_forKeyPath_context(observer: cocoascript.NSObject, keyPath: cocoascript.NSString, context: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1408305-removeobserver
    removeObserver_fromObjectsAtIndexes_forKeyPath_context(observer: cocoascript.NSObject, indexes: cocoascript.NSIndexSet, keyPath: cocoascript.NSString, context: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1411404-addobserver
    addObserver_toObjectsAtIndexes_forKeyPath_options_context(observer: cocoascript.NSObject, indexes: cocoascript.NSIndexSet, keyPath: cocoascript.NSString, options: cocoascript.NSKeyValueObservingOptions, context: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1407434-removeobserver
    removeObserver_fromObjectsAtIndexes_forKeyPath(observer: cocoascript.NSObject, indexes: cocoascript.NSIndexSet, keyPath: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1408301-setvalue
    setValue_forKey(value: cocoascript.NSArray, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1412219-valueforkey
    valueForKey(key: cocoascript.NSString):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1640855-shuffledarray
    shuffledArray():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1640687-shuffledarraywithrandomsource
    shuffledArrayWithRandomSource(randomSource: cocoascript.GKRandomSource):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/3152166-differencefromarray
    differenceFromArray(other: any):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsarray/3152167-differencefromarray
    differenceFromArray_withOptions(other: any, options: cocoascript.NSOrderedCollectionDifferenceCalculationOptions):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsarray/3152168-differencefromarray
    differenceFromArray_withOptions_usingEquivalenceTest(other: any, options: cocoascript.NSOrderedCollectionDifferenceCalculationOptions, block: any):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsarray/1407810-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/2879134-initwithcontentsofurl
    initWithContentsOfURL_error(url: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsarray/2879138-writetourl
    writeToURL_error(url: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsarray/3152165-arraybyapplyingdifference
    arrayByApplyingDifference(difference: any):cocoascript.NSArray;
    //
    alloc():cocoascript.NSArray;
    //
    init():cocoascript.NSArray;
  }
}

declare const NSArray: cocoascript.NSArray;
declare namespace cocoascript {
  /**
   * A static collection of objects associated with unique keys.
   * doc://com.apple.documentation/documentation/foundation/nsdictionary
   */
  interface NSDictionary extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1418147-init
    init():cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1410010-initwithobjects
    initWithObjects_forKeys(objects: any, keys: cocoascript.NSCopying):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1412631-initwithobjects
    initWithObjects_forKeys_count(objects: any, keys: cocoascript.NSCopying, cnt: cocoascript.NSUInteger):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1574190-initwithobjectsandkeys
    initWithObjectsAndKeys(firstObject: cocoascript.NSDictionary):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1418434-initwithdictionary
    initWithDictionary(otherDictionary: any):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1410124-initwithdictionary
    initWithDictionary_copyItems(otherDictionary: any, flag: cocoascript.BOOL):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/2879140-initwithcontentsofurl
    initWithContentsOfURL_error(url: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1416069-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1414949-initwithcontentsoffile
    initWithContentsOfFile(path: cocoascript.NSString):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1417987-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409628-count
    count(): cocoascript.NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1415445-isequaltodictionary
    isEqualToDictionary(otherDictionary: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409150-allkeys
    allKeys(): cocoascript.KeyType;
    setAllKeys(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1417147-allkeysforobject
    allKeysForObject(anObject: any):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1408915-allvalues
    allValues(): any;
    setAllValues(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1410210-valueforkey
    valueForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409973-getobjects
    getObjects_andKeys_count(objects: any, keys: cocoascript.KeyType, count: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409428-getobjects
    getObjects_andKeys(objects: any, keys: cocoascript.KeyType):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1408769-objectsforkeys
    objectsForKeys_notFoundMarker(keys: cocoascript.KeyType, marker: any):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1414347-objectforkey
    objectForKey(aKey: cocoascript.KeyType):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1415430-objectforkeyedsubscript
    objectForKeyedSubscript(key: cocoascript.KeyType):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1411011-keyenumerator
    keyEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409600-objectenumerator
    objectEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1414570-enumeratekeysandobjectsusingbloc
    enumerateKeysAndObjectsUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409739-enumeratekeysandobjectswithoptio
    enumerateKeysAndObjectsWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/2865769-countbyenumeratingwithstate
    countByEnumeratingWithState_objects_count(state: cocoascript.NSFastEnumerationState, buffer: cocoascript.K, len: cocoascript.NSUInteger):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1412484-keyssortedbyvalueusingselector
    keysSortedByValueUsingSelector(comparator: cocoascript.SEL):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1411105-keyssortedbyvalueusingcomparator
    keysSortedByValueUsingComparator(cmptr: cocoascript.NSComparator):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1415717-keyssortedbyvaluewithoptions
    keysSortedByValueWithOptions_usingComparator(opts: cocoascript.NSSortOptions, cmptr: cocoascript.NSComparator):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1407186-keysofentriespassingtest
    keysOfEntriesPassingTest(predicate: cocoascript.BOOL):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1416706-keysofentrieswithoptions
    keysOfEntriesWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/2879139-writetourl
    writeToURL_error(url: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409634-writetourl
    writeToURL_atomically(url: cocoascript.NSURL, atomically: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1415753-writetofile
    writeToFile_atomically(path: cocoascript.NSString, useAuxiliaryFile: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1413465-filesize
    fileSize():number;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1416809-filetype
    fileType():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1417071-filecreationdate
    fileCreationDate():cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1408811-filemodificationdate
    fileModificationDate():cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409446-fileposixpermissions
    filePosixPermissions():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1412281-fileowneraccountid
    fileOwnerAccountID():cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1417533-fileowneraccountname
    fileOwnerAccountName():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1413626-filegroupowneraccountid
    fileGroupOwnerAccountID():cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1416788-filegroupowneraccountname
    fileGroupOwnerAccountName():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1413177-fileextensionhidden
    fileExtensionHidden():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1416500-fileisimmutable
    fileIsImmutable():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1416083-fileisappendonly
    fileIsAppendOnly():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1408396-filesystemfilenumber
    fileSystemFileNumber():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1415329-filesystemnumber
    fileSystemNumber():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1417215-filehfstypecode
    fileHFSTypeCode():void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1415065-filehfscreatorcode
    fileHFSCreatorCode():void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1410799-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1413282-descriptioninstringsfileformat
    descriptionInStringsFileFormat(): cocoascript.NSString;
    setDescriptionInStringsFileFormat(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1417665-descriptionwithlocale
    descriptionWithLocale(locale: cocoascript.NSDictionary):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1412690-descriptionwithlocale
    descriptionWithLocale_indent(locale: cocoascript.NSDictionary, level: cocoascript.NSUInteger):cocoascript.NSString;
    //
    alloc():cocoascript.NSDictionary;
    //
    init():cocoascript.NSDictionary;
  }
}

declare const NSDictionary: cocoascript.NSDictionary;
declare namespace cocoascript {
  /**
   * A dynamic collection of objects associated with unique keys.
   * doc://com.apple.documentation/documentation/foundation/nsmutabledictionary
   */
  interface NSMutableDictionary extends NSDictionary {
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1417898-initwithcapacity
    initWithCapacity(numItems: cocoascript.NSUInteger):cocoascript.NSMutableDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1410577-init
    init():cocoascript.NSMutableDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1411616-setobject
    setObject_forKey(anObject: any, aKey: cocoascript.NSCopying):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1574187-setobject
    setObject_forKeyedSubscript(obj: any, key: cocoascript.NSCopying):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1416335-setvalue
    setValue_forKey(value: any, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1411035-addentriesfromdictionary
    addEntriesFromDictionary(otherDictionary: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1409566-setdictionary
    setDictionary(otherDictionary: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1416518-removeobjectforkey
    removeObjectForKey(aKey: cocoascript.KeyType):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1408955-removeallobjects
    removeAllObjects():void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1410430-removeobjectsforkeys
    removeObjectsForKeys(keyArray: cocoascript.KeyType):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1418255-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSMutableDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1407593-initwithcontentsoffile
    initWithContentsOfFile(path: cocoascript.NSString):cocoascript.NSMutableDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1410409-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSMutableDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1431956-addapplicationparameterheader
    addApplicationParameterHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1433422-addauthorizationchallengeheader
    addAuthorizationChallengeHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1432339-addauthorizationresponseheader
    addAuthorizationResponseHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1430411-addbodyheader
    addBodyHeader_length_endOfBody(inHeaderData: void, inHeaderDataLength: number, isEndOfBody: cocoascript.BOOL):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1428676-addbytesequenceheader
    addByteSequenceHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1430403-addconnectionidheader
    addConnectionIDHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1433317-addcountheader
    addCountHeader(inCount: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1434905-adddescriptionheader
    addDescriptionHeader(inDescriptionString: cocoascript.NSString):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1434484-addhttpheader
    addHTTPHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1429678-addimagedescriptorheader
    addImageDescriptorHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1430878-addimagehandleheader
    addImageHandleHeader(type: cocoascript.NSString):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1433652-addlengthheader
    addLengthHeader(length: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1430284-addnameheader
    addNameHeader(inNameString: cocoascript.NSString):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1434696-addobjectclassheader
    addObjectClassHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1428678-addtargetheader
    addTargetHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1433527-addtime4byteheader
    addTime4ByteHeader(time4Byte: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1428661-addtimeisoheader
    addTimeISOHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1433211-addtypeheader
    addTypeHeader(type: cocoascript.NSString):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1434461-adduserdefinedheader
    addUserDefinedHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1433510-addwhoheader
    addWhoHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1428890-getheaderbytes
    getHeaderBytes():cocoascript.NSMutableData;
    //
    alloc():cocoascript.NSMutableDictionary;
    //
    init():cocoascript.NSMutableDictionary;
  }
}

declare const NSMutableDictionary: cocoascript.NSMutableDictionary;
declare namespace cocoascript {
  /**
   * An immutable description of how to order a collection of objects based on a property common to all the objects.
   * doc://com.apple.documentation/documentation/foundation/nssortdescriptor
   */
  interface NSSortDescriptor extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1413572-initwithkey
    initWithKey_ascending(key: cocoascript.NSString, ascending: cocoascript.BOOL):cocoascript.NSSortDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1412495-initwithkey
    initWithKey_ascending_selector(key: cocoascript.NSString, ascending: cocoascript.BOOL, selector: cocoascript.SEL):cocoascript.NSSortDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1411607-initwithkey
    initWithKey_ascending_comparator(key: cocoascript.NSString, ascending: cocoascript.BOOL, cmptr: cocoascript.NSComparator):cocoascript.NSSortDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1408931-ascending
    ascending(): cocoascript.BOOL;
    setAscending(): void;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1415022-key
    key(): cocoascript.NSString;
    setKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1418337-selector
    selector(): cocoascript.SEL;
    setSelector(): void;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1411426-comparator
    comparator(): cocoascript.NSComparator;
    setComparator(): void;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1411557-compareobject
    compareObject_toObject(object1: cocoascript.NSSortDescriptor, object2: cocoascript.NSSortDescriptor):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1407712-reversedsortdescriptor
    reversedSortDescriptor(): cocoascript.id;
    setReversedSortDescriptor(): void;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1412371-allowevaluation
    allowEvaluation():void;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1412503-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSSortDescriptor;
    //
    alloc():cocoascript.NSSortDescriptor;
    //
    init():cocoascript.NSSortDescriptor;
  }
}

declare const NSSortDescriptor: cocoascript.NSSortDescriptor;
declare namespace cocoascript {
  /**
   * An event driven parser of XML documents (including DTD declarations).
   * doc://com.apple.documentation/documentation/foundation/nsxmlparser
   */
  interface NSXMLParser extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1415575-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSXMLParser;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1418103-initwithdata
    initWithData(data: cocoascript.NSData):cocoascript.NSXMLParser;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1415904-initwithstream
    initWithStream(stream: cocoascript.NSInputStream):cocoascript.NSXMLParser;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1416209-delegate
    delegate(): cocoascript.NSXMLParserDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1418380-shouldprocessnamespaces
    shouldProcessNamespaces(): cocoascript.BOOL;
    setShouldProcessNamespaces(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1410809-shouldreportnamespaceprefixes
    shouldReportNamespacePrefixes(): cocoascript.BOOL;
    setShouldReportNamespacePrefixes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1414143-shouldresolveexternalentities
    shouldResolveExternalEntities(): cocoascript.BOOL;
    setShouldResolveExternalEntities(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1411778-parse
    parse():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1410083-abortparsing
    abortParsing():void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1417446-parsererror
    parserError(): cocoascript.NSError;
    setParserError(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1416983-columnnumber
    columnNumber(): cocoascript.NSInteger;
    setColumnNumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1413404-linenumber
    lineNumber(): cocoascript.NSInteger;
    setLineNumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1414516-publicid
    publicID(): cocoascript.NSString;
    setPublicID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1411917-systemid
    systemID(): cocoascript.NSString;
    setSystemID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1412380-allowedexternalentityurls
    allowedExternalEntityURLs(): cocoascript.NSURL;
    setAllowedExternalEntityURLs(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1407399-externalentityresolvingpolicy
    externalEntityResolvingPolicy(): cocoascript.NSXMLParserExternalEntityResolvingPolicy;
    setExternalEntityResolvingPolicy(): void;
    //
    alloc():cocoascript.NSXMLParser;
    //
    init():cocoascript.NSXMLParser;
  }
}

declare const NSXMLParser: cocoascript.NSXMLParser;
declare namespace cocoascript {
  /**
   * An immutable collection of values representing different aspects of an item for an extension to act upon.
   * doc://com.apple.documentation/documentation/foundation/nsextensionitem
   */
  interface NSExtensionItem extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsextensionitem/1416592-attributedtitle
    attributedTitle(): cocoascript.NSAttributedString;
    setAttributedTitle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensionitem/1414953-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensionitem/1416690-attachments
    attachments(): cocoascript.NSItemProvider;
    setAttachments(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensionitem/1408297-attributedcontenttext
    attributedContentText(): cocoascript.NSAttributedString;
    setAttributedContentText(): void;
    //
    alloc():cocoascript.NSExtensionItem;
    //
    init():cocoascript.NSExtensionItem;
  }
}

declare const NSExtensionItem: cocoascript.NSExtensionItem;
declare namespace cocoascript {
  /**
   * Information about an error condition including a domain, a domain-specific error code, and application-specific information.
   * doc://com.apple.documentation/documentation/foundation/nserror
   */
  interface NSError extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nserror/1417063-initwithdomain
    initWithDomain_code_userInfo(domain: cocoascript.NSErrorDomain, code: cocoascript.NSInteger, dict: cocoascript.NSError):cocoascript.NSError;
    // doc://com.apple.documentation/documentation/foundation/nserror/1409165-code
    code(): cocoascript.NSInteger;
    setCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nserror/1413924-domain
    domain(): cocoascript.NSErrorDomain;
    setDomain(): void;
    // doc://com.apple.documentation/documentation/foundation/nserror/1411580-userinfo
    userInfo(): cocoascript.id;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/foundation/nserror/1414418-localizeddescription
    localizedDescription(): cocoascript.NSString;
    setLocalizedDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nserror/1415950-localizedrecoveryoptions
    localizedRecoveryOptions(): cocoascript.NSString;
    setLocalizedRecoveryOptions(): void;
    // doc://com.apple.documentation/documentation/foundation/nserror/1407500-localizedrecoverysuggestion
    localizedRecoverySuggestion(): cocoascript.NSString;
    setLocalizedRecoverySuggestion(): void;
    // doc://com.apple.documentation/documentation/foundation/nserror/1412752-localizedfailurereason
    localizedFailureReason(): cocoascript.NSString;
    setLocalizedFailureReason(): void;
    // doc://com.apple.documentation/documentation/foundation/nserror/1408864-recoveryattempter
    recoveryAttempter(): cocoascript.id;
    setRecoveryAttempter(): void;
    // doc://com.apple.documentation/documentation/foundation/nserror/1414718-helpanchor
    helpAnchor(): cocoascript.NSString;
    setHelpAnchor(): void;
    //
    alloc():cocoascript.NSError;
    //
    init():cocoascript.NSError;
  }
}

declare const NSError: cocoascript.NSError;
declare namespace cocoascript {
  /**
   * An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.
   * doc://com.apple.documentation/documentation/foundation/nscoder
   */
  interface NSCoder extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nscoder/1417541-allowskeyedcoding
    allowsKeyedCoding(): cocoascript.BOOL;
    setAllowsKeyedCoding(): void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1416125-containsvalueforkey
    containsValueForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1642984-decodingfailurepolicy
    decodingFailurePolicy(): cocoascript.NSDecodingFailurePolicy;
    setDecodingFailurePolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1417865-encodearrayofobjctype
    encodeArrayOfObjCType_count_at(type: string, count: cocoascript.NSUInteger, array: void):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1409236-encodebool
    encodeBool_forKey(value: cocoascript.BOOL, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1418225-encodebycopyobject
    encodeBycopyObject(anObject: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1416279-encodebyrefobject
    encodeByrefObject(anObject: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1411664-encodebytes
    encodeBytes_length(byteaddr: void, length: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1413078-encodebytes
    encodeBytes_length_forKey(bytes: number, length: cocoascript.NSUInteger, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1415196-encodeconditionalobject
    encodeConditionalObject(object: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1413918-encodeconditionalobject
    encodeConditionalObject_forKey(object: cocoascript.NSCoder, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1411473-encodedataobject
    encodeDataObject(data: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1409008-encodedouble
    encodeDouble_forKey(value: number, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1414384-encodefloat
    encodeFloat_forKey(value: number, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1413906-encodeint
    encodeInt_forKey(value: number, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1411551-encodeinteger
    encodeInteger_forKey(value: cocoascript.NSInteger, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1412395-encodeint32
    encodeInt32_forKey(value: number, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1410440-encodeint64
    encodeInt64_forKey(value: number, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1442573-encodenxobject
    encodeNXObject(object: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1417647-encodeobject
    encodeObject(object: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1411568-encodeobject
    encodeObject_forKey(object: cocoascript.NSCoder, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1391138-encodepoint
    encodePoint(point: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1391114-encodepoint
    encodePoint_forKey(point: cocoascript.NSPoint, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1410643-encodepropertylist
    encodePropertyList(aPropertyList: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1391263-encoderect
    encodeRect(rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1391287-encoderect
    encodeRect_forKey(rect: cocoascript.NSRect, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1409439-encoderootobject
    encodeRootObject(rootObject: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1391291-encodesize
    encodeSize(size: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1391176-encodesize
    encodeSize_forKey(size: cocoascript.NSSize, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1414648-encodevalueofobjctype
    encodeValueOfObjCType_at(type: string, addr: void):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1442581-encodevaluesofobjctypes
    encodeValuesOfObjCTypes(types: string):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624502-encodecgaffinetransform
    encodeCGAffineTransform_forKey(transform: cocoascript.CGAffineTransform, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624520-encodecgpoint
    encodeCGPoint_forKey(point: cocoascript.CGPoint, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624472-encodecgrect
    encodeCGRect_forKey(rect: cocoascript.CGRect, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624482-encodecgsize
    encodeCGSize_forKey(size: cocoascript.CGSize, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624532-encodecgvector
    encodeCGVector_forKey(vector: cocoascript.CGVector, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/2865874-encodedirectionaledgeinsets
    encodeDirectionalEdgeInsets_forKey(insets: cocoascript.NSDirectionalEdgeInsets, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624481-encodeuiedgeinsets
    encodeUIEdgeInsets_forKey(insets: cocoascript.UIEdgeInsets, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624494-encodeuioffset
    encodeUIOffset_forKey(offset: cocoascript.UIOffset, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1388869-encodecmtime
    encodeCMTime_forKey(time: cocoascript.CMTime, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1386649-encodecmtimerange
    encodeCMTimeRange_forKey(timeRange: cocoascript.CMTimeRange, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1389496-encodecmtimemapping
    encodeCMTimeMapping_forKey(timeMapping: cocoascript.CMTimeMapping, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1409845-requiressecurecoding
    requiresSecureCoding(): cocoascript.BOOL;
    setRequiresSecureCoding(): void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1412486-allowedclasses
    allowedClasses(): cocoascript.Class;
    setAllowedClasses(): void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1442575-decodetoplevelobjectofclass
    decodeTopLevelObjectOfClass_forKey_error(aClass: cocoascript.Class, key: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSCoder;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1442539-decodetoplevelobjectofclasses
    decodeTopLevelObjectOfClasses_forKey_error(classes: cocoascript.Class, key: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSCoder;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1442553-decodetoplevelobjectandreturnerr
    decodeTopLevelObjectAndReturnError(error: cocoascript.NSError):cocoascript.NSCoder;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1442541-decodetoplevelobjectforkey
    decodeTopLevelObjectForKey_error(key: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSCoder;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1408354-decodearrayofobjctype
    decodeArrayOfObjCType_count_at(itemType: string, count: cocoascript.NSUInteger, array: void):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1409293-decodeboolforkey
    decodeBoolForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1411987-decodebytesforkey
    decodeBytesForKey_returnedLength(key: cocoascript.NSString, lengthp: cocoascript.NSUInteger):number;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1415441-decodebyteswithreturnedlength
    decodeBytesWithReturnedLength(lengthp: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1409876-decodedataobject
    decodeDataObject():cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1409374-decodedoubleforkey
    decodeDoubleForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1408104-decodefloatforkey
    decodeFloatForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1411168-decodeintforkey
    decodeIntForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1409246-decodeintegerforkey
    decodeIntegerForKey(key: cocoascript.NSString):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1408918-decodeint32forkey
    decodeInt32ForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1407878-decodeint64forkey
    decodeInt64ForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1442556-decodenxobject
    decodeNXObject():cocoascript.NSCoder;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1414478-decodeobject
    decodeObject():cocoascript.NSCoder;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1418185-decodeobjectforkey
    decodeObjectForKey(key: cocoascript.NSString):cocoascript.NSCoder;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1391189-decodepoint
    decodePoint():cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1391214-decodepointforkey
    decodePointForKey(key: cocoascript.NSString):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1411916-decodepropertylist
    decodePropertyList():cocoascript.NSCoder;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1391269-decoderect
    decodeRect():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1391116-decoderectforkey
    decodeRectForKey(key: cocoascript.NSString):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1391144-decodesize
    decodeSize():cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1391253-decodesizeforkey
    decodeSizeForKey(key: cocoascript.NSString):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1417159-decodevalueofobjctype
    decodeValueOfObjCType_at(type: string, data: void):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/2919430-decodevalueofobjctype
    decodeValueOfObjCType_at_size(type: string, data: void, size: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1442577-decodevaluesofobjctypes
    decodeValuesOfObjCTypes(types: string):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1442558-decodeobjectofclass
    decodeObjectOfClass_forKey(aClass: cocoascript.Class, key: cocoascript.NSString):cocoascript.NSCoder;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1442560-decodeobjectofclasses
    decodeObjectOfClasses_forKey(classes: cocoascript.Class, key: cocoascript.NSString):cocoascript.NSCoder;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1416284-decodepropertylistforkey
    decodePropertyListForKey(key: cocoascript.NSString):cocoascript.NSCoder;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1551277-decodenxcolor
    decodeNXColor():cocoascript.NSColor;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624478-decodecgaffinetransformforkey
    decodeCGAffineTransformForKey(key: cocoascript.NSString):cocoascript.CGAffineTransform;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624523-decodecgpointforkey
    decodeCGPointForKey(key: cocoascript.NSString):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624522-decodecgrectforkey
    decodeCGRectForKey(key: cocoascript.NSString):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624519-decodecgsizeforkey
    decodeCGSizeForKey(key: cocoascript.NSString):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624488-decodecgvectorforkey
    decodeCGVectorForKey(key: cocoascript.NSString):cocoascript.CGVector;
    // doc://com.apple.documentation/documentation/foundation/nscoder/2865873-decodedirectionaledgeinsetsforke
    decodeDirectionalEdgeInsetsForKey(key: cocoascript.NSString):cocoascript.NSDirectionalEdgeInsets;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624492-decodeuiedgeinsetsforkey
    decodeUIEdgeInsetsForKey(key: cocoascript.NSString):cocoascript.UIEdgeInsets;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1624507-decodeuioffsetforkey
    decodeUIOffsetForKey(key: cocoascript.NSString):cocoascript.UIOffset;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1389544-decodecmtimeforkey
    decodeCMTimeForKey(key: cocoascript.NSString):cocoascript.CMTime;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1385718-decodecmtimerangeforkey
    decodeCMTimeRangeForKey(key: cocoascript.NSString):cocoascript.CMTimeRange;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1389860-decodecmtimemappingforkey
    decodeCMTimeMappingForKey(key: cocoascript.NSString):cocoascript.CMTimeMapping;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1411455-failwitherror
    failWithError(error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1643263-error
    error(): cocoascript.NSError;
    setError(): void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1413205-systemversion
    systemVersion(): number;
    setSystemVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1417703-versionforclassname
    versionForClassName(className: cocoascript.NSString):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1442570-objectzone
    objectZone():cocoascript.NSZone;
    // doc://com.apple.documentation/documentation/foundation/nscoder/1442547-setobjectzone
    setObjectZone(zone: cocoascript.NSZone):void;
    // doc://com.apple.documentation/documentation/foundation/nscoder/3563977-decodearrayofobjectsofclass
    decodeArrayOfObjectsOfClass_forKey(cls: cocoascript.Class, key: cocoascript.NSString):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nscoder/3563978-decodearrayofobjectsofclasses
    decodeArrayOfObjectsOfClasses_forKey(classes: cocoascript.Class, key: cocoascript.NSString):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nscoder/3563979-decodedictionarywithkeysofclass
    decodeDictionaryWithKeysOfClass_objectsOfClass_forKey(keyCls: cocoascript.Class, objectCls: cocoascript.Class, key: cocoascript.NSString):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nscoder/3563980-decodedictionarywithkeysofclasse
    decodeDictionaryWithKeysOfClasses_objectsOfClasses_forKey(keyClasses: cocoascript.Class, objectClasses: cocoascript.Class, key: cocoascript.NSString):cocoascript.NSDictionary;
    //
    alloc():cocoascript.NSCoder;
    //
    init():cocoascript.NSCoder;
  }
}

declare const NSCoder: cocoascript.NSCoder;
// doc://com.apple.documentation/documentation/uikit/1624505-cgaffinetransformfromstring
declare const CGAffineTransformFromString: cocoascript.NSString;
// doc://com.apple.documentation/documentation/uikit/1624477-cgpointfromstring
declare const CGPointFromString: cocoascript.NSString;
// doc://com.apple.documentation/documentation/uikit/1624508-cgrectfromstring
declare const CGRectFromString: cocoascript.NSString;
// doc://com.apple.documentation/documentation/uikit/1624484-cgsizefromstring
declare const CGSizeFromString: cocoascript.NSString;
// doc://com.apple.documentation/documentation/uikit/1624513-cgvectorfromstring
declare const CGVectorFromString: cocoascript.NSString;
// doc://com.apple.documentation/documentation/uikit/2865991-nsdirectionaledgeinsetsfromstrin
declare const NSDirectionalEdgeInsetsFromString: cocoascript.NSString;
// doc://com.apple.documentation/documentation/uikit/1624525-uiedgeinsetsfromstring
declare const UIEdgeInsetsFromString: cocoascript.NSString;
// doc://com.apple.documentation/documentation/uikit/1624509-uioffsetfromstring
declare const UIOffsetFromString: cocoascript.NSString;
// doc://com.apple.documentation/documentation/uikit/1624474-nsstringfromcgrect
declare const NSStringFromCGRect: cocoascript.CGRect;
// doc://com.apple.documentation/documentation/uikit/1624476-nsstringfromcgvector
declare const NSStringFromCGVector: cocoascript.CGVector;
// doc://com.apple.documentation/documentation/uikit/1624497-nsstringfromcgaffinetransform
declare const NSStringFromCGAffineTransform: cocoascript.CGAffineTransform;
// doc://com.apple.documentation/documentation/uikit/1624504-nsstringfromcgpoint
declare const NSStringFromCGPoint: cocoascript.CGPoint;
// doc://com.apple.documentation/documentation/uikit/1624514-nsstringfromcgsize
declare const NSStringFromCGSize: cocoascript.CGSize;
// doc://com.apple.documentation/documentation/uikit/2865946-nsstringfromdirectionaledgeinset
declare const NSStringFromDirectionalEdgeInsets: cocoascript.NSDirectionalEdgeInsets;
// doc://com.apple.documentation/documentation/uikit/1624527-nsstringfromuiedgeinsets
declare const NSStringFromUIEdgeInsets: cocoascript.UIEdgeInsets;
// doc://com.apple.documentation/documentation/uikit/1624491-nsstringfromuioffset
declare const NSStringFromUIOffset: cocoascript.UIOffset;
declare namespace cocoascript {
  /**
   * A definition of logical conditions used to constrain a search either for a fetch or for in-memory filtering.
   * doc://com.apple.documentation/documentation/foundation/nspredicate
   */
  interface NSPredicate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nspredicate/1413227-predicatewithsubstitutionvariabl
    predicateWithSubstitutionVariables(variables: cocoascript.NSPredicate):cocoascript.NSPredicate;
    // doc://com.apple.documentation/documentation/foundation/nspredicate/1417924-evaluatewithobject
    evaluateWithObject(object: cocoascript.NSPredicate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nspredicate/1407759-evaluatewithobject
    evaluateWithObject_substitutionVariables(object: cocoascript.NSPredicate, bindings: cocoascript.NSPredicate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nspredicate/1416310-allowevaluation
    allowEvaluation():void;
    // doc://com.apple.documentation/documentation/foundation/nspredicate/1411605-predicateformat
    predicateFormat(): cocoascript.NSString;
    setPredicateFormat(): void;
    //
    alloc():cocoascript.NSPredicate;
    //
    init():cocoascript.NSPredicate;
  }
}

declare const NSPredicate: cocoascript.NSPredicate;
declare namespace cocoascript {
  interface NSEdgeInsets {
  }
}declare namespace cocoascript {
  /**
   * A protocol that enables encoding and decoding in a manner that is robust against object substitution attacks.
   * doc://com.apple.documentation/documentation/foundation/nssecurecoding
   */
  interface NSSecureCoding extends NSCoding {
    // doc://com.apple.documentation/documentation/foundation/nssecurecoding/1855946-supportssecurecoding
    supportsSecureCoding(): cocoascript.BOOL;
    setSupportsSecureCoding(): void;
  }
}
declare namespace cocoascript {
  /**
   * A timer that fires after a certain time interval has elapsed, sending a specified message to a target object.
   * doc://com.apple.documentation/documentation/foundation/nstimer
   */
  interface NSTimer extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nstimer/2091887-initwithfiredate
    initWithFireDate_interval_repeats_block(date: cocoascript.NSDate, interval: cocoascript.NSTimeInterval, repeats: cocoascript.BOOL, block: cocoascript.NSTimer):cocoascript.NSTimer;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1415700-initwithfiredate
    initWithFireDate_interval_target_selector_userInfo_repeats(date: cocoascript.NSDate, ti: cocoascript.NSTimeInterval, t: cocoascript.NSTimer, s: cocoascript.SEL, ui: cocoascript.NSTimer, rep: cocoascript.BOOL):cocoascript.NSTimer;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1414035-fire
    fire():void;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1415405-invalidate
    invalidate():void;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1408249-valid
    valid(): cocoascript.BOOL;
    setValid(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1407353-firedate
    fireDate(): cocoascript.NSDate;
    setFireDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1409024-timeinterval
    timeInterval(): cocoascript.NSTimeInterval;
    setTimeInterval(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1408911-userinfo
    userInfo(): cocoascript.id;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1415085-tolerance
    tolerance(): cocoascript.NSTimeInterval;
    setTolerance(): void;
    //
    alloc():cocoascript.NSTimer;
    //
    init():cocoascript.NSTimer;
  }
}

declare const NSTimer: cocoascript.NSTimer;
// doc://com.apple.documentation/documentation/foundation/nszerosize
declare const NSZeroSize: cocoascript.NSSize;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nspoint
  type NSPoint = cocoascript.CGPoint;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nssize
  type NSSize = cocoascript.CGSize;
}
// doc://com.apple.documentation/documentation/foundation/nsinvalidargumentexception
declare const NSInvalidArgumentException: cocoascript.NSExceptionName;
declare namespace cocoascript {
  /**
   * An item provider for conveying data or a file between processes during drag and drop or copy/paste activities, or from a host app to an app extension.
   * doc://com.apple.documentation/documentation/foundation/nsitemprovider
   */
  interface NSItemProvider extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403911-initwithcontentsofurl
    initWithContentsOfURL(fileURL: cocoascript.NSURL):cocoascript.NSItemProvider;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403933-initwithitem
    initWithItem_typeIdentifier(item: cocoascript.NSSecureCoding, typeIdentifier: cocoascript.NSString):cocoascript.NSItemProvider;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888323-init
    init():cocoascript.NSItemProvider;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888328-initwithobject
    initWithObject(object: cocoascript.NSItemProviderWriting):cocoascript.NSItemProvider;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888333-canloadobjectofclass
    canLoadObjectOfClass(aClass: cocoascript.NSItemProviderReading):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403921-hasitemconformingtotypeidentifie
    hasItemConformingToTypeIdentifier(typeIdentifier: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403900-loaditemfortypeidentifier
    loadItemForTypeIdentifier_options_completionHandler(typeIdentifier: cocoascript.NSString, options: cocoascript.NSDictionary, completionHandler: cocoascript.NSItemProviderCompletionHandler):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888331-loaddatarepresentationfortypeide
    loadDataRepresentationForTypeIdentifier_completionHandler(typeIdentifier: cocoascript.NSString, completionHandler: cocoascript.NSError):cocoascript.NSProgress;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888338-loadfilerepresentationfortypeide
    loadFileRepresentationForTypeIdentifier_completionHandler(typeIdentifier: cocoascript.NSString, completionHandler: cocoascript.NSError):cocoascript.NSProgress;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888335-loadinplacefilerepresentationfor
    loadInPlaceFileRepresentationForTypeIdentifier_completionHandler(typeIdentifier: cocoascript.NSString, completionHandler: cocoascript.NSError):cocoascript.NSProgress;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888336-loadobjectofclass
    loadObjectOfClass_completionHandler(aClass: cocoascript.NSItemProviderReading, completionHandler: cocoascript.NSError):cocoascript.NSProgress;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888320-hasrepresentationconformingtotyp
    hasRepresentationConformingToTypeIdentifier_fileOptions(typeIdentifier: cocoascript.NSString, fileOptions: cocoascript.NSItemProviderFileOptions):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888334-registeredtypeidentifierswithfil
    registeredTypeIdentifiersWithFileOptions(fileOptions: cocoascript.NSItemProviderFileOptions):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888319-registerdatarepresentationfortyp
    registerDataRepresentationForTypeIdentifier_visibility_loadHandler(typeIdentifier: cocoascript.NSString, visibility: cocoascript.NSItemProviderRepresentationVisibility, loadHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888337-registerfilerepresentationfortyp
    registerFileRepresentationForTypeIdentifier_fileOptions_visibility_loadHandler(typeIdentifier: cocoascript.NSString, fileOptions: cocoascript.NSItemProviderFileOptions, visibility: cocoascript.NSItemProviderRepresentationVisibility, loadHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888321-registerobject
    registerObject_visibility(object: cocoascript.NSItemProviderWriting, visibility: cocoascript.NSItemProviderRepresentationVisibility):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888329-registerobjectofclass
    registerObjectOfClass_visibility_loadHandler(aClass: cocoascript.NSItemProviderWriting, visibility: cocoascript.NSItemProviderRepresentationVisibility, loadHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2890244-suggestedname
    suggestedName(): cocoascript.NSString;
    setSuggestedName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403917-registeritemfortypeidentifier
    registerItemForTypeIdentifier_loadHandler(typeIdentifier: cocoascript.NSString, loadHandler: cocoascript.NSItemProviderLoadHandler):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403923-registeredtypeidentifiers
    registeredTypeIdentifiers(): cocoascript.NSString;
    setRegisteredTypeIdentifiers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403925-loadpreviewimagewithoptions
    loadPreviewImageWithOptions_completionHandler(options: cocoascript.NSDictionary, completionHandler: cocoascript.NSItemProviderCompletionHandler):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403904-previewimagehandler
    previewImageHandler(): cocoascript.NSItemProviderLoadHandler;
    setPreviewImageHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1528569-sourceframe
    sourceFrame(): cocoascript.NSRect;
    setSourceFrame(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1528571-containerframe
    containerFrame(): cocoascript.NSRect;
    setContainerFrame(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1528574-preferredpresentationsize
    preferredPresentationSize(): cocoascript.CGSize;
    setPreferredPresentationSize(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2921257-preferredpresentationstyle
    preferredPresentationStyle(): cocoascript.UIPreferredPresentationStyle;
    setPreferredPresentationStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2909055-teamdata
    teamData(): cocoascript.NSData;
    setTeamData(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1644692-registercloudkitshare
    registerCloudKitShare_container(share: cocoascript.CKShare, container: cocoascript.CKContainer):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1644475-registercloudkitsharewithprepara
    registerCloudKitShareWithPreparationHandler(preparationHandler: cocoascript.NSError):void;
    //
    alloc():cocoascript.NSItemProvider;
    //
    init():cocoascript.NSItemProvider;
  }
}

declare const NSItemProvider: cocoascript.NSItemProvider;
// doc://com.apple.documentation/documentation/foundation/nsitemprovidererrordomain
declare const NSItemProviderErrorDomain: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The protocol you implement on a class to allow an item provider to create an instance of the class.
   * doc://com.apple.documentation/documentation/foundation/nsitemproviderreading
   */
  interface NSItemProviderReading extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsitemproviderreading/2888305-readabletypeidentifiersforitempr
    readableTypeIdentifiersForItemProvider(): cocoascript.NSString;
    setReadableTypeIdentifiersForItemProvider(): void;
  }
}
declare namespace cocoascript {
  /**
   * The protocol you implement on a class to allow an item provider to retrieve data from an instance of the class.
   * doc://com.apple.documentation/documentation/foundation/nsitemproviderwriting
   */
  interface NSItemProviderWriting extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsitemproviderwriting/2888302-loaddatawithtypeidentifier
    loadDataWithTypeIdentifier_forItemProviderCompletionHandler(typeIdentifier: cocoascript.NSString, completionHandler: cocoascript.NSError):cocoascript.NSProgress;
    // doc://com.apple.documentation/documentation/foundation/nsitemproviderwriting/2888301-writabletypeidentifiersforitempr
    writableTypeIdentifiersForItemProvider(): cocoascript.NSString;
    setWritableTypeIdentifiersForItemProvider(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemproviderwriting/2888299-writabletypeidentifiersforitempr
    writableTypeIdentifiersForItemProvider(): cocoascript.NSString;
    setWritableTypeIdentifiersForItemProvider(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemproviderwriting/2921254-itemprovidervisibilityforreprese
    itemProviderVisibilityForRepresentationWithTypeIdentifier(typeIdentifier: cocoascript.NSString):cocoascript.NSItemProviderRepresentationVisibility;
  }
}
declare namespace cocoascript {
  /**
   * A simple container for a single C or Objective-C data item.
   * doc://com.apple.documentation/documentation/foundation/nsvalue
   */
  interface NSValue extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1411621-initwithbytes
    initWithBytes_objCType(value: void, type: string):cocoascript.NSValue;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1415141-getvalue
    getValue(value: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1412365-objctype
    objCType(): string;
    setObjCType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1410668-pointervalue
    pointerValue(): void;
    setPointerValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1412287-nonretainedobjectvalue
    nonretainedObjectValue(): cocoascript.id;
    setNonretainedObjectValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1413902-rangevalue
    rangeValue(): cocoascript.NSRange;
    setRangeValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1391255-pointvalue
    pointValue(): cocoascript.NSPoint;
    setPointValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1391301-sizevalue
    sizeValue(): cocoascript.NSSize;
    setSizeValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1391171-rectvalue
    rectValue(): cocoascript.NSRect;
    setRectValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1624534-cgpointvalue
    CGPointValue(): cocoascript.CGPoint;
    setCGPointValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1624486-cgvectorvalue
    CGVectorValue(): cocoascript.CGVector;
    setCGVectorValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1624489-cgsizevalue
    CGSizeValue(): cocoascript.CGSize;
    setCGSizeValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1624506-cgrectvalue
    CGRectValue(): cocoascript.CGRect;
    setCGRectValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1624512-cgaffinetransformvalue
    CGAffineTransformValue(): cocoascript.CGAffineTransform;
    setCGAffineTransformValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1624517-uiedgeinsetsvalue
    UIEdgeInsetsValue(): cocoascript.UIEdgeInsets;
    setUIEdgeInsetsValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1624526-uioffsetvalue
    UIOffsetValue(): cocoascript.UIOffset;
    setUIOffsetValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1436572-catransform3dvalue
    CATransform3DValue(): cocoascript.CATransform3D;
    setCATransform3DValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1388151-cmtimevalue
    CMTimeValue(): cocoascript.CMTime;
    setCMTimeValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1385930-cmtimerangevalue
    CMTimeRangeValue(): cocoascript.CMTimeRange;
    setCMTimeRangeValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1387277-cmtimemappingvalue
    CMTimeMappingValue(): cocoascript.CMTimeMapping;
    setCMTimeMappingValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1452495-mkcoordinatevalue
    MKCoordinateValue(): cocoascript.CLLocationCoordinate2D;
    setMKCoordinateValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1452516-mkcoordinatespanvalue
    MKCoordinateSpanValue(): cocoascript.MKCoordinateSpan;
    setMKCoordinateSpanValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1409669-scnvector3value
    SCNVector3Value(): cocoascript.SCNVector3;
    setSCNVector3Value(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1409725-scnvector4value
    SCNVector4Value(): cocoascript.SCNVector4;
    setSCNVector4Value(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1409684-scnmatrix4value
    SCNMatrix4Value(): cocoascript.SCNMatrix4;
    setSCNMatrix4Value(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1409038-isequaltovalue
    isEqualToValue(value: cocoascript.NSValue):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1417896-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSValue;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/2865836-directionaledgeinsetsvalue
    directionalEdgeInsetsValue(): cocoascript.NSDirectionalEdgeInsets;
    setDirectionalEdgeInsetsValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/1391123-edgeinsetsvalue
    edgeInsetsValue(): cocoascript.NSEdgeInsets;
    setEdgeInsetsValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsvalue/2919632-getvalue
    getValue_size(value: void, size: cocoascript.NSUInteger):void;
    //
    alloc():cocoascript.NSValue;
    //
    init():cocoascript.NSValue;
  }
}

declare const NSValue: cocoascript.NSValue;
declare namespace cocoascript {
  /**
   * A notification dispatch mechanism that enables the broadcast of information to registered observers.
   * doc://com.apple.documentation/documentation/foundation/nsnotificationcenter
   */
  interface NSNotificationCenter extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1414169-defaultcenter
    defaultCenter(): cocoascript.NSNotificationCenter;
    setDefaultCenter(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1411723-addobserverforname
    addObserverForName_object_queue_usingBlock(name: cocoascript.NSNotificationName, obj: cocoascript.NSNotificationCenter, queue: cocoascript.NSOperationQueue, block: cocoascript.NSNotification):cocoascript.NSObject;
    // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1415360-addobserver
    addObserver_selector_name_object(observer: cocoascript.NSNotificationCenter, aSelector: cocoascript.SEL, aName: cocoascript.NSNotificationName, anObject: cocoascript.NSNotificationCenter):void;
    // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1407263-removeobserver
    removeObserver_name_object(observer: cocoascript.NSNotificationCenter, aName: cocoascript.NSNotificationName, anObject: cocoascript.NSNotificationCenter):void;
    // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1413994-removeobserver
    removeObserver(observer: cocoascript.NSNotificationCenter):void;
    // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1410472-postnotification
    postNotification(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1410608-postnotificationname
    postNotificationName_object_userInfo(aName: cocoascript.NSNotificationName, anObject: cocoascript.NSNotificationCenter, aUserInfo: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1415812-postnotificationname
    postNotificationName_object(aName: cocoascript.NSNotificationName, anObject: cocoascript.NSNotificationCenter):void;
    //
    alloc():cocoascript.NSNotificationCenter;
    //
    init():cocoascript.NSNotificationCenter;
  }
}

declare const NSNotificationCenter: cocoascript.NSNotificationCenter;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsrect
  type NSRect = cocoascript.CGRect;
}
declare namespace cocoascript {
  /**
   * The elementary methods adopted by classes that define lock objects.
   * doc://com.apple.documentation/documentation/foundation/nslocking
   */
  interface NSLocking {
    // doc://com.apple.documentation/documentation/foundation/nslocking/1416318-lock
    lock():void;
    // doc://com.apple.documentation/documentation/foundation/nslocking/1418241-unlock
    unlock():void;
  }
}
declare namespace cocoascript {
  /**
   * The optional methods implemented by the delegate of a spell server.
   * doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate
   */
  interface NSSpellServerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1409733-spellserver
    spellServer_checkString_offset_types_options_orthography_wordCount(sender: cocoascript.NSSpellServer, stringToCheck: cocoascript.NSString, offset: cocoascript.NSUInteger, checkingTypes: cocoascript.NSTextCheckingTypes, options: cocoascript.NSSpellServerDelegate, orthography: cocoascript.NSOrthography, wordCount: cocoascript.NSInteger):cocoascript.NSTextCheckingResult;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1410726-spellserver
    spellServer_suggestGuessesForWord_inLanguage(sender: cocoascript.NSSpellServer, word: cocoascript.NSString, language: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1409242-spellserver
    spellServer_checkGrammarInString_language_details(sender: cocoascript.NSSpellServer, stringToCheck: cocoascript.NSString, language: cocoascript.NSString, details: cocoascript.NSSpellServerDelegate):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1413235-spellserver
    spellServer_findMisspelledWordInString_language_wordCount_countOnly(sender: cocoascript.NSSpellServer, stringToCheck: cocoascript.NSString, language: cocoascript.NSString, wordCount: cocoascript.NSInteger, countOnly: cocoascript.BOOL):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1417315-spellserver
    spellServer_didForgetWord_inLanguage(sender: cocoascript.NSSpellServer, word: cocoascript.NSString, language: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1407851-spellserver
    spellServer_didLearnWord_inLanguage(sender: cocoascript.NSSpellServer, word: cocoascript.NSString, language: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1414606-spellserver
    spellServer_suggestCompletionsForPartialWordRange_inString_language(sender: cocoascript.NSSpellServer, range: cocoascript.NSRange, string: cocoascript.NSString, language: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1412894-spellserver
    spellServer_recordResponse_toCorrection_forWord_language(sender: cocoascript.NSSpellServer, response: cocoascript.NSUInteger, correction: cocoascript.NSString, word: cocoascript.NSString, language: cocoascript.NSString):void;
  }
}
declare namespace cocoascript {
  /**
   * A dynamic plain-text Unicode string object.
   * doc://com.apple.documentation/documentation/foundation/nsmutablestring
   */
  interface NSMutableString extends NSString {
    // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1416610-initwithcapacity
    initWithCapacity(capacity: cocoascript.NSUInteger):cocoascript.NSMutableString;
    // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1497308-appendformat
    appendFormat(format: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1417883-appendstring
    appendString(aString: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1415742-applytransform
    applyTransform_reverse_range_updatedRange(transform: cocoascript.NSStringTransform, reverse: cocoascript.BOOL, range: cocoascript.NSRange, resultingRange: cocoascript.NSRangePointer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1415003-deletecharactersinrange
    deleteCharactersInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1410999-insertstring
    insertString_atIndex(aString: cocoascript.NSString, loc: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1416524-replacecharactersinrange
    replaceCharactersInRange_withString(range: cocoascript.NSRange, aString: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1412453-replaceoccurrencesofstring
    replaceOccurrencesOfString_withString_options_range(target: cocoascript.NSString, replacement: cocoascript.NSString, options: cocoascript.NSStringCompareOptions, searchRange: cocoascript.NSRange):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1409483-setstring
    setString(aString: cocoascript.NSString):void;
    //
    alloc():cocoascript.NSMutableString;
    //
    init():cocoascript.NSMutableString;
  }
}

declare const NSMutableString: cocoascript.NSMutableString;
declare namespace cocoascript {
  /**
   * A protocol that mutable objects adopt to provide functional copies of themselves.
   * doc://com.apple.documentation/documentation/foundation/nsmutablecopying
   */
  interface NSMutableCopying {
    // doc://com.apple.documentation/documentation/foundation/nsmutablecopying/1414175-mutablecopywithzone
    mutableCopyWithZone(zone: cocoascript.NSZone):cocoascript.NSMutableCopying;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsattributedstringkey
  type NSAttributedStringKey = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsattributedstringenumerationoptions
  type NSAttributedStringEnumerationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A representation of a node (a file, directory, or symbolic link) in the file system.
   * doc://com.apple.documentation/documentation/foundation/nsfilewrapper
   */
  interface NSFileWrapper extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415658-initwithurl
    initWithURL_options_error(url: cocoascript.NSURL, options: cocoascript.NSFileWrapperReadingOptions, outError: cocoascript.NSError):cocoascript.NSFileWrapper;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1408388-initwithpath
    initWithPath(path: cocoascript.NSString):cocoascript.NSFileWrapper;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415121-initdirectorywithfilewrappers
    initDirectoryWithFileWrappers(childrenByPreferredName: cocoascript.NSFileWrapper):cocoascript.NSFileWrapper;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1409508-initregularfilewithcontents
    initRegularFileWithContents(contents: cocoascript.NSData):cocoascript.NSFileWrapper;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1411268-initsymboliclinkwithdestination
    initSymbolicLinkWithDestination(path: cocoascript.NSString):cocoascript.NSFileWrapper;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415098-initsymboliclinkwithdestinationu
    initSymbolicLinkWithDestinationURL(url: cocoascript.NSURL):cocoascript.NSFileWrapper;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1407515-initwithserializedrepresentation
    initWithSerializedRepresentation(serializeRepresentation: cocoascript.NSData):cocoascript.NSFileWrapper;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415680-regularfile
    regularFile(): cocoascript.BOOL;
    setRegularFile(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1409030-directory
    directory(): cocoascript.BOOL;
    setDirectory(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1408125-symboliclink
    symbolicLink(): cocoascript.BOOL;
    setSymbolicLink(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1409437-filewrappers
    fileWrappers(): cocoascript.NSFileWrapper;
    setFileWrappers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415067-addfilewrapper
    addFileWrapper(child: cocoascript.NSFileWrapper):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1417343-removefilewrapper
    removeFileWrapper(child: cocoascript.NSFileWrapper):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1417211-addfilewithpath
    addFileWithPath(path: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1418374-addregularfilewithcontents
    addRegularFileWithContents_preferredFilename(data: cocoascript.NSData, fileName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1414604-addsymboliclinkwithdestination
    addSymbolicLinkWithDestination_preferredFilename(path: cocoascript.NSString, filename: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1407541-keyforfilewrapper
    keyForFileWrapper(child: cocoascript.NSFileWrapper):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1418302-symboliclinkdestination
    symbolicLinkDestination():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1408364-symboliclinkdestinationurl
    symbolicLinkDestinationURL(): cocoascript.NSURL;
    setSymbolicLinkDestinationURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1407738-needstobeupdatedfrompath
    needsToBeUpdatedFromPath(path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1408360-matchescontentsofurl
    matchesContentsOfURL(url: cocoascript.NSURL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1416300-updatefrompath
    updateFromPath(path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1411645-readfromurl
    readFromURL_options_error(url: cocoascript.NSURL, options: cocoascript.NSFileWrapperReadingOptions, outError: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1412119-serializedrepresentation
    serializedRepresentation(): cocoascript.NSData;
    setSerializedRepresentation(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1416684-filename
    filename(): cocoascript.NSString;
    setFilename(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1409368-preferredfilename
    preferredFilename(): cocoascript.NSString;
    setPreferredFilename(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1412745-fileattributes
    fileAttributes(): cocoascript.id;
    setFileAttributes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1410178-regularfilecontents
    regularFileContents(): cocoascript.NSData;
    setRegularFileContents(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415079-writetofile
    writeToFile_atomically_updateFilenames(path: cocoascript.NSString, atomicFlag: cocoascript.BOOL, updateFilenamesFlag: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415981-writetourl
    writeToURL_options_originalContentsURL_error(url: cocoascript.NSURL, options: cocoascript.NSFileWrapperWritingOptions, originalContentsURL: cocoascript.NSURL, outError: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1413123-icon
    icon(): cocoascript.NSImage;
    setIcon(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1416358-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSFileWrapper;
    //
    alloc():cocoascript.NSFileWrapper;
    //
    init():cocoascript.NSFileWrapper;
  }
}

declare const NSFileWrapper: cocoascript.NSFileWrapper;
declare namespace cocoascript {
  /**
   * An interface for objects that report progress using a single progress instance.
   * doc://com.apple.documentation/documentation/foundation/nsprogressreporting
   */
  interface NSProgressReporting extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsprogressreporting/1412781-progress
    progress(): cocoascript.NSProgress;
    setProgress(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsrectedge
  type NSRectEdge = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A container for information broadcast through a notification center to all registered observers.
   * doc://com.apple.documentation/documentation/foundation/nsnotification
   */
  interface NSNotification extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsnotification/1412595-init
    init():cocoascript.NSNotification;
    // doc://com.apple.documentation/documentation/foundation/nsnotification/1412464-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSNotification;
    // doc://com.apple.documentation/documentation/foundation/nsnotification/1415764-initwithname
    initWithName_object_userInfo(name: cocoascript.NSNotificationName, object: cocoascript.NSNotification, userInfo: cocoascript.NSDictionary):cocoascript.NSNotification;
    // doc://com.apple.documentation/documentation/foundation/nsnotification/1416472-name
    name(): cocoascript.NSNotificationName;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnotification/1414469-object
    object(): cocoascript.id;
    setObject(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnotification/1409222-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    //
    alloc():cocoascript.NSNotification;
    //
    init():cocoascript.NSNotification;
  }
}

declare const NSNotification: cocoascript.NSNotification;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsnotificationname
  type NSNotificationName = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * A static unordered collection of unique objects.
   * doc://com.apple.documentation/documentation/foundation/nsset
   */
  interface NSSet extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsset/1416316-setbyaddingobject
    setByAddingObject(anObject: any):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1408217-setbyaddingobjectsfromset
    setByAddingObjectsFromSet(other: any):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1418438-setbyaddingobjectsfromarray
    setByAddingObjectsFromArray(other: any):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1408152-initwitharray
    initWithArray(array: any):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1574822-initwithobjects
    initWithObjects(firstObj: any):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1407458-initwithobjects
    initWithObjects_count(objects: any, cnt: cocoascript.NSUInteger):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1410612-initwithset
    initWithSet(set: any):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1408407-initwithset
    initWithSet_copyItems(set: any, flag: cocoascript.BOOL):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1409698-init
    init():cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1416229-count
    count(): cocoascript.NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1417653-allobjects
    allObjects(): any;
    setAllObjects(): void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1416575-anyobject
    anyObject():void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1414555-containsobject
    containsObject(anObject: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsset/1416324-filteredsetusingpredicate
    filteredSetUsingPredicate(predicate: cocoascript.NSPredicate):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1574819-makeobjectsperformselector
    makeObjectsPerformSelector(aSelector: cocoascript.SEL):void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1574821-makeobjectsperformselector
    makeObjectsPerformSelector_withObject(aSelector: cocoascript.SEL, argument: cocoascript.NSSet):void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1412896-member
    member(object: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1412373-objectenumerator
    objectEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsset/1418129-enumerateobjectsusingblock
    enumerateObjectsUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1412024-enumerateobjectswithoptions
    enumerateObjectsWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1414392-objectspassingtest
    objectsPassingTest(predicate: cocoascript.BOOL):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1416826-objectswithoptions
    objectsWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1418319-issubsetofset
    isSubsetOfSet(otherSet: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsset/1417472-intersectsset
    intersectsSet(otherSet: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsset/1414829-isequaltoset
    isEqualToSet(otherSet: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsset/1418386-valueforkey
    valueForKey(key: cocoascript.NSString):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1408322-setvalue
    setValue_forKey(value: cocoascript.NSSet, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1416427-sortedarrayusingdescriptors
    sortedArrayUsingDescriptors(sortDescriptors: cocoascript.NSSortDescriptor):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsset/1414043-addobserver
    addObserver_forKeyPath_options_context(observer: cocoascript.NSObject, keyPath: cocoascript.NSString, options: cocoascript.NSKeyValueObservingOptions, context: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1415413-removeobserver
    removeObserver_forKeyPath_context(observer: cocoascript.NSObject, keyPath: cocoascript.NSString, context: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1410212-removeobserver
    removeObserver_forKeyPath(observer: cocoascript.NSObject, keyPath: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1418176-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsset/1417205-descriptionwithlocale
    descriptionWithLocale(locale: cocoascript.NSSet):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsset/1408221-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSSet;
    // doc://com.apple.documentation/documentation/foundation/nsset/1528216-enumerateindexpathswithoptions
    enumerateIndexPathsWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    //
    alloc():cocoascript.NSSet;
    //
    init():cocoascript.NSSet;
  }
}

declare const NSSet: cocoascript.NSSet;
declare namespace cocoascript {
  interface NSRange {
  }
}declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nstextcheckingtypes
  type NSTextCheckingTypes = number;
}
declare namespace cocoascript {
  /**
   * An occurrence of textual content found during the analysis of a block of text, such as when matching a regular expression.
   * doc://com.apple.documentation/documentation/foundation/nstextcheckingresult
   */
  interface NSTextCheckingResult extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1415852-range
    range(): cocoascript.NSRange;
    setRange(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1407779-resulttype
    resultType(): cocoascript.NSTextCheckingType;
    setResultType(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1407475-numberofranges
    numberOfRanges(): cocoascript.NSUInteger;
    setNumberOfRanges(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1416732-rangeatindex
    rangeAtIndex(idx: cocoascript.NSUInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1412681-replacementstring
    replacementString(): cocoascript.NSString;
    setReplacementString(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1417393-regularexpression
    regularExpression(): cocoascript.NSRegularExpression;
    setRegularExpression(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1407367-components
    components(): cocoascript.NSString;
    setComponents(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1417843-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1413728-addresscomponents
    addressComponents(): cocoascript.NSString;
    setAddressComponents(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1415511-phonenumber
    phoneNumber(): cocoascript.NSString;
    setPhoneNumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1414289-date
    date(): cocoascript.NSDate;
    setDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1415044-duration
    duration(): cocoascript.NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1418476-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1414551-orthography
    orthography(): cocoascript.NSOrthography;
    setOrthography(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1408959-grammardetails
    grammarDetails(): cocoascript.id;
    setGrammarDetails(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1417597-resultbyadjustingrangeswithoffse
    resultByAdjustingRangesWithOffset(offset: cocoascript.NSInteger):cocoascript.NSTextCheckingResult;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1415454-alternativestrings
    alternativeStrings(): cocoascript.NSString;
    setAlternativeStrings(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/2915200-rangewithname
    rangeWithName(name: cocoascript.NSString):cocoascript.NSRange;
    //
    alloc():cocoascript.NSTextCheckingResult;
    //
    init():cocoascript.NSTextCheckingResult;
  }
}

declare const NSTextCheckingResult: cocoascript.NSTextCheckingResult;
declare namespace cocoascript {
  /**
   * An abstract class that represents a communication channel.
   * doc://com.apple.documentation/documentation/foundation/nsport
   */
  interface NSPort extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsport/1399521-invalidate
    invalidate():void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399503-valid
    valid(): cocoascript.BOOL;
    setValid(): void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399527-setdelegate
    setDelegate(anObject: cocoascript.NSPortDelegate):void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399545-delegate
    delegate():cocoascript.NSPortDelegate;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399553-addconnection
    addConnection_toRunLoop_forMode(conn: cocoascript.NSConnection, runLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399501-removeconnection
    removeConnection_fromRunLoop_forMode(conn: cocoascript.NSConnection, runLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399537-sendbeforedate
    sendBeforeDate_components_from_reserved(limitDate: cocoascript.NSDate, components: cocoascript.NSMutableArray, receivePort: cocoascript.NSPort, headerSpaceReserved: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399482-sendbeforedate
    sendBeforeDate_msgid_components_from_reserved(limitDate: cocoascript.NSDate, msgID: cocoascript.NSUInteger, components: cocoascript.NSMutableArray, receivePort: cocoascript.NSPort, headerSpaceReserved: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399529-reservedspacelength
    reservedSpaceLength(): cocoascript.NSUInteger;
    setReservedSpaceLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399525-removefromrunloop
    removeFromRunLoop_forMode(runLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399517-scheduleinrunloop
    scheduleInRunLoop_forMode(runLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    //
    alloc():cocoascript.NSPort;
    //
    init():cocoascript.NSPort;
  }
}

declare const NSPort: cocoascript.NSPort;
declare namespace cocoascript {
  /**
   * An abstract class that declares an interface for objects that create, interpret, and validate the textual representation of values.
   * doc://com.apple.documentation/documentation/foundation/nsformatter
   */
  interface NSFormatter extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsformatter/1415993-stringforobjectvalue
    stringForObjectValue(obj: cocoascript.NSFormatter):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsformatter/1409478-attributedstringforobjectvalue
    attributedStringForObjectValue_withDefaultAttributes(obj: cocoascript.NSFormatter, attrs: cocoascript.NSFormatter):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nsformatter/1416333-editingstringforobjectvalue
    editingStringForObjectValue(obj: cocoascript.NSFormatter):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsformatter/1408927-getobjectvalue
    getObjectValue_forString_errorDescription(obj: cocoascript.NSFormatter, string: cocoascript.NSString, error: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsformatter/1417993-ispartialstringvalid
    isPartialStringValid_newEditingString_errorDescription(partialString: cocoascript.NSString, newString: cocoascript.NSString, error: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsformatter/1415263-ispartialstringvalid
    isPartialStringValid_proposedSelectedRange_originalString_originalSelectedRange_errorDescription(partialStringPtr: cocoascript.NSString, proposedSelRangePtr: cocoascript.NSRangePointer, origString: cocoascript.NSString, origSelRange: cocoascript.NSRange, error: cocoascript.NSString):cocoascript.BOOL;
    //
    alloc():cocoascript.NSFormatter;
    //
    init():cocoascript.NSFormatter;
  }
}

declare const NSFormatter: cocoascript.NSFormatter;
declare namespace cocoascript {
  /**
   * A class that adopts the decimal number behaviors protocol.
   * doc://com.apple.documentation/documentation/foundation/nsdecimalnumberhandler
   */
  interface NSDecimalNumberHandler extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumberhandler/1407825-defaultdecimalnumberhandler
    defaultDecimalNumberHandler(): cocoascript.NSDecimalNumberHandler;
    setDefaultDecimalNumberHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumberhandler/1416492-initwithroundingmode
    initWithRoundingMode_scale_raiseOnExactness_raiseOnOverflow_raiseOnUnderflow_raiseOnDivideByZero(roundingMode: cocoascript.NSRoundingMode, scale: number, exact: cocoascript.BOOL, overflow: cocoascript.BOOL, underflow: cocoascript.BOOL, divideByZero: cocoascript.BOOL):cocoascript.NSDecimalNumberHandler;
    //
    alloc():cocoascript.NSDecimalNumberHandler;
    //
    init():cocoascript.NSDecimalNumberHandler;
  }
}

declare const NSDecimalNumberHandler: cocoascript.NSDecimalNumberHandler;
declare namespace cocoascript {
  /**
   * An abstract class that provides the basis for testing specifiers one at a time or in groups.
   * doc://com.apple.documentation/documentation/foundation/nsscriptwhosetest
   */
  interface NSScriptWhoseTest extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscriptwhosetest/1393877-istrue
    isTrue():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscriptwhosetest/1393856-init
    init():cocoascript.NSScriptWhoseTest;
    // doc://com.apple.documentation/documentation/foundation/nsscriptwhosetest/1393846-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSScriptWhoseTest;
    //
    alloc():cocoascript.NSScriptWhoseTest;
    //
    init():cocoascript.NSScriptWhoseTest;
  }
}

declare const NSScriptWhoseTest: cocoascript.NSScriptWhoseTest;
declare namespace cocoascript {
  /**
   * A script command that a macOS app supports.
   * doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription
   */
  interface NSScriptCommandDescription extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1410038-initwithsuitename
    initWithSuiteName_commandName_dictionary(suiteName: cocoascript.NSString, commandName: cocoascript.NSString, commandDeclaration: cocoascript.NSDictionary):cocoascript.NSScriptCommandDescription;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1416191-appleeventclasscode
    appleEventClassCode(): cocoascript.FourCharCode;
    setAppleEventClassCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1408972-appleeventcode
    appleEventCode(): cocoascript.FourCharCode;
    setAppleEventCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1417478-commandclassname
    commandClassName(): cocoascript.NSString;
    setCommandClassName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1407512-commandname
    commandName(): cocoascript.NSString;
    setCommandName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1413657-suitename
    suiteName(): cocoascript.NSString;
    setSuiteName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1414752-appleeventcodeforargumentwithnam
    appleEventCodeForArgumentWithName(argumentName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1409125-argumentnames
    argumentNames(): cocoascript.NSString;
    setArgumentNames(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1415798-isoptionalargumentwithname
    isOptionalArgumentWithName(argumentName: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1416163-typeforargumentwithname
    typeForArgumentWithName(argumentName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1408166-appleeventcodeforreturntype
    appleEventCodeForReturnType(): cocoascript.FourCharCode;
    setAppleEventCodeForReturnType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1410754-returntype
    returnType(): cocoascript.NSString;
    setReturnType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1418415-createcommandinstance
    createCommandInstance():cocoascript.NSScriptCommand;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1413755-createcommandinstancewithzone
    createCommandInstanceWithZone(zone: cocoascript.NSZone):cocoascript.NSScriptCommand;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1416525-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSScriptCommandDescription;
    //
    alloc():cocoascript.NSScriptCommandDescription;
    //
    init():cocoascript.NSScriptCommandDescription;
  }
}

declare const NSScriptCommandDescription: cocoascript.NSScriptCommandDescription;
declare namespace cocoascript {
  /**
   * A proxy for objects in other applications or threads.
   * doc://com.apple.documentation/documentation/foundation/nsdistantobject
   */
  interface NSDistantObject extends NSProxy {
    // doc://com.apple.documentation/documentation/foundation/nsdistantobject/1442603-initwithlocal
    initWithLocal_connection(target: cocoascript.NSDistantObject, connection: cocoascript.NSConnection):cocoascript.NSDistantObject;
    // doc://com.apple.documentation/documentation/foundation/nsdistantobject/1442597-initwithtarget
    initWithTarget_connection(target: cocoascript.NSDistantObject, connection: cocoascript.NSConnection):cocoascript.NSDistantObject;
    // doc://com.apple.documentation/documentation/foundation/nsdistantobject/1442593-setprotocolforproxy
    setProtocolForProxy(proto: cocoascript.Protocol):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistantobject/1442598-connectionforproxy
    connectionForProxy(): cocoascript.NSConnection;
    setConnectionForProxy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdistantobject/1442605-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSDistantObject;
    //
    alloc():cocoascript.NSDistantObject;
    //
    init():cocoascript.NSDistantObject;
  }
}

declare const NSDistantObject: cocoascript.NSDistantObject;
declare namespace cocoascript {
  /**
   * An abstract class used to represent natural language expressions.
   * doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier
   */
  interface NSScriptObjectSpecifier extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1410480-initwithcontainerclassdescriptio
    initWithContainerClassDescription_containerSpecifier_key(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString):cocoascript.NSScriptObjectSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1409384-initwithcontainerspecifier
    initWithContainerSpecifier_key(container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString):cocoascript.NSScriptObjectSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1415107-indicesofobjectsbyevaluatingwith
    indicesOfObjectsByEvaluatingWithContainer_count(container: cocoascript.NSScriptObjectSpecifier, count: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1413391-objectsbyevaluatingspecifier
    objectsByEvaluatingSpecifier(): cocoascript.id;
    setObjectsByEvaluatingSpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1409842-objectsbyevaluatingwithcontainer
    objectsByEvaluatingWithContainers(containers: cocoascript.NSScriptObjectSpecifier):cocoascript.NSScriptObjectSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1413179-containerclassdescription
    containerClassDescription(): cocoascript.NSScriptClassDescription;
    setContainerClassDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1410887-containerisobjectbeingtested
    containerIsObjectBeingTested(): cocoascript.BOOL;
    setContainerIsObjectBeingTested(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1416507-containerisrangecontainerobject
    containerIsRangeContainerObject(): cocoascript.BOOL;
    setContainerIsRangeContainerObject(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1414424-containerspecifier
    containerSpecifier(): cocoascript.NSScriptObjectSpecifier;
    setContainerSpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1409882-childspecifier
    childSpecifier(): cocoascript.NSScriptObjectSpecifier;
    setChildSpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1412986-key
    key(): cocoascript.NSString;
    setKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1417974-keyclassdescription
    keyClassDescription(): cocoascript.NSScriptClassDescription;
    setKeyClassDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1416385-evaluationerrorspecifier
    evaluationErrorSpecifier(): cocoascript.NSScriptObjectSpecifier;
    setEvaluationErrorSpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1416938-evaluationerrornumber
    evaluationErrorNumber(): cocoascript.NSInteger;
    setEvaluationErrorNumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1410018-descriptor
    descriptor(): cocoascript.NSAppleEventDescriptor;
    setDescriptor(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1408941-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSScriptObjectSpecifier;
    //
    alloc():cocoascript.NSScriptObjectSpecifier;
    //
    init():cocoascript.NSScriptObjectSpecifier;
  }
}

declare const NSScriptObjectSpecifier: cocoascript.NSScriptObjectSpecifier;
declare namespace cocoascript {
  /**
   * A self-contained scripting statement.
   * doc://com.apple.documentation/documentation/foundation/nsscriptcommand
   */
  interface NSScriptCommand extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1413516-initwithcommanddescription
    initWithCommandDescription(commandDef: cocoascript.NSScriptCommandDescription):cocoascript.NSScriptCommand;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1415626-appleevent
    appleEvent(): cocoascript.NSAppleEventDescriptor;
    setAppleEvent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1414780-executecommand
    executeCommand():cocoascript.NSScriptCommand;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1413379-performdefaultimplementation
    performDefaultImplementation():cocoascript.NSScriptCommand;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1411257-evaluatedreceivers
    evaluatedReceivers(): cocoascript.id;
    setEvaluatedReceivers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1417016-receiversspecifier
    receiversSpecifier(): cocoascript.NSScriptObjectSpecifier;
    setReceiversSpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1414071-arguments
    arguments(): cocoascript.id;
    setArguments(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1413335-evaluatedarguments
    evaluatedArguments(): cocoascript.id;
    setEvaluatedArguments(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1410675-directparameter
    directParameter(): cocoascript.id;
    setDirectParameter(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1407452-commanddescription
    commandDescription(): cocoascript.NSScriptCommandDescription;
    setCommandDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1411714-scripterrorexpectedtypedescripto
    scriptErrorExpectedTypeDescriptor(): cocoascript.NSAppleEventDescriptor;
    setScriptErrorExpectedTypeDescriptor(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1411484-scripterrornumber
    scriptErrorNumber(): cocoascript.NSInteger;
    setScriptErrorNumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1417217-scripterroroffendingobjectdescri
    scriptErrorOffendingObjectDescriptor(): cocoascript.NSAppleEventDescriptor;
    setScriptErrorOffendingObjectDescriptor(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1414596-scripterrorstring
    scriptErrorString(): cocoascript.NSString;
    setScriptErrorString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1417785-suspendexecution
    suspendExecution():void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1408227-resumeexecutionwithresult
    resumeExecutionWithResult(result: cocoascript.NSScriptCommand):void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1417482-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSScriptCommand;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1413090-wellformed
    wellFormed(): cocoascript.BOOL;
    setWellFormed(): void;
    //
    alloc():cocoascript.NSScriptCommand;
    //
    init():cocoascript.NSScriptCommand;
  }
}

declare const NSScriptCommand: cocoascript.NSScriptCommand;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nstimeinterval
  type NSTimeInterval = number;
}
declare namespace cocoascript {
  /**
   * Information about linguistic, cultural, and technological conventions for use in formatting data for presentation.
   * doc://com.apple.documentation/documentation/foundation/nslocale
   */
  interface NSLocale extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nslocale/1414217-initwithlocaleidentifier
    initWithLocaleIdentifier(string: cocoascript.NSString):cocoascript.NSLocale;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1415424-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSLocale;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1414388-autoupdatingcurrentlocale
    autoupdatingCurrentLocale(): cocoascript.NSLocale;
    setAutoupdatingCurrentLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1409990-currentlocale
    currentLocale(): cocoascript.NSLocale;
    setCurrentLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1407691-systemlocale
    systemLocale(): cocoascript.NSLocale;
    setSystemLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1410448-availablelocaleidentifiers
    availableLocaleIdentifiers(): cocoascript.NSString;
    setAvailableLocaleIdentifiers(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1413869-isocountrycodes
    ISOCountryCodes(): cocoascript.NSString;
    setISOCountryCodes(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1418015-isolanguagecodes
    ISOLanguageCodes(): cocoascript.NSString;
    setISOLanguageCodes(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1417834-isocurrencycodes
    ISOCurrencyCodes(): cocoascript.NSString;
    setISOCurrencyCodes(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1407272-commonisocurrencycodes
    commonISOCurrencyCodes(): cocoascript.NSString;
    setCommonISOCurrencyCodes(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1416263-localeidentifier
    localeIdentifier(): cocoascript.NSString;
    setLocaleIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643060-countrycode
    countryCode(): cocoascript.NSString;
    setCountryCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643026-languagecode
    languageCode(): cocoascript.NSString;
    setLanguageCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643213-scriptcode
    scriptCode(): cocoascript.NSString;
    setScriptCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643152-variantcode
    variantCode(): cocoascript.NSString;
    setVariantCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643019-exemplarcharacterset
    exemplarCharacterSet(): cocoascript.NSCharacterSet;
    setExemplarCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643092-collationidentifier
    collationIdentifier(): cocoascript.NSString;
    setCollationIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643195-collatoridentifier
    collatorIdentifier(): cocoascript.NSString;
    setCollatorIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643225-usesmetricsystem
    usesMetricSystem(): cocoascript.BOOL;
    setUsesMetricSystem(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643064-decimalseparator
    decimalSeparator(): cocoascript.NSString;
    setDecimalSeparator(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643096-groupingseparator
    groupingSeparator(): cocoascript.NSString;
    setGroupingSeparator(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1642836-currencycode
    currencyCode(): cocoascript.NSString;
    setCurrencyCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1642814-currencysymbol
    currencySymbol(): cocoascript.NSString;
    setCurrencySymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/2242779-calendaridentifier
    calendarIdentifier(): cocoascript.NSString;
    setCalendarIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643155-quotationbegindelimiter
    quotationBeginDelimiter(): cocoascript.NSString;
    setQuotationBeginDelimiter(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643162-quotationenddelimiter
    quotationEndDelimiter(): cocoascript.NSString;
    setQuotationEndDelimiter(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643238-alternatequotationbegindelimiter
    alternateQuotationBeginDelimiter(): cocoascript.NSString;
    setAlternateQuotationBeginDelimiter(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1642885-alternatequotationenddelimiter
    alternateQuotationEndDelimiter(): cocoascript.NSString;
    setAlternateQuotationEndDelimiter(): void;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1642864-localizedstringforlocaleidentifi
    localizedStringForLocaleIdentifier(localeIdentifier: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1642920-localizedstringforcountrycode
    localizedStringForCountryCode(countryCode: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643226-localizedstringforlanguagecode
    localizedStringForLanguageCode(languageCode: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643126-localizedstringforscriptcode
    localizedStringForScriptCode(scriptCode: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643264-localizedstringforvariantcode
    localizedStringForVariantCode(variantCode: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1642875-localizedstringforcollationident
    localizedStringForCollationIdentifier(collationIdentifier: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643004-localizedstringforcollatoridenti
    localizedStringForCollatorIdentifier(collatorIdentifier: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1643179-localizedstringforcurrencycode
    localizedStringForCurrencyCode(currencyCode: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslocale/2242780-localizedstringforcalendaridenti
    localizedStringForCalendarIdentifier(calendarIdentifier: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1418430-objectforkey
    objectForKey(key: cocoascript.NSLocaleKey):cocoascript.NSLocale;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1415931-displaynameforkey
    displayNameForKey_value(key: cocoascript.NSLocaleKey, value: cocoascript.NSLocale):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslocale/1415614-preferredlanguages
    preferredLanguages(): cocoascript.NSString;
    setPreferredLanguages(): void;
    //
    alloc():cocoascript.NSLocale;
    //
    init():cocoascript.NSLocale;
  }
}

declare const NSLocale: cocoascript.NSLocale;
declare namespace cocoascript {
  /**
   * A description of the linguistic content of natural language text, typically used for spelling and grammar checking.
   * doc://com.apple.documentation/documentation/foundation/nsorthography
   */
  interface NSOrthography extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1408708-initwithdominantscript
    initWithDominantScript_languageMap(script: cocoascript.NSString, map: cocoascript.NSString):cocoascript.NSOrthography;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1409533-languagemap
    languageMap(): cocoascript.NSString;
    setLanguageMap(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1415229-dominantlanguage
    dominantLanguage(): cocoascript.NSString;
    setDominantLanguage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1407965-dominantscript
    dominantScript(): cocoascript.NSString;
    setDominantScript(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1407326-dominantlanguageforscript
    dominantLanguageForScript(script: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1412606-languagesforscript
    languagesForScript(script: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1410722-allscripts
    allScripts(): cocoascript.NSString;
    setAllScripts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1416205-alllanguages
    allLanguages(): cocoascript.NSString;
    setAllLanguages(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1408410-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSOrthography;
    //
    alloc():cocoascript.NSOrthography;
    //
    init():cocoascript.NSOrthography;
  }
}

declare const NSOrthography: cocoascript.NSOrthography;
// doc://com.apple.documentation/documentation/foundation/nsuserdefaultsdidchangenotification
declare const NSUserDefaultsDidChangeNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsuserdefaultssizelimitexceedednotification
declare const NSUserDefaultsSizeLimitExceededNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsubiquitoususerdefaultscompletedinitialsyncnotification
declare const NSUbiquitousUserDefaultsCompletedInitialSyncNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsubiquitoususerdefaultsdidchangeaccountsnotification
declare const NSUbiquitousUserDefaultsDidChangeAccountsNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsubiquitoususerdefaultsnocloudaccountnotification
declare const NSUbiquitousUserDefaultsNoCloudAccountNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * A general-purpose recorder of operations that enables undo and redo.
   * doc://com.apple.documentation/documentation/foundation/nsundomanager
   */
  interface NSUndoManager extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1437863-registerundowithtarget
    registerUndoWithTarget_handler(target: cocoascript.NSUndoManager, undoHandler: cocoascript.NSUndoManager):void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1414001-registerundowithtarget
    registerUndoWithTarget_selector_object(target: cocoascript.NSUndoManager, selector: cocoascript.SEL, anObject: cocoascript.NSUndoManager):void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409564-preparewithinvocationtarget
    prepareWithInvocationTarget(target: cocoascript.NSUndoManager):cocoascript.NSUndoManager;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1412394-canundo
    canUndo(): cocoascript.BOOL;
    setCanUndo(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1415212-canredo
    canRedo(): cocoascript.BOOL;
    setCanRedo(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1412189-undo
    undo():void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1410826-undonestedgroup
    undoNestedGroup():void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1417030-redo
    redo():void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409753-levelsofundo
    levelsOfUndo(): cocoascript.NSUInteger;
    setLevelsOfUndo(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409894-beginundogrouping
    beginUndoGrouping():void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1416490-endundogrouping
    endUndoGrouping():void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1417407-groupsbyevent
    groupsByEvent(): cocoascript.BOOL;
    setGroupsByEvent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409006-groupinglevel
    groupingLevel(): cocoascript.NSInteger;
    setGroupingLevel(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1412239-disableundoregistration
    disableUndoRegistration():void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1408957-enableundoregistration
    enableUndoRegistration():void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1415464-undoregistrationenabled
    undoRegistrationEnabled(): cocoascript.BOOL;
    setUndoRegistrationEnabled(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1407345-undoing
    undoing(): cocoascript.BOOL;
    setUndoing(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1411654-redoing
    redoing(): cocoascript.BOOL;
    setRedoing(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1407442-removeallactions
    removeAllActions():void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409896-removeallactionswithtarget
    removeAllActionsWithTarget(target: cocoascript.NSUndoManager):void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1415127-undoactionname
    undoActionName(): cocoascript.NSString;
    setUndoActionName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1417487-redoactionname
    redoActionName(): cocoascript.NSString;
    setRedoActionName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1412915-setactionname
    setActionName(actionName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1412953-undomenuitemtitle
    undoMenuItemTitle(): cocoascript.NSString;
    setUndoMenuItemTitle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409938-redomenuitemtitle
    redoMenuItemTitle(): cocoascript.NSString;
    setRedoMenuItemTitle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1413122-undomenutitleforundoactionname
    undoMenuTitleForUndoActionName(actionName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1407438-redomenutitleforundoactionname
    redoMenuTitleForUndoActionName(actionName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409504-runloopmodes
    runLoopModes(): cocoascript.NSRunLoopMode;
    setRunLoopModes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1412159-setactionisdiscardable
    setActionIsDiscardable(discardable: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1415261-undoactionisdiscardable
    undoActionIsDiscardable(): cocoascript.BOOL;
    setUndoActionIsDiscardable(): void;
    // doc://com.apple.documentation/documentation/foundation/nsundomanager/1413488-redoactionisdiscardable
    redoActionIsDiscardable(): cocoascript.BOOL;
    setRedoActionIsDiscardable(): void;
    //
    alloc():cocoascript.NSUndoManager;
    //
    init():cocoascript.NSUndoManager;
  }
}

declare const NSUndoManager: cocoascript.NSUndoManager;
// doc://com.apple.documentation/documentation/foundation/nsundomanagergroupisdiscardablekey
declare const NSUndoManagerGroupIsDiscardableKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A snapshot of a file at a specific point in time.
   * doc://com.apple.documentation/documentation/foundation/nsfileversion
   */
  interface NSFileVersion extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1418131-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1413855-localizedname
    localizedName(): cocoascript.NSString;
    setLocalizedName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1408866-localizednameofsavingcomputer
    localizedNameOfSavingComputer(): cocoascript.NSString;
    setLocalizedNameOfSavingComputer(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1411506-modificationdate
    modificationDate(): cocoascript.NSDate;
    setModificationDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1407948-persistentidentifier
    persistentIdentifier(): cocoascript.NSCoding;
    setPersistentIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1409988-discardable
    discardable(): cocoascript.BOOL;
    setDiscardable(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1409277-conflict
    conflict(): cocoascript.BOOL;
    setConflict(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1414906-resolved
    resolved(): cocoascript.BOOL;
    setResolved(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1412297-replaceitematurl
    replaceItemAtURL_options_error(url: cocoascript.NSURL, options: cocoascript.NSFileVersionReplacingOptions, error: cocoascript.NSError):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1407486-removeandreturnerror
    removeAndReturnError(outError: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1412014-haslocalcontents
    hasLocalContents(): cocoascript.BOOL;
    setHasLocalContents(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1409471-hasthumbnail
    hasThumbnail(): cocoascript.BOOL;
    setHasThumbnail(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1643271-originatornamecomponents
    originatorNameComponents(): cocoascript.NSPersonNameComponents;
    setOriginatorNameComponents(): void;
    //
    alloc():cocoascript.NSFileVersion;
    //
    init():cocoascript.NSFileVersion;
  }
}

declare const NSFileVersion: cocoascript.NSFileVersion;
declare namespace cocoascript {
  /**
   * An abstract class that represents the code and data associated with a single task.
   * doc://com.apple.documentation/documentation/foundation/nsoperation
   */
  interface NSOperation extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1416837-start
    start():void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1407732-main
    main():void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1408085-completionblock
    completionBlock(): void;
    setCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1411672-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1408418-cancelled
    cancelled(): cocoascript.BOOL;
    setCancelled(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1415621-executing
    executing(): cocoascript.BOOL;
    setExecuting(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1413540-finished
    finished(): cocoascript.BOOL;
    setFinished(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1411089-concurrent
    concurrent(): cocoascript.BOOL;
    setConcurrent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1408275-asynchronous
    asynchronous(): cocoascript.BOOL;
    setAsynchronous(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1412992-ready
    ready(): cocoascript.BOOL;
    setReady(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1416089-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1412859-adddependency
    addDependency(op: cocoascript.NSOperation):void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1414945-removedependency
    removeDependency(op: cocoascript.NSOperation):void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1416668-dependencies
    dependencies(): cocoascript.NSOperation;
    setDependencies(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1413553-qualityofservice
    qualityOfService(): cocoascript.NSQualityOfService;
    setQualityOfService(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1409020-threadpriority
    threadPriority(): number;
    setThreadPriority(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1411204-queuepriority
    queuePriority(): cocoascript.NSOperationQueuePriority;
    setQueuePriority(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1409256-waituntilfinished
    waitUntilFinished():void;
    //
    alloc():cocoascript.NSOperation;
    //
    init():cocoascript.NSOperation;
  }
}

declare const NSOperation: cocoascript.NSOperation;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdatawritingoptions
  type NSDataWritingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * An object representing a dynamic byte buffer in memory.
   * doc://com.apple.documentation/documentation/foundation/nsmutabledata
   */
  interface NSMutableData extends NSData {
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1413350-initwithcapacity
    initWithCapacity(capacity: cocoascript.NSUInteger):cocoascript.NSMutableData;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1413159-initwithlength
    initWithLength(length: cocoascript.NSUInteger):cocoascript.NSMutableData;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1410770-mutablebytes
    mutableBytes(): void;
    setMutableBytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1413333-length
    length(): cocoascript.NSUInteger;
    setLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1407704-appendbytes
    appendBytes_length(bytes: void, length: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1410724-appenddata
    appendData(other: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1416186-increaselengthby
    increaseLengthBy(extraLength: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1414281-replacebytesinrange
    replaceBytesInRange_withBytes(range: cocoascript.NSRange, bytes: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1412428-replacebytesinrange
    replaceBytesInRange_withBytes_length(range: cocoascript.NSRange, replacementBytes: void, replacementLength: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1415526-resetbytesinrange
    resetBytesInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1417012-setdata
    setData(data: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/3174967-compressusingalgorithm
    compressUsingAlgorithm_error(algorithm: cocoascript.NSDataCompressionAlgorithm, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/3174968-decompressusingalgorithm
    decompressUsingAlgorithm_error(algorithm: cocoascript.NSDataCompressionAlgorithm, error: cocoascript.NSError):cocoascript.BOOL;
    //
    alloc():cocoascript.NSMutableData;
    //
    init():cocoascript.NSMutableData;
  }
}

declare const NSMutableData: cocoascript.NSMutableData;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlresourcekey
  type NSURLResourceKey = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/foundation/nsurlthumbnailkey
declare const NSURLThumbnailKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlthumbnaildictionarykey
declare const NSURLThumbnailDictionaryKey: cocoascript.NSURLResourceKey;
declare namespace cocoascript {
  /**
   * An object that coordinates a group of related, network data-transfer tasks.
   * doc://com.apple.documentation/documentation/foundation/nsurlsession
   */
  interface NSURLSession extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1409000-sharedsession
    sharedSession(): cocoascript.NSURLSession;
    setSharedSession(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411477-configuration
    configuration(): cocoascript.NSURLSessionConfiguration;
    setConfiguration(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411530-delegate
    delegate(): cocoascript.NSURLSessionDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411571-delegatequeue
    delegateQueue(): cocoascript.NSOperationQueue;
    setDelegateQueue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411554-datataskwithurl
    dataTaskWithURL(url: cocoascript.NSURL):cocoascript.NSURLSessionDataTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1410330-datataskwithurl
    dataTaskWithURL_completionHandler(url: cocoascript.NSURL, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionDataTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1410592-datataskwithrequest
    dataTaskWithRequest(request: cocoascript.NSURLRequest):cocoascript.NSURLSessionDataTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1407613-datataskwithrequest
    dataTaskWithRequest_completionHandler(request: cocoascript.NSURLRequest, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionDataTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411482-downloadtaskwithurl
    downloadTaskWithURL(url: cocoascript.NSURL):cocoascript.NSURLSessionDownloadTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411608-downloadtaskwithurl
    downloadTaskWithURL_completionHandler(url: cocoascript.NSURL, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionDownloadTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411481-downloadtaskwithrequest
    downloadTaskWithRequest(request: cocoascript.NSURLRequest):cocoascript.NSURLSessionDownloadTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411511-downloadtaskwithrequest
    downloadTaskWithRequest_completionHandler(request: cocoascript.NSURLRequest, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionDownloadTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1409226-downloadtaskwithresumedata
    downloadTaskWithResumeData(resumeData: cocoascript.NSData):cocoascript.NSURLSessionDownloadTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411598-downloadtaskwithresumedata
    downloadTaskWithResumeData_completionHandler(resumeData: cocoascript.NSData, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionDownloadTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1409763-uploadtaskwithrequest
    uploadTaskWithRequest_fromData(request: cocoascript.NSURLRequest, bodyData: cocoascript.NSData):cocoascript.NSURLSessionUploadTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411518-uploadtaskwithrequest
    uploadTaskWithRequest_fromData_completionHandler(request: cocoascript.NSURLRequest, bodyData: cocoascript.NSData, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionUploadTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411550-uploadtaskwithrequest
    uploadTaskWithRequest_fromFile(request: cocoascript.NSURLRequest, fileURL: cocoascript.NSURL):cocoascript.NSURLSessionUploadTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411638-uploadtaskwithrequest
    uploadTaskWithRequest_fromFile_completionHandler(request: cocoascript.NSURLRequest, fileURL: cocoascript.NSURL, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionUploadTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1410934-uploadtaskwithstreamedrequest
    uploadTaskWithStreamedRequest(request: cocoascript.NSURLRequest):cocoascript.NSURLSessionUploadTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411587-streamtaskwithhostname
    streamTaskWithHostName_port(hostname: cocoascript.NSString, port: cocoascript.NSInteger):cocoascript.NSURLSessionStreamTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411545-streamtaskwithnetservice
    streamTaskWithNetService(service: cocoascript.NSNetService):cocoascript.NSURLSessionStreamTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/3181171-websockettaskwithurl
    webSocketTaskWithURL(url: cocoascript.NSURL):cocoascript.NSURLSessionWebSocketTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/3235750-websockettaskwithrequest
    webSocketTaskWithRequest(request: cocoascript.NSURLRequest):cocoascript.NSURLSessionWebSocketTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/3181172-websockettaskwithurl
    webSocketTaskWithURL_protocols(url: cocoascript.NSURL, protocols: cocoascript.NSString):cocoascript.NSURLSessionWebSocketTask;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1407428-finishtasksandinvalidate
    finishTasksAndInvalidate():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411622-flushwithcompletionhandler
    flushWithCompletionHandler(completionHandler: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411578-gettaskswithcompletionhandler
    getTasksWithCompletionHandler(completionHandler: cocoascript.NSURLSessionDownloadTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411618-getalltaskswithcompletionhandler
    getAllTasksWithCompletionHandler(completionHandler: cocoascript.NSURLSessionTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411538-invalidateandcancel
    invalidateAndCancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411479-resetwithcompletionhandler
    resetWithCompletionHandler(completionHandler: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/1408277-sessiondescription
    sessionDescription(): cocoascript.NSString;
    setSessionDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsession/3240614-init
    init():cocoascript.NSURLSession;
    //
    alloc():cocoascript.NSURLSession;
    //
    init():cocoascript.NSURLSession;
  }
}

declare const NSURLSession: cocoascript.NSURLSession;
declare namespace cocoascript {
  /**
   * An object that enables you to start and stop URL requests.
   * doc://com.apple.documentation/documentation/foundation/nsurlconnection
   */
  interface NSURLConnection extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1411340-originalrequest
    originalRequest(): cocoascript.NSURLRequest;
    setOriginalRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1409060-currentrequest
    currentRequest(): cocoascript.NSURLRequest;
    setCurrentRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1414520-initwithrequest
    initWithRequest_delegate(request: cocoascript.NSURLRequest, delegate: cocoascript.NSURLConnection):cocoascript.NSURLConnection;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1418425-initwithrequest
    initWithRequest_delegate_startImmediately(request: cocoascript.NSURLRequest, delegate: cocoascript.NSURLConnection, startImmediately: cocoascript.BOOL):cocoascript.NSURLConnection;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1417345-start
    start():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1407797-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1417485-scheduleinrunloop
    scheduleInRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1411849-setdelegatequeue
    setDelegateQueue(queue: cocoascript.NSOperationQueue):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1409722-unschedulefromrunloop
    unscheduleFromRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1615799-newsstandassetdownload
    newsstandAssetDownload(): cocoascript.NKAssetDownload;
    setNewsstandAssetDownload(): void;
    //
    alloc():cocoascript.NSURLConnection;
    //
    init():cocoascript.NSURLConnection;
  }
}

declare const NSURLConnection: cocoascript.NSURLConnection;
declare namespace cocoascript {
  /**
   * An object that downloads a resource asynchronously and saves the data to a file.
   * doc://com.apple.documentation/documentation/foundation/nsurldownload
   */
  interface NSURLDownload extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1416302-initwithrequest
    initWithRequest_delegate(request: cocoascript.NSURLRequest, delegate: cocoascript.NSURLDownloadDelegate):cocoascript.NSURLDownload;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1412923-setdestination
    setDestination_allowOverwrite(path: cocoascript.NSString, allowOverwrite: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1412919-initwithresumedata
    initWithResumeData_delegate_path(resumeData: cocoascript.NSData, delegate: cocoascript.NSURLDownloadDelegate, path: cocoascript.NSString):cocoascript.NSURLDownload;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1413244-resumedata
    resumeData(): cocoascript.NSData;
    setResumeData(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1409172-deletesfileuponfailure
    deletesFileUponFailure(): cocoascript.BOOL;
    setDeletesFileUponFailure(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1415299-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1416157-request
    request(): cocoascript.NSURLRequest;
    setRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1409172-deletesfileuponfailure
    deletesFileUponFailure(): cocoascript.BOOL;
    setDeletesFileUponFailure(): void;
    //
    alloc():cocoascript.NSURLDownload;
    //
    init():cocoascript.NSURLDownload;
  }
}

declare const NSURLDownload: cocoascript.NSURLDownload;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlbookmarkfilecreationoptions
  type NSURLBookmarkFileCreationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlbookmarkcreationoptions
  type NSURLBookmarkCreationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlbookmarkresolutionoptions
  type NSURLBookmarkResolutionOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * An object that parses URLs into and constructs URLs from their constituent parts.
   * doc://com.apple.documentation/documentation/foundation/nsurlcomponents
   */
  interface NSURLComponents extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1414141-init
    init():cocoascript.NSURLComponents;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1410784-initwithstring
    initWithString(URLString: cocoascript.NSString):cocoascript.NSURLComponents;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1416476-initwithurl
    initWithURL_resolvingAgainstBaseURL(url: cocoascript.NSURL, resolve: cocoascript.BOOL):cocoascript.NSURLComponents;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1417970-string
    string(): cocoascript.NSString;
    setString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1413469-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1408378-urlrelativetourl
    URLRelativeToURL(baseURL: cocoascript.NSURL):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1417638-fragment
    fragment(): cocoascript.NSString;
    setFragment(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1411178-host
    host(): cocoascript.NSString;
    setHost(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1415604-password
    password(): cocoascript.NSString;
    setPassword(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1409650-path
    path(): cocoascript.NSString;
    setPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1413451-port
    port(): cocoascript.NSNumber;
    setPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1415452-query
    query(): cocoascript.NSString;
    setQuery(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1407752-queryitems
    queryItems(): cocoascript.NSURLQueryItem;
    setQueryItems(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1407517-scheme
    scheme(): cocoascript.NSString;
    setScheme(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1415026-user
    user(): cocoascript.NSString;
    setUser(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1418392-percentencodedfragment
    percentEncodedFragment(): cocoascript.NSString;
    setPercentEncodedFragment(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1418231-percentencodedhost
    percentEncodedHost(): cocoascript.NSString;
    setPercentEncodedHost(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1410319-percentencodedpassword
    percentEncodedPassword(): cocoascript.NSString;
    setPercentEncodedPassword(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1408161-percentencodedpath
    percentEncodedPath(): cocoascript.NSString;
    setPercentEncodedPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1410395-percentencodedquery
    percentEncodedQuery(): cocoascript.NSString;
    setPercentEncodedQuery(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1417767-percentencodeduser
    percentEncodedUser(): cocoascript.NSString;
    setPercentEncodedUser(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/2865531-percentencodedqueryitems
    percentEncodedQueryItems(): cocoascript.NSURLQueryItem;
    setPercentEncodedQueryItems(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1415180-rangeoffragment
    rangeOfFragment(): cocoascript.NSRange;
    setRangeOfFragment(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1408894-rangeofhost
    rangeOfHost(): cocoascript.NSRange;
    setRangeOfHost(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1415024-rangeofpassword
    rangeOfPassword(): cocoascript.NSRange;
    setRangeOfPassword(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1418459-rangeofpath
    rangeOfPath(): cocoascript.NSRange;
    setRangeOfPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1411790-rangeofport
    rangeOfPort(): cocoascript.NSRange;
    setRangeOfPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1409456-rangeofquery
    rangeOfQuery(): cocoascript.NSRange;
    setRangeOfQuery(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1410099-rangeofscheme
    rangeOfScheme(): cocoascript.NSRange;
    setRangeOfScheme(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1414961-rangeofuser
    rangeOfUser(): cocoascript.NSRange;
    setRangeOfUser(): void;
    //
    alloc():cocoascript.NSURLComponents;
    //
    init():cocoascript.NSURLComponents;
  }
}

declare const NSURLComponents: cocoascript.NSURLComponents;
declare namespace cocoascript {
  /**
   * An object representing a single name/value pair for an item in the query portion of a URL.
   * doc://com.apple.documentation/documentation/foundation/nsurlqueryitem
   */
  interface NSURLQueryItem extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlqueryitem/1410963-initwithname
    initWithName_value(name: cocoascript.NSString, value: cocoascript.NSString):cocoascript.NSURLQueryItem;
    // doc://com.apple.documentation/documentation/foundation/nsurlqueryitem/1407785-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlqueryitem/1412041-value
    value(): cocoascript.NSString;
    setValue(): void;
    //
    alloc():cocoascript.NSURLQueryItem;
    //
    init():cocoascript.NSURLQueryItem;
  }
}

declare const NSURLQueryItem: cocoascript.NSURLQueryItem;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlfileresourcetype
  type NSURLFileResourceType = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/foundation/nsurlfileresourcetypekey
declare const NSURLFileResourceTypeKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlfileallocatedsizekey
declare const NSURLFileAllocatedSizeKey: cocoascript.NSURLResourceKey;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlfileprotectiontype
  type NSURLFileProtectionType = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/foundation/nsurlfileresourceidentifierkey
declare const NSURLFileResourceIdentifierKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlfilesecuritykey
declare const NSURLFileSecurityKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlfilesizekey
declare const NSURLFileSizeKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlisaliasfilekey
declare const NSURLIsAliasFileKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlispackagekey
declare const NSURLIsPackageKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlisregularfilekey
declare const NSURLIsRegularFileKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlpreferredioblocksizekey
declare const NSURLPreferredIOBlockSizeKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurltotalfileallocatedsizekey
declare const NSURLTotalFileAllocatedSizeKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurltotalfilesizekey
declare const NSURLTotalFileSizeKey: cocoascript.NSURLResourceKey;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsappleeventmanagersuspensionid
  type NSAppleEventManagerSuspensionID = cocoascript.__NSAppleEventManagerSuspension;
}
declare namespace cocoascript {
  /**
   * A wrapper for the Apple event descriptor data type.
   * doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor
   */
  interface NSAppleEventDescriptor extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416351-initlistdescriptor
    initListDescriptor():cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416093-initrecorddescriptor
    initRecordDescriptor():cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1415233-initwithaedescnocopy
    initWithAEDescNoCopy(aeDesc: cocoascript.AEDesc):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1417137-initwithdescriptortype
    initWithDescriptorType_bytes_length(descriptorType: cocoascript.DescType, bytes: void, byteCount: cocoascript.NSUInteger):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1417129-initwithdescriptortype
    initWithDescriptorType_data(descriptorType: cocoascript.DescType, data: cocoascript.NSData):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1414999-initwitheventclass
    initWithEventClass_eventID_targetDescriptor_returnID_transactionID(eventClass: cocoascript.AEEventClass, eventID: cocoascript.AEEventID, targetDescriptor: cocoascript.NSAppleEventDescriptor, returnID: cocoascript.AEReturnID, transactionID: cocoascript.AETransactionID):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1413715-aedesc
    aeDesc(): cocoascript.AEDesc;
    setAeDesc(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1412412-booleanvalue
    booleanValue(): cocoascript.Boolean;
    setBooleanValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416286-coercetodescriptortype
    coerceToDescriptorType(descriptorType: cocoascript.DescType):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1413486-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1408495-descriptortype
    descriptorType(): cocoascript.DescType;
    setDescriptorType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1408039-enumcodevalue
    enumCodeValue(): cocoascript.OSType;
    setEnumCodeValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1407270-int32value
    int32Value(): cocoascript.SInt32;
    setInt32Value(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416786-numberofitems
    numberOfItems(): cocoascript.NSInteger;
    setNumberOfItems(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1407584-stringvalue
    stringValue(): cocoascript.NSString;
    setStringValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1409662-typecodevalue
    typeCodeValue(): cocoascript.OSType;
    setTypeCodeValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1408027-descriptoratindex
    descriptorAtIndex(index: cocoascript.NSInteger):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1409452-insertdescriptor
    insertDescriptor_atIndex(descriptor: cocoascript.NSAppleEventDescriptor, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1413644-removedescriptoratindex
    removeDescriptorAtIndex(index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416413-descriptorforkeyword
    descriptorForKeyword(keyword: cocoascript.AEKeyword):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1417535-keywordfordescriptoratindex
    keywordForDescriptorAtIndex(index: cocoascript.NSInteger):cocoascript.AEKeyword;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1415663-removedescriptorwithkeyword
    removeDescriptorWithKeyword(keyword: cocoascript.AEKeyword):void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1409080-setdescriptor
    setDescriptor_forKeyword(descriptor: cocoascript.NSAppleEventDescriptor, keyword: cocoascript.AEKeyword):void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1417067-attributedescriptorforkeyword
    attributeDescriptorForKeyword(keyword: cocoascript.AEKeyword):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1410955-eventclass
    eventClass(): cocoascript.AEEventClass;
    setEventClass(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1413356-eventid
    eventID(): cocoascript.AEEventID;
    setEventID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1412763-paramdescriptorforkeyword
    paramDescriptorForKeyword(keyword: cocoascript.AEKeyword):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1412353-removeparamdescriptorwithkeyword
    removeParamDescriptorWithKeyword(keyword: cocoascript.AEKeyword):void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1415786-returnid
    returnID(): cocoascript.AEReturnID;
    setReturnID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1418101-setattributedescriptor
    setAttributeDescriptor_forKeyword(descriptor: cocoascript.NSAppleEventDescriptor, keyword: cocoascript.AEKeyword):void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416261-setparamdescriptor
    setParamDescriptor_forKeyword(descriptor: cocoascript.NSAppleEventDescriptor, keyword: cocoascript.AEKeyword):void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1408981-transactionid
    transactionID(): cocoascript.AETransactionID;
    setTransactionID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416330-datevalue
    dateValue(): cocoascript.NSDate;
    setDateValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1417847-doublevalue
    doubleValue(): number;
    setDoubleValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1409448-fileurlvalue
    fileURLValue(): cocoascript.NSURL;
    setFileURLValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1410136-isrecorddescriptor
    isRecordDescriptor(): cocoascript.BOOL;
    setIsRecordDescriptor(): void;
    // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1409337-sendeventwithoptions
    sendEventWithOptions_timeout_error(sendOptions: cocoascript.NSAppleEventSendOptions, timeoutInSeconds: cocoascript.NSTimeInterval, error: cocoascript.NSError):cocoascript.NSAppleEventDescriptor;
    //
    alloc():cocoascript.NSAppleEventDescriptor;
    //
    init():cocoascript.NSAppleEventDescriptor;
  }
}

declare const NSAppleEventDescriptor: cocoascript.NSAppleEventDescriptor;
// doc://com.apple.documentation/documentation/foundation/nsbundledidloadnotification
declare const NSBundleDidLoadNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsrunloopmode
  type NSRunLoopMode = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * The programmatic interface to objects that manage input sources.
   * doc://com.apple.documentation/documentation/foundation/nsrunloop
   */
  interface NSRunLoop extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1412291-currentrunloop
    currentRunLoop(): cocoascript.NSRunLoop;
    setCurrentRunLoop(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1412652-currentmode
    currentMode(): cocoascript.NSRunLoopMode;
    setCurrentMode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1412837-limitdateformode
    limitDateForMode(mode: cocoascript.NSRunLoopMode):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1418388-mainrunloop
    mainRunLoop(): cocoascript.NSRunLoop;
    setMainRunLoop(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1410140-getcfrunloop
    getCFRunLoop():cocoascript.CFRunLoopRef;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1418468-addtimer
    addTimer_forMode(timer: cocoascript.NSTimer, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1417637-addport
    addPort_forMode(aPort: cocoascript.NSPort, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1414332-removeport
    removePort_forMode(aPort: cocoascript.NSPort, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1577695-configureasserver
    configureAsServer():void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1412430-run
    run():void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1411525-runmode
    runMode_beforeDate(mode: cocoascript.NSRunLoopMode, limitDate: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1415778-rununtildate
    runUntilDate(limitDate: cocoascript.NSDate):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1417143-acceptinputformode
    acceptInputForMode_beforeDate(mode: cocoascript.NSRunLoopMode, limitDate: cocoascript.NSDate):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1409310-performselector
    performSelector_target_argument_order_modes(aSelector: cocoascript.SEL, target: cocoascript.NSRunLoop, arg: cocoascript.NSRunLoop, order: cocoascript.NSUInteger, modes: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1418077-cancelperformselector
    cancelPerformSelector_target_argument(aSelector: cocoascript.SEL, target: cocoascript.NSRunLoop, arg: cocoascript.NSRunLoop):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1414208-cancelperformselectorswithtarget
    cancelPerformSelectorsWithTarget(target: cocoascript.NSRunLoop):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/2091881-performblock
    performBlock(block: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/2091880-performinmodes
    performInModes_block(modes: cocoascript.NSRunLoopMode, block: void):void;
    //
    alloc():cocoascript.NSRunLoop;
    //
    init():cocoascript.NSRunLoop;
  }
}

declare const NSRunLoop: cocoascript.NSRunLoop;
declare namespace cocoascript {
  /**
   * A thread of execution.
   * doc://com.apple.documentation/documentation/foundation/nsthread
   */
  interface NSThread extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsthread/1416464-init
    init():cocoascript.NSThread;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1414773-initwithtarget
    initWithTarget_selector_object(target: cocoascript.NSThread, selector: cocoascript.SEL, argument: cocoascript.NSThread):cocoascript.NSThread;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1418166-start
    start():void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1418421-main
    main():void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1411303-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1411240-executing
    executing(): cocoascript.BOOL;
    setExecuting(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1409297-finished
    finished(): cocoascript.BOOL;
    setFinished(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1417366-cancelled
    cancelled(): cocoascript.BOOL;
    setCancelled(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1412704-ismainthread
    isMainThread(): cocoascript.BOOL;
    setIsMainThread(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1408455-ismainthread
    isMainThread(): cocoascript.BOOL;
    setIsMainThread(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1414782-mainthread
    mainThread(): cocoascript.NSThread;
    setMainThread(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1410679-currentthread
    currentThread(): cocoascript.NSThread;
    setCurrentThread(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1409565-callstackreturnaddresses
    callStackReturnAddresses(): cocoascript.NSNumber;
    setCallStackReturnAddresses(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1414836-callstacksymbols
    callStackSymbols(): cocoascript.NSString;
    setCallStackSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1411433-threaddictionary
    threadDictionary(): cocoascript.NSMutableDictionary;
    setThreadDictionary(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1414122-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1415190-stacksize
    stackSize(): cocoascript.NSUInteger;
    setStackSize(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1409426-qualityofservice
    qualityOfService(): cocoascript.NSQualityOfService;
    setQualityOfService(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1411927-threadpriority
    threadPriority(): number;
    setThreadPriority(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/2088561-initwithblock
    initWithBlock(block: void):cocoascript.NSThread;
    //
    alloc():cocoascript.NSThread;
    //
    init():cocoascript.NSThread;
  }
}

declare const NSThread: cocoascript.NSThread;
// doc://com.apple.documentation/documentation/foundation/nsassertionhandlerkey
declare const NSAssertionHandlerKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that represents a special condition that interrupts the normal flow of program execution.
   * doc://com.apple.documentation/documentation/foundation/nsexception
   */
  interface NSException extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsexception/1414506-initwithname
    initWithName_reason_userInfo(aName: cocoascript.NSExceptionName, aReason: cocoascript.NSString, aUserInfo: cocoascript.NSDictionary):cocoascript.NSException;
    // doc://com.apple.documentation/documentation/foundation/nsexception/1416135-raise
    raise():void;
    // doc://com.apple.documentation/documentation/foundation/nsexception/1410925-name
    name(): cocoascript.NSExceptionName;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexception/1415537-reason
    reason(): cocoascript.NSString;
    setReason(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexception/1418149-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexception/1412165-callstackreturnaddresses
    callStackReturnAddresses(): cocoascript.NSNumber;
    setCallStackReturnAddresses(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexception/1416845-callstacksymbols
    callStackSymbols(): cocoascript.NSString;
    setCallStackSymbols(): void;
    //
    alloc():cocoascript.NSException;
    //
    init():cocoascript.NSException;
  }
}

declare const NSException: cocoascript.NSException;
// doc://com.apple.documentation/documentation/foundation/1416853-nsgetuncaughtexceptionhandler
declare const NSGetUncaughtExceptionHandler: void;
declare namespace cocoascript {
  /**
   * The delegate of an
   * doc://com.apple.documentation/documentation/foundation/nscachedelegate
   */
  interface NSCacheDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nscachedelegate/1416107-cache
    cache_willEvictObject(cache: cocoascript.NSCache, obj: cocoascript.NSCacheDelegate):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that delegates of a stream instance use to handle events on the stream.
   * doc://com.apple.documentation/documentation/foundation/nsstreamdelegate
   */
  interface NSStreamDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsstreamdelegate/1410079-stream
    stream_handleEvent(aStream: cocoascript.NSStream, eventCode: cocoascript.NSStreamEvent):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface a net service browser uses to inform a delegate about the state of service discovery.
   * doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate
   */
  interface NSNetServiceBrowserDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1407204-netservicebrowser
    netServiceBrowser_didFindDomain_moreComing(browser: cocoascript.NSNetServiceBrowser, domainString: cocoascript.NSString, moreComing: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1412712-netservicebrowser
    netServiceBrowser_didRemoveDomain_moreComing(browser: cocoascript.NSNetServiceBrowser, domainString: cocoascript.NSString, moreComing: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1417979-netservicebrowser
    netServiceBrowser_didFindService_moreComing(browser: cocoascript.NSNetServiceBrowser, service: cocoascript.NSNetService, moreComing: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1412917-netservicebrowser
    netServiceBrowser_didRemoveService_moreComing(browser: cocoascript.NSNetServiceBrowser, service: cocoascript.NSNetService, moreComing: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1408173-netservicebrowserwillsearch
    netServiceBrowserWillSearch(browser: cocoascript.NSNetServiceBrowser):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1410567-netservicebrowser
    netServiceBrowser_didNotSearch(browser: cocoascript.NSNetServiceBrowser, errorDict: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1418341-netservicebrowserdidstopsearch
    netServiceBrowserDidStopSearch(browser: cocoascript.NSNetServiceBrowser):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface a file manager's delegate uses to intervene during operations or if an error occurs.
   * doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate
   */
  interface NSFileManagerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1411878-filemanager
    fileManager_shouldMoveItemAtURL_toURL(fileManager: cocoascript.NSFileManager, srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1407734-filemanager
    fileManager_shouldMoveItemAtPath_toPath(fileManager: cocoascript.NSFileManager, srcPath: cocoascript.NSString, dstPath: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1411289-filemanager
    fileManager_shouldProceedAfterError_movingItemAtURL_toURL(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1412865-filemanager
    fileManager_shouldProceedAfterError_movingItemAtPath_toPath(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, srcPath: cocoascript.NSString, dstPath: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1417936-filemanager
    fileManager_shouldCopyItemAtURL_toURL(fileManager: cocoascript.NSFileManager, srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1414922-filemanager
    fileManager_shouldCopyItemAtPath_toPath(fileManager: cocoascript.NSFileManager, srcPath: cocoascript.NSString, dstPath: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1410788-filemanager
    fileManager_shouldProceedAfterError_copyingItemAtURL_toURL(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1410189-filemanager
    fileManager_shouldProceedAfterError_copyingItemAtPath_toPath(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, srcPath: cocoascript.NSString, dstPath: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1411918-filemanager
    fileManager_shouldRemoveItemAtURL(fileManager: cocoascript.NSFileManager, URL: cocoascript.NSURL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1412994-filemanager
    fileManager_shouldRemoveItemAtPath(fileManager: cocoascript.NSFileManager, path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1408660-filemanager
    fileManager_shouldProceedAfterError_removingItemAtURL(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, URL: cocoascript.NSURL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1409791-filemanager
    fileManager_shouldProceedAfterError_removingItemAtPath(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1417589-filemanager
    fileManager_shouldLinkItemAtURL_toURL(fileManager: cocoascript.NSFileManager, srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1414699-filemanager
    fileManager_shouldLinkItemAtPath_toPath(fileManager: cocoascript.NSFileManager, srcPath: cocoascript.NSString, dstPath: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1408003-filemanager
    fileManager_shouldProceedAfterError_linkingItemAtURL_toURL(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1415627-filemanager
    fileManager_shouldProceedAfterError_linkingItemAtPath_toPath(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, srcPath: cocoascript.NSString, dstPath: cocoascript.NSString):cocoascript.BOOL;
  }
}
declare namespace cocoascript {
  /**
   * The optional methods implemented by the delegate of a keyed unarchiver.
   * doc://com.apple.documentation/documentation/foundation/nskeyedunarchiverdelegate
   */
  interface NSKeyedUnarchiverDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiverdelegate/1409948-unarchiver
    unarchiver_cannotDecodeObjectOfClassName_originalClasses(unarchiver: cocoascript.NSKeyedUnarchiver, name: cocoascript.NSString, classNames: cocoascript.NSString):cocoascript.Class;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiverdelegate/1414187-unarchiver
    unarchiver_didDecodeObject(unarchiver: cocoascript.NSKeyedUnarchiver, object: cocoascript.NSKeyedUnarchiverDelegate):cocoascript.NSKeyedUnarchiverDelegate;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiverdelegate/1413012-unarchiver
    unarchiver_willReplaceObject_withObject(unarchiver: cocoascript.NSKeyedUnarchiver, object: cocoascript.NSKeyedUnarchiverDelegate, newObject: cocoascript.NSKeyedUnarchiverDelegate):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiverdelegate/1418067-unarchiverdidfinish
    unarchiverDidFinish(unarchiver: cocoascript.NSKeyedUnarchiver):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiverdelegate/1415305-unarchiverwillfinish
    unarchiverWillFinish(unarchiver: cocoascript.NSKeyedUnarchiver):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface used by
   * doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient
   */
  interface NSURLProtocolClient extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1416347-urlprotocol
    URLProtocol_didReceiveResponse_cacheStoragePolicy(protocol: cocoascript.NSURLProtocol, response: cocoascript.NSURLResponse, policy: cocoascript.NSURLCacheStoragePolicy):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1415800-urlprotocol
    URLProtocol_wasRedirectedToRequest_redirectResponse(protocol: cocoascript.NSURLProtocol, request: cocoascript.NSURLRequest, redirectResponse: cocoascript.NSURLResponse):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1412327-urlprotocol
    URLProtocol_cachedResponseIsValid(protocol: cocoascript.NSURLProtocol, cachedResponse: cocoascript.NSCachedURLResponse):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1410932-urlprotocol
    URLProtocol_didCancelAuthenticationChallenge(protocol: cocoascript.NSURLProtocol, challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1413387-urlprotocol
    URLProtocol_didReceiveAuthenticationChallenge(protocol: cocoascript.NSURLProtocol, challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1413131-urlprotocol
    URLProtocol_didFailWithError(protocol: cocoascript.NSURLProtocol, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1411370-urlprotocol
    URLProtocol_didLoadData(protocol: cocoascript.NSURLProtocol, data: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1411543-urlprotocoldidfinishloading
    URLProtocolDidFinishLoading(protocol: cocoascript.NSURLProtocol):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that delegates of a URL connection implement to receive status about and provide feedback to the connection object.
   * doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate
   */
  interface NSURLConnectionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate/1414078-connection
    connection_willSendRequestForAuthenticationChallenge(connection: cocoascript.NSURLConnection, challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate/1415706-connection
    connection_canAuthenticateAgainstProtectionSpace(connection: cocoascript.NSURLConnection, protectionSpace: cocoascript.NSURLProtectionSpace):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate/1407177-connection
    connection_didCancelAuthenticationChallenge(connection: cocoascript.NSURLConnection, challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate/1417135-connection
    connection_didReceiveAuthenticationChallenge(connection: cocoascript.NSURLConnection, challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate/1414890-connectionshouldusecredentialsto
    connectionShouldUseCredentialStorage(connection: cocoascript.NSURLConnection):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate/1418443-connection
    connection_didFailWithError(connection: cocoascript.NSURLConnection, error: cocoascript.NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * The optional methods implemented by the delegate of a keyed archiver.
   * doc://com.apple.documentation/documentation/foundation/nskeyedarchiverdelegate
   */
  interface NSKeyedArchiverDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiverdelegate/1416193-archiver
    archiver_didEncodeObject(archiver: cocoascript.NSKeyedArchiver, object: cocoascript.NSKeyedArchiverDelegate):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiverdelegate/1412480-archiverdidfinish
    archiverDidFinish(archiver: cocoascript.NSKeyedArchiver):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiverdelegate/1409228-archiver
    archiver_willEncodeObject(archiver: cocoascript.NSKeyedArchiver, object: cocoascript.NSKeyedArchiverDelegate):cocoascript.NSKeyedArchiverDelegate;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiverdelegate/1411119-archiverwillfinish
    archiverWillFinish(archiver: cocoascript.NSKeyedArchiver):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiverdelegate/1409389-archiver
    archiver_willReplaceObject_withObject(archiver: cocoascript.NSKeyedArchiver, object: cocoascript.NSKeyedArchiverDelegate, newObject: cocoascript.NSKeyedArchiverDelegate):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that defines methods that URL session instances call on their delegates to handle session-level events, like session life cycle changes.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiondelegate
   */
  interface NSURLSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondelegate/1407776-urlsession
    URLSession_didBecomeInvalidWithError(session: cocoascript.NSURLSession, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondelegate/1617185-urlsessiondidfinisheventsforback
    URLSessionDidFinishEventsForBackgroundURLSession(session: cocoascript.NSURLSession):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondelegate/1409308-urlsession
    URLSession_didReceiveChallenge_completionHandler(session: cocoascript.NSURLSession, challenge: cocoascript.NSURLAuthenticationChallenge, completionHandler: cocoascript.NSURLCredential):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for handling incoming messages.
   * doc://com.apple.documentation/documentation/foundation/nsportdelegate
   */
  interface NSPortDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsportdelegate/1399513-handleportmessage
    handlePortMessage(message: cocoascript.NSPortMessage):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface a net service uses to inform its delegate about the state of the service it offers.
   * doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate
   */
  interface NSNetServiceDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1414277-netservicewillpublish
    netServiceWillPublish(sender: cocoascript.NSNetService):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1417101-netservice
    netService_didNotPublish(sender: cocoascript.NSNetService, errorDict: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1416802-netservicedidpublish
    netServiceDidPublish(sender: cocoascript.NSNetService):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1416022-netservicewillresolve
    netServiceWillResolve(sender: cocoascript.NSNetService):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1414161-netservice
    netService_didNotResolve(sender: cocoascript.NSNetService, errorDict: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1408457-netservicedidresolveaddress
    netServiceDidResolveAddress(sender: cocoascript.NSNetService):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1413199-netservice
    netService_didUpdateTXTRecordData(sender: cocoascript.NSNetService, data: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1409726-netservicedidstop
    netServiceDidStop(sender: cocoascript.NSNetService):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicedelegate/1407489-netservice
    netService_didAcceptConnectionWithInputStream_outputStream(sender: cocoascript.NSNetService, inputStream: cocoascript.NSInputStream, outputStream: cocoascript.NSOutputStream):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface an XML parser uses to inform its delegate about the content of the parsed document.
   * doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate
   */
  interface NSXMLParserDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1412065-parserdidstartdocument
    parserDidStartDocument(parser: cocoascript.NSXMLParser):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1418172-parserdidenddocument
    parserDidEndDocument(parser: cocoascript.NSXMLParser):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1415894-parser
    parser_didStartElement_namespaceURI_qualifiedName_attributes(parser: cocoascript.NSXMLParser, elementName: cocoascript.NSString, namespaceURI: cocoascript.NSString, qName: cocoascript.NSString, attributeDict: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1417955-parser
    parser_didEndElement_namespaceURI_qualifiedName(parser: cocoascript.NSXMLParser, elementName: cocoascript.NSString, namespaceURI: cocoascript.NSString, qName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1416738-parser
    parser_didStartMappingPrefix_toURI(parser: cocoascript.NSXMLParser, prefix: cocoascript.NSString, namespaceURI: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1412878-parser
    parser_didEndMappingPrefix(parser: cocoascript.NSXMLParser, prefix: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1416221-parser
    parser_resolveExternalEntityName_systemID(parser: cocoascript.NSXMLParser, name: cocoascript.NSString, systemID: cocoascript.NSString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1412379-parser
    parser_parseErrorOccurred(parser: cocoascript.NSXMLParser, parseError: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1417838-parser
    parser_validationErrorOccurred(parser: cocoascript.NSXMLParser, validationError: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1412539-parser
    parser_foundCharacters(parser: cocoascript.NSXMLParser, string: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1416470-parser
    parser_foundIgnorableWhitespace(parser: cocoascript.NSXMLParser, whitespaceString: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1412929-parser
    parser_foundProcessingInstructionWithTarget_data(parser: cocoascript.NSXMLParser, target: cocoascript.NSString, data: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1417651-parser
    parser_foundComment(parser: cocoascript.NSXMLParser, comment: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1407687-parser
    parser_foundCDATA(parser: cocoascript.NSXMLParser, CDATABlock: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1416969-parser
    parser_foundAttributeDeclarationWithName_forElement_type_defaultValue(parser: cocoascript.NSXMLParser, attributeName: cocoascript.NSString, elementName: cocoascript.NSString, type: cocoascript.NSString, defaultValue: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1411043-parser
    parser_foundElementDeclarationWithName_model(parser: cocoascript.NSXMLParser, elementName: cocoascript.NSString, model: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1408156-parser
    parser_foundExternalEntityDeclarationWithName_publicID_systemID(parser: cocoascript.NSXMLParser, name: cocoascript.NSString, publicID: cocoascript.NSString, systemID: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1414803-parser
    parser_foundInternalEntityDeclarationWithName_value(parser: cocoascript.NSXMLParser, name: cocoascript.NSString, value: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1412907-parser
    parser_foundUnparsedEntityDeclarationWithName_publicID_systemID_notationName(parser: cocoascript.NSXMLParser, name: cocoascript.NSString, publicID: cocoascript.NSString, systemID: cocoascript.NSString, notationName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1411925-parser
    parser_foundNotationDeclarationWithName_publicID_systemID(parser: cocoascript.NSXMLParser, name: cocoascript.NSString, publicID: cocoascript.NSString, systemID: cocoascript.NSString):void;
  }
}
declare namespace cocoascript {
  /**
   * The protocol that delegates to the XPC listener use to accept or reject new connections.
   * doc://com.apple.documentation/documentation/foundation/nsxpclistenerdelegate
   */
  interface NSXPCListenerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxpclistenerdelegate/1410381-listener
    listener_shouldAcceptNewConnection(listener: cocoascript.NSXPCListener, newConnection: cocoascript.NSXPCConnection):cocoascript.BOOL;
  }
}
declare namespace cocoascript {
  /**
   * An interface that enables the delegate of a metadata query to provide substitute results or attributes.
   * doc://com.apple.documentation/documentation/foundation/nsmetadataquerydelegate
   */
  interface NSMetadataQueryDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquerydelegate/1407317-metadataquery
    metadataQuery_replacementObjectForResultObject(query: cocoascript.NSMetadataQuery, result: cocoascript.NSMetadataItem):cocoascript.NSMetadataQueryDelegate;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquerydelegate/1414215-metadataquery
    metadataQuery_replacementValueForAttribute_value(query: cocoascript.NSMetadataQuery, attrName: cocoascript.NSString, attrValue: cocoascript.NSMetadataQueryDelegate):cocoascript.NSMetadataQueryDelegate;
  }
}
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallengesender
   */
  interface NSURLAuthenticationChallengeSender extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallengesender/1414474-cancelauthenticationchallenge
    cancelAuthenticationChallenge(challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallengesender/1413016-continuewithoutcredentialforauth
    continueWithoutCredentialForAuthenticationChallenge(challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallengesender/1411062-usecredential
    useCredential_forAuthenticationChallenge(credential: cocoascript.NSURLCredential, challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallengesender/1414590-performdefaulthandlingforauthent
    performDefaultHandlingForAuthenticationChallenge(challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallengesender/1417331-rejectprotectionspaceandcontinue
    rejectProtectionSpaceAndContinueWithChallenge(challenge: cocoascript.NSURLAuthenticationChallenge):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for interacting with low-level, interprocess connections.
   * doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate
   */
  interface NSConnectionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate/1478108-authenticatecomponents
    authenticateComponents_withData(components: cocoascript.NSArray, signature: cocoascript.NSData):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate/1478039-authenticationdataforcomponents
    authenticationDataForComponents(components: cocoascript.NSArray):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate/1478045-connection
    connection_shouldMakeNewConnection(ancestor: cocoascript.NSConnection, conn: cocoascript.NSConnection):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate/1478016-connection
    connection_handleRequest(connection: cocoascript.NSConnection, doreq: cocoascript.NSDistantObjectRequest):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate/1478106-createconversationforconnection
    createConversationForConnection(conn: cocoascript.NSConnection):cocoascript.NSConnectionDelegate;
    // doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate/1478057-makenewconnection
    makeNewConnection_sender(conn: cocoascript.NSConnection, ancestor: cocoascript.NSConnection):cocoascript.BOOL;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that URL download delegates implement to interact with a URL download request.
   * doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate
   */
  interface NSURLDownloadDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1417213-download
    download_canAuthenticateAgainstProtectionSpace(connection: cocoascript.NSURLDownload, protectionSpace: cocoascript.NSURLProtectionSpace):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1416233-download
    download_didCancelAuthenticationChallenge(download: cocoascript.NSURLDownload, challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1411969-download
    download_didReceiveAuthenticationChallenge(download: cocoascript.NSURLDownload, challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1416506-downloadshouldusecredentialstora
    downloadShouldUseCredentialStorage(download: cocoascript.NSURLDownload):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1413588-download
    download_decideDestinationWithSuggestedFilename(download: cocoascript.NSURLDownload, filename: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1409618-downloaddidbegin
    downloadDidBegin(download: cocoascript.NSURLDownload):void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1415265-download
    download_didCreateDestination(download: cocoascript.NSURLDownload, path: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1415460-download
    download_didReceiveResponse(download: cocoascript.NSURLDownload, response: cocoascript.NSURLResponse):void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1413663-download
    download_didReceiveDataOfLength(download: cocoascript.NSURLDownload, length: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1408526-download
    download_shouldDecodeSourceDataOfMIMEType(download: cocoascript.NSURLDownload, encodingType: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1409514-download
    download_willResumeWithResponse_fromByte(download: cocoascript.NSURLDownload, response: cocoascript.NSURLResponse, startingByte: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1412181-download
    download_willSendRequest_redirectResponse(download: cocoascript.NSURLDownload, request: cocoascript.NSURLRequest, redirectResponse: cocoascript.NSURLResponse):cocoascript.NSURLRequest;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1411640-download
    download_didFailWithError(download: cocoascript.NSURLDownload, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1408884-downloaddidfinish
    downloadDidFinish(download: cocoascript.NSURLDownload):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that enables customizing the behavior of the default notification center.
   * doc://com.apple.documentation/documentation/foundation/nsusernotificationcenterdelegate
   */
  interface NSUserNotificationCenterDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenterdelegate/1410579-usernotificationcenter
    userNotificationCenter_didDeliverNotification(center: cocoascript.NSUserNotificationCenter, notification: cocoascript.NSUserNotification):void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenterdelegate/1418378-usernotificationcenter
    userNotificationCenter_didActivateNotification(center: cocoascript.NSUserNotificationCenter, notification: cocoascript.NSUserNotification):void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenterdelegate/1409032-usernotificationcenter
    userNotificationCenter_shouldPresentNotification(center: cocoascript.NSUserNotificationCenter, notification: cocoascript.NSUserNotification):cocoascript.BOOL;
  }
}
declare namespace cocoascript {
  /**
   * An abstract superclass defining an API for objects that act as stand-ins for other objects or for objects that don’t exist yet.
   * doc://com.apple.documentation/documentation/foundation/nsproxy
   */
  interface NSProxy {
    // doc://com.apple.documentation/documentation/foundation/nsproxy/1589830-dealloc
    dealloc():void;
    // doc://com.apple.documentation/documentation/foundation/nsproxy/1416087-finalize
    finalize():void;
    // doc://com.apple.documentation/documentation/foundation/nsproxy/1416417-forwardinvocation
    forwardInvocation(invocation: cocoascript.NSInvocation):void;
    // doc://com.apple.documentation/documentation/foundation/nsproxy/1589828-methodsignatureforselector
    methodSignatureForSelector(sel: cocoascript.SEL):cocoascript.NSMethodSignature;
    // doc://com.apple.documentation/documentation/foundation/nsproxy/1416346-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsproxy/1416366-debugdescription
    debugDescription(): cocoascript.NSString;
    setDebugDescription(): void;
    //
    alloc():cocoascript.NSProxy;
    //
    init():cocoascript.NSProxy;
  }
}

declare const NSProxy: cocoascript.NSProxy;
declare namespace cocoascript {
  /**
   * A singleton object used to represent null values in collection objects that don’t allow
   * doc://com.apple.documentation/documentation/foundation/nsnull
   */
  interface NSNull extends NSObject {
    //
    alloc():cocoascript.NSNull;
    //
    init():cocoascript.NSNull;
  }
}

declare const NSNull: cocoascript.NSNull;
declare namespace cocoascript {
  /**
   * A convenient interface to the contents of the file system, and the primary means of interacting with it.
   * doc://com.apple.documentation/documentation/foundation/nsfilemanager
   */
  interface NSFileManager extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409234-defaultmanager
    defaultManager(): cocoascript.NSFileManager;
    setDefaultManager(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1642807-homedirectoryforcurrentuser
    homeDirectoryForCurrentUser(): cocoascript.NSURL;
    setHomeDirectoryForCurrentUser(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1642853-homedirectoryforuser
    homeDirectoryForUser(userName: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1642996-temporarydirectory
    temporaryDirectory(): cocoascript.NSURL;
    setTemporaryDirectory(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1407693-urlfordirectory
    URLForDirectory_inDomain_appropriateForURL_create_error(directory: cocoascript.NSSearchPathDirectory, domain: cocoascript.NSSearchPathDomainMask, url: cocoascript.NSURL, shouldCreate: cocoascript.BOOL, error: cocoascript.NSError):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1407726-urlsfordirectory
    URLsForDirectory_inDomains(directory: cocoascript.NSSearchPathDirectory, domainMask: cocoascript.NSSearchPathDomainMask):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1412643-containerurlforsecurityapplicati
    containerURLForSecurityApplicationGroupIdentifier(groupIdentifier: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413768-contentsofdirectoryaturl
    contentsOfDirectoryAtURL_includingPropertiesForKeys_options_error(url: cocoascript.NSURL, keys: cocoascript.NSURLResourceKey, mask: cocoascript.NSDirectoryEnumerationOptions, error: cocoascript.NSError):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1414584-contentsofdirectoryatpath
    contentsOfDirectoryAtPath_error(path: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409571-enumeratoraturl
    enumeratorAtURL_includingPropertiesForKeys_options_errorHandler(url: cocoascript.NSURL, keys: cocoascript.NSURLResourceKey, mask: cocoascript.NSDirectoryEnumerationOptions, handler: cocoascript.NSError):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1408726-enumeratoratpath
    enumeratorAtPath(path: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409626-mountedvolumeurlsincludingresour
    mountedVolumeURLsIncludingResourceValuesForKeys_options(propertyKeys: cocoascript.NSURLResourceKey, options: cocoascript.NSVolumeEnumerationOptions):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1417353-subpathsofdirectoryatpath
    subpathsOfDirectoryAtPath_error(path: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413742-subpathsatpath
    subpathsAtPath(path: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1415371-createdirectoryaturl
    createDirectoryAtURL_withIntermediateDirectories_attributes_error(url: cocoascript.NSURL, createIntermediates: cocoascript.BOOL, attributes: cocoascript.NSFileManager, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1407884-createdirectoryatpath
    createDirectoryAtPath_withIntermediateDirectories_attributes_error(path: cocoascript.NSString, createIntermediates: cocoascript.BOOL, attributes: cocoascript.NSFileManager, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1410695-createfileatpath
    createFileAtPath_contents_attributes(path: cocoascript.NSString, data: cocoascript.NSData, attr: cocoascript.NSFileManager):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413590-removeitematurl
    removeItemAtURL_error(URL: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1408573-removeitematpath
    removeItemAtPath_error(path: cocoascript.NSString, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1414306-trashitematurl
    trashItemAtURL_resultingItemURL_error(url: cocoascript.NSURL, outResultingURL: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1412432-replaceitematurl
    replaceItemAtURL_withItemAtURL_backupItemName_options_resultingItemURL_error(originalItemURL: cocoascript.NSURL, newItemURL: cocoascript.NSURL, backupItemName: cocoascript.NSString, options: cocoascript.NSFileManagerItemReplacementOptions, resultingURL: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1412957-copyitematurl
    copyItemAtURL_toURL_error(srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1407903-copyitematpath
    copyItemAtPath_toPath_error(srcPath: cocoascript.NSString, dstPath: cocoascript.NSString, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1414750-moveitematurl
    moveItemAtURL_toURL_error(srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413529-moveitematpath
    moveItemAtPath_toPath_error(srcPath: cocoascript.NSString, dstPath: cocoascript.NSString, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1408036-ubiquityidentitytoken
    ubiquityIdentityToken(): cocoascript.NSCoding;
    setUbiquityIdentityToken(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1411653-urlforubiquitycontaineridentifie
    URLForUbiquityContainerIdentifier(containerIdentifier: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1410218-isubiquitousitematurl
    isUbiquitousItemAtURL(url: cocoascript.NSURL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413989-setubiquitous
    setUbiquitous_itemAtURL_destinationURL_error(flag: cocoascript.BOOL, url: cocoascript.NSURL, destinationURL: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1410377-startdownloadingubiquitousitemat
    startDownloadingUbiquitousItemAtURL_error(url: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409696-evictubiquitousitematurl
    evictUbiquitousItemAtURL_error(url: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1411577-urlforpublishingubiquitousitemat
    URLForPublishingUbiquitousItemAtURL_expirationDate_error(url: cocoascript.NSURL, outDate: cocoascript.NSDate, error: cocoascript.NSError):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/2915262-getfileproviderservicesforitemat
    getFileProviderServicesForItemAtURL_completionHandler(url: cocoascript.NSURL, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1414652-createsymboliclinkaturl
    createSymbolicLinkAtURL_withDestinationURL_error(url: cocoascript.NSURL, destURL: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1411007-createsymboliclinkatpath
    createSymbolicLinkAtPath_withDestinationPath_error(path: cocoascript.NSString, destPath: cocoascript.NSString, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1414456-linkitematurl
    linkItemAtURL_toURL_error(srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1411206-linkitematpath
    linkItemAtPath_toPath_error(srcPath: cocoascript.NSString, dstPath: cocoascript.NSString, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1415161-destinationofsymboliclinkatpath
    destinationOfSymbolicLinkAtPath_error(path: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1415645-fileexistsatpath
    fileExistsAtPath(path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1410277-fileexistsatpath
    fileExistsAtPath_isDirectory(path: cocoascript.NSString, isDirectory: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1418292-isreadablefileatpath
    isReadableFileAtPath(path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1416680-iswritablefileatpath
    isWritableFileAtPath(path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1414159-isexecutablefileatpath
    isExecutableFileAtPath(path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1408087-isdeletablefileatpath
    isDeletableFileAtPath(path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413929-componentstodisplayforpath
    componentsToDisplayForPath(path: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409751-displaynameatpath
    displayNameAtPath(path: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1410452-attributesofitematpath
    attributesOfItemAtPath_error(path: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSFileManager;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1411896-attributesoffilesystemforpath
    attributesOfFileSystemForPath_error(path: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSFileManager;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413667-setattributes
    setAttributes_ofItemAtPath_error(attributes: cocoascript.NSFileManager, path: cocoascript.NSString, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1407347-contentsatpath
    contentsAtPath(path: cocoascript.NSString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1415275-contentsequalatpath
    contentsEqualAtPath_andPath(path1: cocoascript.NSString, path2: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1407229-getrelationship
    getRelationship_ofDirectoryAtURL_toItemAtURL_error(outRelationship: cocoascript.NSURLRelationship, directoryURL: cocoascript.NSURL, otherURL: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1411439-getrelationship
    getRelationship_ofDirectory_inDomain_toItemAtURL_error(outRelationship: cocoascript.NSURLRelationship, directory: cocoascript.NSSearchPathDirectory, domainMask: cocoascript.NSSearchPathDomainMask, url: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1417057-filesystemrepresentationwithpath
    fileSystemRepresentationWithPath(path: cocoascript.NSString):string;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409640-stringwithfilesystemrepresentati
    stringWithFileSystemRepresentation_length(str: string, len: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1415163-delegate
    delegate(): cocoascript.NSFileManagerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1412020-changecurrentdirectorypath
    changeCurrentDirectoryPath(path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1410766-currentdirectorypath
    currentDirectoryPath(): cocoascript.NSString;
    setCurrentDirectoryPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409917-unmountvolumeaturl
    unmountVolumeAtURL_options_completionHandler(url: cocoascript.NSURL, mask: cocoascript.NSFileManagerUnmountOptions, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557010-copypath
    copyPath_toPath_handler(src: cocoascript.NSString, dest: cocoascript.NSString, handler: cocoascript.NSFileManager):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1556999-movepath
    movePath_toPath_handler(src: cocoascript.NSString, dest: cocoascript.NSString, handler: cocoascript.NSFileManager):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1556998-removefileatpath
    removeFileAtPath_handler(path: cocoascript.NSString, handler: cocoascript.NSFileManager):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557001-changefileattributes
    changeFileAttributes_atPath(attributes: cocoascript.NSDictionary, path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557004-fileattributesatpath
    fileAttributesAtPath_traverseLink(path: cocoascript.NSString, yorn: cocoascript.BOOL):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557008-filesystemattributesatpath
    fileSystemAttributesAtPath(path: cocoascript.NSString):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557009-directorycontentsatpath
    directoryContentsAtPath(path: cocoascript.NSString):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557007-createdirectoryatpath
    createDirectoryAtPath_attributes(path: cocoascript.NSString, attributes: cocoascript.NSDictionary):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557000-createsymboliclinkatpath
    createSymbolicLinkAtPath_pathContent(path: cocoascript.NSString, otherpath: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557006-pathcontentofsymboliclinkatpath
    pathContentOfSymbolicLinkAtPath(path: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557003-linkpath
    linkPath_toPath_handler(src: cocoascript.NSString, dest: cocoascript.NSString, handler: cocoascript.NSFileManager):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1557005-filemanager
    fileManager_shouldProceedAfterError(fm: cocoascript.NSFileManager, errorInfo: cocoascript.NSDictionary):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1557002-filemanager
    fileManager_willProcessPath(fm: cocoascript.NSFileManager, path: cocoascript.NSString):void;
    //
    alloc():cocoascript.NSFileManager;
    //
    init():cocoascript.NSFileManager;
  }
}

declare const NSFileManager: cocoascript.NSFileManager;
// doc://com.apple.documentation/documentation/foundation/1413045-nshomedirectory
declare const NSHomeDirectory: void;
// doc://com.apple.documentation/documentation/foundation/1414297-nsusername
declare const NSUserName: void;
// doc://com.apple.documentation/documentation/foundation/1410265-nsfullusername
declare const NSFullUserName: void;
// doc://com.apple.documentation/documentation/foundation/1413447-nshomedirectoryforuser
declare const NSHomeDirectoryForUser: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/1409211-nstemporarydirectory
declare const NSTemporaryDirectory: void;
// doc://com.apple.documentation/documentation/foundation/1414224-nssearchpathfordirectoriesindoma
declare const NSSearchPathForDirectoriesInDomains: cocoascript.BOOL;
// doc://com.apple.documentation/documentation/foundation/1414132-nsopensteprootdirectory
declare const NSOpenStepRootDirectory: void;
// doc://com.apple.documentation/documentation/foundation/nsfilemanagerunmountdissentingprocessidentifiererrorkey
declare const NSFileManagerUnmountDissentingProcessIdentifierErrorKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/1412112-nsfiletypeforhfstypecode
declare const NSFileTypeForHFSTypeCode: cocoascript.OSType;
// doc://com.apple.documentation/documentation/foundation/1415466-nshfstypecodefromfiletype
declare const NSHFSTypeCodeFromFileType: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/1414326-nshfstypeoffile
declare const NSHFSTypeOfFile: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * Information about standard time conventions associated with a specific geopolitical region.
   * doc://com.apple.documentation/documentation/foundation/nstimezone
   */
  interface NSTimeZone extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387209-localtimezone
    localTimeZone(): cocoascript.NSTimeZone;
    setLocalTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387231-systemtimezone
    systemTimeZone(): cocoascript.NSTimeZone;
    setSystemTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387244-defaulttimezone
    defaultTimeZone(): cocoascript.NSTimeZone;
    setDefaultTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387215-initwithname
    initWithName(tzName: cocoascript.NSString):cocoascript.NSTimeZone;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387250-initwithname
    initWithName_data(tzName: cocoascript.NSString, aData: cocoascript.NSData):cocoascript.NSTimeZone;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387223-knowntimezonenames
    knownTimeZoneNames(): cocoascript.NSString;
    setKnownTimeZoneNames(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387258-abbreviationdictionary
    abbreviationDictionary(): cocoascript.NSString;
    setAbbreviationDictionary(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387233-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387195-abbreviation
    abbreviation(): cocoascript.NSString;
    setAbbreviation(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387237-abbreviationfordate
    abbreviationForDate(aDate: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387221-secondsfromgmt
    secondsFromGMT(): cocoascript.NSInteger;
    setSecondsFromGMT(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387242-secondsfromgmtfordate
    secondsFromGMTForDate(aDate: cocoascript.NSDate):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387213-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387187-timezonedataversion
    timeZoneDataVersion(): cocoascript.NSString;
    setTimeZoneDataVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387191-daylightsavingtime
    daylightSavingTime(): cocoascript.BOOL;
    setDaylightSavingTime(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387201-isdaylightsavingtimefordate
    isDaylightSavingTimeForDate(aDate: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387235-daylightsavingtimeoffset
    daylightSavingTimeOffset(): cocoascript.NSTimeInterval;
    setDaylightSavingTimeOffset(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387207-daylightsavingtimeoffsetfordate
    daylightSavingTimeOffsetForDate(aDate: cocoascript.NSDate):cocoascript.NSTimeInterval;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387183-nextdaylightsavingtimetransition
    nextDaylightSavingTimeTransition(): cocoascript.NSDate;
    setNextDaylightSavingTimeTransition(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387254-nextdaylightsavingtimetransition
    nextDaylightSavingTimeTransitionAfterDate(aDate: cocoascript.NSDate):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387211-isequaltotimezone
    isEqualToTimeZone(aTimeZone: cocoascript.NSTimeZone):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387193-localizedname
    localizedName_locale(style: cocoascript.NSTimeZoneNameStyle, locale: cocoascript.NSLocale):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387217-description
    description(): cocoascript.NSString;
    setDescription(): void;
    //
    alloc():cocoascript.NSTimeZone;
    //
    init():cocoascript.NSTimeZone;
  }
}

declare const NSTimeZone: cocoascript.NSTimeZone;
declare namespace cocoascript {
  /**
   * A collection similar to a dictionary, but with a broader range of available memory semantics.
   * doc://com.apple.documentation/documentation/foundation/nsmaptable
   */
  interface NSMapTable extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391382-initwithkeyoptions
    initWithKeyOptions_valueOptions_capacity(keyOptions: cocoascript.NSPointerFunctionsOptions, valueOptions: cocoascript.NSPointerFunctionsOptions, initialCapacity: cocoascript.NSUInteger):cocoascript.NSMapTable;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391429-initwithkeypointerfunctions
    initWithKeyPointerFunctions_valuePointerFunctions_capacity(keyFunctions: cocoascript.NSPointerFunctions, valueFunctions: cocoascript.NSPointerFunctions, initialCapacity: cocoascript.NSUInteger):cocoascript.NSMapTable;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391444-objectforkey
    objectForKey(aKey: cocoascript.KeyType):void;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391398-keyenumerator
    keyEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391400-objectenumerator
    objectEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391360-count
    count(): cocoascript.NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391457-setobject
    setObject_forKey(anObject: any, aKey: cocoascript.KeyType):void;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391461-removeobjectforkey
    removeObjectForKey(aKey: cocoascript.KeyType):void;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391386-removeallobjects
    removeAllObjects():void;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391402-dictionaryrepresentation
    dictionaryRepresentation():cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391412-keypointerfunctions
    keyPointerFunctions(): cocoascript.NSPointerFunctions;
    setKeyPointerFunctions(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391467-valuepointerfunctions
    valuePointerFunctions(): cocoascript.NSPointerFunctions;
    setValuePointerFunctions(): void;
    //
    alloc():cocoascript.NSMapTable;
    //
    init():cocoascript.NSMapTable;
  }
}

declare const NSMapTable: cocoascript.NSMapTable;
declare namespace cocoascript {
  /**
   * A task, like downloading a specific resource, performed in a URL session.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiontask
   */
  interface NSURLSessionTask extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411591-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411121-resume
    resume():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411565-suspend
    suspend():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1409888-state
    state(): cocoascript.NSURLSessionTaskState;
    setState(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1410569-priority
    priority(): number;
    setPriority(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/2908821-progress
    progress(): cocoascript.NSProgress;
    setProgress(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1410663-countofbytesexpectedtoreceive
    countOfBytesExpectedToReceive(): number;
    setCountOfBytesExpectedToReceive(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411581-countofbytesreceived
    countOfBytesReceived(): number;
    setCountOfBytesReceived(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411534-countofbytesexpectedtosend
    countOfBytesExpectedToSend(): number;
    setCountOfBytesExpectedToSend(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1410444-countofbytessent
    countOfBytesSent(): number;
    setCountOfBytesSent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411649-currentrequest
    currentRequest(): cocoascript.NSURLRequest;
    setCurrentRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411572-originalrequest
    originalRequest(): cocoascript.NSURLRequest;
    setOriginalRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1410586-response
    response(): cocoascript.NSURLResponse;
    setResponse(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1409798-taskdescription
    taskDescription(): cocoascript.NSString;
    setTaskDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411231-taskidentifier
    taskIdentifier(): cocoascript.NSUInteger;
    setTaskIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1408145-error
    error(): cocoascript.NSError;
    setError(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/2873414-countofbytesclientexpectstorecei
    countOfBytesClientExpectsToReceive(): number;
    setCountOfBytesClientExpectsToReceive(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/2873401-countofbytesclientexpectstosend
    countOfBytesClientExpectsToSend(): number;
    setCountOfBytesClientExpectsToSend(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/2873413-earliestbegindate
    earliestBeginDate(): cocoascript.NSDate;
    setEarliestBeginDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/3240624-init
    init():cocoascript.NSURLSessionTask;
    //
    alloc():cocoascript.NSURLSessionTask;
    //
    init():cocoascript.NSURLSessionTask;
  }
}

declare const NSURLSessionTask: cocoascript.NSURLSessionTask;
declare namespace cocoascript {
  /**
   * A configuration object that defines behavior and policies for a URL session.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration
   */
  interface NSURLSessionConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411560-defaultsessionconfiguration
    defaultSessionConfiguration(): cocoascript.NSURLSessionConfiguration;
    setDefaultSessionConfiguration(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1410529-ephemeralsessionconfiguration
    ephemeralSessionConfiguration(): cocoascript.NSURLSessionConfiguration;
    setEphemeralSessionConfiguration(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/3240616-init
    init():cocoascript.NSURLSessionConfiguration;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1408987-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411532-httpadditionalheaders
    HTTPAdditionalHeaders(): cocoascript.NSDictionary;
    setHTTPAdditionalHeaders(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411606-networkservicetype
    networkServiceType(): cocoascript.NSURLRequestNetworkServiceType;
    setNetworkServiceType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1409406-allowscellularaccess
    allowsCellularAccess(): cocoascript.BOOL;
    setAllowsCellularAccess(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1408259-timeoutintervalforrequest
    timeoutIntervalForRequest(): cocoascript.NSTimeInterval;
    setTimeoutIntervalForRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1408153-timeoutintervalforresource
    timeoutIntervalForResource(): cocoascript.NSTimeInterval;
    setTimeoutIntervalForResource(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1409450-sharedcontaineridentifier
    sharedContainerIdentifier(): cocoascript.NSString;
    setSharedContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/2908812-waitsforconnectivity
    waitsForConnectivity(): cocoascript.BOOL;
    setWaitsForConnectivity(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1408933-httpcookieacceptpolicy
    HTTPCookieAcceptPolicy(): cocoascript.NSHTTPCookieAcceptPolicy;
    setHTTPCookieAcceptPolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411589-httpshouldsetcookies
    HTTPShouldSetCookies(): cocoascript.BOOL;
    setHTTPShouldSetCookies(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411599-httpcookiestorage
    HTTPCookieStorage(): cocoascript.NSHTTPCookieStorage;
    setHTTPCookieStorage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/3362533-tlsminimumsupportedprotocolversi
    TLSMinimumSupportedProtocolVersion(): cocoascript.tls_protocol_version_t;
    setTLSMinimumSupportedProtocolVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/3362532-tlsmaximumsupportedprotocolversi
    TLSMaximumSupportedProtocolVersion(): cocoascript.tls_protocol_version_t;
    setTLSMaximumSupportedProtocolVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1410947-urlcredentialstorage
    URLCredentialStorage(): cocoascript.NSURLCredentialStorage;
    setURLCredentialStorage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411526-tlsminimumsupportedprotocol
    TLSMinimumSupportedProtocol(): cocoascript.SSLProtocol;
    setTLSMinimumSupportedProtocol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1409076-tlsmaximumsupportedprotocol
    TLSMaximumSupportedProtocol(): cocoascript.SSLProtocol;
    setTLSMaximumSupportedProtocol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1410148-urlcache
    URLCache(): cocoascript.NSURLCache;
    setURLCache(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411655-requestcachepolicy
    requestCachePolicy(): cocoascript.NSURLRequestCachePolicy;
    setRequestCachePolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1617174-sessionsendslaunchevents
    sessionSendsLaunchEvents(): cocoascript.BOOL;
    setSessionSendsLaunchEvents(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411552-discretionary
    discretionary(): cocoascript.BOOL;
    setDiscretionary(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1409517-shoulduseextendedbackgroundidlem
    shouldUseExtendedBackgroundIdleMode(): cocoascript.BOOL;
    setShouldUseExtendedBackgroundIdleMode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411050-protocolclasses
    protocolClasses(): cocoascript.Class;
    setProtocolClasses(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/2875967-multipathservicetype
    multipathServiceType(): cocoascript.NSURLSessionMultipathServiceType;
    setMultipathServiceType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1407597-httpmaximumconnectionsperhost
    HTTPMaximumConnectionsPerHost(): cocoascript.NSInteger;
    setHTTPMaximumConnectionsPerHost(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411657-httpshouldusepipelining
    HTTPShouldUsePipelining(): cocoascript.BOOL;
    setHTTPShouldUsePipelining(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411499-connectionproxydictionary
    connectionProxyDictionary(): cocoascript.NSDictionary;
    setConnectionProxyDictionary(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/2908812-waitsforconnectivity
    waitsForConnectivity(): cocoascript.BOOL;
    setWaitsForConnectivity(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/3235751-allowsconstrainednetworkaccess
    allowsConstrainedNetworkAccess(): cocoascript.BOOL;
    setAllowsConstrainedNetworkAccess(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/3235752-allowsexpensivenetworkaccess
    allowsExpensiveNetworkAccess(): cocoascript.BOOL;
    setAllowsExpensiveNetworkAccess(): void;
    //
    alloc():cocoascript.NSURLSessionConfiguration;
    //
    init():cocoascript.NSURLSessionConfiguration;
  }
}

declare const NSURLSessionConfiguration: cocoascript.NSURLSessionConfiguration;
declare namespace cocoascript {
  /**
   * A string parser that scans for substrings or characters in a character set, and for numeric values from decimal, hexadecimal, and floating-point representations.
   * doc://com.apple.documentation/documentation/foundation/nsscanner
   */
  interface NSScanner extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1417131-initwithstring
    initWithString(string: cocoascript.NSString):cocoascript.NSScanner;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1418109-string
    string(): cocoascript.NSString;
    setString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1413294-scanlocation
    scanLocation(): cocoascript.NSUInteger;
    setScanLocation(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1409488-casesensitive
    caseSensitive(): cocoascript.BOOL;
    setCaseSensitive(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1410204-characterstobeskipped
    charactersToBeSkipped(): cocoascript.NSCharacterSet;
    setCharactersToBeSkipped(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1409531-locale
    locale(): cocoascript.id;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1417575-scancharactersfromset
    scanCharactersFromSet_intoString(set: cocoascript.NSCharacterSet, result: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1413598-scanuptocharactersfromset
    scanUpToCharactersFromSet_intoString(set: cocoascript.NSCharacterSet, result: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1407591-scanstring
    scanString_intoString(string: cocoascript.NSString, result: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1411971-scanuptostring
    scanUpToString_intoString(string: cocoascript.NSString, result: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1408025-scandecimal
    scanDecimal(dcm: cocoascript.NSDecimal):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1415922-scandouble
    scanDouble(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1411677-scanfloat
    scanFloat(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1411780-scanhexdouble
    scanHexDouble(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1411236-scanhexfloat
    scanHexFloat(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1413857-scanhexint
    scanHexInt(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1412759-scanhexlonglong
    scanHexLongLong(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1411082-scaninteger
    scanInteger(result: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1410914-scanint
    scanInt(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1412629-scanlonglong
    scanLongLong(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1408559-scanunsignedlonglong
    scanUnsignedLongLong(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1412801-atend
    atEnd(): cocoascript.BOOL;
    setAtEnd(): void;
    //
    alloc():cocoascript.NSScanner;
    //
    init():cocoascript.NSScanner;
  }
}

declare const NSScanner: cocoascript.NSScanner;
declare namespace cocoascript {
  /**
   * An immutable collection of unique integer values that represent indexes in another collection.
   * doc://com.apple.documentation/documentation/foundation/nsindexset
   */
  interface NSIndexSet extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1416501-initwithindex
    initWithIndex(value: cocoascript.NSUInteger):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1414013-initwithindexesinrange
    initWithIndexesInRange(range: cocoascript.NSRange):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1415602-initwithindexset
    initWithIndexSet(indexSet: cocoascript.NSIndexSet):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1410176-containsindex
    containsIndex(value: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1414823-containsindexes
    containsIndexes(indexSet: cocoascript.NSIndexSet):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1408511-containsindexesinrange
    containsIndexesInRange(range: cocoascript.NSRange):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1413352-intersectsindexesinrange
    intersectsIndexesInRange(range: cocoascript.NSRange):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1409648-count
    count(): cocoascript.NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1410114-countofindexesinrange
    countOfIndexesInRange(range: cocoascript.NSRange):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1408471-indexpassingtest
    indexPassingTest(predicate: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1407357-indexespassingtest
    indexesPassingTest(predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1415860-indexwithoptions
    indexWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1412401-indexeswithoptions
    indexesWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1415301-indexinrange
    indexInRange_options_passingTest(range: cocoascript.NSRange, opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1412153-indexesinrange
    indexesInRange_options_passingTest(range: cocoascript.NSRange, opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1416352-enumeraterangesinrange
    enumerateRangesInRange_options_usingBlock(range: cocoascript.NSRange, opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1409668-enumeraterangesusingblock
    enumerateRangesUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1412673-enumeraterangeswithoptions
    enumerateRangesWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1412212-isequaltoindexset
    isEqualToIndexSet(indexSet: cocoascript.NSIndexSet):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1410814-firstindex
    firstIndex(): cocoascript.NSUInteger;
    setFirstIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1415020-lastindex
    lastIndex(): cocoascript.NSUInteger;
    setLastIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1417609-indexlessthanindex
    indexLessThanIndex(value: cocoascript.NSUInteger):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1412299-indexlessthanorequaltoindex
    indexLessThanOrEqualToIndex(value: cocoascript.NSUInteger):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1407870-indexgreaterthanorequaltoindex
    indexGreaterThanOrEqualToIndex(value: cocoascript.NSUInteger):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1407192-indexgreaterthanindex
    indexGreaterThanIndex(value: cocoascript.NSUInteger):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1409332-getindexes
    getIndexes_maxCount_inIndexRange(indexBuffer: cocoascript.NSUInteger, bufferSize: cocoascript.NSUInteger, range: cocoascript.NSRangePointer):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1411395-enumerateindexesusingblock
    enumerateIndexesUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1414545-enumerateindexeswithoptions
    enumerateIndexesWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsindexset/1408162-enumerateindexesinrange
    enumerateIndexesInRange_options_usingBlock(range: cocoascript.NSRange, opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    //
    alloc():cocoascript.NSIndexSet;
    //
    init():cocoascript.NSIndexSet;
  }
}

declare const NSIndexSet: cocoascript.NSIndexSet;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nsurlcredential
   */
  interface NSURLCredential extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1418121-initwithidentity
    initWithIdentity_certificates_persistence(identity: cocoascript.SecIdentityRef, certArray: cocoascript.NSArray, persistence: cocoascript.NSURLCredentialPersistence):cocoascript.NSURLCredential;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1413935-initwithtrust
    initWithTrust(trust: cocoascript.SecTrustRef):cocoascript.NSURLCredential;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1417977-initwithuser
    initWithUser_password_persistence(user: cocoascript.NSString, password: cocoascript.NSString, persistence: cocoascript.NSURLCredentialPersistence):cocoascript.NSURLCredential;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1408654-user
    user(): cocoascript.NSString;
    setUser(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1412369-certificates
    certificates(): cocoascript.NSArray;
    setCertificates(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1418072-haspassword
    hasPassword(): cocoascript.BOOL;
    setHasPassword(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1417913-password
    password(): cocoascript.NSString;
    setPassword(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1411514-identity
    identity(): cocoascript.SecIdentityRef;
    setIdentity(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1416977-persistence
    persistence(): cocoascript.NSURLCredentialPersistence;
    setPersistence(): void;
    //
    alloc():cocoascript.NSURLCredential;
    //
    init():cocoascript.NSURLCredential;
  }
}

declare const NSURLCredential: cocoascript.NSURLCredential;
declare namespace cocoascript {
  /**
   * An object that defines the relationships between calendar units (such as eras, years, and weekdays) and absolute points in time, providing features for calculation and comparison of dates.
   * doc://com.apple.documentation/documentation/foundation/nscalendar
   */
  interface NSCalendar extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1415991-initwithcalendaridentifier
    initWithCalendarIdentifier(ident: cocoascript.NSCalendarIdentifier):cocoascript.NSCalendar;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1408501-currentcalendar
    currentCalendar(): cocoascript.NSCalendar;
    setCurrentCalendar(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1413771-autoupdatingcurrentcalendar
    autoupdatingCurrentCalendar(): cocoascript.NSCalendar;
    setAutoupdatingCurrentCalendar(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1407954-date
    date_matchesComponents(date: cocoascript.NSDate, components: cocoascript.NSDateComponents):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1416505-component
    component_fromDate(unit: cocoascript.NSCalendarUnit, date: cocoascript.NSDate):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1414841-components
    components_fromDate(unitFlags: cocoascript.NSCalendarUnit, date: cocoascript.NSDate):cocoascript.NSDateComponents;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1407925-components
    components_fromDate_toDate_options(unitFlags: cocoascript.NSCalendarUnit, startingDate: cocoascript.NSDate, resultDate: cocoascript.NSDate, opts: cocoascript.NSCalendarOptions):cocoascript.NSDateComponents;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1411297-components
    components_fromDateComponents_toDateComponents_options(unitFlags: cocoascript.NSCalendarUnit, startingDateComp: cocoascript.NSDateComponents, resultDateComp: cocoascript.NSDateComponents, options: cocoascript.NSCalendarOptions):cocoascript.NSDateComponents;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1413194-componentsintimezone
    componentsInTimeZone_fromDate(timezone: cocoascript.NSTimeZone, date: cocoascript.NSDate):cocoascript.NSDateComponents;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1418143-getera
    getEra_year_month_day_fromDate(eraValuePointer: cocoascript.NSInteger, yearValuePointer: cocoascript.NSInteger, monthValuePointer: cocoascript.NSInteger, dayValuePointer: cocoascript.NSInteger, date: cocoascript.NSDate):void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1410912-getera
    getEra_yearForWeekOfYear_weekOfYear_weekday_fromDate(eraValuePointer: cocoascript.NSInteger, yearValuePointer: cocoascript.NSInteger, weekValuePointer: cocoascript.NSInteger, weekdayValuePointer: cocoascript.NSInteger, date: cocoascript.NSDate):void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1415012-gethour
    getHour_minute_second_nanosecond_fromDate(hourValuePointer: cocoascript.NSInteger, minuteValuePointer: cocoascript.NSInteger, secondValuePointer: cocoascript.NSInteger, nanosecondValuePointer: cocoascript.NSInteger, date: cocoascript.NSDate):void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1408268-calendaridentifier
    calendarIdentifier(): cocoascript.NSCalendarIdentifier;
    setCalendarIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1408310-firstweekday
    firstWeekday(): cocoascript.NSUInteger;
    setFirstWeekday(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1418111-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1409969-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1414251-maximumrangeofunit
    maximumRangeOfUnit(unit: cocoascript.NSCalendarUnit):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1413638-minimumrangeofunit
    minimumRangeOfUnit(unit: cocoascript.NSCalendarUnit):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1410186-minimumdaysinfirstweek
    minimumDaysInFirstWeek(): cocoascript.NSUInteger;
    setMinimumDaysInFirstWeek(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1408595-ordinalityofunit
    ordinalityOfUnit_inUnit_forDate(smaller: cocoascript.NSCalendarUnit, larger: cocoascript.NSCalendarUnit, date: cocoascript.NSDate):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1418344-rangeofunit
    rangeOfUnit_inUnit_forDate(smaller: cocoascript.NSCalendarUnit, larger: cocoascript.NSCalendarUnit, date: cocoascript.NSDate):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1408013-rangeofunit
    rangeOfUnit_startDate_interval_forDate(unit: cocoascript.NSCalendarUnit, datep: cocoascript.NSDate, tip: cocoascript.NSTimeInterval, date: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1413286-rangeofweekendstartdate
    rangeOfWeekendStartDate_interval_containingDate(datep: cocoascript.NSDate, tip: cocoascript.NSTimeInterval, date: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1417161-startofdayfordate
    startOfDayForDate(date: cocoascript.NSDate):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1413938-enumeratedatesstartingafterdate
    enumerateDatesStartingAfterDate_matchingComponents_options_usingBlock(start: cocoascript.NSDate, comps: cocoascript.NSDateComponents, opts: cocoascript.NSCalendarOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1416165-nextdateafterdate
    nextDateAfterDate_matchingComponents_options(date: cocoascript.NSDate, comps: cocoascript.NSDateComponents, options: cocoascript.NSCalendarOptions):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1416814-nextdateafterdate
    nextDateAfterDate_matchingHour_minute_second_options(date: cocoascript.NSDate, hourValue: cocoascript.NSInteger, minuteValue: cocoascript.NSInteger, secondValue: cocoascript.NSInteger, options: cocoascript.NSCalendarOptions):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1417170-nextdateafterdate
    nextDateAfterDate_matchingUnit_value_options(date: cocoascript.NSDate, unit: cocoascript.NSCalendarUnit, value: cocoascript.NSInteger, options: cocoascript.NSCalendarOptions):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1407609-datefromcomponents
    dateFromComponents(comps: cocoascript.NSDateComponents):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1409577-datebyaddingcomponents
    dateByAddingComponents_toDate_options(comps: cocoascript.NSDateComponents, date: cocoascript.NSDate, opts: cocoascript.NSCalendarOptions):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1407989-datebyaddingunit
    dateByAddingUnit_value_toDate_options(unit: cocoascript.NSCalendarUnit, value: cocoascript.NSInteger, date: cocoascript.NSDate, options: cocoascript.NSCalendarOptions):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1407363-datebysettinghour
    dateBySettingHour_minute_second_ofDate_options(h: cocoascript.NSInteger, m: cocoascript.NSInteger, s: cocoascript.NSInteger, date: cocoascript.NSDate, opts: cocoascript.NSCalendarOptions):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1417915-datebysettingunit
    dateBySettingUnit_value_ofDate_options(unit: cocoascript.NSCalendarUnit, v: cocoascript.NSInteger, date: cocoascript.NSDate, opts: cocoascript.NSCalendarOptions):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1415254-datewithera
    dateWithEra_year_month_day_hour_minute_second_nanosecond(eraValue: cocoascript.NSInteger, yearValue: cocoascript.NSInteger, monthValue: cocoascript.NSInteger, dayValue: cocoascript.NSInteger, hourValue: cocoascript.NSInteger, minuteValue: cocoascript.NSInteger, secondValue: cocoascript.NSInteger, nanosecondValue: cocoascript.NSInteger):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1413628-datewithera
    dateWithEra_yearForWeekOfYear_weekOfYear_weekday_hour_minute_second_nanosecond(eraValue: cocoascript.NSInteger, yearValue: cocoascript.NSInteger, weekValue: cocoascript.NSInteger, weekdayValue: cocoascript.NSInteger, hourValue: cocoascript.NSInteger, minuteValue: cocoascript.NSInteger, secondValue: cocoascript.NSInteger, nanosecondValue: cocoascript.NSInteger):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1409905-nextweekendstartdate
    nextWeekendStartDate_interval_options_afterDate(datep: cocoascript.NSDate, tip: cocoascript.NSTimeInterval, options: cocoascript.NSCalendarOptions, date: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1415661-comparedate
    compareDate_toDate_toUnitGranularity(date1: cocoascript.NSDate, date2: cocoascript.NSDate, unit: cocoascript.NSCalendarUnit):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1411431-isdate
    isDate_equalToDate_toUnitGranularity(date1: cocoascript.NSDate, date2: cocoascript.NSDate, unit: cocoascript.NSCalendarUnit):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1417649-isdate
    isDate_inSameDayAsDate(date1: cocoascript.NSDate, date2: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1417149-isdateintoday
    isDateInToday(date: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1410279-isdateintomorrow
    isDateInTomorrow(date: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1412175-isdateinweekend
    isDateInWeekend(date: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1409356-isdateinyesterday
    isDateInYesterday(date: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1416226-amsymbol
    AMSymbol(): cocoascript.NSString;
    setAMSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1416343-pmsymbol
    PMSymbol(): cocoascript.NSString;
    setPMSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1412939-weekdaysymbols
    weekdaySymbols(): cocoascript.NSString;
    setWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1407268-shortweekdaysymbols
    shortWeekdaySymbols(): cocoascript.NSString;
    setShortWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1417207-veryshortweekdaysymbols
    veryShortWeekdaySymbols(): cocoascript.NSString;
    setVeryShortWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1411219-standaloneweekdaysymbols
    standaloneWeekdaySymbols(): cocoascript.NSString;
    setStandaloneWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1413871-shortstandaloneweekdaysymbols
    shortStandaloneWeekdaySymbols(): cocoascript.NSString;
    setShortStandaloneWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1418273-veryshortstandaloneweekdaysymbol
    veryShortStandaloneWeekdaySymbols(): cocoascript.NSString;
    setVeryShortStandaloneWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1414872-monthsymbols
    monthSymbols(): cocoascript.NSString;
    setMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1408952-shortmonthsymbols
    shortMonthSymbols(): cocoascript.NSString;
    setShortMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1412779-veryshortmonthsymbols
    veryShortMonthSymbols(): cocoascript.NSString;
    setVeryShortMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1409598-standalonemonthsymbols
    standaloneMonthSymbols(): cocoascript.NSString;
    setStandaloneMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1418180-shortstandalonemonthsymbols
    shortStandaloneMonthSymbols(): cocoascript.NSString;
    setShortStandaloneMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1408035-veryshortstandalonemonthsymbols
    veryShortStandaloneMonthSymbols(): cocoascript.NSString;
    setVeryShortStandaloneMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1411517-quartersymbols
    quarterSymbols(): cocoascript.NSString;
    setQuarterSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1414864-shortquartersymbols
    shortQuarterSymbols(): cocoascript.NSString;
    setShortQuarterSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1407159-standalonequartersymbols
    standaloneQuarterSymbols(): cocoascript.NSString;
    setStandaloneQuarterSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1409823-shortstandalonequartersymbols
    shortStandaloneQuarterSymbols(): cocoascript.NSString;
    setShortStandaloneQuarterSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1415038-erasymbols
    eraSymbols(): cocoascript.NSString;
    setEraSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nscalendar/1414285-longerasymbols
    longEraSymbols(): cocoascript.NSString;
    setLongEraSymbols(): void;
    //
    alloc():cocoascript.NSCalendar;
    //
    init():cocoascript.NSCalendar;
  }
}

declare const NSCalendar: cocoascript.NSCalendar;
declare namespace cocoascript {
  /**
   * An object that specifies a date or time in terms of units (such as year, month, day, hour, and minute) to be evaluated in a calendar system and time zone.
   * doc://com.apple.documentation/documentation/foundation/nsdatecomponents
   */
  interface NSDateComponents extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1415799-calendar
    calendar(): cocoascript.NSCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1408233-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1408788-validdate
    validDate(): cocoascript.BOOL;
    setValidDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1412707-isvaliddateincalendar
    isValidDateInCalendar(calendar: cocoascript.NSCalendar):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1412861-date
    date(): cocoascript.NSDate;
    setDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1416364-era
    era(): cocoascript.NSInteger;
    setEra(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1412462-year
    year(): cocoascript.NSInteger;
    setYear(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1413809-yearforweekofyear
    yearForWeekOfYear(): cocoascript.NSInteger;
    setYearForWeekOfYear(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1416503-quarter
    quarter(): cocoascript.NSInteger;
    setQuarter(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1408724-month
    month(): cocoascript.NSInteger;
    setMonth(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1408836-leapmonth
    leapMonth(): cocoascript.BOOL;
    setLeapMonth(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1410442-weekday
    weekday(): cocoascript.NSInteger;
    setWeekday(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1409476-weekdayordinal
    weekdayOrdinal(): cocoascript.NSInteger;
    setWeekdayOrdinal(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1413168-weekofmonth
    weekOfMonth(): cocoascript.NSInteger;
    setWeekOfMonth(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1416908-weekofyear
    weekOfYear(): cocoascript.NSInteger;
    setWeekOfYear(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1415267-day
    day(): cocoascript.NSInteger;
    setDay(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1430328-week
    week():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1430337-setweek
    setWeek(v: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1411355-hour
    hour(): cocoascript.NSInteger;
    setHour(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1409443-minute
    minute(): cocoascript.NSInteger;
    setMinute(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1414045-second
    second(): cocoascript.NSInteger;
    setSecond(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1415730-nanosecond
    nanosecond(): cocoascript.NSInteger;
    setNanosecond(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1416763-valueforcomponent
    valueForComponent(unit: cocoascript.NSCalendarUnit):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1415961-setvalue
    setValue_forComponent(value: cocoascript.NSInteger, unit: cocoascript.NSCalendarUnit):void;
    //
    alloc():cocoascript.NSDateComponents;
    //
    init():cocoascript.NSDateComponents;
  }
}

declare const NSDateComponents: cocoascript.NSDateComponents;
declare namespace cocoascript {
  /**
   * An instance of
   * doc://com.apple.documentation/documentation/foundation/nspointerfunctions
   */
  interface NSPointerFunctions extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1417715-initwithoptions
    initWithOptions(options: cocoascript.NSPointerFunctionsOptions):cocoascript.NSPointerFunctions;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1415939-hashfunction
    hashFunction(): void;
    setHashFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1413473-isequalfunction
    isEqualFunction(): void;
    setIsEqualFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1408045-sizefunction
    sizeFunction(): void;
    setSizeFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1415200-descriptionfunction
    descriptionFunction(): void;
    setDescriptionFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1410537-acquirefunction
    acquireFunction(): cocoascript.BOOL;
    setAcquireFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1408565-relinquishfunction
    relinquishFunction(): void;
    setRelinquishFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1410762-usesstrongwritebarrier
    usesStrongWriteBarrier(): cocoascript.BOOL;
    setUsesStrongWriteBarrier(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerfunctions/1411097-usesweakreadandwritebarriers
    usesWeakReadAndWriteBarriers(): cocoascript.BOOL;
    setUsesWeakReadAndWriteBarriers(): void;
    //
    alloc():cocoascript.NSPointerFunctions;
    //
    init():cocoascript.NSPointerFunctions;
  }
}

declare const NSPointerFunctions: cocoascript.NSPointerFunctions;
declare namespace cocoascript {
  /**
   * An object that manages the separate parts of a person's name to allow locale-aware formatting.
   * doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents
   */
  interface NSPersonNameComponents extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1410275-nameprefix
    namePrefix(): cocoascript.NSString;
    setNamePrefix(): void;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1407259-givenname
    givenName(): cocoascript.NSString;
    setGivenName(): void;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1418183-middlename
    middleName(): cocoascript.NSString;
    setMiddleName(): void;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1413354-familyname
    familyName(): cocoascript.NSString;
    setFamilyName(): void;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1410776-namesuffix
    nameSuffix(): cocoascript.NSString;
    setNameSuffix(): void;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1414892-nickname
    nickname(): cocoascript.NSString;
    setNickname(): void;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1412193-phoneticrepresentation
    phoneticRepresentation(): cocoascript.NSPersonNameComponents;
    setPhoneticRepresentation(): void;
    //
    alloc():cocoascript.NSPersonNameComponents;
    //
    init():cocoascript.NSPersonNameComponents;
  }
}

declare const NSPersonNameComponents: cocoascript.NSPersonNameComponents;
declare namespace cocoascript {
  /**
   * The metadata associated with the response to a URL load request, independent of protocol and URL scheme.
   * doc://com.apple.documentation/documentation/foundation/nsurlresponse
   */
  interface NSURLResponse extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlresponse/1413566-initwithurl
    initWithURL_MIMEType_expectedContentLength_textEncodingName(URL: cocoascript.NSURL, MIMEType: cocoascript.NSString, length: cocoascript.NSInteger, name: cocoascript.NSString):cocoascript.NSURLResponse;
    // doc://com.apple.documentation/documentation/foundation/nsurlresponse/1413507-expectedcontentlength
    expectedContentLength(): number;
    setExpectedContentLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlresponse/1415924-suggestedfilename
    suggestedFilename(): cocoascript.NSString;
    setSuggestedFilename(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlresponse/1411613-mimetype
    MIMEType(): cocoascript.NSString;
    setMIMEType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlresponse/1408005-textencodingname
    textEncodingName(): cocoascript.NSString;
    setTextEncodingName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlresponse/1414219-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    //
    alloc():cocoascript.NSURLResponse;
    //
    init():cocoascript.NSURLResponse;
  }
}

declare const NSURLResponse: cocoascript.NSURLResponse;
declare namespace cocoascript {
  /**
   * A cached response to a URL request.
   * doc://com.apple.documentation/documentation/foundation/nscachedurlresponse
   */
  interface NSCachedURLResponse extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nscachedurlresponse/1413035-initwithresponse
    initWithResponse_data(response: cocoascript.NSURLResponse, data: cocoascript.NSData):cocoascript.NSCachedURLResponse;
    // doc://com.apple.documentation/documentation/foundation/nscachedurlresponse/1411556-initwithresponse
    initWithResponse_data_userInfo_storagePolicy(response: cocoascript.NSURLResponse, data: cocoascript.NSData, userInfo: cocoascript.NSDictionary, storagePolicy: cocoascript.NSURLCacheStoragePolicy):cocoascript.NSCachedURLResponse;
    // doc://com.apple.documentation/documentation/foundation/nscachedurlresponse/1414011-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/foundation/nscachedurlresponse/1411077-response
    response(): cocoascript.NSURLResponse;
    setResponse(): void;
    // doc://com.apple.documentation/documentation/foundation/nscachedurlresponse/1412269-storagepolicy
    storagePolicy(): cocoascript.NSURLCacheStoragePolicy;
    setStoragePolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nscachedurlresponse/1411900-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    //
    alloc():cocoascript.NSCachedURLResponse;
    //
    init():cocoascript.NSCachedURLResponse;
  }
}

declare const NSCachedURLResponse: cocoascript.NSCachedURLResponse;
declare namespace cocoascript {
  /**
   * A list of indexes that together represent the path to a specific location in a tree of nested arrays.
   * doc://com.apple.documentation/documentation/foundation/nsindexpath
   */
  interface NSIndexPath extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsindexpath/1416855-initwithindex
    initWithIndex(index: cocoascript.NSUInteger):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/foundation/nsindexpath/1416906-initwithindexes
    initWithIndexes_length(indexes: cocoascript.NSUInteger, length: cocoascript.NSUInteger):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/foundation/nsindexpath/1528298-section
    section(): cocoascript.NSInteger;
    setSection(): void;
    // doc://com.apple.documentation/documentation/foundation/nsindexpath/1614853-row
    row(): cocoascript.NSInteger;
    setRow(): void;
    // doc://com.apple.documentation/documentation/foundation/nsindexpath/1528293-item
    item(): cocoascript.NSInteger;
    setItem(): void;
    // doc://com.apple.documentation/documentation/foundation/nsindexpath/1412001-length
    length(): cocoascript.NSUInteger;
    setLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsindexpath/1417553-indexpathbyaddingindex
    indexPathByAddingIndex(index: cocoascript.NSUInteger):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/foundation/nsindexpath/1415624-indexpathbyremovinglastindex
    indexPathByRemovingLastIndex():cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/foundation/nsindexpath/1407552-compare
    compare(otherObject: cocoascript.NSIndexPath):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsindexpath/1414179-indexatposition
    indexAtPosition(position: cocoascript.NSUInteger):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsindexpath/1413360-getindexes
    getIndexes_range(indexes: cocoascript.NSUInteger, positionRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsindexpath/1417753-getindexes
    getIndexes(indexes: cocoascript.NSUInteger):void;
    //
    alloc():cocoascript.NSIndexPath;
    //
    init():cocoascript.NSIndexPath;
  }
}

declare const NSIndexPath: cocoascript.NSIndexPath;
declare namespace cocoascript {
  /**
   * A URL load request that is independent of protocol or URL scheme.
   * doc://com.apple.documentation/documentation/foundation/nsurlrequest
   */
  interface NSURLRequest extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1410303-initwithurl
    initWithURL(URL: cocoascript.NSURL):cocoascript.NSURLRequest;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1416292-initwithurl
    initWithURL_cachePolicy_timeoutInterval(URL: cocoascript.NSURL, cachePolicy: cocoascript.NSURLRequestCachePolicy, timeoutInterval: cocoascript.NSTimeInterval):cocoascript.NSURLRequest;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1407944-cachepolicy
    cachePolicy(): cocoascript.NSURLRequestCachePolicy;
    setCachePolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1413030-httpmethod
    HTTPMethod(): cocoascript.NSString;
    setHTTPMethod(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1408996-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1411317-httpbody
    HTTPBody(): cocoascript.NSData;
    setHTTPBody(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1407341-httpbodystream
    HTTPBodyStream(): cocoascript.NSInputStream;
    setHTTPBodyStream(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1414134-maindocumenturl
    mainDocumentURL(): cocoascript.NSURL;
    setMainDocumentURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1418477-allhttpheaderfields
    allHTTPHeaderFields(): cocoascript.NSString;
    setAllHTTPHeaderFields(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1409376-valueforhttpheaderfield
    valueForHTTPHeaderField(field: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1418229-timeoutinterval
    timeoutInterval(): cocoascript.NSTimeInterval;
    setTimeoutInterval(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1418369-httpshouldhandlecookies
    HTTPShouldHandleCookies(): cocoascript.BOOL;
    setHTTPShouldHandleCookies(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1409170-httpshouldusepipelining
    HTTPShouldUsePipelining(): cocoascript.BOOL;
    setHTTPShouldUsePipelining(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1412032-allowscellularaccess
    allowsCellularAccess(): cocoascript.BOOL;
    setAllowsCellularAccess(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/3325678-allowsconstrainednetworkaccess
    allowsConstrainedNetworkAccess(): cocoascript.BOOL;
    setAllowsConstrainedNetworkAccess(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/3325679-allowsexpensivenetworkaccess
    allowsExpensiveNetworkAccess(): cocoascript.BOOL;
    setAllowsExpensiveNetworkAccess(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1418333-networkservicetype
    networkServiceType(): cocoascript.NSURLRequestNetworkServiceType;
    setNetworkServiceType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1416510-supportssecurecoding
    supportsSecureCoding(): cocoascript.BOOL;
    setSupportsSecureCoding(): void;
    //
    alloc():cocoascript.NSURLRequest;
    //
    init():cocoascript.NSURLRequest;
  }
}

declare const NSURLRequest: cocoascript.NSURLRequest;
declare namespace cocoascript {
  /**
   * A static, ordered collection of unique objects.
   * doc://com.apple.documentation/documentation/foundation/nsorderedset
   */
  interface NSOrderedSet extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1408623-initwitharray
    initWithArray(array: any):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1418006-initwitharray
    initWithArray_copyItems(set: any, flag: cocoascript.BOOL):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409272-initwitharray
    initWithArray_range_copyItems(set: any, range: cocoascript.NSRange, flag: cocoascript.BOOL):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413883-initwithobject
    initWithObject(object: any):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1543287-initwithobjects
    initWithObjects(firstObj: any):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411910-initwithobjects
    initWithObjects_count(objects: any, cnt: cocoascript.NSUInteger):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1412402-initwithorderedset
    initWithOrderedSet(set: any):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411658-initwithorderedset
    initWithOrderedSet_copyItems(set: any, flag: cocoascript.BOOL):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1417751-initwithorderedset
    initWithOrderedSet_range_copyItems(set: any, range: cocoascript.NSRange, flag: cocoascript.BOOL):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1416344-initwithset
    initWithSet(set: any):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411246-initwithset
    initWithSet_copyItems(set: any, flag: cocoascript.BOOL):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1417735-init
    init():cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1410106-count
    count(): cocoascript.NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1408681-containsobject
    containsObject(object: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1412332-enumerateobjectsatindexes
    enumerateObjectsAtIndexes_options_usingBlock(s: cocoascript.NSIndexSet, opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413531-enumerateobjectsusingblock
    enumerateObjectsUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409354-enumerateobjectswithoptions
    enumerateObjectsWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409765-firstobject
    firstObject(): any;
    setFirstObject(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409143-lastobject
    lastObject(): any;
    setLastObject(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1414734-objectatindex
    objectAtIndex(idx: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1414253-objectatindexedsubscript
    objectAtIndexedSubscript(idx: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1414943-objectsatindexes
    objectsAtIndexes(indexes: cocoascript.NSIndexSet):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411856-indexofobject
    indexOfObject(object: any):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1417701-indexofobject
    indexOfObject_inSortedRange_options_usingComparator(object: any, range: cocoascript.NSRange, opts: cocoascript.NSBinarySearchingOptions, cmp: cocoascript.NSComparator):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1417531-indexofobjectatindexes
    indexOfObjectAtIndexes_options_passingTest(s: cocoascript.NSIndexSet, opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413003-indexofobjectpassingtest
    indexOfObjectPassingTest(predicate: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1408700-indexofobjectwithoptions
    indexOfObjectWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413586-indexesofobjectsatindexes
    indexesOfObjectsAtIndexes_options_passingTest(s: cocoascript.NSIndexSet, opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411331-indexesofobjectspassingtest
    indexesOfObjectsPassingTest(predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1415944-indexesofobjectswithoptions
    indexesOfObjectsWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409430-objectenumerator
    objectEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1407607-reverseobjectenumerator
    reverseObjectEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411022-reversedorderedset
    reversedOrderedSet(): any;
    setReversedOrderedSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411401-getobjects
    getObjects_range(objects: any, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413118-setvalue
    setValue_forKey(value: cocoascript.NSOrderedSet, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409378-valueforkey
    valueForKey(key: cocoascript.NSString):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1408740-addobserver
    addObserver_forKeyPath_options_context(observer: cocoascript.NSObject, keyPath: cocoascript.NSString, options: cocoascript.NSKeyValueObservingOptions, context: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1412955-removeobserver
    removeObserver_forKeyPath(observer: cocoascript.NSObject, keyPath: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1410496-removeobserver
    removeObserver_forKeyPath_context(observer: cocoascript.NSObject, keyPath: cocoascript.NSString, context: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1408049-isequaltoorderedset
    isEqualToOrderedSet(other: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1414364-intersectsorderedset
    intersectsOrderedSet(other: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1408625-intersectsset
    intersectsSet(set: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411496-issubsetoforderedset
    isSubsetOfOrderedSet(other: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1418464-issubsetofset
    isSubsetOfSet(set: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409953-sortedarrayusingdescriptors
    sortedArrayUsingDescriptors(sortDescriptors: cocoascript.NSSortDescriptor):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413383-sortedarrayusingcomparator
    sortedArrayUsingComparator(cmptr: cocoascript.NSComparator):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1414806-sortedarraywithoptions
    sortedArrayWithOptions_usingComparator(opts: cocoascript.NSSortOptions, cmptr: cocoascript.NSComparator):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1415807-filteredorderedsetusingpredicate
    filteredOrderedSetUsingPredicate(p: cocoascript.NSPredicate):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1415872-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1417325-descriptionwithlocale
    descriptionWithLocale(locale: cocoascript.NSOrderedSet):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1416761-descriptionwithlocale
    descriptionWithLocale_indent(locale: cocoascript.NSOrderedSet, level: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411531-array
    array(): any;
    setArray(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413944-set
    set(): any;
    setSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/3152195-differencefromorderedset
    differenceFromOrderedSet(other: any):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/3152196-differencefromorderedset
    differenceFromOrderedSet_withOptions(other: any, options: cocoascript.NSOrderedCollectionDifferenceCalculationOptions):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/3152197-differencefromorderedset
    differenceFromOrderedSet_withOptions_usingEquivalenceTest(other: any, options: cocoascript.NSOrderedCollectionDifferenceCalculationOptions, block: any):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1417543-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/3152198-orderedsetbyapplyingdifference
    orderedSetByApplyingDifference(difference: any):cocoascript.NSOrderedSet;
    //
    alloc():cocoascript.NSOrderedSet;
    //
    init():cocoascript.NSOrderedSet;
  }
}

declare const NSOrderedSet: cocoascript.NSOrderedSet;
declare namespace cocoascript {
  /**
   * An immutable representation of a compiled regular expression that you apply to Unicode strings.
   * doc://com.apple.documentation/documentation/foundation/nsregularexpression
   */
  interface NSRegularExpression extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1410900-initwithpattern
    initWithPattern_options_error(pattern: cocoascript.NSString, options: cocoascript.NSRegularExpressionOptions, error: cocoascript.NSError):cocoascript.NSRegularExpression;
    // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1414932-pattern
    pattern(): cocoascript.NSString;
    setPattern(): void;
    // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1408265-options
    options(): cocoascript.NSRegularExpressionOptions;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1415052-numberofcapturegroups
    numberOfCaptureGroups(): cocoascript.NSUInteger;
    setNumberOfCaptureGroups(): void;
    // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1414308-numberofmatchesinstring
    numberOfMatchesInString_options_range(string: cocoascript.NSString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1409687-enumeratematchesinstring
    enumerateMatchesInString_options_range_usingBlock(string: cocoascript.NSString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1412446-matchesinstring
    matchesInString_options_range(string: cocoascript.NSString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange):cocoascript.NSTextCheckingResult;
    // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1409838-firstmatchinstring
    firstMatchInString_options_range(string: cocoascript.NSString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange):cocoascript.NSTextCheckingResult;
    // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1411510-rangeoffirstmatchinstring
    rangeOfFirstMatchInString_options_range(string: cocoascript.NSString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1411139-replacematchesinstring
    replaceMatchesInString_options_range_withTemplate(string: cocoascript.NSMutableString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange, templ: cocoascript.NSString):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1413740-stringbyreplacingmatchesinstring
    stringByReplacingMatchesInString_options_range_withTemplate(string: cocoascript.NSString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange, templ: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1414859-replacementstringforresult
    replacementStringForResult_inString_offset_template(result: cocoascript.NSTextCheckingResult, string: cocoascript.NSString, offset: cocoascript.NSInteger, templ: cocoascript.NSString):cocoascript.NSString;
    //
    alloc():cocoascript.NSRegularExpression;
    //
    init():cocoascript.NSRegularExpression;
  }
}

declare const NSRegularExpression: cocoascript.NSRegularExpression;
declare namespace cocoascript {
  /**
   * An object representing a mutable set of Unicode character values for use in search operations.
   * doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset
   */
  interface NSMutableCharacterSet extends NSCharacterSet {
    // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1412225-addcharactersinrange
    addCharactersInRange(aRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1416987-removecharactersinrange
    removeCharactersInRange(aRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1413999-addcharactersinstring
    addCharactersInString(aString: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1414812-removecharactersinstring
    removeCharactersInString(aString: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1412512-formintersectionwithcharacterset
    formIntersectionWithCharacterSet(otherSet: cocoascript.NSCharacterSet):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1408380-formunionwithcharacterset
    formUnionWithCharacterSet(otherSet: cocoascript.NSCharacterSet):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1410977-invert
    invert():void;
    //
    alloc():cocoascript.NSMutableCharacterSet;
    //
    init():cocoascript.NSMutableCharacterSet;
  }
}

declare const NSMutableCharacterSet: cocoascript.NSMutableCharacterSet;
declare namespace cocoascript {
  /**
   * An object representing a fixed set of Unicode character values for use in search operations.
   * doc://com.apple.documentation/documentation/foundation/nscharacterset
   */
  interface NSCharacterSet extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1407466-alphanumericcharacterset
    alphanumericCharacterSet(): cocoascript.NSCharacterSet;
    setAlphanumericCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1414409-capitalizedlettercharacterset
    capitalizedLetterCharacterSet(): cocoascript.NSCharacterSet;
    setCapitalizedLetterCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416371-controlcharacterset
    controlCharacterSet(): cocoascript.NSCharacterSet;
    setControlCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1408239-decimaldigitcharacterset
    decimalDigitCharacterSet(): cocoascript.NSCharacterSet;
    setDecimalDigitCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416868-decomposablecharacterset
    decomposableCharacterSet(): cocoascript.NSCharacterSet;
    setDecomposableCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416321-illegalcharacterset
    illegalCharacterSet(): cocoascript.NSCharacterSet;
    setIllegalCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1408569-lettercharacterset
    letterCharacterSet(): cocoascript.NSCharacterSet;
    setLetterCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1417123-lowercaselettercharacterset
    lowercaseLetterCharacterSet(): cocoascript.NSCharacterSet;
    setLowercaseLetterCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416730-newlinecharacterset
    newlineCharacterSet(): cocoascript.NSCharacterSet;
    setNewlineCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1407836-nonbasecharacterset
    nonBaseCharacterSet(): cocoascript.NSCharacterSet;
    setNonBaseCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1411415-punctuationcharacterset
    punctuationCharacterSet(): cocoascript.NSCharacterSet;
    setPunctuationCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1410965-symbolcharacterset
    symbolCharacterSet(): cocoascript.NSCharacterSet;
    setSymbolCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1417569-uppercaselettercharacterset
    uppercaseLetterCharacterSet(): cocoascript.NSCharacterSet;
    setUppercaseLetterCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1413732-whitespaceandnewlinecharacterset
    whitespaceAndNewlineCharacterSet(): cocoascript.NSCharacterSet;
    setWhitespaceAndNewlineCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416393-whitespacecharacterset
    whitespaceCharacterSet(): cocoascript.NSCharacterSet;
    setWhitespaceCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1412537-urlfragmentallowedcharacterset
    URLFragmentAllowedCharacterSet(): cocoascript.NSCharacterSet;
    setURLFragmentAllowedCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416426-urlhostallowedcharacterset
    URLHostAllowedCharacterSet(): cocoascript.NSCharacterSet;
    setURLHostAllowedCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1417313-urlpasswordallowedcharacterset
    URLPasswordAllowedCharacterSet(): cocoascript.NSCharacterSet;
    setURLPasswordAllowedCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416804-urlpathallowedcharacterset
    URLPathAllowedCharacterSet(): cocoascript.NSCharacterSet;
    setURLPathAllowedCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416698-urlqueryallowedcharacterset
    URLQueryAllowedCharacterSet(): cocoascript.NSCharacterSet;
    setURLQueryAllowedCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1411851-urluserallowedcharacterset
    URLUserAllowedCharacterSet(): cocoascript.NSCharacterSet;
    setURLUserAllowedCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1408497-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSCharacterSet;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1417719-bitmaprepresentation
    bitmapRepresentation(): cocoascript.NSData;
    setBitmapRepresentation(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1414025-invertedset
    invertedSet(): cocoascript.NSCharacterSet;
    setInvertedSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1407659-characterismember
    characterIsMember(aCharacter: cocoascript.unichar):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1412406-hasmemberinplane
    hasMemberInPlane(thePlane: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1415606-issupersetofset
    isSupersetOfSet(theOtherSet: cocoascript.NSCharacterSet):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1409757-longcharacterismember
    longCharacterIsMember(theLongChar: cocoascript.UTF32Char):cocoascript.BOOL;
    //
    alloc():cocoascript.NSCharacterSet;
    //
    init():cocoascript.NSCharacterSet;
  }
}

declare const NSCharacterSet: cocoascript.NSCharacterSet;
declare namespace cocoascript {
  /**
   * A server or an area on a server, commonly referred to as a realm, that requires authentication.
   * doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace
   */
  interface NSURLProtectionSpace extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1414165-initwithhost
    initWithHost_port_protocol_realm_authenticationMethod(host: cocoascript.NSString, port: cocoascript.NSInteger, protocol: cocoascript.NSString, realm: cocoascript.NSString, authenticationMethod: cocoascript.NSString):cocoascript.NSURLProtectionSpace;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1417998-initwithproxyhost
    initWithProxyHost_port_type_realm_authenticationMethod(host: cocoascript.NSString, port: cocoascript.NSInteger, type: cocoascript.NSString, realm: cocoascript.NSString, authenticationMethod: cocoascript.NSString):cocoascript.NSURLProtectionSpace;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1415028-authenticationmethod
    authenticationMethod(): cocoascript.NSString;
    setAuthenticationMethod(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1417061-distinguishednames
    distinguishedNames(): cocoascript.NSData;
    setDistinguishedNames(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1418205-host
    host(): cocoascript.NSString;
    setHost(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1561656-isproxy
    isProxy(): cocoascript.BOOL;
    setIsProxy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1408716-port
    port(): cocoascript.NSInteger;
    setPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1411191-protocol
    protocol(): cocoascript.NSString;
    setProtocol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1411924-proxytype
    proxyType(): cocoascript.NSString;
    setProxyType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1416007-realm
    realm(): cocoascript.NSString;
    setRealm(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1415176-receivescredentialsecurely
    receivesCredentialSecurely(): cocoascript.BOOL;
    setReceivesCredentialSecurely(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1409926-servertrust
    serverTrust(): cocoascript.SecTrustRef;
    setServerTrust(): void;
    //
    alloc():cocoascript.NSURLProtectionSpace;
    //
    init():cocoascript.NSURLProtectionSpace;
  }
}

declare const NSURLProtectionSpace: cocoascript.NSURLProtectionSpace;
declare namespace cocoascript {
  /**
   * A collection similar to an array, but with a broader range of available memory semantics.
   * doc://com.apple.documentation/documentation/foundation/nspointerarray
   */
  interface NSPointerArray extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nspointerarray/1408229-initwithoptions
    initWithOptions(options: cocoascript.NSPointerFunctionsOptions):cocoascript.NSPointerArray;
    // doc://com.apple.documentation/documentation/foundation/nspointerarray/1416727-initwithpointerfunctions
    initWithPointerFunctions(functions: cocoascript.NSPointerFunctions):cocoascript.NSPointerArray;
    // doc://com.apple.documentation/documentation/foundation/nspointerarray/1418453-count
    count(): cocoascript.NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerarray/1408081-allobjects
    allObjects(): cocoascript.NSArray;
    setAllObjects(): void;
    // doc://com.apple.documentation/documentation/foundation/nspointerarray/1417655-pointeratindex
    pointerAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nspointerarray/1411636-addpointer
    addPointer(pointer: void):void;
    // doc://com.apple.documentation/documentation/foundation/nspointerarray/1407403-removepointeratindex
    removePointerAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nspointerarray/1408589-insertpointer
    insertPointer_atIndex(item: void, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nspointerarray/1412654-replacepointeratindex
    replacePointerAtIndex_withPointer(index: cocoascript.NSUInteger, item: void):void;
    // doc://com.apple.documentation/documentation/foundation/nspointerarray/1413659-compact
    compact():void;
    // doc://com.apple.documentation/documentation/foundation/nspointerarray/1413669-pointerfunctions
    pointerFunctions(): cocoascript.NSPointerFunctions;
    setPointerFunctions(): void;
    //
    alloc():cocoascript.NSPointerArray;
    //
    init():cocoascript.NSPointerArray;
  }
}

declare const NSPointerArray: cocoascript.NSPointerArray;
declare namespace cocoascript {
  /**
   * A stub class that encapsulates security information about a file.
   * doc://com.apple.documentation/documentation/foundation/nsfilesecurity
   */
  interface NSFileSecurity extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfilesecurity/1418382-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSFileSecurity;
    //
    alloc():cocoascript.NSFileSecurity;
    //
    init():cocoascript.NSFileSecurity;
  }
}

declare const NSFileSecurity: cocoascript.NSFileSecurity;
declare namespace cocoascript {
  /**
   * An expression for use in a comparison predicate.
   * doc://com.apple.documentation/documentation/foundation/nsexpression
   */
  interface NSExpression extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1418351-initwithexpressiontype
    initWithExpressionType(type: cocoascript.NSExpressionType):cocoascript.NSExpression;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1411559-arguments
    arguments(): cocoascript.NSExpression;
    setArguments(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1415684-collection
    collection(): cocoascript.id;
    setCollection(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1418093-constantvalue
    constantValue(): cocoascript.id;
    setConstantValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1416975-expressiontype
    expressionType(): cocoascript.NSExpressionType;
    setExpressionType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1416200-function
    function(): cocoascript.NSString;
    setFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1416071-keypath
    keyPath(): cocoascript.NSString;
    setKeyPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1413698-operand
    operand(): cocoascript.NSExpression;
    setOperand(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1407531-predicate
    predicate(): cocoascript.NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1415792-leftexpression
    leftExpression(): cocoascript.NSExpression;
    setLeftExpression(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1416583-rightexpression
    rightExpression(): cocoascript.NSExpression;
    setRightExpression(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1413759-variable
    variable(): cocoascript.NSString;
    setVariable(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1410363-expressionvaluewithobject
    expressionValueWithObject_context(object: cocoascript.NSExpression, context: cocoascript.NSMutableDictionary):cocoascript.NSExpression;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1409244-allowevaluation
    allowEvaluation():void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1409139-expressionblock
    expressionBlock(): cocoascript.NSMutableDictionary;
    setExpressionBlock(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1415409-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSExpression;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1416488-falseexpression
    falseExpression(): cocoascript.NSExpression;
    setFalseExpression(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1411874-trueexpression
    trueExpression(): cocoascript.NSExpression;
    setTrueExpression(): void;
    //
    alloc():cocoascript.NSExpression;
    //
    init():cocoascript.NSExpression;
  }
}

declare const NSExpression: cocoascript.NSExpression;
declare namespace cocoascript {
  /**
   * A collection similar to a set, but with broader range of available memory semantics.
   * doc://com.apple.documentation/documentation/foundation/nshashtable
   */
  interface NSHashTable extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1411066-initwithoptions
    initWithOptions_capacity(options: cocoascript.NSPointerFunctionsOptions, initialCapacity: cocoascript.NSUInteger):cocoascript.NSHashTable;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1416331-initwithpointerfunctions
    initWithPointerFunctions_capacity(functions: cocoascript.NSPointerFunctions, initialCapacity: cocoascript.NSUInteger):cocoascript.NSHashTable;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1410639-anyobject
    anyObject(): any;
    setAnyObject(): void;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1410223-allobjects
    allObjects(): any;
    setAllObjects(): void;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1414641-setrepresentation
    setRepresentation(): any;
    setSetRepresentation(): void;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1413142-count
    count(): cocoascript.NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1415113-containsobject
    containsObject(anObject: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1417991-member
    member(object: any):void;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1416308-objectenumerator
    objectEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1411690-addobject
    addObject(object: any):void;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1415369-removeobject
    removeObject(object: any):void;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1415814-removeallobjects
    removeAllObjects():void;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1408509-intersecthashtable
    intersectHashTable(other: any):void;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1416474-intersectshashtable
    intersectsHashTable(other: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1417518-issubsetofhashtable
    isSubsetOfHashTable(other: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1410816-isequaltohashtable
    isEqualToHashTable(other: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1414557-minushashtable
    minusHashTable(other: any):void;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1413481-unionhashtable
    unionHashTable(other: any):void;
    // doc://com.apple.documentation/documentation/foundation/nshashtable/1417398-pointerfunctions
    pointerFunctions(): cocoascript.NSPointerFunctions;
    setPointerFunctions(): void;
    //
    alloc():cocoascript.NSHashTable;
    //
    init():cocoascript.NSHashTable;
  }
}

declare const NSHashTable: cocoascript.NSHashTable;
declare namespace cocoascript {
  /**
   * An object representing the span of time between a specific start date and end date.
   * doc://com.apple.documentation/documentation/foundation/nsdateinterval
   */
  interface NSDateInterval extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641637-init
    init():cocoascript.NSDateInterval;
    // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641653-initwithstartdate
    initWithStartDate_duration(startDate: cocoascript.NSDate, duration: cocoascript.NSTimeInterval):cocoascript.NSDateInterval;
    // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641639-initwithstartdate
    initWithStartDate_endDate(startDate: cocoascript.NSDate, endDate: cocoascript.NSDate):cocoascript.NSDateInterval;
    // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641642-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSDateInterval;
    // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641656-startdate
    startDate(): cocoascript.NSDate;
    setStartDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641651-enddate
    endDate(): cocoascript.NSDate;
    setEndDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641643-duration
    duration(): cocoascript.NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641636-compare
    compare(dateInterval: cocoascript.NSDateInterval):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641650-isequaltodateinterval
    isEqualToDateInterval(dateInterval: cocoascript.NSDateInterval):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641654-intersectsdateinterval
    intersectsDateInterval(dateInterval: cocoascript.NSDateInterval):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641645-intersectionwithdateinterval
    intersectionWithDateInterval(dateInterval: cocoascript.NSDateInterval):cocoascript.NSDateInterval;
    // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641647-containsdate
    containsDate(date: cocoascript.NSDate):cocoascript.BOOL;
    //
    alloc():cocoascript.NSDateInterval;
    //
    init():cocoascript.NSDateInterval;
  }
}

declare const NSDateInterval: cocoascript.NSDateInterval;
declare namespace cocoascript {
  /**
   * An abstract class representing a unit of measure.
   * doc://com.apple.documentation/documentation/foundation/nsunit
   */
  interface NSUnit extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsunit/1642700-symbol
    symbol(): cocoascript.NSString;
    setSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunit/1690760-initwithsymbol
    initWithSymbol(symbol: cocoascript.NSString):cocoascript.NSUnit;
    //
    alloc():cocoascript.NSUnit;
    //
    init():cocoascript.NSUnit;
  }
}

declare const NSUnit: cocoascript.NSUnit;
declare namespace cocoascript {
  /**
   * A numeric quantity labeled with a unit of measure, with support for unit conversion and unit-aware calculations.
   * doc://com.apple.documentation/documentation/foundation/nsmeasurement
   */
  interface NSMeasurement extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1643012-initwithdoublevalue
    initWithDoubleValue_unit(doubleValue: number, unit: cocoascript.UnitType):cocoascript.NSMeasurement;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1642831-unit
    unit(): cocoascript.UnitType;
    setUnit(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1643124-doublevalue
    doubleValue(): number;
    setDoubleValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1690850-canbeconvertedtounit
    canBeConvertedToUnit(unit: cocoascript.NSUnit):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1642900-measurementbyconvertingtounit
    measurementByConvertingToUnit(unit: cocoascript.NSUnit):cocoascript.NSMeasurement;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1643170-measurementbyaddingmeasurement
    measurementByAddingMeasurement(measurement: cocoascript.UnitType):cocoascript.NSMeasurement;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1642872-measurementbysubtractingmeasurem
    measurementBySubtractingMeasurement(measurement: cocoascript.UnitType):cocoascript.NSMeasurement;
    //
    alloc():cocoascript.NSMeasurement;
    //
    init():cocoascript.NSMeasurement;
  }
}

declare const NSMeasurement: cocoascript.NSMeasurement;
declare namespace cocoascript {
  /**
   * The nodes in the abstract, logical tree structure that represents an XML document.
   * doc://com.apple.documentation/documentation/foundation/nsxmlnode
   */
  interface NSXMLNode extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409766-initwithkind
    initWithKind(kind: cocoascript.NSXMLNodeKind):cocoascript.NSXMLNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409747-initwithkind
    initWithKind_options(kind: cocoascript.NSXMLNodeKind, options: cocoascript.NSXMLNodeOptions):cocoascript.NSXMLNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409743-index
    index(): cocoascript.NSUInteger;
    setIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1408882-kind
    kind(): cocoascript.NSXMLNodeKind;
    setKind(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1407508-level
    level(): cocoascript.NSUInteger;
    setLevel(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409770-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409756-objectvalue
    objectValue(): cocoascript.id;
    setObjectValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409818-stringvalue
    stringValue(): cocoascript.NSString;
    setStringValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409758-setstringvalue
    setStringValue_resolvingEntities(string: cocoascript.NSString, resolve: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409774-uri
    URI(): cocoascript.NSString;
    setURI(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409830-rootdocument
    rootDocument(): cocoascript.NSXMLDocument;
    setRootDocument(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409740-parent
    parent(): cocoascript.NSXMLNode;
    setParent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409811-childatindex
    childAtIndex(index: cocoascript.NSUInteger):cocoascript.NSXMLNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409808-childcount
    childCount(): cocoascript.NSUInteger;
    setChildCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409828-children
    children(): cocoascript.NSXMLNode;
    setChildren(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409800-nextnode
    nextNode(): cocoascript.NSXMLNode;
    setNextNode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409750-nextsibling
    nextSibling(): cocoascript.NSXMLNode;
    setNextSibling(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409736-previousnode
    previousNode(): cocoascript.NSXMLNode;
    setPreviousNode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409764-previoussibling
    previousSibling(): cocoascript.NSXMLNode;
    setPreviousSibling(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409806-detach
    detach():void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409772-xmlstring
    XMLString(): cocoascript.NSString;
    setXMLString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409778-xmlstringwithoptions
    XMLStringWithOptions(options: cocoascript.NSXMLNodeOptions):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409817-canonicalxmlstringpreservingcomm
    canonicalXMLStringPreservingComments(comments: cocoascript.BOOL):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409788-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409813-nodesforxpath
    nodesForXPath_error(xpath: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSXMLNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409768-objectsforxquery
    objectsForXQuery_error(xquery: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409792-objectsforxquery
    objectsForXQuery_constants_error(xquery: cocoascript.NSString, constants: cocoascript.NSXMLNode, error: cocoascript.NSError):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409826-xpath
    XPath(): cocoascript.NSString;
    setXPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409734-localname
    localName(): cocoascript.NSString;
    setLocalName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409797-prefix
    prefix(): cocoascript.NSString;
    setPrefix(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409780-init
    init():cocoascript.NSXMLNode;
    //
    alloc():cocoascript.NSXMLNode;
    //
    init():cocoascript.NSXMLNode;
  }
}

declare const NSXMLNode: cocoascript.NSXMLNode;
declare namespace cocoascript {
  /**
   * An action that the user can take in response to receiving a notification.
   * doc://com.apple.documentation/documentation/foundation/nsusernotificationaction
   */
  interface NSUserNotificationAction extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationaction/1414798-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationaction/1410336-title
    title(): cocoascript.NSString;
    setTitle(): void;
    //
    alloc():cocoascript.NSUserNotificationAction;
    //
    init():cocoascript.NSUserNotificationAction;
  }
}

declare const NSUserNotificationAction: cocoascript.NSUserNotificationAction;
declare namespace cocoascript {
  /**
   * A notification that can be scheduled for display in the notification center.
   * doc://com.apple.documentation/documentation/foundation/nsusernotification
   */
  interface NSUserNotification extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1415172-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1413777-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1416180-informativetext
    informativeText(): cocoascript.NSString;
    setInformativeText(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1414856-contentimage
    contentImage(): cocoascript.NSImage;
    setContentImage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1416410-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1416115-response
    response(): cocoascript.NSAttributedString;
    setResponse(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1410983-responseplaceholder
    responsePlaceholder(): cocoascript.NSString;
    setResponsePlaceholder(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1411564-hasactionbutton
    hasActionButton(): cocoascript.BOOL;
    setHasActionButton(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1411669-actionbuttontitle
    actionButtonTitle(): cocoascript.NSString;
    setActionButtonTitle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1412410-otherbuttontitle
    otherButtonTitle(): cocoascript.NSString;
    setOtherButtonTitle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1413216-hasreplybutton
    hasReplyButton(): cocoascript.BOOL;
    setHasReplyButton(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1407781-deliverydate
    deliveryDate(): cocoascript.NSDate;
    setDeliveryDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1416009-actualdeliverydate
    actualDeliveryDate(): cocoascript.NSDate;
    setActualDeliveryDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1411500-deliveryrepeatinterval
    deliveryRepeatInterval(): cocoascript.NSDateComponents;
    setDeliveryRepeatInterval(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1416406-deliverytimezone
    deliveryTimeZone(): cocoascript.NSTimeZone;
    setDeliveryTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1409281-presented
    presented(): cocoascript.BOOL;
    setPresented(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1411995-remote
    remote(): cocoascript.BOOL;
    setRemote(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1412612-soundname
    soundName(): cocoascript.NSString;
    setSoundName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1416143-activationtype
    activationType(): cocoascript.NSUserNotificationActivationType;
    setActivationType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1413264-additionalactivationaction
    additionalActivationAction(): cocoascript.NSUserNotificationAction;
    setAdditionalActivationAction(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1407829-additionalactions
    additionalActions(): cocoascript.NSUserNotificationAction;
    setAdditionalActions(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1415675-userinfo
    userInfo(): cocoascript.id;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotification/1410841-init
    init():cocoascript.NSUserNotification;
    //
    alloc():cocoascript.NSUserNotification;
    //
    init():cocoascript.NSUserNotification;
  }
}

declare const NSUserNotification: cocoascript.NSUserNotification;
declare namespace cocoascript {
  /**
   * An object that provides the ability to load, compile, and execute scripts.
   * doc://com.apple.documentation/documentation/foundation/nsapplescript
   */
  interface NSAppleScript extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsapplescript/1412508-initwithcontentsofurl
    initWithContentsOfURL_error(url: cocoascript.NSURL, errorInfo: cocoascript.NSAppleScript):cocoascript.NSAppleScript;
    // doc://com.apple.documentation/documentation/foundation/nsapplescript/1414313-initwithsource
    initWithSource(source: cocoascript.NSString):cocoascript.NSAppleScript;
    // doc://com.apple.documentation/documentation/foundation/nsapplescript/1410407-compiled
    compiled(): cocoascript.BOOL;
    setCompiled(): void;
    // doc://com.apple.documentation/documentation/foundation/nsapplescript/1408453-source
    source(): cocoascript.NSString;
    setSource(): void;
    // doc://com.apple.documentation/documentation/foundation/nsapplescript/1407582-compileandreturnerror
    compileAndReturnError(errorInfo: cocoascript.NSAppleScript):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsapplescript/1410034-executeandreturnerror
    executeAndReturnError(errorInfo: cocoascript.NSAppleScript):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsapplescript/1410807-executeappleevent
    executeAppleEvent_error(event: cocoascript.NSAppleEventDescriptor, errorInfo: cocoascript.NSAppleScript):cocoascript.NSAppleEventDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nsapplescript/1387495-richtextsource
    richTextSource(): cocoascript.NSAttributedString;
    setRichTextSource(): void;
    //
    alloc():cocoascript.NSAppleScript;
    //
    init():cocoascript.NSAppleScript;
  }
}

declare const NSAppleScript: cocoascript.NSAppleScript;
declare namespace cocoascript {
  /**
   * A graphics coordinate transformation.
   * doc://com.apple.documentation/documentation/foundation/nsaffinetransform
   */
  interface NSAffineTransform extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1411498-init
    init():cocoascript.NSAffineTransform;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1413399-initwithtransform
    initWithTransform(transform: cocoascript.NSAffineTransform):cocoascript.NSAffineTransform;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1407401-rotatebydegrees
    rotateByDegrees(angle: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1411353-rotatebyradians
    rotateByRadians(angle: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1413649-scaleby
    scaleBy(scale: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1411806-scalexby
    scaleXBy_yBy(scaleX: cocoascript.CGFloat, scaleY: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1417196-translatexby
    translateXBy_yBy(deltaX: cocoascript.CGFloat, deltaY: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1408404-appendtransform
    appendTransform(transform: cocoascript.NSAffineTransform):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1409793-prependtransform
    prependTransform(transform: cocoascript.NSAffineTransform):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1412434-invert
    invert():void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1411619-transformpoint
    transformPoint(aPoint: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1416692-transformsize
    transformSize(aSize: cocoascript.NSSize):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1462131-transformbezierpath
    transformBezierPath(path: cocoascript.NSBezierPath):cocoascript.NSBezierPath;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1414485-transformstruct
    transformStruct(): cocoascript.NSAffineTransformStruct;
    setTransformStruct(): void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1462133-set
    set():void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1462135-concat
    concat():void;
    //
    alloc():cocoascript.NSAffineTransform;
    //
    init():cocoascript.NSAffineTransform;
  }
}

declare const NSAffineTransform: cocoascript.NSAffineTransform;
declare namespace cocoascript {
  /**
   * An object that conveys ongoing progress for a given task to the user.
   * doc://com.apple.documentation/documentation/foundation/nsprogress
   */
  interface NSProgress extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1409133-initwithparent
    initWithParent_userInfo(parentProgressOrNil: cocoascript.NSProgress, userInfoOrNil: cocoascript.NSProgress):cocoascript.NSProgress;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1410103-becomecurrentwithpendingunitcoun
    becomeCurrentWithPendingUnitCount(unitCount: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1417260-addchild
    addChild_withPendingUnitCount(child: cocoascript.NSProgress, inUnitCount: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1407180-resigncurrent
    resignCurrent():void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1410940-totalunitcount
    totalUnitCount(): number;
    setTotalUnitCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1407934-completedunitcount
    completedUnitCount(): number;
    setCompletedUnitCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1417251-localizeddescription
    localizedDescription(): cocoascript.NSString;
    setLocalizedDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1412455-localizedadditionaldescription
    localizedAdditionalDescription(): cocoascript.NSString;
    setLocalizedAdditionalDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1408579-fractioncompleted
    fractionCompleted(): number;
    setFractionCompleted(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1409348-cancellable
    cancellable(): cocoascript.BOOL;
    setCancellable(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1414454-cancelled
    cancelled(): cocoascript.BOOL;
    setCancelled(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1413832-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1408913-cancellationhandler
    cancellationHandler(): void;
    setCancellationHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1417421-pausable
    pausable(): cocoascript.BOOL;
    setPausable(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1415495-paused
    paused(): cocoascript.BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1412377-pause
    pause():void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1412873-pausinghandler
    pausingHandler(): void;
    setPausingHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1413616-resume
    resume():void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1410158-resuminghandler
    resumingHandler(): void;
    setResumingHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1412871-indeterminate
    indeterminate(): cocoascript.BOOL;
    setIndeterminate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1416139-kind
    kind(): cocoascript.NSProgressKind;
    setKind(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1407537-setuserinfoobject
    setUserInfoObject_forKey(objectOrNil: cocoascript.NSProgress, key: cocoascript.NSProgressUserInfoKey):void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1413314-userinfo
    userInfo(): cocoascript.id;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2865625-fileoperationkind
    fileOperationKind(): cocoascript.NSProgressFileOperationKind;
    setFileOperationKind(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2865663-fileurl
    fileURL(): cocoascript.NSURL;
    setFileURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2865603-finished
    finished(): cocoascript.BOOL;
    setFinished(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1407931-old
    old(): cocoascript.BOOL;
    setOld(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2868041-estimatedtimeremaining
    estimatedTimeRemaining(): cocoascript.NSNumber;
    setEstimatedTimeRemaining(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2868050-filecompletedcount
    fileCompletedCount(): cocoascript.NSNumber;
    setFileCompletedCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2868045-filetotalcount
    fileTotalCount(): cocoascript.NSNumber;
    setFileTotalCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2868052-throughput
    throughput(): cocoascript.NSNumber;
    setThroughput(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1416782-publish
    publish():void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/1413268-unpublish
    unpublish():void;
    // doc://com.apple.documentation/documentation/foundation/nsprogress/2865587-performascurrentwithpendingunitc
    performAsCurrentWithPendingUnitCount_usingBlock(unitCount: number, work: void):void;
    //
    alloc():cocoascript.NSProgress;
    //
    init():cocoascript.NSProgress;
  }
}

declare const NSProgress: cocoascript.NSProgress;
declare namespace cocoascript {
  /**
   * A queue that regulates the execution of operations.
   * doc://com.apple.documentation/documentation/foundation/nsoperationqueue
   */
  interface NSOperationQueue extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1409193-mainqueue
    mainQueue(): cocoascript.NSOperationQueue;
    setMainQueue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1413097-currentqueue
    currentQueue(): cocoascript.NSOperationQueue;
    setCurrentQueue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1410704-addoperation
    addOperation(op: cocoascript.NSOperation):void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1408358-addoperations
    addOperations_waitUntilFinished(ops: cocoascript.NSOperation, wait: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1412949-addoperationwithblock
    addOperationWithBlock(block: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1415168-operations
    operations(): cocoascript.NSOperation;
    setOperations(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1415115-operationcount
    operationCount(): cocoascript.NSUInteger;
    setOperationCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1417849-cancelalloperations
    cancelAllOperations():void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1407971-waituntilalloperationsarefinishe
    waitUntilAllOperationsAreFinished():void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1417919-qualityofservice
    qualityOfService(): cocoascript.NSQualityOfService;
    setQualityOfService(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1414982-maxconcurrentoperationcount
    maxConcurrentOperationCount(): cocoascript.NSInteger;
    setMaxConcurrentOperationCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1415909-suspended
    suspended(): cocoascript.BOOL;
    setSuspended(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1418063-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1415344-underlyingqueue
    underlyingQueue(): cocoascript.dispatch_queue_t;
    setUnderlyingQueue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/3172535-progress
    progress(): cocoascript.NSProgress;
    setProgress(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/3172534-addbarrierblock
    addBarrierBlock(barrier: void):void;
    //
    alloc():cocoascript.NSOperationQueue;
    //
    init():cocoascript.NSOperationQueue;
  }
}

declare const NSOperationQueue: cocoascript.NSOperationQueue;
declare namespace cocoascript {
  /**
   * An operation that manages the concurrent execution of one or more blocks.
   * doc://com.apple.documentation/documentation/foundation/nsblockoperation
   */
  interface NSBlockOperation extends NSOperation {
    // doc://com.apple.documentation/documentation/foundation/nsblockoperation/1414623-addexecutionblock
    addExecutionBlock(block: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsblockoperation/1416555-executionblocks
    executionBlocks(): void;
    setExecutionBlocks(): void;
    //
    alloc():cocoascript.NSBlockOperation;
    //
    init():cocoascript.NSBlockOperation;
  }
}

declare const NSBlockOperation: cocoascript.NSBlockOperation;
declare namespace cocoascript {
  /**
   * An operation that manages the execution of a single encapsulated task specified as an invocation.
   * doc://com.apple.documentation/documentation/foundation/nsinvocationoperation
   */
  interface NSInvocationOperation extends NSOperation {
    // doc://com.apple.documentation/documentation/foundation/nsinvocationoperation/1543653-initwithtarget
    initWithTarget_selector_object(target: cocoascript.NSInvocationOperation, sel: cocoascript.SEL, arg: cocoascript.NSInvocationOperation):cocoascript.NSInvocationOperation;
    // doc://com.apple.documentation/documentation/foundation/nsinvocationoperation/1543647-initwithinvocation
    initWithInvocation(inv: cocoascript.NSInvocation):cocoascript.NSInvocationOperation;
    // doc://com.apple.documentation/documentation/foundation/nsinvocationoperation/1543655-invocation
    invocation(): cocoascript.NSInvocation;
    setInvocation(): void;
    // doc://com.apple.documentation/documentation/foundation/nsinvocationoperation/1543615-result
    result(): cocoascript.id;
    setResult(): void;
    //
    alloc():cocoascript.NSInvocationOperation;
    //
    init():cocoascript.NSInvocationOperation;
  }
}

declare const NSInvocationOperation: cocoascript.NSInvocationOperation;
declare namespace cocoascript {
  /**
   * A collection of information about the current process.
   * doc://com.apple.documentation/documentation/foundation/nsprocessinfo
   */
  interface NSProcessInfo extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1408734-processinfo
    processInfo(): cocoascript.NSProcessInfo;
    setProcessInfo(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1415596-arguments
    arguments(): cocoascript.NSString;
    setArguments(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1417911-environment
    environment(): cocoascript.NSString;
    setEnvironment(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1416432-globallyuniquestring
    globallyUniqueString(): cocoascript.NSString;
    setGloballyUniqueString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/3362531-maccatalystapp
    macCatalystApp(): cocoascript.BOOL;
    setMacCatalystApp(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/3608556-iosapponmac
    iOSAppOnMac(): cocoascript.BOOL;
    setIOSAppOnMac(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1415929-processidentifier
    processIdentifier(): number;
    setProcessIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1416428-processname
    processName(): cocoascript.NSString;
    setProcessName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1643193-username
    userName(): cocoascript.NSString;
    setUserName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1643199-fullusername
    fullUserName(): cocoascript.NSString;
    setFullUserName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1412841-disablesuddentermination
    disableSuddenTermination():void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1409836-enablesuddentermination
    enableSuddenTermination():void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1417402-disableautomatictermination
    disableAutomaticTermination(reason: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1409422-enableautomatictermination
    enableAutomaticTermination(reason: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1407578-automaticterminationsupportenabl
    automaticTerminationSupportEnabled(): cocoascript.BOOL;
    setAutomaticTerminationSupportEnabled(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1417236-hostname
    hostName(): cocoascript.NSString;
    setHostName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1416341-operatingsystem
    operatingSystem():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1407388-operatingsystemname
    operatingSystemName():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1408730-operatingsystemversionstring
    operatingSystemVersionString(): cocoascript.NSString;
    setOperatingSystemVersionString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1410906-operatingsystemversion
    operatingSystemVersion(): cocoascript.NSOperatingSystemVersion;
    setOperatingSystemVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1414876-isoperatingsystematleastversion
    isOperatingSystemAtLeastVersion(version: cocoascript.NSOperatingSystemVersion):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1415622-processorcount
    processorCount(): cocoascript.NSUInteger;
    setProcessorCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1408184-activeprocessorcount
    activeProcessorCount(): cocoascript.NSUInteger;
    setActiveProcessorCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1408211-physicalmemory
    physicalMemory(): number;
    setPhysicalMemory(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1414553-systemuptime
    systemUptime(): cocoascript.NSTimeInterval;
    setSystemUptime(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1415995-beginactivitywithoptions
    beginActivityWithOptions_reason(options: cocoascript.NSActivityOptions, reason: cocoascript.NSString):cocoascript.NSObject;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1411321-endactivity
    endActivity(activity: cocoascript.NSObject):void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1418048-performactivitywithoptions
    performActivityWithOptions_reason_usingBlock(options: cocoascript.NSActivityOptions, reason: cocoascript.NSString, block: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1617030-performexpiringactivitywithreaso
    performExpiringActivityWithReason_usingBlock(reason: cocoascript.NSString, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1417480-thermalstate
    thermalState(): cocoascript.NSProcessInfoThermalState;
    setThermalState(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1617047-lowpowermodeenabled
    lowPowerModeEnabled(): cocoascript.BOOL;
    setLowPowerModeEnabled(): void;
    //
    alloc():cocoascript.NSProcessInfo;
    //
    init():cocoascript.NSProcessInfo;
  }
}

declare const NSProcessInfo: cocoascript.NSProcessInfo;
declare namespace cocoascript {
  /**
   * A task scheduler suitable for low priority operations that can run in the background.
   * doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler
   */
  interface NSBackgroundActivityScheduler extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1412285-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1409853-repeats
    repeats(): cocoascript.BOOL;
    setRepeats(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1408819-interval
    interval(): cocoascript.NSTimeInterval;
    setInterval(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1412688-qualityofservice
    qualityOfService(): cocoascript.NSQualityOfService;
    setQualityOfService(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1412167-shoulddefer
    shouldDefer(): cocoascript.BOOL;
    setShouldDefer(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1408138-tolerance
    tolerance(): cocoascript.NSTimeInterval;
    setTolerance(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1407482-initwithidentifier
    initWithIdentifier(identifier: cocoascript.NSString):cocoascript.NSBackgroundActivityScheduler;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1412813-schedulewithblock
    scheduleWithBlock(block: cocoascript.NSBackgroundActivityCompletionHandler):void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1408878-invalidate
    invalidate():void;
    //
    alloc():cocoascript.NSBackgroundActivityScheduler;
    //
    init():cocoascript.NSBackgroundActivityScheduler;
  }
}

declare const NSBackgroundActivityScheduler: cocoascript.NSBackgroundActivityScheduler;
declare namespace cocoascript {
  /**
   * An object that delivers notifications from apps to the user.
   * doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter
   */
  interface NSUserNotificationCenter extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1416403-defaultusernotificationcenter
    defaultUserNotificationCenter(): cocoascript.NSUserNotificationCenter;
    setDefaultUserNotificationCenter(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1407647-schedulenotification
    scheduleNotification(notification: cocoascript.NSUserNotification):void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1411832-schedulednotifications
    scheduledNotifications(): cocoascript.NSUserNotification;
    setScheduledNotifications(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1415613-removeschedulednotification
    removeScheduledNotification(notification: cocoascript.NSUserNotification):void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1414633-delivernotification
    deliverNotification(notification: cocoascript.NSUserNotification):void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1407791-deliverednotifications
    deliveredNotifications(): cocoascript.NSUserNotification;
    setDeliveredNotifications(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1416057-removedeliverednotification
    removeDeliveredNotification(notification: cocoascript.NSUserNotification):void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1416204-removealldeliverednotifications
    removeAllDeliveredNotifications():void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1410385-delegate
    delegate(): cocoascript.NSUserNotificationCenterDelegate;
    setDelegate(): void;
    //
    alloc():cocoascript.NSUserNotificationCenter;
    //
    init():cocoascript.NSUserNotificationCenter;
  }
}

declare const NSUserNotificationCenter: cocoascript.NSUserNotificationCenter;
declare namespace cocoascript {
  /**
   * A stream that provides read-only stream functionality.
   * doc://com.apple.documentation/documentation/foundation/nsinputstream
   */
  interface NSInputStream extends NSStream {
    // doc://com.apple.documentation/documentation/foundation/nsinputstream/1412470-initwithdata
    initWithData(data: cocoascript.NSData):cocoascript.NSInputStream;
    // doc://com.apple.documentation/documentation/foundation/nsinputstream/1408976-initwithfileatpath
    initWithFileAtPath(path: cocoascript.NSString):cocoascript.NSInputStream;
    // doc://com.apple.documentation/documentation/foundation/nsinputstream/1417891-initwithurl
    initWithURL(url: cocoascript.NSURL):cocoascript.NSInputStream;
    // doc://com.apple.documentation/documentation/foundation/nsinputstream/1411544-read
    read_maxLength(buffer: number, len: cocoascript.NSUInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nsinputstream/1416811-getbuffer
    getBuffer_length(buffer: number, len: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsinputstream/1409410-hasbytesavailable
    hasBytesAvailable(): cocoascript.BOOL;
    setHasBytesAvailable(): void;
    //
    alloc():cocoascript.NSInputStream;
    //
    init():cocoascript.NSInputStream;
  }
}

declare const NSInputStream: cocoascript.NSInputStream;
declare namespace cocoascript {
  /**
   * A stream that provides write-only stream functionality.
   * doc://com.apple.documentation/documentation/foundation/nsoutputstream
   */
  interface NSOutputStream extends NSStream {
    // doc://com.apple.documentation/documentation/foundation/nsoutputstream/1409909-inittomemory
    initToMemory():cocoascript.NSOutputStream;
    // doc://com.apple.documentation/documentation/foundation/nsoutputstream/1410805-inittobuffer
    initToBuffer_capacity(buffer: number, capacity: cocoascript.NSUInteger):cocoascript.NSOutputStream;
    // doc://com.apple.documentation/documentation/foundation/nsoutputstream/1416367-inittofileatpath
    initToFileAtPath_append(path: cocoascript.NSString, shouldAppend: cocoascript.BOOL):cocoascript.NSOutputStream;
    // doc://com.apple.documentation/documentation/foundation/nsoutputstream/1414446-initwithurl
    initWithURL_append(url: cocoascript.NSURL, shouldAppend: cocoascript.BOOL):cocoascript.NSOutputStream;
    // doc://com.apple.documentation/documentation/foundation/nsoutputstream/1411335-hasspaceavailable
    hasSpaceAvailable(): cocoascript.BOOL;
    setHasSpaceAvailable(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoutputstream/1410720-write
    write_maxLength(buffer: number, len: cocoascript.NSUInteger):cocoascript.NSInteger;
    //
    alloc():cocoascript.NSOutputStream;
    //
    init():cocoascript.NSOutputStream;
  }
}

declare const NSOutputStream: cocoascript.NSOutputStream;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstringencoding
  type NSStringEncoding = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/unichar
  type unichar = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstringcompareoptions
  type NSStringCompareOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstringencodingconversionoptions
  type NSStringEncodingConversionOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstringtransform
  type NSStringTransform = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstringenumerationoptions
  type NSStringEnumerationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstringencodingdetectionoptionskey
  type NSStringEncodingDetectionOptionsKey = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/foundation/nszerorect
declare const NSZeroRect: cocoascript.NSRect;
declare namespace cocoascript {
  /**
   * An object that coordinates the reading and writing of files and directories among file presenters.
   * doc://com.apple.documentation/documentation/foundation/nsfilecoordinator
   */
  interface NSFileCoordinator extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1416795-initwithfilepresenter
    initWithFilePresenter(filePresenterOrNil: cocoascript.NSFilePresenter):cocoascript.NSFileCoordinator;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1407685-filepresenters
    filePresenters(): cocoascript.NSFilePresenter;
    setFilePresenters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1411868-purposeidentifier
    purposeIdentifier(): cocoascript.NSString;
    setPurposeIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1411533-coordinateaccesswithintents
    coordinateAccessWithIntents_queue_byAccessor(intents: cocoascript.NSFileAccessIntent, queue: cocoascript.NSOperationQueue, accessor: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1407416-coordinatereadingitematurl
    coordinateReadingItemAtURL_options_error_byAccessor(url: cocoascript.NSURL, options: cocoascript.NSFileCoordinatorReadingOptions, outError: cocoascript.NSError, reader: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1413344-coordinatewritingitematurl
    coordinateWritingItemAtURL_options_error_byAccessor(url: cocoascript.NSURL, options: cocoascript.NSFileCoordinatorWritingOptions, outError: cocoascript.NSError, writer: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1413385-coordinatereadingitematurl
    coordinateReadingItemAtURL_options_writingItemAtURL_options_error_byAccessor(readingURL: cocoascript.NSURL, readingOptions: cocoascript.NSFileCoordinatorReadingOptions, writingURL: cocoascript.NSURL, writingOptions: cocoascript.NSFileCoordinatorWritingOptions, outError: cocoascript.NSError, readerWriter: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1408970-coordinatewritingitematurl
    coordinateWritingItemAtURL_options_writingItemAtURL_options_error_byAccessor(url1: cocoascript.NSURL, options1: cocoascript.NSFileCoordinatorWritingOptions, url2: cocoascript.NSURL, options2: cocoascript.NSFileCoordinatorWritingOptions, outError: cocoascript.NSError, writer: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1412420-prepareforreadingitemsaturls
    prepareForReadingItemsAtURLs_options_writingItemsAtURLs_options_error_byAccessor(readingURLs: cocoascript.NSURL, readingOptions: cocoascript.NSFileCoordinatorReadingOptions, writingURLs: cocoascript.NSURL, writingOptions: cocoascript.NSFileCoordinatorWritingOptions, outError: cocoascript.NSError, batchAccessor: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1408668-itematurl
    itemAtURL_willMoveToURL(oldURL: cocoascript.NSURL, newURL: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1410328-itematurl
    itemAtURL_didMoveToURL(oldURL: cocoascript.NSURL, newURL: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1418457-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/2909000-itematurl
    itemAtURL_didChangeUbiquityAttributes(url: cocoascript.NSURL, attributes: cocoascript.NSURLResourceKey):void;
    //
    alloc():cocoascript.NSFileCoordinator;
    //
    init():cocoascript.NSFileCoordinator;
  }
}

declare const NSFileCoordinator: cocoascript.NSFileCoordinator;
declare namespace cocoascript {
  /**
   * The details of a coordinated-read or coordinated-write operation.
   * doc://com.apple.documentation/documentation/foundation/nsfileaccessintent
   */
  interface NSFileAccessIntent extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfileaccessintent/1411459-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    //
    alloc():cocoascript.NSFileAccessIntent;
    //
    init():cocoascript.NSFileAccessIntent;
  }
}

declare const NSFileAccessIntent: cocoascript.NSFileAccessIntent;
// doc://com.apple.documentation/documentation/foundation/nscocoaerrordomain
declare const NSCocoaErrorDomain: cocoascript.NSErrorDomain;
// doc://com.apple.documentation/documentation/foundation/nsundomanagerdidcloseundogroupnotification
declare const NSUndoManagerDidCloseUndoGroupNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsundomanagerdidundochangenotification
declare const NSUndoManagerDidUndoChangeNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsundomanagerdidredochangenotification
declare const NSUndoManagerDidRedoChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * A command that closes one or more scriptable objects.
   * doc://com.apple.documentation/documentation/foundation/nsclosecommand
   */
  interface NSCloseCommand extends NSScriptCommand {
    // doc://com.apple.documentation/documentation/foundation/nsclosecommand/1415647-saveoptions
    saveOptions(): cocoascript.NSSaveOptions;
    setSaveOptions(): void;
    //
    alloc():cocoascript.NSCloseCommand;
    //
    init():cocoascript.NSCloseCommand;
  }
}

declare const NSCloseCommand: cocoascript.NSCloseCommand;
declare namespace cocoascript {
  /**
   * A query that you perform against Spotlight metadata.
   * doc://com.apple.documentation/documentation/foundation/nsmetadataquery
   */
  interface NSMetadataQuery extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1412155-searchscopes
    searchScopes(): cocoascript.NSArray;
    setSearchScopes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1411478-predicate
    predicate(): cocoascript.NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1411847-sortdescriptors
    sortDescriptors(): cocoascript.NSSortDescriptor;
    setSortDescriptors(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1407767-valuelistattributes
    valueListAttributes(): cocoascript.NSString;
    setValueListAttributes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1409191-groupingattributes
    groupingAttributes(): cocoascript.NSString;
    setGroupingAttributes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1411884-notificationbatchinginterval
    notificationBatchingInterval(): cocoascript.NSTimeInterval;
    setNotificationBatchingInterval(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1413181-delegate
    delegate(): cocoascript.NSMetadataQueryDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1411307-searchitems
    searchItems(): cocoascript.NSArray;
    setSearchItems(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1416780-started
    started(): cocoascript.BOOL;
    setStarted(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1407304-startquery
    startQuery():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1407539-gathering
    gathering(): cocoascript.BOOL;
    setGathering(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1411941-stopped
    stopped(): cocoascript.BOOL;
    setStopped(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1408021-stopquery
    stopQuery():void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1408872-results
    results(): cocoascript.NSArray;
    setResults(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1418315-resultcount
    resultCount(): cocoascript.NSUInteger;
    setResultCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1410162-resultatindex
    resultAtIndex(idx: cocoascript.NSUInteger):cocoascript.NSMetadataQuery;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1410014-indexofresult
    indexOfResult(result: cocoascript.NSMetadataQuery):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1416579-groupedresults
    groupedResults(): cocoascript.NSMetadataQueryResultGroup;
    setGroupedResults(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1415856-enumerateresultsusingblock
    enumerateResultsUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1415123-enumerateresultswithoptions
    enumerateResultsWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1418401-valuelists
    valueLists(): cocoascript.NSMetadataQueryAttributeValueTuple;
    setValueLists(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1417133-valueofattribute
    valueOfAttribute_forResultAtIndex(attrName: cocoascript.NSString, idx: cocoascript.NSUInteger):cocoascript.NSMetadataQuery;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1416943-enableupdates
    enableUpdates():void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1416337-disableupdates
    disableUpdates():void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1410953-operationqueue
    operationQueue(): cocoascript.NSOperationQueue;
    setOperationQueue(): void;
    //
    alloc():cocoascript.NSMetadataQuery;
    //
    init():cocoascript.NSMetadataQuery;
  }
}

declare const NSMetadataQuery: cocoascript.NSMetadataQuery;
declare namespace cocoascript {
  /**
   * The metadata associated with a file.
   * doc://com.apple.documentation/documentation/foundation/nsmetadataitem
   */
  interface NSMetadataItem extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsmetadataitem/1414919-initwithurl
    initWithURL(url: cocoascript.NSURL):cocoascript.NSMetadataItem;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataitem/1418347-attributes
    attributes(): cocoascript.NSString;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataitem/1411721-valueforattribute
    valueForAttribute(key: cocoascript.NSString):cocoascript.NSMetadataItem;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataitem/1409934-valuesforattributes
    valuesForAttributes(keys: cocoascript.NSString):cocoascript.NSMetadataItem;
    //
    alloc():cocoascript.NSMetadataItem;
    //
    init():cocoascript.NSMetadataItem;
  }
}

declare const NSMetadataItem: cocoascript.NSMetadataItem;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemaudienceskey
declare const NSMetadataItemAudiencesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemaudiobitratekey
declare const NSMetadataItemAudioBitRateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemaudiochannelcountkey
declare const NSMetadataItemAudioChannelCountKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemaudioencodingapplicationkey
declare const NSMetadataItemAudioEncodingApplicationKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemaudiosampleratekey
declare const NSMetadataItemAudioSampleRateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemaudiotracknumberkey
declare const NSMetadataItemAudioTrackNumberKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemauthoraddresseskey
declare const NSMetadataItemAuthorAddressesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemauthoremailaddresseskey
declare const NSMetadataItemAuthorEmailAddressesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemauthorskey
declare const NSMetadataItemAuthorsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemacquisitionmakekey
declare const NSMetadataItemAcquisitionMakeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemacquisitionmodelkey
declare const NSMetadataItemAcquisitionModelKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemalbumkey
declare const NSMetadataItemAlbumKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemaltitudekey
declare const NSMetadataItemAltitudeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemaperturekey
declare const NSMetadataItemApertureKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemappleloopdescriptorskey
declare const NSMetadataItemAppleLoopDescriptorsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemappleloopskeyfiltertypekey
declare const NSMetadataItemAppleLoopsKeyFilterTypeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemappleloopsloopmodekey
declare const NSMetadataItemAppleLoopsLoopModeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemappleloopsrootkeykey
declare const NSMetadataItemAppleLoopsRootKeyKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemapplicationcategorieskey
declare const NSMetadataItemApplicationCategoriesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemattributechangedatekey
declare const NSMetadataItemAttributeChangeDateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemfsnamekey
declare const NSMetadataItemFSNameKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemdisplaynamekey
declare const NSMetadataItemDisplayNameKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemurlkey
declare const NSMetadataItemURLKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitempathkey
declare const NSMetadataItemPathKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemfssizekey
declare const NSMetadataItemFSSizeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemfscreationdatekey
declare const NSMetadataItemFSCreationDateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemfscontentchangedatekey
declare const NSMetadataItemFSContentChangeDateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitembitspersamplekey
declare const NSMetadataItemBitsPerSampleKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcfbundleidentifierkey
declare const NSMetadataItemCFBundleIdentifierKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcameraownerkey
declare const NSMetadataItemCameraOwnerKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcitykey
declare const NSMetadataItemCityKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcodecskey
declare const NSMetadataItemCodecsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcolorspacekey
declare const NSMetadataItemColorSpaceKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcommentkey
declare const NSMetadataItemCommentKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcomposerkey
declare const NSMetadataItemComposerKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcontactkeywordskey
declare const NSMetadataItemContactKeywordsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcontentcreationdatekey
declare const NSMetadataItemContentCreationDateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcontentmodificationdatekey
declare const NSMetadataItemContentModificationDateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcontenttypekey
declare const NSMetadataItemContentTypeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcontenttypetreekey
declare const NSMetadataItemContentTypeTreeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcontributorskey
declare const NSMetadataItemContributorsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcopyrightkey
declare const NSMetadataItemCopyrightKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcountrykey
declare const NSMetadataItemCountryKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcoveragekey
declare const NSMetadataItemCoverageKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemcreatorkey
declare const NSMetadataItemCreatorKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemdateaddedkey
declare const NSMetadataItemDateAddedKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemdeliverytypekey
declare const NSMetadataItemDeliveryTypeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemdescriptionkey
declare const NSMetadataItemDescriptionKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemdirectorkey
declare const NSMetadataItemDirectorKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemdownloadeddatekey
declare const NSMetadataItemDownloadedDateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemduedatekey
declare const NSMetadataItemDueDateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemdurationsecondskey
declare const NSMetadataItemDurationSecondsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemexifgpsversionkey
declare const NSMetadataItemEXIFGPSVersionKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemexifversionkey
declare const NSMetadataItemEXIFVersionKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemeditorskey
declare const NSMetadataItemEditorsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitememailaddresseskey
declare const NSMetadataItemEmailAddressesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemencodingapplicationskey
declare const NSMetadataItemEncodingApplicationsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemexecutablearchitectureskey
declare const NSMetadataItemExecutableArchitecturesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemexecutableplatformkey
declare const NSMetadataItemExecutablePlatformKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemexposuremodekey
declare const NSMetadataItemExposureModeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemexposureprogramkey
declare const NSMetadataItemExposureProgramKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemexposuretimesecondskey
declare const NSMetadataItemExposureTimeSecondsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemexposuretimestringkey
declare const NSMetadataItemExposureTimeStringKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemfnumberkey
declare const NSMetadataItemFNumberKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemfindercommentkey
declare const NSMetadataItemFinderCommentKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemflashonoffkey
declare const NSMetadataItemFlashOnOffKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemfocallength35mmkey
declare const NSMetadataItemFocalLength35mmKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemfocallengthkey
declare const NSMetadataItemFocalLengthKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemfontskey
declare const NSMetadataItemFontsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpsareainformationkey
declare const NSMetadataItemGPSAreaInformationKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpsdopkey
declare const NSMetadataItemGPSDOPKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpsdatestampkey
declare const NSMetadataItemGPSDateStampKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpsdestbearingkey
declare const NSMetadataItemGPSDestBearingKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpsdestdistancekey
declare const NSMetadataItemGPSDestDistanceKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpsdestlatitudekey
declare const NSMetadataItemGPSDestLatitudeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpsdestlongitudekey
declare const NSMetadataItemGPSDestLongitudeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpsdifferentalkey
declare const NSMetadataItemGPSDifferentalKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpsmapdatumkey
declare const NSMetadataItemGPSMapDatumKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpsmeasuremodekey
declare const NSMetadataItemGPSMeasureModeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpsprocessingmethodkey
declare const NSMetadataItemGPSProcessingMethodKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpsstatuskey
declare const NSMetadataItemGPSStatusKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgpstrackkey
declare const NSMetadataItemGPSTrackKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemgenrekey
declare const NSMetadataItemGenreKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemhasalphachannelkey
declare const NSMetadataItemHasAlphaChannelKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemheadlinekey
declare const NSMetadataItemHeadlineKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemisospeedkey
declare const NSMetadataItemISOSpeedKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemidentifierkey
declare const NSMetadataItemIdentifierKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemimagedirectionkey
declare const NSMetadataItemImageDirectionKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataiteminformationkey
declare const NSMetadataItemInformationKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataiteminstantmessageaddresseskey
declare const NSMetadataItemInstantMessageAddressesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataiteminstructionskey
declare const NSMetadataItemInstructionsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemisapplicationmanagedkey
declare const NSMetadataItemIsApplicationManagedKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemisgeneralmidisequencekey
declare const NSMetadataItemIsGeneralMIDISequenceKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemislikelyjunkkey
declare const NSMetadataItemIsLikelyJunkKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemkeysignaturekey
declare const NSMetadataItemKeySignatureKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemkeywordskey
declare const NSMetadataItemKeywordsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemkindkey
declare const NSMetadataItemKindKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemlanguageskey
declare const NSMetadataItemLanguagesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemlastuseddatekey
declare const NSMetadataItemLastUsedDateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemlatitudekey
declare const NSMetadataItemLatitudeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemlayernameskey
declare const NSMetadataItemLayerNamesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemlensmodelkey
declare const NSMetadataItemLensModelKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemlongitudekey
declare const NSMetadataItemLongitudeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemlyricistkey
declare const NSMetadataItemLyricistKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemmaxaperturekey
declare const NSMetadataItemMaxApertureKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemmediatypeskey
declare const NSMetadataItemMediaTypesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemmeteringmodekey
declare const NSMetadataItemMeteringModeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemmusicalgenrekey
declare const NSMetadataItemMusicalGenreKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemmusicalinstrumentcategorykey
declare const NSMetadataItemMusicalInstrumentCategoryKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemmusicalinstrumentnamekey
declare const NSMetadataItemMusicalInstrumentNameKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemnamedlocationkey
declare const NSMetadataItemNamedLocationKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemnumberofpageskey
declare const NSMetadataItemNumberOfPagesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemorganizationskey
declare const NSMetadataItemOrganizationsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemorientationkey
declare const NSMetadataItemOrientationKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemoriginalformatkey
declare const NSMetadataItemOriginalFormatKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemoriginalsourcekey
declare const NSMetadataItemOriginalSourceKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitempageheightkey
declare const NSMetadataItemPageHeightKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitempagewidthkey
declare const NSMetadataItemPageWidthKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemparticipantskey
declare const NSMetadataItemParticipantsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemperformerskey
declare const NSMetadataItemPerformersKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemphonenumberskey
declare const NSMetadataItemPhoneNumbersKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitempixelcountkey
declare const NSMetadataItemPixelCountKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitempixelheightkey
declare const NSMetadataItemPixelHeightKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitempixelwidthkey
declare const NSMetadataItemPixelWidthKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemproducerkey
declare const NSMetadataItemProducerKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemprofilenamekey
declare const NSMetadataItemProfileNameKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemprojectskey
declare const NSMetadataItemProjectsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitempublisherskey
declare const NSMetadataItemPublishersKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemrecipientaddresseskey
declare const NSMetadataItemRecipientAddressesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemrecipientemailaddresseskey
declare const NSMetadataItemRecipientEmailAddressesKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemrecipientskey
declare const NSMetadataItemRecipientsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemrecordingdatekey
declare const NSMetadataItemRecordingDateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemrecordingyearkey
declare const NSMetadataItemRecordingYearKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemredeyeonoffkey
declare const NSMetadataItemRedEyeOnOffKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemresolutionheightdpikey
declare const NSMetadataItemResolutionHeightDPIKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemresolutionwidthdpikey
declare const NSMetadataItemResolutionWidthDPIKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemrightskey
declare const NSMetadataItemRightsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemsecuritymethodkey
declare const NSMetadataItemSecurityMethodKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemspeedkey
declare const NSMetadataItemSpeedKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemstarratingkey
declare const NSMetadataItemStarRatingKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemstateorprovincekey
declare const NSMetadataItemStateOrProvinceKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemstreamablekey
declare const NSMetadataItemStreamableKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemsubjectkey
declare const NSMetadataItemSubjectKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemtempokey
declare const NSMetadataItemTempoKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemtextcontentkey
declare const NSMetadataItemTextContentKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemthemekey
declare const NSMetadataItemThemeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemtimesignaturekey
declare const NSMetadataItemTimeSignatureKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemtimestampkey
declare const NSMetadataItemTimestampKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemtitlekey
declare const NSMetadataItemTitleKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemtotalbitratekey
declare const NSMetadataItemTotalBitRateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemversionkey
declare const NSMetadataItemVersionKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemvideobitratekey
declare const NSMetadataItemVideoBitRateKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemwherefromskey
declare const NSMetadataItemWhereFromsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemwhitebalancekey
declare const NSMetadataItemWhiteBalanceKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataitemisubiquitouskey
declare const NSMetadataItemIsUbiquitousKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemcontainerdisplaynamekey
declare const NSMetadataUbiquitousItemContainerDisplayNameKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemdownloadrequestedkey
declare const NSMetadataUbiquitousItemDownloadRequestedKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemisexternaldocumentkey
declare const NSMetadataUbiquitousItemIsExternalDocumentKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemurlinlocalcontainerkey
declare const NSMetadataUbiquitousItemURLInLocalContainerKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemhasunresolvedconflictskey
declare const NSMetadataUbiquitousItemHasUnresolvedConflictsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemisdownloadedkey
declare const NSMetadataUbiquitousItemIsDownloadedKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemisdownloadingkey
declare const NSMetadataUbiquitousItemIsDownloadingKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemisuploadedkey
declare const NSMetadataUbiquitousItemIsUploadedKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemisuploadingkey
declare const NSMetadataUbiquitousItemIsUploadingKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitempercentdownloadedkey
declare const NSMetadataUbiquitousItemPercentDownloadedKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitempercentuploadedkey
declare const NSMetadataUbiquitousItemPercentUploadedKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemdownloadingstatuskey
declare const NSMetadataUbiquitousItemDownloadingStatusKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemdownloadingerrorkey
declare const NSMetadataUbiquitousItemDownloadingErrorKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemuploadingerrorkey
declare const NSMetadataUbiquitousItemUploadingErrorKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemissharedkey
declare const NSMetadataUbiquitousItemIsSharedKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousshareditemcurrentuserpermissionskey
declare const NSMetadataUbiquitousSharedItemCurrentUserPermissionsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousshareditemcurrentuserrolekey
declare const NSMetadataUbiquitousSharedItemCurrentUserRoleKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousshareditemmostrecenteditornamecomponentskey
declare const NSMetadataUbiquitousSharedItemMostRecentEditorNameComponentsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousshareditemownernamecomponentskey
declare const NSMetadataUbiquitousSharedItemOwnerNameComponentsKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemdownloadingstatuscurrent
declare const NSMetadataUbiquitousItemDownloadingStatusCurrent: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemdownloadingstatusdownloaded
declare const NSMetadataUbiquitousItemDownloadingStatusDownloaded: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousitemdownloadingstatusnotdownloaded
declare const NSMetadataUbiquitousItemDownloadingStatusNotDownloaded: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousshareditempermissionsreadonly
declare const NSMetadataUbiquitousSharedItemPermissionsReadOnly: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousshareditempermissionsreadwrite
declare const NSMetadataUbiquitousSharedItemPermissionsReadWrite: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousshareditemroleowner
declare const NSMetadataUbiquitousSharedItemRoleOwner: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsmetadataubiquitousshareditemroleparticipant
declare const NSMetadataUbiquitousSharedItemRoleParticipant: cocoascript.NSString;
declare namespace cocoascript {
  interface NSDecimal {
  }
}declare namespace cocoascript {
  /**
   * An object for representing and performing arithmetic on base-10 numbers.
   * doc://com.apple.documentation/documentation/foundation/nsdecimalnumber
   */
  interface NSDecimalNumber extends NSNumber {
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1415711-one
    one(): cocoascript.NSDecimalNumber;
    setOne(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1413127-zero
    zero(): cocoascript.NSDecimalNumber;
    setZero(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1413389-notanumber
    notANumber(): cocoascript.NSDecimalNumber;
    setNotANumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1412692-initwithdecimal
    initWithDecimal(dcm: cocoascript.NSDecimal):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1416003-initwithmantissa
    initWithMantissa_exponent_isNegative(mantissa: number, exponent: number, flag: cocoascript.BOOL):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1409902-initwithstring
    initWithString(numberValue: cocoascript.NSString):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1409201-initwithstring
    initWithString_locale(numberValue: cocoascript.NSString, locale: cocoascript.NSDecimalNumber):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1413203-decimalnumberbyadding
    decimalNumberByAdding(decimalNumber: cocoascript.NSDecimalNumber):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1416873-decimalnumberbysubtracting
    decimalNumberBySubtracting(decimalNumber: cocoascript.NSDecimalNumber):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1414243-decimalnumberbymultiplyingby
    decimalNumberByMultiplyingBy(decimalNumber: cocoascript.NSDecimalNumber):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1410741-decimalnumberbydividingby
    decimalNumberByDividingBy(decimalNumber: cocoascript.NSDecimalNumber):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1413922-decimalnumberbyraisingtopower
    decimalNumberByRaisingToPower(power: cocoascript.NSUInteger):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1408449-decimalnumberbymultiplyingbypowe
    decimalNumberByMultiplyingByPowerOf10(power: number):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1407456-decimalnumberbyadding
    decimalNumberByAdding_withBehavior(decimalNumber: cocoascript.NSDecimalNumber, behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1409890-decimalnumberbysubtracting
    decimalNumberBySubtracting_withBehavior(decimalNumber: cocoascript.NSDecimalNumber, behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1414874-decimalnumberbymultiplyingby
    decimalNumberByMultiplyingBy_withBehavior(decimalNumber: cocoascript.NSDecimalNumber, behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1415619-decimalnumberbydividingby
    decimalNumberByDividingBy_withBehavior(decimalNumber: cocoascript.NSDecimalNumber, behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1410484-decimalnumberbyraisingtopower
    decimalNumberByRaisingToPower_withBehavior(power: cocoascript.NSUInteger, behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1414279-decimalnumberbymultiplyingbypowe
    decimalNumberByMultiplyingByPowerOf10_withBehavior(power: number, behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1415436-decimalnumberbyroundingaccording
    decimalNumberByRoundingAccordingToBehavior(behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1418084-defaultbehavior
    defaultBehavior(): cocoascript.NSDecimalNumberBehaviors;
    setDefaultBehavior(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1409664-decimalvalue
    decimalValue(): cocoascript.NSDecimal;
    setDecimalValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1407569-doublevalue
    doubleValue(): number;
    setDoubleValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1412789-descriptionwithlocale
    descriptionWithLocale(locale: cocoascript.NSDecimalNumber):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1409042-objctype
    objCType(): string;
    setObjCType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1407637-compare
    compare(decimalNumber: cocoascript.NSNumber):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1415841-maximumdecimalnumber
    maximumDecimalNumber(): cocoascript.NSDecimalNumber;
    setMaximumDecimalNumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1413371-minimumdecimalnumber
    minimumDecimalNumber(): cocoascript.NSDecimalNumber;
    setMinimumDecimalNumber(): void;
    //
    alloc():cocoascript.NSDecimalNumber;
    //
    init():cocoascript.NSDecimalNumber;
  }
}

declare const NSDecimalNumber: cocoascript.NSDecimalNumber;
declare namespace cocoascript {
  /**
   * A formatter that converts between numeric values and their textual representations.
   * doc://com.apple.documentation/documentation/foundation/nsnumberformatter
   */
  interface NSNumberFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1417642-formatterbehavior
    formatterBehavior(): cocoascript.NSNumberFormatterBehavior;
    setFormatterBehavior(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1416915-numberstyle
    numberStyle(): cocoascript.NSNumberFormatterStyle;
    setNumberStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1410503-generatesdecimalnumbers
    generatesDecimalNumbers(): cocoascript.BOOL;
    setGeneratesDecimalNumbers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1412588-getobjectvalue
    getObjectValue_forString_range_error(obj: cocoascript.NSNumberFormatter, string: cocoascript.NSString, rangep: cocoascript.NSRange, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1408845-numberfromstring
    numberFromString(string: cocoascript.NSString):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1418046-stringfromnumber
    stringFromNumber(number: cocoascript.NSNumber):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1408133-localizesformat
    localizesFormat(): cocoascript.BOOL;
    setLocalizesFormat(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1416967-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1415880-roundingbehavior
    roundingBehavior(): cocoascript.NSDecimalNumberHandler;
    setRoundingBehavior(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1412561-roundingincrement
    roundingIncrement(): cocoascript.NSNumber;
    setRoundingIncrement(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1411156-roundingmode
    roundingMode(): cocoascript.NSNumberFormatterRoundingMode;
    setRoundingMode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1410052-minimumintegerdigits
    minimumIntegerDigits(): cocoascript.NSUInteger;
    setMinimumIntegerDigits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1407284-maximumintegerdigits
    maximumIntegerDigits(): cocoascript.NSUInteger;
    setMaximumIntegerDigits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1410459-minimumfractiondigits
    minimumFractionDigits(): cocoascript.NSUInteger;
    setMinimumFractionDigits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1415364-maximumfractiondigits
    maximumFractionDigits(): cocoascript.NSUInteger;
    setMaximumFractionDigits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1417793-usessignificantdigits
    usesSignificantDigits(): cocoascript.BOOL;
    setUsesSignificantDigits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1410174-minimumsignificantdigits
    minimumSignificantDigits(): cocoascript.NSUInteger;
    setMinimumSignificantDigits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1412008-maximumsignificantdigits
    maximumSignificantDigits(): cocoascript.NSUInteger;
    setMaximumSignificantDigits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1410565-format
    format(): cocoascript.NSString;
    setFormat(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1408543-formattingcontext
    formattingContext(): cocoascript.NSFormattingContext;
    setFormattingContext(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1411919-formatwidth
    formatWidth(): cocoascript.NSUInteger;
    setFormatWidth(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1414039-negativeformat
    negativeFormat(): cocoascript.NSString;
    setNegativeFormat(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1410737-positiveformat
    positiveFormat(): cocoascript.NSString;
    setPositiveFormat(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1408601-multiplier
    multiplier(): cocoascript.NSNumber;
    setMultiplier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1407789-percentsymbol
    percentSymbol(): cocoascript.NSString;
    setPercentSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1412399-permillsymbol
    perMillSymbol(): cocoascript.NSString;
    setPerMillSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1409416-minussign
    minusSign(): cocoascript.NSString;
    setMinusSign(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1416423-plussign
    plusSign(): cocoascript.NSString;
    setPlusSign(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1417223-exponentsymbol
    exponentSymbol(): cocoascript.NSString;
    setExponentSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1410405-zerosymbol
    zeroSymbol(): cocoascript.NSString;
    setZeroSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1412699-nilsymbol
    nilSymbol(): cocoascript.NSString;
    setNilSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1416993-notanumbersymbol
    notANumberSymbol(): cocoascript.NSString;
    setNotANumberSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1417968-negativeinfinitysymbol
    negativeInfinitySymbol(): cocoascript.NSString;
    setNegativeInfinitySymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1412976-positiveinfinitysymbol
    positiveInfinitySymbol(): cocoascript.NSString;
    setPositiveInfinitySymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1414668-currencysymbol
    currencySymbol(): cocoascript.NSString;
    setCurrencySymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1410463-currencycode
    currencyCode(): cocoascript.NSString;
    setCurrencyCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1412755-internationalcurrencysymbol
    internationalCurrencySymbol(): cocoascript.NSString;
    setInternationalCurrencySymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1416213-currencygroupingseparator
    currencyGroupingSeparator(): cocoascript.NSString;
    setCurrencyGroupingSeparator(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1414204-positiveprefix
    positivePrefix(): cocoascript.NSString;
    setPositivePrefix(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1415071-positivesuffix
    positiveSuffix(): cocoascript.NSString;
    setPositiveSuffix(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1408096-negativeprefix
    negativePrefix(): cocoascript.NSString;
    setNegativePrefix(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1413927-negativesuffix
    negativeSuffix(): cocoascript.NSString;
    setNegativeSuffix(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1414530-textattributesfornegativevalues
    textAttributesForNegativeValues(): cocoascript.id;
    setTextAttributesForNegativeValues(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1409563-textattributesforpositivevalues
    textAttributesForPositiveValues(): cocoascript.id;
    setTextAttributesForPositiveValues(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1415516-attributedstringforzero
    attributedStringForZero(): cocoascript.NSAttributedString;
    setAttributedStringForZero(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1415971-textattributesforzero
    textAttributesForZero(): cocoascript.id;
    setTextAttributesForZero(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1416184-attributedstringfornil
    attributedStringForNil(): cocoascript.NSAttributedString;
    setAttributedStringForNil(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1408943-textattributesfornil
    textAttributesForNil(): cocoascript.id;
    setTextAttributesForNil(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1416819-attributedstringfornotanumber
    attributedStringForNotANumber(): cocoascript.NSAttributedString;
    setAttributedStringForNotANumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1410959-textattributesfornotanumber
    textAttributesForNotANumber(): cocoascript.id;
    setTextAttributesForNotANumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1408176-textattributesforpositiveinfinit
    textAttributesForPositiveInfinity(): cocoascript.id;
    setTextAttributesForPositiveInfinity(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1410417-textattributesfornegativeinfinit
    textAttributesForNegativeInfinity(): cocoascript.id;
    setTextAttributesForNegativeInfinity(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1412157-groupingseparator
    groupingSeparator(): cocoascript.NSString;
    setGroupingSeparator(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1409880-usesgroupingseparator
    usesGroupingSeparator(): cocoascript.BOOL;
    setUsesGroupingSeparator(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1412771-thousandseparator
    thousandSeparator(): cocoascript.NSString;
    setThousandSeparator(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1416451-hasthousandseparators
    hasThousandSeparators(): cocoascript.BOOL;
    setHasThousandSeparators(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1408029-decimalseparator
    decimalSeparator(): cocoascript.NSString;
    setDecimalSeparator(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1408550-alwaysshowsdecimalseparator
    alwaysShowsDecimalSeparator(): cocoascript.BOOL;
    setAlwaysShowsDecimalSeparator(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1407247-currencydecimalseparator
    currencyDecimalSeparator(): cocoascript.NSString;
    setCurrencyDecimalSeparator(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1416167-groupingsize
    groupingSize(): cocoascript.NSUInteger;
    setGroupingSize(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1413348-secondarygroupingsize
    secondaryGroupingSize(): cocoascript.NSUInteger;
    setSecondaryGroupingSize(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1413690-paddingcharacter
    paddingCharacter(): cocoascript.NSString;
    setPaddingCharacter(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1411127-paddingposition
    paddingPosition(): cocoascript.NSNumberFormatterPadPosition;
    setPaddingPosition(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1416119-allowsfloats
    allowsFloats(): cocoascript.BOOL;
    setAllowsFloats(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1417228-minimum
    minimum(): cocoascript.NSNumber;
    setMinimum(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1417787-maximum
    maximum(): cocoascript.NSNumber;
    setMaximum(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1416953-lenient
    lenient(): cocoascript.BOOL;
    setLenient(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumberformatter/1412244-partialstringvalidationenabled
    partialStringValidationEnabled(): cocoascript.BOOL;
    setPartialStringValidationEnabled(): void;
    //
    alloc():cocoascript.NSNumberFormatter;
    //
    init():cocoascript.NSNumberFormatter;
  }
}

declare const NSNumberFormatter: cocoascript.NSNumberFormatter;
declare namespace cocoascript {
  /**
   * A formatter that converts between dates and their textual representations.
   * doc://com.apple.documentation/documentation/foundation/nsdateformatter
   */
  interface NSDateFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409994-datefromstring
    dateFromString(string: cocoascript.NSString):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1415810-stringfromdate
    stringFromDate(date: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409248-getobjectvalue
    getObjectValue_forString_range_error(obj: cocoascript.NSDateFormatter, string: cocoascript.NSString, rangep: cocoascript.NSRange, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1415411-datestyle
    dateStyle(): cocoascript.NSDateFormatterStyle;
    setDateStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1413467-timestyle
    timeStyle(): cocoascript.NSDateFormatterStyle;
    setTimeStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1413514-dateformat
    dateFormat(): cocoascript.NSString;
    setDateFormat(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1417087-setlocalizeddateformatfromtempla
    setLocalizedDateFormatFromTemplate(dateFormatTemplate: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1408066-formattingcontext
    formattingContext(): cocoascript.NSFormattingContext;
    setFormattingContext(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1413675-calendar
    calendar(): cocoascript.NSCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1408312-defaultdate
    defaultDate(): cocoascript.NSDate;
    setDefaultDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1411973-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1411406-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1417203-twodigitstartdate
    twoDigitStartDate(): cocoascript.NSDate;
    setTwoDigitStartDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1416389-gregorianstartdate
    gregorianStartDate(): cocoascript.NSDate;
    setGregorianStartDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409720-formatterbehavior
    formatterBehavior(): cocoascript.NSDateFormatterBehavior;
    setFormatterBehavior(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409266-defaultformatterbehavior
    defaultFormatterBehavior(): cocoascript.NSDateFormatterBehavior;
    setDefaultFormatterBehavior(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1554835-allowsnaturallanguage
    allowsNaturalLanguage():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1411441-lenient
    lenient(): cocoascript.BOOL;
    setLenient(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1415848-doesrelativedateformatting
    doesRelativeDateFormatting(): cocoascript.BOOL;
    setDoesRelativeDateFormatting(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409506-amsymbol
    AMSymbol(): cocoascript.NSString;
    setAMSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1412367-pmsymbol
    PMSymbol(): cocoascript.NSString;
    setPMSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1412405-weekdaysymbols
    weekdaySymbols(): cocoascript.NSString;
    setWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1416121-shortweekdaysymbols
    shortWeekdaySymbols(): cocoascript.NSString;
    setShortWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1415109-veryshortweekdaysymbols
    veryShortWeekdaySymbols(): cocoascript.NSString;
    setVeryShortWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1413618-standaloneweekdaysymbols
    standaloneWeekdaySymbols(): cocoascript.NSString;
    setStandaloneWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409119-shortstandaloneweekdaysymbols
    shortStandaloneWeekdaySymbols(): cocoascript.NSString;
    setShortStandaloneWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1418238-veryshortstandaloneweekdaysymbol
    veryShortStandaloneWeekdaySymbols(): cocoascript.NSString;
    setVeryShortStandaloneWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1412049-monthsymbols
    monthSymbols(): cocoascript.NSString;
    setMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409209-shortmonthsymbols
    shortMonthSymbols(): cocoascript.NSString;
    setShortMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1413632-veryshortmonthsymbols
    veryShortMonthSymbols(): cocoascript.NSString;
    setVeryShortMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1416227-standalonemonthsymbols
    standaloneMonthSymbols(): cocoascript.NSString;
    setStandaloneMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1414771-shortstandalonemonthsymbols
    shortStandaloneMonthSymbols(): cocoascript.NSString;
    setShortStandaloneMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1413322-veryshortstandalonemonthsymbols
    veryShortStandaloneMonthSymbols(): cocoascript.NSString;
    setVeryShortStandaloneMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1417587-quartersymbols
    quarterSymbols(): cocoascript.NSString;
    setQuarterSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409851-shortquartersymbols
    shortQuarterSymbols(): cocoascript.NSString;
    setShortQuarterSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1411487-standalonequartersymbols
    standaloneQuarterSymbols(): cocoascript.NSString;
    setStandaloneQuarterSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1416421-shortstandalonequartersymbols
    shortStandaloneQuarterSymbols(): cocoascript.NSString;
    setShortStandaloneQuarterSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1418282-erasymbols
    eraSymbols(): cocoascript.NSString;
    setEraSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1418081-longerasymbols
    longEraSymbols(): cocoascript.NSString;
    setLongEraSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1554834-initwithdateformat
    initWithDateFormat_allowNaturalLanguage(format: cocoascript.NSString, flag: cocoascript.BOOL):cocoascript.NSDateFormatter;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1411107-generatescalendardates
    generatesCalendarDates(): cocoascript.BOOL;
    setGeneratesCalendarDates(): void;
    //
    alloc():cocoascript.NSDateFormatter;
    //
    init():cocoascript.NSDateFormatter;
  }
}

declare const NSDateFormatter: cocoascript.NSDateFormatter;
// doc://com.apple.documentation/documentation/foundation/nssystemclockdidchangenotification
declare const NSSystemClockDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * An object-oriented wrapper for a file descriptor.
   * doc://com.apple.documentation/documentation/foundation/nsfilehandle
   */
  interface NSFileHandle extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411001-filehandlewithstandarderror
    fileHandleWithStandardError(): cocoascript.NSFileHandle;
    setFileHandleWithStandardError(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1413686-filehandlewithstandardinput
    fileHandleWithStandardInput(): cocoascript.NSFileHandle;
    setFileHandleWithStandardInput(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1416965-filehandlewithstandardoutput
    fileHandleWithStandardOutput(): cocoascript.NSFileHandle;
    setFileHandleWithStandardOutput(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1413881-filehandlewithnulldevice
    fileHandleWithNullDevice(): cocoascript.NSFileHandle;
    setFileHandleWithNullDevice(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1409825-initwithfiledescriptor
    initWithFileDescriptor(fd: number):cocoascript.NSFileHandle;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1408522-initwithfiledescriptor
    initWithFileDescriptor_closeOnDealloc(fd: number, closeopt: cocoascript.BOOL):cocoascript.NSFileHandle;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1410326-filedescriptor
    fileDescriptor(): number;
    setFileDescriptor(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411463-availabledata
    availableData(): cocoascript.NSData;
    setAvailableData(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411490-readdatatoendoffile
    readDataToEndOfFile():cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1413916-readdataoflength
    readDataOfLength(length: cocoascript.NSUInteger):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1410936-writedata
    writeData(data: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1412413-readabilityhandler
    readabilityHandler(): cocoascript.NSFileHandle;
    setReadabilityHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1415367-writeabilityhandler
    writeabilityHandler(): cocoascript.NSFileHandle;
    setWriteabilityHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1413309-acceptconnectioninbackgroundandn
    acceptConnectionInBackgroundAndNotify():void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1412997-acceptconnectioninbackgroundandn
    acceptConnectionInBackgroundAndNotifyForModes(modes: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1417635-readinbackgroundandnotify
    readInBackgroundAndNotify():void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1416294-readinbackgroundandnotifyformode
    readInBackgroundAndNotifyForModes(modes: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1415313-readtoendoffileinbackgroundandno
    readToEndOfFileInBackgroundAndNotify():void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1417321-readtoendoffileinbackgroundandno
    readToEndOfFileInBackgroundAndNotifyForModes(modes: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1409270-waitfordatainbackgroundandnotify
    waitForDataInBackgroundAndNotify():void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1414643-waitfordatainbackgroundandnotify
    waitForDataInBackgroundAndNotifyForModes(modes: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1408461-offsetinfile
    offsetInFile(): number;
    setOffsetInFile(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411311-seektoendoffile
    seekToEndOfFile():number;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1412135-seektofileoffset
    seekToFileOffset(offset: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1413393-closefile
    closeFile():void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411016-synchronizefile
    synchronizeFile():void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411716-truncatefileatoffset
    truncateFileAtOffset(offset: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411174-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSFileHandle;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172525-closeandreturnerror
    closeAndReturnError(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172530-seektooffset
    seekToOffset_error(offset: number, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172531-synchronizeandreturnerror
    synchronizeAndReturnError(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172532-truncateatoffset
    truncateAtOffset_error(offset: number, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172526-getoffset
    getOffset_error(offsetInFile: number, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172527-readdatatoendoffileandreturnerro
    readDataToEndOfFileAndReturnError(error: cocoascript.NSError):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172528-readdatauptolength
    readDataUpToLength_error(length: cocoascript.NSUInteger, error: cocoascript.NSError):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172529-seektoendreturningoffset
    seekToEndReturningOffset_error(offsetInFile: number, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172533-writedata
    writeData_error(data: cocoascript.NSData, error: cocoascript.NSError):cocoascript.BOOL;
    //
    alloc():cocoascript.NSFileHandle;
    //
    init():cocoascript.NSFileHandle;
  }
}

declare const NSFileHandle: cocoascript.NSFileHandle;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdatareadingoptions
  type NSDataReadingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdatabase64encodingoptions
  type NSDataBase64EncodingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdatabase64decodingoptions
  type NSDataBase64DecodingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdatasearchoptions
  type NSDataSearchOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdatacompressionalgorithm
  type NSDataCompressionAlgorithm = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A dynamic ordered collection of objects.
   * doc://com.apple.documentation/documentation/foundation/nsmutablearray
   */
  interface NSMutableArray extends NSArray {
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1407556-init
    init():cocoascript.NSMutableArray;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1415811-initwithcapacity
    initWithCapacity(numItems: cocoascript.NSUInteger):cocoascript.NSMutableArray;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1414670-initwithcontentsoffile
    initWithContentsOfFile(path: cocoascript.NSString):cocoascript.NSMutableArray;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1411688-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSMutableArray;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1411274-addobject
    addObject(anObject: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1408963-addobjectsfromarray
    addObjectsFromArray(otherArray: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1416682-insertobject
    insertObject_atIndex(anObject: any, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1416482-insertobjects
    insertObjects_atIndexes(objects: any, indexes: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1410618-removeallobjects
    removeAllObjects():void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1409708-removelastobject
    removeLastObject():void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1410689-removeobject
    removeObject(anObject: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1411366-removeobject
    removeObject_inRange(anObject: any, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1416616-removeobjectatindex
    removeObjectAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1410154-removeobjectsatindexes
    removeObjectsAtIndexes(indexes: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1417759-removeobjectidenticalto
    removeObjectIdenticalTo(anObject: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1415225-removeobjectidenticalto
    removeObjectIdenticalTo_inRange(anObject: any, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1460142-removeobjectsfromindices
    removeObjectsFromIndices_numIndices(indices: cocoascript.NSUInteger, cnt: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1413942-removeobjectsinarray
    removeObjectsInArray(otherArray: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1407586-removeobjectsinrange
    removeObjectsInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1414510-replaceobjectatindex
    replaceObjectAtIndex_withObject(index: cocoascript.NSUInteger, anObject: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1460093-setobject
    setObject_atIndexedSubscript(obj: any, idx: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1418287-replaceobjectsatindexes
    replaceObjectsAtIndexes_withObjects(indexes: cocoascript.NSIndexSet, objects: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1409073-replaceobjectsinrange
    replaceObjectsInRange_withObjectsFromArray_range(range: cocoascript.NSRange, otherArray: any, otherRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1416902-replaceobjectsinrange
    replaceObjectsInRange_withObjectsFromArray(range: cocoascript.NSRange, otherArray: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1417821-setarray
    setArray(otherArray: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1412085-filterusingpredicate
    filterUsingPredicate(predicate: cocoascript.NSPredicate):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1411160-exchangeobjectatindex
    exchangeObjectAtIndex_withObjectAtIndex(idx1: cocoascript.NSUInteger, idx2: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1410745-sortusingdescriptors
    sortUsingDescriptors(sortDescriptors: cocoascript.NSSortDescriptor):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1414904-sortusingcomparator
    sortUsingComparator(cmptr: cocoascript.NSComparator):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1414396-sortwithoptions
    sortWithOptions_usingComparator(opts: cocoascript.NSSortOptions, cmptr: cocoascript.NSComparator):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1408332-sortusingfunction
    sortUsingFunction_context(compare: void, context: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1412273-sortusingselector
    sortUsingSelector(comparator: cocoascript.SEL):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1409527-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSMutableArray;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/3152169-applydifference
    applyDifference(difference: any):void;
    //
    alloc():cocoascript.NSMutableArray;
    //
    init():cocoascript.NSMutableArray;
  }
}

declare const NSMutableArray: cocoascript.NSMutableArray;
declare namespace cocoascript {
  /**
   * A protocol that objects adopt to support fast enumeration.
   * doc://com.apple.documentation/documentation/foundation/nsfastenumeration
   */
  interface NSFastEnumeration {
    // doc://com.apple.documentation/documentation/foundation/nsfastenumeration/1412867-countbyenumeratingwithstate
    countByEnumeratingWithState_objects_count(state: cocoascript.NSFastEnumerationState, buffer: cocoascript.NSFastEnumeration, len: cocoascript.NSUInteger):cocoascript.NSUInteger;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nscomparator
  type NSComparator = cocoascript.id;
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference
   */
  interface NSOrderedCollectionDifference extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152184-haschanges
    hasChanges(): cocoascript.BOOL;
    setHasChanges(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152188-insertions
    insertions(): any;
    setInsertions(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152189-removals
    removals(): any;
    setRemovals(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152185-initwithchanges
    initWithChanges(changes: any):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152186-initwithinsertindexes
    initWithInsertIndexes_insertedObjects_removeIndexes_removedObjects(inserts: cocoascript.NSIndexSet, insertedObjects: any, removes: cocoascript.NSIndexSet, removedObjects: any):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152187-initwithinsertindexes
    initWithInsertIndexes_insertedObjects_removeIndexes_removedObjects_additionalChanges(inserts: cocoascript.NSIndexSet, insertedObjects: any, removes: cocoascript.NSIndexSet, removedObjects: any, changes: any):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3180114-inversedifference
    inverseDifference():cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152183-differencebytransformingchangesw
    differenceByTransformingChangesWithBlock(block: any):cocoascript.NSOrderedCollectionDifference;
    //
    alloc():cocoascript.NSOrderedCollectionDifference;
    //
    init():cocoascript.NSOrderedCollectionDifference;
  }
}

declare const NSOrderedCollectionDifference: cocoascript.NSOrderedCollectionDifference;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifferencecalculationoptions
  type NSOrderedCollectionDifferenceCalculationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsbinarysearchingoptions
  type NSBinarySearchingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A dynamic unordered collection of unique objects.
   * doc://com.apple.documentation/documentation/foundation/nsmutableset
   */
  interface NSMutableSet extends NSSet {
    // doc://com.apple.documentation/documentation/foundation/nsmutableset/1411953-initwithcapacity
    initWithCapacity(numItems: cocoascript.NSUInteger):cocoascript.NSMutableSet;
    // doc://com.apple.documentation/documentation/foundation/nsmutableset/1414518-init
    init():cocoascript.NSMutableSet;
    // doc://com.apple.documentation/documentation/foundation/nsmutableset/1407460-addobject
    addObject(object: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableset/1407868-filterusingpredicate
    filterUsingPredicate(predicate: cocoascript.NSPredicate):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableset/1416085-removeobject
    removeObject(object: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableset/1417497-removeallobjects
    removeAllObjects():void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableset/1414345-addobjectsfromarray
    addObjectsFromArray(array: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableset/1413187-unionset
    unionSet(otherSet: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableset/1416710-minusset
    minusSet(otherSet: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableset/1407231-intersectset
    intersectSet(otherSet: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableset/1416405-setset
    setSet(otherSet: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableset/1407369-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSMutableSet;
    //
    alloc():cocoascript.NSMutableSet;
    //
    init():cocoascript.NSMutableSet;
  }
}

declare const NSMutableSet: cocoascript.NSMutableSet;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nscomparisonresult
  type NSComparisonResult = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An abstract class used to transform values from one representation to another.
   * doc://com.apple.documentation/documentation/foundation/nsvaluetransformer
   */
  interface NSValueTransformer extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsvaluetransformer/1402004-transformedvalue
    transformedValue(value: cocoascript.NSValueTransformer):cocoascript.NSValueTransformer;
    // doc://com.apple.documentation/documentation/foundation/nsvaluetransformer/1402020-reversetransformedvalue
    reverseTransformedValue(value: cocoascript.NSValueTransformer):cocoascript.NSValueTransformer;
    //
    alloc():cocoascript.NSValueTransformer;
    //
    init():cocoascript.NSValueTransformer;
  }
}

declare const NSValueTransformer: cocoascript.NSValueTransformer;
declare namespace cocoascript {
  /**
   * An Objective-C message rendered as an object.
   * doc://com.apple.documentation/documentation/foundation/nsinvocation
   */
  interface NSInvocation extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437836-selector
    selector(): cocoascript.SEL;
    setSelector(): void;
    // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437852-target
    target(): cocoascript.id;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437834-setargument
    setArgument_atIndex(argumentLocation: void, idx: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437830-getargument
    getArgument_atIndex(argumentLocation: void, idx: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437842-argumentsretained
    argumentsRetained(): cocoascript.BOOL;
    setArgumentsRetained(): void;
    // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437838-retainarguments
    retainArguments():void;
    // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437848-setreturnvalue
    setReturnValue(retLoc: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437832-getreturnvalue
    getReturnValue(retLoc: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437850-invoke
    invoke():void;
    // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437854-invokewithtarget
    invokeWithTarget(target: cocoascript.NSInvocation):void;
    // doc://com.apple.documentation/documentation/foundation/nsinvocation/1437846-methodsignature
    methodSignature(): cocoascript.NSMethodSignature;
    setMethodSignature(): void;
    //
    alloc():cocoascript.NSInvocation;
    //
    init():cocoascript.NSInvocation;
  }
}

declare const NSInvocation: cocoascript.NSInvocation;
declare namespace cocoascript {
  /**
   * A record of the type information for the return value and parameters of a method.
   * doc://com.apple.documentation/documentation/foundation/nsmethodsignature
   */
  interface NSMethodSignature extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsmethodsignature/1519660-getargumenttypeatindex
    getArgumentTypeAtIndex(idx: cocoascript.NSUInteger):string;
    // doc://com.apple.documentation/documentation/foundation/nsmethodsignature/1519662-numberofarguments
    numberOfArguments(): cocoascript.NSUInteger;
    setNumberOfArguments(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmethodsignature/1519658-framelength
    frameLength(): cocoascript.NSUInteger;
    setFrameLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmethodsignature/1519667-methodreturntype
    methodReturnType(): string;
    setMethodReturnType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmethodsignature/1519666-methodreturnlength
    methodReturnLength(): cocoascript.NSUInteger;
    setMethodReturnLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmethodsignature/1519664-isoneway
    isOneway():cocoascript.BOOL;
    //
    alloc():cocoascript.NSMethodSignature;
    //
    init():cocoascript.NSMethodSignature;
  }
}

declare const NSMethodSignature: cocoascript.NSMethodSignature;
declare namespace cocoascript {
  /**
   * An object that supports Cocoa’s reference-counted memory management system.
   * doc://com.apple.documentation/documentation/foundation/nsautoreleasepool
   */
  interface NSAutoreleasePool extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsautoreleasepool/1520553-drain
    drain():void;
    // doc://com.apple.documentation/documentation/foundation/nsautoreleasepool/1520555-addobject
    addObject(anObject: cocoascript.NSAutoreleasePool):void;
    //
    alloc():cocoascript.NSAutoreleasePool;
    //
    init():cocoascript.NSAutoreleasePool;
  }
}

declare const NSAutoreleasePool: cocoascript.NSAutoreleasePool;
declare namespace cocoascript {
  interface NSZone {
  }
}declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsxmlparserexternalentityresolvingpolicy
  type NSXMLParserExternalEntityResolvingPolicy = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsxmlparsererrordomain
declare const NSXMLParserErrorDomain: cocoascript.NSErrorDomain;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsxmlparsererror
  type NSXMLParserError = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsrecoveryattemptererrorkey
declare const NSRecoveryAttempterErrorKey: cocoascript.NSErrorUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsmacherrordomain
declare const NSMachErrorDomain: cocoascript.NSErrorDomain;
// doc://com.apple.documentation/documentation/foundation/nsposixerrordomain
declare const NSPOSIXErrorDomain: cocoascript.NSErrorDomain;
// doc://com.apple.documentation/documentation/foundation/nsosstatuserrordomain
declare const NSOSStatusErrorDomain: cocoascript.NSErrorDomain;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nserroruserinfokey
  type NSErrorUserInfoKey = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nserrordomain
  type NSErrorDomain = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/foundation/nsurlerrordomain
declare const NSURLErrorDomain: cocoascript.NSErrorDomain;
// doc://com.apple.documentation/documentation/foundation/nsstreamsockserrordomain
declare const NSStreamSOCKSErrorDomain: cocoascript.NSErrorDomain;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocketsslerrordomain
declare const NSStreamSocketSSLErrorDomain: cocoascript.NSErrorDomain;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsrangepointer
  type NSRangePointer = cocoascript.NSRange;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsalignmentoptions
  type NSAlignmentOptions = number;
}
// doc://com.apple.documentation/documentation/foundation/nsinternalinconsistencyexception
declare const NSInternalInconsistencyException: cocoascript.NSExceptionName;
declare namespace cocoascript {
  /**
   * A coder that stores an object's data to an archive.
   * doc://com.apple.documentation/documentation/foundation/nsarchiver
   */
  interface NSArchiver extends NSCoder {
    // doc://com.apple.documentation/documentation/foundation/nsarchiver/1407200-initforwritingwithmutabledata
    initForWritingWithMutableData(mdata: cocoascript.NSMutableData):cocoascript.NSArchiver;
    // doc://com.apple.documentation/documentation/foundation/nsarchiver/1416342-encoderootobject
    encodeRootObject(rootObject: cocoascript.NSArchiver):void;
    // doc://com.apple.documentation/documentation/foundation/nsarchiver/1408143-encodeconditionalobject
    encodeConditionalObject(object: cocoascript.NSArchiver):void;
    // doc://com.apple.documentation/documentation/foundation/nsarchiver/1414268-archiverdata
    archiverData(): cocoascript.NSMutableData;
    setArchiverData(): void;
    // doc://com.apple.documentation/documentation/foundation/nsarchiver/1415147-classnameencodedfortrueclassname
    classNameEncodedForTrueClassName(trueName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsarchiver/1415273-encodeclassname
    encodeClassName_intoClassName(trueName: cocoascript.NSString, inArchiveName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsarchiver/1413612-replaceobject
    replaceObject_withObject(object: cocoascript.NSArchiver, newObject: cocoascript.NSArchiver):void;
    //
    alloc():cocoascript.NSArchiver;
    //
    init():cocoascript.NSArchiver;
  }
}

declare const NSArchiver: cocoascript.NSArchiver;
declare namespace cocoascript {
  /**
   * A decoder that restores data from an archive.
   * doc://com.apple.documentation/documentation/foundation/nsunarchiver
   */
  interface NSUnarchiver extends NSCoder {
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1417689-initforreadingwithdata
    initForReadingWithData(data: cocoascript.NSData):cocoascript.NSUnarchiver;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1407375-atend
    atEnd(): cocoascript.BOOL;
    setAtEnd(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1540833-objectzone
    objectZone():cocoascript.NSZone;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1540836-setobjectzone
    setObjectZone(zone: cocoascript.NSZone):void;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1411208-systemversion
    systemVersion(): number;
    setSystemVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1408513-classnamedecodedforarchiveclassn
    classNameDecodedForArchiveClassName(inArchiveName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1408295-decodeclassname
    decodeClassName_asClassName(inArchiveName: cocoascript.NSString, trueName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1410122-replaceobject
    replaceObject_withObject(object: cocoascript.NSUnarchiver, newObject: cocoascript.NSUnarchiver):void;
    //
    alloc():cocoascript.NSUnarchiver;
    //
    init():cocoascript.NSUnarchiver;
  }
}

declare const NSUnarchiver: cocoascript.NSUnarchiver;
declare namespace cocoascript {
  /**
   * An encoder that stores an object’s data to an archive referenced by keys.
   * doc://com.apple.documentation/documentation/foundation/nskeyedarchiver
   */
  interface NSKeyedArchiver extends NSCoder {
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/2962881-initrequiringsecurecoding
    initRequiringSecureCoding(requiresSecureCoding: cocoascript.BOOL):cocoascript.NSKeyedArchiver;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1642790-init
    init():cocoascript.NSKeyedArchiver;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1409579-initforwritingwithmutabledata
    initForWritingWithMutableData(data: cocoascript.NSMutableData):cocoascript.NSKeyedArchiver;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1413904-finishencoding
    finishEncoding():void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1643042-encodeddata
    encodedData(): cocoascript.NSData;
    setEncodedData(): void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1417520-outputformat
    outputFormat(): cocoascript.NSPropertyListFormat;
    setOutputFormat(): void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1417084-requiressecurecoding
    requiresSecureCoding(): cocoascript.BOOL;
    setRequiresSecureCoding(): void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1408127-encodebool
    encodeBool_forKey(value: cocoascript.BOOL, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1417696-encodebytes
    encodeBytes_length_forKey(bytes: number, length: cocoascript.NSUInteger, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1413677-encodeconditionalobject
    encodeConditionalObject_forKey(object: cocoascript.NSKeyedArchiver, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1416030-encodedouble
    encodeDouble_forKey(value: number, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1417776-encodefloat
    encodeFloat_forKey(value: number, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1415050-encodeint
    encodeInt_forKey(value: number, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1418280-encodeint32
    encodeInt32_forKey(value: number, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1416972-encodeint64
    encodeInt64_forKey(value: number, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1412067-encodeobject
    encodeObject_forKey(object: cocoascript.NSKeyedArchiver, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1412809-delegate
    delegate(): cocoascript.NSKeyedArchiverDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1414746-setclassname
    setClassName_forClass(codedName: cocoascript.NSString, cls: cocoascript.Class):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedarchiver/1407245-classnameforclass
    classNameForClass(cls: cocoascript.Class):cocoascript.NSString;
    //
    alloc():cocoascript.NSKeyedArchiver;
    //
    init():cocoascript.NSKeyedArchiver;
  }
}

declare const NSKeyedArchiver: cocoascript.NSKeyedArchiver;
declare namespace cocoascript {
  /**
   * A decoder that restores data from an archive referenced by keys.
   * doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver
   */
  interface NSKeyedUnarchiver extends NSCoder {
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/2962883-initforreadingfromdata
    initForReadingFromData_error(data: cocoascript.NSData, error: cocoascript.NSError):cocoascript.NSKeyedUnarchiver;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/2962882-init
    init():cocoascript.NSKeyedUnarchiver;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1410862-initforreadingwithdata
    initForReadingWithData(data: cocoascript.NSData):cocoascript.NSKeyedUnarchiver;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1410824-requiressecurecoding
    requiresSecureCoding(): cocoascript.BOOL;
    setRequiresSecureCoding(): void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1413564-containsvalueforkey
    containsValueForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1413260-decodeboolforkey
    decodeBoolForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1418091-decodebytesforkey
    decodeBytesForKey_returnedLength(key: cocoascript.NSString, lengthp: cocoascript.NSUInteger):number;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1414963-decodedoubleforkey
    decodeDoubleForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1412252-decodefloatforkey
    decodeFloatForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1418107-decodeintforkey
    decodeIntForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1416327-decodeint32forkey
    decodeInt32ForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1413288-decodeint64forkey
    decodeInt64ForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1409082-decodeobjectforkey
    decodeObjectForKey(key: cocoascript.NSString):cocoascript.NSKeyedUnarchiver;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1418233-finishdecoding
    finishDecoding():void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1643164-decodingfailurepolicy
    decodingFailurePolicy(): cocoascript.NSDecodingFailurePolicy;
    setDecodingFailurePolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1415688-delegate
    delegate(): cocoascript.NSKeyedUnarchiverDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1414659-setclass
    setClass_forClassName(cls: cocoascript.Class, codedName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1412476-classforclassname
    classForClassName(codedName: cocoascript.NSString):cocoascript.Class;
    //
    alloc():cocoascript.NSKeyedUnarchiver;
    //
    init():cocoascript.NSKeyedUnarchiver;
  }
}

declare const NSKeyedUnarchiver: cocoascript.NSKeyedUnarchiver;
declare namespace cocoascript {
  /**
   * A coder used to transmit object proxies (and sometimes objects themselves) between connections.
   * doc://com.apple.documentation/documentation/foundation/nsportcoder
   */
  interface NSPortCoder extends NSCoder {
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580075-initwithreceiveport
    initWithReceivePort_sendPort_components(rcvPort: cocoascript.NSPort, sndPort: cocoascript.NSPort, comps: cocoascript.NSArray):cocoascript.NSPortCoder;
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580077-connection
    connection():cocoascript.NSConnection;
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580073-encodeportobject
    encodePortObject(aport: cocoascript.NSPort):void;
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580069-decodeportobject
    decodePortObject():cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580072-isbycopy
    isBycopy():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580071-isbyref
    isByref():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580070-dispatch
    dispatch():void;
    //
    alloc():cocoascript.NSPortCoder;
    //
    init():cocoascript.NSPortCoder;
  }
}

declare const NSPortCoder: cocoascript.NSPortCoder;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdecodingfailurepolicy
  type NSDecodingFailurePolicy = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nssecureunarchivefromdatatransformer
   */
  interface NSSecureUnarchiveFromDataTransformer extends NSValueTransformer {
    // doc://com.apple.documentation/documentation/foundation/nssecureunarchivefromdatatransformer/2962887-allowedtoplevelclasses
    allowedTopLevelClasses(): cocoascript.Class;
    setAllowedTopLevelClasses(): void;
    //
    alloc():cocoascript.NSSecureUnarchiveFromDataTransformer;
    //
    init():cocoascript.NSSecureUnarchiveFromDataTransformer;
  }
}

declare const NSSecureUnarchiveFromDataTransformer: cocoascript.NSSecureUnarchiveFromDataTransformer;
// doc://com.apple.documentation/documentation/foundation/nsrangeexception
declare const NSRangeException: cocoascript.NSExceptionName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nspointpointer
  type NSPointPointer = cocoascript.NSPoint;
}
declare namespace cocoascript {
  /**
   * A specialized predicate that you use to compare expressions.
   * doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate
   */
  interface NSComparisonPredicate extends NSPredicate {
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1409054-initwithleftexpression
    initWithLeftExpression_rightExpression_customSelector(lhs: cocoascript.NSExpression, rhs: cocoascript.NSExpression, selector: cocoascript.SEL):cocoascript.NSComparisonPredicate;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1413523-initwithleftexpression
    initWithLeftExpression_rightExpression_modifier_type_options(lhs: cocoascript.NSExpression, rhs: cocoascript.NSExpression, modifier: cocoascript.NSComparisonPredicateModifier, type: cocoascript.NSPredicateOperatorType, options: cocoascript.NSComparisonPredicateOptions):cocoascript.NSComparisonPredicate;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1416376-comparisonpredicatemodifier
    comparisonPredicateModifier(): cocoascript.NSComparisonPredicateModifier;
    setComparisonPredicateModifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1413661-customselector
    customSelector(): cocoascript.SEL;
    setCustomSelector(): void;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1409469-rightexpression
    rightExpression(): cocoascript.NSExpression;
    setRightExpression(): void;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1412552-leftexpression
    leftExpression(): cocoascript.NSExpression;
    setLeftExpression(): void;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1414069-options
    options(): cocoascript.NSComparisonPredicateOptions;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1418327-predicateoperatortype
    predicateOperatorType(): cocoascript.NSPredicateOperatorType;
    setPredicateOperatorType(): void;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1417900-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSComparisonPredicate;
    //
    alloc():cocoascript.NSComparisonPredicate;
    //
    init():cocoascript.NSComparisonPredicate;
  }
}

declare const NSComparisonPredicate: cocoascript.NSComparisonPredicate;
declare namespace cocoascript {
  /**
   * A specialized predicate that evaluates logical combinations of other predicates.
   * doc://com.apple.documentation/documentation/foundation/nscompoundpredicate
   */
  interface NSCompoundPredicate extends NSPredicate {
    // doc://com.apple.documentation/documentation/foundation/nscompoundpredicate/1407744-initwithtype
    initWithType_subpredicates(type: cocoascript.NSCompoundPredicateType, subpredicates: cocoascript.NSPredicate):cocoascript.NSCompoundPredicate;
    // doc://com.apple.documentation/documentation/foundation/nscompoundpredicate/1412973-compoundpredicatetype
    compoundPredicateType(): cocoascript.NSCompoundPredicateType;
    setCompoundPredicateType(): void;
    // doc://com.apple.documentation/documentation/foundation/nscompoundpredicate/1410273-subpredicates
    subpredicates(): cocoascript.NSArray;
    setSubpredicates(): void;
    // doc://com.apple.documentation/documentation/foundation/nscompoundpredicate/1417889-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSCompoundPredicate;
    //
    alloc():cocoascript.NSCompoundPredicate;
    //
    init():cocoascript.NSCompoundPredicate;
  }
}

declare const NSCompoundPredicate: cocoascript.NSCompoundPredicate;
// doc://com.apple.documentation/documentation/foundation/nsedgeinsetszero
declare const NSEdgeInsetsZero: cocoascript.NSEdgeInsets;
declare namespace cocoascript {
  /**
   * A challenge from a server requiring authentication from the client.
   * doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge
   */
  interface NSURLAuthenticationChallenge extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1411154-initwithauthenticationchallenge
    initWithAuthenticationChallenge_sender(challenge: cocoascript.NSURLAuthenticationChallenge, sender: cocoascript.NSURLAuthenticationChallengeSender):cocoascript.NSURLAuthenticationChallenge;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1416511-initwithprotectionspace
    initWithProtectionSpace_proposedCredential_previousFailureCount_failureResponse_error_sender(space: cocoascript.NSURLProtectionSpace, credential: cocoascript.NSURLCredential, previousFailureCount: cocoascript.NSInteger, response: cocoascript.NSURLResponse, error: cocoascript.NSError, sender: cocoascript.NSURLAuthenticationChallengeSender):cocoascript.NSURLAuthenticationChallenge;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1410012-protectionspace
    protectionSpace(): cocoascript.NSURLProtectionSpace;
    setProtectionSpace(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1414978-failureresponse
    failureResponse(): cocoascript.NSURLResponse;
    setFailureResponse(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1416522-previousfailurecount
    previousFailureCount(): cocoascript.NSInteger;
    setPreviousFailureCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1417749-proposedcredential
    proposedCredential(): cocoascript.NSURLCredential;
    setProposedCredential(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1413033-error
    error(): cocoascript.NSError;
    setError(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1407533-sender
    sender(): cocoascript.NSURLAuthenticationChallengeSender;
    setSender(): void;
    //
    alloc():cocoascript.NSURLAuthenticationChallenge;
    //
    init():cocoascript.NSURLAuthenticationChallenge;
  }
}

declare const NSURLAuthenticationChallenge: cocoascript.NSURLAuthenticationChallenge;
declare namespace cocoascript {
  /**
   * An object that names a specific XPC listener.
   * doc://com.apple.documentation/documentation/foundation/nsxpclistenerendpoint
   */
  interface NSXPCListenerEndpoint extends NSObject {
    //
    alloc():cocoascript.NSXPCListenerEndpoint;
    //
    init():cocoascript.NSXPCListenerEndpoint;
  }
}

declare const NSXPCListenerEndpoint: cocoascript.NSXPCListenerEndpoint;
declare namespace cocoascript {
  /**
   * A formatter that provides localized representations of units and measurements.
   * doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter
   */
  interface NSMeasurementFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter/1642066-unitoptions
    unitOptions(): cocoascript.NSMeasurementFormatterUnitOptions;
    setUnitOptions(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter/1642067-unitstyle
    unitStyle(): cocoascript.NSFormattingUnitStyle;
    setUnitStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter/1642061-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter/1642056-numberformatter
    numberFormatter(): cocoascript.NSNumberFormatter;
    setNumberFormatter(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter/1642057-stringfrommeasurement
    stringFromMeasurement(measurement: cocoascript.NSMeasurement):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter/1642059-stringfromunit
    stringFromUnit(unit: cocoascript.NSUnit):cocoascript.NSString;
    //
    alloc():cocoascript.NSMeasurementFormatter;
    //
    init():cocoascript.NSMeasurementFormatter;
  }
}

declare const NSMeasurementFormatter: cocoascript.NSMeasurementFormatter;
declare namespace cocoascript {
  /**
   * A formatter that converts between dates and their ISO 8601 string representations.
   * doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatter
   */
  interface NSISO8601DateFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatter/1643324-formatoptions
    formatOptions(): cocoascript.NSISO8601DateFormatOptions;
    setFormatOptions(): void;
    // doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatter/1643185-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatter/1643114-init
    init():cocoascript.NSISO8601DateFormatter;
    // doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatter/1643076-stringfromdate
    stringFromDate(date: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatter/1643127-datefromstring
    dateFromString(string: cocoascript.NSString):cocoascript.NSDate;
    //
    alloc():cocoascript.NSISO8601DateFormatter;
    //
    init():cocoascript.NSISO8601DateFormatter;
  }
}

declare const NSISO8601DateFormatter: cocoascript.NSISO8601DateFormatter;
declare namespace cocoascript {
  /**
   * A unit of measure for mass.
   * doc://com.apple.documentation/documentation/foundation/nsunitmass
   */
  interface NSUnitMass extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1855996-kilograms
    kilograms(): cocoascript.NSUnitMass;
    setKilograms(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1855976-grams
    grams(): cocoascript.NSUnitMass;
    setGrams(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856063-decigrams
    decigrams(): cocoascript.NSUnitMass;
    setDecigrams(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856116-centigrams
    centigrams(): cocoascript.NSUnitMass;
    setCentigrams(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856060-milligrams
    milligrams(): cocoascript.NSUnitMass;
    setMilligrams(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856010-micrograms
    micrograms(): cocoascript.NSUnitMass;
    setMicrograms(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856078-nanograms
    nanograms(): cocoascript.NSUnitMass;
    setNanograms(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856035-picograms
    picograms(): cocoascript.NSUnitMass;
    setPicograms(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856056-ounces
    ounces(): cocoascript.NSUnitMass;
    setOunces(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856033-stones
    stones(): cocoascript.NSUnitMass;
    setStones(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856076-metrictons
    metricTons(): cocoascript.NSUnitMass;
    setMetricTons(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856081-shorttons
    shortTons(): cocoascript.NSUnitMass;
    setShortTons(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856037-carats
    carats(): cocoascript.NSUnitMass;
    setCarats(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856003-ouncestroy
    ouncesTroy(): cocoascript.NSUnitMass;
    setOuncesTroy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856027-slugs
    slugs(): cocoascript.NSUnitMass;
    setSlugs(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitmass/1856023-poundsmass
    poundsMass(): cocoascript.NSUnitMass;
    setPoundsMass(): void;
    //
    alloc():cocoascript.NSUnitMass;
    //
    init():cocoascript.NSUnitMass;
  }
}

declare const NSUnitMass: cocoascript.NSUnitMass;
declare namespace cocoascript {
  /**
   * A unit of measure for electric potential difference.
   * doc://com.apple.documentation/documentation/foundation/nsunitelectricpotentialdifference
   */
  interface NSUnitElectricPotentialDifference extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitelectricpotentialdifference/1855975-megavolts
    megavolts(): cocoascript.NSUnitElectricPotentialDifference;
    setMegavolts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectricpotentialdifference/1856086-kilovolts
    kilovolts(): cocoascript.NSUnitElectricPotentialDifference;
    setKilovolts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectricpotentialdifference/1856095-volts
    volts(): cocoascript.NSUnitElectricPotentialDifference;
    setVolts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectricpotentialdifference/1856094-millivolts
    millivolts(): cocoascript.NSUnitElectricPotentialDifference;
    setMillivolts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectricpotentialdifference/1856022-microvolts
    microvolts(): cocoascript.NSUnitElectricPotentialDifference;
    setMicrovolts(): void;
    //
    alloc():cocoascript.NSUnitElectricPotentialDifference;
    //
    init():cocoascript.NSUnitElectricPotentialDifference;
  }
}

declare const NSUnitElectricPotentialDifference: cocoascript.NSUnitElectricPotentialDifference;
declare namespace cocoascript {
  /**
   * A unit of measure for power.
   * doc://com.apple.documentation/documentation/foundation/nsunitpower
   */
  interface NSUnitPower extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitpower/1856100-terawatts
    terawatts(): cocoascript.NSUnitPower;
    setTerawatts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpower/1856108-gigawatts
    gigawatts(): cocoascript.NSUnitPower;
    setGigawatts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpower/1856073-megawatts
    megawatts(): cocoascript.NSUnitPower;
    setMegawatts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpower/1856084-kilowatts
    kilowatts(): cocoascript.NSUnitPower;
    setKilowatts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpower/1856075-watts
    watts(): cocoascript.NSUnitPower;
    setWatts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpower/1855984-milliwatts
    milliwatts(): cocoascript.NSUnitPower;
    setMilliwatts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpower/1856051-microwatts
    microwatts(): cocoascript.NSUnitPower;
    setMicrowatts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpower/1855999-nanowatts
    nanowatts(): cocoascript.NSUnitPower;
    setNanowatts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpower/1856104-picowatts
    picowatts(): cocoascript.NSUnitPower;
    setPicowatts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpower/1856043-femtowatts
    femtowatts(): cocoascript.NSUnitPower;
    setFemtowatts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpower/1690871-horsepower
    horsepower(): cocoascript.NSUnitPower;
    setHorsepower(): void;
    //
    alloc():cocoascript.NSUnitPower;
    //
    init():cocoascript.NSUnitPower;
  }
}

declare const NSUnitPower: cocoascript.NSUnitPower;
declare namespace cocoascript {
  /**
   * A unit of measure for electric charge.
   * doc://com.apple.documentation/documentation/foundation/nsunitelectriccharge
   */
  interface NSUnitElectricCharge extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccharge/1856032-coulombs
    coulombs(): cocoascript.NSUnitElectricCharge;
    setCoulombs(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccharge/1856020-megaamperehours
    megaampereHours(): cocoascript.NSUnitElectricCharge;
    setMegaampereHours(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccharge/1856045-kiloamperehours
    kiloampereHours(): cocoascript.NSUnitElectricCharge;
    setKiloampereHours(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccharge/1856117-amperehours
    ampereHours(): cocoascript.NSUnitElectricCharge;
    setAmpereHours(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccharge/1856102-milliamperehours
    milliampereHours(): cocoascript.NSUnitElectricCharge;
    setMilliampereHours(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccharge/1856006-microamperehours
    microampereHours(): cocoascript.NSUnitElectricCharge;
    setMicroampereHours(): void;
    //
    alloc():cocoascript.NSUnitElectricCharge;
    //
    init():cocoascript.NSUnitElectricCharge;
  }
}

declare const NSUnitElectricCharge: cocoascript.NSUnitElectricCharge;
declare namespace cocoascript {
  /**
   * A unit of measure for area.
   * doc://com.apple.documentation/documentation/foundation/nsunitarea
   */
  interface NSUnitArea extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856008-squaremegameters
    squareMegameters(): cocoascript.NSUnitArea;
    setSquareMegameters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856053-squarekilometers
    squareKilometers(): cocoascript.NSUnitArea;
    setSquareKilometers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1855985-squaremeters
    squareMeters(): cocoascript.NSUnitArea;
    setSquareMeters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856030-squarecentimeters
    squareCentimeters(): cocoascript.NSUnitArea;
    setSquareCentimeters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856039-squaremillimeters
    squareMillimeters(): cocoascript.NSUnitArea;
    setSquareMillimeters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856041-squaremicrometers
    squareMicrometers(): cocoascript.NSUnitArea;
    setSquareMicrometers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856072-squarenanometers
    squareNanometers(): cocoascript.NSUnitArea;
    setSquareNanometers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856067-squareinches
    squareInches(): cocoascript.NSUnitArea;
    setSquareInches(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856014-squarefeet
    squareFeet(): cocoascript.NSUnitArea;
    setSquareFeet(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856070-squareyards
    squareYards(): cocoascript.NSUnitArea;
    setSquareYards(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856097-squaremiles
    squareMiles(): cocoascript.NSUnitArea;
    setSquareMiles(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856099-acres
    acres(): cocoascript.NSUnitArea;
    setAcres(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856064-ares
    ares(): cocoascript.NSUnitArea;
    setAres(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitarea/1856066-hectares
    hectares(): cocoascript.NSUnitArea;
    setHectares(): void;
    //
    alloc():cocoascript.NSUnitArea;
    //
    init():cocoascript.NSUnitArea;
  }
}

declare const NSUnitArea: cocoascript.NSUnitArea;
declare namespace cocoascript {
  /**
   * A unit of measure for electric resistance.
   * doc://com.apple.documentation/documentation/foundation/nsunitelectricresistance
   */
  interface NSUnitElectricResistance extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitelectricresistance/1856009-megaohms
    megaohms(): cocoascript.NSUnitElectricResistance;
    setMegaohms(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectricresistance/1855981-kiloohms
    kiloohms(): cocoascript.NSUnitElectricResistance;
    setKiloohms(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectricresistance/1856110-ohms
    ohms(): cocoascript.NSUnitElectricResistance;
    setOhms(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectricresistance/1856049-milliohms
    milliohms(): cocoascript.NSUnitElectricResistance;
    setMilliohms(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectricresistance/1856031-microohms
    microohms(): cocoascript.NSUnitElectricResistance;
    setMicroohms(): void;
    //
    alloc():cocoascript.NSUnitElectricResistance;
    //
    init():cocoascript.NSUnitElectricResistance;
  }
}

declare const NSUnitElectricResistance: cocoascript.NSUnitElectricResistance;
declare namespace cocoascript {
  /**
   * A unit of measure for temperature.
   * doc://com.apple.documentation/documentation/foundation/nsunittemperature
   */
  interface NSUnitTemperature extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunittemperature/1690766-kelvin
    kelvin(): cocoascript.NSUnitTemperature;
    setKelvin(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunittemperature/1690835-celsius
    celsius(): cocoascript.NSUnitTemperature;
    setCelsius(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunittemperature/1690842-fahrenheit
    fahrenheit(): cocoascript.NSUnitTemperature;
    setFahrenheit(): void;
    //
    alloc():cocoascript.NSUnitTemperature;
    //
    init():cocoascript.NSUnitTemperature;
  }
}

declare const NSUnitTemperature: cocoascript.NSUnitTemperature;
declare namespace cocoascript {
  /**
   * A unit of measure for acceleration.
   * doc://com.apple.documentation/documentation/foundation/nsunitacceleration
   */
  interface NSUnitAcceleration extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitacceleration/1856015-meterspersecondsquared
    metersPerSecondSquared(): cocoascript.NSUnitAcceleration;
    setMetersPerSecondSquared(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitacceleration/1690681-gravity
    gravity(): cocoascript.NSUnitAcceleration;
    setGravity(): void;
    //
    alloc():cocoascript.NSUnitAcceleration;
    //
    init():cocoascript.NSUnitAcceleration;
  }
}

declare const NSUnitAcceleration: cocoascript.NSUnitAcceleration;
declare namespace cocoascript {
  /**
   * A unit of measure for rotation.
   * doc://com.apple.documentation/documentation/foundation/nsunitangle
   */
  interface NSUnitAngle extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitangle/1856083-degrees
    degrees(): cocoascript.NSUnitAngle;
    setDegrees(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitangle/1856069-arcminutes
    arcMinutes(): cocoascript.NSUnitAngle;
    setArcMinutes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitangle/1856114-arcseconds
    arcSeconds(): cocoascript.NSUnitAngle;
    setArcSeconds(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitangle/1856062-radians
    radians(): cocoascript.NSUnitAngle;
    setRadians(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitangle/1855988-gradians
    gradians(): cocoascript.NSUnitAngle;
    setGradians(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitangle/1855992-revolutions
    revolutions(): cocoascript.NSUnitAngle;
    setRevolutions(): void;
    //
    alloc():cocoascript.NSUnitAngle;
    //
    init():cocoascript.NSUnitAngle;
  }
}

declare const NSUnitAngle: cocoascript.NSUnitAngle;
declare namespace cocoascript {
  /**
   * A unit of measure for duration of time.
   * doc://com.apple.documentation/documentation/foundation/nsunitduration
   */
  interface NSUnitDuration extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/1856005-seconds
    seconds(): cocoascript.NSUnitDuration;
    setSeconds(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/1856088-minutes
    minutes(): cocoascript.NSUnitDuration;
    setMinutes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/1855994-hours
    hours(): cocoascript.NSUnitDuration;
    setHours(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/3172538-microseconds
    microseconds(): cocoascript.NSUnitDuration;
    setMicroseconds(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/3172539-milliseconds
    milliseconds(): cocoascript.NSUnitDuration;
    setMilliseconds(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/3172540-nanoseconds
    nanoseconds(): cocoascript.NSUnitDuration;
    setNanoseconds(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/3172541-picoseconds
    picoseconds(): cocoascript.NSUnitDuration;
    setPicoseconds(): void;
    //
    alloc():cocoascript.NSUnitDuration;
    //
    init():cocoascript.NSUnitDuration;
  }
}

declare const NSUnitDuration: cocoascript.NSUnitDuration;
declare namespace cocoascript {
  /**
   * A unit of measure for an amount-of-substance fraction.
   * doc://com.apple.documentation/documentation/foundation/nsunitdispersion
   */
  interface NSUnitDispersion extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitdispersion/1690700-partspermillion
    partsPerMillion(): cocoascript.NSUnitDispersion;
    setPartsPerMillion(): void;
    //
    alloc():cocoascript.NSUnitDispersion;
    //
    init():cocoascript.NSUnitDispersion;
  }
}

declare const NSUnitDispersion: cocoascript.NSUnitDispersion;
declare namespace cocoascript {
  /**
   * A unit of measure for fuel efficiency.
   * doc://com.apple.documentation/documentation/foundation/nsunitfuelefficiency
   */
  interface NSUnitFuelEfficiency extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitfuelefficiency/1856089-milesperimperialgallon
    milesPerImperialGallon(): cocoascript.NSUnitFuelEfficiency;
    setMilesPerImperialGallon(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitfuelefficiency/1856054-litersper100kilometers
    litersPer100Kilometers(): cocoascript.NSUnitFuelEfficiency;
    setLitersPer100Kilometers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitfuelefficiency/1856085-milespergallon
    milesPerGallon(): cocoascript.NSUnitFuelEfficiency;
    setMilesPerGallon(): void;
    //
    alloc():cocoascript.NSUnitFuelEfficiency;
    //
    init():cocoascript.NSUnitFuelEfficiency;
  }
}

declare const NSUnitFuelEfficiency: cocoascript.NSUnitFuelEfficiency;
declare namespace cocoascript {
  /**
   * A unit of measure for volume.
   * doc://com.apple.documentation/documentation/foundation/nsunitvolume
   */
  interface NSUnitVolume extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856080-megaliters
    megaliters(): cocoascript.NSUnitVolume;
    setMegaliters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856068-kiloliters
    kiloliters(): cocoascript.NSUnitVolume;
    setKiloliters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856011-liters
    liters(): cocoascript.NSUnitVolume;
    setLiters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856091-deciliters
    deciliters(): cocoascript.NSUnitVolume;
    setDeciliters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856040-centiliters
    centiliters(): cocoascript.NSUnitVolume;
    setCentiliters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856071-milliliters
    milliliters(): cocoascript.NSUnitVolume;
    setMilliliters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856034-cubickilometers
    cubicKilometers(): cocoascript.NSUnitVolume;
    setCubicKilometers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856029-cubicmeters
    cubicMeters(): cocoascript.NSUnitVolume;
    setCubicMeters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856048-cubicdecimeters
    cubicDecimeters(): cocoascript.NSUnitVolume;
    setCubicDecimeters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856112-cubiccentimeters
    cubicCentimeters(): cocoascript.NSUnitVolume;
    setCubicCentimeters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856013-cubicmillimeters
    cubicMillimeters(): cocoascript.NSUnitVolume;
    setCubicMillimeters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856026-cubicinches
    cubicInches(): cocoascript.NSUnitVolume;
    setCubicInches(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856017-cubicfeet
    cubicFeet(): cocoascript.NSUnitVolume;
    setCubicFeet(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856107-cubicyards
    cubicYards(): cocoascript.NSUnitVolume;
    setCubicYards(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856002-cubicmiles
    cubicMiles(): cocoascript.NSUnitVolume;
    setCubicMiles(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1855978-acrefeet
    acreFeet(): cocoascript.NSUnitVolume;
    setAcreFeet(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856025-bushels
    bushels(): cocoascript.NSUnitVolume;
    setBushels(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1855977-teaspoons
    teaspoons(): cocoascript.NSUnitVolume;
    setTeaspoons(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1855991-tablespoons
    tablespoons(): cocoascript.NSUnitVolume;
    setTablespoons(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856038-fluidounces
    fluidOunces(): cocoascript.NSUnitVolume;
    setFluidOunces(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1855982-cups
    cups(): cocoascript.NSUnitVolume;
    setCups(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856059-pints
    pints(): cocoascript.NSUnitVolume;
    setPints(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856055-quarts
    quarts(): cocoascript.NSUnitVolume;
    setQuarts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856105-gallons
    gallons(): cocoascript.NSUnitVolume;
    setGallons(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856103-imperialteaspoons
    imperialTeaspoons(): cocoascript.NSUnitVolume;
    setImperialTeaspoons(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1855989-imperialtablespoons
    imperialTablespoons(): cocoascript.NSUnitVolume;
    setImperialTablespoons(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856101-imperialfluidounces
    imperialFluidOunces(): cocoascript.NSUnitVolume;
    setImperialFluidOunces(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1855979-imperialpints
    imperialPints(): cocoascript.NSUnitVolume;
    setImperialPints(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1855971-imperialquarts
    imperialQuarts(): cocoascript.NSUnitVolume;
    setImperialQuarts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1855997-imperialgallons
    imperialGallons(): cocoascript.NSUnitVolume;
    setImperialGallons(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitvolume/1856000-metriccups
    metricCups(): cocoascript.NSUnitVolume;
    setMetricCups(): void;
    //
    alloc():cocoascript.NSUnitVolume;
    //
    init():cocoascript.NSUnitVolume;
  }
}

declare const NSUnitVolume: cocoascript.NSUnitVolume;
declare namespace cocoascript {
  /**
   * A unit of measure for concentration of mass.
   * doc://com.apple.documentation/documentation/foundation/nsunitconcentrationmass
   */
  interface NSUnitConcentrationMass extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitconcentrationmass/1856019-gramsperliter
    gramsPerLiter(): cocoascript.NSUnitConcentrationMass;
    setGramsPerLiter(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitconcentrationmass/1856024-milligramsperdeciliter
    milligramsPerDeciliter(): cocoascript.NSUnitConcentrationMass;
    setMilligramsPerDeciliter(): void;
    //
    alloc():cocoascript.NSUnitConcentrationMass;
    //
    init():cocoascript.NSUnitConcentrationMass;
  }
}

declare const NSUnitConcentrationMass: cocoascript.NSUnitConcentrationMass;
declare namespace cocoascript {
  /**
   * A unit of measure for electric current.
   * doc://com.apple.documentation/documentation/foundation/nsunitelectriccurrent
   */
  interface NSUnitElectricCurrent extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccurrent/1855980-megaamperes
    megaamperes(): cocoascript.NSUnitElectricCurrent;
    setMegaamperes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccurrent/1856001-kiloamperes
    kiloamperes(): cocoascript.NSUnitElectricCurrent;
    setKiloamperes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccurrent/1855973-amperes
    amperes(): cocoascript.NSUnitElectricCurrent;
    setAmperes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccurrent/1856058-milliamperes
    milliamperes(): cocoascript.NSUnitElectricCurrent;
    setMilliamperes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccurrent/1856047-microamperes
    microamperes(): cocoascript.NSUnitElectricCurrent;
    setMicroamperes(): void;
    //
    alloc():cocoascript.NSUnitElectricCurrent;
    //
    init():cocoascript.NSUnitElectricCurrent;
  }
}

declare const NSUnitElectricCurrent: cocoascript.NSUnitElectricCurrent;
declare namespace cocoascript {
  /**
   * An abstract class representing a dimensional unit of measure.
   * doc://com.apple.documentation/documentation/foundation/nsdimension
   */
  interface NSDimension extends NSUnit {
    // doc://com.apple.documentation/documentation/foundation/nsdimension/1823633-initwithsymbol
    initWithSymbol_converter(symbol: cocoascript.NSString, converter: cocoascript.NSUnitConverter):cocoascript.NSDimension;
    // doc://com.apple.documentation/documentation/foundation/nsdimension/1823516-converter
    converter(): cocoascript.NSUnitConverter;
    setConverter(): void;
    //
    alloc():cocoascript.NSDimension;
    //
    init():cocoascript.NSDimension;
  }
}

declare const NSDimension: cocoascript.NSDimension;
declare namespace cocoascript {
  /**
   * A unit of measure for pressure.
   * doc://com.apple.documentation/documentation/foundation/nsunitpressure
   */
  interface NSUnitPressure extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1855983-gigapascals
    gigapascals(): cocoascript.NSUnitPressure;
    setGigapascals(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856115-megapascals
    megapascals(): cocoascript.NSUnitPressure;
    setMegapascals(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856057-kilopascals
    kilopascals(): cocoascript.NSUnitPressure;
    setKilopascals(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856111-hectopascals
    hectopascals(): cocoascript.NSUnitPressure;
    setHectopascals(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856074-inchesofmercury
    inchesOfMercury(): cocoascript.NSUnitPressure;
    setInchesOfMercury(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856109-bars
    bars(): cocoascript.NSUnitPressure;
    setBars(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856093-millibars
    millibars(): cocoascript.NSUnitPressure;
    setMillibars(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856052-millimetersofmercury
    millimetersOfMercury(): cocoascript.NSUnitPressure;
    setMillimetersOfMercury(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856096-newtonspermeterssquared
    newtonsPerMetersSquared(): cocoascript.NSUnitPressure;
    setNewtonsPerMetersSquared(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856077-poundsforcepersquareinch
    poundsForcePerSquareInch(): cocoascript.NSUnitPressure;
    setPoundsForcePerSquareInch(): void;
    //
    alloc():cocoascript.NSUnitPressure;
    //
    init():cocoascript.NSUnitPressure;
  }
}

declare const NSUnitPressure: cocoascript.NSUnitPressure;
declare namespace cocoascript {
  /**
   * A unit of measure for frequency.
   * doc://com.apple.documentation/documentation/foundation/nsunitfrequency
   */
  interface NSUnitFrequency extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitfrequency/1690717-terahertz
    terahertz(): cocoascript.NSUnitFrequency;
    setTerahertz(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitfrequency/1690667-gigahertz
    gigahertz(): cocoascript.NSUnitFrequency;
    setGigahertz(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitfrequency/1690707-megahertz
    megahertz(): cocoascript.NSUnitFrequency;
    setMegahertz(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitfrequency/1690767-kilohertz
    kilohertz(): cocoascript.NSUnitFrequency;
    setKilohertz(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitfrequency/1690670-hertz
    hertz(): cocoascript.NSUnitFrequency;
    setHertz(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitfrequency/1690882-millihertz
    millihertz(): cocoascript.NSUnitFrequency;
    setMillihertz(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitfrequency/1690838-microhertz
    microhertz(): cocoascript.NSUnitFrequency;
    setMicrohertz(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitfrequency/1690663-nanohertz
    nanohertz(): cocoascript.NSUnitFrequency;
    setNanohertz(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitfrequency/3172542-framespersecond
    framesPerSecond(): cocoascript.NSUnitFrequency;
    setFramesPerSecond(): void;
    //
    alloc():cocoascript.NSUnitFrequency;
    //
    init():cocoascript.NSUnitFrequency;
  }
}

declare const NSUnitFrequency: cocoascript.NSUnitFrequency;
declare namespace cocoascript {
  /**
   * A unit of measure for energy.
   * doc://com.apple.documentation/documentation/foundation/nsunitenergy
   */
  interface NSUnitEnergy extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitenergy/1856113-kilojoules
    kilojoules(): cocoascript.NSUnitEnergy;
    setKilojoules(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitenergy/1855987-joules
    joules(): cocoascript.NSUnitEnergy;
    setJoules(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitenergy/1856028-kilocalories
    kilocalories(): cocoascript.NSUnitEnergy;
    setKilocalories(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitenergy/1855990-calories
    calories(): cocoascript.NSUnitEnergy;
    setCalories(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitenergy/1856092-kilowatthours
    kilowattHours(): cocoascript.NSUnitEnergy;
    setKilowattHours(): void;
    //
    alloc():cocoascript.NSUnitEnergy;
    //
    init():cocoascript.NSUnitEnergy;
  }
}

declare const NSUnitEnergy: cocoascript.NSUnitEnergy;
declare namespace cocoascript {
  /**
   * A unit of measure for speed.
   * doc://com.apple.documentation/documentation/foundation/nsunitspeed
   */
  interface NSUnitSpeed extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitspeed/1856079-meterspersecond
    metersPerSecond(): cocoascript.NSUnitSpeed;
    setMetersPerSecond(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitspeed/1856044-kilometersperhour
    kilometersPerHour(): cocoascript.NSUnitSpeed;
    setKilometersPerHour(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitspeed/1856098-milesperhour
    milesPerHour(): cocoascript.NSUnitSpeed;
    setMilesPerHour(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitspeed/1856050-knots
    knots(): cocoascript.NSUnitSpeed;
    setKnots(): void;
    //
    alloc():cocoascript.NSUnitSpeed;
    //
    init():cocoascript.NSUnitSpeed;
  }
}

declare const NSUnitSpeed: cocoascript.NSUnitSpeed;
declare namespace cocoascript {
  /**
   * A unit of measure for length.
   * doc://com.apple.documentation/documentation/foundation/nsunitlength
   */
  interface NSUnitLength extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856036-megameters
    megameters(): cocoascript.NSUnitLength;
    setMegameters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856106-kilometers
    kilometers(): cocoascript.NSUnitLength;
    setKilometers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1855970-hectometers
    hectometers(): cocoascript.NSUnitLength;
    setHectometers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856042-decameters
    decameters(): cocoascript.NSUnitLength;
    setDecameters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1855995-meters
    meters(): cocoascript.NSUnitLength;
    setMeters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856007-decimeters
    decimeters(): cocoascript.NSUnitLength;
    setDecimeters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856082-centimeters
    centimeters(): cocoascript.NSUnitLength;
    setCentimeters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856046-millimeters
    millimeters(): cocoascript.NSUnitLength;
    setMillimeters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1855998-micrometers
    micrometers(): cocoascript.NSUnitLength;
    setMicrometers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856004-nanometers
    nanometers(): cocoascript.NSUnitLength;
    setNanometers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856012-picometers
    picometers(): cocoascript.NSUnitLength;
    setPicometers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856018-inches
    inches(): cocoascript.NSUnitLength;
    setInches(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1855972-feet
    feet(): cocoascript.NSUnitLength;
    setFeet(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1855993-yards
    yards(): cocoascript.NSUnitLength;
    setYards(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856016-miles
    miles(): cocoascript.NSUnitLength;
    setMiles(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856061-scandinavianmiles
    scandinavianMiles(): cocoascript.NSUnitLength;
    setScandinavianMiles(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1855974-lightyears
    lightyears(): cocoascript.NSUnitLength;
    setLightyears(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1855986-nauticalmiles
    nauticalMiles(): cocoascript.NSUnitLength;
    setNauticalMiles(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856090-fathoms
    fathoms(): cocoascript.NSUnitLength;
    setFathoms(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856065-furlongs
    furlongs(): cocoascript.NSUnitLength;
    setFurlongs(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856087-astronomicalunits
    astronomicalUnits(): cocoascript.NSUnitLength;
    setAstronomicalUnits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitlength/1856021-parsecs
    parsecs(): cocoascript.NSUnitLength;
    setParsecs(): void;
    //
    alloc():cocoascript.NSUnitLength;
    //
    init():cocoascript.NSUnitLength;
  }
}

declare const NSUnitLength: cocoascript.NSUnitLength;
declare namespace cocoascript {
  /**
   * A description of how to convert between units using a linear equation.
   * doc://com.apple.documentation/documentation/foundation/nsunitconverterlinear
   */
  interface NSUnitConverterLinear extends NSUnitConverter {
    // doc://com.apple.documentation/documentation/foundation/nsunitconverterlinear/1823683-coefficient
    coefficient(): number;
    setCoefficient(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitconverterlinear/1823598-constant
    constant(): number;
    setConstant(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitconverterlinear/1823611-initwithcoefficient
    initWithCoefficient(coefficient: number):cocoascript.NSUnitConverterLinear;
    // doc://com.apple.documentation/documentation/foundation/nsunitconverterlinear/1823577-initwithcoefficient
    initWithCoefficient_constant(coefficient: number, constant: number):cocoascript.NSUnitConverterLinear;
    //
    alloc():cocoascript.NSUnitConverterLinear;
    //
    init():cocoascript.NSUnitConverterLinear;
  }
}

declare const NSUnitConverterLinear: cocoascript.NSUnitConverterLinear;
declare namespace cocoascript {
  /**
   * A unit of measure for luminance.
   * doc://com.apple.documentation/documentation/foundation/nsunitilluminance
   */
  interface NSUnitIlluminance extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitilluminance/1823716-lux
    lux(): cocoascript.NSUnitIlluminance;
    setLux(): void;
    //
    alloc():cocoascript.NSUnitIlluminance;
    //
    init():cocoascript.NSUnitIlluminance;
  }
}

declare const NSUnitIlluminance: cocoascript.NSUnitIlluminance;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage
   */
  interface NSUnitInformationStorage extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172544-bits
    bits(): cocoascript.NSUnitInformationStorage;
    setBits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172545-bytes
    bytes(): cocoascript.NSUnitInformationStorage;
    setBytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172546-exabits
    exabits(): cocoascript.NSUnitInformationStorage;
    setExabits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172547-exabytes
    exabytes(): cocoascript.NSUnitInformationStorage;
    setExabytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172548-exbibits
    exbibits(): cocoascript.NSUnitInformationStorage;
    setExbibits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172549-exbibytes
    exbibytes(): cocoascript.NSUnitInformationStorage;
    setExbibytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172550-gibibits
    gibibits(): cocoascript.NSUnitInformationStorage;
    setGibibits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172551-gibibytes
    gibibytes(): cocoascript.NSUnitInformationStorage;
    setGibibytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172552-gigabits
    gigabits(): cocoascript.NSUnitInformationStorage;
    setGigabits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172553-gigabytes
    gigabytes(): cocoascript.NSUnitInformationStorage;
    setGigabytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172554-kibibits
    kibibits(): cocoascript.NSUnitInformationStorage;
    setKibibits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172555-kibibytes
    kibibytes(): cocoascript.NSUnitInformationStorage;
    setKibibytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172556-kilobits
    kilobits(): cocoascript.NSUnitInformationStorage;
    setKilobits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172557-kilobytes
    kilobytes(): cocoascript.NSUnitInformationStorage;
    setKilobytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172558-mebibits
    mebibits(): cocoascript.NSUnitInformationStorage;
    setMebibits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172559-mebibytes
    mebibytes(): cocoascript.NSUnitInformationStorage;
    setMebibytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172560-megabits
    megabits(): cocoascript.NSUnitInformationStorage;
    setMegabits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172561-megabytes
    megabytes(): cocoascript.NSUnitInformationStorage;
    setMegabytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172562-nibbles
    nibbles(): cocoascript.NSUnitInformationStorage;
    setNibbles(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172563-pebibits
    pebibits(): cocoascript.NSUnitInformationStorage;
    setPebibits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172564-pebibytes
    pebibytes(): cocoascript.NSUnitInformationStorage;
    setPebibytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172565-petabits
    petabits(): cocoascript.NSUnitInformationStorage;
    setPetabits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172566-petabytes
    petabytes(): cocoascript.NSUnitInformationStorage;
    setPetabytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172567-tebibits
    tebibits(): cocoascript.NSUnitInformationStorage;
    setTebibits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172568-tebibytes
    tebibytes(): cocoascript.NSUnitInformationStorage;
    setTebibytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172569-terabits
    terabits(): cocoascript.NSUnitInformationStorage;
    setTerabits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172570-terabytes
    terabytes(): cocoascript.NSUnitInformationStorage;
    setTerabytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172571-yobibits
    yobibits(): cocoascript.NSUnitInformationStorage;
    setYobibits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172572-yobibytes
    yobibytes(): cocoascript.NSUnitInformationStorage;
    setYobibytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172573-yottabits
    yottabits(): cocoascript.NSUnitInformationStorage;
    setYottabits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172574-yottabytes
    yottabytes(): cocoascript.NSUnitInformationStorage;
    setYottabytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172575-zebibits
    zebibits(): cocoascript.NSUnitInformationStorage;
    setZebibits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172576-zebibytes
    zebibytes(): cocoascript.NSUnitInformationStorage;
    setZebibytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172577-zettabits
    zettabits(): cocoascript.NSUnitInformationStorage;
    setZettabits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitinformationstorage/3172578-zettabytes
    zettabytes(): cocoascript.NSUnitInformationStorage;
    setZettabytes(): void;
    //
    alloc():cocoascript.NSUnitInformationStorage;
    //
    init():cocoascript.NSUnitInformationStorage;
  }
}

declare const NSUnitInformationStorage: cocoascript.NSUnitInformationStorage;
// doc://com.apple.documentation/documentation/foundation/nszeropoint
declare const NSZeroPoint: cocoascript.NSPoint;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nspointarray
  type NSPointArray = cocoascript.NSPoint;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nssizearray
  type NSSizeArray = cocoascript.NSSize;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nssizepointer
  type NSSizePointer = cocoascript.NSSize;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsexceptionname
  type NSExceptionName = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemhasunresolvedconflictskey
declare const NSURLUbiquitousItemHasUnresolvedConflictsKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurltagnameskey
declare const NSURLTagNamesKey: cocoascript.NSURLResourceKey;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsitemprovidercompletionhandler
  type NSItemProviderCompletionHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsitemproviderloadhandler
  type NSItemProviderLoadHandler = cocoascript.NSDictionary;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsitemproviderfileoptions
  type NSItemProviderFileOptions = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsitemproviderrepresentationvisibility
  type NSItemProviderRepresentationVisibility = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsitemprovidererrorcode
  type NSItemProviderErrorCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A notification dispatch mechanism that enables the broadcast of notifications across task boundaries.
   * doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter
   */
  interface NSDistributedNotificationCenter extends NSNotificationCenter {
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1414151-addobserver
    addObserver_selector_name_object(observer: cocoascript.NSDistributedNotificationCenter, aSelector: cocoascript.SEL, aName: cocoascript.NSNotificationName, anObject: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1414136-addobserver
    addObserver_selector_name_object_suspensionBehavior(observer: cocoascript.NSDistributedNotificationCenter, selector: cocoascript.SEL, name: cocoascript.NSNotificationName, object: cocoascript.NSString, suspensionBehavior: cocoascript.NSNotificationSuspensionBehavior):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1416236-removeobserver
    removeObserver_name_object(observer: cocoascript.NSDistributedNotificationCenter, aName: cocoascript.NSNotificationName, anObject: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1410991-postnotificationname
    postNotificationName_object(aName: cocoascript.NSNotificationName, anObject: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1416995-postnotificationname
    postNotificationName_object_userInfo(aName: cocoascript.NSNotificationName, anObject: cocoascript.NSString, aUserInfo: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1418360-postnotificationname
    postNotificationName_object_userInfo_deliverImmediately(name: cocoascript.NSNotificationName, object: cocoascript.NSString, userInfo: cocoascript.NSDictionary, deliverImmediately: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1417581-postnotificationname
    postNotificationName_object_userInfo_options(name: cocoascript.NSNotificationName, object: cocoascript.NSString, userInfo: cocoascript.NSDictionary, options: cocoascript.NSDistributedNotificationOptions):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1407301-suspended
    suspended(): cocoascript.BOOL;
    setSuspended(): void;
    //
    alloc():cocoascript.NSDistributedNotificationCenter;
    //
    init():cocoascript.NSDistributedNotificationCenter;
  }
}

declare const NSDistributedNotificationCenter: cocoascript.NSDistributedNotificationCenter;
declare namespace cocoascript {
  /**
   * A notification center buffer.
   * doc://com.apple.documentation/documentation/foundation/nsnotificationqueue
   */
  interface NSNotificationQueue extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsnotificationqueue/1410062-initwithnotificationcenter
    initWithNotificationCenter(notificationCenter: cocoascript.NSNotificationCenter):cocoascript.NSNotificationQueue;
    // doc://com.apple.documentation/documentation/foundation/nsnotificationqueue/1412392-defaultqueue
    defaultQueue(): cocoascript.NSNotificationQueue;
    setDefaultQueue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnotificationqueue/1413873-enqueuenotification
    enqueueNotification_postingStyle_coalesceMask_forModes(notification: cocoascript.NSNotification, postingStyle: cocoascript.NSPostingStyle, coalesceMask: cocoascript.NSNotificationCoalescing, modes: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsnotificationqueue/1416340-enqueuenotification
    enqueueNotification_postingStyle(notification: cocoascript.NSNotification, postingStyle: cocoascript.NSPostingStyle):void;
    // doc://com.apple.documentation/documentation/foundation/nsnotificationqueue/1416688-dequeuenotificationsmatching
    dequeueNotificationsMatching_coalesceMask(notification: cocoascript.NSNotification, coalesceMask: cocoascript.NSUInteger):void;
    //
    alloc():cocoascript.NSNotificationQueue;
    //
    init():cocoascript.NSNotificationQueue;
  }
}

declare const NSNotificationQueue: cocoascript.NSNotificationQueue;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsrectarray
  type NSRectArray = cocoascript.NSRect;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsrectpointer
  type NSRectPointer = cocoascript.NSRect;
}
// doc://com.apple.documentation/documentation/foundation/nsgenericexception
declare const NSGenericException: cocoascript.NSExceptionName;
declare namespace cocoascript {
  /**
   * Analyze natural language text to tag part of speech and lexical class, identify names, perform lemmatization, and determine the language and script.
   * doc://com.apple.documentation/documentation/foundation/nslinguistictagger
   */
  interface NSLinguisticTagger extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1414576-initwithtagschemes
    initWithTagSchemes_options(tagSchemes: cocoascript.NSLinguisticTagScheme, opts: cocoascript.NSUInteger):cocoascript.NSLinguisticTagger;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1407750-string
    string(): cocoascript.NSString;
    setString(): void;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1409018-tagschemes
    tagSchemes(): cocoascript.NSLinguisticTagScheme;
    setTagSchemes(): void;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/2875112-dominantlanguage
    dominantLanguage(): cocoascript.NSString;
    setDominantLanguage(): void;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1415566-orthographyatindex
    orthographyAtIndex_effectiveRange(charIndex: cocoascript.NSUInteger, effectiveRange: cocoascript.NSRangePointer):cocoascript.NSOrthography;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1409101-setorthography
    setOrthography_range(orthography: cocoascript.NSOrthography, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/2875124-enumeratetagsinrange
    enumerateTagsInRange_unit_scheme_options_usingBlock(range: cocoascript.NSRange, unit: cocoascript.NSLinguisticTaggerUnit, scheme: cocoascript.NSLinguisticTagScheme, options: cocoascript.NSLinguisticTaggerOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1410036-enumeratetagsinrange
    enumerateTagsInRange_scheme_options_usingBlock(range: cocoascript.NSRange, tagScheme: cocoascript.NSLinguisticTagScheme, opts: cocoascript.NSLinguisticTaggerOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/2875123-tagatindex
    tagAtIndex_unit_scheme_tokenRange(charIndex: cocoascript.NSUInteger, unit: cocoascript.NSLinguisticTaggerUnit, scheme: cocoascript.NSLinguisticTagScheme, tokenRange: cocoascript.NSRangePointer):cocoascript.NSLinguisticTag;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1411834-tagatindex
    tagAtIndex_scheme_tokenRange_sentenceRange(charIndex: cocoascript.NSUInteger, scheme: cocoascript.NSLinguisticTagScheme, tokenRange: cocoascript.NSRangePointer, sentenceRange: cocoascript.NSRangePointer):cocoascript.NSLinguisticTag;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/2875120-tagsinrange
    tagsInRange_unit_scheme_options_tokenRanges(range: cocoascript.NSRange, unit: cocoascript.NSLinguisticTaggerUnit, scheme: cocoascript.NSLinguisticTagScheme, options: cocoascript.NSLinguisticTaggerOptions, tokenRanges: cocoascript.NSValue):cocoascript.NSLinguisticTag;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1417826-tagsinrange
    tagsInRange_scheme_options_tokenRanges(range: cocoascript.NSRange, tagScheme: cocoascript.NSString, opts: cocoascript.NSLinguisticTaggerOptions, tokenRanges: cocoascript.NSValue):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/2875122-tokenrangeatindex
    tokenRangeAtIndex_unit(charIndex: cocoascript.NSUInteger, unit: cocoascript.NSLinguisticTaggerUnit):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1415532-sentencerangeforrange
    sentenceRangeForRange(range: cocoascript.NSRange):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1408537-possibletagsatindex
    possibleTagsAtIndex_scheme_tokenRange_sentenceRange_scores(charIndex: cocoascript.NSUInteger, tagScheme: cocoascript.NSString, tokenRange: cocoascript.NSRangePointer, sentenceRange: cocoascript.NSRangePointer, scores: cocoascript.NSValue):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1417623-stringeditedinrange
    stringEditedInRange_changeInLength(newRange: cocoascript.NSRange, delta: cocoascript.NSInteger):void;
    //
    alloc():cocoascript.NSLinguisticTagger;
    //
    init():cocoascript.NSLinguisticTagger;
  }
}

declare const NSLinguisticTagger: cocoascript.NSLinguisticTagger;
declare namespace cocoascript {
  /**
   * A specialized regular expression object that matches natural language text for predefined data patterns.
   * doc://com.apple.documentation/documentation/foundation/nsdatadetector
   */
  interface NSDataDetector extends NSRegularExpression {
    // doc://com.apple.documentation/documentation/foundation/nsdatadetector/1409829-initwithtypes
    initWithTypes_error(checkingTypes: cocoascript.NSTextCheckingTypes, error: cocoascript.NSError):cocoascript.NSDataDetector;
    // doc://com.apple.documentation/documentation/foundation/nsdatadetector/1412372-checkingtypes
    checkingTypes(): cocoascript.NSTextCheckingTypes;
    setCheckingTypes(): void;
    //
    alloc():cocoascript.NSDataDetector;
    //
    init():cocoascript.NSDataDetector;
  }
}

declare const NSDataDetector: cocoascript.NSDataDetector;
// doc://com.apple.documentation/documentation/foundation/nsnotfound
declare const NSNotFound: cocoascript.NSInteger;
declare namespace cocoascript {
  /**
   * A lock that can be associated with specific, user-defined conditions.
   * doc://com.apple.documentation/documentation/foundation/nsconditionlock
   */
  interface NSConditionLock extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1413018-initwithcondition
    initWithCondition(condition: cocoascript.NSInteger):cocoascript.NSConditionLock;
    // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1408807-condition
    condition(): cocoascript.NSInteger;
    setCondition(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1418253-lockbeforedate
    lockBeforeDate(limit: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1417832-lockwhencondition
    lockWhenCondition(condition: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1408215-lockwhencondition
    lockWhenCondition_beforeDate(condition: cocoascript.NSInteger, limit: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1409458-trylock
    tryLock():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1413548-trylockwhencondition
    tryLockWhenCondition(condition: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1412052-unlockwithcondition
    unlockWithCondition(condition: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsconditionlock/1411294-name
    name(): cocoascript.NSString;
    setName(): void;
    //
    alloc():cocoascript.NSConditionLock;
    //
    init():cocoascript.NSConditionLock;
  }
}

declare const NSConditionLock: cocoascript.NSConditionLock;
declare namespace cocoascript {
  /**
   * A condition variable whose semantics follow those used for POSIX-style conditions.
   * doc://com.apple.documentation/documentation/foundation/nscondition
   */
  interface NSCondition extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nscondition/1407950-wait
    wait():void;
    // doc://com.apple.documentation/documentation/foundation/nscondition/1418307-waituntildate
    waitUntilDate(limit: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscondition/1415724-signal
    signal():void;
    // doc://com.apple.documentation/documentation/foundation/nscondition/1415094-broadcast
    broadcast():void;
    // doc://com.apple.documentation/documentation/foundation/nscondition/1408091-name
    name(): cocoascript.NSString;
    setName(): void;
    //
    alloc():cocoascript.NSCondition;
    //
    init():cocoascript.NSCondition;
  }
}

declare const NSCondition: cocoascript.NSCondition;
declare namespace cocoascript {
  /**
   * A lock that may be acquired multiple times by the same thread without causing a deadlock.
   * doc://com.apple.documentation/documentation/foundation/nsrecursivelock
   */
  interface NSRecursiveLock extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsrecursivelock/1417151-lockbeforedate
    lockBeforeDate(limit: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsrecursivelock/1411547-trylock
    tryLock():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsrecursivelock/1416232-name
    name(): cocoascript.NSString;
    setName(): void;
    //
    alloc():cocoascript.NSRecursiveLock;
    //
    init():cocoascript.NSRecursiveLock;
  }
}

declare const NSRecursiveLock: cocoascript.NSRecursiveLock;
declare namespace cocoascript {
  /**
   * An object that coordinates the operation of multiple threads of execution within the same application.
   * doc://com.apple.documentation/documentation/foundation/nslock
   */
  interface NSLock extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nslock/1411133-lockbeforedate
    lockBeforeDate(limit: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nslock/1418105-trylock
    tryLock():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nslock/1412568-name
    name(): cocoascript.NSString;
    setName(): void;
    //
    alloc():cocoascript.NSLock;
    //
    init():cocoascript.NSLock;
  }
}

declare const NSLock: cocoascript.NSLock;
declare namespace cocoascript {
  /**
   * A lock that multiple applications on multiple hosts can use to restrict access to some shared resource, such as a file.
   * doc://com.apple.documentation/documentation/foundation/nsdistributedlock
   */
  interface NSDistributedLock extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdistributedlock/1410387-initwithpath
    initWithPath(path: cocoascript.NSString):cocoascript.NSDistributedLock;
    // doc://com.apple.documentation/documentation/foundation/nsdistributedlock/1412293-trylock
    tryLock():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdistributedlock/1413425-breaklock
    breakLock():void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributedlock/1417238-unlock
    unlock():void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributedlock/1413773-lockdate
    lockDate(): cocoascript.NSDate;
    setLockDate(): void;
    //
    alloc():cocoascript.NSDistributedLock;
    //
    init():cocoascript.NSDistributedLock;
  }
}

declare const NSDistributedLock: cocoascript.NSDistributedLock;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nstextcheckingtype
  type NSTextCheckingType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapperreadingoptions
  type NSFileWrapperReadingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapperwritingoptions
  type NSFileWrapperWritingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A resource manager you use to download content hosted on the App Store at the time your app needs it.
   * doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest
   */
  interface NSBundleResourceRequest extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614837-initwithtags
    initWithTags(tags: cocoascript.NSString):cocoascript.NSBundleResourceRequest;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614842-initwithtags
    initWithTags_bundle(tags: cocoascript.NSString, bundle: cocoascript.NSBundle):cocoascript.NSBundleResourceRequest;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614844-bundle
    bundle(): cocoascript.NSBundle;
    setBundle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614833-tags
    tags(): cocoascript.NSString;
    setTags(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614840-beginaccessingresourceswithcompl
    beginAccessingResourcesWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614834-conditionallybeginaccessingresou
    conditionallyBeginAccessingResourcesWithCompletionHandler(completionHandler: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614843-endaccessingresources
    endAccessingResources():void;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614841-loadingpriority
    loadingPriority(): number;
    setLoadingPriority(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614838-progress
    progress(): cocoascript.NSProgress;
    setProgress(): void;
    //
    alloc():cocoascript.NSBundleResourceRequest;
    //
    init():cocoascript.NSBundleResourceRequest;
  }
}

declare const NSBundleResourceRequest: cocoascript.NSBundleResourceRequest;
declare namespace cocoascript {
  /**
   * You implement this protocol when a class’s objects have subcomponents that can be discarded when not being used, thereby giving an application a smaller memory footprint.
   * doc://com.apple.documentation/documentation/foundation/nsdiscardablecontent
   */
  interface NSDiscardableContent {
    // doc://com.apple.documentation/documentation/foundation/nsdiscardablecontent/1412187-begincontentaccess
    beginContentAccess():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdiscardablecontent/1407535-endcontentaccess
    endContentAccess():void;
    // doc://com.apple.documentation/documentation/foundation/nsdiscardablecontent/1408998-discardcontentifpossible
    discardContentIfPossible():void;
    // doc://com.apple.documentation/documentation/foundation/nsdiscardablecontent/1417470-iscontentdiscarded
    isContentDiscarded():cocoascript.BOOL;
  }
}
// doc://com.apple.documentation/documentation/foundation/nsrunloopcommonmodes
declare const NSRunLoopCommonModes: cocoascript.NSRunLoopMode;
declare namespace cocoascript {
  /**
   * An abstract class that provides the interface for querying the relationships and properties of a class.
   * doc://com.apple.documentation/documentation/foundation/nsclassdescription
   */
  interface NSClassDescription extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsclassdescription/1415001-attributekeys
    attributeKeys(): cocoascript.NSString;
    setAttributeKeys(): void;
    // doc://com.apple.documentation/documentation/foundation/nsclassdescription/1410945-inverseforrelationshipkey
    inverseForRelationshipKey(relationshipKey: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsclassdescription/1408530-tomanyrelationshipkeys
    toManyRelationshipKeys(): cocoascript.NSString;
    setToManyRelationshipKeys(): void;
    // doc://com.apple.documentation/documentation/foundation/nsclassdescription/1411937-toonerelationshipkeys
    toOneRelationshipKeys(): cocoascript.NSString;
    setToOneRelationshipKeys(): void;
    //
    alloc():cocoascript.NSClassDescription;
    //
    init():cocoascript.NSClassDescription;
  }
}

declare const NSClassDescription: cocoascript.NSClassDescription;
// doc://com.apple.documentation/documentation/foundation/nsclassdescriptionneededforclassnotification
declare const NSClassDescriptionNeededForClassNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nskeyvaluechange
  type NSKeyValueChange = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nskeyvalueobservingoptions
  type NSKeyValueObservingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nskeyvaluechangekey
  type NSKeyValueChangeKey = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nskeyvaluesetmutationkind
  type NSKeyValueSetMutationKind = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nskeyvalueoperator
  type NSKeyValueOperator = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * A mechanism for converting one kind of scripting data to another.
   * doc://com.apple.documentation/documentation/foundation/nsscriptcoercionhandler
   */
  interface NSScriptCoercionHandler extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscriptcoercionhandler/1412034-coercevalue
    coerceValue_toClass(value: cocoascript.NSScriptCoercionHandler, toClass: cocoascript.Class):cocoascript.NSScriptCoercionHandler;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcoercionhandler/1413218-registercoercer
    registerCoercer_selector_toConvertFromClass_toClass(coercer: cocoascript.NSScriptCoercionHandler, selector: cocoascript.SEL, fromClass: cocoascript.Class, toClass: cocoascript.Class):void;
    //
    alloc():cocoascript.NSScriptCoercionHandler;
    //
    init():cocoascript.NSScriptCoercionHandler;
  }
}

declare const NSScriptCoercionHandler: cocoascript.NSScriptCoercionHandler;
declare namespace cocoascript {
  /**
   * The context in which the current script command is executed.
   * doc://com.apple.documentation/documentation/foundation/nsscriptexecutioncontext
   */
  interface NSScriptExecutionContext extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscriptexecutioncontext/1415288-toplevelobject
    topLevelObject(): cocoascript.id;
    setTopLevelObject(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptexecutioncontext/1412411-objectbeingtested
    objectBeingTested(): cocoascript.id;
    setObjectBeingTested(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptexecutioncontext/1416391-rangecontainerobject
    rangeContainerObject(): cocoascript.id;
    setRangeContainerObject(): void;
    //
    alloc():cocoascript.NSScriptExecutionContext;
    //
    init():cocoascript.NSScriptExecutionContext;
  }
}

declare const NSScriptExecutionContext: cocoascript.NSScriptExecutionContext;
// doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequestlowdiskspacenotification
declare const NSBundleResourceRequestLowDiskSpaceNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nscalendardaychangednotification
declare const NSCalendarDayChangedNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsdidbecomesinglethreadednotification
declare const NSDidBecomeSingleThreadedNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsfilehandleconnectionacceptednotification
declare const NSFileHandleConnectionAcceptedNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsfilehandledataavailablenotification
declare const NSFileHandleDataAvailableNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsfilehandlereadtoendoffilecompletionnotification
declare const NSFileHandleReadToEndOfFileCompletionNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiemanageracceptpolicychangednotification
declare const NSHTTPCookieManagerAcceptPolicyChangedNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiemanagercookieschangednotification
declare const NSHTTPCookieManagerCookiesChangedNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsmetadataquerydidfinishgatheringnotification
declare const NSMetadataQueryDidFinishGatheringNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsmetadataquerydidstartgatheringnotification
declare const NSMetadataQueryDidStartGatheringNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsmetadataquerydidupdatenotification
declare const NSMetadataQueryDidUpdateNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsmetadataquerygatheringprogressnotification
declare const NSMetadataQueryGatheringProgressNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsprocessinfopowerstatedidchangenotification
declare const NSProcessInfoPowerStateDidChangeNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nssystemtimezonedidchangenotification
declare const NSSystemTimeZoneDidChangeNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsthreadwillexitnotification
declare const NSThreadWillExitNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsurlcredentialstoragechangednotification
declare const NSURLCredentialStorageChangedNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsubiquityidentitydidchangenotification
declare const NSUbiquityIdentityDidChangeNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsundomanagercheckpointnotification
declare const NSUndoManagerCheckpointNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsundomanagerdidopenundogroupnotification
declare const NSUndoManagerDidOpenUndoGroupNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsundomanagerwillcloseundogroupnotification
declare const NSUndoManagerWillCloseUndoGroupNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsundomanagerwillredochangenotification
declare const NSUndoManagerWillRedoChangeNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nsundomanagerwillundochangenotification
declare const NSUndoManagerWillUndoChangeNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/foundation/nswillbecomemultithreadednotification
declare const NSWillBecomeMultiThreadedNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * A mutable, unordered collection of distinct objects that may appear more than once in the collection.
   * doc://com.apple.documentation/documentation/foundation/nscountedset
   */
  interface NSCountedSet extends NSMutableSet {
    // doc://com.apple.documentation/documentation/foundation/nscountedset/1416767-initwitharray
    initWithArray(array: any):cocoascript.NSCountedSet;
    // doc://com.apple.documentation/documentation/foundation/nscountedset/1411730-initwithset
    initWithSet(set: any):cocoascript.NSCountedSet;
    // doc://com.apple.documentation/documentation/foundation/nscountedset/1415625-initwithcapacity
    initWithCapacity(numItems: cocoascript.NSUInteger):cocoascript.NSCountedSet;
    // doc://com.apple.documentation/documentation/foundation/nscountedset/1413212-addobject
    addObject(object: any):void;
    // doc://com.apple.documentation/documentation/foundation/nscountedset/1415902-removeobject
    removeObject(object: any):void;
    // doc://com.apple.documentation/documentation/foundation/nscountedset/1408658-countforobject
    countForObject(object: any):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nscountedset/1408123-objectenumerator
    objectEnumerator():cocoascript.NSEnumerator;
    //
    alloc():cocoascript.NSCountedSet;
    //
    init():cocoascript.NSCountedSet;
  }
}

declare const NSCountedSet: cocoascript.NSCountedSet;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nstextcheckingkey
  type NSTextCheckingKey = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that converts between JSON and the equivalent Foundation objects.
   * doc://com.apple.documentation/documentation/foundation/nsjsonserialization
   */
  interface NSJSONSerialization extends NSObject {
    //
    alloc():cocoascript.NSJSONSerialization;
    //
    init():cocoascript.NSJSONSerialization;
  }
}

declare const NSJSONSerialization: cocoascript.NSJSONSerialization;
declare namespace cocoascript {
  /**
   * An object that converts between a property list and one of several serialized representations.
   * doc://com.apple.documentation/documentation/foundation/nspropertylistserialization
   */
  interface NSPropertyListSerialization extends NSObject {
    //
    alloc():cocoascript.NSPropertyListSerialization;
    //
    init():cocoascript.NSPropertyListSerialization;
  }
}

declare const NSPropertyListSerialization: cocoascript.NSPropertyListSerialization;
// doc://com.apple.documentation/documentation/foundation/nsportdidbecomeinvalidnotification
declare const NSPortDidBecomeInvalidNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * A low-level, operating system-independent type for inter-application (and inter-thread) messages.
   * doc://com.apple.documentation/documentation/foundation/nsportmessage
   */
  interface NSPortMessage extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsportmessage/1417387-initwithsendport
    initWithSendPort_receivePort_components(sendPort: cocoascript.NSPort, replyPort: cocoascript.NSPort, components: cocoascript.NSArray):cocoascript.NSPortMessage;
    // doc://com.apple.documentation/documentation/foundation/nsportmessage/1407464-sendbeforedate
    sendBeforeDate(date: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsportmessage/1407377-components
    components(): cocoascript.NSArray;
    setComponents(): void;
    // doc://com.apple.documentation/documentation/foundation/nsportmessage/1413908-receiveport
    receivePort(): cocoascript.NSPort;
    setReceivePort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsportmessage/1417234-sendport
    sendPort(): cocoascript.NSPort;
    setSendPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsportmessage/1407880-msgid
    msgid(): number;
    setMsgid(): void;
    //
    alloc():cocoascript.NSPortMessage;
    //
    init():cocoascript.NSPortMessage;
  }
}

declare const NSPortMessage: cocoascript.NSPortMessage;
declare namespace cocoascript {
  /**
   * An object that manages the communication between objects in different threads or between a thread and a process running on a local or remote system.
   * doc://com.apple.documentation/documentation/foundation/nsconnection
   */
  interface NSConnection extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478094-initwithreceiveport
    initWithReceivePort_sendPort(receivePort: cocoascript.NSPort, sendPort: cocoascript.NSPort):cocoascript.NSConnection;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478022-runinnewthread
    runInNewThread():void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478083-enablemultiplethreads
    enableMultipleThreads():void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478100-multiplethreadsenabled
    multipleThreadsEnabled(): cocoascript.BOOL;
    setMultipleThreadsEnabled(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478041-addrunloop
    addRunLoop(runloop: cocoascript.NSRunLoop):void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478032-removerunloop
    removeRunLoop(runloop: cocoascript.NSRunLoop):void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478102-registername
    registerName(name: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478067-registername
    registerName_withNameServer(name: cocoascript.NSString, server: cocoascript.NSPortNameServer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478012-rootobject
    rootObject(): cocoascript.id;
    setRootObject(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478065-rootproxy
    rootProxy(): cocoascript.NSDistantObject;
    setRootProxy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478047-remoteobjects
    remoteObjects(): cocoascript.NSArray;
    setRemoteObjects(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478043-localobjects
    localObjects(): cocoascript.NSArray;
    setLocalObjects(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478010-requesttimeout
    requestTimeout(): cocoascript.NSTimeInterval;
    setRequestTimeout(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478053-replytimeout
    replyTimeout(): cocoascript.NSTimeInterval;
    setReplyTimeout(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478038-independentconversationqueueing
    independentConversationQueueing(): cocoascript.BOOL;
    setIndependentConversationQueueing(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478114-addrequestmode
    addRequestMode(rmode: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478055-removerequestmode
    removeRequestMode(rmode: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478091-requestmodes
    requestModes(): cocoascript.NSString;
    setRequestModes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478036-invalidate
    invalidate():void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478063-valid
    valid(): cocoascript.BOOL;
    setValid(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478096-receiveport
    receivePort(): cocoascript.NSPort;
    setReceivePort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478071-sendport
    sendPort(): cocoascript.NSPort;
    setSendPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478104-dispatchwithcomponents
    dispatchWithComponents(components: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478112-statistics
    statistics(): cocoascript.NSNumber;
    setStatistics(): void;
    // doc://com.apple.documentation/documentation/foundation/nsconnection/1478077-delegate
    delegate(): cocoascript.NSConnectionDelegate;
    setDelegate(): void;
    //
    alloc():cocoascript.NSConnection;
    //
    init():cocoascript.NSConnection;
  }
}

declare const NSConnection: cocoascript.NSConnection;
// doc://com.apple.documentation/documentation/foundation/nsconnectiondiddienotification
declare const NSConnectionDidDieNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsconnectiondidinitializenotification
declare const NSConnectionDidInitializeNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A port that can be used as an endpoint for distributed object connections (or raw messaging).
   * doc://com.apple.documentation/documentation/foundation/nsmachport
   */
  interface NSMachPort extends NSPort {
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399499-initwithmachport
    initWithMachPort(machPort: number):cocoascript.NSMachPort;
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399559-initwithmachport
    initWithMachPort_options(machPort: number, f: cocoascript.NSMachPortOptions):cocoascript.NSMachPort;
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399539-machport
    machPort(): number;
    setMachPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399555-removefromrunloop
    removeFromRunLoop_forMode(runLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399523-scheduleinrunloop
    scheduleInRunLoop_forMode(runLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399476-delegate
    delegate():cocoascript.NSMachPortDelegate;
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399547-setdelegate
    setDelegate(anObject: cocoascript.NSMachPortDelegate):void;
    //
    alloc():cocoascript.NSMachPort;
    //
    init():cocoascript.NSMachPort;
  }
}

declare const NSMachPort: cocoascript.NSMachPort;
declare namespace cocoascript {
  /**
   * A port that can be used as an endpoint for distributed object connections (or raw messaging).
   * doc://com.apple.documentation/documentation/foundation/nsmessageport
   */
  interface NSMessagePort extends NSPort {
    //
    alloc():cocoascript.NSMessagePort;
    //
    init():cocoascript.NSMessagePort;
  }
}

declare const NSMessagePort: cocoascript.NSMessagePort;
declare namespace cocoascript {
  /**
   * A port that represents a BSD socket.
   * doc://com.apple.documentation/documentation/foundation/nssocketport
   */
  interface NSSocketPort extends NSPort {
    // doc://com.apple.documentation/documentation/foundation/nssocketport/1399549-init
    init():cocoascript.NSSocketPort;
    // doc://com.apple.documentation/documentation/foundation/nssocketport/1399488-initwithtcpport
    initWithTCPPort(port: number):cocoascript.NSSocketPort;
    // doc://com.apple.documentation/documentation/foundation/nssocketport/1399497-initwithprotocolfamily
    initWithProtocolFamily_socketType_protocol_address(family: number, type: number, protocol: number, address: cocoascript.NSData):cocoascript.NSSocketPort;
    // doc://com.apple.documentation/documentation/foundation/nssocketport/1399484-initwithprotocolfamily
    initWithProtocolFamily_socketType_protocol_socket(family: number, type: number, protocol: number, sock: cocoascript.NSSocketNativeHandle):cocoascript.NSSocketPort;
    // doc://com.apple.documentation/documentation/foundation/nssocketport/1399474-initremotewithtcpport
    initRemoteWithTCPPort_host(port: number, hostName: cocoascript.NSString):cocoascript.NSSocketPort;
    // doc://com.apple.documentation/documentation/foundation/nssocketport/1399535-initremotewithprotocolfamily
    initRemoteWithProtocolFamily_socketType_protocol_address(family: number, type: number, protocol: number, address: cocoascript.NSData):cocoascript.NSSocketPort;
    // doc://com.apple.documentation/documentation/foundation/nssocketport/1399480-address
    address(): cocoascript.NSData;
    setAddress(): void;
    // doc://com.apple.documentation/documentation/foundation/nssocketport/1399557-protocol
    protocol(): number;
    setProtocol(): void;
    // doc://com.apple.documentation/documentation/foundation/nssocketport/1399543-protocolfamily
    protocolFamily(): number;
    setProtocolFamily(): void;
    // doc://com.apple.documentation/documentation/foundation/nssocketport/1399492-socket
    socket(): cocoascript.NSSocketNativeHandle;
    setSocket(): void;
    // doc://com.apple.documentation/documentation/foundation/nssocketport/1399565-sockettype
    socketType(): number;
    setSocketType(): void;
    //
    alloc():cocoascript.NSSocketPort;
    //
    init():cocoascript.NSSocketPort;
  }
}

declare const NSSocketPort: cocoascript.NSSocketPort;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nssocketnativehandle
  type NSSocketNativeHandle = number;
}
declare namespace cocoascript {
  /**
   * A representation of an individual host on the network.
   * doc://com.apple.documentation/documentation/foundation/nshost
   */
  interface NSHost extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nshost/1412418-address
    address(): cocoascript.NSString;
    setAddress(): void;
    // doc://com.apple.documentation/documentation/foundation/nshost/1417599-addresses
    addresses(): cocoascript.NSString;
    setAddresses(): void;
    // doc://com.apple.documentation/documentation/foundation/nshost/1416949-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nshost/1409624-localizedname
    localizedName(): cocoascript.NSString;
    setLocalizedName(): void;
    // doc://com.apple.documentation/documentation/foundation/nshost/1416026-names
    names(): cocoascript.NSString;
    setNames(): void;
    // doc://com.apple.documentation/documentation/foundation/nshost/1414786-isequaltohost
    isEqualToHost(aHost: cocoascript.NSHost):cocoascript.BOOL;
    //
    alloc():cocoascript.NSHost;
    //
    init():cocoascript.NSHost;
  }
}

declare const NSHost: cocoascript.NSHost;
declare namespace cocoascript {
  /**
   * A formatter that converts a byte count value into a localized description that is formatted with the appropriate byte modifier (KB, MB, GB and so on).
   * doc://com.apple.documentation/documentation/foundation/nsbytecountformatter
   */
  interface NSByteCountFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1415338-stringfrombytecount
    stringFromByteCount(byteCount: number):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1412185-formattingcontext
    formattingContext(): cocoascript.NSFormattingContext;
    setFormattingContext(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1417194-countstyle
    countStyle(): cocoascript.NSByteCountFormatterCountStyle;
    setCountStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1408929-allowsnonnumericformatting
    allowsNonnumericFormatting(): cocoascript.BOOL;
    setAllowsNonnumericFormatting(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1411068-includesactualbytecount
    includesActualByteCount(): cocoascript.BOOL;
    setIncludesActualByteCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1417887-adaptive
    adaptive(): cocoascript.BOOL;
    setAdaptive(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1409137-allowedunits
    allowedUnits(): cocoascript.NSByteCountFormatterUnits;
    setAllowedUnits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1409874-includescount
    includesCount(): cocoascript.BOOL;
    setIncludesCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1415784-includesunit
    includesUnit(): cocoascript.BOOL;
    setIncludesUnit(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1409630-zeropadsfractiondigits
    zeroPadsFractionDigits(): cocoascript.BOOL;
    setZeroPadsFractionDigits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/3172522-stringforobjectvalue
    stringForObjectValue(obj: cocoascript.NSByteCountFormatter):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/3172523-stringfrommeasurement
    stringFromMeasurement(measurement: cocoascript.NSUnitInformationStorage):cocoascript.NSString;
    //
    alloc():cocoascript.NSByteCountFormatter;
    //
    init():cocoascript.NSByteCountFormatter;
  }
}

declare const NSByteCountFormatter: cocoascript.NSByteCountFormatter;
declare namespace cocoascript {
  /**
   * A formatter that creates string representations of quantities of time.
   * doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter
   */
  interface NSDateComponentsFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1407641-stringfromdatecomponents
    stringFromDateComponents(components: cocoascript.NSDateComponents):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1417219-stringforobjectvalue
    stringForObjectValue(obj: cocoascript.NSDateComponentsFormatter):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1415967-stringfromdate
    stringFromDate_toDate(startDate: cocoascript.NSDate, endDate: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1409040-stringfromtimeinterval
    stringFromTimeInterval(ti: cocoascript.NSTimeInterval):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1410216-allowedunits
    allowedUnits(): cocoascript.NSCalendarUnit;
    setAllowedUnits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1413084-allowsfractionalunits
    allowsFractionalUnits(): cocoascript.BOOL;
    setAllowsFractionalUnits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1407359-calendar
    calendar(): cocoascript.NSCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1410812-collapseslargestunit
    collapsesLargestUnit(): cocoascript.BOOL;
    setCollapsesLargestUnit(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1416387-includesapproximationphrase
    includesApproximationPhrase(): cocoascript.BOOL;
    setIncludesApproximationPhrase(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1416416-includestimeremainingphrase
    includesTimeRemainingPhrase(): cocoascript.BOOL;
    setIncludesTimeRemainingPhrase(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1416214-maximumunitcount
    maximumUnitCount(): cocoascript.NSInteger;
    setMaximumUnitCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1413441-unitsstyle
    unitsStyle(): cocoascript.NSDateComponentsFormatterUnitsStyle;
    setUnitsStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1413749-zeroformattingbehavior
    zeroFormattingBehavior(): cocoascript.NSDateComponentsFormatterZeroFormattingBehavior;
    setZeroFormattingBehavior(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1414198-formattingcontext
    formattingContext(): cocoascript.NSFormattingContext;
    setFormattingContext(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/2878110-referencedate
    referenceDate(): cocoascript.NSDate;
    setReferenceDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1412149-getobjectvalue
    getObjectValue_forString_errorDescription(obj: cocoascript.NSDateComponentsFormatter, string: cocoascript.NSString, error: cocoascript.NSString):cocoascript.BOOL;
    //
    alloc():cocoascript.NSDateComponentsFormatter;
    //
    init():cocoascript.NSDateComponentsFormatter;
  }
}

declare const NSDateComponentsFormatter: cocoascript.NSDateComponentsFormatter;
declare namespace cocoascript {
  /**
   * A formatter that creates string representations of time intervals.
   * doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter
   */
  interface NSDateIntervalFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1418368-stringfromdate
    stringFromDate_toDate(fromDate: cocoascript.NSDate, toDate: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1409519-datestyle
    dateStyle(): cocoascript.NSDateIntervalFormatterStyle;
    setDateStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1415655-timestyle
    timeStyle(): cocoascript.NSDateIntervalFormatterStyle;
    setTimeStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1407373-datetemplate
    dateTemplate(): cocoascript.NSString;
    setDateTemplate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1417984-calendar
    calendar(): cocoascript.NSCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1409992-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1410228-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1642848-stringfromdateinterval
    stringFromDateInterval(dateInterval: cocoascript.NSDateInterval):cocoascript.NSString;
    //
    alloc():cocoascript.NSDateIntervalFormatter;
    //
    init():cocoascript.NSDateIntervalFormatter;
  }
}

declare const NSDateIntervalFormatter: cocoascript.NSDateIntervalFormatter;
declare namespace cocoascript {
  /**
   * A formatter that provides localized descriptions of energy values.
   * doc://com.apple.documentation/documentation/foundation/nsenergyformatter
   */
  interface NSEnergyFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1410338-forfoodenergyuse
    forFoodEnergyUse(): cocoascript.BOOL;
    setForFoodEnergyUse(): void;
    // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1414825-getobjectvalue
    getObjectValue_forString_errorDescription(obj: cocoascript.NSEnergyFormatter, string: cocoascript.NSString, error: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1412614-numberformatter
    numberFormatter(): cocoascript.NSNumberFormatter;
    setNumberFormatter(): void;
    // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1409502-stringfromjoules
    stringFromJoules(numberInJoules: number):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1411983-stringfromvalue
    stringFromValue_unit(value: number, unit: cocoascript.NSEnergyFormatterUnit):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1408656-unitstringfromjoules
    unitStringFromJoules_usedUnit(numberInJoules: number, unitp: cocoascript.NSEnergyFormatterUnit):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1411180-unitstringfromvalue
    unitStringFromValue_unit(value: number, unit: cocoascript.NSEnergyFormatterUnit):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1414075-unitstyle
    unitStyle(): cocoascript.NSFormattingUnitStyle;
    setUnitStyle(): void;
    //
    alloc():cocoascript.NSEnergyFormatter;
    //
    init():cocoascript.NSEnergyFormatter;
  }
}

declare const NSEnergyFormatter: cocoascript.NSEnergyFormatter;
declare namespace cocoascript {
  /**
   * A formatter that provides localized descriptions of linear distances, such as length and height measurements.
   * doc://com.apple.documentation/documentation/foundation/nslengthformatter
   */
  interface NSLengthFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1416517-forpersonheightuse
    forPersonHeightUse(): cocoascript.BOOL;
    setForPersonHeightUse(): void;
    // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1413280-getobjectvalue
    getObjectValue_forString_errorDescription(obj: cocoascript.NSLengthFormatter, string: cocoascript.NSString, error: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1417778-numberformatter
    numberFormatter(): cocoascript.NSNumberFormatter;
    setNumberFormatter(): void;
    // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1416111-stringfrommeters
    stringFromMeters(numberInMeters: number):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1418018-stringfromvalue
    stringFromValue_unit(value: number, unit: cocoascript.NSLengthFormatterUnit):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1407661-unitstringfrommeters
    unitStringFromMeters_usedUnit(numberInMeters: number, unitp: cocoascript.NSLengthFormatterUnit):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1416076-unitstringfromvalue
    unitStringFromValue_unit(value: number, unit: cocoascript.NSLengthFormatterUnit):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1409965-unitstyle
    unitStyle(): cocoascript.NSFormattingUnitStyle;
    setUnitStyle(): void;
    //
    alloc():cocoascript.NSLengthFormatter;
    //
    init():cocoascript.NSLengthFormatter;
  }
}

declare const NSLengthFormatter: cocoascript.NSLengthFormatter;
declare namespace cocoascript {
  /**
   * A formatter that provides localized descriptions of mass and weight values.
   * doc://com.apple.documentation/documentation/foundation/nsmassformatter
   */
  interface NSMassFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1407306-forpersonmassuse
    forPersonMassUse(): cocoascript.BOOL;
    setForPersonMassUse(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1417304-getobjectvalue
    getObjectValue_forString_errorDescription(obj: cocoascript.NSMassFormatter, string: cocoascript.NSString, error: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1418462-numberformatter
    numberFormatter(): cocoascript.NSNumberFormatter;
    setNumberFormatter(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1414324-stringfromkilograms
    stringFromKilograms(numberInKilograms: number):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1409002-stringfromvalue
    stringFromValue_unit(value: number, unit: cocoascript.NSMassFormatterUnit):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1408475-unitstringfromkilograms
    unitStringFromKilograms_usedUnit(numberInKilograms: number, unitp: cocoascript.NSMassFormatterUnit):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1415491-unitstringfromvalue
    unitStringFromValue_unit(value: number, unit: cocoascript.NSMassFormatterUnit):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1411215-unitstyle
    unitStyle(): cocoascript.NSFormattingUnitStyle;
    setUnitStyle(): void;
    //
    alloc():cocoascript.NSMassFormatter;
    //
    init():cocoascript.NSMassFormatter;
  }
}

declare const NSMassFormatter: cocoascript.NSMassFormatter;
declare namespace cocoascript {
  /**
   * A formatter that provides localized representations of the components of a person’s name.
   * doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter
   */
  interface NSPersonNameComponentsFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter/1408260-style
    style(): cocoascript.NSPersonNameComponentsFormatterStyle;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter/1408242-phonetic
    phonetic(): cocoascript.BOOL;
    setPhonetic(): void;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter/1408243-stringfrompersonnamecomponents
    stringFromPersonNameComponents(components: cocoascript.NSPersonNameComponents):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter/1408241-annotatedstringfrompersonnamecom
    annotatedStringFromPersonNameComponents(components: cocoascript.NSPersonNameComponents):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter/1642979-personnamecomponentsfromstring
    personNameComponentsFromString(string: cocoascript.NSString):cocoascript.NSPersonNameComponents;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter/1408262-getobjectvalue
    getObjectValue_forString_errorDescription(obj: cocoascript.NSPersonNameComponentsFormatter, string: cocoascript.NSString, error: cocoascript.NSString):cocoascript.BOOL;
    //
    alloc():cocoascript.NSPersonNameComponentsFormatter;
    //
    init():cocoascript.NSPersonNameComponentsFormatter;
  }
}

declare const NSPersonNameComponentsFormatter: cocoascript.NSPersonNameComponentsFormatter;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsformattingcontext
  type NSFormattingContext = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsformattingunitstyle
  type NSFormattingUnitStyle = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A protocol that declares three methods that control the discretionary aspects of working with decimal numbers.
   * doc://com.apple.documentation/documentation/foundation/nsdecimalnumberbehaviors
   */
  interface NSDecimalNumberBehaviors {
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumberbehaviors/1409414-roundingmode
    roundingMode():cocoascript.NSRoundingMode;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumberbehaviors/1411642-scale
    scale():number;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumberbehaviors/1411766-exceptionduringoperation
    exceptionDuringOperation_error_leftOperand_rightOperand(operation: cocoascript.SEL, error: cocoascript.NSCalculationError, leftOperand: cocoascript.NSDecimalNumber, rightOperand: cocoascript.NSDecimalNumber):cocoascript.NSDecimalNumber;
  }
}
declare namespace cocoascript {
  /**
   * A comparison between an object specifier and a test object.
   * doc://com.apple.documentation/documentation/foundation/nsspecifiertest
   */
  interface NSSpecifierTest extends NSScriptWhoseTest {
    // doc://com.apple.documentation/documentation/foundation/nsspecifiertest/1393833-initwithobjectspecifier
    initWithObjectSpecifier_comparisonOperator_testObject(obj1: cocoascript.NSScriptObjectSpecifier, compOp: cocoascript.NSTestComparisonOperation, obj2: cocoascript.NSSpecifierTest):cocoascript.NSSpecifierTest;
    // doc://com.apple.documentation/documentation/foundation/nsspecifiertest/1393881-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSSpecifierTest;
    //
    alloc():cocoascript.NSSpecifierTest;
    //
    init():cocoascript.NSSpecifierTest;
  }
}

declare const NSSpecifierTest: cocoascript.NSSpecifierTest;
declare namespace cocoascript {
  /**
   * The logical combination of one or more specifier tests.
   * doc://com.apple.documentation/documentation/foundation/nslogicaltest
   */
  interface NSLogicalTest extends NSScriptWhoseTest {
    // doc://com.apple.documentation/documentation/foundation/nslogicaltest/1393854-initandtestwithtests
    initAndTestWithTests(subTests: cocoascript.NSSpecifierTest):cocoascript.NSLogicalTest;
    // doc://com.apple.documentation/documentation/foundation/nslogicaltest/1393879-initnottestwithtest
    initNotTestWithTest(subTest: cocoascript.NSScriptWhoseTest):cocoascript.NSLogicalTest;
    // doc://com.apple.documentation/documentation/foundation/nslogicaltest/1393875-initortestwithtests
    initOrTestWithTests(subTests: cocoascript.NSSpecifierTest):cocoascript.NSLogicalTest;
    //
    alloc():cocoascript.NSLogicalTest;
    //
    init():cocoascript.NSLogicalTest;
  }
}

declare const NSLogicalTest: cocoascript.NSLogicalTest;
declare namespace cocoascript {
  /**
   * A specifier that indicates every object in a collection matching a condition.
   * doc://com.apple.documentation/documentation/foundation/nswhosespecifier
   */
  interface NSWhoseSpecifier extends NSScriptObjectSpecifier {
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1412173-initwithcontainerclassdescriptio
    initWithContainerClassDescription_containerSpecifier_key_test(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString, test: cocoascript.NSScriptWhoseTest):cocoascript.NSWhoseSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1407761-endsubelementidentifier
    endSubelementIdentifier(): cocoascript.NSWhoseSubelementIdentifier;
    setEndSubelementIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1416686-endsubelementindex
    endSubelementIndex(): cocoascript.NSInteger;
    setEndSubelementIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1413408-startsubelementidentifier
    startSubelementIdentifier(): cocoascript.NSWhoseSubelementIdentifier;
    setStartSubelementIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1417856-startsubelementindex
    startSubelementIndex(): cocoascript.NSInteger;
    setStartSubelementIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1412482-test
    test(): cocoascript.NSScriptWhoseTest;
    setTest(): void;
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1418262-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSWhoseSpecifier;
    //
    alloc():cocoascript.NSWhoseSpecifier;
    //
    init():cocoascript.NSWhoseSpecifier;
  }
}

declare const NSWhoseSpecifier: cocoascript.NSWhoseSpecifier;
declare namespace cocoascript {
  /**
   * The top-level repository of scriptability information for an app at runtime.
   * doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry
   */
  interface NSScriptSuiteRegistry extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1415178-suiteforappleeventcode
    suiteForAppleEventCode(appleEventCode: cocoascript.FourCharCode):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1414452-suitenames
    suiteNames(): cocoascript.NSString;
    setSuiteNames(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1414328-classdescriptionsinsuite
    classDescriptionsInSuite(suiteName: cocoascript.NSString):cocoascript.NSScriptClassDescription;
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1411184-classdescriptionwithappleeventco
    classDescriptionWithAppleEventCode(appleEventCode: cocoascript.FourCharCode):cocoascript.NSScriptClassDescription;
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1412869-registerclassdescription
    registerClassDescription(classDescription: cocoascript.NSScriptClassDescription):void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1416396-commanddescriptionsinsuite
    commandDescriptionsInSuite(suiteName: cocoascript.NSString):cocoascript.NSScriptCommandDescription;
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1416734-commanddescriptionwithappleevent
    commandDescriptionWithAppleEventClass_andAppleEventCode(appleEventClassCode: cocoascript.FourCharCode, appleEventIDCode: cocoascript.FourCharCode):cocoascript.NSScriptCommandDescription;
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1408858-registercommanddescription
    registerCommandDescription(commandDescription: cocoascript.NSScriptCommandDescription):void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1409186-aeteresource
    aeteResource(languageName: cocoascript.NSString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1412492-appleeventcodeforsuite
    appleEventCodeForSuite(suiteName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1414868-bundleforsuite
    bundleForSuite(suiteName: cocoascript.NSString):cocoascript.NSBundle;
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1413397-loadsuitewithdictionary
    loadSuiteWithDictionary_fromBundle(suiteDeclaration: cocoascript.NSDictionary, bundle: cocoascript.NSBundle):void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1410575-loadsuitesfrombundle
    loadSuitesFromBundle(bundle: cocoascript.NSBundle):void;
    //
    alloc():cocoascript.NSScriptSuiteRegistry;
    //
    init():cocoascript.NSScriptSuiteRegistry;
  }
}

declare const NSScriptSuiteRegistry: cocoascript.NSScriptSuiteRegistry;
declare namespace cocoascript {
  /**
   * A scriptable class that a macOS app supports.
   * doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription
   */
  interface NSScriptClassDescription extends NSClassDescription {
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1410370-initwithsuitename
    initWithSuiteName_className_dictionary(suiteName: cocoascript.NSString, className: cocoascript.NSString, classDeclaration: cocoascript.NSDictionary):cocoascript.NSScriptClassDescription;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1407343-classdescriptionforkey
    classDescriptionForKey(key: cocoascript.NSString):cocoascript.NSScriptClassDescription;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1416243-superclassdescription
    superclassDescription(): cocoascript.NSScriptClassDescription;
    setSuperclassDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1418029-classname
    className(): cocoascript.NSString;
    setClassName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1410261-defaultsubcontainerattributekey
    defaultSubcontainerAttributeKey(): cocoascript.NSString;
    setDefaultSubcontainerAttributeKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1409575-implementationclassname
    implementationClassName(): cocoascript.NSString;
    setImplementationClassName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1416531-islocationrequiredtocreateforkey
    isLocationRequiredToCreateForKey(toManyRelationshipKey: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1410782-suitename
    suiteName(): cocoascript.NSString;
    setSuiteName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1414920-appleeventcode
    appleEventCode(): cocoascript.FourCharCode;
    setAppleEventCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1414657-appleeventcodeforkey
    appleEventCodeForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1411166-matchesappleeventcode
    matchesAppleEventCode(appleEventCode: cocoascript.FourCharCode):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1413542-hasorderedtomanyrelationshipfork
    hasOrderedToManyRelationshipForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1407574-haspropertyforkey
    hasPropertyForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1411467-hasreadablepropertyforkey
    hasReadablePropertyForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1411935-haswritablepropertyforkey
    hasWritablePropertyForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1547649-isreadonlykey
    isReadOnlyKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1415315-keywithappleeventcode
    keyWithAppleEventCode(appleEventCode: cocoascript.FourCharCode):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1417186-typeforkey
    typeForKey(key: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1409327-selectorforcommand
    selectorForCommand(commandDescription: cocoascript.NSScriptCommandDescription):cocoascript.SEL;
    // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1411902-supportscommand
    supportsCommand(commandDescription: cocoascript.NSScriptCommandDescription):cocoascript.BOOL;
    //
    alloc():cocoascript.NSScriptClassDescription;
    //
    init():cocoascript.NSScriptClassDescription;
  }
}

declare const NSScriptClassDescription: cocoascript.NSScriptClassDescription;
declare namespace cocoascript {
  /**
   * An interface for handling incoming Mach messages.
   * doc://com.apple.documentation/documentation/foundation/nsmachportdelegate
   */
  interface NSMachPortDelegate extends NSPortDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsmachportdelegate/1399509-handlemachmessage
    handleMachMessage(msg: void):void;
  }
}
declare namespace cocoascript {
  /**
   * An object used by the distributed objects system to help handle invocations between different processes.
   * doc://com.apple.documentation/documentation/foundation/nsdistantobjectrequest
   */
  interface NSDistantObjectRequest extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdistantobjectrequest/1478020-replywithexception
    replyWithException(exception: cocoascript.NSException):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistantobjectrequest/1478073-connection
    connection(): cocoascript.NSConnection;
    setConnection(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdistantobjectrequest/1478098-conversation
    conversation(): cocoascript.id;
    setConversation(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdistantobjectrequest/1478018-invocation
    invocation(): cocoascript.NSInvocation;
    setInvocation(): void;
    //
    alloc():cocoascript.NSDistantObjectRequest;
    //
    init():cocoascript.NSDistantObjectRequest;
  }
}

declare const NSDistantObjectRequest: cocoascript.NSDistantObjectRequest;
declare namespace cocoascript {
  /**
   * A port name server that takes and returns Mach port objects.
   * doc://com.apple.documentation/documentation/foundation/nsmachbootstrapserver
   */
  interface NSMachBootstrapServer extends NSPortNameServer {
    // doc://com.apple.documentation/documentation/foundation/nsmachbootstrapserver/1401715-portforname
    portForName(name: cocoascript.NSString):cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nsmachbootstrapserver/1401748-portforname
    portForName_host(name: cocoascript.NSString, host: cocoascript.NSString):cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nsmachbootstrapserver/1401744-serviceportwithname
    servicePortWithName(name: cocoascript.NSString):cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nsmachbootstrapserver/1401725-registerport
    registerPort_name(port: cocoascript.NSPort, name: cocoascript.NSString):cocoascript.BOOL;
    //
    alloc():cocoascript.NSMachBootstrapServer;
    //
    init():cocoascript.NSMachBootstrapServer;
  }
}

declare const NSMachBootstrapServer: cocoascript.NSMachBootstrapServer;
declare namespace cocoascript {
  /**
   * A server takes and returns message ports.
   * doc://com.apple.documentation/documentation/foundation/nsmessageportnameserver
   */
  interface NSMessagePortNameServer extends NSPortNameServer {
    // doc://com.apple.documentation/documentation/foundation/nsmessageportnameserver/1401736-portforname
    portForName(name: cocoascript.NSString):cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nsmessageportnameserver/1401729-portforname
    portForName_host(name: cocoascript.NSString, host: cocoascript.NSString):cocoascript.NSPort;
    //
    alloc():cocoascript.NSMessagePortNameServer;
    //
    init():cocoascript.NSMessagePortNameServer;
  }
}

declare const NSMessagePortNameServer: cocoascript.NSMessagePortNameServer;
declare namespace cocoascript {
  /**
   * An object-oriented interface to the port registration service used by the distributed objects system.
   * doc://com.apple.documentation/documentation/foundation/nsportnameserver
   */
  interface NSPortNameServer extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsportnameserver/1401738-portforname
    portForName(name: cocoascript.NSString):cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nsportnameserver/1401711-portforname
    portForName_host(name: cocoascript.NSString, host: cocoascript.NSString):cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nsportnameserver/1401732-registerport
    registerPort_name(port: cocoascript.NSPort, name: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsportnameserver/1401734-removeportforname
    removePortForName(name: cocoascript.NSString):cocoascript.BOOL;
    //
    alloc():cocoascript.NSPortNameServer;
    //
    init():cocoascript.NSPortNameServer;
  }
}

declare const NSPortNameServer: cocoascript.NSPortNameServer;
declare namespace cocoascript {
  /**
   * An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
   * doc://com.apple.documentation/documentation/foundation/nsprotocolchecker
   */
  interface NSProtocolChecker extends NSProxy {
    // doc://com.apple.documentation/documentation/foundation/nsprotocolchecker/1417509-initwithtarget
    initWithTarget_protocol(anObject: cocoascript.NSObject, aProtocol: cocoascript.Protocol):cocoascript.NSProtocolChecker;
    // doc://com.apple.documentation/documentation/foundation/nsprotocolchecker/1413544-protocol
    protocol(): cocoascript.Protocol;
    setProtocol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprotocolchecker/1416619-target
    target(): cocoascript.NSObject;
    setTarget(): void;
    //
    alloc():cocoascript.NSProtocolChecker;
    //
    init():cocoascript.NSProtocolChecker;
  }
}

declare const NSProtocolChecker: cocoascript.NSProtocolChecker;
declare namespace cocoascript {
  /**
   * A port name server that takes and returns socket ports.
   * doc://com.apple.documentation/documentation/foundation/nssocketportnameserver
   */
  interface NSSocketPortNameServer extends NSPortNameServer {
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401750-portforname
    portForName(name: cocoascript.NSString):cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401727-portforname
    portForName_host(name: cocoascript.NSString, host: cocoascript.NSString):cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401717-portforname
    portForName_host_nameServerPortNumber(name: cocoascript.NSString, host: cocoascript.NSString, portNumber: number):cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401730-registerport
    registerPort_name(port: cocoascript.NSPort, name: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401713-registerport
    registerPort_name_nameServerPortNumber(port: cocoascript.NSPort, name: cocoascript.NSString, portNumber: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401754-removeportforname
    removePortForName(name: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401755-defaultnameserverportnumber
    defaultNameServerPortNumber(): number;
    setDefaultNameServerPortNumber(): void;
    //
    alloc():cocoascript.NSSocketPortNameServer;
    //
    init():cocoascript.NSSocketPortNameServer;
  }
}

declare const NSSocketPortNameServer: cocoascript.NSSocketPortNameServer;
declare namespace cocoascript {
  /**
   * A specifier for a simple attribute value, a one-to-one relationship, or all elements of a to-many relationship.
   * doc://com.apple.documentation/documentation/foundation/nspropertyspecifier
   */
  interface NSPropertySpecifier extends NSScriptObjectSpecifier {
    //
    alloc():cocoascript.NSPropertySpecifier;
    //
    init():cocoascript.NSPropertySpecifier;
  }
}

declare const NSPropertySpecifier: cocoascript.NSPropertySpecifier;
declare namespace cocoascript {
  /**
   * A specifier for an insertion point in a container relative to another object in the container.
   * doc://com.apple.documentation/documentation/foundation/nspositionalspecifier
   */
  interface NSPositionalSpecifier extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1416546-initwithposition
    initWithPosition_objectSpecifier(position: cocoascript.NSInsertionPosition, specifier: cocoascript.NSScriptObjectSpecifier):cocoascript.NSPositionalSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1414957-insertioncontainer
    insertionContainer(): cocoascript.id;
    setInsertionContainer(): void;
    // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1414703-insertionindex
    insertionIndex(): cocoascript.NSInteger;
    setInsertionIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1414059-insertionkey
    insertionKey(): cocoascript.NSString;
    setInsertionKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1411646-insertionreplaces
    insertionReplaces(): cocoascript.BOOL;
    setInsertionReplaces(): void;
    // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1412839-objectspecifier
    objectSpecifier(): cocoascript.NSScriptObjectSpecifier;
    setObjectSpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1413865-position
    position(): cocoascript.NSInsertionPosition;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1414707-setinsertionclassdescription
    setInsertionClassDescription(classDescription: cocoascript.NSScriptClassDescription):void;
    // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1417035-evaluate
    evaluate():void;
    //
    alloc():cocoascript.NSPositionalSpecifier;
    //
    init():cocoascript.NSPositionalSpecifier;
  }
}

declare const NSPositionalSpecifier: cocoascript.NSPositionalSpecifier;
declare namespace cocoascript {
  /**
   * A specifier for an arbitrary object in a collection or, if not a one-to-many relationship, the sole object.
   * doc://com.apple.documentation/documentation/foundation/nsrandomspecifier
   */
  interface NSRandomSpecifier extends NSScriptObjectSpecifier {
    //
    alloc():cocoascript.NSRandomSpecifier;
    //
    init():cocoascript.NSRandomSpecifier;
  }
}

declare const NSRandomSpecifier: cocoascript.NSRandomSpecifier;
declare namespace cocoascript {
  /**
   * A specifier for a range of objects in a container.
   * doc://com.apple.documentation/documentation/foundation/nsrangespecifier
   */
  interface NSRangeSpecifier extends NSScriptObjectSpecifier {
    // doc://com.apple.documentation/documentation/foundation/nsrangespecifier/1409215-initwithcontainerclassdescriptio
    initWithContainerClassDescription_containerSpecifier_key_startSpecifier_endSpecifier(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString, startSpec: cocoascript.NSScriptObjectSpecifier, endSpec: cocoascript.NSScriptObjectSpecifier):cocoascript.NSRangeSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nsrangespecifier/1418470-endspecifier
    endSpecifier(): cocoascript.NSScriptObjectSpecifier;
    setEndSpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrangespecifier/1418394-startspecifier
    startSpecifier(): cocoascript.NSScriptObjectSpecifier;
    setStartSpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrangespecifier/1418021-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSRangeSpecifier;
    //
    alloc():cocoascript.NSRangeSpecifier;
    //
    init():cocoascript.NSRangeSpecifier;
  }
}

declare const NSRangeSpecifier: cocoascript.NSRangeSpecifier;
declare namespace cocoascript {
  /**
   * A specifier for an object in a collection (or container) by unique ID.
   * doc://com.apple.documentation/documentation/foundation/nsuniqueidspecifier
   */
  interface NSUniqueIDSpecifier extends NSScriptObjectSpecifier {
    // doc://com.apple.documentation/documentation/foundation/nsuniqueidspecifier/1416055-initwithcontainerclassdescriptio
    initWithContainerClassDescription_containerSpecifier_key_uniqueID(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString, uniqueID: cocoascript.NSUniqueIDSpecifier):cocoascript.NSUniqueIDSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nsuniqueidspecifier/1415634-uniqueid
    uniqueID(): cocoascript.id;
    setUniqueID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuniqueidspecifier/1414481-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSUniqueIDSpecifier;
    //
    alloc():cocoascript.NSUniqueIDSpecifier;
    //
    init():cocoascript.NSUniqueIDSpecifier;
  }
}

declare const NSUniqueIDSpecifier: cocoascript.NSUniqueIDSpecifier;
declare namespace cocoascript {
  /**
   * A specifier for an object in a collection (or container) by name.
   * doc://com.apple.documentation/documentation/foundation/nsnamespecifier
   */
  interface NSNameSpecifier extends NSScriptObjectSpecifier {
    // doc://com.apple.documentation/documentation/foundation/nsnamespecifier/1408615-initwithcontainerclassdescriptio
    initWithContainerClassDescription_containerSpecifier_key_name(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString, name: cocoascript.NSString):cocoascript.NSNameSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nsnamespecifier/1407411-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnamespecifier/1412623-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSNameSpecifier;
    //
    alloc():cocoascript.NSNameSpecifier;
    //
    init():cocoascript.NSNameSpecifier;
  }
}

declare const NSNameSpecifier: cocoascript.NSNameSpecifier;
declare namespace cocoascript {
  /**
   * A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.
   * doc://com.apple.documentation/documentation/foundation/nsmiddlespecifier
   */
  interface NSMiddleSpecifier extends NSScriptObjectSpecifier {
    //
    alloc():cocoascript.NSMiddleSpecifier;
    //
    init():cocoascript.NSMiddleSpecifier;
  }
}

declare const NSMiddleSpecifier: cocoascript.NSMiddleSpecifier;
declare namespace cocoascript {
  /**
   * A specifier representing an object in a collection (or container) with an index number.
   * doc://com.apple.documentation/documentation/foundation/nsindexspecifier
   */
  interface NSIndexSpecifier extends NSScriptObjectSpecifier {
    // doc://com.apple.documentation/documentation/foundation/nsindexspecifier/1407502-initwithcontainerclassdescriptio
    initWithContainerClassDescription_containerSpecifier_key_index(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString, index: cocoascript.NSInteger):cocoascript.NSIndexSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nsindexspecifier/1408567-index
    index(): cocoascript.NSInteger;
    setIndex(): void;
    //
    alloc():cocoascript.NSIndexSpecifier;
    //
    init():cocoascript.NSIndexSpecifier;
  }
}

declare const NSIndexSpecifier: cocoascript.NSIndexSpecifier;
declare namespace cocoascript {
  /**
   * A specifier that indicates an object in a collection by its position relative to another object.
   * doc://com.apple.documentation/documentation/foundation/nsrelativespecifier
   */
  interface NSRelativeSpecifier extends NSScriptObjectSpecifier {
    // doc://com.apple.documentation/documentation/foundation/nsrelativespecifier/1409205-initwithcontainerclassdescriptio
    initWithContainerClassDescription_containerSpecifier_key_relativePosition_baseSpecifier(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString, relPos: cocoascript.NSRelativePosition, baseSpecifier: cocoascript.NSScriptObjectSpecifier):cocoascript.NSRelativeSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nsrelativespecifier/1409071-basespecifier
    baseSpecifier(): cocoascript.NSScriptObjectSpecifier;
    setBaseSpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrelativespecifier/1416001-relativeposition
    relativePosition(): cocoascript.NSRelativePosition;
    setRelativePosition(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrelativespecifier/1412403-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSRelativeSpecifier;
    //
    alloc():cocoascript.NSRelativeSpecifier;
    //
    init():cocoascript.NSRelativeSpecifier;
  }
}

declare const NSRelativeSpecifier: cocoascript.NSRelativeSpecifier;
declare namespace cocoascript {
  /**
   * A command that quits the specified app.
   * doc://com.apple.documentation/documentation/foundation/nsquitcommand
   */
  interface NSQuitCommand extends NSScriptCommand {
    // doc://com.apple.documentation/documentation/foundation/nsquitcommand/1407440-saveoptions
    saveOptions(): cocoascript.NSSaveOptions;
    setSaveOptions(): void;
    //
    alloc():cocoascript.NSQuitCommand;
    //
    init():cocoascript.NSQuitCommand;
  }
}

declare const NSQuitCommand: cocoascript.NSQuitCommand;
declare namespace cocoascript {
  /**
   * A command that sets one or more attributes or relationships to one or more values.
   * doc://com.apple.documentation/documentation/foundation/nssetcommand
   */
  interface NSSetCommand extends NSScriptCommand {
    // doc://com.apple.documentation/documentation/foundation/nssetcommand/1415804-keyspecifier
    keySpecifier(): cocoascript.NSScriptObjectSpecifier;
    setKeySpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nssetcommand/1407407-setreceiversspecifier
    setReceiversSpecifier(receiversRef: cocoascript.NSScriptObjectSpecifier):void;
    //
    alloc():cocoascript.NSSetCommand;
    //
    init():cocoascript.NSSetCommand;
  }
}

declare const NSSetCommand: cocoascript.NSSetCommand;
declare namespace cocoascript {
  /**
   * A command that moves one or more scriptable objects.
   * doc://com.apple.documentation/documentation/foundation/nsmovecommand
   */
  interface NSMoveCommand extends NSScriptCommand {
    // doc://com.apple.documentation/documentation/foundation/nsmovecommand/1413005-keyspecifier
    keySpecifier(): cocoascript.NSScriptObjectSpecifier;
    setKeySpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmovecommand/1414654-setreceiversspecifier
    setReceiversSpecifier(receiversRef: cocoascript.NSScriptObjectSpecifier):void;
    //
    alloc():cocoascript.NSMoveCommand;
    //
    init():cocoascript.NSMoveCommand;
  }
}

declare const NSMoveCommand: cocoascript.NSMoveCommand;
declare namespace cocoascript {
  /**
   * A command that creates a scriptable object.
   * doc://com.apple.documentation/documentation/foundation/nscreatecommand
   */
  interface NSCreateCommand extends NSScriptCommand {
    // doc://com.apple.documentation/documentation/foundation/nscreatecommand/1413533-createclassdescription
    createClassDescription(): cocoascript.NSScriptClassDescription;
    setCreateClassDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nscreatecommand/1407639-resolvedkeydictionary
    resolvedKeyDictionary(): cocoascript.id;
    setResolvedKeyDictionary(): void;
    //
    alloc():cocoascript.NSCreateCommand;
    //
    init():cocoascript.NSCreateCommand;
  }
}

declare const NSCreateCommand: cocoascript.NSCreateCommand;
declare namespace cocoascript {
  /**
   * A command that deletes a scriptable object.
   * doc://com.apple.documentation/documentation/foundation/nsdeletecommand
   */
  interface NSDeleteCommand extends NSScriptCommand {
    // doc://com.apple.documentation/documentation/foundation/nsdeletecommand/1414705-keyspecifier
    keySpecifier(): cocoascript.NSScriptObjectSpecifier;
    setKeySpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdeletecommand/1407286-setreceiversspecifier
    setReceiversSpecifier(receiversRef: cocoascript.NSScriptObjectSpecifier):void;
    //
    alloc():cocoascript.NSDeleteCommand;
    //
    init():cocoascript.NSDeleteCommand;
  }
}

declare const NSDeleteCommand: cocoascript.NSDeleteCommand;
declare namespace cocoascript {
  /**
   * A command that determines whether a scriptable object exists.
   * doc://com.apple.documentation/documentation/foundation/nsexistscommand
   */
  interface NSExistsCommand extends NSScriptCommand {
    //
    alloc():cocoascript.NSExistsCommand;
    //
    init():cocoascript.NSExistsCommand;
  }
}

declare const NSExistsCommand: cocoascript.NSExistsCommand;
declare namespace cocoascript {
  /**
   * A command that retrieves a value or object from a scriptable object.
   * doc://com.apple.documentation/documentation/foundation/nsgetcommand
   */
  interface NSGetCommand extends NSScriptCommand {
    //
    alloc():cocoascript.NSGetCommand;
    //
    init():cocoascript.NSGetCommand;
  }
}

declare const NSGetCommand: cocoascript.NSGetCommand;
declare namespace cocoascript {
  /**
   * A command that clones one or more scriptable objects.
   * doc://com.apple.documentation/documentation/foundation/nsclonecommand
   */
  interface NSCloneCommand extends NSScriptCommand {
    // doc://com.apple.documentation/documentation/foundation/nsclonecommand/1407603-keyspecifier
    keySpecifier(): cocoascript.NSScriptObjectSpecifier;
    setKeySpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsclonecommand/1414796-setreceiversspecifier
    setReceiversSpecifier(receiversRef: cocoascript.NSScriptObjectSpecifier):void;
    //
    alloc():cocoascript.NSCloneCommand;
    //
    init():cocoascript.NSCloneCommand;
  }
}

declare const NSCloneCommand: cocoascript.NSCloneCommand;
declare namespace cocoascript {
  /**
   * A command that counts the number of objects of a specified class in the specified object container.
   * doc://com.apple.documentation/documentation/foundation/nscountcommand
   */
  interface NSCountCommand extends NSScriptCommand {
    //
    alloc():cocoascript.NSCountCommand;
    //
    init():cocoascript.NSCountCommand;
  }
}

declare const NSCountCommand: cocoascript.NSCountCommand;
// doc://com.apple.documentation/documentation/foundation/nscurrentlocaledidchangenotification
declare const NSCurrentLocaleDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nslocalekey
  type NSLocaleKey = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nslocalelanguagedirection
  type NSLocaleLanguageDirection = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsfileprotectioncomplete
declare const NSFileProtectionComplete: cocoascript.NSFileProtectionType;
// doc://com.apple.documentation/documentation/foundation/nsfileprotectioncompleteunlessopen
declare const NSFileProtectionCompleteUnlessOpen: cocoascript.NSFileProtectionType;
// doc://com.apple.documentation/documentation/foundation/nsurlpathkey
declare const NSURLPathKey: cocoascript.NSURLResourceKey;
declare namespace cocoascript {
  /**
   * A mutable collection you use to temporarily store transient key-value pairs that are subject to eviction when resources are low.
   * doc://com.apple.documentation/documentation/foundation/nscache
   */
  interface NSCache extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nscache/1409941-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1416355-countlimit
    countLimit(): cocoascript.NSUInteger;
    setCountLimit(): void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1407672-totalcostlimit
    totalCostLimit(): cocoascript.NSUInteger;
    setTotalCostLimit(): void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1408469-evictsobjectswithdiscardedconten
    evictsObjectsWithDiscardedContent(): cocoascript.BOOL;
    setEvictsObjectsWithDiscardedContent(): void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1413061-delegate
    delegate(): cocoascript.NSCacheDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1415458-objectforkey
    objectForKey(key: cocoascript.KeyType):void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1408223-setobject
    setObject_forKey(obj: any, key: cocoascript.KeyType):void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1416399-setobject
    setObject_forKey_cost(obj: any, key: cocoascript.KeyType, g: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1409900-removeobjectforkey
    removeObjectForKey(key: cocoascript.KeyType):void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1411382-removeallobjects
    removeAllObjects():void;
    //
    alloc():cocoascript.NSCache;
    //
    init():cocoascript.NSCache;
  }
}

declare const NSCache: cocoascript.NSCache;
// doc://com.apple.documentation/documentation/foundation/nsundoclosegroupingrunloopordering
declare const NSUndoCloseGroupingRunLoopOrdering: cocoascript.NSUInteger;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsfileversionaddingoptions
  type NSFileVersionAddingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsfileversionreplacingoptions
  type NSFileVersionReplacingOptions = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsfileextensionhidden
declare const NSFileExtensionHidden: cocoascript.NSFileAttributeKey;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsoperationqueuepriority
  type NSOperationQueuePriority = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsqualityofservice
  type NSQualityOfService = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A mutable data object containing bytes that can be discarded when they're no longer needed.
   * doc://com.apple.documentation/documentation/foundation/nspurgeabledata
   */
  interface NSPurgeableData extends NSMutableData {
    //
    alloc():cocoascript.NSPurgeableData;
    //
    init():cocoascript.NSPurgeableData;
  }
}

declare const NSPurgeableData: cocoascript.NSPurgeableData;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumetotalcapacitykey
declare const NSURLVolumeTotalCapacityKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeavailablecapacitykey
declare const NSURLVolumeAvailableCapacityKey: cocoascript.NSURLResourceKey;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemdownloadingstatus
  type NSURLUbiquitousItemDownloadingStatus = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlthumbnaildictionaryitem
  type NSURLThumbnailDictionaryItem = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/foundation/nsurlisapplicationkey
declare const NSURLIsApplicationKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlapplicationisscriptablekey
declare const NSURLApplicationIsScriptableKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlisdirectorykey
declare const NSURLIsDirectoryKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlparentdirectoryurlkey
declare const NSURLParentDirectoryURLKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeavailablecapacityforimportantusagekey
declare const NSURLVolumeAvailableCapacityForImportantUsageKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeavailablecapacityforopportunisticusagekey
declare const NSURLVolumeAvailableCapacityForOpportunisticUsageKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeisautomountedkey
declare const NSURLVolumeIsAutomountedKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeisbrowsablekey
declare const NSURLVolumeIsBrowsableKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeisejectablekey
declare const NSURLVolumeIsEjectableKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeisencryptedkey
declare const NSURLVolumeIsEncryptedKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeisinternalkey
declare const NSURLVolumeIsInternalKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeisjournalingkey
declare const NSURLVolumeIsJournalingKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeislocalkey
declare const NSURLVolumeIsLocalKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeisreadonlykey
declare const NSURLVolumeIsReadOnlyKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeisremovablekey
declare const NSURLVolumeIsRemovableKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeisrootfilesystemkey
declare const NSURLVolumeIsRootFileSystemKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlismounttriggerkey
declare const NSURLIsMountTriggerKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlisvolumekey
declare const NSURLIsVolumeKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumecreationdatekey
declare const NSURLVolumeCreationDateKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeidentifierkey
declare const NSURLVolumeIdentifierKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumelocalizedformatdescriptionkey
declare const NSURLVolumeLocalizedFormatDescriptionKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumelocalizednamekey
declare const NSURLVolumeLocalizedNameKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumemaximumfilesizekey
declare const NSURLVolumeMaximumFileSizeKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumenamekey
declare const NSURLVolumeNameKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeresourcecountkey
declare const NSURLVolumeResourceCountKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportsaccesspermissionskey
declare const NSURLVolumeSupportsAccessPermissionsKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportsadvisoryfilelockingkey
declare const NSURLVolumeSupportsAdvisoryFileLockingKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportscasepreservednameskey
declare const NSURLVolumeSupportsCasePreservedNamesKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportscasesensitivenameskey
declare const NSURLVolumeSupportsCaseSensitiveNamesKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportscompressionkey
declare const NSURLVolumeSupportsCompressionKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportsexclusiverenamingkey
declare const NSURLVolumeSupportsExclusiveRenamingKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportsextendedsecuritykey
declare const NSURLVolumeSupportsExtendedSecurityKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportsfilecloningkey
declare const NSURLVolumeSupportsFileCloningKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportshardlinkskey
declare const NSURLVolumeSupportsHardLinksKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportsimmutablefileskey
declare const NSURLVolumeSupportsImmutableFilesKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportsjournalingkey
declare const NSURLVolumeSupportsJournalingKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportspersistentidskey
declare const NSURLVolumeSupportsPersistentIDsKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportsrenamingkey
declare const NSURLVolumeSupportsRenamingKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportsrootdirectorydateskey
declare const NSURLVolumeSupportsRootDirectoryDatesKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportssparsefileskey
declare const NSURLVolumeSupportsSparseFilesKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportsswaprenamingkey
declare const NSURLVolumeSupportsSwapRenamingKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportssymboliclinkskey
declare const NSURLVolumeSupportsSymbolicLinksKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportsvolumesizeskey
declare const NSURLVolumeSupportsVolumeSizesKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportszerorunskey
declare const NSURLVolumeSupportsZeroRunsKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeurlforremountingkey
declare const NSURLVolumeURLForRemountingKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeurlkey
declare const NSURLVolumeURLKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumeuuidstringkey
declare const NSURLVolumeUUIDStringKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlisubiquitousitemkey
declare const NSURLIsUbiquitousItemKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousshareditemmostrecenteditornamecomponentskey
declare const NSURLUbiquitousSharedItemMostRecentEditorNameComponentsKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemdownloadrequestedkey
declare const NSURLUbiquitousItemDownloadRequestedKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemisdownloadingkey
declare const NSURLUbiquitousItemIsDownloadingKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemdownloadingerrorkey
declare const NSURLUbiquitousItemDownloadingErrorKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemdownloadingstatuskey
declare const NSURLUbiquitousItemDownloadingStatusKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemisuploadedkey
declare const NSURLUbiquitousItemIsUploadedKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemisuploadingkey
declare const NSURLUbiquitousItemIsUploadingKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemuploadingerrorkey
declare const NSURLUbiquitousItemUploadingErrorKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemcontainerdisplaynamekey
declare const NSURLUbiquitousItemContainerDisplayNameKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousshareditemownernamecomponentskey
declare const NSURLUbiquitousSharedItemOwnerNameComponentsKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousshareditemcurrentuserpermissionskey
declare const NSURLUbiquitousSharedItemCurrentUserPermissionsKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousshareditemcurrentuserrolekey
declare const NSURLUbiquitousSharedItemCurrentUserRoleKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemissharedkey
declare const NSURLUbiquitousItemIsSharedKey: cocoascript.NSURLResourceKey;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlubiquitousshareditemrole
  type NSURLUbiquitousSharedItemRole = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlubiquitousshareditempermissions
  type NSURLUbiquitousSharedItemPermissions = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/foundation/nsurlkeysofunsetvalueskey
declare const NSURLKeysOfUnsetValuesKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlquarantinepropertieskey
declare const NSURLQuarantinePropertiesKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurladdedtodirectorydatekey
declare const NSURLAddedToDirectoryDateKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlattributemodificationdatekey
declare const NSURLAttributeModificationDateKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlcontentaccessdatekey
declare const NSURLContentAccessDateKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlcontentmodificationdatekey
declare const NSURLContentModificationDateKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlcreationdatekey
declare const NSURLCreationDateKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlcustomiconkey
declare const NSURLCustomIconKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurldocumentidentifierkey
declare const NSURLDocumentIdentifierKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurleffectiveiconkey
declare const NSURLEffectiveIconKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlgenerationidentifierkey
declare const NSURLGenerationIdentifierKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlhashiddenextensionkey
declare const NSURLHasHiddenExtensionKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlisexcludedfrombackupkey
declare const NSURLIsExcludedFromBackupKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlisexecutablekey
declare const NSURLIsExecutableKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlishiddenkey
declare const NSURLIsHiddenKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlisreadablekey
declare const NSURLIsReadableKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlissymboliclinkkey
declare const NSURLIsSymbolicLinkKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlissystemimmutablekey
declare const NSURLIsSystemImmutableKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlisuserimmutablekey
declare const NSURLIsUserImmutableKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurliswritablekey
declare const NSURLIsWritableKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurllabelcolorkey
declare const NSURLLabelColorKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurllabelnumberkey
declare const NSURLLabelNumberKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurllinkcountkey
declare const NSURLLinkCountKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurllocalizedlabelkey
declare const NSURLLocalizedLabelKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurllocalizednamekey
declare const NSURLLocalizedNameKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurllocalizedtypedescriptionkey
declare const NSURLLocalizedTypeDescriptionKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlnamekey
declare const NSURLNameKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlcanonicalpathkey
declare const NSURLCanonicalPathKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurltypeidentifierkey
declare const NSURLTypeIdentifierKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlcontenttypekey
declare const NSURLContentTypeKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemisdownloadedkey
declare const NSURLUbiquitousItemIsDownloadedKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitempercentdownloadedkey
declare const NSURLUbiquitousItemPercentDownloadedKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitempercentuploadedkey
declare const NSURLUbiquitousItemPercentUploadedKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlfilecontentidentifierkey
declare const NSURLFileContentIdentifierKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlispurgeablekey
declare const NSURLIsPurgeableKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlissparsekey
declare const NSURLIsSparseKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlmayhaveextendedattributeskey
declare const NSURLMayHaveExtendedAttributesKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlmaysharefilecontentkey
declare const NSURLMayShareFileContentKey: cocoascript.NSURLResourceKey;
// doc://com.apple.documentation/documentation/foundation/nsurlvolumesupportsfileprotectionkey
declare const NSURLVolumeSupportsFileProtectionKey: cocoascript.NSURLResourceKey;
declare namespace cocoascript {
  /**
   * An abstract class that handles the loading of protocol-specific URL data.
   * doc://com.apple.documentation/documentation/foundation/nsurlprotocol
   */
  interface NSURLProtocol extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1414366-initwithrequest
    initWithRequest_cachedResponse_client(request: cocoascript.NSURLRequest, cachedResponse: cocoascript.NSCachedURLResponse, client: cocoascript.NSURLProtocolClient):cocoascript.NSURLProtocol;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1417672-initwithtask
    initWithTask_cachedResponse_client(task: cocoascript.NSURLSessionTask, cachedResponse: cocoascript.NSCachedURLResponse, client: cocoascript.NSURLProtocolClient):cocoascript.NSURLProtocol;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1408989-startloading
    startLoading():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1408666-stoploading
    stopLoading():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1418409-cachedresponse
    cachedResponse(): cocoascript.NSCachedURLResponse;
    setCachedResponse(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1413722-client
    client(): cocoascript.NSURLProtocolClient;
    setClient(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1412383-request
    request(): cocoascript.NSURLRequest;
    setRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1407649-task
    task(): cocoascript.NSURLSessionTask;
    setTask(): void;
    //
    alloc():cocoascript.NSURLProtocol;
    //
    init():cocoascript.NSURLProtocol;
  }
}

declare const NSURLProtocol: cocoascript.NSURLProtocol;
declare namespace cocoascript {
  /**
   * A protocol that defines methods that URL session instances call on their delegates to handle task-level events.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate
   */
  interface NSURLSessionTaskDelegate extends NSURLSessionDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/1411610-urlsession
    URLSession_task_didCompleteWithError(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/1411626-urlsession
    URLSession_task_willPerformHTTPRedirection_newRequest_completionHandler(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, response: cocoascript.NSHTTPURLResponse, request: cocoascript.NSURLRequest, completionHandler: cocoascript.NSURLRequest):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/1408299-urlsession
    URLSession_task_didSendBodyData_totalBytesSent_totalBytesExpectedToSend(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/1410001-urlsession
    URLSession_task_needNewBodyStream(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, completionHandler: cocoascript.NSInputStream):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/1411595-urlsession
    URLSession_task_didReceiveChallenge_completionHandler(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, challenge: cocoascript.NSURLAuthenticationChallenge, completionHandler: cocoascript.NSURLCredential):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/2873415-urlsession
    URLSession_task_willBeginDelayedRequest_completionHandler(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, request: cocoascript.NSURLRequest, completionHandler: cocoascript.NSURLRequest):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/2908819-urlsession
    URLSession_taskIsWaitingForConnectivity(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/1643148-urlsession
    URLSession_task_didFinishCollectingMetrics(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, metrics: cocoascript.NSURLSessionTaskMetrics):void;
  }
}
declare namespace cocoascript {
  /**
   * A URL session task that returns downloaded data directly to the app in memory.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiondatatask
   */
  interface NSURLSessionDataTask extends NSURLSessionTask {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondatatask/3240618-init
    init():cocoascript.NSURLSessionDataTask;
    //
    alloc():cocoascript.NSURLSessionDataTask;
    //
    init():cocoascript.NSURLSessionDataTask;
  }
}

declare const NSURLSessionDataTask: cocoascript.NSURLSessionDataTask;
declare namespace cocoascript {
  /**
   * A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiondatadelegate
   */
  interface NSURLSessionDataDelegate extends NSURLSessionTaskDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondatadelegate/1410027-urlsession
    URLSession_dataTask_didReceiveResponse_completionHandler(session: cocoascript.NSURLSession, dataTask: cocoascript.NSURLSessionDataTask, response: cocoascript.NSURLResponse, completionHandler: cocoascript.NSURLSessionResponseDisposition):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondatadelegate/1409936-urlsession
    URLSession_dataTask_didBecomeDownloadTask(session: cocoascript.NSURLSession, dataTask: cocoascript.NSURLSessionDataTask, downloadTask: cocoascript.NSURLSessionDownloadTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondatadelegate/1411648-urlsession
    URLSession_dataTask_didBecomeStreamTask(session: cocoascript.NSURLSession, dataTask: cocoascript.NSURLSessionDataTask, streamTask: cocoascript.NSURLSessionStreamTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondatadelegate/1411528-urlsession
    URLSession_dataTask_didReceiveData(session: cocoascript.NSURLSession, dataTask: cocoascript.NSURLSessionDataTask, data: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondatadelegate/1411612-urlsession
    URLSession_dataTask_willCacheResponse_completionHandler(session: cocoascript.NSURLSession, dataTask: cocoascript.NSURLSessionDataTask, proposedResponse: cocoascript.NSCachedURLResponse, completionHandler: cocoascript.NSCachedURLResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * A URL session task that stores downloaded data to a file.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloadtask
   */
  interface NSURLSessionDownloadTask extends NSURLSessionTask {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloadtask/1411634-cancelbyproducingresumedata
    cancelByProducingResumeData(completionHandler: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloadtask/3240620-init
    init():cocoascript.NSURLSessionDownloadTask;
    //
    alloc():cocoascript.NSURLSessionDownloadTask;
    //
    init():cocoascript.NSURLSessionDownloadTask;
  }
}

declare const NSURLSessionDownloadTask: cocoascript.NSURLSessionDownloadTask;
declare namespace cocoascript {
  /**
   * A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to download tasks.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloaddelegate
   */
  interface NSURLSessionDownloadDelegate extends NSURLSessionTaskDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloaddelegate/1411575-urlsession
    URLSession_downloadTask_didFinishDownloadingToURL(session: cocoascript.NSURLSession, downloadTask: cocoascript.NSURLSessionDownloadTask, location: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloaddelegate/1408142-urlsession
    URLSession_downloadTask_didResumeAtOffset_expectedTotalBytes(session: cocoascript.NSURLSession, downloadTask: cocoascript.NSURLSessionDownloadTask, fileOffset: number, expectedTotalBytes: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloaddelegate/1409408-urlsession
    URLSession_downloadTask_didWriteData_totalBytesWritten_totalBytesExpectedToWrite(session: cocoascript.NSURLSession, downloadTask: cocoascript.NSURLSessionDownloadTask, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number):void;
  }
}
declare namespace cocoascript {
  /**
   * A URL session task that uploads data to the network in a request body.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessionuploadtask
   */
  interface NSURLSessionUploadTask extends NSURLSessionDataTask {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionuploadtask/3240644-init
    init():cocoascript.NSURLSessionUploadTask;
    //
    alloc():cocoascript.NSURLSessionUploadTask;
    //
    init():cocoascript.NSURLSessionUploadTask;
  }
}

declare const NSURLSessionUploadTask: cocoascript.NSURLSessionUploadTask;
declare namespace cocoascript {
  /**
   * A URL session task that is stream-based.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask
   */
  interface NSURLSessionStreamTask extends NSURLSessionTask {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1411604-readdataofminlength
    readDataOfMinLength_maxLength_timeout_completionHandler(minBytes: cocoascript.NSUInteger, maxBytes: cocoascript.NSUInteger, timeout: cocoascript.NSTimeInterval, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1411602-writedata
    writeData_timeout_completionHandler(data: cocoascript.NSData, timeout: cocoascript.NSTimeInterval, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1410132-capturestreams
    captureStreams():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1411558-closeread
    closeRead():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1411347-closewrite
    closeWrite():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1411567-startsecureconnection
    startSecureConnection():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1407337-stopsecureconnection
    stopSecureConnection():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/3240622-init
    init():cocoascript.NSURLSessionStreamTask;
    //
    alloc():cocoascript.NSURLSessionStreamTask;
    //
    init():cocoascript.NSURLSessionStreamTask;
  }
}

declare const NSURLSessionStreamTask: cocoascript.NSURLSessionStreamTask;
declare namespace cocoascript {
  /**
   * A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to stream tasks.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamdelegate
   */
  interface NSURLSessionStreamDelegate extends NSURLSessionTaskDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamdelegate/1407527-urlsession
    URLSession_betterRouteDiscoveredForStreamTask(session: cocoascript.NSURLSession, streamTask: cocoascript.NSURLSessionStreamTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamdelegate/1411625-urlsession
    URLSession_streamTask_didBecomeInputStream_outputStream(session: cocoascript.NSURLSession, streamTask: cocoascript.NSURLSessionStreamTask, inputStream: cocoascript.NSInputStream, outputStream: cocoascript.NSOutputStream):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamdelegate/1411501-urlsession
    URLSession_readClosedForStreamTask(session: cocoascript.NSURLSession, streamTask: cocoascript.NSURLSessionStreamTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamdelegate/1411507-urlsession
    URLSession_writeClosedForStreamTask(session: cocoascript.NSURLSession, streamTask: cocoascript.NSURLSessionStreamTask):void;
  }
}
declare namespace cocoascript {
  /**
   * A URL session task that communicates over the WebSockets protocol standard.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask
   */
  interface NSURLSessionWebSocketTask extends NSURLSessionTask {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181205-sendmessage
    sendMessage_completionHandler(message: cocoascript.NSURLSessionWebSocketMessage, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181204-receivemessagewithcompletionhand
    receiveMessageWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181203-maximummessagesize
    maximumMessageSize(): cocoascript.NSInteger;
    setMaximumMessageSize(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181206-sendpingwithpongreceivehandler
    sendPingWithPongReceiveHandler(pongReceiveHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181200-cancelwithclosecode
    cancelWithCloseCode_reason(closeCode: cocoascript.NSURLSessionWebSocketCloseCode, reason: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181201-closecode
    closeCode(): cocoascript.NSURLSessionWebSocketCloseCode;
    setCloseCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsockettask/3181202-closereason
    closeReason(): cocoascript.NSData;
    setCloseReason(): void;
    //
    alloc():cocoascript.NSURLSessionWebSocketTask;
    //
    init():cocoascript.NSURLSessionWebSocketTask;
  }
}

declare const NSURLSessionWebSocketTask: cocoascript.NSURLSessionWebSocketTask;
declare namespace cocoascript {
  /**
   * A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketdelegate
   */
  interface NSURLSessionWebSocketDelegate extends NSURLSessionTaskDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketdelegate/3181189-urlsession
    URLSession_webSocketTask_didOpenWithProtocol(session: cocoascript.NSURLSession, webSocketTask: cocoascript.NSURLSessionWebSocketTask, protocol: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketdelegate/3181188-urlsession
    URLSession_webSocketTask_didCloseWithCode_reason(session: cocoascript.NSURLSession, webSocketTask: cocoascript.NSURLSessionWebSocketTask, closeCode: cocoascript.NSURLSessionWebSocketCloseCode, reason: cocoascript.NSData):void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessage
   */
  interface NSURLSessionWebSocketMessage extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessage/3181191-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessage/3181194-string
    string(): cocoascript.NSString;
    setString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessage/3181195-type
    type(): cocoascript.NSURLSessionWebSocketMessageType;
    setType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessage/3181192-initwithdata
    initWithData(data: cocoascript.NSData):cocoascript.NSURLSessionWebSocketMessage;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessage/3181193-initwithstring
    initWithString(string: cocoascript.NSString):cocoascript.NSURLSessionWebSocketMessage;
    //
    alloc():cocoascript.NSURLSessionWebSocketMessage;
    //
    init():cocoascript.NSURLSessionWebSocketMessage;
  }
}

declare const NSURLSessionWebSocketMessage: cocoascript.NSURLSessionWebSocketMessage;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketmessagetype
  type NSURLSessionWebSocketMessageType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A protocol that most delegates of a URL connection implement to receive data associated with the connection.
   * doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate
   */
  interface NSURLConnectionDataDelegate extends NSURLConnectionDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1407728-connection
    connection_didReceiveResponse(connection: cocoascript.NSURLConnection, response: cocoascript.NSURLResponse):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1414090-connection
    connection_didReceiveData(connection: cocoascript.NSURLConnection, data: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1418264-connection
    connection_didSendBodyData_totalBytesWritten_totalBytesExpectedToWrite(connection: cocoascript.NSURLConnection, bytesWritten: cocoascript.NSInteger, totalBytesWritten: cocoascript.NSInteger, totalBytesExpectedToWrite: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1416409-connectiondidfinishloading
    connectionDidFinishLoading(connection: cocoascript.NSURLConnection):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1415830-connection
    connection_willSendRequest_redirectResponse(connection: cocoascript.NSURLConnection, request: cocoascript.NSURLRequest, response: cocoascript.NSURLResponse):cocoascript.NSURLRequest;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1412892-connection
    connection_needNewBodyStream(connection: cocoascript.NSURLConnection, request: cocoascript.NSURLRequest):cocoascript.NSInputStream;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1414834-connection
    connection_willCacheResponse(connection: cocoascript.NSURLConnection, cachedResponse: cocoascript.NSCachedURLResponse):cocoascript.NSCachedURLResponse;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that delegates of a URL connection created with Newsstand Kit implement to receive data associated with a download.
   * doc://com.apple.documentation/documentation/foundation/nsurlconnectiondownloaddelegate
   */
  interface NSURLConnectionDownloadDelegate extends NSURLConnectionDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondownloaddelegate/1418304-connection
    connection_didWriteData_totalBytesWritten_expectedTotalBytes(connection: cocoascript.NSURLConnection, bytesWritten: number, totalBytesWritten: number, expectedTotalBytes: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondownloaddelegate/1418157-connectiondidresumedownloading
    connectionDidResumeDownloading_totalBytesWritten_expectedTotalBytes(connection: cocoascript.NSURLConnection, totalBytesWritten: number, expectedTotalBytes: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondownloaddelegate/1412126-connectiondidfinishdownloading
    connectionDidFinishDownloading_destinationURL(connection: cocoascript.NSURLConnection, destinationURL: cocoascript.NSURL):void;
  }
}
declare namespace cocoascript {
  /**
   * A mutable URL load request that is independent of protocol or URL scheme.
   * doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest
   */
  interface NSMutableURLRequest extends NSURLRequest {
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1414716-cachepolicy
    cachePolicy(): cocoascript.NSURLRequestCachePolicy;
    setCachePolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1413047-httpmethod
    HTTPMethod(): cocoascript.NSString;
    setHTTPMethod(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1410342-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1409064-httpbody
    HTTPBody(): cocoascript.NSData;
    setHTTPBody(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1409529-httpbodystream
    HTTPBodyStream(): cocoascript.NSInputStream;
    setHTTPBodyStream(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1415630-maindocumenturl
    mainDocumentURL(): cocoascript.NSURL;
    setMainDocumentURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1414617-allhttpheaderfields
    allHTTPHeaderFields(): cocoascript.NSString;
    setAllHTTPHeaderFields(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1407676-addvalue
    addValue_forHTTPHeaderField(value: cocoascript.NSString, field: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1408793-setvalue
    setValue_forHTTPHeaderField(value: cocoascript.NSString, field: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1414063-timeoutinterval
    timeoutInterval(): cocoascript.NSTimeInterval;
    setTimeoutInterval(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1415485-httpshouldhandlecookies
    HTTPShouldHandleCookies(): cocoascript.BOOL;
    setHTTPShouldHandleCookies(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1412705-httpshouldusepipelining
    HTTPShouldUsePipelining(): cocoascript.BOOL;
    setHTTPShouldUsePipelining(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1416749-allowscellularaccess
    allowsCellularAccess(): cocoascript.BOOL;
    setAllowsCellularAccess(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/3325676-allowsconstrainednetworkaccess
    allowsConstrainedNetworkAccess(): cocoascript.BOOL;
    setAllowsConstrainedNetworkAccess(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/3325677-allowsexpensivenetworkaccess
    allowsExpensiveNetworkAccess(): cocoascript.BOOL;
    setAllowsExpensiveNetworkAccess(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1412378-networkservicetype
    networkServiceType(): cocoascript.NSURLRequestNetworkServiceType;
    setNetworkServiceType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1619006-bindtohotspothelpercommand
    bindToHotspotHelperCommand(command: cocoascript.NEHotspotHelperCommand):void;
    //
    alloc():cocoascript.NSMutableURLRequest;
    //
    init():cocoascript.NSMutableURLRequest;
  }
}

declare const NSMutableURLRequest: cocoascript.NSMutableURLRequest;
declare namespace cocoascript {
  /**
   * The metadata associated with the response to an HTTP protocol URL load request.
   * doc://com.apple.documentation/documentation/foundation/nshttpurlresponse
   */
  interface NSHTTPURLResponse extends NSURLResponse {
    // doc://com.apple.documentation/documentation/foundation/nshttpurlresponse/1415870-initwithurl
    initWithURL_statusCode_HTTPVersion_headerFields(url: cocoascript.NSURL, statusCode: cocoascript.NSInteger, HTTPVersion: cocoascript.NSString, headerFields: cocoascript.NSString):cocoascript.NSHTTPURLResponse;
    // doc://com.apple.documentation/documentation/foundation/nshttpurlresponse/1417930-allheaderfields
    allHeaderFields(): cocoascript.NSDictionary;
    setAllHeaderFields(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpurlresponse/3240613-valueforhttpheaderfield
    valueForHTTPHeaderField(field: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nshttpurlresponse/1409395-statuscode
    statusCode(): cocoascript.NSInteger;
    setStatusCode(): void;
    //
    alloc():cocoascript.NSHTTPURLResponse;
    //
    init():cocoascript.NSHTTPURLResponse;
  }
}

declare const NSHTTPURLResponse: cocoascript.NSHTTPURLResponse;
declare namespace cocoascript {
  /**
   * An object that maps URL requests to cached response objects.
   * doc://com.apple.documentation/documentation/foundation/nsurlcache
   */
  interface NSURLCache extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1413377-sharedurlcache
    sharedURLCache(): cocoascript.NSURLCache;
    setSharedURLCache(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/3240612-initwithmemorycapacity
    initWithMemoryCapacity_diskCapacity_directoryURL(memoryCapacity: cocoascript.NSUInteger, diskCapacity: cocoascript.NSUInteger, directoryURL: cocoascript.NSURL):cocoascript.NSURLCache;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1415637-initwithmemorycapacity
    initWithMemoryCapacity_diskCapacity_diskPath(memoryCapacity: cocoascript.NSUInteger, diskCapacity: cocoascript.NSUInteger, path: cocoascript.NSString):cocoascript.NSURLCache;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1411817-cachedresponseforrequest
    cachedResponseForRequest(request: cocoascript.NSURLRequest):cocoascript.NSCachedURLResponse;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1410340-storecachedresponse
    storeCachedResponse_forRequest(cachedResponse: cocoascript.NSCachedURLResponse, request: cocoascript.NSURLRequest):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1409184-getcachedresponsefordatatask
    getCachedResponseForDataTask_completionHandler(dataTask: cocoascript.NSURLSessionDataTask, completionHandler: cocoascript.NSCachedURLResponse):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1414434-storecachedresponse
    storeCachedResponse_forDataTask(cachedResponse: cocoascript.NSCachedURLResponse, dataTask: cocoascript.NSURLSessionDataTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1415377-removecachedresponseforrequest
    removeCachedResponseForRequest(request: cocoascript.NSURLRequest):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1412258-removecachedresponsefordatatask
    removeCachedResponseForDataTask(dataTask: cocoascript.NSURLSessionDataTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1415231-removecachedresponsessincedate
    removeCachedResponsesSinceDate(date: cocoascript.NSDate):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1417802-removeallcachedresponses
    removeAllCachedResponses():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1407771-currentdiskusage
    currentDiskUsage(): cocoascript.NSUInteger;
    setCurrentDiskUsage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1413505-diskcapacity
    diskCapacity(): cocoascript.NSUInteger;
    setDiskCapacity(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1408199-currentmemoryusage
    currentMemoryUsage(): cocoascript.NSUInteger;
    setCurrentMemoryUsage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1409781-memorycapacity
    memoryCapacity(): cocoascript.NSUInteger;
    setMemoryCapacity(): void;
    //
    alloc():cocoascript.NSURLCache;
    //
    init():cocoascript.NSURLCache;
  }
}

declare const NSURLCache: cocoascript.NSURLCache;
declare namespace cocoascript {
  /**
   * The manager of a shared credentials cache.
   * doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage
   */
  interface NSURLCredentialStorage extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1412355-sharedcredentialstorage
    sharedCredentialStorage(): cocoascript.NSURLCredentialStorage;
    setSharedCredentialStorage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1412650-defaultcredentialforprotectionsp
    defaultCredentialForProtectionSpace(space: cocoascript.NSURLProtectionSpace):cocoascript.NSURLCredential;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1411794-getdefaultcredentialforprotectio
    getDefaultCredentialForProtectionSpace_task_completionHandler(space: cocoascript.NSURLProtectionSpace, task: cocoascript.NSURLSessionTask, completionHandler: cocoascript.NSURLCredential):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1416502-setdefaultcredential
    setDefaultCredential_forProtectionSpace(credential: cocoascript.NSURLCredential, space: cocoascript.NSURLProtectionSpace):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1416429-setdefaultcredential
    setDefaultCredential_forProtectionSpace_task(credential: cocoascript.NSURLCredential, protectionSpace: cocoascript.NSURLProtectionSpace, task: cocoascript.NSURLSessionTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1408664-removecredential
    removeCredential_forProtectionSpace(credential: cocoascript.NSURLCredential, space: cocoascript.NSURLProtectionSpace):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1407695-removecredential
    removeCredential_forProtectionSpace_options(credential: cocoascript.NSURLCredential, space: cocoascript.NSURLProtectionSpace, options: cocoascript.NSURLCredentialStorage):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1407237-removecredential
    removeCredential_forProtectionSpace_options_task(credential: cocoascript.NSURLCredential, protectionSpace: cocoascript.NSURLProtectionSpace, options: cocoascript.NSURLCredentialStorage, task: cocoascript.NSURLSessionTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1407227-setcredential
    setCredential_forProtectionSpace(credential: cocoascript.NSURLCredential, space: cocoascript.NSURLProtectionSpace):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1412703-setcredential
    setCredential_forProtectionSpace_task(credential: cocoascript.NSURLCredential, protectionSpace: cocoascript.NSURLProtectionSpace, task: cocoascript.NSURLSessionTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1413859-allcredentials
    allCredentials(): cocoascript.NSURLCredential;
    setAllCredentials(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1413910-credentialsforprotectionspace
    credentialsForProtectionSpace(space: cocoascript.NSURLProtectionSpace):cocoascript.NSURLCredential;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1418119-getcredentialsforprotectionspace
    getCredentialsForProtectionSpace_task_completionHandler(protectionSpace: cocoascript.NSURLProtectionSpace, task: cocoascript.NSURLSessionTask, completionHandler: cocoascript.NSURLCredential):void;
    //
    alloc():cocoascript.NSURLCredentialStorage;
    //
    init():cocoascript.NSURLCredentialStorage;
  }
}

declare const NSURLCredentialStorage: cocoascript.NSURLCredentialStorage;
declare namespace cocoascript {
  /**
   * A representation of an HTTP cookie.
   * doc://com.apple.documentation/documentation/foundation/nshttpcookie
   */
  interface NSHTTPCookie extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392975-initwithproperties
    initWithProperties(properties: cocoascript.NSHTTPCookie):cocoascript.NSHTTPCookie;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1393015-domain
    domain(): cocoascript.NSString;
    setDomain(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392981-path
    path(): cocoascript.NSString;
    setPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1393027-portlist
    portList(): cocoascript.NSNumber;
    setPortList(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1393013-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392995-value
    value(): cocoascript.NSString;
    setValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392993-version
    version(): cocoascript.NSUInteger;
    setVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1393019-expiresdate
    expiresDate(): cocoascript.NSDate;
    setExpiresDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392991-sessiononly
    sessionOnly(): cocoascript.BOOL;
    setSessionOnly(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392969-httponly
    HTTPOnly(): cocoascript.BOOL;
    setHTTPOnly(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1393025-secure
    secure(): cocoascript.BOOL;
    setSecure(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/3042420-samesitepolicy
    sameSitePolicy(): cocoascript.NSHTTPCookieStringPolicy;
    setSameSitePolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1393017-properties
    properties(): cocoascript.id;
    setProperties(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392997-comment
    comment(): cocoascript.NSString;
    setComment(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392987-commenturl
    commentURL(): cocoascript.NSURL;
    setCommentURL(): void;
    //
    alloc():cocoascript.NSHTTPCookie;
    //
    init():cocoascript.NSHTTPCookie;
  }
}

declare const NSHTTPCookie: cocoascript.NSHTTPCookie;
declare namespace cocoascript {
  /**
   * A container that manages the storage of cookies.
   * doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage
   */
  interface NSHTTPCookieStorage extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1416095-sharedhttpcookiestorage
    sharedHTTPCookieStorage(): cocoascript.NSHTTPCookieStorage;
    setSharedHTTPCookieStorage(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1410415-cookieacceptpolicy
    cookieAcceptPolicy(): cocoascript.NSHTTPCookieAcceptPolicy;
    setCookieAcceptPolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1407256-removecookiessincedate
    removeCookiesSinceDate(date: cocoascript.NSDate):void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1409218-deletecookie
    deleteCookie(cookie: cocoascript.NSHTTPCookie):void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1418356-setcookie
    setCookie(cookie: cocoascript.NSHTTPCookie):void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1412510-setcookies
    setCookies_forURL_mainDocumentURL(cookies: cocoascript.NSHTTPCookie, URL: cocoascript.NSURL, mainDocumentURL: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1415381-storecookies
    storeCookies_forTask(cookies: cocoascript.NSHTTPCookie, task: cocoascript.NSURLSessionTask):void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1418390-cookies
    cookies(): cocoascript.NSHTTPCookie;
    setCookies(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1408517-getcookiesfortask
    getCookiesForTask_completionHandler(task: cocoascript.NSURLSessionTask, completionHandler: cocoascript.NSHTTPCookie):void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1412100-cookiesforurl
    cookiesForURL(URL: cocoascript.NSURL):cocoascript.NSHTTPCookie;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1413730-sortedcookiesusingdescriptors
    sortedCookiesUsingDescriptors(sortOrder: cocoascript.NSSortDescriptor):cocoascript.NSHTTPCookie;
    //
    alloc():cocoascript.NSHTTPCookieStorage;
    //
    init():cocoascript.NSHTTPCookieStorage;
  }
}

declare const NSHTTPCookieStorage: cocoascript.NSHTTPCookieStorage;
declare namespace cocoascript {
  /**
   * An object that accesses and manages resource data indicated by a URL.
   * doc://com.apple.documentation/documentation/foundation/nsurlhandle
   */
  interface NSURLHandle extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589236-initwithurl
    initWithURL_cached(anURL: cocoascript.NSURL, willCache: cocoascript.BOOL):cocoascript.NSURLHandle;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589220-addclient
    addClient(client: cocoascript.NSURLHandleClient):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589230-removeclient
    removeClient(client: cocoascript.NSURLHandleClient):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589214-propertyforkey
    propertyForKey(propertyKey: cocoascript.NSString):cocoascript.NSURLHandle;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589204-propertyforkeyifavailable
    propertyForKeyIfAvailable(propertyKey: cocoascript.NSString):cocoascript.NSURLHandle;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589241-writeproperty
    writeProperty_forKey(propertyValue: cocoascript.NSURLHandle, propertyKey: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589224-availableresourcedata
    availableResourceData():cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589225-backgroundloaddidfailwithreason
    backgroundLoadDidFailWithReason(reason: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589229-beginloadinbackground
    beginLoadInBackground():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589240-cancelloadinbackground
    cancelLoadInBackground():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589234-didloadbytes
    didLoadBytes_loadComplete(newBytes: cocoascript.NSData, yorn: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589238-endloadinbackground
    endLoadInBackground():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589239-expectedresourcedatasize
    expectedResourceDataSize():number;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589205-failurereason
    failureReason():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589233-flushcacheddata
    flushCachedData():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589221-loadinbackground
    loadInBackground():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589222-loadinforeground
    loadInForeground():cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589209-resourcedata
    resourceData():cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589243-status
    status():cocoascript.NSURLHandleStatus;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589210-writedata
    writeData(data: cocoascript.NSData):cocoascript.BOOL;
    //
    alloc():cocoascript.NSURLHandle;
    //
    init():cocoascript.NSURLHandle;
  }
}

declare const NSURLHandle: cocoascript.NSURLHandle;
// doc://com.apple.documentation/documentation/foundation/nsftppropertyactivetransfermodekey
declare const NSFTPPropertyActiveTransferModeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsftppropertyftpproxy
declare const NSFTPPropertyFTPProxy: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsftppropertyfileoffsetkey
declare const NSFTPPropertyFileOffsetKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsftppropertyuserloginkey
declare const NSFTPPropertyUserLoginKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsftppropertyuserpasswordkey
declare const NSFTPPropertyUserPasswordKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nshttppropertyerrorpagedatakey
declare const NSHTTPPropertyErrorPageDataKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nshttppropertyhttpproxy
declare const NSHTTPPropertyHTTPProxy: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nshttppropertyredirectionheaderskey
declare const NSHTTPPropertyRedirectionHeadersKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nshttppropertyserverhttpversionkey
declare const NSHTTPPropertyServerHTTPVersionKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nshttppropertystatuscodekey
declare const NSHTTPPropertyStatusCodeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nshttppropertystatusreasonkey
declare const NSHTTPPropertyStatusReasonKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/foundation/nsurlfileresourcetypenamedpipe
declare const NSURLFileResourceTypeNamedPipe: cocoascript.NSURLFileResourceType;
// doc://com.apple.documentation/documentation/foundation/nsurlfileresourcetypecharacterspecial
declare const NSURLFileResourceTypeCharacterSpecial: cocoascript.NSURLFileResourceType;
// doc://com.apple.documentation/documentation/foundation/nsurlfileresourcetypedirectory
declare const NSURLFileResourceTypeDirectory: cocoascript.NSURLFileResourceType;
// doc://com.apple.documentation/documentation/foundation/nsurlfileresourcetypeblockspecial
declare const NSURLFileResourceTypeBlockSpecial: cocoascript.NSURLFileResourceType;
// doc://com.apple.documentation/documentation/foundation/nsurlfileresourcetyperegular
declare const NSURLFileResourceTypeRegular: cocoascript.NSURLFileResourceType;
// doc://com.apple.documentation/documentation/foundation/nsurlfileresourcetypesymboliclink
declare const NSURLFileResourceTypeSymbolicLink: cocoascript.NSURLFileResourceType;
// doc://com.apple.documentation/documentation/foundation/nsurlfileresourcetypesocket
declare const NSURLFileResourceTypeSocket: cocoascript.NSURLFileResourceType;
// doc://com.apple.documentation/documentation/foundation/nsurlfileresourcetypeunknown
declare const NSURLFileResourceTypeUnknown: cocoascript.NSURLFileResourceType;
// doc://com.apple.documentation/documentation/foundation/nsurlfileprotectioncomplete
declare const NSURLFileProtectionComplete: cocoascript.NSURLFileProtectionType;
// doc://com.apple.documentation/documentation/foundation/nsurlfileprotectioncompleteunlessopen
declare const NSURLFileProtectionCompleteUnlessOpen: cocoascript.NSURLFileProtectionType;
// doc://com.apple.documentation/documentation/foundation/nsurlfileprotectioncompleteuntilfirstuserauthentication
declare const NSURLFileProtectionCompleteUntilFirstUserAuthentication: cocoascript.NSURLFileProtectionType;
// doc://com.apple.documentation/documentation/foundation/nsurlfileprotectionnone
declare const NSURLFileProtectionNone: cocoascript.NSURLFileProtectionType;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerationoptions
  type NSDirectoryEnumerationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nssearchpathdirectory
  type NSSearchPathDirectory = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nssearchpathdomainmask
  type NSSearchPathDomainMask = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsfileattributekey
  type NSFileAttributeKey = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsfileattributetype
  type NSFileAttributeType = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsfileprotectiontype
  type NSFileProtectionType = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/foundation/nsappleeventtimeoutdefault
declare const NSAppleEventTimeOutDefault: number;
// doc://com.apple.documentation/documentation/foundation/nsappleeventtimeoutnone
declare const NSAppleEventTimeOutNone: number;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsappleeventsendoptions
  type NSAppleEventSendOptions = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsdefaultrunloopmode
declare const NSDefaultRunLoopMode: cocoascript.NSRunLoopMode;
declare namespace cocoascript {
  /**
   * An object representing a subprocess of the current process.
   * doc://com.apple.documentation/documentation/foundation/nstask
   */
  interface NSTask extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nstask/1415790-init
    init():cocoascript.NSTask;
    // doc://com.apple.documentation/documentation/foundation/nstask/1408983-arguments
    arguments(): cocoascript.NSString;
    setArguments(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1413110-currentdirectorypath
    currentDirectoryPath(): cocoascript.NSString;
    setCurrentDirectoryPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1409412-environment
    environment(): cocoascript.NSString;
    setEnvironment(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1414221-launchpath
    launchPath(): cocoascript.NSString;
    setLaunchPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1412022-processidentifier
    processIdentifier(): number;
    setProcessIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1414916-standarderror
    standardError(): cocoascript.id;
    setStandardError(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1411576-standardinput
    standardInput(): cocoascript.id;
    setStandardInput(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1407627-standardoutput
    standardOutput(): cocoascript.id;
    setStandardOutput(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1410874-interrupt
    interrupt():void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1414189-launch
    launch():void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1407819-resume
    resume():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nstask/1411590-suspend
    suspend():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nstask/1409620-terminate
    terminate():void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1415808-waituntilexit
    waitUntilExit():void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1415788-running
    running(): cocoascript.BOOL;
    setRunning(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1415801-terminationstatus
    terminationStatus(): number;
    setTerminationStatus(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1415605-terminationreason
    terminationReason(): cocoascript.NSTaskTerminationReason;
    setTerminationReason(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1408983-arguments
    arguments(): cocoascript.NSString;
    setArguments(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1413110-currentdirectorypath
    currentDirectoryPath(): cocoascript.NSString;
    setCurrentDirectoryPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1409412-environment
    environment(): cocoascript.NSString;
    setEnvironment(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1414221-launchpath
    launchPath(): cocoascript.NSString;
    setLaunchPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1414916-standarderror
    standardError(): cocoascript.id;
    setStandardError(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1411576-standardinput
    standardInput(): cocoascript.id;
    setStandardInput(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1407627-standardoutput
    standardOutput(): cocoascript.id;
    setStandardOutput(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1408746-terminationhandler
    terminationHandler(): cocoascript.NSTask;
    setTerminationHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/2890107-currentdirectoryurl
    currentDirectoryURL(): cocoascript.NSURL;
    setCurrentDirectoryURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/2890106-executableurl
    executableURL(): cocoascript.NSURL;
    setExecutableURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/1415794-qualityofservice
    qualityOfService(): cocoascript.NSQualityOfService;
    setQualityOfService(): void;
    // doc://com.apple.documentation/documentation/foundation/nstask/2890105-launchandreturnerror
    launchAndReturnError(error: cocoascript.NSError):cocoascript.BOOL;
    //
    alloc():cocoascript.NSTask;
    //
    init():cocoascript.NSTask;
  }
}

declare const NSTask: cocoascript.NSTask;
declare namespace cocoascript {
  /**
   * An object that executes scripts.
   * doc://com.apple.documentation/documentation/foundation/nsuserscripttask
   */
  interface NSUserScriptTask extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsuserscripttask/1409998-initwithurl
    initWithURL_error(url: cocoascript.NSURL, error: cocoascript.NSError):cocoascript.NSUserScriptTask;
    // doc://com.apple.documentation/documentation/foundation/nsuserscripttask/1408618-scripturl
    scriptURL(): cocoascript.NSURL;
    setScriptURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuserscripttask/1410967-executewithcompletionhandler
    executeWithCompletionHandler(handler: cocoascript.NSUserScriptTaskCompletionHandler):void;
    //
    alloc():cocoascript.NSUserScriptTask;
    //
    init():cocoascript.NSUserScriptTask;
  }
}

declare const NSUserScriptTask: cocoascript.NSUserScriptTask;
declare namespace cocoascript {
  /**
   * An object that executes AppleScript scripts.
   * doc://com.apple.documentation/documentation/foundation/nsuserapplescripttask
   */
  interface NSUserAppleScriptTask extends NSUserScriptTask {
    // doc://com.apple.documentation/documentation/foundation/nsuserapplescripttask/1416515-executewithappleevent
    executeWithAppleEvent_completionHandler(event: cocoascript.NSAppleEventDescriptor, handler: cocoascript.NSUserAppleScriptTaskCompletionHandler):void;
    //
    alloc():cocoascript.NSUserAppleScriptTask;
    //
    init():cocoascript.NSUserAppleScriptTask;
  }
}

declare const NSUserAppleScriptTask: cocoascript.NSUserAppleScriptTask;
declare namespace cocoascript {
  /**
   * An object that executes Automator workflows.
   * doc://com.apple.documentation/documentation/foundation/nsuserautomatortask
   */
  interface NSUserAutomatorTask extends NSUserScriptTask {
    // doc://com.apple.documentation/documentation/foundation/nsuserautomatortask/1418079-executewithinput
    executeWithInput_completionHandler(input: cocoascript.NSSecureCoding, handler: cocoascript.NSUserAutomatorTaskCompletionHandler):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserautomatortask/1418099-variables
    variables(): cocoascript.id;
    setVariables(): void;
    //
    alloc():cocoascript.NSUserAutomatorTask;
    //
    init():cocoascript.NSUserAutomatorTask;
  }
}

declare const NSUserAutomatorTask: cocoascript.NSUserAutomatorTask;
declare namespace cocoascript {
  /**
   * An object that executes unix applications.
   * doc://com.apple.documentation/documentation/foundation/nsuserunixtask
   */
  interface NSUserUnixTask extends NSUserScriptTask {
    // doc://com.apple.documentation/documentation/foundation/nsuserunixtask/1412077-executewitharguments
    executeWithArguments_completionHandler(arguments: cocoascript.NSString, handler: cocoascript.NSUserUnixTaskCompletionHandler):void;
    // doc://com.apple.documentation/documentation/foundation/nsuserunixtask/1411522-standarderror
    standardError(): cocoascript.NSFileHandle;
    setStandardError(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuserunixtask/1407821-standardinput
    standardInput(): cocoascript.NSFileHandle;
    setStandardInput(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuserunixtask/1418151-standardoutput
    standardOutput(): cocoascript.NSFileHandle;
    setStandardOutput(): void;
    //
    alloc():cocoascript.NSUserUnixTask;
    //
    init():cocoascript.NSUserUnixTask;
  }
}

declare const NSUserUnixTask: cocoascript.NSUserUnixTask;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsuncaughtexceptionhandler
  type NSUncaughtExceptionHandler = cocoascript._Nonnull;
}
declare namespace cocoascript {
  /**
   * An abstract class representing a stream.
   * doc://com.apple.documentation/documentation/foundation/nsstream
   */
  interface NSStream extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsstream/1410226-propertyforkey
    propertyForKey(key: cocoascript.NSStreamPropertyKey):cocoascript.NSStream;
    // doc://com.apple.documentation/documentation/foundation/nsstream/1412045-setproperty
    setProperty_forKey(property: cocoascript.NSStream, key: cocoascript.NSStreamPropertyKey):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsstream/1418423-delegate
    delegate(): cocoascript.NSStreamDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstream/1411963-open
    open():void;
    // doc://com.apple.documentation/documentation/foundation/nsstream/1410399-close
    close():void;
    // doc://com.apple.documentation/documentation/foundation/nsstream/1417370-scheduleinrunloop
    scheduleInRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsstream/1411285-removefromrunloop
    removeFromRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsstream/1413038-streamstatus
    streamStatus(): cocoascript.NSStreamStatus;
    setStreamStatus(): void;
    // doc://com.apple.documentation/documentation/foundation/nsstream/1416359-streamerror
    streamError(): cocoascript.NSError;
    setStreamError(): void;
    //
    alloc():cocoascript.NSStream;
    //
    init():cocoascript.NSStream;
  }
}

declare const NSStream: cocoascript.NSStream;
declare namespace cocoascript {
  /**
   * A network service browser that finds published services on a network using multicast DNS.
   * doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser
   */
  interface NSNetServiceBrowser extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1412947-init
    init():cocoascript.NSNetServiceBrowser;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1409380-delegate
    delegate(): cocoascript.NSNetServiceBrowserDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1413106-includespeertopeer
    includesPeerToPeer(): cocoascript.BOOL;
    setIncludesPeerToPeer(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1417661-searchforbrowsabledomains
    searchForBrowsableDomains():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1408718-searchforregistrationdomains
    searchForRegistrationDomains():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1417565-searchforservicesoftype
    searchForServicesOfType_inDomain(type: cocoascript.NSString, domainString: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1414528-stop
    stop():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1409776-scheduleinrunloop
    scheduleInRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1411566-removefromrunloop
    removeFromRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    //
    alloc():cocoascript.NSNetServiceBrowser;
    //
    init():cocoascript.NSNetServiceBrowser;
  }
}

declare const NSNetServiceBrowser: cocoascript.NSNetServiceBrowser;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessionauthchallengedisposition
  type NSURLSessionAuthChallengeDisposition = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A network service that broadcasts its availability using multicast DNS.
   * doc://com.apple.documentation/documentation/foundation/nsnetservice
   */
  interface NSNetService extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1417615-initwithdomain
    initWithDomain_type_name(domain: cocoascript.NSString, type: cocoascript.NSString, name: cocoascript.NSString):cocoascript.NSNetService;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1413364-initwithdomain
    initWithDomain_type_name_port(domain: cocoascript.NSString, type: cocoascript.NSString, name: cocoascript.NSString, port: number):cocoascript.NSNetService;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1408528-addresses
    addresses(): cocoascript.NSData;
    setAddresses(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1414495-domain
    domain(): cocoascript.NSString;
    setDomain(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1414086-includespeertopeer
    includesPeerToPeer(): cocoascript.BOOL;
    setIncludesPeerToPeer(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1418325-getinputstream
    getInputStream_outputStream(inputStream: cocoascript.NSInputStream, outputStream: cocoascript.NSOutputStream):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1409022-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1416595-type
    type(): cocoascript.NSString;
    setType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1417698-txtrecorddata
    TXTRecordData():cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1410648-settxtrecorddata
    setTXTRecordData(recordData: cocoascript.NSData):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1410296-delegate
    delegate(): cocoascript.NSNetServiceDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1417221-scheduleinrunloop
    scheduleInRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1414621-removefromrunloop
    removeFromRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1416480-publish
    publish():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1414390-publishwithoptions
    publishWithOptions(options: cocoascript.NSNetServiceOptions):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1506204-resolve
    resolve():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1416564-resolvewithtimeout
    resolveWithTimeout(timeout: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1409816-port
    port(): cocoascript.NSInteger;
    setPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1411486-startmonitoring
    startMonitoring():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1408827-stop
    stop():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1413861-stopmonitoring
    stopMonitoring():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1413300-hostname
    hostName(): cocoascript.NSString;
    setHostName(): void;
    //
    alloc():cocoascript.NSNetService;
    //
    init():cocoascript.NSNetService;
  }
}

declare const NSNetService: cocoascript.NSNetService;
declare namespace cocoascript {
  /**
   * A listener that waits for new incoming connections, configures them, and accepts or rejects them.
   * doc://com.apple.documentation/documentation/foundation/nsxpclistener
   */
  interface NSXPCListener extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxpclistener/1414106-initwithmachservicename
    initWithMachServiceName(name: cocoascript.NSString):cocoascript.NSXPCListener;
    // doc://com.apple.documentation/documentation/foundation/nsxpclistener/1408939-delegate
    delegate(): cocoascript.NSXPCListenerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpclistener/1408519-endpoint
    endpoint(): cocoascript.NSXPCListenerEndpoint;
    setEndpoint(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpclistener/1418427-invalidate
    invalidate():void;
    // doc://com.apple.documentation/documentation/foundation/nsxpclistener/1409652-resume
    resume():void;
    // doc://com.apple.documentation/documentation/foundation/nsxpclistener/1411596-suspend
    suspend():void;
    //
    alloc():cocoascript.NSXPCListener;
    //
    init():cocoascript.NSXPCListener;
  }
}

declare const NSXPCListener: cocoascript.NSXPCListener;
declare namespace cocoascript {
  /**
   * An object that enumerates the contents of a directory.
   * doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator
   */
  interface NSDirectoryEnumerator extends NSEnumerator {
    // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator/1411357-directoryattributes
    directoryAttributes(): cocoascript.id;
    setDirectoryAttributes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator/1413284-fileattributes
    fileAttributes(): cocoascript.id;
    setFileAttributes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator/1408465-level
    level(): cocoascript.NSUInteger;
    setLevel(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator/1412990-skipdescendents
    skipDescendents():void;
    // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator/1409644-skipdescendants
    skipDescendants():void;
    // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator/3088819-isenumeratingdirectorypostorder
    isEnumeratingDirectoryPostOrder(): cocoascript.BOOL;
    setIsEnumeratingDirectoryPostOrder(): void;
    //
    alloc():cocoascript.NSDirectoryEnumerator;
    //
    init():cocoascript.NSDirectoryEnumerator;
  }
}

declare const NSDirectoryEnumerator: cocoascript.NSDirectoryEnumerator;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsvolumeenumerationoptions
  type NSVolumeEnumerationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsfilemanageritemreplacementoptions
  type NSFileManagerItemReplacementOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A service that provides a custom communication channel between your app and a File Provider extension.
   * doc://com.apple.documentation/documentation/foundation/nsfileproviderservice
   */
  interface NSFileProviderService extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfileproviderservice/2915258-name
    name(): cocoascript.NSFileProviderServiceName;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfileproviderservice/2915257-getfileproviderconnectionwithcom
    getFileProviderConnectionWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    //
    alloc():cocoascript.NSFileProviderService;
    //
    init():cocoascript.NSFileProviderService;
  }
}

declare const NSFileProviderService: cocoascript.NSFileProviderService;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsfileproviderservicename
  type NSFileProviderServiceName = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlrelationship
  type NSURLRelationship = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerunmountoptions
  type NSFileManagerUnmountOptions = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsfileowneraccountid
declare const NSFileOwnerAccountID: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilegroupowneraccountid
declare const NSFileGroupOwnerAccountID: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfileposixpermissions
declare const NSFilePosixPermissions: cocoascript.NSFileAttributeKey;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nstimezonenamestyle
  type NSTimeZoneNameStyle = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsmaptableoptions
  type NSMapTableOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskstate
  type NSURLSessionTaskState = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsurlsessiontransfersizeunknown
declare const NSURLSessionTransferSizeUnknown: number;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessionmultipathservicetype
  type NSURLSessionMultipathServiceType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A mutable collection of unique integer values that represent indexes in another collection.
   * doc://com.apple.documentation/documentation/foundation/nsmutableindexset
   */
  interface NSMutableIndexSet extends NSIndexSet {
    // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1410712-addindex
    addIndex(value: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1414594-addindexes
    addIndexes(indexSet: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1408251-addindexesinrange
    addIndexesInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1410650-removeindex
    removeIndex(value: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1412018-removeindexes
    removeIndexes(indexSet: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1408738-removeallindexes
    removeAllIndexes():void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1415791-removeindexesinrange
    removeIndexesInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1416951-shiftindexesstartingatindex
    shiftIndexesStartingAtIndex_by(index: cocoascript.NSUInteger, delta: cocoascript.NSInteger):void;
    //
    alloc():cocoascript.NSMutableIndexSet;
    //
    init():cocoascript.NSMutableIndexSet;
  }
}

declare const NSMutableIndexSet: cocoascript.NSMutableIndexSet;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlcredentialpersistence
  type NSURLCredentialPersistence = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifiergregorian
declare const NSCalendarIdentifierGregorian: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierislamicummalqura
declare const NSCalendarIdentifierIslamicUmmAlQura: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierethiopicametemihret
declare const NSCalendarIdentifierEthiopicAmeteMihret: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierethiopicametealem
declare const NSCalendarIdentifierEthiopicAmeteAlem: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierpersian
declare const NSCalendarIdentifierPersian: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierbuddhist
declare const NSCalendarIdentifierBuddhist: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierindian
declare const NSCalendarIdentifierIndian: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierhebrew
declare const NSCalendarIdentifierHebrew: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierchinese
declare const NSCalendarIdentifierChinese: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierjapanese
declare const NSCalendarIdentifierJapanese: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifiercoptic
declare const NSCalendarIdentifierCoptic: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierislamic
declare const NSCalendarIdentifierIslamic: cocoascript.NSCalendarIdentifier;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nscalendarunit
  type NSCalendarUnit = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nscalendaridentifier
  type NSCalendarIdentifier = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nscalendaroptions
  type NSCalendarOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nspointerfunctionsoptions
  type NSPointerFunctionsOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlcachestoragepolicy
  type NSURLCacheStoragePolicy = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlrequestcachepolicy
  type NSURLRequestCachePolicy = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlrequestnetworkservicetype
  type NSURLRequestNetworkServiceType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A dynamic, ordered collection of unique objects.
   * doc://com.apple.documentation/documentation/foundation/nsmutableorderedset
   */
  interface NSMutableOrderedSet extends NSOrderedSet {
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1411583-initwithcapacity
    initWithCapacity(numItems: cocoascript.NSUInteger):cocoascript.NSMutableOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1410545-init
    init():cocoascript.NSMutableOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1408009-addobject
    addObject(object: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1413840-addobjects
    addObjects_count(objects: any, count: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1417200-addobjectsfromarray
    addObjectsFromArray(array: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1416634-insertobject
    insertObject_atIndex(object: any, idx: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1543323-setobject
    setObject_atIndexedSubscript(obj: any, idx: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1410287-insertobjects
    insertObjects_atIndexes(objects: any, indexes: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1416776-removeobject
    removeObject(object: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1415040-removeobjectatindex
    removeObjectAtIndex(idx: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1418161-removeobjectsatindexes
    removeObjectsAtIndexes(indexes: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1411635-removeobjectsinarray
    removeObjectsInArray(array: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1417539-removeobjectsinrange
    removeObjectsInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1414262-removeallobjects
    removeAllObjects():void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1412115-replaceobjectatindex
    replaceObjectAtIndex_withObject(idx: cocoascript.NSUInteger, object: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1416127-replaceobjectsatindexes
    replaceObjectsAtIndexes_withObjects(indexes: cocoascript.NSIndexSet, objects: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1415340-replaceobjectsinrange
    replaceObjectsInRange_withObjects_count(range: cocoascript.NSRange, objects: any, count: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1411158-setobject
    setObject_atIndex(obj: any, idx: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1417677-moveobjectsatindexes
    moveObjectsAtIndexes_toIndex(indexes: cocoascript.NSIndexSet, idx: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1416821-exchangeobjectatindex
    exchangeObjectAtIndex_withObjectAtIndex(idx1: cocoascript.NSUInteger, idx2: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1408348-filterusingpredicate
    filterUsingPredicate(p: cocoascript.NSPredicate):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1410023-sortusingdescriptors
    sortUsingDescriptors(sortDescriptors: cocoascript.NSSortDescriptor):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1414566-sortusingcomparator
    sortUsingComparator(cmptr: cocoascript.NSComparator):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1411561-sortwithoptions
    sortWithOptions_usingComparator(opts: cocoascript.NSSortOptions, cmptr: cocoascript.NSComparator):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1407529-sortrange
    sortRange_options_usingComparator(range: cocoascript.NSRange, opts: cocoascript.NSSortOptions, cmptr: cocoascript.NSComparator):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1408541-intersectorderedset
    intersectOrderedSet(other: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1415257-intersectset
    intersectSet(other: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1407987-minusorderedset
    minusOrderedSet(other: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1411229-minusset
    minusSet(other: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1410973-unionorderedset
    unionOrderedSet(other: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1413853-unionset
    unionSet(other: any):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1413074-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSMutableOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/3152194-applydifference
    applyDifference(difference: any):void;
    //
    alloc():cocoascript.NSMutableOrderedSet;
    //
    init():cocoascript.NSMutableOrderedSet;
  }
}

declare const NSMutableOrderedSet: cocoascript.NSMutableOrderedSet;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsmatchingoptions
  type NSMatchingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsregularexpressionoptions
  type NSRegularExpressionOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsmatchingflags
  type NSMatchingFlags = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsexpressiontype
  type NSExpressionType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nshashtableoptions
  type NSHashTableOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * An XML document as internalized into a logical tree structure.
   * doc://com.apple.documentation/documentation/foundation/nsxmldocument
   */
  interface NSXMLDocument extends NSXMLNode {
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1418467-initwithcontentsofurl
    initWithContentsOfURL_options_error(url: cocoascript.NSURL, mask: cocoascript.NSXMLNodeOptions, error: cocoascript.NSError):cocoascript.NSXMLDocument;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1413086-initwithdata
    initWithData_options_error(data: cocoascript.NSData, mask: cocoascript.NSXMLNodeOptions, error: cocoascript.NSError):cocoascript.NSXMLDocument;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1409062-initwithrootelement
    initWithRootElement(element: cocoascript.NSXMLElement):cocoascript.NSXMLDocument;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1416228-initwithxmlstring
    initWithXMLString_options_error(string: cocoascript.NSString, mask: cocoascript.NSXMLNodeOptions, error: cocoascript.NSError):cocoascript.NSXMLDocument;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1410987-characterencoding
    characterEncoding(): cocoascript.NSString;
    setCharacterEncoding(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1407426-documentcontentkind
    documentContentKind(): cocoascript.NSXMLDocumentContentKind;
    setDocumentContentKind(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1418474-dtd
    DTD(): cocoascript.NSXMLDTD;
    setDTD(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1413655-standalone
    standalone(): cocoascript.BOOL;
    setStandalone(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1408633-mimetype
    MIMEType(): cocoascript.NSString;
    setMIMEType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1409066-version
    version(): cocoascript.NSString;
    setVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1411693-rootelement
    rootElement():cocoascript.NSXMLElement;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1415610-setrootelement
    setRootElement(root: cocoascript.NSXMLElement):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1415740-addchild
    addChild(child: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1413912-insertchild
    insertChild_atIndex(child: cocoascript.NSXMLNode, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1415612-insertchildren
    insertChildren_atIndex(children: cocoascript.NSXMLNode, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1410060-removechildatindex
    removeChildAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1416857-replacechildatindex
    replaceChildAtIndex_withNode(index: cocoascript.NSUInteger, node: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1407550-setchildren
    setChildren(children: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1415843-objectbyapplyingxslt
    objectByApplyingXSLT_arguments_error(xslt: cocoascript.NSData, arguments: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSXMLDocument;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1409737-objectbyapplyingxsltstring
    objectByApplyingXSLTString_arguments_error(xslt: cocoascript.NSString, arguments: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSXMLDocument;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1410606-objectbyapplyingxsltaturl
    objectByApplyingXSLTAtURL_arguments_error(xsltURL: cocoascript.NSURL, argument: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSXMLDocument;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1411660-xmldata
    XMLData(): cocoascript.NSData;
    setXMLData(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1412424-xmldatawithoptions
    XMLDataWithOptions(options: cocoascript.NSXMLNodeOptions):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1408561-validateandreturnerror
    validateAndReturnError(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1415210-init
    init():cocoascript.NSXMLDocument;
    //
    alloc():cocoascript.NSXMLDocument;
    //
    init():cocoascript.NSXMLDocument;
  }
}

declare const NSXMLDocument: cocoascript.NSXMLDocument;
declare namespace cocoascript {
  /**
   * The element nodes in an XML tree structure.
   * doc://com.apple.documentation/documentation/foundation/nsxmlelement
   */
  interface NSXMLElement extends NSXMLNode {
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388319-initwithname
    initWithName(name: cocoascript.NSString):cocoascript.NSXMLElement;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388356-initwithname
    initWithName_stringValue(name: cocoascript.NSString, string: cocoascript.NSString):cocoascript.NSXMLElement;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388325-initwithxmlstring
    initWithXMLString_error(string: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSXMLElement;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388348-initwithname
    initWithName_URI(name: cocoascript.NSString, URI: cocoascript.NSString):cocoascript.NSXMLElement;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388329-elementsforname
    elementsForName(name: cocoascript.NSString):cocoascript.NSXMLElement;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388344-elementsforlocalname
    elementsForLocalName_URI(localName: cocoascript.NSString, URI: cocoascript.NSString):cocoascript.NSXMLElement;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388340-addchild
    addChild(child: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388332-insertchild
    insertChild_atIndex(child: cocoascript.NSXMLNode, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388331-insertchildren
    insertChildren_atIndex(children: cocoascript.NSXMLNode, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388311-removechildatindex
    removeChildAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388317-replacechildatindex
    replaceChildAtIndex_withNode(index: cocoascript.NSUInteger, node: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388350-setchildren
    setChildren(children: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388346-normalizeadjacenttextnodespreser
    normalizeAdjacentTextNodesPreservingCDATA(preserve: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388336-addattribute
    addAttribute(attribute: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388305-attributeforname
    attributeForName(name: cocoascript.NSString):cocoascript.NSXMLNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388315-attributeforlocalname
    attributeForLocalName_URI(localName: cocoascript.NSString, URI: cocoascript.NSString):cocoascript.NSXMLNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388321-attributes
    attributes(): cocoascript.NSXMLNode;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388338-removeattributeforname
    removeAttributeForName(name: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388354-setattributeswithdictionary
    setAttributesWithDictionary(attributes: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388352-setattributesasdictionary
    setAttributesAsDictionary(attributes: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388358-addnamespace
    addNamespace(aNamespace: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388342-namespaces
    namespaces(): cocoascript.NSXMLNode;
    setNamespaces(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388307-namespaceforprefix
    namespaceForPrefix(name: cocoascript.NSString):cocoascript.NSXMLNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388327-removenamespaceforprefix
    removeNamespaceForPrefix(name: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388334-resolvenamespaceforname
    resolveNamespaceForName(name: cocoascript.NSString):cocoascript.NSXMLNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388309-resolveprefixfornamespaceuri
    resolvePrefixForNamespaceURI(namespaceURI: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388323-initwithkind
    initWithKind_options(kind: cocoascript.NSXMLNodeKind, options: cocoascript.NSXMLNodeOptions):cocoascript.NSXMLElement;
    //
    alloc():cocoascript.NSXMLElement;
    //
    init():cocoascript.NSXMLElement;
  }
}

declare const NSXMLElement: cocoascript.NSXMLElement;
declare namespace cocoascript {
  /**
   * A representation of element, attribute-list, entity, and notation declarations in a Document Type Definition.
   * doc://com.apple.documentation/documentation/foundation/nsxmldtdnode
   */
  interface NSXMLDTDNode extends NSXMLNode {
    // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1409605-initwithxmlstring
    initWithXMLString(string: cocoascript.NSString):cocoascript.NSXMLDTDNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1408902-dtdkind
    DTDKind(): cocoascript.NSXMLDTDNodeKind;
    setDTDKind(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1407292-notationname
    notationName(): cocoascript.NSString;
    setNotationName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1415631-publicid
    publicID(): cocoascript.NSString;
    setPublicID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1410930-systemid
    systemID(): cocoascript.NSString;
    setSystemID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1416018-init
    init():cocoascript.NSXMLDTDNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1408553-initwithkind
    initWithKind_options(kind: cocoascript.NSXMLNodeKind, options: cocoascript.NSXMLNodeOptions):cocoascript.NSXMLDTDNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1409467-external
    external(): cocoascript.BOOL;
    setExternal(): void;
    //
    alloc():cocoascript.NSXMLDTDNode;
    //
    init():cocoascript.NSXMLDTDNode;
  }
}

declare const NSXMLDTDNode: cocoascript.NSXMLDTDNode;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsxmlnodekind
  type NSXMLNodeKind = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A representation of a Document Type Definition.
   * doc://com.apple.documentation/documentation/foundation/nsxmldtd
   */
  interface NSXMLDTD extends NSXMLNode {
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1410482-initwithcontentsofurl
    initWithContentsOfURL_options_error(url: cocoascript.NSURL, mask: cocoascript.NSXMLNodeOptions, error: cocoascript.NSError):cocoascript.NSXMLDTD;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1412807-initwithdata
    initWithData_options_error(data: cocoascript.NSData, mask: cocoascript.NSXMLNodeOptions, error: cocoascript.NSError):cocoascript.NSXMLDTD;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1408524-publicid
    publicID(): cocoascript.NSString;
    setPublicID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1410949-systemid
    systemID(): cocoascript.NSString;
    setSystemID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1412988-addchild
    addChild(child: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1411759-insertchild
    insertChild_atIndex(child: cocoascript.NSXMLNode, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1413709-insertchildren
    insertChildren_atIndex(children: cocoascript.NSXMLNode, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1412262-removechildatindex
    removeChildAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1413890-replacechildatindex
    replaceChildAtIndex_withNode(index: cocoascript.NSUInteger, node: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1415145-setchildren
    setChildren(children: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1416067-elementdeclarationforname
    elementDeclarationForName(name: cocoascript.NSString):cocoascript.NSXMLDTDNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1411397-attributedeclarationforname
    attributeDeclarationForName_elementName(name: cocoascript.NSString, elementName: cocoascript.NSString):cocoascript.NSXMLDTDNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1412325-entitydeclarationforname
    entityDeclarationForName(name: cocoascript.NSString):cocoascript.NSXMLDTDNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1410533-notationdeclarationforname
    notationDeclarationForName(name: cocoascript.NSString):cocoascript.NSXMLDTDNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1417840-init
    init():cocoascript.NSXMLDTD;
    //
    alloc():cocoascript.NSXMLDTD;
    //
    init():cocoascript.NSXMLDTD;
  }
}

declare const NSXMLDTD: cocoascript.NSXMLDTD;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsxmlnodeoptions
  type NSXMLNodeOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsusernotificationactivationtype
  type NSUserNotificationActivationType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  interface NSAffineTransformStruct {
  }
}declare namespace cocoascript {
  /**
   * An abstract class whose subclasses enumerate collections of objects, such as arrays and dictionaries.
   * doc://com.apple.documentation/documentation/foundation/nsenumerator
   */
  interface NSEnumerator extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsenumerator/1417755-allobjects
    allObjects(): any;
    setAllObjects(): void;
    // doc://com.apple.documentation/documentation/foundation/nsenumerator/1409616-nextobject
    nextObject():void;
    //
    alloc():cocoascript.NSEnumerator;
    //
    init():cocoascript.NSEnumerator;
  }
}

declare const NSEnumerator: cocoascript.NSEnumerator;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsenumerationoptions
  type NSEnumerationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nssortoptions
  type NSSortOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A specialized date object with embedded calendar information.
   * doc://com.apple.documentation/documentation/foundation/nscalendardate
   */
  interface NSCalendarDate extends NSDate {
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564272-calendarformat
    calendarFormat():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564251-datebyaddingyears
    dateByAddingYears_months_days_hours_minutes_seconds(year: cocoascript.NSInteger, month: cocoascript.NSInteger, day: cocoascript.NSInteger, hour: cocoascript.NSInteger, minute: cocoascript.NSInteger, second: cocoascript.NSInteger):cocoascript.NSCalendarDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564253-dayofcommonera
    dayOfCommonEra():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564274-dayofmonth
    dayOfMonth():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564254-dayofweek
    dayOfWeek():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564264-dayofyear
    dayOfYear():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564261-descriptionwithcalendarformat
    descriptionWithCalendarFormat(format: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564265-descriptionwithcalendarformat
    descriptionWithCalendarFormat_locale(format: cocoascript.NSString, locale: cocoascript.NSCalendarDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564269-descriptionwithlocale
    descriptionWithLocale(locale: cocoascript.NSCalendarDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564259-hourofday
    hourOfDay():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564258-initwithstring
    initWithString(description: cocoascript.NSString):cocoascript.NSCalendarDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564268-initwithstring
    initWithString_calendarFormat(description: cocoascript.NSString, format: cocoascript.NSString):cocoascript.NSCalendarDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564263-initwithstring
    initWithString_calendarFormat_locale(description: cocoascript.NSString, format: cocoascript.NSString, locale: cocoascript.NSCalendarDate):cocoascript.NSCalendarDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564270-initwithyear
    initWithYear_month_day_hour_minute_second_timeZone(year: cocoascript.NSInteger, month: cocoascript.NSUInteger, day: cocoascript.NSUInteger, hour: cocoascript.NSUInteger, minute: cocoascript.NSUInteger, second: cocoascript.NSUInteger, aTimeZone: cocoascript.NSTimeZone):cocoascript.NSCalendarDate;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564271-minuteofhour
    minuteOfHour():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564260-monthofyear
    monthOfYear():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564273-secondofminute
    secondOfMinute():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564250-setcalendarformat
    setCalendarFormat(format: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564267-settimezone
    setTimeZone(aTimeZone: cocoascript.NSTimeZone):void;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564277-timezone
    timeZone():cocoascript.NSTimeZone;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564262-yearofcommonera
    yearOfCommonEra():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564256-years
    years_months_days_hours_minutes_seconds_sinceDate(yp: cocoascript.NSInteger, mop: cocoascript.NSInteger, dp: cocoascript.NSInteger, hp: cocoascript.NSInteger, mip: cocoascript.NSInteger, sp: cocoascript.NSInteger, date: cocoascript.NSCalendarDate):void;
    //
    alloc():cocoascript.NSCalendarDate;
    //
    init():cocoascript.NSCalendarDate;
  }
}

declare const NSCalendarDate: cocoascript.NSCalendarDate;
declare namespace cocoascript {
  /**
   * An abstract class that provides a description of how to convert a unit to and from the base unit of its dimension.
   * doc://com.apple.documentation/documentation/foundation/nsunitconverter
   */
  interface NSUnitConverter extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsunitconverter/1823668-baseunitvaluefromvalue
    baseUnitValueFromValue(value: number):number;
    // doc://com.apple.documentation/documentation/foundation/nsunitconverter/1823657-valuefrombaseunitvalue
    valueFromBaseUnitValue(baseUnitValue: number):number;
    //
    alloc():cocoascript.NSUnitConverter;
    //
    init():cocoascript.NSUnitConverter;
  }
}

declare const NSUnitConverter: cocoascript.NSUnitConverter;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter
   */
  interface NSRelativeDateTimeFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3130994-calendar
    calendar(): cocoascript.NSCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3130995-datetimestyle
    dateTimeStyle(): cocoascript.NSRelativeDateTimeFormatterStyle;
    setDateTimeStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3130996-formattingcontext
    formattingContext(): cocoascript.NSFormattingContext;
    setFormattingContext(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3130997-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3131002-unitsstyle
    unitsStyle(): cocoascript.NSRelativeDateTimeFormatterUnitsStyle;
    setUnitsStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3130998-localizedstringfordate
    localizedStringForDate_relativeToDate(date: cocoascript.NSDate, referenceDate: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3130999-localizedstringfromdatecomponent
    localizedStringFromDateComponents(dateComponents: cocoascript.NSDateComponents):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3131000-localizedstringfromtimeinterval
    localizedStringFromTimeInterval(timeInterval: cocoascript.NSTimeInterval):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3131001-stringforobjectvalue
    stringForObjectValue(obj: cocoascript.NSRelativeDateTimeFormatter):cocoascript.NSString;
    //
    alloc():cocoascript.NSRelativeDateTimeFormatter;
    //
    init():cocoascript.NSRelativeDateTimeFormatter;
  }
}

declare const NSRelativeDateTimeFormatter: cocoascript.NSRelativeDateTimeFormatter;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nslistformatter
   */
  interface NSListFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nslistformatter/3130988-itemformatter
    itemFormatter(): cocoascript.NSFormatter;
    setItemFormatter(): void;
    // doc://com.apple.documentation/documentation/foundation/nslistformatter/3130989-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nslistformatter/3130991-stringforobjectvalue
    stringForObjectValue(obj: cocoascript.NSListFormatter):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslistformatter/3130992-stringfromitems
    stringFromItems(items: cocoascript.NSArray):cocoascript.NSString;
    //
    alloc():cocoascript.NSListFormatter;
    //
    init():cocoascript.NSListFormatter;
  }
}

declare const NSListFormatter: cocoascript.NSListFormatter;
declare namespace cocoascript {
  /**
   * An object that logs an assertion to the console.
   * doc://com.apple.documentation/documentation/foundation/nsassertionhandler
   */
  interface NSAssertionHandler extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsassertionhandler/1417391-currenthandler
    currentHandler(): cocoascript.NSAssertionHandler;
    setCurrentHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsassertionhandler/1569532-handlefailureinfunction
    handleFailureInFunction_file_lineNumber_description(functionName: cocoascript.NSString, fileName: cocoascript.NSString, line: cocoascript.NSInteger, format: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsassertionhandler/1569513-handlefailureinmethod
    handleFailureInMethod_object_file_lineNumber_description(selector: cocoascript.SEL, object: cocoascript.NSAssertionHandler, fileName: cocoascript.NSString, line: cocoascript.NSInteger, format: cocoascript.NSString):void;
    //
    alloc():cocoascript.NSAssertionHandler;
    //
    init():cocoascript.NSAssertionHandler;
  }
}

declare const NSAssertionHandler: cocoascript.NSAssertionHandler;
declare namespace cocoascript {
  /**
   * Methods for creating new proxy objects.
   * doc://com.apple.documentation/documentation/foundation/nsxpcproxycreating
   */
  interface NSXPCProxyCreating {
    // doc://com.apple.documentation/documentation/foundation/nsxpcproxycreating/1418403-remoteobjectproxy
    remoteObjectProxy():cocoascript.NSXPCProxyCreating;
    // doc://com.apple.documentation/documentation/foundation/nsxpcproxycreating/1415611-remoteobjectproxywitherrorhandle
    remoteObjectProxyWithErrorHandler(handler: cocoascript.NSError):cocoascript.NSXPCProxyCreating;
    // doc://com.apple.documentation/documentation/foundation/nsxpcproxycreating/2879411-synchronousremoteobjectproxywith
    synchronousRemoteObjectProxyWithErrorHandler(handler: cocoascript.NSError):cocoascript.NSXPCProxyCreating;
  }
}
declare namespace cocoascript {
  /**
   * A bidirectional communication channel between two processes.
   * doc://com.apple.documentation/documentation/foundation/nsxpcconnection
   */
  interface NSXPCConnection extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1416298-initwithlistenerendpoint
    initWithListenerEndpoint(endpoint: cocoascript.NSXPCListenerEndpoint):cocoascript.NSXPCConnection;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1418074-initwithmachservicename
    initWithMachServiceName_options(name: cocoascript.NSString, options: cocoascript.NSXPCConnectionOptions):cocoascript.NSXPCConnection;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1416370-initwithservicename
    initWithServiceName(serviceName: cocoascript.NSString):cocoascript.NSXPCConnection;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1410393-auditsessionidentifier
    auditSessionIdentifier(): any;
    setAuditSessionIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1407793-effectivegroupidentifier
    effectiveGroupIdentifier(): any;
    setEffectiveGroupIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1408346-effectiveuseridentifier
    effectiveUserIdentifier(): any;
    setEffectiveUserIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1411757-endpoint
    endpoint(): cocoascript.NSXPCListenerEndpoint;
    setEndpoint(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1408106-exportedinterface
    exportedInterface(): cocoascript.NSXPCInterface;
    setExportedInterface(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1412016-exportedobject
    exportedObject(): cocoascript.id;
    setExportedObject(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1407915-interruptionhandler
    interruptionHandler(): void;
    setInterruptionHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1414358-invalidationhandler
    invalidationHandler(): void;
    setInvalidationHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1411428-processidentifier
    processIdentifier(): any;
    setProcessIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1411472-remoteobjectinterface
    remoteObjectInterface(): cocoascript.NSXPCInterface;
    setRemoteObjectInterface(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1411031-remoteobjectproxy
    remoteObjectProxy(): cocoascript.id;
    setRemoteObjectProxy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1413751-servicename
    serviceName(): cocoascript.NSString;
    setServiceName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1412618-invalidate
    invalidate():void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1407905-remoteobjectproxywitherrorhandle
    remoteObjectProxyWithErrorHandler(handler: cocoascript.NSError):cocoascript.NSXPCConnection;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1408677-resume
    resume():void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/3172583-schedulesendbarrierblock
    scheduleSendBarrierBlock(block: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1410778-suspend
    suspend():void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/2879410-synchronousremoteobjectproxywith
    synchronousRemoteObjectProxyWithErrorHandler(handler: cocoascript.NSError):cocoascript.NSXPCConnection;
    //
    alloc():cocoascript.NSXPCConnection;
    //
    init():cocoascript.NSXPCConnection;
  }
}

declare const NSXPCConnection: cocoascript.NSXPCConnection;
declare namespace cocoascript {
  /**
   * An interface that may be sent to an exported object or remote object proxy.
   * doc://com.apple.documentation/documentation/foundation/nsxpcinterface
   */
  interface NSXPCInterface extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/1416353-protocol
    protocol(): cocoascript.Protocol;
    setProtocol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/1418323-classesforselector
    classesForSelector_argumentIndex_ofReply(sel: cocoascript.SEL, arg: cocoascript.NSUInteger, ofReply: cocoascript.BOOL):cocoascript.Class;
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/1409127-interfaceforselector
    interfaceForSelector_argumentIndex_ofReply(sel: cocoascript.SEL, arg: cocoascript.NSUInteger, ofReply: cocoascript.BOOL):cocoascript.NSXPCInterface;
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/1415555-setclasses
    setClasses_forSelector_argumentIndex_ofReply(classes: cocoascript.Class, sel: cocoascript.SEL, arg: cocoascript.NSUInteger, ofReply: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/1414293-setinterface
    setInterface_forSelector_argumentIndex_ofReply(ifc: cocoascript.NSXPCInterface, sel: cocoascript.SEL, arg: cocoascript.NSUInteger, ofReply: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/3174972-setxpctype
    setXPCType_forSelector_argumentIndex_ofReply(type: cocoascript.xpc_type_t, sel: cocoascript.SEL, arg: cocoascript.NSUInteger, ofReply: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/3174971-xpctypeforselector
    XPCTypeForSelector_argumentIndex_ofReply(sel: cocoascript.SEL, arg: cocoascript.NSUInteger, ofReply: cocoascript.BOOL):cocoascript.xpc_type_t;
    //
    alloc():cocoascript.NSXPCInterface;
    //
    init():cocoascript.NSXPCInterface;
  }
}

declare const NSXPCInterface: cocoascript.NSXPCInterface;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nsxpccoder
   */
  interface NSXPCCoder extends NSCoder {
    // doc://com.apple.documentation/documentation/foundation/nsxpccoder/3172580-connection
    connection(): cocoascript.NSXPCConnection;
    setConnection(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpccoder/3172581-userinfo
    userInfo(): cocoascript.NSObject;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpccoder/3174969-decodexpcobjectoftype
    decodeXPCObjectOfType_forKey(type: cocoascript.xpc_type_t, key: cocoascript.NSString):cocoascript.xpc_object_t;
    // doc://com.apple.documentation/documentation/foundation/nsxpccoder/3174970-encodexpcobject
    encodeXPCObject_forKey(xpcObject: cocoascript.xpc_object_t, key: cocoascript.NSString):void;
    //
    alloc():cocoascript.NSXPCCoder;
    //
    init():cocoascript.NSXPCCoder;
  }
}

declare const NSXPCCoder: cocoascript.NSXPCCoder;
declare namespace cocoascript {
  /**
   * A one-way communications channel between related processes.
   * doc://com.apple.documentation/documentation/foundation/nspipe
   */
  interface NSPipe extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nspipe/1414352-filehandleforreading
    fileHandleForReading(): cocoascript.NSFileHandle;
    setFileHandleForReading(): void;
    // doc://com.apple.documentation/documentation/foundation/nspipe/1412889-filehandleforwriting
    fileHandleForWriting(): cocoascript.NSFileHandle;
    setFileHandleForWriting(): void;
    //
    alloc():cocoascript.NSPipe;
    //
    init():cocoascript.NSPipe;
  }
}

declare const NSPipe: cocoascript.NSPipe;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatterstyle
  type NSRelativeDateTimeFormatterStyle = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatterunitsstyle
  type NSRelativeDateTimeFormatterUnitsStyle = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskmetricsdomainresolutionprotocol
  type NSURLSessionTaskMetricsDomainResolutionProtocol = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsprogresskindfile
declare const NSProgressKindFile: cocoascript.NSProgressKind;
// doc://com.apple.documentation/documentation/foundation/nsprogressfileoperationkindkey
declare const NSProgressFileOperationKindKey: cocoascript.NSProgressUserInfoKey;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsprogresskind
  type NSProgressKind = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsprogressfileoperationkind
  type NSProgressFileOperationKind = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsprogressuserinfokey
  type NSProgressUserInfoKey = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsprogresspublishinghandler
  type NSProgressPublishingHandler = cocoascript.NSProgress;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsprogressunpublishinghandler
  type NSProgressUnpublishingHandler = void;
}
// doc://com.apple.documentation/documentation/foundation/nsoperationqueuedefaultmaxconcurrentoperationcount
declare const NSOperationQueueDefaultMaxConcurrentOperationCount: cocoascript.NSInteger;
// doc://com.apple.documentation/documentation/foundation/nsprocessinfothermalstatedidchangenotification
declare const NSProcessInfoThermalStateDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfothermalstate
  type NSProcessInfoThermalState = cocoascript.NSInteger;
}
declare namespace cocoascript {
  interface NSOperatingSystemVersion {
  }
}declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsactivityoptions
  type NSActivityOptions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityresult
  type NSBackgroundActivityResult = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivitycompletionhandler
  type NSBackgroundActivityCompletionHandler = cocoascript.NSBackgroundActivityResult;
}
// doc://com.apple.documentation/documentation/foundation/nsfilepatherrorkey
declare const NSFilePathErrorKey: cocoascript.NSErrorUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsurlerrorkey
declare const NSURLErrorKey: cocoascript.NSErrorUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformtolatin
declare const NSStringTransformToLatin: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformlatintoarabic
declare const NSStringTransformLatinToArabic: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformlatintocyrillic
declare const NSStringTransformLatinToCyrillic: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformlatintogreek
declare const NSStringTransformLatinToGreek: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformlatintohangul
declare const NSStringTransformLatinToHangul: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformlatintohebrew
declare const NSStringTransformLatinToHebrew: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformlatintohiragana
declare const NSStringTransformLatinToHiragana: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformlatintokatakana
declare const NSStringTransformLatinToKatakana: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformlatintothai
declare const NSStringTransformLatinToThai: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformhiraganatokatakana
declare const NSStringTransformHiraganaToKatakana: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformmandarintolatin
declare const NSStringTransformMandarinToLatin: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformstripdiacritics
declare const NSStringTransformStripDiacritics: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformstripcombiningmarks
declare const NSStringTransformStripCombiningMarks: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformfullwidthtohalfwidth
declare const NSStringTransformFullwidthToHalfwidth: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformtounicodename
declare const NSStringTransformToUnicodeName: cocoascript.NSStringTransform;
// doc://com.apple.documentation/documentation/foundation/nsstringtransformtoxmlhex
declare const NSStringTransformToXMLHex: cocoascript.NSStringTransform;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nslinguistictaggeroptions
  type NSLinguisticTaggerOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagscheme
  type NSLinguisticTagScheme = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nslinguistictag
  type NSLinguisticTag = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/foundation/nsstringencodingdetectionallowlossykey
declare const NSStringEncodingDetectionAllowLossyKey: cocoascript.NSStringEncodingDetectionOptionsKey;
// doc://com.apple.documentation/documentation/foundation/nsstringencodingdetectiondisallowedencodingskey
declare const NSStringEncodingDetectionDisallowedEncodingsKey: cocoascript.NSStringEncodingDetectionOptionsKey;
// doc://com.apple.documentation/documentation/foundation/nsstringencodingdetectionfromwindowskey
declare const NSStringEncodingDetectionFromWindowsKey: cocoascript.NSStringEncodingDetectionOptionsKey;
// doc://com.apple.documentation/documentation/foundation/nsstringencodingdetectionlikelylanguagekey
declare const NSStringEncodingDetectionLikelyLanguageKey: cocoascript.NSStringEncodingDetectionOptionsKey;
// doc://com.apple.documentation/documentation/foundation/nsstringencodingdetectionlossysubstitutionkey
declare const NSStringEncodingDetectionLossySubstitutionKey: cocoascript.NSStringEncodingDetectionOptionsKey;
// doc://com.apple.documentation/documentation/foundation/nsstringencodingdetectionsuggestedencodingskey
declare const NSStringEncodingDetectionSuggestedEncodingsKey: cocoascript.NSStringEncodingDetectionOptionsKey;
// doc://com.apple.documentation/documentation/foundation/nsstringencodingdetectionuseonlysuggestedencodingskey
declare const NSStringEncodingDetectionUseOnlySuggestedEncodingsKey: cocoascript.NSStringEncodingDetectionOptionsKey;
// doc://com.apple.documentation/documentation/foundation/nscharacterconversionexception
declare const NSCharacterConversionException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsparseerrorexception
declare const NSParseErrorException: cocoascript.NSExceptionName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsfilecoordinatorreadingoptions
  type NSFileCoordinatorReadingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsfilecoordinatorwritingoptions
  type NSFileCoordinatorWritingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nssaveoptions
  type NSSaveOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup
   */
  interface NSMetadataQueryResultGroup extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup/1411276-attribute
    attribute(): cocoascript.NSString;
    setAttribute(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup/1417674-value
    value(): cocoascript.id;
    setValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup/1410191-results
    results(): cocoascript.NSArray;
    setResults(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup/1414790-resultcount
    resultCount(): cocoascript.NSUInteger;
    setResultCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup/1410397-resultatindex
    resultAtIndex(idx: cocoascript.NSUInteger):cocoascript.NSMetadataQueryResultGroup;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup/1409929-subgroups
    subgroups(): cocoascript.NSMetadataQueryResultGroup;
    setSubgroups(): void;
    //
    alloc():cocoascript.NSMetadataQueryResultGroup;
    //
    init():cocoascript.NSMetadataQueryResultGroup;
  }
}

declare const NSMetadataQueryResultGroup: cocoascript.NSMetadataQueryResultGroup;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/foundation/nsmetadataqueryattributevaluetuple
   */
  interface NSMetadataQueryAttributeValueTuple extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryattributevaluetuple/1415060-attribute
    attribute(): cocoascript.NSString;
    setAttribute(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryattributevaluetuple/1414426-count
    count(): cocoascript.NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryattributevaluetuple/1417894-value
    value(): cocoascript.id;
    setValue(): void;
    //
    alloc():cocoascript.NSMetadataQueryAttributeValueTuple;
    //
    init():cocoascript.NSMetadataQueryAttributeValueTuple;
  }
}

declare const NSMetadataQueryAttributeValueTuple: cocoascript.NSMetadataQueryAttributeValueTuple;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsroundingmode
  type NSRoundingMode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nscalculationerror
  type NSCalculationError = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsdecimalnumberexactnessexception
declare const NSDecimalNumberExactnessException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsdecimalnumberoverflowexception
declare const NSDecimalNumberOverflowException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsdecimalnumberunderflowexception
declare const NSDecimalNumberUnderflowException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsdecimalnumberdividebyzeroexception
declare const NSDecimalNumberDivideByZeroException: cocoascript.NSExceptionName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsnumberformatterstyle
  type NSNumberFormatterStyle = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsnumberformatterbehavior
  type NSNumberFormatterBehavior = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsnumberformatterpadposition
  type NSNumberFormatterPadPosition = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsnumberformatterroundingmode
  type NSNumberFormatterRoundingMode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdateformatterstyle
  type NSDateFormatterStyle = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdateformatterbehavior
  type NSDateFormatterBehavior = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsfilehandlereadcompletionnotification
declare const NSFileHandleReadCompletionNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  interface NSFastEnumerationState {
  }
}declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange
   */
  interface NSOrderedCollectionChange extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange/3152179-initwithobject
    initWithObject_type_index(anObject: any, type: cocoascript.NSCollectionChangeType, index: cocoascript.NSUInteger):cocoascript.NSOrderedCollectionChange;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange/3152180-initwithobject
    initWithObject_type_index_associatedIndex(anObject: any, type: cocoascript.NSCollectionChangeType, index: cocoascript.NSUInteger, associatedIndex: cocoascript.NSUInteger):cocoascript.NSOrderedCollectionChange;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange/3152174-associatedindex
    associatedIndex(): cocoascript.NSUInteger;
    setAssociatedIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange/3152175-changetype
    changeType(): cocoascript.NSCollectionChangeType;
    setChangeType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange/3152178-index
    index(): cocoascript.NSUInteger;
    setIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange/3152181-object
    object(): any;
    setObject(): void;
    //
    alloc():cocoascript.NSOrderedCollectionChange;
    //
    init():cocoascript.NSOrderedCollectionChange;
  }
}

declare const NSOrderedCollectionChange: cocoascript.NSOrderedCollectionChange;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nscollectionchangetype
  type NSCollectionChangeType = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsfiletype
declare const NSFileType: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfiletypesymboliclink
declare const NSFileTypeSymbolicLink: cocoascript.NSFileAttributeType;
// doc://com.apple.documentation/documentation/foundation/nsfilesize
declare const NSFileSize: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilecreationdate
declare const NSFileCreationDate: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilemodificationdate
declare const NSFileModificationDate: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfileowneraccountname
declare const NSFileOwnerAccountName: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilegroupowneraccountname
declare const NSFileGroupOwnerAccountName: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfileimmutable
declare const NSFileImmutable: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfileappendonly
declare const NSFileAppendOnly: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilesystemfilenumber
declare const NSFileSystemFileNumber: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilesystemnumber
declare const NSFileSystemNumber: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilehfstypecode
declare const NSFileHFSTypeCode: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilehfscreatorcode
declare const NSFileHFSCreatorCode: cocoascript.NSFileAttributeKey;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsvaluetransformername
  type NSValueTransformerName = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/foundation/1395334-nsgetsizeandalignment
declare const NSGetSizeAndAlignment: cocoascript.NSUInteger;
declare namespace cocoascript {
  /**
   * A convenient interface to the garbage collection system.
   * doc://com.apple.documentation/documentation/foundation/nsgarbagecollector
   */
  interface NSGarbageCollector extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431016-disable
    disable():void;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431020-enable
    enable():void;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431014-isenabled
    isEnabled():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431018-iscollecting
    isCollecting():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431022-collectexhaustively
    collectExhaustively():void;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431015-collectifneeded
    collectIfNeeded():void;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431013-disablecollectorforpointer
    disableCollectorForPointer(ptr: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431017-enablecollectorforpointer
    enableCollectorForPointer(ptr: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431011-zone
    zone():cocoascript.NSZone;
    //
    alloc():cocoascript.NSGarbageCollector;
    //
    init():cocoascript.NSGarbageCollector;
  }
}

declare const NSGarbageCollector: cocoascript.NSGarbageCollector;
// doc://com.apple.documentation/documentation/foundation/nslocalizeddescriptionkey
declare const NSLocalizedDescriptionKey: cocoascript.NSErrorUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nslocalizedrecoveryoptionserrorkey
declare const NSLocalizedRecoveryOptionsErrorKey: cocoascript.NSErrorUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nslocalizedrecoverysuggestionerrorkey
declare const NSLocalizedRecoverySuggestionErrorKey: cocoascript.NSErrorUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nslocalizedfailurereasonerrorkey
declare const NSLocalizedFailureReasonErrorKey: cocoascript.NSErrorUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nshelpanchorerrorkey
declare const NSHelpAnchorErrorKey: cocoascript.NSErrorUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nslocalizedfailureerrorkey
declare const NSLocalizedFailureErrorKey: cocoascript.NSErrorUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsstringencodingerrorkey
declare const NSStringEncodingErrorKey: cocoascript.NSErrorUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsunderlyingerrorkey
declare const NSUnderlyingErrorKey: cocoascript.NSErrorUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsdebugdescriptionerrorkey
declare const NSDebugDescriptionErrorKey: cocoascript.NSErrorUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsinvalidunarchiveoperationexception
declare const NSInvalidUnarchiveOperationException: cocoascript.NSExceptionName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicatemodifier
  type NSComparisonPredicateModifier = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nscompoundpredicatetype
  type NSCompoundPredicateType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nspredicateoperatortype
  type NSPredicateOperatorType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicateoptions
  type NSComparisonPredicateOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatterunitoptions
  type NSMeasurementFormatterUnitOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatoptions
  type NSISO8601DateFormatOptions = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsdestinationinvalidexception
declare const NSDestinationInvalidException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsfilehandleoperationexception
declare const NSFileHandleOperationException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsinvalidarchiveoperationexception
declare const NSInvalidArchiveOperationException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsinvalidreceiveportexception
declare const NSInvalidReceivePortException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsinvalidsendportexception
declare const NSInvalidSendPortException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsinvocationoperationcancelledexception
declare const NSInvocationOperationCancelledException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsinvocationoperationvoidresultexception
declare const NSInvocationOperationVoidResultException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsmallocexception
declare const NSMallocException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsobjectinaccessibleexception
declare const NSObjectInaccessibleException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsobjectnotavailableexception
declare const NSObjectNotAvailableException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsoldstyleexception
declare const NSOldStyleException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsportreceiveexception
declare const NSPortReceiveException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsportsendexception
declare const NSPortSendException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsporttimeoutexception
declare const NSPortTimeoutException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsundefinedkeyexception
declare const NSUndefinedKeyException: cocoascript.NSExceptionName;
// doc://com.apple.documentation/documentation/foundation/nsinconsistentarchiveexception
declare const NSInconsistentArchiveException: cocoascript.NSExceptionName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsnotificationsuspensionbehavior
  type NSNotificationSuspensionBehavior = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationoptions
  type NSDistributedNotificationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcentertype
  type NSDistributedNotificationCenterType = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsnotificationcoalescing
  type NSNotificationCoalescing = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nspostingstyle
  type NSPostingStyle = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nslinguistictaggerunit
  type NSLinguisticTaggerUnit = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequestloadingpriorityurgent
declare const NSBundleResourceRequestLoadingPriorityUrgent: number;
// doc://com.apple.documentation/documentation/foundation/nskeyvaluechangekindkey
declare const NSKeyValueChangeKindKey: cocoascript.NSKeyValueChangeKey;
// doc://com.apple.documentation/documentation/foundation/nskeyvaluechangeindexeskey
declare const NSKeyValueChangeIndexesKey: cocoascript.NSKeyValueChangeKey;
// doc://com.apple.documentation/documentation/foundation/nskeyvaluechangenewkey
declare const NSKeyValueChangeNewKey: cocoascript.NSKeyValueChangeKey;
// doc://com.apple.documentation/documentation/foundation/nskeyvaluechangenotificationispriorkey
declare const NSKeyValueChangeNotificationIsPriorKey: cocoascript.NSKeyValueChangeKey;
// doc://com.apple.documentation/documentation/foundation/nskeyvaluechangeoldkey
declare const NSKeyValueChangeOldKey: cocoascript.NSKeyValueChangeKey;
// doc://com.apple.documentation/documentation/foundation/nsaveragekeyvalueoperator
declare const NSAverageKeyValueOperator: cocoascript.NSKeyValueOperator;
// doc://com.apple.documentation/documentation/foundation/nscountkeyvalueoperator
declare const NSCountKeyValueOperator: cocoascript.NSKeyValueOperator;
// doc://com.apple.documentation/documentation/foundation/nsdistinctunionofarrayskeyvalueoperator
declare const NSDistinctUnionOfArraysKeyValueOperator: cocoascript.NSKeyValueOperator;
// doc://com.apple.documentation/documentation/foundation/nsdistinctunionofobjectskeyvalueoperator
declare const NSDistinctUnionOfObjectsKeyValueOperator: cocoascript.NSKeyValueOperator;
// doc://com.apple.documentation/documentation/foundation/nsdistinctunionofsetskeyvalueoperator
declare const NSDistinctUnionOfSetsKeyValueOperator: cocoascript.NSKeyValueOperator;
// doc://com.apple.documentation/documentation/foundation/nsmaximumkeyvalueoperator
declare const NSMaximumKeyValueOperator: cocoascript.NSKeyValueOperator;
// doc://com.apple.documentation/documentation/foundation/nsminimumkeyvalueoperator
declare const NSMinimumKeyValueOperator: cocoascript.NSKeyValueOperator;
// doc://com.apple.documentation/documentation/foundation/nssumkeyvalueoperator
declare const NSSumKeyValueOperator: cocoascript.NSKeyValueOperator;
// doc://com.apple.documentation/documentation/foundation/nsunionofarrayskeyvalueoperator
declare const NSUnionOfArraysKeyValueOperator: cocoascript.NSKeyValueOperator;
// doc://com.apple.documentation/documentation/foundation/nsunionofobjectskeyvalueoperator
declare const NSUnionOfObjectsKeyValueOperator: cocoascript.NSKeyValueOperator;
// doc://com.apple.documentation/documentation/foundation/nsunionofsetskeyvalueoperator
declare const NSUnionOfSetsKeyValueOperator: cocoascript.NSKeyValueOperator;
// doc://com.apple.documentation/documentation/foundation/nstextcheckingairlinekey
declare const NSTextCheckingAirlineKey: cocoascript.NSTextCheckingKey;
// doc://com.apple.documentation/documentation/foundation/nstextcheckingflightkey
declare const NSTextCheckingFlightKey: cocoascript.NSTextCheckingKey;
// doc://com.apple.documentation/documentation/foundation/nstextcheckingnamekey
declare const NSTextCheckingNameKey: cocoascript.NSTextCheckingKey;
// doc://com.apple.documentation/documentation/foundation/nstextcheckingjobtitlekey
declare const NSTextCheckingJobTitleKey: cocoascript.NSTextCheckingKey;
// doc://com.apple.documentation/documentation/foundation/nstextcheckingorganizationkey
declare const NSTextCheckingOrganizationKey: cocoascript.NSTextCheckingKey;
// doc://com.apple.documentation/documentation/foundation/nstextcheckingstreetkey
declare const NSTextCheckingStreetKey: cocoascript.NSTextCheckingKey;
// doc://com.apple.documentation/documentation/foundation/nstextcheckingcitykey
declare const NSTextCheckingCityKey: cocoascript.NSTextCheckingKey;
// doc://com.apple.documentation/documentation/foundation/nstextcheckingstatekey
declare const NSTextCheckingStateKey: cocoascript.NSTextCheckingKey;
// doc://com.apple.documentation/documentation/foundation/nstextcheckingzipkey
declare const NSTextCheckingZIPKey: cocoascript.NSTextCheckingKey;
// doc://com.apple.documentation/documentation/foundation/nstextcheckingcountrykey
declare const NSTextCheckingCountryKey: cocoascript.NSTextCheckingKey;
// doc://com.apple.documentation/documentation/foundation/nstextcheckingphonekey
declare const NSTextCheckingPhoneKey: cocoascript.NSTextCheckingKey;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsjsonreadingoptions
  type NSJSONReadingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsjsonwritingoptions
  type NSJSONWritingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nspropertylistmutabilityoptions
  type NSPropertyListMutabilityOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nspropertylistwriteoptions
  type NSPropertyListWriteOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nspropertylistformat
  type NSPropertyListFormat = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nspropertylistreadoptions
  type NSPropertyListReadOptions = cocoascript.NSPropertyListMutabilityOptions;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsmachportoptions
  type NSMachPortOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsbytecountformatterunits
  type NSByteCountFormatterUnits = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsbytecountformattercountstyle
  type NSByteCountFormatterCountStyle = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatterunitsstyle
  type NSDateComponentsFormatterUnitsStyle = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatterzeroformattingbehavior
  type NSDateComponentsFormatterZeroFormattingBehavior = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatterstyle
  type NSDateIntervalFormatterStyle = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsenergyformatterunit
  type NSEnergyFormatterUnit = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nslengthformatterunit
  type NSLengthFormatterUnit = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsmassformatterunit
  type NSMassFormatterUnit = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatterstyle
  type NSPersonNameComponentsFormatterStyle = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatteroptions
  type NSPersonNameComponentsFormatterOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nstestcomparisonoperation
  type NSTestComparisonOperation = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nswhosesubelementidentifier
  type NSWhoseSubelementIdentifier = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsinsertionposition
  type NSInsertionPosition = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsrelativeposition
  type NSRelativePosition = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/foundation/nslocalelanguagecode
declare const NSLocaleLanguageCode: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalecountrycode
declare const NSLocaleCountryCode: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalecalendar
declare const NSLocaleCalendar: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocaleidentifier
declare const NSLocaleIdentifier: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalescriptcode
declare const NSLocaleScriptCode: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalevariantcode
declare const NSLocaleVariantCode: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocaleexemplarcharacterset
declare const NSLocaleExemplarCharacterSet: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalecollationidentifier
declare const NSLocaleCollationIdentifier: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalecollatoridentifier
declare const NSLocaleCollatorIdentifier: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocaleusesmetricsystem
declare const NSLocaleUsesMetricSystem: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocaledecimalseparator
declare const NSLocaleDecimalSeparator: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalegroupingseparator
declare const NSLocaleGroupingSeparator: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalecurrencycode
declare const NSLocaleCurrencyCode: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalecurrencysymbol
declare const NSLocaleCurrencySymbol: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalequotationbegindelimiterkey
declare const NSLocaleQuotationBeginDelimiterKey: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalequotationenddelimiterkey
declare const NSLocaleQuotationEndDelimiterKey: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalealternatequotationbegindelimiterkey
declare const NSLocaleAlternateQuotationBeginDelimiterKey: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalealternatequotationenddelimiterkey
declare const NSLocaleAlternateQuotationEndDelimiterKey: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nslocalemeasurementsystem
declare const NSLocaleMeasurementSystem: cocoascript.NSLocaleKey;
// doc://com.apple.documentation/documentation/foundation/nsfileprotectioncompleteuntilfirstuserauthentication
declare const NSFileProtectionCompleteUntilFirstUserAuthentication: cocoascript.NSFileProtectionType;
// doc://com.apple.documentation/documentation/foundation/nsfileprotectionnone
declare const NSFileProtectionNone: cocoascript.NSFileProtectionType;
// doc://com.apple.documentation/documentation/foundation/nsfilebusy
declare const NSFileBusy: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfiledeviceidentifier
declare const NSFileDeviceIdentifier: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfileprotectionkey
declare const NSFileProtectionKey: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilereferencecount
declare const NSFileReferenceCount: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilesystemfreenodes
declare const NSFileSystemFreeNodes: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilesystemfreesize
declare const NSFileSystemFreeSize: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilesystemnodes
declare const NSFileSystemNodes: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsfilesystemsize
declare const NSFileSystemSize: cocoascript.NSFileAttributeKey;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemdownloadingstatuscurrent
declare const NSURLUbiquitousItemDownloadingStatusCurrent: cocoascript.NSURLUbiquitousItemDownloadingStatus;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemdownloadingstatusdownloaded
declare const NSURLUbiquitousItemDownloadingStatusDownloaded: cocoascript.NSURLUbiquitousItemDownloadingStatus;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousitemdownloadingstatusnotdownloaded
declare const NSURLUbiquitousItemDownloadingStatusNotDownloaded: cocoascript.NSURLUbiquitousItemDownloadingStatus;
// doc://com.apple.documentation/documentation/foundation/nsthumbnail1024x1024sizekey
declare const NSThumbnail1024x1024SizeKey: cocoascript.NSURLThumbnailDictionaryItem;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousshareditemroleowner
declare const NSURLUbiquitousSharedItemRoleOwner: cocoascript.NSURLUbiquitousSharedItemRole;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousshareditemroleparticipant
declare const NSURLUbiquitousSharedItemRoleParticipant: cocoascript.NSURLUbiquitousSharedItemRole;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousshareditempermissionsreadonly
declare const NSURLUbiquitousSharedItemPermissionsReadOnly: cocoascript.NSURLUbiquitousSharedItemPermissions;
// doc://com.apple.documentation/documentation/foundation/nsurlubiquitousshareditempermissionsreadwrite
declare const NSURLUbiquitousSharedItemPermissionsReadWrite: cocoascript.NSURLUbiquitousSharedItemPermissions;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiondelayedrequestdisposition
  type NSURLSessionDelayedRequestDisposition = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An object encapsulating the metrics for a session task.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskmetrics
   */
  interface NSURLSessionTaskMetrics extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskmetrics/1643240-init
    init():cocoascript.NSURLSessionTaskMetrics;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskmetrics/1642789-transactionmetrics
    transactionMetrics(): cocoascript.NSURLSessionTaskTransactionMetrics;
    setTransactionMetrics(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskmetrics/1643169-taskinterval
    taskInterval(): cocoascript.NSDateInterval;
    setTaskInterval(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskmetrics/1643136-redirectcount
    redirectCount(): cocoascript.NSUInteger;
    setRedirectCount(): void;
    //
    alloc():cocoascript.NSURLSessionTaskMetrics;
    //
    init():cocoascript.NSURLSessionTaskMetrics;
  }
}

declare const NSURLSessionTaskMetrics: cocoascript.NSURLSessionTaskMetrics;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessionresponsedisposition
  type NSURLSessionResponseDisposition = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketclosecode
  type NSURLSessionWebSocketCloseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * The interface implemented by URL handle clients.
   * doc://com.apple.documentation/documentation/foundation/nsurlhandleclient
   */
  interface NSURLHandleClient {
    // doc://com.apple.documentation/documentation/foundation/nsurlhandleclient/1589226-urlhandleresourcedidbeginloading
    URLHandleResourceDidBeginLoading(sender: cocoascript.NSURLHandle):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandleclient/1589219-urlhandleresourcedidcancelloadin
    URLHandleResourceDidCancelLoading(sender: cocoascript.NSURLHandle):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandleclient/1589228-urlhandleresourcedidfinishloadin
    URLHandleResourceDidFinishLoading(sender: cocoascript.NSURLHandle):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandleclient/1589237-urlhandle
    URLHandle_resourceDataDidBecomeAvailable(sender: cocoascript.NSURLHandle, newBytes: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandleclient/1589217-urlhandle
    URLHandle_resourceDidFailLoadingWithReason(sender: cocoascript.NSURLHandle, reason: cocoascript.NSString):void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiestringpolicy
  type NSHTTPCookieStringPolicy = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiepropertykey
  type NSHTTPCookiePropertyKey = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nshttpcookieacceptpolicy
  type NSHTTPCookieAcceptPolicy = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsurlerrornetworkunavailablereasonkey
declare const NSURLErrorNetworkUnavailableReasonKey: cocoascript.NSErrorUserInfoKey;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlerrornetworkunavailablereason
  type NSURLErrorNetworkUnavailableReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlhandlestatus
  type NSURLHandleStatus = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/foundation/nsfiletypeblockspecial
declare const NSFileTypeBlockSpecial: cocoascript.NSFileAttributeType;
// doc://com.apple.documentation/documentation/foundation/nsfiletypecharacterspecial
declare const NSFileTypeCharacterSpecial: cocoascript.NSFileAttributeType;
// doc://com.apple.documentation/documentation/foundation/nsfiletypedirectory
declare const NSFileTypeDirectory: cocoascript.NSFileAttributeType;
// doc://com.apple.documentation/documentation/foundation/nsfiletyperegular
declare const NSFileTypeRegular: cocoascript.NSFileAttributeType;
// doc://com.apple.documentation/documentation/foundation/nsfiletypesocket
declare const NSFileTypeSocket: cocoascript.NSFileAttributeType;
// doc://com.apple.documentation/documentation/foundation/nsfiletypeunknown
declare const NSFileTypeUnknown: cocoascript.NSFileAttributeType;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nstaskterminationreason
  type NSTaskTerminationReason = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/foundation/nstaskdidterminatenotification
declare const NSTaskDidTerminateNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsuserscripttaskcompletionhandler
  type NSUserScriptTaskCompletionHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsuserapplescripttaskcompletionhandler
  type NSUserAppleScriptTaskCompletionHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsuserautomatortaskcompletionhandler
  type NSUserAutomatorTaskCompletionHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsuserunixtaskcompletionhandler
  type NSUserUnixTaskCompletionHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstreamevent
  type NSStreamEvent = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstreamstatus
  type NSStreamStatus = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstreamnetworkservicetypevalue
  type NSStreamNetworkServiceTypeValue = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstreamsocksproxyconfiguration
  type NSStreamSOCKSProxyConfiguration = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstreamsocksproxyversion
  type NSStreamSOCKSProxyVersion = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstreamsocketsecuritylevel
  type NSStreamSocketSecurityLevel = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsstreampropertykey
  type NSStreamPropertyKey = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/foundation/nsnetserviceserrordomain
declare const NSNetServicesErrorDomain: cocoascript.NSErrorDomain;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsnetserviceserror
  type NSNetServicesError = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsnetserviceoptions
  type NSNetServiceOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  interface NSMapTableKeyCallBacks {
  }
}declare namespace cocoascript {
  interface NSMapEnumerator {
  }
}declare namespace cocoascript {
  interface NSMapTableValueCallBacks {
  }
}// doc://com.apple.documentation/documentation/foundation/nsintegermapkeycallbacks
declare const NSIntegerMapKeyCallBacks: cocoascript.NSMapTableKeyCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsintmapkeycallbacks
declare const NSIntMapKeyCallBacks: cocoascript.NSMapTableKeyCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsnonownedpointermapkeycallbacks
declare const NSNonOwnedPointerMapKeyCallBacks: cocoascript.NSMapTableKeyCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsnonownedpointerornullmapkeycallbacks
declare const NSNonOwnedPointerOrNullMapKeyCallBacks: cocoascript.NSMapTableKeyCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsnonretainedobjectmapkeycallbacks
declare const NSNonRetainedObjectMapKeyCallBacks: cocoascript.NSMapTableKeyCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsobjectmapkeycallbacks
declare const NSObjectMapKeyCallBacks: cocoascript.NSMapTableKeyCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsownedpointermapkeycallbacks
declare const NSOwnedPointerMapKeyCallBacks: cocoascript.NSMapTableKeyCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsintegermapvaluecallbacks
declare const NSIntegerMapValueCallBacks: cocoascript.NSMapTableValueCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsintmapvaluecallbacks
declare const NSIntMapValueCallBacks: cocoascript.NSMapTableValueCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsnonownedpointermapvaluecallbacks
declare const NSNonOwnedPointerMapValueCallBacks: cocoascript.NSMapTableValueCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsownedpointermapvaluecallbacks
declare const NSOwnedPointerMapValueCallBacks: cocoascript.NSMapTableValueCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsnonretainedobjectmapvaluecallbacks
declare const NSNonRetainedObjectMapValueCallBacks: cocoascript.NSMapTableValueCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsobjectmapvaluecallbacks
declare const NSObjectMapValueCallBacks: cocoascript.NSMapTableValueCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskprioritydefault
declare const NSURLSessionTaskPriorityDefault: number;
// doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskprioritylow
declare const NSURLSessionTaskPriorityLow: number;
// doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskpriorityhigh
declare const NSURLSessionTaskPriorityHigh: number;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifieriso8601
declare const NSCalendarIdentifierISO8601: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierislamiccivil
declare const NSCalendarIdentifierIslamicCivil: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierislamictabular
declare const NSCalendarIdentifierIslamicTabular: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nscalendaridentifierrepublicofchina
declare const NSCalendarIdentifierRepublicOfChina: cocoascript.NSCalendarIdentifier;
// doc://com.apple.documentation/documentation/foundation/nsmaptablestrongmemory
declare const NSMapTableStrongMemory: cocoascript.NSPointerFunctionsOptions;
// doc://com.apple.documentation/documentation/foundation/nsmaptableweakmemory
declare const NSMapTableWeakMemory: cocoascript.NSPointerFunctionsOptions;
// doc://com.apple.documentation/documentation/foundation/nsmaptablezeroingweakmemory
declare const NSMapTableZeroingWeakMemory: cocoascript.NSPointerFunctionsOptions;
// doc://com.apple.documentation/documentation/foundation/nsmaptableobjectpointerpersonality
declare const NSMapTableObjectPointerPersonality: cocoascript.NSPointerFunctionsOptions;
// doc://com.apple.documentation/documentation/foundation/nsmaptablecopyin
declare const NSMapTableCopyIn: cocoascript.NSPointerFunctionsOptions;
// doc://com.apple.documentation/documentation/foundation/nshashtablestrongmemory
declare const NSHashTableStrongMemory: cocoascript.NSPointerFunctionsOptions;
// doc://com.apple.documentation/documentation/foundation/nshashtablezeroingweakmemory
declare const NSHashTableZeroingWeakMemory: cocoascript.NSPointerFunctionsOptions;
// doc://com.apple.documentation/documentation/foundation/nshashtablecopyin
declare const NSHashTableCopyIn: cocoascript.NSPointerFunctionsOptions;
// doc://com.apple.documentation/documentation/foundation/nshashtableobjectpointerpersonality
declare const NSHashTableObjectPointerPersonality: cocoascript.NSPointerFunctionsOptions;
// doc://com.apple.documentation/documentation/foundation/nshashtableweakmemory
declare const NSHashTableWeakMemory: cocoascript.NSPointerFunctionsOptions;
declare namespace cocoascript {
  interface NSHashEnumerator {
  }
}declare namespace cocoascript {
  interface NSHashTableCallBacks {
  }
}// doc://com.apple.documentation/documentation/foundation/nsintegerhashcallbacks
declare const NSIntegerHashCallBacks: cocoascript.NSHashTableCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsinthashcallbacks
declare const NSIntHashCallBacks: cocoascript.NSHashTableCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsnonownedpointerhashcallbacks
declare const NSNonOwnedPointerHashCallBacks: cocoascript.NSHashTableCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsnonretainedobjecthashcallbacks
declare const NSNonRetainedObjectHashCallBacks: cocoascript.NSHashTableCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsobjecthashcallbacks
declare const NSObjectHashCallBacks: cocoascript.NSHashTableCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsownedobjectidentityhashcallbacks
declare const NSOwnedObjectIdentityHashCallBacks: cocoascript.NSHashTableCallBacks;
// doc://com.apple.documentation/documentation/foundation/nsownedpointerhashcallbacks
declare const NSOwnedPointerHashCallBacks: cocoascript.NSHashTableCallBacks;
// doc://com.apple.documentation/documentation/foundation/nspointertostructhashcallbacks
declare const NSPointerToStructHashCallBacks: cocoascript.NSHashTableCallBacks;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsxmldocumentcontentkind
  type NSXMLDocumentContentKind = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsxmldtdnodekind
  type NSXMLDTDNodeKind = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnectionoptions
  type NSXPCConnectionOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  interface NSSwappedDouble {
  }
}declare namespace cocoascript {
  interface NSSwappedFloat {
  }
}// doc://com.apple.documentation/documentation/foundation/nsprogressfiletotalcountkey
declare const NSProgressFileTotalCountKey: cocoascript.NSProgressUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsprogressfilecompletedcountkey
declare const NSProgressFileCompletedCountKey: cocoascript.NSProgressUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsprogressfileanimationimageoriginalrectkey
declare const NSProgressFileAnimationImageOriginalRectKey: cocoascript.NSProgressUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsprogressfileanimationimagekey
declare const NSProgressFileAnimationImageKey: cocoascript.NSProgressUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsprogressfileiconkey
declare const NSProgressFileIconKey: cocoascript.NSProgressUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsprogressfileurlkey
declare const NSProgressFileURLKey: cocoascript.NSProgressUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsprogressfileoperationkindcopying
declare const NSProgressFileOperationKindCopying: cocoascript.NSProgressFileOperationKind;
// doc://com.apple.documentation/documentation/foundation/nsprogressfileoperationkinddecompressingafterdownloading
declare const NSProgressFileOperationKindDecompressingAfterDownloading: cocoascript.NSProgressFileOperationKind;
// doc://com.apple.documentation/documentation/foundation/nsprogressfileoperationkinddownloading
declare const NSProgressFileOperationKindDownloading: cocoascript.NSProgressFileOperationKind;
// doc://com.apple.documentation/documentation/foundation/nsprogressfileoperationkindreceiving
declare const NSProgressFileOperationKindReceiving: cocoascript.NSProgressFileOperationKind;
// doc://com.apple.documentation/documentation/foundation/nsprogressestimatedtimeremainingkey
declare const NSProgressEstimatedTimeRemainingKey: cocoascript.NSProgressUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nsprogressthroughputkey
declare const NSProgressThroughputKey: cocoascript.NSProgressUserInfoKey;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagschemelexicalclass
declare const NSLinguisticTagSchemeLexicalClass: cocoascript.NSLinguisticTagScheme;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagschemelemma
declare const NSLinguisticTagSchemeLemma: cocoascript.NSLinguisticTagScheme;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagword
declare const NSLinguisticTagWord: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagpunctuation
declare const NSLinguisticTagPunctuation: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagwhitespace
declare const NSLinguisticTagWhitespace: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagother
declare const NSLinguisticTagOther: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagschemenametype
declare const NSLinguisticTagSchemeNameType: cocoascript.NSLinguisticTagScheme;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagnoun
declare const NSLinguisticTagNoun: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagschemelanguage
declare const NSLinguisticTagSchemeLanguage: cocoascript.NSLinguisticTagScheme;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagschemescript
declare const NSLinguisticTagSchemeScript: cocoascript.NSLinguisticTagScheme;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagschemetokentype
declare const NSLinguisticTagSchemeTokenType: cocoascript.NSLinguisticTagScheme;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagschemenametypeorlexicalclass
declare const NSLinguisticTagSchemeNameTypeOrLexicalClass: cocoascript.NSLinguisticTagScheme;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagverb
declare const NSLinguisticTagVerb: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagadjective
declare const NSLinguisticTagAdjective: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagadverb
declare const NSLinguisticTagAdverb: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagpronoun
declare const NSLinguisticTagPronoun: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagdeterminer
declare const NSLinguisticTagDeterminer: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagparticle
declare const NSLinguisticTagParticle: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagpreposition
declare const NSLinguisticTagPreposition: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagnumber
declare const NSLinguisticTagNumber: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagconjunction
declare const NSLinguisticTagConjunction: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictaginterjection
declare const NSLinguisticTagInterjection: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagclassifier
declare const NSLinguisticTagClassifier: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagidiom
declare const NSLinguisticTagIdiom: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagotherword
declare const NSLinguisticTagOtherWord: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagsentenceterminator
declare const NSLinguisticTagSentenceTerminator: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagopenquote
declare const NSLinguisticTagOpenQuote: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagclosequote
declare const NSLinguisticTagCloseQuote: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagopenparenthesis
declare const NSLinguisticTagOpenParenthesis: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagcloseparenthesis
declare const NSLinguisticTagCloseParenthesis: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagwordjoiner
declare const NSLinguisticTagWordJoiner: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagdash
declare const NSLinguisticTagDash: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagotherpunctuation
declare const NSLinguisticTagOtherPunctuation: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagparagraphbreak
declare const NSLinguisticTagParagraphBreak: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagotherwhitespace
declare const NSLinguisticTagOtherWhitespace: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagpersonalname
declare const NSLinguisticTagPersonalName: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagorganizationname
declare const NSLinguisticTagOrganizationName: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nslinguistictagplacename
declare const NSLinguisticTagPlaceName: cocoascript.NSLinguisticTag;
// doc://com.apple.documentation/documentation/foundation/nsisniltransformername
declare const NSIsNilTransformerName: cocoascript.NSValueTransformerName;
// doc://com.apple.documentation/documentation/foundation/nsisnotniltransformername
declare const NSIsNotNilTransformerName: cocoascript.NSValueTransformerName;
// doc://com.apple.documentation/documentation/foundation/nskeyedunarchivefromdatatransformername
declare const NSKeyedUnarchiveFromDataTransformerName: cocoascript.NSValueTransformerName;
// doc://com.apple.documentation/documentation/foundation/nsnegatebooleantransformername
declare const NSNegateBooleanTransformerName: cocoascript.NSValueTransformerName;
// doc://com.apple.documentation/documentation/foundation/nsunarchivefromdatatransformername
declare const NSUnarchiveFromDataTransformerName: cocoascript.NSValueTransformerName;
// doc://com.apple.documentation/documentation/foundation/nssecureunarchivefromdatatransformername
declare const NSSecureUnarchiveFromDataTransformerName: cocoascript.NSValueTransformerName;
// doc://com.apple.documentation/documentation/foundation/nsnotificationdeliverimmediately
declare const NSNotificationDeliverImmediately: cocoascript.NSDistributedNotificationOptions;
// doc://com.apple.documentation/documentation/foundation/nsnotificationposttoallsessions
declare const NSNotificationPostToAllSessions: cocoascript.NSDistributedNotificationOptions;
// doc://com.apple.documentation/documentation/foundation/nslocalnotificationcentertype
declare const NSLocalNotificationCenterType: cocoascript.NSDistributedNotificationCenterType;
declare namespace cocoascript {
  /**
   * An object that encapsualtes the performance metrics collected by the URL Loading System during the execution of a session task.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics
   */
  interface NSURLSessionTaskTransactionMetrics extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643144-request
    request(): cocoascript.NSURLRequest;
    setRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643172-response
    response(): cocoascript.NSURLResponse;
    setResponse(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643009-fetchstartdate
    fetchStartDate(): cocoascript.NSDate;
    setFetchStartDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642859-domainlookupstartdate
    domainLookupStartDate(): cocoascript.NSDate;
    setDomainLookupStartDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643173-domainlookupenddate
    domainLookupEndDate(): cocoascript.NSDate;
    setDomainLookupEndDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642815-connectstartdate
    connectStartDate(): cocoascript.NSDate;
    setConnectStartDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643219-secureconnectionstartdate
    secureConnectionStartDate(): cocoascript.NSDate;
    setSecureConnectionStartDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643255-secureconnectionenddate
    secureConnectionEndDate(): cocoascript.NSDate;
    setSecureConnectionEndDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643239-connectenddate
    connectEndDate(): cocoascript.NSDate;
    setConnectEndDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642906-requeststartdate
    requestStartDate(): cocoascript.NSDate;
    setRequestStartDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643056-requestenddate
    requestEndDate(): cocoascript.NSDate;
    setRequestEndDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642966-responsestartdate
    responseStartDate(): cocoascript.NSDate;
    setResponseStartDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643300-responseenddate
    responseEndDate(): cocoascript.NSDate;
    setResponseEndDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240629-countofrequestbodybytesbeforeenc
    countOfRequestBodyBytesBeforeEncoding(): number;
    setCountOfRequestBodyBytesBeforeEncoding(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240630-countofrequestbodybytessent
    countOfRequestBodyBytesSent(): number;
    setCountOfRequestBodyBytesSent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240631-countofrequestheaderbytessent
    countOfRequestHeaderBytesSent(): number;
    setCountOfRequestHeaderBytesSent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240632-countofresponsebodybytesafterdec
    countOfResponseBodyBytesAfterDecoding(): number;
    setCountOfResponseBodyBytesAfterDecoding(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240633-countofresponsebodybytesreceived
    countOfResponseBodyBytesReceived(): number;
    setCountOfResponseBodyBytesReceived(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240634-countofresponseheaderbytesreceiv
    countOfResponseHeaderBytesReceived(): number;
    setCountOfResponseHeaderBytesReceived(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643141-networkprotocolname
    networkProtocolName(): cocoascript.NSString;
    setNetworkProtocolName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240642-remoteaddress
    remoteAddress(): cocoascript.NSString;
    setRemoteAddress(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240643-remoteport
    remotePort(): cocoascript.NSNumber;
    setRemotePort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240636-localaddress
    localAddress(): cocoascript.NSString;
    setLocalAddress(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240637-localport
    localPort(): cocoascript.NSNumber;
    setLocalPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240639-negotiatedtlsciphersuite
    negotiatedTLSCipherSuite(): cocoascript.NSNumber;
    setNegotiatedTLSCipherSuite(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240640-negotiatedtlsprotocolversion
    negotiatedTLSProtocolVersion(): cocoascript.NSNumber;
    setNegotiatedTLSProtocolVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240627-cellular
    cellular(): cocoascript.BOOL;
    setCellular(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240635-expensive
    expensive(): cocoascript.BOOL;
    setExpensive(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240628-constrained
    constrained(): cocoascript.BOOL;
    setConstrained(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642917-proxyconnection
    proxyConnection(): cocoascript.BOOL;
    setProxyConnection(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643233-reusedconnection
    reusedConnection(): cocoascript.BOOL;
    setReusedConnection(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240638-multipath
    multipath(): cocoascript.BOOL;
    setMultipath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642919-resourcefetchtype
    resourceFetchType(): cocoascript.NSURLSessionTaskMetricsResourceFetchType;
    setResourceFetchType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642954-init
    init():cocoascript.NSURLSessionTaskTransactionMetrics;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3674827-domainresolutionprotocol
    domainResolutionProtocol(): cocoascript.NSURLSessionTaskMetricsDomainResolutionProtocol;
    setDomainResolutionProtocol(): void;
    //
    alloc():cocoascript.NSURLSessionTaskTransactionMetrics;
    //
    init():cocoascript.NSURLSessionTaskTransactionMetrics;
  }
}

declare const NSURLSessionTaskTransactionMetrics: cocoascript.NSURLSessionTaskTransactionMetrics;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiepath
declare const NSHTTPCookiePath: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiename
declare const NSHTTPCookieName: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookievalue
declare const NSHTTPCookieValue: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookieoriginurl
declare const NSHTTPCookieOriginURL: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiedomain
declare const NSHTTPCookieDomain: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiesamesitestrict
declare const NSHTTPCookieSameSiteStrict: cocoascript.NSHTTPCookieStringPolicy;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiesamesitelax
declare const NSHTTPCookieSameSiteLax: cocoascript.NSHTTPCookieStringPolicy;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiecomment
declare const NSHTTPCookieComment: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiecommenturl
declare const NSHTTPCookieCommentURL: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiediscard
declare const NSHTTPCookieDiscard: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookieexpires
declare const NSHTTPCookieExpires: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiemaximumage
declare const NSHTTPCookieMaximumAge: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookieport
declare const NSHTTPCookiePort: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiesamesitepolicy
declare const NSHTTPCookieSameSitePolicy: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookiesecure
declare const NSHTTPCookieSecure: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nshttpcookieversion
declare const NSHTTPCookieVersion: cocoascript.NSHTTPCookiePropertyKey;
// doc://com.apple.documentation/documentation/foundation/nsstreamnetworkservicetypebackground
declare const NSStreamNetworkServiceTypeBackground: cocoascript.NSStreamNetworkServiceTypeValue;
// doc://com.apple.documentation/documentation/foundation/nsstreamnetworkservicetypevideo
declare const NSStreamNetworkServiceTypeVideo: cocoascript.NSStreamNetworkServiceTypeValue;
// doc://com.apple.documentation/documentation/foundation/nsstreamnetworkservicetypevoice
declare const NSStreamNetworkServiceTypeVoice: cocoascript.NSStreamNetworkServiceTypeValue;
// doc://com.apple.documentation/documentation/foundation/nsstreamnetworkservicetypevoip
declare const NSStreamNetworkServiceTypeVoIP: cocoascript.NSStreamNetworkServiceTypeValue;
// doc://com.apple.documentation/documentation/foundation/nsstreamnetworkservicetypecallsignaling
declare const NSStreamNetworkServiceTypeCallSignaling: cocoascript.NSStreamNetworkServiceTypeValue;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocksproxyhostkey
declare const NSStreamSOCKSProxyHostKey: cocoascript.NSStreamSOCKSProxyConfiguration;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocksproxypasswordkey
declare const NSStreamSOCKSProxyPasswordKey: cocoascript.NSStreamSOCKSProxyConfiguration;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocksproxyportkey
declare const NSStreamSOCKSProxyPortKey: cocoascript.NSStreamSOCKSProxyConfiguration;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocksproxyuserkey
declare const NSStreamSOCKSProxyUserKey: cocoascript.NSStreamSOCKSProxyConfiguration;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocksproxyversionkey
declare const NSStreamSOCKSProxyVersionKey: cocoascript.NSStreamSOCKSProxyConfiguration;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocksproxyversion4
declare const NSStreamSOCKSProxyVersion4: cocoascript.NSStreamSOCKSProxyVersion;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocksproxyversion5
declare const NSStreamSOCKSProxyVersion5: cocoascript.NSStreamSOCKSProxyVersion;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocketsecuritylevelnegotiatedssl
declare const NSStreamSocketSecurityLevelNegotiatedSSL: cocoascript.NSStreamSocketSecurityLevel;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocketsecuritylevelnone
declare const NSStreamSocketSecurityLevelNone: cocoascript.NSStreamSocketSecurityLevel;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocketsecuritylevelsslv2
declare const NSStreamSocketSecurityLevelSSLv2: cocoascript.NSStreamSocketSecurityLevel;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocketsecuritylevelsslv3
declare const NSStreamSocketSecurityLevelSSLv3: cocoascript.NSStreamSocketSecurityLevel;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocketsecurityleveltlsv1
declare const NSStreamSocketSecurityLevelTLSv1: cocoascript.NSStreamSocketSecurityLevel;
// doc://com.apple.documentation/documentation/foundation/nsstreamdatawrittentomemorystreamkey
declare const NSStreamDataWrittenToMemoryStreamKey: cocoascript.NSStreamPropertyKey;
// doc://com.apple.documentation/documentation/foundation/nsstreamfilecurrentoffsetkey
declare const NSStreamFileCurrentOffsetKey: cocoascript.NSStreamPropertyKey;
// doc://com.apple.documentation/documentation/foundation/nsstreamnetworkservicetype
declare const NSStreamNetworkServiceType: cocoascript.NSStreamPropertyKey;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocketsecuritylevelkey
declare const NSStreamSocketSecurityLevelKey: cocoascript.NSStreamPropertyKey;
// doc://com.apple.documentation/documentation/foundation/nsstreamsocksproxyconfigurationkey
declare const NSStreamSOCKSProxyConfigurationKey: cocoascript.NSStreamPropertyKey;
// doc://com.apple.documentation/documentation/foundation/nsmaptablekeycallbacks/1391446-notakeymarker
declare const notAKeyMarker: void;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskmetricsresourcefetchtype
  type NSURLSessionTaskMetricsResourceFetchType = cocoascript.NSInteger;
}
