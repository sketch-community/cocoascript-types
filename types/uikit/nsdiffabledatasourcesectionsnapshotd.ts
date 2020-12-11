declare namespace cocoascript {
  /**
   * A representation of the state of the data in a layout section at a specific point in time.
   * doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot
   */
  interface NSDiffableDataSourceSectionSnapshot extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600297-init
    init():cocoascript.NSDiffableDataSourceSectionSnapshot;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600310-snapshotofparentitem
    snapshotOfParentItem(parentItem: cocoascript.):cocoascript.NSDiffableDataSourceSectionSnapshot;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600311-snapshotofparentitem
    snapshotOfParentItem(parentItem: cocoascript.BOOL):cocoascript.NSDiffableDataSourceSectionSnapshot;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600288-appenditems
    appendItems(items: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600289-appenditems
    appendItems_intoParentItem(items: cocoascript.NSArray, parentItem: cocoascript.):void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600304-items
    items():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600305-items
    items(): cocoascript.ItemIdentifierType;
    setItems(): void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600309-rootitems
    rootItems(): cocoascript.ItemIdentifierType;
    setRootItems(): void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600312-visibleitems
    visibleItems(): cocoascript.ItemIdentifierType;
    setVisibleItems(): void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600296-indexofitem
    indexOfItem(item: cocoascript.):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600306-levelofitem
    levelOfItem(item: cocoascript.):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600307-parentofchilditem
    parentOfChildItem(childItem: cocoascript.):void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600291-containsitem
    containsItem(item: cocoascript.):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600303-isvisible
    isVisible(item: cocoascript.):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600298-insertitems
    insertItems_afterItem(items: cocoascript.NSArray, afterIdentifier: cocoascript.):void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600300-insertsnapshot
    insertSnapshot_afterItem(snapshot: cocoascript.NSDiffableDataSourceSectionSnapshot, item: cocoascript.):void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600299-insertitems
    insertItems_beforeItem(items: cocoascript.NSArray, beforeIdentifier: cocoascript.):void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600301-insertsnapshot
    insertSnapshot_beforeItem(snapshot: cocoascript.NSDiffableDataSourceSectionSnapshot, item: cocoascript.):void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600293-deleteitems
    deleteItems(items: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600292-deleteallitems
    deleteAllItems():void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600308-replacechildrenofparentitem
    replaceChildrenOfParentItem(parentItem: cocoascript.NSDiffableDataSourceSectionSnapshot):void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600302-isexpanded
    isExpanded(item: cocoascript.):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600294-expanditems
    expandItems(items: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600290-collapseitems
    collapseItems(items: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600295-expandeditems
    expandedItems():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectionsnapshot/3600313-visualdescription
    visualDescription():cocoascript.NSString;
    //
    alloc():cocoascript.NSDiffableDataSourceSectionSnapshot;
    //
    init():cocoascript.NSDiffableDataSourceSectionSnapshot;
  }
}

declare const NSDiffableDataSourceSectionSnapshot: cocoascript.NSDiffableDataSourceSectionSnapshot;
