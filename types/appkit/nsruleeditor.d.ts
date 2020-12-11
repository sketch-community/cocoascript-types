declare namespace cocoascript {
  /**
   * An interface for configuring a rule-based list of options.
   * doc://com.apple.documentation/documentation/appkit/nsruleeditor
   */
  interface NSRuleEditor extends NSControl {
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1528017-delegate
    delegate(): cocoascript.NSRuleEditorDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1530425-editable
    editable(): cocoascript.BOOL;
    setEditable(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1533955-nestingmode
    nestingMode(): cocoascript.NSRuleEditorNestingMode;
    setNestingMode(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1535531-canremoveallrows
    canRemoveAllRows(): cocoascript.BOOL;
    setCanRemoveAllRows(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1531071-rowheight
    rowHeight(): cocoascript.CGFloat;
    setRowHeight(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1526737-formattingdictionary
    formattingDictionary(): cocoascript.NSString;
    setFormattingDictionary(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1533323-formattingstringsfilename
    formattingStringsFilename(): cocoascript.NSString;
    setFormattingStringsFilename(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1528188-reloadcriteria
    reloadCriteria():void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1534317-setcriteria
    setCriteria_andDisplayValues_forRowAtIndex(criteria: cocoascript.NSArray, values: cocoascript.NSArray, rowIndex: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1524906-criteriaforrow
    criteriaForRow(row: cocoascript.NSInteger):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1529645-displayvaluesforrow
    displayValuesForRow(row: cocoascript.NSInteger):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1529330-numberofrows
    numberOfRows(): cocoascript.NSInteger;
    setNumberOfRows(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1534763-parentrowforrow
    parentRowForRow(rowIndex: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1524590-rowfordisplayvalue
    rowForDisplayValue(displayValue: cocoascript.NSRuleEditor):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1530356-rowtypeforrow
    rowTypeForRow(rowIndex: cocoascript.NSInteger):cocoascript.NSRuleEditorRowType;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1527898-subrowindexesforrow
    subrowIndexesForRow(rowIndex: cocoascript.NSInteger):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1529841-selectedrowindexes
    selectedRowIndexes(): cocoascript.NSIndexSet;
    setSelectedRowIndexes(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1534559-selectrowindexes
    selectRowIndexes_byExtendingSelection(indexes: cocoascript.NSIndexSet, extend: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1530067-addrow
    addRow(sender: cocoascript.NSRuleEditor):void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1528842-insertrowatindex
    insertRowAtIndex_withType_asSubrowOfRow_animate(rowIndex: cocoascript.NSInteger, rowType: cocoascript.NSRuleEditorRowType, parentRow: cocoascript.NSInteger, shouldAnimate: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1534953-removerowatindex
    removeRowAtIndex(rowIndex: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1525947-removerowsatindexes
    removeRowsAtIndexes_includeSubrows(rowIndexes: cocoascript.NSIndexSet, includeSubrows: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1525681-predicate
    predicate(): cocoascript.NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1529215-reloadpredicate
    reloadPredicate():void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1531272-predicateforrow
    predicateForRow(row: cocoascript.NSInteger):cocoascript.NSPredicate;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1535414-rowclass
    rowClass(): cocoascript.Class;
    setRowClass(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1527020-rowtypekeypath
    rowTypeKeyPath(): cocoascript.NSString;
    setRowTypeKeyPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1535242-subrowskeypath
    subrowsKeyPath(): cocoascript.NSString;
    setSubrowsKeyPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1524761-criteriakeypath
    criteriaKeyPath(): cocoascript.NSString;
    setCriteriaKeyPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nsruleeditor/1535572-displayvalueskeypath
    displayValuesKeyPath(): cocoascript.NSString;
    setDisplayValuesKeyPath(): void;
    //
    alloc():cocoascript.NSRuleEditor;
    //
    init():cocoascript.NSRuleEditor;
  }
}

declare const NSRuleEditor: cocoascript.NSRuleEditor;
