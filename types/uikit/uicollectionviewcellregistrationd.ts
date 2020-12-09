declare namespace cocoascript {
/**
 * A registration for the collection view’s cells.
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewcellregistration
 */
interface UICollectionViewCellRegistration extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcellregistration/3600445-configurationhandler
  configurationHandler(): cocoascript.UICollectionViewCellRegistrationConfigurationHandler;
  setConfigurationHandler(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcellregistration/3600443-cellclass
  cellClass(): cocoascript.Class;
  setCellClass(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcellregistration/3600444-cellnib
  cellNib(): cocoascript.UINib;
  setCellNib(): void;
  // 
  alloc():cocoascript.UICollectionViewCellRegistration;
  // 
  init():cocoascript.UICollectionViewCellRegistration;
}
}
declare const UICollectionViewCellRegistration: cocoascript.UICollectionViewCellRegistration;

