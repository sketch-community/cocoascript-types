declare namespace cocoascript {
  /**
   * A specialized button for placement on a toolbar or tab bar.
   * doc://com.apple.documentation/documentation/uikit/uibarbuttonitem
   */
  interface UIBarButtonItem extends UIBarItem {
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617153-initwithbarbuttonsystemitem
    initWithBarButtonSystemItem_target_action(systemItem: cocoascript.UIBarButtonSystemItem, target: cocoascript.UIBarButtonItem, action: cocoascript.SEL):cocoascript.UIBarButtonItem;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617151-initwithcustomview
    initWithCustomView(customView: cocoascript.UIView):cocoascript.UIBarButtonItem;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617163-initwithimage
    initWithImage_style_target_action(image: cocoascript.UIImage, style: cocoascript.UIBarButtonItemStyle, target: cocoascript.UIBarButtonItem, action: cocoascript.SEL):cocoascript.UIBarButtonItem;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617148-initwithtitle
    initWithTitle_style_target_action(title: cocoascript.NSString, style: cocoascript.UIBarButtonItemStyle, target: cocoascript.UIBarButtonItem, action: cocoascript.SEL):cocoascript.UIBarButtonItem;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617118-initwithimage
    initWithImage_landscapeImagePhone_style_target_action(image: cocoascript.UIImage, landscapeImagePhone: cocoascript.UIImage, style: cocoascript.UIBarButtonItemStyle, target: cocoascript.UIBarButtonItem, action: cocoascript.SEL):cocoascript.UIBarButtonItem;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617166-init
    init():cocoascript.UIBarButtonItem;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617111-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIBarButtonItem;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/3600340-initwithbarbuttonsystemitem
    initWithBarButtonSystemItem_menu(systemItem: cocoascript.UIBarButtonSystemItem, menu: cocoascript.UIMenu):cocoascript.UIBarButtonItem;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/3600341-initwithbarbuttonsystemitem
    initWithBarButtonSystemItem_primaryAction(systemItem: cocoascript.UIBarButtonSystemItem, primaryAction: cocoascript.UIAction):cocoascript.UIBarButtonItem;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/3600342-initwithimage
    initWithImage_menu(image: cocoascript.UIImage, menu: cocoascript.UIMenu):cocoascript.UIBarButtonItem;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/3600343-initwithprimaryaction
    initWithPrimaryAction(primaryAction: cocoascript.UIAction):cocoascript.UIBarButtonItem;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/3600344-initwithtitle
    initWithTitle_menu(title: cocoascript.NSString, menu: cocoascript.UIMenu):cocoascript.UIBarButtonItem;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617154-target
    target(): cocoascript.id;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617127-action
    action(): cocoascript.SEL;
    setAction(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617114-style
    style(): cocoascript.UIBarButtonItemStyle;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617132-possibletitles
    possibleTitles(): cocoascript.NSString;
    setPossibleTitles(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617155-width
    width(): cocoascript.CGFloat;
    setWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617129-customview
    customView(): cocoascript.UIView;
    setCustomView(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/3601188-menu
    menu(): cocoascript.UIMenu;
    setMenu(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/3600345-primaryaction
    primaryAction(): cocoascript.UIAction;
    setPrimaryAction(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617135-tintcolor
    tintColor(): cocoascript.UIColor;
    setTintColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617125-backbuttonbackgroundimageforstat
    backButtonBackgroundImageForState_barMetrics(state: cocoascript.UIControlState, barMetrics: cocoascript.UIBarMetrics):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617128-setbackbuttonbackgroundimage
    setBackButtonBackgroundImage_forState_barMetrics(backgroundImage: cocoascript.UIImage, state: cocoascript.UIControlState, barMetrics: cocoascript.UIBarMetrics):void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617145-backbuttontitlepositionadjustmen
    backButtonTitlePositionAdjustmentForBarMetrics(barMetrics: cocoascript.UIBarMetrics):cocoascript.UIOffset;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617139-setbackbuttontitlepositionadjust
    setBackButtonTitlePositionAdjustment_forBarMetrics(adjustment: cocoascript.UIOffset, barMetrics: cocoascript.UIBarMetrics):void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617120-backbuttonbackgroundverticalposi
    backButtonBackgroundVerticalPositionAdjustmentForBarMetrics(barMetrics: cocoascript.UIBarMetrics):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617124-setbackbuttonbackgroundverticalp
    setBackButtonBackgroundVerticalPositionAdjustment_forBarMetrics(adjustment: cocoascript.CGFloat, barMetrics: cocoascript.UIBarMetrics):void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617143-backgroundverticalpositionadjust
    backgroundVerticalPositionAdjustmentForBarMetrics(barMetrics: cocoascript.UIBarMetrics):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617141-setbackgroundverticalpositionadj
    setBackgroundVerticalPositionAdjustment_forBarMetrics(adjustment: cocoascript.CGFloat, barMetrics: cocoascript.UIBarMetrics):void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617134-backgroundimageforstate
    backgroundImageForState_barMetrics(state: cocoascript.UIControlState, barMetrics: cocoascript.UIBarMetrics):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617138-setbackgroundimage
    setBackgroundImage_forState_barMetrics(backgroundImage: cocoascript.UIImage, state: cocoascript.UIControlState, barMetrics: cocoascript.UIBarMetrics):void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617117-backgroundimageforstate
    backgroundImageForState_style_barMetrics(state: cocoascript.UIControlState, style: cocoascript.UIBarButtonItemStyle, barMetrics: cocoascript.UIBarMetrics):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617161-setbackgroundimage
    setBackgroundImage_forState_style_barMetrics(backgroundImage: cocoascript.UIImage, state: cocoascript.UIControlState, style: cocoascript.UIBarButtonItemStyle, barMetrics: cocoascript.UIBarMetrics):void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617160-titlepositionadjustmentforbarmet
    titlePositionAdjustmentForBarMetrics(barMetrics: cocoascript.UIBarMetrics):cocoascript.UIOffset;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1617149-settitlepositionadjustment
    setTitlePositionAdjustment_forBarMetrics(adjustment: cocoascript.UIOffset, barMetrics: cocoascript.UIBarMetrics):void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitem/1623564-buttongroup
    buttonGroup(): cocoascript.UIBarButtonItemGroup;
    setButtonGroup(): void;
    //
    alloc():cocoascript.UIBarButtonItem;
    //
    init():cocoascript.UIBarButtonItem;
  }
}

declare const UIBarButtonItem: cocoascript.UIBarButtonItem;
