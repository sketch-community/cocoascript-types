declare namespace cocoascript {
/**
 * A representation of the state of the data in a view at a specific point in time. 
 * doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot
 */
interface NSDiffableDataSourceSnapshot extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182897-appendsectionswithidentifiers
  appendSectionsWithIdentifiers(sectionIdentifiers: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182896-appenditemswithidentifiers
  appendItemsWithIdentifiers_intoSectionWithIdentifier(identifiers: cocoascript.NSArray, sectionIdentifier: cocoascript.):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182895-appenditemswithidentifiers
  appendItemsWithIdentifiers(identifiers: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182913-numberofitems
  numberOfItems(): cocoascript.NSInteger;
  setNumberOfItems(): void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182915-numberofsections
  numberOfSections(): cocoascript.NSInteger;
  setNumberOfSections(): void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182914-numberofitemsinsection
  numberOfItemsInSection(sectionIdentifier: cocoascript.):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182907-itemidentifiers
  itemIdentifiers(): cocoascript.ItemIdentifierType;
  setItemIdentifiers(): void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182919-sectionidentifiers
  sectionIdentifiers(): cocoascript.SectionIdentifierType;
  setSectionIdentifiers(): void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182901-indexofitemidentifier
  indexOfItemIdentifier(itemIdentifier: cocoascript.):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182902-indexofsectionidentifier
  indexOfSectionIdentifier(sectionIdentifier: cocoascript.):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182908-itemidentifiersinsectionwithiden
  itemIdentifiersInSectionWithIdentifier(sectionIdentifier: cocoascript.):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182918-sectionidentifierforsectionconta
  sectionIdentifierForSectionContainingItemIdentifier(itemIdentifier: cocoascript.):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182903-insertitemswithidentifiers
  insertItemsWithIdentifiers_afterItemWithIdentifier(identifiers: cocoascript.NSArray, itemIdentifier: cocoascript.):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182904-insertitemswithidentifiers
  insertItemsWithIdentifiers_beforeItemWithIdentifier(identifiers: cocoascript.NSArray, itemIdentifier: cocoascript.):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182905-insertsectionswithidentifiers
  insertSectionsWithIdentifiers_afterSectionWithIdentifier(sectionIdentifiers: cocoascript.NSArray, toSectionIdentifier: cocoascript.):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182906-insertsectionswithidentifiers
  insertSectionsWithIdentifiers_beforeSectionWithIdentifier(sectionIdentifiers: cocoascript.NSArray, toSectionIdentifier: cocoascript.):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182898-deleteallitems
  deleteAllItems():void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182899-deleteitemswithidentifiers
  deleteItemsWithIdentifiers(identifiers: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182900-deletesectionswithidentifiers
  deleteSectionsWithIdentifiers(sectionIdentifiers: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182909-moveitemwithidentifier
  moveItemWithIdentifier(toIdentifier: cocoascript.):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182910-moveitemwithidentifier
  moveItemWithIdentifier(toIdentifier: cocoascript.):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182911-movesectionwithidentifier
  moveSectionWithIdentifier(toSectionIdentifier: cocoascript.):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182912-movesectionwithidentifier
  moveSectionWithIdentifier(toSectionIdentifier: cocoascript.):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182916-reloaditemswithidentifiers
  reloadItemsWithIdentifiers(identifiers: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesnapshot/3182917-reloadsectionswithidentifiers
  reloadSectionsWithIdentifiers(sectionIdentifiers: cocoascript.NSArray):void;
  // 
  alloc():cocoascript.NSDiffableDataSourceSnapshot;
  // 
  init():cocoascript.NSDiffableDataSourceSnapshot;
}
}
declare const NSDiffableDataSourceSnapshot: cocoascript.NSDiffableDataSourceSnapshot;

