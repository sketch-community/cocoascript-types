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

declare namespace cocoascript {
  /**
   * A reference to a
   * doc://com.apple.documentation/documentation/corefoundation/cfpluginref
   */
  interface CFPlugInRef {
  }
}
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
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corefoundation/cfcomparatorfunction
  type CFComparatorFunction = void;
}
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
