declare namespace cocoascript {
  /**
   * An object that provides information relevant to a specific focus update from one view to another.
   * doc://com.apple.documentation/documentation/uikit/uifocusupdatecontext
   */
  interface UIFocusUpdateContext extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uifocusupdatecontext/1616839-previouslyfocusedview
    previouslyFocusedView(): cocoascript.UIView;
    setPreviouslyFocusedView(): void;
    // doc://com.apple.documentation/documentation/uikit/uifocusupdatecontext/1616843-nextfocusedview
    nextFocusedView(): cocoascript.UIView;
    setNextFocusedView(): void;
    // doc://com.apple.documentation/documentation/uikit/uifocusupdatecontext/1616834-focusheading
    focusHeading(): cocoascript.UIFocusHeading;
    setFocusHeading(): void;
    // doc://com.apple.documentation/documentation/uikit/uifocusupdatecontext/1648962-previouslyfocuseditem
    previouslyFocusedItem(): cocoascript.UIFocusItem;
    setPreviouslyFocusedItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uifocusupdatecontext/1648967-nextfocuseditem
    nextFocusedItem(): cocoascript.UIFocusItem;
    setNextFocusedItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uifocusupdateanimationcoordinatorkey
    UIFocusUpdateAnimationCoordinatorKey(): cocoascript.const;
    setUIFocusUpdateAnimationCoordinatorKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uifocusupdatecontextkey
    UIFocusUpdateContextKey(): cocoascript.const;
    setUIFocusUpdateContextKey(): void;
    //
    alloc():cocoascript.UIFocusUpdateContext;
    //
    init():cocoascript.UIFocusUpdateContext;
  }
}

declare const UIFocusUpdateContext: cocoascript.UIFocusUpdateContext;
