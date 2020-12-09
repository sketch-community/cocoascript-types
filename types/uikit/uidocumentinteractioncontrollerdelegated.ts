declare namespace cocoascript {
/**
 * A set of methods you can implement to respond to messages from a document interaction controller. 
 * doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate
 */
interface UIDocumentInteractionControllerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616799-documentinteractioncontrollervie
  documentInteractionControllerViewControllerForPreview(controller: cocoascript.UIDocumentInteractionController):cocoascript.UIViewController;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616819-documentinteractioncontrollervie
  documentInteractionControllerViewForPreview(controller: cocoascript.UIDocumentInteractionController):cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616805-documentinteractioncontrollerrec
  documentInteractionControllerRectForPreview(controller: cocoascript.UIDocumentInteractionController):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616806-documentinteractioncontrollerwil
  documentInteractionControllerWillBeginPreview(controller: cocoascript.UIDocumentInteractionController):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616809-documentinteractioncontrollerdid
  documentInteractionControllerDidEndPreview(controller: cocoascript.UIDocumentInteractionController):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616822-documentinteractioncontrollerwil
  documentInteractionControllerWillPresentOptionsMenu(controller: cocoascript.UIDocumentInteractionController):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616803-documentinteractioncontrollerdid
  documentInteractionControllerDidDismissOptionsMenu(controller: cocoascript.UIDocumentInteractionController):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616818-documentinteractioncontrollerwil
  documentInteractionControllerWillPresentOpenInMenu(controller: cocoascript.UIDocumentInteractionController):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616826-documentinteractioncontrollerdid
  documentInteractionControllerDidDismissOpenInMenu(controller: cocoascript.UIDocumentInteractionController):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616825-documentinteractioncontroller
  documentInteractionController_willBeginSendingToApplication(controller: cocoascript.UIDocumentInteractionController, application: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616824-documentinteractioncontroller
  documentInteractionController_didEndSendingToApplication(controller: cocoascript.UIDocumentInteractionController, application: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616800-documentinteractioncontroller
  documentInteractionController_canPerformAction(controller: cocoascript.UIDocumentInteractionController, action: cocoascript.SEL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontrollerdelegate/1616823-documentinteractioncontroller
  documentInteractionController_performAction(controller: cocoascript.UIDocumentInteractionController, action: cocoascript.SEL):cocoascript.BOOL;
}
}

