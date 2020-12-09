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
  encodeArrayOfObjCType_count_at(type: cocoascript.char, count: cocoascript.NSUInteger, array: void):void;
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
  encodeValueOfObjCType_at(type: cocoascript.char, addr: void):void;
  // doc://com.apple.documentation/documentation/foundation/nscoder/1442581-encodevaluesofobjctypes
  encodeValuesOfObjCTypes(types: cocoascript.char):void;
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
  decodeTopLevelObjectOfClass_forKey_error(aClass: cocoascript.Class, key: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSCoder;
  // doc://com.apple.documentation/documentation/foundation/nscoder/1442539-decodetoplevelobjectofclasses
  decodeTopLevelObjectOfClasses_forKey_error(classes: cocoascript.Class, key: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSCoder;
  // doc://com.apple.documentation/documentation/foundation/nscoder/1442553-decodetoplevelobjectandreturnerr
  decodeTopLevelObjectAndReturnError(error: cocoascript._Nullable):cocoascript.NSCoder;
  // doc://com.apple.documentation/documentation/foundation/nscoder/1442541-decodetoplevelobjectforkey
  decodeTopLevelObjectForKey_error(key: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSCoder;
  // doc://com.apple.documentation/documentation/foundation/nscoder/1408354-decodearrayofobjctype
  decodeArrayOfObjCType_count_at(itemType: cocoascript.char, count: cocoascript.NSUInteger, array: void):void;
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
  decodeValueOfObjCType_at(type: cocoascript.char, data: void):void;
  // doc://com.apple.documentation/documentation/foundation/nscoder/2919430-decodevalueofobjctype
  decodeValueOfObjCType_at_size(type: cocoascript.char, data: void, size: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nscoder/1442577-decodevaluesofobjctypes
  decodeValuesOfObjCTypes(types: cocoascript.char):void;
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
  // doc://com.apple.documentation/documentation/uikit/1624505-cgaffinetransformfromstring
  CGAffineTransformFromString(): cocoascript.NSString;
  setCGAffineTransformFromString(): void;
  // doc://com.apple.documentation/documentation/uikit/1624477-cgpointfromstring
  CGPointFromString(): cocoascript.NSString;
  setCGPointFromString(): void;
  // doc://com.apple.documentation/documentation/uikit/1624508-cgrectfromstring
  CGRectFromString(): cocoascript.NSString;
  setCGRectFromString(): void;
  // doc://com.apple.documentation/documentation/uikit/1624484-cgsizefromstring
  CGSizeFromString(): cocoascript.NSString;
  setCGSizeFromString(): void;
  // doc://com.apple.documentation/documentation/uikit/1624513-cgvectorfromstring
  CGVectorFromString(): cocoascript.NSString;
  setCGVectorFromString(): void;
  // doc://com.apple.documentation/documentation/uikit/2865991-nsdirectionaledgeinsetsfromstrin
  NSDirectionalEdgeInsetsFromString(): cocoascript.NSString;
  setNSDirectionalEdgeInsetsFromString(): void;
  // doc://com.apple.documentation/documentation/uikit/1624525-uiedgeinsetsfromstring
  UIEdgeInsetsFromString(): cocoascript.NSString;
  setUIEdgeInsetsFromString(): void;
  // doc://com.apple.documentation/documentation/uikit/1624509-uioffsetfromstring
  UIOffsetFromString(): cocoascript.NSString;
  setUIOffsetFromString(): void;
  // doc://com.apple.documentation/documentation/uikit/1624474-nsstringfromcgrect
  NSStringFromCGRect(): cocoascript.CGRect;
  setNSStringFromCGRect(): void;
  // doc://com.apple.documentation/documentation/uikit/1624476-nsstringfromcgvector
  NSStringFromCGVector(): cocoascript.CGVector;
  setNSStringFromCGVector(): void;
  // doc://com.apple.documentation/documentation/uikit/1624497-nsstringfromcgaffinetransform
  NSStringFromCGAffineTransform(): cocoascript.CGAffineTransform;
  setNSStringFromCGAffineTransform(): void;
  // doc://com.apple.documentation/documentation/uikit/1624504-nsstringfromcgpoint
  NSStringFromCGPoint(): cocoascript.CGPoint;
  setNSStringFromCGPoint(): void;
  // doc://com.apple.documentation/documentation/uikit/1624514-nsstringfromcgsize
  NSStringFromCGSize(): cocoascript.CGSize;
  setNSStringFromCGSize(): void;
  // doc://com.apple.documentation/documentation/uikit/2865946-nsstringfromdirectionaledgeinset
  NSStringFromDirectionalEdgeInsets(): cocoascript.NSDirectionalEdgeInsets;
  setNSStringFromDirectionalEdgeInsets(): void;
  // doc://com.apple.documentation/documentation/uikit/1624527-nsstringfromuiedgeinsets
  NSStringFromUIEdgeInsets(): cocoascript.UIEdgeInsets;
  setNSStringFromUIEdgeInsets(): void;
  // doc://com.apple.documentation/documentation/uikit/1624491-nsstringfromuioffset
  NSStringFromUIOffset(): cocoascript.UIOffset;
  setNSStringFromUIOffset(): void;
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

