declare namespace cocoascript {
  /**
   * The methods adopted by the object you use to manage user interactions with items in a collection view.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate
   */
  interface UICollectionViewDelegate extends UIScrollViewDelegate {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618095-collectionview
    collectionView_shouldSelectItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618032-collectionview
    collectionView_didSelectItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618067-collectionview
    collectionView_shouldDeselectItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618035-collectionview
    collectionView_didDeselectItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/3183916-collectionview
    collectionView_shouldBeginMultipleSelectionInteractionAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/3183915-collectionview
    collectionView_didBeginMultipleSelectionInteractionAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/3183917-collectionviewdidendmultiplesele
    collectionViewDidEndMultipleSelectionInteraction(collectionView: cocoascript.UICollectionView):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618070-collectionview
    collectionView_shouldHighlightItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618049-collectionview
    collectionView_didHighlightItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618027-collectionview
    collectionView_didUnhighlightItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618087-collectionview
    collectionView_willDisplayCell_forItemAtIndexPath(collectionView: cocoascript.UICollectionView, cell: cocoascript.UICollectionViewCell, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618062-collectionview
    collectionView_willDisplaySupplementaryView_forElementKind_atIndexPath(collectionView: cocoascript.UICollectionView, view: cocoascript.UICollectionReusableView, elementKind: cocoascript.NSString, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618006-collectionview
    collectionView_didEndDisplayingCell_forItemAtIndexPath(collectionView: cocoascript.UICollectionView, cell: cocoascript.UICollectionViewCell, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618036-collectionview
    collectionView_didEndDisplayingSupplementaryView_forElementOfKind_atIndexPath(collectionView: cocoascript.UICollectionView, view: cocoascript.UICollectionReusableView, elementKind: cocoascript.NSString, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618100-collectionview
    collectionView_transitionLayoutForOldLayout_newLayout(collectionView: cocoascript.UICollectionView, fromLayout: cocoascript.UICollectionViewLayout, toLayout: cocoascript.UICollectionViewLayout):cocoascript.UICollectionViewTransitionLayout;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618007-collectionview
    collectionView_targetContentOffsetForProposedContentOffset(collectionView: cocoascript.UICollectionView, proposedContentOffset: cocoascript.CGPoint):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618052-collectionview
    collectionView_targetIndexPathForMoveFromItemAtIndexPath_toProposedIndexPath(collectionView: cocoascript.UICollectionView, originalIndexPath: cocoascript.NSIndexPath, proposedIndexPath: cocoascript.NSIndexPath):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/3295917-collectionview
    collectionView_contextMenuConfigurationForItemAtIndexPath_point(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath, point: cocoascript.CGPoint):cocoascript.UIContextMenuConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/3295918-collectionview
    collectionView_previewForDismissingContextMenuWithConfiguration(collectionView: cocoascript.UICollectionView, configuration: cocoascript.UIContextMenuConfiguration):cocoascript.UITargetedPreview;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/3295919-collectionview
    collectionView_previewForHighlightingContextMenuWithConfiguration(collectionView: cocoascript.UICollectionView, configuration: cocoascript.UIContextMenuConfiguration):cocoascript.UITargetedPreview;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/3601203-collectionview
    collectionView_willDisplayContextMenuWithConfiguration_animator(collectionView: cocoascript.UICollectionView, configuration: cocoascript.UIContextMenuConfiguration, animator: cocoascript.UIContextMenuInteractionAnimating):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/3601204-collectionview
    collectionView_willEndContextMenuInteractionWithConfiguration_animator(collectionView: cocoascript.UICollectionView, configuration: cocoascript.UIContextMenuConfiguration, animator: cocoascript.UIContextMenuInteractionAnimating):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/3375794-collectionview
    collectionView_willPerformPreviewActionForMenuWithConfiguration_animator(collectionView: cocoascript.UICollectionView, configuration: cocoascript.UIContextMenuConfiguration, animator: cocoascript.UIContextMenuInteractionCommitAnimating):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618013-collectionview
    collectionView_canFocusItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618066-indexpathforpreferredfocusedview
    indexPathForPreferredFocusedViewInCollectionView(collectionView: cocoascript.UICollectionView):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618072-collectionview
    collectionView_shouldUpdateFocusInContext(collectionView: cocoascript.UICollectionView, context: cocoascript.UICollectionViewFocusUpdateContext):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618081-collectionview
    collectionView_didUpdateFocusInContext_withAnimationCoordinator(collectionView: cocoascript.UICollectionView, context: cocoascript.UICollectionViewFocusUpdateContext, coordinator: cocoascript.UIFocusAnimationCoordinator):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/3600426-collectionview
    collectionView_canEditItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/2897333-collectionview
    collectionView_shouldSpringLoadItemAtIndexPath_withContext(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath, context: cocoascript.UISpringLoadedInteractionContext):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618010-collectionview
    collectionView_shouldShowMenuForItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618051-collectionview
    collectionView_canPerformAction_forItemAtIndexPath_withSender(collectionView: cocoascript.UICollectionView, action: cocoascript.SEL, indexPath: cocoascript.NSIndexPath, sender: cocoascript.UICollectionViewDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegate/1618073-collectionview
    collectionView_performAction_forItemAtIndexPath_withSender(collectionView: cocoascript.UICollectionView, action: cocoascript.SEL, indexPath: cocoascript.NSIndexPath, sender: cocoascript.UICollectionViewDelegate):void;
  }
}
