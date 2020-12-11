declare namespace cocoascript {
  /**
   * A view that presents data using rows arranged in a single column.
   * doc://com.apple.documentation/documentation/uikit/uitableview
   */
  interface UITableView extends UIScrollView {
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614886-initwithframe
    initWithFrame_style(frame: cocoascript.CGRect, style: cocoascript.UITableViewStyle):cocoascript.UITableView;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614859-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UITableView;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614955-datasource
    dataSource(): cocoascript.UITableViewDataSource;
    setDataSource(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1771763-prefetchdatasource
    prefetchDataSource(): cocoascript.UITableViewDataSourcePrefetching;
    setPrefetchDataSource(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614937-registernib
    registerNib_forCellReuseIdentifier(nib: cocoascript.UINib, identifier: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614888-registerclass
    registerClass_forCellReuseIdentifier(cellClass: cocoascript.Class, identifier: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614878-dequeuereusablecellwithidentifie
    dequeueReusableCellWithIdentifier_forIndexPath(identifier: cocoascript.NSString, indexPath: cocoascript.NSIndexPath):cocoascript.UITableViewCell;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614891-dequeuereusablecellwithidentifie
    dequeueReusableCellWithIdentifier(identifier: cocoascript.NSString):cocoascript.UITableViewCell;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614921-registernib
    registerNib_forHeaderFooterViewReuseIdentifier(nib: cocoascript.UINib, identifier: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614964-registerclass
    registerClass_forHeaderFooterViewReuseIdentifier(aClass: cocoascript.Class, identifier: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614975-dequeuereusableheaderfootervieww
    dequeueReusableHeaderFooterViewWithIdentifier(identifier: cocoascript.NSString):cocoascript.UITableViewHeaderFooterView;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614894-delegate
    delegate(): cocoascript.UITableViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614913-style
    style(): cocoascript.UITableViewStyle;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614904-tableheaderview
    tableHeaderView(): cocoascript.UIView;
    setTableHeaderView(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614976-tablefooterview
    tableFooterView(): cocoascript.UIView;
    setTableFooterView(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614986-backgroundview
    backgroundView(): cocoascript.UIView;
    setBackgroundView(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614852-rowheight
    rowHeight(): cocoascript.CGFloat;
    setRowHeight(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614925-estimatedrowheight
    estimatedRowHeight(): cocoascript.CGFloat;
    setEstimatedRowHeight(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614849-celllayoutmarginsfollowreadablew
    cellLayoutMarginsFollowReadableWidth(): cocoascript.BOOL;
    setCellLayoutMarginsFollowReadableWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/2921665-insetscontentviewstosafearea
    insetsContentViewsToSafeArea(): cocoascript.BOOL;
    setInsetsContentViewsToSafeArea(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614863-sectionheaderheight
    sectionHeaderHeight(): cocoascript.CGFloat;
    setSectionHeaderHeight(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614846-sectionfooterheight
    sectionFooterHeight(): cocoascript.CGFloat;
    setSectionFooterHeight(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614957-estimatedsectionheaderheight
    estimatedSectionHeaderHeight(): cocoascript.CGFloat;
    setEstimatedSectionHeaderHeight(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614979-estimatedsectionfooterheight
    estimatedSectionFooterHeight(): cocoascript.CGFloat;
    setEstimatedSectionFooterHeight(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614909-separatorstyle
    separatorStyle(): cocoascript.UITableViewCellSeparatorStyle;
    setSeparatorStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614984-separatorcolor
    separatorColor(): cocoascript.UIColor;
    setSeparatorColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614865-separatoreffect
    separatorEffect(): cocoascript.UIVisualEffect;
    setSeparatorEffect(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614851-separatorinset
    separatorInset(): cocoascript.UIEdgeInsets;
    setSeparatorInset(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/2887517-separatorinsetreference
    separatorInsetReference(): cocoascript.UITableViewSeparatorInsetReference;
    setSeparatorInsetReference(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614952-numberofrowsinsection
    numberOfRowsInSection(section: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614924-numberofsections
    numberOfSections(): cocoascript.NSInteger;
    setNumberOfSections(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614983-cellforrowatindexpath
    cellForRowAtIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.UITableViewCell;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614965-headerviewforsection
    headerViewForSection(section: cocoascript.NSInteger):cocoascript.UITableViewHeaderFooterView;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614972-footerviewforsection
    footerViewForSection(section: cocoascript.NSInteger):cocoascript.UITableViewHeaderFooterView;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614881-indexpathforcell
    indexPathForCell(cell: cocoascript.UITableViewCell):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614874-indexpathforrowatpoint
    indexPathForRowAtPoint(point: cocoascript.CGPoint):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614991-indexpathsforrowsinrect
    indexPathsForRowsInRect(rect: cocoascript.CGRect):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614896-visiblecells
    visibleCells(): cocoascript.UITableViewCell;
    setVisibleCells(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614885-indexpathsforvisiblerows
    indexPathsForVisibleRows(): cocoascript.NSIndexPath;
    setIndexPathsForVisibleRows(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1615000-indexpathforselectedrow
    indexPathForSelectedRow(): cocoascript.NSIndexPath;
    setIndexPathForSelectedRow(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614864-indexpathsforselectedrows
    indexPathsForSelectedRows(): cocoascript.NSIndexPath;
    setIndexPathsForSelectedRows(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614875-selectrowatindexpath
    selectRowAtIndexPath_animated_scrollPosition(indexPath: cocoascript.NSIndexPath, animated: cocoascript.BOOL, scrollPosition: cocoascript.UITableViewScrollPosition):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614989-deselectrowatindexpath
    deselectRowAtIndexPath_animated(indexPath: cocoascript.NSIndexPath, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614911-allowsselection
    allowsSelection(): cocoascript.BOOL;
    setAllowsSelection(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614938-allowsmultipleselection
    allowsMultipleSelection(): cocoascript.BOOL;
    setAllowsMultipleSelection(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614889-allowsselectionduringediting
    allowsSelectionDuringEditing(): cocoascript.BOOL;
    setAllowsSelectionDuringEditing(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614944-allowsmultipleselectionduringedi
    allowsMultipleSelectionDuringEditing(): cocoascript.BOOL;
    setAllowsMultipleSelectionDuringEditing(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/3573921-selectionfollowsfocus
    selectionFollowsFocus(): cocoascript.BOOL;
    setSelectionFollowsFocus(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614879-insertrowsatindexpaths
    insertRowsAtIndexPaths_withRowAnimation(indexPaths: cocoascript.NSIndexPath, animation: cocoascript.UITableViewRowAnimation):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614960-deleterowsatindexpaths
    deleteRowsAtIndexPaths_withRowAnimation(indexPaths: cocoascript.NSIndexPath, animation: cocoascript.UITableViewRowAnimation):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614892-insertsections
    insertSections_withRowAnimation(sections: cocoascript.NSIndexSet, animation: cocoascript.UITableViewRowAnimation):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614922-deletesections
    deleteSections_withRowAnimation(sections: cocoascript.NSIndexSet, animation: cocoascript.UITableViewRowAnimation):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614987-moverowatindexpath
    moveRowAtIndexPath_toIndexPath(indexPath: cocoascript.NSIndexPath, newIndexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614940-movesection
    moveSection_toSection(section: cocoascript.NSInteger, newSection: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/2887515-performbatchupdates
    performBatchUpdates_completion(updates: void, completion: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614908-beginupdates
    beginUpdates():void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614890-endupdates
    endUpdates():void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614903-sectionindexminimumdisplayrowcou
    sectionIndexMinimumDisplayRowCount(): cocoascript.NSInteger;
    setSectionIndexMinimumDisplayRowCount(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614915-sectionindexcolor
    sectionIndexColor(): cocoascript.UIColor;
    setSectionIndexColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614918-sectionindexbackgroundcolor
    sectionIndexBackgroundColor(): cocoascript.UIColor;
    setSectionIndexBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614992-sectionindextrackingbackgroundco
    sectionIndexTrackingBackgroundColor(): cocoascript.UIColor;
    setSectionIndexTrackingBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewindexsearch
    UITableViewIndexSearch(): cocoascript.const;
    setUITableViewIndexSearch(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/2891097-hasuncommittedupdates
    hasUncommittedUpdates(): cocoascript.BOOL;
    setHasUncommittedUpdates(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614862-reloaddata
    reloadData():void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614935-reloadrowsatindexpaths
    reloadRowsAtIndexPaths_withRowAnimation(indexPaths: cocoascript.NSIndexPath, animation: cocoascript.UITableViewRowAnimation):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614954-reloadsections
    reloadSections_withRowAnimation(sections: cocoascript.NSIndexSet, animation: cocoascript.UITableViewRowAnimation):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614932-reloadsectionindextitles
    reloadSectionIndexTitles():void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/2897362-dragdelegate
    dragDelegate(): cocoascript.UITableViewDragDelegate;
    setDragDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/2897381-hasactivedrag
    hasActiveDrag(): cocoascript.BOOL;
    setHasActiveDrag(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/2909064-draginteractionenabled
    dragInteractionEnabled(): cocoascript.BOOL;
    setDragInteractionEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/2897372-dropdelegate
    dropDelegate(): cocoascript.UITableViewDropDelegate;
    setDropDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/2897323-hasactivedrop
    hasActiveDrop(): cocoascript.BOOL;
    setHasActiveDrop(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614997-scrolltorowatindexpath
    scrollToRowAtIndexPath_atScrollPosition_animated(indexPath: cocoascript.NSIndexPath, scrollPosition: cocoascript.UITableViewScrollPosition, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614910-scrolltonearestselectedrowatscro
    scrollToNearestSelectedRowAtScrollPosition_animated(scrollPosition: cocoascript.UITableViewScrollPosition, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614876-setediting
    setEditing_animated(editing: cocoascript.BOOL, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1615001-editing
    editing(): cocoascript.BOOL;
    setEditing(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614951-rectforsection
    rectForSection(section: cocoascript.NSInteger):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614974-rectforrowatindexpath
    rectForRowAtIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614999-rectforfooterinsection
    rectForFooterInSection(section: cocoascript.NSInteger):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614872-rectforheaderinsection
    rectForHeaderInSection(section: cocoascript.NSInteger):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uitableview/1614858-rememberslastfocusedindexpath
    remembersLastFocusedIndexPath(): cocoascript.BOOL;
    setRemembersLastFocusedIndexPath(): void;
    //
    alloc():cocoascript.UITableView;
    //
    init():cocoascript.UITableView;
  }
}

declare const UITableView: cocoascript.UITableView;
