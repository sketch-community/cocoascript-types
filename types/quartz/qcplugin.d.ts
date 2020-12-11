declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qcplugin
   */
  interface QCPlugIn extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488847-execute
    execute_atTime_withArguments(context: cocoascript.QCPlugInContext, time: cocoascript.NSTimeInterval, arguments: cocoascript.NSDictionary):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488786-startexecution
    startExecution(context: cocoascript.QCPlugInContext):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488696-enableexecution
    enableExecution(context: cocoascript.QCPlugInContext):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488782-disableexecution
    disableExecution(context: cocoascript.QCPlugInContext):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488832-stopexecution
    stopExecution(context: cocoascript.QCPlugInContext):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1504984-createviewcontroller
    createViewController():cocoascript.QCPlugInViewController;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488752-serializedvalueforkey
    serializedValueForKey(key: cocoascript.NSString):cocoascript.QCPlugIn;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488851-setserializedvalue
    setSerializedValue_forKey(serializedValue: cocoascript.QCPlugIn, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488858-addinputportwithtype
    addInputPortWithType_forKey_withAttributes(type: cocoascript.NSString, key: cocoascript.NSString, attributes: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488707-removeinputportforkey
    removeInputPortForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488760-addoutputportwithtype
    addOutputPortWithType_forKey_withAttributes(type: cocoascript.NSString, key: cocoascript.NSString, attributes: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488800-removeoutputportforkey
    removeOutputPortForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488811-didvalueforinputkeychange
    didValueForInputKeyChange(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488802-valueforinputkey
    valueForInputKey(key: cocoascript.NSString):cocoascript.QCPlugIn;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488788-setvalue
    setValue_forOutputKey(value: cocoascript.QCPlugIn, key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488727-executiontimeforcontext
    executionTimeForContext_atTime_withArguments(context: cocoascript.QCPlugInContext, time: cocoascript.NSTimeInterval, arguments: cocoascript.NSDictionary):cocoascript.NSTimeInterval;
    //
    alloc():cocoascript.QCPlugIn;
    //
    init():cocoascript.QCPlugIn;
  }
}

declare const QCPlugIn: cocoascript.QCPlugIn;
