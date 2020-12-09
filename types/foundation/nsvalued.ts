declare namespace cocoascript {
/**
 * A simple container for a single C or Objective-C data item.
 * doc://com.apple.documentation/documentation/foundation/nsvalue
 */
interface NSValue extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1411621-initwithbytes
  initWithBytes_objCType(value: void, type: cocoascript.char):cocoascript.NSValue;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1415141-getvalue
  getValue(value: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1412365-objctype
  objCType(): cocoascript.char;
  setObjCType(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1410668-pointervalue
  pointerValue(): void;
  setPointerValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1412287-nonretainedobjectvalue
  nonretainedObjectValue(): cocoascript.id;
  setNonretainedObjectValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1413902-rangevalue
  rangeValue(): cocoascript.NSRange;
  setRangeValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1391255-pointvalue
  pointValue(): cocoascript.NSPoint;
  setPointValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1391301-sizevalue
  sizeValue(): cocoascript.NSSize;
  setSizeValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1391171-rectvalue
  rectValue(): cocoascript.NSRect;
  setRectValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1624534-cgpointvalue
  CGPointValue(): cocoascript.CGPoint;
  setCGPointValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1624486-cgvectorvalue
  CGVectorValue(): cocoascript.CGVector;
  setCGVectorValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1624489-cgsizevalue
  CGSizeValue(): cocoascript.CGSize;
  setCGSizeValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1624506-cgrectvalue
  CGRectValue(): cocoascript.CGRect;
  setCGRectValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1624512-cgaffinetransformvalue
  CGAffineTransformValue(): cocoascript.CGAffineTransform;
  setCGAffineTransformValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1624517-uiedgeinsetsvalue
  UIEdgeInsetsValue(): cocoascript.UIEdgeInsets;
  setUIEdgeInsetsValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1624526-uioffsetvalue
  UIOffsetValue(): cocoascript.UIOffset;
  setUIOffsetValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1436572-catransform3dvalue
  CATransform3DValue(): cocoascript.CATransform3D;
  setCATransform3DValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1388151-cmtimevalue
  CMTimeValue(): cocoascript.CMTime;
  setCMTimeValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1385930-cmtimerangevalue
  CMTimeRangeValue(): cocoascript.CMTimeRange;
  setCMTimeRangeValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1387277-cmtimemappingvalue
  CMTimeMappingValue(): cocoascript.CMTimeMapping;
  setCMTimeMappingValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1452495-mkcoordinatevalue
  MKCoordinateValue(): cocoascript.CLLocationCoordinate2D;
  setMKCoordinateValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1452516-mkcoordinatespanvalue
  MKCoordinateSpanValue(): cocoascript.MKCoordinateSpan;
  setMKCoordinateSpanValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1409669-scnvector3value
  SCNVector3Value(): cocoascript.SCNVector3;
  setSCNVector3Value(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1409725-scnvector4value
  SCNVector4Value(): cocoascript.SCNVector4;
  setSCNVector4Value(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1409684-scnmatrix4value
  SCNMatrix4Value(): cocoascript.SCNMatrix4;
  setSCNMatrix4Value(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1409038-isequaltovalue
  isEqualToValue(value: cocoascript.NSValue):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1417896-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSValue;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/2865836-directionaledgeinsetsvalue
  directionalEdgeInsetsValue(): cocoascript.NSDirectionalEdgeInsets;
  setDirectionalEdgeInsetsValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/1391123-edgeinsetsvalue
  edgeInsetsValue(): cocoascript.NSEdgeInsets;
  setEdgeInsetsValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsvalue/2919632-getvalue
  getValue_size(value: void, size: cocoascript.NSUInteger):void;
  // 
  alloc():cocoascript.NSValue;
  // 
  init():cocoascript.NSValue;
}
}
declare const NSValue: cocoascript.NSValue;

