declare namespace cocoascript {
  /**
   * An object that provides a list view for displaying content in a macOS Today widget.
   * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller
   */
  interface NCWidgetListViewController extends NSViewController {
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476044-delegate
    delegate(): cocoascript.NCWidgetListViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476057-contents
    contents(): cocoascript.id;
    setContents(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476053-rowforviewcontroller
    rowForViewController(viewController: cocoascript.NSViewController):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476061-viewcontrolleratrow
    viewControllerAtRow_makeIfNecessary(row: cocoascript.NSUInteger, makeIfNecesary: cocoascript.BOOL):cocoascript.NSViewController;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476034-minimumvisiblerowcount
    minimumVisibleRowCount(): cocoascript.NSUInteger;
    setMinimumVisibleRowCount(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476043-hasdividerlines
    hasDividerLines(): cocoascript.BOOL;
    setHasDividerLines(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476039-editing
    editing(): cocoascript.BOOL;
    setEditing(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476041-showsaddbuttonwhenediting
    showsAddButtonWhenEditing(): cocoascript.BOOL;
    setShowsAddButtonWhenEditing(): void;
    //
    alloc():cocoascript.NCWidgetListViewController;
    //
    init():cocoascript.NCWidgetListViewController;
  }
}

declare const NCWidgetListViewController: cocoascript.NCWidgetListViewController;
