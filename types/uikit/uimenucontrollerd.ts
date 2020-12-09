declare namespace cocoascript {
/**
 * The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.
 * doc://com.apple.documentation/documentation/uikit/uimenucontroller
 */
interface UIMenuController extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uimenucontroller/1622831-sharedmenucontroller
  sharedMenuController(): cocoascript.UIMenuController;
  setSharedMenuController(): void;
  // doc://com.apple.documentation/documentation/uikit/uimenucontroller/3044217-showmenufromview
  showMenuFromView_rect(targetView: cocoascript.UIView, targetRect: cocoascript.CGRect):void;
  // doc://com.apple.documentation/documentation/uikit/uimenucontroller/3044216-hidemenufromview
  hideMenuFromView(targetView: cocoascript.UIView):void;
  // doc://com.apple.documentation/documentation/uikit/uimenucontroller/3044215-hidemenu
  hideMenu():void;
  // doc://com.apple.documentation/documentation/uikit/uimenucontroller/1622833-setmenuvisible
  menuVisible(): cocoascript.BOOL;
  setMenuVisible(): void;
  // doc://com.apple.documentation/documentation/uikit/uimenucontroller/1622819-setmenuvisible
  setMenuVisible_animated(menuVisible: cocoascript.BOOL, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uimenucontroller/1622822-menuframe
  menuFrame(): cocoascript.CGRect;
  setMenuFrame(): void;
  // doc://com.apple.documentation/documentation/uikit/uimenucontroller/1622821-arrowdirection
  arrowDirection(): cocoascript.UIMenuControllerArrowDirection;
  setArrowDirection(): void;
  // doc://com.apple.documentation/documentation/uikit/uimenucontroller/1622812-settargetrect
  setTargetRect_inView(targetRect: cocoascript.CGRect, targetView: cocoascript.UIView):void;
  // doc://com.apple.documentation/documentation/uikit/uimenucontroller/1622815-update
  update():void;
  // doc://com.apple.documentation/documentation/uikit/uimenucontroller/1622811-menuitems
  menuItems(): cocoascript.UIMenuItem;
  setMenuItems(): void;
  // 
  alloc():cocoascript.UIMenuController;
  // 
  init():cocoascript.UIMenuController;
}
}
declare const UIMenuController: cocoascript.UIMenuController;

