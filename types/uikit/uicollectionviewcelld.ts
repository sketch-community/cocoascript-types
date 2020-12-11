declare namespace cocoascript {
  /**
   * A single data item when that item is within the collection view’s visible bounds.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewcell
   */
  interface UICollectionViewCell extends UICollectionReusableView {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/3600429-backgroundconfiguration
    backgroundConfiguration(): cocoascript.UIBackgroundConfiguration;
    setBackgroundConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/3600427-automaticallyupdatesbackgroundco
    automaticallyUpdatesBackgroundConfiguration(): cocoascript.BOOL;
    setAutomaticallyUpdatesBackgroundConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/1620131-backgroundview
    backgroundView(): cocoascript.UIView;
    setBackgroundView(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/1620138-selectedbackgroundview
    selectedBackgroundView(): cocoascript.UIView;
    setSelectedBackgroundView(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/3600431-contentconfiguration
    contentConfiguration(): cocoascript.UIContentConfiguration;
    setContentConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/3600428-automaticallyupdatescontentconfi
    automaticallyUpdatesContentConfiguration(): cocoascript.BOOL;
    setAutomaticallyUpdatesContentConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/1620133-contentview
    contentView(): cocoascript.UIView;
    setContentView(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/3600430-configurationstate
    configurationState(): cocoascript.UICellConfigurationState;
    setConfigurationState(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/3600432-setneedsupdateconfiguration
    setNeedsUpdateConfiguration():void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/3600433-updateconfigurationusingstate
    updateConfigurationUsingState(state: cocoascript.UICellConfigurationState):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/1620130-selected
    selected(): cocoascript.BOOL;
    setSelected(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/1620134-highlighted
    highlighted(): cocoascript.BOOL;
    setHighlighted(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewcell/2897262-dragstatedidchange
    dragStateDidChange(dragState: cocoascript.UICollectionViewCellDragState):void;
    //
    alloc():cocoascript.UICollectionViewCell;
    //
    init():cocoascript.UICollectionViewCell;
  }
}

declare const UICollectionViewCell: cocoascript.UICollectionViewCell;
