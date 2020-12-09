declare namespace cocoascript {
/**
 * A view controller that displays the standard interface for selecting a printer. 
 * doc://com.apple.documentation/documentation/uikit/uiprinterpickercontroller
 */
interface UIPrinterPickerController extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontroller/1620511-delegate
  delegate(): cocoascript.UIPrinterPickerControllerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontroller/1620514-presentanimated
  presentAnimated_completionHandler(animated: cocoascript.BOOL, completion: cocoascript.UIPrinterPickerCompletionHandler):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontroller/1620507-presentfrombarbuttonitem
  presentFromBarButtonItem_animated_completionHandler(item: cocoascript.UIBarButtonItem, animated: cocoascript.BOOL, completion: cocoascript.UIPrinterPickerCompletionHandler):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontroller/1620515-presentfromrect
  presentFromRect_inView_animated_completionHandler(rect: cocoascript.CGRect, view: cocoascript.UIView, animated: cocoascript.BOOL, completion: cocoascript.UIPrinterPickerCompletionHandler):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontroller/1620512-dismissanimated
  dismissAnimated(animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uiprinterpickercontroller/1620516-selectedprinter
  selectedPrinter(): cocoascript.UIPrinter;
  setSelectedPrinter(): void;
  // 
  alloc():cocoascript.UIPrinterPickerController;
  // 
  init():cocoascript.UIPrinterPickerController;
}
}
declare const UIPrinterPickerController: cocoascript.UIPrinterPickerController;

