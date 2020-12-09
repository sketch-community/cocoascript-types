declare namespace cocoascript {
/**
 * Methods that provide the location of a cell in a table.
 * doc://com.apple.documentation/documentation/uikit/uiaccessibilitycontainerdatatablecell
 */
interface UIAccessibilityContainerDataTableCell extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycontainerdatatablecell/2865807-accessibilitycolumnrange
  accessibilityColumnRange():cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycontainerdatatablecell/2865803-accessibilityrowrange
  accessibilityRowRange():cocoascript.NSRange;
}
}

