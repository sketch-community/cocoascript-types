declare namespace cocoascript {
/**
 * For apps that run in versions of iOS prior to iOS 8, the 
 * doc://com.apple.documentation/documentation/uikit/uialertviewdelegate
 */
interface UIAlertViewDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uialertviewdelegate/1620752-alertview
  alertView_clickedButtonAtIndex(alertView: cocoascript.UIAlertView, buttonIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uialertviewdelegate/1620774-alertviewshouldenablefirstotherb
  alertViewShouldEnableFirstOtherButton(alertView: cocoascript.UIAlertView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uialertviewdelegate/1620767-willpresentalertview
  willPresentAlertView(alertView: cocoascript.UIAlertView):void;
  // doc://com.apple.documentation/documentation/uikit/uialertviewdelegate/1620750-didpresentalertview
  didPresentAlertView(alertView: cocoascript.UIAlertView):void;
  // doc://com.apple.documentation/documentation/uikit/uialertviewdelegate/1620763-alertview
  alertView_willDismissWithButtonIndex(alertView: cocoascript.UIAlertView, buttonIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uialertviewdelegate/1620772-alertview
  alertView_didDismissWithButtonIndex(alertView: cocoascript.UIAlertView, buttonIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uialertviewdelegate/1620778-alertviewcancel
  alertViewCancel(alertView: cocoascript.UIAlertView):void;
}
}

