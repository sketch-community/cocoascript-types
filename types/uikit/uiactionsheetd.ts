declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/uikit/uiactionsheet
   */
  interface UIActionSheet extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622875-initwithtitle
    initWithTitle_delegate_cancelButtonTitle_destructiveButtonTitle_otherButtonTitles(title: cocoascript.NSString, delegate: cocoascript.UIActionSheetDelegate, cancelButtonTitle: cocoascript.NSString, destructiveButtonTitle: cocoascript.NSString, otherButtonTitles: cocoascript.NSString):cocoascript.UIActionSheet;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622878-delegate
    delegate(): cocoascript.UIActionSheetDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622882-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622885-visible
    visible(): cocoascript.BOOL;
    setVisible(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622881-actionsheetstyle
    actionSheetStyle(): cocoascript.UIActionSheetStyle;
    setActionSheetStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622864-addbuttonwithtitle
    addButtonWithTitle(title: cocoascript.NSString):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622891-numberofbuttons
    numberOfButtons(): cocoascript.NSInteger;
    setNumberOfButtons(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622871-buttontitleatindex
    buttonTitleAtIndex(buttonIndex: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622866-cancelbuttonindex
    cancelButtonIndex(): cocoascript.NSInteger;
    setCancelButtonIndex(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622863-destructivebuttonindex
    destructiveButtonIndex(): cocoascript.NSInteger;
    setDestructiveButtonIndex(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622870-firstotherbuttonindex
    firstOtherButtonIndex(): cocoascript.NSInteger;
    setFirstOtherButtonIndex(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622872-showfromtabbar
    showFromTabBar(view: cocoascript.UITabBar):void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622874-showfromtoolbar
    showFromToolbar(view: cocoascript.UIToolbar):void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622886-showinview
    showInView(view: cocoascript.UIView):void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622869-showfrombarbuttonitem
    showFromBarButtonItem_animated(item: cocoascript.UIBarButtonItem, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622892-showfromrect
    showFromRect_inView_animated(rect: cocoascript.CGRect, view: cocoascript.UIView, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiactionsheet/1622888-dismisswithclickedbuttonindex
    dismissWithClickedButtonIndex_animated(buttonIndex: cocoascript.NSInteger, animated: cocoascript.BOOL):void;
    //
    alloc():cocoascript.UIActionSheet;
    //
    init():cocoascript.UIActionSheet;
  }
}

declare const UIActionSheet: cocoascript.UIActionSheet;
