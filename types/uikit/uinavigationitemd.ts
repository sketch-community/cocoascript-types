declare namespace cocoascript {
  /**
   * The items that a navigation bar displays when the associated view controller is visible.
   * doc://com.apple.documentation/documentation/uikit/uinavigationitem
   */
  interface UINavigationItem extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624943-initwithtitle
    initWithTitle(title: cocoascript.NSString):cocoascript.UINavigationItem;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624950-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UINavigationItem;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624965-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/2909056-largetitledisplaymode
    largeTitleDisplayMode(): cocoascript.UINavigationItemLargeTitleDisplayMode;
    setLargeTitleDisplayMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624958-backbarbuttonitem
    backBarButtonItem(): cocoascript.UIBarButtonItem;
    setBackBarButtonItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/3600576-backbuttontitle
    backButtonTitle(): cocoascript.NSString;
    setBackButtonTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/3656350-backbuttondisplaymode
    backButtonDisplayMode(): cocoascript.UINavigationItemBackButtonDisplayMode;
    setBackButtonDisplayMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624947-hidesbackbutton
    hidesBackButton(): cocoascript.BOOL;
    setHidesBackButton(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624934-sethidesbackbutton
    setHidesBackButton_animated(hidesBackButton: cocoascript.BOOL, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624930-prompt
    prompt(): cocoascript.NSString;
    setPrompt(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624933-leftitemssupplementbackbutton
    leftItemsSupplementBackButton(): cocoascript.BOOL;
    setLeftItemsSupplementBackButton(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624935-titleview
    titleView(): cocoascript.UIView;
    setTitleView(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624946-leftbarbuttonitems
    leftBarButtonItems(): cocoascript.UIBarButtonItem;
    setLeftBarButtonItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624936-leftbarbuttonitem
    leftBarButtonItem(): cocoascript.UIBarButtonItem;
    setLeftBarButtonItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624956-rightbarbuttonitems
    rightBarButtonItems(): cocoascript.UIBarButtonItem;
    setRightBarButtonItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624957-rightbarbuttonitem
    rightBarButtonItem(): cocoascript.UIBarButtonItem;
    setRightBarButtonItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624949-setleftbarbuttonitems
    setLeftBarButtonItems_animated(items: cocoascript.UIBarButtonItem, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624954-setleftbarbuttonitem
    setLeftBarButtonItem_animated(item: cocoascript.UIBarButtonItem, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624939-setrightbarbuttonitems
    setRightBarButtonItems_animated(items: cocoascript.UIBarButtonItem, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/1624929-setrightbarbuttonitem
    setRightBarButtonItem_animated(item: cocoascript.UIBarButtonItem, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/3198042-standardappearance
    standardAppearance(): cocoascript.UINavigationBarAppearance;
    setStandardAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/3198040-compactappearance
    compactAppearance(): cocoascript.UINavigationBarAppearance;
    setCompactAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/3198041-scrolledgeappearance
    scrollEdgeAppearance(): cocoascript.UINavigationBarAppearance;
    setScrollEdgeAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/2897305-searchcontroller
    searchController(): cocoascript.UISearchController;
    setSearchController(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationitem/2897296-hidessearchbarwhenscrolling
    hidesSearchBarWhenScrolling(): cocoascript.BOOL;
    setHidesSearchBarWhenScrolling(): void;
    //
    alloc():cocoascript.UINavigationItem;
    //
    init():cocoascript.UINavigationItem;
  }
}

declare const UINavigationItem: cocoascript.UINavigationItem;
