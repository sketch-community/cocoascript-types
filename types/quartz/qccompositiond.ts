declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/qccomposition
 */
interface QCComposition extends NSObject {
  // doc://com.apple.documentation/documentation/quartz/qccomposition/1505184-attributes
  attributes():cocoascript.NSDictionary;
  // doc://com.apple.documentation/documentation/quartz/qccomposition/1503694-protocols
  protocols():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/quartz/qccomposition/1493218-identifier
  identifier():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/quartz/qccomposition/1504185-inputkeys
  inputKeys():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/quartz/qccomposition/1504100-outputkeys
  outputKeys():cocoascript.NSArray;
  // 
  alloc():cocoascript.QCComposition;
  // 
  init():cocoascript.QCComposition;
}
}
declare const QCComposition: cocoascript.QCComposition;

