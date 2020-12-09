declare namespace cocoascript {
/**
 * A set of optional methods implemented by delegates of 
 * doc://com.apple.documentation/documentation/appkit/nstokenfielddelegate
 */
interface NSTokenFieldDelegate extends NSTextFieldDelegate {
  // doc://com.apple.documentation/documentation/appkit/nstokenfielddelegate/1526020-tokenfield
  tokenField_displayStringForRepresentedObject(tokenField: cocoascript.NSTokenField, representedObject: cocoascript.NSTokenFieldDelegate):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nstokenfielddelegate/1530203-tokenfield
  tokenField_styleForRepresentedObject(tokenField: cocoascript.NSTokenField, representedObject: cocoascript.NSTokenFieldDelegate):cocoascript.NSTokenStyle;
  // doc://com.apple.documentation/documentation/appkit/nstokenfielddelegate/1532474-tokenfield
  tokenField_completionsForSubstring_indexOfToken_indexOfSelectedItem(tokenField: cocoascript.NSTokenField, substring: cocoascript.NSString, tokenIndex: cocoascript.NSInteger, selectedIndex: cocoascript.NSInteger):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/appkit/nstokenfielddelegate/1524432-tokenfield
  tokenField_editingStringForRepresentedObject(tokenField: cocoascript.NSTokenField, representedObject: cocoascript.NSTokenFieldDelegate):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nstokenfielddelegate/1527909-tokenfield
  tokenField_representedObjectForEditingString(tokenField: cocoascript.NSTokenField, editingString: cocoascript.NSString):cocoascript.NSTokenFieldDelegate;
  // doc://com.apple.documentation/documentation/appkit/nstokenfielddelegate/1524376-tokenfield
  tokenField_shouldAddObjects_atIndex(tokenField: cocoascript.NSTokenField, tokens: cocoascript.NSArray, index: cocoascript.NSUInteger):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/appkit/nstokenfielddelegate/1529534-tokenfield
  tokenField_readFromPasteboard(tokenField: cocoascript.NSTokenField, pboard: cocoascript.NSPasteboard):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/appkit/nstokenfielddelegate/1528190-tokenfield
  tokenField_writeRepresentedObjects_toPasteboard(tokenField: cocoascript.NSTokenField, objects: cocoascript.NSArray, pboard: cocoascript.NSPasteboard):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstokenfielddelegate/1533494-tokenfield
  tokenField_hasMenuForRepresentedObject(tokenField: cocoascript.NSTokenField, representedObject: cocoascript.NSTokenFieldDelegate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstokenfielddelegate/1528750-tokenfield
  tokenField_menuForRepresentedObject(tokenField: cocoascript.NSTokenField, representedObject: cocoascript.NSTokenFieldDelegate):cocoascript.NSMenu;
}
}

