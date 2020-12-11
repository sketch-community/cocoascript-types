declare namespace cocoascript {
  /**
   * Objects used to create true 3D layer hierarchies, rather than the flattened hierarchy rendering model used by other
   * doc://com.apple.documentation/documentation/quartzcore/catransformlayer
   */
  interface CATransformLayer extends CALayer {
    //
    alloc():cocoascript.CATransformLayer;
    //
    init():cocoascript.CATransformLayer;
  }
}

declare const CATransformLayer: cocoascript.CATransformLayer;
