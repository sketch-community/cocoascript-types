declare namespace cocoascript {
/**
 * The provider class that specifies a relevant location.
 * doc://com.apple.documentation/documentation/sirikit/inlocationrelevanceprovider
 */
interface INLocationRelevanceProvider extends INRelevanceProvider {
  // doc://com.apple.documentation/documentation/sirikit/inlocationrelevanceprovider/2963057-initwithregion
  initWithRegion(region: cocoascript.CLRegion):cocoascript.INLocationRelevanceProvider;
  // doc://com.apple.documentation/documentation/sirikit/inlocationrelevanceprovider/2963058-region
  region(): cocoascript.CLRegion;
  setRegion(): void;
  // 
  alloc():cocoascript.INLocationRelevanceProvider;
  // 
  init():cocoascript.INLocationRelevanceProvider;
}
}
declare const INLocationRelevanceProvider: cocoascript.INLocationRelevanceProvider;

