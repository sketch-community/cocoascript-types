declare namespace cocoascript {
/**
 * The abstract superclass for objects representing notable features detected in an image.
 * doc://com.apple.documentation/documentation/coreimage/cifeature
 */
interface CIFeature extends NSObject {
  // doc://com.apple.documentation/documentation/coreimage/cifeature/1437782-bounds
  bounds(): cocoascript.CGRect;
  setBounds(): void;
  // doc://com.apple.documentation/documentation/coreimage/cifeature/1438092-type
  type(): cocoascript.NSString;
  setType(): void;
  // doc://com.apple.documentation/documentation/coreimage/cifeaturetypeface
  CIFeatureTypeFace(): cocoascript.const;
  setCIFeatureTypeFace(): void;
  // doc://com.apple.documentation/documentation/coreimage/cifeaturetyperectangle
  CIFeatureTypeRectangle(): cocoascript.const;
  setCIFeatureTypeRectangle(): void;
  // doc://com.apple.documentation/documentation/coreimage/cifeaturetypeqrcode
  CIFeatureTypeQRCode(): cocoascript.const;
  setCIFeatureTypeQRCode(): void;
  // doc://com.apple.documentation/documentation/coreimage/cifeaturetypetext
  CIFeatureTypeText(): cocoascript.const;
  setCIFeatureTypeText(): void;
  // 
  alloc():cocoascript.CIFeature;
  // 
  init():cocoascript.CIFeature;
}
}
declare const CIFeature: cocoascript.CIFeature;

