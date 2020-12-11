declare namespace cocoascript {
  /**
   * A template that describes available predicates and how to display them.
   * doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate
   */
  interface NSPredicateEditorRowTemplate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401175-initwithleftexpressions
    initWithLeftExpressions_rightExpressions_modifier_operators_options(leftExpressions: cocoascript.NSExpression, rightExpressions: cocoascript.NSExpression, modifier: cocoascript.NSComparisonPredicateModifier, operators: cocoascript.NSNumber, options: cocoascript.NSUInteger):cocoascript.NSPredicateEditorRowTemplate;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401181-initwithleftexpressions
    initWithLeftExpressions_rightExpressionAttributeType_modifier_operators_options(leftExpressions: cocoascript.NSExpression, attributeType: cocoascript.NSAttributeType, modifier: cocoascript.NSComparisonPredicateModifier, operators: cocoascript.NSNumber, options: cocoascript.NSUInteger):cocoascript.NSPredicateEditorRowTemplate;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401177-initwithcompoundtypes
    initWithCompoundTypes(compoundTypes: cocoascript.NSNumber):cocoascript.NSPredicateEditorRowTemplate;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401185-matchforpredicate
    matchForPredicate(predicate: cocoascript.NSPredicate):number;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401193-templateviews
    templateViews(): cocoascript.NSView;
    setTemplateViews(): void;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401189-setpredicate
    setPredicate(predicate: cocoascript.NSPredicate):void;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401183-displayablesubpredicatesofpredic
    displayableSubpredicatesOfPredicate(predicate: cocoascript.NSPredicate):cocoascript.NSPredicate;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401179-predicatewithsubpredicates
    predicateWithSubpredicates(subpredicates: cocoascript.NSPredicate):cocoascript.NSPredicate;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401191-leftexpressions
    leftExpressions(): cocoascript.NSExpression;
    setLeftExpressions(): void;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401173-rightexpressions
    rightExpressions(): cocoascript.NSExpression;
    setRightExpressions(): void;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401202-compoundtypes
    compoundTypes(): cocoascript.NSNumber;
    setCompoundTypes(): void;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401204-modifier
    modifier(): cocoascript.NSComparisonPredicateModifier;
    setModifier(): void;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401195-operators
    operators(): cocoascript.NSNumber;
    setOperators(): void;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401197-options
    options(): cocoascript.NSUInteger;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditorrowtemplate/1401206-rightexpressionattributetype
    rightExpressionAttributeType(): cocoascript.NSAttributeType;
    setRightExpressionAttributeType(): void;
    //
    alloc():cocoascript.NSPredicateEditorRowTemplate;
    //
    init():cocoascript.NSPredicateEditorRowTemplate;
  }
}

declare const NSPredicateEditorRowTemplate: cocoascript.NSPredicateEditorRowTemplate;
