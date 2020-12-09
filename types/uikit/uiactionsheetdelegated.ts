declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/uikit/uiactionsheetdelegate
 */
interface UIActionSheetDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiactionsheetdelegate/1622876-actionsheet
  actionSheet_clickedButtonAtIndex(actionSheet: cocoascript.UIActionSheet, buttonIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uiactionsheetdelegate/1622865-willpresentactionsheet
  willPresentActionSheet(actionSheet: cocoascript.UIActionSheet):void;
  // doc://com.apple.documentation/documentation/uikit/uiactionsheetdelegate/1622877-didpresentactionsheet
  didPresentActionSheet(actionSheet: cocoascript.UIActionSheet):void;
  // doc://com.apple.documentation/documentation/uikit/uiactionsheetdelegate/1622884-actionsheet
  actionSheet_willDismissWithButtonIndex(actionSheet: cocoascript.UIActionSheet, buttonIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uiactionsheetdelegate/1622879-actionsheet
  actionSheet_didDismissWithButtonIndex(actionSheet: cocoascript.UIActionSheet, buttonIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uiactionsheetdelegate/1622867-actionsheetcancel
  actionSheetCancel(actionSheet: cocoascript.UIActionSheet):void;
}
}

