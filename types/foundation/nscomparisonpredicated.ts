declare namespace cocoascript {
  /**
   * A specialized predicate that you use to compare expressions.
   * doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate
   */
  interface NSComparisonPredicate extends NSPredicate {
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1409054-initwithleftexpression
    initWithLeftExpression_rightExpression_customSelector(lhs: cocoascript.NSExpression, rhs: cocoascript.NSExpression, selector: cocoascript.SEL):cocoascript.NSComparisonPredicate;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1413523-initwithleftexpression
    initWithLeftExpression_rightExpression_modifier_type_options(lhs: cocoascript.NSExpression, rhs: cocoascript.NSExpression, modifier: cocoascript.NSComparisonPredicateModifier, type: cocoascript.NSPredicateOperatorType, options: cocoascript.NSComparisonPredicateOptions):cocoascript.NSComparisonPredicate;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1416376-comparisonpredicatemodifier
    comparisonPredicateModifier(): cocoascript.NSComparisonPredicateModifier;
    setComparisonPredicateModifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1413661-customselector
    customSelector(): cocoascript.SEL;
    setCustomSelector(): void;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1409469-rightexpression
    rightExpression(): cocoascript.NSExpression;
    setRightExpression(): void;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1412552-leftexpression
    leftExpression(): cocoascript.NSExpression;
    setLeftExpression(): void;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1414069-options
    options(): cocoascript.NSComparisonPredicateOptions;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1418327-predicateoperatortype
    predicateOperatorType(): cocoascript.NSPredicateOperatorType;
    setPredicateOperatorType(): void;
    // doc://com.apple.documentation/documentation/foundation/nscomparisonpredicate/1417900-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSComparisonPredicate;
    //
    alloc():cocoascript.NSComparisonPredicate;
    //
    init():cocoascript.NSComparisonPredicate;
  }
}

declare const NSComparisonPredicate: cocoascript.NSComparisonPredicate;
