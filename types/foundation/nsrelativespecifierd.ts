declare namespace cocoascript {
/**
 * A specifier that indicates an object in a collection by its position relative to another object. 
 * doc://com.apple.documentation/documentation/foundation/nsrelativespecifier
 */
interface NSRelativeSpecifier extends NSScriptObjectSpecifier {
  // doc://com.apple.documentation/documentation/foundation/nsrelativespecifier/1409205-initwithcontainerclassdescriptio
  initWithContainerClassDescription_containerSpecifier_key_relativePosition_baseSpecifier(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString, relPos: cocoascript.NSRelativePosition, baseSpecifier: cocoascript.NSScriptObjectSpecifier):cocoascript.NSRelativeSpecifier;
  // doc://com.apple.documentation/documentation/foundation/nsrelativespecifier/1409071-basespecifier
  baseSpecifier(): cocoascript.NSScriptObjectSpecifier;
  setBaseSpecifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsrelativespecifier/1416001-relativeposition
  relativePosition(): cocoascript.NSRelativePosition;
  setRelativePosition(): void;
  // doc://com.apple.documentation/documentation/foundation/nsrelativespecifier/1412403-initwithcoder
  initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSRelativeSpecifier;
  // 
  alloc():cocoascript.NSRelativeSpecifier;
  // 
  init():cocoascript.NSRelativeSpecifier;
}
}
declare const NSRelativeSpecifier: cocoascript.NSRelativeSpecifier;

