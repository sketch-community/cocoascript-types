declare namespace cocoascript {
/**
 * A set of methods that you use to manage the content in a collection view.
 * doc://com.apple.documentation/documentation/appkit/nscollectionviewelement
 */
interface NSCollectionViewElement extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewelement/1528248-prepareforreuse
  prepareForReuse():void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewelement/1528259-preferredlayoutattributesfitting
  preferredLayoutAttributesFittingAttributes(layoutAttributes: cocoascript.NSCollectionViewLayoutAttributes):cocoascript.NSCollectionViewLayoutAttributes;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewelement/1528294-applylayoutattributes
  applyLayoutAttributes(layoutAttributes: cocoascript.NSCollectionViewLayoutAttributes):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewelement/1528165-willtransitionfromlayout
  willTransitionFromLayout_toLayout(oldLayout: cocoascript.NSCollectionViewLayout, newLayout: cocoascript.NSCollectionViewLayout):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewelement/1525851-didtransitionfromlayout
  didTransitionFromLayout_toLayout(oldLayout: cocoascript.NSCollectionViewLayout, newLayout: cocoascript.NSCollectionViewLayout):void;
}
}

