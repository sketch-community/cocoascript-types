declare namespace cocoascript {
/**
 * The user interface of a combo box.
 * doc://com.apple.documentation/documentation/appkit/nscomboboxcell
 */
interface NSComboBoxCell extends NSTextFieldCell {
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410252-hasverticalscroller
  hasVerticalScroller(): cocoascript.BOOL;
  setHasVerticalScroller(): void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410246-buttonbordered
  buttonBordered(): cocoascript.BOOL;
  setButtonBordered(): void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410270-intercellspacing
  intercellSpacing(): cocoascript.NSSize;
  setIntercellSpacing(): void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410306-itemheight
  itemHeight(): cocoascript.CGFloat;
  setItemHeight(): void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410298-numberofvisibleitems
  numberOfVisibleItems(): cocoascript.NSInteger;
  setNumberOfVisibleItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410266-datasource
  dataSource(): cocoascript.NSComboBoxCellDataSource;
  setDataSource(): void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410254-usesdatasource
  usesDataSource(): cocoascript.BOOL;
  setUsesDataSource(): void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410300-additemswithobjectvalues
  addItemsWithObjectValues(objects: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410286-additemwithobjectvalue
  addItemWithObjectValue(object: cocoascript.NSComboBoxCell):void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410297-insertitemwithobjectvalue
  insertItemWithObjectValue_atIndex(object: cocoascript.NSComboBoxCell, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410304-objectvalues
  objectValues(): cocoascript.NSArray;
  setObjectValues(): void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410290-removeallitems
  removeAllItems():void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410276-removeitematindex
  removeItemAtIndex(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410295-removeitemwithobjectvalue
  removeItemWithObjectValue(object: cocoascript.NSComboBoxCell):void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410260-numberofitems
  numberOfItems(): cocoascript.NSInteger;
  setNumberOfItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410283-indexofitemwithobjectvalue
  indexOfItemWithObjectValue(object: cocoascript.NSComboBoxCell):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410255-itemobjectvalueatindex
  itemObjectValueAtIndex(index: cocoascript.NSInteger):cocoascript.NSComboBoxCell;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410268-notenumberofitemschanged
  noteNumberOfItemsChanged():void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410248-reloaddata
  reloadData():void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410288-scrollitematindextotop
  scrollItemAtIndexToTop(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410272-scrollitematindextovisible
  scrollItemAtIndexToVisible(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410282-deselectitematindex
  deselectItemAtIndex(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410274-indexofselecteditem
  indexOfSelectedItem(): cocoascript.NSInteger;
  setIndexOfSelectedItem(): void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410278-objectvalueofselecteditem
  objectValueOfSelectedItem(): cocoascript.id;
  setObjectValueOfSelectedItem(): void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410292-selectitematindex
  selectItemAtIndex(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410280-selectitemwithobjectvalue
  selectItemWithObjectValue(object: cocoascript.NSComboBoxCell):void;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410264-completedstring
  completedString(string: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxcell/1410262-completes
  completes(): cocoascript.BOOL;
  setCompletes(): void;
  // 
  alloc():cocoascript.NSComboBoxCell;
  // 
  init():cocoascript.NSComboBoxCell;
}
}
declare const NSComboBoxCell: cocoascript.NSComboBoxCell;

