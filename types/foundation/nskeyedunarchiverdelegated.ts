declare namespace cocoascript {
/**
 * The optional methods implemented by the delegate of a keyed unarchiver.
 * doc://com.apple.documentation/documentation/foundation/nskeyedunarchiverdelegate
 */
interface NSKeyedUnarchiverDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiverdelegate/1409948-unarchiver
  unarchiver_cannotDecodeObjectOfClassName_originalClasses(unarchiver: cocoascript.NSKeyedUnarchiver, name: cocoascript.NSString, classNames: cocoascript.NSString):cocoascript.Class;
  // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiverdelegate/1414187-unarchiver
  unarchiver_didDecodeObject(unarchiver: cocoascript.NSKeyedUnarchiver, object: cocoascript.NSKeyedUnarchiverDelegate):cocoascript.NSKeyedUnarchiverDelegate;
  // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiverdelegate/1413012-unarchiver
  unarchiver_willReplaceObject_withObject(unarchiver: cocoascript.NSKeyedUnarchiver, object: cocoascript.NSKeyedUnarchiverDelegate, newObject: cocoascript.NSKeyedUnarchiverDelegate):void;
  // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiverdelegate/1418067-unarchiverdidfinish
  unarchiverDidFinish(unarchiver: cocoascript.NSKeyedUnarchiver):void;
  // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiverdelegate/1415305-unarchiverwillfinish
  unarchiverWillFinish(unarchiver: cocoascript.NSKeyedUnarchiver):void;
}
}

