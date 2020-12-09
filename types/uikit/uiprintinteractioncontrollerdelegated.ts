declare namespace cocoascript {
/**
 * An optional set of methods that the delegate of the shared print-interaction controller implements.
 * doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontrollerdelegate
 */
interface UIPrintInteractionControllerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontrollerdelegate/1618162-printinteractioncontrollerparent
  printInteractionControllerParentViewController(printInteractionController: cocoascript.UIPrintInteractionController):cocoascript.UIViewController;
  // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontrollerdelegate/1618160-printinteractioncontroller
  printInteractionController_choosePaper(printInteractionController: cocoascript.UIPrintInteractionController, paperList: cocoascript.UIPrintPaper):cocoascript.UIPrintPaper;
  // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontrollerdelegate/1618179-printinteractioncontroller
  printInteractionController_cutLengthForPaper(printInteractionController: cocoascript.UIPrintInteractionController, paper: cocoascript.UIPrintPaper):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontrollerdelegate/1618178-printinteractioncontroller
  printInteractionController_chooseCutterBehavior(printInteractionController: cocoascript.UIPrintInteractionController, availableBehaviors: cocoascript.NSArray):cocoascript.UIPrinterCutterBehavior;
  // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontrollerdelegate/1618168-printinteractioncontrollerwillpr
  printInteractionControllerWillPresentPrinterOptions(printInteractionController: cocoascript.UIPrintInteractionController):void;
  // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontrollerdelegate/1618158-printinteractioncontrollerdidpre
  printInteractionControllerDidPresentPrinterOptions(printInteractionController: cocoascript.UIPrintInteractionController):void;
  // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontrollerdelegate/1618151-printinteractioncontrollerwilldi
  printInteractionControllerWillDismissPrinterOptions(printInteractionController: cocoascript.UIPrintInteractionController):void;
  // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontrollerdelegate/1618175-printinteractioncontrollerdiddis
  printInteractionControllerDidDismissPrinterOptions(printInteractionController: cocoascript.UIPrintInteractionController):void;
  // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontrollerdelegate/1618185-printinteractioncontrollerwillst
  printInteractionControllerWillStartJob(printInteractionController: cocoascript.UIPrintInteractionController):void;
  // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontrollerdelegate/1618154-printinteractioncontrollerdidfin
  printInteractionControllerDidFinishJob(printInteractionController: cocoascript.UIPrintInteractionController):void;
}
}

