declare namespace cocoascript {
/**
 * An object that represents a large file for a record.
 * doc://com.apple.documentation/documentation/cloudkit/ckasset
 */
interface CKAsset extends NSObject {
  // doc://com.apple.documentation/documentation/cloudkit/ckasset/1514990-initwithfileurl
  initWithFileURL(fileURL: cocoascript.NSURL):cocoascript.CKAsset;
  // doc://com.apple.documentation/documentation/cloudkit/ckasset/1515050-fileurl
  fileURL(): cocoascript.NSURL;
  setFileURL(): void;
  // 
  alloc():cocoascript.CKAsset;
  // 
  init():cocoascript.CKAsset;
}
}
declare const CKAsset: cocoascript.CKAsset;

