declare namespace cocoascript {
  interface CFAttributedStringRef {
  }
}
declare namespace cocoascript {
  interface CFMutableAttributedStringRef {
  }
}
declare namespace cocoascript {
  interface CFURLRef {
  }
}
declare namespace cocoascript {
  interface CFUUIDRef {
  }
}
declare namespace cocoascript {
  interface CFStringRef {
  }
}
declare namespace cocoascript {
  interface CFBundleRef {
  }
}
declare namespace cocoascript {
  interface CFNumberRef {
  }
}
declare namespace cocoascript {
  interface CFBooleanRef {
  }
}
declare namespace cocoascript {
  interface CFDateRef {
  }
}
declare namespace cocoascript {
  interface CFDataRef {
  }
}
declare namespace cocoascript {
  interface CFArrayRef {
  }
}
declare namespace cocoascript {
  interface CFDictionaryRef {
  }
}
declare namespace cocoascript {
  interface CFMutableDictionaryRef {
  }
}
declare namespace cocoascript {
  interface CFErrorRef {
  }
}
declare namespace cocoascript {
  interface CFRunLoopTimerRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cftimeinterval
  type CFTimeInterval = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cftyperef
  type CFTypeRef = void;
}
declare namespace cocoascript {
  interface CFMutableStringRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfindex
  type CFIndex = number;
}
declare namespace cocoascript {
  interface CFSetRef {
  }
}
declare namespace cocoascript {
  interface CFLocaleRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbundlerefnum
  type CFBundleRefNum = number;
}
declare namespace cocoascript {
  interface CFNullRef {
  }
}
declare namespace cocoascript {
  interface CFTimeZoneRef {
  }
}
declare namespace cocoascript {
  interface CFCalendarRef {
  }
}
declare namespace cocoascript {
  interface CFMutableCharacterSetRef {
  }
}
declare namespace cocoascript {
  interface CFCharacterSetRef {
  }
}
declare namespace cocoascript {
  interface CFFileSecurityRef {
  }
}
declare namespace cocoascript {
  interface CFReadStreamRef {
  }
}
declare namespace cocoascript {
  interface CFWriteStreamRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfstringencoding
  type CFStringEncoding = number;
}
// doc://com.apple.documentation/documentation/corefoundation/kcfnull
declare const kCFNull: CFNullRef;
// doc://com.apple.documentation/documentation/corefoundation/1388767-cfarraygetvalueatindex
declare const CFArrayGetValueAtIndex: CFIndex;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfarrayapplierfunction
  type CFArrayApplierFunction = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfarraycopydescriptioncallback
  type CFArrayCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfarrayequalcallback
  type CFArrayEqualCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfarrayreleasecallback
  type CFArrayReleaseCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfarrayretaincallback
  type CFArrayRetainCallBack = void;
}
declare namespace cocoascript {
  interface CFArrayCallBacks {
  }
}
declare namespace cocoascript {
  interface CFMutableArrayRef {
  }
}
declare namespace cocoascript {
  interface CFMutableSetRef {
  }
}
// doc://com.apple.documentation/documentation/corefoundation/1516757-cfdictionarygetvalue
declare const CFDictionaryGetValue: void;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryapplierfunction
  type CFDictionaryApplierFunction = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfdictionarycopydescriptioncallback
  type CFDictionaryCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryequalcallback
  type CFDictionaryEqualCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryhashcallback
  type CFDictionaryHashCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryreleasecallback
  type CFDictionaryReleaseCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryretaincallback
  type CFDictionaryRetainCallBack = void;
}
declare namespace cocoascript {
  interface CFDictionaryKeyCallBacks {
  }
}
declare namespace cocoascript {
  interface CFDictionaryValueCallBacks {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cftypeid
  type CFTypeID = number;
}
declare namespace cocoascript {
  interface CFMachPortRef {
  }
}
declare namespace cocoascript {
  interface CFRunLoopSourceRef {
  }
}
// doc://com.apple.documentation/documentation/corefoundation/kcfcopystringdictionarykeycallbacks
declare const kCFCopyStringDictionaryKeyCallBacks: CFDictionaryKeyCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/kcftypedictionaryvaluecallbacks
declare const kCFTypeDictionaryValueCallBacks: CFDictionaryValueCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/kcfallocatordefault
declare const kCFAllocatorDefault: CFAllocatorRef;
declare namespace cocoascript {
  interface CFAllocatorRef {
  }
}
declare namespace cocoascript {
  interface CFRange {
  }
}
// doc://com.apple.documentation/documentation/corefoundation/1520426-cfsetgetvalue
declare const CFSetGetValue: void;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfsetapplierfunction
  type CFSetApplierFunction = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfsetcopydescriptioncallback
  type CFSetCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfsetequalcallback
  type CFSetEqualCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfsethashcallback
  type CFSetHashCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfsetreleasecallback
  type CFSetReleaseCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfsetretaincallback
  type CFSetRetainCallBack = void;
}
declare namespace cocoascript {
  interface CFSetCallBacks {
  }
}
declare namespace cocoascript {
  interface CFBagRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfabsolutetime
  type CFAbsoluteTime = cocoascript.CFTimeInterval;
}
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypekey
declare const kCFURLFileResourceTypeKey: CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfurlbookmarkcreationoptions
  type CFURLBookmarkCreationOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfurlbookmarkfilecreationoptions
  type CFURLBookmarkFileCreationOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfurlbookmarkresolutionoptions
  type CFURLBookmarkResolutionOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfurlcomponenttype
  type CFURLComponentType = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfurlpathstyle
  type CFURLPathStyle = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFUUIDBytes {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfoptionflags
  type CFOptionFlags = number;
}
// doc://com.apple.documentation/documentation/corefoundation/1542939-cfstringgetcharactersptr
declare const CFStringGetCharactersPtr: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/1542133-cfstringgetcstringptr
declare const CFStringGetCStringPtr: CFStringEncoding;
// doc://com.apple.documentation/documentation/corefoundation/1542932-cfstringgetlistofavailableencodi
declare const CFStringGetListOfAvailableEncodings: void;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfstringencodings
  type CFStringEncodings = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfstringcompareflags
  type CFStringCompareFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  interface CFStringInlineBuffer {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfstringbuiltinencodings
  type CFStringBuiltInEncodings = cocoascript.CFStringEncoding;
}
// doc://com.apple.documentation/documentation/corefoundation/kcfbundlelocalizationskey
declare const kCFBundleLocalizationsKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfbundledevelopmentregionkey
declare const kCFBundleDevelopmentRegionKey: CFStringRef;
declare namespace cocoascript {
  interface CFPlugInRef {
  }
}
// doc://com.apple.documentation/documentation/corefoundation/kcfbundleinfodictionaryversionkey
declare const kCFBundleInfoDictionaryVersionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfbundleexecutablekey
declare const kCFBundleExecutableKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfbundleidentifierkey
declare const kCFBundleIdentifierKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfbundleversionkey
declare const kCFBundleVersionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfbundlenamekey
declare const kCFBundleNameKey: CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfallocatorallocatecallback
  type CFAllocatorAllocateCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcopydescriptioncallback
  type CFAllocatorCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfallocatordeallocatecallback
  type CFAllocatorDeallocateCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfallocatorpreferredsizecallback
  type CFAllocatorPreferredSizeCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfallocatorreallocatecallback
  type CFAllocatorReallocateCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfallocatorreleasecallback
  type CFAllocatorReleaseCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfallocatorretaincallback
  type CFAllocatorRetainCallBack = void;
}
declare namespace cocoascript {
  interface CFAllocatorContext {
  }
}
// doc://com.apple.documentation/documentation/corefoundation/1469280-cfbaggetvalue
declare const CFBagGetValue: void;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbagapplierfunction
  type CFBagApplierFunction = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbagcopydescriptioncallback
  type CFBagCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbagequalcallback
  type CFBagEqualCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbaghashcallback
  type CFBagHashCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbagreleasecallback
  type CFBagReleaseCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbagretaincallback
  type CFBagRetainCallBack = void;
}
declare namespace cocoascript {
  interface CFBagCallBacks {
  }
}
// doc://com.apple.documentation/documentation/corefoundation/1509325-cfbinaryheapgetminimum
declare const CFBinaryHeapGetMinimum: CFBinaryHeapRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapapplierfunction
  type CFBinaryHeapApplierFunction = void;
}
declare namespace cocoascript {
  interface CFBinaryHeapCallBacks {
  }
}
declare namespace cocoascript {
  interface CFBinaryHeapCompareContext {
  }
}
declare namespace cocoascript {
  interface CFBinaryHeapRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbit
  type CFBit = number;
}
declare namespace cocoascript {
  interface CFBitVectorRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfcalendarunit
  type CFCalendarUnit = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfcharactersetpredefinedset
  type CFCharacterSetPredefinedSet = cocoascript.CFIndex;
}
// doc://com.apple.documentation/documentation/corefoundation/1543330-cfdatagetbyteptr
declare const CFDataGetBytePtr: CFDataRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfdatasearchflags
  type CFDataSearchFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfdateformatterstyle
  type CFDateFormatterStyle = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFDateFormatterRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cffiledescriptornativedescriptor
  type CFFileDescriptorNativeDescriptor = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cffiledescriptorcallback
  type CFFileDescriptorCallBack = void;
}
declare namespace cocoascript {
  interface CFFileDescriptorContext {
  }
}
declare namespace cocoascript {
  interface CFFileDescriptorRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cflocalelanguagedirection
  type CFLocaleLanguageDirection = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfmachportcallback
  type CFMachPortCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfmachportinvalidationcallback
  type CFMachPortInvalidationCallBack = void;
}
declare namespace cocoascript {
  interface CFMachPortContext {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfmessageportcallback
  type CFMessagePortCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfmessageportinvalidationcallback
  type CFMessagePortInvalidationCallBack = void;
}
declare namespace cocoascript {
  interface CFMessagePortContext {
  }
}
declare namespace cocoascript {
  interface CFMessagePortRef {
  }
}
declare namespace cocoascript {
  interface CFMutableBagRef {
  }
}
declare namespace cocoascript {
  interface CFMutableBitVectorRef {
  }
}
declare namespace cocoascript {
  interface CFMutableDataRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfstringnormalizationform
  type CFStringNormalizationForm = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfnotificationcallback
  type CFNotificationCallback = cocoascript.CFDictionaryRef;
}
declare namespace cocoascript {
  interface CFNotificationCenterRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfnotificationsuspensionbehavior
  type CFNotificationSuspensionBehavior = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfnumbertype
  type CFNumberType = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfnumberformatterstyle
  type CFNumberFormatterStyle = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfnumberformatteroptionflags
  type CFNumberFormatterOptionFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfnumberformatterpadposition
  type CFNumberFormatterPadPosition = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFNumberFormatterRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfnumberformatterroundingmode
  type CFNumberFormatterRoundingMode = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfplugindynamicregisterfunction
  type CFPlugInDynamicRegisterFunction = cocoascript.CFPlugInRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfpluginfactoryfunction
  type CFPlugInFactoryFunction = cocoascript.CFUUIDRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfpluginunloadfunction
  type CFPlugInUnloadFunction = cocoascript.CFPlugInRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfplugininstancedeallocateinstancedatafunction
  type CFPlugInInstanceDeallocateInstanceDataFunction = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfplugininstancegetinterfacefunction
  type CFPlugInInstanceGetInterfaceFunction = void;
}
declare namespace cocoascript {
  interface CFPlugInInstanceRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfpropertylistref
  type CFPropertyListRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfpropertylistmutabilityoptions
  type CFPropertyListMutabilityOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfpropertylistformat
  type CFPropertyListFormat = cocoascript.CFIndex;
}
// doc://com.apple.documentation/documentation/corefoundation/1539692-cfreadstreamgetbuffer
declare const CFReadStreamGetBuffer: CFIndex;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfreadstreamclientcallback
  type CFReadStreamClientCallBack = void;
}
declare namespace cocoascript {
  interface CFStreamClientContext {
  }
}
// doc://com.apple.documentation/documentation/corefoundation/kcfrunloopdefaultmode
declare const kCFRunLoopDefaultMode: CFRunLoopMode;
// doc://com.apple.documentation/documentation/corefoundation/kcfrunloopcommonmodes
declare const kCFRunLoopCommonModes: CFRunLoopMode;
declare namespace cocoascript {
  interface CFRunLoopRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfrunloopobservercallback
  type CFRunLoopObserverCallBack = void;
}
declare namespace cocoascript {
  interface CFRunLoopObserverContext {
  }
}
declare namespace cocoascript {
  interface CFRunLoopObserverRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfrunloopactivity
  type CFRunLoopActivity = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  interface CFRunLoopSourceContext {
  }
}
declare namespace cocoascript {
  interface CFRunLoopSourceContext1 {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfrunlooptimercallback
  type CFRunLoopTimerCallBack = void;
}
declare namespace cocoascript {
  interface CFRunLoopTimerContext {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfsocketcallback
  type CFSocketCallBack = void;
}
declare namespace cocoascript {
  interface CFSocketContext {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfsocketnativehandle
  type CFSocketNativeHandle = number;
}
declare namespace cocoascript {
  interface CFSocketRef {
  }
}
declare namespace cocoascript {
  interface CFSocketSignature {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfsocketcallbacktype
  type CFSocketCallBackType = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfsocketerror
  type CFSocketError = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFStringTokenizerRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfstringtokenizertokentype
  type CFStringTokenizerTokenType = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cftimezonenamestyle
  type CFTimeZoneNameStyle = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFTreeContext {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cftreeapplierfunction
  type CFTreeApplierFunction = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cftreecopydescriptioncallback
  type CFTreeCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cftreereleasecallback
  type CFTreeReleaseCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cftreeretaincallback
  type CFTreeRetainCallBack = void;
}
declare namespace cocoascript {
  interface CFTreeRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfhashcode
  type CFHashCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfusernotificationcallback
  type CFUserNotificationCallBack = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  interface CFUserNotificationRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfwritestreamclientcallback
  type CFWriteStreamClientCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlnodetypecode
  type CFXMLNodeTypeCode = cocoascript.CFIndex;
}
// doc://com.apple.documentation/documentation/corefoundation/1443276-cfxmlnodegetinfoptr
declare const CFXMLNodeGetInfoPtr: CFXMLNodeRef;
declare namespace cocoascript {
  interface CFXMLAttributeDeclarationInfo {
  }
}
declare namespace cocoascript {
  interface CFXMLAttributeListDeclarationInfo {
  }
}
declare namespace cocoascript {
  interface CFXMLDocumentInfo {
  }
}
declare namespace cocoascript {
  interface CFXMLDocumentTypeInfo {
  }
}
declare namespace cocoascript {
  interface CFXMLElementInfo {
  }
}
declare namespace cocoascript {
  interface CFXMLElementTypeDeclarationInfo {
  }
}
declare namespace cocoascript {
  interface CFXMLEntityInfo {
  }
}
declare namespace cocoascript {
  interface CFXMLEntityReferenceInfo {
  }
}
declare namespace cocoascript {
  interface CFXMLExternalID {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlnoderef
  type CFXMLNodeRef = cocoascript.__CFXMLNode;
}
declare namespace cocoascript {
  interface CFXMLNotationInfo {
  }
}
declare namespace cocoascript {
  interface CFXMLProcessingInstructionInfo {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlentitytypecode
  type CFXMLEntityTypeCode = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparseraddchildcallback
  type CFXMLParserAddChildCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercopydescriptioncallback
  type CFXMLParserCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercreatexmlstructurecallback
  type CFXMLParserCreateXMLStructureCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparserendxmlstructurecallback
  type CFXMLParserEndXMLStructureCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparserhandleerrorcallback
  type CFXMLParserHandleErrorCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparserreleasecallback
  type CFXMLParserReleaseCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparserresolveexternalentitycallback
  type CFXMLParserResolveExternalEntityCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparserretaincallback
  type CFXMLParserRetainCallBack = void;
}
declare namespace cocoascript {
  interface CFXMLParserCallBacks {
  }
}
declare namespace cocoascript {
  interface CFXMLParserContext {
  }
}
declare namespace cocoascript {
  interface CFXMLParserRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparserstatuscode
  type CFXMLParserStatusCode = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparseroptions
  type CFXMLParserOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmltreeref
  type CFXMLTreeRef = cocoascript.CFTreeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfrunloopmode
  type CFRunLoopMode = cocoascript.CFStringRef;
}
// doc://com.apple.documentation/documentation/corefoundation/kcfbooleantrue
declare const kCFBooleanTrue: CFBooleanRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformtolatin
declare const kCFStringTransformToLatin: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatinarabic
declare const kCFStringTransformLatinArabic: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatincyrillic
declare const kCFStringTransformLatinCyrillic: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatingreek
declare const kCFStringTransformLatinGreek: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatinhangul
declare const kCFStringTransformLatinHangul: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatinhebrew
declare const kCFStringTransformLatinHebrew: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatinhiragana
declare const kCFStringTransformLatinHiragana: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatinkatakana
declare const kCFStringTransformLatinKatakana: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatinthai
declare const kCFStringTransformLatinThai: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformhiraganakatakana
declare const kCFStringTransformHiraganaKatakana: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformmandarinlatin
declare const kCFStringTransformMandarinLatin: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformstripdiacritics
declare const kCFStringTransformStripDiacritics: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformstripcombiningmarks
declare const kCFStringTransformStripCombiningMarks: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformfullwidthhalfwidth
declare const kCFStringTransformFullwidthHalfwidth: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformtounicodename
declare const kCFStringTransformToUnicodeName: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformtoxmlhex
declare const kCFStringTransformToXMLHex: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcftypearraycallbacks
declare const kCFTypeArrayCallBacks: CFArrayCallBacks;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfcomparatorfunction
  type CFComparatorFunction = void;
}
// doc://com.apple.documentation/documentation/corefoundation/kcftypedictionarykeycallbacks
declare const kCFTypeDictionaryKeyCallBacks: CFDictionaryKeyCallBacks;
declare namespace cocoascript {
  interface CFGregorianDate {
  }
}
declare namespace cocoascript {
  interface CFGregorianUnits {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfgregorianunitflags
  type CFGregorianUnitFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfcomparisonresult
  type CFComparisonResult = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFSwappedFloat32 {
  }
}
declare namespace cocoascript {
  interface CFSwappedFloat64 {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbyteorder
  type CFByteOrder = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfurlerror
  type CFURLError = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFStreamError {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfstreamstatus
  type CFStreamStatus = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfstreamerrordomain
  type CFStreamErrorDomain = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfstreameventtype
  type CFStreamEventType = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  interface CFURLEnumeratorRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cffilesecurityclearoptions
  type CFFileSecurityClearOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfiso8601dateformatoptions
  type CFISO8601DateFormatOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfrunlooprunresult
  type CFRunLoopRunResult = cocoascript.SInt32;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfurlenumeratoroptions
  type CFURLEnumeratorOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfurlenumeratorresult
  type CFURLEnumeratorResult = cocoascript.CFIndex;
}
// doc://com.apple.documentation/documentation/corefoundation/kcfnotfound
declare const kCFNotFound: CFIndex;
// doc://com.apple.documentation/documentation/corefoundation/kcfurladdedtodirectorydatekey
declare const kCFURLAddedToDirectoryDateKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlapplicationisscriptablekey
declare const kCFURLApplicationIsScriptableKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlcanonicalpathkey
declare const kCFURLCanonicalPathKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurldocumentidentifierkey
declare const kCFURLDocumentIdentifierKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileprotectioncomplete
declare const kCFURLFileProtectionComplete: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileprotectioncompleteunlessopen
declare const kCFURLFileProtectionCompleteUnlessOpen: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileprotectioncompleteuntilfirstuserauthentication
declare const kCFURLFileProtectionCompleteUntilFirstUserAuthentication: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileprotectionkey
declare const kCFURLFileProtectionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileprotectionnone
declare const kCFURLFileProtectionNone: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlgenerationidentifierkey
declare const kCFURLGenerationIdentifierKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisapplicationkey
declare const kCFURLIsApplicationKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlquarantinepropertieskey
declare const kCFURLQuarantinePropertiesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurltagnameskey
declare const kCFURLTagNamesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemdownloadingerrorkey
declare const kCFURLUbiquitousItemDownloadingErrorKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemdownloadingstatuscurrent
declare const kCFURLUbiquitousItemDownloadingStatusCurrent: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemdownloadingstatusdownloaded
declare const kCFURLUbiquitousItemDownloadingStatusDownloaded: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemdownloadingstatuskey
declare const kCFURLUbiquitousItemDownloadingStatusKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemdownloadingstatusnotdownloaded
declare const kCFURLUbiquitousItemDownloadingStatusNotDownloaded: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemuploadingerrorkey
declare const kCFURLUbiquitousItemUploadingErrorKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisencryptedkey
declare const kCFURLVolumeIsEncryptedKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisrootfilesystemkey
declare const kCFURLVolumeIsRootFileSystemKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportscompressionkey
declare const kCFURLVolumeSupportsCompressionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsexclusiverenamingkey
declare const kCFURLVolumeSupportsExclusiveRenamingKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsfilecloningkey
declare const kCFURLVolumeSupportsFileCloningKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsswaprenamingkey
declare const kCFURLVolumeSupportsSwapRenamingKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorlocalizedfailurekey
declare const kCFErrorLocalizedFailureKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfilecontentidentifierkey
declare const kCFURLFileContentIdentifierKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlispurgeablekey
declare const kCFURLIsPurgeableKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlissparsekey
declare const kCFURLIsSparseKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlmayhaveextendedattributeskey
declare const kCFURLMayHaveExtendedAttributesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlmaysharefilecontentkey
declare const kCFURLMayShareFileContentKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeavailablecapacityforimportantusagekey
declare const kCFURLVolumeAvailableCapacityForImportantUsageKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeavailablecapacityforopportunisticusagekey
declare const kCFURLVolumeAvailableCapacityForOpportunisticUsageKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsaccesspermissionskey
declare const kCFURLVolumeSupportsAccessPermissionsKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsfileprotectionkey
declare const kCFURLVolumeSupportsFileProtectionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsimmutablefileskey
declare const kCFURLVolumeSupportsImmutableFilesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationalerttopmostkey
declare const kCFUserNotificationAlertTopMostKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationkeyboardtypeskey
declare const kCFUserNotificationKeyboardTypesKey: CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfcalendaridentifier
  type CFCalendarIdentifier = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfdateformatterkey
  type CFDateFormatterKey = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cferrordomain
  type CFErrorDomain = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cflocaleidentifier
  type CFLocaleIdentifier = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cflocalekey
  type CFLocaleKey = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfnotificationname
  type CFNotificationName = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfnumberformatterkey
  type CFNumberFormatterKey = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfstreampropertykey
  type CFStreamPropertyKey = cocoascript.CFStringRef;
}
// doc://com.apple.documentation/documentation/corefoundation/kcftypesetcallbacks
declare const kCFTypeSetCallBacks: CFSetCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/kcfcopystringsetcallbacks
declare const kCFCopyStringSetCallBacks: CFSetCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/kcfpreferencescurrentapplication
declare const kCFPreferencesCurrentApplication: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpreferencesanyapplication
declare const kCFPreferencesAnyApplication: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpreferencescurrentuser
declare const kCFPreferencesCurrentUser: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpreferencesanyuser
declare const kCFPreferencesAnyUser: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpreferencescurrenthost
declare const kCFPreferencesCurrentHost: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpreferencesanyhost
declare const kCFPreferencesAnyHost: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlnamekey
declare const kCFURLNameKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurllocalizednamekey
declare const kCFURLLocalizedNameKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlpathkey
declare const kCFURLPathKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisregularfilekey
declare const kCFURLIsRegularFileKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisdirectorykey
declare const kCFURLIsDirectoryKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlissymboliclinkkey
declare const kCFURLIsSymbolicLinkKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisvolumekey
declare const kCFURLIsVolumeKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlispackagekey
declare const kCFURLIsPackageKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlissystemimmutablekey
declare const kCFURLIsSystemImmutableKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisuserimmutablekey
declare const kCFURLIsUserImmutableKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlishiddenkey
declare const kCFURLIsHiddenKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlhashiddenextensionkey
declare const kCFURLHasHiddenExtensionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlcreationdatekey
declare const kCFURLCreationDateKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlcontentaccessdatekey
declare const kCFURLContentAccessDateKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlcontentmodificationdatekey
declare const kCFURLContentModificationDateKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlattributemodificationdatekey
declare const kCFURLAttributeModificationDateKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurllinkcountkey
declare const kCFURLLinkCountKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlparentdirectoryurlkey
declare const kCFURLParentDirectoryURLKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeurlkey
declare const kCFURLVolumeURLKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurltypeidentifierkey
declare const kCFURLTypeIdentifierKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurllocalizedtypedescriptionkey
declare const kCFURLLocalizedTypeDescriptionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurllabelnumberkey
declare const kCFURLLabelNumberKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurllabelcolorkey
declare const kCFURLLabelColorKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurllocalizedlabelkey
declare const kCFURLLocalizedLabelKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurleffectiveiconkey
declare const kCFURLEffectiveIconKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlcustomiconkey
declare const kCFURLCustomIconKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourceidentifierkey
declare const kCFURLFileResourceIdentifierKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeidentifierkey
declare const kCFURLVolumeIdentifierKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlpreferredioblocksizekey
declare const kCFURLPreferredIOBlockSizeKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisreadablekey
declare const kCFURLIsReadableKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurliswritablekey
declare const kCFURLIsWritableKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisexecutablekey
declare const kCFURLIsExecutableKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfilesecuritykey
declare const kCFURLFileSecurityKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisexcludedfrombackupkey
declare const kCFURLIsExcludedFromBackupKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypeblockspecial
declare const kCFURLFileResourceTypeBlockSpecial: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypecharacterspecial
declare const kCFURLFileResourceTypeCharacterSpecial: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypedirectory
declare const kCFURLFileResourceTypeDirectory: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypenamedpipe
declare const kCFURLFileResourceTypeNamedPipe: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetyperegular
declare const kCFURLFileResourceTypeRegular: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypesocket
declare const kCFURLFileResourceTypeSocket: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypesymboliclink
declare const kCFURLFileResourceTypeSymbolicLink: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypeunknown
declare const kCFURLFileResourceTypeUnknown: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileallocatedsizekey
declare const kCFURLFileAllocatedSizeKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfilesizekey
declare const kCFURLFileSizeKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisaliasfilekey
declare const kCFURLIsAliasFileKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlismounttriggerkey
declare const kCFURLIsMountTriggerKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurltotalfileallocatedsizekey
declare const kCFURLTotalFileAllocatedSizeKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurltotalfilesizekey
declare const kCFURLTotalFileSizeKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisubiquitousitemkey
declare const kCFURLIsUbiquitousItemKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemhasunresolvedconflictskey
declare const kCFURLUbiquitousItemHasUnresolvedConflictsKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemisdownloadedkey
declare const kCFURLUbiquitousItemIsDownloadedKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemisdownloadingkey
declare const kCFURLUbiquitousItemIsDownloadingKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemisuploadedkey
declare const kCFURLUbiquitousItemIsUploadedKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemisuploadingkey
declare const kCFURLUbiquitousItemIsUploadingKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitempercentdownloadedkey
declare const kCFURLUbiquitousItemPercentDownloadedKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitempercentuploadedkey
declare const kCFURLUbiquitousItemPercentUploadedKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumetotalcapacitykey
declare const kCFURLVolumeTotalCapacityKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeavailablecapacitykey
declare const kCFURLVolumeAvailableCapacityKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumenamekey
declare const kCFURLVolumeNameKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumelocalizednamekey
declare const kCFURLVolumeLocalizedNameKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumelocalizedformatdescriptionkey
declare const kCFURLVolumeLocalizedFormatDescriptionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeresourcecountkey
declare const kCFURLVolumeResourceCountKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportspersistentidskey
declare const kCFURLVolumeSupportsPersistentIDsKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportssymboliclinkskey
declare const kCFURLVolumeSupportsSymbolicLinksKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportshardlinkskey
declare const kCFURLVolumeSupportsHardLinksKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsjournalingkey
declare const kCFURLVolumeSupportsJournalingKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisjournalingkey
declare const kCFURLVolumeIsJournalingKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportssparsefileskey
declare const kCFURLVolumeSupportsSparseFilesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportszerorunskey
declare const kCFURLVolumeSupportsZeroRunsKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportscasesensitivenameskey
declare const kCFURLVolumeSupportsCaseSensitiveNamesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportscasepreservednameskey
declare const kCFURLVolumeSupportsCasePreservedNamesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsrootdirectorydateskey
declare const kCFURLVolumeSupportsRootDirectoryDatesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsvolumesizeskey
declare const kCFURLVolumeSupportsVolumeSizesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsrenamingkey
declare const kCFURLVolumeSupportsRenamingKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsadvisoryfilelockingkey
declare const kCFURLVolumeSupportsAdvisoryFileLockingKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsextendedsecuritykey
declare const kCFURLVolumeSupportsExtendedSecurityKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisbrowsablekey
declare const kCFURLVolumeIsBrowsableKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumemaximumfilesizekey
declare const kCFURLVolumeMaximumFileSizeKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisejectablekey
declare const kCFURLVolumeIsEjectableKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisremovablekey
declare const kCFURLVolumeIsRemovableKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisinternalkey
declare const kCFURLVolumeIsInternalKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisautomountedkey
declare const kCFURLVolumeIsAutomountedKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeislocalkey
declare const kCFURLVolumeIsLocalKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisreadonlykey
declare const kCFURLVolumeIsReadOnlyKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumecreationdatekey
declare const kCFURLVolumeCreationDateKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeurlforremountingkey
declare const kCFURLVolumeURLForRemountingKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeuuidstringkey
declare const kCFURLVolumeUUIDStringKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlkeysofunsetvalueskey
declare const kCFURLKeysOfUnsetValuesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfallocatornull
declare const kCFAllocatorNull: CFAllocatorRef;
// doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1541983-directcstringbuffer
declare const directCStringBuffer: string;
// doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1542027-directunicharbuffer
declare const directUniCharBuffer: UniChar;
// doc://com.apple.documentation/documentation/corefoundation/kcfallocatorusecontext
declare const kCFAllocatorUseContext: CFAllocatorRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfallocatorsystemdefault
declare const kCFAllocatorSystemDefault: CFAllocatorRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfallocatormalloc
declare const kCFAllocatorMalloc: CFAllocatorRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfallocatormalloczone
declare const kCFAllocatorMallocZone: CFAllocatorRef;
// doc://com.apple.documentation/documentation/corefoundation/kcftypebagcallbacks
declare const kCFTypeBagCallBacks: CFBagCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/kcfcopystringbagcallbacks
declare const kCFCopyStringBagCallBacks: CFBagCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringbinaryheapcallbacks
declare const kCFStringBinaryHeapCallBacks: CFBinaryHeapCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcallbacks/1509294-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcomparecontext/1509313-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/kcfbooleanfalse
declare const kCFBooleanFalse: CFBooleanRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterislenient
declare const kCFDateFormatterIsLenient: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattertimezone
declare const kCFDateFormatterTimeZone: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattercalendarname
declare const kCFDateFormatterCalendarName: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterdefaultformat
declare const kCFDateFormatterDefaultFormat: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattertwodigitstartdate
declare const kCFDateFormatterTwoDigitStartDate: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterdefaultdate
declare const kCFDateFormatterDefaultDate: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattercalendar
declare const kCFDateFormatterCalendar: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattererasymbols
declare const kCFDateFormatterEraSymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattermonthsymbols
declare const kCFDateFormatterMonthSymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattershortmonthsymbols
declare const kCFDateFormatterShortMonthSymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterweekdaysymbols
declare const kCFDateFormatterWeekdaySymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattershortweekdaysymbols
declare const kCFDateFormatterShortWeekdaySymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatteramsymbol
declare const kCFDateFormatterAMSymbol: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterpmsymbol
declare const kCFDateFormatterPMSymbol: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterlongerasymbols
declare const kCFDateFormatterLongEraSymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterveryshortmonthsymbols
declare const kCFDateFormatterVeryShortMonthSymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterstandalonemonthsymbols
declare const kCFDateFormatterStandaloneMonthSymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattershortstandalonemonthsymbols
declare const kCFDateFormatterShortStandaloneMonthSymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterveryshortstandalonemonthsymbols
declare const kCFDateFormatterVeryShortStandaloneMonthSymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterveryshortweekdaysymbols
declare const kCFDateFormatterVeryShortWeekdaySymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterstandaloneweekdaysymbols
declare const kCFDateFormatterStandaloneWeekdaySymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattershortstandaloneweekdaysymbols
declare const kCFDateFormatterShortStandaloneWeekdaySymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterveryshortstandaloneweekdaysymbols
declare const kCFDateFormatterVeryShortStandaloneWeekdaySymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterquartersymbols
declare const kCFDateFormatterQuarterSymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattershortquartersymbols
declare const kCFDateFormatterShortQuarterSymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterstandalonequartersymbols
declare const kCFDateFormatterStandaloneQuarterSymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattershortstandalonequartersymbols
declare const kCFDateFormatterShortStandaloneQuarterSymbols: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattergregorianstartdate
declare const kCFDateFormatterGregorianStartDate: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterdoesrelativedateformattingkey
declare const kCFDateFormatterDoesRelativeDateFormattingKey: CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfgregoriancalendar
declare const kCFGregorianCalendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorlocalizeddescriptionkey
declare const kCFErrorLocalizedDescriptionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorlocalizedfailurereasonkey
declare const kCFErrorLocalizedFailureReasonKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrordescriptionkey
declare const kCFErrorDescriptionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorlocalizedrecoverysuggestionkey
declare const kCFErrorLocalizedRecoverySuggestionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrordomainposix
declare const kCFErrorDomainPOSIX: CFErrorDomain;
// doc://com.apple.documentation/documentation/corefoundation/kcferrordomainosstatus
declare const kCFErrorDomainOSStatus: CFErrorDomain;
// doc://com.apple.documentation/documentation/corefoundation/kcferrordomainmach
declare const kCFErrorDomainMach: CFErrorDomain;
// doc://com.apple.documentation/documentation/corefoundation/kcferrordomaincocoa
declare const kCFErrorDomainCocoa: CFErrorDomain;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorunderlyingerrorkey
declare const kCFErrorUnderlyingErrorKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorurlkey
declare const kCFErrorURLKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorfilepathkey
declare const kCFErrorFilePathKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcflocaleidentifier
declare const kCFLocaleIdentifier: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalelanguagecode
declare const kCFLocaleLanguageCode: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecountrycode
declare const kCFLocaleCountryCode: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalescriptcode
declare const kCFLocaleScriptCode: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalevariantcode
declare const kCFLocaleVariantCode: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocaleexemplarcharacterset
declare const kCFLocaleExemplarCharacterSet: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecalendaridentifier
declare const kCFLocaleCalendarIdentifier: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecalendar
declare const kCFLocaleCalendar: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecollationidentifier
declare const kCFLocaleCollationIdentifier: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocaleusesmetricsystem
declare const kCFLocaleUsesMetricSystem: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalemeasurementsystem
declare const kCFLocaleMeasurementSystem: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocaledecimalseparator
declare const kCFLocaleDecimalSeparator: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalegroupingseparator
declare const kCFLocaleGroupingSeparator: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecurrencysymbol
declare const kCFLocaleCurrencySymbol: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecurrencycode
declare const kCFLocaleCurrencyCode: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecollatoridentifier
declare const kCFLocaleCollatorIdentifier: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalequotationbegindelimiterkey
declare const kCFLocaleQuotationBeginDelimiterKey: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalequotationenddelimiterkey
declare const kCFLocaleQuotationEndDelimiterKey: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalealternatequotationbegindelimiterkey
declare const kCFLocaleAlternateQuotationBeginDelimiterKey: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalealternatequotationenddelimiterkey
declare const kCFLocaleAlternateQuotationEndDelimiterKey: CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfbuddhistcalendar
declare const kCFBuddhistCalendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfchinesecalendar
declare const kCFChineseCalendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfhebrewcalendar
declare const kCFHebrewCalendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfislamiccalendar
declare const kCFIslamicCalendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfislamiccivilcalendar
declare const kCFIslamicCivilCalendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfislamictabularcalendar
declare const kCFIslamicTabularCalendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfislamicummalquracalendar
declare const kCFIslamicUmmAlQuraCalendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfjapanesecalendar
declare const kCFJapaneseCalendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfrepublicofchinacalendar
declare const kCFRepublicOfChinaCalendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfpersiancalendar
declare const kCFPersianCalendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfindiancalendar
declare const kCFIndianCalendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfiso8601calendar
declare const kCFISO8601Calendar: CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecurrentlocaledidchangenotification
declare const kCFLocaleCurrentLocaleDidChangeNotification: CFNotificationName;
// doc://com.apple.documentation/documentation/corefoundation/cfmachportcontext/1400912-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/cfmessageportcontext/1542526-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumbernan
declare const kCFNumberNaN: CFNumberRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumbernegativeinfinity
declare const kCFNumberNegativeInfinity: CFNumberRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberpositiveinfinity
declare const kCFNumberPositiveInfinity: CFNumberRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterpaddingposition
declare const kCFNumberFormatterPaddingPosition: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattercurrencycode
declare const kCFNumberFormatterCurrencyCode: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterdecimalseparator
declare const kCFNumberFormatterDecimalSeparator: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattercurrencydecimalseparator
declare const kCFNumberFormatterCurrencyDecimalSeparator: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatteralwaysshowdecimalseparator
declare const kCFNumberFormatterAlwaysShowDecimalSeparator: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattergroupingseparator
declare const kCFNumberFormatterGroupingSeparator: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterusegroupingseparator
declare const kCFNumberFormatterUseGroupingSeparator: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterpercentsymbol
declare const kCFNumberFormatterPercentSymbol: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterzerosymbol
declare const kCFNumberFormatterZeroSymbol: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatternansymbol
declare const kCFNumberFormatterNaNSymbol: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterinfinitysymbol
declare const kCFNumberFormatterInfinitySymbol: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterminussign
declare const kCFNumberFormatterMinusSign: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterplussign
declare const kCFNumberFormatterPlusSign: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattercurrencysymbol
declare const kCFNumberFormatterCurrencySymbol: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterexponentsymbol
declare const kCFNumberFormatterExponentSymbol: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterminintegerdigits
declare const kCFNumberFormatterMinIntegerDigits: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattermaxintegerdigits
declare const kCFNumberFormatterMaxIntegerDigits: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterminfractiondigits
declare const kCFNumberFormatterMinFractionDigits: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattermaxfractiondigits
declare const kCFNumberFormatterMaxFractionDigits: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattergroupingsize
declare const kCFNumberFormatterGroupingSize: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattersecondarygroupingsize
declare const kCFNumberFormatterSecondaryGroupingSize: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterroundingmode
declare const kCFNumberFormatterRoundingMode: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterroundingincrement
declare const kCFNumberFormatterRoundingIncrement: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterformatwidth
declare const kCFNumberFormatterFormatWidth: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterpaddingcharacter
declare const kCFNumberFormatterPaddingCharacter: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterdefaultformat
declare const kCFNumberFormatterDefaultFormat: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattermultiplier
declare const kCFNumberFormatterMultiplier: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterpositiveprefix
declare const kCFNumberFormatterPositivePrefix: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterpositivesuffix
declare const kCFNumberFormatterPositiveSuffix: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatternegativeprefix
declare const kCFNumberFormatterNegativePrefix: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatternegativesuffix
declare const kCFNumberFormatterNegativeSuffix: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterpermillsymbol
declare const kCFNumberFormatterPerMillSymbol: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterinternationalcurrencysymbol
declare const kCFNumberFormatterInternationalCurrencySymbol: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattercurrencygroupingseparator
declare const kCFNumberFormatterCurrencyGroupingSeparator: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterislenient
declare const kCFNumberFormatterIsLenient: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterusesignificantdigits
declare const kCFNumberFormatterUseSignificantDigits: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterminsignificantdigits
declare const kCFNumberFormatterMinSignificantDigits: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattermaxsignificantdigits
declare const kCFNumberFormatterMaxSignificantDigits: CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfplugindynamicregistrationkey
declare const kCFPlugInDynamicRegistrationKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfplugindynamicregisterfunctionkey
declare const kCFPlugInDynamicRegisterFunctionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpluginunloadfunctionkey
declare const kCFPlugInUnloadFunctionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpluginfactorieskey
declare const kCFPlugInFactoriesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfplugintypeskey
declare const kCFPlugInTypesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/cfrunloopobservercontext/1541985-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext/1543359-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1/1542518-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/cfrunlooptimercontext/1543444-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/cfsocketcontext/1543095-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/kcftimezonesystemtimezonedidchangenotification
declare const kCFTimeZoneSystemTimeZoneDidChangeNotification: CFNotificationName;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationalertheaderkey
declare const kCFUserNotificationAlertHeaderKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationiconurlkey
declare const kCFUserNotificationIconURLKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationsoundurlkey
declare const kCFUserNotificationSoundURLKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationlocalizationurlkey
declare const kCFUserNotificationLocalizationURLKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationalertmessagekey
declare const kCFUserNotificationAlertMessageKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationdefaultbuttontitlekey
declare const kCFUserNotificationDefaultButtonTitleKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationalternatebuttontitlekey
declare const kCFUserNotificationAlternateButtonTitleKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationotherbuttontitlekey
declare const kCFUserNotificationOtherButtonTitleKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationprogressindicatorvaluekey
declare const kCFUserNotificationProgressIndicatorValueKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationpopuptitleskey
declare const kCFUserNotificationPopUpTitlesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationtextfieldtitleskey
declare const kCFUserNotificationTextFieldTitlesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationcheckboxtitleskey
declare const kCFUserNotificationCheckBoxTitlesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationtextfieldvalueskey
declare const kCFUserNotificationTextFieldValuesKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationpopupselectionkey
declare const kCFUserNotificationPopUpSelectionKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfxmltreeerrordescription
declare const kCFXMLTreeErrorDescription: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfxmltreeerrorlinenumber
declare const kCFXMLTreeErrorLineNumber: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfxmltreeerrorlocation
declare const kCFXMLTreeErrorLocation: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfxmltreeerrorstatuscode
declare const kCFXMLTreeErrorStatusCode: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfabsolutetimeintervalsince1970
declare const kCFAbsoluteTimeIntervalSince1970: CFTimeInterval;
// doc://com.apple.documentation/documentation/corefoundation/kcfabsolutetimeintervalsince1904
declare const kCFAbsoluteTimeIntervalSince1904: CFTimeInterval;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileexists
declare const kCFURLFileExists: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfiledirectorycontents
declare const kCFURLFileDirectoryContents: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfilelength
declare const kCFURLFileLength: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfilelastmodificationtime
declare const kCFURLFileLastModificationTime: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileposixmode
declare const kCFURLFilePOSIXMode: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileownerid
declare const kCFURLFileOwnerID: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlhttpstatuscode
declare const kCFURLHTTPStatusCode: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlhttpstatusline
declare const kCFURLHTTPStatusLine: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketcommandkey
declare const kCFSocketCommandKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketnamekey
declare const kCFSocketNameKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketvaluekey
declare const kCFSocketValueKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketresultkey
declare const kCFSocketResultKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketerrorkey
declare const kCFSocketErrorKey: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketregistercommand
declare const kCFSocketRegisterCommand: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketretrievecommand
declare const kCFSocketRetrieveCommand: CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstreamerrordomainsocks
declare const kCFStreamErrorDomainSOCKS: number;
// doc://com.apple.documentation/documentation/corefoundation/kcfstreamerrordomainssl
declare const kCFStreamErrorDomainSSL: number;
