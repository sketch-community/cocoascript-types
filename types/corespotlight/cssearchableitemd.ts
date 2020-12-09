declare namespace cocoascript {
/**
 * An item that can be indexed and made available to users when they search on their devices. 
 * doc://com.apple.documentation/documentation/corespotlight/cssearchableitem
 */
interface CSSearchableItem extends NSObject {
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621647-initwithuniqueidentifier
  initWithUniqueIdentifier_domainIdentifier_attributeSet(uniqueIdentifier: cocoascript.NSString, domainIdentifier: cocoascript.NSString, attributeSet: cocoascript.CSSearchableItemAttributeSet):cocoascript.CSSearchableItem;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621649-attributeset
  attributeSet(): cocoascript.CSSearchableItemAttributeSet;
  setAttributeSet(): void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621665-domainidentifier
  domainIdentifier(): cocoascript.NSString;
  setDomainIdentifier(): void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621680-expirationdate
  expirationDate(): cocoascript.NSDate;
  setExpirationDate(): void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621672-uniqueidentifier
  uniqueIdentifier(): cocoascript.NSString;
  setUniqueIdentifier(): void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemactiontype
  CSSearchableItemActionType(): cocoascript.const;
  setCSSearchableItemActionType(): void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemactivityidentifier
  CSSearchableItemActivityIdentifier(): cocoascript.const;
  setCSSearchableItemActivityIdentifier(): void;
  // doc://com.apple.documentation/documentation/corespotlight/csquerycontinuationactiontype
  CSQueryContinuationActionType(): cocoascript.const;
  setCSQueryContinuationActionType(): void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchquerystring
  CSSearchQueryString(): cocoascript.const;
  setCSSearchQueryString(): void;
  // 
  alloc():cocoascript.CSSearchableItem;
  // 
  init():cocoascript.CSSearchableItem;
}
}
declare const CSSearchableItem: cocoascript.CSSearchableItem;

