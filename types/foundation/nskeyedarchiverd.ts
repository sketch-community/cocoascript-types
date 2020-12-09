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

