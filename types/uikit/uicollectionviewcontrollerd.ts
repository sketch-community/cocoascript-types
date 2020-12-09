declare namespace cocoascript {
/**
 * A view controller that specializes in managing a collection view.
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewcontroller
 */
interface UICollectionViewController extends UIViewController {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcontroller/1623976-initwithcollectionviewlayout
  initWithCollectionViewLayout(layout: cocoascript.UICollectionViewLayout):cocoascript.UICollectionViewController;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcontroller/1623975-initwithnibname
  initWithNibName_bundle(nibNameOrNil: cocoascript.NSString, nibBundleOrNil: cocoascript.NSBundle):cocoascript.UICollectionViewController;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcontroller/1623981-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UICollectionViewController;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcontroller/1623983-collectionview
  collectionView(): cocoascript.UICollectionView;
  setCollectionView(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcontroller/1623980-collectionviewlayout
  collectionViewLayout(): cocoascript.UICollectionViewLayout;
  setCollectionViewLayout(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcontroller/1623977-clearsselectiononviewwillappear
  clearsSelectionOnViewWillAppear(): cocoascript.BOOL;
  setClearsSelectionOnViewWillAppear(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcontroller/1623979-installsstandardgestureforintera
  installsStandardGestureForInteractiveMovement(): cocoascript.BOOL;
  setInstallsStandardGestureForInteractiveMovement(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcontroller/1623978-uselayouttolayoutnavigationtrans
  useLayoutToLayoutNavigationTransitions(): cocoascript.BOOL;
  setUseLayoutToLayoutNavigationTransitions(): void;
  // 
  alloc():cocoascript.UICollectionViewController;
  // 
  init():cocoascript.UICollectionViewController;
}
}
declare const UICollectionViewController: cocoascript.UICollectionViewController;

