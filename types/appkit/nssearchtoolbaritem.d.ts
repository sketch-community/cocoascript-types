declare namespace cocoascript {
  /**
   * A toolbar item that contains a text field optimized for performing text-based searches.
   * doc://com.apple.documentation/documentation/appkit/nssearchtoolbaritem
   */
  interface NSSearchToolbarItem extends NSToolbarItem {
    // doc://com.apple.documentation/documentation/appkit/nssearchtoolbaritem/3634329-resignsfirstresponderwithcancel
    resignsFirstResponderWithCancel(): cocoascript.BOOL;
    setResignsFirstResponderWithCancel(): void;
    // doc://com.apple.documentation/documentation/appkit/nssearchtoolbaritem/3634330-searchfield
    searchField(): cocoascript.NSSearchField;
    setSearchField(): void;
    // doc://com.apple.documentation/documentation/appkit/nssearchtoolbaritem/3674528-preferredwidthforsearchfield
    preferredWidthForSearchField(): cocoascript.CGFloat;
    setPreferredWidthForSearchField(): void;
    // doc://com.apple.documentation/documentation/appkit/nssearchtoolbaritem/3674526-beginsearchinteraction
    beginSearchInteraction():void;
    // doc://com.apple.documentation/documentation/appkit/nssearchtoolbaritem/3674527-endsearchinteraction
    endSearchInteraction():void;
    //
    alloc():cocoascript.NSSearchToolbarItem;
    //
    init():cocoascript.NSSearchToolbarItem;
  }
}

declare const NSSearchToolbarItem: cocoascript.NSSearchToolbarItem;
