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
declare const kCFNull: cocoascript.CFNullRef;
// doc://com.apple.documentation/documentation/corefoundation/1388767-cfarraygetvalueatindex
declare const CFArrayGetValueAtIndex: cocoascript.CFIndex;
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
declare const kCFCopyStringDictionaryKeyCallBacks: cocoascript.CFDictionaryKeyCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/kcftypedictionaryvaluecallbacks
declare const kCFTypeDictionaryValueCallBacks: cocoascript.CFDictionaryValueCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/kcfallocatordefault
declare const kCFAllocatorDefault: cocoascript.CFAllocatorRef;
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
declare const kCFURLFileResourceTypeKey: cocoascript.CFStringRef;
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
declare const CFStringGetCharactersPtr: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/1542133-cfstringgetcstringptr
declare const CFStringGetCStringPtr: cocoascript.CFStringEncoding;
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
declare const kCFBundleLocalizationsKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfbundledevelopmentregionkey
declare const kCFBundleDevelopmentRegionKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface CFPlugInRef {
  }
}
// doc://com.apple.documentation/documentation/corefoundation/kcfbundleinfodictionaryversionkey
declare const kCFBundleInfoDictionaryVersionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfbundleexecutablekey
declare const kCFBundleExecutableKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfbundleidentifierkey
declare const kCFBundleIdentifierKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfbundleversionkey
declare const kCFBundleVersionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfbundlenamekey
declare const kCFBundleNameKey: cocoascript.CFStringRef;
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
declare const CFBinaryHeapGetMinimum: cocoascript.CFBinaryHeapRef;
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
declare const CFDataGetBytePtr: cocoascript.CFDataRef;
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
declare const CFReadStreamGetBuffer: cocoascript.CFIndex;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfreadstreamclientcallback
  type CFReadStreamClientCallBack = void;
}
declare namespace cocoascript {
  interface CFStreamClientContext {
  }
}
// doc://com.apple.documentation/documentation/corefoundation/kcfrunloopdefaultmode
declare const kCFRunLoopDefaultMode: cocoascript.CFRunLoopMode;
// doc://com.apple.documentation/documentation/corefoundation/kcfrunloopcommonmodes
declare const kCFRunLoopCommonModes: cocoascript.CFRunLoopMode;
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
declare const kCFBooleanTrue: cocoascript.CFBooleanRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformtolatin
declare const kCFStringTransformToLatin: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatinarabic
declare const kCFStringTransformLatinArabic: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatincyrillic
declare const kCFStringTransformLatinCyrillic: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatingreek
declare const kCFStringTransformLatinGreek: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatinhangul
declare const kCFStringTransformLatinHangul: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatinhebrew
declare const kCFStringTransformLatinHebrew: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatinhiragana
declare const kCFStringTransformLatinHiragana: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatinkatakana
declare const kCFStringTransformLatinKatakana: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformlatinthai
declare const kCFStringTransformLatinThai: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformhiraganakatakana
declare const kCFStringTransformHiraganaKatakana: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformmandarinlatin
declare const kCFStringTransformMandarinLatin: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformstripdiacritics
declare const kCFStringTransformStripDiacritics: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformstripcombiningmarks
declare const kCFStringTransformStripCombiningMarks: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformfullwidthhalfwidth
declare const kCFStringTransformFullwidthHalfwidth: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformtounicodename
declare const kCFStringTransformToUnicodeName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringtransformtoxmlhex
declare const kCFStringTransformToXMLHex: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcftypearraycallbacks
declare const kCFTypeArrayCallBacks: cocoascript.CFArrayCallBacks;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfcomparatorfunction
  type CFComparatorFunction = void;
}
// doc://com.apple.documentation/documentation/corefoundation/kcftypedictionarykeycallbacks
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
declare const kCFNotFound: cocoascript.CFIndex;
// doc://com.apple.documentation/documentation/corefoundation/kcfurladdedtodirectorydatekey
declare const kCFURLAddedToDirectoryDateKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlapplicationisscriptablekey
declare const kCFURLApplicationIsScriptableKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlcanonicalpathkey
declare const kCFURLCanonicalPathKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurldocumentidentifierkey
declare const kCFURLDocumentIdentifierKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileprotectioncomplete
declare const kCFURLFileProtectionComplete: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileprotectioncompleteunlessopen
declare const kCFURLFileProtectionCompleteUnlessOpen: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileprotectioncompleteuntilfirstuserauthentication
declare const kCFURLFileProtectionCompleteUntilFirstUserAuthentication: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileprotectionkey
declare const kCFURLFileProtectionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileprotectionnone
declare const kCFURLFileProtectionNone: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlgenerationidentifierkey
declare const kCFURLGenerationIdentifierKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisapplicationkey
declare const kCFURLIsApplicationKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlquarantinepropertieskey
declare const kCFURLQuarantinePropertiesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurltagnameskey
declare const kCFURLTagNamesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemdownloadingerrorkey
declare const kCFURLUbiquitousItemDownloadingErrorKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemdownloadingstatuscurrent
declare const kCFURLUbiquitousItemDownloadingStatusCurrent: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemdownloadingstatusdownloaded
declare const kCFURLUbiquitousItemDownloadingStatusDownloaded: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemdownloadingstatuskey
declare const kCFURLUbiquitousItemDownloadingStatusKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemdownloadingstatusnotdownloaded
declare const kCFURLUbiquitousItemDownloadingStatusNotDownloaded: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemuploadingerrorkey
declare const kCFURLUbiquitousItemUploadingErrorKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisencryptedkey
declare const kCFURLVolumeIsEncryptedKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisrootfilesystemkey
declare const kCFURLVolumeIsRootFileSystemKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportscompressionkey
declare const kCFURLVolumeSupportsCompressionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsexclusiverenamingkey
declare const kCFURLVolumeSupportsExclusiveRenamingKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsfilecloningkey
declare const kCFURLVolumeSupportsFileCloningKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsswaprenamingkey
declare const kCFURLVolumeSupportsSwapRenamingKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorlocalizedfailurekey
declare const kCFErrorLocalizedFailureKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfilecontentidentifierkey
declare const kCFURLFileContentIdentifierKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlispurgeablekey
declare const kCFURLIsPurgeableKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlissparsekey
declare const kCFURLIsSparseKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlmayhaveextendedattributeskey
declare const kCFURLMayHaveExtendedAttributesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlmaysharefilecontentkey
declare const kCFURLMayShareFileContentKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeavailablecapacityforimportantusagekey
declare const kCFURLVolumeAvailableCapacityForImportantUsageKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeavailablecapacityforopportunisticusagekey
declare const kCFURLVolumeAvailableCapacityForOpportunisticUsageKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsaccesspermissionskey
declare const kCFURLVolumeSupportsAccessPermissionsKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsfileprotectionkey
declare const kCFURLVolumeSupportsFileProtectionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsimmutablefileskey
declare const kCFURLVolumeSupportsImmutableFilesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationalerttopmostkey
declare const kCFUserNotificationAlertTopMostKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationkeyboardtypeskey
declare const kCFUserNotificationKeyboardTypesKey: cocoascript.CFStringRef;
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
declare const kCFTypeSetCallBacks: cocoascript.CFSetCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/kcfcopystringsetcallbacks
declare const kCFCopyStringSetCallBacks: cocoascript.CFSetCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/kcfpreferencescurrentapplication
declare const kCFPreferencesCurrentApplication: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpreferencesanyapplication
declare const kCFPreferencesAnyApplication: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpreferencescurrentuser
declare const kCFPreferencesCurrentUser: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpreferencesanyuser
declare const kCFPreferencesAnyUser: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpreferencescurrenthost
declare const kCFPreferencesCurrentHost: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpreferencesanyhost
declare const kCFPreferencesAnyHost: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlnamekey
declare const kCFURLNameKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurllocalizednamekey
declare const kCFURLLocalizedNameKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlpathkey
declare const kCFURLPathKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisregularfilekey
declare const kCFURLIsRegularFileKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisdirectorykey
declare const kCFURLIsDirectoryKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlissymboliclinkkey
declare const kCFURLIsSymbolicLinkKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisvolumekey
declare const kCFURLIsVolumeKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlispackagekey
declare const kCFURLIsPackageKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlissystemimmutablekey
declare const kCFURLIsSystemImmutableKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisuserimmutablekey
declare const kCFURLIsUserImmutableKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlishiddenkey
declare const kCFURLIsHiddenKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlhashiddenextensionkey
declare const kCFURLHasHiddenExtensionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlcreationdatekey
declare const kCFURLCreationDateKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlcontentaccessdatekey
declare const kCFURLContentAccessDateKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlcontentmodificationdatekey
declare const kCFURLContentModificationDateKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlattributemodificationdatekey
declare const kCFURLAttributeModificationDateKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurllinkcountkey
declare const kCFURLLinkCountKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlparentdirectoryurlkey
declare const kCFURLParentDirectoryURLKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeurlkey
declare const kCFURLVolumeURLKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurltypeidentifierkey
declare const kCFURLTypeIdentifierKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurllocalizedtypedescriptionkey
declare const kCFURLLocalizedTypeDescriptionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurllabelnumberkey
declare const kCFURLLabelNumberKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurllabelcolorkey
declare const kCFURLLabelColorKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurllocalizedlabelkey
declare const kCFURLLocalizedLabelKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurleffectiveiconkey
declare const kCFURLEffectiveIconKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlcustomiconkey
declare const kCFURLCustomIconKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourceidentifierkey
declare const kCFURLFileResourceIdentifierKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeidentifierkey
declare const kCFURLVolumeIdentifierKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlpreferredioblocksizekey
declare const kCFURLPreferredIOBlockSizeKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisreadablekey
declare const kCFURLIsReadableKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurliswritablekey
declare const kCFURLIsWritableKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisexecutablekey
declare const kCFURLIsExecutableKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfilesecuritykey
declare const kCFURLFileSecurityKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisexcludedfrombackupkey
declare const kCFURLIsExcludedFromBackupKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypeblockspecial
declare const kCFURLFileResourceTypeBlockSpecial: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypecharacterspecial
declare const kCFURLFileResourceTypeCharacterSpecial: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypedirectory
declare const kCFURLFileResourceTypeDirectory: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypenamedpipe
declare const kCFURLFileResourceTypeNamedPipe: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetyperegular
declare const kCFURLFileResourceTypeRegular: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypesocket
declare const kCFURLFileResourceTypeSocket: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypesymboliclink
declare const kCFURLFileResourceTypeSymbolicLink: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileresourcetypeunknown
declare const kCFURLFileResourceTypeUnknown: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileallocatedsizekey
declare const kCFURLFileAllocatedSizeKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfilesizekey
declare const kCFURLFileSizeKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisaliasfilekey
declare const kCFURLIsAliasFileKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlismounttriggerkey
declare const kCFURLIsMountTriggerKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurltotalfileallocatedsizekey
declare const kCFURLTotalFileAllocatedSizeKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurltotalfilesizekey
declare const kCFURLTotalFileSizeKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlisubiquitousitemkey
declare const kCFURLIsUbiquitousItemKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemhasunresolvedconflictskey
declare const kCFURLUbiquitousItemHasUnresolvedConflictsKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemisdownloadedkey
declare const kCFURLUbiquitousItemIsDownloadedKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemisdownloadingkey
declare const kCFURLUbiquitousItemIsDownloadingKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemisuploadedkey
declare const kCFURLUbiquitousItemIsUploadedKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitemisuploadingkey
declare const kCFURLUbiquitousItemIsUploadingKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitempercentdownloadedkey
declare const kCFURLUbiquitousItemPercentDownloadedKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlubiquitousitempercentuploadedkey
declare const kCFURLUbiquitousItemPercentUploadedKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumetotalcapacitykey
declare const kCFURLVolumeTotalCapacityKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeavailablecapacitykey
declare const kCFURLVolumeAvailableCapacityKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumenamekey
declare const kCFURLVolumeNameKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumelocalizednamekey
declare const kCFURLVolumeLocalizedNameKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumelocalizedformatdescriptionkey
declare const kCFURLVolumeLocalizedFormatDescriptionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeresourcecountkey
declare const kCFURLVolumeResourceCountKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportspersistentidskey
declare const kCFURLVolumeSupportsPersistentIDsKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportssymboliclinkskey
declare const kCFURLVolumeSupportsSymbolicLinksKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportshardlinkskey
declare const kCFURLVolumeSupportsHardLinksKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsjournalingkey
declare const kCFURLVolumeSupportsJournalingKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisjournalingkey
declare const kCFURLVolumeIsJournalingKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportssparsefileskey
declare const kCFURLVolumeSupportsSparseFilesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportszerorunskey
declare const kCFURLVolumeSupportsZeroRunsKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportscasesensitivenameskey
declare const kCFURLVolumeSupportsCaseSensitiveNamesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportscasepreservednameskey
declare const kCFURLVolumeSupportsCasePreservedNamesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsrootdirectorydateskey
declare const kCFURLVolumeSupportsRootDirectoryDatesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsvolumesizeskey
declare const kCFURLVolumeSupportsVolumeSizesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsrenamingkey
declare const kCFURLVolumeSupportsRenamingKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsadvisoryfilelockingkey
declare const kCFURLVolumeSupportsAdvisoryFileLockingKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumesupportsextendedsecuritykey
declare const kCFURLVolumeSupportsExtendedSecurityKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisbrowsablekey
declare const kCFURLVolumeIsBrowsableKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumemaximumfilesizekey
declare const kCFURLVolumeMaximumFileSizeKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisejectablekey
declare const kCFURLVolumeIsEjectableKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisremovablekey
declare const kCFURLVolumeIsRemovableKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisinternalkey
declare const kCFURLVolumeIsInternalKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisautomountedkey
declare const kCFURLVolumeIsAutomountedKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeislocalkey
declare const kCFURLVolumeIsLocalKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeisreadonlykey
declare const kCFURLVolumeIsReadOnlyKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumecreationdatekey
declare const kCFURLVolumeCreationDateKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeurlforremountingkey
declare const kCFURLVolumeURLForRemountingKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlvolumeuuidstringkey
declare const kCFURLVolumeUUIDStringKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlkeysofunsetvalueskey
declare const kCFURLKeysOfUnsetValuesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfallocatornull
declare const kCFAllocatorNull: cocoascript.CFAllocatorRef;
// doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1541983-directcstringbuffer
declare const directCStringBuffer: string;
// doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1542027-directunicharbuffer
declare const directUniCharBuffer: cocoascript.UniChar;
// doc://com.apple.documentation/documentation/corefoundation/kcfallocatorusecontext
declare const kCFAllocatorUseContext: cocoascript.CFAllocatorRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfallocatorsystemdefault
declare const kCFAllocatorSystemDefault: cocoascript.CFAllocatorRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfallocatormalloc
declare const kCFAllocatorMalloc: cocoascript.CFAllocatorRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfallocatormalloczone
declare const kCFAllocatorMallocZone: cocoascript.CFAllocatorRef;
// doc://com.apple.documentation/documentation/corefoundation/kcftypebagcallbacks
declare const kCFTypeBagCallBacks: cocoascript.CFBagCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/kcfcopystringbagcallbacks
declare const kCFCopyStringBagCallBacks: cocoascript.CFBagCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/kcfstringbinaryheapcallbacks
declare const kCFStringBinaryHeapCallBacks: cocoascript.CFBinaryHeapCallBacks;
// doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcallbacks/1509294-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcomparecontext/1509313-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/kcfbooleanfalse
declare const kCFBooleanFalse: cocoascript.CFBooleanRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterislenient
declare const kCFDateFormatterIsLenient: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattertimezone
declare const kCFDateFormatterTimeZone: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattercalendarname
declare const kCFDateFormatterCalendarName: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterdefaultformat
declare const kCFDateFormatterDefaultFormat: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattertwodigitstartdate
declare const kCFDateFormatterTwoDigitStartDate: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterdefaultdate
declare const kCFDateFormatterDefaultDate: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattercalendar
declare const kCFDateFormatterCalendar: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattererasymbols
declare const kCFDateFormatterEraSymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattermonthsymbols
declare const kCFDateFormatterMonthSymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattershortmonthsymbols
declare const kCFDateFormatterShortMonthSymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterweekdaysymbols
declare const kCFDateFormatterWeekdaySymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattershortweekdaysymbols
declare const kCFDateFormatterShortWeekdaySymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatteramsymbol
declare const kCFDateFormatterAMSymbol: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterpmsymbol
declare const kCFDateFormatterPMSymbol: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterlongerasymbols
declare const kCFDateFormatterLongEraSymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterveryshortmonthsymbols
declare const kCFDateFormatterVeryShortMonthSymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterstandalonemonthsymbols
declare const kCFDateFormatterStandaloneMonthSymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattershortstandalonemonthsymbols
declare const kCFDateFormatterShortStandaloneMonthSymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterveryshortstandalonemonthsymbols
declare const kCFDateFormatterVeryShortStandaloneMonthSymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterveryshortweekdaysymbols
declare const kCFDateFormatterVeryShortWeekdaySymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterstandaloneweekdaysymbols
declare const kCFDateFormatterStandaloneWeekdaySymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattershortstandaloneweekdaysymbols
declare const kCFDateFormatterShortStandaloneWeekdaySymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterveryshortstandaloneweekdaysymbols
declare const kCFDateFormatterVeryShortStandaloneWeekdaySymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterquartersymbols
declare const kCFDateFormatterQuarterSymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattershortquartersymbols
declare const kCFDateFormatterShortQuarterSymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterstandalonequartersymbols
declare const kCFDateFormatterStandaloneQuarterSymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattershortstandalonequartersymbols
declare const kCFDateFormatterShortStandaloneQuarterSymbols: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformattergregorianstartdate
declare const kCFDateFormatterGregorianStartDate: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfdateformatterdoesrelativedateformattingkey
declare const kCFDateFormatterDoesRelativeDateFormattingKey: cocoascript.CFDateFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfgregoriancalendar
declare const kCFGregorianCalendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorlocalizeddescriptionkey
declare const kCFErrorLocalizedDescriptionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorlocalizedfailurereasonkey
declare const kCFErrorLocalizedFailureReasonKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrordescriptionkey
declare const kCFErrorDescriptionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorlocalizedrecoverysuggestionkey
declare const kCFErrorLocalizedRecoverySuggestionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrordomainposix
declare const kCFErrorDomainPOSIX: cocoascript.CFErrorDomain;
// doc://com.apple.documentation/documentation/corefoundation/kcferrordomainosstatus
declare const kCFErrorDomainOSStatus: cocoascript.CFErrorDomain;
// doc://com.apple.documentation/documentation/corefoundation/kcferrordomainmach
declare const kCFErrorDomainMach: cocoascript.CFErrorDomain;
// doc://com.apple.documentation/documentation/corefoundation/kcferrordomaincocoa
declare const kCFErrorDomainCocoa: cocoascript.CFErrorDomain;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorunderlyingerrorkey
declare const kCFErrorUnderlyingErrorKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorurlkey
declare const kCFErrorURLKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcferrorfilepathkey
declare const kCFErrorFilePathKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcflocaleidentifier
declare const kCFLocaleIdentifier: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalelanguagecode
declare const kCFLocaleLanguageCode: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecountrycode
declare const kCFLocaleCountryCode: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalescriptcode
declare const kCFLocaleScriptCode: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalevariantcode
declare const kCFLocaleVariantCode: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocaleexemplarcharacterset
declare const kCFLocaleExemplarCharacterSet: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecalendaridentifier
declare const kCFLocaleCalendarIdentifier: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecalendar
declare const kCFLocaleCalendar: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecollationidentifier
declare const kCFLocaleCollationIdentifier: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocaleusesmetricsystem
declare const kCFLocaleUsesMetricSystem: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalemeasurementsystem
declare const kCFLocaleMeasurementSystem: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocaledecimalseparator
declare const kCFLocaleDecimalSeparator: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalegroupingseparator
declare const kCFLocaleGroupingSeparator: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecurrencysymbol
declare const kCFLocaleCurrencySymbol: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecurrencycode
declare const kCFLocaleCurrencyCode: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecollatoridentifier
declare const kCFLocaleCollatorIdentifier: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalequotationbegindelimiterkey
declare const kCFLocaleQuotationBeginDelimiterKey: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalequotationenddelimiterkey
declare const kCFLocaleQuotationEndDelimiterKey: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalealternatequotationbegindelimiterkey
declare const kCFLocaleAlternateQuotationBeginDelimiterKey: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalealternatequotationenddelimiterkey
declare const kCFLocaleAlternateQuotationEndDelimiterKey: cocoascript.CFLocaleKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfbuddhistcalendar
declare const kCFBuddhistCalendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfchinesecalendar
declare const kCFChineseCalendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfhebrewcalendar
declare const kCFHebrewCalendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfislamiccalendar
declare const kCFIslamicCalendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfislamiccivilcalendar
declare const kCFIslamicCivilCalendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfislamictabularcalendar
declare const kCFIslamicTabularCalendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfislamicummalquracalendar
declare const kCFIslamicUmmAlQuraCalendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfjapanesecalendar
declare const kCFJapaneseCalendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfrepublicofchinacalendar
declare const kCFRepublicOfChinaCalendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfpersiancalendar
declare const kCFPersianCalendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfindiancalendar
declare const kCFIndianCalendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcfiso8601calendar
declare const kCFISO8601Calendar: cocoascript.CFCalendarIdentifier;
// doc://com.apple.documentation/documentation/corefoundation/kcflocalecurrentlocaledidchangenotification
declare const kCFLocaleCurrentLocaleDidChangeNotification: cocoascript.CFNotificationName;
// doc://com.apple.documentation/documentation/corefoundation/cfmachportcontext/1400912-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/cfmessageportcontext/1542526-retain
declare const retain: void;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumbernan
declare const kCFNumberNaN: cocoascript.CFNumberRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumbernegativeinfinity
declare const kCFNumberNegativeInfinity: cocoascript.CFNumberRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberpositiveinfinity
declare const kCFNumberPositiveInfinity: cocoascript.CFNumberRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterpaddingposition
declare const kCFNumberFormatterPaddingPosition: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattercurrencycode
declare const kCFNumberFormatterCurrencyCode: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterdecimalseparator
declare const kCFNumberFormatterDecimalSeparator: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattercurrencydecimalseparator
declare const kCFNumberFormatterCurrencyDecimalSeparator: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatteralwaysshowdecimalseparator
declare const kCFNumberFormatterAlwaysShowDecimalSeparator: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattergroupingseparator
declare const kCFNumberFormatterGroupingSeparator: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterusegroupingseparator
declare const kCFNumberFormatterUseGroupingSeparator: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterpercentsymbol
declare const kCFNumberFormatterPercentSymbol: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterzerosymbol
declare const kCFNumberFormatterZeroSymbol: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatternansymbol
declare const kCFNumberFormatterNaNSymbol: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterinfinitysymbol
declare const kCFNumberFormatterInfinitySymbol: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterminussign
declare const kCFNumberFormatterMinusSign: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterplussign
declare const kCFNumberFormatterPlusSign: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattercurrencysymbol
declare const kCFNumberFormatterCurrencySymbol: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterexponentsymbol
declare const kCFNumberFormatterExponentSymbol: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterminintegerdigits
declare const kCFNumberFormatterMinIntegerDigits: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattermaxintegerdigits
declare const kCFNumberFormatterMaxIntegerDigits: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterminfractiondigits
declare const kCFNumberFormatterMinFractionDigits: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattermaxfractiondigits
declare const kCFNumberFormatterMaxFractionDigits: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattergroupingsize
declare const kCFNumberFormatterGroupingSize: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattersecondarygroupingsize
declare const kCFNumberFormatterSecondaryGroupingSize: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterroundingmode
declare const kCFNumberFormatterRoundingMode: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterroundingincrement
declare const kCFNumberFormatterRoundingIncrement: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterformatwidth
declare const kCFNumberFormatterFormatWidth: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterpaddingcharacter
declare const kCFNumberFormatterPaddingCharacter: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterdefaultformat
declare const kCFNumberFormatterDefaultFormat: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattermultiplier
declare const kCFNumberFormatterMultiplier: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterpositiveprefix
declare const kCFNumberFormatterPositivePrefix: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterpositivesuffix
declare const kCFNumberFormatterPositiveSuffix: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatternegativeprefix
declare const kCFNumberFormatterNegativePrefix: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatternegativesuffix
declare const kCFNumberFormatterNegativeSuffix: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterpermillsymbol
declare const kCFNumberFormatterPerMillSymbol: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterinternationalcurrencysymbol
declare const kCFNumberFormatterInternationalCurrencySymbol: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattercurrencygroupingseparator
declare const kCFNumberFormatterCurrencyGroupingSeparator: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterislenient
declare const kCFNumberFormatterIsLenient: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterusesignificantdigits
declare const kCFNumberFormatterUseSignificantDigits: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformatterminsignificantdigits
declare const kCFNumberFormatterMinSignificantDigits: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfnumberformattermaxsignificantdigits
declare const kCFNumberFormatterMaxSignificantDigits: cocoascript.CFNumberFormatterKey;
// doc://com.apple.documentation/documentation/corefoundation/kcfplugindynamicregistrationkey
declare const kCFPlugInDynamicRegistrationKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfplugindynamicregisterfunctionkey
declare const kCFPlugInDynamicRegisterFunctionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpluginunloadfunctionkey
declare const kCFPlugInUnloadFunctionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfpluginfactorieskey
declare const kCFPlugInFactoriesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfplugintypeskey
declare const kCFPlugInTypesKey: cocoascript.CFStringRef;
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
declare const kCFTimeZoneSystemTimeZoneDidChangeNotification: cocoascript.CFNotificationName;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationalertheaderkey
declare const kCFUserNotificationAlertHeaderKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationiconurlkey
declare const kCFUserNotificationIconURLKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationsoundurlkey
declare const kCFUserNotificationSoundURLKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationlocalizationurlkey
declare const kCFUserNotificationLocalizationURLKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationalertmessagekey
declare const kCFUserNotificationAlertMessageKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationdefaultbuttontitlekey
declare const kCFUserNotificationDefaultButtonTitleKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationalternatebuttontitlekey
declare const kCFUserNotificationAlternateButtonTitleKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationotherbuttontitlekey
declare const kCFUserNotificationOtherButtonTitleKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationprogressindicatorvaluekey
declare const kCFUserNotificationProgressIndicatorValueKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationpopuptitleskey
declare const kCFUserNotificationPopUpTitlesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationtextfieldtitleskey
declare const kCFUserNotificationTextFieldTitlesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationcheckboxtitleskey
declare const kCFUserNotificationCheckBoxTitlesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationtextfieldvalueskey
declare const kCFUserNotificationTextFieldValuesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfusernotificationpopupselectionkey
declare const kCFUserNotificationPopUpSelectionKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfxmltreeerrordescription
declare const kCFXMLTreeErrorDescription: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfxmltreeerrorlinenumber
declare const kCFXMLTreeErrorLineNumber: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfxmltreeerrorlocation
declare const kCFXMLTreeErrorLocation: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfxmltreeerrorstatuscode
declare const kCFXMLTreeErrorStatusCode: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfabsolutetimeintervalsince1970
declare const kCFAbsoluteTimeIntervalSince1970: cocoascript.CFTimeInterval;
// doc://com.apple.documentation/documentation/corefoundation/kcfabsolutetimeintervalsince1904
declare const kCFAbsoluteTimeIntervalSince1904: cocoascript.CFTimeInterval;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileexists
declare const kCFURLFileExists: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfiledirectorycontents
declare const kCFURLFileDirectoryContents: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfilelength
declare const kCFURLFileLength: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfilelastmodificationtime
declare const kCFURLFileLastModificationTime: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileposixmode
declare const kCFURLFilePOSIXMode: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlfileownerid
declare const kCFURLFileOwnerID: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlhttpstatuscode
declare const kCFURLHTTPStatusCode: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfurlhttpstatusline
declare const kCFURLHTTPStatusLine: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketcommandkey
declare const kCFSocketCommandKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketnamekey
declare const kCFSocketNameKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketvaluekey
declare const kCFSocketValueKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketresultkey
declare const kCFSocketResultKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketerrorkey
declare const kCFSocketErrorKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketregistercommand
declare const kCFSocketRegisterCommand: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfsocketretrievecommand
declare const kCFSocketRetrieveCommand: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/corefoundation/kcfstreamerrordomainsocks
declare const kCFStreamErrorDomainSOCKS: number;
// doc://com.apple.documentation/documentation/corefoundation/kcfstreamerrordomainssl
declare const kCFStreamErrorDomainSSL: number;
