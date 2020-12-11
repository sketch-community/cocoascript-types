declare namespace cocoascript {
  /**
   * A reference to a CFAttributedString object.
   * doc://com.apple.documentation/documentation/corefoundation/cfattributedstringref
   */
  interface CFAttributedStringRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a CFMutableAttributedString object.
   * doc://com.apple.documentation/documentation/corefoundation/cfmutableattributedstringref
   */
  interface CFMutableAttributedStringRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a CFURL object.
   * doc://com.apple.documentation/documentation/corefoundation/cfurlref
   */
  interface CFURLRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a CFUUID object.
   * doc://com.apple.documentation/documentation/corefoundation/cfuuidref
   */
  interface CFUUIDRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a CFString object.
   * doc://com.apple.documentation/documentation/corefoundation/cfstringref
   */
  interface CFStringRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a CFBundle object.
   * doc://com.apple.documentation/documentation/corefoundation/cfbundleref
   */
  interface CFBundleRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a CFNumber object.
   * doc://com.apple.documentation/documentation/corefoundation/cfnumberref
   */
  interface CFNumberRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a CFBoolean object.
   * doc://com.apple.documentation/documentation/corefoundation/cfbooleanref
   */
  interface CFBooleanRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to an immutable
   * doc://com.apple.documentation/documentation/corefoundation/cfdateref
   */
  interface CFDateRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to an immutable CFData object.
   * doc://com.apple.documentation/documentation/corefoundation/cfdataref
   */
  interface CFDataRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to an immutable array object.
   * doc://com.apple.documentation/documentation/corefoundation/cfarrayref
   */
  interface CFArrayRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to an immutable dictionary object.
   * doc://com.apple.documentation/documentation/corefoundation/cfdictionaryref
   */
  interface CFDictionaryRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a mutable dictionary object.
   * doc://com.apple.documentation/documentation/corefoundation/cfmutabledictionaryref
   */
  interface CFMutableDictionaryRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a CFError object.
   * doc://com.apple.documentation/documentation/corefoundation/cferrorref
   */
  interface CFErrorRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a run loop timer object.
   * doc://com.apple.documentation/documentation/corefoundation/cfrunlooptimerref
   */
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
  /**
   * A reference to a CFMutableString object.
   * doc://com.apple.documentation/documentation/corefoundation/cfmutablestringref
   */
  interface CFMutableStringRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfindex
  type CFIndex = number;
}
declare namespace cocoascript {
  /**
   * A reference to an immutable set object.
   * doc://com.apple.documentation/documentation/corefoundation/cfsetref
   */
  interface CFSetRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a CFLocale object.
   * doc://com.apple.documentation/documentation/corefoundation/cflocaleref
   */
  interface CFLocaleRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbundlerefnum
  type CFBundleRefNum = number;
}
declare namespace cocoascript {
  /**
   * A reference to a CFNull object.
   * doc://com.apple.documentation/documentation/corefoundation/cfnullref
   */
  interface CFNullRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a CFTimeZone object.
   * doc://com.apple.documentation/documentation/corefoundation/cftimezoneref
   */
  interface CFTimeZoneRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a CFCalendar object.
   * doc://com.apple.documentation/documentation/corefoundation/cfcalendarref
   */
  interface CFCalendarRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a mutable character set object.
   * doc://com.apple.documentation/documentation/corefoundation/cfmutablecharactersetref
   */
  interface CFMutableCharacterSetRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to an immutable character set object.
   * doc://com.apple.documentation/documentation/corefoundation/cfcharactersetref
   */
  interface CFCharacterSetRef {
  }
}
declare namespace cocoascript {
  /**
   * Encapsulates a file system object’s security information in a Core Foundation object.
   * doc://com.apple.documentation/documentation/corefoundation/cffilesecurityref
   */
  interface CFFileSecurityRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a readable stream object.
   * doc://com.apple.documentation/documentation/corefoundation/cfreadstreamref
   */
  interface CFReadStreamRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a writable stream object.
   * doc://com.apple.documentation/documentation/corefoundation/cfwritestreamref
   */
  interface CFWriteStreamRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfstringencoding
  type CFStringEncoding = cocoascript.UInt32;
}
declare const kCFNull: cocoascript.CFNullRef;
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
  /**
   * Structure containing the callbacks of a CFArray.
   * doc://com.apple.documentation/documentation/corefoundation/cfarraycallbacks
   */
  interface CFArrayCallBacks {
    // doc://com.apple.documentation/documentation/corefoundation/cfarraycallbacks/1388780-copydescription
    copyDescription(): cocoascript.CFArrayCopyDescriptionCallBack;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfarraycallbacks/1388790-equal
    equal(): cocoascript.CFArrayEqualCallBack;
    setEqual(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfarraycallbacks/1388743-release
    release(): cocoascript.CFArrayReleaseCallBack;
    setRelease(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfarraycallbacks/1388784-retain
    retain(): cocoascript.CFArrayRetainCallBack;
    setRetain(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfarraycallbacks/1388778-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * A reference to a mutable array object.
   * doc://com.apple.documentation/documentation/corefoundation/cfmutablearrayref
   */
  interface CFMutableArrayRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a mutable set object.
   * doc://com.apple.documentation/documentation/corefoundation/cfmutablesetref
   */
  interface CFMutableSetRef {
  }
}
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
  /**
   * This structure contains the callbacks used to retain, release, describe, and compare the keys in a dictionary.
   * doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks
   */
  interface CFDictionaryKeyCallBacks {
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks/1516761-copydescription
    copyDescription(): cocoascript.CFDictionaryCopyDescriptionCallBack;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks/1516802-equal
    equal(): cocoascript.CFDictionaryEqualCallBack;
    setEqual(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks/1516784-hash
    hash(): cocoascript.CFDictionaryHashCallBack;
    setHash(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks/1516780-release
    release(): cocoascript.CFDictionaryReleaseCallBack;
    setRelease(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks/1516804-retain
    retain(): cocoascript.CFDictionaryRetainCallBack;
    setRetain(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks/1516747-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * This structure contains the callbacks used to retain, release, describe, and compare the values in a dictionary.
   * doc://com.apple.documentation/documentation/corefoundation/cfdictionaryvaluecallbacks
   */
  interface CFDictionaryValueCallBacks {
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryvaluecallbacks/1516773-copydescription
    copyDescription(): cocoascript.CFDictionaryCopyDescriptionCallBack;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryvaluecallbacks/1516767-equal
    equal(): cocoascript.CFDictionaryEqualCallBack;
    setEqual(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryvaluecallbacks/1516793-release
    release(): cocoascript.CFDictionaryReleaseCallBack;
    setRelease(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryvaluecallbacks/1516775-retain
    retain(): cocoascript.CFDictionaryRetainCallBack;
    setRetain(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryvaluecallbacks/1516763-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cftypeid
  type CFTypeID = number;
}
declare namespace cocoascript {
  /**
   * A reference to a CFMachPort object.
   * doc://com.apple.documentation/documentation/corefoundation/cfmachportref
   */
  interface CFMachPortRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a run loop source object.
   * doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourceref
   */
  interface CFRunLoopSourceRef {
  }
}
declare const kCFCopyStringDictionaryKeyCallBacks: cocoascript.CFDictionaryKeyCallBacks;
declare const kCFTypeDictionaryValueCallBacks: cocoascript.CFDictionaryValueCallBacks;
declare const kCFAllocatorDefault: cocoascript.CFAllocatorRef;
declare namespace cocoascript {
  /**
   * A reference to a CFAllocator object.
   * doc://com.apple.documentation/documentation/corefoundation/cfallocatorref
   */
  interface CFAllocatorRef {
  }
}
declare namespace cocoascript {
  /**
   * A structure representing a range of sequential items in a container, such as characters in a buffer or elements in a collection.
   * doc://com.apple.documentation/documentation/corefoundation/cfrange
   */
  interface CFRange {
    // doc://com.apple.documentation/documentation/corefoundation/cfrange/1521165-length
    length(): cocoascript.CFIndex;
    setLength(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrange/1521333-location
    location(): cocoascript.CFIndex;
    setLocation(): void;
  }
}
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
  /**
   * This structure contains the callbacks used to retain, release, describe, and compare the values of a CFSet object.
   * doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks
   */
  interface CFSetCallBacks {
    // doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks/1520442-copydescription
    copyDescription(): cocoascript.CFSetCopyDescriptionCallBack;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks/1520421-equal
    equal(): cocoascript.CFSetEqualCallBack;
    setEqual(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks/1520417-hash
    hash(): cocoascript.CFSetHashCallBack;
    setHash(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks/1520410-release
    release(): cocoascript.CFSetReleaseCallBack;
    setRelease(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks/1520439-retain
    retain(): cocoascript.CFSetRetainCallBack;
    setRetain(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks/1520446-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * A reference to an immutable bag object.
   * doc://com.apple.documentation/documentation/corefoundation/cfbagref
   */
  interface CFBagRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfabsolutetime
  type CFAbsoluteTime = cocoascript.CFTimeInterval;
}
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
  /**
   * A 128-bit struct that represents a UUID as raw bytes.
   * doc://com.apple.documentation/documentation/corefoundation/cfuuidbytes
   */
  interface CFUUIDBytes {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfoptionflags
  type CFOptionFlags = number;
}
declare const CFStringGetCharactersPtr: cocoascript.CFStringRef;
declare const CFStringGetCStringPtr: cocoascript.CFStringEncoding;
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
  /**
   * Defines the buffer and related fields used for in-line buffer access of characters in CFString objects.
   * doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer
   */
  interface CFStringInlineBuffer {
    // doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1542009-buffer
    buffer(): cocoascript.UniChar;
    setBuffer(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1541907-bufferedrangeend
    bufferedRangeEnd(): cocoascript.CFIndex;
    setBufferedRangeEnd(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1542413-bufferedrangestart
    bufferedRangeStart(): cocoascript.CFIndex;
    setBufferedRangeStart(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1542857-rangetobuffer
    rangeToBuffer(): cocoascript.CFRange;
    setRangeToBuffer(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1543299-thestring
    theString(): cocoascript.CFStringRef;
    setTheString(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfstringbuiltinencodings
  type CFStringBuiltInEncodings = cocoascript.CFStringEncoding;
}
declare const kCFBundleLocalizationsKey: cocoascript.CFStringRef;
declare const kCFBundleDevelopmentRegionKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  /**
   * A reference to a
   * doc://com.apple.documentation/documentation/corefoundation/cfpluginref
   */
  interface CFPlugInRef {
  }
}
declare const kCFBundleInfoDictionaryVersionKey: cocoascript.CFStringRef;
declare const kCFBundleExecutableKey: cocoascript.CFStringRef;
declare const kCFBundleIdentifierKey: cocoascript.CFStringRef;
declare const kCFBundleVersionKey: cocoascript.CFStringRef;
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
  /**
   * A structure that defines the context or operating environment for an allocator (CFAllocator) object. Every Core Foundation allocator object must have a context defined for it.
   * doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext
   */
  interface CFAllocatorContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521286-allocate
    allocate(): cocoascript.CFAllocatorAllocateCallBack;
    setAllocate(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521301-copydescription
    copyDescription(): cocoascript.CFAllocatorCopyDescriptionCallBack;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521339-deallocate
    deallocate(): cocoascript.CFAllocatorDeallocateCallBack;
    setDeallocate(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521307-preferredsize
    preferredSize(): cocoascript.CFAllocatorPreferredSizeCallBack;
    setPreferredSize(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521222-reallocate
    reallocate(): cocoascript.CFAllocatorReallocateCallBack;
    setReallocate(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521148-release
    release(): cocoascript.CFAllocatorReleaseCallBack;
    setRelease(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521359-retain
    retain(): cocoascript.CFAllocatorRetainCallBack;
    setRetain(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfallocatorcontext/1521161-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
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
  /**
   * This structure contains the callbacks used to retain, release, describe, and compare the values of a CFBag object.
   * doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks
   */
  interface CFBagCallBacks {
    // doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks/1469256-copydescription
    copyDescription(): cocoascript.CFBagCopyDescriptionCallBack;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks/1469316-equal
    equal(): cocoascript.CFBagEqualCallBack;
    setEqual(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks/1469293-hash
    hash(): cocoascript.CFBagHashCallBack;
    setHash(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks/1469307-release
    release(): cocoascript.CFBagReleaseCallBack;
    setRelease(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks/1469278-retain
    retain(): cocoascript.CFBagRetainCallBack;
    setRetain(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks/1469258-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare const CFBinaryHeapGetMinimum: cocoascript.CFBinaryHeapRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapapplierfunction
  type CFBinaryHeapApplierFunction = void;
}
declare namespace cocoascript {
  /**
   * Structure containing the callbacks for values for a
   * doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcallbacks
   */
  interface CFBinaryHeapCallBacks {
    // doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcallbacks/1509307-compare
    compare(): void;
    setCompare(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcallbacks/1509329-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcallbacks/1509306-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * Not used.
   * doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcomparecontext
   */
  interface CFBinaryHeapCompareContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcomparecontext/1509311-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcomparecontext/1509328-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * A reference to a binary heap object.
   * doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapref
   */
  interface CFBinaryHeapRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfbit
  type CFBit = cocoascript.UInt32;
}
declare namespace cocoascript {
  /**
   * A reference to an immutable bit vector object.
   * doc://com.apple.documentation/documentation/corefoundation/cfbitvectorref
   */
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
  /**
   * A reference to a CFDateFormatter object.
   * doc://com.apple.documentation/documentation/corefoundation/cfdateformatterref
   */
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
  /**
   * Defines a structure for the context of a CFFileDescriptor.
   * doc://com.apple.documentation/documentation/corefoundation/cffiledescriptorcontext
   */
  interface CFFileDescriptorContext {
    // doc://com.apple.documentation/documentation/corefoundation/cffiledescriptorcontext/1477577-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cffiledescriptorcontext/1477608-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * A reference to an CFFileDescriptor object.
   * doc://com.apple.documentation/documentation/corefoundation/cffiledescriptorref
   */
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
  /**
   * A structure that contains program-defined data and callbacks with which you can configure a CFMachPort object’s behavior.
   * doc://com.apple.documentation/documentation/corefoundation/cfmachportcontext
   */
  interface CFMachPortContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfmachportcontext/1400944-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfmachportcontext/1400910-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
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
  /**
   * A structure that contains program-defined data and callbacks with which you can configure a CFMessagePort object’s behavior.
   * doc://com.apple.documentation/documentation/corefoundation/cfmessageportcontext
   */
  interface CFMessagePortContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfmessageportcontext/1542175-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfmessageportcontext/1543532-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * A reference to a message port object.
   * doc://com.apple.documentation/documentation/corefoundation/cfmessageportref
   */
  interface CFMessagePortRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a mutable bag object.
   * doc://com.apple.documentation/documentation/corefoundation/cfmutablebagref
   */
  interface CFMutableBagRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a mutable bit vector object.
   * doc://com.apple.documentation/documentation/corefoundation/cfmutablebitvectorref
   */
  interface CFMutableBitVectorRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a CFMutableData object.
   * doc://com.apple.documentation/documentation/corefoundation/cfmutabledataref
   */
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
  /**
   * The type of a reference to a CFNotificationCenter.
   * doc://com.apple.documentation/documentation/corefoundation/cfnotificationcenterref
   */
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
  /**
   * A reference to a
   * doc://com.apple.documentation/documentation/corefoundation/cfnumberformatterref
   */
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
  /**
   * Not recommended.
   * doc://com.apple.documentation/documentation/corefoundation/cfplugininstanceref
   */
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
declare const CFReadStreamGetBuffer: cocoascript.CFIndex;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfreadstreamclientcallback
  type CFReadStreamClientCallBack = void;
}
declare namespace cocoascript {
  /**
   * A structure that contains program-defined data and callbacks with which you can configure a stream’s client behavior.
   * doc://com.apple.documentation/documentation/corefoundation/cfstreamclientcontext
   */
  interface CFStreamClientContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfstreamclientcontext/1539745-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfstreamclientcontext/1539654-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare const kCFRunLoopDefaultMode: cocoascript.CFRunLoopMode;
declare const kCFRunLoopCommonModes: cocoascript.CFRunLoopMode;
declare namespace cocoascript {
  /**
   * A reference to a run loop object.
   * doc://com.apple.documentation/documentation/corefoundation/cfrunloopref
   */
  interface CFRunLoopRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfrunloopobservercallback
  type CFRunLoopObserverCallBack = void;
}
declare namespace cocoascript {
  /**
   * A structure that contains program-defined data and callbacks with which you can configure a CFRunLoopObserver object’s behavior.
   * doc://com.apple.documentation/documentation/corefoundation/cfrunloopobservercontext
   */
  interface CFRunLoopObserverContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopobservercontext/1541528-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopobservercontext/1543382-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * A reference to a run loop observer object.
   * doc://com.apple.documentation/documentation/corefoundation/cfrunloopobserverref
   */
  interface CFRunLoopObserverRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfrunloopactivity
  type CFRunLoopActivity = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  /**
   * A structure that contains program-defined data and callbacks with which you can configure a version 0 CFRunLoopSource’s behavior.
   * doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext
   */
  interface CFRunLoopSourceContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext/1542769-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext/1543639-equal
    equal(): void;
    setEqual(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext/1543398-hash
    hash(): void;
    setHash(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext/1543632-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * A structure that contains program-defined data and callbacks with which you can configure a version 1 CFRunLoopSource’s behavior.
   * doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1
   */
  interface CFRunLoopSourceContext1 {
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1/1542892-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1/1542103-equal
    equal(): void;
    setEqual(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1/1542846-getport
    getPort(): void;
    setGetPort(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1/1543040-hash
    hash(): void;
    setHash(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1/1542782-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfrunlooptimercallback
  type CFRunLoopTimerCallBack = void;
}
declare namespace cocoascript {
  /**
   * A structure that contains program-defined data and callbacks with which you can configure a CFRunLoopTimer’s behavior.
   * doc://com.apple.documentation/documentation/corefoundation/cfrunlooptimercontext
   */
  interface CFRunLoopTimerContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfrunlooptimercontext/1541599-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunlooptimercontext/1542891-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfsocketcallback
  type CFSocketCallBack = void;
}
declare namespace cocoascript {
  /**
   * A structure that contains program-defined data and callbacks with which you can configure a CFSocket object’s behavior.
   * doc://com.apple.documentation/documentation/corefoundation/cfsocketcontext
   */
  interface CFSocketContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfsocketcontext/1542148-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfsocketcontext/1543689-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfsocketnativehandle
  type CFSocketNativeHandle = number;
}
declare namespace cocoascript {
  /**
   * A reference to a CFSocket object.
   * doc://com.apple.documentation/documentation/corefoundation/cfsocketref
   */
  interface CFSocketRef {
  }
}
declare namespace cocoascript {
  /**
   * A structure that fully specifies the communication protocol and connection address of a CFSocket object.
   * doc://com.apple.documentation/documentation/corefoundation/cfsocketsignature
   */
  interface CFSocketSignature {
    // doc://com.apple.documentation/documentation/corefoundation/cfsocketsignature/1542588-address
    address(): cocoascript.CFDataRef;
    setAddress(): void;
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
  /**
   * A reference to a CFStringTokenizer object.
   * doc://com.apple.documentation/documentation/corefoundation/cfstringtokenizerref
   */
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
  /**
   * Structure containing program-defined data and callbacks for a CFTree object.
   * doc://com.apple.documentation/documentation/corefoundation/cftreecontext
   */
  interface CFTreeContext {
    // doc://com.apple.documentation/documentation/corefoundation/cftreecontext/1401800-copydescription
    copyDescription(): cocoascript.CFTreeCopyDescriptionCallBack;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cftreecontext/1401779-release
    release(): cocoascript.CFTreeReleaseCallBack;
    setRelease(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cftreecontext/1401767-retain
    retain(): cocoascript.CFTreeRetainCallBack;
    setRetain(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cftreecontext/1401806-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
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
  /**
   * A reference to a CFTree object.
   * doc://com.apple.documentation/documentation/corefoundation/cftreeref
   */
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
  /**
   * A reference to a user notification object.
   * doc://com.apple.documentation/documentation/corefoundation/cfusernotificationref
   */
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
declare const CFXMLNodeGetInfoPtr: cocoascript.CFXMLNodeRef;
declare namespace cocoascript {
  /**
   * Contains information about an element attribute definition.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlattributedeclarationinfo
   */
  interface CFXMLAttributeDeclarationInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlattributedeclarationinfo/1443258-attributename
    attributeName(): cocoascript.CFStringRef;
    setAttributeName(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlattributedeclarationinfo/1443241-defaultstring
    defaultString(): cocoascript.CFStringRef;
    setDefaultString(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlattributedeclarationinfo/1443260-typestring
    typeString(): cocoascript.CFStringRef;
    setTypeString(): void;
  }
}
declare namespace cocoascript {
  /**
   * Contains a list of the attributes associated with an element.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlattributelistdeclarationinfo
   */
  interface CFXMLAttributeListDeclarationInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlattributelistdeclarationinfo/1443304-attributes
    attributes(): cocoascript.CFXMLAttributeDeclarationInfo;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlattributelistdeclarationinfo/1443362-numberofattributes
    numberOfAttributes(): cocoascript.CFIndex;
    setNumberOfAttributes(): void;
  }
}
declare namespace cocoascript {
  /**
   * Contains the source URL and text encoding information for the XML document.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmldocumentinfo
   */
  interface CFXMLDocumentInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmldocumentinfo/1443336-encoding
    encoding(): cocoascript.CFStringEncoding;
    setEncoding(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmldocumentinfo/1443348-sourceurl
    sourceURL(): cocoascript.CFURLRef;
    setSourceURL(): void;
  }
}
declare namespace cocoascript {
  /**
   * Contains the external ID of the DTD.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmldocumenttypeinfo
   */
  interface CFXMLDocumentTypeInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmldocumenttypeinfo/1443300-externalid
    externalID(): cocoascript.CFXMLExternalID;
    setExternalID(): void;
  }
}
declare namespace cocoascript {
  /**
   * Contains a list of element attributes packaged as CFDictionary key/value pairs.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlelementinfo
   */
  interface CFXMLElementInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlelementinfo/1443302-attributeorder
    attributeOrder(): cocoascript.CFArrayRef;
    setAttributeOrder(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlelementinfo/1443340-attributes
    attributes(): cocoascript.CFDictionaryRef;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlelementinfo/1443245-isempty
    isEmpty(): cocoascript.Boolean;
    setIsEmpty(): void;
  }
}
declare namespace cocoascript {
  /**
   * Contains a description of the element type.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlelementtypedeclarationinfo
   */
  interface CFXMLElementTypeDeclarationInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlelementtypedeclarationinfo/1443338-contentdescription
    contentDescription(): cocoascript.CFStringRef;
    setContentDescription(): void;
  }
}
declare namespace cocoascript {
  /**
   * Contains information describing an XML entity.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlentityinfo
   */
  interface CFXMLEntityInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlentityinfo/1443274-entityid
    entityID(): cocoascript.CFXMLExternalID;
    setEntityID(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlentityinfo/1443298-entitytype
    entityType(): cocoascript.CFXMLEntityTypeCode;
    setEntityType(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlentityinfo/1443239-notationname
    notationName(): cocoascript.CFStringRef;
    setNotationName(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlentityinfo/1443320-replacementtext
    replacementText(): cocoascript.CFStringRef;
    setReplacementText(): void;
  }
}
declare namespace cocoascript {
  /**
   * Contains information describing an XML entity reference.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlentityreferenceinfo
   */
  interface CFXMLEntityReferenceInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlentityreferenceinfo/1443252-entitytype
    entityType(): cocoascript.CFXMLEntityTypeCode;
    setEntityType(): void;
  }
}
declare namespace cocoascript {
  /**
   * Contains the system and public IDs for an external entity reference.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlexternalid
   */
  interface CFXMLExternalID {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlexternalid/1443292-publicid
    publicID(): cocoascript.CFStringRef;
    setPublicID(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlexternalid/1443334-systemid
    systemID(): cocoascript.CFURLRef;
    setSystemID(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlnoderef
  type CFXMLNodeRef = cocoascript.__CFXMLNode;
}
declare namespace cocoascript {
  /**
   * Contains the external ID of the notation.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlnotationinfo
   */
  interface CFXMLNotationInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlnotationinfo/1443368-externalid
    externalID(): cocoascript.CFXMLExternalID;
    setExternalID(): void;
  }
}
declare namespace cocoascript {
  /**
   * Contains the text of the processing instruction.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlprocessinginstructioninfo
   */
  interface CFXMLProcessingInstructionInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlprocessinginstructioninfo/1443318-datastring
    dataString(): cocoascript.CFStringRef;
    setDataString(): void;
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
  /**
   * Contains version information and function pointers to callbacks needed when parsing XML.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks
   */
  interface CFXMLParserCallBacks {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks/1541618-addchild
    addChild(): cocoascript.CFXMLParserAddChildCallBack;
    setAddChild(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks/1541742-createxmlstructure
    createXMLStructure(): cocoascript.CFXMLParserCreateXMLStructureCallBack;
    setCreateXMLStructure(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks/1543438-endxmlstructure
    endXMLStructure(): cocoascript.CFXMLParserEndXMLStructureCallBack;
    setEndXMLStructure(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks/1542159-handleerror
    handleError(): cocoascript.CFXMLParserHandleErrorCallBack;
    setHandleError(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks/1541449-resolveexternalentity
    resolveExternalEntity(): cocoascript.CFXMLParserResolveExternalEntityCallBack;
    setResolveExternalEntity(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks/1542828-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * Contains version information and function pointers to callbacks used when handling a program-defined context.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercontext
   */
  interface CFXMLParserContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercontext/1543179-copydescription
    copyDescription(): cocoascript.CFXMLParserCopyDescriptionCallBack;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercontext/1543285-release
    release(): cocoascript.CFXMLParserReleaseCallBack;
    setRelease(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercontext/1542873-retain
    retain(): cocoascript.CFXMLParserRetainCallBack;
    setRetain(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercontext/1543253-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * A reference to an XML parser object.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlparserref
   */
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
declare const kCFStringTransformToLatin: cocoascript.CFStringRef;
declare const kCFStringTransformLatinArabic: cocoascript.CFStringRef;
declare const kCFStringTransformLatinCyrillic: cocoascript.CFStringRef;
declare const kCFStringTransformLatinGreek: cocoascript.CFStringRef;
declare const kCFStringTransformLatinHangul: cocoascript.CFStringRef;
declare const kCFStringTransformLatinHebrew: cocoascript.CFStringRef;
declare const kCFStringTransformLatinHiragana: cocoascript.CFStringRef;
declare const kCFStringTransformLatinKatakana: cocoascript.CFStringRef;
declare const kCFStringTransformLatinThai: cocoascript.CFStringRef;
declare const kCFStringTransformHiraganaKatakana: cocoascript.CFStringRef;
declare const kCFStringTransformMandarinLatin: cocoascript.CFStringRef;
declare const kCFStringTransformStripDiacritics: cocoascript.CFStringRef;
declare const kCFStringTransformStripCombiningMarks: cocoascript.CFStringRef;
declare const kCFStringTransformFullwidthHalfwidth: cocoascript.CFStringRef;
declare const kCFStringTransformToUnicodeName: cocoascript.CFStringRef;
declare const kCFStringTransformToXMLHex: cocoascript.CFStringRef;
declare const kCFTypeArrayCallBacks: cocoascript.CFArrayCallBacks;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfcomparatorfunction
  type CFComparatorFunction = void;
}
declare const kCFTypeDictionaryKeyCallBacks: cocoascript.CFDictionaryKeyCallBacks;
declare namespace cocoascript {
  /**
   * Structure used to represent a point in time using the Gregorian calendar.
   * doc://com.apple.documentation/documentation/corefoundation/cfgregoriandate
   */
  interface CFGregorianDate {
  }
}
declare namespace cocoascript {
  /**
   * Structure used to represent a time interval in Gregorian units.
   * doc://com.apple.documentation/documentation/corefoundation/cfgregorianunits
   */
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
  /**
   * Structure holding a 32-bit float value in a platform-independentbyte order.
   * doc://com.apple.documentation/documentation/corefoundation/cfswappedfloat32
   */
  interface CFSwappedFloat32 {
  }
}
declare namespace cocoascript {
  /**
   * Structure holding a 64-bit float value in a platform-independentbyte order.
   * doc://com.apple.documentation/documentation/corefoundation/cfswappedfloat64
   */
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
  /**
   * The structure returned by
   * doc://com.apple.documentation/documentation/corefoundation/cfstreamerror
   */
  interface CFStreamError {
    // doc://com.apple.documentation/documentation/corefoundation/cfstreamerror/1539658-domain
    domain(): cocoascript.CFIndex;
    setDomain(): void;
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
  /**
   * A reference to a
   * doc://com.apple.documentation/documentation/corefoundation/cfurlenumeratorref
   */
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
declare const kCFNotFound: cocoascript.CFIndex;
declare const kCFURLAddedToDirectoryDateKey: cocoascript.CFStringRef;
declare const kCFURLApplicationIsScriptableKey: cocoascript.CFStringRef;
declare const kCFURLCanonicalPathKey: cocoascript.CFStringRef;
declare const kCFURLDocumentIdentifierKey: cocoascript.CFStringRef;
declare const kCFURLFileProtectionComplete: cocoascript.CFStringRef;
declare const kCFURLFileProtectionCompleteUnlessOpen: cocoascript.CFStringRef;
declare const kCFURLFileProtectionCompleteUntilFirstUserAuthentication: cocoascript.CFStringRef;
declare const kCFURLFileProtectionKey: cocoascript.CFStringRef;
declare const kCFURLFileProtectionNone: cocoascript.CFStringRef;
declare const kCFURLGenerationIdentifierKey: cocoascript.CFStringRef;
declare const kCFURLIsApplicationKey: cocoascript.CFStringRef;
declare const kCFURLQuarantinePropertiesKey: cocoascript.CFStringRef;
declare const kCFURLTagNamesKey: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemDownloadingErrorKey: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemDownloadingStatusCurrent: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemDownloadingStatusDownloaded: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemDownloadingStatusKey: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemDownloadingStatusNotDownloaded: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemUploadingErrorKey: cocoascript.CFStringRef;
declare const kCFURLVolumeIsEncryptedKey: cocoascript.CFStringRef;
declare const kCFURLVolumeIsRootFileSystemKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsCompressionKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsExclusiveRenamingKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsFileCloningKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsSwapRenamingKey: cocoascript.CFStringRef;
declare const kCFErrorLocalizedFailureKey: cocoascript.CFStringRef;
declare const kCFURLFileContentIdentifierKey: cocoascript.CFStringRef;
declare const kCFURLIsPurgeableKey: cocoascript.CFStringRef;
declare const kCFURLIsSparseKey: cocoascript.CFStringRef;
declare const kCFURLMayHaveExtendedAttributesKey: cocoascript.CFStringRef;
declare const kCFURLMayShareFileContentKey: cocoascript.CFStringRef;
declare const kCFURLVolumeAvailableCapacityForImportantUsageKey: cocoascript.CFStringRef;
declare const kCFURLVolumeAvailableCapacityForOpportunisticUsageKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsAccessPermissionsKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsFileProtectionKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsImmutableFilesKey: cocoascript.CFStringRef;
declare const kCFUserNotificationAlertTopMostKey: cocoascript.CFStringRef;
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
declare const kCFTypeSetCallBacks: cocoascript.CFSetCallBacks;
declare const kCFCopyStringSetCallBacks: cocoascript.CFSetCallBacks;
declare const kCFPreferencesCurrentApplication: cocoascript.CFStringRef;
declare const kCFPreferencesAnyApplication: cocoascript.CFStringRef;
declare const kCFPreferencesCurrentUser: cocoascript.CFStringRef;
declare const kCFPreferencesAnyUser: cocoascript.CFStringRef;
declare const kCFPreferencesCurrentHost: cocoascript.CFStringRef;
declare const kCFPreferencesAnyHost: cocoascript.CFStringRef;
declare const kCFURLNameKey: cocoascript.CFStringRef;
declare const kCFURLLocalizedNameKey: cocoascript.CFStringRef;
declare const kCFURLPathKey: cocoascript.CFStringRef;
declare const kCFURLIsRegularFileKey: cocoascript.CFStringRef;
declare const kCFURLIsDirectoryKey: cocoascript.CFStringRef;
declare const kCFURLIsSymbolicLinkKey: cocoascript.CFStringRef;
declare const kCFURLIsVolumeKey: cocoascript.CFStringRef;
declare const kCFURLIsPackageKey: cocoascript.CFStringRef;
declare const kCFURLIsSystemImmutableKey: cocoascript.CFStringRef;
declare const kCFURLIsUserImmutableKey: cocoascript.CFStringRef;
declare const kCFURLIsHiddenKey: cocoascript.CFStringRef;
declare const kCFURLHasHiddenExtensionKey: cocoascript.CFStringRef;
declare const kCFURLCreationDateKey: cocoascript.CFStringRef;
declare const kCFURLContentAccessDateKey: cocoascript.CFStringRef;
declare const kCFURLContentModificationDateKey: cocoascript.CFStringRef;
declare const kCFURLAttributeModificationDateKey: cocoascript.CFStringRef;
declare const kCFURLLinkCountKey: cocoascript.CFStringRef;
declare const kCFURLParentDirectoryURLKey: cocoascript.CFStringRef;
declare const kCFURLVolumeURLKey: cocoascript.CFStringRef;
declare const kCFURLTypeIdentifierKey: cocoascript.CFStringRef;
declare const kCFURLLocalizedTypeDescriptionKey: cocoascript.CFStringRef;
declare const kCFURLLabelNumberKey: cocoascript.CFStringRef;
declare const kCFURLLabelColorKey: cocoascript.CFStringRef;
declare const kCFURLLocalizedLabelKey: cocoascript.CFStringRef;
declare const kCFURLEffectiveIconKey: cocoascript.CFStringRef;
declare const kCFURLCustomIconKey: cocoascript.CFStringRef;
declare const kCFURLFileResourceIdentifierKey: cocoascript.CFStringRef;
declare const kCFURLVolumeIdentifierKey: cocoascript.CFStringRef;
declare const kCFURLPreferredIOBlockSizeKey: cocoascript.CFStringRef;
declare const kCFURLIsReadableKey: cocoascript.CFStringRef;
declare const kCFURLIsWritableKey: cocoascript.CFStringRef;
declare const kCFURLIsExecutableKey: cocoascript.CFStringRef;
declare const kCFURLFileSecurityKey: cocoascript.CFStringRef;
declare const kCFURLIsExcludedFromBackupKey: cocoascript.CFStringRef;
declare const kCFURLFileResourceTypeBlockSpecial: cocoascript.CFStringRef;
declare const kCFURLFileResourceTypeCharacterSpecial: cocoascript.CFStringRef;
declare const kCFURLFileResourceTypeDirectory: cocoascript.CFStringRef;
declare const kCFURLFileResourceTypeNamedPipe: cocoascript.CFStringRef;
declare const kCFURLFileResourceTypeRegular: cocoascript.CFStringRef;
declare const kCFURLFileResourceTypeSocket: cocoascript.CFStringRef;
declare const kCFURLFileResourceTypeSymbolicLink: cocoascript.CFStringRef;
declare const kCFURLFileResourceTypeUnknown: cocoascript.CFStringRef;
declare const kCFURLFileAllocatedSizeKey: cocoascript.CFStringRef;
declare const kCFURLFileSizeKey: cocoascript.CFStringRef;
declare const kCFURLIsAliasFileKey: cocoascript.CFStringRef;
declare const kCFURLIsMountTriggerKey: cocoascript.CFStringRef;
declare const kCFURLTotalFileAllocatedSizeKey: cocoascript.CFStringRef;
declare const kCFURLTotalFileSizeKey: cocoascript.CFStringRef;
declare const kCFURLIsUbiquitousItemKey: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemHasUnresolvedConflictsKey: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemIsDownloadedKey: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemIsDownloadingKey: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemIsUploadedKey: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemIsUploadingKey: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemPercentDownloadedKey: cocoascript.CFStringRef;
declare const kCFURLUbiquitousItemPercentUploadedKey: cocoascript.CFStringRef;
declare const kCFURLVolumeTotalCapacityKey: cocoascript.CFStringRef;
declare const kCFURLVolumeAvailableCapacityKey: cocoascript.CFStringRef;
declare const kCFURLVolumeNameKey: cocoascript.CFStringRef;
declare const kCFURLVolumeLocalizedNameKey: cocoascript.CFStringRef;
declare const kCFURLVolumeLocalizedFormatDescriptionKey: cocoascript.CFStringRef;
declare const kCFURLVolumeResourceCountKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsPersistentIDsKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsSymbolicLinksKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsHardLinksKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsJournalingKey: cocoascript.CFStringRef;
declare const kCFURLVolumeIsJournalingKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsSparseFilesKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsZeroRunsKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsCaseSensitiveNamesKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsCasePreservedNamesKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsRootDirectoryDatesKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsVolumeSizesKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsRenamingKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsAdvisoryFileLockingKey: cocoascript.CFStringRef;
declare const kCFURLVolumeSupportsExtendedSecurityKey: cocoascript.CFStringRef;
declare const kCFURLVolumeIsBrowsableKey: cocoascript.CFStringRef;
declare const kCFURLVolumeMaximumFileSizeKey: cocoascript.CFStringRef;
declare const kCFURLVolumeIsEjectableKey: cocoascript.CFStringRef;
declare const kCFURLVolumeIsRemovableKey: cocoascript.CFStringRef;
declare const kCFURLVolumeIsInternalKey: cocoascript.CFStringRef;
declare const kCFURLVolumeIsAutomountedKey: cocoascript.CFStringRef;
declare const kCFURLVolumeIsLocalKey: cocoascript.CFStringRef;
declare const kCFURLVolumeIsReadOnlyKey: cocoascript.CFStringRef;
declare const kCFURLVolumeCreationDateKey: cocoascript.CFStringRef;
declare const kCFURLVolumeURLForRemountingKey: cocoascript.CFStringRef;
declare const kCFURLVolumeUUIDStringKey: cocoascript.CFStringRef;
declare const kCFURLKeysOfUnsetValuesKey: cocoascript.CFStringRef;
declare const kCFAllocatorNull: cocoascript.CFAllocatorRef;
declare const directCStringBuffer: string;
declare const directUniCharBuffer: cocoascript.UniChar;
declare const kCFAllocatorUseContext: cocoascript.CFAllocatorRef;
declare const kCFAllocatorSystemDefault: cocoascript.CFAllocatorRef;
declare const kCFAllocatorMalloc: cocoascript.CFAllocatorRef;
declare const kCFAllocatorMallocZone: cocoascript.CFAllocatorRef;
declare const kCFTypeBagCallBacks: cocoascript.CFBagCallBacks;
declare const kCFCopyStringBagCallBacks: cocoascript.CFBagCallBacks;
declare const kCFStringBinaryHeapCallBacks: cocoascript.CFBinaryHeapCallBacks;
declare const retain: void;
declare const retain: void;
declare const kCFBooleanTrue: cocoascript.CFBooleanRef;
declare const kCFBooleanFalse: cocoascript.CFBooleanRef;
declare const kCFDateFormatterIsLenient: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterTimeZone: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterCalendarName: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterDefaultFormat: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterTwoDigitStartDate: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterDefaultDate: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterCalendar: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterEraSymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterMonthSymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterShortMonthSymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterWeekdaySymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterShortWeekdaySymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterAMSymbol: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterPMSymbol: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterLongEraSymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterVeryShortMonthSymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterStandaloneMonthSymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterShortStandaloneMonthSymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterVeryShortStandaloneMonthSymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterVeryShortWeekdaySymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterStandaloneWeekdaySymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterShortStandaloneWeekdaySymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterVeryShortStandaloneWeekdaySymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterQuarterSymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterShortQuarterSymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterStandaloneQuarterSymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterShortStandaloneQuarterSymbols: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterGregorianStartDate: cocoascript.CFDateFormatterKey;
declare const kCFDateFormatterDoesRelativeDateFormattingKey: cocoascript.CFDateFormatterKey;
declare const kCFGregorianCalendar: cocoascript.CFCalendarIdentifier;
declare const kCFErrorLocalizedDescriptionKey: cocoascript.CFStringRef;
declare const kCFErrorLocalizedFailureReasonKey: cocoascript.CFStringRef;
declare const kCFErrorDescriptionKey: cocoascript.CFStringRef;
declare const kCFErrorLocalizedRecoverySuggestionKey: cocoascript.CFStringRef;
declare const kCFErrorDomainPOSIX: cocoascript.CFErrorDomain;
declare const kCFErrorDomainOSStatus: cocoascript.CFErrorDomain;
declare const kCFErrorDomainMach: cocoascript.CFErrorDomain;
declare const kCFErrorDomainCocoa: cocoascript.CFErrorDomain;
declare const kCFErrorUnderlyingErrorKey: cocoascript.CFStringRef;
declare const kCFErrorURLKey: cocoascript.CFStringRef;
declare const kCFErrorFilePathKey: cocoascript.CFStringRef;
declare const kCFLocaleIdentifier: cocoascript.CFLocaleKey;
declare const kCFLocaleLanguageCode: cocoascript.CFLocaleKey;
declare const kCFLocaleCountryCode: cocoascript.CFLocaleKey;
declare const kCFLocaleScriptCode: cocoascript.CFLocaleKey;
declare const kCFLocaleVariantCode: cocoascript.CFLocaleKey;
declare const kCFLocaleExemplarCharacterSet: cocoascript.CFLocaleKey;
declare const kCFLocaleCalendarIdentifier: cocoascript.CFLocaleKey;
declare const kCFLocaleCalendar: cocoascript.CFLocaleKey;
declare const kCFLocaleCollationIdentifier: cocoascript.CFLocaleKey;
declare const kCFLocaleUsesMetricSystem: cocoascript.CFLocaleKey;
declare const kCFLocaleMeasurementSystem: cocoascript.CFLocaleKey;
declare const kCFLocaleDecimalSeparator: cocoascript.CFLocaleKey;
declare const kCFLocaleGroupingSeparator: cocoascript.CFLocaleKey;
declare const kCFLocaleCurrencySymbol: cocoascript.CFLocaleKey;
declare const kCFLocaleCurrencyCode: cocoascript.CFLocaleKey;
declare const kCFLocaleCollatorIdentifier: cocoascript.CFLocaleKey;
declare const kCFLocaleQuotationBeginDelimiterKey: cocoascript.CFLocaleKey;
declare const kCFLocaleQuotationEndDelimiterKey: cocoascript.CFLocaleKey;
declare const kCFLocaleAlternateQuotationBeginDelimiterKey: cocoascript.CFLocaleKey;
declare const kCFLocaleAlternateQuotationEndDelimiterKey: cocoascript.CFLocaleKey;
declare const kCFBuddhistCalendar: cocoascript.CFCalendarIdentifier;
declare const kCFChineseCalendar: cocoascript.CFCalendarIdentifier;
declare const kCFHebrewCalendar: cocoascript.CFCalendarIdentifier;
declare const kCFIslamicCalendar: cocoascript.CFCalendarIdentifier;
declare const kCFIslamicCivilCalendar: cocoascript.CFCalendarIdentifier;
declare const kCFIslamicTabularCalendar: cocoascript.CFCalendarIdentifier;
declare const kCFIslamicUmmAlQuraCalendar: cocoascript.CFCalendarIdentifier;
declare const kCFJapaneseCalendar: cocoascript.CFCalendarIdentifier;
declare const kCFRepublicOfChinaCalendar: cocoascript.CFCalendarIdentifier;
declare const kCFPersianCalendar: cocoascript.CFCalendarIdentifier;
declare const kCFIndianCalendar: cocoascript.CFCalendarIdentifier;
declare const kCFISO8601Calendar: cocoascript.CFCalendarIdentifier;
declare const kCFLocaleCurrentLocaleDidChangeNotification: cocoascript.CFNotificationName;
declare const retain: void;
declare const retain: void;
declare const kCFNumberNaN: cocoascript.CFNumberRef;
declare const kCFNumberNegativeInfinity: cocoascript.CFNumberRef;
declare const kCFNumberPositiveInfinity: cocoascript.CFNumberRef;
declare const kCFNumberFormatterPaddingPosition: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterCurrencyCode: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterDecimalSeparator: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterCurrencyDecimalSeparator: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterAlwaysShowDecimalSeparator: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterGroupingSeparator: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterUseGroupingSeparator: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterPercentSymbol: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterZeroSymbol: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterNaNSymbol: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterInfinitySymbol: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterMinusSign: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterPlusSign: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterCurrencySymbol: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterExponentSymbol: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterMinIntegerDigits: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterMaxIntegerDigits: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterMinFractionDigits: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterMaxFractionDigits: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterGroupingSize: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterSecondaryGroupingSize: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterRoundingMode: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterRoundingIncrement: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterFormatWidth: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterPaddingCharacter: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterDefaultFormat: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterMultiplier: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterPositivePrefix: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterPositiveSuffix: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterNegativePrefix: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterNegativeSuffix: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterPerMillSymbol: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterInternationalCurrencySymbol: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterCurrencyGroupingSeparator: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterIsLenient: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterUseSignificantDigits: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterMinSignificantDigits: cocoascript.CFNumberFormatterKey;
declare const kCFNumberFormatterMaxSignificantDigits: cocoascript.CFNumberFormatterKey;
declare const kCFPlugInDynamicRegistrationKey: cocoascript.CFStringRef;
declare const kCFPlugInDynamicRegisterFunctionKey: cocoascript.CFStringRef;
declare const kCFPlugInUnloadFunctionKey: cocoascript.CFStringRef;
declare const kCFPlugInFactoriesKey: cocoascript.CFStringRef;
declare const kCFPlugInTypesKey: cocoascript.CFStringRef;
declare const retain: void;
declare const retain: void;
declare const retain: void;
declare const retain: void;
declare const retain: void;
declare const kCFTimeZoneSystemTimeZoneDidChangeNotification: cocoascript.CFNotificationName;
declare const kCFUserNotificationAlertHeaderKey: cocoascript.CFStringRef;
declare const kCFUserNotificationIconURLKey: cocoascript.CFStringRef;
declare const kCFUserNotificationSoundURLKey: cocoascript.CFStringRef;
declare const kCFUserNotificationLocalizationURLKey: cocoascript.CFStringRef;
declare const kCFUserNotificationAlertMessageKey: cocoascript.CFStringRef;
declare const kCFUserNotificationDefaultButtonTitleKey: cocoascript.CFStringRef;
declare const kCFUserNotificationAlternateButtonTitleKey: cocoascript.CFStringRef;
declare const kCFUserNotificationOtherButtonTitleKey: cocoascript.CFStringRef;
declare const kCFUserNotificationProgressIndicatorValueKey: cocoascript.CFStringRef;
declare const kCFUserNotificationPopUpTitlesKey: cocoascript.CFStringRef;
declare const kCFUserNotificationTextFieldTitlesKey: cocoascript.CFStringRef;
declare const kCFUserNotificationCheckBoxTitlesKey: cocoascript.CFStringRef;
declare const kCFUserNotificationTextFieldValuesKey: cocoascript.CFStringRef;
declare const kCFUserNotificationPopUpSelectionKey: cocoascript.CFStringRef;
declare const kCFXMLTreeErrorDescription: cocoascript.CFStringRef;
declare const kCFXMLTreeErrorLineNumber: cocoascript.CFStringRef;
declare const kCFXMLTreeErrorLocation: cocoascript.CFStringRef;
declare const kCFXMLTreeErrorStatusCode: cocoascript.CFStringRef;
declare const kCFAbsoluteTimeIntervalSince1970: cocoascript.CFTimeInterval;
declare const kCFAbsoluteTimeIntervalSince1904: cocoascript.CFTimeInterval;
declare const kCFURLFileExists: cocoascript.CFStringRef;
declare const kCFURLFileDirectoryContents: cocoascript.CFStringRef;
declare const kCFURLFileLength: cocoascript.CFStringRef;
declare const kCFURLFileLastModificationTime: cocoascript.CFStringRef;
declare const kCFURLFilePOSIXMode: cocoascript.CFStringRef;
declare const kCFURLFileOwnerID: cocoascript.CFStringRef;
declare const kCFURLHTTPStatusCode: cocoascript.CFStringRef;
declare const kCFURLHTTPStatusLine: cocoascript.CFStringRef;
declare const kCFSocketCommandKey: cocoascript.CFStringRef;
declare const kCFSocketNameKey: cocoascript.CFStringRef;
declare const kCFSocketValueKey: cocoascript.CFStringRef;
declare const kCFSocketResultKey: cocoascript.CFStringRef;
declare const kCFSocketErrorKey: cocoascript.CFStringRef;
declare const kCFSocketRegisterCommand: cocoascript.CFStringRef;
declare const kCFSocketRetrieveCommand: cocoascript.CFStringRef;
declare const kCFStreamErrorDomainSOCKS: number;
declare const kCFStreamErrorDomainSSL: number;
