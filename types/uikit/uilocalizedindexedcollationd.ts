declare namespace cocoascript {
  /**
   * An object that organizes, sorts, and localizes the data for a table view that has a section index.
   * doc://com.apple.documentation/documentation/uikit/uilocalizedindexedcollation
   */
  interface UILocalizedIndexedCollation extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uilocalizedindexedcollation/1620378-sectionforobject
    sectionForObject_collationStringSelector(object: cocoascript.UILocalizedIndexedCollation, selector: cocoascript.SEL):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uilocalizedindexedcollation/1620382-sortedarrayfromarray
    sortedArrayFromArray_collationStringSelector(array: cocoascript.NSArray, selector: cocoascript.SEL):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/uikit/uilocalizedindexedcollation/1620379-sectiontitles
    sectionTitles(): cocoascript.NSString;
    setSectionTitles(): void;
    // doc://com.apple.documentation/documentation/uikit/uilocalizedindexedcollation/1620383-sectionindextitles
    sectionIndexTitles(): cocoascript.NSString;
    setSectionIndexTitles(): void;
    // doc://com.apple.documentation/documentation/uikit/uilocalizedindexedcollation/1620380-sectionforsectionindextitleatind
    sectionForSectionIndexTitleAtIndex(indexTitleIndex: cocoascript.NSInteger):cocoascript.NSInteger;
    //
    alloc():cocoascript.UILocalizedIndexedCollation;
    //
    init():cocoascript.UILocalizedIndexedCollation;
  }
}

declare const UILocalizedIndexedCollation: cocoascript.UILocalizedIndexedCollation;
