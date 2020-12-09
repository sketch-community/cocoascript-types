declare namespace cocoascript {
/**
 * A description of the bounding shape of a filter and the domain of definition for a filter operation.
 * doc://com.apple.documentation/documentation/coreimage/cifiltershape
 */
interface CIFilterShape extends NSObject {
  // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1437921-initwithrect
  initWithRect(r: cocoascript.CGRect):cocoascript.CIFilterShape;
  // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1438022-extent
  extent(): cocoascript.CGRect;
  setExtent(): void;
  // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1437987-insetbyx
  insetByX_Y(dx: number, dy: number):cocoascript.CIFilterShape;
  // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1437881-intersectwith
  intersectWith(s2: cocoascript.CIFilterShape):cocoascript.CIFilterShape;
  // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1437806-intersectwithrect
  intersectWithRect(r: cocoascript.CGRect):cocoascript.CIFilterShape;
  // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1437808-transformby
  transformBy_interior(m: cocoascript.CGAffineTransform, flag: cocoascript.BOOL):cocoascript.CIFilterShape;
  // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1438227-unionwith
  unionWith(s2: cocoascript.CIFilterShape):cocoascript.CIFilterShape;
  // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1437601-unionwithrect
  unionWithRect(r: cocoascript.CGRect):cocoascript.CIFilterShape;
  // 
  alloc():cocoascript.CIFilterShape;
  // 
  init():cocoascript.CIFilterShape;
}
}
declare const CIFilterShape: cocoascript.CIFilterShape;

