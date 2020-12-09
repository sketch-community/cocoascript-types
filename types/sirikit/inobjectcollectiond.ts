declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/sirikit/inobjectcollection
 */
interface INObjectCollection extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inobjectcollection/3552209-initwithitems
  initWithItems(items: cocoascript.NSArray):cocoascript.INObjectCollection;
  // doc://com.apple.documentation/documentation/sirikit/inobjectcollection/3552210-initwithsections
  initWithSections(sections: cocoascript.INObjectSection):cocoascript.INObjectCollection;
  // doc://com.apple.documentation/documentation/sirikit/inobjectcollection/3552208-allitems
  allItems(): any;
  setAllItems(): void;
  // doc://com.apple.documentation/documentation/sirikit/inobjectcollection/3552211-sections
  sections(): any;
  setSections(): void;
  // doc://com.apple.documentation/documentation/sirikit/inobjectcollection/3552212-usesindexedcollation
  usesIndexedCollation(): cocoascript.BOOL;
  setUsesIndexedCollation(): void;
  // 
  alloc():cocoascript.INObjectCollection;
  // 
  init():cocoascript.INObjectCollection;
}
}
declare const INObjectCollection: cocoascript.INObjectCollection;

