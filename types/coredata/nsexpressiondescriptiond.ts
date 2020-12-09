declare namespace cocoascript {
/**
 * A special property description type intended for use with a fetch request.
 * doc://com.apple.documentation/documentation/coredata/nsexpressiondescription
 */
interface NSExpressionDescription extends NSPropertyDescription {
  // doc://com.apple.documentation/documentation/coredata/nsexpressiondescription/1506817-expression
  expression(): cocoascript.NSExpression;
  setExpression(): void;
  // doc://com.apple.documentation/documentation/coredata/nsexpressiondescription/1506706-expressionresulttype
  expressionResultType(): cocoascript.NSAttributeType;
  setExpressionResultType(): void;
  // 
  alloc():cocoascript.NSExpressionDescription;
  // 
  init():cocoascript.NSExpressionDescription;
}
}
declare const NSExpressionDescription: cocoascript.NSExpressionDescription;

