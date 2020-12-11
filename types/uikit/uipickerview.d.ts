declare namespace cocoascript {
  /**
   * A view that uses a spinning-wheel or slot-machine metaphor to show one or more sets of values.
   * doc://com.apple.documentation/documentation/uikit/uipickerview
   */
  interface UIPickerView extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uipickerview/1614370-datasource
    dataSource(): cocoascript.UIPickerViewDataSource;
    setDataSource(): void;
    // doc://com.apple.documentation/documentation/uikit/uipickerview/1614379-delegate
    delegate(): cocoascript.UIPickerViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uipickerview/1614368-numberofcomponents
    numberOfComponents(): cocoascript.NSInteger;
    setNumberOfComponents(): void;
    // doc://com.apple.documentation/documentation/uikit/uipickerview/1614381-numberofrowsincomponent
    numberOfRowsInComponent(component: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uipickerview/1614374-rowsizeforcomponent
    rowSizeForComponent(component: cocoascript.NSInteger):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/uikit/uipickerview/1614380-reloadallcomponents
    reloadAllComponents():void;
    // doc://com.apple.documentation/documentation/uikit/uipickerview/1614385-reloadcomponent
    reloadComponent(component: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/uikit/uipickerview/1614382-selectrow
    selectRow_inComponent_animated(row: cocoascript.NSInteger, component: cocoascript.NSInteger, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uipickerview/1614369-selectedrowincomponent
    selectedRowInComponent(component: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uipickerview/1614372-viewforrow
    viewForRow_forComponent(row: cocoascript.NSInteger, component: cocoascript.NSInteger):cocoascript.UIView;
    // doc://com.apple.documentation/documentation/uikit/uipickerview/1614373-showsselectionindicator
    showsSelectionIndicator(): cocoascript.BOOL;
    setShowsSelectionIndicator(): void;
    //
    alloc():cocoascript.UIPickerView;
    //
    init():cocoascript.UIPickerView;
  }
}

declare const UIPickerView: cocoascript.UIPickerView;
