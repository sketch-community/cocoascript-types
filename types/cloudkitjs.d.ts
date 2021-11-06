declare namespace cocoascript {
  /**
   * Use the
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit
   */
  interface CloudKit {
    //
    alloc():CloudKit;
    //
    init():CloudKit;
  }
}

declare const CloudKit: cocoascript.CloudKit;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628513-configure
declare const configure: cocoascript.CloudKitConfig;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628647-getdefaultcontainer
declare const getDefaultContainer: cocoascript.Container;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628645-getcontainer
declare const getContainer: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628651-getallcontainers
declare const getAllContainers: cocoascript.Container;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/container
   */
  interface CloudKit.Container {
    //
    alloc():CloudKit.Container;
    //
    init():CloudKit.Container;
  }
}

declare const CloudKit.Container: cocoascript.CloudKit.Container;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/container/1773251-getdatabasewithdatabasescope
declare const getDatabaseWithDatabaseScope: cocoascript.DatabaseScope;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/container/1628709-tostring
declare const toString: cocoascript.String;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/database
   */
  interface CloudKit.Database {
    //
    alloc():CloudKit.Database;
    //
    init():CloudKit.Database;
  }
}

declare const CloudKit.Database: cocoascript.CloudKit.Database;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/database/1628580-newrecordsbatch
declare const newRecordsBatch: cocoascript.Object;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/database/1628603-tostring
declare const toString: cocoascript.String;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror
   */
  interface CloudKit.CKError {
    //
    alloc():CloudKit.CKError;
    //
    init():CloudKit.CKError;
  }
}

declare const CloudKit.CKError: cocoascript.CloudKit.CKError;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/databasechangesresponse
   */
  interface CloudKit.DatabaseChangesResponse extends CloudKit.Response {
    //
    alloc():CloudKit.DatabaseChangesResponse;
    //
    init():CloudKit.DatabaseChangesResponse;
  }
}

declare const CloudKit.DatabaseChangesResponse: cocoascript.CloudKit.DatabaseChangesResponse;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/notification
   */
  interface CloudKit.Notification {
    //
    alloc():CloudKit.Notification;
    //
    init():CloudKit.Notification;
  }
}

declare const CloudKit.Notification: cocoascript.CloudKit.Notification;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/querynotification
   */
  interface CloudKit.QueryNotification extends CloudKit.Notification {
    //
    alloc():CloudKit.QueryNotification;
    //
    init():CloudKit.QueryNotification;
  }
}

declare const CloudKit.QueryNotification: cocoascript.CloudKit.QueryNotification;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/querynotification/1628585-tostring
declare const toString: cocoascript.String;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryresponse
   */
  interface CloudKit.QueryResponse extends CloudKit.RecordsResponse {
    //
    alloc():CloudKit.QueryResponse;
    //
    init():CloudKit.QueryResponse;
  }
}

declare const CloudKit.QueryResponse: cocoascript.CloudKit.QueryResponse;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryresponse/1628552-tostring
declare const toString: cocoascript.String;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordinfosresponse
   */
  interface CloudKit.RecordInfosResponse extends CloudKit.Response {
    //
    alloc():CloudKit.RecordInfosResponse;
    //
    init():CloudKit.RecordInfosResponse;
  }
}

declare const CloudKit.RecordInfosResponse: cocoascript.CloudKit.RecordInfosResponse;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordinfosresponse/1773326-tostring
declare const toString: cocoascript.String;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordsbatchbuilder
   */
  interface CloudKit.RecordsBatchBuilder {
    //
    alloc():CloudKit.RecordsBatchBuilder;
    //
    init():CloudKit.RecordsBatchBuilder;
  }
}

declare const CloudKit.RecordsBatchBuilder: cocoascript.CloudKit.RecordsBatchBuilder;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordsbatchbuilder/1628592-create
declare const create: cocoascript.Object;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordsbatchbuilder/1628669-createorupdate
declare const createOrUpdate: cocoascript.Object;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordsbatchbuilder/1628739-update
declare const update: cocoascript.Object;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordsbatchbuilder/1628512-forceupdate
declare const forceUpdate: cocoascript.Object;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordsbatchbuilder/1628495-replace
declare const replace: cocoascript.Object;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordsbatchbuilder/1628715-forcereplace
declare const forceReplace: cocoascript.Object;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordsbatchbuilder/1628550-delete
declare const delete: cocoascript.Record;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordsbatchbuilder/1628573-forcedelete
declare const forceDelete: cocoascript.Record;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordsresponse
   */
  interface CloudKit.RecordsResponse extends CloudKit.Response {
    //
    alloc():CloudKit.RecordsResponse;
    //
    init():CloudKit.RecordsResponse;
  }
}

declare const CloudKit.RecordsResponse: cocoascript.CloudKit.RecordsResponse;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordsresponse/1628712-tostring
declare const toString: cocoascript.String;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordzonechangesresponse
   */
  interface CloudKit.RecordZoneChangesResponse extends CloudKit.Response {
    //
    alloc():CloudKit.RecordZoneChangesResponse;
    //
    init():CloudKit.RecordZoneChangesResponse;
  }
}

declare const CloudKit.RecordZoneChangesResponse: cocoascript.CloudKit.RecordZoneChangesResponse;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordzonenotification
   */
  interface CloudKit.RecordZoneNotification extends CloudKit.Notification {
    //
    alloc():CloudKit.RecordZoneNotification;
    //
    init():CloudKit.RecordZoneNotification;
  }
}

declare const CloudKit.RecordZoneNotification: cocoascript.CloudKit.RecordZoneNotification;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordzonenotification/1628601-tostring
declare const toString: cocoascript.String;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordzonesresponse
   */
  interface CloudKit.RecordZonesResponse extends CloudKit.Response {
    //
    alloc():CloudKit.RecordZonesResponse;
    //
    init():CloudKit.RecordZonesResponse;
  }
}

declare const CloudKit.RecordZonesResponse: cocoascript.CloudKit.RecordZonesResponse;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/recordzonesresponse/1628714-tostring
declare const toString: cocoascript.String;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/response
   */
  interface CloudKit.Response {
    //
    alloc():CloudKit.Response;
    //
    init():CloudKit.Response;
  }
}

declare const CloudKit.Response: cocoascript.CloudKit.Response;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/subscriptionsresponse
   */
  interface CloudKit.SubscriptionsResponse extends CloudKit.Response {
    //
    alloc():CloudKit.SubscriptionsResponse;
    //
    init():CloudKit.SubscriptionsResponse;
  }
}

declare const CloudKit.SubscriptionsResponse: cocoascript.CloudKit.SubscriptionsResponse;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/subscriptionsresponse/1628733-tostring
declare const toString: cocoascript.String;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/useridentitiesresponse
   */
  interface CloudKit.UserIdentitiesResponse extends CloudKit.Response {
    //
    alloc():CloudKit.UserIdentitiesResponse;
    //
    init():CloudKit.UserIdentitiesResponse;
  }
}

declare const CloudKit.UserIdentitiesResponse: cocoascript.CloudKit.UserIdentitiesResponse;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/useridentitiesresponse/1773316-tostring
declare const toString: cocoascript.String;
declare namespace cocoascript {
  /**
   * Display information about the record type of a shared record.
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/sharerecordtype
   */
  interface CloudKit.ShareRecordType {
    //
    alloc():CloudKit.ShareRecordType;
    //
    init():CloudKit.ShareRecordType;
  }
}

declare const CloudKit.ShareRecordType: cocoascript.CloudKit.ShareRecordType;
declare namespace cocoascript {
  /**
   * Specifies the look of the Apple ID button.
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/appleidbuttontheme
   */
  interface CloudKit.AppleIDButtonTheme {
    //
    alloc():CloudKit.AppleIDButtonTheme;
    //
    init():CloudKit.AppleIDButtonTheme;
  }
}

declare const CloudKit.AppleIDButtonTheme: cocoascript.CloudKit.AppleIDButtonTheme;
declare namespace cocoascript {
  /**
   * Available database scopes.
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/databasescope
   */
  interface CloudKit.DatabaseScope {
    //
    alloc():CloudKit.DatabaseScope;
    //
    init():CloudKit.DatabaseScope;
  }
}

declare const CloudKit.DatabaseScope: cocoascript.CloudKit.DatabaseScope;
declare namespace cocoascript {
  /**
   * The comparators you use to create queries.
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator
   */
  interface CloudKit.QueryFilterComparator {
    //
    alloc():CloudKit.QueryFilterComparator;
    //
    init():CloudKit.QueryFilterComparator;
  }
}

declare const CloudKit.QueryFilterComparator: cocoascript.CloudKit.QueryFilterComparator;
declare namespace cocoascript {
  /**
   * The delete action for a reference object.
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/referenceaction
   */
  interface CloudKit.ReferenceAction {
    //
    alloc():CloudKit.ReferenceAction;
    //
    init():CloudKit.ReferenceAction;
  }
}

declare const CloudKit.ReferenceAction: cocoascript.CloudKit.ReferenceAction;
declare namespace cocoascript {
  /**
   * The status of a participant accepting a share invitation.
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipantacceptancestatus
   */
  interface CloudKit.ShareParticipantAcceptanceStatus {
    //
    alloc():CloudKit.ShareParticipantAcceptanceStatus;
    //
    init():CloudKit.ShareParticipantAcceptanceStatus;
  }
}

declare const CloudKit.ShareParticipantAcceptanceStatus: cocoascript.CloudKit.ShareParticipantAcceptanceStatus;
declare namespace cocoascript {
  /**
   * The status of a participant accepting a share invitation.
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipantpermission
   */
  interface CloudKit.ShareParticipantPermission {
    //
    alloc():CloudKit.ShareParticipantPermission;
    //
    init():CloudKit.ShareParticipantPermission;
  }
}

declare const CloudKit.ShareParticipantPermission: cocoascript.CloudKit.ShareParticipantPermission;
declare namespace cocoascript {
  /**
   * Determines whether a participant can modify the list of participants of a shared record.
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipanttype
   */
  interface CloudKit.ShareParticipantType {
    //
    alloc():CloudKit.ShareParticipantType;
    //
    init():CloudKit.ShareParticipantType;
  }
}

declare const CloudKit.ShareParticipantType: cocoascript.CloudKit.ShareParticipantType;
declare namespace cocoascript {
  /**
   * The type of subscription.
   * https://developer.apple.com/documentation/cloudkitjs/cloudkit/subscriptiontype
   */
  interface CloudKit.SubscriptionType {
    //
    alloc():CloudKit.SubscriptionType;
    //
    init():CloudKit.SubscriptionType;
  }
}

declare const CloudKit.SubscriptionType: cocoascript.CloudKit.SubscriptionType;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628646-ckerror
declare const CKError: cocoascript.CKError;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1773310-databasescope
declare const DatabaseScope: cocoascript.DatabaseScope;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628514-promise
declare const Promise: cocoascript.Object;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628534-queryfiltercomparator
declare const QueryFilterComparator: cocoascript.QueryFilterComparator;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628597-referenceaction
declare const ReferenceAction: cocoascript.ReferenceAction;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1773293-shareparticipantacceptancestatus
declare const ShareParticipantAcceptanceStatus: cocoascript.ShareParticipantAcceptanceStatus;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1773330-shareparticipantpermission
declare const ShareParticipantPermission: cocoascript.ShareParticipantPermission;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1773289-shareparticipanttype
declare const ShareParticipantType: cocoascript.ShareParticipantType;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1773302-sharerecordtype
declare const ShareRecordType: cocoascript.ShareRecordType;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/2284650-subscriptiontype
declare const SubscriptionType: cocoascript.SubscriptionType;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628618-auth_persist_error
declare const AUTH_PERSIST_ERROR: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/notification/1628686-query_notification_reason_record
declare const QUERY_NOTIFICATION_REASON_RECORD_CREATED: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/notification/1628691-query_notification_reason_record
declare const QUERY_NOTIFICATION_REASON_RECORD_DELETED: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/notification/1628694-query_notification_reason_record
declare const QUERY_NOTIFICATION_REASON_RECORD_UPDATED: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/sharerecordtype/1773248-name
declare const NAME: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/sharerecordtype/1773307-thumbnail_image_data_field_name
declare const THUMBNAIL_IMAGE_DATA_FIELD_NAME: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/sharerecordtype/1773258-title_field_name
declare const TITLE_FIELD_NAME: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/sharerecordtype/1773329-type_field_name
declare const TYPE_FIELD_NAME: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628543-development_environment
declare const DEVELOPMENT_ENVIRONMENT: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628628-production_environment
declare const PRODUCTION_ENVIRONMENT: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628582-build_version
declare const BUILD_VERSION: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628719-cloudkit_loaded
declare const CLOUDKIT_LOADED: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/1628685-version
declare const VERSION: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/appleidbuttontheme/black
declare const BLACK: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/appleidbuttontheme/white
declare const WHITE: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/appleidbuttontheme/white_with_outline
declare const WHITE_WITH_OUTLINE: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/databasescope/private
declare const PRIVATE: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/databasescope/public
declare const PUBLIC: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/databasescope/shared
declare const SHARED: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/begins_with
declare const BEGINS_WITH: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/contains_all_tokens
declare const CONTAINS_ALL_TOKENS: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/contains_any_tokens
declare const CONTAINS_ANY_TOKENS: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/equals
declare const EQUALS: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/greater_than
declare const GREATER_THAN: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/greater_than_or_equals
declare const GREATER_THAN_OR_EQUALS: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/in
declare const IN: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/less_than
declare const LESS_THAN: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/less_than_or_equals
declare const LESS_THAN_OR_EQUALS: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/list_contains
declare const LIST_CONTAINS: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/list_contains_all
declare const LIST_CONTAINS_ALL: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/list_contains_any
declare const LIST_CONTAINS_ANY: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/list_member_begins_with
declare const LIST_MEMBER_BEGINS_WITH: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/near
declare const NEAR: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/not_begins_with
declare const NOT_BEGINS_WITH: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/not_equals
declare const NOT_EQUALS: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/not_in
declare const NOT_IN: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/not_list_contains
declare const NOT_LIST_CONTAINS: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/not_list_contains_all
declare const NOT_LIST_CONTAINS_ALL: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/not_list_contains_any
declare const NOT_LIST_CONTAINS_ANY: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/queryfiltercomparator/not_list_member_begins_with
declare const NOT_LIST_MEMBER_BEGINS_WITH: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/referenceaction/delete_self
declare const DELETE_SELF: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/referenceaction/none
declare const NONE: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipantacceptancestatus/accepted
declare const ACCEPTED: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipantacceptancestatus/pending
declare const PENDING: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipantacceptancestatus/unknown
declare const UNKNOWN: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipantpermission/none
declare const NONE: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipantpermission/read_only
declare const READ_ONLY: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipantpermission/read_write
declare const READ_WRITE: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipantpermission/unknown
declare const UNKNOWN: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipanttype/owner
declare const OWNER: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipanttype/private_user
declare const PRIVATE_USER: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipanttype/public_user
declare const PUBLIC_USER: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/shareparticipanttype/unknown
declare const UNKNOWN: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/subscriptiontype/database
declare const DATABASE: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/subscriptiontype/query
declare const QUERY: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/subscriptiontype/record_zone
declare const RECORD_ZONE: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628667-access_denied
declare const ACCESS_DENIED: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628538-atomic_error
declare const ATOMIC_ERROR: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628660-authentication_failed
declare const AUTHENTICATION_FAILED: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628713-authentication_required
declare const AUTHENTICATION_REQUIRED: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628532-bad_request
declare const BAD_REQUEST: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628725-conflict
declare const CONFLICT: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628587-exists
declare const EXISTS: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628493-internal_error
declare const INTERNAL_ERROR: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628711-not_found
declare const NOT_FOUND: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628642-quota_exceeded
declare const QUOTA_EXCEEDED: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628521-sign_in_failed
declare const SIGN_IN_FAILED: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628520-throttled
declare const THROTTLED: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628674-try_again_later
declare const TRY_AGAIN_LATER: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628540-validating_reference_error
declare const VALIDATING_REFERENCE_ERROR: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628511-unique_field_error
declare const UNIQUE_FIELD_ERROR: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628595-zone_not_found
declare const ZONE_NOT_FOUND: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628692-unknown_error
declare const UNKNOWN_ERROR: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628581-network_error
declare const NETWORK_ERROR: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628662-service_unavailable
declare const SERVICE_UNAVAILABLE: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628742-invalid_arguments
declare const INVALID_ARGUMENTS: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628544-unexpected_server_response
declare const UNEXPECTED_SERVER_RESPONSE: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1628519-configuration_error
declare const CONFIGURATION_ERROR: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/ckerror/1941103-share_ui_timeout
declare const SHARE_UI_TIMEOUT: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/notification/1628614-notification_type_query
declare const NOTIFICATION_TYPE_QUERY: cocoascript.String;
// https://developer.apple.com/documentation/cloudkitjs/cloudkit/notification/1628570-notification_type_record_zone
declare const NOTIFICATION_TYPE_RECORD_ZONE: cocoascript.String;
