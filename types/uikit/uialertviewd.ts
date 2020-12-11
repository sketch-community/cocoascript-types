declare namespace cocoascript {
  /**
   * In apps that run in versions of iOS prior to iOS 8, use the
   * doc://com.apple.documentation/documentation/uikit/uialertview
   */
  interface UIAlertView extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620779-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIAlertView;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620759-initwithframe
    initWithFrame(frame: cocoascript.CGRect):cocoascript.UIAlertView;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620765-initwithtitle
    initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles(title: cocoascript.NSString, message: cocoascript.NSString, delegate: cocoascript.UIAlertView, cancelButtonTitle: cocoascript.NSString, otherButtonTitles: cocoascript.NSString):cocoascript.UIAlertView;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620769-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620780-alertviewstyle
    alertViewStyle(): cocoascript.UIAlertViewStyle;
    setAlertViewStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620768-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620758-message
    message(): cocoascript.NSString;
    setMessage(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620764-visible
    visible(): cocoascript.BOOL;
    setVisible(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620761-addbuttonwithtitle
    addButtonWithTitle(title: cocoascript.NSString):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620753-numberofbuttons
    numberOfButtons(): cocoascript.NSInteger;
    setNumberOfButtons(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620756-buttontitleatindex
    buttonTitleAtIndex(buttonIndex: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620757-textfieldatindex
    textFieldAtIndex(textFieldIndex: cocoascript.NSInteger):cocoascript.UITextField;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620766-cancelbuttonindex
    cancelButtonIndex(): cocoascript.NSInteger;
    setCancelButtonIndex(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620771-firstotherbuttonindex
    firstOtherButtonIndex(): cocoascript.NSInteger;
    setFirstOtherButtonIndex(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620751-show
    show():void;
    // doc://com.apple.documentation/documentation/uikit/uialertview/1620754-dismisswithclickedbuttonindex
    dismissWithClickedButtonIndex_animated(buttonIndex: cocoascript.NSInteger, animated: cocoascript.BOOL):void;
    //
    alloc():cocoascript.UIAlertView;
    //
    init():cocoascript.UIAlertView;
  }
}

declare const UIAlertView: cocoascript.UIAlertView;
