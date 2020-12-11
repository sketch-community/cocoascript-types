declare namespace cocoascript {
  /**
   * A protocol that declares three methods that control the discretionary aspects of working with decimal numbers.
   * doc://com.apple.documentation/documentation/foundation/nsdecimalnumberbehaviors
   */
  interface NSDecimalNumberBehaviors {
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumberbehaviors/1409414-roundingmode
    roundingMode():cocoascript.NSRoundingMode;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumberbehaviors/1411642-scale
    scale():cocoascript.short;
    // doc://com.apple.documentation/documentation/foundation/nsdecimalnumberbehaviors/1411766-exceptionduringoperation
    exceptionDuringOperation_error_leftOperand_rightOperand(operation: cocoascript.SEL, error: cocoascript.NSCalculationError, leftOperand: cocoascript.NSDecimalNumber, rightOperand: cocoascript.NSDecimalNumber):cocoascript.NSDecimalNumber;
  }
}
