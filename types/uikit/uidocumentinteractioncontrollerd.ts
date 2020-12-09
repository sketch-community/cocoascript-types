declare namespace cocoascript {
/**
 * A view controller that previews, opens, or prints files whose file format cannot be handled directly by your app. 
 * doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller
 */
interface UIDocumentInteractionController extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616812-delegate
  delegate(): cocoascript.UIDocumentInteractionControllerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616828-presentpreviewanimated
  presentPreviewAnimated(animated: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616815-dismisspreviewanimated
  dismissPreviewAnimated(animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616814-presentoptionsmenufromrect
  presentOptionsMenuFromRect_inView_animated(rect: cocoascript.CGRect, view: cocoascript.UIView, animated: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616811-presentoptionsmenufrombarbuttoni
  presentOptionsMenuFromBarButtonItem_animated(item: cocoascript.UIBarButtonItem, animated: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616807-presentopeninmenufromrect
  presentOpenInMenuFromRect_inView_animated(rect: cocoascript.CGRect, view: cocoascript.UIView, animated: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616827-presentopeninmenufrombarbuttonit
  presentOpenInMenuFromBarButtonItem_animated(item: cocoascript.UIBarButtonItem, animated: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616816-dismissmenuanimated
  dismissMenuAnimated(animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616804-url
  URL(): cocoascript.NSURL;
  setURL(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616802-uti
  UTI(): cocoascript.NSString;
  setUTI(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616810-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616801-icons
  icons(): cocoascript.UIImage;
  setIcons(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616820-annotation
  annotation(): cocoascript.id;
  setAnnotation(): void;
  // doc://com.apple.documentation/documentation/uikit/uidocumentinteractioncontroller/1616817-gesturerecognizers
  gestureRecognizers(): cocoascript.UIGestureRecognizer;
  setGestureRecognizers(): void;
  // 
  alloc():cocoascript.UIDocumentInteractionController;
  // 
  init():cocoascript.UIDocumentInteractionController;
}
}
declare const UIDocumentInteractionController: cocoascript.UIDocumentInteractionController;

