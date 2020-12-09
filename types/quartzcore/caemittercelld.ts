declare namespace cocoascript {
/**
 * The definition of a particle emitted by a CAEmitterLayer.
 * doc://com.apple.documentation/documentation/quartzcore/caemittercell
 */
interface CAEmitterCell extends NSObject {
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522109-contents
  contents(): cocoascript.id;
  setContents(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522124-contentsrect
  contentsRect(): cocoascript.CGRect;
  setContentsRect(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521866-emittercells
  emitterCells(): cocoascript.CAEmitterCell;
  setEmitterCells(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521831-enabled
  enabled(): cocoascript.BOOL;
  setEnabled(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522322-color
  color(): cocoascript.CGColorRef;
  setColor(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522176-redrange
  redRange(): number;
  setRedRange(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521867-greenrange
  greenRange(): number;
  setGreenRange(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522158-bluerange
  blueRange(): number;
  setBlueRange(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522110-alpharange
  alphaRange(): number;
  setAlphaRange(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521859-redspeed
  redSpeed(): number;
  setRedSpeed(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521946-greenspeed
  greenSpeed(): number;
  setGreenSpeed(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522082-bluespeed
  blueSpeed(): number;
  setBlueSpeed(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522120-alphaspeed
  alphaSpeed(): number;
  setAlphaSpeed(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522228-magnificationfilter
  magnificationFilter(): cocoascript.NSString;
  setMagnificationFilter(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522222-minificationfilter
  minificationFilter(): cocoascript.NSString;
  setMinificationFilter(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521907-minificationfilterbias
  minificationFilterBias(): number;
  setMinificationFilterBias(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522287-scale
  scale(): cocoascript.CGFloat;
  setScale(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521915-scalerange
  scaleRange(): cocoascript.CGFloat;
  setScaleRange(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522197-contentsscale
  contentsScale(): cocoascript.CGFloat;
  setContentsScale(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521909-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521925-style
  style(): cocoascript.NSDictionary;
  setStyle(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522361-spin
  spin(): cocoascript.CGFloat;
  setSpin(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522084-spinrange
  spinRange(): cocoascript.CGFloat;
  setSpinRange(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521857-emissionlatitude
  emissionLatitude(): cocoascript.CGFloat;
  setEmissionLatitude(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522013-emissionlongitude
  emissionLongitude(): cocoascript.CGFloat;
  setEmissionLongitude(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521847-emissionrange
  emissionRange(): cocoascript.CGFloat;
  setEmissionRange(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522075-lifetime
  lifetime(): number;
  setLifetime(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522101-lifetimerange
  lifetimeRange(): number;
  setLifetimeRange(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522100-birthrate
  birthRate(): number;
  setBirthRate(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522241-scalespeed
  scaleSpeed(): cocoascript.CGFloat;
  setScaleSpeed(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521837-velocity
  velocity(): cocoascript.CGFloat;
  setVelocity(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522330-velocityrange
  velocityRange(): cocoascript.CGFloat;
  setVelocityRange(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521879-xacceleration
  xAcceleration(): cocoascript.CGFloat;
  setXAcceleration(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522077-yacceleration
  yAcceleration(): cocoascript.CGFloat;
  setYAcceleration(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522298-zacceleration
  zAcceleration(): cocoascript.CGFloat;
  setZAcceleration(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522005-shouldarchivevalueforkey
  shouldArchiveValueForKey(key: cocoascript.NSString):cocoascript.BOOL;
  // 
  alloc():cocoascript.CAEmitterCell;
  // 
  init():cocoascript.CAEmitterCell;
}
}
declare const CAEmitterCell: cocoascript.CAEmitterCell;

