declare namespace cocoascript {
  /**
   * A set of methods for managing the presentation and dismissal of a printer picker interface.
   * doc://com.apple.documentation/documentation/uikit/uiprinterpickercontrollerdelegate
   */
  interface UIPrinterPickerControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontrollerdelegate/1620503-printerpickercontroller
    printerPickerController_shouldShowPrinter(printerPickerController: cocoascript.UIPrinterPickerController, printer: cocoascript.UIPrinter):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontrollerdelegate/1620504-printerpickercontrollerdidselect
    printerPickerControllerDidSelectPrinter(printerPickerController: cocoascript.UIPrinterPickerController):void;
    // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontrollerdelegate/1620518-printerpickercontrollerparentvie
    printerPickerControllerParentViewController(printerPickerController: cocoascript.UIPrinterPickerController):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontrollerdelegate/1620513-printerpickercontrollerwillprese
    printerPickerControllerWillPresent(printerPickerController: cocoascript.UIPrinterPickerController):void;
    // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontrollerdelegate/1620508-printerpickercontrollerdidpresen
    printerPickerControllerDidPresent(printerPickerController: cocoascript.UIPrinterPickerController):void;
    // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontrollerdelegate/1620519-printerpickercontrollerwilldismi
    printerPickerControllerWillDismiss(printerPickerController: cocoascript.UIPrinterPickerController):void;
    // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontrollerdelegate/1620510-printerpickercontrollerdiddismis
    printerPickerControllerDidDismiss(printerPickerController: cocoascript.UIPrinterPickerController):void;
  }
}
