declare namespace cocoascript {
/**
 * An interaction object that you use to display relevant actions for your content. 
 * doc://com.apple.documentation/documentation/uikit/uicontextmenuinteraction
 */
interface UIContextMenuInteraction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteraction/3295926-initwithdelegate
  initWithDelegate(delegate: cocoascript.UIContextMenuInteractionDelegate):cocoascript.UIContextMenuInteraction;
  // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteraction/3295925-delegate
  delegate(): cocoascript.UIContextMenuInteractionDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteraction/3295927-locationinview
  locationInView(view: cocoascript.UIView):cocoascript.CGPoint;
  // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteraction/3601209-menuappearance
  menuAppearance(): cocoascript.UIContextMenuInteractionAppearance;
  setMenuAppearance(): void;
  // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteraction/3601208-dismissmenu
  dismissMenu():void;
  // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteraction/3601210-updatevisiblemenuwithblock
  updateVisibleMenuWithBlock(block: cocoascript.UIMenu):void;
  // 
  alloc():cocoascript.UIContextMenuInteraction;
  // 
  init():cocoascript.UIContextMenuInteraction;
}
}
declare const UIContextMenuInteraction: cocoascript.UIContextMenuInteraction;

