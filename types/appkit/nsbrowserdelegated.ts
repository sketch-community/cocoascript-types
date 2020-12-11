declare namespace cocoascript {
  /**
   * A set of methods that a browser delegate implements to manage selection, scrolling, sizing, and other behavior.
   * doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate
   */
  interface NSBrowserDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407540-browser
    browser_isColumnValid(sender: cocoascript.NSBrowser, column: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407583-browser
    browser_numberOfRowsInColumn(sender: cocoascript.NSBrowser, column: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407755-browser
    browser_numberOfChildrenOfItem(browser: cocoascript.NSBrowser, item: cocoascript.NSBrowserDelegate):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407677-browser
    browser_titleOfColumn(sender: cocoascript.NSBrowser, column: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407804-browser
    browser_shouldTypeSelectForEvent_withCurrentSearchString(browser: cocoascript.NSBrowser, event: cocoascript.NSEvent, searchString: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407762-browser
    browser_typeSelectStringForRow_inColumn(browser: cocoascript.NSBrowser, row: cocoascript.NSInteger, column: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407553-browser
    browser_nextTypeSelectMatchFromRow_toRow_inColumn_forString(browser: cocoascript.NSBrowser, startRow: cocoascript.NSInteger, endRow: cocoascript.NSInteger, column: cocoascript.NSInteger, searchString: cocoascript.NSString):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407548-browser
    browser_selectCellWithString_inColumn(sender: cocoascript.NSBrowser, title: cocoascript.NSString, column: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407802-browser
    browser_selectRow_inColumn(sender: cocoascript.NSBrowser, row: cocoascript.NSInteger, column: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407660-browser
    browser_selectionIndexesForProposedSelection_inColumn(browser: cocoascript.NSBrowser, proposedSelectionIndexes: cocoascript.NSIndexSet, column: cocoascript.NSInteger):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407572-browser
    browser_child_ofItem(browser: cocoascript.NSBrowser, index: cocoascript.NSInteger, item: cocoascript.NSBrowserDelegate):cocoascript.NSBrowserDelegate;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407786-browser
    browser_isLeafItem(browser: cocoascript.NSBrowser, item: cocoascript.NSBrowserDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407634-browser
    browser_shouldEditItem(browser: cocoascript.NSBrowser, item: cocoascript.NSBrowserDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407594-browser
    browser_objectValueForItem(browser: cocoascript.NSBrowser, item: cocoascript.NSBrowserDelegate):cocoascript.NSBrowserDelegate;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407756-browser
    browser_setObjectValue_forItem(browser: cocoascript.NSBrowser, object: cocoascript.NSBrowserDelegate, item: cocoascript.NSBrowserDelegate):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407526-rootitemforbrowser
    rootItemForBrowser(browser: cocoascript.NSBrowser):cocoascript.NSBrowserDelegate;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407772-browser
    browser_previewViewControllerForLeafItem(browser: cocoascript.NSBrowser, item: cocoascript.NSBrowserDelegate):cocoascript.NSViewController;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407782-browser
    browser_headerViewControllerForItem(browser: cocoascript.NSBrowser, item: cocoascript.NSBrowserDelegate):cocoascript.NSViewController;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407666-browser
    browser_createRowsForColumn_inMatrix(sender: cocoascript.NSBrowser, column: cocoascript.NSInteger, matrix: cocoascript.NSMatrix):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407705-browser
    browser_willDisplayCell_atRow_column(sender: cocoascript.NSBrowser, cell: cocoascript.NSBrowserDelegate, row: cocoascript.NSInteger, column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407612-browser
    browser_didChangeLastColumn_toColumn(browser: cocoascript.NSBrowser, oldLastColumn: cocoascript.NSInteger, column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407721-browserwillscroll
    browserWillScroll(sender: cocoascript.NSBrowser):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407566-browserdidscroll
    browserDidScroll(sender: cocoascript.NSBrowser):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407768-browser
    browser_canDragRowsWithIndexes_inColumn_withEvent(browser: cocoascript.NSBrowser, rowIndexes: cocoascript.NSIndexSet, column: cocoascript.NSInteger, event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407598-browser
    browser_draggingImageForRowsWithIndexes_inColumn_withEvent_offset(browser: cocoascript.NSBrowser, rowIndexes: cocoascript.NSIndexSet, column: cocoascript.NSInteger, event: cocoascript.NSEvent, dragImageOffset: cocoascript.NSPointPointer):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407766-browser
    browser_validateDrop_proposedRow_column_dropOperation(browser: cocoascript.NSBrowser, info: cocoascript.NSDraggingInfo, row: cocoascript.NSInteger, column: cocoascript.NSInteger, dropOperation: cocoascript.NSBrowserDropOperation):cocoascript.NSDragOperation;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407737-browser
    browser_acceptDrop_atRow_column_dropOperation(browser: cocoascript.NSBrowser, info: cocoascript.NSDraggingInfo, row: cocoascript.NSInteger, column: cocoascript.NSInteger, dropOperation: cocoascript.NSBrowserDropOperation):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407657-browser
    browser_writeRowsWithIndexes_inColumn_toPasteboard(browser: cocoascript.NSBrowser, rowIndexes: cocoascript.NSIndexSet, column: cocoascript.NSInteger, pasteboard: cocoascript.NSPasteboard):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407624-browser
    browser_namesOfPromisedFilesDroppedAtDestination_forDraggedRowsWithIndexes_inColumn(browser: cocoascript.NSBrowser, dropDestination: cocoascript.NSURL, rowIndexes: cocoascript.NSIndexSet, column: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407557-browser
    browser_shouldSizeColumn_forUserResize_toWidth(browser: cocoascript.NSBrowser, columnIndex: cocoascript.NSInteger, forUserResize: cocoascript.BOOL, suggestedWidth: cocoascript.CGFloat):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407524-browser
    browser_sizeToFitWidthOfColumn(browser: cocoascript.NSBrowser, columnIndex: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407542-browsercolumnconfigurationdidcha
    browserColumnConfigurationDidChange(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407646-browser
    browser_heightOfRow_inColumn(browser: cocoascript.NSBrowser, row: cocoascript.NSInteger, columnIndex: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsbrowserdelegate/1407602-browser
    browser_shouldShowCellExpansionForRow_column(browser: cocoascript.NSBrowser, row: cocoascript.NSInteger, column: cocoascript.NSInteger):cocoascript.BOOL;
  }
}
