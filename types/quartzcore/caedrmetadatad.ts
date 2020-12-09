declare namespace cocoascript {
/**
 * Metadata describing how extended dynamic range (EDR) values should be tone mapped.
 * doc://com.apple.documentation/documentation/quartzcore/caedrmetadata
 */
interface CAEDRMetadata extends NSObject {
  // doc://com.apple.documentation/documentation/quartzcore/caedrmetadata/3194384-hlgmetadata
  HLGMetadata(): cocoascript.CAEDRMetadata;
  setHLGMetadata(): void;
  // 
  alloc():cocoascript.CAEDRMetadata;
  // 
  init():cocoascript.CAEDRMetadata;
}
}
declare const CAEDRMetadata: cocoascript.CAEDRMetadata;

