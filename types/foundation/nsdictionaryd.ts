declare namespace cocoascript {
  /**
   * A static collection of objects associated with unique keys.
   * doc://com.apple.documentation/documentation/foundation/nsdictionary
   */
  interface NSDictionary extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1418147-init
    init():cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1410010-initwithobjects
    initWithObjects_forKeys(objects: cocoascript.NSArray, keys: cocoascript.NSCopying):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1412631-initwithobjects
    initWithObjects_forKeys_count(objects: cocoascript.const, keys: cocoascript.const, cnt: cocoascript.NSUInteger):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1574190-initwithobjectsandkeys
    initWithObjectsAndKeys(firstObject: cocoascript.NSDictionary):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1418434-initwithdictionary
    initWithDictionary(otherDictionary: cocoascript.NSDictionary):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1410124-initwithdictionary
    initWithDictionary_copyItems(otherDictionary: cocoascript.NSDictionary, flag: cocoascript.BOOL):cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/2879140-initwithcontentsofurl
    initWithContentsOfURL_error(url: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.NSString;
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
    isEqualToDictionary(otherDictionary: cocoascript.NSDictionary):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409150-allkeys
    allKeys(): cocoascript.KeyType;
    setAllKeys(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1417147-allkeysforobject
    allKeysForObject(anObject: cocoascript.):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1408915-allvalues
    allValues(): any;
    setAllValues(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1410210-valueforkey
    valueForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409973-getobjects
    getObjects_andKeys_count(objects: cocoascript._Nonnull, keys: cocoascript._Nonnull, count: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409428-getobjects
    getObjects_andKeys(objects: cocoascript._Nonnull, keys: cocoascript._Nonnull):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1408769-objectsforkeys
    objectsForKeys_notFoundMarker(keys: cocoascript.NSArray, marker: cocoascript.):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1414347-objectforkey
    objectForKey(aKey: cocoascript.):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1415430-objectforkeyedsubscript
    objectForKeyedSubscript(key: cocoascript.):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1411011-keyenumerator
    keyEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409600-objectenumerator
    objectEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1414570-enumeratekeysandobjectsusingbloc
    enumerateKeysAndObjectsUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/1409739-enumeratekeysandobjectswithoptio
    enumerateKeysAndObjectsWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsdictionary/2865769-countbyenumeratingwithstate
    countByEnumeratingWithState_objects_count(state: cocoascript.NSFastEnumerationState, buffer: cocoascript._Nullable, len: cocoascript.NSUInteger):cocoascript.NSUInteger;
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
    writeToURL_error(url: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
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
