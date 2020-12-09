declare namespace cocoascript {
/**
 * A specifier for a range of objects in a container.
 * doc://com.apple.documentation/documentation/foundation/nsrangespecifier
 */
interface NSRangeSpecifier extends NSScriptObjectSpecifier {
  // doc://com.apple.documentation/documentation/foundation/nsrangespecifier/1409215-initwithcontainerclassdescriptio
  initWithContainerClassDescription_containerSpecifier_key_startSpecifier_endSpecifier(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString, startSpec: cocoascript.NSScriptObjectSpecifier, endSpec: cocoascript.NSScriptObjectSpecifier):cocoascript.NSRangeSpecifier;
  // doc://com.apple.documentation/documentation/foundation/nsrangespecifier/1418470-endspecifier
  endSpecifier(): cocoascript.NSScriptObjectSpecifier;
  setEndSpecifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsrangespecifier/1418394-startspecifier
  startSpecifier(): cocoascript.NSScriptObjectSpecifier;
  setStartSpecifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsrangespecifier/1418021-initwithcoder
  initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSRangeSpecifier;
  // 
  alloc():cocoascript.NSRangeSpecifier;
  // 
  init():cocoascript.NSRangeSpecifier;
}
}
declare const NSRangeSpecifier: cocoascript.NSRangeSpecifier;

