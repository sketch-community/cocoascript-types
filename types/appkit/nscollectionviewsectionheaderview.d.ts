declare namespace cocoascript {
  /**
   * A protocol that defines a button to control the collapse of a collection view’s section.
   * doc://com.apple.documentation/documentation/appkit/nscollectionviewsectionheaderview
   */
  interface NSCollectionViewSectionHeaderView extends NSCollectionViewElement {
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewsectionheaderview/1644266-sectioncollapsebutton
    sectionCollapseButton(): cocoascript.NSButton;
    setSectionCollapseButton(): void;
  }
}
