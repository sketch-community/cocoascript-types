declare namespace cocoascript {
/**
 * A protocol used to provide information about the layout's container and environment traits, such as size classes and display scale factor.
 * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutenvironment
 */
interface NSCollectionLayoutEnvironment extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutenvironment/3199073-container
  container(): cocoascript.NSCollectionLayoutContainer;
  setContainer(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutenvironment/3199074-traitcollection
  traitCollection(): cocoascript.UITraitCollection;
  setTraitCollection(): void;
}
}

