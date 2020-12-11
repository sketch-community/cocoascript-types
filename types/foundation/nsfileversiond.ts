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
    replaceItemAtURL_options_error(url: cocoascript.NSURL, options: cocoascript.NSFileVersionReplacingOptions, error: cocoascript._Nullable):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/foundation/nsfileversion/1407486-removeandreturnerror
    removeAndReturnError(outError: cocoascript._Nullable):cocoascript.BOOL;
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
