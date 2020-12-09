declare namespace cocoascript {
/**
 * An object representing a mutable set of Unicode character values for use in search operations.  
 * doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset
 */
interface NSMutableCharacterSet extends NSCharacterSet {
  // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1412225-addcharactersinrange
  addCharactersInRange(aRange: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1416987-removecharactersinrange
  removeCharactersInRange(aRange: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1413999-addcharactersinstring
  addCharactersInString(aString: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1414812-removecharactersinstring
  removeCharactersInString(aString: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1412512-formintersectionwithcharacterset
  formIntersectionWithCharacterSet(otherSet: cocoascript.NSCharacterSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1408380-formunionwithcharacterset
  formUnionWithCharacterSet(otherSet: cocoascript.NSCharacterSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutablecharacterset/1410977-invert
  invert():void;
  // 
  alloc():cocoascript.NSMutableCharacterSet;
  // 
  init():cocoascript.NSMutableCharacterSet;
}
}
declare const NSMutableCharacterSet: cocoascript.NSMutableCharacterSet;

