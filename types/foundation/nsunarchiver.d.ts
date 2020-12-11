declare namespace cocoascript {
  /**
   * A decoder that restores data from an archive.
   * doc://com.apple.documentation/documentation/foundation/nsunarchiver
   */
  interface NSUnarchiver extends NSCoder {
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1417689-initforreadingwithdata
    initForReadingWithData(data: cocoascript.NSData):cocoascript.NSUnarchiver;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1407375-atend
    atEnd(): cocoascript.BOOL;
    setAtEnd(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1540833-objectzone
    objectZone():cocoascript.NSZone;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1540836-setobjectzone
    setObjectZone(zone: cocoascript.NSZone):void;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1411208-systemversion
    systemVersion(): number;
    setSystemVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1408513-classnamedecodedforarchiveclassn
    classNameDecodedForArchiveClassName(inArchiveName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1408295-decodeclassname
    decodeClassName_asClassName(inArchiveName: cocoascript.NSString, trueName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsunarchiver/1410122-replaceobject
    replaceObject_withObject(object: cocoascript.NSUnarchiver, newObject: cocoascript.NSUnarchiver):void;
    //
    alloc():cocoascript.NSUnarchiver;
    //
    init():cocoascript.NSUnarchiver;
  }
}

declare const NSUnarchiver: cocoascript.NSUnarchiver;
