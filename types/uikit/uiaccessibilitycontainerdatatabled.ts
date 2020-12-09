declare namespace cocoascript {
/**
 * Methods that convey information about the contents of a table. 
 * doc://com.apple.documentation/documentation/uikit/uiaccessibilitycontainerdatatable
 */
interface UIAccessibilityContainerDataTable extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycontainerdatatable/2865804-accessibilitydatatablecellelemen
  accessibilityDataTableCellElementForRow_column(row: cocoascript.NSUInteger, column: cocoascript.NSUInteger):cocoascript.UIAccessibilityContainerDataTableCell;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycontainerdatatable/2865809-accessibilitycolumncount
  accessibilityColumnCount():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycontainerdatatable/2865811-accessibilityrowcount
  accessibilityRowCount():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycontainerdatatable/2865805-accessibilityheaderelementsforco
  accessibilityHeaderElementsForColumn(column: cocoascript.NSUInteger):cocoascript.UIAccessibilityContainerDataTableCell;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycontainerdatatable/2865808-accessibilityheaderelementsforro
  accessibilityHeaderElementsForRow(row: cocoascript.NSUInteger):cocoascript.UIAccessibilityContainerDataTableCell;
}
}

