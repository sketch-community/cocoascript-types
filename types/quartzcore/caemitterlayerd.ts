declare namespace cocoascript {
/**
 * A layer that emits, animates, and renders a particle system.
 * doc://com.apple.documentation/documentation/quartzcore/caemitterlayer
 */
interface CAEmitterLayer extends CALayer {
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521923-emittercells
  emitterCells(): cocoascript.CAEmitterCell;
  setEmitterCells(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522104-rendermode
  renderMode(): cocoascript.CAEmitterLayerRenderMode;
  setRenderMode(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522289-emitterposition
  emitterPosition(): cocoascript.CGPoint;
  setEmitterPosition(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521919-emittershape
  emitterShape(): cocoascript.CAEmitterLayerEmitterShape;
  setEmitterShape(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522169-emitterzposition
  emitterZPosition(): cocoascript.CGFloat;
  setEmitterZPosition(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521844-emitterdepth
  emitterDepth(): cocoascript.CGFloat;
  setEmitterDepth(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521869-emittersize
  emitterSize(): cocoascript.CGSize;
  setEmitterSize(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521841-scale
  scale(): number;
  setScale(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522079-seed
  seed(): number;
  setSeed(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521861-spin
  spin(): number;
  setSpin(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522015-velocity
  velocity(): number;
  setVelocity(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521976-birthrate
  birthRate(): number;
  setBirthRate(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522128-emittermode
  emitterMode(): cocoascript.CAEmitterLayerEmitterMode;
  setEmitterMode(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522144-lifetime
  lifetime(): number;
  setLifetime(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521872-preservesdepth
  preservesDepth(): cocoascript.BOOL;
  setPreservesDepth(): void;
  // 
  alloc():cocoascript.CAEmitterLayer;
  // 
  init():cocoascript.CAEmitterLayer;
}
}
declare const CAEmitterLayer: cocoascript.CAEmitterLayer;

