declare namespace cocoascript {
/**
 * The optional methods implemented by the delegate of a keyed archiver.
 * doc://com.apple.documentation/documentation/foundation/nskeyedarchiverdelegate
 */
interface NSKeyedArchiverDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nskeyedarchiverdelegate/1416193-archiver
  archiver_didEncodeObject(archiver: cocoascript.NSKeyedArchiver, object: cocoascript.NSKeyedArchiverDelegate):void;
  // doc://com.apple.documentation/documentation/foundation/nskeyedarchiverdelegate/1412480-archiverdidfinish
  archiverDidFinish(archiver: cocoascript.NSKeyedArchiver):void;
  // doc://com.apple.documentation/documentation/foundation/nskeyedarchiverdelegate/1409228-archiver
  archiver_willEncodeObject(archiver: cocoascript.NSKeyedArchiver, object: cocoascript.NSKeyedArchiverDelegate):cocoascript.NSKeyedArchiverDelegate;
  // doc://com.apple.documentation/documentation/foundation/nskeyedarchiverdelegate/1411119-archiverwillfinish
  archiverWillFinish(archiver: cocoascript.NSKeyedArchiver):void;
  // doc://com.apple.documentation/documentation/foundation/nskeyedarchiverdelegate/1409389-archiver
  archiver_willReplaceObject_withObject(archiver: cocoascript.NSKeyedArchiver, object: cocoascript.NSKeyedArchiverDelegate, newObject: cocoascript.NSKeyedArchiverDelegate):void;
}
}

