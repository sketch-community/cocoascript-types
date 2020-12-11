declare namespace cocoascript {
  /**
   * An abstract class whose subclasses enumerate collections of objects, such as arrays and dictionaries.
   * doc://com.apple.documentation/documentation/foundation/nsenumerator
   */
  interface NSEnumerator extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsenumerator/1417755-allobjects
    allObjects(): any;
    setAllObjects(): void;
    // doc://com.apple.documentation/documentation/foundation/nsenumerator/1409616-nextobject
    nextObject():void;
    //
    alloc():cocoascript.NSEnumerator;
    //
    init():cocoascript.NSEnumerator;
  }
}

declare const NSEnumerator: cocoascript.NSEnumerator;
