declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationrights
  type AuthorizationRights = cocoascript.AuthorizationItemSet;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/tls_protocol_version_t
  type tls_protocol_version_t = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sslprotocol
  type SSLProtocol = number;
}
declare namespace cocoascript {
  interface SecTrustRef {
  }
}
declare namespace cocoascript {
  interface SecIdentityRef {
  }
}
declare namespace cocoascript {
  interface SecCertificateRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationref
  type AuthorizationRef = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationflags
  type AuthorizationFlags = number;
}
declare namespace cocoascript {
  interface AuthorizationItem {
  }
}
declare namespace cocoascript {
  interface AuthorizationItemSet {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationenvironment
  type AuthorizationEnvironment = cocoascript.AuthorizationItemSet;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationasynccallback
  type AuthorizationAsyncCallback = cocoascript.AuthorizationRights;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationstring
  type AuthorizationString = string;
}
declare namespace cocoascript {
  interface AuthorizationExternalForm {
  }
}
// doc://com.apple.documentation/documentation/security/kauthorizationexternalformlength
declare const kAuthorizationExternalFormLength: any;
// doc://com.apple.documentation/documentation/security/ksecsharedpassword
declare const kSecSharedPassword: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationpluginref
  type AuthorizationPluginRef = void;
}
declare namespace cocoascript {
  interface AuthorizationCallbacks {
  }
}
declare namespace cocoascript {
  interface AuthorizationPluginInterface {
  }
}
declare namespace cocoascript {
  interface AuthorizationValue {
  }
}
declare namespace cocoascript {
  interface AuthorizationValueVector {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationmechanismid
  type AuthorizationMechanismId = cocoascript.AuthorizationString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationpluginid
  type AuthorizationPluginId = cocoascript.AuthorizationString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationmechanismref
  type AuthorizationMechanismRef = void;
}
declare namespace cocoascript {
  interface AuthorizationEngineRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationsessionid
  type AuthorizationSessionId = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationresult
  type AuthorizationResult = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/authorizationcontextflags
  type AuthorizationContextFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sessioncreationflags
  type SessionCreationFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sessionattributebits
  type SessionAttributeBits = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/securitysessionid
  type SecuritySessionId = number;
}
declare namespace cocoascript {
  interface SecPolicyRef {
  }
}
// doc://com.apple.documentation/documentation/security/ksecattraccessgroup
declare const kSecAttrAccessGroup: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecusedataprotectionkeychain
declare const kSecUseDataProtectionKeychain: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsynchronizable
declare const kSecAttrSynchronizable: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secaccesscontrolcreateflags
  type SecAccessControlCreateFlags = cocoascript.CFOptionFlags;
}
declare namespace cocoascript {
  interface SecAccessControlRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectrustresulttype
  type SecTrustResultType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectrustcallback
  type SecTrustCallback = cocoascript.SecTrustResultType;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectrustusersetting
  type SecTrustUserSetting = cocoascript.SecTrustResultType;
}
declare namespace cocoascript {
  interface SecKeyRef {
  }
}
declare namespace cocoascript {
  interface SecKeychainItemRef {
  }
}
declare namespace cocoascript {
  interface SecCodeRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seccsflags
  type SecCSFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secstaticcoderef
  type SecStaticCodeRef = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seccodesignatureflags
  type SecCodeSignatureFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seccsdigestalgorithm
  type SecCSDigestAlgorithm = number;
}
declare namespace cocoascript {
  interface SecRequirementRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secrequirementtype
  type SecRequirementType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seccodestatus
  type SecCodeStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secguestref
  type SecGuestRef = number;
}
declare namespace cocoascript {
  interface SecTaskRef {
  }
}
declare namespace cocoascript {
  interface CMSEncoderRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/cmssignedattributes
  type CMSSignedAttributes = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/cmscertificatechainmode
  type CMSCertificateChainMode = number;
}
declare namespace cocoascript {
  interface CMSDecoderRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/cmssignerstatus
  type CMSSignerStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secrandomref
  type SecRandomRef = any;
}
// doc://com.apple.documentation/documentation/security/ksecrandomdefault
declare const kSecRandomDefault: cocoascript.SecRandomRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectransformref
  type SecTransformRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectransformcreatefp
  type SecTransformCreateFP = cocoascript.SecTransformImplementationRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectransforminstanceblock
  type SecTransformInstanceBlock = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectransformimplementationref
  type SecTransformImplementationRef = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secgrouptransformref
  type SecGroupTransformRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectransformattributeref
  type SecTransformAttributeRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectransformstringorattributeref
  type SecTransformStringOrAttributeRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectransformmetaattributetype
  type SecTransformMetaAttributeType = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectransformactionblock
  type SecTransformActionBlock = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectransformattributeactionblock
  type SecTransformAttributeActionBlock = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectransformdatablock
  type SecTransformDataBlock = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secmessageblock
  type SecMessageBlock = boolean;
}
// doc://com.apple.documentation/documentation/security/ksectransformerrordomain
declare const kSecTransformErrorDomain: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformpreviouserrorkey
declare const kSecTransformPreviousErrorKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformabortoriginatorkey
declare const kSecTransformAbortOriginatorKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface SecAsn1CoderRef {
  }
}
declare namespace cocoascript {
  interface SecAsn1Item {
  }
}
declare namespace cocoascript {
  interface SecAsn1Template {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secasn1templatechooser
  type SecAsn1TemplateChooser = cocoascript._Nonnull;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secasn1templatechooserptr
  type SecAsn1TemplateChooserPtr = cocoascript.SecAsn1TemplateChooser;
}
declare namespace cocoascript {
  interface SecAsn1Oid {
  }
}
declare namespace cocoascript {
  interface SecAsn1AlgId {
  }
}
declare namespace cocoascript {
  interface SecAsn1PubKeyInfo {
  }
}
// doc://com.apple.documentation/documentation/security/cssmoid_apple_extension_developer_authentication
declare const CSSMOID_APPLE_EXTENSION_DEVELOPER_AUTHENTICATION: cocoascript.SecAsn1Oid;
// doc://com.apple.documentation/documentation/security/cssmoid_apple_extension_provisioning_profile_signing
declare const CSSMOID_APPLE_EXTENSION_PROVISIONING_PROFILE_SIGNING: cocoascript.SecAsn1Oid;
// doc://com.apple.documentation/documentation/security/cssmoid_apple_extension_server_authentication
declare const CSSMOID_APPLE_EXTENSION_SERVER_AUTHENTICATION: cocoascript.SecAsn1Oid;
// doc://com.apple.documentation/documentation/security/cssmoid_apple_tp_pcs_escrow_service
declare const CSSMOID_APPLE_TP_PCS_ESCROW_SERVICE: cocoascript.SecAsn1Oid;
// doc://com.apple.documentation/documentation/security/cssmoid_apple_tp_provisioning_profile_signing
declare const CSSMOID_APPLE_TP_PROVISIONING_PROFILE_SIGNING: cocoascript.SecAsn1Oid;
// doc://com.apple.documentation/documentation/security/kcmsencoderdigestalgorithmsha1
declare const kCMSEncoderDigestAlgorithmSHA1: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kcmsencoderdigestalgorithmsha256
declare const kCMSEncoderDigestAlgorithmSHA256: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/ce_crldistreasonflags
  type CE_CrlDistReasonFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/ce_crlnumber
  type CE_CrlNumber = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/ce_crlreason
  type CE_CrlReason = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/ce_datatype
  type CE_DataType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/ce_deltacrl
  type CE_DeltaCrl = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/ce_generalnametype
  type CE_GeneralNameType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/ce_inhibitanypolicy
  type CE_InhibitAnyPolicy = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/ce_keyusage
  type CE_KeyUsage = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/ce_nameregistrationauthorities
  type CE_NameRegistrationAuthorities = cocoascript.CE_GeneralNames;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/ce_netscapecerttype
  type CE_NetscapeCertType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/ce_subjectkeyid
  type CE_SubjectKeyID = cocoascript.SecAsn1Item;
}
declare namespace cocoascript {
  interface CE_AccessDescription {
  }
}
declare namespace cocoascript {
  interface CE_AuthorityInfoAccess {
  }
}
declare namespace cocoascript {
  interface CE_AuthorityKeyID {
  }
}
declare namespace cocoascript {
  interface CE_BasicConstraints {
  }
}
declare namespace cocoascript {
  interface CE_CRLDistPointsSyntax {
  }
}
declare namespace cocoascript {
  interface CE_CRLDistributionPoint {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/ce_crldistributionpointnametype
  type CE_CrlDistributionPointNameType = number;
}
declare namespace cocoascript {
  interface CE_CertPolicies {
  }
}
declare namespace cocoascript {
  interface CE_DataAndType {
  }
}
declare namespace cocoascript {
  interface CE_DistributionPointName {
  }
}
declare namespace cocoascript {
  interface CE_GeneralName {
  }
}
declare namespace cocoascript {
  interface CE_GeneralNames {
  }
}
declare namespace cocoascript {
  interface CE_GeneralSubtree {
  }
}
declare namespace cocoascript {
  interface CE_GeneralSubtrees {
  }
}
declare namespace cocoascript {
  interface CE_IssuingDistributionPoint {
  }
}
declare namespace cocoascript {
  interface CE_NameConstraints {
  }
}
declare namespace cocoascript {
  interface CE_OtherName {
  }
}
declare namespace cocoascript {
  interface CE_PolicyConstraints {
  }
}
declare namespace cocoascript {
  interface CE_PolicyInformation {
  }
}
declare namespace cocoascript {
  interface CE_PolicyMapping {
  }
}
declare namespace cocoascript {
  interface CE_PolicyMappings {
  }
}
declare namespace cocoascript {
  interface CE_PolicyQualifierInfo {
  }
}
declare namespace cocoascript {
  interface CE_QC_Statement {
  }
}
declare namespace cocoascript {
  interface CE_QC_Statements {
  }
}
declare namespace cocoascript {
  interface CE_SemanticsInformation {
  }
}
declare namespace cocoascript {
  interface CE_ExtendedKeyUsage {
  }
}
// doc://com.apple.documentation/documentation/security/oidadcaissuer
declare const oidAdCAIssuer: any;
// doc://com.apple.documentation/documentation/security/oidadocsp
declare const oidAdOCSP: any;
// doc://com.apple.documentation/documentation/security/oidansip384r1
declare const oidAnsip384r1: any;
// doc://com.apple.documentation/documentation/security/oidansip521r1
declare const oidAnsip521r1: any;
// doc://com.apple.documentation/documentation/security/oidanyextendedkeyusage
declare const oidAnyExtendedKeyUsage: any;
// doc://com.apple.documentation/documentation/security/oidanypolicy
declare const oidAnyPolicy: any;
// doc://com.apple.documentation/documentation/security/oidauthorityinfoaccess
declare const oidAuthorityInfoAccess: any;
// doc://com.apple.documentation/documentation/security/oidauthoritykeyidentifier
declare const oidAuthorityKeyIdentifier: any;
// doc://com.apple.documentation/documentation/security/oidbasicconstraints
declare const oidBasicConstraints: any;
// doc://com.apple.documentation/documentation/security/oidcertificatepolicies
declare const oidCertificatePolicies: any;
// doc://com.apple.documentation/documentation/security/oidcommonname
declare const oidCommonName: any;
// doc://com.apple.documentation/documentation/security/oidcountryname
declare const oidCountryName: any;
// doc://com.apple.documentation/documentation/security/oidcrldistributionpoints
declare const oidCrlDistributionPoints: any;
// doc://com.apple.documentation/documentation/security/oiddescription
declare const oidDescription: any;
// doc://com.apple.documentation/documentation/security/oidecprime192v1
declare const oidEcPrime192v1: any;
// doc://com.apple.documentation/documentation/security/oidecprime256v1
declare const oidEcPrime256v1: any;
// doc://com.apple.documentation/documentation/security/oidecpubkey
declare const oidEcPubKey: any;
// doc://com.apple.documentation/documentation/security/oidemailaddress
declare const oidEmailAddress: any;
// doc://com.apple.documentation/documentation/security/oidentrustversinfo
declare const oidEntrustVersInfo: any;
// doc://com.apple.documentation/documentation/security/oidextendedkeyusage
declare const oidExtendedKeyUsage: any;
// doc://com.apple.documentation/documentation/security/oidextendedkeyusageclientauth
declare const oidExtendedKeyUsageClientAuth: any;
// doc://com.apple.documentation/documentation/security/oidextendedkeyusagecodesigning
declare const oidExtendedKeyUsageCodeSigning: any;
// doc://com.apple.documentation/documentation/security/oidextendedkeyusageemailprotection
declare const oidExtendedKeyUsageEmailProtection: any;
// doc://com.apple.documentation/documentation/security/oidextendedkeyusageipsec
declare const oidExtendedKeyUsageIPSec: any;
// doc://com.apple.documentation/documentation/security/oidextendedkeyusagemicrosoftsgc
declare const oidExtendedKeyUsageMicrosoftSGC: any;
// doc://com.apple.documentation/documentation/security/oidextendedkeyusagenetscapesgc
declare const oidExtendedKeyUsageNetscapeSGC: any;
// doc://com.apple.documentation/documentation/security/oidextendedkeyusageocspsigning
declare const oidExtendedKeyUsageOCSPSigning: any;
// doc://com.apple.documentation/documentation/security/oidextendedkeyusageserverauth
declare const oidExtendedKeyUsageServerAuth: any;
// doc://com.apple.documentation/documentation/security/oidextendedkeyusagetimestamping
declare const oidExtendedKeyUsageTimeStamping: any;
// doc://com.apple.documentation/documentation/security/oidfee
declare const oidFee: any;
// doc://com.apple.documentation/documentation/security/oidfriendlyname
declare const oidFriendlyName: any;
// doc://com.apple.documentation/documentation/security/oidgoogleembeddedsignedcertificatetimestamp
declare const oidGoogleEmbeddedSignedCertificateTimestamp: any;
// doc://com.apple.documentation/documentation/security/oidgoogleocspsignedcertificatetimestamp
declare const oidGoogleOCSPSignedCertificateTimestamp: any;
// doc://com.apple.documentation/documentation/security/oidinhibitanypolicy
declare const oidInhibitAnyPolicy: any;
// doc://com.apple.documentation/documentation/security/oidissueraltname
declare const oidIssuerAltName: any;
// doc://com.apple.documentation/documentation/security/oidkeyusage
declare const oidKeyUsage: any;
// doc://com.apple.documentation/documentation/security/oidlocalkeyid
declare const oidLocalKeyId: any;
// doc://com.apple.documentation/documentation/security/oidlocalityname
declare const oidLocalityName: any;
// doc://com.apple.documentation/documentation/security/oidmsntprincipalname
declare const oidMSNTPrincipalName: any;
// doc://com.apple.documentation/documentation/security/oidmd2
declare const oidMd2: any;
// doc://com.apple.documentation/documentation/security/oidmd2rsa
declare const oidMd2Rsa: any;
// doc://com.apple.documentation/documentation/security/oidmd4
declare const oidMd4: any;
// doc://com.apple.documentation/documentation/security/oidmd4rsa
declare const oidMd4Rsa: any;
// doc://com.apple.documentation/documentation/security/oidmd5
declare const oidMd5: any;
// doc://com.apple.documentation/documentation/security/oidmd5fee
declare const oidMd5Fee: any;
// doc://com.apple.documentation/documentation/security/oidmd5rsa
declare const oidMd5Rsa: any;
// doc://com.apple.documentation/documentation/security/oidnameconstraints
declare const oidNameConstraints: any;
// doc://com.apple.documentation/documentation/security/oidnetscapecerttype
declare const oidNetscapeCertType: any;
// doc://com.apple.documentation/documentation/security/oidorganizationname
declare const oidOrganizationName: any;
// doc://com.apple.documentation/documentation/security/oidorganizationalunitname
declare const oidOrganizationalUnitName: any;
// doc://com.apple.documentation/documentation/security/oidpolicyconstraints
declare const oidPolicyConstraints: any;
// doc://com.apple.documentation/documentation/security/oidpolicymappings
declare const oidPolicyMappings: any;
// doc://com.apple.documentation/documentation/security/oidprivatekeyusageperiod
declare const oidPrivateKeyUsagePeriod: any;
// doc://com.apple.documentation/documentation/security/oidqtcps
declare const oidQtCps: any;
// doc://com.apple.documentation/documentation/security/oidqtunotice
declare const oidQtUNotice: any;
// doc://com.apple.documentation/documentation/security/oidrsa
declare const oidRsa: any;
// doc://com.apple.documentation/documentation/security/oidsha1
declare const oidSha1: any;
// doc://com.apple.documentation/documentation/security/oidsha1dsa
declare const oidSha1Dsa: any;
// doc://com.apple.documentation/documentation/security/oidsha1dsacommonoiw
declare const oidSha1DsaCommonOIW: any;
// doc://com.apple.documentation/documentation/security/oidsha1dsaoiw
declare const oidSha1DsaOIW: any;
// doc://com.apple.documentation/documentation/security/oidsha1ecdsa
declare const oidSha1Ecdsa: any;
// doc://com.apple.documentation/documentation/security/oidsha1fee
declare const oidSha1Fee: any;
// doc://com.apple.documentation/documentation/security/oidsha1rsa
declare const oidSha1Rsa: any;
// doc://com.apple.documentation/documentation/security/oidsha1rsaoiw
declare const oidSha1RsaOIW: any;
// doc://com.apple.documentation/documentation/security/oidsha224
declare const oidSha224: any;
// doc://com.apple.documentation/documentation/security/oidsha224ecdsa
declare const oidSha224Ecdsa: any;
// doc://com.apple.documentation/documentation/security/oidsha224rsa
declare const oidSha224Rsa: any;
// doc://com.apple.documentation/documentation/security/oidsha256
declare const oidSha256: any;
// doc://com.apple.documentation/documentation/security/oidsha256ecdsa
declare const oidSha256Ecdsa: any;
// doc://com.apple.documentation/documentation/security/oidsha256rsa
declare const oidSha256Rsa: any;
// doc://com.apple.documentation/documentation/security/oidsha384
declare const oidSha384: any;
// doc://com.apple.documentation/documentation/security/oidsha384ecdsa
declare const oidSha384Ecdsa: any;
// doc://com.apple.documentation/documentation/security/oidsha384rsa
declare const oidSha384Rsa: any;
// doc://com.apple.documentation/documentation/security/oidsha512
declare const oidSha512: any;
// doc://com.apple.documentation/documentation/security/oidsha512ecdsa
declare const oidSha512Ecdsa: any;
// doc://com.apple.documentation/documentation/security/oidsha512rsa
declare const oidSha512Rsa: any;
// doc://com.apple.documentation/documentation/security/oidstateorprovincename
declare const oidStateOrProvinceName: any;
// doc://com.apple.documentation/documentation/security/oidsubjectaltname
declare const oidSubjectAltName: any;
// doc://com.apple.documentation/documentation/security/oidsubjectinfoaccess
declare const oidSubjectInfoAccess: any;
// doc://com.apple.documentation/documentation/security/oidsubjectkeyidentifier
declare const oidSubjectKeyIdentifier: any;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sslconnectionref
  type SSLConnectionRef = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sslprotocolside
  type SSLProtocolSide = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sslconnectiontype
  type SSLConnectionType = number;
}
declare namespace cocoascript {
  interface SSLContextRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sslsessionoption
  type SSLSessionOption = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sslreadfunc
  type SSLReadFunc = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sslwritefunc
  type SSLWriteFunc = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sslauthenticate
  type SSLAuthenticate = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sslsessionstate
  type SSLSessionState = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/tls_ciphersuite_group_t
  type tls_ciphersuite_group_t = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/tls_ciphersuite_t
  type tls_ciphersuite_t = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sslciphersuite
  type SSLCipherSuite = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sslciphersuitegroup
  type SSLCiphersuiteGroup = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sslclientcertificatestate
  type SSLClientCertificateState = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/securedownloadtrustevaluatecallback
  type SecureDownloadTrustEvaluateCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/securedownloadtrustsetupcallback
  type SecureDownloadTrustSetupCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/securedownloadtrustcallbackresult
  type SecureDownloadTrustCallbackResult = number;
}
declare namespace cocoascript {
  interface SecureDownloadRef {
  }
}
// doc://com.apple.documentation/documentation/security/ksecattrserver
declare const kSecAttrServer: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccount
declare const kSecAttrAccount: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrport
declare const kSecAttrPort: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface SecKeychainRef {
  }
}
declare namespace cocoascript {
  interface SecKeychainSettings {
  }
}
declare namespace cocoascript {
  interface SecIdentitySearchRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secexternalformat
  type SecExternalFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secexternalitemtype
  type SecExternalItemType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secitemimportexportflags
  type SecItemImportExportFlags = number;
}
declare namespace cocoascript {
  interface SecItemImportExportKeyParameters {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeyimportexportflags
  type SecKeyImportExportFlags = number;
}
declare namespace cocoascript {
  interface SecKeyImportExportParameters {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secitemclass
  type SecItemClass = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeychainattrtype
  type SecKeychainAttrType = any;
}
declare namespace cocoascript {
  interface SecKeychainAttribute {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeychainattributeptr
  type SecKeychainAttributePtr = cocoascript.SecKeychainAttribute;
}
declare namespace cocoascript {
  interface SecKeychainAttributeList {
  }
}
declare namespace cocoascript {
  interface SecKeychainAttributeInfo {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secitemattr
  type SecItemAttr = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secafpserversignature
  type SecAFPServerSignature = cocoascript.UInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secprotocoltype
  type SecProtocolType = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secauthenticationtype
  type SecAuthenticationType = any;
}
declare namespace cocoascript {
  interface SecPasswordRef {
  }
}
// doc://com.apple.documentation/documentation/security/ksecattraccess
declare const kSecAttrAccess: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccesscontrol
declare const kSecAttrAccessControl: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessible
declare const kSecAttrAccessible: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcreationdate
declare const kSecAttrCreationDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrmodificationdate
declare const kSecAttrModificationDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrdescription
declare const kSecAttrDescription: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcomment
declare const kSecAttrComment: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcreator
declare const kSecAttrCreator: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrtype
declare const kSecAttrType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrlabel
declare const kSecAttrLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrisinvisible
declare const kSecAttrIsInvisible: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrisnegative
declare const kSecAttrIsNegative: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsyncviewhint
declare const kSecAttrSyncViewHint: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrpersistantreference
declare const kSecAttrPersistantReference: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrpersistentreference
declare const kSecAttrPersistentReference: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseitemlist
declare const kSecUseItemList: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecclass
declare const kSecClass: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecvaluedata
declare const kSecValueData: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchlimit
declare const kSecMatchLimit: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecreturndata
declare const kSecReturnData: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchlimitall
declare const kSecMatchLimitAll: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchitemlist
declare const kSecMatchItemList: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchsearchlist
declare const kSecMatchSearchList: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecreturnref
declare const kSecReturnRef: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecusekeychain
declare const kSecUseKeychain: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseoperationprompt
declare const kSecUseOperationPrompt: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecusenoauthenticationui
declare const kSecUseNoAuthenticationUI: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseauthenticationui
declare const kSecUseAuthenticationUI: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseauthenticationcontext
declare const kSecUseAuthenticationContext: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsynchronizableany
declare const kSecAttrSynchronizableAny: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface SecAccessRef {
  }
}
// doc://com.apple.documentation/documentation/security/ksecreturnattributes
declare const kSecReturnAttributes: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessiblewhenpasscodesetthisdeviceonly
declare const kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface SecKeychainSearchRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeychainstatus
  type SecKeychainStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectrustwitherrorcallback
  type SecTrustWithErrorCallback = cocoascript.CFErrorRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectrustoptionflags
  type SecTrustOptionFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectrustsettingskeyusage
  type SecTrustSettingsKeyUsage = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectrustsettingsresult
  type SecTrustSettingsResult = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/sectrustsettingsdomain
  type SecTrustSettingsDomain = number;
}
declare namespace cocoascript {
  interface OpaqueSecIdentityRef {
  }
}
// doc://com.apple.documentation/documentation/security/ksecclassidentity
declare const kSecClassIdentity: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecclasscertificate
declare const kSecClassCertificate: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface OpaqueSecCertificateRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeychaincallback
  type SecKeychainCallback = void;
}
declare namespace cocoascript {
  interface SecKeychainCallbackInfo {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeychainevent
  type SecKeychainEvent = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeychaineventmask
  type SecKeychainEventMask = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secpreferencesdomain
  type SecPreferencesDomain = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secaccessownertype
  type SecAccessOwnerType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeychainpromptselector
  type SecKeychainPromptSelector = number;
}
declare namespace cocoascript {
  interface SecACLRef {
  }
}
declare namespace cocoascript {
  interface SecTrustedApplicationRef {
  }
}
declare namespace cocoascript {
  interface OpaqueSecAccessRef {
  }
}
// doc://com.apple.documentation/documentation/security/kseccodeattributearchitecture
declare const kSecCodeAttributeArchitecture: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeattributesubarchitecture
declare const kSecCodeAttributeSubarchitecture: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeattributebundleversion
declare const kSecCodeAttributeBundleVersion: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeattributeuniversalfileoffset
declare const kSecCodeAttributeUniversalFileOffset: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoidentifier
declare const kSecCodeInfoIdentifier: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfocdhashes
declare const kSecCodeInfoCdHashes: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfocertificates
declare const kSecCodeInfoCertificates: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfochangedfiles
declare const kSecCodeInfoChangedFiles: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfocms
declare const kSecCodeInfoCMS: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfodesignatedrequirement
declare const kSecCodeInfoDesignatedRequirement: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfodigestalgorithm
declare const kSecCodeInfoDigestAlgorithm: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfodigestalgorithms
declare const kSecCodeInfoDigestAlgorithms: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoentitlements
declare const kSecCodeInfoEntitlements: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoentitlementsdict
declare const kSecCodeInfoEntitlementsDict: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoformat
declare const kSecCodeInfoFormat: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoflags
declare const kSecCodeInfoFlags: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoimplicitdesignatedrequirement
declare const kSecCodeInfoImplicitDesignatedRequirement: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfomainexecutable
declare const kSecCodeInfoMainExecutable: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoplist
declare const kSecCodeInfoPList: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoplatformidentifier
declare const kSecCodeInfoPlatformIdentifier: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinforequirements
declare const kSecCodeInfoRequirements: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinforequirementdata
declare const kSecCodeInfoRequirementData: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinforuntimeversion
declare const kSecCodeInfoRuntimeVersion: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfosource
declare const kSecCodeInfoSource: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfostatus
declare const kSecCodeInfoStatus: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoteamidentifier
declare const kSecCodeInfoTeamIdentifier: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfotime
declare const kSecCodeInfoTime: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfotimestamp
declare const kSecCodeInfoTimestamp: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfotrust
declare const kSecCodeInfoTrust: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfounique
declare const kSecCodeInfoUnique: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributecanonical
declare const kSecGuestAttributeCanonical: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributearchitecture
declare const kSecGuestAttributeArchitecture: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributeaudit
declare const kSecGuestAttributeAudit: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributedynamiccode
declare const kSecGuestAttributeDynamicCode: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributedynamiccodeinfoplist
declare const kSecGuestAttributeDynamicCodeInfoPlist: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributehash
declare const kSecGuestAttributeHash: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributemachport
declare const kSecGuestAttributeMachPort: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributepid
declare const kSecGuestAttributePid: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributesubarchitecture
declare const kSecGuestAttributeSubarchitecture: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorarchitecture
declare const kSecCFErrorArchitecture: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorpattern
declare const kSecCFErrorPattern: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorresourceseal
declare const kSecCFErrorResourceSeal: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorresourceadded
declare const kSecCFErrorResourceAdded: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorresourcealtered
declare const kSecCFErrorResourceAltered: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorresourcemissing
declare const kSecCFErrorResourceMissing: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorresourcesideband
declare const kSecCFErrorResourceSideband: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorinfoplist
declare const kSecCFErrorInfoPlist: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorguestattributes
declare const kSecCFErrorGuestAttributes: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorrequirementsyntax
declare const kSecCFErrorRequirementSyntax: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorpath
declare const kSecCFErrorPath: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeyalgorithm
  type SecKeyAlgorithm = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeyoperationtype
  type SecKeyOperationType = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeykeyexchangeparameter
  type SecKeyKeyExchangeParameter = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secpadding
  type SecPadding = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeysizes
  type SecKeySizes = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeyusage
  type SecKeyUsage = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/secpublickeyhash
  type SecPublicKeyHash = cocoascript.UInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seckeygeneratepairblock
  type SecKeyGeneratePairBlock = cocoascript.CFErrorRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/security/seccredentialtype
  type SecCredentialType = number;
}
declare namespace cocoascript {
  interface OpaqueSecKeyRef {
  }
}
declare namespace cocoascript {
  interface SecPolicySearchRef {
  }
}
// doc://com.apple.documentation/documentation/security/ksecpolicyappletimestamping
declare const kSecPolicyAppleTimeStamping: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecinputisplaintext
declare const kSecInputIsPlainText: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigesttypeattribute
declare const kSecDigestTypeAttribute: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigestlengthattribute
declare const kSecDigestLengthAttribute: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecencodetypeattribute
declare const kSecEncodeTypeAttribute: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdecodetypeattribute
declare const kSecDecodeTypeAttribute: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecencodelinelengthattribute
declare const kSecEncodeLineLengthAttribute: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpaddingkey
declare const kSecPaddingKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecencryptionmode
declare const kSecEncryptionMode: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccompressionratio
declare const kSecCompressionRatio: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigesthmackeyattribute
declare const kSecDigestHMACKeyAttribute: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecencryptkey
declare const kSecEncryptKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecivkey
declare const kSecIVKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoaepencodingparametersattributename
declare const kSecOAEPEncodingParametersAttributeName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoaepmgf1digestalgorithmattributename
declare const kSecOAEPMGF1DigestAlgorithmAttributeName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoaepmessagelengthattributename
declare const kSecOAEPMessageLengthAttributeName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransforminputattributename
declare const kSecTransformInputAttributeName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformoutputattributename
declare const kSecTransformOutputAttributeName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformdebugattributename
declare const kSecTransformDebugAttributeName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseckeyattributename
declare const kSecKeyAttributeName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformabortattributename
declare const kSecTransformAbortAttributeName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformtransformname
declare const kSecTransformTransformName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecbase32encoding
declare const kSecBase32Encoding: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecbase64encoding
declare const kSecBase64Encoding: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseczlibencoding
declare const kSecZLibEncoding: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigestmd2
declare const kSecDigestMD2: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigestmd4
declare const kSecDigestMD4: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigestmd5
declare const kSecDigestMD5: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigestsha1
declare const kSecDigestSHA1: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigestsha2
declare const kSecDigestSHA2: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigesthmacmd5
declare const kSecDigestHMACMD5: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigesthmacsha1
declare const kSecDigestHMACSHA1: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigesthmacsha2
declare const kSecDigestHMACSHA2: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseclinelength64
declare const kSecLineLength64: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseclinelength76
declare const kSecLineLength76: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpaddingnonekey
declare const kSecPaddingNoneKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpaddingoaepkey
declare const kSecPaddingOAEPKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpaddingpkcs1key
declare const kSecPaddingPKCS1Key: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpaddingpkcs5key
declare const kSecPaddingPKCS5Key: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpaddingpkcs7key
declare const kSecPaddingPKCS7Key: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmodenonekey
declare const kSecModeNoneKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmodecbckey
declare const kSecModeCBCKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmodecfbkey
declare const kSecModeCFBKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmodeecbkey
declare const kSecModeECBKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmodeofbkey
declare const kSecModeOFBKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactionprocessdata
declare const kSecTransformActionProcessData: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactionattributenotification
declare const kSecTransformActionAttributeNotification: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactioninternalizeextradata
declare const kSecTransformActionInternalizeExtraData: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactionattributevalidation
declare const kSecTransformActionAttributeValidation: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactioncanexecute
declare const kSecTransformActionCanExecute: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactionstartingexecution
declare const kSecTransformActionStartingExecution: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactionfinalize
declare const kSecTransformActionFinalize: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactionexternalizeextradata
declare const kSecTransformActionExternalizeExtraData: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/secasn1template/1398515-sub
declare const sub: void;
// doc://com.apple.documentation/documentation/security/ksecasn1anytemplate
declare const kSecAsn1AnyTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1bmpstringtemplate
declare const kSecAsn1BMPStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1bitstringtemplate
declare const kSecAsn1BitStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1booleantemplate
declare const kSecAsn1BooleanTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1enumeratedtemplate
declare const kSecAsn1EnumeratedTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1generalizedtimetemplate
declare const kSecAsn1GeneralizedTimeTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1ia5stringtemplate
declare const kSecAsn1IA5StringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1integertemplate
declare const kSecAsn1IntegerTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1nulltemplate
declare const kSecAsn1NullTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1objectidtemplate
declare const kSecAsn1ObjectIDTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1octetstringtemplate
declare const kSecAsn1OctetStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1printablestringtemplate
declare const kSecAsn1PrintableStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1skiptemplate
declare const kSecAsn1SkipTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1t61stringtemplate
declare const kSecAsn1T61StringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1teletexstringtemplate
declare const kSecAsn1TeletexStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1utctimetemplate
declare const kSecAsn1UTCTimeTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1utf8stringtemplate
declare const kSecAsn1UTF8StringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1universalstringtemplate
declare const kSecAsn1UniversalStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1unsignedintegertemplate
declare const kSecAsn1UnsignedIntegerTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1visiblestringtemplate
declare const kSecAsn1VisibleStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoanytemplate
declare const kSecAsn1PointerToAnyTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertobmpstringtemplate
declare const kSecAsn1PointerToBMPStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertobitstringtemplate
declare const kSecAsn1PointerToBitStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertobooleantemplate
declare const kSecAsn1PointerToBooleanTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoenumeratedtemplate
declare const kSecAsn1PointerToEnumeratedTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertogeneralizedtimetemplate
declare const kSecAsn1PointerToGeneralizedTimeTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoia5stringtemplate
declare const kSecAsn1PointerToIA5StringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertointegertemplate
declare const kSecAsn1PointerToIntegerTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertonulltemplate
declare const kSecAsn1PointerToNullTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoobjectidtemplate
declare const kSecAsn1PointerToObjectIDTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertooctetstringtemplate
declare const kSecAsn1PointerToOctetStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoprintablestringtemplate
declare const kSecAsn1PointerToPrintableStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertot61stringtemplate
declare const kSecAsn1PointerToT61StringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoteletexstringtemplate
declare const kSecAsn1PointerToTeletexStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoutctimetemplate
declare const kSecAsn1PointerToUTCTimeTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoutf8stringtemplate
declare const kSecAsn1PointerToUTF8StringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertouniversalstringtemplate
declare const kSecAsn1PointerToUniversalStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertovisiblestringtemplate
declare const kSecAsn1PointerToVisibleStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofanytemplate
declare const kSecAsn1SetOfAnyTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofbmpstringtemplate
declare const kSecAsn1SetOfBMPStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofbitstringtemplate
declare const kSecAsn1SetOfBitStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofbooleantemplate
declare const kSecAsn1SetOfBooleanTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofenumeratedtemplate
declare const kSecAsn1SetOfEnumeratedTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofgeneralizedtimetemplate
declare const kSecAsn1SetOfGeneralizedTimeTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofia5stringtemplate
declare const kSecAsn1SetOfIA5StringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofintegertemplate
declare const kSecAsn1SetOfIntegerTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofnulltemplate
declare const kSecAsn1SetOfNullTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofobjectidtemplate
declare const kSecAsn1SetOfObjectIDTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofoctetstringtemplate
declare const kSecAsn1SetOfOctetStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofprintablestringtemplate
declare const kSecAsn1SetOfPrintableStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setoft61stringtemplate
declare const kSecAsn1SetOfT61StringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofteletexstringtemplate
declare const kSecAsn1SetOfTeletexStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofutctimetemplate
declare const kSecAsn1SetOfUTCTimeTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofutf8stringtemplate
declare const kSecAsn1SetOfUTF8StringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofuniversalstringtemplate
declare const kSecAsn1SetOfUniversalStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofvisiblestringtemplate
declare const kSecAsn1SetOfVisibleStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofanytemplate
declare const kSecAsn1SequenceOfAnyTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofbmpstringtemplate
declare const kSecAsn1SequenceOfBMPStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofbitstringtemplate
declare const kSecAsn1SequenceOfBitStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofbooleantemplate
declare const kSecAsn1SequenceOfBooleanTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofenumeratedtemplate
declare const kSecAsn1SequenceOfEnumeratedTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofgeneralizedtimetemplate
declare const kSecAsn1SequenceOfGeneralizedTimeTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofia5stringtemplate
declare const kSecAsn1SequenceOfIA5StringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofintegertemplate
declare const kSecAsn1SequenceOfIntegerTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofnulltemplate
declare const kSecAsn1SequenceOfNullTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofobjectidtemplate
declare const kSecAsn1SequenceOfObjectIDTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofoctetstringtemplate
declare const kSecAsn1SequenceOfOctetStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofprintablestringtemplate
declare const kSecAsn1SequenceOfPrintableStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceoft61stringtemplate
declare const kSecAsn1SequenceOfT61StringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofteletexstringtemplate
declare const kSecAsn1SequenceOfTeletexStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofutctimetemplate
declare const kSecAsn1SequenceOfUTCTimeTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofutf8stringtemplate
declare const kSecAsn1SequenceOfUTF8StringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofuniversalstringtemplate
declare const kSecAsn1SequenceOfUniversalStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofvisiblestringtemplate
declare const kSecAsn1SequenceOfVisibleStringTemplate: cocoascript.SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecattrservice
declare const kSecAttrService: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsecuritydomain
declare const kSecAttrSecurityDomain: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocol
declare const kSecAttrProtocol: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtype
declare const kSecAttrAuthenticationType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrpath
declare const kSecAttrPath: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcertificatetype
declare const kSecAttrCertificateType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrissuer
declare const kSecAttrIssuer: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrserialnumber
declare const kSecAttrSerialNumber: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeyclass
declare const kSecAttrKeyClass: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytype
declare const kSecAttrKeyType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrapplicationlabel
declare const kSecAttrApplicationLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrapplicationtag
declare const kSecAttrApplicationTag: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeysizeinbits
declare const kSecAttrKeySizeInBits: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattreffectivekeysize
declare const kSecAttrEffectiveKeySize: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_3des_fallback
declare const kSSLSessionConfig_3DES_fallback: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_atsv1
declare const kSSLSessionConfig_ATSv1: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_atsv1_nopfs
declare const kSSLSessionConfig_ATSv1_noPFS: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_rc4_fallback
declare const kSSLSessionConfig_RC4_fallback: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_tlsv1_3des_fallback
declare const kSSLSessionConfig_TLSv1_3DES_fallback: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_tlsv1_rc4_fallback
declare const kSSLSessionConfig_TLSv1_RC4_fallback: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_tlsv1_fallback
declare const kSSLSessionConfig_TLSv1_fallback: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_anonymous
declare const kSSLSessionConfig_anonymous: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_default
declare const kSSLSessionConfig_default: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_legacy
declare const kSSLSessionConfig_legacy: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_legacy_dhe
declare const kSSLSessionConfig_legacy_DHE: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_standard
declare const kSSLSessionConfig_standard: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecclassinternetpassword
declare const kSecClassInternetPassword: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrgeneric
declare const kSecAttrGeneric: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecclassgenericpassword
declare const kSecClassGenericPassword: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecclasskey
declare const kSecClassKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrtokenid
declare const kSecAttrTokenID: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprf
declare const kSecAttrPRF: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsubject
declare const kSecAttrSubject: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsubjectkeyid
declare const kSecAttrSubjectKeyID: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrpublickeyhash
declare const kSecAttrPublicKeyHash: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcertificateencoding
declare const kSecAttrCertificateEncoding: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsalt
declare const kSecAttrSalt: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrrounds
declare const kSecAttrRounds: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrispermanent
declare const kSecAttrIsPermanent: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrissensitive
declare const kSecAttrIsSensitive: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrisextractable
declare const kSecAttrIsExtractable: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcanencrypt
declare const kSecAttrCanEncrypt: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcandecrypt
declare const kSecAttrCanDecrypt: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcanderive
declare const kSecAttrCanDerive: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcansign
declare const kSecAttrCanSign: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcanverify
declare const kSecAttrCanVerify: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcanwrap
declare const kSecAttrCanWrap: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcanunwrap
declare const kSecAttrCanUnwrap: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolftp
declare const kSecAttrProtocolFTP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolftpaccount
declare const kSecAttrProtocolFTPAccount: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolhttp
declare const kSecAttrProtocolHTTP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolirc
declare const kSecAttrProtocolIRC: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolnntp
declare const kSecAttrProtocolNNTP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolpop3
declare const kSecAttrProtocolPOP3: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolsmtp
declare const kSecAttrProtocolSMTP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolsocks
declare const kSecAttrProtocolSOCKS: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolimap
declare const kSecAttrProtocolIMAP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolldap
declare const kSecAttrProtocolLDAP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolappletalk
declare const kSecAttrProtocolAppleTalk: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolafp
declare const kSecAttrProtocolAFP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocoltelnet
declare const kSecAttrProtocolTelnet: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolssh
declare const kSecAttrProtocolSSH: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolftps
declare const kSecAttrProtocolFTPS: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolhttps
declare const kSecAttrProtocolHTTPS: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolhttpproxy
declare const kSecAttrProtocolHTTPProxy: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolhttpsproxy
declare const kSecAttrProtocolHTTPSProxy: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolftpproxy
declare const kSecAttrProtocolFTPProxy: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolsmb
declare const kSecAttrProtocolSMB: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolrtsp
declare const kSecAttrProtocolRTSP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolrtspproxy
declare const kSecAttrProtocolRTSPProxy: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocoldaap
declare const kSecAttrProtocolDAAP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocoleppc
declare const kSecAttrProtocolEPPC: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolipp
declare const kSecAttrProtocolIPP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolnntps
declare const kSecAttrProtocolNNTPS: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolldaps
declare const kSecAttrProtocolLDAPS: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocoltelnets
declare const kSecAttrProtocolTelnetS: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolimaps
declare const kSecAttrProtocolIMAPS: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolircs
declare const kSecAttrProtocolIRCS: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolpop3s
declare const kSecAttrProtocolPOP3S: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypentlm
declare const kSecAttrAuthenticationTypeNTLM: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypemsn
declare const kSecAttrAuthenticationTypeMSN: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypedpa
declare const kSecAttrAuthenticationTypeDPA: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtyperpa
declare const kSecAttrAuthenticationTypeRPA: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypehttpbasic
declare const kSecAttrAuthenticationTypeHTTPBasic: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypehttpdigest
declare const kSecAttrAuthenticationTypeHTTPDigest: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypehtmlform
declare const kSecAttrAuthenticationTypeHTMLForm: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypedefault
declare const kSecAttrAuthenticationTypeDefault: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeyclasspublic
declare const kSecAttrKeyClassPublic: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeyclassprivate
declare const kSecAttrKeyClassPrivate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeyclasssymmetric
declare const kSecAttrKeyClassSymmetric: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypersa
declare const kSecAttrKeyTypeRSA: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypedsa
declare const kSecAttrKeyTypeDSA: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypeaes
declare const kSecAttrKeyTypeAES: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypedes
declare const kSecAttrKeyTypeDES: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytype3des
declare const kSecAttrKeyType3DES: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytyperc4
declare const kSecAttrKeyTypeRC4: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytyperc2
declare const kSecAttrKeyTypeRC2: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypecast
declare const kSecAttrKeyTypeCAST: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypeecdsa
declare const kSecAttrKeyTypeECDSA: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypeec
declare const kSecAttrKeyTypeEC: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypeecsecprimerandom
declare const kSecAttrKeyTypeECSECPrimeRandom: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrtokenidsecureenclave
declare const kSecAttrTokenIDSecureEnclave: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessiblewhenunlockedthisdeviceonly
declare const kSecAttrAccessibleWhenUnlockedThisDeviceOnly: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessiblewhenunlocked
declare const kSecAttrAccessibleWhenUnlocked: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessibleafterfirstunlockthisdeviceonly
declare const kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessibleafterfirstunlock
declare const kSecAttrAccessibleAfterFirstUnlock: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessiblealwaysthisdeviceonly
declare const kSecAttrAccessibleAlwaysThisDeviceOnly: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessiblealways
declare const kSecAttrAccessibleAlways: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprfhmacalgsha1
declare const kSecAttrPRFHmacAlgSHA1: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprfhmacalgsha224
declare const kSecAttrPRFHmacAlgSHA224: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprfhmacalgsha256
declare const kSecAttrPRFHmacAlgSHA256: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprfhmacalgsha384
declare const kSecAttrPRFHmacAlgSHA384: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprfhmacalgsha512
declare const kSecAttrPRFHmacAlgSHA512: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessgrouptoken
declare const kSecAttrAccessGroupToken: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchlimitone
declare const kSecMatchLimitOne: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchpolicy
declare const kSecMatchPolicy: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchissuers
declare const kSecMatchIssuers: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchemailaddressifpresent
declare const kSecMatchEmailAddressIfPresent: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchsubjectcontains
declare const kSecMatchSubjectContains: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchsubjectstartswith
declare const kSecMatchSubjectStartsWith: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchsubjectendswith
declare const kSecMatchSubjectEndsWith: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchsubjectwholestring
declare const kSecMatchSubjectWholeString: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchcaseinsensitive
declare const kSecMatchCaseInsensitive: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchdiacriticinsensitive
declare const kSecMatchDiacriticInsensitive: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchwidthinsensitive
declare const kSecMatchWidthInsensitive: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchtrustedonly
declare const kSecMatchTrustedOnly: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchvalidondate
declare const kSecMatchValidOnDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseauthenticationuiallow
declare const kSecUseAuthenticationUIAllow: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseauthenticationuifail
declare const kSecUseAuthenticationUIFail: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseauthenticationuiskip
declare const kSecUseAuthenticationUISkip: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecreturnpersistentref
declare const kSecReturnPersistentRef: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecvalueref
declare const kSecValueRef: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecvaluepersistentref
declare const kSecValuePersistentRef: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpublickeyattrs
declare const kSecPublicKeyAttrs: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecprivatekeyattrs
declare const kSecPrivateKeyAttrs: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha512
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA512: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha512aesgcm
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA512AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorx963sha256aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorX963SHA256AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpkcs1v15sha512
declare const kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA512: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturemessagex962sha512
declare const kSecKeyAlgorithmECDSASignatureMessageX962SHA512: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/ksectrustcertificatetransparency
declare const kSecTrustCertificateTransparency: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustcertificatetransparencywhitelist
declare const kSecTrustCertificateTransparencyWhiteList: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustevaluationdate
declare const kSecTrustEvaluationDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustextendedvalidation
declare const kSecTrustExtendedValidation: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustorganizationname
declare const kSecTrustOrganizationName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustresultvalue
declare const kSecTrustResultValue: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustrevocationchecked
declare const kSecTrustRevocationChecked: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustrevocationvaliduntildate
declare const kSecTrustRevocationValidUntilDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportitemidentity
declare const kSecImportItemIdentity: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportitemcertchain
declare const kSecImportItemCertChain: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportitemtrust
declare const kSecImportItemTrust: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportitemkeyid
declare const kSecImportItemKeyID: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportitemlabel
declare const kSecImportItemLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportexportpassphrase
declare const kSecImportExportPassphrase: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportexportkeychain
declare const kSecImportExportKeychain: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportexportaccess
declare const kSecImportExportAccess: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecidentitydomaindefault
declare const kSecIdentityDomainDefault: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecidentitydomainkerberoskdc
declare const kSecIdentityDomainKerberosKDC: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidadc_cert_policy
declare const kSecOIDADC_CERT_POLICY: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_cert_policy
declare const kSecOIDAPPLE_CERT_POLICY: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_eku_code_signing
declare const kSecOIDAPPLE_EKU_CODE_SIGNING: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_eku_code_signing_dev
declare const kSecOIDAPPLE_EKU_CODE_SIGNING_DEV: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_eku_ichat_encryption
declare const kSecOIDAPPLE_EKU_ICHAT_ENCRYPTION: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_eku_ichat_signing
declare const kSecOIDAPPLE_EKU_ICHAT_SIGNING: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_eku_resource_signing
declare const kSecOIDAPPLE_EKU_RESOURCE_SIGNING: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_eku_system_identity
declare const kSecOIDAPPLE_EKU_SYSTEM_IDENTITY: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension
declare const kSecOIDAPPLE_EXTENSION: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_aai_intermediate
declare const kSecOIDAPPLE_EXTENSION_AAI_INTERMEDIATE: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_adc_apple_signing
declare const kSecOIDAPPLE_EXTENSION_ADC_APPLE_SIGNING: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_adc_dev_signing
declare const kSecOIDAPPLE_EXTENSION_ADC_DEV_SIGNING: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_appleid_intermediate
declare const kSecOIDAPPLE_EXTENSION_APPLEID_INTERMEDIATE: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_apple_signing
declare const kSecOIDAPPLE_EXTENSION_APPLE_SIGNING: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_code_signing
declare const kSecOIDAPPLE_EXTENSION_CODE_SIGNING: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_intermediate_marker
declare const kSecOIDAPPLE_EXTENSION_INTERMEDIATE_MARKER: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_itms_intermediate
declare const kSecOIDAPPLE_EXTENSION_ITMS_INTERMEDIATE: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_wwdr_intermediate
declare const kSecOIDAPPLE_EXTENSION_WWDR_INTERMEDIATE: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidauthorityinfoaccess
declare const kSecOIDAuthorityInfoAccess: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidauthoritykeyidentifier
declare const kSecOIDAuthorityKeyIdentifier: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidbasicconstraints
declare const kSecOIDBasicConstraints: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidbiometricinfo
declare const kSecOIDBiometricInfo: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcssmkeystruct
declare const kSecOIDCSSMKeyStruct: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcertissuer
declare const kSecOIDCertIssuer: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcertificatepolicies
declare const kSecOIDCertificatePolicies: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidclientauth
declare const kSecOIDClientAuth: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcollectivestateprovincename
declare const kSecOIDCollectiveStateProvinceName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcollectivestreetaddress
declare const kSecOIDCollectiveStreetAddress: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcommonname
declare const kSecOIDCommonName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcountryname
declare const kSecOIDCountryName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcrldistributionpoints
declare const kSecOIDCrlDistributionPoints: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcrlnumber
declare const kSecOIDCrlNumber: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcrlreason
declare const kSecOIDCrlReason: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddotmac_cert_email_encrypt
declare const kSecOIDDOTMAC_CERT_EMAIL_ENCRYPT: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddotmac_cert_email_sign
declare const kSecOIDDOTMAC_CERT_EMAIL_SIGN: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddotmac_cert_extension
declare const kSecOIDDOTMAC_CERT_EXTENSION: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddotmac_cert_identity
declare const kSecOIDDOTMAC_CERT_IDENTITY: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddotmac_cert_policy
declare const kSecOIDDOTMAC_CERT_POLICY: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddeltacrlindicator
declare const kSecOIDDeltaCrlIndicator: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddescription
declare const kSecOIDDescription: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoideku_ipsec
declare const kSecOIDEKU_IPSec: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidemailaddress
declare const kSecOIDEmailAddress: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidemailprotection
declare const kSecOIDEmailProtection: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidextendedkeyusage
declare const kSecOIDExtendedKeyUsage: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidextendedkeyusageany
declare const kSecOIDExtendedKeyUsageAny: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidextendedusecodesigning
declare const kSecOIDExtendedUseCodeSigning: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidgivenname
declare const kSecOIDGivenName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidholdinstructioncode
declare const kSecOIDHoldInstructionCode: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidinvaliditydate
declare const kSecOIDInvalidityDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidissueraltname
declare const kSecOIDIssuerAltName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidissuingdistributionpoint
declare const kSecOIDIssuingDistributionPoint: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidissuingdistributionpoints
declare const kSecOIDIssuingDistributionPoints: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidkerbv5_pkinit_kp_client_auth
declare const kSecOIDKERBv5_PKINIT_KP_CLIENT_AUTH: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidkerbv5_pkinit_kp_kdc
declare const kSecOIDKERBv5_PKINIT_KP_KDC: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidkeyusage
declare const kSecOIDKeyUsage: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidlocalityname
declare const kSecOIDLocalityName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidms_ntprincipalname
declare const kSecOIDMS_NTPrincipalName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidmicrosoftsgc
declare const kSecOIDMicrosoftSGC: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidnameconstraints
declare const kSecOIDNameConstraints: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidnetscapecertsequence
declare const kSecOIDNetscapeCertSequence: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidnetscapecerttype
declare const kSecOIDNetscapeCertType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidnetscapesgc
declare const kSecOIDNetscapeSGC: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidocspsigning
declare const kSecOIDOCSPSigning: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidorganizationname
declare const kSecOIDOrganizationName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidorganizationalunitname
declare const kSecOIDOrganizationalUnitName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidpolicyconstraints
declare const kSecOIDPolicyConstraints: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidpolicymappings
declare const kSecOIDPolicyMappings: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidprivatekeyusageperiod
declare const kSecOIDPrivateKeyUsagePeriod: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidqc_statements
declare const kSecOIDQC_Statements: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsrvname
declare const kSecOIDSRVName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidserialnumber
declare const kSecOIDSerialNumber: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidserverauth
declare const kSecOIDServerAuth: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidstateprovincename
declare const kSecOIDStateProvinceName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidstreetaddress
declare const kSecOIDStreetAddress: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectaltname
declare const kSecOIDSubjectAltName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectdirectoryattributes
declare const kSecOIDSubjectDirectoryAttributes: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectemailaddress
declare const kSecOIDSubjectEmailAddress: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectinfoaccess
declare const kSecOIDSubjectInfoAccess: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectkeyidentifier
declare const kSecOIDSubjectKeyIdentifier: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectpicture
declare const kSecOIDSubjectPicture: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectsignaturebitmap
declare const kSecOIDSubjectSignatureBitmap: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsurname
declare const kSecOIDSurname: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidtimestamping
declare const kSecOIDTimeStamping: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidtitle
declare const kSecOIDTitle: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiduseexemptions
declare const kSecOIDUseExemptions: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1certificateissueruniqueid
declare const kSecOIDX509V1CertificateIssuerUniqueId: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1certificatesubjectuniqueid
declare const kSecOIDX509V1CertificateSubjectUniqueId: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1issuername
declare const kSecOIDX509V1IssuerName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1issuernamecstruct
declare const kSecOIDX509V1IssuerNameCStruct: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1issuernameldap
declare const kSecOIDX509V1IssuerNameLDAP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1issuernamestd
declare const kSecOIDX509V1IssuerNameStd: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1serialnumber
declare const kSecOIDX509V1SerialNumber: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1signature
declare const kSecOIDX509V1Signature: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1signaturealgorithm
declare const kSecOIDX509V1SignatureAlgorithm: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1signaturealgorithmparameters
declare const kSecOIDX509V1SignatureAlgorithmParameters: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1signaturealgorithmtbs
declare const kSecOIDX509V1SignatureAlgorithmTBS: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1signaturecstruct
declare const kSecOIDX509V1SignatureCStruct: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1signaturestruct
declare const kSecOIDX509V1SignatureStruct: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectname
declare const kSecOIDX509V1SubjectName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectnamecstruct
declare const kSecOIDX509V1SubjectNameCStruct: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectnameldap
declare const kSecOIDX509V1SubjectNameLDAP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectnamestd
declare const kSecOIDX509V1SubjectNameStd: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectpublickey
declare const kSecOIDX509V1SubjectPublicKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectpublickeyalgorithm
declare const kSecOIDX509V1SubjectPublicKeyAlgorithm: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectpublickeyalgorithmparameters
declare const kSecOIDX509V1SubjectPublicKeyAlgorithmParameters: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectpublickeycstruct
declare const kSecOIDX509V1SubjectPublicKeyCStruct: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1validitynotafter
declare const kSecOIDX509V1ValidityNotAfter: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1validitynotbefore
declare const kSecOIDX509V1ValidityNotBefore: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1version
declare const kSecOIDX509V1Version: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificate
declare const kSecOIDX509V3Certificate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificatecstruct
declare const kSecOIDX509V3CertificateCStruct: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensioncstruct
declare const kSecOIDX509V3CertificateExtensionCStruct: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensioncritical
declare const kSecOIDX509V3CertificateExtensionCritical: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensionid
declare const kSecOIDX509V3CertificateExtensionId: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensionstruct
declare const kSecOIDX509V3CertificateExtensionStruct: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensiontype
declare const kSecOIDX509V3CertificateExtensionType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensionvalue
declare const kSecOIDX509V3CertificateExtensionValue: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensionscstruct
declare const kSecOIDX509V3CertificateExtensionsCStruct: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensionsstruct
declare const kSecOIDX509V3CertificateExtensionsStruct: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificatenumberofextensions
declare const kSecOIDX509V3CertificateNumberOfExtensions: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3signedcertificate
declare const kSecOIDX509V3SignedCertificate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3signedcertificatecstruct
declare const kSecOIDX509V3SignedCertificateCStruct: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertykeytype
declare const kSecPropertyKeyType: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertykeylabel
declare const kSecPropertyKeyLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertykeylocalizedlabel
declare const kSecPropertyKeyLocalizedLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertykeyvalue
declare const kSecPropertyKeyValue: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypewarning
declare const kSecPropertyTypeWarning: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypesuccess
declare const kSecPropertyTypeSuccess: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypesection
declare const kSecPropertyTypeSection: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypedata
declare const kSecPropertyTypeData: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypestring
declare const kSecPropertyTypeString: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypeurl
declare const kSecPropertyTypeURL: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypedate
declare const kSecPropertyTypeDate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypearray
declare const kSecPropertyTypeArray: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypenumber
declare const kSecPropertyTypeNumber: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypetitle
declare const kSecPropertyTypeTitle: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypeerror
declare const kSecPropertyTypeError: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationchangeacl
declare const kSecACLAuthorizationChangeACL: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationany
declare const kSecACLAuthorizationAny: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationlogin
declare const kSecACLAuthorizationLogin: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationgenkey
declare const kSecACLAuthorizationGenKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationdelete
declare const kSecACLAuthorizationDelete: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationexportwrapped
declare const kSecACLAuthorizationExportWrapped: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationexportclear
declare const kSecACLAuthorizationExportClear: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationimportwrapped
declare const kSecACLAuthorizationImportWrapped: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationimportclear
declare const kSecACLAuthorizationImportClear: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationsign
declare const kSecACLAuthorizationSign: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationencrypt
declare const kSecACLAuthorizationEncrypt: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationdecrypt
declare const kSecACLAuthorizationDecrypt: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationmac
declare const kSecACLAuthorizationMAC: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationderive
declare const kSecACLAuthorizationDerive: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationkeychaincreate
declare const kSecACLAuthorizationKeychainCreate: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationkeychaindelete
declare const kSecACLAuthorizationKeychainDelete: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationkeychainitemread
declare const kSecACLAuthorizationKeychainItemRead: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationkeychainiteminsert
declare const kSecACLAuthorizationKeychainItemInsert: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationkeychainitemmodify
declare const kSecACLAuthorizationKeychainItemModify: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationkeychainitemdelete
declare const kSecACLAuthorizationKeychainItemDelete: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationchangeowner
declare const kSecACLAuthorizationChangeOwner: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationintegrity
declare const kSecACLAuthorizationIntegrity: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationpartitionid
declare const kSecACLAuthorizationPartitionID: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardx963sha1aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardX963SHA1AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardx963sha224aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardX963SHA224AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardx963sha256aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardX963SHA256AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardx963sha384aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardX963SHA384AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardx963sha512aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardX963SHA512AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardvariableivx963sha224aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA224AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardvariableivx963sha256aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA256AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardvariableivx963sha384aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA384AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardvariableivx963sha512aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA512AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorvariableivx963sha224aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorVariableIVX963SHA224AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorvariableivx963sha256aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorVariableIVX963SHA256AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorvariableivx963sha384aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorVariableIVX963SHA384AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorvariableivx963sha512aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorVariableIVX963SHA512AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorx963sha1aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorX963SHA1AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorx963sha224aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorX963SHA224AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorx963sha384aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorX963SHA384AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorx963sha512aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorX963SHA512AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturerfc4754
declare const kSecKeyAlgorithmECDSASignatureRFC4754: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturedigestx962
declare const kSecKeyAlgorithmECDSASignatureDigestX962: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturedigestx962sha1
declare const kSecKeyAlgorithmECDSASignatureDigestX962SHA1: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturedigestx962sha224
declare const kSecKeyAlgorithmECDSASignatureDigestX962SHA224: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturedigestx962sha256
declare const kSecKeyAlgorithmECDSASignatureDigestX962SHA256: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturedigestx962sha384
declare const kSecKeyAlgorithmECDSASignatureDigestX962SHA384: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturedigestx962sha512
declare const kSecKeyAlgorithmECDSASignatureDigestX962SHA512: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturemessagex962sha1
declare const kSecKeyAlgorithmECDSASignatureMessageX962SHA1: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturemessagex962sha224
declare const kSecKeyAlgorithmECDSASignatureMessageX962SHA224: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturemessagex962sha256
declare const kSecKeyAlgorithmECDSASignatureMessageX962SHA256: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturemessagex962sha384
declare const kSecKeyAlgorithmECDSASignatureMessageX962SHA384: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangecofactor
declare const kSecKeyAlgorithmECDHKeyExchangeCofactor: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangestandard
declare const kSecKeyAlgorithmECDHKeyExchangeStandard: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangecofactorx963sha1
declare const kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA1: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangestandardx963sha1
declare const kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA1: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangecofactorx963sha224
declare const kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA224: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangecofactorx963sha256
declare const kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA256: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangecofactorx963sha384
declare const kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA384: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangecofactorx963sha512
declare const kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA512: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangestandardx963sha224
declare const kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA224: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangestandardx963sha256
declare const kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA256: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangestandardx963sha384
declare const kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA384: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangestandardx963sha512
declare const kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA512: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionraw
declare const kSecKeyAlgorithmRSAEncryptionRaw: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionpkcs1
declare const kSecKeyAlgorithmRSAEncryptionPKCS1: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha1
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA1: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha224
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA224: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha256
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA256: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha384
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA384: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha1aesgcm
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA1AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha224aesgcm
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA224AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha256aesgcm
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA256AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha384aesgcm
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA384AESGCM: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignatureraw
declare const kSecKeyAlgorithmRSASignatureRaw: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpkcs1v15raw
declare const kSecKeyAlgorithmRSASignatureDigestPKCS1v15Raw: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpkcs1v15sha1
declare const kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA1: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpkcs1v15sha224
declare const kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA224: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpkcs1v15sha256
declare const kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA256: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpkcs1v15sha384
declare const kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA384: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepkcs1v15sha1
declare const kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA1: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepkcs1v15sha224
declare const kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA224: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepkcs1v15sha256
declare const kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA256: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepkcs1v15sha384
declare const kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA384: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepkcs1v15sha512
declare const kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA512: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpsssha1
declare const kSecKeyAlgorithmRSASignatureDigestPSSSHA1: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpsssha224
declare const kSecKeyAlgorithmRSASignatureDigestPSSSHA224: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpsssha256
declare const kSecKeyAlgorithmRSASignatureDigestPSSSHA256: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpsssha384
declare const kSecKeyAlgorithmRSASignatureDigestPSSSHA384: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpsssha512
declare const kSecKeyAlgorithmRSASignatureDigestPSSSHA512: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepsssha1
declare const kSecKeyAlgorithmRSASignatureMessagePSSSHA1: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepsssha224
declare const kSecKeyAlgorithmRSASignatureMessagePSSSHA224: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepsssha256
declare const kSecKeyAlgorithmRSASignatureMessagePSSSHA256: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepsssha384
declare const kSecKeyAlgorithmRSASignatureMessagePSSSHA384: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepsssha512
declare const kSecKeyAlgorithmRSASignatureMessagePSSSHA512: cocoascript.SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeykeyexchangeparameterrequestedsize
declare const kSecKeyKeyExchangeParameterRequestedSize: cocoascript.SecKeyKeyExchangeParameter;
// doc://com.apple.documentation/documentation/security/kseckeykeyexchangeparametersharedinfo
declare const kSecKeyKeyExchangeParameterSharedInfo: cocoascript.SecKeyKeyExchangeParameter;
// doc://com.apple.documentation/documentation/security/ksecpolicyoid
declare const kSecPolicyOid: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyname
declare const kSecPolicyName: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyclient
declare const kSecPolicyClient: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyrevocationflags
declare const kSecPolicyRevocationFlags: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyteamidentifier
declare const kSecPolicyTeamIdentifier: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_digitalsignature
declare const kSecPolicyKU_DigitalSignature: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_nonrepudiation
declare const kSecPolicyKU_NonRepudiation: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_keyencipherment
declare const kSecPolicyKU_KeyEncipherment: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_dataencipherment
declare const kSecPolicyKU_DataEncipherment: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_keyagreement
declare const kSecPolicyKU_KeyAgreement: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_keycertsign
declare const kSecPolicyKU_KeyCertSign: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_crlsign
declare const kSecPolicyKU_CRLSign: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_encipheronly
declare const kSecPolicyKU_EncipherOnly: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_decipheronly
declare const kSecPolicyKU_DecipherOnly: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplex509basic
declare const kSecPolicyAppleX509Basic: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplessl
declare const kSecPolicyAppleSSL: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplesmime
declare const kSecPolicyAppleSMIME: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyappleeap
declare const kSecPolicyAppleEAP: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyappleipsec
declare const kSecPolicyAppleIPsec: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyappleichat
declare const kSecPolicyAppleiChat: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplepkinitclient
declare const kSecPolicyApplePKINITClient: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplepkinitserver
declare const kSecPolicyApplePKINITServer: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplecodesigning
declare const kSecPolicyAppleCodeSigning: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicymacappstorereceipt
declare const kSecPolicyMacAppStoreReceipt: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyappleidvalidation
declare const kSecPolicyAppleIDValidation: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplepassbooksigning
declare const kSecPolicyApplePassbookSigning: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplepayissuerencryption
declare const kSecPolicyApplePayIssuerEncryption: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplerevocation
declare const kSecPolicyAppleRevocation: cocoascript.CFStringRef;
