declare namespace cocoascript {
/**
 * A layer that provides a way to asynchronously provide tiles of the layer's content, potentially cached at multiple levels of detail.
 * doc://com.apple.documentation/documentation/quartzcore/catiledlayer
 */
interface CATiledLayer extends CALayer {
  // doc://com.apple.documentation/documentation/quartzcore/catiledlayer/1522244-levelsofdetail
  levelsOfDetail(): cocoascript.size_t;
  setLevelsOfDetail(): void;
  // doc://com.apple.documentation/documentation/quartzcore/catiledlayer/1522099-levelsofdetailbias
  levelsOfDetailBias(): cocoascript.size_t;
  setLevelsOfDetailBias(): void;
  // doc://com.apple.documentation/documentation/quartzcore/catiledlayer/1522114-tilesize
  tileSize(): cocoascript.CGSize;
  setTileSize(): void;
  // 
  alloc():cocoascript.CATiledLayer;
  // 
  init():cocoascript.CATiledLayer;
}
}
declare const CATiledLayer: cocoascript.CATiledLayer;

