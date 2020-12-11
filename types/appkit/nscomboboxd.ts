declare namespace cocoascript {
  /**
   * A view that displays a list of values in a pop-up menu where the user selects a value or types in a custom value.
   * doc://com.apple.documentation/documentation/appkit/nscombobox
   */
  interface NSComboBox extends NSTextField {
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436705-hasverticalscroller
    hasVerticalScroller(): cocoascript.BOOL;
    setHasVerticalScroller(): void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436771-intercellspacing
    intercellSpacing(): cocoascript.NSSize;
    setIntercellSpacing(): void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436711-buttonbordered
    buttonBordered(): cocoascript.BOOL;
    setButtonBordered(): void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436767-itemheight
    itemHeight(): cocoascript.CGFloat;
    setItemHeight(): void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436741-numberofvisibleitems
    numberOfVisibleItems(): cocoascript.NSInteger;
    setNumberOfVisibleItems(): void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436729-datasource
    dataSource(): cocoascript.NSComboBoxDataSource;
    setDataSource(): void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436727-usesdatasource
    usesDataSource(): cocoascript.BOOL;
    setUsesDataSource(): void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436751-additemswithobjectvalues
    addItemsWithObjectValues(objects: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436739-additemwithobjectvalue
    addItemWithObjectValue(object: cocoascript.NSComboBox):void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436703-insertitemwithobjectvalue
    insertItemWithObjectValue_atIndex(object: cocoascript.NSComboBox, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436709-objectvalues
    objectValues(): cocoascript.NSArray;
    setObjectValues(): void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436721-removeallitems
    removeAllItems():void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436761-removeitematindex
    removeItemAtIndex(index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436759-removeitemwithobjectvalue
    removeItemWithObjectValue(object: cocoascript.NSComboBox):void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436747-numberofitems
    numberOfItems(): cocoascript.NSInteger;
    setNumberOfItems(): void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436707-indexofitemwithobjectvalue
    indexOfItemWithObjectValue(object: cocoascript.NSComboBox):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436731-itemobjectvalueatindex
    itemObjectValueAtIndex(index: cocoascript.NSInteger):cocoascript.NSComboBox;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436723-notenumberofitemschanged
    noteNumberOfItemsChanged():void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436717-reloaddata
    reloadData():void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436778-scrollitematindextotop
    scrollItemAtIndexToTop(index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436776-scrollitematindextovisible
    scrollItemAtIndexToVisible(index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436699-deselectitematindex
    deselectItemAtIndex(index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436701-indexofselecteditem
    indexOfSelectedItem(): cocoascript.NSInteger;
    setIndexOfSelectedItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436743-objectvalueofselecteditem
    objectValueOfSelectedItem(): cocoascript.id;
    setObjectValueOfSelectedItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436735-selectitematindex
    selectItemAtIndex(index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436737-selectitemwithobjectvalue
    selectItemWithObjectValue(object: cocoascript.NSComboBox):void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436749-completes
    completes(): cocoascript.BOOL;
    setCompletes(): void;
    // doc://com.apple.documentation/documentation/appkit/nscombobox/1436697-delegate
    delegate(): cocoascript.NSComboBoxDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nscomboboxselectiondidchangenotification
    NSComboBoxSelectionDidChangeNotification(): cocoascript.NSNotificationName;
    setNSComboBoxSelectionDidChangeNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nscomboboxselectionischangingnotification
    NSComboBoxSelectionIsChangingNotification(): cocoascript.NSNotificationName;
    setNSComboBoxSelectionIsChangingNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nscomboboxwilldismissnotification
    NSComboBoxWillDismissNotification(): cocoascript.NSNotificationName;
    setNSComboBoxWillDismissNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nscomboboxwillpopupnotification
    NSComboBoxWillPopUpNotification(): cocoascript.NSNotificationName;
    setNSComboBoxWillPopUpNotification(): void;
    //
    alloc():cocoascript.NSComboBox;
    //
    init():cocoascript.NSComboBox;
  }
}

declare const NSComboBox: cocoascript.NSComboBox;
