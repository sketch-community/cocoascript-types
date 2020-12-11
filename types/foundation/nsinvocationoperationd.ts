declare namespace cocoascript {
  /**
   * An operation that manages the execution of a single encapsulated task specified as an invocation.
   * doc://com.apple.documentation/documentation/foundation/nsinvocationoperation
   */
  interface NSInvocationOperation extends NSOperation {
    // doc://com.apple.documentation/documentation/foundation/nsinvocationoperation/1543653-initwithtarget
    initWithTarget_selector_object(target: cocoascript.NSInvocationOperation, sel: cocoascript.SEL, arg: cocoascript.NSInvocationOperation):cocoascript.NSInvocationOperation;
    // doc://com.apple.documentation/documentation/foundation/nsinvocationoperation/1543647-initwithinvocation
    initWithInvocation(inv: cocoascript.NSInvocation):cocoascript.NSInvocationOperation;
    // doc://com.apple.documentation/documentation/foundation/nsinvocationoperation/1543655-invocation
    invocation(): cocoascript.NSInvocation;
    setInvocation(): void;
    // doc://com.apple.documentation/documentation/foundation/nsinvocationoperation/1543615-result
    result(): cocoascript.id;
    setResult(): void;
    //
    alloc():cocoascript.NSInvocationOperation;
    //
    init():cocoascript.NSInvocationOperation;
  }
}

declare const NSInvocationOperation: cocoascript.NSInvocationOperation;
