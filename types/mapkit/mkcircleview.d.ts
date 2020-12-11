declare namespace cocoascript {
  /**
   * Provides the visual representation for an
   * doc://com.apple.documentation/documentation/mapkit/mkcircleview
   */
  interface MKCircleView extends MKOverlayPathView {
    // doc://com.apple.documentation/documentation/mapkit/mkcircleview/1623524-initwithcircle
    initWithCircle(circle: cocoascript.MKCircle):cocoascript.MKCircleView;
    // doc://com.apple.documentation/documentation/mapkit/mkcircleview/1623525-circle
    circle(): cocoascript.MKCircle;
    setCircle(): void;
    //
    alloc():cocoascript.MKCircleView;
    //
    init():cocoascript.MKCircleView;
  }
}

declare const MKCircleView: cocoascript.MKCircleView;
