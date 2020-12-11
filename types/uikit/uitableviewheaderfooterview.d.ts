declare namespace cocoascript {
  /**
   * A reusable view that you place at the top or bottom of a table section to display additional information for that section.
   * doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview
   */
  interface UITableViewHeaderFooterView extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/1624918-initwithreuseidentifier
    initWithReuseIdentifier(reuseIdentifier: cocoascript.NSString):cocoascript.UITableViewHeaderFooterView;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/1624917-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UITableViewHeaderFooterView;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/1624909-reuseidentifier
    reuseIdentifier(): cocoascript.NSString;
    setReuseIdentifier(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/1624916-prepareforreuse
    prepareForReuse():void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/3600594-backgroundconfiguration
    backgroundConfiguration(): cocoascript.UIBackgroundConfiguration;
    setBackgroundConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/3600592-automaticallyupdatesbackgroundco
    automaticallyUpdatesBackgroundConfiguration(): cocoascript.BOOL;
    setAutomaticallyUpdatesBackgroundConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/1624913-backgroundview
    backgroundView(): cocoascript.UIView;
    setBackgroundView(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/3600597-defaultcontentconfiguration
    defaultContentConfiguration():cocoascript.UIListContentConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/3600596-contentconfiguration
    contentConfiguration(): cocoascript.UIContentConfiguration;
    setContentConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/3600593-automaticallyupdatescontentconfi
    automaticallyUpdatesContentConfiguration(): cocoascript.BOOL;
    setAutomaticallyUpdatesContentConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/1624914-contentview
    contentView(): cocoascript.UIView;
    setContentView(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/1624912-textlabel
    textLabel(): cocoascript.UILabel;
    setTextLabel(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/1624910-detailtextlabel
    detailTextLabel(): cocoascript.UILabel;
    setDetailTextLabel(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/3600595-configurationstate
    configurationState(): cocoascript.UIViewConfigurationState;
    setConfigurationState(): void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/3600598-setneedsupdateconfiguration
    setNeedsUpdateConfiguration():void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewheaderfooterview/3600599-updateconfigurationusingstate
    updateConfigurationUsingState(state: cocoascript.UIViewConfigurationState):void;
    //
    alloc():cocoascript.UITableViewHeaderFooterView;
    //
    init():cocoascript.UITableViewHeaderFooterView;
  }
}

declare const UITableViewHeaderFooterView: cocoascript.UITableViewHeaderFooterView;
