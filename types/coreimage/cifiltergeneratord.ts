declare namespace cocoascript {
/**
 * An object that creates and configures chains of individual image filters. 
 * doc://com.apple.documentation/documentation/coreimage/cifiltergenerator
 */
interface CIFilterGenerator extends NSObject {
  // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1437742-initwithcontentsofurl
  initWithContentsOfURL(aURL: cocoascript.NSURL):cocoascript.CIFilterGenerator;
  // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438159-connectobject
  connectObject_withKey_toObject_withKey(sourceObject: cocoascript.CIFilterGenerator, sourceKey: cocoascript.NSString, targetObject: cocoascript.CIFilterGenerator, targetKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438075-disconnectobject
  disconnectObject_withKey_toObject_withKey(sourceObject: cocoascript.CIFilterGenerator, sourceKey: cocoascript.NSString, targetObject: cocoascript.CIFilterGenerator, targetKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1437955-exportedkeys
  exportedKeys(): cocoascript.NSDictionary;
  setExportedKeys(): void;
  // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438155-exportkey
  exportKey_fromObject_withName(key: cocoascript.NSString, targetObject: cocoascript.CIFilterGenerator, exportedKeyName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438191-removeexportedkey
  removeExportedKey(exportedKeyName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438069-setattributes
  setAttributes_forExportedKey(attributes: cocoascript.NSDictionary, key: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1437855-classattributes
  classAttributes(): cocoascript.NSDictionary;
  setClassAttributes(): void;
  // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438179-writetourl
  writeToURL_atomically(aURL: cocoascript.NSURL, flag: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1437891-registerfiltername
  registerFilterName(name: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438044-filter
  filter():cocoascript.CIFilter;
  // 
  alloc():cocoascript.CIFilterGenerator;
  // 
  init():cocoascript.CIFilterGenerator;
}
}
declare const CIFilterGenerator: cocoascript.CIFilterGenerator;

