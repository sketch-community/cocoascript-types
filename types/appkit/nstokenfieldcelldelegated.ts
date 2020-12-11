declare namespace cocoascript {
  /**
   * A set of optional methods implemented by delegates of
   * doc://com.apple.documentation/documentation/appkit/nstokenfieldcelldelegate
   */
  interface NSTokenFieldCellDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstokenfieldcelldelegate/1523804-tokenfieldcell
    tokenFieldCell_displayStringForRepresentedObject(tokenFieldCell: cocoascript.NSTokenFieldCell, representedObject: cocoascript.NSTokenFieldCellDelegate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nstokenfieldcelldelegate/1523829-tokenfieldcell
    tokenFieldCell_styleForRepresentedObject(tokenFieldCell: cocoascript.NSTokenFieldCell, representedObject: cocoascript.NSTokenFieldCellDelegate):cocoascript.NSTokenStyle;
    // doc://com.apple.documentation/documentation/appkit/nstokenfieldcelldelegate/1523818-tokenfieldcell
    tokenFieldCell_completionsForSubstring_indexOfToken_indexOfSelectedItem(tokenFieldCell: cocoascript.NSTokenFieldCell, substring: cocoascript.NSString, tokenIndex: cocoascript.NSInteger, selectedIndex: cocoascript.NSInteger):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nstokenfieldcelldelegate/1523824-tokenfieldcell
    tokenFieldCell_editingStringForRepresentedObject(tokenFieldCell: cocoascript.NSTokenFieldCell, representedObject: cocoascript.NSTokenFieldCellDelegate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nstokenfieldcelldelegate/1523795-tokenfieldcell
    tokenFieldCell_representedObjectForEditingString(tokenFieldCell: cocoascript.NSTokenFieldCell, editingString: cocoascript.NSString):cocoascript.NSTokenFieldCellDelegate;
    // doc://com.apple.documentation/documentation/appkit/nstokenfieldcelldelegate/1523823-tokenfieldcell
    tokenFieldCell_shouldAddObjects_atIndex(tokenFieldCell: cocoascript.NSTokenFieldCell, tokens: cocoascript.NSArray, index: cocoascript.NSUInteger):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nstokenfieldcelldelegate/1523807-tokenfieldcell
    tokenFieldCell_readFromPasteboard(tokenFieldCell: cocoascript.NSTokenFieldCell, pboard: cocoascript.NSPasteboard):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nstokenfieldcelldelegate/1523803-tokenfieldcell
    tokenFieldCell_writeRepresentedObjects_toPasteboard(tokenFieldCell: cocoascript.NSTokenFieldCell, objects: cocoascript.NSArray, pboard: cocoascript.NSPasteboard):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstokenfieldcelldelegate/1523826-tokenfieldcell
    tokenFieldCell_hasMenuForRepresentedObject(tokenFieldCell: cocoascript.NSTokenFieldCell, representedObject: cocoascript.NSTokenFieldCellDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstokenfieldcelldelegate/1523796-tokenfieldcell
    tokenFieldCell_menuForRepresentedObject(tokenFieldCell: cocoascript.NSTokenFieldCell, representedObject: cocoascript.NSTokenFieldCellDelegate):cocoascript.NSMenu;
  }
}
