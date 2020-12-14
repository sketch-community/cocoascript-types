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
declare const kSecSharedPassword: CFStringRef;
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
declare const kSecAttrAccessGroup: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecusedataprotectionkeychain
declare const kSecUseDataProtectionKeychain: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsynchronizable
declare const kSecAttrSynchronizable: CFStringRef;
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
declare const kSecRandomDefault: SecRandomRef;
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
declare const kSecTransformErrorDomain: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformpreviouserrorkey
declare const kSecTransformPreviousErrorKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformabortoriginatorkey
declare const kSecTransformAbortOriginatorKey: CFStringRef;
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
declare const CSSMOID_APPLE_EXTENSION_DEVELOPER_AUTHENTICATION: SecAsn1Oid;
// doc://com.apple.documentation/documentation/security/cssmoid_apple_extension_provisioning_profile_signing
declare const CSSMOID_APPLE_EXTENSION_PROVISIONING_PROFILE_SIGNING: SecAsn1Oid;
// doc://com.apple.documentation/documentation/security/cssmoid_apple_extension_server_authentication
declare const CSSMOID_APPLE_EXTENSION_SERVER_AUTHENTICATION: SecAsn1Oid;
// doc://com.apple.documentation/documentation/security/cssmoid_apple_tp_pcs_escrow_service
declare const CSSMOID_APPLE_TP_PCS_ESCROW_SERVICE: SecAsn1Oid;
// doc://com.apple.documentation/documentation/security/cssmoid_apple_tp_provisioning_profile_signing
declare const CSSMOID_APPLE_TP_PROVISIONING_PROFILE_SIGNING: SecAsn1Oid;
// doc://com.apple.documentation/documentation/security/kcmsencoderdigestalgorithmsha1
declare const kCMSEncoderDigestAlgorithmSHA1: CFStringRef;
// doc://com.apple.documentation/documentation/security/kcmsencoderdigestalgorithmsha256
declare const kCMSEncoderDigestAlgorithmSHA256: CFStringRef;
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
declare const kSecAttrServer: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccount
declare const kSecAttrAccount: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrport
declare const kSecAttrPort: CFStringRef;
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
declare const kSecAttrAccess: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccesscontrol
declare const kSecAttrAccessControl: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessible
declare const kSecAttrAccessible: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcreationdate
declare const kSecAttrCreationDate: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrmodificationdate
declare const kSecAttrModificationDate: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrdescription
declare const kSecAttrDescription: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcomment
declare const kSecAttrComment: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcreator
declare const kSecAttrCreator: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrtype
declare const kSecAttrType: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrlabel
declare const kSecAttrLabel: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrisinvisible
declare const kSecAttrIsInvisible: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrisnegative
declare const kSecAttrIsNegative: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsyncviewhint
declare const kSecAttrSyncViewHint: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrpersistantreference
declare const kSecAttrPersistantReference: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrpersistentreference
declare const kSecAttrPersistentReference: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseitemlist
declare const kSecUseItemList: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecclass
declare const kSecClass: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecvaluedata
declare const kSecValueData: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchlimit
declare const kSecMatchLimit: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecreturndata
declare const kSecReturnData: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchlimitall
declare const kSecMatchLimitAll: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchitemlist
declare const kSecMatchItemList: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchsearchlist
declare const kSecMatchSearchList: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecreturnref
declare const kSecReturnRef: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecusekeychain
declare const kSecUseKeychain: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseoperationprompt
declare const kSecUseOperationPrompt: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecusenoauthenticationui
declare const kSecUseNoAuthenticationUI: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseauthenticationui
declare const kSecUseAuthenticationUI: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseauthenticationcontext
declare const kSecUseAuthenticationContext: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsynchronizableany
declare const kSecAttrSynchronizableAny: CFStringRef;
declare namespace cocoascript {
  interface SecAccessRef {
  }
}
// doc://com.apple.documentation/documentation/security/ksecreturnattributes
declare const kSecReturnAttributes: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessiblewhenpasscodesetthisdeviceonly
declare const kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly: CFStringRef;
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
declare const kSecClassIdentity: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecclasscertificate
declare const kSecClassCertificate: CFStringRef;
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
declare const kSecCodeAttributeArchitecture: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeattributesubarchitecture
declare const kSecCodeAttributeSubarchitecture: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeattributebundleversion
declare const kSecCodeAttributeBundleVersion: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeattributeuniversalfileoffset
declare const kSecCodeAttributeUniversalFileOffset: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoidentifier
declare const kSecCodeInfoIdentifier: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfocdhashes
declare const kSecCodeInfoCdHashes: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfocertificates
declare const kSecCodeInfoCertificates: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfochangedfiles
declare const kSecCodeInfoChangedFiles: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfocms
declare const kSecCodeInfoCMS: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfodesignatedrequirement
declare const kSecCodeInfoDesignatedRequirement: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfodigestalgorithm
declare const kSecCodeInfoDigestAlgorithm: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfodigestalgorithms
declare const kSecCodeInfoDigestAlgorithms: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoentitlements
declare const kSecCodeInfoEntitlements: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoentitlementsdict
declare const kSecCodeInfoEntitlementsDict: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoformat
declare const kSecCodeInfoFormat: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoflags
declare const kSecCodeInfoFlags: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoimplicitdesignatedrequirement
declare const kSecCodeInfoImplicitDesignatedRequirement: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfomainexecutable
declare const kSecCodeInfoMainExecutable: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoplist
declare const kSecCodeInfoPList: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoplatformidentifier
declare const kSecCodeInfoPlatformIdentifier: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinforequirements
declare const kSecCodeInfoRequirements: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinforequirementdata
declare const kSecCodeInfoRequirementData: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinforuntimeversion
declare const kSecCodeInfoRuntimeVersion: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfosource
declare const kSecCodeInfoSource: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfostatus
declare const kSecCodeInfoStatus: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfoteamidentifier
declare const kSecCodeInfoTeamIdentifier: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfotime
declare const kSecCodeInfoTime: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfotimestamp
declare const kSecCodeInfoTimestamp: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfotrust
declare const kSecCodeInfoTrust: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccodeinfounique
declare const kSecCodeInfoUnique: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributecanonical
declare const kSecGuestAttributeCanonical: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributearchitecture
declare const kSecGuestAttributeArchitecture: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributeaudit
declare const kSecGuestAttributeAudit: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributedynamiccode
declare const kSecGuestAttributeDynamicCode: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributedynamiccodeinfoplist
declare const kSecGuestAttributeDynamicCodeInfoPlist: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributehash
declare const kSecGuestAttributeHash: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributemachport
declare const kSecGuestAttributeMachPort: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributepid
declare const kSecGuestAttributePid: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecguestattributesubarchitecture
declare const kSecGuestAttributeSubarchitecture: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorarchitecture
declare const kSecCFErrorArchitecture: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorpattern
declare const kSecCFErrorPattern: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorresourceseal
declare const kSecCFErrorResourceSeal: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorresourceadded
declare const kSecCFErrorResourceAdded: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorresourcealtered
declare const kSecCFErrorResourceAltered: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorresourcemissing
declare const kSecCFErrorResourceMissing: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorresourcesideband
declare const kSecCFErrorResourceSideband: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorinfoplist
declare const kSecCFErrorInfoPlist: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorguestattributes
declare const kSecCFErrorGuestAttributes: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorrequirementsyntax
declare const kSecCFErrorRequirementSyntax: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccferrorpath
declare const kSecCFErrorPath: CFStringRef;
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
declare const kSecPolicyAppleTimeStamping: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecinputisplaintext
declare const kSecInputIsPlainText: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigesttypeattribute
declare const kSecDigestTypeAttribute: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigestlengthattribute
declare const kSecDigestLengthAttribute: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecencodetypeattribute
declare const kSecEncodeTypeAttribute: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdecodetypeattribute
declare const kSecDecodeTypeAttribute: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecencodelinelengthattribute
declare const kSecEncodeLineLengthAttribute: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpaddingkey
declare const kSecPaddingKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecencryptionmode
declare const kSecEncryptionMode: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseccompressionratio
declare const kSecCompressionRatio: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigesthmackeyattribute
declare const kSecDigestHMACKeyAttribute: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecencryptkey
declare const kSecEncryptKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecivkey
declare const kSecIVKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoaepencodingparametersattributename
declare const kSecOAEPEncodingParametersAttributeName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoaepmgf1digestalgorithmattributename
declare const kSecOAEPMGF1DigestAlgorithmAttributeName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoaepmessagelengthattributename
declare const kSecOAEPMessageLengthAttributeName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransforminputattributename
declare const kSecTransformInputAttributeName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformoutputattributename
declare const kSecTransformOutputAttributeName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformdebugattributename
declare const kSecTransformDebugAttributeName: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseckeyattributename
declare const kSecKeyAttributeName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformabortattributename
declare const kSecTransformAbortAttributeName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformtransformname
declare const kSecTransformTransformName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecbase32encoding
declare const kSecBase32Encoding: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecbase64encoding
declare const kSecBase64Encoding: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseczlibencoding
declare const kSecZLibEncoding: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigestmd2
declare const kSecDigestMD2: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigestmd4
declare const kSecDigestMD4: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigestmd5
declare const kSecDigestMD5: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigestsha1
declare const kSecDigestSHA1: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigestsha2
declare const kSecDigestSHA2: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigesthmacmd5
declare const kSecDigestHMACMD5: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigesthmacsha1
declare const kSecDigestHMACSHA1: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecdigesthmacsha2
declare const kSecDigestHMACSHA2: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseclinelength64
declare const kSecLineLength64: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseclinelength76
declare const kSecLineLength76: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpaddingnonekey
declare const kSecPaddingNoneKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpaddingoaepkey
declare const kSecPaddingOAEPKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpaddingpkcs1key
declare const kSecPaddingPKCS1Key: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpaddingpkcs5key
declare const kSecPaddingPKCS5Key: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpaddingpkcs7key
declare const kSecPaddingPKCS7Key: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmodenonekey
declare const kSecModeNoneKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmodecbckey
declare const kSecModeCBCKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmodecfbkey
declare const kSecModeCFBKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmodeecbkey
declare const kSecModeECBKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmodeofbkey
declare const kSecModeOFBKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactionprocessdata
declare const kSecTransformActionProcessData: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactionattributenotification
declare const kSecTransformActionAttributeNotification: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactioninternalizeextradata
declare const kSecTransformActionInternalizeExtraData: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactionattributevalidation
declare const kSecTransformActionAttributeValidation: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactioncanexecute
declare const kSecTransformActionCanExecute: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactionstartingexecution
declare const kSecTransformActionStartingExecution: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactionfinalize
declare const kSecTransformActionFinalize: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectransformactionexternalizeextradata
declare const kSecTransformActionExternalizeExtraData: CFStringRef;
// doc://com.apple.documentation/documentation/security/secasn1template/1398515-sub
declare const sub: void;
// doc://com.apple.documentation/documentation/security/ksecasn1anytemplate
declare const kSecAsn1AnyTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1bmpstringtemplate
declare const kSecAsn1BMPStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1bitstringtemplate
declare const kSecAsn1BitStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1booleantemplate
declare const kSecAsn1BooleanTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1enumeratedtemplate
declare const kSecAsn1EnumeratedTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1generalizedtimetemplate
declare const kSecAsn1GeneralizedTimeTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1ia5stringtemplate
declare const kSecAsn1IA5StringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1integertemplate
declare const kSecAsn1IntegerTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1nulltemplate
declare const kSecAsn1NullTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1objectidtemplate
declare const kSecAsn1ObjectIDTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1octetstringtemplate
declare const kSecAsn1OctetStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1printablestringtemplate
declare const kSecAsn1PrintableStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1skiptemplate
declare const kSecAsn1SkipTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1t61stringtemplate
declare const kSecAsn1T61StringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1teletexstringtemplate
declare const kSecAsn1TeletexStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1utctimetemplate
declare const kSecAsn1UTCTimeTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1utf8stringtemplate
declare const kSecAsn1UTF8StringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1universalstringtemplate
declare const kSecAsn1UniversalStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1unsignedintegertemplate
declare const kSecAsn1UnsignedIntegerTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1visiblestringtemplate
declare const kSecAsn1VisibleStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoanytemplate
declare const kSecAsn1PointerToAnyTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertobmpstringtemplate
declare const kSecAsn1PointerToBMPStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertobitstringtemplate
declare const kSecAsn1PointerToBitStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertobooleantemplate
declare const kSecAsn1PointerToBooleanTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoenumeratedtemplate
declare const kSecAsn1PointerToEnumeratedTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertogeneralizedtimetemplate
declare const kSecAsn1PointerToGeneralizedTimeTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoia5stringtemplate
declare const kSecAsn1PointerToIA5StringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertointegertemplate
declare const kSecAsn1PointerToIntegerTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertonulltemplate
declare const kSecAsn1PointerToNullTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoobjectidtemplate
declare const kSecAsn1PointerToObjectIDTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertooctetstringtemplate
declare const kSecAsn1PointerToOctetStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoprintablestringtemplate
declare const kSecAsn1PointerToPrintableStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertot61stringtemplate
declare const kSecAsn1PointerToT61StringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoteletexstringtemplate
declare const kSecAsn1PointerToTeletexStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoutctimetemplate
declare const kSecAsn1PointerToUTCTimeTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertoutf8stringtemplate
declare const kSecAsn1PointerToUTF8StringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertouniversalstringtemplate
declare const kSecAsn1PointerToUniversalStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1pointertovisiblestringtemplate
declare const kSecAsn1PointerToVisibleStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofanytemplate
declare const kSecAsn1SetOfAnyTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofbmpstringtemplate
declare const kSecAsn1SetOfBMPStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofbitstringtemplate
declare const kSecAsn1SetOfBitStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofbooleantemplate
declare const kSecAsn1SetOfBooleanTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofenumeratedtemplate
declare const kSecAsn1SetOfEnumeratedTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofgeneralizedtimetemplate
declare const kSecAsn1SetOfGeneralizedTimeTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofia5stringtemplate
declare const kSecAsn1SetOfIA5StringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofintegertemplate
declare const kSecAsn1SetOfIntegerTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofnulltemplate
declare const kSecAsn1SetOfNullTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofobjectidtemplate
declare const kSecAsn1SetOfObjectIDTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofoctetstringtemplate
declare const kSecAsn1SetOfOctetStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofprintablestringtemplate
declare const kSecAsn1SetOfPrintableStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setoft61stringtemplate
declare const kSecAsn1SetOfT61StringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofteletexstringtemplate
declare const kSecAsn1SetOfTeletexStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofutctimetemplate
declare const kSecAsn1SetOfUTCTimeTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofutf8stringtemplate
declare const kSecAsn1SetOfUTF8StringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofuniversalstringtemplate
declare const kSecAsn1SetOfUniversalStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1setofvisiblestringtemplate
declare const kSecAsn1SetOfVisibleStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofanytemplate
declare const kSecAsn1SequenceOfAnyTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofbmpstringtemplate
declare const kSecAsn1SequenceOfBMPStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofbitstringtemplate
declare const kSecAsn1SequenceOfBitStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofbooleantemplate
declare const kSecAsn1SequenceOfBooleanTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofenumeratedtemplate
declare const kSecAsn1SequenceOfEnumeratedTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofgeneralizedtimetemplate
declare const kSecAsn1SequenceOfGeneralizedTimeTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofia5stringtemplate
declare const kSecAsn1SequenceOfIA5StringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofintegertemplate
declare const kSecAsn1SequenceOfIntegerTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofnulltemplate
declare const kSecAsn1SequenceOfNullTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofobjectidtemplate
declare const kSecAsn1SequenceOfObjectIDTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofoctetstringtemplate
declare const kSecAsn1SequenceOfOctetStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofprintablestringtemplate
declare const kSecAsn1SequenceOfPrintableStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceoft61stringtemplate
declare const kSecAsn1SequenceOfT61StringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofteletexstringtemplate
declare const kSecAsn1SequenceOfTeletexStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofutctimetemplate
declare const kSecAsn1SequenceOfUTCTimeTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofutf8stringtemplate
declare const kSecAsn1SequenceOfUTF8StringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofuniversalstringtemplate
declare const kSecAsn1SequenceOfUniversalStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecasn1sequenceofvisiblestringtemplate
declare const kSecAsn1SequenceOfVisibleStringTemplate: SecAsn1Template;
// doc://com.apple.documentation/documentation/security/ksecattrservice
declare const kSecAttrService: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsecuritydomain
declare const kSecAttrSecurityDomain: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocol
declare const kSecAttrProtocol: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtype
declare const kSecAttrAuthenticationType: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrpath
declare const kSecAttrPath: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcertificatetype
declare const kSecAttrCertificateType: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrissuer
declare const kSecAttrIssuer: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrserialnumber
declare const kSecAttrSerialNumber: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeyclass
declare const kSecAttrKeyClass: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytype
declare const kSecAttrKeyType: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrapplicationlabel
declare const kSecAttrApplicationLabel: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrapplicationtag
declare const kSecAttrApplicationTag: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeysizeinbits
declare const kSecAttrKeySizeInBits: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattreffectivekeysize
declare const kSecAttrEffectiveKeySize: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_3des_fallback
declare const kSSLSessionConfig_3DES_fallback: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_atsv1
declare const kSSLSessionConfig_ATSv1: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_atsv1_nopfs
declare const kSSLSessionConfig_ATSv1_noPFS: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_rc4_fallback
declare const kSSLSessionConfig_RC4_fallback: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_tlsv1_3des_fallback
declare const kSSLSessionConfig_TLSv1_3DES_fallback: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_tlsv1_rc4_fallback
declare const kSSLSessionConfig_TLSv1_RC4_fallback: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_tlsv1_fallback
declare const kSSLSessionConfig_TLSv1_fallback: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_anonymous
declare const kSSLSessionConfig_anonymous: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_default
declare const kSSLSessionConfig_default: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_legacy
declare const kSSLSessionConfig_legacy: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_legacy_dhe
declare const kSSLSessionConfig_legacy_DHE: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksslsessionconfig_standard
declare const kSSLSessionConfig_standard: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecclassinternetpassword
declare const kSecClassInternetPassword: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrgeneric
declare const kSecAttrGeneric: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecclassgenericpassword
declare const kSecClassGenericPassword: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecclasskey
declare const kSecClassKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrtokenid
declare const kSecAttrTokenID: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprf
declare const kSecAttrPRF: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsubject
declare const kSecAttrSubject: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsubjectkeyid
declare const kSecAttrSubjectKeyID: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrpublickeyhash
declare const kSecAttrPublicKeyHash: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcertificateencoding
declare const kSecAttrCertificateEncoding: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrsalt
declare const kSecAttrSalt: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrrounds
declare const kSecAttrRounds: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrispermanent
declare const kSecAttrIsPermanent: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrissensitive
declare const kSecAttrIsSensitive: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrisextractable
declare const kSecAttrIsExtractable: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcanencrypt
declare const kSecAttrCanEncrypt: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcandecrypt
declare const kSecAttrCanDecrypt: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcanderive
declare const kSecAttrCanDerive: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcansign
declare const kSecAttrCanSign: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcanverify
declare const kSecAttrCanVerify: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcanwrap
declare const kSecAttrCanWrap: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrcanunwrap
declare const kSecAttrCanUnwrap: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolftp
declare const kSecAttrProtocolFTP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolftpaccount
declare const kSecAttrProtocolFTPAccount: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolhttp
declare const kSecAttrProtocolHTTP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolirc
declare const kSecAttrProtocolIRC: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolnntp
declare const kSecAttrProtocolNNTP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolpop3
declare const kSecAttrProtocolPOP3: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolsmtp
declare const kSecAttrProtocolSMTP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolsocks
declare const kSecAttrProtocolSOCKS: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolimap
declare const kSecAttrProtocolIMAP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolldap
declare const kSecAttrProtocolLDAP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolappletalk
declare const kSecAttrProtocolAppleTalk: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolafp
declare const kSecAttrProtocolAFP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocoltelnet
declare const kSecAttrProtocolTelnet: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolssh
declare const kSecAttrProtocolSSH: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolftps
declare const kSecAttrProtocolFTPS: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolhttps
declare const kSecAttrProtocolHTTPS: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolhttpproxy
declare const kSecAttrProtocolHTTPProxy: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolhttpsproxy
declare const kSecAttrProtocolHTTPSProxy: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolftpproxy
declare const kSecAttrProtocolFTPProxy: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolsmb
declare const kSecAttrProtocolSMB: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolrtsp
declare const kSecAttrProtocolRTSP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolrtspproxy
declare const kSecAttrProtocolRTSPProxy: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocoldaap
declare const kSecAttrProtocolDAAP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocoleppc
declare const kSecAttrProtocolEPPC: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolipp
declare const kSecAttrProtocolIPP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolnntps
declare const kSecAttrProtocolNNTPS: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolldaps
declare const kSecAttrProtocolLDAPS: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocoltelnets
declare const kSecAttrProtocolTelnetS: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolimaps
declare const kSecAttrProtocolIMAPS: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolircs
declare const kSecAttrProtocolIRCS: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprotocolpop3s
declare const kSecAttrProtocolPOP3S: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypentlm
declare const kSecAttrAuthenticationTypeNTLM: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypemsn
declare const kSecAttrAuthenticationTypeMSN: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypedpa
declare const kSecAttrAuthenticationTypeDPA: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtyperpa
declare const kSecAttrAuthenticationTypeRPA: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypehttpbasic
declare const kSecAttrAuthenticationTypeHTTPBasic: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypehttpdigest
declare const kSecAttrAuthenticationTypeHTTPDigest: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypehtmlform
declare const kSecAttrAuthenticationTypeHTMLForm: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrauthenticationtypedefault
declare const kSecAttrAuthenticationTypeDefault: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeyclasspublic
declare const kSecAttrKeyClassPublic: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeyclassprivate
declare const kSecAttrKeyClassPrivate: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeyclasssymmetric
declare const kSecAttrKeyClassSymmetric: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypersa
declare const kSecAttrKeyTypeRSA: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypedsa
declare const kSecAttrKeyTypeDSA: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypeaes
declare const kSecAttrKeyTypeAES: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypedes
declare const kSecAttrKeyTypeDES: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytype3des
declare const kSecAttrKeyType3DES: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytyperc4
declare const kSecAttrKeyTypeRC4: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytyperc2
declare const kSecAttrKeyTypeRC2: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypecast
declare const kSecAttrKeyTypeCAST: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypeecdsa
declare const kSecAttrKeyTypeECDSA: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypeec
declare const kSecAttrKeyTypeEC: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrkeytypeecsecprimerandom
declare const kSecAttrKeyTypeECSECPrimeRandom: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrtokenidsecureenclave
declare const kSecAttrTokenIDSecureEnclave: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessiblewhenunlockedthisdeviceonly
declare const kSecAttrAccessibleWhenUnlockedThisDeviceOnly: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessiblewhenunlocked
declare const kSecAttrAccessibleWhenUnlocked: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessibleafterfirstunlockthisdeviceonly
declare const kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessibleafterfirstunlock
declare const kSecAttrAccessibleAfterFirstUnlock: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessiblealwaysthisdeviceonly
declare const kSecAttrAccessibleAlwaysThisDeviceOnly: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessiblealways
declare const kSecAttrAccessibleAlways: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprfhmacalgsha1
declare const kSecAttrPRFHmacAlgSHA1: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprfhmacalgsha224
declare const kSecAttrPRFHmacAlgSHA224: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprfhmacalgsha256
declare const kSecAttrPRFHmacAlgSHA256: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprfhmacalgsha384
declare const kSecAttrPRFHmacAlgSHA384: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattrprfhmacalgsha512
declare const kSecAttrPRFHmacAlgSHA512: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecattraccessgrouptoken
declare const kSecAttrAccessGroupToken: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchlimitone
declare const kSecMatchLimitOne: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchpolicy
declare const kSecMatchPolicy: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchissuers
declare const kSecMatchIssuers: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchemailaddressifpresent
declare const kSecMatchEmailAddressIfPresent: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchsubjectcontains
declare const kSecMatchSubjectContains: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchsubjectstartswith
declare const kSecMatchSubjectStartsWith: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchsubjectendswith
declare const kSecMatchSubjectEndsWith: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchsubjectwholestring
declare const kSecMatchSubjectWholeString: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchcaseinsensitive
declare const kSecMatchCaseInsensitive: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchdiacriticinsensitive
declare const kSecMatchDiacriticInsensitive: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchwidthinsensitive
declare const kSecMatchWidthInsensitive: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchtrustedonly
declare const kSecMatchTrustedOnly: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecmatchvalidondate
declare const kSecMatchValidOnDate: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseauthenticationuiallow
declare const kSecUseAuthenticationUIAllow: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseauthenticationuifail
declare const kSecUseAuthenticationUIFail: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecuseauthenticationuiskip
declare const kSecUseAuthenticationUISkip: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecreturnpersistentref
declare const kSecReturnPersistentRef: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecvalueref
declare const kSecValueRef: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecvaluepersistentref
declare const kSecValuePersistentRef: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpublickeyattrs
declare const kSecPublicKeyAttrs: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecprivatekeyattrs
declare const kSecPrivateKeyAttrs: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha512
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA512: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha512aesgcm
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA512AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorx963sha256aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorX963SHA256AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpkcs1v15sha512
declare const kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA512: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturemessagex962sha512
declare const kSecKeyAlgorithmECDSASignatureMessageX962SHA512: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/ksectrustcertificatetransparency
declare const kSecTrustCertificateTransparency: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustcertificatetransparencywhitelist
declare const kSecTrustCertificateTransparencyWhiteList: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustevaluationdate
declare const kSecTrustEvaluationDate: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustextendedvalidation
declare const kSecTrustExtendedValidation: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustorganizationname
declare const kSecTrustOrganizationName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustresultvalue
declare const kSecTrustResultValue: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustrevocationchecked
declare const kSecTrustRevocationChecked: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksectrustrevocationvaliduntildate
declare const kSecTrustRevocationValidUntilDate: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportitemidentity
declare const kSecImportItemIdentity: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportitemcertchain
declare const kSecImportItemCertChain: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportitemtrust
declare const kSecImportItemTrust: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportitemkeyid
declare const kSecImportItemKeyID: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportitemlabel
declare const kSecImportItemLabel: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportexportpassphrase
declare const kSecImportExportPassphrase: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportexportkeychain
declare const kSecImportExportKeychain: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecimportexportaccess
declare const kSecImportExportAccess: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecidentitydomaindefault
declare const kSecIdentityDomainDefault: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecidentitydomainkerberoskdc
declare const kSecIdentityDomainKerberosKDC: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidadc_cert_policy
declare const kSecOIDADC_CERT_POLICY: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_cert_policy
declare const kSecOIDAPPLE_CERT_POLICY: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_eku_code_signing
declare const kSecOIDAPPLE_EKU_CODE_SIGNING: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_eku_code_signing_dev
declare const kSecOIDAPPLE_EKU_CODE_SIGNING_DEV: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_eku_ichat_encryption
declare const kSecOIDAPPLE_EKU_ICHAT_ENCRYPTION: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_eku_ichat_signing
declare const kSecOIDAPPLE_EKU_ICHAT_SIGNING: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_eku_resource_signing
declare const kSecOIDAPPLE_EKU_RESOURCE_SIGNING: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_eku_system_identity
declare const kSecOIDAPPLE_EKU_SYSTEM_IDENTITY: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension
declare const kSecOIDAPPLE_EXTENSION: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_aai_intermediate
declare const kSecOIDAPPLE_EXTENSION_AAI_INTERMEDIATE: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_adc_apple_signing
declare const kSecOIDAPPLE_EXTENSION_ADC_APPLE_SIGNING: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_adc_dev_signing
declare const kSecOIDAPPLE_EXTENSION_ADC_DEV_SIGNING: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_appleid_intermediate
declare const kSecOIDAPPLE_EXTENSION_APPLEID_INTERMEDIATE: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_apple_signing
declare const kSecOIDAPPLE_EXTENSION_APPLE_SIGNING: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_code_signing
declare const kSecOIDAPPLE_EXTENSION_CODE_SIGNING: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_intermediate_marker
declare const kSecOIDAPPLE_EXTENSION_INTERMEDIATE_MARKER: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_itms_intermediate
declare const kSecOIDAPPLE_EXTENSION_ITMS_INTERMEDIATE: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidapple_extension_wwdr_intermediate
declare const kSecOIDAPPLE_EXTENSION_WWDR_INTERMEDIATE: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidauthorityinfoaccess
declare const kSecOIDAuthorityInfoAccess: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidauthoritykeyidentifier
declare const kSecOIDAuthorityKeyIdentifier: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidbasicconstraints
declare const kSecOIDBasicConstraints: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidbiometricinfo
declare const kSecOIDBiometricInfo: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcssmkeystruct
declare const kSecOIDCSSMKeyStruct: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcertissuer
declare const kSecOIDCertIssuer: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcertificatepolicies
declare const kSecOIDCertificatePolicies: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidclientauth
declare const kSecOIDClientAuth: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcollectivestateprovincename
declare const kSecOIDCollectiveStateProvinceName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcollectivestreetaddress
declare const kSecOIDCollectiveStreetAddress: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcommonname
declare const kSecOIDCommonName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcountryname
declare const kSecOIDCountryName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcrldistributionpoints
declare const kSecOIDCrlDistributionPoints: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcrlnumber
declare const kSecOIDCrlNumber: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidcrlreason
declare const kSecOIDCrlReason: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddotmac_cert_email_encrypt
declare const kSecOIDDOTMAC_CERT_EMAIL_ENCRYPT: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddotmac_cert_email_sign
declare const kSecOIDDOTMAC_CERT_EMAIL_SIGN: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddotmac_cert_extension
declare const kSecOIDDOTMAC_CERT_EXTENSION: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddotmac_cert_identity
declare const kSecOIDDOTMAC_CERT_IDENTITY: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddotmac_cert_policy
declare const kSecOIDDOTMAC_CERT_POLICY: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddeltacrlindicator
declare const kSecOIDDeltaCrlIndicator: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiddescription
declare const kSecOIDDescription: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoideku_ipsec
declare const kSecOIDEKU_IPSec: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidemailaddress
declare const kSecOIDEmailAddress: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidemailprotection
declare const kSecOIDEmailProtection: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidextendedkeyusage
declare const kSecOIDExtendedKeyUsage: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidextendedkeyusageany
declare const kSecOIDExtendedKeyUsageAny: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidextendedusecodesigning
declare const kSecOIDExtendedUseCodeSigning: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidgivenname
declare const kSecOIDGivenName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidholdinstructioncode
declare const kSecOIDHoldInstructionCode: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidinvaliditydate
declare const kSecOIDInvalidityDate: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidissueraltname
declare const kSecOIDIssuerAltName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidissuingdistributionpoint
declare const kSecOIDIssuingDistributionPoint: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidissuingdistributionpoints
declare const kSecOIDIssuingDistributionPoints: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidkerbv5_pkinit_kp_client_auth
declare const kSecOIDKERBv5_PKINIT_KP_CLIENT_AUTH: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidkerbv5_pkinit_kp_kdc
declare const kSecOIDKERBv5_PKINIT_KP_KDC: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidkeyusage
declare const kSecOIDKeyUsage: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidlocalityname
declare const kSecOIDLocalityName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidms_ntprincipalname
declare const kSecOIDMS_NTPrincipalName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidmicrosoftsgc
declare const kSecOIDMicrosoftSGC: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidnameconstraints
declare const kSecOIDNameConstraints: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidnetscapecertsequence
declare const kSecOIDNetscapeCertSequence: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidnetscapecerttype
declare const kSecOIDNetscapeCertType: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidnetscapesgc
declare const kSecOIDNetscapeSGC: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidocspsigning
declare const kSecOIDOCSPSigning: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidorganizationname
declare const kSecOIDOrganizationName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidorganizationalunitname
declare const kSecOIDOrganizationalUnitName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidpolicyconstraints
declare const kSecOIDPolicyConstraints: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidpolicymappings
declare const kSecOIDPolicyMappings: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidprivatekeyusageperiod
declare const kSecOIDPrivateKeyUsagePeriod: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidqc_statements
declare const kSecOIDQC_Statements: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsrvname
declare const kSecOIDSRVName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidserialnumber
declare const kSecOIDSerialNumber: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidserverauth
declare const kSecOIDServerAuth: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidstateprovincename
declare const kSecOIDStateProvinceName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidstreetaddress
declare const kSecOIDStreetAddress: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectaltname
declare const kSecOIDSubjectAltName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectdirectoryattributes
declare const kSecOIDSubjectDirectoryAttributes: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectemailaddress
declare const kSecOIDSubjectEmailAddress: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectinfoaccess
declare const kSecOIDSubjectInfoAccess: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectkeyidentifier
declare const kSecOIDSubjectKeyIdentifier: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectpicture
declare const kSecOIDSubjectPicture: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsubjectsignaturebitmap
declare const kSecOIDSubjectSignatureBitmap: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidsurname
declare const kSecOIDSurname: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidtimestamping
declare const kSecOIDTimeStamping: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidtitle
declare const kSecOIDTitle: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoiduseexemptions
declare const kSecOIDUseExemptions: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1certificateissueruniqueid
declare const kSecOIDX509V1CertificateIssuerUniqueId: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1certificatesubjectuniqueid
declare const kSecOIDX509V1CertificateSubjectUniqueId: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1issuername
declare const kSecOIDX509V1IssuerName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1issuernamecstruct
declare const kSecOIDX509V1IssuerNameCStruct: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1issuernameldap
declare const kSecOIDX509V1IssuerNameLDAP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1issuernamestd
declare const kSecOIDX509V1IssuerNameStd: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1serialnumber
declare const kSecOIDX509V1SerialNumber: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1signature
declare const kSecOIDX509V1Signature: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1signaturealgorithm
declare const kSecOIDX509V1SignatureAlgorithm: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1signaturealgorithmparameters
declare const kSecOIDX509V1SignatureAlgorithmParameters: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1signaturealgorithmtbs
declare const kSecOIDX509V1SignatureAlgorithmTBS: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1signaturecstruct
declare const kSecOIDX509V1SignatureCStruct: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1signaturestruct
declare const kSecOIDX509V1SignatureStruct: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectname
declare const kSecOIDX509V1SubjectName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectnamecstruct
declare const kSecOIDX509V1SubjectNameCStruct: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectnameldap
declare const kSecOIDX509V1SubjectNameLDAP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectnamestd
declare const kSecOIDX509V1SubjectNameStd: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectpublickey
declare const kSecOIDX509V1SubjectPublicKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectpublickeyalgorithm
declare const kSecOIDX509V1SubjectPublicKeyAlgorithm: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectpublickeyalgorithmparameters
declare const kSecOIDX509V1SubjectPublicKeyAlgorithmParameters: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1subjectpublickeycstruct
declare const kSecOIDX509V1SubjectPublicKeyCStruct: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1validitynotafter
declare const kSecOIDX509V1ValidityNotAfter: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1validitynotbefore
declare const kSecOIDX509V1ValidityNotBefore: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v1version
declare const kSecOIDX509V1Version: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificate
declare const kSecOIDX509V3Certificate: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificatecstruct
declare const kSecOIDX509V3CertificateCStruct: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensioncstruct
declare const kSecOIDX509V3CertificateExtensionCStruct: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensioncritical
declare const kSecOIDX509V3CertificateExtensionCritical: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensionid
declare const kSecOIDX509V3CertificateExtensionId: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensionstruct
declare const kSecOIDX509V3CertificateExtensionStruct: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensiontype
declare const kSecOIDX509V3CertificateExtensionType: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensionvalue
declare const kSecOIDX509V3CertificateExtensionValue: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensionscstruct
declare const kSecOIDX509V3CertificateExtensionsCStruct: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificateextensionsstruct
declare const kSecOIDX509V3CertificateExtensionsStruct: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3certificatenumberofextensions
declare const kSecOIDX509V3CertificateNumberOfExtensions: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3signedcertificate
declare const kSecOIDX509V3SignedCertificate: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecoidx509v3signedcertificatecstruct
declare const kSecOIDX509V3SignedCertificateCStruct: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertykeytype
declare const kSecPropertyKeyType: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertykeylabel
declare const kSecPropertyKeyLabel: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertykeylocalizedlabel
declare const kSecPropertyKeyLocalizedLabel: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertykeyvalue
declare const kSecPropertyKeyValue: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypewarning
declare const kSecPropertyTypeWarning: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypesuccess
declare const kSecPropertyTypeSuccess: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypesection
declare const kSecPropertyTypeSection: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypedata
declare const kSecPropertyTypeData: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypestring
declare const kSecPropertyTypeString: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypeurl
declare const kSecPropertyTypeURL: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypedate
declare const kSecPropertyTypeDate: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypearray
declare const kSecPropertyTypeArray: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypenumber
declare const kSecPropertyTypeNumber: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypetitle
declare const kSecPropertyTypeTitle: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpropertytypeerror
declare const kSecPropertyTypeError: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationchangeacl
declare const kSecACLAuthorizationChangeACL: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationany
declare const kSecACLAuthorizationAny: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationlogin
declare const kSecACLAuthorizationLogin: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationgenkey
declare const kSecACLAuthorizationGenKey: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationdelete
declare const kSecACLAuthorizationDelete: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationexportwrapped
declare const kSecACLAuthorizationExportWrapped: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationexportclear
declare const kSecACLAuthorizationExportClear: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationimportwrapped
declare const kSecACLAuthorizationImportWrapped: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationimportclear
declare const kSecACLAuthorizationImportClear: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationsign
declare const kSecACLAuthorizationSign: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationencrypt
declare const kSecACLAuthorizationEncrypt: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationdecrypt
declare const kSecACLAuthorizationDecrypt: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationmac
declare const kSecACLAuthorizationMAC: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationderive
declare const kSecACLAuthorizationDerive: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationkeychaincreate
declare const kSecACLAuthorizationKeychainCreate: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationkeychaindelete
declare const kSecACLAuthorizationKeychainDelete: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationkeychainitemread
declare const kSecACLAuthorizationKeychainItemRead: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationkeychainiteminsert
declare const kSecACLAuthorizationKeychainItemInsert: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationkeychainitemmodify
declare const kSecACLAuthorizationKeychainItemModify: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationkeychainitemdelete
declare const kSecACLAuthorizationKeychainItemDelete: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationchangeowner
declare const kSecACLAuthorizationChangeOwner: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationintegrity
declare const kSecACLAuthorizationIntegrity: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecaclauthorizationpartitionid
declare const kSecACLAuthorizationPartitionID: CFStringRef;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardx963sha1aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardX963SHA1AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardx963sha224aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardX963SHA224AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardx963sha256aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardX963SHA256AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardx963sha384aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardX963SHA384AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardx963sha512aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardX963SHA512AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardvariableivx963sha224aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA224AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardvariableivx963sha256aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA256AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardvariableivx963sha384aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA384AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptionstandardvariableivx963sha512aesgcm
declare const kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA512AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorvariableivx963sha224aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorVariableIVX963SHA224AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorvariableivx963sha256aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorVariableIVX963SHA256AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorvariableivx963sha384aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorVariableIVX963SHA384AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorvariableivx963sha512aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorVariableIVX963SHA512AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorx963sha1aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorX963SHA1AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorx963sha224aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorX963SHA224AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorx963sha384aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorX963SHA384AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmeciesencryptioncofactorx963sha512aesgcm
declare const kSecKeyAlgorithmECIESEncryptionCofactorX963SHA512AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturerfc4754
declare const kSecKeyAlgorithmECDSASignatureRFC4754: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturedigestx962
declare const kSecKeyAlgorithmECDSASignatureDigestX962: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturedigestx962sha1
declare const kSecKeyAlgorithmECDSASignatureDigestX962SHA1: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturedigestx962sha224
declare const kSecKeyAlgorithmECDSASignatureDigestX962SHA224: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturedigestx962sha256
declare const kSecKeyAlgorithmECDSASignatureDigestX962SHA256: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturedigestx962sha384
declare const kSecKeyAlgorithmECDSASignatureDigestX962SHA384: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturedigestx962sha512
declare const kSecKeyAlgorithmECDSASignatureDigestX962SHA512: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturemessagex962sha1
declare const kSecKeyAlgorithmECDSASignatureMessageX962SHA1: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturemessagex962sha224
declare const kSecKeyAlgorithmECDSASignatureMessageX962SHA224: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturemessagex962sha256
declare const kSecKeyAlgorithmECDSASignatureMessageX962SHA256: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdsasignaturemessagex962sha384
declare const kSecKeyAlgorithmECDSASignatureMessageX962SHA384: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangecofactor
declare const kSecKeyAlgorithmECDHKeyExchangeCofactor: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangestandard
declare const kSecKeyAlgorithmECDHKeyExchangeStandard: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangecofactorx963sha1
declare const kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA1: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangestandardx963sha1
declare const kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA1: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangecofactorx963sha224
declare const kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA224: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangecofactorx963sha256
declare const kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA256: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangecofactorx963sha384
declare const kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA384: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangecofactorx963sha512
declare const kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA512: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangestandardx963sha224
declare const kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA224: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangestandardx963sha256
declare const kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA256: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangestandardx963sha384
declare const kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA384: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmecdhkeyexchangestandardx963sha512
declare const kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA512: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionraw
declare const kSecKeyAlgorithmRSAEncryptionRaw: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionpkcs1
declare const kSecKeyAlgorithmRSAEncryptionPKCS1: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha1
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA1: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha224
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA224: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha256
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA256: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha384
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA384: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha1aesgcm
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA1AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha224aesgcm
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA224AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha256aesgcm
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA256AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsaencryptionoaepsha384aesgcm
declare const kSecKeyAlgorithmRSAEncryptionOAEPSHA384AESGCM: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignatureraw
declare const kSecKeyAlgorithmRSASignatureRaw: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpkcs1v15raw
declare const kSecKeyAlgorithmRSASignatureDigestPKCS1v15Raw: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpkcs1v15sha1
declare const kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA1: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpkcs1v15sha224
declare const kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA224: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpkcs1v15sha256
declare const kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA256: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpkcs1v15sha384
declare const kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA384: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepkcs1v15sha1
declare const kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA1: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepkcs1v15sha224
declare const kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA224: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepkcs1v15sha256
declare const kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA256: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepkcs1v15sha384
declare const kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA384: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepkcs1v15sha512
declare const kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA512: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpsssha1
declare const kSecKeyAlgorithmRSASignatureDigestPSSSHA1: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpsssha224
declare const kSecKeyAlgorithmRSASignatureDigestPSSSHA224: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpsssha256
declare const kSecKeyAlgorithmRSASignatureDigestPSSSHA256: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpsssha384
declare const kSecKeyAlgorithmRSASignatureDigestPSSSHA384: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturedigestpsssha512
declare const kSecKeyAlgorithmRSASignatureDigestPSSSHA512: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepsssha1
declare const kSecKeyAlgorithmRSASignatureMessagePSSSHA1: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepsssha224
declare const kSecKeyAlgorithmRSASignatureMessagePSSSHA224: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepsssha256
declare const kSecKeyAlgorithmRSASignatureMessagePSSSHA256: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepsssha384
declare const kSecKeyAlgorithmRSASignatureMessagePSSSHA384: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeyalgorithmrsasignaturemessagepsssha512
declare const kSecKeyAlgorithmRSASignatureMessagePSSSHA512: SecKeyAlgorithm;
// doc://com.apple.documentation/documentation/security/kseckeykeyexchangeparameterrequestedsize
declare const kSecKeyKeyExchangeParameterRequestedSize: SecKeyKeyExchangeParameter;
// doc://com.apple.documentation/documentation/security/kseckeykeyexchangeparametersharedinfo
declare const kSecKeyKeyExchangeParameterSharedInfo: SecKeyKeyExchangeParameter;
// doc://com.apple.documentation/documentation/security/ksecpolicyoid
declare const kSecPolicyOid: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyname
declare const kSecPolicyName: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyclient
declare const kSecPolicyClient: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyrevocationflags
declare const kSecPolicyRevocationFlags: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyteamidentifier
declare const kSecPolicyTeamIdentifier: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_digitalsignature
declare const kSecPolicyKU_DigitalSignature: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_nonrepudiation
declare const kSecPolicyKU_NonRepudiation: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_keyencipherment
declare const kSecPolicyKU_KeyEncipherment: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_dataencipherment
declare const kSecPolicyKU_DataEncipherment: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_keyagreement
declare const kSecPolicyKU_KeyAgreement: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_keycertsign
declare const kSecPolicyKU_KeyCertSign: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_crlsign
declare const kSecPolicyKU_CRLSign: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_encipheronly
declare const kSecPolicyKU_EncipherOnly: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyku_decipheronly
declare const kSecPolicyKU_DecipherOnly: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplex509basic
declare const kSecPolicyAppleX509Basic: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplessl
declare const kSecPolicyAppleSSL: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplesmime
declare const kSecPolicyAppleSMIME: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyappleeap
declare const kSecPolicyAppleEAP: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyappleipsec
declare const kSecPolicyAppleIPsec: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyappleichat
declare const kSecPolicyAppleiChat: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplepkinitclient
declare const kSecPolicyApplePKINITClient: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplepkinitserver
declare const kSecPolicyApplePKINITServer: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplecodesigning
declare const kSecPolicyAppleCodeSigning: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicymacappstorereceipt
declare const kSecPolicyMacAppStoreReceipt: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyappleidvalidation
declare const kSecPolicyAppleIDValidation: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplepassbooksigning
declare const kSecPolicyApplePassbookSigning: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplepayissuerencryption
declare const kSecPolicyApplePayIssuerEncryption: CFStringRef;
// doc://com.apple.documentation/documentation/security/ksecpolicyapplerevocation
declare const kSecPolicyAppleRevocation: CFStringRef;
