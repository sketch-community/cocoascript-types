declare namespace cocoascript {
  interface IconRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aeeventclass
  type AEEventClass = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aeeventid
  type AEEventID = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/appleevent
  type AppleEvent = cocoascript.AERecord;
}
declare namespace cocoascript {
  interface AEDesc {
  }
}
// doc://com.apple.documentation/documentation/coreservices/klsquarantineagentnamekey
declare const kLSQuarantineAgentNameKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsquarantineagentbundleidentifierkey
declare const kLSQuarantineAgentBundleIdentifierKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsquarantinetimestampkey
declare const kLSQuarantineTimeStampKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsquarantinetypekey
declare const kLSQuarantineTypeKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsquarantineoriginurlkey
declare const kLSQuarantineOriginURLKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsquarantinedataurlkey
declare const kLSQuarantineDataURLKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aerecord
  type AERecord = cocoascript.AEDescList;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aedatastorage
  type AEDataStorage = cocoascript.AEDataStorageType;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/desctype
  type DescType = cocoascript.ResType;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aereturnid
  type AEReturnID = cocoascript.SInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aetransactionid
  type AETransactionID = cocoascript.SInt32;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aekeyword
  type AEKeyword = any;
}
// doc://com.apple.documentation/documentation/coreservices/1413055-mdquerygetresultatindex
declare const MDQueryGetResultAtIndex: cocoascript.CFIndex;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mdquerysortcomparatorfunction
  type MDQuerySortComparatorFunction = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mdquerycreateresultfunction
  type MDQueryCreateResultFunction = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mdquerycreatevaluefunction
  type MDQueryCreateValueFunction = void;
}
declare namespace cocoascript {
  interface MDQueryBatchingParams {
  }
}
declare namespace cocoascript {
  interface MDQueryRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mdqueryoptionflags
  type MDQueryOptionFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/iconfamilyhandle
  type IconFamilyHandle = cocoascript.IconFamilyPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/iconfamilyptr
  type IconFamilyPtr = cocoascript.IconFamilyResource;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/iconservicesusageflags
  type IconServicesUsageFlags = number;
}
declare namespace cocoascript {
  interface FSRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/1443170-aearraydata
  type AEArrayData = cocoascript.union;
}
declare namespace cocoascript {
  interface AEBuildError {
  }
}
declare namespace cocoascript {
  interface AEKeyDesc {
  }
}
declare namespace cocoascript {
  interface AERemoteProcessResolverContext {
  }
}
// doc://com.apple.documentation/documentation/coreservices/kaeremoteprocessnamekey
declare const kAERemoteProcessNameKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kaeremoteprocessprocessidkey
declare const kAERemoteProcessProcessIDKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kaeremoteprocessurlkey
declare const kAERemoteProcessURLKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kaeremoteprocessuseridkey
declare const kAERemoteProcessUserIDKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/oslaccessorprocptr
  type OSLAccessorProcPtr = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/oslaccessorupp
  type OSLAccessorUPP = cocoascript.OSLAccessorProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/osladjustmarksprocptr
  type OSLAdjustMarksProcPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/osladjustmarksupp
  type OSLAdjustMarksUPP = cocoascript.OSLAdjustMarksProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/oslcompareprocptr
  type OSLCompareProcPtr = boolean;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/oslcompareupp
  type OSLCompareUPP = cocoascript.OSLCompareProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/oslcountprocptr
  type OSLCountProcPtr = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/oslcountupp
  type OSLCountUPP = cocoascript.OSLCountProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/osldisposetokenprocptr
  type OSLDisposeTokenProcPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/osldisposetokenupp
  type OSLDisposeTokenUPP = cocoascript.OSLDisposeTokenProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/oslgeterrdescprocptr
  type OSLGetErrDescProcPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/oslgeterrdescupp
  type OSLGetErrDescUPP = cocoascript.OSLGetErrDescProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/oslgetmarktokenprocptr
  type OSLGetMarkTokenProcPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/oslgetmarktokenupp
  type OSLGetMarkTokenUPP = cocoascript.OSLGetMarkTokenProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/oslmarkprocptr
  type OSLMarkProcPtr = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/oslmarkupp
  type OSLMarkUPP = cocoascript.OSLMarkProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aeaddressdesc
  type AEAddressDesc = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aearraydatapointer
  type AEArrayDataPointer = cocoascript.AEArrayData;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aearraytype
  type AEArrayType = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aebuilderrorcode
  type AEBuildErrorCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aecoercedescprocptr
  type AECoerceDescProcPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aecoercedescupp
  type AECoerceDescUPP = cocoascript.AECoerceDescProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aecoerceptrprocptr
  type AECoercePtrProcPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aecoerceptrupp
  type AECoercePtrUPP = cocoascript.AECoercePtrProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aecoercionhandlerupp
  type AECoercionHandlerUPP = cocoascript.AECoerceDescUPP;
}
declare namespace cocoascript {
  interface AEDataStorageType {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aedesclist
  type AEDescList = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aedescptr
  type AEDescPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aedisposeexternalprocptr
  type AEDisposeExternalProcPtr = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aedisposeexternalupp
  type AEDisposeExternalUPP = cocoascript.AEDisposeExternalProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aeeventhandlerprocptr
  type AEEventHandlerProcPtr = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aeeventhandlerupp
  type AEEventHandlerUPP = cocoascript.AEEventHandlerProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aeeventsource
  type AEEventSource = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aeremoteprocessresolvercallback
  type AERemoteProcessResolverCallback = void;
}
declare namespace cocoascript {
  interface AERemoteProcessResolverRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aesendmode
  type AESendMode = cocoascript.SInt32;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aesendpriority
  type AESendPriority = cocoascript.SInt16;
}
declare namespace cocoascript {
  interface AEStreamRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/afpserversignature
  type AFPServerSignature = cocoascript.UInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/afpvolmountinfoptr
  type AFPVolMountInfoPtr = cocoascript.AFPVolMountInfo;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/afpxvolmountinfoptr
  type AFPXVolMountInfoPtr = cocoascript.AFPXVolMountInfo;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/avlcompareitemsprocptr
  type AVLCompareItemsProcPtr = cocoascript.AVLNodeType;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/avlcompareitemsupp
  type AVLCompareItemsUPP = cocoascript.AVLCompareItemsProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/avldisposeitemprocptr
  type AVLDisposeItemProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/avldisposeitemupp
  type AVLDisposeItemUPP = cocoascript.AVLDisposeItemProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/avlitemsizeprocptr
  type AVLItemSizeProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/avlitemsizeupp
  type AVLItemSizeUPP = cocoascript.AVLItemSizeProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/avlnodetype
  type AVLNodeType = cocoascript.UInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/avlorder
  type AVLOrder = cocoascript.UInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/avltreeptr
  type AVLTreePtr = cocoascript.AVLTreeStruct;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/avlvisitstage
  type AVLVisitStage = cocoascript.UInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/avlwalkprocptr
  type AVLWalkProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/avlwalkupp
  type AVLWalkUPP = cocoascript.AVLWalkProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aliashandle
  type AliasHandle = cocoascript.AliasPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aliasptr
  type AliasPtr = cocoascript.AliasRecord;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/appleeventptr
  type AppleEventPtr = cocoascript.AppleEvent;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/applicationspecificchunkptr
  type ApplicationSpecificChunkPtr = cocoascript.ApplicationSpecificChunk;
}
declare namespace cocoascript {
  interface AreaID {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/audiorecordingchunkptr
  type AudioRecordingChunkPtr = cocoascript.AudioRecordingChunk;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/csdiskspacerecoverycallback
  type CSDiskSpaceRecoveryCallback = cocoascript.CFErrorRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/csdiskspacerecoveryoptions
  type CSDiskSpaceRecoveryOptions = number;
}
declare namespace cocoascript {
  interface CSIdentityRef {
  }
}
declare namespace cocoascript {
  interface CSIdentityAuthorityRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/csidentityclass
  type CSIdentityClass = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/csidentityflags
  type CSIdentityFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  interface CSIdentityQueryRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/csidentityqueryevent
  type CSIdentityQueryEvent = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/csidentityqueryflags
  type CSIdentityQueryFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/csidentityqueryreceiveeventcallback
  type CSIdentityQueryReceiveEventCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/csidentityquerystringcomparisonmethod
  type CSIdentityQueryStringComparisonMethod = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/csidentitystatusupdatedcallback
  type CSIdentityStatusUpdatedCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/callingconventiontype
  type CallingConventionType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/charbytetable
  type CharByteTable = string;
}
declare namespace cocoascript {
  interface Collection {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/collectionexceptionprocptr
  type CollectionExceptionProcPtr = cocoascript.OSErr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/collectionexceptionupp
  type CollectionExceptionUPP = cocoascript.CollectionExceptionProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/collectionflattenprocptr
  type CollectionFlattenProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/collectionflattenupp
  type CollectionFlattenUPP = cocoascript.CollectionFlattenProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/collectiontag
  type CollectionTag = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/commenttype
  type CommentType = cocoascript.ScriptTokenType;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/commentschunkptr
  type CommentsChunkPtr = cocoascript.CommentsChunk;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/commonchunkptr
  type CommonChunkPtr = cocoascript.CommonChunk;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/component
  type Component = cocoascript.ComponentRecord;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/componentinstance
  type ComponentInstance = cocoascript.ComponentInstanceRecord;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/componentmpworkfunctionheaderrecordptr
  type ComponentMPWorkFunctionHeaderRecordPtr = cocoascript.ComponentMPWorkFunctionHeaderRecord;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/componentresourcehandle
  type ComponentResourceHandle = cocoascript.ComponentResourcePtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/componentresourceptr
  type ComponentResourcePtr = cocoascript.ComponentResource;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/constfseventstreamref
  type ConstFSEventStreamRef = cocoascript.__FSEventStream;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/constfsspecptr
  type ConstFSSpecPtr = cocoascript.FSSpec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/custombadgeresourcehandle
  type CustomBadgeResourceHandle = cocoascript.CustomBadgeResourcePtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/custombadgeresourceptr
  type CustomBadgeResourcePtr = cocoascript.CustomBadgeResource;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/datecacheptr
  type DateCachePtr = cocoascript.DateCacheRecord;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/datedelta
  type DateDelta = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/dateform
  type DateForm = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/dateorders
  type DateOrders = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/deferredtaskprocptr
  type DeferredTaskProcPtr = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/deferredtaskptr
  type DeferredTaskPtr = cocoascript.DeferredTask;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/deferredtaskupp
  type DeferredTaskUPP = cocoascript.DeferredTaskProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/delimtype
  type DelimType = cocoascript.ScriptTokenType;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/exceptionhandler
  type ExceptionHandler = cocoascript.ExceptionHandlerTPP;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/exceptionhandlerprocptr
  type ExceptionHandlerProcPtr = cocoascript.ExceptionInformation;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/exceptionhandlertpp
  type ExceptionHandlerTPP = cocoascript.ExceptionHandlerUPP;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/exceptionhandlerupp
  type ExceptionHandlerUPP = cocoascript.ExceptionHandlerProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/exceptionkind
  type ExceptionKind = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/extcommonchunkptr
  type ExtCommonChunkPtr = cocoascript.ExtCommonChunk;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/extcomponentresourcehandle
  type ExtComponentResourceHandle = cocoascript.ExtComponentResourcePtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/extcomponentresourceptr
  type ExtComponentResourcePtr = cocoascript.ExtComponentResource;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fnmessage
  type FNMessage = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fnsubscriptionprocptr
  type FNSubscriptionProcPtr = cocoascript.FNSubscriptionRef;
}
declare namespace cocoascript {
  interface FNSubscriptionRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fnsubscriptionupp
  type FNSubscriptionUPP = cocoascript.FNSubscriptionProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fpregintel
  type FPRegIntel = string;
}
declare namespace cocoascript {
  interface FPUInformation {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/folderclass
  type FolderClass = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/folderdescflags
  type FolderDescFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/folderdescptr
  type FolderDescPtr = cocoascript.FolderDesc;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/folderlocation
  type FolderLocation = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/foldermanagernotificationprocptr
  type FolderManagerNotificationProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/foldermanagernotificationupp
  type FolderManagerNotificationUPP = cocoascript.FolderManagerNotificationProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/folderroutingptr
  type FolderRoutingPtr = cocoascript.FolderRouting;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/foldertype
  type FolderType = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/formatclass
  type FormatClass = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/formatresulttype
  type FormatResultType = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/formatstatus
  type FormatStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/formatversionchunkptr
  type FormatVersionChunkPtr = cocoascript.FormatVersionChunk;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/hfscatalognodeid
  type HFSCatalogNodeID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/iocompletionprocptr
  type IOCompletionProcPtr = cocoascript.ParmBlkPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/iocompletionupp
  type IOCompletionUPP = cocoascript.IOCompletionProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/isatype
  type ISAType = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/indextoucstringprocptr
  type IndexToUCStringProcPtr = cocoascript.UCTypeSelectOptions;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/indextoucstringupp
  type IndexToUCStringUPP = cocoascript.IndexToUCStringProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/instrumentchunkptr
  type InstrumentChunkPtr = cocoascript.InstrumentChunk;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/intl0hndl
  type Intl0Hndl = cocoascript.Intl0Ptr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/intl0ptr
  type Intl0Ptr = cocoascript.Intl0Rec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/intl1hndl
  type Intl1Hndl = cocoascript.Intl1Ptr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/intl1ptr
  type Intl1Ptr = cocoascript.Intl1Rec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/itl4handle
  type Itl4Handle = cocoascript.Itl4Ptr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/itl4ptr
  type Itl4Ptr = cocoascript.Itl4Rec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcattrtype
  type KCAttrType = cocoascript.SecKeychainAttrType;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcattribute
  type KCAttribute = cocoascript.SecKeychainAttribute;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcattributelist
  type KCAttributeList = cocoascript.SecKeychainAttributeList;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcauthtype
  type KCAuthType = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kccallbackprocptr
  type KCCallbackProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kccallbackupp
  type KCCallbackUPP = cocoascript.KCCallbackProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kccertaddoptions
  type KCCertAddOptions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kccertsearchoptions
  type KCCertSearchOptions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcevent
  type KCEvent = cocoascript.UInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kceventmask
  type KCEventMask = cocoascript.UInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcitemattr
  type KCItemAttr = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcitemclass
  type KCItemClass = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcitemref
  type KCItemRef = cocoascript.SecKeychainItemRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcprotocoltype
  type KCProtocolType = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcpublickeyhash
  type KCPublicKeyHash = cocoascript.UInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcref
  type KCRef = cocoascript.SecKeychainRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcsearchref
  type KCSearchRef = cocoascript.SecKeychainSearchRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcstatus
  type KCStatus = cocoascript.SecKeychainStatus;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/kcverifystopon
  type KCVerifyStopOn = cocoascript.UInt16;
}
declare namespace cocoascript {
  interface LSSharedFileListRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/lssharedfilelistchangedprocptr
  type LSSharedFileListChangedProcPtr = void;
}
declare namespace cocoascript {
  interface LSSharedFileListItemRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/lssharedfilelistresolutionflags
  type LSSharedFileListResolutionFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/localdatetimehandle
  type LocalDateTimeHandle = cocoascript.LocalDateTimePtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/localdatetimeptr
  type LocalDateTimePtr = cocoascript.LocalDateTime;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/localenamemask
  type LocaleNameMask = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/localeoperationclass
  type LocaleOperationClass = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/localeoperationvariant
  type LocaleOperationVariant = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/localepartmask
  type LocalePartMask = number;
}
declare namespace cocoascript {
  interface LocaleRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/longdatefield
  type LongDateField = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/longdatetime
  type LongDateTime = cocoascript.SInt64;
}
declare namespace cocoascript {
  interface MDLabelRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mididatachunkptr
  type MIDIDataChunkPtr = cocoascript.MIDIDataChunk;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mpisfullyinitializedproc
  type MPIsFullyInitializedProc = void;
}
declare namespace cocoascript {
  interface MachineInformation {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/markerchunkptr
  type MarkerChunkPtr = cocoascript.MarkerChunk;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/markeridtype
  type MarkerIdType = cocoascript.SInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/memoryreferencekind
  type MemoryReferenceKind = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/nitl4handle
  type NItl4Handle = cocoascript.NItl4Ptr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/nitl4ptr
  type NItl4Ptr = cocoascript.NItl4Rec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/nanoseconds
  type Nanoseconds = cocoascript.UnsignedWide;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/numformatstringrec
  type NumFormatStringRec = cocoascript.NumFormatString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/numberpartsptr
  type NumberPartsPtr = cocoascript.NumberParts;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/offsetarrayhandle
  type OffsetArrayHandle = cocoascript.OffsetArrayPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/offsetarrayptr
  type OffsetArrayPtr = cocoascript.OffsetArray;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/offsettable
  type OffsetTable = cocoascript.OffPair;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/pefrelocchunk
  type PEFRelocChunk = cocoascript.UInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/paramblockrec
  type ParamBlockRec = cocoascript.ParamBlockRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/parmblkptr
  type ParmBlkPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/procinfotype
  type ProcInfoType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/qelemptr
  type QElemPtr = cocoascript.QElem;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/qhdrptr
  type QHdrPtr = cocoascript.QHdr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/qtypes
  type QTypes = cocoascript.SignedByte;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/rdflagstype
  type RDFlagsType = cocoascript.UInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/rtatype
  type RTAType = cocoascript.SInt8;
}
declare namespace cocoascript {
  interface RegisterInformation {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/registeredcomponentinstancerecordptr
  type RegisteredComponentInstanceRecordPtr = cocoascript.RegisteredComponentInstanceRecord;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/registeredcomponentrecordptr
  type RegisteredComponentRecordPtr = cocoascript.RegisteredComponentRecord;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/resattributes
  type ResAttributes = cocoascript.SInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/reserrprocptr
  type ResErrProcPtr = cocoascript.OSErr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/reserrupp
  type ResErrUPP = cocoascript.ResErrProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/resfileattributes
  type ResFileAttributes = cocoascript.SInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/resfilerefnum
  type ResFileRefNum = cocoascript.FSIORefNum;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/resid
  type ResID = cocoascript.SInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/resourcecount
  type ResourceCount = cocoascript.SInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/resourceendianfilterptr
  type ResourceEndianFilterPtr = boolean;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/resourceindex
  type ResourceIndex = cocoascript.SInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/routinedescriptorhandle
  type RoutineDescriptorHandle = cocoascript.RoutineDescriptorPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/routinedescriptorptr
  type RoutineDescriptorPtr = cocoascript.RoutineDescriptor;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/routineflagstype
  type RoutineFlagsType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/routinerecordhandle
  type RoutineRecordHandle = cocoascript.RoutineRecordPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/routinerecordptr
  type RoutineRecordPtr = cocoascript.RoutineRecord;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/routingflags
  type RoutingFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/routingresourcehandle
  type RoutingResourceHandle = cocoascript.RoutingResourcePtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/routingresourceptr
  type RoutingResourcePtr = cocoascript.RoutingResourceEntry;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/rsrcchainlocation
  type RsrcChainLocation = cocoascript.SInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/schedulerinforecptr
  type SchedulerInfoRecPtr = cocoascript.SchedulerInfoRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/scriptcoderunptr
  type ScriptCodeRunPtr = cocoascript.ScriptCodeRun;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/scripttokentype
  type ScriptTokenType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/sleepqprocptr
  type SleepQProcPtr = cocoascript.SleepQRecPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/sleepqrecptr
  type SleepQRecPtr = cocoascript.SleepQRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/sleepqupp
  type SleepQUPP = cocoascript.SleepQProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/sounddatachunkptr
  type SoundDataChunkPtr = cocoascript.SoundDataChunk;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/string2datestatus
  type String2DateStatus = cocoascript.StringToDateStatus;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/stringtodatestatus
  type StringToDateStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/syspptr
  type SysPPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tmtaskptr
  type TMTaskPtr = cocoascript.TMTask;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/textchunkptr
  type TextChunkPtr = cocoascript.TextChunk;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/textencodingrunptr
  type TextEncodingRunPtr = cocoascript.TextEncodingRun;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/textptr
  type TextPtr = cocoascript.UInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/textrangearrayhandle
  type TextRangeArrayHandle = cocoascript.TextRangeArrayPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/textrangearrayptr
  type TextRangeArrayPtr = cocoascript.TextRangeArray;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/textrangehandle
  type TextRangeHandle = cocoascript.TextRangePtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/textrangeptr
  type TextRangePtr = cocoascript.TextRange;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadentryprocptr
  type ThreadEntryProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadentrytpp
  type ThreadEntryTPP = cocoascript.ThreadEntryUPP;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadentryupp
  type ThreadEntryUPP = cocoascript.ThreadEntryProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadid
  type ThreadID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadoptions
  type ThreadOptions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadschedulerprocptr
  type ThreadSchedulerProcPtr = cocoascript.SchedulerInfoRecPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadschedulertpp
  type ThreadSchedulerTPP = cocoascript.ThreadSchedulerUPP;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadschedulerupp
  type ThreadSchedulerUPP = cocoascript.ThreadSchedulerProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadstate
  type ThreadState = cocoascript.UInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadstyle
  type ThreadStyle = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadswitchprocptr
  type ThreadSwitchProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadswitchtpp
  type ThreadSwitchTPP = cocoascript.ThreadSwitchUPP;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadswitchupp
  type ThreadSwitchUPP = cocoascript.ThreadSwitchProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadtaskref
  type ThreadTaskRef = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadterminationprocptr
  type ThreadTerminationProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadterminationtpp
  type ThreadTerminationTPP = cocoascript.ThreadTerminationUPP;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/threadterminationupp
  type ThreadTerminationUPP = cocoascript.ThreadTerminationProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/timerprocptr
  type TimerProcPtr = cocoascript.TMTaskPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/timerupp
  type TimerUPP = cocoascript.TimerProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/toggleresults
  type ToggleResults = cocoascript.SInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tokenblockptr
  type TokenBlockPtr = cocoascript.TokenBlock;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tokenrecptr
  type TokenRecPtr = cocoascript.TokenRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tokenresults
  type TokenResults = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tripleint
  type TripleInt = cocoascript.FVector;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/uctswalkdirection
  type UCTSWalkDirection = cocoascript.UInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/uctypeselectcompareresult
  type UCTypeSelectCompareResult = cocoascript.SInt32;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/uctypeselectoptions
  type UCTypeSelectOptions = cocoascript.UInt16;
}
declare namespace cocoascript {
  interface UCTypeSelectRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/utcdatetimehandle
  type UTCDateTimeHandle = cocoascript.UTCDateTimePtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/utcdatetimeptr
  type UTCDateTimePtr = cocoascript.UTCDateTime;
}
declare namespace cocoascript {
  interface VectorInformation {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/volmountinfoptr
  type VolMountInfoPtr = cocoascript.VolMountInfoHeader;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/volumemountinfoheaderptr
  type VolumeMountInfoHeaderPtr = cocoascript.VolumeMountInfoHeader;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/volumetype
  type VolumeType = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/xlibexportedsymbolhashslot
  type XLibExportedSymbolHashSlot = cocoascript.PEFExportedSymbolHashSlot;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/xlibexportedsymbolkey
  type XLibExportedSymbolKey = cocoascript.PEFExportedSymbolKey;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/ccnttokenrechandle
  type ccntTokenRecHandle = cocoascript.ccntTokenRecPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/ccnttokenrecptr
  type ccntTokenRecPtr = cocoascript.ccntTokenRecord;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/registerselectortype
  type registerSelectorType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/relop
  type relop = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/voidptr
  type voidPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mdlabeldomain
  type MDLabelDomain = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mdquerysortoptionflags
  type MDQuerySortOptionFlags = number;
}
// doc://com.apple.documentation/documentation/coreservices/kmditemapplicationcategories
declare const kMDItemApplicationCategories: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcameraowner
declare const kMDItemCameraOwner: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcontenttypetree
declare const kMDItemContentTypeTree: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemdateadded
declare const kMDItemDateAdded: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemdownloadeddate
declare const kMDItemDownloadedDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemeditors
declare const kMDItemEditors: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemexecutablearchitectures
declare const kMDItemExecutableArchitectures: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemexecutableplatform
declare const kMDItemExecutablePlatform: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfocallength35mm
declare const kMDItemFocalLength35mm: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpsareainformation
declare const kMDItemGPSAreaInformation: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpsdop
declare const kMDItemGPSDOP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpsdatestamp
declare const kMDItemGPSDateStamp: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpsdestbearing
declare const kMDItemGPSDestBearing: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpsdestdistance
declare const kMDItemGPSDestDistance: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpsdestlatitude
declare const kMDItemGPSDestLatitude: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpsdestlongitude
declare const kMDItemGPSDestLongitude: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpsdifferental
declare const kMDItemGPSDifferental: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpsmapdatum
declare const kMDItemGPSMapDatum: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpsmeasuremode
declare const kMDItemGPSMeasureMode: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpsprocessingmethod
declare const kMDItemGPSProcessingMethod: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpsstatus
declare const kMDItemGPSStatus: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemhtmlcontent
declare const kMDItemHTMLContent: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemisapplicationmanaged
declare const kMDItemIsApplicationManaged: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemislikelyjunk
declare const kMDItemIsLikelyJunk: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemlabelid
declare const kMDItemLabelID: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemlabelicon
declare const kMDItemLabelIcon: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemlabelkind
declare const kMDItemLabelKind: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemlabeluuid
declare const kMDItemLabelUUID: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemlensmodel
declare const kMDItemLensModel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdlabeladdednotification
declare const kMDLabelAddedNotification: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdlabelchangednotification
declare const kMDLabelChangedNotification: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdlabelremovednotification
declare const kMDLabelRemovedNotification: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface MDItemRef {
  }
}
// doc://com.apple.documentation/documentation/coreservices/kmdquerydidfinishnotification
declare const kMDQueryDidFinishNotification: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdquerydidupdatenotification
declare const kMDQueryDidUpdateNotification: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdqueryprogressnotification
declare const kMDQueryProgressNotification: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdqueryupdateaddeditems
declare const kMDQueryUpdateAddedItems: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdqueryupdatechangeditems
declare const kMDQueryUpdateChangedItems: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdqueryupdateremoveditems
declare const kMDQueryUpdateRemovedItems: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdqueryscopehome
declare const kMDQueryScopeHome: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdqueryscopecomputer
declare const kMDQueryScopeComputer: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdqueryscopenetwork
declare const kMDQueryScopeNetwork: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdqueryscopeallindexed
declare const kMDQueryScopeAllIndexed: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdqueryscopecomputerindexed
declare const kMDQueryScopeComputerIndexed: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdqueryscopenetworkindexed
declare const kMDQueryScopeNetworkIndexed: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdqueryresultcontentrelevance
declare const kMDQueryResultContentRelevance: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface DCSDictionaryRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fseventstreamcallback
  type FSEventStreamCallback = cocoascript.FSEventStreamEventId;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fseventstreamcreateflags
  type FSEventStreamCreateFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fseventstreameventflags
  type FSEventStreamEventFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fseventstreameventid
  type FSEventStreamEventId = cocoascript.UInt64;
}
declare namespace cocoascript {
  interface FSEventStreamRef {
  }
}
declare namespace cocoascript {
  interface LSLaunchURLSpec {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/lsrolesmask
  type LSRolesMask = cocoascript.OptionBits;
}
// doc://com.apple.documentation/documentation/coreservices/klsquarantinetypecalendareventattachment
declare const kLSQuarantineTypeCalendarEventAttachment: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsquarantinetypeemailattachment
declare const kLSQuarantineTypeEmailAttachment: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsquarantinetypeinstantmessageattachment
declare const kLSQuarantineTypeInstantMessageAttachment: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsquarantinetypeotherattachment
declare const kLSQuarantineTypeOtherAttachment: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsquarantinetypeotherdownload
declare const kLSQuarantineTypeOtherDownload: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsquarantinetypewebdownload
declare const kLSQuarantineTypeWebDownload: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/lslaunchflags
  type LSLaunchFlags = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/lsacceptanceflags
  type LSAcceptanceFlags = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/lsiteminfoflags
  type LSItemInfoFlags = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/lshandleroptions
  type LSHandlerOptions = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/lsrequestedinfo
  type LSRequestedInfo = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/skdocumentref
  type SKDocumentRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/sksearchresultsfiltercallback
  type SKSearchResultsFilterCallBack = void;
}
declare namespace cocoascript {
  interface SKIndexDocumentIteratorRef {
  }
}
declare namespace cocoascript {
  interface SKIndexRef {
  }
}
declare namespace cocoascript {
  interface SKSearchRef {
  }
}
declare namespace cocoascript {
  interface SKSummaryRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/skdocumentid
  type SKDocumentID = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface SKSearchResultsRef {
  }
}
declare namespace cocoascript {
  interface SKSearchGroupRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/skdocumentindexstate
  type SKDocumentIndexState = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/sksearchoptions
  type SKSearchOptions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/skindextype
  type SKIndexType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/sksearchtype
  type SKSearchType = number;
}
declare namespace cocoascript {
  interface CSIdentityClientContext {
  }
}
declare namespace cocoascript {
  interface CSIdentityQueryClientContext {
  }
}
// doc://com.apple.documentation/documentation/coreservices/kcsidentityerrordomain
declare const kCSIdentityErrorDomain: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kcsidentitygenerateposixname
declare const kCSIdentityGeneratePosixName: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/wsclientcontextcopydescriptioncallbackprocptr
  type WSClientContextCopyDescriptionCallBackProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/wsclientcontextreleasecallbackprocptr
  type WSClientContextReleaseCallBackProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/wsclientcontextretaincallbackprocptr
  type WSClientContextRetainCallBackProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/wsmethodinvocationcallbackprocptr
  type WSMethodInvocationCallBackProcPtr = cocoascript.CFDictionaryRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/wsmethodinvocationdeserializationprocptr
  type WSMethodInvocationDeserializationProcPtr = void;
}
declare namespace cocoascript {
  interface WSMethodInvocationRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/wsmethodinvocationserializationprocptr
  type WSMethodInvocationSerializationProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/wsprotocolhandlerdeserializationprocptr
  type WSProtocolHandlerDeserializationProcPtr = void;
}
declare namespace cocoascript {
  interface WSProtocolHandlerRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/wsprotocolhandlerserializationprocptr
  type WSProtocolHandlerSerializationProcPtr = void;
}
declare namespace cocoascript {
  interface IconFamilyResource {
  }
}
declare namespace cocoascript {
  interface UCKeyboardLayout {
  }
}
declare namespace cocoascript {
  interface FSSpec {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsaliasfilterprocptr
  type FSAliasFilterProcPtr = cocoascript.Ptr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/aliasinfotype
  type AliasInfoType = number;
}
declare namespace cocoascript {
  interface AliasRecord {
  }
}
declare namespace cocoascript {
  interface FSAliasInfo {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsaliasinfobitmap
  type FSAliasInfoBitmap = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/componentmpworkfunctionprocptr
  type ComponentMPWorkFunctionProcPtr = cocoascript.ComponentMPWorkFunctionHeaderRecordPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/componentroutineprocptr
  type ComponentRoutineProcPtr = cocoascript.Handle;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/getmissingcomponentresourceprocptr
  type GetMissingComponentResourceProcPtr = cocoascript.Handle;
}
declare namespace cocoascript {
  interface ComponentAliasResource {
  }
}
declare namespace cocoascript {
  interface ComponentDescription {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/componentfunctionupp
  type ComponentFunctionUPP = cocoascript.UniversalProcPtr;
}
declare namespace cocoascript {
  interface ComponentInstanceRecord {
  }
}
declare namespace cocoascript {
  interface ComponentMPWorkFunctionHeaderRecord {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/componentmpworkfunctionupp
  type ComponentMPWorkFunctionUPP = cocoascript.ComponentMPWorkFunctionProcPtr;
}
declare namespace cocoascript {
  interface ComponentParameters {
  }
}
declare namespace cocoascript {
  interface ComponentPlatformInfo {
  }
}
declare namespace cocoascript {
  interface ComponentPlatformInfoArray {
  }
}
declare namespace cocoascript {
  interface ComponentRecord {
  }
}
declare namespace cocoascript {
  interface ComponentResource {
  }
}
declare namespace cocoascript {
  interface ComponentResourceExtension {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/componentresult
  type ComponentResult = cocoascript.SInt32;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/componentroutineupp
  type ComponentRoutineUPP = cocoascript.ComponentRoutineProcPtr;
}
declare namespace cocoascript {
  interface ExtComponentResource {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/getmissingcomponentresourceupp
  type GetMissingComponentResourceUPP = cocoascript.GetMissingComponentResourceProcPtr;
}
declare namespace cocoascript {
  interface RegisteredComponentInstanceRecord {
  }
}
declare namespace cocoascript {
  interface RegisteredComponentRecord {
  }
}
declare namespace cocoascript {
  interface ResourceSpec {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/cscomponentsthreadmode
  type CSComponentsThreadMode = number;
}
declare namespace cocoascript {
  interface AFPAlternateAddress {
  }
}
declare namespace cocoascript {
  interface AFPTagData {
  }
}
declare namespace cocoascript {
  interface AFPVolMountInfo {
  }
}
declare namespace cocoascript {
  interface AFPXVolMountInfo {
  }
}
declare namespace cocoascript {
  interface FSCatalogBulkParam {
  }
}
declare namespace cocoascript {
  interface FSCatalogInfo {
  }
}
declare namespace cocoascript {
  interface FSFileOperationClientContext {
  }
}
declare namespace cocoascript {
  interface FSForkCBInfoParam {
  }
}
declare namespace cocoascript {
  interface FSForkIOParam {
  }
}
declare namespace cocoascript {
  interface FSForkInfo {
  }
}
declare namespace cocoascript {
  interface FSPermissionInfo {
  }
}
declare namespace cocoascript {
  interface FSRangeLockParam {
  }
}
declare namespace cocoascript {
  interface FSRefForkIOParam {
  }
}
declare namespace cocoascript {
  interface FSRefParam {
  }
}
declare namespace cocoascript {
  interface FSSearchParams {
  }
}
declare namespace cocoascript {
  interface FSVolumeInfo {
  }
}
declare namespace cocoascript {
  interface FSVolumeInfoParam {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsaliasinfoptr
  type FSAliasInfoPtr = cocoascript.FSAliasInfo;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsallocationflags
  type FSAllocationFlags = cocoascript.UInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fscatalogbulkparamptr
  type FSCatalogBulkParamPtr = cocoascript.FSCatalogBulkParam;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fscataloginfobitmap
  type FSCatalogInfoBitmap = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fscataloginfoptr
  type FSCatalogInfoPtr = cocoascript.FSCatalogInfo;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsejectstatus
  type FSEjectStatus = number;
}
declare namespace cocoascript {
  interface FSFileOperationRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsfileoperationstage
  type FSFileOperationStage = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsfileoperationstatusprocptr
  type FSFileOperationStatusProcPtr = void;
}
declare namespace cocoascript {
  interface FSFileSecurityRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsforkcbinfoparamptr
  type FSForkCBInfoParamPtr = cocoascript.FSForkCBInfoParam;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsforkioparamptr
  type FSForkIOParamPtr = cocoascript.FSForkIOParam;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsforkinfoflags
  type FSForkInfoFlags = cocoascript.UInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsforkinfoptr
  type FSForkInfoPtr = cocoascript.FSForkInfo;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsiorefnum
  type FSIORefNum = number;
}
declare namespace cocoascript {
  interface FSIterator {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsiteratorflags
  type FSIteratorFlags = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsmountstatus
  type FSMountStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fspathfileoperationstatusprocptr
  type FSPathFileOperationStatusProcPtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsrangelockparamptr
  type FSRangeLockParamPtr = cocoascript.FSRangeLockParam;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsrefforkioparamptr
  type FSRefForkIOParamPtr = cocoascript.FSRefForkIOParam;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsrefparamptr
  type FSRefParamPtr = cocoascript.FSRefParam;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsrefptr
  type FSRefPtr = cocoascript.FSRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fssearchparamsptr
  type FSSearchParamsPtr = cocoascript.FSSearchParams;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsspecarrayptr
  type FSSpecArrayPtr = cocoascript.FSSpecPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsspechandle
  type FSSpecHandle = cocoascript.FSSpecPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsspecptr
  type FSSpecPtr = cocoascript.FSSpec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsunmountstatus
  type FSUnmountStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsvolumeejectprocptr
  type FSVolumeEjectProcPtr = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsvolumeejectupp
  type FSVolumeEjectUPP = cocoascript.FSVolumeEjectProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsvolumeinfobitmap
  type FSVolumeInfoBitmap = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsvolumeinfoparamptr
  type FSVolumeInfoParamPtr = cocoascript.FSVolumeInfoParam;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsvolumeinfoptr
  type FSVolumeInfoPtr = cocoascript.FSVolumeInfo;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsvolumemountprocptr
  type FSVolumeMountProcPtr = cocoascript.FSVolumeRefNum;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsvolumemountupp
  type FSVolumeMountUPP = cocoascript.FSVolumeMountProcPtr;
}
declare namespace cocoascript {
  interface FSVolumeOperation {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsvolumerefnum
  type FSVolumeRefNum = cocoascript.SInt16;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsvolumeunmountprocptr
  type FSVolumeUnmountProcPtr = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/fsvolumeunmountupp
  type FSVolumeUnmountUPP = cocoascript.FSVolumeUnmountProcPtr;
}
// doc://com.apple.documentation/documentation/coreservices/kfsoperationbytescompletekey
declare const kFSOperationBytesCompleteKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kfsoperationbytesremainingkey
declare const kFSOperationBytesRemainingKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kfsoperationobjectscompletekey
declare const kFSOperationObjectsCompleteKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kfsoperationobjectsremainingkey
declare const kFSOperationObjectsRemainingKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kfsoperationthroughputkey
declare const kFSOperationThroughputKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kfsoperationtotalbyteskey
declare const kFSOperationTotalBytesKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kfsoperationtotalobjectskey
declare const kFSOperationTotalObjectsKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kfsoperationtotaluservisibleobjectskey
declare const kFSOperationTotalUserVisibleObjectsKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kfsoperationuservisibleobjectscompletekey
declare const kFSOperationUserVisibleObjectsCompleteKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kfsoperationuservisibleobjectsremainingkey
declare const kFSOperationUserVisibleObjectsRemainingKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/selectorfunctionprocptr
  type SelectorFunctionProcPtr = cocoascript.SInt32;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/selectorfunctionupp
  type SelectorFunctionUPP = cocoascript.SelectorFunctionProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/unicodetotextfallbackprocptr
  type UnicodeToTextFallbackProcPtr = cocoascript.ConstUnicodeMappingPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecplugingetplugindispatchtableptr
  type TECPluginGetPluginDispatchTablePtr = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecpluginnewencodingconverterptr
  type TECPluginNewEncodingConverterPtr = cocoascript.TextEncoding;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecpluginclearcontextinfoptr
  type TECPluginClearContextInfoPtr = cocoascript.TECConverterContextRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecpluginconverttextencodingptr
  type TECPluginConvertTextEncodingPtr = cocoascript.TECConverterContextRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecpluginflushconversionptr
  type TECPluginFlushConversionPtr = cocoascript.TECConverterContextRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecplugindisposeencodingconverterptr
  type TECPluginDisposeEncodingConverterPtr = cocoascript.TECConverterContextRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecpluginnewencodingsnifferptr
  type TECPluginNewEncodingSnifferPtr = cocoascript.TextEncoding;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecpluginclearsniffercontextinfoptr
  type TECPluginClearSnifferContextInfoPtr = cocoascript.TECSnifferContextRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecpluginsnifftextencodingptr
  type TECPluginSniffTextEncodingPtr = cocoascript.TECSnifferContextRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecplugindisposeencodingsnifferptr
  type TECPluginDisposeEncodingSnifferPtr = cocoascript.TECSnifferContextRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecplugingetcountavailabletextencodingsptr
  type TECPluginGetCountAvailableTextEncodingsPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecplugingetcountavailabletextencodingpairsptr
  type TECPluginGetCountAvailableTextEncodingPairsPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecplugingetcountdestinationtextencodingsptr
  type TECPluginGetCountDestinationTextEncodingsPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecplugingetcountsubtextencodingsptr
  type TECPluginGetCountSubTextEncodingsPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecplugingetcountavailablesniffersptr
  type TECPluginGetCountAvailableSniffersPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecplugingetcountwebencodingsptr
  type TECPluginGetCountWebEncodingsPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecplugingetcountmailencodingsptr
  type TECPluginGetCountMailEncodingsPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecplugingettextencodinginternetnameptr
  type TECPluginGetTextEncodingInternetNamePtr = cocoascript.Str255;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecplugingettextencodingfrominternetnameptr
  type TECPluginGetTextEncodingFromInternetNamePtr = cocoascript.ConstStr255Param;
}
declare namespace cocoascript {
  interface TECEncodingPairRec {
  }
}
declare namespace cocoascript {
  interface TECEncodingPairs {
  }
}
declare namespace cocoascript {
  interface TECEncodingPairsRec {
  }
}
declare namespace cocoascript {
  interface TECEncodingsListRec {
  }
}
declare namespace cocoascript {
  interface TECInternetNameRec {
  }
}
declare namespace cocoascript {
  interface TECInternetNamesRec {
  }
}
declare namespace cocoascript {
  interface TECLocaleListToEncodingListRec {
  }
}
declare namespace cocoascript {
  interface TECLocaleToEncodingsListRec {
  }
}
declare namespace cocoascript {
  interface TECSubTextEncodingRec {
  }
}
declare namespace cocoascript {
  interface TECSubTextEncodingsRec {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/constscriptcoderunptr
  type ConstScriptCodeRunPtr = cocoascript.ScriptCodeRun;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/consttextencodingrunptr
  type ConstTextEncodingRunPtr = cocoascript.TextEncodingRun;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/consttextptr
  type ConstTextPtr = cocoascript.UInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/consttexttounicodeinfo
  type ConstTextToUnicodeInfo = cocoascript.TextToUnicodeInfo;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/constunichararrayptr
  type ConstUniCharArrayPtr = cocoascript.UniChar;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/constunicodemappingptr
  type ConstUnicodeMappingPtr = cocoascript.UnicodeMapping;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/constunicodetotextinfo
  type ConstUnicodeToTextInfo = cocoascript.UnicodeToTextInfo;
}
declare namespace cocoascript {
  interface ScriptCodeRun {
  }
}
declare namespace cocoascript {
  interface TECBufferContextRec {
  }
}
declare namespace cocoascript {
  interface TECConversionInfo {
  }
}
declare namespace cocoascript {
  interface TECConverterContextRec {
  }
}
declare namespace cocoascript {
  interface TECInfo {
  }
}
declare namespace cocoascript {
  interface TECObjectRef {
  }
}
declare namespace cocoascript {
  interface TECPluginDispatchTable {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecpluginsig
  type TECPluginSig = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecpluginsignature
  type TECPluginSignature = any;
}
declare namespace cocoascript {
  interface TECPluginStateRec {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecpluginversion
  type TECPluginVersion = number;
}
declare namespace cocoascript {
  interface TECSnifferContextRec {
  }
}
declare namespace cocoascript {
  interface TECSnifferObjectRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/textencoding
  type TextEncoding = number;
}
declare namespace cocoascript {
  interface TextEncodingRun {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/textencodingvariant
  type TextEncodingVariant = number;
}
declare namespace cocoascript {
  interface TextToUnicodeInfo {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/unichararrayoffset
  type UniCharArrayOffset = number;
}
declare namespace cocoascript {
  interface UnicodeMapping {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/unicodetotextfallbackupp
  type UnicodeToTextFallbackUPP = cocoascript.UnicodeToTextFallbackProcPtr;
}
declare namespace cocoascript {
  interface UnicodeToTextInfo {
  }
}
declare namespace cocoascript {
  interface UnicodeToTextRunInfo {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecencodingpairshandle
  type TECEncodingPairsHandle = cocoascript.TECEncodingPairsPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecencodingpairsptr
  type TECEncodingPairsPtr = cocoascript.TECEncodingPairsRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecencodingslisthandle
  type TECEncodingsListHandle = cocoascript.TECEncodingsListPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecencodingslistptr
  type TECEncodingsListPtr = cocoascript.TECEncodingsListRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecinfohandle
  type TECInfoHandle = cocoascript.TECInfoPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecinfoptr
  type TECInfoPtr = cocoascript.TECInfo;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecinternetnameusagemask
  type TECInternetNameUsageMask = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecinternetnameshandle
  type TECInternetNamesHandle = cocoascript.TECInternetNamesPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecinternetnamesptr
  type TECInternetNamesPtr = cocoascript.TECInternetNamesRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/teclocalelisttoencodinglistptr
  type TECLocaleListToEncodingListPtr = cocoascript.TECLocaleListToEncodingListRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/teclocaletoencodingslisthandle
  type TECLocaleToEncodingsListHandle = cocoascript.TECLocaleToEncodingsListPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/teclocaletoencodingslistptr
  type TECLocaleToEncodingsListPtr = cocoascript.TECLocaleToEncodingsListRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecsubtextencodingshandle
  type TECSubTextEncodingsHandle = cocoascript.TECSubTextEncodingsPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/tecsubtextencodingsptr
  type TECSubTextEncodingsPtr = cocoascript.TECSubTextEncodingsRec;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/textencodingbase
  type TextEncodingBase = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/textencodingformat
  type TextEncodingFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/textencodingnameselector
  type TextEncodingNameSelector = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/uccharpropertytype
  type UCCharPropertyType = cocoascript.SInt32;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/uccharpropertyvalue
  type UCCharPropertyValue = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/unicodemapversion
  type UnicodeMapVersion = cocoascript.SInt32;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debugassertoutputhandlerprocptr
  type DebugAssertOutputHandlerProcPtr = cocoascript.ConstStr255Param;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debugassertoutputhandlerupp
  type DebugAssertOutputHandlerUPP = cocoascript.DebugAssertOutputHandlerProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debugcomponentcallbackprocptr
  type DebugComponentCallbackProcPtr = boolean;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debugcomponentcallbackupp
  type DebugComponentCallbackUPP = cocoascript.DebugComponentCallbackProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debuggerdisposethreadprocptr
  type DebuggerDisposeThreadProcPtr = cocoascript.ThreadID;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debuggerdisposethreadtpp
  type DebuggerDisposeThreadTPP = cocoascript.DebuggerDisposeThreadUPP;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debuggerdisposethreadupp
  type DebuggerDisposeThreadUPP = cocoascript.DebuggerDisposeThreadProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debuggernewthreadprocptr
  type DebuggerNewThreadProcPtr = cocoascript.ThreadID;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debuggernewthreadtpp
  type DebuggerNewThreadTPP = cocoascript.DebuggerNewThreadUPP;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debuggernewthreadupp
  type DebuggerNewThreadUPP = cocoascript.DebuggerNewThreadProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debuggerthreadschedulerprocptr
  type DebuggerThreadSchedulerProcPtr = cocoascript.SchedulerInfoRecPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debuggerthreadschedulertpp
  type DebuggerThreadSchedulerTPP = cocoascript.DebuggerThreadSchedulerUPP;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/debuggerthreadschedulerupp
  type DebuggerThreadSchedulerUPP = cocoascript.DebuggerThreadSchedulerProcPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mpremoteprocedure
  type MPRemoteProcedure = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/taskproc
  type TaskProc = void;
}
declare namespace cocoascript {
  interface MPAddressSpaceID {
  }
}
declare namespace cocoascript {
  interface MPAddressSpaceInfo {
  }
}
declare namespace cocoascript {
  interface MPAreaID {
  }
}
declare namespace cocoascript {
  interface MPCoherenceID {
  }
}
declare namespace cocoascript {
  interface MPConsoleID {
  }
}
declare namespace cocoascript {
  interface MPCpuID {
  }
}
declare namespace cocoascript {
  interface MPCriticalRegionID {
  }
}
declare namespace cocoascript {
  interface MPCriticalRegionInfo {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mpeventflags
  type MPEventFlags = number;
}
declare namespace cocoascript {
  interface MPEventID {
  }
}
declare namespace cocoascript {
  interface MPEventInfo {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mpexceptionkind
  type MPExceptionKind = number;
}
declare namespace cocoascript {
  interface MPNotificationID {
  }
}
declare namespace cocoascript {
  interface MPNotificationInfo {
  }
}
declare namespace cocoascript {
  interface MPOpaqueID {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mpopaqueidclass
  type MPOpaqueIDClass = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mppagesizeclass
  type MPPageSizeClass = number;
}
declare namespace cocoascript {
  interface MPProcessID {
  }
}
declare namespace cocoascript {
  interface MPQueueID {
  }
}
declare namespace cocoascript {
  interface MPQueueInfo {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mpsemaphorecount
  type MPSemaphoreCount = cocoascript.ItemCount;
}
declare namespace cocoascript {
  interface MPSemaphoreID {
  }
}
declare namespace cocoascript {
  interface MPSemaphoreInfo {
  }
}
declare namespace cocoascript {
  interface MPTaskID {
  }
}
declare namespace cocoascript {
  interface MPTaskInfo {
  }
}
declare namespace cocoascript {
  interface MPTaskInfoVersion2 {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mptaskstatekind
  type MPTaskStateKind = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mptaskweight
  type MPTaskWeight = number;
}
declare namespace cocoascript {
  interface MPTimerID {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/taskstorageindex
  type TaskStorageIndex = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/taskstoragevalue
  type TaskStorageValue = cocoascript.LogicalAddress;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mpdebuggerlevel
  type MPDebuggerLevel = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mpremotecontext
  type MPRemoteContext = cocoascript.UInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/mptaskoptions
  type MPTaskOptions = cocoascript.OptionBits;
}
// doc://com.apple.documentation/documentation/coreservices/pi
declare const pi: cocoascript.double_t;
declare namespace cocoascript {
  interface PEFContainerHeader {
  }
}
declare namespace cocoascript {
  interface PEFExportedSymbol {
  }
}
declare namespace cocoascript {
  interface PEFExportedSymbolHashSlot {
  }
}
declare namespace cocoascript {
  interface PEFExportedSymbolKey {
  }
}
declare namespace cocoascript {
  interface PEFImportedLibrary {
  }
}
declare namespace cocoascript {
  interface PEFImportedSymbol {
  }
}
declare namespace cocoascript {
  interface PEFLoaderInfoHeader {
  }
}
declare namespace cocoascript {
  interface PEFLoaderRelocationHeader {
  }
}
declare namespace cocoascript {
  interface PEFSectionHeader {
  }
}
declare namespace cocoascript {
  interface PEFSplitHashWord {
  }
}
declare namespace cocoascript {
  interface CollatorRef {
  }
}
declare namespace cocoascript {
  interface TextBreakLocatorRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/uccollationvalue
  type UCCollationValue = number;
}
declare namespace cocoascript {
  interface UCKeyboardTypeHeader {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/uckeycharseq
  type UCKeyCharSeq = cocoascript.UInt16;
}
declare namespace cocoascript {
  interface UCKeyLayoutFeatureInfo {
  }
}
declare namespace cocoascript {
  interface UCKeyModifiersToTableNum {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/uckeyoutput
  type UCKeyOutput = cocoascript.UInt16;
}
declare namespace cocoascript {
  interface UCKeySequenceDataIndex {
  }
}
declare namespace cocoascript {
  interface UCKeyStateEntryRange {
  }
}
declare namespace cocoascript {
  interface UCKeyStateEntryTerminal {
  }
}
declare namespace cocoascript {
  interface UCKeyStateRecord {
  }
}
declare namespace cocoascript {
  interface UCKeyStateRecordsIndex {
  }
}
declare namespace cocoascript {
  interface UCKeyStateTerminators {
  }
}
declare namespace cocoascript {
  interface UCKeyToCharTableIndex {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/uccollateoptions
  type UCCollateOptions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/uctextbreakoptions
  type UCTextBreakOptions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/uctextbreaktype
  type UCTextBreakType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/unichararrayhandle
  type UniCharArrayHandle = cocoascript.UniCharArrayPtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/unichararrayptr
  type UniCharArrayPtr = cocoascript.UniChar;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/unicodemappingptr
  type UnicodeMappingPtr = cocoascript.UnicodeMapping;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/untokentablehandle
  type UntokenTableHandle = cocoascript.UntokenTablePtr;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/untokentableptr
  type UntokenTablePtr = cocoascript.UntokenTable;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/coreendianflipproc
  type CoreEndianFlipProc = void;
}
declare namespace cocoascript {
  interface BigEndianLong {
  }
}
declare namespace cocoascript {
  interface BigEndianUnsignedLong {
  }
}
declare namespace cocoascript {
  interface BigEndianShort {
  }
}
declare namespace cocoascript {
  interface BigEndianUnsignedShort {
  }
}
declare namespace cocoascript {
  interface BigEndianFixed {
  }
}
declare namespace cocoascript {
  interface BigEndianUnsignedFixed {
  }
}
declare namespace cocoascript {
  interface AIFFLoop {
  }
}
declare namespace cocoascript {
  interface AVLTreeStruct {
  }
}
declare namespace cocoascript {
  interface ApplicationSpecificChunk {
  }
}
declare namespace cocoascript {
  interface AudioRecordingChunk {
  }
}
declare namespace cocoascript {
  interface BigEndianOSType {
  }
}
declare namespace cocoascript {
  interface BigEndianUInt32 {
  }
}
declare namespace cocoascript {
  interface CatPositionRec {
  }
}
declare namespace cocoascript {
  interface ChunkHeader {
  }
}
declare namespace cocoascript {
  interface Comment {
  }
}
declare namespace cocoascript {
  interface CommentsChunk {
  }
}
declare namespace cocoascript {
  interface CommonChunk {
  }
}
declare namespace cocoascript {
  interface ContainerChunk {
  }
}
declare namespace cocoascript {
  interface CustomBadgeResource {
  }
}
declare namespace cocoascript {
  interface DInfo {
  }
}
declare namespace cocoascript {
  interface DXInfo {
  }
}
declare namespace cocoascript {
  interface DateCacheRecord {
  }
}
declare namespace cocoascript {
  interface DateTimeRec {
  }
}
declare namespace cocoascript {
  interface DeferredTask {
  }
}
declare namespace cocoascript {
  interface ExceptionInformation {
  }
}
declare namespace cocoascript {
  interface ExceptionInformationPowerPC {
  }
}
declare namespace cocoascript {
  interface ExtCommonChunk {
  }
}
declare namespace cocoascript {
  interface ExtendedFileInfo {
  }
}
declare namespace cocoascript {
  interface ExtendedFolderInfo {
  }
}
declare namespace cocoascript {
  interface FInfo {
  }
}
declare namespace cocoascript {
  interface FPUInformationIntel64 {
  }
}
declare namespace cocoascript {
  interface FPUInformationPowerPC {
  }
}
declare namespace cocoascript {
  interface FSEventStreamContext {
  }
}
declare namespace cocoascript {
  interface FVector {
  }
}
declare namespace cocoascript {
  interface FXInfo {
  }
}
declare namespace cocoascript {
  interface FileInfo {
  }
}
declare namespace cocoascript {
  interface FolderDesc {
  }
}
declare namespace cocoascript {
  interface FolderInfo {
  }
}
declare namespace cocoascript {
  interface FolderRouting {
  }
}
declare namespace cocoascript {
  interface FormatVersionChunk {
  }
}
declare namespace cocoascript {
  interface GetVolParmsInfoBuffer {
  }
}
declare namespace cocoascript {
  interface IconFamilyElement {
  }
}
declare namespace cocoascript {
  interface InstrumentChunk {
  }
}
declare namespace cocoascript {
  interface Intl0Rec {
  }
}
declare namespace cocoascript {
  interface Intl1Rec {
  }
}
declare namespace cocoascript {
  interface IntlText {
  }
}
declare namespace cocoascript {
  interface Itl1ExtRec {
  }
}
declare namespace cocoascript {
  interface Itl4Rec {
  }
}
declare namespace cocoascript {
  interface Itl5Record {
  }
}
declare namespace cocoascript {
  interface ItlbExtRecord {
  }
}
declare namespace cocoascript {
  interface ItlbRecord {
  }
}
declare namespace cocoascript {
  interface ItlcRecord {
  }
}
declare namespace cocoascript {
  interface KCCallbackInfo {
  }
}
declare namespace cocoascript {
  interface LocalDateTime {
  }
}
declare namespace cocoascript {
  interface LocaleAndVariant {
  }
}
declare namespace cocoascript {
  interface MIDIDataChunk {
  }
}
declare namespace cocoascript {
  interface MachineInformationIntel64 {
  }
}
declare namespace cocoascript {
  interface MachineInformationPowerPC {
  }
}
declare namespace cocoascript {
  interface MachineLocation {
  }
}
declare namespace cocoascript {
  interface Marker {
  }
}
declare namespace cocoascript {
  interface MarkerChunk {
  }
}
declare namespace cocoascript {
  interface MemoryExceptionInformation {
  }
}
declare namespace cocoascript {
  interface MixedModeStateRecord {
  }
}
declare namespace cocoascript {
  interface NItl4Rec {
  }
}
declare namespace cocoascript {
  interface NumFormatString {
  }
}
declare namespace cocoascript {
  interface NumberParts {
  }
}
declare namespace cocoascript {
  interface OffPair {
  }
}
declare namespace cocoascript {
  interface OffsetArray {
  }
}
declare namespace cocoascript {
  interface QElem {
  }
}
declare namespace cocoascript {
  interface QHdr {
  }
}
declare namespace cocoascript {
  interface RegisterInformationIntel64 {
  }
}
declare namespace cocoascript {
  interface RegisterInformationPowerPC {
  }
}
declare namespace cocoascript {
  interface RoutineDescriptor {
  }
}
declare namespace cocoascript {
  interface RoutineRecord {
  }
}
declare namespace cocoascript {
  interface RoutingResourceEntry {
  }
}
declare namespace cocoascript {
  interface RuleBasedTrslRecord {
  }
}
declare namespace cocoascript {
  interface SchedulerInfoRec {
  }
}
declare namespace cocoascript {
  interface SleepQRec {
  }
}
declare namespace cocoascript {
  interface SoundDataChunk {
  }
}
declare namespace cocoascript {
  interface TMTask {
  }
}
declare namespace cocoascript {
  interface TScriptingSizeResource {
  }
}
declare namespace cocoascript {
  interface TableDirectoryRecord {
  }
}
declare namespace cocoascript {
  interface TextChunk {
  }
}
declare namespace cocoascript {
  interface TextEncodingRec {
  }
}
declare namespace cocoascript {
  interface TextRange {
  }
}
declare namespace cocoascript {
  interface TextRangeArray {
  }
}
declare namespace cocoascript {
  interface TogglePB {
  }
}
declare namespace cocoascript {
  interface TokenBlock {
  }
}
declare namespace cocoascript {
  interface TokenRec {
  }
}
declare namespace cocoascript {
  interface UTCDateTime {
  }
}
declare namespace cocoascript {
  interface UntokenTable {
  }
}
declare namespace cocoascript {
  interface VectorInformationIntel64 {
  }
}
declare namespace cocoascript {
  interface VectorInformationPowerPC {
  }
}
declare namespace cocoascript {
  interface VolMountInfoHeader {
  }
}
declare namespace cocoascript {
  interface VolumeMountInfoHeader {
  }
}
declare namespace cocoascript {
  interface WSClientContext {
  }
}
declare namespace cocoascript {
  interface WideCharArr {
  }
}
declare namespace cocoascript {
  interface WritingCode {
  }
}
declare namespace cocoascript {
  interface XLibContainerHeader {
  }
}
declare namespace cocoascript {
  interface XLibExportedSymbol {
  }
}
declare namespace cocoascript {
  interface ccntTokenRecord {
  }
}
declare namespace cocoascript {
  interface decform {
  }
}
declare namespace cocoascript {
  interface decimal {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreservices/wstypeid
  type WSTypeID = number;
}
// doc://com.apple.documentation/documentation/coreservices/1517787-getmacosstatuscommentstring
declare const GetMacOSStatusCommentString: any;
// doc://com.apple.documentation/documentation/coreservices/1517786-getmacosstatuserrorstring
declare const GetMacOSStatusErrorString: any;
// doc://com.apple.documentation/documentation/coreservices/lslaunchurlspec/1445136-passthruparams
declare const passThruParams: cocoascript.AEDesc;
declare namespace cocoascript {
  interface LSItemInfoRecord {
  }
}
// doc://com.apple.documentation/documentation/coreservices/klsitemcontenttype
declare const kLSItemContentType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsitemfiletype
declare const kLSItemFileType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsitemfilecreator
declare const kLSItemFileCreator: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsitemextension
declare const kLSItemExtension: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsitemdisplayname
declare const kLSItemDisplayName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsitemdisplaykind
declare const kLSItemDisplayKind: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsitemrolehandlerdisplayname
declare const kLSItemRoleHandlerDisplayName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsitemisinvisible
declare const kLSItemIsInvisible: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/klsitemextensionishidden
declare const kLSItemExtensionIsHidden: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface LSApplicationParameters {
  }
}
declare namespace cocoascript {
  interface LSLaunchFSRefSpec {
  }
}
// doc://com.apple.documentation/documentation/coreservices/klsitemquarantineproperties
declare const kLSItemQuarantineProperties: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kskmintermlength
declare const kSKMinTermLength: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kskstopwords
declare const kSKStopWords: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/ksksubstitutions
declare const kSKSubstitutions: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kskmaximumterms
declare const kSKMaximumTerms: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kskproximityindexing
declare const kSKProximityIndexing: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/ksktermchars
declare const kSKTermChars: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kskstarttermchars
declare const kSKStartTermChars: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kskendtermchars
declare const kSKEndTermChars: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/ksklanguagetypes
declare const kSKLanguageTypes: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/fscatalogbulkparam/1565716-container
declare const container: cocoascript.FSRef;
// doc://com.apple.documentation/documentation/coreservices/fscatalogbulkparam/1566299-searchparams
declare const searchParams: cocoascript.FSSearchParams;
// doc://com.apple.documentation/documentation/coreservices/fsforkioparam/1566668-forkname
declare const forkName: cocoascript.UniChar;
// doc://com.apple.documentation/documentation/coreservices/fsforkioparam/1565544-ref
declare const ref: cocoascript.FSRef;
// doc://com.apple.documentation/documentation/coreservices/fsrefforkioparam/1566465-catinfo
declare const catInfo: cocoascript.FSCatalogInfo;
// doc://com.apple.documentation/documentation/coreservices/fsrefforkioparam/1565422-forkname
declare const forkName: cocoascript.UniChar;
// doc://com.apple.documentation/documentation/coreservices/fsrefforkioparam/1565580-name
declare const name: cocoascript.UniChar;
// doc://com.apple.documentation/documentation/coreservices/fsrefforkioparam/1565320-parentref
declare const parentRef: cocoascript.FSRef;
// doc://com.apple.documentation/documentation/coreservices/fsrefparam/1566023-name
declare const name: cocoascript.UniChar;
// doc://com.apple.documentation/documentation/coreservices/fsrefparam/1566586-ref
declare const ref: cocoascript.FSRef;
// doc://com.apple.documentation/documentation/coreservices/fssearchparams/1566383-searchname
declare const searchName: cocoascript.UniChar;
// doc://com.apple.documentation/documentation/coreservices/kmdattributedisplayvalues
declare const kMDAttributeDisplayValues: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdattributeallvalues
declare const kMDAttributeAllValues: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdattributereadonlyvalues
declare const kMDAttributeReadOnlyValues: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdexporteravaliable
declare const kMDExporterAvaliable: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdattributename
declare const kMDAttributeName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdattributetype
declare const kMDAttributeType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmdattributemultivalued
declare const kMDAttributeMultiValued: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemattributechangedate
declare const kMDItemAttributeChangeDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemaudiences
declare const kMDItemAudiences: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemauthors
declare const kMDItemAuthors: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemauthoraddresses
declare const kMDItemAuthorAddresses: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcity
declare const kMDItemCity: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcomment
declare const kMDItemComment: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcontactkeywords
declare const kMDItemContactKeywords: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcontentcreationdate
declare const kMDItemContentCreationDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcontentmodificationdate
declare const kMDItemContentModificationDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcontenttype
declare const kMDItemContentType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcontributors
declare const kMDItemContributors: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcopyright
declare const kMDItemCopyright: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcountry
declare const kMDItemCountry: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcoverage
declare const kMDItemCoverage: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcreator
declare const kMDItemCreator: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemdescription
declare const kMDItemDescription: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemduedate
declare const kMDItemDueDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemdurationseconds
declare const kMDItemDurationSeconds: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditememailaddresses
declare const kMDItemEmailAddresses: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemencodingapplications
declare const kMDItemEncodingApplications: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfindercomment
declare const kMDItemFinderComment: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfonts
declare const kMDItemFonts: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemheadline
declare const kMDItemHeadline: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemidentifier
declare const kMDItemIdentifier: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditeminstantmessageaddresses
declare const kMDItemInstantMessageAddresses: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditeminstructions
declare const kMDItemInstructions: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemkeywords
declare const kMDItemKeywords: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemkind
declare const kMDItemKind: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemlanguages
declare const kMDItemLanguages: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemlastuseddate
declare const kMDItemLastUsedDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemnumberofpages
declare const kMDItemNumberOfPages: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemorganizations
declare const kMDItemOrganizations: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditempageheight
declare const kMDItemPageHeight: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditempagewidth
declare const kMDItemPageWidth: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemparticipants
declare const kMDItemParticipants: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemphonenumbers
declare const kMDItemPhoneNumbers: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemprojects
declare const kMDItemProjects: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditempublishers
declare const kMDItemPublishers: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemrecipients
declare const kMDItemRecipients: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemrecipientaddresses
declare const kMDItemRecipientAddresses: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemrights
declare const kMDItemRights: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemsecuritymethod
declare const kMDItemSecurityMethod: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemstarrating
declare const kMDItemStarRating: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemstateorprovince
declare const kMDItemStateOrProvince: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemtextcontent
declare const kMDItemTextContent: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemtitle
declare const kMDItemTitle: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemversion
declare const kMDItemVersion: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemwherefroms
declare const kMDItemWhereFroms: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemsupportfiletype
declare const kMDItemSupportFileType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemauthoremailaddresses
declare const kMDItemAuthorEmailAddresses: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemrecipientemailaddresses
declare const kMDItemRecipientEmailAddresses: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemtheme
declare const kMDItemTheme: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemsubject
declare const kMDItemSubject: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcfbundleidentifier
declare const kMDItemCFBundleIdentifier: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfshascustomicon
declare const kMDItemFSHasCustomIcon: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfsisstationery
declare const kMDItemFSIsStationery: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditeminformation
declare const kMDItemInformation: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemurl
declare const kMDItemURL: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditempixelwidth
declare const kMDItemPixelWidth: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditempixelheight
declare const kMDItemPixelHeight: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditempixelcount
declare const kMDItemPixelCount: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcolorspace
declare const kMDItemColorSpace: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditembitspersample
declare const kMDItemBitsPerSample: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemflashonoff
declare const kMDItemFlashOnOff: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfocallength
declare const kMDItemFocalLength: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemacquisitionmake
declare const kMDItemAcquisitionMake: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemacquisitionmodel
declare const kMDItemAcquisitionModel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemisospeed
declare const kMDItemISOSpeed: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemorientation
declare const kMDItemOrientation: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemlayernames
declare const kMDItemLayerNames: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemwhitebalance
declare const kMDItemWhiteBalance: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemaperture
declare const kMDItemAperture: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemprofilename
declare const kMDItemProfileName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemresolutionwidthdpi
declare const kMDItemResolutionWidthDPI: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemresolutionheightdpi
declare const kMDItemResolutionHeightDPI: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemexposuremode
declare const kMDItemExposureMode: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemexposuretimeseconds
declare const kMDItemExposureTimeSeconds: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemexifversion
declare const kMDItemEXIFVersion: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemalbum
declare const kMDItemAlbum: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemhasalphachannel
declare const kMDItemHasAlphaChannel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemredeyeonoff
declare const kMDItemRedEyeOnOff: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemmeteringmode
declare const kMDItemMeteringMode: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemmaxaperture
declare const kMDItemMaxAperture: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfnumber
declare const kMDItemFNumber: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemexposureprogram
declare const kMDItemExposureProgram: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemexposuretimestring
declare const kMDItemExposureTimeString: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemexifgpsversion
declare const kMDItemEXIFGPSVersion: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemaltitude
declare const kMDItemAltitude: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemlatitude
declare const kMDItemLatitude: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemlongitude
declare const kMDItemLongitude: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemtimestamp
declare const kMDItemTimestamp: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemspeed
declare const kMDItemSpeed: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgpstrack
declare const kMDItemGPSTrack: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemimagedirection
declare const kMDItemImageDirection: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemnamedlocation
declare const kMDItemNamedLocation: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemaudiobitrate
declare const kMDItemAudioBitRate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcodecs
declare const kMDItemCodecs: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemdeliverytype
declare const kMDItemDeliveryType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemmediatypes
declare const kMDItemMediaTypes: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemstreamable
declare const kMDItemStreamable: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemtotalbitrate
declare const kMDItemTotalBitRate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemvideobitrate
declare const kMDItemVideoBitRate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemdirector
declare const kMDItemDirector: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemproducer
declare const kMDItemProducer: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemgenre
declare const kMDItemGenre: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemperformers
declare const kMDItemPerformers: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemoriginalformat
declare const kMDItemOriginalFormat: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemoriginalsource
declare const kMDItemOriginalSource: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemappleloopdescriptors
declare const kMDItemAppleLoopDescriptors: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemappleloopskeyfiltertype
declare const kMDItemAppleLoopsKeyFilterType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemappleloopsloopmode
declare const kMDItemAppleLoopsLoopMode: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemappleloopsrootkey
declare const kMDItemAppleLoopsRootKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemaudiochannelcount
declare const kMDItemAudioChannelCount: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemaudioencodingapplication
declare const kMDItemAudioEncodingApplication: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemaudiosamplerate
declare const kMDItemAudioSampleRate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemaudiotracknumber
declare const kMDItemAudioTrackNumber: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemcomposer
declare const kMDItemComposer: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemisgeneralmidisequence
declare const kMDItemIsGeneralMIDISequence: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemkeysignature
declare const kMDItemKeySignature: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemlyricist
declare const kMDItemLyricist: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemmusicalgenre
declare const kMDItemMusicalGenre: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemmusicalinstrumentcategory
declare const kMDItemMusicalInstrumentCategory: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemmusicalinstrumentname
declare const kMDItemMusicalInstrumentName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemrecordingdate
declare const kMDItemRecordingDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemrecordingyear
declare const kMDItemRecordingYear: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemtempo
declare const kMDItemTempo: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemtimesignature
declare const kMDItemTimeSignature: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemdisplayname
declare const kMDItemDisplayName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfscontentchangedate
declare const kMDItemFSContentChangeDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfscreationdate
declare const kMDItemFSCreationDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfsexists
declare const kMDItemFSExists: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfsinvisible
declare const kMDItemFSInvisible: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfsisextensionhidden
declare const kMDItemFSIsExtensionHidden: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfsisreadable
declare const kMDItemFSIsReadable: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfsiswriteable
declare const kMDItemFSIsWriteable: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfslabel
declare const kMDItemFSLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfsname
declare const kMDItemFSName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfsnodecount
declare const kMDItemFSNodeCount: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfsownergroupid
declare const kMDItemFSOwnerGroupID: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfsowneruserid
declare const kMDItemFSOwnerUserID: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditemfssize
declare const kMDItemFSSize: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/kmditempath
declare const kMDItemPath: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/coreservices/lsapplicationparameters/1447460-application
declare const application: cocoascript.FSRef;
// doc://com.apple.documentation/documentation/coreservices/lslaunchfsrefspec/1448321-appref
declare const appRef: cocoascript.FSRef;
// doc://com.apple.documentation/documentation/coreservices/lslaunchfsrefspec/1444360-itemrefs
declare const itemRefs: cocoascript.FSRef;
// doc://com.apple.documentation/documentation/coreservices/lslaunchfsrefspec/1445933-passthruparams
declare const passThruParams: cocoascript.AEDesc;
