declare namespace cocoascript {
  /**
   * A mechanism for grouping multiple layer-tree operations into atomic updates to the render tree.
   * doc://com.apple.documentation/documentation/quartzcore/catransaction
   */
  interface CATransaction extends NSObject {
    //
    alloc():cocoascript.CATransaction;
    //
    init():cocoascript.CATransaction;
  }
}

declare const CATransaction: cocoascript.CATransaction;
