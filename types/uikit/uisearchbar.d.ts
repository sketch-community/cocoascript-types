declare namespace cocoascript {
  /**
   * A specialized view for receiving search-related information from the user.
   * doc://com.apple.documentation/documentation/uikit/uisearchbar
   */
  interface UISearchBar extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624304-init
    init():cocoascript.UISearchBar;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624324-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UISearchBar;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624269-initwithframe
    initWithFrame(frame: cocoascript.CGRect):cocoascript.UISearchBar;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624291-delegate
    delegate(): cocoascript.UISearchBarDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624322-placeholder
    placeholder(): cocoascript.NSString;
    setPlaceholder(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624326-prompt
    prompt(): cocoascript.NSString;
    setPrompt(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624282-text
    text(): cocoascript.NSString;
    setText(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624295-bartintcolor
    barTintColor(): cocoascript.UIColor;
    setBarTintColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624281-searchbarstyle
    searchBarStyle(): cocoascript.UISearchBarStyle;
    setSearchBarStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624286-tintcolor
    tintColor(): cocoascript.UIColor;
    setTintColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624321-translucent
    translucent(): cocoascript.BOOL;
    setTranslucent(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624270-barstyle
    barStyle(): cocoascript.UIBarStyle;
    setBarStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624275-inputassistantitem
    inputAssistantItem(): cocoascript.UITextInputAssistantItem;
    setInputAssistantItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624298-showsbookmarkbutton
    showsBookmarkButton(): cocoascript.BOOL;
    setShowsBookmarkButton(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624283-showscancelbutton
    showsCancelButton(): cocoascript.BOOL;
    setShowsCancelButton(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624293-setshowscancelbutton
    setShowsCancelButton_animated(showsCancelButton: cocoascript.BOOL, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624273-showssearchresultsbutton
    showsSearchResultsButton(): cocoascript.BOOL;
    setShowsSearchResultsButton(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624285-searchresultsbuttonselected
    searchResultsButtonSelected(): cocoascript.BOOL;
    setSearchResultsButtonSelected(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624292-scopebuttontitles
    scopeButtonTitles(): cocoascript.NSString;
    setScopeButtonTitles(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624287-selectedscopebuttonindex
    selectedScopeButtonIndex(): cocoascript.NSInteger;
    setSelectedScopeButtonIndex(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624319-showsscopebar
    showsScopeBar(): cocoascript.BOOL;
    setShowsScopeBar(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624276-backgroundimage
    backgroundImage(): cocoascript.UIImage;
    setBackgroundImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624274-backgroundimageforbarposition
    backgroundImageForBarPosition_barMetrics(barPosition: cocoascript.UIBarPosition, barMetrics: cocoascript.UIBarMetrics):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624325-setbackgroundimage
    setBackgroundImage_forBarPosition_barMetrics(backgroundImage: cocoascript.UIImage, barPosition: cocoascript.UIBarPosition, barMetrics: cocoascript.UIBarMetrics):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624296-imageforsearchbaricon
    imageForSearchBarIcon_state(icon: cocoascript.UISearchBarIcon, state: cocoascript.UIControlState):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624330-setimage
    setImage_forSearchBarIcon_state(iconImage: cocoascript.UIImage, icon: cocoascript.UISearchBarIcon, state: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624323-positionadjustmentforsearchbaric
    positionAdjustmentForSearchBarIcon(icon: cocoascript.UISearchBarIcon):cocoascript.UIOffset;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624278-setpositionadjustment
    setPositionAdjustment_forSearchBarIcon(adjustment: cocoascript.UIOffset, icon: cocoascript.UISearchBarIcon):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624279-inputaccessoryview
    inputAccessoryView(): cocoascript.UIView;
    setInputAccessoryView(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624317-scopebarbackgroundimage
    scopeBarBackgroundImage(): cocoascript.UIImage;
    setScopeBarBackgroundImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624311-scopebarbuttonbackgroundimagefor
    scopeBarButtonBackgroundImageForState(state: cocoascript.UIControlState):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624290-setscopebarbuttonbackgroundimage
    setScopeBarButtonBackgroundImage_forState(backgroundImage: cocoascript.UIImage, state: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624313-scopebarbuttondividerimageforlef
    scopeBarButtonDividerImageForLeftSegmentState_rightSegmentState(leftState: cocoascript.UIControlState, rightState: cocoascript.UIControlState):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624308-setscopebarbuttondividerimage
    setScopeBarButtonDividerImage_forLeftSegmentState_rightSegmentState(dividerImage: cocoascript.UIImage, leftState: cocoascript.UIControlState, rightState: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624309-scopebarbuttontitletextattribute
    scopeBarButtonTitleTextAttributesForState(state: cocoascript.UIControlState):cocoascript.UISearchBar;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624277-setscopebarbuttontitletextattrib
    setScopeBarButtonTitleTextAttributes_forState(attributes: cocoascript.UISearchBar, state: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624288-searchfieldbackgroundimageforsta
    searchFieldBackgroundImageForState(state: cocoascript.UIControlState):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624307-setsearchfieldbackgroundimage
    setSearchFieldBackgroundImage_forState(backgroundImage: cocoascript.UIImage, state: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624320-searchfieldbackgroundpositionadj
    searchFieldBackgroundPositionAdjustment(): cocoascript.UIOffset;
    setSearchFieldBackgroundPositionAdjustment(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/1624297-searchtextpositionadjustment
    searchTextPositionAdjustment(): cocoascript.UIOffset;
    setSearchTextPositionAdjustment(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/3175433-searchtextfield
    searchTextField(): cocoascript.UISearchTextField;
    setSearchTextField(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchbar/3152925-setshowsscopebar
    setShowsScopeBar_animated(show: cocoascript.BOOL, animate: cocoascript.BOOL):void;
    //
    alloc():cocoascript.UISearchBar;
    //
    init():cocoascript.UISearchBar;
  }
}

declare const UISearchBar: cocoascript.UISearchBar;
