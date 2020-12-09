declare namespace cocoascript {
/**
 * The visual representation of a single row in a table view.
 * doc://com.apple.documentation/documentation/uikit/uitableviewcell
 */
interface UITableViewCell extends UIView {
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623276-initwithstyle
  initWithStyle_reuseIdentifier(style: cocoascript.UITableViewCellStyle, reuseIdentifier: cocoascript.NSString):cocoascript.UITableViewCell;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623220-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UITableViewCell;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623246-reuseidentifier
  reuseIdentifier(): cocoascript.NSString;
  setReuseIdentifier(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623223-prepareforreuse
  prepareForReuse():void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/3600586-backgroundconfiguration
  backgroundConfiguration(): cocoascript.UIBackgroundConfiguration;
  setBackgroundConfiguration(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/3600584-automaticallyupdatesbackgroundco
  automaticallyUpdatesBackgroundConfiguration(): cocoascript.BOOL;
  setAutomaticallyUpdatesBackgroundConfiguration(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623260-backgroundview
  backgroundView(): cocoascript.UIView;
  setBackgroundView(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623226-selectedbackgroundview
  selectedBackgroundView(): cocoascript.UIView;
  setSelectedBackgroundView(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623275-multipleselectionbackgroundview
  multipleSelectionBackgroundView(): cocoascript.UIView;
  setMultipleSelectionBackgroundView(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/3600589-defaultcontentconfiguration
  defaultContentConfiguration():cocoascript.UIListContentConfiguration;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/3600588-contentconfiguration
  contentConfiguration(): cocoascript.UIContentConfiguration;
  setContentConfiguration(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/3600585-automaticallyupdatescontentconfi
  automaticallyUpdatesContentConfiguration(): cocoascript.BOOL;
  setAutomaticallyUpdatesContentConfiguration(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623229-contentview
  contentView(): cocoascript.UIView;
  setContentView(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623210-textlabel
  textLabel(): cocoascript.UILabel;
  setTextLabel(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623273-detailtextlabel
  detailTextLabel(): cocoascript.UILabel;
  setDetailTextLabel(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623270-imageview
  imageView(): cocoascript.UIImageView;
  setImageView(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/3600587-configurationstate
  configurationState(): cocoascript.UICellConfigurationState;
  setConfigurationState(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/3600590-setneedsupdateconfiguration
  setNeedsUpdateConfiguration():void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/3600591-updateconfigurationusingstate
  updateConfigurationUsingState(state: cocoascript.UICellConfigurationState):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623228-accessorytype
  accessoryType(): cocoascript.UITableViewCellAccessoryType;
  setAccessoryType(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623219-accessoryview
  accessoryView(): cocoascript.UIView;
  setAccessoryView(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623266-editingaccessorytype
  editingAccessoryType(): cocoascript.UITableViewCellAccessoryType;
  setEditingAccessoryType(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623264-editingaccessoryview
  editingAccessoryView(): cocoascript.UIView;
  setEditingAccessoryView(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623221-selectionstyle
  selectionStyle(): cocoascript.UITableViewCellSelectionStyle;
  setSelectionStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623263-selected
  selected(): cocoascript.BOOL;
  setSelected(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623255-setselected
  setSelected_animated(selected: cocoascript.BOOL, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623241-highlighted
  highlighted(): cocoascript.BOOL;
  setHighlighted(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623280-sethighlighted
  setHighlighted_animated(highlighted: cocoascript.BOOL, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623268-editing
  editing(): cocoascript.BOOL;
  setEditing(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623222-setediting
  setEditing_animated(editing: cocoascript.BOOL, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623234-editingstyle
  editingStyle(): cocoascript.UITableViewCellEditingStyle;
  setEditingStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623211-showingdeleteconfirmation
  showingDeleteConfirmation(): cocoascript.BOOL;
  setShowingDeleteConfirmation(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623243-showsreordercontrol
  showsReorderControl(): cocoascript.BOOL;
  setShowsReorderControl(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/2897414-userinteractionenabledwhiledragg
  userInteractionEnabledWhileDragging(): cocoascript.BOOL;
  setUserInteractionEnabledWhileDragging(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/2897452-dragstatedidchange
  dragStateDidChange(dragState: cocoascript.UITableViewCellDragState):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623240-willtransitiontostate
  willTransitionToState(state: cocoascript.UITableViewCellStateMask):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623274-didtransitiontostate
  didTransitionToState(state: cocoascript.UITableViewCellStateMask):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623252-indentationlevel
  indentationLevel(): cocoascript.NSInteger;
  setIndentationLevel(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623247-indentationwidth
  indentationWidth(): cocoascript.CGFloat;
  setIndentationWidth(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623214-shouldindentwhileediting
  shouldIndentWhileEditing(): cocoascript.BOOL;
  setShouldIndentWhileEditing(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623250-separatorinset
  separatorInset(): cocoascript.UIEdgeInsets;
  setSeparatorInset(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623248-focusstyle
  focusStyle(): cocoascript.UITableViewCellFocusStyle;
  setFocusStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623218-initwithframe
  initWithFrame_reuseIdentifier(frame: cocoascript.CGRect, reuseIdentifier: cocoascript.NSString):cocoascript.UITableViewCell;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623237-text
  text(): cocoascript.NSString;
  setText(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623236-font
  font(): cocoascript.UIFont;
  setFont(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623284-textalignment
  textAlignment(): cocoascript.NSTextAlignment;
  setTextAlignment(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623235-textcolor
  textColor(): cocoascript.UIColor;
  setTextColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623251-selectedtextcolor
  selectedTextColor(): cocoascript.UIColor;
  setSelectedTextColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623259-linebreakmode
  lineBreakMode(): cocoascript.NSLineBreakMode;
  setLineBreakMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623213-image
  image(): cocoascript.UIImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623215-selectedimage
  selectedImage(): cocoascript.UIImage;
  setSelectedImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623230-hidesaccessorywhenediting
  hidesAccessoryWhenEditing(): cocoascript.BOOL;
  setHidesAccessoryWhenEditing(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623272-target
  target(): cocoascript.id;
  setTarget(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623206-editaction
  editAction(): cocoascript.SEL;
  setEditAction(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcell/1623249-accessoryaction
  accessoryAction(): cocoascript.SEL;
  setAccessoryAction(): void;
  // 
  alloc():cocoascript.UITableViewCell;
  // 
  init():cocoascript.UITableViewCell;
}
}
declare const UITableViewCell: cocoascript.UITableViewCell;

