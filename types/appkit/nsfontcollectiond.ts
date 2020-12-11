declare namespace cocoascript {
  /**
   * A font collection, which is a group of font descriptors taken together as a single object.
   * doc://com.apple.documentation/documentation/appkit/nsfontcollection
   */
  interface NSFontCollection extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsfontcollection/1497473-fontcollectionwithallavailablede
    fontCollectionWithAllAvailableDescriptors(): cocoascript.NSFontCollection;
    setFontCollectionWithAllAvailableDescriptors(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfontcollection/1497477-allfontcollectionnames
    allFontCollectionNames(): cocoascript.NSFontCollectionName;
    setAllFontCollectionNames(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfontcollection/1497523-matchingdescriptors
    matchingDescriptors(): cocoascript.NSFontDescriptor;
    setMatchingDescriptors(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfontcollection/1497496-matchingdescriptorsforfamily
    matchingDescriptorsForFamily(family: cocoascript.NSString):cocoascript.NSFontDescriptor;
    // doc://com.apple.documentation/documentation/appkit/nsfontcollection/1497522-matchingdescriptorsforfamily
    matchingDescriptorsForFamily_options(family: cocoascript.NSString, options: cocoascript.NSNumber):cocoascript.NSFontDescriptor;
    // doc://com.apple.documentation/documentation/appkit/nsfontcollection/1497510-matchingdescriptorswithoptions
    matchingDescriptorsWithOptions(options: cocoascript.NSNumber):cocoascript.NSFontDescriptor;
    // doc://com.apple.documentation/documentation/appkit/nsfontcollection/1497441-querydescriptors
    queryDescriptors(): cocoascript.NSFontDescriptor;
    setQueryDescriptors(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfontcollection/1497456-exclusiondescriptors
    exclusionDescriptors(): cocoascript.NSFontDescriptor;
    setExclusionDescriptors(): void;
    //
    alloc():cocoascript.NSFontCollection;
    //
    init():cocoascript.NSFontCollection;
  }
}

declare const NSFontCollection: cocoascript.NSFontCollection;
