declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource
 */
interface IKImageEditPanelDataSource {
  // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1504167-imageproperties
  imageProperties():cocoascript.NSDictionary;
  // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1503517-setimage
  setImage_imageProperties(image: cocoascript.CGImageRef, metaData: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1505304-image
  image():cocoascript.CGImageRef;
  // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1505271-thumbnailwithmaximumsize
  thumbnailWithMaximumSize(size: cocoascript.NSSize):cocoascript.CGImageRef;
  // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1503472-hasadjustmode
  hasAdjustMode():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1505246-hasdetailsmode
  hasDetailsMode():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1505020-haseffectsmode
  hasEffectsMode():cocoascript.BOOL;
}
}

