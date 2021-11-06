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
  // https://developer.apple.com/documentation/corefoundation/cftyperef
  type CFTypeRef = void;
}
declare namespace cocoascript {
  interface CFRunLoopTimerRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cftimeinterval
  type CFTimeInterval = number;
}
declare namespace cocoascript {
  interface CFMutableStringRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfindex
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
  // https://developer.apple.com/documentation/corefoundation/cfbundlerefnum
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
  // https://developer.apple.com/documentation/corefoundation/cfstringencoding
  type CFStringEncoding = number;
}
// https://developer.apple.com/documentation/corefoundation/kcfnull
declare const kCFNull: cocoascript.CFNullRef;
// https://developer.apple.com/documentation/corefoundation/1388767-cfarraygetvalueatindex
declare const CFArrayGetValueAtIndex: cocoascript.CFIndex;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfarrayapplierfunction
  type CFArrayApplierFunction = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfarraycopydescriptioncallback
  type CFArrayCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfarrayequalcallback
  type CFArrayEqualCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfarrayreleasecallback
  type CFArrayReleaseCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfarrayretaincallback
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
// https://developer.apple.com/documentation/corefoundation/1516757-cfdictionarygetvalue
declare const CFDictionaryGetValue: void;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfdictionaryapplierfunction
  type CFDictionaryApplierFunction = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfdictionarycopydescriptioncallback
  type CFDictionaryCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfdictionaryequalcallback
  type CFDictionaryEqualCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfdictionaryhashcallback
  type CFDictionaryHashCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfdictionaryreleasecallback
  type CFDictionaryReleaseCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfdictionaryretaincallback
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
  // https://developer.apple.com/documentation/corefoundation/cftypeid
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
// https://developer.apple.com/documentation/corefoundation/kcfcopystringdictionarykeycallbacks
declare const kCFCopyStringDictionaryKeyCallBacks: cocoascript.CFDictionaryKeyCallBacks;
// https://developer.apple.com/documentation/corefoundation/kcftypedictionaryvaluecallbacks
declare const kCFTypeDictionaryValueCallBacks: cocoascript.CFDictionaryValueCallBacks;
// https://developer.apple.com/documentation/corefoundation/kcfallocatordefault
declare const kCFAllocatorDefault: cocoascript.CFAllocatorRef;
declare namespace cocoascript {
  interface CFAllocatorRef {
  }
}
declare namespace cocoascript {
  interface CFRange {
  }
}
// https://developer.apple.com/documentation/corefoundation/1520426-cfsetgetvalue
declare const CFSetGetValue: void;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfsetapplierfunction
  type CFSetApplierFunction = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfsetcopydescriptioncallback
  type CFSetCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfsetequalcallback
  type CFSetEqualCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfsethashcallback
  type CFSetHashCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfsetreleasecallback
  type CFSetReleaseCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfsetretaincallback
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
  // https://developer.apple.com/documentation/corefoundation/cfabsolutetime
  type CFAbsoluteTime = cocoascript.CFTimeInterval;
}
// https://developer.apple.com/documentation/corefoundation/kcfbooleantrue
declare const kCFBooleanTrue: cocoascript.CFBooleanRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileresourcetypekey
declare const kCFURLFileResourceTypeKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfurlbookmarkcreationoptions
  type CFURLBookmarkCreationOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfurlbookmarkfilecreationoptions
  type CFURLBookmarkFileCreationOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfurlbookmarkresolutionoptions
  type CFURLBookmarkResolutionOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfurlcomponenttype
  type CFURLComponentType = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfurlpathstyle
  type CFURLPathStyle = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFUUIDBytes {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfoptionflags
  type CFOptionFlags = number;
}
// https://developer.apple.com/documentation/corefoundation/1542939-cfstringgetcharactersptr
declare const CFStringGetCharactersPtr: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/1542133-cfstringgetcstringptr
declare const CFStringGetCStringPtr: cocoascript.CFStringEncoding;
// https://developer.apple.com/documentation/corefoundation/1542932-cfstringgetlistofavailableencodi
declare const CFStringGetListOfAvailableEncodings: void;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfstringencodings
  type CFStringEncodings = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfstringcompareflags
  type CFStringCompareFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  interface CFStringInlineBuffer {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfstringbuiltinencodings
  type CFStringBuiltInEncodings = cocoascript.CFStringEncoding;
}
// https://developer.apple.com/documentation/corefoundation/kcfbundlelocalizationskey
declare const kCFBundleLocalizationsKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfbundledevelopmentregionkey
declare const kCFBundleDevelopmentRegionKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface CFPlugInRef {
  }
}
// https://developer.apple.com/documentation/corefoundation/kcfbundleinfodictionaryversionkey
declare const kCFBundleInfoDictionaryVersionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfbundleexecutablekey
declare const kCFBundleExecutableKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfbundleidentifierkey
declare const kCFBundleIdentifierKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfbundleversionkey
declare const kCFBundleVersionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfbundlenamekey
declare const kCFBundleNameKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfallocatorallocatecallback
  type CFAllocatorAllocateCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfallocatorcopydescriptioncallback
  type CFAllocatorCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfallocatordeallocatecallback
  type CFAllocatorDeallocateCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfallocatorpreferredsizecallback
  type CFAllocatorPreferredSizeCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfallocatorreallocatecallback
  type CFAllocatorReallocateCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfallocatorreleasecallback
  type CFAllocatorReleaseCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfallocatorretaincallback
  type CFAllocatorRetainCallBack = void;
}
declare namespace cocoascript {
  interface CFAllocatorContext {
  }
}
// https://developer.apple.com/documentation/corefoundation/1469280-cfbaggetvalue
declare const CFBagGetValue: void;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfbagapplierfunction
  type CFBagApplierFunction = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfbagcopydescriptioncallback
  type CFBagCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfbagequalcallback
  type CFBagEqualCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfbaghashcallback
  type CFBagHashCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfbagreleasecallback
  type CFBagReleaseCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfbagretaincallback
  type CFBagRetainCallBack = void;
}
declare namespace cocoascript {
  interface CFBagCallBacks {
  }
}
// https://developer.apple.com/documentation/corefoundation/1509325-cfbinaryheapgetminimum
declare const CFBinaryHeapGetMinimum: cocoascript.CFBinaryHeapRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfbinaryheapapplierfunction
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
  // https://developer.apple.com/documentation/corefoundation/cfbit
  type CFBit = number;
}
declare namespace cocoascript {
  interface CFBitVectorRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfcalendarunit
  type CFCalendarUnit = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfcharactersetpredefinedset
  type CFCharacterSetPredefinedSet = cocoascript.CFIndex;
}
// https://developer.apple.com/documentation/corefoundation/1543330-cfdatagetbyteptr
declare const CFDataGetBytePtr: cocoascript.CFDataRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfdatasearchflags
  type CFDataSearchFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfdateformatterstyle
  type CFDateFormatterStyle = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFDateFormatterRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cffiledescriptornativedescriptor
  type CFFileDescriptorNativeDescriptor = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cffiledescriptorcallback
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
  // https://developer.apple.com/documentation/corefoundation/cflocalelanguagedirection
  type CFLocaleLanguageDirection = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfmachportcallback
  type CFMachPortCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfmachportinvalidationcallback
  type CFMachPortInvalidationCallBack = void;
}
declare namespace cocoascript {
  interface CFMachPortContext {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfmessageportcallback
  type CFMessagePortCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfmessageportinvalidationcallback
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
  // https://developer.apple.com/documentation/corefoundation/cfstringnormalizationform
  type CFStringNormalizationForm = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfnotificationcallback
  type CFNotificationCallback = cocoascript.CFDictionaryRef;
}
declare namespace cocoascript {
  interface CFNotificationCenterRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfnotificationsuspensionbehavior
  type CFNotificationSuspensionBehavior = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfnumbertype
  type CFNumberType = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfnumberformatterstyle
  type CFNumberFormatterStyle = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfnumberformatteroptionflags
  type CFNumberFormatterOptionFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfnumberformatterpadposition
  type CFNumberFormatterPadPosition = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFNumberFormatterRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfnumberformatterroundingmode
  type CFNumberFormatterRoundingMode = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfplugindynamicregisterfunction
  type CFPlugInDynamicRegisterFunction = cocoascript.CFPlugInRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfpluginfactoryfunction
  type CFPlugInFactoryFunction = cocoascript.CFUUIDRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfpluginunloadfunction
  type CFPlugInUnloadFunction = cocoascript.CFPlugInRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfplugininstancedeallocateinstancedatafunction
  type CFPlugInInstanceDeallocateInstanceDataFunction = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfplugininstancegetinterfacefunction
  type CFPlugInInstanceGetInterfaceFunction = void;
}
declare namespace cocoascript {
  interface CFPlugInInstanceRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfpropertylistref
  type CFPropertyListRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfpropertylistmutabilityoptions
  type CFPropertyListMutabilityOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfpropertylistformat
  type CFPropertyListFormat = cocoascript.CFIndex;
}
// https://developer.apple.com/documentation/corefoundation/1539692-cfreadstreamgetbuffer
declare const CFReadStreamGetBuffer: cocoascript.CFIndex;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfreadstreamclientcallback
  type CFReadStreamClientCallBack = void;
}
declare namespace cocoascript {
  interface CFStreamClientContext {
  }
}
// https://developer.apple.com/documentation/corefoundation/kcfrunloopdefaultmode
declare const kCFRunLoopDefaultMode: cocoascript.CFRunLoopMode;
// https://developer.apple.com/documentation/corefoundation/kcfrunloopcommonmodes
declare const kCFRunLoopCommonModes: cocoascript.CFRunLoopMode;
declare namespace cocoascript {
  interface CFRunLoopRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfrunloopobservercallback
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
  // https://developer.apple.com/documentation/corefoundation/cfrunloopactivity
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
  // https://developer.apple.com/documentation/corefoundation/cfrunlooptimercallback
  type CFRunLoopTimerCallBack = void;
}
declare namespace cocoascript {
  interface CFRunLoopTimerContext {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfsocketcallback
  type CFSocketCallBack = void;
}
declare namespace cocoascript {
  interface CFSocketContext {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfsocketnativehandle
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
  // https://developer.apple.com/documentation/corefoundation/cfsocketcallbacktype
  type CFSocketCallBackType = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfsocketerror
  type CFSocketError = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFStringTokenizerRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfstringtokenizertokentype
  type CFStringTokenizerTokenType = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cftimezonenamestyle
  type CFTimeZoneNameStyle = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFTreeContext {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cftreeapplierfunction
  type CFTreeApplierFunction = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cftreecopydescriptioncallback
  type CFTreeCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cftreereleasecallback
  type CFTreeReleaseCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cftreeretaincallback
  type CFTreeRetainCallBack = void;
}
declare namespace cocoascript {
  interface CFTreeRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfhashcode
  type CFHashCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfusernotificationcallback
  type CFUserNotificationCallBack = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  interface CFUserNotificationRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfwritestreamclientcallback
  type CFWriteStreamClientCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfxmlnodetypecode
  type CFXMLNodeTypeCode = cocoascript.CFIndex;
}
// https://developer.apple.com/documentation/corefoundation/1443276-cfxmlnodegetinfoptr
declare const CFXMLNodeGetInfoPtr: cocoascript.CFXMLNodeRef;
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
  // https://developer.apple.com/documentation/corefoundation/cfxmlnoderef
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
  // https://developer.apple.com/documentation/corefoundation/cfxmlentitytypecode
  type CFXMLEntityTypeCode = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfxmlparseraddchildcallback
  type CFXMLParserAddChildCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfxmlparsercopydescriptioncallback
  type CFXMLParserCopyDescriptionCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfxmlparsercreatexmlstructurecallback
  type CFXMLParserCreateXMLStructureCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfxmlparserendxmlstructurecallback
  type CFXMLParserEndXMLStructureCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfxmlparserhandleerrorcallback
  type CFXMLParserHandleErrorCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfxmlparserreleasecallback
  type CFXMLParserReleaseCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfxmlparserresolveexternalentitycallback
  type CFXMLParserResolveExternalEntityCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfxmlparserretaincallback
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
  // https://developer.apple.com/documentation/corefoundation/cfxmlparserstatuscode
  type CFXMLParserStatusCode = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfxmlparseroptions
  type CFXMLParserOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfxmltreeref
  type CFXMLTreeRef = cocoascript.CFTreeRef;
}
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformtolatin
declare const kCFStringTransformToLatin: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformlatinarabic
declare const kCFStringTransformLatinArabic: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformlatincyrillic
declare const kCFStringTransformLatinCyrillic: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformlatingreek
declare const kCFStringTransformLatinGreek: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformlatinhangul
declare const kCFStringTransformLatinHangul: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformlatinhebrew
declare const kCFStringTransformLatinHebrew: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformlatinhiragana
declare const kCFStringTransformLatinHiragana: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformlatinkatakana
declare const kCFStringTransformLatinKatakana: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformlatinthai
declare const kCFStringTransformLatinThai: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformhiraganakatakana
declare const kCFStringTransformHiraganaKatakana: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformmandarinlatin
declare const kCFStringTransformMandarinLatin: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformstripdiacritics
declare const kCFStringTransformStripDiacritics: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformstripcombiningmarks
declare const kCFStringTransformStripCombiningMarks: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformfullwidthhalfwidth
declare const kCFStringTransformFullwidthHalfwidth: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformtounicodename
declare const kCFStringTransformToUnicodeName: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstringtransformtoxmlhex
declare const kCFStringTransformToXMLHex: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcftypearraycallbacks
declare const kCFTypeArrayCallBacks: cocoascript.CFArrayCallBacks;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfcomparatorfunction
  type CFComparatorFunction = void;
}
// https://developer.apple.com/documentation/corefoundation/kcftypedictionarykeycallbacks
declare const kCFTypeDictionaryKeyCallBacks: cocoascript.CFDictionaryKeyCallBacks;
declare namespace cocoascript {
  interface CFGregorianDate {
  }
}
declare namespace cocoascript {
  interface CFGregorianUnits {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfgregorianunitflags
  type CFGregorianUnitFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfcomparisonresult
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
  // https://developer.apple.com/documentation/corefoundation/cfbyteorder
  type CFByteOrder = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfurlerror
  type CFURLError = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface CFStreamError {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfstreamstatus
  type CFStreamStatus = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfstreamerrordomain
  type CFStreamErrorDomain = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfstreameventtype
  type CFStreamEventType = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  interface CFURLEnumeratorRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cffilesecurityclearoptions
  type CFFileSecurityClearOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfiso8601dateformatoptions
  type CFISO8601DateFormatOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfrunlooprunresult
  type CFRunLoopRunResult = cocoascript.SInt32;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfurlenumeratoroptions
  type CFURLEnumeratorOptions = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfurlenumeratorresult
  type CFURLEnumeratorResult = cocoascript.CFIndex;
}
// https://developer.apple.com/documentation/corefoundation/kcfnotfound
declare const kCFNotFound: cocoascript.CFIndex;
// https://developer.apple.com/documentation/corefoundation/kcfurladdedtodirectorydatekey
declare const kCFURLAddedToDirectoryDateKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlapplicationisscriptablekey
declare const kCFURLApplicationIsScriptableKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlcanonicalpathkey
declare const kCFURLCanonicalPathKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurldocumentidentifierkey
declare const kCFURLDocumentIdentifierKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileprotectioncomplete
declare const kCFURLFileProtectionComplete: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileprotectioncompleteunlessopen
declare const kCFURLFileProtectionCompleteUnlessOpen: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileprotectioncompleteuntilfirstuserauthentication
declare const kCFURLFileProtectionCompleteUntilFirstUserAuthentication: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileprotectionkey
declare const kCFURLFileProtectionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileprotectionnone
declare const kCFURLFileProtectionNone: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlgenerationidentifierkey
declare const kCFURLGenerationIdentifierKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlisapplicationkey
declare const kCFURLIsApplicationKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlquarantinepropertieskey
declare const kCFURLQuarantinePropertiesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurltagnameskey
declare const kCFURLTagNamesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitemdownloadingerrorkey
declare const kCFURLUbiquitousItemDownloadingErrorKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitemdownloadingstatuscurrent
declare const kCFURLUbiquitousItemDownloadingStatusCurrent: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitemdownloadingstatusdownloaded
declare const kCFURLUbiquitousItemDownloadingStatusDownloaded: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitemdownloadingstatuskey
declare const kCFURLUbiquitousItemDownloadingStatusKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitemdownloadingstatusnotdownloaded
declare const kCFURLUbiquitousItemDownloadingStatusNotDownloaded: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitemuploadingerrorkey
declare const kCFURLUbiquitousItemUploadingErrorKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeisencryptedkey
declare const kCFURLVolumeIsEncryptedKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeisrootfilesystemkey
declare const kCFURLVolumeIsRootFileSystemKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportscompressionkey
declare const kCFURLVolumeSupportsCompressionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportsexclusiverenamingkey
declare const kCFURLVolumeSupportsExclusiveRenamingKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportsfilecloningkey
declare const kCFURLVolumeSupportsFileCloningKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportsswaprenamingkey
declare const kCFURLVolumeSupportsSwapRenamingKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcferrorlocalizedfailurekey
declare const kCFErrorLocalizedFailureKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfilecontentidentifierkey
declare const kCFURLFileContentIdentifierKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlispurgeablekey
declare const kCFURLIsPurgeableKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlissparsekey
declare const kCFURLIsSparseKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlmayhaveextendedattributeskey
declare const kCFURLMayHaveExtendedAttributesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlmaysharefilecontentkey
declare const kCFURLMayShareFileContentKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitemisexcludedfromsynckey
declare const kCFURLUbiquitousItemIsExcludedFromSyncKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeavailablecapacityforimportantusagekey
declare const kCFURLVolumeAvailableCapacityForImportantUsageKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeavailablecapacityforopportunisticusagekey
declare const kCFURLVolumeAvailableCapacityForOpportunisticUsageKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportsaccesspermissionskey
declare const kCFURLVolumeSupportsAccessPermissionsKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportsfileprotectionkey
declare const kCFURLVolumeSupportsFileProtectionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportsimmutablefileskey
declare const kCFURLVolumeSupportsImmutableFilesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationalerttopmostkey
declare const kCFUserNotificationAlertTopMostKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationkeyboardtypeskey
declare const kCFUserNotificationKeyboardTypesKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfcalendaridentifier
  type CFCalendarIdentifier = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfdateformatterkey
  type CFDateFormatterKey = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cferrordomain
  type CFErrorDomain = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cflocaleidentifier
  type CFLocaleIdentifier = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cflocalekey
  type CFLocaleKey = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfnotificationname
  type CFNotificationName = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfnumberformatterkey
  type CFNumberFormatterKey = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfrunloopmode
  type CFRunLoopMode = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corefoundation/cfstreampropertykey
  type CFStreamPropertyKey = cocoascript.CFStringRef;
}
// https://developer.apple.com/documentation/corefoundation/kcftypesetcallbacks
declare const kCFTypeSetCallBacks: cocoascript.CFSetCallBacks;
// https://developer.apple.com/documentation/corefoundation/kcfcopystringsetcallbacks
declare const kCFCopyStringSetCallBacks: cocoascript.CFSetCallBacks;
// https://developer.apple.com/documentation/corefoundation/kcfpreferencescurrentapplication
declare const kCFPreferencesCurrentApplication: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfpreferencesanyapplication
declare const kCFPreferencesAnyApplication: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfpreferencescurrentuser
declare const kCFPreferencesCurrentUser: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfpreferencesanyuser
declare const kCFPreferencesAnyUser: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfpreferencescurrenthost
declare const kCFPreferencesCurrentHost: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfpreferencesanyhost
declare const kCFPreferencesAnyHost: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlnamekey
declare const kCFURLNameKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurllocalizednamekey
declare const kCFURLLocalizedNameKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlpathkey
declare const kCFURLPathKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlisregularfilekey
declare const kCFURLIsRegularFileKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlisdirectorykey
declare const kCFURLIsDirectoryKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlissymboliclinkkey
declare const kCFURLIsSymbolicLinkKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlisvolumekey
declare const kCFURLIsVolumeKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlispackagekey
declare const kCFURLIsPackageKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlissystemimmutablekey
declare const kCFURLIsSystemImmutableKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlisuserimmutablekey
declare const kCFURLIsUserImmutableKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlishiddenkey
declare const kCFURLIsHiddenKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlhashiddenextensionkey
declare const kCFURLHasHiddenExtensionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlcreationdatekey
declare const kCFURLCreationDateKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlcontentaccessdatekey
declare const kCFURLContentAccessDateKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlcontentmodificationdatekey
declare const kCFURLContentModificationDateKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlattributemodificationdatekey
declare const kCFURLAttributeModificationDateKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurllinkcountkey
declare const kCFURLLinkCountKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlparentdirectoryurlkey
declare const kCFURLParentDirectoryURLKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeurlkey
declare const kCFURLVolumeURLKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurltypeidentifierkey
declare const kCFURLTypeIdentifierKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurllocalizedtypedescriptionkey
declare const kCFURLLocalizedTypeDescriptionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurllabelnumberkey
declare const kCFURLLabelNumberKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurllabelcolorkey
declare const kCFURLLabelColorKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurllocalizedlabelkey
declare const kCFURLLocalizedLabelKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurleffectiveiconkey
declare const kCFURLEffectiveIconKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlcustomiconkey
declare const kCFURLCustomIconKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileresourceidentifierkey
declare const kCFURLFileResourceIdentifierKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeidentifierkey
declare const kCFURLVolumeIdentifierKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlpreferredioblocksizekey
declare const kCFURLPreferredIOBlockSizeKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlisreadablekey
declare const kCFURLIsReadableKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurliswritablekey
declare const kCFURLIsWritableKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlisexecutablekey
declare const kCFURLIsExecutableKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfilesecuritykey
declare const kCFURLFileSecurityKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlisexcludedfrombackupkey
declare const kCFURLIsExcludedFromBackupKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileresourcetypeblockspecial
declare const kCFURLFileResourceTypeBlockSpecial: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileresourcetypecharacterspecial
declare const kCFURLFileResourceTypeCharacterSpecial: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileresourcetypedirectory
declare const kCFURLFileResourceTypeDirectory: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileresourcetypenamedpipe
declare const kCFURLFileResourceTypeNamedPipe: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileresourcetyperegular
declare const kCFURLFileResourceTypeRegular: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileresourcetypesocket
declare const kCFURLFileResourceTypeSocket: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileresourcetypesymboliclink
declare const kCFURLFileResourceTypeSymbolicLink: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileresourcetypeunknown
declare const kCFURLFileResourceTypeUnknown: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileallocatedsizekey
declare const kCFURLFileAllocatedSizeKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfilesizekey
declare const kCFURLFileSizeKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlisaliasfilekey
declare const kCFURLIsAliasFileKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlismounttriggerkey
declare const kCFURLIsMountTriggerKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurltotalfileallocatedsizekey
declare const kCFURLTotalFileAllocatedSizeKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurltotalfilesizekey
declare const kCFURLTotalFileSizeKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlisubiquitousitemkey
declare const kCFURLIsUbiquitousItemKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitemhasunresolvedconflictskey
declare const kCFURLUbiquitousItemHasUnresolvedConflictsKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitemisdownloadedkey
declare const kCFURLUbiquitousItemIsDownloadedKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitemisdownloadingkey
declare const kCFURLUbiquitousItemIsDownloadingKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitemisuploadedkey
declare const kCFURLUbiquitousItemIsUploadedKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitemisuploadingkey
declare const kCFURLUbiquitousItemIsUploadingKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitempercentdownloadedkey
declare const kCFURLUbiquitousItemPercentDownloadedKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlubiquitousitempercentuploadedkey
declare const kCFURLUbiquitousItemPercentUploadedKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumetotalcapacitykey
declare const kCFURLVolumeTotalCapacityKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeavailablecapacitykey
declare const kCFURLVolumeAvailableCapacityKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumenamekey
declare const kCFURLVolumeNameKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumelocalizednamekey
declare const kCFURLVolumeLocalizedNameKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumelocalizedformatdescriptionkey
declare const kCFURLVolumeLocalizedFormatDescriptionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeresourcecountkey
declare const kCFURLVolumeResourceCountKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportspersistentidskey
declare const kCFURLVolumeSupportsPersistentIDsKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportssymboliclinkskey
declare const kCFURLVolumeSupportsSymbolicLinksKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportshardlinkskey
declare const kCFURLVolumeSupportsHardLinksKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportsjournalingkey
declare const kCFURLVolumeSupportsJournalingKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeisjournalingkey
declare const kCFURLVolumeIsJournalingKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportssparsefileskey
declare const kCFURLVolumeSupportsSparseFilesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportszerorunskey
declare const kCFURLVolumeSupportsZeroRunsKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportscasesensitivenameskey
declare const kCFURLVolumeSupportsCaseSensitiveNamesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportscasepreservednameskey
declare const kCFURLVolumeSupportsCasePreservedNamesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportsrootdirectorydateskey
declare const kCFURLVolumeSupportsRootDirectoryDatesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportsvolumesizeskey
declare const kCFURLVolumeSupportsVolumeSizesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportsrenamingkey
declare const kCFURLVolumeSupportsRenamingKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportsadvisoryfilelockingkey
declare const kCFURLVolumeSupportsAdvisoryFileLockingKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumesupportsextendedsecuritykey
declare const kCFURLVolumeSupportsExtendedSecurityKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeisbrowsablekey
declare const kCFURLVolumeIsBrowsableKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumemaximumfilesizekey
declare const kCFURLVolumeMaximumFileSizeKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeisejectablekey
declare const kCFURLVolumeIsEjectableKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeisremovablekey
declare const kCFURLVolumeIsRemovableKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeisinternalkey
declare const kCFURLVolumeIsInternalKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeisautomountedkey
declare const kCFURLVolumeIsAutomountedKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeislocalkey
declare const kCFURLVolumeIsLocalKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeisreadonlykey
declare const kCFURLVolumeIsReadOnlyKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumecreationdatekey
declare const kCFURLVolumeCreationDateKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeurlforremountingkey
declare const kCFURLVolumeURLForRemountingKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlvolumeuuidstringkey
declare const kCFURLVolumeUUIDStringKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlkeysofunsetvalueskey
declare const kCFURLKeysOfUnsetValuesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfallocatornull
declare const kCFAllocatorNull: cocoascript.CFAllocatorRef;
// https://developer.apple.com/documentation/corefoundation/cfstringinlinebuffer/1541983-directcstringbuffer
declare const directCStringBuffer: string;
// https://developer.apple.com/documentation/corefoundation/cfstringinlinebuffer/1542027-directunicharbuffer
declare const directUniCharBuffer: cocoascript.UniChar;
// https://developer.apple.com/documentation/corefoundation/kcfallocatorusecontext
declare const kCFAllocatorUseContext: cocoascript.CFAllocatorRef;
// https://developer.apple.com/documentation/corefoundation/kcfallocatorsystemdefault
declare const kCFAllocatorSystemDefault: cocoascript.CFAllocatorRef;
// https://developer.apple.com/documentation/corefoundation/kcfallocatormalloc
declare const kCFAllocatorMalloc: cocoascript.CFAllocatorRef;
// https://developer.apple.com/documentation/corefoundation/kcfallocatormalloczone
declare const kCFAllocatorMallocZone: cocoascript.CFAllocatorRef;
// https://developer.apple.com/documentation/corefoundation/kcftypebagcallbacks
declare const kCFTypeBagCallBacks: cocoascript.CFBagCallBacks;
// https://developer.apple.com/documentation/corefoundation/kcfcopystringbagcallbacks
declare const kCFCopyStringBagCallBacks: cocoascript.CFBagCallBacks;
// https://developer.apple.com/documentation/corefoundation/kcfstringbinaryheapcallbacks
declare const kCFStringBinaryHeapCallBacks: cocoascript.CFBinaryHeapCallBacks;
// https://developer.apple.com/documentation/corefoundation/cfbinaryheapcallbacks/1509294-retain
declare const retain: void;
// https://developer.apple.com/documentation/corefoundation/cfbinaryheapcomparecontext/1509313-retain
declare const retain: void;
// https://developer.apple.com/documentation/corefoundation/kcfbooleanfalse
declare const kCFBooleanFalse: cocoascript.CFBooleanRef;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterislenient
declare const kCFDateFormatterIsLenient: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattertimezone
declare const kCFDateFormatterTimeZone: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattercalendarname
declare const kCFDateFormatterCalendarName: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterdefaultformat
declare const kCFDateFormatterDefaultFormat: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattertwodigitstartdate
declare const kCFDateFormatterTwoDigitStartDate: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterdefaultdate
declare const kCFDateFormatterDefaultDate: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattercalendar
declare const kCFDateFormatterCalendar: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattererasymbols
declare const kCFDateFormatterEraSymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattermonthsymbols
declare const kCFDateFormatterMonthSymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattershortmonthsymbols
declare const kCFDateFormatterShortMonthSymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterweekdaysymbols
declare const kCFDateFormatterWeekdaySymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattershortweekdaysymbols
declare const kCFDateFormatterShortWeekdaySymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatteramsymbol
declare const kCFDateFormatterAMSymbol: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterpmsymbol
declare const kCFDateFormatterPMSymbol: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterlongerasymbols
declare const kCFDateFormatterLongEraSymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterveryshortmonthsymbols
declare const kCFDateFormatterVeryShortMonthSymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterstandalonemonthsymbols
declare const kCFDateFormatterStandaloneMonthSymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattershortstandalonemonthsymbols
declare const kCFDateFormatterShortStandaloneMonthSymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterveryshortstandalonemonthsymbols
declare const kCFDateFormatterVeryShortStandaloneMonthSymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterveryshortweekdaysymbols
declare const kCFDateFormatterVeryShortWeekdaySymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterstandaloneweekdaysymbols
declare const kCFDateFormatterStandaloneWeekdaySymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattershortstandaloneweekdaysymbols
declare const kCFDateFormatterShortStandaloneWeekdaySymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterveryshortstandaloneweekdaysymbols
declare const kCFDateFormatterVeryShortStandaloneWeekdaySymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterquartersymbols
declare const kCFDateFormatterQuarterSymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattershortquartersymbols
declare const kCFDateFormatterShortQuarterSymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterstandalonequartersymbols
declare const kCFDateFormatterStandaloneQuarterSymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattershortstandalonequartersymbols
declare const kCFDateFormatterShortStandaloneQuarterSymbols: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformattergregorianstartdate
declare const kCFDateFormatterGregorianStartDate: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfdateformatterdoesrelativedateformattingkey
declare const kCFDateFormatterDoesRelativeDateFormattingKey: cocoascript.CFDateFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfgregoriancalendar
declare const kCFGregorianCalendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcferrorlocalizeddescriptionkey
declare const kCFErrorLocalizedDescriptionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcferrorlocalizedfailurereasonkey
declare const kCFErrorLocalizedFailureReasonKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcferrordescriptionkey
declare const kCFErrorDescriptionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcferrorlocalizedrecoverysuggestionkey
declare const kCFErrorLocalizedRecoverySuggestionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcferrordomainposix
declare const kCFErrorDomainPOSIX: cocoascript.CFErrorDomain;
// https://developer.apple.com/documentation/corefoundation/kcferrordomainosstatus
declare const kCFErrorDomainOSStatus: cocoascript.CFErrorDomain;
// https://developer.apple.com/documentation/corefoundation/kcferrordomainmach
declare const kCFErrorDomainMach: cocoascript.CFErrorDomain;
// https://developer.apple.com/documentation/corefoundation/kcferrordomaincocoa
declare const kCFErrorDomainCocoa: cocoascript.CFErrorDomain;
// https://developer.apple.com/documentation/corefoundation/kcferrorunderlyingerrorkey
declare const kCFErrorUnderlyingErrorKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcferrorurlkey
declare const kCFErrorURLKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcferrorfilepathkey
declare const kCFErrorFilePathKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcflocaleidentifier
declare const kCFLocaleIdentifier: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalelanguagecode
declare const kCFLocaleLanguageCode: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalecountrycode
declare const kCFLocaleCountryCode: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalescriptcode
declare const kCFLocaleScriptCode: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalevariantcode
declare const kCFLocaleVariantCode: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocaleexemplarcharacterset
declare const kCFLocaleExemplarCharacterSet: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalecalendaridentifier
declare const kCFLocaleCalendarIdentifier: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalecalendar
declare const kCFLocaleCalendar: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalecollationidentifier
declare const kCFLocaleCollationIdentifier: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocaleusesmetricsystem
declare const kCFLocaleUsesMetricSystem: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalemeasurementsystem
declare const kCFLocaleMeasurementSystem: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocaledecimalseparator
declare const kCFLocaleDecimalSeparator: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalegroupingseparator
declare const kCFLocaleGroupingSeparator: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalecurrencysymbol
declare const kCFLocaleCurrencySymbol: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalecurrencycode
declare const kCFLocaleCurrencyCode: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalecollatoridentifier
declare const kCFLocaleCollatorIdentifier: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalequotationbegindelimiterkey
declare const kCFLocaleQuotationBeginDelimiterKey: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalequotationenddelimiterkey
declare const kCFLocaleQuotationEndDelimiterKey: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalealternatequotationbegindelimiterkey
declare const kCFLocaleAlternateQuotationBeginDelimiterKey: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcflocalealternatequotationenddelimiterkey
declare const kCFLocaleAlternateQuotationEndDelimiterKey: cocoascript.CFLocaleKey;
// https://developer.apple.com/documentation/corefoundation/kcfbuddhistcalendar
declare const kCFBuddhistCalendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcfchinesecalendar
declare const kCFChineseCalendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcfhebrewcalendar
declare const kCFHebrewCalendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcfislamiccalendar
declare const kCFIslamicCalendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcfislamiccivilcalendar
declare const kCFIslamicCivilCalendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcfislamictabularcalendar
declare const kCFIslamicTabularCalendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcfislamicummalquracalendar
declare const kCFIslamicUmmAlQuraCalendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcfjapanesecalendar
declare const kCFJapaneseCalendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcfrepublicofchinacalendar
declare const kCFRepublicOfChinaCalendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcfpersiancalendar
declare const kCFPersianCalendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcfindiancalendar
declare const kCFIndianCalendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcfiso8601calendar
declare const kCFISO8601Calendar: cocoascript.CFCalendarIdentifier;
// https://developer.apple.com/documentation/corefoundation/kcflocalecurrentlocaledidchangenotification
declare const kCFLocaleCurrentLocaleDidChangeNotification: cocoascript.CFNotificationName;
// https://developer.apple.com/documentation/corefoundation/cfmachportcontext/1400912-retain
declare const retain: void;
// https://developer.apple.com/documentation/corefoundation/cfmessageportcontext/1542526-retain
declare const retain: void;
// https://developer.apple.com/documentation/corefoundation/kcfnumbernan
declare const kCFNumberNaN: cocoascript.CFNumberRef;
// https://developer.apple.com/documentation/corefoundation/kcfnumbernegativeinfinity
declare const kCFNumberNegativeInfinity: cocoascript.CFNumberRef;
// https://developer.apple.com/documentation/corefoundation/kcfnumberpositiveinfinity
declare const kCFNumberPositiveInfinity: cocoascript.CFNumberRef;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterpaddingposition
declare const kCFNumberFormatterPaddingPosition: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformattercurrencycode
declare const kCFNumberFormatterCurrencyCode: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterdecimalseparator
declare const kCFNumberFormatterDecimalSeparator: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformattercurrencydecimalseparator
declare const kCFNumberFormatterCurrencyDecimalSeparator: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatteralwaysshowdecimalseparator
declare const kCFNumberFormatterAlwaysShowDecimalSeparator: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformattergroupingseparator
declare const kCFNumberFormatterGroupingSeparator: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterusegroupingseparator
declare const kCFNumberFormatterUseGroupingSeparator: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterpercentsymbol
declare const kCFNumberFormatterPercentSymbol: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterzerosymbol
declare const kCFNumberFormatterZeroSymbol: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatternansymbol
declare const kCFNumberFormatterNaNSymbol: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterinfinitysymbol
declare const kCFNumberFormatterInfinitySymbol: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterminussign
declare const kCFNumberFormatterMinusSign: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterplussign
declare const kCFNumberFormatterPlusSign: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformattercurrencysymbol
declare const kCFNumberFormatterCurrencySymbol: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterexponentsymbol
declare const kCFNumberFormatterExponentSymbol: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterminintegerdigits
declare const kCFNumberFormatterMinIntegerDigits: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformattermaxintegerdigits
declare const kCFNumberFormatterMaxIntegerDigits: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterminfractiondigits
declare const kCFNumberFormatterMinFractionDigits: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformattermaxfractiondigits
declare const kCFNumberFormatterMaxFractionDigits: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformattergroupingsize
declare const kCFNumberFormatterGroupingSize: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformattersecondarygroupingsize
declare const kCFNumberFormatterSecondaryGroupingSize: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterroundingmode
declare const kCFNumberFormatterRoundingMode: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterroundingincrement
declare const kCFNumberFormatterRoundingIncrement: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterformatwidth
declare const kCFNumberFormatterFormatWidth: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterpaddingcharacter
declare const kCFNumberFormatterPaddingCharacter: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterdefaultformat
declare const kCFNumberFormatterDefaultFormat: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformattermultiplier
declare const kCFNumberFormatterMultiplier: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterpositiveprefix
declare const kCFNumberFormatterPositivePrefix: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterpositivesuffix
declare const kCFNumberFormatterPositiveSuffix: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatternegativeprefix
declare const kCFNumberFormatterNegativePrefix: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatternegativesuffix
declare const kCFNumberFormatterNegativeSuffix: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterpermillsymbol
declare const kCFNumberFormatterPerMillSymbol: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterinternationalcurrencysymbol
declare const kCFNumberFormatterInternationalCurrencySymbol: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformattercurrencygroupingseparator
declare const kCFNumberFormatterCurrencyGroupingSeparator: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterislenient
declare const kCFNumberFormatterIsLenient: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterusesignificantdigits
declare const kCFNumberFormatterUseSignificantDigits: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformatterminsignificantdigits
declare const kCFNumberFormatterMinSignificantDigits: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfnumberformattermaxsignificantdigits
declare const kCFNumberFormatterMaxSignificantDigits: cocoascript.CFNumberFormatterKey;
// https://developer.apple.com/documentation/corefoundation/kcfplugindynamicregistrationkey
declare const kCFPlugInDynamicRegistrationKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfplugindynamicregisterfunctionkey
declare const kCFPlugInDynamicRegisterFunctionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfpluginunloadfunctionkey
declare const kCFPlugInUnloadFunctionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfpluginfactorieskey
declare const kCFPlugInFactoriesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfplugintypeskey
declare const kCFPlugInTypesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/cfrunloopobservercontext/1541985-retain
declare const retain: void;
// https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecontext/1543359-retain
declare const retain: void;
// https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecontext1/1542518-retain
declare const retain: void;
// https://developer.apple.com/documentation/corefoundation/cfrunlooptimercontext/1543444-retain
declare const retain: void;
// https://developer.apple.com/documentation/corefoundation/cfsocketcontext/1543095-retain
declare const retain: void;
// https://developer.apple.com/documentation/corefoundation/kcftimezonesystemtimezonedidchangenotification
declare const kCFTimeZoneSystemTimeZoneDidChangeNotification: cocoascript.CFNotificationName;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationalertheaderkey
declare const kCFUserNotificationAlertHeaderKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationiconurlkey
declare const kCFUserNotificationIconURLKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationsoundurlkey
declare const kCFUserNotificationSoundURLKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationlocalizationurlkey
declare const kCFUserNotificationLocalizationURLKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationalertmessagekey
declare const kCFUserNotificationAlertMessageKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationdefaultbuttontitlekey
declare const kCFUserNotificationDefaultButtonTitleKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationalternatebuttontitlekey
declare const kCFUserNotificationAlternateButtonTitleKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationotherbuttontitlekey
declare const kCFUserNotificationOtherButtonTitleKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationprogressindicatorvaluekey
declare const kCFUserNotificationProgressIndicatorValueKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationpopuptitleskey
declare const kCFUserNotificationPopUpTitlesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationtextfieldtitleskey
declare const kCFUserNotificationTextFieldTitlesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationcheckboxtitleskey
declare const kCFUserNotificationCheckBoxTitlesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationtextfieldvalueskey
declare const kCFUserNotificationTextFieldValuesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfusernotificationpopupselectionkey
declare const kCFUserNotificationPopUpSelectionKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfxmltreeerrordescription
declare const kCFXMLTreeErrorDescription: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfxmltreeerrorlinenumber
declare const kCFXMLTreeErrorLineNumber: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfxmltreeerrorlocation
declare const kCFXMLTreeErrorLocation: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfxmltreeerrorstatuscode
declare const kCFXMLTreeErrorStatusCode: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfabsolutetimeintervalsince1970
declare const kCFAbsoluteTimeIntervalSince1970: cocoascript.CFTimeInterval;
// https://developer.apple.com/documentation/corefoundation/kcfabsolutetimeintervalsince1904
declare const kCFAbsoluteTimeIntervalSince1904: cocoascript.CFTimeInterval;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileexists
declare const kCFURLFileExists: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfiledirectorycontents
declare const kCFURLFileDirectoryContents: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfilelength
declare const kCFURLFileLength: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfilelastmodificationtime
declare const kCFURLFileLastModificationTime: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileposixmode
declare const kCFURLFilePOSIXMode: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlfileownerid
declare const kCFURLFileOwnerID: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlhttpstatuscode
declare const kCFURLHTTPStatusCode: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfurlhttpstatusline
declare const kCFURLHTTPStatusLine: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfsocketcommandkey
declare const kCFSocketCommandKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfsocketnamekey
declare const kCFSocketNameKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfsocketvaluekey
declare const kCFSocketValueKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfsocketresultkey
declare const kCFSocketResultKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfsocketerrorkey
declare const kCFSocketErrorKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfsocketregistercommand
declare const kCFSocketRegisterCommand: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfsocketretrievecommand
declare const kCFSocketRetrieveCommand: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/corefoundation/kcfstreamerrordomainsocks
declare const kCFStreamErrorDomainSOCKS: number;
// https://developer.apple.com/documentation/corefoundation/kcfstreamerrordomainssl
declare const kCFStreamErrorDomainSSL: number;
