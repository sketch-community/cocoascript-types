declare namespace cocoascript {
  /**
   * A custom item in the editing menu managed by the menu controller.
   * doc://com.apple.documentation/documentation/uikit/uimenuitem
   */
  interface UIMenuItem extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uimenuitem/1622824-initwithtitle
    initWithTitle_action(title: cocoascript.NSString, action: cocoascript.SEL):cocoascript.UIMenuItem;
    // doc://com.apple.documentation/documentation/uikit/uimenuitem/1622827-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uimenuitem/1622817-action
    action(): cocoascript.SEL;
    setAction(): void;
    //
    alloc():cocoascript.UIMenuItem;
    //
    init():cocoascript.UIMenuItem;
  }
}

declare const UIMenuItem: cocoascript.UIMenuItem;
