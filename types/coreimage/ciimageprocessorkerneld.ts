declare namespace cocoascript {
/**
 * The abstract class you extend to create custom image processors that can integrate with Core Image workflows.
 * doc://com.apple.documentation/documentation/coreimage/ciimageprocessorkernel
 */
interface CIImageProcessorKernel extends NSObject {
  // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorkernel/2143065-outputformat
  outputFormat(): cocoascript.CIFormat;
  setOutputFormat(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorkernel/2867389-outputisopaque
  outputIsOpaque(): boolean;
  setOutputIsOpaque(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorkernel/2143066-synchronizeinputs
  synchronizeInputs(): boolean;
  setSynchronizeInputs(): void;
  // 
  alloc():cocoascript.CIImageProcessorKernel;
  // 
  init():cocoascript.CIImageProcessorKernel;
}
}
declare const CIImageProcessorKernel: cocoascript.CIImageProcessorKernel;

