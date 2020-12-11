declare namespace cocoascript {
  /**
   * The object you use to manage data and provide items for a table view.
   * doc://com.apple.documentation/documentation/appkit/nstableviewdiffabledatasource
   */
  interface NSTableViewDiffableDataSource extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstableviewdiffabledatasource/3553215-initwithtableview
    initWithTableView_cellProvider(tableView: cocoascript.NSTableView, cellProvider: cocoascript.NSTableViewDiffableDataSourceCellProvider):cocoascript.NSTableViewDiffableDataSource;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdiffabledatasource/3553219-rowviewprovider
    rowViewProvider(): cocoascript.NSTableViewDiffableDataSourceRowProvider;
    setRowViewProvider(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdiffabledatasource/3553220-sectionheaderviewprovider
    sectionHeaderViewProvider(): cocoascript.NSTableViewDiffableDataSourceSectionHeaderViewProvider;
    setSectionHeaderViewProvider(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdiffabledatasource/3553216-itemidentifierforrow
    itemIdentifierForRow(row: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdiffabledatasource/3553217-rowforitemidentifier
    rowForItemIdentifier(identifier: cocoascript.):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdiffabledatasource/3553221-sectionidentifierforrow
    sectionIdentifierForRow(row: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdiffabledatasource/3553218-rowforsectionidentifier
    rowForSectionIdentifier(identifier: cocoascript.):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdiffabledatasource/3553222-snapshot
    snapshot():cocoascript.NSDiffableDataSourceSnapshot;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdiffabledatasource/3553212-applysnapshot
    applySnapshot_animatingDifferences(snapshot: cocoascript.NSDiffableDataSourceSnapshot, animatingDifferences: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdiffabledatasource/3553213-applysnapshot
    applySnapshot_animatingDifferences_completion(snapshot: cocoascript.NSDiffableDataSourceSnapshot, animatingDifferences: cocoascript.BOOL, completion: void):void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdiffabledatasource/3553214-defaultrowanimation
    defaultRowAnimation(): cocoascript.NSTableViewAnimationOptions;
    setDefaultRowAnimation(): void;
    //
    alloc():cocoascript.NSTableViewDiffableDataSource;
    //
    init():cocoascript.NSTableViewDiffableDataSource;
  }
}

declare const NSTableViewDiffableDataSource: cocoascript.NSTableViewDiffableDataSource;
