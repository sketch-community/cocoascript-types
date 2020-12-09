declare namespace cocoascript {
/**
 * An object that enumerates the contents of a directory.
 * doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator
 */
interface NSDirectoryEnumerator extends NSEnumerator {
  // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator/1411357-directoryattributes
  directoryAttributes(): cocoascript.id;
  setDirectoryAttributes(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator/1413284-fileattributes
  fileAttributes(): cocoascript.id;
  setFileAttributes(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator/1408465-level
  level(): cocoascript.NSUInteger;
  setLevel(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator/1412990-skipdescendents
  skipDescendents():void;
  // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator/1409644-skipdescendants
  skipDescendants():void;
  // doc://com.apple.documentation/documentation/foundation/nsdirectoryenumerator/3088819-isenumeratingdirectorypostorder
  isEnumeratingDirectoryPostOrder(): cocoascript.BOOL;
  setIsEnumeratingDirectoryPostOrder(): void;
  // 
  alloc():cocoascript.NSDirectoryEnumerator;
  // 
  init():cocoascript.NSDirectoryEnumerator;
}
}
declare const NSDirectoryEnumerator: cocoascript.NSDirectoryEnumerator;

