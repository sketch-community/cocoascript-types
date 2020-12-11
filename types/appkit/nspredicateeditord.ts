declare namespace cocoascript {
  /**
   * A defined set of rules that allows the editing of predicate objects.
   * doc://com.apple.documentation/documentation/appkit/nspredicateeditor
   */
  interface NSPredicateEditor extends NSRuleEditor {
    // doc://com.apple.documentation/documentation/appkit/nspredicateeditor/1474094-rowtemplates
    rowTemplates(): cocoascript.NSPredicateEditorRowTemplate;
    setRowTemplates(): void;
    //
    alloc():cocoascript.NSPredicateEditor;
    //
    init():cocoascript.NSPredicateEditor;
  }
}

declare const NSPredicateEditor: cocoascript.NSPredicateEditor;
