declare namespace cocoascript {
  /**
   * An abstract class that provides the basis for testing specifiers one at a time or in groups.
   * doc://com.apple.documentation/documentation/foundation/nsscriptwhosetest
   */
  interface NSScriptWhoseTest extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscriptwhosetest/1393877-istrue
    isTrue():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscriptwhosetest/1393856-init
    init():cocoascript.NSScriptWhoseTest;
    // doc://com.apple.documentation/documentation/foundation/nsscriptwhosetest/1393846-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSScriptWhoseTest;
    //
    alloc():cocoascript.NSScriptWhoseTest;
    //
    init():cocoascript.NSScriptWhoseTest;
  }
}

declare const NSScriptWhoseTest: cocoascript.NSScriptWhoseTest;
