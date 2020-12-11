declare namespace cocoascript {
  /**
   * A role-based protocol that declares the minimum interface required for an accessibility element to act as a table view.
   * doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable
   */
  interface NSAccessibilityTable extends NSAccessibilityGroup {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1526621-accessibilitycolumnheaderuieleme
    accessibilityColumnHeaderUIElements():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1524744-accessibilitycolumns
    accessibilityColumns():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1535017-accessibilityheadergroup
    accessibilityHeaderGroup():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1526563-accessibilitylabel
    accessibilityLabel():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1524262-accessibilityrowheaderuielements
    accessibilityRowHeaderUIElements():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1526672-accessibilityrows
    accessibilityRows():cocoascript.NSAccessibilityRow;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1525577-accessibilityselectedcells
    accessibilitySelectedCells():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1528430-accessibilityselectedcolumns
    accessibilitySelectedColumns():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1529241-accessibilityselectedrows
    accessibilitySelectedRows():cocoascript.NSAccessibilityRow;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1526711-accessibilityvisiblecells
    accessibilityVisibleCells():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1530264-accessibilityvisiblecolumns
    accessibilityVisibleColumns():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1535128-accessibilityvisiblerows
    accessibilityVisibleRows():cocoascript.NSAccessibilityRow;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitytable/1534612-setaccessibilityselectedrows
    setAccessibilitySelectedRows(selectedRows: cocoascript.NSAccessibilityRow):void;
  }
}
