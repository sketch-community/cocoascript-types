declare namespace cocoascript {
/**
 * A GPU-based image processing routine that processes only the color information in images, used to create custom Core Image filters.
 * doc://com.apple.documentation/documentation/coreimage/cicolorkernel
 */
interface CIColorKernel extends CIKernel {
  // doc://com.apple.documentation/documentation/coreimage/cicolorkernel/1438110-applywithextent
  applyWithExtent_arguments(extent: cocoascript.CGRect, args: cocoascript.CIColorKernel):cocoascript.CIImage;
  // 
  alloc():cocoascript.CIColorKernel;
  // 
  init():cocoascript.CIColorKernel;
}
}
declare const CIColorKernel: cocoascript.CIColorKernel;

