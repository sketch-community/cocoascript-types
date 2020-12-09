declare namespace cocoascript {
/**
 * A comparison between an object specifier and a test object.
 * doc://com.apple.documentation/documentation/foundation/nsspecifiertest
 */
interface NSSpecifierTest extends NSScriptWhoseTest {
  // doc://com.apple.documentation/documentation/foundation/nsspecifiertest/1393833-initwithobjectspecifier
  initWithObjectSpecifier_comparisonOperator_testObject(obj1: cocoascript.NSScriptObjectSpecifier, compOp: cocoascript.NSTestComparisonOperation, obj2: cocoascript.NSSpecifierTest):cocoascript.NSSpecifierTest;
  // doc://com.apple.documentation/documentation/foundation/nsspecifiertest/1393881-initwithcoder
  initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSSpecifierTest;
  // 
  alloc():cocoascript.NSSpecifierTest;
  // 
  init():cocoascript.NSSpecifierTest;
}
}
declare const NSSpecifierTest: cocoascript.NSSpecifierTest;

