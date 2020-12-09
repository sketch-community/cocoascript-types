declare namespace cocoascript {
/**
 * A layout object that lets you combine items in highly adaptive and flexible visual arrangements.
 * doc://com.apple.documentation/documentation/appkit/nscollectionviewcompositionallayout
 */
interface NSCollectionViewCompositionalLayout extends NSCollectionViewLayout {
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewcompositionallayout/3281806-initwithsection
  initWithSection(section: cocoascript.NSCollectionLayoutSection):cocoascript.NSCollectionViewCompositionalLayout;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewcompositionallayout/3281807-initwithsection
  initWithSection_configuration(section: cocoascript.NSCollectionLayoutSection, configuration: cocoascript.NSCollectionViewCompositionalLayoutConfiguration):cocoascript.NSCollectionViewCompositionalLayout;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewcompositionallayout/3281808-initwithsectionprovider
  initWithSectionProvider(sectionProvider: cocoascript.NSCollectionViewCompositionalLayoutSectionProvider):cocoascript.NSCollectionViewCompositionalLayout;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewcompositionallayout/3281809-initwithsectionprovider
  initWithSectionProvider_configuration(sectionProvider: cocoascript.NSCollectionViewCompositionalLayoutSectionProvider, configuration: cocoascript.NSCollectionViewCompositionalLayoutConfiguration):cocoascript.NSCollectionViewCompositionalLayout;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewcompositionallayout/3281805-configuration
  configuration(): cocoascript.NSCollectionViewCompositionalLayoutConfiguration;
  setConfiguration(): void;
  // 
  alloc():cocoascript.NSCollectionViewCompositionalLayout;
  // 
  init():cocoascript.NSCollectionViewCompositionalLayout;
}
}
declare const NSCollectionViewCompositionalLayout: cocoascript.NSCollectionViewCompositionalLayout;

