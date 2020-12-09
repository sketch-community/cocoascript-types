declare namespace cocoascript {
/**
 * A mutable collection of font descriptors taken together as a single object.
 * doc://com.apple.documentation/documentation/appkit/nsmutablefontcollection
 */
interface NSMutableFontCollection extends NSFontCollection {
  // doc://com.apple.documentation/documentation/appkit/nsmutablefontcollection/1497506-fontcollectionwithallavailablede
  fontCollectionWithAllAvailableDescriptors(): cocoascript.NSMutableFontCollection;
  setFontCollectionWithAllAvailableDescriptors(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmutablefontcollection/1497457-querydescriptors
  queryDescriptors(): cocoascript.NSFontDescriptor;
  setQueryDescriptors(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmutablefontcollection/1497446-addqueryfordescriptors
  addQueryForDescriptors(descriptors: cocoascript.NSFontDescriptor):void;
  // doc://com.apple.documentation/documentation/appkit/nsmutablefontcollection/1497471-removequeryfordescriptors
  removeQueryForDescriptors(descriptors: cocoascript.NSFontDescriptor):void;
  // doc://com.apple.documentation/documentation/appkit/nsmutablefontcollection/1497442-exclusiondescriptors
  exclusionDescriptors(): cocoascript.NSFontDescriptor;
  setExclusionDescriptors(): void;
  // 
  alloc():cocoascript.NSMutableFontCollection;
  // 
  init():cocoascript.NSMutableFontCollection;
}
}
declare const NSMutableFontCollection: cocoascript.NSMutableFontCollection;

