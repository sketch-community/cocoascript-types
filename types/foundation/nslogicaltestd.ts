declare namespace cocoascript {
/**
 * The logical combination of one or more specifier tests.
 * doc://com.apple.documentation/documentation/foundation/nslogicaltest
 */
interface NSLogicalTest extends NSScriptWhoseTest {
  // doc://com.apple.documentation/documentation/foundation/nslogicaltest/1393854-initandtestwithtests
  initAndTestWithTests(subTests: cocoascript.NSSpecifierTest):cocoascript.NSLogicalTest;
  // doc://com.apple.documentation/documentation/foundation/nslogicaltest/1393879-initnottestwithtest
  initNotTestWithTest(subTest: cocoascript.NSScriptWhoseTest):cocoascript.NSLogicalTest;
  // doc://com.apple.documentation/documentation/foundation/nslogicaltest/1393875-initortestwithtests
  initOrTestWithTests(subTests: cocoascript.NSSpecifierTest):cocoascript.NSLogicalTest;
  // 
  alloc():cocoascript.NSLogicalTest;
  // 
  init():cocoascript.NSLogicalTest;
}
}
declare const NSLogicalTest: cocoascript.NSLogicalTest;

