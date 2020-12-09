declare namespace cocoascript {
/**
 * An object that renders an image from a PICT format data stream of version 1, version 2, and extended version 2.
 * doc://com.apple.documentation/documentation/appkit/nspictimagerep
 */
interface NSPICTImageRep extends NSImageRep {
  // doc://com.apple.documentation/documentation/appkit/nspictimagerep/1533954-initwithdata
  initWithData(pictData: cocoascript.NSData):cocoascript.NSPICTImageRep;
  // doc://com.apple.documentation/documentation/appkit/nspictimagerep/1524978-boundingbox
  boundingBox(): cocoascript.NSRect;
  setBoundingBox(): void;
  // doc://com.apple.documentation/documentation/appkit/nspictimagerep/1524591-pictrepresentation
  PICTRepresentation(): cocoascript.NSData;
  setPICTRepresentation(): void;
  // 
  alloc():cocoascript.NSPICTImageRep;
  // 
  init():cocoascript.NSPICTImageRep;
}
}
declare const NSPICTImageRep: cocoascript.NSPICTImageRep;

