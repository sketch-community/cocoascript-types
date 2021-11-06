declare namespace cocoascript {
  interface IconRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aeeventclass
  type AEEventClass = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aeeventid
  type AEEventID = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/appleevent
  type AppleEvent = cocoascript.AERecord;
}
declare namespace cocoascript {
  interface AEDesc {
  }
}
// https://developer.apple.com/documentation/coreservices/1413055-mdquerygetresultatindex
declare const MDQueryGetResultAtIndex: cocoascript.CFIndex;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mdquerysortcomparatorfunction
  type MDQuerySortComparatorFunction = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mdquerycreateresultfunction
  type MDQueryCreateResultFunction = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mdquerycreatevaluefunction
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
  // https://developer.apple.com/documentation/coreservices/mdqueryoptionflags
  type MDQueryOptionFlags = number;
}
// https://developer.apple.com/documentation/coreservices/klsquarantineagentnamekey
declare const kLSQuarantineAgentNameKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsquarantineagentbundleidentifierkey
declare const kLSQuarantineAgentBundleIdentifierKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsquarantinetimestampkey
declare const kLSQuarantineTimeStampKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsquarantinetypekey
declare const kLSQuarantineTypeKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsquarantineoriginurlkey
declare const kLSQuarantineOriginURLKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsquarantinedataurlkey
declare const kLSQuarantineDataURLKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aerecord
  type AERecord = cocoascript.AEDescList;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aedatastorage
  type AEDataStorage = cocoascript.AEDataStorageType;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/desctype
  type DescType = cocoascript.ResType;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aereturnid
  type AEReturnID = cocoascript.SInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aetransactionid
  type AETransactionID = cocoascript.SInt32;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aekeyword
  type AEKeyword = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/iconfamilyhandle
  type IconFamilyHandle = cocoascript.IconFamilyPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/iconfamilyptr
  type IconFamilyPtr = cocoascript.IconFamilyResource;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/iconservicesusageflags
  type IconServicesUsageFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mdlabeldomain
  type MDLabelDomain = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mdquerysortoptionflags
  type MDQuerySortOptionFlags = number;
}
declare namespace cocoascript {
  interface MDLabelRef {
  }
}
// https://developer.apple.com/documentation/coreservices/kmditemapplicationcategories
declare const kMDItemApplicationCategories: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcameraowner
declare const kMDItemCameraOwner: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcontenttypetree
declare const kMDItemContentTypeTree: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemdateadded
declare const kMDItemDateAdded: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemdownloadeddate
declare const kMDItemDownloadedDate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemeditors
declare const kMDItemEditors: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemexecutablearchitectures
declare const kMDItemExecutableArchitectures: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemexecutableplatform
declare const kMDItemExecutablePlatform: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfocallength35mm
declare const kMDItemFocalLength35mm: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpsareainformation
declare const kMDItemGPSAreaInformation: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpsdop
declare const kMDItemGPSDOP: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpsdatestamp
declare const kMDItemGPSDateStamp: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpsdestbearing
declare const kMDItemGPSDestBearing: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpsdestdistance
declare const kMDItemGPSDestDistance: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpsdestlatitude
declare const kMDItemGPSDestLatitude: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpsdestlongitude
declare const kMDItemGPSDestLongitude: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpsdifferental
declare const kMDItemGPSDifferental: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpsmapdatum
declare const kMDItemGPSMapDatum: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpsmeasuremode
declare const kMDItemGPSMeasureMode: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpsprocessingmethod
declare const kMDItemGPSProcessingMethod: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpsstatus
declare const kMDItemGPSStatus: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemhtmlcontent
declare const kMDItemHTMLContent: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemisapplicationmanaged
declare const kMDItemIsApplicationManaged: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemislikelyjunk
declare const kMDItemIsLikelyJunk: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemlabelid
declare const kMDItemLabelID: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemlabelicon
declare const kMDItemLabelIcon: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemlabelkind
declare const kMDItemLabelKind: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemlabeluuid
declare const kMDItemLabelUUID: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemlensmodel
declare const kMDItemLensModel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdlabeladdednotification
declare const kMDLabelAddedNotification: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdlabelchangednotification
declare const kMDLabelChangedNotification: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdlabelremovednotification
declare const kMDLabelRemovedNotification: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface MDItemRef {
  }
}
// https://developer.apple.com/documentation/coreservices/kmdquerydidfinishnotification
declare const kMDQueryDidFinishNotification: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdquerydidupdatenotification
declare const kMDQueryDidUpdateNotification: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdqueryprogressnotification
declare const kMDQueryProgressNotification: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdqueryupdateaddeditems
declare const kMDQueryUpdateAddedItems: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdqueryupdatechangeditems
declare const kMDQueryUpdateChangedItems: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdqueryupdateremoveditems
declare const kMDQueryUpdateRemovedItems: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdqueryscopehome
declare const kMDQueryScopeHome: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdqueryscopecomputer
declare const kMDQueryScopeComputer: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdqueryscopenetwork
declare const kMDQueryScopeNetwork: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdqueryscopeallindexed
declare const kMDQueryScopeAllIndexed: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdqueryscopecomputerindexed
declare const kMDQueryScopeComputerIndexed: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdqueryscopenetworkindexed
declare const kMDQueryScopeNetworkIndexed: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdqueryresultcontentrelevance
declare const kMDQueryResultContentRelevance: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface FSRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/1443170-aearraydata
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
// https://developer.apple.com/documentation/coreservices/kaeremoteprocessnamekey
declare const kAERemoteProcessNameKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kaeremoteprocessprocessidkey
declare const kAERemoteProcessProcessIDKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kaeremoteprocessurlkey
declare const kAERemoteProcessURLKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kaeremoteprocessuseridkey
declare const kAERemoteProcessUserIDKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/oslaccessorprocptr
  type OSLAccessorProcPtr = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/oslaccessorupp
  type OSLAccessorUPP = cocoascript.OSLAccessorProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/osladjustmarksprocptr
  type OSLAdjustMarksProcPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/osladjustmarksupp
  type OSLAdjustMarksUPP = cocoascript.OSLAdjustMarksProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/oslcompareprocptr
  type OSLCompareProcPtr = boolean;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/oslcompareupp
  type OSLCompareUPP = cocoascript.OSLCompareProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/oslcountprocptr
  type OSLCountProcPtr = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/oslcountupp
  type OSLCountUPP = cocoascript.OSLCountProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/osldisposetokenprocptr
  type OSLDisposeTokenProcPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/osldisposetokenupp
  type OSLDisposeTokenUPP = cocoascript.OSLDisposeTokenProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/oslgeterrdescprocptr
  type OSLGetErrDescProcPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/oslgeterrdescupp
  type OSLGetErrDescUPP = cocoascript.OSLGetErrDescProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/oslgetmarktokenprocptr
  type OSLGetMarkTokenProcPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/oslgetmarktokenupp
  type OSLGetMarkTokenUPP = cocoascript.OSLGetMarkTokenProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/oslmarkprocptr
  type OSLMarkProcPtr = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/oslmarkupp
  type OSLMarkUPP = cocoascript.OSLMarkProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aeaddressdesc
  type AEAddressDesc = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aearraydatapointer
  type AEArrayDataPointer = cocoascript.AEArrayData;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aearraytype
  type AEArrayType = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aebuilderrorcode
  type AEBuildErrorCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aecoercedescprocptr
  type AECoerceDescProcPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aecoercedescupp
  type AECoerceDescUPP = cocoascript.AECoerceDescProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aecoerceptrprocptr
  type AECoercePtrProcPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aecoerceptrupp
  type AECoercePtrUPP = cocoascript.AECoercePtrProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aecoercionhandlerupp
  type AECoercionHandlerUPP = cocoascript.AECoerceDescUPP;
}
declare namespace cocoascript {
  interface AEDataStorageType {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aedesclist
  type AEDescList = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aedescptr
  type AEDescPtr = cocoascript.AEDesc;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aedisposeexternalprocptr
  type AEDisposeExternalProcPtr = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aedisposeexternalupp
  type AEDisposeExternalUPP = cocoascript.AEDisposeExternalProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aeeventhandlerprocptr
  type AEEventHandlerProcPtr = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aeeventhandlerupp
  type AEEventHandlerUPP = cocoascript.AEEventHandlerProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aeeventsource
  type AEEventSource = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aeremoteprocessresolvercallback
  type AERemoteProcessResolverCallback = void;
}
declare namespace cocoascript {
  interface AERemoteProcessResolverRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aesendmode
  type AESendMode = cocoascript.SInt32;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aesendpriority
  type AESendPriority = cocoascript.SInt16;
}
declare namespace cocoascript {
  interface AEStreamRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/afpserversignature
  type AFPServerSignature = cocoascript.UInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/afpvolmountinfoptr
  type AFPVolMountInfoPtr = cocoascript.AFPVolMountInfo;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/afpxvolmountinfoptr
  type AFPXVolMountInfoPtr = cocoascript.AFPXVolMountInfo;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/avlcompareitemsprocptr
  type AVLCompareItemsProcPtr = cocoascript.AVLNodeType;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/avlcompareitemsupp
  type AVLCompareItemsUPP = cocoascript.AVLCompareItemsProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/avldisposeitemprocptr
  type AVLDisposeItemProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/avldisposeitemupp
  type AVLDisposeItemUPP = cocoascript.AVLDisposeItemProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/avlitemsizeprocptr
  type AVLItemSizeProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/avlitemsizeupp
  type AVLItemSizeUPP = cocoascript.AVLItemSizeProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/avlnodetype
  type AVLNodeType = cocoascript.UInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/avlorder
  type AVLOrder = cocoascript.UInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/avltreeptr
  type AVLTreePtr = cocoascript.AVLTreeStruct;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/avlvisitstage
  type AVLVisitStage = cocoascript.UInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/avlwalkprocptr
  type AVLWalkProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/avlwalkupp
  type AVLWalkUPP = cocoascript.AVLWalkProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aliashandle
  type AliasHandle = cocoascript.AliasPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aliasptr
  type AliasPtr = cocoascript.AliasRecord;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/appleeventptr
  type AppleEventPtr = cocoascript.AppleEvent;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/applicationspecificchunkptr
  type ApplicationSpecificChunkPtr = cocoascript.ApplicationSpecificChunk;
}
declare namespace cocoascript {
  interface AreaID {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/audiorecordingchunkptr
  type AudioRecordingChunkPtr = cocoascript.AudioRecordingChunk;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/csdiskspacerecoverycallback
  type CSDiskSpaceRecoveryCallback = cocoascript.CFErrorRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/csdiskspacerecoveryoptions
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
  // https://developer.apple.com/documentation/coreservices/csidentityclass
  type CSIdentityClass = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/csidentityflags
  type CSIdentityFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  interface CSIdentityQueryRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/csidentityqueryevent
  type CSIdentityQueryEvent = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/csidentityqueryflags
  type CSIdentityQueryFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/csidentityqueryreceiveeventcallback
  type CSIdentityQueryReceiveEventCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/csidentityquerystringcomparisonmethod
  type CSIdentityQueryStringComparisonMethod = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/csidentitystatusupdatedcallback
  type CSIdentityStatusUpdatedCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/callingconventiontype
  type CallingConventionType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/charbytetable
  type CharByteTable = string;
}
declare namespace cocoascript {
  interface Collection {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/collectionexceptionprocptr
  type CollectionExceptionProcPtr = cocoascript.OSErr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/collectionexceptionupp
  type CollectionExceptionUPP = cocoascript.CollectionExceptionProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/collectionflattenprocptr
  type CollectionFlattenProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/collectionflattenupp
  type CollectionFlattenUPP = cocoascript.CollectionFlattenProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/collectiontag
  type CollectionTag = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/commenttype
  type CommentType = cocoascript.ScriptTokenType;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/commentschunkptr
  type CommentsChunkPtr = cocoascript.CommentsChunk;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/commonchunkptr
  type CommonChunkPtr = cocoascript.CommonChunk;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/component
  type Component = cocoascript.ComponentRecord;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/componentinstance
  type ComponentInstance = cocoascript.ComponentInstanceRecord;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/componentmpworkfunctionheaderrecordptr
  type ComponentMPWorkFunctionHeaderRecordPtr = cocoascript.ComponentMPWorkFunctionHeaderRecord;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/componentresourcehandle
  type ComponentResourceHandle = cocoascript.ComponentResourcePtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/componentresourceptr
  type ComponentResourcePtr = cocoascript.ComponentResource;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/constfseventstreamref
  type ConstFSEventStreamRef = cocoascript.__FSEventStream;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/constfsspecptr
  type ConstFSSpecPtr = cocoascript.FSSpec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/custombadgeresourcehandle
  type CustomBadgeResourceHandle = cocoascript.CustomBadgeResourcePtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/custombadgeresourceptr
  type CustomBadgeResourcePtr = cocoascript.CustomBadgeResource;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/datecacheptr
  type DateCachePtr = cocoascript.DateCacheRecord;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/datedelta
  type DateDelta = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/dateform
  type DateForm = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/dateorders
  type DateOrders = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/deferredtaskprocptr
  type DeferredTaskProcPtr = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/deferredtaskptr
  type DeferredTaskPtr = cocoascript.DeferredTask;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/deferredtaskupp
  type DeferredTaskUPP = cocoascript.DeferredTaskProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/delimtype
  type DelimType = cocoascript.ScriptTokenType;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/exceptionhandler
  type ExceptionHandler = cocoascript.ExceptionHandlerTPP;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/exceptionhandlerprocptr
  type ExceptionHandlerProcPtr = cocoascript.ExceptionInformation;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/exceptionhandlertpp
  type ExceptionHandlerTPP = cocoascript.ExceptionHandlerUPP;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/exceptionhandlerupp
  type ExceptionHandlerUPP = cocoascript.ExceptionHandlerProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/exceptionkind
  type ExceptionKind = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/extcommonchunkptr
  type ExtCommonChunkPtr = cocoascript.ExtCommonChunk;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/extcomponentresourcehandle
  type ExtComponentResourceHandle = cocoascript.ExtComponentResourcePtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/extcomponentresourceptr
  type ExtComponentResourcePtr = cocoascript.ExtComponentResource;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fnmessage
  type FNMessage = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fnsubscriptionprocptr
  type FNSubscriptionProcPtr = cocoascript.FNSubscriptionRef;
}
declare namespace cocoascript {
  interface FNSubscriptionRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fnsubscriptionupp
  type FNSubscriptionUPP = cocoascript.FNSubscriptionProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fpregintel
  type FPRegIntel = string;
}
declare namespace cocoascript {
  interface FPUInformation {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/folderclass
  type FolderClass = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/folderdescflags
  type FolderDescFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/folderdescptr
  type FolderDescPtr = cocoascript.FolderDesc;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/folderlocation
  type FolderLocation = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/foldermanagernotificationprocptr
  type FolderManagerNotificationProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/foldermanagernotificationupp
  type FolderManagerNotificationUPP = cocoascript.FolderManagerNotificationProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/folderroutingptr
  type FolderRoutingPtr = cocoascript.FolderRouting;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/foldertype
  type FolderType = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/formatclass
  type FormatClass = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/formatresulttype
  type FormatResultType = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/formatstatus
  type FormatStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/formatversionchunkptr
  type FormatVersionChunkPtr = cocoascript.FormatVersionChunk;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/hfscatalognodeid
  type HFSCatalogNodeID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/iocompletionprocptr
  type IOCompletionProcPtr = cocoascript.ParmBlkPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/iocompletionupp
  type IOCompletionUPP = cocoascript.IOCompletionProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/isatype
  type ISAType = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/indextoucstringprocptr
  type IndexToUCStringProcPtr = cocoascript.UCTypeSelectOptions;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/indextoucstringupp
  type IndexToUCStringUPP = cocoascript.IndexToUCStringProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/instrumentchunkptr
  type InstrumentChunkPtr = cocoascript.InstrumentChunk;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/intl0hndl
  type Intl0Hndl = cocoascript.Intl0Ptr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/intl0ptr
  type Intl0Ptr = cocoascript.Intl0Rec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/intl1hndl
  type Intl1Hndl = cocoascript.Intl1Ptr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/intl1ptr
  type Intl1Ptr = cocoascript.Intl1Rec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/itl4handle
  type Itl4Handle = cocoascript.Itl4Ptr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/itl4ptr
  type Itl4Ptr = cocoascript.Itl4Rec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcattrtype
  type KCAttrType = cocoascript.SecKeychainAttrType;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcattribute
  type KCAttribute = cocoascript.SecKeychainAttribute;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcattributelist
  type KCAttributeList = cocoascript.SecKeychainAttributeList;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcauthtype
  type KCAuthType = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kccallbackprocptr
  type KCCallbackProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kccallbackupp
  type KCCallbackUPP = cocoascript.KCCallbackProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kccertaddoptions
  type KCCertAddOptions = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kccertsearchoptions
  type KCCertSearchOptions = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcevent
  type KCEvent = cocoascript.UInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kceventmask
  type KCEventMask = cocoascript.UInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcitemattr
  type KCItemAttr = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcitemclass
  type KCItemClass = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcitemref
  type KCItemRef = cocoascript.SecKeychainItemRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcprotocoltype
  type KCProtocolType = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcpublickeyhash
  type KCPublicKeyHash = cocoascript.UInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcref
  type KCRef = cocoascript.SecKeychainRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcsearchref
  type KCSearchRef = cocoascript.SecKeychainSearchRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcstatus
  type KCStatus = cocoascript.SecKeychainStatus;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/kcverifystopon
  type KCVerifyStopOn = cocoascript.UInt16;
}
declare namespace cocoascript {
  interface LSSharedFileListRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/lssharedfilelistchangedprocptr
  type LSSharedFileListChangedProcPtr = void;
}
declare namespace cocoascript {
  interface LSSharedFileListItemRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/lssharedfilelistresolutionflags
  type LSSharedFileListResolutionFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/localdatetimehandle
  type LocalDateTimeHandle = cocoascript.LocalDateTimePtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/localdatetimeptr
  type LocalDateTimePtr = cocoascript.LocalDateTime;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/localenamemask
  type LocaleNameMask = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/localeoperationclass
  type LocaleOperationClass = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/localeoperationvariant
  type LocaleOperationVariant = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/localepartmask
  type LocalePartMask = number;
}
declare namespace cocoascript {
  interface LocaleRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/longdatefield
  type LongDateField = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/longdatetime
  type LongDateTime = cocoascript.SInt64;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mididatachunkptr
  type MIDIDataChunkPtr = cocoascript.MIDIDataChunk;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mpisfullyinitializedproc
  type MPIsFullyInitializedProc = void;
}
declare namespace cocoascript {
  interface MachineInformation {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/markerchunkptr
  type MarkerChunkPtr = cocoascript.MarkerChunk;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/markeridtype
  type MarkerIdType = cocoascript.SInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/memoryreferencekind
  type MemoryReferenceKind = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/nitl4handle
  type NItl4Handle = cocoascript.NItl4Ptr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/nitl4ptr
  type NItl4Ptr = cocoascript.NItl4Rec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/nanoseconds
  type Nanoseconds = cocoascript.UnsignedWide;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/numformatstringrec
  type NumFormatStringRec = cocoascript.NumFormatString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/numberpartsptr
  type NumberPartsPtr = cocoascript.NumberParts;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/offsetarrayhandle
  type OffsetArrayHandle = cocoascript.OffsetArrayPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/offsetarrayptr
  type OffsetArrayPtr = cocoascript.OffsetArray;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/offsettable
  type OffsetTable = cocoascript.OffPair;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/pefrelocchunk
  type PEFRelocChunk = cocoascript.UInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/paramblockrec
  type ParamBlockRec = cocoascript.ParamBlockRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/parmblkptr
  type ParmBlkPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/procinfotype
  type ProcInfoType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/qelemptr
  type QElemPtr = cocoascript.QElem;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/qhdrptr
  type QHdrPtr = cocoascript.QHdr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/qtypes
  type QTypes = cocoascript.SignedByte;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/rdflagstype
  type RDFlagsType = cocoascript.UInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/rtatype
  type RTAType = cocoascript.SInt8;
}
declare namespace cocoascript {
  interface RegisterInformation {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/registeredcomponentinstancerecordptr
  type RegisteredComponentInstanceRecordPtr = cocoascript.RegisteredComponentInstanceRecord;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/registeredcomponentrecordptr
  type RegisteredComponentRecordPtr = cocoascript.RegisteredComponentRecord;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/resattributes
  type ResAttributes = cocoascript.SInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/reserrprocptr
  type ResErrProcPtr = cocoascript.OSErr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/reserrupp
  type ResErrUPP = cocoascript.ResErrProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/resfileattributes
  type ResFileAttributes = cocoascript.SInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/resfilerefnum
  type ResFileRefNum = cocoascript.FSIORefNum;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/resid
  type ResID = cocoascript.SInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/resourcecount
  type ResourceCount = cocoascript.SInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/resourceendianfilterptr
  type ResourceEndianFilterPtr = boolean;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/resourceindex
  type ResourceIndex = cocoascript.SInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/routinedescriptorhandle
  type RoutineDescriptorHandle = cocoascript.RoutineDescriptorPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/routinedescriptorptr
  type RoutineDescriptorPtr = cocoascript.RoutineDescriptor;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/routineflagstype
  type RoutineFlagsType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/routinerecordhandle
  type RoutineRecordHandle = cocoascript.RoutineRecordPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/routinerecordptr
  type RoutineRecordPtr = cocoascript.RoutineRecord;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/routingflags
  type RoutingFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/routingresourcehandle
  type RoutingResourceHandle = cocoascript.RoutingResourcePtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/routingresourceptr
  type RoutingResourcePtr = cocoascript.RoutingResourceEntry;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/rsrcchainlocation
  type RsrcChainLocation = cocoascript.SInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/schedulerinforecptr
  type SchedulerInfoRecPtr = cocoascript.SchedulerInfoRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/scriptcoderunptr
  type ScriptCodeRunPtr = cocoascript.ScriptCodeRun;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/scripttokentype
  type ScriptTokenType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/sleepqprocptr
  type SleepQProcPtr = cocoascript.SleepQRecPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/sleepqrecptr
  type SleepQRecPtr = cocoascript.SleepQRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/sleepqupp
  type SleepQUPP = cocoascript.SleepQProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/sounddatachunkptr
  type SoundDataChunkPtr = cocoascript.SoundDataChunk;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/string2datestatus
  type String2DateStatus = cocoascript.StringToDateStatus;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/stringtodatestatus
  type StringToDateStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/syspptr
  type SysPPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tmtaskptr
  type TMTaskPtr = cocoascript.TMTask;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/textchunkptr
  type TextChunkPtr = cocoascript.TextChunk;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/textencodingrunptr
  type TextEncodingRunPtr = cocoascript.TextEncodingRun;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/textptr
  type TextPtr = cocoascript.UInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/textrangearrayhandle
  type TextRangeArrayHandle = cocoascript.TextRangeArrayPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/textrangearrayptr
  type TextRangeArrayPtr = cocoascript.TextRangeArray;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/textrangehandle
  type TextRangeHandle = cocoascript.TextRangePtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/textrangeptr
  type TextRangePtr = cocoascript.TextRange;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadentryprocptr
  type ThreadEntryProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadentrytpp
  type ThreadEntryTPP = cocoascript.ThreadEntryUPP;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadentryupp
  type ThreadEntryUPP = cocoascript.ThreadEntryProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadid
  type ThreadID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadoptions
  type ThreadOptions = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadschedulerprocptr
  type ThreadSchedulerProcPtr = cocoascript.SchedulerInfoRecPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadschedulertpp
  type ThreadSchedulerTPP = cocoascript.ThreadSchedulerUPP;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadschedulerupp
  type ThreadSchedulerUPP = cocoascript.ThreadSchedulerProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadstate
  type ThreadState = cocoascript.UInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadstyle
  type ThreadStyle = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadswitchprocptr
  type ThreadSwitchProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadswitchtpp
  type ThreadSwitchTPP = cocoascript.ThreadSwitchUPP;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadswitchupp
  type ThreadSwitchUPP = cocoascript.ThreadSwitchProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadtaskref
  type ThreadTaskRef = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadterminationprocptr
  type ThreadTerminationProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadterminationtpp
  type ThreadTerminationTPP = cocoascript.ThreadTerminationUPP;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/threadterminationupp
  type ThreadTerminationUPP = cocoascript.ThreadTerminationProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/timerprocptr
  type TimerProcPtr = cocoascript.TMTaskPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/timerupp
  type TimerUPP = cocoascript.TimerProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/toggleresults
  type ToggleResults = cocoascript.SInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tokenblockptr
  type TokenBlockPtr = cocoascript.TokenBlock;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tokenrecptr
  type TokenRecPtr = cocoascript.TokenRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tokenresults
  type TokenResults = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tripleint
  type TripleInt = cocoascript.FVector;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/uctswalkdirection
  type UCTSWalkDirection = cocoascript.UInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/uctypeselectcompareresult
  type UCTypeSelectCompareResult = cocoascript.SInt32;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/uctypeselectoptions
  type UCTypeSelectOptions = cocoascript.UInt16;
}
declare namespace cocoascript {
  interface UCTypeSelectRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/utcdatetimehandle
  type UTCDateTimeHandle = cocoascript.UTCDateTimePtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/utcdatetimeptr
  type UTCDateTimePtr = cocoascript.UTCDateTime;
}
declare namespace cocoascript {
  interface VectorInformation {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/volmountinfoptr
  type VolMountInfoPtr = cocoascript.VolMountInfoHeader;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/volumemountinfoheaderptr
  type VolumeMountInfoHeaderPtr = cocoascript.VolumeMountInfoHeader;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/volumetype
  type VolumeType = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/xlibexportedsymbolhashslot
  type XLibExportedSymbolHashSlot = cocoascript.PEFExportedSymbolHashSlot;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/xlibexportedsymbolkey
  type XLibExportedSymbolKey = cocoascript.PEFExportedSymbolKey;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/ccnttokenrechandle
  type ccntTokenRecHandle = cocoascript.ccntTokenRecPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/ccnttokenrecptr
  type ccntTokenRecPtr = cocoascript.ccntTokenRecord;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/registerselectortype
  type registerSelectorType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/relop
  type relop = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/voidptr
  type voidPtr = void;
}
declare namespace cocoascript {
  interface DCSDictionaryRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fseventstreamcallback
  type FSEventStreamCallback = cocoascript.FSEventStreamEventId;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fseventstreamcreateflags
  type FSEventStreamCreateFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fseventstreameventflags
  type FSEventStreamEventFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fseventstreameventid
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
  // https://developer.apple.com/documentation/coreservices/lsrolesmask
  type LSRolesMask = cocoascript.OptionBits;
}
// https://developer.apple.com/documentation/coreservices/klsquarantinetypecalendareventattachment
declare const kLSQuarantineTypeCalendarEventAttachment: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsquarantinetypeemailattachment
declare const kLSQuarantineTypeEmailAttachment: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsquarantinetypeinstantmessageattachment
declare const kLSQuarantineTypeInstantMessageAttachment: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsquarantinetypeotherattachment
declare const kLSQuarantineTypeOtherAttachment: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsquarantinetypeotherdownload
declare const kLSQuarantineTypeOtherDownload: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsquarantinetypewebdownload
declare const kLSQuarantineTypeWebDownload: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/lslaunchflags
  type LSLaunchFlags = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/lsacceptanceflags
  type LSAcceptanceFlags = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/lsiteminfoflags
  type LSItemInfoFlags = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/lshandleroptions
  type LSHandlerOptions = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/lsrequestedinfo
  type LSRequestedInfo = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/skdocumentref
  type SKDocumentRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/sksearchresultsfiltercallback
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
  // https://developer.apple.com/documentation/coreservices/skdocumentid
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
  // https://developer.apple.com/documentation/coreservices/skdocumentindexstate
  type SKDocumentIndexState = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/sksearchoptions
  type SKSearchOptions = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/skindextype
  type SKIndexType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/sksearchtype
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
// https://developer.apple.com/documentation/coreservices/kcsidentityerrordomain
declare const kCSIdentityErrorDomain: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kcsidentitygenerateposixname
declare const kCSIdentityGeneratePosixName: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/wsclientcontextcopydescriptioncallbackprocptr
  type WSClientContextCopyDescriptionCallBackProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/wsclientcontextreleasecallbackprocptr
  type WSClientContextReleaseCallBackProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/wsclientcontextretaincallbackprocptr
  type WSClientContextRetainCallBackProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/wsmethodinvocationcallbackprocptr
  type WSMethodInvocationCallBackProcPtr = cocoascript.CFDictionaryRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/wsmethodinvocationdeserializationprocptr
  type WSMethodInvocationDeserializationProcPtr = void;
}
declare namespace cocoascript {
  interface WSMethodInvocationRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/wsmethodinvocationserializationprocptr
  type WSMethodInvocationSerializationProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/wsprotocolhandlerdeserializationprocptr
  type WSProtocolHandlerDeserializationProcPtr = void;
}
declare namespace cocoascript {
  interface WSProtocolHandlerRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/wsprotocolhandlerserializationprocptr
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
  // https://developer.apple.com/documentation/coreservices/fsaliasfilterprocptr
  type FSAliasFilterProcPtr = cocoascript.Ptr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/aliasinfotype
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
  // https://developer.apple.com/documentation/coreservices/fsaliasinfobitmap
  type FSAliasInfoBitmap = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/componentmpworkfunctionprocptr
  type ComponentMPWorkFunctionProcPtr = cocoascript.ComponentMPWorkFunctionHeaderRecordPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/componentroutineprocptr
  type ComponentRoutineProcPtr = cocoascript.Handle;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/getmissingcomponentresourceprocptr
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
  // https://developer.apple.com/documentation/coreservices/componentfunctionupp
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
  // https://developer.apple.com/documentation/coreservices/componentmpworkfunctionupp
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
  // https://developer.apple.com/documentation/coreservices/componentresult
  type ComponentResult = cocoascript.SInt32;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/componentroutineupp
  type ComponentRoutineUPP = cocoascript.ComponentRoutineProcPtr;
}
declare namespace cocoascript {
  interface ExtComponentResource {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/getmissingcomponentresourceupp
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
  // https://developer.apple.com/documentation/coreservices/cscomponentsthreadmode
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
  // https://developer.apple.com/documentation/coreservices/fsaliasinfoptr
  type FSAliasInfoPtr = cocoascript.FSAliasInfo;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsallocationflags
  type FSAllocationFlags = cocoascript.UInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fscatalogbulkparamptr
  type FSCatalogBulkParamPtr = cocoascript.FSCatalogBulkParam;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fscataloginfobitmap
  type FSCatalogInfoBitmap = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fscataloginfoptr
  type FSCatalogInfoPtr = cocoascript.FSCatalogInfo;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsejectstatus
  type FSEjectStatus = number;
}
declare namespace cocoascript {
  interface FSFileOperationRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsfileoperationstage
  type FSFileOperationStage = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsfileoperationstatusprocptr
  type FSFileOperationStatusProcPtr = void;
}
declare namespace cocoascript {
  interface FSFileSecurityRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsforkcbinfoparamptr
  type FSForkCBInfoParamPtr = cocoascript.FSForkCBInfoParam;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsforkioparamptr
  type FSForkIOParamPtr = cocoascript.FSForkIOParam;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsforkinfoflags
  type FSForkInfoFlags = cocoascript.UInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsforkinfoptr
  type FSForkInfoPtr = cocoascript.FSForkInfo;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsiorefnum
  type FSIORefNum = number;
}
declare namespace cocoascript {
  interface FSIterator {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsiteratorflags
  type FSIteratorFlags = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsmountstatus
  type FSMountStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fspathfileoperationstatusprocptr
  type FSPathFileOperationStatusProcPtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsrangelockparamptr
  type FSRangeLockParamPtr = cocoascript.FSRangeLockParam;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsrefforkioparamptr
  type FSRefForkIOParamPtr = cocoascript.FSRefForkIOParam;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsrefparamptr
  type FSRefParamPtr = cocoascript.FSRefParam;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsrefptr
  type FSRefPtr = cocoascript.FSRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fssearchparamsptr
  type FSSearchParamsPtr = cocoascript.FSSearchParams;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsspecarrayptr
  type FSSpecArrayPtr = cocoascript.FSSpecPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsspechandle
  type FSSpecHandle = cocoascript.FSSpecPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsspecptr
  type FSSpecPtr = cocoascript.FSSpec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsunmountstatus
  type FSUnmountStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsvolumeejectprocptr
  type FSVolumeEjectProcPtr = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsvolumeejectupp
  type FSVolumeEjectUPP = cocoascript.FSVolumeEjectProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsvolumeinfobitmap
  type FSVolumeInfoBitmap = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsvolumeinfoparamptr
  type FSVolumeInfoParamPtr = cocoascript.FSVolumeInfoParam;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsvolumeinfoptr
  type FSVolumeInfoPtr = cocoascript.FSVolumeInfo;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsvolumemountprocptr
  type FSVolumeMountProcPtr = cocoascript.FSVolumeRefNum;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsvolumemountupp
  type FSVolumeMountUPP = cocoascript.FSVolumeMountProcPtr;
}
declare namespace cocoascript {
  interface FSVolumeOperation {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsvolumerefnum
  type FSVolumeRefNum = cocoascript.SInt16;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsvolumeunmountprocptr
  type FSVolumeUnmountProcPtr = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/fsvolumeunmountupp
  type FSVolumeUnmountUPP = cocoascript.FSVolumeUnmountProcPtr;
}
// https://developer.apple.com/documentation/coreservices/kfsoperationbytescompletekey
declare const kFSOperationBytesCompleteKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kfsoperationbytesremainingkey
declare const kFSOperationBytesRemainingKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kfsoperationobjectscompletekey
declare const kFSOperationObjectsCompleteKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kfsoperationobjectsremainingkey
declare const kFSOperationObjectsRemainingKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kfsoperationthroughputkey
declare const kFSOperationThroughputKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kfsoperationtotalbyteskey
declare const kFSOperationTotalBytesKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kfsoperationtotalobjectskey
declare const kFSOperationTotalObjectsKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kfsoperationtotaluservisibleobjectskey
declare const kFSOperationTotalUserVisibleObjectsKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kfsoperationuservisibleobjectscompletekey
declare const kFSOperationUserVisibleObjectsCompleteKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kfsoperationuservisibleobjectsremainingkey
declare const kFSOperationUserVisibleObjectsRemainingKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/selectorfunctionprocptr
  type SelectorFunctionProcPtr = cocoascript.SInt32;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/selectorfunctionupp
  type SelectorFunctionUPP = cocoascript.SelectorFunctionProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/unicodetotextfallbackprocptr
  type UnicodeToTextFallbackProcPtr = cocoascript.ConstUnicodeMappingPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecplugingetplugindispatchtableptr
  type TECPluginGetPluginDispatchTablePtr = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecpluginnewencodingconverterptr
  type TECPluginNewEncodingConverterPtr = cocoascript.TextEncoding;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecpluginclearcontextinfoptr
  type TECPluginClearContextInfoPtr = cocoascript.TECConverterContextRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecpluginconverttextencodingptr
  type TECPluginConvertTextEncodingPtr = cocoascript.TECConverterContextRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecpluginflushconversionptr
  type TECPluginFlushConversionPtr = cocoascript.TECConverterContextRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecplugindisposeencodingconverterptr
  type TECPluginDisposeEncodingConverterPtr = cocoascript.TECConverterContextRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecpluginnewencodingsnifferptr
  type TECPluginNewEncodingSnifferPtr = cocoascript.TextEncoding;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecpluginclearsniffercontextinfoptr
  type TECPluginClearSnifferContextInfoPtr = cocoascript.TECSnifferContextRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecpluginsnifftextencodingptr
  type TECPluginSniffTextEncodingPtr = cocoascript.TECSnifferContextRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecplugindisposeencodingsnifferptr
  type TECPluginDisposeEncodingSnifferPtr = cocoascript.TECSnifferContextRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecplugingetcountavailabletextencodingsptr
  type TECPluginGetCountAvailableTextEncodingsPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecplugingetcountavailabletextencodingpairsptr
  type TECPluginGetCountAvailableTextEncodingPairsPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecplugingetcountdestinationtextencodingsptr
  type TECPluginGetCountDestinationTextEncodingsPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecplugingetcountsubtextencodingsptr
  type TECPluginGetCountSubTextEncodingsPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecplugingetcountavailablesniffersptr
  type TECPluginGetCountAvailableSniffersPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecplugingetcountwebencodingsptr
  type TECPluginGetCountWebEncodingsPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecplugingetcountmailencodingsptr
  type TECPluginGetCountMailEncodingsPtr = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecplugingettextencodinginternetnameptr
  type TECPluginGetTextEncodingInternetNamePtr = cocoascript.Str255;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecplugingettextencodingfrominternetnameptr
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
  // https://developer.apple.com/documentation/coreservices/constscriptcoderunptr
  type ConstScriptCodeRunPtr = cocoascript.ScriptCodeRun;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/consttextencodingrunptr
  type ConstTextEncodingRunPtr = cocoascript.TextEncodingRun;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/consttextptr
  type ConstTextPtr = cocoascript.UInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/consttexttounicodeinfo
  type ConstTextToUnicodeInfo = cocoascript.TextToUnicodeInfo;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/constunichararrayptr
  type ConstUniCharArrayPtr = cocoascript.UniChar;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/constunicodemappingptr
  type ConstUnicodeMappingPtr = cocoascript.UnicodeMapping;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/constunicodetotextinfo
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
  // https://developer.apple.com/documentation/coreservices/tecpluginsig
  type TECPluginSig = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecpluginsignature
  type TECPluginSignature = any;
}
declare namespace cocoascript {
  interface TECPluginStateRec {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecpluginversion
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
  // https://developer.apple.com/documentation/coreservices/textencoding
  type TextEncoding = number;
}
declare namespace cocoascript {
  interface TextEncodingRun {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/textencodingvariant
  type TextEncodingVariant = number;
}
declare namespace cocoascript {
  interface TextToUnicodeInfo {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/unichararrayoffset
  type UniCharArrayOffset = number;
}
declare namespace cocoascript {
  interface UnicodeMapping {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/unicodetotextfallbackupp
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
  // https://developer.apple.com/documentation/coreservices/tecencodingpairshandle
  type TECEncodingPairsHandle = cocoascript.TECEncodingPairsPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecencodingpairsptr
  type TECEncodingPairsPtr = cocoascript.TECEncodingPairsRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecencodingslisthandle
  type TECEncodingsListHandle = cocoascript.TECEncodingsListPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecencodingslistptr
  type TECEncodingsListPtr = cocoascript.TECEncodingsListRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecinfohandle
  type TECInfoHandle = cocoascript.TECInfoPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecinfoptr
  type TECInfoPtr = cocoascript.TECInfo;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecinternetnameusagemask
  type TECInternetNameUsageMask = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecinternetnameshandle
  type TECInternetNamesHandle = cocoascript.TECInternetNamesPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecinternetnamesptr
  type TECInternetNamesPtr = cocoascript.TECInternetNamesRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/teclocalelisttoencodinglistptr
  type TECLocaleListToEncodingListPtr = cocoascript.TECLocaleListToEncodingListRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/teclocaletoencodingslisthandle
  type TECLocaleToEncodingsListHandle = cocoascript.TECLocaleToEncodingsListPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/teclocaletoencodingslistptr
  type TECLocaleToEncodingsListPtr = cocoascript.TECLocaleToEncodingsListRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecsubtextencodingshandle
  type TECSubTextEncodingsHandle = cocoascript.TECSubTextEncodingsPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/tecsubtextencodingsptr
  type TECSubTextEncodingsPtr = cocoascript.TECSubTextEncodingsRec;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/textencodingbase
  type TextEncodingBase = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/textencodingformat
  type TextEncodingFormat = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/textencodingnameselector
  type TextEncodingNameSelector = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/uccharpropertytype
  type UCCharPropertyType = cocoascript.SInt32;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/uccharpropertyvalue
  type UCCharPropertyValue = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/unicodemapversion
  type UnicodeMapVersion = cocoascript.SInt32;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debugassertoutputhandlerprocptr
  type DebugAssertOutputHandlerProcPtr = cocoascript.ConstStr255Param;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debugassertoutputhandlerupp
  type DebugAssertOutputHandlerUPP = cocoascript.DebugAssertOutputHandlerProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debugcomponentcallbackprocptr
  type DebugComponentCallbackProcPtr = boolean;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debugcomponentcallbackupp
  type DebugComponentCallbackUPP = cocoascript.DebugComponentCallbackProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debuggerdisposethreadprocptr
  type DebuggerDisposeThreadProcPtr = cocoascript.ThreadID;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debuggerdisposethreadtpp
  type DebuggerDisposeThreadTPP = cocoascript.DebuggerDisposeThreadUPP;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debuggerdisposethreadupp
  type DebuggerDisposeThreadUPP = cocoascript.DebuggerDisposeThreadProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debuggernewthreadprocptr
  type DebuggerNewThreadProcPtr = cocoascript.ThreadID;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debuggernewthreadtpp
  type DebuggerNewThreadTPP = cocoascript.DebuggerNewThreadUPP;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debuggernewthreadupp
  type DebuggerNewThreadUPP = cocoascript.DebuggerNewThreadProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debuggerthreadschedulerprocptr
  type DebuggerThreadSchedulerProcPtr = cocoascript.SchedulerInfoRecPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debuggerthreadschedulertpp
  type DebuggerThreadSchedulerTPP = cocoascript.DebuggerThreadSchedulerUPP;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/debuggerthreadschedulerupp
  type DebuggerThreadSchedulerUPP = cocoascript.DebuggerThreadSchedulerProcPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mpremoteprocedure
  type MPRemoteProcedure = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/taskproc
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
  // https://developer.apple.com/documentation/coreservices/mpeventflags
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
  // https://developer.apple.com/documentation/coreservices/mpexceptionkind
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
  // https://developer.apple.com/documentation/coreservices/mpopaqueidclass
  type MPOpaqueIDClass = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mppagesizeclass
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
  // https://developer.apple.com/documentation/coreservices/mpsemaphorecount
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
  // https://developer.apple.com/documentation/coreservices/mptaskstatekind
  type MPTaskStateKind = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mptaskweight
  type MPTaskWeight = number;
}
declare namespace cocoascript {
  interface MPTimerID {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/taskstorageindex
  type TaskStorageIndex = cocoascript.ItemCount;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/taskstoragevalue
  type TaskStorageValue = cocoascript.LogicalAddress;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mpdebuggerlevel
  type MPDebuggerLevel = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mpremotecontext
  type MPRemoteContext = cocoascript.UInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/mptaskoptions
  type MPTaskOptions = cocoascript.OptionBits;
}
// https://developer.apple.com/documentation/coreservices/pi
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
  // https://developer.apple.com/documentation/coreservices/uccollationvalue
  type UCCollationValue = number;
}
declare namespace cocoascript {
  interface UCKeyboardTypeHeader {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/uckeycharseq
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
  // https://developer.apple.com/documentation/coreservices/uckeyoutput
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
  // https://developer.apple.com/documentation/coreservices/uccollateoptions
  type UCCollateOptions = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/uctextbreakoptions
  type UCTextBreakOptions = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/uctextbreaktype
  type UCTextBreakType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/unichararrayhandle
  type UniCharArrayHandle = cocoascript.UniCharArrayPtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/unichararrayptr
  type UniCharArrayPtr = cocoascript.UniChar;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/unicodemappingptr
  type UnicodeMappingPtr = cocoascript.UnicodeMapping;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/untokentablehandle
  type UntokenTableHandle = cocoascript.UntokenTablePtr;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/untokentableptr
  type UntokenTablePtr = cocoascript.UntokenTable;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreservices/coreendianflipproc
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
  // https://developer.apple.com/documentation/coreservices/wstypeid
  type WSTypeID = number;
}
// https://developer.apple.com/documentation/coreservices/1517787-getmacosstatuscommentstring
declare const GetMacOSStatusCommentString: any;
// https://developer.apple.com/documentation/coreservices/1517786-getmacosstatuserrorstring
declare const GetMacOSStatusErrorString: any;
// https://developer.apple.com/documentation/coreservices/lslaunchurlspec/1445136-passthruparams
declare const passThruParams: cocoascript.AEDesc;
declare namespace cocoascript {
  interface LSItemInfoRecord {
  }
}
// https://developer.apple.com/documentation/coreservices/klsitemcontenttype
declare const kLSItemContentType: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsitemfiletype
declare const kLSItemFileType: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsitemfilecreator
declare const kLSItemFileCreator: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsitemextension
declare const kLSItemExtension: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsitemdisplayname
declare const kLSItemDisplayName: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsitemdisplaykind
declare const kLSItemDisplayKind: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsitemrolehandlerdisplayname
declare const kLSItemRoleHandlerDisplayName: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsitemisinvisible
declare const kLSItemIsInvisible: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/klsitemextensionishidden
declare const kLSItemExtensionIsHidden: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface LSApplicationParameters {
  }
}
declare namespace cocoascript {
  interface LSLaunchFSRefSpec {
  }
}
// https://developer.apple.com/documentation/coreservices/klsitemquarantineproperties
declare const kLSItemQuarantineProperties: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kskmintermlength
declare const kSKMinTermLength: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kskstopwords
declare const kSKStopWords: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/ksksubstitutions
declare const kSKSubstitutions: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kskmaximumterms
declare const kSKMaximumTerms: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kskproximityindexing
declare const kSKProximityIndexing: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/ksktermchars
declare const kSKTermChars: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kskstarttermchars
declare const kSKStartTermChars: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kskendtermchars
declare const kSKEndTermChars: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/ksklanguagetypes
declare const kSKLanguageTypes: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdattributedisplayvalues
declare const kMDAttributeDisplayValues: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdattributeallvalues
declare const kMDAttributeAllValues: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdattributereadonlyvalues
declare const kMDAttributeReadOnlyValues: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdexporteravaliable
declare const kMDExporterAvaliable: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdattributename
declare const kMDAttributeName: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdattributetype
declare const kMDAttributeType: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmdattributemultivalued
declare const kMDAttributeMultiValued: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemattributechangedate
declare const kMDItemAttributeChangeDate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemaudiences
declare const kMDItemAudiences: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemauthors
declare const kMDItemAuthors: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemauthoraddresses
declare const kMDItemAuthorAddresses: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcity
declare const kMDItemCity: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcomment
declare const kMDItemComment: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcontactkeywords
declare const kMDItemContactKeywords: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcontentcreationdate
declare const kMDItemContentCreationDate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcontentmodificationdate
declare const kMDItemContentModificationDate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcontenttype
declare const kMDItemContentType: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcontributors
declare const kMDItemContributors: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcopyright
declare const kMDItemCopyright: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcountry
declare const kMDItemCountry: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcoverage
declare const kMDItemCoverage: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcreator
declare const kMDItemCreator: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemdescription
declare const kMDItemDescription: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemduedate
declare const kMDItemDueDate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemdurationseconds
declare const kMDItemDurationSeconds: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditememailaddresses
declare const kMDItemEmailAddresses: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemencodingapplications
declare const kMDItemEncodingApplications: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfindercomment
declare const kMDItemFinderComment: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfonts
declare const kMDItemFonts: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemheadline
declare const kMDItemHeadline: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemidentifier
declare const kMDItemIdentifier: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditeminstantmessageaddresses
declare const kMDItemInstantMessageAddresses: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditeminstructions
declare const kMDItemInstructions: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemkeywords
declare const kMDItemKeywords: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemkind
declare const kMDItemKind: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemlanguages
declare const kMDItemLanguages: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemlastuseddate
declare const kMDItemLastUsedDate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemnumberofpages
declare const kMDItemNumberOfPages: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemorganizations
declare const kMDItemOrganizations: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditempageheight
declare const kMDItemPageHeight: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditempagewidth
declare const kMDItemPageWidth: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemparticipants
declare const kMDItemParticipants: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemphonenumbers
declare const kMDItemPhoneNumbers: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemprojects
declare const kMDItemProjects: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditempublishers
declare const kMDItemPublishers: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemrecipients
declare const kMDItemRecipients: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemrecipientaddresses
declare const kMDItemRecipientAddresses: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemrights
declare const kMDItemRights: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemsecuritymethod
declare const kMDItemSecurityMethod: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemstarrating
declare const kMDItemStarRating: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemstateorprovince
declare const kMDItemStateOrProvince: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemtextcontent
declare const kMDItemTextContent: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemtitle
declare const kMDItemTitle: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemversion
declare const kMDItemVersion: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemwherefroms
declare const kMDItemWhereFroms: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemsupportfiletype
declare const kMDItemSupportFileType: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemauthoremailaddresses
declare const kMDItemAuthorEmailAddresses: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemrecipientemailaddresses
declare const kMDItemRecipientEmailAddresses: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemtheme
declare const kMDItemTheme: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemsubject
declare const kMDItemSubject: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcfbundleidentifier
declare const kMDItemCFBundleIdentifier: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfshascustomicon
declare const kMDItemFSHasCustomIcon: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfsisstationery
declare const kMDItemFSIsStationery: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditeminformation
declare const kMDItemInformation: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemurl
declare const kMDItemURL: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditempixelwidth
declare const kMDItemPixelWidth: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditempixelheight
declare const kMDItemPixelHeight: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditempixelcount
declare const kMDItemPixelCount: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcolorspace
declare const kMDItemColorSpace: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditembitspersample
declare const kMDItemBitsPerSample: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemflashonoff
declare const kMDItemFlashOnOff: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfocallength
declare const kMDItemFocalLength: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemacquisitionmake
declare const kMDItemAcquisitionMake: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemacquisitionmodel
declare const kMDItemAcquisitionModel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemisospeed
declare const kMDItemISOSpeed: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemorientation
declare const kMDItemOrientation: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemlayernames
declare const kMDItemLayerNames: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemwhitebalance
declare const kMDItemWhiteBalance: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemaperture
declare const kMDItemAperture: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemprofilename
declare const kMDItemProfileName: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemresolutionwidthdpi
declare const kMDItemResolutionWidthDPI: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemresolutionheightdpi
declare const kMDItemResolutionHeightDPI: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemexposuremode
declare const kMDItemExposureMode: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemexposuretimeseconds
declare const kMDItemExposureTimeSeconds: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemexifversion
declare const kMDItemEXIFVersion: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemalbum
declare const kMDItemAlbum: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemhasalphachannel
declare const kMDItemHasAlphaChannel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemredeyeonoff
declare const kMDItemRedEyeOnOff: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemmeteringmode
declare const kMDItemMeteringMode: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemmaxaperture
declare const kMDItemMaxAperture: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfnumber
declare const kMDItemFNumber: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemexposureprogram
declare const kMDItemExposureProgram: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemexposuretimestring
declare const kMDItemExposureTimeString: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemexifgpsversion
declare const kMDItemEXIFGPSVersion: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemaltitude
declare const kMDItemAltitude: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemlatitude
declare const kMDItemLatitude: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemlongitude
declare const kMDItemLongitude: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemtimestamp
declare const kMDItemTimestamp: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemspeed
declare const kMDItemSpeed: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgpstrack
declare const kMDItemGPSTrack: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemimagedirection
declare const kMDItemImageDirection: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemnamedlocation
declare const kMDItemNamedLocation: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemaudiobitrate
declare const kMDItemAudioBitRate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcodecs
declare const kMDItemCodecs: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemdeliverytype
declare const kMDItemDeliveryType: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemmediatypes
declare const kMDItemMediaTypes: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemstreamable
declare const kMDItemStreamable: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemtotalbitrate
declare const kMDItemTotalBitRate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemvideobitrate
declare const kMDItemVideoBitRate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemdirector
declare const kMDItemDirector: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemproducer
declare const kMDItemProducer: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemgenre
declare const kMDItemGenre: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemperformers
declare const kMDItemPerformers: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemoriginalformat
declare const kMDItemOriginalFormat: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemoriginalsource
declare const kMDItemOriginalSource: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemappleloopdescriptors
declare const kMDItemAppleLoopDescriptors: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemappleloopskeyfiltertype
declare const kMDItemAppleLoopsKeyFilterType: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemappleloopsloopmode
declare const kMDItemAppleLoopsLoopMode: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemappleloopsrootkey
declare const kMDItemAppleLoopsRootKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemaudiochannelcount
declare const kMDItemAudioChannelCount: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemaudioencodingapplication
declare const kMDItemAudioEncodingApplication: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemaudiosamplerate
declare const kMDItemAudioSampleRate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemaudiotracknumber
declare const kMDItemAudioTrackNumber: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemcomposer
declare const kMDItemComposer: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemisgeneralmidisequence
declare const kMDItemIsGeneralMIDISequence: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemkeysignature
declare const kMDItemKeySignature: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemlyricist
declare const kMDItemLyricist: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemmusicalgenre
declare const kMDItemMusicalGenre: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemmusicalinstrumentcategory
declare const kMDItemMusicalInstrumentCategory: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemmusicalinstrumentname
declare const kMDItemMusicalInstrumentName: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemrecordingdate
declare const kMDItemRecordingDate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemrecordingyear
declare const kMDItemRecordingYear: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemtempo
declare const kMDItemTempo: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemtimesignature
declare const kMDItemTimeSignature: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemdisplayname
declare const kMDItemDisplayName: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfscontentchangedate
declare const kMDItemFSContentChangeDate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfscreationdate
declare const kMDItemFSCreationDate: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfsexists
declare const kMDItemFSExists: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfsinvisible
declare const kMDItemFSInvisible: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfsisextensionhidden
declare const kMDItemFSIsExtensionHidden: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfsisreadable
declare const kMDItemFSIsReadable: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfsiswriteable
declare const kMDItemFSIsWriteable: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfslabel
declare const kMDItemFSLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfsname
declare const kMDItemFSName: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfsnodecount
declare const kMDItemFSNodeCount: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfsownergroupid
declare const kMDItemFSOwnerGroupID: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfsowneruserid
declare const kMDItemFSOwnerUserID: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditemfssize
declare const kMDItemFSSize: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/kmditempath
declare const kMDItemPath: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coreservices/fscatalogbulkparam/1565716-container
declare const container: cocoascript.FSRef;
// https://developer.apple.com/documentation/coreservices/fscatalogbulkparam/1566299-searchparams
declare const searchParams: cocoascript.FSSearchParams;
// https://developer.apple.com/documentation/coreservices/fsforkioparam/1566668-forkname
declare const forkName: cocoascript.UniChar;
// https://developer.apple.com/documentation/coreservices/fsforkioparam/1565544-ref
declare const ref: cocoascript.FSRef;
// https://developer.apple.com/documentation/coreservices/fsrefforkioparam/1566465-catinfo
declare const catInfo: cocoascript.FSCatalogInfo;
// https://developer.apple.com/documentation/coreservices/fsrefforkioparam/1565422-forkname
declare const forkName: cocoascript.UniChar;
// https://developer.apple.com/documentation/coreservices/fsrefforkioparam/1565580-name
declare const name: cocoascript.UniChar;
// https://developer.apple.com/documentation/coreservices/fsrefforkioparam/1565320-parentref
declare const parentRef: cocoascript.FSRef;
// https://developer.apple.com/documentation/coreservices/fsrefparam/1566023-name
declare const name: cocoascript.UniChar;
// https://developer.apple.com/documentation/coreservices/fsrefparam/1566586-ref
declare const ref: cocoascript.FSRef;
// https://developer.apple.com/documentation/coreservices/fssearchparams/1566383-searchname
declare const searchName: cocoascript.UniChar;
// https://developer.apple.com/documentation/coreservices/lsapplicationparameters/1447460-application
declare const application: cocoascript.FSRef;
// https://developer.apple.com/documentation/coreservices/lslaunchfsrefspec/1448321-appref
declare const appRef: cocoascript.FSRef;
// https://developer.apple.com/documentation/coreservices/lslaunchfsrefspec/1444360-itemrefs
declare const itemRefs: cocoascript.FSRef;
// https://developer.apple.com/documentation/coreservices/lslaunchfsrefspec/1445933-passthruparams
declare const passThruParams: cocoascript.AEDesc;
