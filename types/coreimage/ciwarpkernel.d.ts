declare namespace cocoascript {
  /**
   * A GPU-based image processing routine that processes only the geometry information in an image, used to create custom Core Image filters.
   * doc://com.apple.documentation/documentation/coreimage/ciwarpkernel
   */
  interface CIWarpKernel extends CIKernel {
    // doc://com.apple.documentation/documentation/coreimage/ciwarpkernel/1437798-applywithextent
    applyWithExtent_roiCallback_inputImage_arguments(extent: cocoascript.CGRect, callback: cocoascript.CIKernelROICallback, image: cocoascript.CIImage, args: cocoascript.CIWarpKernel):cocoascript.CIImage;
    //
    alloc():cocoascript.CIWarpKernel;
    //
    init():cocoascript.CIWarpKernel;
  }
}

declare const CIWarpKernel: cocoascript.CIWarpKernel;
