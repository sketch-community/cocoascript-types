declare namespace cocoascript {
  /**
   * Methods for managing selections, configuring section headers and footers, deleting and reordering cells, and performing other actions in a table view.
   * doc://com.apple.documentation/documentation/uikit/uitableviewdelegate
   */
  interface UITableViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614883-tableview
    tableView_willDisplayCell_forRowAtIndexPath(tableView: cocoascript.UITableView, cell: cocoascript.UITableViewCell, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614966-tableview
    tableView_indentationLevelForRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/2897335-tableview
    tableView_shouldSpringLoadRowAtIndexPath_withContext(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath, context: cocoascript.UISpringLoadedInteractionContext):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614943-tableview
    tableView_willSelectRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614877-tableview
    tableView_didSelectRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614977-tableview
    tableView_willDeselectRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614916-tableview
    tableView_didDeselectRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/3183943-tableview
    tableView_shouldBeginMultipleSelectionInteractionAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/3183942-tableview
    tableView_didBeginMultipleSelectionInteractionAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/3183944-tableviewdidendmultipleselection
    tableViewDidEndMultipleSelectionInteraction(tableView: cocoascript.UITableView):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614901-tableview
    tableView_viewForHeaderInSection(tableView: cocoascript.UITableView, section: cocoascript.NSInteger):cocoascript.UIView;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614946-tableview
    tableView_viewForFooterInSection(tableView: cocoascript.UITableView, section: cocoascript.NSInteger):cocoascript.UIView;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614905-tableview
    tableView_willDisplayHeaderView_forSection(tableView: cocoascript.UITableView, view: cocoascript.UIView, section: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614941-tableview
    tableView_willDisplayFooterView_forSection(tableView: cocoascript.UITableView, view: cocoascript.UIView, section: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614998-tableview
    tableView_heightForRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614855-tableview
    tableView_heightForHeaderInSection(tableView: cocoascript.UITableView, section: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614967-tableview
    tableView_heightForFooterInSection(tableView: cocoascript.UITableView, section: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614926-tableview
    tableView_estimatedHeightForRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614854-tableview
    tableView_estimatedHeightForHeaderInSection(tableView: cocoascript.UITableView, section: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614939-tableview
    tableView_estimatedHeightForFooterInSection(tableView: cocoascript.UITableView, section: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614948-tableview
    tableView_accessoryTypeForRowWithIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.UITableViewCellAccessoryType;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614996-tableview
    tableView_accessoryButtonTappedForRowWithIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/3295956-tableview
    tableView_contextMenuConfigurationForRowAtIndexPath_point(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath, point: cocoascript.CGPoint):cocoascript.UIContextMenuConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/3295957-tableview
    tableView_previewForDismissingContextMenuWithConfiguration(tableView: cocoascript.UITableView, configuration: cocoascript.UIContextMenuConfiguration):cocoascript.UITargetedPreview;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/3295958-tableview
    tableView_previewForHighlightingContextMenuWithConfiguration(tableView: cocoascript.UITableView, configuration: cocoascript.UIContextMenuConfiguration):cocoascript.UITargetedPreview;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/3601231-tableview
    tableView_willDisplayContextMenuWithConfiguration_animator(tableView: cocoascript.UITableView, configuration: cocoascript.UIContextMenuConfiguration, animator: cocoascript.UIContextMenuInteractionAnimating):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/3601232-tableview
    tableView_willEndContextMenuInteractionWithConfiguration_animator(tableView: cocoascript.UITableView, configuration: cocoascript.UIContextMenuConfiguration, animator: cocoascript.UIContextMenuInteractionAnimating):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/3375810-tableview
    tableView_willPerformPreviewActionForMenuWithConfiguration_animator(tableView: cocoascript.UITableView, configuration: cocoascript.UIContextMenuConfiguration, animator: cocoascript.UIContextMenuInteractionCommitAnimating):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/2902366-tableview
    tableView_leadingSwipeActionsConfigurationForRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.UISwipeActionsConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/2902367-tableview
    tableView_trailingSwipeActionsConfigurationForRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.UISwipeActionsConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614950-tableview
    tableView_shouldShowMenuForRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614898-tableview
    tableView_canPerformAction_forRowAtIndexPath_withSender(tableView: cocoascript.UITableView, action: cocoascript.SEL, indexPath: cocoascript.NSIndexPath, sender: cocoascript.UITableViewDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614980-tableview
    tableView_performAction_forRowAtIndexPath_withSender(tableView: cocoascript.UITableView, action: cocoascript.SEL, indexPath: cocoascript.NSIndexPath, sender: cocoascript.UITableViewDelegate):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614956-tableview
    tableView_editActionsForRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.UITableViewRowAction;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614988-tableview
    tableView_shouldHighlightRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614982-tableview
    tableView_didHighlightRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614868-tableview
    tableView_didUnhighlightRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614907-tableview
    tableView_willBeginEditingRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614963-tableview
    tableView_didEndEditingRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614869-tableview
    tableView_editingStyleForRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.UITableViewCellEditingStyle;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614970-tableview
    tableView_titleForDeleteConfirmationButtonForRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614873-tableview
    tableView_shouldIndentWhileEditingRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614953-tableview
    tableView_targetIndexPathForMoveFromRowAtIndexPath_toProposedIndexPath(tableView: cocoascript.UITableView, sourceIndexPath: cocoascript.NSIndexPath, proposedDestinationIndexPath: cocoascript.NSIndexPath):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614870-tableview
    tableView_didEndDisplayingCell_forRowAtIndexPath(tableView: cocoascript.UITableView, cell: cocoascript.UITableViewCell, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614971-tableview
    tableView_didEndDisplayingHeaderView_forSection(tableView: cocoascript.UITableView, view: cocoascript.UIView, section: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614856-tableview
    tableView_didEndDisplayingFooterView_forSection(tableView: cocoascript.UITableView, view: cocoascript.UIView, section: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614973-tableview
    tableView_canFocusRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614949-tableview
    tableView_shouldUpdateFocusInContext(tableView: cocoascript.UITableView, context: cocoascript.UITableViewFocusUpdateContext):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614945-tableview
    tableView_didUpdateFocusInContext_withAnimationCoordinator(tableView: cocoascript.UITableView, context: cocoascript.UITableViewFocusUpdateContext, coordinator: cocoascript.UIFocusAnimationCoordinator):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdelegate/1614929-indexpathforpreferredfocusedview
    indexPathForPreferredFocusedViewInTableView(tableView: cocoascript.UITableView):cocoascript.NSIndexPath;
  }
}
