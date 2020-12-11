declare namespace cocoascript {
  /**
   * An object that provides a constraint-based layout manager.
   * doc://com.apple.documentation/documentation/quartzcore/caconstraintlayoutmanager
   */
  interface CAConstraintLayoutManager extends NSObject {
    //
    alloc():cocoascript.CAConstraintLayoutManager;
    //
    init():cocoascript.CAConstraintLayoutManager;
  }
}

declare const CAConstraintLayoutManager: cocoascript.CAConstraintLayoutManager;
