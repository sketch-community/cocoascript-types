declare namespace cocoascript {
/**
 * Information about a region likely to contain text detected in a still or video image. 
 * doc://com.apple.documentation/documentation/coreimage/citextfeature
 */
interface CITextFeature extends CIFeature {
  // doc://com.apple.documentation/documentation/coreimage/citextfeature/1437885-bounds
  bounds(): cocoascript.CGRect;
  setBounds(): void;
  // doc://com.apple.documentation/documentation/coreimage/citextfeature/1437810-subfeatures
  subFeatures(): cocoascript.NSArray;
  setSubFeatures(): void;
  // doc://com.apple.documentation/documentation/coreimage/citextfeature/1438004-bottomleft
  bottomLeft(): cocoascript.CGPoint;
  setBottomLeft(): void;
  // doc://com.apple.documentation/documentation/coreimage/citextfeature/1437659-bottomright
  bottomRight(): cocoascript.CGPoint;
  setBottomRight(): void;
  // doc://com.apple.documentation/documentation/coreimage/citextfeature/1438221-topleft
  topLeft(): cocoascript.CGPoint;
  setTopLeft(): void;
  // doc://com.apple.documentation/documentation/coreimage/citextfeature/1438282-topright
  topRight(): cocoascript.CGPoint;
  setTopRight(): void;
  // 
  alloc():cocoascript.CITextFeature;
  // 
  init():cocoascript.CITextFeature;
}
}
declare const CITextFeature: cocoascript.CITextFeature;

