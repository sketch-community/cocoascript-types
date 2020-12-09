declare namespace cocoascript {
/**
 * A layer that creates a specified number of sublayer copies with varying geometric, temporal, and color transformations.
 * doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer
 */
interface CAReplicatorLayer extends CALayer {
  // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1521883-instancecount
  instanceCount(): cocoascript.NSInteger;
  setInstanceCount(): void;
  // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522391-instancedelay
  instanceDelay(): cocoascript.CFTimeInterval;
  setInstanceDelay(): void;
  // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522312-instancetransform
  instanceTransform(): cocoascript.CATransform3D;
  setInstanceTransform(): void;
  // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522095-preservesdepth
  preservesDepth(): cocoascript.BOOL;
  setPreservesDepth(): void;
  // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522154-instancecolor
  instanceColor(): cocoascript.CGColorRef;
  setInstanceColor(): void;
  // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522090-instanceredoffset
  instanceRedOffset(): number;
  setInstanceRedOffset(): void;
  // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522032-instancegreenoffset
  instanceGreenOffset(): number;
  setInstanceGreenOffset(): void;
  // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522267-instanceblueoffset
  instanceBlueOffset(): number;
  setInstanceBlueOffset(): void;
  // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1521898-instancealphaoffset
  instanceAlphaOffset(): number;
  setInstanceAlphaOffset(): void;
  // 
  alloc():cocoascript.CAReplicatorLayer;
  // 
  init():cocoascript.CAReplicatorLayer;
}
}
declare const CAReplicatorLayer: cocoascript.CAReplicatorLayer;

