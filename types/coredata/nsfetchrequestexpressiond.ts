declare namespace cocoascript {
  /**
   * An expression that evaluates the result of a fetch request on a managed object context.
   * doc://com.apple.documentation/documentation/coredata/nsfetchrequestexpression
   */
  interface NSFetchRequestExpression extends NSExpression {
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequestexpression/1391672-requestexpression
    requestExpression(): cocoascript.NSExpression;
    setRequestExpression(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequestexpression/1391665-contextexpression
    contextExpression(): cocoascript.NSExpression;
    setContextExpression(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequestexpression/1391670-countonlyrequest
    countOnlyRequest(): cocoascript.BOOL;
    setCountOnlyRequest(): void;
    //
    alloc():cocoascript.NSFetchRequestExpression;
    //
    init():cocoascript.NSFetchRequestExpression;
  }
}

declare const NSFetchRequestExpression: cocoascript.NSFetchRequestExpression;
