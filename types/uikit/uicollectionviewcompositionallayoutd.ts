declare namespace cocoascript {
/**
 * A layout object that lets you combine items in highly adaptive and flexible visual arrangements. 
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewcompositionallayout
 */
interface UICollectionViewCompositionalLayout extends UICollectionViewLayout {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcompositionallayout/3199211-initwithsection
  initWithSection(section: cocoascript.NSCollectionLayoutSection):cocoascript.UICollectionViewCompositionalLayout;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcompositionallayout/3199212-initwithsection
  initWithSection_configuration(section: cocoascript.NSCollectionLayoutSection, configuration: cocoascript.UICollectionViewCompositionalLayoutConfiguration):cocoascript.UICollectionViewCompositionalLayout;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcompositionallayout/3199214-initwithsectionprovider
  initWithSectionProvider(sectionProvider: cocoascript.UICollectionViewCompositionalLayoutSectionProvider):cocoascript.UICollectionViewCompositionalLayout;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcompositionallayout/3199215-initwithsectionprovider
  initWithSectionProvider_configuration(sectionProvider: cocoascript.UICollectionViewCompositionalLayoutSectionProvider, configuration: cocoascript.UICollectionViewCompositionalLayoutConfiguration):cocoascript.UICollectionViewCompositionalLayout;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcompositionallayout/3199209-configuration
  configuration(): cocoascript.UICollectionViewCompositionalLayoutConfiguration;
  setConfiguration(): void;
  // 
  alloc():cocoascript.UICollectionViewCompositionalLayout;
  // 
  init():cocoascript.UICollectionViewCompositionalLayout;
}
}
declare const UICollectionViewCompositionalLayout: cocoascript.UICollectionViewCompositionalLayout;

