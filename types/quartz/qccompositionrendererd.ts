declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/qccompositionrenderer
 */
interface QCCompositionRenderer {
  // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1503737-setvalue
  setValue_forInputKey(value: cocoascript.QCCompositionRenderer, key: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1505206-valueforinputkey
  valueForInputKey(key: cocoascript.NSString):cocoascript.QCCompositionRenderer;
  // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1504448-valueforoutputkey
  valueForOutputKey(key: cocoascript.NSString):cocoascript.QCCompositionRenderer;
  // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1504745-valueforoutputkey
  valueForOutputKey_ofType(key: cocoascript.NSString, type: cocoascript.NSString):cocoascript.QCCompositionRenderer;
  // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1503626-inputkeys
  inputKeys():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1503732-outputkeys
  outputKeys():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1503829-attributes
  attributes():cocoascript.NSDictionary;
  // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1504772-userinfo
  userInfo():cocoascript.NSMutableDictionary;
  // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1503849-propertylistfrominputvalues
  propertyListFromInputValues():cocoascript.QCCompositionRenderer;
  // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1504479-setinputvalueswithpropertylist
  setInputValuesWithPropertyList(plist: cocoascript.QCCompositionRenderer):void;
}
}

