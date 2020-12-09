declare namespace cocoascript {
/**
 * A method that supports cutting, copying, and dragging tokens from a search field. 
 * doc://com.apple.documentation/documentation/uikit/uisearchtextfielddelegate
 */
interface UISearchTextFieldDelegate extends UITextFieldDelegate {
  // doc://com.apple.documentation/documentation/uikit/uisearchtextfielddelegate/3175446-searchtextfield
  searchTextField_itemProviderForCopyingToken(searchTextField: cocoascript.UISearchTextField, token: cocoascript.UISearchToken):cocoascript.NSItemProvider;
}
}

