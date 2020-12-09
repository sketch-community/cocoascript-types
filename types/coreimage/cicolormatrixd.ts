declare namespace cocoascript {
/**
 * The properties you use to configure a color matrix filter.
 * doc://com.apple.documentation/documentation/coreimage/cicolormatrix
 */
interface CIColorMatrix extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cicolormatrix/3228160-avector
  AVector(): cocoascript.CIVector;
  setAVector(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolormatrix/3228161-bvector
  BVector(): cocoascript.CIVector;
  setBVector(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolormatrix/3228162-gvector
  GVector(): cocoascript.CIVector;
  setGVector(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolormatrix/3228163-rvector
  RVector(): cocoascript.CIVector;
  setRVector(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolormatrix/3228164-biasvector
  biasVector(): cocoascript.CIVector;
  setBiasVector(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolormatrix/3228165-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
}
}

