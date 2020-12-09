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

