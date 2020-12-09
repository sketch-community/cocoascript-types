declare namespace cocoascript {
/**
 * Implements advanced OBEX operations in addition to simple PUT and GET.
 * doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices
 */
interface OBEXFileTransferServices extends NSObject {
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1431373-initwithobexsession
  initWithOBEXSession(inOBEXSession: cocoascript.IOBluetoothOBEXSession):cocoascript.OBEXFileTransferServices;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1430781-delegate
  delegate(): cocoascript.id;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1429764-abort
  abort():cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1429850-changecurrentfolderbackward
  changeCurrentFolderBackward():cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1429069-changecurrentfolderforwardtopath
  changeCurrentFolderForwardToPath(inDirName: cocoascript.NSString):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1428745-changecurrentfoldertoroot
  changeCurrentFolderToRoot():cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1433641-connecttoftpservice
  connectToFTPService():cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1429786-connecttoobjectpushservice
  connectToObjectPushService():cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1434277-copyremotefile
  copyRemoteFile_toLocalPath(inRemoteFileName: cocoascript.NSString, inLocalPathAndName: cocoascript.NSString):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1434906-createfolder
  createFolder(inDirName: cocoascript.NSString):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1434309-currentpath
  currentPath():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1434667-disconnect
  disconnect():cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1433891-getdefaultvcard
  getDefaultVCard(inLocalPathAndName: cocoascript.NSString):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1434607-isbusy
  isBusy():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1428521-isconnected
  isConnected():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1428401-removeitem
  removeItem(inItemName: cocoascript.NSString):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1433947-retrievefolderlisting
  retrieveFolderListing():cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1432819-senddata
  sendData_type_name(inData: cocoascript.NSData, inType: cocoascript.NSString, inName: cocoascript.NSString):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1430911-sendfile
  sendFile(inLocalPathAndName: cocoascript.NSString):cocoascript.OBEXError;
  // 
  alloc():cocoascript.OBEXFileTransferServices;
  // 
  init():cocoascript.OBEXFileTransferServices;
}
}
declare const OBEXFileTransferServices: cocoascript.OBEXFileTransferServices;

