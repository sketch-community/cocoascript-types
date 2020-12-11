declare namespace cocoascript {
  /**
   * A context object that provides information relevant to a specific focus update from one view to another.
   * doc://com.apple.documentation/documentation/uikit/uitableviewfocusupdatecontext
   */
  interface UITableViewFocusUpdateContext extends UIFocusUpdateContext {
    // doc://com.apple.documentation/documentation/uikit/uitableviewfocusupdatecontext/1614930-previouslyfocusedindexpath
    previouslyFocusedIndexPath(): cocoascript.NSIndexPath;
    setPreviouslyFocusedIndexPath(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewfocusupdatecontext/1614919-nextfocusedindexpath
    nextFocusedIndexPath(): cocoascript.NSIndexPath;
    setNextFocusedIndexPath(): void;
    //
    alloc():cocoascript.UITableViewFocusUpdateContext;
    //
    init():cocoascript.UITableViewFocusUpdateContext;
  }
}

declare const UITableViewFocusUpdateContext: cocoascript.UITableViewFocusUpdateContext;
