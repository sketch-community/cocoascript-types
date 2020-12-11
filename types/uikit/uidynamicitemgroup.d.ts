declare namespace cocoascript {
  /**
   * A dynamic item that comprises multiple other dynamic items.
   * doc://com.apple.documentation/documentation/uikit/uidynamicitemgroup
   */
  interface UIDynamicItemGroup extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidynamicitemgroup/1618485-initwithitems
    initWithItems(items: cocoascript.UIDynamicItem):cocoascript.UIDynamicItemGroup;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitemgroup/1618489-items
    items(): cocoascript.UIDynamicItem;
    setItems(): void;
    //
    alloc():cocoascript.UIDynamicItemGroup;
    //
    init():cocoascript.UIDynamicItemGroup;
  }
}

declare const UIDynamicItemGroup: cocoascript.UIDynamicItemGroup;
