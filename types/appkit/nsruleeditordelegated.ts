declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/appkit/nsruleeditordelegate
 */
interface NSRuleEditorDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsruleeditordelegate/1527259-ruleeditor
  ruleEditor_child_forCriterion_withRowType(editor: cocoascript.NSRuleEditor, index: cocoascript.NSInteger, criterion: cocoascript.NSRuleEditorDelegate, rowType: cocoascript.NSRuleEditorRowType):cocoascript.NSRuleEditorDelegate;
  // doc://com.apple.documentation/documentation/appkit/nsruleeditordelegate/1534788-ruleeditor
  ruleEditor_displayValueForCriterion_inRow(editor: cocoascript.NSRuleEditor, criterion: cocoascript.NSRuleEditorDelegate, row: cocoascript.NSInteger):cocoascript.NSRuleEditorDelegate;
  // doc://com.apple.documentation/documentation/appkit/nsruleeditordelegate/1535329-ruleeditor
  ruleEditor_numberOfChildrenForCriterion_withRowType(editor: cocoascript.NSRuleEditor, criterion: cocoascript.NSRuleEditorDelegate, rowType: cocoascript.NSRuleEditorRowType):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsruleeditordelegate/1526667-ruleeditor
  ruleEditor_predicatePartsForCriterion_withDisplayValue_inRow(editor: cocoascript.NSRuleEditor, criterion: cocoascript.NSRuleEditorDelegate, value: cocoascript.NSRuleEditorDelegate, row: cocoascript.NSInteger):cocoascript.NSRuleEditorDelegate;
  // doc://com.apple.documentation/documentation/appkit/nsruleeditordelegate/1533292-ruleeditorrowsdidchange
  ruleEditorRowsDidChange(notification: cocoascript.NSNotification):void;
}
}

