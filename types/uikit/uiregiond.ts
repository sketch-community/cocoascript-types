declare namespace cocoascript {
  /**
   * A shape for use in UIKit Dynamics.
   * doc://com.apple.documentation/documentation/uikit/uiregion
   */
  interface UIRegion extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiregion/1621896-infiniteregion
    infiniteRegion(): cocoascript.UIRegion;
    setInfiniteRegion(): void;
    // doc://com.apple.documentation/documentation/uikit/uiregion/1621891-initwithsize
    initWithSize(size: cocoascript.CGSize):cocoascript.UIRegion;
    // doc://com.apple.documentation/documentation/uikit/uiregion/1621889-initwithradius
    initWithRadius(radius: cocoascript.CGFloat):cocoascript.UIRegion;
    // doc://com.apple.documentation/documentation/uikit/uiregion/1621894-inverseregion
    inverseRegion():cocoascript.UIRegion;
    // doc://com.apple.documentation/documentation/uikit/uiregion/1621892-regionbydifferencefromregion
    regionByDifferenceFromRegion(region: cocoascript.UIRegion):cocoascript.UIRegion;
    // doc://com.apple.documentation/documentation/uikit/uiregion/1621895-regionbyintersectionwithregion
    regionByIntersectionWithRegion(region: cocoascript.UIRegion):cocoascript.UIRegion;
    // doc://com.apple.documentation/documentation/uikit/uiregion/1621890-regionbyunionwithregion
    regionByUnionWithRegion(region: cocoascript.UIRegion):cocoascript.UIRegion;
    // doc://com.apple.documentation/documentation/uikit/uiregion/1621893-containspoint
    containsPoint(point: cocoascript.CGPoint):cocoascript.BOOL;
    //
    alloc():cocoascript.UIRegion;
    //
    init():cocoascript.UIRegion;
  }
}

declare const UIRegion: cocoascript.UIRegion;
