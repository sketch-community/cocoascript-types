declare namespace cocoascript {
/**
 * A GPU-based image processing routine used to create custom Core Image filters.
 * doc://com.apple.documentation/documentation/coreimage/cikernel
 */
interface CIKernel extends NSObject {
  // doc://com.apple.documentation/documentation/coreimage/cikernel/1438067-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/coreimage/cikernel/1437691-setroiselector
  setROISelector(method: cocoascript.SEL):void;
  // doc://com.apple.documentation/documentation/coreimage/cikernel/1438243-applywithextent
  applyWithExtent_roiCallback_arguments(extent: cocoascript.CGRect, callback: cocoascript.CIKernelROICallback, args: cocoascript.CIKernel):cocoascript.CIImage;
  // 
  alloc():cocoascript.CIKernel;
  // 
  init():cocoascript.CIKernel;
}
}
declare const CIKernel: cocoascript.CIKernel;

