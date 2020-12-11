declare namespace cocoascript {
  /**
   * A key associated with a custom attribute for a searchable item.
   * doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey
   */
  interface CSCustomAttributeKey extends NSObject {
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616402-initwithkeyname
    initWithKeyName(keyName: cocoascript.NSString):cocoascript.CSCustomAttributeKey;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616410-initwithkeyname
    initWithKeyName_searchable_searchableByDefault_unique_multiValued(keyName: cocoascript.NSString, searchable: cocoascript.BOOL, searchableByDefault: cocoascript.BOOL, unique: cocoascript.BOOL, multiValued: cocoascript.BOOL):cocoascript.CSCustomAttributeKey;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616405-keyname
    keyName(): cocoascript.NSString;
    setKeyName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616400-multivalued
    multiValued(): cocoascript.BOOL;
    setMultiValued(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616397-searchable
    searchable(): cocoascript.BOOL;
    setSearchable(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616396-searchablebydefault
    searchableByDefault(): cocoascript.BOOL;
    setSearchableByDefault(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616409-unique
    unique(): cocoascript.BOOL;
    setUnique(): void;
    //
    alloc():cocoascript.CSCustomAttributeKey;
    //
    init():cocoascript.CSCustomAttributeKey;
  }
}

declare const CSCustomAttributeKey: cocoascript.CSCustomAttributeKey;
