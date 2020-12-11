declare namespace cocoascript {
  /**
   * Methods adopted by system-supplied animator objects when committing preview-related animations.
   * doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractioncommitanimating
   */
  interface UIContextMenuInteractionCommitAnimating extends UIContextMenuInteractionAnimating {
    // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractioncommitanimating/3295931-preferredcommitstyle
    preferredCommitStyle(): cocoascript.UIContextMenuInteractionCommitStyle;
    setPreferredCommitStyle(): void;
  }
}
