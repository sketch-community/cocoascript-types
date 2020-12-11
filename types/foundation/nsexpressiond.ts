declare namespace cocoascript {
  /**
   * An expression for use in a comparison predicate.
   * doc://com.apple.documentation/documentation/foundation/nsexpression
   */
  interface NSExpression extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1418351-initwithexpressiontype
    initWithExpressionType(type: cocoascript.NSExpressionType):cocoascript.NSExpression;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1411559-arguments
    arguments(): cocoascript.NSExpression;
    setArguments(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1415684-collection
    collection(): cocoascript.id;
    setCollection(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1418093-constantvalue
    constantValue(): cocoascript.id;
    setConstantValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1416975-expressiontype
    expressionType(): cocoascript.NSExpressionType;
    setExpressionType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1416200-function
    function(): cocoascript.NSString;
    setFunction(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1416071-keypath
    keyPath(): cocoascript.NSString;
    setKeyPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1413698-operand
    operand(): cocoascript.NSExpression;
    setOperand(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1407531-predicate
    predicate(): cocoascript.NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1415792-leftexpression
    leftExpression(): cocoascript.NSExpression;
    setLeftExpression(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1416583-rightexpression
    rightExpression(): cocoascript.NSExpression;
    setRightExpression(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1413759-variable
    variable(): cocoascript.NSString;
    setVariable(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1410363-expressionvaluewithobject
    expressionValueWithObject_context(object: cocoascript.NSExpression, context: cocoascript.NSMutableDictionary):cocoascript.NSExpression;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1409244-allowevaluation
    allowEvaluation():void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1409139-expressionblock
    expressionBlock(): cocoascript.NSMutableDictionary;
    setExpressionBlock(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1415409-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSExpression;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1416488-falseexpression
    falseExpression(): cocoascript.NSExpression;
    setFalseExpression(): void;
    // doc://com.apple.documentation/documentation/foundation/nsexpression/1411874-trueexpression
    trueExpression(): cocoascript.NSExpression;
    setTrueExpression(): void;
    //
    alloc():cocoascript.NSExpression;
    //
    init():cocoascript.NSExpression;
  }
}

declare const NSExpression: cocoascript.NSExpression;
