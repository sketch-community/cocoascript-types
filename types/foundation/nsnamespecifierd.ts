declare namespace cocoascript {
/**
 * A specifier for an object in a collection (or container) by name.
 * doc://com.apple.documentation/documentation/foundation/nsnamespecifier
 */
interface NSNameSpecifier extends NSScriptObjectSpecifier {
  // doc://com.apple.documentation/documentation/foundation/nsnamespecifier/1408615-initwithcontainerclassdescriptio
  initWithContainerClassDescription_containerSpecifier_key_name(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString, name: cocoascript.NSString):cocoascript.NSNameSpecifier;
  // doc://com.apple.documentation/documentation/foundation/nsnamespecifier/1407411-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsnamespecifier/1412623-initwithcoder
  initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSNameSpecifier;
  // 
  alloc():cocoascript.NSNameSpecifier;
  // 
  init():cocoascript.NSNameSpecifier;
}
}
declare const NSNameSpecifier: cocoascript.NSNameSpecifier;

