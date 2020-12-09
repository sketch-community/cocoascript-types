declare namespace cocoascript {
/**
 * An object that coordinates text formatting using the standard Mac font panel.
 * doc://com.apple.documentation/documentation/uikit/uitextformattingcoordinator
 */
interface UITextFormattingCoordinator extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextformattingcoordinator/3261464-initwithwindowscene
  initWithWindowScene(windowScene: cocoascript.UIWindowScene):cocoascript.UITextFormattingCoordinator;
  // doc://com.apple.documentation/documentation/uikit/uitextformattingcoordinator/3261463-fontpanelvisible
  fontPanelVisible(): cocoascript.BOOL;
  setFontPanelVisible(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextformattingcoordinator/3261465-setselectedattributes
  setSelectedAttributes_isMultiple(attributes: cocoascript.UITextFormattingCoordinator, flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uitextformattingcoordinator/3261462-delegate
  delegate(): cocoascript.UITextFormattingCoordinatorDelegate;
  setDelegate(): void;
  // 
  alloc():cocoascript.UITextFormattingCoordinator;
  // 
  init():cocoascript.UITextFormattingCoordinator;
}
}
declare const UITextFormattingCoordinator: cocoascript.UITextFormattingCoordinator;

