import { i as PagoWebhookVerificationError, o as ClientOptions, r as PagoWebhookUnknownTypeError, s as PagoClientError, t as PagoWebhookError } from "../webhooks-BBkImqI5.cjs";
declare namespace models_d_exports {
  export { Address, AddressDict, AddressInput, AggregationFunction, AlreadyActiveSubscriptionError, AlreadyCanceledSubscription$1 as AlreadyCanceledSubscription, AmbiguousExternalCustomerID$1 as AmbiguousExternalCustomerID, AttachedCustomField, AttachedCustomFieldCreate, AuthorizeOrganization, AuthorizeResponseOrganization, AuthorizeResponseUser, AuthorizeUser, BalanceCreditOrderEvent, BalanceCreditOrderMetadata, BalanceDisputeEvent, BalanceDisputeMetadata, BalanceDisputeReversalEvent, BalanceOrderEvent, BalanceOrderMetadata, BalanceRefundEvent, BalanceRefundMetadata, BalanceRefundReversalEvent, Benefit, BenefitCreate, BenefitCustom, BenefitCustomCreate, BenefitCustomCreateProperties, BenefitCustomProperties, BenefitCustomSubscriber, BenefitCustomSubscriberProperties, BenefitCustomUpdate, BenefitCycledEvent, BenefitDiscord, BenefitDiscordCreate, BenefitDiscordCreateProperties, BenefitDiscordProperties, BenefitDiscordSubscriber, BenefitDiscordSubscriberProperties, BenefitDiscordUpdate, BenefitDownloadables, BenefitDownloadablesCreate, BenefitDownloadablesCreateProperties, BenefitDownloadablesProperties, BenefitDownloadablesSubscriber, BenefitDownloadablesSubscriberProperties, BenefitDownloadablesUpdate, BenefitFeatureFlag, BenefitFeatureFlagCreate, BenefitFeatureFlagCreateProperties, BenefitFeatureFlagProperties, BenefitFeatureFlagSubscriber, BenefitFeatureFlagSubscriberProperties, BenefitFeatureFlagUpdate, BenefitGitHubRepository, BenefitGitHubRepositoryCreate, BenefitGitHubRepositoryCreateProperties, BenefitGitHubRepositoryProperties, BenefitGitHubRepositorySubscriber, BenefitGitHubRepositorySubscriberProperties, BenefitGitHubRepositoryUpdate, BenefitGrant, BenefitGrantCustomProperties, BenefitGrantCustomWebhook, BenefitGrantDiscordProperties, BenefitGrantDiscordWebhook, BenefitGrantDownloadablesProperties, BenefitGrantDownloadablesWebhook, BenefitGrantError, BenefitGrantFeatureFlagProperties, BenefitGrantFeatureFlagWebhook, BenefitGrantGitHubRepositoryProperties, BenefitGrantGitHubRepositoryWebhook, BenefitGrantLicenseKeysProperties, BenefitGrantLicenseKeysWebhook, BenefitGrantMetadata, BenefitGrantMeterCreditProperties, BenefitGrantMeterCreditWebhook, BenefitGrantSlackSharedChannelProperties, BenefitGrantSlackSharedChannelWebhook, BenefitGrantSortProperty, BenefitGrantWebhook, BenefitGrantedEvent, BenefitLicenseKeyActivationCreateProperties, BenefitLicenseKeyActivationProperties, BenefitLicenseKeyExpirationProperties, BenefitLicenseKeys, BenefitLicenseKeysCreate, BenefitLicenseKeysCreateProperties, BenefitLicenseKeysProperties, BenefitLicenseKeysSubscriber, BenefitLicenseKeysSubscriberProperties, BenefitLicenseKeysUpdate, BenefitMeterCredit, BenefitMeterCreditCreate, BenefitMeterCreditCreateProperties, BenefitMeterCreditProperties, BenefitMeterCreditSubscriber, BenefitMeterCreditSubscriberProperties, BenefitMeterCreditUpdate, BenefitPublic, BenefitRevokedEvent, BenefitSlackSharedChannel, BenefitSlackSharedChannelCreate, BenefitSlackSharedChannelCreateProperties, BenefitSlackSharedChannelProperties, BenefitSlackSharedChannelSubscriber, BenefitSlackSharedChannelSubscriberProperties, BenefitSlackSharedChannelUpdate, BenefitSortProperty, BenefitSubscriberOrganization, BenefitType, BenefitUpdatedEvent, BenefitVisibility, BillingAddressFieldMode, CannotCreateOrganizationError$1 as CannotCreateOrganizationError, CardPayment, CardPaymentMetadata, Checkout, CheckoutBillingAddressFields, CheckoutConfirmStripe, CheckoutCreate, CheckoutCreatedEvent, CheckoutCreatedMetadata, CheckoutDiscountFixedOnceForeverDuration, CheckoutDiscountFixedRepeatDuration, CheckoutDiscountPercentageOnceForeverDuration, CheckoutDiscountPercentageRepeatDuration, CheckoutForbiddenError, CheckoutLink, CheckoutLinkCreate, CheckoutLinkCreateProduct, CheckoutLinkCreateProductPrice, CheckoutLinkCreateProducts, CheckoutLinkProduct, CheckoutLinkSortProperty, CheckoutLinkUpdate, CheckoutOrganization, CheckoutProduct, CheckoutPublic, CheckoutPublicConfirmed, CheckoutSortProperty, CheckoutStatus, CheckoutUpdate, CheckoutUpdatePublic, Context, CostMetadataInput, CostMetadataOutput, CountAggregation, CountryAlpha2, CountryAlpha2Input, CursorPagination, CustomField, CustomFieldCheckbox, CustomFieldCheckboxProperties, CustomFieldCreate, CustomFieldCreateCheckbox, CustomFieldCreateDate, CustomFieldCreateNumber, CustomFieldCreateSelect, CustomFieldCreateText, CustomFieldDate, CustomFieldDateProperties, CustomFieldNumber, CustomFieldNumberProperties, CustomFieldSelect, CustomFieldSelectOption, CustomFieldSelectProperties, CustomFieldSortProperty, CustomFieldText, CustomFieldTextProperties, CustomFieldType, CustomFieldUpdate, CustomFieldUpdateCheckbox, CustomFieldUpdateDate, CustomFieldUpdateNumber, CustomFieldUpdateSelect, CustomFieldUpdateText, Customer, CustomerBenefitGrant, CustomerBenefitGrantCustom, CustomerBenefitGrantCustomUpdate, CustomerBenefitGrantDiscord, CustomerBenefitGrantDiscordPropertiesUpdate, CustomerBenefitGrantDiscordUpdate, CustomerBenefitGrantDownloadables, CustomerBenefitGrantDownloadablesUpdate, CustomerBenefitGrantFeatureFlag, CustomerBenefitGrantFeatureFlagUpdate, CustomerBenefitGrantGitHubRepository, CustomerBenefitGrantGitHubRepositoryPropertiesUpdate, CustomerBenefitGrantGitHubRepositoryUpdate, CustomerBenefitGrantLicenseKeys, CustomerBenefitGrantLicenseKeysUpdate, CustomerBenefitGrantMeterCredit, CustomerBenefitGrantMeterCreditUpdate, CustomerBenefitGrantSlackSharedChannel, CustomerBenefitGrantSlackSharedChannelPropertiesUpdate, CustomerBenefitGrantSlackSharedChannelUpdate, CustomerBenefitGrantSortProperty, CustomerBenefitGrantUpdate, CustomerCancellationReason, CustomerCreate, CustomerCreatedEvent, CustomerCreatedMetadata, CustomerCustomerMeter, CustomerCustomerMeterMeter, CustomerCustomerMeterSortProperty, CustomerCustomerSession, CustomerDeletedEvent, CustomerDeletedMetadata, CustomerEmailUpdateRequest, CustomerEmailUpdateVerifyRequest, CustomerEmailUpdateVerifyResponse, CustomerIndividual, CustomerIndividualCreate, CustomerMeter, CustomerMeterSortProperty, CustomerNotReady$1 as CustomerNotReady, CustomerOrder, CustomerOrderConfirmPayment, CustomerOrderInvoice, CustomerOrderPaymentConfirmation, CustomerOrderPaymentStatus, CustomerOrderProduct, CustomerOrderReceipt, CustomerOrderSortProperty, CustomerOrderSubscription, CustomerOrderUpdate, CustomerOrganization, CustomerOrganizationData, CustomerOrganizationFeatureSettings, CustomerPaymentMethod, CustomerPaymentMethodCard, CustomerPaymentMethodConfirm, CustomerPaymentMethodCreate, CustomerPaymentMethodCreateRequiresActionResponse, CustomerPaymentMethodCreateResponse, CustomerPaymentMethodCreateSucceededResponse, CustomerPaymentMethodGeneric, CustomerPortalCustomer, CustomerPortalCustomerSettings, CustomerPortalCustomerUpdate, CustomerPortalMember, CustomerPortalMemberCreate, CustomerPortalMemberUpdate, CustomerPortalOAuthAccount, CustomerPortalSubscriptionSettings, CustomerPortalUsageSettings, CustomerProduct, CustomerSeat, CustomerSeatAssign, CustomerSeatClaimResponse, CustomerSession, CustomerSessionCustomerExternalIDCreate, CustomerSessionCustomerIDCreate, CustomerSortProperty, CustomerState, CustomerStateBenefitGrant, CustomerStateIndividual, CustomerStateMeter, CustomerStateSubscription, CustomerStateSubscriptionMeter, CustomerStateTeam, CustomerSubscription, CustomerSubscriptionCancel, CustomerSubscriptionMeter, CustomerSubscriptionMeterMeter, CustomerSubscriptionPause, CustomerSubscriptionProduct, CustomerSubscriptionResume, CustomerSubscriptionSortProperty, CustomerSubscriptionUpdate, CustomerSubscriptionUpdateClear, CustomerSubscriptionUpdateProduct, CustomerSubscriptionUpdateSeats, CustomerTeam, CustomerTeamCreate, CustomerType, CustomerUpdate, CustomerUpdateExternalID, CustomerUpdatedEvent, CustomerUpdatedFields, CustomerUpdatedMetadata, CustomerWallet, CustomerWalletSortProperty, Discount, DiscountCreate, DiscountDuration, DiscountFixedCreate, DiscountFixedOnceForeverDuration, DiscountFixedOnceForeverDurationBase, DiscountFixedRepeatDuration, DiscountFixedRepeatDurationBase, DiscountPercentageCreate, DiscountPercentageOnceForeverDuration, DiscountPercentageOnceForeverDurationBase, DiscountPercentageRepeatDuration, DiscountPercentageRepeatDurationBase, DiscountProduct, DiscountSortProperty, DiscountType, DiscountUpdate, Dispute, DisputeCustomer, DisputeNotOpenError$1 as DisputeNotOpenError, DisputeSortProperty, DisputeStatus, DownloadableFileCreate, DownloadableFileRead, DownloadableRead, Event, EventCreateCustomer, EventCreateExternalCustomer, EventMetadataInput, EventMetadataOutput, EventName, EventNamesSortProperty, EventSortProperty, EventSource, EventType, EventTypeUpdate, EventTypeWithStats, EventTypesSortProperty, EventsIngest, EventsIngestResponse, ExistingProductPrice, ExpiredCheckoutError$1 as ExpiredCheckoutError, FileCreate, FileDownload, FilePatch, FileRead, FileServiceTypes, FileUpload, FileUploadCompleted, Filter, FilterClause, FilterConjunction, FilterOperator, Func, GenericPayment, HTTPValidationError$1 as HTTPValidationError, IntrospectTokenResponse, LLMMetadata, LegacyRecurringProductPrice, LegacyRecurringProductPriceCustom, LegacyRecurringProductPriceFixed, LicenseKeyActivate, LicenseKeyActivationBase, LicenseKeyActivationRead, LicenseKeyCustomer, LicenseKeyDeactivate, LicenseKeyRead, LicenseKeyStatus, LicenseKeyUpdate, LicenseKeyValidate, LicenseKeyWithActivations, ListResourceBenefit, ListResourceBenefitGrant, ListResourceCheckout, ListResourceCheckoutLink, ListResourceCustomField, ListResourceCustomer, ListResourceCustomerBenefitGrant, ListResourceCustomerCustomerMeter, ListResourceCustomerMeter, ListResourceCustomerOrder, ListResourceCustomerPaymentMethod, ListResourceCustomerPortalMember, ListResourceCustomerSubscription, ListResourceCustomerWallet, ListResourceDiscount, ListResourceDispute, ListResourceDownloadableRead, ListResourceEvent, ListResourceEventName, ListResourceEventTypeWithStats, ListResourceFileRead, ListResourceLicenseKeyRead, ListResourceMember, ListResourceMeter, ListResourceOrder, ListResourceOrganization, ListResourcePayment, ListResourcePaymentMethod, ListResourceProduct, ListResourceRefund, ListResourceSubscription, ListResourceWebhookDelivery, ListResourceWebhookEndpoint, ListResourceWithCursorPaginationEvent, ManualRetryLimitExceeded$1 as ManualRetryLimitExceeded, Member, MemberCreateFromCustomer, MemberOwnerCreate, MemberRole, MemberSortProperty, MemberUpdate, MetadataQuery, Meter, MeterCreate, MeterCreditEvent, MeterCreditedMetadata, MeterQuantities, MeterQuantity, MeterResetEvent, MeterResetMetadata, MeterSortProperty, MeterUnit, MeterUpdate, Metric, MetricDashboardCreate, MetricDashboardSchema, MetricDashboardUpdate, MetricPeriod, MetricType, Metrics, MetricsIntervalLimit, MetricsIntervalsLimits, MetricsLimits, MetricsResponse, MetricsTotals, MissingInvoiceBillingDetails$1 as MissingInvoiceBillingDetails, NotOpenCheckout, NotPermitted$1 as NotPermitted, OAuth2ClientConfiguration, OAuth2ClientConfigurationUpdate, OAuth2ClientPublic, OffSessionChargesNotEnabled, Order, OrderBillingReason, OrderCreate, OrderCustomer, OrderFinalize, OrderInvoice, OrderItemSchema, OrderNotDraft$1 as OrderNotDraft, OrderNotEligibleForInvoice$1 as OrderNotEligibleForInvoice, OrderNotEligibleForRetry$1 as OrderNotEligibleForRetry, OrderPaidEvent, OrderPaidMetadata, OrderProduct, OrderReceipt, OrderRefundedEvent, OrderRefundedMetadata, OrderSortProperty, OrderStatus, OrderSubscription, OrderUpdate, OrderVoidedEvent, OrderVoidedMetadata, Organization, OrganizationAvatarFileCreate, OrganizationAvatarFileRead, OrganizationCapabilities, OrganizationCompanyLegalEntitySchema, OrganizationCreate, OrganizationCustomerEmailSettings, OrganizationCustomerPortalSettings, OrganizationDetails, OrganizationFeatureSettings, OrganizationFeatureSettingsUpdate, OrganizationIndividualLegalEntitySchema, OrganizationNotReadyForPayments, OrganizationSocialLink, OrganizationSocialPlatforms, OrganizationSortProperty, OrganizationStatus, OrganizationSubscriptionSettings, OrganizationUpdate, Pagination, PauseResumeNotAllowed, Payment, PaymentActionRequired, PaymentAlreadyInProgress$1 as PaymentAlreadyInProgress, PaymentError$1 as PaymentError, PaymentFailed$1 as PaymentFailed, PaymentMethod, PaymentMethodCard, PaymentMethodCardMetadata, PaymentMethodGeneric, PaymentMethodInUseByActiveSubscription$1 as PaymentMethodInUseByActiveSubscription, PaymentMethodSetupFailed$1 as PaymentMethodSetupFailed, PaymentNotReady, PaymentProcessor, PaymentSortProperty, PaymentStatus, PaymentTrigger, PendingSubscriptionUpdate, Permission, PortalAuthenticatedUser, PresentmentCurrency, Product, ProductBenefitsUpdate, ProductBillingType, ProductCreate, ProductCreateOneTime, ProductCreateRecurring, ProductMediaFileCreate, ProductMediaFileRead, ProductPrice, ProductPriceCustom, ProductPriceCustomCreate, ProductPriceFixed, ProductPriceFixedCreate, ProductPriceMeter, ProductPriceMeteredUnit, ProductPriceMeteredUnitCreate, ProductPriceSeatBased, ProductPriceSeatBasedCreate, ProductPriceSeatTier, ProductPriceSeatTiersInput, ProductPriceSeatTiersOutput, ProductPriceSource, ProductSortProperty, ProductUpdate, ProductVisibility, PropertyAggregation, PublicSubscriptionProrationBehavior, Reason, RecurringInterval, Refund, RefundCreate, RefundDispute, RefundReason, RefundSortProperty, RefundStatus, RefundedAlready$1 as RefundedAlready, ResourceNotFound$1 as ResourceNotFound, RevokeTokenResponse, Role, S3DownloadURL, S3FileCreateMultipart, S3FileCreatePart, S3FileUploadCompletedPart, S3FileUploadMultipart, S3FileUploadPart, SSOEnforcementRequiresConnection$1 as SSOEnforcementRequiresConnection, Scope, SeatAssign, SeatClaim, SeatClaimInfo, SeatStatus, SeatTierType, SeatsList, Status, SubType, Subscription, SubscriptionBillingPeriodUpdatedEvent, SubscriptionBillingPeriodUpdatedMetadata, SubscriptionCancel, SubscriptionCanceledEvent, SubscriptionCanceledMetadata, SubscriptionCreateCustomer, SubscriptionCreateExternalCustomer, SubscriptionCreatedEvent, SubscriptionCreatedMetadata, SubscriptionCustomer, SubscriptionCycledEvent, SubscriptionCycledMetadata, SubscriptionLocked$1 as SubscriptionLocked, SubscriptionMeter, SubscriptionPastDueEvent, SubscriptionPastDueMetadata, SubscriptionPause, SubscriptionPausedEvent, SubscriptionPausedMetadata, SubscriptionProductUpdatedEvent, SubscriptionProductUpdatedMetadata, SubscriptionProrationBehavior, SubscriptionReactivatedEvent, SubscriptionReactivatedMetadata, SubscriptionResume, SubscriptionResumedEvent, SubscriptionResumedMetadata, SubscriptionRevoke, SubscriptionRevokedEvent, SubscriptionRevokedMetadata, SubscriptionSeatsUpdatedEvent, SubscriptionSeatsUpdatedMetadata, SubscriptionSortProperty, SubscriptionStatus, SubscriptionUncanceledEvent, SubscriptionUncanceledMetadata, SubscriptionUpdate, SubscriptionUpdateBase, SubscriptionUpdateBillingPeriod, SubscriptionUpdateClear, SubscriptionUpdateClearedEvent, SubscriptionUpdateClearedMetadata, SubscriptionUpdateSeats, SubscriptionUpdatedEvent, SubscriptionUpdatedMetadata, SupportCaseAttachmentFileCreate, SupportCaseAttachmentFileRead, SystemEvent, TaxBehavior, TaxBehaviorOption, TimeInterval, Timeframe, Timezone, TokenEndpointAuthMethod, TokenResponse, TokenType, TrialAlreadyRedeemed, TrialInterval, Unauthorized$1 as Unauthorized, UniqueAggregation, UserEvent, UserInfoOrganization, UserInfoUser, ValidatedLicenseKey, ValidationError, WebhookDelivery, WebhookEndpoint, WebhookEndpointCreate, WebhookEndpointUpdate, WebhookEvent, WebhookEventType, WebhookFormat };
}
/**
 * AggregationFunction
 */
type AggregationFunction = "count" | "sum" | "max" | "min" | "avg" | "unique";
/**
 * BenefitGrantSortProperty
 */
type BenefitGrantSortProperty = "created_at" | "-created_at" | "granted_at" | "-granted_at" | "revoked_at" | "-revoked_at";
/**
 * BenefitSortProperty
 */
type BenefitSortProperty = "created_at" | "-created_at" | "description" | "-description" | "type" | "-type" | "user_order" | "-user_order";
/**
 * BenefitType
 */
type BenefitType = "custom" | "discord" | "github_repository" | "downloadables" | "license_keys" | "meter_credit" | "feature_flag" | "slack_shared_channel";
/**
 * BenefitVisibility
 */
type BenefitVisibility = "draft" | "private" | "public";
/**
 * BillingAddressFieldMode
 */
type BillingAddressFieldMode = "required" | "optional" | "disabled";
/**
 * CheckoutLinkSortProperty
 */
type CheckoutLinkSortProperty = "created_at" | "-created_at" | "label" | "-label" | "success_url" | "-success_url" | "allow_discount_codes" | "-allow_discount_codes";
/**
 * CheckoutSortProperty
 */
type CheckoutSortProperty = "created_at" | "-created_at" | "expires_at" | "-expires_at" | "status" | "-status";
/**
 * CheckoutStatus
 */
type CheckoutStatus = "open" | "expired" | "confirmed" | "succeeded" | "failed";
/**
 * CountryAlpha2
 */
type CountryAlpha2 = "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
/**
 * CountryAlpha2Input
 */
type CountryAlpha2Input = "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
/**
 * CustomFieldSortProperty
 */
type CustomFieldSortProperty = "created_at" | "-created_at" | "slug" | "-slug" | "name" | "-name" | "type" | "-type";
/**
 * CustomFieldType
 */
type CustomFieldType = "text" | "number" | "date" | "checkbox" | "select";
/**
 * CustomerBenefitGrantSortProperty
 */
type CustomerBenefitGrantSortProperty = "granted_at" | "-granted_at" | "type" | "-type" | "organization" | "-organization" | "product_benefit" | "-product_benefit";
/**
 * CustomerCancellationReason
 */
type CustomerCancellationReason = "customer_service" | "low_quality" | "missing_features" | "switched_service" | "too_complex" | "too_expensive" | "unused" | "other";
/**
 * CustomerCustomerMeterSortProperty
 */
type CustomerCustomerMeterSortProperty = "created_at" | "-created_at" | "modified_at" | "-modified_at" | "meter_id" | "-meter_id" | "meter_name" | "-meter_name" | "consumed_units" | "-consumed_units" | "credited_units" | "-credited_units" | "balance" | "-balance";
/**
 * CustomerMeterSortProperty
 */
type CustomerMeterSortProperty = "created_at" | "-created_at" | "modified_at" | "-modified_at" | "customer_id" | "-customer_id" | "customer_name" | "-customer_name" | "meter_id" | "-meter_id" | "meter_name" | "-meter_name" | "consumed_units" | "-consumed_units" | "credited_units" | "-credited_units" | "balance" | "-balance";
/**
 * CustomerOrderSortProperty
 */
type CustomerOrderSortProperty = "created_at" | "-created_at" | "amount" | "-amount" | "net_amount" | "-net_amount" | "product" | "-product" | "subscription" | "-subscription";
/**
 * CustomerSortProperty
 */
type CustomerSortProperty = "created_at" | "-created_at" | "email" | "-email" | "name" | "-name";
/**
 * CustomerSubscriptionSortProperty
 */
type CustomerSubscriptionSortProperty = "started_at" | "-started_at" | "amount" | "-amount" | "status" | "-status" | "organization" | "-organization" | "product" | "-product";
/**
 * CustomerType
 */
type CustomerType = "individual" | "team";
/**
 * CustomerWalletSortProperty
 */
type CustomerWalletSortProperty = "created_at" | "-created_at" | "balance" | "-balance";
/**
 * DiscountDuration
 */
type DiscountDuration = "once" | "forever" | "repeating";
/**
 * DiscountSortProperty
 */
type DiscountSortProperty = "created_at" | "-created_at" | "name" | "-name" | "code" | "-code" | "redemptions_count" | "-redemptions_count" | "ends_at" | "-ends_at";
/**
 * DiscountType
 */
type DiscountType = "fixed" | "percentage";
/**
 * DisputeSortProperty
 */
type DisputeSortProperty = "created_at" | "-created_at" | "amount" | "-amount";
/**
 * DisputeStatus
 */
type DisputeStatus = "prevented" | "early_warning" | "needs_response" | "under_review" | "lost" | "won";
/**
 * EventNamesSortProperty
 */
type EventNamesSortProperty = "name" | "-name" | "occurrences" | "-occurrences" | "first_seen" | "-first_seen" | "last_seen" | "-last_seen";
/**
 * EventSortProperty
 */
type EventSortProperty = "timestamp" | "-timestamp";
/**
 * EventSource
 */
type EventSource = "system" | "user";
/**
 * EventTypesSortProperty
 */
type EventTypesSortProperty = "name" | "-name" | "label" | "-label" | "occurrences" | "-occurrences" | "first_seen" | "-first_seen" | "last_seen" | "-last_seen";
/**
 * FileServiceTypes
 */
type FileServiceTypes = "downloadable" | "product_media" | "organization_avatar" | "support_case_attachment";
/**
 * FilterConjunction
 */
type FilterConjunction = "and" | "or";
/**
 * FilterOperator
 */
type FilterOperator = "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "like" | "not_like";
/**
 * Func
 */
type Func = "sum" | "max" | "min" | "avg";
/**
 * LicenseKeyStatus
 */
type LicenseKeyStatus = "granted" | "revoked" | "disabled";
/**
 * MemberRole
 */
type MemberRole = "owner" | "billing_manager" | "member";
/**
 * MemberSortProperty
 */
type MemberSortProperty = "created_at" | "-created_at";
/**
 * MeterSortProperty
 */
type MeterSortProperty = "created_at" | "-created_at" | "name" | "-name";
/**
 * MeterUnit
 */
type MeterUnit = "scalar" | "token" | "custom";
/**
 * MetricType
 */
type MetricType = "scalar" | "currency" | "currency_sub_cent" | "percentage";
/**
 * OrderBillingReason
 */
type OrderBillingReason = "purchase" | "subscription_create" | "subscription_cycle" | "subscription_update";
/**
 * OrderSortProperty
 */
type OrderSortProperty = "created_at" | "-created_at" | "status" | "-status" | "invoice_number" | "-invoice_number" | "amount" | "-amount" | "net_amount" | "-net_amount" | "customer" | "-customer" | "product" | "-product" | "discount" | "-discount" | "subscription" | "-subscription";
/**
 * OrderStatus
 */
type OrderStatus = "draft" | "pending" | "paid" | "refunded" | "partially_refunded" | "void";
/**
 * OrganizationSocialPlatforms
 */
type OrganizationSocialPlatforms = "x" | "github" | "facebook" | "instagram" | "youtube" | "tiktok" | "linkedin" | "threads" | "discord" | "other";
/**
 * OrganizationSortProperty
 */
type OrganizationSortProperty = "created_at" | "-created_at" | "slug" | "-slug" | "name" | "-name" | "next_review_threshold" | "-next_review_threshold" | "days_in_status" | "-days_in_status";
/**
 * OrganizationStatus
 */
type OrganizationStatus = "created" | "review" | "snoozed" | "denied" | "active" | "blocked" | "offboarding" | "offboarded";
/**
 * PaymentProcessor
 */
type PaymentProcessor = "stripe";
/**
 * PaymentSortProperty
 */
type PaymentSortProperty = "created_at" | "-created_at" | "status" | "-status" | "amount" | "-amount" | "method" | "-method";
/**
 * PaymentStatus
 */
type PaymentStatus = "pending" | "succeeded" | "failed";
/**
 * PaymentTrigger
 */
type PaymentTrigger = "purchase" | "subscription_cycle" | "retry_dunning" | "retry_customer" | "retry_payment_method_update" | "retry_admin";
/**
 * The permission level to grant. Read more about roles and their permissions on [GitHub documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role).
 */
type Permission = "pull" | "triage" | "push" | "maintain" | "admin";
/**
 * PresentmentCurrency
 */
type PresentmentCurrency = "aed" | "all" | "amd" | "aoa" | "ars" | "aud" | "awg" | "azn" | "bam" | "bbd" | "bdt" | "bif" | "bmd" | "bnd" | "bob" | "brl" | "bsd" | "bwp" | "bzd" | "cad" | "cdf" | "chf" | "clp" | "cny" | "cop" | "crc" | "cve" | "czk" | "djf" | "dkk" | "dop" | "dzd" | "egp" | "etb" | "eur" | "fjd" | "fkp" | "gbp" | "gel" | "gip" | "gmd" | "gnf" | "gtq" | "gyd" | "hkd" | "hnl" | "htg" | "huf" | "idr" | "ils" | "inr" | "isk" | "jmd" | "jpy" | "kes" | "kgs" | "khr" | "kmf" | "krw" | "kyd" | "kzt" | "lak" | "lkr" | "lrd" | "lsl" | "mad" | "mdl" | "mga" | "mkd" | "mnt" | "mop" | "mur" | "mvr" | "mwk" | "mxn" | "myr" | "mzn" | "nad" | "ngn" | "nio" | "nok" | "npr" | "nzd" | "pab" | "pen" | "pgk" | "php" | "pkr" | "pln" | "pyg" | "qar" | "ron" | "rsd" | "rwf" | "sar" | "sbd" | "scr" | "sek" | "sgd" | "shp" | "sos" | "srd" | "szl" | "thb" | "tjs" | "top" | "try" | "ttd" | "twd" | "tzs" | "uah" | "ugx" | "usd" | "uyu" | "uzs" | "vnd" | "vuv" | "wst" | "xaf" | "xcd" | "xcg" | "xof" | "xpf" | "yer" | "zar" | "zmw";
/**
 * ProductBillingType
 */
type ProductBillingType = "one_time" | "recurring";
/**
 * ProductPriceSource
 */
type ProductPriceSource = "catalog" | "ad_hoc";
/**
 * ProductSortProperty
 */
type ProductSortProperty = "created_at" | "-created_at" | "name" | "-name" | "price_amount_type" | "-price_amount_type" | "price_amount" | "-price_amount";
/**
 * ProductVisibility
 */
type ProductVisibility = "draft" | "private" | "public";
/**
 * PublicSubscriptionProrationBehavior
 */
type PublicSubscriptionProrationBehavior = "invoice" | "prorate" | "next_period";
/**
 * Reason for the refund.
 */
type Reason = "duplicate" | "fraudulent" | "customer_request" | "service_disruption" | "satisfaction_guarantee" | "other";
/**
 * RecurringInterval
 */
type RecurringInterval = "day" | "week" | "month" | "year";
/**
 * RefundReason
 */
type RefundReason = "duplicate" | "fraudulent" | "customer_request" | "service_disruption" | "satisfaction_guarantee" | "dispute_prevention" | "other";
/**
 * RefundSortProperty
 */
type RefundSortProperty = "created_at" | "-created_at" | "amount" | "-amount";
/**
 * RefundStatus
 */
type RefundStatus = "pending" | "succeeded" | "failed" | "canceled";
/**
 * The role of the member within the customer. To assign or transfer ownership, use the member update endpoint.
 */
type Role = "member" | "billing_manager";
/**
 * Scope
 */
type Scope = "openid" | "profile" | "email" | "user:read" | "user:write" | "organizations:read" | "organizations:write" | "custom_fields:read" | "custom_fields:write" | "discounts:read" | "discounts:write" | "checkout_links:read" | "checkout_links:write" | "checkouts:read" | "checkouts:write" | "transactions:read" | "transactions:write" | "payouts:read" | "payouts:write" | "products:read" | "products:write" | "benefits:read" | "benefits:write" | "events:read" | "events:write" | "meters:read" | "meters:write" | "files:read" | "files:write" | "subscriptions:read" | "subscriptions:write" | "customers:read" | "customers:write" | "members:read" | "members:write" | "wallets:read" | "wallets:write" | "disputes:read" | "disputes:write" | "customer_meters:read" | "customer_sessions:write" | "member_sessions:write" | "customer_seats:read" | "customer_seats:write" | "orders:read" | "orders:write" | "refunds:read" | "refunds:write" | "payments:read" | "metrics:read" | "metrics:write" | "webhooks:read" | "webhooks:write" | "license_keys:read" | "license_keys:write" | "customer_portal:read" | "customer_portal:write" | "notifications:read" | "notifications:write" | "notification_recipients:read" | "notification_recipients:write" | "organization_access_tokens:read" | "organization_access_tokens:write";
/**
 * SeatStatus
 */
type SeatStatus = "pending" | "claimed" | "revoked";
/**
 * SeatTierType
 */
type SeatTierType = "volume" | "graduated";
/**
 * Status
 */
type Status = "active" | "trialing";
/**
 * SubType
 */
type SubType = "user" | "organization";
/**
 * SubscriptionProrationBehavior
 */
type SubscriptionProrationBehavior = "invoice" | "prorate" | "next_period" | "reset";
/**
 * SubscriptionSortProperty
 */
type SubscriptionSortProperty = "customer" | "-customer" | "status" | "-status" | "started_at" | "-started_at" | "current_period_end" | "-current_period_end" | "ended_at" | "-ended_at" | "ends_at" | "-ends_at" | "amount" | "-amount" | "product" | "-product" | "discount" | "-discount";
/**
 * SubscriptionStatus
 */
type SubscriptionStatus = "incomplete" | "incomplete_expired" | "trialing" | "active" | "past_due" | "canceled" | "unpaid" | "paused";
/**
 * TaxBehavior
 */
type TaxBehavior = "inclusive" | "exclusive";
/**
 * TaxBehaviorOption
 */
type TaxBehaviorOption = "location" | "inclusive" | "exclusive";
/**
 * TimeInterval
 */
type TimeInterval = "year" | "month" | "week" | "day" | "hour";
/**
 * Timeframe
 */
type Timeframe = "year" | "month" | "day";
/**
 * Timezone to use for the timestamps. Default is UTC.
 */
type Timezone = "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Factory" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
/**
 * TokenEndpointAuthMethod
 */
type TokenEndpointAuthMethod = "client_secret_basic" | "client_secret_post" | "none";
/**
 * TokenType
 */
type TokenType = "access_token" | "refresh_token";
/**
 * TrialInterval
 */
type TrialInterval = "day" | "week" | "month" | "year";
/**
 * WebhookEventType
 */
type WebhookEventType = "checkout.created" | "checkout.updated" | "checkout.expired" | "customer.created" | "customer.updated" | "customer.deleted" | "customer.state_changed" | "customer_seat.assigned" | "customer_seat.claimed" | "customer_seat.revoked" | "member.created" | "member.updated" | "member.deleted" | "order.created" | "order.updated" | "order.paid" | "order.refunded" | "subscription.created" | "subscription.updated" | "subscription.active" | "subscription.canceled" | "subscription.uncanceled" | "subscription.revoked" | "subscription.past_due" | "subscription.paused" | "subscription.resumed" | "refund.created" | "refund.updated" | "product.created" | "product.updated" | "benefit.created" | "benefit.updated" | "benefit_grant.created" | "benefit_grant.cycled" | "benefit_grant.updated" | "benefit_grant.revoked" | "organization.updated";
/**
 * WebhookFormat
 */
type WebhookFormat = "raw" | "discord" | "slack";
/**
 * Address
 */
interface Address {
  /**
   * line1
   */
  line1?: string | null;
  /**
   * line2
   */
  line2?: string | null;
  /**
   * postal_code
   */
  postal_code?: string | null;
  /**
   * city
   */
  city?: string | null;
  /**
   * state
   */
  state?: string | null;
  /**
   * country
   */
  country: CountryAlpha2;
}
/**
 * AddressDict
 */
interface AddressDict {
  /**
   * line1
   */
  line1?: string;
  /**
   * line2
   */
  line2?: string;
  /**
   * postal_code
   */
  postal_code?: string;
  /**
   * city
   */
  city?: string;
  /**
   * state
   */
  state?: string;
  /**
   * country
   */
  country: string;
}
/**
 * AddressInput
 */
interface AddressInput {
  /**
   * line1
   */
  line1?: string | null;
  /**
   * line2
   */
  line2?: string | null;
  /**
   * postal_code
   */
  postal_code?: string | null;
  /**
   * city
   */
  city?: string | null;
  /**
   * state
   */
  state?: string | null;
  /**
   * country
   */
  country: CountryAlpha2Input;
}
/**
 * AlreadyActiveSubscriptionError
 */
interface AlreadyActiveSubscriptionError {
  /**
   * error
   */
  error: "AlreadyActiveSubscriptionError";
  /**
   * detail
   */
  detail: string;
}
/**
 * AlreadyCanceledSubscription
 */
interface AlreadyCanceledSubscription$1 {
  /**
   * error
   */
  error: "AlreadyCanceledSubscription";
  /**
   * detail
   */
  detail: string;
}
/**
 * AmbiguousExternalCustomerID
 */
interface AmbiguousExternalCustomerID$1 {
  /**
   * error
   */
  error: "AmbiguousExternalCustomerID";
  /**
   * detail
   */
  detail: string;
}
/**
 * Schema of a custom field attached to a resource.
 */
interface AttachedCustomField {
  /**
   * ID of the custom field.
   */
  custom_field_id: string;
  /**
   * custom_field
   */
  custom_field: CustomField;
  /**
   * Order of the custom field in the resource.
   */
  order: number;
  /**
   * Whether the value is required for this custom field.
   */
  required: boolean;
}
/**
 * Schema to attach a custom field to a resource.
 */
interface AttachedCustomFieldCreate {
  /**
   * ID of the custom field to attach.
   */
  custom_field_id: string;
  /**
   * Whether the value is required for this custom field.
   */
  required: boolean;
}
/**
 * AuthorizeOrganization
 */
interface AuthorizeOrganization {
  /**
   * id
   */
  id: string;
  /**
   * slug
   */
  slug: string;
  /**
   * avatar_url
   */
  avatar_url: string | null;
}
/**
 * AuthorizeResponseOrganization
 */
interface AuthorizeResponseOrganization {
  /**
   * client
   */
  client: OAuth2ClientPublic;
  /**
   * sub_type
   */
  sub_type: "organization";
  /**
   * sub
   */
  sub: AuthorizeOrganization | null;
  /**
   * scopes
   */
  scopes: Scope[];
  /**
   * organizations
   */
  organizations: AuthorizeOrganization[];
  /**
   * requires_single_organization
   */
  requires_single_organization?: boolean;
  /**
   * scope_display_names
   */
  scope_display_names?: Record<string, string>;
}
/**
 * AuthorizeResponseUser
 */
interface AuthorizeResponseUser {
  /**
   * client
   */
  client: OAuth2ClientPublic;
  /**
   * sub_type
   */
  sub_type: "user";
  /**
   * sub
   */
  sub: AuthorizeUser | null;
  /**
   * scopes
   */
  scopes: Scope[];
  /**
   * organizations
   */
  organizations: AuthorizeOrganization[];
  /**
   * requires_single_organization
   */
  requires_single_organization?: boolean;
  /**
   * scope_display_names
   */
  scope_display_names?: Record<string, string>;
}
/**
 * AuthorizeUser
 */
interface AuthorizeUser {
  /**
   * id
   */
  id: string;
  /**
   * email
   */
  email: string;
  /**
   * avatar_url
   */
  avatar_url: string | null;
}
/**
 * An event created by Pago when an order is paid via customer balance.
 */
interface BalanceCreditOrderEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "balance.credit_order";
  /**
   * metadata
   */
  metadata: BalanceCreditOrderMetadata;
}
/**
 * BalanceCreditOrderMetadata
 */
interface BalanceCreditOrderMetadata {
  /**
   * order_id
   */
  order_id: string;
  /**
   * product_id
   */
  product_id?: string;
  /**
   * subscription_id
   */
  subscription_id?: string;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * tax_amount
   */
  tax_amount: number;
  /**
   * tax_state
   */
  tax_state?: string | null;
  /**
   * tax_country
   */
  tax_country?: string | null;
  /**
   * fee
   */
  fee: number;
  /**
   * exchange_rate
   */
  exchange_rate?: number;
}
/**
 * An event created by Pago when an order is disputed.
 */
interface BalanceDisputeEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "balance.dispute";
  /**
   * metadata
   */
  metadata: BalanceDisputeMetadata;
}
/**
 * BalanceDisputeMetadata
 */
interface BalanceDisputeMetadata {
  /**
   * transaction_id
   */
  transaction_id: string;
  /**
   * dispute_id
   */
  dispute_id: string;
  /**
   * order_id
   */
  order_id?: string;
  /**
   * order_created_at
   */
  order_created_at?: string;
  /**
   * product_id
   */
  product_id?: string;
  /**
   * subscription_id
   */
  subscription_id?: string;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * presentment_amount
   */
  presentment_amount: number;
  /**
   * presentment_currency
   */
  presentment_currency: string;
  /**
   * tax_amount
   */
  tax_amount: number;
  /**
   * tax_state
   */
  tax_state?: string | null;
  /**
   * tax_country
   */
  tax_country?: string | null;
  /**
   * fee
   */
  fee: number;
  /**
   * exchange_rate
   */
  exchange_rate?: number;
}
/**
 * An event created by Pago when a dispute is won and funds are reinstated.
 */
interface BalanceDisputeReversalEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "balance.dispute_reversal";
  /**
   * metadata
   */
  metadata: BalanceDisputeMetadata;
}
/**
 * An event created by Pago when an order is paid.
 */
interface BalanceOrderEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "balance.order";
  /**
   * metadata
   */
  metadata: BalanceOrderMetadata;
}
/**
 * BalanceOrderMetadata
 */
interface BalanceOrderMetadata {
  /**
   * transaction_id
   */
  transaction_id: string;
  /**
   * order_id
   */
  order_id: string;
  /**
   * product_id
   */
  product_id?: string;
  /**
   * subscription_id
   */
  subscription_id?: string;
  /**
   * amount
   */
  amount: number;
  /**
   * net_amount
   */
  net_amount?: number;
  /**
   * currency
   */
  currency: string;
  /**
   * presentment_amount
   */
  presentment_amount: number;
  /**
   * presentment_currency
   */
  presentment_currency: string;
  /**
   * tax_amount
   */
  tax_amount: number;
  /**
   * tax_state
   */
  tax_state?: string | null;
  /**
   * tax_country
   */
  tax_country?: string | null;
  /**
   * fee
   */
  fee: number;
  /**
   * exchange_rate
   */
  exchange_rate?: number;
}
/**
 * An event created by Pago when an order is refunded.
 */
interface BalanceRefundEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "balance.refund";
  /**
   * metadata
   */
  metadata: BalanceRefundMetadata;
}
/**
 * BalanceRefundMetadata
 */
interface BalanceRefundMetadata {
  /**
   * transaction_id
   */
  transaction_id: string;
  /**
   * refund_id
   */
  refund_id: string;
  /**
   * order_id
   */
  order_id?: string;
  /**
   * order_created_at
   */
  order_created_at?: string;
  /**
   * product_id
   */
  product_id?: string;
  /**
   * subscription_id
   */
  subscription_id?: string;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * presentment_amount
   */
  presentment_amount: number;
  /**
   * presentment_currency
   */
  presentment_currency: string;
  /**
   * refundable_amount
   */
  refundable_amount?: number;
  /**
   * tax_amount
   */
  tax_amount: number;
  /**
   * tax_state
   */
  tax_state?: string | null;
  /**
   * tax_country
   */
  tax_country?: string | null;
  /**
   * fee
   */
  fee: number;
  /**
   * exchange_rate
   */
  exchange_rate?: number;
}
/**
 * An event created by Pago when a refund is reverted.
 */
interface BalanceRefundReversalEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "balance.refund_reversal";
  /**
   * metadata
   */
  metadata: BalanceRefundMetadata;
}
/**
 * A benefit of type `custom`.

Use it to grant any kind of benefit that doesn't fit in the other types.
 */
interface BenefitCustom {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "custom";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * visibility
   */
  visibility: BenefitVisibility;
  /**
   * properties
   */
  properties: BenefitCustomProperties;
  /**
   * visibility_configurable
   */
  visibility_configurable: boolean;
}
/**
 * Schema to create a benefit of type `custom`.
 */
interface BenefitCustomCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "custom";
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description: string;
  /**
   * The ID of the organization owning the benefit. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * The visibility of the benefit in the customer portal.
   */
  visibility?: BenefitVisibility | null;
  /**
   * properties
   */
  properties: BenefitCustomCreateProperties;
}
/**
 * Properties for creating a benefit of type `custom`.
 */
interface BenefitCustomCreateProperties {
  /**
   * note
   */
  note?: (string | null) | null;
}
/**
 * Properties for a benefit of type `custom`.
 */
interface BenefitCustomProperties {
  /**
   * note
   */
  note: (string | null) | null;
}
/**
 * BenefitCustomSubscriber
 */
interface BenefitCustomSubscriber {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "custom";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * organization
   */
  organization: BenefitSubscriberOrganization;
  /**
   * properties
   */
  properties: BenefitCustomSubscriberProperties;
}
/**
 * Properties available to subscribers for a benefit of type `custom`.
 */
interface BenefitCustomSubscriberProperties {
  /**
   * note
   */
  note: (string | null) | null;
}
/**
 * BenefitCustomUpdate
 */
interface BenefitCustomUpdate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description?: string | null;
  /**
   * The visibility of the benefit in the customer portal.
   */
  visibility?: BenefitVisibility | null;
  /**
   * type
   */
  type: "custom";
  /**
   * properties
   */
  properties?: BenefitCustomProperties | null;
}
/**
 * An event created by Pago when a benefit is cycled.
 */
interface BenefitCycledEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "benefit.cycled";
  /**
   * metadata
   */
  metadata: BenefitGrantMetadata;
}
/**
 * A benefit of type `discord`.

Use it to automatically invite your backers to a Discord server.
 */
interface BenefitDiscord {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "discord";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * visibility
   */
  visibility: BenefitVisibility;
  /**
   * properties
   */
  properties: BenefitDiscordProperties;
  /**
   * visibility_configurable
   */
  visibility_configurable: boolean;
}
/**
 * BenefitDiscordCreate
 */
interface BenefitDiscordCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "discord";
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description: string;
  /**
   * The ID of the organization owning the benefit. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * The visibility of the benefit in the customer portal.
   */
  visibility?: BenefitVisibility | null;
  /**
   * properties
   */
  properties: BenefitDiscordCreateProperties;
}
/**
 * Properties to create a benefit of type `discord`.
 */
interface BenefitDiscordCreateProperties {
  /**
   * guild_token
   */
  guild_token: string;
  /**
   * The ID of the Discord role to grant.
   */
  role_id: string;
  /**
   * Whether to kick the member from the Discord server on revocation.
   */
  kick_member: boolean;
}
/**
 * Properties for a benefit of type `discord`.
 */
interface BenefitDiscordProperties {
  /**
   * The ID of the Discord server.
   */
  guild_id: string;
  /**
   * The ID of the Discord role to grant.
   */
  role_id: string;
  /**
   * Whether to kick the member from the Discord server on revocation.
   */
  kick_member: boolean;
  /**
   * guild_token
   */
  guild_token: string;
}
/**
 * BenefitDiscordSubscriber
 */
interface BenefitDiscordSubscriber {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "discord";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * organization
   */
  organization: BenefitSubscriberOrganization;
  /**
   * properties
   */
  properties: BenefitDiscordSubscriberProperties;
}
/**
 * Properties available to subscribers for a benefit of type `discord`.
 */
interface BenefitDiscordSubscriberProperties {
  /**
   * The ID of the Discord server.
   */
  guild_id: string;
}
/**
 * BenefitDiscordUpdate
 */
interface BenefitDiscordUpdate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description?: string | null;
  /**
   * type
   */
  type: "discord";
  /**
   * properties
   */
  properties?: BenefitDiscordCreateProperties | null;
}
/**
 * BenefitDownloadables
 */
interface BenefitDownloadables {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "downloadables";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * visibility
   */
  visibility: BenefitVisibility;
  /**
   * properties
   */
  properties: BenefitDownloadablesProperties;
  /**
   * visibility_configurable
   */
  visibility_configurable: boolean;
}
/**
 * BenefitDownloadablesCreate
 */
interface BenefitDownloadablesCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "downloadables";
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description: string;
  /**
   * The ID of the organization owning the benefit. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * The visibility of the benefit in the customer portal.
   */
  visibility?: BenefitVisibility | null;
  /**
   * properties
   */
  properties: BenefitDownloadablesCreateProperties;
}
/**
 * BenefitDownloadablesCreateProperties
 */
interface BenefitDownloadablesCreateProperties {
  /**
   * archived
   */
  archived?: Record<string, boolean>;
  /**
   * files
   */
  files: string[];
}
/**
 * BenefitDownloadablesProperties
 */
interface BenefitDownloadablesProperties {
  /**
   * archived
   */
  archived: Record<string, boolean>;
  /**
   * files
   */
  files: string[];
}
/**
 * BenefitDownloadablesSubscriber
 */
interface BenefitDownloadablesSubscriber {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "downloadables";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * organization
   */
  organization: BenefitSubscriberOrganization;
  /**
   * properties
   */
  properties: BenefitDownloadablesSubscriberProperties;
}
/**
 * BenefitDownloadablesSubscriberProperties
 */
interface BenefitDownloadablesSubscriberProperties {
  /**
   * active_files
   */
  active_files: string[];
}
/**
 * BenefitDownloadablesUpdate
 */
interface BenefitDownloadablesUpdate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description?: string | null;
  /**
   * type
   */
  type: "downloadables";
  /**
   * properties
   */
  properties?: BenefitDownloadablesCreateProperties | null;
}
/**
 * A benefit of type `feature_flag`.

Use it to grant feature flags with key-value metadata
that can be queried via the API and webhooks.
 */
interface BenefitFeatureFlag {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "feature_flag";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * visibility
   */
  visibility: BenefitVisibility;
  /**
   * properties
   */
  properties: BenefitFeatureFlagProperties;
  /**
   * visibility_configurable
   */
  visibility_configurable: boolean;
}
/**
 * Schema to create a benefit of type `feature_flag`.
 */
interface BenefitFeatureFlagCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "feature_flag";
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description: string;
  /**
   * The ID of the organization owning the benefit. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * The visibility of the benefit in the customer portal.
   */
  visibility?: BenefitVisibility | null;
  /**
   * properties
   */
  properties: BenefitFeatureFlagCreateProperties;
}
/**
 * Properties for creating a benefit of type `feature_flag`.
 */
interface BenefitFeatureFlagCreateProperties extends Record<string, never> {}
/**
 * Properties for a benefit of type `feature_flag`.
 */
interface BenefitFeatureFlagProperties extends Record<string, never> {}
/**
 * BenefitFeatureFlagSubscriber
 */
interface BenefitFeatureFlagSubscriber {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "feature_flag";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * organization
   */
  organization: BenefitSubscriberOrganization;
  /**
   * properties
   */
  properties: BenefitFeatureFlagSubscriberProperties;
}
/**
 * Properties available to subscribers for a benefit of type `feature_flag`.
 */
interface BenefitFeatureFlagSubscriberProperties extends Record<string, never> {}
/**
 * BenefitFeatureFlagUpdate
 */
interface BenefitFeatureFlagUpdate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description?: string | null;
  /**
   * The visibility of the benefit in the customer portal.
   */
  visibility?: BenefitVisibility | null;
  /**
   * type
   */
  type: "feature_flag";
  /**
   * properties
   */
  properties?: BenefitFeatureFlagProperties | null;
}
/**
 * A benefit of type `github_repository`.

Use it to automatically invite your backers to a private GitHub repository.
 */
interface BenefitGitHubRepository {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "github_repository";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * visibility
   */
  visibility: BenefitVisibility;
  /**
   * properties
   */
  properties: BenefitGitHubRepositoryProperties;
  /**
   * visibility_configurable
   */
  visibility_configurable: boolean;
}
/**
 * BenefitGitHubRepositoryCreate
 */
interface BenefitGitHubRepositoryCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "github_repository";
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description: string;
  /**
   * The ID of the organization owning the benefit. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * The visibility of the benefit in the customer portal.
   */
  visibility?: BenefitVisibility | null;
  /**
   * properties
   */
  properties: BenefitGitHubRepositoryCreateProperties;
}
/**
 * Properties to create a benefit of type `github_repository`.
 */
interface BenefitGitHubRepositoryCreateProperties {
  /**
   * The owner of the repository.
   */
  repository_owner: string;
  /**
   * The name of the repository.
   */
  repository_name: string;
  /**
   * The permission level to grant. Read more about roles and their permissions on [GitHub documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role).
   */
  permission: Permission;
}
/**
 * Properties for a benefit of type `github_repository`.
 */
interface BenefitGitHubRepositoryProperties {
  /**
   * The owner of the repository.
   */
  repository_owner: string;
  /**
   * The name of the repository.
   */
  repository_name: string;
  /**
   * The permission level to grant. Read more about roles and their permissions on [GitHub documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role).
   */
  permission: Permission;
}
/**
 * BenefitGitHubRepositorySubscriber
 */
interface BenefitGitHubRepositorySubscriber {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "github_repository";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * organization
   */
  organization: BenefitSubscriberOrganization;
  /**
   * properties
   */
  properties: BenefitGitHubRepositorySubscriberProperties;
}
/**
 * Properties available to subscribers for a benefit of type `github_repository`.
 */
interface BenefitGitHubRepositorySubscriberProperties {
  /**
   * The owner of the repository.
   */
  repository_owner: string;
  /**
   * The name of the repository.
   */
  repository_name: string;
}
/**
 * BenefitGitHubRepositoryUpdate
 */
interface BenefitGitHubRepositoryUpdate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description?: string | null;
  /**
   * type
   */
  type: "github_repository";
  /**
   * properties
   */
  properties?: BenefitGitHubRepositoryCreateProperties | null;
}
/**
 * BenefitGrant
 */
interface BenefitGrant {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the grant.
   */
  id: string;
  /**
   * The timestamp when the benefit was granted. If `None`, the benefit is not granted.
   */
  granted_at?: string | null;
  /**
   * Whether the benefit is granted.
   */
  is_granted: boolean;
  /**
   * The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.
   */
  revoked_at?: string | null;
  /**
   * Whether the benefit is revoked.
   */
  is_revoked: boolean;
  /**
   * The ID of the subscription that granted this benefit.
   */
  subscription_id: string | null;
  /**
   * The ID of the order that granted this benefit.
   */
  order_id: string | null;
  /**
   * The ID of the customer concerned by this grant.
   */
  customer_id: string;
  /**
   * The ID of the member concerned by this grant.
   */
  member_id?: string | null;
  /**
   * The ID of the benefit concerned by this grant.
   */
  benefit_id: string;
  /**
   * The error information if the benefit grant failed with an unrecoverable error.
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: Customer;
  /**
   * member
   */
  member?: Member | null;
  /**
   * benefit
   */
  benefit: Benefit;
  /**
   * properties
   */
  properties: BenefitGrantDiscordProperties | BenefitGrantGitHubRepositoryProperties | BenefitGrantDownloadablesProperties | BenefitGrantLicenseKeysProperties | BenefitGrantCustomProperties | BenefitGrantFeatureFlagProperties | BenefitGrantSlackSharedChannelProperties;
}
/**
 * BenefitGrantCustomProperties
 */
interface BenefitGrantCustomProperties extends Record<string, never> {}
/**
 * BenefitGrantCustomWebhook
 */
interface BenefitGrantCustomWebhook {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the grant.
   */
  id: string;
  /**
   * The timestamp when the benefit was granted. If `None`, the benefit is not granted.
   */
  granted_at?: string | null;
  /**
   * Whether the benefit is granted.
   */
  is_granted: boolean;
  /**
   * The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.
   */
  revoked_at?: string | null;
  /**
   * Whether the benefit is revoked.
   */
  is_revoked: boolean;
  /**
   * The ID of the subscription that granted this benefit.
   */
  subscription_id: string | null;
  /**
   * The ID of the order that granted this benefit.
   */
  order_id: string | null;
  /**
   * The ID of the customer concerned by this grant.
   */
  customer_id: string;
  /**
   * The ID of the member concerned by this grant.
   */
  member_id?: string | null;
  /**
   * The ID of the benefit concerned by this grant.
   */
  benefit_id: string;
  /**
   * The error information if the benefit grant failed with an unrecoverable error.
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: Customer;
  /**
   * member
   */
  member?: Member | null;
  /**
   * benefit
   */
  benefit: BenefitCustom;
  /**
   * properties
   */
  properties: BenefitGrantCustomProperties;
  /**
   * previous_properties
   */
  previous_properties?: BenefitGrantCustomProperties | null;
}
/**
 * BenefitGrantDiscordProperties
 */
interface BenefitGrantDiscordProperties {
  /**
   * account_id
   */
  account_id?: string | null;
  /**
   * guild_id
   */
  guild_id?: string;
  /**
   * role_id
   */
  role_id?: string;
  /**
   * granted_account_id
   */
  granted_account_id?: string;
}
/**
 * BenefitGrantDiscordWebhook
 */
interface BenefitGrantDiscordWebhook {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the grant.
   */
  id: string;
  /**
   * The timestamp when the benefit was granted. If `None`, the benefit is not granted.
   */
  granted_at?: string | null;
  /**
   * Whether the benefit is granted.
   */
  is_granted: boolean;
  /**
   * The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.
   */
  revoked_at?: string | null;
  /**
   * Whether the benefit is revoked.
   */
  is_revoked: boolean;
  /**
   * The ID of the subscription that granted this benefit.
   */
  subscription_id: string | null;
  /**
   * The ID of the order that granted this benefit.
   */
  order_id: string | null;
  /**
   * The ID of the customer concerned by this grant.
   */
  customer_id: string;
  /**
   * The ID of the member concerned by this grant.
   */
  member_id?: string | null;
  /**
   * The ID of the benefit concerned by this grant.
   */
  benefit_id: string;
  /**
   * The error information if the benefit grant failed with an unrecoverable error.
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: Customer;
  /**
   * member
   */
  member?: Member | null;
  /**
   * benefit
   */
  benefit: BenefitDiscord;
  /**
   * properties
   */
  properties: BenefitGrantDiscordProperties;
  /**
   * previous_properties
   */
  previous_properties?: BenefitGrantDiscordProperties | null;
}
/**
 * BenefitGrantDownloadablesProperties
 */
interface BenefitGrantDownloadablesProperties {
  /**
   * files
   */
  files?: string[];
}
/**
 * BenefitGrantDownloadablesWebhook
 */
interface BenefitGrantDownloadablesWebhook {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the grant.
   */
  id: string;
  /**
   * The timestamp when the benefit was granted. If `None`, the benefit is not granted.
   */
  granted_at?: string | null;
  /**
   * Whether the benefit is granted.
   */
  is_granted: boolean;
  /**
   * The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.
   */
  revoked_at?: string | null;
  /**
   * Whether the benefit is revoked.
   */
  is_revoked: boolean;
  /**
   * The ID of the subscription that granted this benefit.
   */
  subscription_id: string | null;
  /**
   * The ID of the order that granted this benefit.
   */
  order_id: string | null;
  /**
   * The ID of the customer concerned by this grant.
   */
  customer_id: string;
  /**
   * The ID of the member concerned by this grant.
   */
  member_id?: string | null;
  /**
   * The ID of the benefit concerned by this grant.
   */
  benefit_id: string;
  /**
   * The error information if the benefit grant failed with an unrecoverable error.
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: Customer;
  /**
   * member
   */
  member?: Member | null;
  /**
   * benefit
   */
  benefit: BenefitDownloadables;
  /**
   * properties
   */
  properties: BenefitGrantDownloadablesProperties;
  /**
   * previous_properties
   */
  previous_properties?: BenefitGrantDownloadablesProperties | null;
}
/**
 * BenefitGrantError
 */
interface BenefitGrantError {
  /**
   * message
   */
  message: string;
  /**
   * type
   */
  type: string;
  /**
   * timestamp
   */
  timestamp: string;
}
/**
 * BenefitGrantFeatureFlagProperties
 */
interface BenefitGrantFeatureFlagProperties extends Record<string, never> {}
/**
 * BenefitGrantFeatureFlagWebhook
 */
interface BenefitGrantFeatureFlagWebhook {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the grant.
   */
  id: string;
  /**
   * The timestamp when the benefit was granted. If `None`, the benefit is not granted.
   */
  granted_at?: string | null;
  /**
   * Whether the benefit is granted.
   */
  is_granted: boolean;
  /**
   * The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.
   */
  revoked_at?: string | null;
  /**
   * Whether the benefit is revoked.
   */
  is_revoked: boolean;
  /**
   * The ID of the subscription that granted this benefit.
   */
  subscription_id: string | null;
  /**
   * The ID of the order that granted this benefit.
   */
  order_id: string | null;
  /**
   * The ID of the customer concerned by this grant.
   */
  customer_id: string;
  /**
   * The ID of the member concerned by this grant.
   */
  member_id?: string | null;
  /**
   * The ID of the benefit concerned by this grant.
   */
  benefit_id: string;
  /**
   * The error information if the benefit grant failed with an unrecoverable error.
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: Customer;
  /**
   * member
   */
  member?: Member | null;
  /**
   * benefit
   */
  benefit: BenefitFeatureFlag;
  /**
   * properties
   */
  properties: BenefitGrantFeatureFlagProperties;
  /**
   * previous_properties
   */
  previous_properties?: BenefitGrantFeatureFlagProperties | null;
}
/**
 * BenefitGrantGitHubRepositoryProperties
 */
interface BenefitGrantGitHubRepositoryProperties {
  /**
   * account_id
   */
  account_id?: string | null;
  /**
   * repository_owner
   */
  repository_owner?: string;
  /**
   * repository_name
   */
  repository_name?: string;
  /**
   * permission
   */
  permission?: Permission;
  /**
   * granted_account_id
   */
  granted_account_id?: string;
}
/**
 * BenefitGrantGitHubRepositoryWebhook
 */
interface BenefitGrantGitHubRepositoryWebhook {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the grant.
   */
  id: string;
  /**
   * The timestamp when the benefit was granted. If `None`, the benefit is not granted.
   */
  granted_at?: string | null;
  /**
   * Whether the benefit is granted.
   */
  is_granted: boolean;
  /**
   * The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.
   */
  revoked_at?: string | null;
  /**
   * Whether the benefit is revoked.
   */
  is_revoked: boolean;
  /**
   * The ID of the subscription that granted this benefit.
   */
  subscription_id: string | null;
  /**
   * The ID of the order that granted this benefit.
   */
  order_id: string | null;
  /**
   * The ID of the customer concerned by this grant.
   */
  customer_id: string;
  /**
   * The ID of the member concerned by this grant.
   */
  member_id?: string | null;
  /**
   * The ID of the benefit concerned by this grant.
   */
  benefit_id: string;
  /**
   * The error information if the benefit grant failed with an unrecoverable error.
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: Customer;
  /**
   * member
   */
  member?: Member | null;
  /**
   * benefit
   */
  benefit: BenefitGitHubRepository;
  /**
   * properties
   */
  properties: BenefitGrantGitHubRepositoryProperties;
  /**
   * previous_properties
   */
  previous_properties?: BenefitGrantGitHubRepositoryProperties | null;
}
/**
 * BenefitGrantLicenseKeysProperties
 */
interface BenefitGrantLicenseKeysProperties {
  /**
   * user_provided_key
   */
  user_provided_key?: string;
  /**
   * license_key_id
   */
  license_key_id?: string;
  /**
   * display_key
   */
  display_key?: string;
}
/**
 * BenefitGrantLicenseKeysWebhook
 */
interface BenefitGrantLicenseKeysWebhook {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the grant.
   */
  id: string;
  /**
   * The timestamp when the benefit was granted. If `None`, the benefit is not granted.
   */
  granted_at?: string | null;
  /**
   * Whether the benefit is granted.
   */
  is_granted: boolean;
  /**
   * The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.
   */
  revoked_at?: string | null;
  /**
   * Whether the benefit is revoked.
   */
  is_revoked: boolean;
  /**
   * The ID of the subscription that granted this benefit.
   */
  subscription_id: string | null;
  /**
   * The ID of the order that granted this benefit.
   */
  order_id: string | null;
  /**
   * The ID of the customer concerned by this grant.
   */
  customer_id: string;
  /**
   * The ID of the member concerned by this grant.
   */
  member_id?: string | null;
  /**
   * The ID of the benefit concerned by this grant.
   */
  benefit_id: string;
  /**
   * The error information if the benefit grant failed with an unrecoverable error.
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: Customer;
  /**
   * member
   */
  member?: Member | null;
  /**
   * benefit
   */
  benefit: BenefitLicenseKeys;
  /**
   * properties
   */
  properties: BenefitGrantLicenseKeysProperties;
  /**
   * previous_properties
   */
  previous_properties?: BenefitGrantLicenseKeysProperties | null;
}
/**
 * BenefitGrantMetadata
 */
interface BenefitGrantMetadata {
  /**
   * benefit_id
   */
  benefit_id: string;
  /**
   * benefit_grant_id
   */
  benefit_grant_id: string;
  /**
   * benefit_type
   */
  benefit_type: BenefitType;
  /**
   * member_id
   */
  member_id?: string;
}
/**
 * BenefitGrantMeterCreditProperties
 */
interface BenefitGrantMeterCreditProperties {
  /**
   * last_credited_meter_id
   */
  last_credited_meter_id?: string;
  /**
   * last_credited_units
   */
  last_credited_units?: number;
  /**
   * last_credited_at
   */
  last_credited_at?: string;
}
/**
 * BenefitGrantMeterCreditWebhook
 */
interface BenefitGrantMeterCreditWebhook {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the grant.
   */
  id: string;
  /**
   * The timestamp when the benefit was granted. If `None`, the benefit is not granted.
   */
  granted_at?: string | null;
  /**
   * Whether the benefit is granted.
   */
  is_granted: boolean;
  /**
   * The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.
   */
  revoked_at?: string | null;
  /**
   * Whether the benefit is revoked.
   */
  is_revoked: boolean;
  /**
   * The ID of the subscription that granted this benefit.
   */
  subscription_id: string | null;
  /**
   * The ID of the order that granted this benefit.
   */
  order_id: string | null;
  /**
   * The ID of the customer concerned by this grant.
   */
  customer_id: string;
  /**
   * The ID of the member concerned by this grant.
   */
  member_id?: string | null;
  /**
   * The ID of the benefit concerned by this grant.
   */
  benefit_id: string;
  /**
   * The error information if the benefit grant failed with an unrecoverable error.
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: Customer;
  /**
   * member
   */
  member?: Member | null;
  /**
   * benefit
   */
  benefit: BenefitMeterCredit;
  /**
   * properties
   */
  properties: BenefitGrantMeterCreditProperties;
  /**
   * previous_properties
   */
  previous_properties?: BenefitGrantMeterCreditProperties | null;
}
/**
 * BenefitGrantSlackSharedChannelProperties
 */
interface BenefitGrantSlackSharedChannelProperties {
  /**
   * invited_email
   */
  invited_email?: string;
  /**
   * channel_id
   */
  channel_id?: string;
  /**
   * channel_name
   */
  channel_name?: string;
  /**
   * invite_id
   */
  invite_id?: string;
  /**
   * invite_url
   */
  invite_url?: string;
  /**
   * connected_team_id
   */
  connected_team_id?: string;
}
/**
 * BenefitGrantSlackSharedChannelWebhook
 */
interface BenefitGrantSlackSharedChannelWebhook {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the grant.
   */
  id: string;
  /**
   * The timestamp when the benefit was granted. If `None`, the benefit is not granted.
   */
  granted_at?: string | null;
  /**
   * Whether the benefit is granted.
   */
  is_granted: boolean;
  /**
   * The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.
   */
  revoked_at?: string | null;
  /**
   * Whether the benefit is revoked.
   */
  is_revoked: boolean;
  /**
   * The ID of the subscription that granted this benefit.
   */
  subscription_id: string | null;
  /**
   * The ID of the order that granted this benefit.
   */
  order_id: string | null;
  /**
   * The ID of the customer concerned by this grant.
   */
  customer_id: string;
  /**
   * The ID of the member concerned by this grant.
   */
  member_id?: string | null;
  /**
   * The ID of the benefit concerned by this grant.
   */
  benefit_id: string;
  /**
   * The error information if the benefit grant failed with an unrecoverable error.
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: Customer;
  /**
   * member
   */
  member?: Member | null;
  /**
   * benefit
   */
  benefit: BenefitSlackSharedChannel;
  /**
   * properties
   */
  properties: BenefitGrantSlackSharedChannelProperties;
  /**
   * previous_properties
   */
  previous_properties?: BenefitGrantSlackSharedChannelProperties | null;
}
/**
 * An event created by Pago when a benefit is granted to a customer.
 */
interface BenefitGrantedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "benefit.granted";
  /**
   * metadata
   */
  metadata: BenefitGrantMetadata;
}
/**
 * BenefitLicenseKeyActivationCreateProperties
 */
interface BenefitLicenseKeyActivationCreateProperties {
  /**
   * limit
   */
  limit: number;
  /**
   * enable_customer_admin
   */
  enable_customer_admin: boolean;
}
/**
 * BenefitLicenseKeyActivationProperties
 */
interface BenefitLicenseKeyActivationProperties {
  /**
   * limit
   */
  limit: number;
  /**
   * enable_customer_admin
   */
  enable_customer_admin: boolean;
}
/**
 * BenefitLicenseKeyExpirationProperties
 */
interface BenefitLicenseKeyExpirationProperties {
  /**
   * ttl
   */
  ttl: number;
  /**
   * timeframe
   */
  timeframe: Timeframe;
}
/**
 * BenefitLicenseKeys
 */
interface BenefitLicenseKeys {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "license_keys";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * visibility
   */
  visibility: BenefitVisibility;
  /**
   * properties
   */
  properties: BenefitLicenseKeysProperties;
  /**
   * visibility_configurable
   */
  visibility_configurable: boolean;
}
/**
 * BenefitLicenseKeysCreate
 */
interface BenefitLicenseKeysCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "license_keys";
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description: string;
  /**
   * The ID of the organization owning the benefit. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * The visibility of the benefit in the customer portal.
   */
  visibility?: BenefitVisibility | null;
  /**
   * properties
   */
  properties: BenefitLicenseKeysCreateProperties;
}
/**
 * BenefitLicenseKeysCreateProperties
 */
interface BenefitLicenseKeysCreateProperties {
  /**
   * prefix
   */
  prefix?: string | null;
  /**
   * expires
   */
  expires?: BenefitLicenseKeyExpirationProperties | null;
  /**
   * activations
   */
  activations?: BenefitLicenseKeyActivationCreateProperties | null;
  /**
   * limit_usage
   */
  limit_usage?: number | null;
}
/**
 * BenefitLicenseKeysProperties
 */
interface BenefitLicenseKeysProperties {
  /**
   * prefix
   */
  prefix: string | null;
  /**
   * expires
   */
  expires: BenefitLicenseKeyExpirationProperties | null;
  /**
   * activations
   */
  activations: BenefitLicenseKeyActivationProperties | null;
  /**
   * limit_usage
   */
  limit_usage: number | null;
}
/**
 * BenefitLicenseKeysSubscriber
 */
interface BenefitLicenseKeysSubscriber {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "license_keys";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * organization
   */
  organization: BenefitSubscriberOrganization;
  /**
   * properties
   */
  properties: BenefitLicenseKeysSubscriberProperties;
}
/**
 * BenefitLicenseKeysSubscriberProperties
 */
interface BenefitLicenseKeysSubscriberProperties {
  /**
   * prefix
   */
  prefix: string | null;
  /**
   * expires
   */
  expires: BenefitLicenseKeyExpirationProperties | null;
  /**
   * activations
   */
  activations: BenefitLicenseKeyActivationProperties | null;
  /**
   * limit_usage
   */
  limit_usage: number | null;
}
/**
 * BenefitLicenseKeysUpdate
 */
interface BenefitLicenseKeysUpdate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description?: string | null;
  /**
   * The visibility of the benefit in the customer portal.
   */
  visibility?: BenefitVisibility | null;
  /**
   * type
   */
  type: "license_keys";
  /**
   * properties
   */
  properties?: BenefitLicenseKeysCreateProperties | null;
}
/**
 * A benefit of type `meter_unit`.

Use it to grant a number of units on a specific meter.
 */
interface BenefitMeterCredit {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "meter_credit";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * visibility
   */
  visibility: BenefitVisibility;
  /**
   * properties
   */
  properties: BenefitMeterCreditProperties;
  /**
   * visibility_configurable
   */
  visibility_configurable: boolean;
}
/**
 * Schema to create a benefit of type `meter_unit`.
 */
interface BenefitMeterCreditCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "meter_credit";
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description: string;
  /**
   * The ID of the organization owning the benefit. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * The visibility of the benefit in the customer portal.
   */
  visibility?: BenefitVisibility | null;
  /**
   * properties
   */
  properties: BenefitMeterCreditCreateProperties;
}
/**
 * Properties for creating a benefit of type `meter_unit`.
 */
interface BenefitMeterCreditCreateProperties {
  /**
   * units
   */
  units: number;
  /**
   * rollover
   */
  rollover: boolean;
  /**
   * meter_id
   */
  meter_id: string;
}
/**
 * Properties for a benefit of type `meter_unit`.
 */
interface BenefitMeterCreditProperties {
  /**
   * units
   */
  units: number;
  /**
   * rollover
   */
  rollover: boolean;
  /**
   * meter_id
   */
  meter_id: string;
}
/**
 * BenefitMeterCreditSubscriber
 */
interface BenefitMeterCreditSubscriber {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "meter_credit";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * organization
   */
  organization: BenefitSubscriberOrganization;
  /**
   * properties
   */
  properties: BenefitMeterCreditSubscriberProperties;
}
/**
 * Properties available to subscribers for a benefit of type `meter_unit`.
 */
interface BenefitMeterCreditSubscriberProperties {
  /**
   * units
   */
  units: number;
  /**
   * rollover
   */
  rollover: boolean;
  /**
   * meter_id
   */
  meter_id: string;
}
/**
 * BenefitMeterCreditUpdate
 */
interface BenefitMeterCreditUpdate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description?: string | null;
  /**
   * The visibility of the benefit in the customer portal.
   */
  visibility?: BenefitVisibility | null;
  /**
   * type
   */
  type: "meter_credit";
  /**
   * properties
   */
  properties?: BenefitMeterCreditCreateProperties | null;
}
/**
 * BenefitPublic
 */
interface BenefitPublic {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: BenefitType;
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
}
/**
 * An event created by Pago when a benefit is revoked from a customer.
 */
interface BenefitRevokedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "benefit.revoked";
  /**
   * metadata
   */
  metadata: BenefitGrantMetadata;
}
/**
 * BenefitSlackSharedChannel
 */
interface BenefitSlackSharedChannel {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "slack_shared_channel";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * visibility
   */
  visibility: BenefitVisibility;
  /**
   * properties
   */
  properties: BenefitSlackSharedChannelProperties;
  /**
   * visibility_configurable
   */
  visibility_configurable: boolean;
}
/**
 * BenefitSlackSharedChannelCreate
 */
interface BenefitSlackSharedChannelCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "slack_shared_channel";
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description: string;
  /**
   * The ID of the organization owning the benefit. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * The visibility of the benefit in the customer portal.
   */
  visibility?: BenefitVisibility | null;
  /**
   * properties
   */
  properties: BenefitSlackSharedChannelCreateProperties;
}
/**
 * BenefitSlackSharedChannelCreateProperties
 */
interface BenefitSlackSharedChannelCreateProperties {
  /**
   * Pago Slack integration to use for this benefit.
   */
  slack_integration_id: string;
  /**
   * channel_name_template
   */
  channel_name_template: string;
  /**
   * private
   */
  private?: boolean;
  /**
   * welcome_message
   */
  welcome_message?: string | null;
  /**
   * archive_on_revoke
   */
  archive_on_revoke?: boolean;
  /**
   * team_invitees
   */
  team_invitees?: string[];
}
/**
 * BenefitSlackSharedChannelProperties
 */
interface BenefitSlackSharedChannelProperties {
  /**
   * Pago Slack integration linked to this benefit.
   */
  slack_integration_id: string;
  /**
   * Template for the channel name. Supports placeholders: {customer_name}, {customer_email_local}, and {metadata.<key>} for any value stored in customer user metadata.
   */
  channel_name_template: string;
  /**
   * Create the channel as private (recommended).
   */
  private?: boolean;
  /**
   * Optional message posted to the channel right after creation.
   */
  welcome_message?: string | null;
  /**
   * Archive the channel when the benefit is revoked.
   */
  archive_on_revoke?: boolean;
  /**
   * Slack user IDs from the merchant workspace to invite to every channel created for this benefit.
   */
  team_invitees?: string[];
}
/**
 * BenefitSlackSharedChannelSubscriber
 */
interface BenefitSlackSharedChannelSubscriber {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * type
   */
  type: "slack_shared_channel";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * Whether the benefit is deleted.
   */
  is_deleted: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organization_id: string;
  /**
   * organization
   */
  organization: BenefitSubscriberOrganization;
  /**
   * properties
   */
  properties: BenefitSlackSharedChannelSubscriberProperties;
}
/**
 * BenefitSlackSharedChannelSubscriberProperties
 */
interface BenefitSlackSharedChannelSubscriberProperties extends Record<string, never> {}
/**
 * BenefitSlackSharedChannelUpdate
 */
interface BenefitSlackSharedChannelUpdate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description?: string | null;
  /**
   * type
   */
  type: "slack_shared_channel";
  /**
   * properties
   */
  properties?: BenefitSlackSharedChannelCreateProperties | null;
}
/**
 * BenefitSubscriberOrganization
 */
interface BenefitSubscriberOrganization {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Organization name shown in checkout, customer portal, emails etc.
   */
  name: string;
  /**
   * Unique organization slug in checkout, customer portal and credit card statements.
   */
  slug: string;
  /**
   * Avatar URL shown in checkout, customer portal, emails etc.
   */
  avatar_url: string | null;
  /**
   * proration_behavior
   */
  proration_behavior: SubscriptionProrationBehavior;
  /**
   * Whether customers can update their subscriptions from the customer portal.
   */
  allow_customer_updates: boolean;
}
/**
 * An event created by Pago when a benefit is updated.
 */
interface BenefitUpdatedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "benefit.updated";
  /**
   * metadata
   */
  metadata: BenefitGrantMetadata;
}
/**
 * CannotCreateOrganizationError
 */
interface CannotCreateOrganizationError$1 {
  /**
   * error
   */
  error: "CannotCreateOrganizationError";
  /**
   * detail
   */
  detail: string;
}
/**
 * Schema of a payment with a card payment method.
 */
interface CardPayment {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * processor
   */
  processor: PaymentProcessor;
  /**
   * status
   */
  status: PaymentStatus;
  /**
   * The payment amount in cents.
   */
  amount: number;
  /**
   * The payment currency. Currently, only `usd` is supported.
   */
  currency: string;
  /**
   * The payment method used.
   */
  method: "card";
  /**
   * What initiated this payment attempt, e.g. initial purchase, subscription renewal, or an automated dunning retry.
   */
  trigger: PaymentTrigger | null;
  /**
   * Error code, if the payment was declined.
   */
  decline_reason: string | null;
  /**
   * Human-readable error message, if the payment was declined.
   */
  decline_message: string | null;
  /**
   * The ID of the organization that owns the payment.
   */
  organization_id: string;
  /**
   * The ID of the checkout session associated with this payment.
   */
  checkout_id: string | null;
  /**
   * The ID of the order associated with this payment.
   */
  order_id: string | null;
  /**
   * Additional metadata from the payment processor for internal use.
   */
  processor_metadata?: Record<string, unknown>;
  /**
   * method_metadata
   */
  method_metadata: CardPaymentMetadata;
}
/**
 * Additional metadata for a card payment method.
 */
interface CardPaymentMetadata {
  /**
   * The brand of the card used for the payment.
   */
  brand: string;
  /**
   * The last 4 digits of the card number.
   */
  last4: string;
}
/**
 * Checkout session data retrieved using an access token.
 */
interface Checkout {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * Key-value object storing custom field values.
   */
  custom_field_data?: Record<string, string | number | boolean | string | null>;
  /**
   * payment_processor
   */
  payment_processor: PaymentProcessor;
  /**
   * status
   */
  status: CheckoutStatus;
  /**
   * Client secret used to update and complete the checkout session from the client.
   */
  client_secret: string;
  /**
   * URL where the customer can access the checkout session.
   */
  url: string;
  /**
   * Expiration date and time of the checkout session.
   */
  expires_at: string;
  /**
   * URL where the customer will be redirected after a successful payment.
   */
  success_url: string;
  /**
   * When set, a back button will be shown in the checkout to return to this URL.
   */
  return_url: string | null;
  /**
   * When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page.
   */
  embed_origin: string | null;
  /**
   * Amount in cents, before discounts and taxes.
   */
  amount: number;
  /**
   * Predefined number of seats (works with seat-based pricing only)
   */
  seats?: number | null;
  /**
   * Minimum number of seats (works with seat-based pricing only)
   */
  min_seats?: number | null;
  /**
   * Maximum number of seats (works with seat-based pricing only)
   */
  max_seats?: number | null;
  /**
   * Discount amount in cents.
   */
  discount_amount: number;
  /**
   * Amount in cents, after discounts but before taxes.
   */
  net_amount: number;
  /**
   * Sales tax amount in cents. If `null`, it means there is no enough information yet to calculate it.
   */
  tax_amount: number | null;
  /**
   * Tax behavior of the checkout. `inclusive` means the price includes tax, `exclusive` means tax is added on top. If `null`, tax is not yet calculated.
   */
  tax_behavior: TaxBehavior | null;
  /**
   * Amount in cents, after discounts and taxes.
   */
  total_amount: number;
  /**
   * Currency code of the checkout session.
   */
  currency: string;
  /**
   * Whether to enable the trial period for the checkout session. If `false`, the trial period will be disabled, even if the selected product has a trial configured.
   */
  allow_trial: boolean | null;
  /**
   * Interval unit of the trial period, if any. This value is either set from the checkout, if `trial_interval` is set, or from the selected product.
   */
  active_trial_interval: TrialInterval | null;
  /**
   * Number of interval units of the trial period, if any. This value is either set from the checkout, if `trial_interval_count` is set, or from the selected product.
   */
  active_trial_interval_count: number | null;
  /**
   * End date and time of the trial period, if any.
   */
  trial_end: string | null;
  /**
   * ID of the organization owning the checkout session.
   */
  organization_id: string;
  /**
   * ID of the product to checkout.
   */
  product_id: string | null;
  /**
   * ID of the product price to checkout.
   */
  product_price_id: string | null;
  /**
   * ID of the discount applied to the checkout.
   */
  discount_id: string | null;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allow_discount_codes: boolean;
  /**
   * Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. If you preset the billing address, this setting will be automatically set to `true`.
   */
  require_billing_address: boolean;
  /**
   * Whether the discount is applicable to the checkout. Typically, free and custom prices are not discountable.
   */
  is_discount_applicable: boolean;
  /**
   * Whether the product price is free, regardless of discounts.
   */
  is_free_product_price: boolean;
  /**
   * Whether the checkout requires payment, e.g. in case of free products or discounts that cover the total amount.
   */
  is_payment_required: boolean;
  /**
   * Whether the checkout requires setting up a payment method, regardless of the amount, e.g. subscriptions that have first free cycles.
   */
  is_payment_setup_required: boolean;
  /**
   * Whether the checkout requires a payment form, whether because of a payment or payment method setup.
   */
  is_payment_form_required: boolean;
  /**
   * customer_id
   */
  customer_id: string | null;
  /**
   * Whether the customer is a business or an individual. If `true`, the customer will be required to fill their full billing address and billing name.
   */
  is_business_customer: boolean;
  /**
   * Name of the customer.
   */
  customer_name: string | null;
  /**
   * Email address of the customer.
   */
  customer_email: string | null;
  /**
   * customer_ip_address
   */
  customer_ip_address: string | null;
  /**
   * customer_billing_name
   */
  customer_billing_name: string | null;
  /**
   * customer_billing_address
   */
  customer_billing_address: Address | null;
  /**
   * customer_tax_id
   */
  customer_tax_id: string | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * payment_processor_metadata
   */
  payment_processor_metadata: Record<string, string>;
  /**
   * billing_address_fields
   */
  billing_address_fields: CheckoutBillingAddressFields;
  /**
   * The interval unit for the trial period.
   */
  trial_interval: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count: number | null;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * ID of the customer in your system. If a matching customer exists on Pago, the resulting order will be linked to this customer. Otherwise, a new customer will be created with this external ID set.
   */
  external_customer_id: string | null;
  /**
   * List of products available to select.
   */
  products: CheckoutProduct[];
  /**
   * Product selected to checkout.
   */
  product: CheckoutProduct | null;
  /**
   * Price of the selected product.
   */
  product_price: (LegacyRecurringProductPrice | ProductPrice) | null;
  /**
   * Mapping of product IDs to their list of prices.
   */
  prices: Record<string, (LegacyRecurringProductPrice | ProductPrice)[]> | null;
  /**
   * discount
   */
  discount: (CheckoutDiscountFixedOnceForeverDuration | CheckoutDiscountFixedRepeatDuration | CheckoutDiscountPercentageOnceForeverDuration | CheckoutDiscountPercentageRepeatDuration) | null;
  /**
   * subscription_id
   */
  subscription_id: string | null;
  /**
   * attached_custom_fields
   */
  attached_custom_fields: AttachedCustomField[] | null;
  /**
   * customer_metadata
   */
  customer_metadata: Record<string, string | number | boolean>;
}
/**
 * CheckoutBillingAddressFields
 */
interface CheckoutBillingAddressFields {
  /**
   * country
   */
  country: BillingAddressFieldMode;
  /**
   * state
   */
  state: BillingAddressFieldMode;
  /**
   * city
   */
  city: BillingAddressFieldMode;
  /**
   * postal_code
   */
  postal_code: BillingAddressFieldMode;
  /**
   * line1
   */
  line1: BillingAddressFieldMode;
  /**
   * line2
   */
  line2: BillingAddressFieldMode;
}
/**
 * Confirm a checkout session using a Stripe confirmation token.
 */
interface CheckoutConfirmStripe {
  /**
   * Key-value object storing custom field values.
   */
  custom_field_data?: Record<string, string | number | boolean | string | null>;
  /**
   * ID of the product to checkout. Must be present in the checkout's product list.
   */
  product_id?: string | null;
  /**
   * ID of the product price to checkout. Must correspond to a price present in the checkout's product list.
   */
  product_price_id?: string | null;
  /**
   * amount
   */
  amount?: number | null;
  /**
   * Number of seats for seat-based pricing.
   */
  seats?: number | null;
  /**
   * is_business_customer
   */
  is_business_customer?: boolean | null;
  /**
   * customer_name
   */
  customer_name?: string | null;
  /**
   * customer_email
   */
  customer_email?: string | null;
  /**
   * customer_billing_name
   */
  customer_billing_name?: string | null;
  /**
   * customer_billing_address
   */
  customer_billing_address?: AddressInput | null;
  /**
   * customer_tax_id
   */
  customer_tax_id?: string | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * Discount code to apply to the checkout.
   */
  discount_code?: string | null;
  /**
   * Disable the trial period for the checkout session. It's mainly useful when the trial is blocked because the customer already redeemed one.
   */
  allow_trial?: false | null;
  /**
   * ID of the Stripe confirmation token. Required for fixed prices and custom prices.
   */
  confirmation_token_id?: string | null;
}
/**
 * Create a new checkout session from a list of products.
Customers will be able to switch between those products.

Metadata set on the checkout will be copied
to the resulting order and/or subscription.
 */
interface CheckoutCreate {
  /**
   * The interval unit for the trial period.
   */
  trial_interval?: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count?: number | null;
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * Key-value object storing custom field values.
   */
  custom_field_data?: Record<string, string | number | boolean | string | null>;
  /**
   * ID of the discount to apply to the checkout.
   */
  discount_id?: string | null;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allow_discount_codes?: boolean;
  /**
   * Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. If you preset the billing address, this setting will be automatically set to `true`.
   */
  require_billing_address?: boolean;
  /**
   * amount
   */
  amount?: number | null;
  /**
   * Predefined number of seats (works with seat-based pricing only)
   */
  seats?: number | null;
  /**
   * Minimum number of seats (works with seat-based pricing only)
   */
  min_seats?: number | null;
  /**
   * Maximum number of seats (works with seat-based pricing only)
   */
  max_seats?: number | null;
  /**
   * Whether to enable the trial period for the checkout session. If `false`, the trial period will be disabled, even if the selected product has a trial configured.
   */
  allow_trial?: boolean;
  /**
   * ID of an existing customer in the organization. The customer data will be pre-filled in the checkout form. The resulting order will be linked to this customer.
   */
  customer_id?: string | null;
  /**
   * Whether the customer is a business or an individual. If `true`, the customer will be required to fill their full billing address and billing name.
   */
  is_business_customer?: boolean;
  /**
   * ID of the customer in your system. If a matching customer exists on Pago, the resulting order will be linked to this customer. Otherwise, a new customer will be created with this external ID set.
   */
  external_customer_id?: string | null;
  /**
   * customer_name
   */
  customer_name?: string | null;
  /**
   * customer_email
   */
  customer_email?: string | null;
  /**
   * customer_ip_address
   */
  customer_ip_address?: string | null;
  /**
   * customer_billing_name
   */
  customer_billing_name?: string | null;
  /**
   * customer_billing_address
   */
  customer_billing_address?: AddressInput | null;
  /**
   * customer_tax_id
   */
  customer_tax_id?: string | null;
  /**
     * Key-value object allowing you to store additional information that'll be copied to the created customer.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  customer_metadata?: Record<string, string | number | number | boolean>;
  /**
   * ID of a subscription to upgrade. It must be on a free pricing. If checkout is successful, metadata set on this checkout will be copied to the subscription, and existing keys will be overwritten.
   */
  subscription_id?: string | null;
  /**
   * URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id.
   */
  success_url?: string | null;
  /**
   * When set, a back button will be shown in the checkout to return to this URL.
   */
  return_url?: string | null;
  /**
   * If you plan to embed the checkout session, set this to the Origin of the embedding page. It'll allow the Pago iframe to communicate with the parent page.
   */
  embed_origin?: string | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * currency
   */
  currency?: PresentmentCurrency | null;
  /**
   * List of product IDs available to select at that checkout. The first one will be selected by default.
   */
  products: string[];
  /**
   * Optional mapping of product IDs to a list of ad-hoc prices to create for that product. If not set, catalog prices of the product will be used.
   */
  prices?: Record<string, (ProductPriceFixedCreate | ProductPriceCustomCreate | ProductPriceSeatBasedCreate | ProductPriceMeteredUnitCreate)[]> | null;
}
/**
 * An event created by Pago when a checkout is created.
 */
interface CheckoutCreatedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "checkout.created";
  /**
   * metadata
   */
  metadata: CheckoutCreatedMetadata;
}
/**
 * CheckoutCreatedMetadata
 */
interface CheckoutCreatedMetadata {
  /**
   * checkout_id
   */
  checkout_id: string;
  /**
   * checkout_status
   */
  checkout_status: string;
  /**
   * product_id
   */
  product_id?: string;
}
/**
 * Schema for a fixed amount discount that is applied once or forever.
 */
interface CheckoutDiscountFixedOnceForeverDuration {
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
   * type
   */
  type: DiscountType;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * Map of currency to fixed amount to discount from the total.
   */
  amounts: Record<string, number>;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * name
   */
  name: string;
  /**
   * code
   */
  code: string | null;
}
/**
 * Schema for a fixed amount discount that is applied on every invoice
for a certain number of months.
 */
interface CheckoutDiscountFixedRepeatDuration {
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
   * duration_in_months
   */
  duration_in_months: number;
  /**
   * type
   */
  type: DiscountType;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * Map of currency to fixed amount to discount from the total.
   */
  amounts: Record<string, number>;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * name
   */
  name: string;
  /**
   * code
   */
  code: string | null;
}
/**
 * Schema for a percentage discount that is applied once or forever.
 */
interface CheckoutDiscountPercentageOnceForeverDuration {
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
   * type
   */
  type: DiscountType;
  /**
   * Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount.
   */
  basis_points: number;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * name
   */
  name: string;
  /**
   * code
   */
  code: string | null;
}
/**
 * Schema for a percentage discount that is applied on every invoice
for a certain number of months.
 */
interface CheckoutDiscountPercentageRepeatDuration {
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
   * duration_in_months
   */
  duration_in_months: number;
  /**
   * type
   */
  type: DiscountType;
  /**
   * Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount.
   */
  basis_points: number;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * name
   */
  name: string;
  /**
   * code
   */
  code: string | null;
}
/**
 * Checkout link data.
 */
interface CheckoutLink {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The interval unit for the trial period.
   */
  trial_interval: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count: number | null;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * payment_processor
   */
  payment_processor: PaymentProcessor;
  /**
   * Client secret used to access the checkout link.
   */
  client_secret: string;
  /**
   * URL where the customer will be redirected after a successful payment.
   */
  success_url: string | null;
  /**
   * When set, a back button will be shown in the checkout to return to this URL.
   */
  return_url: string | null;
  /**
   * Optional label to distinguish links internally
   */
  label: string | null;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allow_discount_codes: boolean;
  /**
   * Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting.
   */
  require_billing_address: boolean;
  /**
   * ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.
   */
  discount_id: string | null;
  /**
   * Preconfigured number of seats for seat-based pricing. When set, checkout sessions created from this link are locked to this number of seats and the customer won't be able to change it. All products on the link must use seat-based pricing and allow this number of seats. If the products no longer accommodate this value when the link is opened, it'll be ignored.
   */
  seats: number | null;
  /**
   * The organization ID.
   */
  organization_id: string;
  /**
   * products
   */
  products: CheckoutLinkProduct[];
  /**
   * discount
   */
  discount: (DiscountFixedOnceForeverDurationBase | DiscountFixedRepeatDurationBase | DiscountPercentageOnceForeverDurationBase | DiscountPercentageRepeatDurationBase) | null;
  /**
   * url
   */
  url: string;
}
/**
 * Schema to create a new checkout link from a a single product.
 **Deprecated**: Use `CheckoutLinkCreateProducts` instead.
 */
interface CheckoutLinkCreateProduct {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The interval unit for the trial period.
   */
  trial_interval?: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count?: number | null;
  /**
   * Payment processor to use. Currently only Stripe is supported.
   */
  payment_processor: "stripe";
  /**
   * Optional label to distinguish links internally
   */
  label?: string | null;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allow_discount_codes?: boolean;
  /**
   * Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting.
   */
  require_billing_address?: boolean;
  /**
   * ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.
   */
  discount_id?: string | null;
  /**
   * Preconfigured number of seats for seat-based pricing. When set, checkout sessions created from this link are locked to this number of seats and the customer won't be able to change it. All products on the link must use seat-based pricing and allow this number of seats. If the products no longer accommodate this value when the link is opened, it'll be ignored.
   */
  seats?: number | null;
  /**
   * URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id.
   */
  success_url?: string | null;
  /**
   * When set, a back button will be shown in the checkout to return to this URL.
   */
  return_url?: string | null;
  /**
   * product_id
   */
  product_id: string;
}
/**
 * Schema to create a new checkout link from a a single product price.
 **Deprecated**: Use `CheckoutLinkCreateProducts` instead.
 */
interface CheckoutLinkCreateProductPrice {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The interval unit for the trial period.
   */
  trial_interval?: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count?: number | null;
  /**
   * Payment processor to use. Currently only Stripe is supported.
   */
  payment_processor: "stripe";
  /**
   * Optional label to distinguish links internally
   */
  label?: string | null;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allow_discount_codes?: boolean;
  /**
   * Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting.
   */
  require_billing_address?: boolean;
  /**
   * ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.
   */
  discount_id?: string | null;
  /**
   * Preconfigured number of seats for seat-based pricing. When set, checkout sessions created from this link are locked to this number of seats and the customer won't be able to change it. All products on the link must use seat-based pricing and allow this number of seats. If the products no longer accommodate this value when the link is opened, it'll be ignored.
   */
  seats?: number | null;
  /**
   * URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id.
   */
  success_url?: string | null;
  /**
   * When set, a back button will be shown in the checkout to return to this URL.
   */
  return_url?: string | null;
  /**
   * product_price_id
   */
  product_price_id: string;
}
/**
 * Schema to create a new checkout link.
 */
interface CheckoutLinkCreateProducts {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The interval unit for the trial period.
   */
  trial_interval?: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count?: number | null;
  /**
   * Payment processor to use. Currently only Stripe is supported.
   */
  payment_processor: "stripe";
  /**
   * Optional label to distinguish links internally
   */
  label?: string | null;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allow_discount_codes?: boolean;
  /**
   * Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting.
   */
  require_billing_address?: boolean;
  /**
   * ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.
   */
  discount_id?: string | null;
  /**
   * Preconfigured number of seats for seat-based pricing. When set, checkout sessions created from this link are locked to this number of seats and the customer won't be able to change it. All products on the link must use seat-based pricing and allow this number of seats. If the products no longer accommodate this value when the link is opened, it'll be ignored.
   */
  seats?: number | null;
  /**
   * URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id.
   */
  success_url?: string | null;
  /**
   * When set, a back button will be shown in the checkout to return to this URL.
   */
  return_url?: string | null;
  /**
   * List of products that will be available to select at checkout.
   */
  products: string[];
}
/**
 * Product data for a checkout link.
 */
interface CheckoutLinkProduct {
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The interval unit for the trial period.
   */
  trial_interval: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count: number | null;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * visibility
   */
  visibility: ProductVisibility;
  /**
   * The recurring interval of the product. If `None`, the product is a one-time purchase.
   */
  recurring_interval: RecurringInterval | null;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products.
   */
  recurring_interval_count: number | null;
  /**
   * The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval.
   */
  meter_interval: RecurringInterval | null;
  /**
   * Number of meter interval units. None when no meter cycle is set.
   */
  meter_interval_count: number | null;
  /**
   * Whether the product is a subscription.
   */
  is_recurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organization_id: string;
  /**
   * List of prices for this product.
   */
  prices: (LegacyRecurringProductPrice | ProductPrice)[];
  /**
   * List of benefits granted by the product.
   */
  benefits: BenefitPublic[];
  /**
   * List of medias associated to the product.
   */
  medias: ProductMediaFileRead[];
}
/**
 * Schema to update an existing checkout link.
 */
interface CheckoutLinkUpdate {
  /**
   * The interval unit for the trial period.
   */
  trial_interval?: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count?: number | null;
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * List of products that will be available to select at checkout.
   */
  products?: string[] | null;
  /**
   * label
   */
  label?: string | null;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allow_discount_codes?: boolean | null;
  /**
   * Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting.
   */
  require_billing_address?: boolean | null;
  /**
   * ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.
   */
  discount_id?: string | null;
  /**
   * Preconfigured number of seats for seat-based pricing. When set, checkout sessions created from this link are locked to this number of seats and the customer won't be able to change it. All products on the link must use seat-based pricing and allow this number of seats. If the products no longer accommodate this value when the link is opened, it'll be ignored.
   */
  seats?: number | null;
  /**
   * URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id.
   */
  success_url?: string | null;
  /**
   * When set, a back button will be shown in the checkout to return to this URL.
   */
  return_url?: string | null;
}
/**
 * CheckoutOrganization
 */
interface CheckoutOrganization {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Organization name shown in checkout, customer portal, emails etc.
   */
  name: string;
  /**
   * Unique organization slug in checkout, customer portal and credit card statements.
   */
  slug: string;
  /**
   * Avatar URL shown in checkout, customer portal, emails etc.
   */
  avatar_url: string | null;
  /**
   * proration_behavior
   */
  proration_behavior: SubscriptionProrationBehavior;
  /**
   * Whether customers can update their subscriptions from the customer portal.
   */
  allow_customer_updates: boolean;
}
/**
 * Product data for a checkout session.
 */
interface CheckoutProduct {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The interval unit for the trial period.
   */
  trial_interval: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count: number | null;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * visibility
   */
  visibility: ProductVisibility;
  /**
   * The recurring interval of the product. If `None`, the product is a one-time purchase.
   */
  recurring_interval: RecurringInterval | null;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products.
   */
  recurring_interval_count: number | null;
  /**
   * The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval.
   */
  meter_interval: RecurringInterval | null;
  /**
   * Number of meter interval units. None when no meter cycle is set.
   */
  meter_interval_count: number | null;
  /**
   * Whether the product is a subscription.
   */
  is_recurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organization_id: string;
  /**
   * List of prices for this product.
   */
  prices: (LegacyRecurringProductPrice | ProductPrice)[];
  /**
   * List of benefits granted by the product.
   */
  benefits: BenefitPublic[];
  /**
   * List of medias associated to the product.
   */
  medias: ProductMediaFileRead[];
}
/**
 * Checkout session data retrieved using the client secret.
 */
interface CheckoutPublic {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * Key-value object storing custom field values.
   */
  custom_field_data?: Record<string, string | number | boolean | string | null>;
  /**
   * payment_processor
   */
  payment_processor: PaymentProcessor;
  /**
   * status
   */
  status: CheckoutStatus;
  /**
   * Client secret used to update and complete the checkout session from the client.
   */
  client_secret: string;
  /**
   * URL where the customer can access the checkout session.
   */
  url: string;
  /**
   * Expiration date and time of the checkout session.
   */
  expires_at: string;
  /**
   * URL where the customer will be redirected after a successful payment.
   */
  success_url: string;
  /**
   * When set, a back button will be shown in the checkout to return to this URL.
   */
  return_url: string | null;
  /**
   * When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page.
   */
  embed_origin: string | null;
  /**
   * Amount in cents, before discounts and taxes.
   */
  amount: number;
  /**
   * Predefined number of seats (works with seat-based pricing only)
   */
  seats?: number | null;
  /**
   * Minimum number of seats (works with seat-based pricing only)
   */
  min_seats?: number | null;
  /**
   * Maximum number of seats (works with seat-based pricing only)
   */
  max_seats?: number | null;
  /**
   * Discount amount in cents.
   */
  discount_amount: number;
  /**
   * Amount in cents, after discounts but before taxes.
   */
  net_amount: number;
  /**
   * Sales tax amount in cents. If `null`, it means there is no enough information yet to calculate it.
   */
  tax_amount: number | null;
  /**
   * Tax behavior of the checkout. `inclusive` means the price includes tax, `exclusive` means tax is added on top. If `null`, tax is not yet calculated.
   */
  tax_behavior: TaxBehavior | null;
  /**
   * Amount in cents, after discounts and taxes.
   */
  total_amount: number;
  /**
   * Currency code of the checkout session.
   */
  currency: string;
  /**
   * Whether to enable the trial period for the checkout session. If `false`, the trial period will be disabled, even if the selected product has a trial configured.
   */
  allow_trial: boolean | null;
  /**
   * Interval unit of the trial period, if any. This value is either set from the checkout, if `trial_interval` is set, or from the selected product.
   */
  active_trial_interval: TrialInterval | null;
  /**
   * Number of interval units of the trial period, if any. This value is either set from the checkout, if `trial_interval_count` is set, or from the selected product.
   */
  active_trial_interval_count: number | null;
  /**
   * End date and time of the trial period, if any.
   */
  trial_end: string | null;
  /**
   * ID of the organization owning the checkout session.
   */
  organization_id: string;
  /**
   * ID of the product to checkout.
   */
  product_id: string | null;
  /**
   * ID of the product price to checkout.
   */
  product_price_id: string | null;
  /**
   * ID of the discount applied to the checkout.
   */
  discount_id: string | null;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allow_discount_codes: boolean;
  /**
   * Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. If you preset the billing address, this setting will be automatically set to `true`.
   */
  require_billing_address: boolean;
  /**
   * Whether the discount is applicable to the checkout. Typically, free and custom prices are not discountable.
   */
  is_discount_applicable: boolean;
  /**
   * Whether the product price is free, regardless of discounts.
   */
  is_free_product_price: boolean;
  /**
   * Whether the checkout requires payment, e.g. in case of free products or discounts that cover the total amount.
   */
  is_payment_required: boolean;
  /**
   * Whether the checkout requires setting up a payment method, regardless of the amount, e.g. subscriptions that have first free cycles.
   */
  is_payment_setup_required: boolean;
  /**
   * Whether the checkout requires a payment form, whether because of a payment or payment method setup.
   */
  is_payment_form_required: boolean;
  /**
   * customer_id
   */
  customer_id: string | null;
  /**
   * Whether the customer is a business or an individual. If `true`, the customer will be required to fill their full billing address and billing name.
   */
  is_business_customer: boolean;
  /**
   * Name of the customer.
   */
  customer_name: string | null;
  /**
   * Email address of the customer.
   */
  customer_email: string | null;
  /**
   * customer_ip_address
   */
  customer_ip_address: string | null;
  /**
   * customer_billing_name
   */
  customer_billing_name: string | null;
  /**
   * customer_billing_address
   */
  customer_billing_address: Address | null;
  /**
   * customer_tax_id
   */
  customer_tax_id: string | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * payment_processor_metadata
   */
  payment_processor_metadata: Record<string, string>;
  /**
   * billing_address_fields
   */
  billing_address_fields: CheckoutBillingAddressFields;
  /**
   * List of products available to select.
   */
  products: CheckoutProduct[];
  /**
   * Product selected to checkout.
   */
  product: CheckoutProduct | null;
  /**
   * Price of the selected product.
   */
  product_price: (LegacyRecurringProductPrice | ProductPrice) | null;
  /**
   * Mapping of product IDs to their list of prices.
   */
  prices: Record<string, (LegacyRecurringProductPrice | ProductPrice)[]> | null;
  /**
   * discount
   */
  discount: (CheckoutDiscountFixedOnceForeverDuration | CheckoutDiscountFixedRepeatDuration | CheckoutDiscountPercentageOnceForeverDuration | CheckoutDiscountPercentageRepeatDuration) | null;
  /**
   * organization
   */
  organization: CheckoutOrganization;
  /**
   * attached_custom_fields
   */
  attached_custom_fields: AttachedCustomField[] | null;
}
/**
 * Checkout session data retrieved using the client secret after confirmation.

It contains a customer session token to retrieve order information
right after the checkout.
 */
interface CheckoutPublicConfirmed {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * Key-value object storing custom field values.
   */
  custom_field_data?: Record<string, string | number | boolean | string | null>;
  /**
   * payment_processor
   */
  payment_processor: PaymentProcessor;
  /**
   * status
   */
  status: "confirmed";
  /**
   * Client secret used to update and complete the checkout session from the client.
   */
  client_secret: string;
  /**
   * URL where the customer can access the checkout session.
   */
  url: string;
  /**
   * Expiration date and time of the checkout session.
   */
  expires_at: string;
  /**
   * URL where the customer will be redirected after a successful payment.
   */
  success_url: string;
  /**
   * When set, a back button will be shown in the checkout to return to this URL.
   */
  return_url: string | null;
  /**
   * When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page.
   */
  embed_origin: string | null;
  /**
   * Amount in cents, before discounts and taxes.
   */
  amount: number;
  /**
   * Predefined number of seats (works with seat-based pricing only)
   */
  seats?: number | null;
  /**
   * Minimum number of seats (works with seat-based pricing only)
   */
  min_seats?: number | null;
  /**
   * Maximum number of seats (works with seat-based pricing only)
   */
  max_seats?: number | null;
  /**
   * Discount amount in cents.
   */
  discount_amount: number;
  /**
   * Amount in cents, after discounts but before taxes.
   */
  net_amount: number;
  /**
   * Sales tax amount in cents. If `null`, it means there is no enough information yet to calculate it.
   */
  tax_amount: number | null;
  /**
   * Tax behavior of the checkout. `inclusive` means the price includes tax, `exclusive` means tax is added on top. If `null`, tax is not yet calculated.
   */
  tax_behavior: TaxBehavior | null;
  /**
   * Amount in cents, after discounts and taxes.
   */
  total_amount: number;
  /**
   * Currency code of the checkout session.
   */
  currency: string;
  /**
   * Whether to enable the trial period for the checkout session. If `false`, the trial period will be disabled, even if the selected product has a trial configured.
   */
  allow_trial: boolean | null;
  /**
   * Interval unit of the trial period, if any. This value is either set from the checkout, if `trial_interval` is set, or from the selected product.
   */
  active_trial_interval: TrialInterval | null;
  /**
   * Number of interval units of the trial period, if any. This value is either set from the checkout, if `trial_interval_count` is set, or from the selected product.
   */
  active_trial_interval_count: number | null;
  /**
   * End date and time of the trial period, if any.
   */
  trial_end: string | null;
  /**
   * ID of the organization owning the checkout session.
   */
  organization_id: string;
  /**
   * ID of the product to checkout.
   */
  product_id: string | null;
  /**
   * ID of the product price to checkout.
   */
  product_price_id: string | null;
  /**
   * ID of the discount applied to the checkout.
   */
  discount_id: string | null;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allow_discount_codes: boolean;
  /**
   * Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. If you preset the billing address, this setting will be automatically set to `true`.
   */
  require_billing_address: boolean;
  /**
   * Whether the discount is applicable to the checkout. Typically, free and custom prices are not discountable.
   */
  is_discount_applicable: boolean;
  /**
   * Whether the product price is free, regardless of discounts.
   */
  is_free_product_price: boolean;
  /**
   * Whether the checkout requires payment, e.g. in case of free products or discounts that cover the total amount.
   */
  is_payment_required: boolean;
  /**
   * Whether the checkout requires setting up a payment method, regardless of the amount, e.g. subscriptions that have first free cycles.
   */
  is_payment_setup_required: boolean;
  /**
   * Whether the checkout requires a payment form, whether because of a payment or payment method setup.
   */
  is_payment_form_required: boolean;
  /**
   * customer_id
   */
  customer_id: string | null;
  /**
   * Whether the customer is a business or an individual. If `true`, the customer will be required to fill their full billing address and billing name.
   */
  is_business_customer: boolean;
  /**
   * Name of the customer.
   */
  customer_name: string | null;
  /**
   * Email address of the customer.
   */
  customer_email: string | null;
  /**
   * customer_ip_address
   */
  customer_ip_address: string | null;
  /**
   * customer_billing_name
   */
  customer_billing_name: string | null;
  /**
   * customer_billing_address
   */
  customer_billing_address: Address | null;
  /**
   * customer_tax_id
   */
  customer_tax_id: string | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * payment_processor_metadata
   */
  payment_processor_metadata: Record<string, string>;
  /**
   * billing_address_fields
   */
  billing_address_fields: CheckoutBillingAddressFields;
  /**
   * List of products available to select.
   */
  products: CheckoutProduct[];
  /**
   * Product selected to checkout.
   */
  product: CheckoutProduct | null;
  /**
   * Price of the selected product.
   */
  product_price: (LegacyRecurringProductPrice | ProductPrice) | null;
  /**
   * Mapping of product IDs to their list of prices.
   */
  prices: Record<string, (LegacyRecurringProductPrice | ProductPrice)[]> | null;
  /**
   * discount
   */
  discount: (CheckoutDiscountFixedOnceForeverDuration | CheckoutDiscountFixedRepeatDuration | CheckoutDiscountPercentageOnceForeverDuration | CheckoutDiscountPercentageRepeatDuration) | null;
  /**
   * organization
   */
  organization: CheckoutOrganization;
  /**
   * attached_custom_fields
   */
  attached_custom_fields: AttachedCustomField[] | null;
  /**
   * customer_session_token
   */
  customer_session_token: string | null;
}
/**
 * Update an existing checkout session using an access token.
 */
interface CheckoutUpdate {
  /**
   * Key-value object storing custom field values.
   */
  custom_field_data?: Record<string, string | number | boolean | string | null>;
  /**
   * ID of the product to checkout. Must be present in the checkout's product list.
   */
  product_id?: string | null;
  /**
   * ID of the product price to checkout. Must correspond to a price present in the checkout's product list.
   */
  product_price_id?: string | null;
  /**
   * amount
   */
  amount?: number | null;
  /**
   * Number of seats for seat-based pricing.
   */
  seats?: number | null;
  /**
   * is_business_customer
   */
  is_business_customer?: boolean | null;
  /**
   * customer_name
   */
  customer_name?: string | null;
  /**
   * customer_email
   */
  customer_email?: string | null;
  /**
   * customer_billing_name
   */
  customer_billing_name?: string | null;
  /**
   * customer_billing_address
   */
  customer_billing_address?: AddressInput | null;
  /**
   * customer_tax_id
   */
  customer_tax_id?: string | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * The interval unit for the trial period.
   */
  trial_interval?: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count?: number | null;
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * currency
   */
  currency?: PresentmentCurrency | null;
  /**
   * ID of the discount to apply to the checkout.
   */
  discount_id?: string | null;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allow_discount_codes?: boolean | null;
  /**
   * Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. If you preset the billing address, this setting will be automatically set to `true`.
   */
  require_billing_address?: boolean | null;
  /**
   * Whether to enable the trial period for the checkout session. If `false`, the trial period will be disabled, even if the selected product has a trial configured.
   */
  allow_trial?: boolean | null;
  /**
   * customer_ip_address
   */
  customer_ip_address?: string | null;
  /**
     * Key-value object allowing you to store additional information that'll be copied to the created customer.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  customer_metadata?: Record<string, string | number | number | boolean> | null;
  /**
   * URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id.
   */
  success_url?: string | null;
  /**
   * When set, a back button will be shown in the checkout to return to this URL.
   */
  return_url?: string | null;
  /**
   * If you plan to embed the checkout session, set this to the Origin of the embedding page. It'll allow the Pago iframe to communicate with the parent page.
   */
  embed_origin?: string | null;
}
/**
 * Update an existing checkout session using the client secret.
 */
interface CheckoutUpdatePublic {
  /**
   * Key-value object storing custom field values.
   */
  custom_field_data?: Record<string, string | number | boolean | string | null>;
  /**
   * ID of the product to checkout. Must be present in the checkout's product list.
   */
  product_id?: string | null;
  /**
   * ID of the product price to checkout. Must correspond to a price present in the checkout's product list.
   */
  product_price_id?: string | null;
  /**
   * amount
   */
  amount?: number | null;
  /**
   * Number of seats for seat-based pricing.
   */
  seats?: number | null;
  /**
   * is_business_customer
   */
  is_business_customer?: boolean | null;
  /**
   * customer_name
   */
  customer_name?: string | null;
  /**
   * customer_email
   */
  customer_email?: string | null;
  /**
   * customer_billing_name
   */
  customer_billing_name?: string | null;
  /**
   * customer_billing_address
   */
  customer_billing_address?: AddressInput | null;
  /**
   * customer_tax_id
   */
  customer_tax_id?: string | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * Discount code to apply to the checkout.
   */
  discount_code?: string | null;
  /**
   * Disable the trial period for the checkout session. It's mainly useful when the trial is blocked because the customer already redeemed one.
   */
  allow_trial?: false | null;
}
/**
 * Context
 */
interface Context extends Record<string, never> {}
/**
 * CostMetadataInput
 */
interface CostMetadataInput {
  /**
   * The amount in cents.
   */
  amount: number | string;
  /**
   * The currency. Currently, only `usd` is supported.
   */
  currency: string;
}
/**
 * CostMetadataOutput
 */
interface CostMetadataOutput {
  /**
   * The amount in cents.
   */
  amount: string;
  /**
   * The currency. Currently, only `usd` is supported.
   */
  currency: string;
}
/**
 * CountAggregation
 */
interface CountAggregation {
  /**
   * func
   */
  func?: "count";
}
/**
 * CursorPagination
 */
interface CursorPagination {
  /**
   * has_next_page
   */
  has_next_page: boolean;
}
/**
 * Schema for a custom field of type checkbox.
 */
interface CustomFieldCheckbox {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "checkbox";
  /**
   * Identifier of the custom field. It'll be used as key when storing the value.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field.
   */
  organization_id: string;
  /**
   * properties
   */
  properties: CustomFieldCheckboxProperties;
}
/**
 * CustomFieldCheckboxProperties
 */
interface CustomFieldCheckboxProperties {
  /**
   * form_label
   */
  form_label?: string;
  /**
   * form_help_text
   */
  form_help_text?: string;
  /**
   * form_placeholder
   */
  form_placeholder?: string;
}
/**
 * Schema to create a custom field of type checkbox.
 */
interface CustomFieldCreateCheckbox {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "checkbox";
  /**
   * Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.It can only contain ASCII letters, numbers and hyphens.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * properties
   */
  properties: CustomFieldCheckboxProperties;
}
/**
 * Schema to create a custom field of type date.
 */
interface CustomFieldCreateDate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "date";
  /**
   * Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.It can only contain ASCII letters, numbers and hyphens.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * properties
   */
  properties: CustomFieldDateProperties;
}
/**
 * Schema to create a custom field of type number.
 */
interface CustomFieldCreateNumber {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "number";
  /**
   * Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.It can only contain ASCII letters, numbers and hyphens.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * properties
   */
  properties: CustomFieldNumberProperties;
}
/**
 * Schema to create a custom field of type select.
 */
interface CustomFieldCreateSelect {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "select";
  /**
   * Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.It can only contain ASCII letters, numbers and hyphens.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * properties
   */
  properties: CustomFieldSelectProperties;
}
/**
 * Schema to create a custom field of type text.
 */
interface CustomFieldCreateText {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "text";
  /**
   * Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.It can only contain ASCII letters, numbers and hyphens.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * properties
   */
  properties: CustomFieldTextProperties;
}
/**
 * Schema for a custom field of type date.
 */
interface CustomFieldDate {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "date";
  /**
   * Identifier of the custom field. It'll be used as key when storing the value.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field.
   */
  organization_id: string;
  /**
   * properties
   */
  properties: CustomFieldDateProperties;
}
/**
 * CustomFieldDateProperties
 */
interface CustomFieldDateProperties {
  /**
   * form_label
   */
  form_label?: string;
  /**
   * form_help_text
   */
  form_help_text?: string;
  /**
   * form_placeholder
   */
  form_placeholder?: string;
  /**
   * ge
   */
  ge?: number;
  /**
   * le
   */
  le?: number;
}
/**
 * Schema for a custom field of type number.
 */
interface CustomFieldNumber {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "number";
  /**
   * Identifier of the custom field. It'll be used as key when storing the value.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field.
   */
  organization_id: string;
  /**
   * properties
   */
  properties: CustomFieldNumberProperties;
}
/**
 * CustomFieldNumberProperties
 */
interface CustomFieldNumberProperties {
  /**
   * form_label
   */
  form_label?: string;
  /**
   * form_help_text
   */
  form_help_text?: string;
  /**
   * form_placeholder
   */
  form_placeholder?: string;
  /**
   * ge
   */
  ge?: number;
  /**
   * le
   */
  le?: number;
}
/**
 * Schema for a custom field of type select.
 */
interface CustomFieldSelect {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "select";
  /**
   * Identifier of the custom field. It'll be used as key when storing the value.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field.
   */
  organization_id: string;
  /**
   * properties
   */
  properties: CustomFieldSelectProperties;
}
/**
 * CustomFieldSelectOption
 */
interface CustomFieldSelectOption {
  /**
   * value
   */
  value: string;
  /**
   * label
   */
  label: string;
}
/**
 * CustomFieldSelectProperties
 */
interface CustomFieldSelectProperties {
  /**
   * form_label
   */
  form_label?: string;
  /**
   * form_help_text
   */
  form_help_text?: string;
  /**
   * form_placeholder
   */
  form_placeholder?: string;
  /**
   * options
   */
  options: CustomFieldSelectOption[];
}
/**
 * Schema for a custom field of type text.
 */
interface CustomFieldText {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * type
   */
  type: "text";
  /**
   * Identifier of the custom field. It'll be used as key when storing the value.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field.
   */
  organization_id: string;
  /**
   * properties
   */
  properties: CustomFieldTextProperties;
}
/**
 * CustomFieldTextProperties
 */
interface CustomFieldTextProperties {
  /**
   * form_label
   */
  form_label?: string;
  /**
   * form_help_text
   */
  form_help_text?: string;
  /**
   * form_placeholder
   */
  form_placeholder?: string;
  /**
   * textarea
   */
  textarea?: boolean;
  /**
   * min_length
   */
  min_length?: number;
  /**
   * max_length
   */
  max_length?: number;
}
/**
 * Schema to update a custom field of type checkbox.
 */
interface CustomFieldUpdateCheckbox {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * name
   */
  name?: string | null;
  /**
   * slug
   */
  slug?: string | null;
  /**
   * type
   */
  type: "checkbox";
  /**
   * properties
   */
  properties?: CustomFieldCheckboxProperties | null;
}
/**
 * Schema to update a custom field of type date.
 */
interface CustomFieldUpdateDate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * name
   */
  name?: string | null;
  /**
   * slug
   */
  slug?: string | null;
  /**
   * type
   */
  type: "date";
  /**
   * properties
   */
  properties?: CustomFieldDateProperties | null;
}
/**
 * Schema to update a custom field of type number.
 */
interface CustomFieldUpdateNumber {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * name
   */
  name?: string | null;
  /**
   * slug
   */
  slug?: string | null;
  /**
   * type
   */
  type: "number";
  /**
   * properties
   */
  properties?: CustomFieldNumberProperties | null;
}
/**
 * Schema to update a custom field of type select.
 */
interface CustomFieldUpdateSelect {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * name
   */
  name?: string | null;
  /**
   * slug
   */
  slug?: string | null;
  /**
   * type
   */
  type: "select";
  /**
   * properties
   */
  properties?: CustomFieldSelectProperties | null;
}
/**
 * Schema to update a custom field of type text.
 */
interface CustomFieldUpdateText {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * name
   */
  name?: string | null;
  /**
   * slug
   */
  slug?: string | null;
  /**
   * type
   */
  type: "text";
  /**
   * properties
   */
  properties?: CustomFieldTextProperties | null;
}
/**
 * CustomerBenefitGrantCustom
 */
interface CustomerBenefitGrantCustom {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * granted_at
   */
  granted_at: string | null;
  /**
   * revoked_at
   */
  revoked_at: string | null;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * member_id
   */
  member_id?: string | null;
  /**
   * benefit_id
   */
  benefit_id: string;
  /**
   * subscription_id
   */
  subscription_id: string | null;
  /**
   * order_id
   */
  order_id: string | null;
  /**
   * is_granted
   */
  is_granted: boolean;
  /**
   * is_revoked
   */
  is_revoked: boolean;
  /**
   * error
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: CustomerPortalCustomer;
  /**
   * benefit
   */
  benefit: BenefitCustomSubscriber;
  /**
   * properties
   */
  properties: BenefitGrantCustomProperties;
}
/**
 * CustomerBenefitGrantCustomUpdate
 */
interface CustomerBenefitGrantCustomUpdate {
  /**
   * benefit_type
   */
  benefit_type: "custom";
}
/**
 * CustomerBenefitGrantDiscord
 */
interface CustomerBenefitGrantDiscord {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * granted_at
   */
  granted_at: string | null;
  /**
   * revoked_at
   */
  revoked_at: string | null;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * member_id
   */
  member_id?: string | null;
  /**
   * benefit_id
   */
  benefit_id: string;
  /**
   * subscription_id
   */
  subscription_id: string | null;
  /**
   * order_id
   */
  order_id: string | null;
  /**
   * is_granted
   */
  is_granted: boolean;
  /**
   * is_revoked
   */
  is_revoked: boolean;
  /**
   * error
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: CustomerPortalCustomer;
  /**
   * benefit
   */
  benefit: BenefitDiscordSubscriber;
  /**
   * properties
   */
  properties: BenefitGrantDiscordProperties;
}
/**
 * CustomerBenefitGrantDiscordPropertiesUpdate
 */
interface CustomerBenefitGrantDiscordPropertiesUpdate {
  /**
   * account_id
   */
  account_id: string | null;
}
/**
 * CustomerBenefitGrantDiscordUpdate
 */
interface CustomerBenefitGrantDiscordUpdate {
  /**
   * benefit_type
   */
  benefit_type: "discord";
  /**
   * properties
   */
  properties: CustomerBenefitGrantDiscordPropertiesUpdate;
}
/**
 * CustomerBenefitGrantDownloadables
 */
interface CustomerBenefitGrantDownloadables {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * granted_at
   */
  granted_at: string | null;
  /**
   * revoked_at
   */
  revoked_at: string | null;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * member_id
   */
  member_id?: string | null;
  /**
   * benefit_id
   */
  benefit_id: string;
  /**
   * subscription_id
   */
  subscription_id: string | null;
  /**
   * order_id
   */
  order_id: string | null;
  /**
   * is_granted
   */
  is_granted: boolean;
  /**
   * is_revoked
   */
  is_revoked: boolean;
  /**
   * error
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: CustomerPortalCustomer;
  /**
   * benefit
   */
  benefit: BenefitDownloadablesSubscriber;
  /**
   * properties
   */
  properties: BenefitGrantDownloadablesProperties;
}
/**
 * CustomerBenefitGrantDownloadablesUpdate
 */
interface CustomerBenefitGrantDownloadablesUpdate {
  /**
   * benefit_type
   */
  benefit_type: "downloadables";
}
/**
 * CustomerBenefitGrantFeatureFlag
 */
interface CustomerBenefitGrantFeatureFlag {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * granted_at
   */
  granted_at: string | null;
  /**
   * revoked_at
   */
  revoked_at: string | null;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * member_id
   */
  member_id?: string | null;
  /**
   * benefit_id
   */
  benefit_id: string;
  /**
   * subscription_id
   */
  subscription_id: string | null;
  /**
   * order_id
   */
  order_id: string | null;
  /**
   * is_granted
   */
  is_granted: boolean;
  /**
   * is_revoked
   */
  is_revoked: boolean;
  /**
   * error
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: CustomerPortalCustomer;
  /**
   * benefit
   */
  benefit: BenefitFeatureFlagSubscriber;
  /**
   * properties
   */
  properties: BenefitGrantFeatureFlagProperties;
}
/**
 * CustomerBenefitGrantFeatureFlagUpdate
 */
interface CustomerBenefitGrantFeatureFlagUpdate {
  /**
   * benefit_type
   */
  benefit_type: "feature_flag";
}
/**
 * CustomerBenefitGrantGitHubRepository
 */
interface CustomerBenefitGrantGitHubRepository {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * granted_at
   */
  granted_at: string | null;
  /**
   * revoked_at
   */
  revoked_at: string | null;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * member_id
   */
  member_id?: string | null;
  /**
   * benefit_id
   */
  benefit_id: string;
  /**
   * subscription_id
   */
  subscription_id: string | null;
  /**
   * order_id
   */
  order_id: string | null;
  /**
   * is_granted
   */
  is_granted: boolean;
  /**
   * is_revoked
   */
  is_revoked: boolean;
  /**
   * error
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: CustomerPortalCustomer;
  /**
   * benefit
   */
  benefit: BenefitGitHubRepositorySubscriber;
  /**
   * properties
   */
  properties: BenefitGrantGitHubRepositoryProperties;
}
/**
 * CustomerBenefitGrantGitHubRepositoryPropertiesUpdate
 */
interface CustomerBenefitGrantGitHubRepositoryPropertiesUpdate {
  /**
   * account_id
   */
  account_id: string | null;
}
/**
 * CustomerBenefitGrantGitHubRepositoryUpdate
 */
interface CustomerBenefitGrantGitHubRepositoryUpdate {
  /**
   * benefit_type
   */
  benefit_type: "github_repository";
  /**
   * properties
   */
  properties: CustomerBenefitGrantGitHubRepositoryPropertiesUpdate;
}
/**
 * CustomerBenefitGrantLicenseKeys
 */
interface CustomerBenefitGrantLicenseKeys {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * granted_at
   */
  granted_at: string | null;
  /**
   * revoked_at
   */
  revoked_at: string | null;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * member_id
   */
  member_id?: string | null;
  /**
   * benefit_id
   */
  benefit_id: string;
  /**
   * subscription_id
   */
  subscription_id: string | null;
  /**
   * order_id
   */
  order_id: string | null;
  /**
   * is_granted
   */
  is_granted: boolean;
  /**
   * is_revoked
   */
  is_revoked: boolean;
  /**
   * error
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: CustomerPortalCustomer;
  /**
   * benefit
   */
  benefit: BenefitLicenseKeysSubscriber;
  /**
   * properties
   */
  properties: BenefitGrantLicenseKeysProperties;
}
/**
 * CustomerBenefitGrantLicenseKeysUpdate
 */
interface CustomerBenefitGrantLicenseKeysUpdate {
  /**
   * benefit_type
   */
  benefit_type: "license_keys";
}
/**
 * CustomerBenefitGrantMeterCredit
 */
interface CustomerBenefitGrantMeterCredit {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * granted_at
   */
  granted_at: string | null;
  /**
   * revoked_at
   */
  revoked_at: string | null;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * member_id
   */
  member_id?: string | null;
  /**
   * benefit_id
   */
  benefit_id: string;
  /**
   * subscription_id
   */
  subscription_id: string | null;
  /**
   * order_id
   */
  order_id: string | null;
  /**
   * is_granted
   */
  is_granted: boolean;
  /**
   * is_revoked
   */
  is_revoked: boolean;
  /**
   * error
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: CustomerPortalCustomer;
  /**
   * benefit
   */
  benefit: BenefitMeterCreditSubscriber;
  /**
   * properties
   */
  properties: BenefitGrantMeterCreditProperties;
}
/**
 * CustomerBenefitGrantMeterCreditUpdate
 */
interface CustomerBenefitGrantMeterCreditUpdate {
  /**
   * benefit_type
   */
  benefit_type: "meter_credit";
}
/**
 * CustomerBenefitGrantSlackSharedChannel
 */
interface CustomerBenefitGrantSlackSharedChannel {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * granted_at
   */
  granted_at: string | null;
  /**
   * revoked_at
   */
  revoked_at: string | null;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * member_id
   */
  member_id?: string | null;
  /**
   * benefit_id
   */
  benefit_id: string;
  /**
   * subscription_id
   */
  subscription_id: string | null;
  /**
   * order_id
   */
  order_id: string | null;
  /**
   * is_granted
   */
  is_granted: boolean;
  /**
   * is_revoked
   */
  is_revoked: boolean;
  /**
   * error
   */
  error?: BenefitGrantError | null;
  /**
   * customer
   */
  customer: CustomerPortalCustomer;
  /**
   * benefit
   */
  benefit: BenefitSlackSharedChannelSubscriber;
  /**
   * properties
   */
  properties: BenefitGrantSlackSharedChannelProperties;
}
/**
 * CustomerBenefitGrantSlackSharedChannelPropertiesUpdate
 */
interface CustomerBenefitGrantSlackSharedChannelPropertiesUpdate {
  /**
   * invited_email
   */
  invited_email: string;
}
/**
 * CustomerBenefitGrantSlackSharedChannelUpdate
 */
interface CustomerBenefitGrantSlackSharedChannelUpdate {
  /**
   * benefit_type
   */
  benefit_type: "slack_shared_channel";
  /**
   * properties
   */
  properties: CustomerBenefitGrantSlackSharedChannelPropertiesUpdate;
}
/**
 * An event created by Pago when a customer is created.
 */
interface CustomerCreatedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "customer.created";
  /**
   * metadata
   */
  metadata: CustomerCreatedMetadata;
}
/**
 * CustomerCreatedMetadata
 */
interface CustomerCreatedMetadata {
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * customer_email
   */
  customer_email: string | null;
  /**
   * customer_name
   */
  customer_name: string | null;
  /**
   * customer_external_id
   */
  customer_external_id: string | null;
}
/**
 * CustomerCustomerMeter
 */
interface CustomerCustomerMeter {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the customer.
   */
  customer_id: string;
  /**
   * The ID of the meter.
   */
  meter_id: string;
  /**
   * The number of consumed units.
   */
  consumed_units: number;
  /**
   * The number of credited units.
   */
  credited_units: number;
  /**
   * The balance of the meter, i.e. the difference between credited and consumed units.
   */
  balance: number;
  /**
   * meter
   */
  meter: CustomerCustomerMeterMeter;
}
/**
 * CustomerCustomerMeterMeter
 */
interface CustomerCustomerMeterMeter {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The name of the meter. Will be shown on customer's invoices and usage.
   */
  name: string;
}
/**
 * CustomerCustomerSession
 */
interface CustomerCustomerSession {
  /**
   * expires_at
   */
  expires_at: string;
  /**
   * return_url
   */
  return_url: string | null;
}
/**
 * An event created by Pago when a customer is deleted.
 */
interface CustomerDeletedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "customer.deleted";
  /**
   * metadata
   */
  metadata: CustomerDeletedMetadata;
}
/**
 * CustomerDeletedMetadata
 */
interface CustomerDeletedMetadata {
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * customer_email
   */
  customer_email: string | null;
  /**
   * customer_name
   */
  customer_name: string | null;
  /**
   * customer_external_id
   */
  customer_external_id: string | null;
}
/**
 * CustomerEmailUpdateRequest
 */
interface CustomerEmailUpdateRequest {
  /**
   * email
   */
  email: string;
}
/**
 * CustomerEmailUpdateVerifyRequest
 */
interface CustomerEmailUpdateVerifyRequest {
  /**
   * token
   */
  token: string;
}
/**
 * CustomerEmailUpdateVerifyResponse
 */
interface CustomerEmailUpdateVerifyResponse {
  /**
   * token
   */
  token: string;
}
/**
 * A customer in an organization.
 */
interface CustomerIndividual {
  /**
   * The ID of the customer.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.
   */
  external_id?: string | null;
  /**
   * The email address of the customer. This must be unique within the organization.
   */
  email: string;
  /**
   * Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address.
   */
  email_verified: boolean;
  /**
   * The type of customer.
   */
  type: "individual";
  /**
   * The name of the customer.
   */
  name: string | null;
  /**
   * The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set.
   */
  billing_name: string | null;
  /**
   * billing_address
   */
  billing_address: Address | null;
  /**
   * tax_id
   */
  tax_id: unknown[] | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * The ID of the organization owning the customer.
   */
  organization_id: string;
  /**
   * The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details.
   */
  default_payment_method_id?: string | null;
  /**
   * Timestamp for when the customer was soft deleted.
   */
  deleted_at: string | null;
  /**
   * avatar_url
   */
  avatar_url: string | null;
}
/**
 * CustomerIndividualCreate
 */
interface CustomerIndividualCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.
   */
  external_id?: string | null;
  /**
   * name
   */
  name?: string | null;
  /**
   * billing_address
   */
  billing_address?: AddressInput | null;
  /**
   * tax_id
   */
  tax_id?: string | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * The ID of the organization owning the customer. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * Optional owner member to create with the customer. If not provided, an owner member will be automatically created using the customer's email and name.
   */
  owner?: MemberOwnerCreate | null;
  /**
   * type
   */
  type?: "individual";
  /**
   * The email address of the customer. This must be unique within the organization.
   */
  email: string;
}
/**
 * An active customer meter, with current consumed and credited units.
 */
interface CustomerMeter {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the customer.
   */
  customer_id: string;
  /**
   * The ID of the meter.
   */
  meter_id: string;
  /**
   * The number of consumed units.
   */
  consumed_units: number;
  /**
   * The number of credited units.
   */
  credited_units: number;
  /**
   * The balance of the meter, i.e. the difference between credited and consumed units.
   */
  balance: number;
  /**
   * customer
   */
  customer: Customer;
  /**
   * meter
   */
  meter: Meter;
}
/**
 * CustomerNotReady
 */
interface CustomerNotReady$1 {
  /**
   * error
   */
  error: "CustomerNotReady";
  /**
   * detail
   */
  detail: string;
}
/**
 * CustomerOrder
 */
interface CustomerOrder {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * status
   */
  status: OrderStatus;
  /**
   * Whether the order has been paid for.
   */
  paid: boolean;
  /**
   * Amount in cents, before discounts and taxes.
   */
  subtotal_amount: number;
  /**
   * Discount amount in cents.
   */
  discount_amount: number;
  /**
   * Amount in cents, after discounts but before taxes.
   */
  net_amount: number;
  /**
   * Sales tax amount in cents.
   */
  tax_amount: number;
  /**
   * Amount in cents, after discounts and taxes.
   */
  total_amount: number;
  /**
   * Customer's balance amount applied to this invoice. Can increase the total amount paid, if the customer has a negative balance,  or decrease it, if the customer has a positive balance.Amount in cents.
   */
  applied_balance_amount: number;
  /**
   * Amount in cents that is due for this order.
   */
  due_amount: number;
  /**
   * Amount refunded in cents.
   */
  refunded_amount: number;
  /**
   * Sales tax refunded in cents.
   */
  refunded_tax_amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * billing_reason
   */
  billing_reason: OrderBillingReason;
  /**
   * The name of the customer that should appear on the invoice.
   */
  billing_name: string | null;
  /**
   * billing_address
   */
  billing_address: Address | null;
  /**
   * The invoice number associated with this order. `null` while the order is in `draft` status; assigned at finalize.
   */
  invoice_number: string | null;
  /**
   * Whether an invoice has been generated for this order.
   */
  is_invoice_generated: boolean;
  /**
   * The receipt number for this order. Set once the order is paid for organizations with receipts enabled. When set, a downloadable receipt PDF can be obtained via the receipt endpoint.
   */
  receipt_number: string | null;
  /**
   * Number of seats purchased (for seat-based one-time orders).
   */
  seats?: number | null;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * product_id
   */
  product_id: string | null;
  /**
   * discount_id
   */
  discount_id: string | null;
  /**
   * subscription_id
   */
  subscription_id: string | null;
  /**
   * checkout_id
   */
  checkout_id: string | null;
  /**
   * When the next automatic payment retry is scheduled. `null` if the order is not in dunning or all retries have been exhausted.
   */
  next_payment_attempt_at?: string | null;
  /**
   * product
   */
  product: CustomerOrderProduct | null;
  /**
   * subscription
   */
  subscription: CustomerOrderSubscription | null;
  /**
   * Line items composing the order.
   */
  items: OrderItemSchema[];
  /**
   * A summary description of the order.
   */
  description: string;
  /**
   * Amount in cents that can still be refunded (net, before taxes). Accounts for any applied customer balance and previous refunds.
   */
  refundable_amount: number;
  /**
   * Sales tax in cents that would be refunded if the full refundable amount is refunded.
   */
  refundable_tax_amount: number;
}
/**
 * Schema to confirm a retry payment using either a saved payment method or a new confirmation token.
 */
interface CustomerOrderConfirmPayment {
  /**
   * ID of the Stripe confirmation token for new payment methods.
   */
  confirmation_token_id?: string | null;
  /**
   * ID of an existing saved payment method.
   */
  payment_method_id?: string | null;
  /**
   * payment_processor
   */
  payment_processor?: PaymentProcessor;
}
/**
 * Order's invoice data.
 */
interface CustomerOrderInvoice {
  /**
   * The URL to the invoice.
   */
  url: string;
}
/**
 * Response after confirming a retry payment.
 */
interface CustomerOrderPaymentConfirmation {
  /**
   * Payment status after confirmation.
   */
  status: string;
  /**
   * Client secret for handling additional actions.
   */
  client_secret?: string | null;
  /**
   * Error message if confirmation failed.
   */
  error?: string | null;
}
/**
 * Payment status for an order.
 */
interface CustomerOrderPaymentStatus {
  /**
   * Current payment status.
   */
  status: string;
  /**
   * Error message if payment failed.
   */
  error?: string | null;
}
/**
 * CustomerOrderProduct
 */
interface CustomerOrderProduct {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The interval unit for the trial period.
   */
  trial_interval: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count: number | null;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * visibility
   */
  visibility: ProductVisibility;
  /**
   * The recurring interval of the product. If `None`, the product is a one-time purchase.
   */
  recurring_interval: RecurringInterval | null;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products.
   */
  recurring_interval_count: number | null;
  /**
   * The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval.
   */
  meter_interval: RecurringInterval | null;
  /**
   * Number of meter interval units. None when no meter cycle is set.
   */
  meter_interval_count: number | null;
  /**
   * Whether the product is a subscription.
   */
  is_recurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organization_id: string;
  /**
   * List of prices for this product.
   */
  prices: (LegacyRecurringProductPrice | ProductPrice)[];
  /**
   * List of benefits granted by the product.
   */
  benefits: BenefitPublic[];
  /**
   * List of medias associated to the product.
   */
  medias: ProductMediaFileRead[];
  /**
   * organization
   */
  organization: CustomerOrganization;
}
/**
 * Order's receipt data.
 */
interface CustomerOrderReceipt {
  /**
   * The URL to the receipt PDF.
   */
  url: string;
}
/**
 * CustomerOrderSubscription
 */
interface CustomerOrderSubscription {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The amount of the subscription.
   */
  amount: number;
  /**
   * The currency of the subscription.
   */
  currency: string;
  /**
   * recurring_interval
   */
  recurring_interval: RecurringInterval;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on.
   */
  recurring_interval_count: number;
  /**
   * status
   */
  status: SubscriptionStatus;
  /**
   * The start timestamp of the current billing period.
   */
  current_period_start: string;
  /**
   * The end timestamp of the current billing period.
   */
  current_period_end: string;
  /**
   * The start timestamp of the current meter period, if the product has a meter cycle set. Metered credits are granted and overage is settled on this cadence.
   */
  current_meter_period_start: string | null;
  /**
   * The end timestamp of the current meter period, if the product has a meter cycle set. This is when credits next renew.
   */
  current_meter_period_end: string | null;
  /**
   * The start timestamp of the trial period, if any.
   */
  trial_start: string | null;
  /**
   * The end timestamp of the trial period, if any.
   */
  trial_end: string | null;
  /**
   * Whether the subscription will be canceled at the end of the current period.
   */
  cancel_at_period_end: boolean;
  /**
   * The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`.
   */
  canceled_at: string | null;
  /**
   * The timestamp when the subscription started.
   */
  started_at: string | null;
  /**
   * The timestamp when the subscription will end.
   */
  ends_at: string | null;
  /**
   * The timestamp when the subscription ended.
   */
  ended_at: string | null;
  /**
   * The timestamp when the subscription entered `past_due` status.
   */
  past_due_at?: string | null;
  /**
   * Whether the subscription will be paused at the end of the current period.
   */
  pause_at_period_end: boolean;
  /**
   * The timestamp when the subscription was paused.
   */
  paused_at: string | null;
  /**
   * The timestamp when a paused subscription is scheduled to automatically resume, if set.
   */
  resumes_at: string | null;
  /**
   * The ID of the subscribed customer.
   */
  customer_id: string;
  /**
   * The ID of the subscribed product.
   */
  product_id: string;
  /**
   * The ID of the applied discount, if any.
   */
  discount_id: string | null;
  /**
   * checkout_id
   */
  checkout_id: string | null;
  /**
   * The number of seats for seat-based subscriptions. None for non-seat subscriptions.
   */
  seats?: number | null;
  /**
   * customer_cancellation_reason
   */
  customer_cancellation_reason: CustomerCancellationReason | null;
  /**
   * customer_cancellation_comment
   */
  customer_cancellation_comment: string | null;
}
/**
 * Schema to update an order.
 */
interface CustomerOrderUpdate {
  /**
   * The name of the customer that should appear on the invoice.
   */
  billing_name?: string | null;
  /**
   * The address of the customer that should appear on the invoice. Country and state fields cannot be updated.
   */
  billing_address?: AddressInput | null;
}
/**
 * CustomerOrganization
 */
interface CustomerOrganization {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Organization name shown in checkout, customer portal, emails etc.
   */
  name: string;
  /**
   * Unique organization slug in checkout, customer portal and credit card statements.
   */
  slug: string;
  /**
   * Avatar URL shown in checkout, customer portal, emails etc.
   */
  avatar_url: string | null;
  /**
   * proration_behavior
   */
  proration_behavior: SubscriptionProrationBehavior;
  /**
   * Whether customers can update their subscriptions from the customer portal.
   */
  allow_customer_updates: boolean;
  /**
   * customer_portal_settings
   */
  customer_portal_settings: OrganizationCustomerPortalSettings;
  /**
   * organization_features
   */
  organization_features?: CustomerOrganizationFeatureSettings;
}
/**
 * Schema of an organization and related data for customer portal.
 */
interface CustomerOrganizationData {
  /**
   * organization
   */
  organization: CustomerOrganization;
  /**
   * products
   */
  products: CustomerProduct[];
}
/**
 * Feature flags exposed to the customer portal.
 */
interface CustomerOrganizationFeatureSettings {
  /**
   * Whether the member model is enabled for this organization.
   */
  member_model_enabled?: boolean;
  /**
   * Whether localization is enabled for this organization.
   */
  checkout_localization_enabled?: boolean;
}
/**
 * CustomerPaymentMethodCard
 */
interface CustomerPaymentMethodCard {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * processor
   */
  processor: PaymentProcessor;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * type
   */
  type: "card";
  /**
   * method_metadata
   */
  method_metadata: PaymentMethodCardMetadata;
  /**
   * Whether this payment method is the customer's default payment method.
   */
  is_default: boolean;
}
/**
 * CustomerPaymentMethodConfirm
 */
interface CustomerPaymentMethodConfirm {
  /**
   * setup_intent_id
   */
  setup_intent_id: string;
  /**
   * set_default
   */
  set_default: boolean;
}
/**
 * CustomerPaymentMethodCreate
 */
interface CustomerPaymentMethodCreate {
  /**
   * confirmation_token_id
   */
  confirmation_token_id: string;
  /**
   * set_default
   */
  set_default: boolean;
  /**
   * return_url
   */
  return_url: string;
}
/**
 * CustomerPaymentMethodCreateRequiresActionResponse
 */
interface CustomerPaymentMethodCreateRequiresActionResponse {
  /**
   * status
   */
  status: "requires_action";
  /**
   * client_secret
   */
  client_secret: string;
}
/**
 * CustomerPaymentMethodCreateSucceededResponse
 */
interface CustomerPaymentMethodCreateSucceededResponse {
  /**
   * status
   */
  status: "succeeded";
  /**
   * payment_method
   */
  payment_method: CustomerPaymentMethod;
}
/**
 * CustomerPaymentMethodGeneric
 */
interface CustomerPaymentMethodGeneric {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * processor
   */
  processor: PaymentProcessor;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * type
   */
  type: string;
  /**
   * Whether this payment method is the customer's default payment method.
   */
  is_default: boolean;
}
/**
 * CustomerPortalCustomer
 */
interface CustomerPortalCustomer {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * email
   */
  email: string | null;
  /**
   * email_verified
   */
  email_verified: boolean;
  /**
   * name
   */
  name: string | null;
  /**
   * billing_name
   */
  billing_name: string | null;
  /**
   * billing_address
   */
  billing_address: Address | null;
  /**
   * tax_id
   */
  tax_id: unknown[] | null;
  /**
   * oauth_accounts
   */
  oauth_accounts: Record<string, CustomerPortalOAuthAccount>;
  /**
   * default_payment_method_id
   */
  default_payment_method_id?: string | null;
  /**
   * type
   */
  type?: CustomerType | null;
  /**
   * locale
   */
  locale?: string | null;
}
/**
 * CustomerPortalCustomerSettings
 */
interface CustomerPortalCustomerSettings {
  /**
   * allow_email_change
   */
  allow_email_change?: boolean;
}
/**
 * CustomerPortalCustomerUpdate
 */
interface CustomerPortalCustomerUpdate {
  /**
   * billing_name
   */
  billing_name?: string | null;
  /**
   * billing_address
   */
  billing_address?: AddressInput | null;
  /**
   * tax_id
   */
  tax_id?: string | null;
  /**
   * default_payment_method_id
   */
  default_payment_method_id?: string | null;
}
/**
 * A member of the customer's team as seen in the customer portal.
 */
interface CustomerPortalMember {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The email address of the member.
   */
  email: string;
  /**
   * The name of the member.
   */
  name: string | null;
  /**
   * role
   */
  role: MemberRole;
}
/**
 * Schema for adding a new member to the customer's team.
 */
interface CustomerPortalMemberCreate {
  /**
   * The email address of the new member.
   */
  email: string;
  /**
   * The name of the new member (optional).
   */
  name?: string | null;
  /**
   * role
   */
  role?: MemberRole;
}
/**
 * Schema for updating a member in the customer portal.
 */
interface CustomerPortalMemberUpdate {
  /**
   * The new name for the member.
   */
  name?: string | null;
  /**
   * The new role for the member.
   */
  role?: MemberRole | null;
}
/**
 * CustomerPortalOAuthAccount
 */
interface CustomerPortalOAuthAccount {
  /**
   * account_id
   */
  account_id: string;
  /**
   * account_username
   */
  account_username: string | null;
}
/**
 * CustomerPortalSubscriptionSettings
 */
interface CustomerPortalSubscriptionSettings {
  /**
   * update_seats
   */
  update_seats: boolean;
  /**
   * update_plan
   */
  update_plan: boolean;
  /**
   * pause
   */
  pause?: boolean;
}
/**
 * CustomerPortalUsageSettings
 */
interface CustomerPortalUsageSettings {
  /**
   * show
   */
  show: boolean;
}
/**
 * Schema of a product for customer portal.
 */
interface CustomerProduct {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The interval unit for the trial period.
   */
  trial_interval: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count: number | null;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * visibility
   */
  visibility: ProductVisibility;
  /**
   * The recurring interval of the product. If `None`, the product is a one-time purchase.
   */
  recurring_interval: RecurringInterval | null;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products.
   */
  recurring_interval_count: number | null;
  /**
   * The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval.
   */
  meter_interval: RecurringInterval | null;
  /**
   * Number of meter interval units. None when no meter cycle is set.
   */
  meter_interval_count: number | null;
  /**
   * Whether the product is a subscription.
   */
  is_recurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organization_id: string;
  /**
   * List of available prices for this product.
   */
  prices: (LegacyRecurringProductPrice | ProductPrice)[];
  /**
   * List of benefits granted by the product.
   */
  benefits: BenefitPublic[];
  /**
   * The medias associated to the product.
   */
  medias: ProductMediaFileRead[];
}
/**
 * CustomerSeat
 */
interface CustomerSeat {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The seat ID
   */
  id: string;
  /**
   * The subscription ID (for recurring seats)
   */
  subscription_id: string | null;
  /**
   * The order ID (for one-time purchase seats)
   */
  order_id: string | null;
  /**
   * status
   */
  status: SeatStatus;
  /**
   * The customer ID. When member_model_enabled is true, this is the billing customer (purchaser). When false, this is the seat member customer.
   */
  customer_id: string | null;
  /**
   * The member ID of the seat occupant
   */
  member_id: string | null;
  /**
   * The member associated with this seat
   */
  member: Member | null;
  /**
   * Email of the seat member (set when member_model_enabled is true)
   */
  email: string | null;
  /**
   * The assigned customer email
   */
  customer_email: string | null;
  /**
   * When the invitation token expires
   */
  invitation_token_expires_at: string | null;
  /**
   * When the seat was claimed
   */
  claimed_at: string | null;
  /**
   * When the seat was revoked
   */
  revoked_at: string | null;
  /**
   * Additional metadata for the seat
   */
  seat_metadata: Record<string, unknown> | null;
}
/**
 * CustomerSeatAssign
 */
interface CustomerSeatAssign {
  /**
   * Subscription ID. Required if neither order_id nor checkout_id is provided.
   */
  subscription_id?: string | null;
  /**
   * Order ID for one-time purchases. Required if subscription_id is not provided.
   */
  order_id?: string | null;
  /**
   * Email of the customer to assign the seat to
   */
  email?: string | null;
  /**
   * External customer ID for the seat assignment
   */
  external_customer_id?: string | null;
  /**
   * Customer ID for the seat assignment
   */
  customer_id?: string | null;
  /**
   * External member ID for the seat assignment. Can be used alone (lookup existing member) or with email (create/validate member).
   */
  external_member_id?: string | null;
  /**
   * Member ID for the seat assignment.
   */
  member_id?: string | null;
  /**
   * Additional metadata for the seat (max 10 keys, 1KB total)
   */
  metadata?: Record<string, unknown> | null;
  /**
   * If true, the seat will be immediately claimed without sending an invitation email. API-only feature.
   */
  immediate_claim?: boolean;
  /**
   * Checkout ID. Resolves to the subscription or order produced by the checkout.
   */
  checkout_id?: string | null;
}
/**
 * Response after successfully claiming a seat.
 */
interface CustomerSeatClaimResponse {
  /**
   * seat
   */
  seat: CustomerSeat;
  /**
   * Session token for immediate customer portal access
   */
  customer_session_token: string;
}
/**
 * A customer session that can be used to authenticate as a customer.
 */
interface CustomerSession {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * token
   */
  token: string;
  /**
   * expires_at
   */
  expires_at: string;
  /**
   * return_url
   */
  return_url: string | null;
  /**
   * customer_portal_url
   */
  customer_portal_url: string;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * customer
   */
  customer: Customer;
}
/**
 * Schema for creating a customer session using an external customer ID.
 */
interface CustomerSessionCustomerExternalIDCreate {
  /**
   * ID of the member to create a session for. When not provided and the organization has `member_model_enabled`, the owner member of the customer will be used for individual customers.
   */
  member_id?: string | null;
  /**
   * External ID of the member to create a session for. Alternative to `member_id`.
   */
  external_member_id?: string | null;
  /**
   * When set, a back button will be shown in the customer portal to return to this URL.
   */
  return_url?: string | null;
  /**
   * External ID of the customer to create a session for.
   */
  external_customer_id: string;
}
/**
 * Schema for creating a customer session using a customer ID.
 */
interface CustomerSessionCustomerIDCreate {
  /**
   * ID of the member to create a session for. When not provided and the organization has `member_model_enabled`, the owner member of the customer will be used for individual customers.
   */
  member_id?: string | null;
  /**
   * External ID of the member to create a session for. Alternative to `member_id`.
   */
  external_member_id?: string | null;
  /**
   * When set, a back button will be shown in the customer portal to return to this URL.
   */
  return_url?: string | null;
  /**
   * ID of the customer to create a session for.
   */
  customer_id: string;
}
/**
 * An active benefit grant for a customer.
 */
interface CustomerStateBenefitGrant {
  /**
   * The ID of the grant.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The timestamp when the benefit was granted.
   */
  granted_at: string;
  /**
   * The ID of the benefit concerned by this grant.
   */
  benefit_id: string;
  /**
   * benefit_type
   */
  benefit_type: BenefitType;
  /**
   * benefit_metadata
   */
  benefit_metadata: Record<string, string | number | number | boolean>;
  /**
   * properties
   */
  properties: BenefitGrantDiscordProperties | BenefitGrantGitHubRepositoryProperties | BenefitGrantDownloadablesProperties | BenefitGrantLicenseKeysProperties | BenefitGrantCustomProperties | BenefitGrantFeatureFlagProperties | BenefitGrantSlackSharedChannelProperties;
}
/**
 * A customer along with additional state information:
 * Active subscriptions
 * Granted benefits
 * Active meters
 */
interface CustomerStateIndividual {
  /**
   * The ID of the customer.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.
   */
  external_id?: string | null;
  /**
   * The email address of the customer. This must be unique within the organization.
   */
  email: string;
  /**
   * Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address.
   */
  email_verified: boolean;
  /**
   * The type of customer.
   */
  type: "individual";
  /**
   * The name of the customer.
   */
  name: string | null;
  /**
   * The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set.
   */
  billing_name: string | null;
  /**
   * billing_address
   */
  billing_address: Address | null;
  /**
   * tax_id
   */
  tax_id: unknown[] | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * The ID of the organization owning the customer.
   */
  organization_id: string;
  /**
   * The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details.
   */
  default_payment_method_id?: string | null;
  /**
   * Timestamp for when the customer was soft deleted.
   */
  deleted_at: string | null;
  /**
   * avatar_url
   */
  avatar_url: string | null;
  /**
   * The customer's active subscriptions.
   */
  active_subscriptions: CustomerStateSubscription[];
  /**
   * The customer's active benefit grants.
   */
  granted_benefits: CustomerStateBenefitGrant[];
  /**
   * The customer's active meters.
   */
  active_meters: CustomerStateMeter[];
}
/**
 * An active meter for a customer, with latest consumed and credited units.
 */
interface CustomerStateMeter {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the meter.
   */
  meter_id: string;
  /**
   * The number of consumed units.
   */
  consumed_units: number;
  /**
   * The number of credited units.
   */
  credited_units: number;
  /**
   * The balance of the meter, i.e. the difference between credited and consumed units.
   */
  balance: number;
}
/**
 * An active customer subscription.
 */
interface CustomerStateSubscription {
  /**
   * The ID of the subscription.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * Key-value object storing custom field values.
   */
  custom_field_data?: Record<string, string | number | boolean | string | null>;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * status
   */
  status: Status;
  /**
   * The amount of the subscription.
   */
  amount: number;
  /**
   * The currency of the subscription.
   */
  currency: string;
  /**
   * recurring_interval
   */
  recurring_interval: RecurringInterval;
  /**
   * The start timestamp of the current billing period.
   */
  current_period_start: string;
  /**
   * The end timestamp of the current billing period.
   */
  current_period_end: string;
  /**
   * The start timestamp of the trial period, if any.
   */
  trial_start: string | null;
  /**
   * The end timestamp of the trial period, if any.
   */
  trial_end: string | null;
  /**
   * Whether the subscription will be canceled at the end of the current period.
   */
  cancel_at_period_end: boolean;
  /**
   * The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`.
   */
  canceled_at: string | null;
  /**
   * The timestamp when the subscription started.
   */
  started_at: string | null;
  /**
   * The timestamp when the subscription will end.
   */
  ends_at: string | null;
  /**
   * The ID of the subscribed product.
   */
  product_id: string;
  /**
   * The ID of the applied discount, if any.
   */
  discount_id: string | null;
  /**
   * List of meters associated with the subscription.
   */
  meters: CustomerStateSubscriptionMeter[];
}
/**
 * Current consumption and spending for a subscription meter.
 */
interface CustomerStateSubscriptionMeter {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The number of consumed units so far in this billing period.
   */
  consumed_units: number;
  /**
   * The number of credited units so far in this billing period.
   */
  credited_units: number;
  /**
   * The amount due in cents so far in this billing period.
   */
  amount: number;
  /**
   * The ID of the meter.
   */
  meter_id: string;
}
/**
 * A team customer along with additional state information:
 * Active subscriptions
 * Granted benefits
 * Active meters
 */
interface CustomerStateTeam {
  /**
   * The ID of the customer.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.
   */
  external_id?: string | null;
  /**
   * The email address of the customer. This must be unique within the organization.
   */
  email?: string | null;
  /**
   * Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address.
   */
  email_verified: boolean;
  /**
   * The type of customer. Team customers can have multiple members.
   */
  type: "team";
  /**
   * The name of the customer.
   */
  name: string | null;
  /**
   * The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set.
   */
  billing_name: string | null;
  /**
   * billing_address
   */
  billing_address: Address | null;
  /**
   * tax_id
   */
  tax_id: unknown[] | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * The ID of the organization owning the customer.
   */
  organization_id: string;
  /**
   * The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details.
   */
  default_payment_method_id?: string | null;
  /**
   * Timestamp for when the customer was soft deleted.
   */
  deleted_at: string | null;
  /**
   * avatar_url
   */
  avatar_url: string | null;
  /**
   * The customer's active subscriptions.
   */
  active_subscriptions: CustomerStateSubscription[];
  /**
   * The customer's active benefit grants.
   */
  granted_benefits: CustomerStateBenefitGrant[];
  /**
   * The customer's active meters.
   */
  active_meters: CustomerStateMeter[];
}
/**
 * CustomerSubscription
 */
interface CustomerSubscription {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The amount of the subscription.
   */
  amount: number;
  /**
   * The currency of the subscription.
   */
  currency: string;
  /**
   * recurring_interval
   */
  recurring_interval: RecurringInterval;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on.
   */
  recurring_interval_count: number;
  /**
   * status
   */
  status: SubscriptionStatus;
  /**
   * The start timestamp of the current billing period.
   */
  current_period_start: string;
  /**
   * The end timestamp of the current billing period.
   */
  current_period_end: string;
  /**
   * The start timestamp of the current meter period, if the product has a meter cycle set. Metered credits are granted and overage is settled on this cadence.
   */
  current_meter_period_start: string | null;
  /**
   * The end timestamp of the current meter period, if the product has a meter cycle set. This is when credits next renew.
   */
  current_meter_period_end: string | null;
  /**
   * The start timestamp of the trial period, if any.
   */
  trial_start: string | null;
  /**
   * The end timestamp of the trial period, if any.
   */
  trial_end: string | null;
  /**
   * Whether the subscription will be canceled at the end of the current period.
   */
  cancel_at_period_end: boolean;
  /**
   * The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`.
   */
  canceled_at: string | null;
  /**
   * The timestamp when the subscription started.
   */
  started_at: string | null;
  /**
   * The timestamp when the subscription will end.
   */
  ends_at: string | null;
  /**
   * The timestamp when the subscription ended.
   */
  ended_at: string | null;
  /**
   * The timestamp when the subscription entered `past_due` status.
   */
  past_due_at?: string | null;
  /**
   * Whether the subscription will be paused at the end of the current period.
   */
  pause_at_period_end: boolean;
  /**
   * The timestamp when the subscription was paused.
   */
  paused_at: string | null;
  /**
   * The timestamp when a paused subscription is scheduled to automatically resume, if set.
   */
  resumes_at: string | null;
  /**
   * The ID of the subscribed customer.
   */
  customer_id: string;
  /**
   * The ID of the subscribed product.
   */
  product_id: string;
  /**
   * The ID of the applied discount, if any.
   */
  discount_id: string | null;
  /**
   * checkout_id
   */
  checkout_id: string | null;
  /**
   * The number of seats for seat-based subscriptions. None for non-seat subscriptions.
   */
  seats?: number | null;
  /**
   * customer_cancellation_reason
   */
  customer_cancellation_reason: CustomerCancellationReason | null;
  /**
   * customer_cancellation_comment
   */
  customer_cancellation_comment: string | null;
  /**
   * product
   */
  product: CustomerSubscriptionProduct;
  /**
   * List of enabled prices for the subscription.
   */
  prices: (LegacyRecurringProductPrice | ProductPrice)[];
  /**
   * List of meters associated with the subscription.
   */
  meters: CustomerSubscriptionMeter[];
  /**
   * Pending subscription update that will be applied at the beginning of the next period. If `null`, there is no pending update.
   */
  pending_update: PendingSubscriptionUpdate | null;
}
/**
 * CustomerSubscriptionCancel
 */
interface CustomerSubscriptionCancel {
  /**
     * Cancel an active subscription once the current period ends.
  
  Or uncancel a subscription currently set to be revoked at period end.
     */
  cancel_at_period_end?: boolean | null;
  /**
   * Customers reason for cancellation.
   * `too_expensive`: Too expensive for the customer.
   * `missing_features`: Customer is missing certain features.
   * `switched_service`: Customer switched to another service.
   * `unused`: Customer is not using it enough.
   * `customer_service`: Customer is not satisfied with the customer service.
   * `low_quality`: Customer is unhappy with the quality.
   * `too_complex`: Customer considers the service too complicated.
   * `other`: Other reason(s).
   */
  cancellation_reason?: CustomerCancellationReason | null;
  /**
   * Customer feedback and why they decided to cancel.
   */
  cancellation_comment?: string | null;
}
/**
 * CustomerSubscriptionMeter
 */
interface CustomerSubscriptionMeter {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The number of consumed units so far in this billing period.
   */
  consumed_units: number;
  /**
   * The number of credited units so far in this billing period.
   */
  credited_units: number;
  /**
   * The amount due in cents so far in this billing period.
   */
  amount: number;
  /**
   * The ID of the meter.
   */
  meter_id: string;
  /**
   * meter
   */
  meter: CustomerSubscriptionMeterMeter;
}
/**
 * CustomerSubscriptionMeterMeter
 */
interface CustomerSubscriptionMeterMeter {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The name of the meter. Will be shown on customer's invoices and usage.
   */
  name: string;
}
/**
 * CustomerSubscriptionPause
 */
interface CustomerSubscriptionPause {
  /**
     * Pause an active subscription at the end of the current period.
  
  Or cancel a scheduled pause on a subscription set to be paused at
  period end.
     */
  pause_at_period_end: boolean;
  /**
   * Date at which the paused subscription should automatically resume. If not set, it stays paused until resumed. Must be after the current period end.
   */
  resumes_at?: string | null;
}
/**
 * CustomerSubscriptionProduct
 */
interface CustomerSubscriptionProduct {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The interval unit for the trial period.
   */
  trial_interval: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count: number | null;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * visibility
   */
  visibility: ProductVisibility;
  /**
   * The recurring interval of the product. If `None`, the product is a one-time purchase.
   */
  recurring_interval: RecurringInterval | null;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products.
   */
  recurring_interval_count: number | null;
  /**
   * The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval.
   */
  meter_interval: RecurringInterval | null;
  /**
   * Number of meter interval units. None when no meter cycle is set.
   */
  meter_interval_count: number | null;
  /**
   * Whether the product is a subscription.
   */
  is_recurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organization_id: string;
  /**
   * List of prices for this product.
   */
  prices: (LegacyRecurringProductPrice | ProductPrice)[];
  /**
   * List of benefits granted by the product.
   */
  benefits: BenefitPublic[];
  /**
   * List of medias associated to the product.
   */
  medias: ProductMediaFileRead[];
  /**
   * organization
   */
  organization: CustomerOrganization;
}
/**
 * CustomerSubscriptionResume
 */
interface CustomerSubscriptionResume {
  /**
   * Resume a paused subscription immediately, starting a new billing period and charging the customer.
   */
  resume: true;
}
/**
 * CustomerSubscriptionUpdateClear
 */
interface CustomerSubscriptionUpdateClear {
  /**
   * Clear the pending subscription update.
   */
  pending_update: null;
}
/**
 * CustomerSubscriptionUpdateProduct
 */
interface CustomerSubscriptionUpdateProduct {
  /**
   * Update subscription to another product.
   */
  product_id: string;
}
/**
 * CustomerSubscriptionUpdateSeats
 */
interface CustomerSubscriptionUpdateSeats {
  /**
   * Update the number of seats for this subscription.
   */
  seats: number;
}
/**
 * A team customer in an organization.
 */
interface CustomerTeam {
  /**
   * The ID of the customer.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.
   */
  external_id?: string | null;
  /**
   * The email address of the customer. This must be unique within the organization.
   */
  email?: string | null;
  /**
   * Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address.
   */
  email_verified: boolean;
  /**
   * The type of customer. Team customers can have multiple members.
   */
  type: "team";
  /**
   * The name of the customer.
   */
  name: string | null;
  /**
   * The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set.
   */
  billing_name: string | null;
  /**
   * billing_address
   */
  billing_address: Address | null;
  /**
   * tax_id
   */
  tax_id: unknown[] | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * The ID of the organization owning the customer.
   */
  organization_id: string;
  /**
   * The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details.
   */
  default_payment_method_id?: string | null;
  /**
   * Timestamp for when the customer was soft deleted.
   */
  deleted_at: string | null;
  /**
   * avatar_url
   */
  avatar_url: string | null;
}
/**
 * CustomerTeamCreate
 */
interface CustomerTeamCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.
   */
  external_id?: string | null;
  /**
   * name
   */
  name?: string | null;
  /**
   * billing_address
   */
  billing_address?: AddressInput | null;
  /**
   * tax_id
   */
  tax_id?: string | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * The ID of the organization owning the customer. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * Optional owner member to create with the customer. If not provided, an owner member will be automatically created using the customer's email and name.
   */
  owner?: MemberOwnerCreate | null;
  /**
   * type
   */
  type: "team";
  /**
   * The email address of the team customer. Optional for team customers — if omitted, an owner with an email must be provided.
   */
  email?: string | null;
}
/**
 * CustomerUpdate
 */
interface CustomerUpdate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The email address of the customer. This must be unique within the organization.
   */
  email?: string | null;
  /**
   * name
   */
  name?: string | null;
  /**
   * billing_address
   */
  billing_address?: AddressInput | null;
  /**
   * tax_id
   */
  tax_id?: string | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.
   */
  external_id?: string | null;
  /**
   * The customer type. Can only be upgraded from 'individual' to 'team', never downgraded.
   */
  type?: CustomerType | null;
}
/**
 * CustomerUpdateExternalID
 */
interface CustomerUpdateExternalID {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The email address of the customer. This must be unique within the organization.
   */
  email?: string | null;
  /**
   * name
   */
  name?: string | null;
  /**
   * billing_address
   */
  billing_address?: AddressInput | null;
  /**
   * tax_id
   */
  tax_id?: string | null;
  /**
   * locale
   */
  locale?: string | null;
}
/**
 * An event created by Pago when a customer is updated.
 */
interface CustomerUpdatedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "customer.updated";
  /**
   * metadata
   */
  metadata: CustomerUpdatedMetadata;
}
/**
 * CustomerUpdatedFields
 */
interface CustomerUpdatedFields {
  /**
   * name
   */
  name?: string | null;
  /**
   * billing_name
   */
  billing_name?: string | null;
  /**
   * email
   */
  email?: string | null;
  /**
   * billing_address
   */
  billing_address?: AddressDict | null;
  /**
   * tax_id
   */
  tax_id?: string | null;
  /**
   * metadata
   */
  metadata?: Record<string, string | number | boolean> | null;
}
/**
 * CustomerUpdatedMetadata
 */
interface CustomerUpdatedMetadata {
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * customer_email
   */
  customer_email: string | null;
  /**
   * customer_name
   */
  customer_name: string | null;
  /**
   * customer_external_id
   */
  customer_external_id: string | null;
  /**
   * updated_fields
   */
  updated_fields: CustomerUpdatedFields;
}
/**
 * A wallet represents your balance with an organization.

You can top-up your wallet and use the balance to pay for usage.
 */
interface CustomerWallet {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the customer that owns the wallet.
   */
  customer_id: string;
  /**
   * The current balance of the wallet, in cents.
   */
  balance: number;
  /**
   * The currency of the wallet.
   */
  currency: string;
}
/**
 * Schema to create a fixed amount discount.
 */
interface DiscountFixedCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * Name of the discount. Will be displayed to the customer when the discount is applied.
   */
  name: string;
  /**
   * Code customers can use to apply the discount during checkout. Must be between 3 and 256 characters long and contain only alphanumeric characters.If not provided, the discount can only be applied via the API.
   */
  code?: string | null;
  /**
   * Optional timestamp after which the discount is redeemable.
   */
  starts_at?: string | null;
  /**
   * Optional timestamp after which the discount is no longer redeemable.
   */
  ends_at?: string | null;
  /**
   * Optional maximum number of times the discount can be redeemed.
   */
  max_redemptions?: number | null;
  /**
   * products
   */
  products?: string[] | null;
  /**
   * The ID of the organization owning the discount. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * type
   */
  type?: "fixed";
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
     * Number of months the discount should be applied.
  
  Required when `duration` is `repeating`. Must be omitted otherwise.
  
  For this to work on yearly pricing, you should multiply this by 12.
  For example, to apply the discount for 2 years, set this to 24.
     */
  duration_in_months?: number | null;
  /**
   * amount
   */
  amount?: number | null;
  /**
   * currency
   */
  currency?: PresentmentCurrency | null;
  /**
   * amounts
   */
  amounts?: Record<string, number> | null;
}
/**
 * Schema for a fixed amount discount that is applied once or forever.
 */
interface DiscountFixedOnceForeverDuration {
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
   * type
   */
  type: DiscountType;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * Map of currency to fixed amount to discount from the total.
   */
  amounts: Record<string, number>;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * Name of the discount. Will be displayed to the customer when the discount is applied.
   */
  name: string;
  /**
   * Code customers can use to apply the discount during checkout.
   */
  code: string | null;
  /**
   * Timestamp after which the discount is redeemable.
   */
  starts_at: string | null;
  /**
   * Timestamp after which the discount is no longer redeemable.
   */
  ends_at: string | null;
  /**
   * Maximum number of times the discount can be redeemed.
   */
  max_redemptions: number | null;
  /**
   * Number of times the discount has been redeemed.
   */
  redemptions_count: number;
  /**
   * The organization ID.
   */
  organization_id: string;
  /**
   * products
   */
  products: DiscountProduct[];
}
/**
 * DiscountFixedOnceForeverDurationBase
 */
interface DiscountFixedOnceForeverDurationBase {
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
   * type
   */
  type: DiscountType;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * Map of currency to fixed amount to discount from the total.
   */
  amounts: Record<string, number>;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * Name of the discount. Will be displayed to the customer when the discount is applied.
   */
  name: string;
  /**
   * Code customers can use to apply the discount during checkout.
   */
  code: string | null;
  /**
   * Timestamp after which the discount is redeemable.
   */
  starts_at: string | null;
  /**
   * Timestamp after which the discount is no longer redeemable.
   */
  ends_at: string | null;
  /**
   * Maximum number of times the discount can be redeemed.
   */
  max_redemptions: number | null;
  /**
   * Number of times the discount has been redeemed.
   */
  redemptions_count: number;
  /**
   * The organization ID.
   */
  organization_id: string;
}
/**
 * Schema for a fixed amount discount that is applied on every invoice
for a certain number of months.
 */
interface DiscountFixedRepeatDuration {
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
   * duration_in_months
   */
  duration_in_months: number;
  /**
   * type
   */
  type: DiscountType;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * Map of currency to fixed amount to discount from the total.
   */
  amounts: Record<string, number>;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * Name of the discount. Will be displayed to the customer when the discount is applied.
   */
  name: string;
  /**
   * Code customers can use to apply the discount during checkout.
   */
  code: string | null;
  /**
   * Timestamp after which the discount is redeemable.
   */
  starts_at: string | null;
  /**
   * Timestamp after which the discount is no longer redeemable.
   */
  ends_at: string | null;
  /**
   * Maximum number of times the discount can be redeemed.
   */
  max_redemptions: number | null;
  /**
   * Number of times the discount has been redeemed.
   */
  redemptions_count: number;
  /**
   * The organization ID.
   */
  organization_id: string;
  /**
   * products
   */
  products: DiscountProduct[];
}
/**
 * DiscountFixedRepeatDurationBase
 */
interface DiscountFixedRepeatDurationBase {
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
   * duration_in_months
   */
  duration_in_months: number;
  /**
   * type
   */
  type: DiscountType;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * Map of currency to fixed amount to discount from the total.
   */
  amounts: Record<string, number>;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * Name of the discount. Will be displayed to the customer when the discount is applied.
   */
  name: string;
  /**
   * Code customers can use to apply the discount during checkout.
   */
  code: string | null;
  /**
   * Timestamp after which the discount is redeemable.
   */
  starts_at: string | null;
  /**
   * Timestamp after which the discount is no longer redeemable.
   */
  ends_at: string | null;
  /**
   * Maximum number of times the discount can be redeemed.
   */
  max_redemptions: number | null;
  /**
   * Number of times the discount has been redeemed.
   */
  redemptions_count: number;
  /**
   * The organization ID.
   */
  organization_id: string;
}
/**
 * Schema to create a percentage discount.
 */
interface DiscountPercentageCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * Name of the discount. Will be displayed to the customer when the discount is applied.
   */
  name: string;
  /**
   * Code customers can use to apply the discount during checkout. Must be between 3 and 256 characters long and contain only alphanumeric characters.If not provided, the discount can only be applied via the API.
   */
  code?: string | null;
  /**
   * Optional timestamp after which the discount is redeemable.
   */
  starts_at?: string | null;
  /**
   * Optional timestamp after which the discount is no longer redeemable.
   */
  ends_at?: string | null;
  /**
   * Optional maximum number of times the discount can be redeemed.
   */
  max_redemptions?: number | null;
  /**
   * products
   */
  products?: string[] | null;
  /**
   * The ID of the organization owning the discount. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * type
   */
  type?: "percentage";
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
     * Number of months the discount should be applied.
  
  Required when `duration` is `repeating`. Must be omitted otherwise.
  
  For this to work on yearly pricing, you should multiply this by 12.
  For example, to apply the discount for 2 years, set this to 24.
     */
  duration_in_months?: number | null;
  /**
     * Discount percentage in basis points.
  
  A basis point is 1/100th of a percent.
  For example, to create a 25.5% discount, set this to 2550.
     */
  basis_points: number;
}
/**
 * Schema for a percentage discount that is applied once or forever.
 */
interface DiscountPercentageOnceForeverDuration {
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
   * type
   */
  type: DiscountType;
  /**
   * Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount.
   */
  basis_points: number;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * Name of the discount. Will be displayed to the customer when the discount is applied.
   */
  name: string;
  /**
   * Code customers can use to apply the discount during checkout.
   */
  code: string | null;
  /**
   * Timestamp after which the discount is redeemable.
   */
  starts_at: string | null;
  /**
   * Timestamp after which the discount is no longer redeemable.
   */
  ends_at: string | null;
  /**
   * Maximum number of times the discount can be redeemed.
   */
  max_redemptions: number | null;
  /**
   * Number of times the discount has been redeemed.
   */
  redemptions_count: number;
  /**
   * The organization ID.
   */
  organization_id: string;
  /**
   * products
   */
  products: DiscountProduct[];
}
/**
 * DiscountPercentageOnceForeverDurationBase
 */
interface DiscountPercentageOnceForeverDurationBase {
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
   * type
   */
  type: DiscountType;
  /**
   * Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount.
   */
  basis_points: number;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * Name of the discount. Will be displayed to the customer when the discount is applied.
   */
  name: string;
  /**
   * Code customers can use to apply the discount during checkout.
   */
  code: string | null;
  /**
   * Timestamp after which the discount is redeemable.
   */
  starts_at: string | null;
  /**
   * Timestamp after which the discount is no longer redeemable.
   */
  ends_at: string | null;
  /**
   * Maximum number of times the discount can be redeemed.
   */
  max_redemptions: number | null;
  /**
   * Number of times the discount has been redeemed.
   */
  redemptions_count: number;
  /**
   * The organization ID.
   */
  organization_id: string;
}
/**
 * Schema for a percentage discount that is applied on every invoice
for a certain number of months.
 */
interface DiscountPercentageRepeatDuration {
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
   * duration_in_months
   */
  duration_in_months: number;
  /**
   * type
   */
  type: DiscountType;
  /**
   * Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount.
   */
  basis_points: number;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * Name of the discount. Will be displayed to the customer when the discount is applied.
   */
  name: string;
  /**
   * Code customers can use to apply the discount during checkout.
   */
  code: string | null;
  /**
   * Timestamp after which the discount is redeemable.
   */
  starts_at: string | null;
  /**
   * Timestamp after which the discount is no longer redeemable.
   */
  ends_at: string | null;
  /**
   * Maximum number of times the discount can be redeemed.
   */
  max_redemptions: number | null;
  /**
   * Number of times the discount has been redeemed.
   */
  redemptions_count: number;
  /**
   * The organization ID.
   */
  organization_id: string;
  /**
   * products
   */
  products: DiscountProduct[];
}
/**
 * DiscountPercentageRepeatDurationBase
 */
interface DiscountPercentageRepeatDurationBase {
  /**
   * duration
   */
  duration: DiscountDuration;
  /**
   * duration_in_months
   */
  duration_in_months: number;
  /**
   * type
   */
  type: DiscountType;
  /**
   * Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount.
   */
  basis_points: number;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * Name of the discount. Will be displayed to the customer when the discount is applied.
   */
  name: string;
  /**
   * Code customers can use to apply the discount during checkout.
   */
  code: string | null;
  /**
   * Timestamp after which the discount is redeemable.
   */
  starts_at: string | null;
  /**
   * Timestamp after which the discount is no longer redeemable.
   */
  ends_at: string | null;
  /**
   * Maximum number of times the discount can be redeemed.
   */
  max_redemptions: number | null;
  /**
   * Number of times the discount has been redeemed.
   */
  redemptions_count: number;
  /**
   * The organization ID.
   */
  organization_id: string;
}
/**
 * A product that a discount can be applied to.
 */
interface DiscountProduct {
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The interval unit for the trial period.
   */
  trial_interval: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count: number | null;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * visibility
   */
  visibility: ProductVisibility;
  /**
   * The recurring interval of the product. If `None`, the product is a one-time purchase.
   */
  recurring_interval: RecurringInterval | null;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products.
   */
  recurring_interval_count: number | null;
  /**
   * The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval.
   */
  meter_interval: RecurringInterval | null;
  /**
   * Number of meter interval units. None when no meter cycle is set.
   */
  meter_interval_count: number | null;
  /**
   * Whether the product is a subscription.
   */
  is_recurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organization_id: string;
}
/**
 * Schema to update a discount.
 */
interface DiscountUpdate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * name
   */
  name?: string | null;
  /**
   * Code customers can use to apply the discount during checkout. Must be between 3 and 256 characters long and contain only alphanumeric characters.If not provided, the discount can only be applied via the API.
   */
  code?: string | null;
  /**
   * Optional timestamp after which the discount is redeemable.
   */
  starts_at?: string | null;
  /**
   * Optional timestamp after which the discount is no longer redeemable.
   */
  ends_at?: string | null;
  /**
   * Optional maximum number of times the discount can be redeemed.
   */
  max_redemptions?: number | null;
  /**
   * duration
   */
  duration?: DiscountDuration | null;
  /**
   * duration_in_months
   */
  duration_in_months?: number | null;
  /**
   * type
   */
  type?: DiscountType | null;
  /**
   * amount
   */
  amount?: number | null;
  /**
   * currency
   */
  currency?: PresentmentCurrency | null;
  /**
   * amounts
   */
  amounts?: Record<string, number> | null;
  /**
   * basis_points
   */
  basis_points?: number | null;
  /**
   * products
   */
  products?: string[] | null;
}
/**
 * Schema representing a dispute.

A dispute is a challenge raised by a customer or their bank regarding a payment.
 */
interface Dispute {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * status
   */
  status: DisputeStatus;
  /**
   * Whether the dispute has been resolved (won or lost).
   */
  resolved: boolean;
  /**
   * Whether the dispute is closed (prevented, won, or lost).
   */
  closed: boolean;
  /**
   * Amount in cents disputed.
   */
  amount: number;
  /**
   * Tax amount in cents disputed.
   */
  tax_amount: number;
  /**
   * Currency code of the dispute.
   */
  currency: string;
  /**
   * The reason for the dispute as reported by the card network (e.g. `fraudulent`, `product_not_received`). `None` until the processor reports it.
   */
  reason: string | null;
  /**
   * Deadline to submit evidence in response to the dispute. `None` when no response is required.
   */
  evidence_due_by: string | null;
  /**
   * Whether the evidence submission deadline has passed.
   */
  past_due: boolean;
  /**
   * The ID of the order associated with the dispute.
   */
  order_id: string;
  /**
   * The ID of the payment associated with the dispute.
   */
  payment_id: string;
  /**
   * customer
   */
  customer: DisputeCustomer;
  /**
   * The ID of the support case for this dispute, if one was opened.
   */
  case_id: string | null;
}
/**
 * DisputeCustomer
 */
interface DisputeCustomer {
  /**
   * The ID of the customer.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.
   */
  external_id?: string | null;
  /**
   * The email address of the customer. This must be unique within the organization.
   */
  email?: string | null;
  /**
   * Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address.
   */
  email_verified: boolean;
  /**
   * type
   */
  type: CustomerType;
  /**
   * The name of the customer.
   */
  name: string | null;
  /**
   * The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set.
   */
  billing_name: string | null;
  /**
   * billing_address
   */
  billing_address: Address | null;
  /**
   * tax_id
   */
  tax_id: unknown[] | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * The ID of the organization owning the customer.
   */
  organization_id: string;
  /**
   * The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details.
   */
  default_payment_method_id?: string | null;
  /**
   * Timestamp for when the customer was soft deleted.
   */
  deleted_at: string | null;
  /**
   * avatar_url
   */
  avatar_url: string | null;
}
/**
 * DisputeNotOpenError
 */
interface DisputeNotOpenError$1 {
  /**
   * error
   */
  error: "DisputeNotOpenError";
  /**
   * detail
   */
  detail: string;
}
/**
 * Schema to create a file to be associated with the downloadables benefit.
 */
interface DownloadableFileCreate {
  /**
   * organization_id
   */
  organization_id?: string | null;
  /**
   * name
   */
  name: string;
  /**
   * mime_type
   */
  mime_type: string;
  /**
   * size
   */
  size: number;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64?: string | null;
  /**
   * upload
   */
  upload: S3FileCreateMultipart;
  /**
   * service
   */
  service: "downloadable";
  /**
   * version
   */
  version?: string | null;
}
/**
 * File to be associated with the downloadables benefit.
 */
interface DownloadableFileRead {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * name
   */
  name: string;
  /**
   * path
   */
  path: string;
  /**
   * mime_type
   */
  mime_type: string;
  /**
   * size
   */
  size: number;
  /**
   * storage_version
   */
  storage_version: string | null;
  /**
   * checksum_etag
   */
  checksum_etag: string | null;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64: string | null;
  /**
   * checksum_sha256_hex
   */
  checksum_sha256_hex: string | null;
  /**
   * last_modified_at
   */
  last_modified_at: string | null;
  /**
   * version
   */
  version: string | null;
  /**
   * service
   */
  service: "downloadable";
  /**
   * is_uploaded
   */
  is_uploaded: boolean;
  /**
   * created_at
   */
  created_at: string;
  /**
   * size_readable
   */
  size_readable: string;
}
/**
 * DownloadableRead
 */
interface DownloadableRead {
  /**
   * id
   */
  id: string;
  /**
   * benefit_id
   */
  benefit_id: string;
  /**
   * file
   */
  file: FileDownload;
}
/**
 * EventCreateCustomer
 */
interface EventCreateCustomer {
  /**
   * The timestamp of the event.
   */
  timestamp?: string;
  /**
   * The name of the event.
   */
  name: string;
  /**
   * The ID of the organization owning the event. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * Your unique identifier for this event. Useful for deduplication and parent-child relationships.
   */
  external_id?: string | null;
  /**
   * The ID of the parent event. Can be either a Pago event ID (UUID) or an external event ID.
   */
  parent_id?: string | null;
  /**
   * metadata
   */
  metadata?: EventMetadataInput;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string;
  /**
   * ID of the member within the customer's organization who performed the action. Used for member-level attribution in B2B.
   */
  member_id?: string | null;
}
/**
 * EventCreateExternalCustomer
 */
interface EventCreateExternalCustomer {
  /**
   * The timestamp of the event.
   */
  timestamp?: string;
  /**
   * The name of the event.
   */
  name: string;
  /**
   * The ID of the organization owning the event. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * Your unique identifier for this event. Useful for deduplication and parent-child relationships.
   */
  external_id?: string | null;
  /**
   * The ID of the parent event. Can be either a Pago event ID (UUID) or an external event ID.
   */
  parent_id?: string | null;
  /**
   * metadata
   */
  metadata?: EventMetadataInput;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string;
  /**
   * ID of the member in your system within the customer's organization who performed the action. Used for member-level attribution in B2B.
   */
  external_member_id?: string | null;
}
/**
 * EventMetadataInput
 */
interface EventMetadataInput {
  /**
   * _cost
   */
  _cost?: CostMetadataInput;
  /**
   * _llm
   */
  _llm?: LLMMetadata;
}
/**
 * EventMetadataOutput
 */
interface EventMetadataOutput {
  /**
   * _cost
   */
  _cost?: CostMetadataOutput;
  /**
   * _llm
   */
  _llm?: LLMMetadata;
}
/**
 * EventName
 */
interface EventName {
  /**
   * The name of the event.
   */
  name: string;
  /**
   * Human readable label of the event.
   */
  label: string;
  /**
   * source
   */
  source: EventSource;
  /**
   * Number of times the event has occurred.
   */
  occurrences: number;
  /**
   * The first time the event occurred.
   */
  first_seen: string;
  /**
   * The last time the event occurred.
   */
  last_seen: string;
}
/**
 * EventType
 */
interface EventType {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The name of the event type.
   */
  name: string;
  /**
   * The label for the event type.
   */
  label: string;
  /**
   * Property path to extract dynamic label from event metadata.
   */
  label_property_selector?: string | null;
  /**
   * The ID of the organization owning the event type.
   */
  organization_id: string;
}
/**
 * EventTypeUpdate
 */
interface EventTypeUpdate {
  /**
   * The label for the event type.
   */
  label: string;
  /**
   * Property path to extract dynamic label from event metadata (e.g., 'subject' or 'metadata.subject').
   */
  label_property_selector?: string | null;
}
/**
 * EventTypeWithStats
 */
interface EventTypeWithStats {
  /**
   * The ID of the event type. Null for system event types.
   */
  id?: string | null;
  /**
   * Creation timestamp of the event type. Null for system event types.
   */
  created_at?: string | null;
  /**
   * Last modification timestamp of the event type. Null for system event types.
   */
  modified_at?: string | null;
  /**
   * The name of the event type.
   */
  name: string;
  /**
   * The label for the event type.
   */
  label: string;
  /**
   * Property path to extract dynamic label from event metadata.
   */
  label_property_selector?: string | null;
  /**
   * The ID of the organization owning the event type.
   */
  organization_id: string;
  /**
   * source
   */
  source: EventSource;
  /**
   * Number of times the event has occurred.
   */
  occurrences: number;
  /**
   * The first time the event occurred.
   */
  first_seen: string;
  /**
   * The last time the event occurred.
   */
  last_seen: string;
}
/**
 * EventsIngest
 */
interface EventsIngest {
  /**
   * List of events to ingest.
   */
  events: (EventCreateCustomer | EventCreateExternalCustomer)[];
}
/**
 * EventsIngestResponse
 */
interface EventsIngestResponse {
  /**
   * Number of events inserted.
   */
  inserted: number;
  /**
   * Number of duplicate events skipped.
   */
  duplicates?: number;
}
/**
 * A price that already exists for this product.

Useful when updating a product if you want to keep an existing price.
 */
interface ExistingProductPrice {
  /**
   * id
   */
  id: string;
}
/**
 * ExpiredCheckoutError
 */
interface ExpiredCheckoutError$1 {
  /**
   * error
   */
  error: "ExpiredCheckoutError";
  /**
   * detail
   */
  detail: string;
}
/**
 * FileDownload
 */
interface FileDownload {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * name
   */
  name: string;
  /**
   * path
   */
  path: string;
  /**
   * mime_type
   */
  mime_type: string;
  /**
   * size
   */
  size: number;
  /**
   * storage_version
   */
  storage_version: string | null;
  /**
   * checksum_etag
   */
  checksum_etag: string | null;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64: string | null;
  /**
   * checksum_sha256_hex
   */
  checksum_sha256_hex: string | null;
  /**
   * last_modified_at
   */
  last_modified_at: string | null;
  /**
   * download
   */
  download: S3DownloadURL;
  /**
   * version
   */
  version: string | null;
  /**
   * is_uploaded
   */
  is_uploaded: boolean;
  /**
   * service
   */
  service: FileServiceTypes;
  /**
   * size_readable
   */
  size_readable: string;
}
/**
 * FilePatch
 */
interface FilePatch {
  /**
   * name
   */
  name?: string | null;
  /**
   * version
   */
  version?: string | null;
}
/**
 * FileUpload
 */
interface FileUpload {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * name
   */
  name: string;
  /**
   * path
   */
  path: string;
  /**
   * mime_type
   */
  mime_type: string;
  /**
   * size
   */
  size: number;
  /**
   * storage_version
   */
  storage_version: string | null;
  /**
   * checksum_etag
   */
  checksum_etag: string | null;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64: string | null;
  /**
   * checksum_sha256_hex
   */
  checksum_sha256_hex: string | null;
  /**
   * last_modified_at
   */
  last_modified_at: string | null;
  /**
   * upload
   */
  upload: S3FileUploadMultipart;
  /**
   * version
   */
  version: string | null;
  /**
   * is_uploaded
   */
  is_uploaded?: boolean;
  /**
   * service
   */
  service: FileServiceTypes;
  /**
   * size_readable
   */
  size_readable: string;
}
/**
 * FileUploadCompleted
 */
interface FileUploadCompleted {
  /**
   * id
   */
  id: string;
  /**
   * path
   */
  path: string;
  /**
   * parts
   */
  parts: S3FileUploadCompletedPart[];
}
/**
 * Filter
 */
interface Filter {
  /**
   * conjunction
   */
  conjunction: FilterConjunction;
  /**
   * clauses
   */
  clauses: (FilterClause | Filter)[];
}
/**
 * FilterClause
 */
interface FilterClause {
  /**
   * property
   */
  property: string;
  /**
   * operator
   */
  operator: FilterOperator;
  /**
   * value
   */
  value: string | number | boolean;
}
/**
 * Schema of a payment with a generic payment method.
 */
interface GenericPayment {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * processor
   */
  processor: PaymentProcessor;
  /**
   * status
   */
  status: PaymentStatus;
  /**
   * The payment amount in cents.
   */
  amount: number;
  /**
   * The payment currency. Currently, only `usd` is supported.
   */
  currency: string;
  /**
   * The payment method used.
   */
  method: string;
  /**
   * What initiated this payment attempt, e.g. initial purchase, subscription renewal, or an automated dunning retry.
   */
  trigger: PaymentTrigger | null;
  /**
   * Error code, if the payment was declined.
   */
  decline_reason: string | null;
  /**
   * Human-readable error message, if the payment was declined.
   */
  decline_message: string | null;
  /**
   * The ID of the organization that owns the payment.
   */
  organization_id: string;
  /**
   * The ID of the checkout session associated with this payment.
   */
  checkout_id: string | null;
  /**
   * The ID of the order associated with this payment.
   */
  order_id: string | null;
  /**
   * Additional metadata from the payment processor for internal use.
   */
  processor_metadata?: Record<string, unknown>;
}
/**
 * HTTPValidationError
 */
interface HTTPValidationError$1 {
  /**
   * detail
   */
  detail?: ValidationError[];
}
/**
 * IntrospectTokenResponse
 */
interface IntrospectTokenResponse {
  /**
   * active
   */
  active: boolean;
  /**
   * client_id
   */
  client_id: string;
  /**
   * token_type
   */
  token_type: TokenType;
  /**
   * scope
   */
  scope: string;
  /**
   * sub_type
   */
  sub_type: SubType;
  /**
   * sub
   */
  sub: string;
  /**
   * organizations
   */
  organizations: string[];
  /**
   * aud
   */
  aud: string;
  /**
   * iss
   */
  iss: string;
  /**
   * exp
   */
  exp: number;
  /**
   * iat
   */
  iat: number;
}
/**
 * LLMMetadata
 */
interface LLMMetadata {
  /**
   * The vendor of the event.
   */
  vendor: string;
  /**
   * The model used for the event.
   */
  model: string;
  /**
   * The LLM prompt used for the event.
   */
  prompt?: string | null;
  /**
   * The LLM response used for the event.
   */
  response?: string | null;
  /**
   * The number of LLM input tokens used for the event.
   */
  input_tokens: number;
  /**
   * The number of LLM cached tokens that were used for the event.
   */
  cached_input_tokens?: number;
  /**
   * The number of LLM output tokens used for the event.
   */
  output_tokens: number;
  /**
   * The total number of LLM tokens used for the event.
   */
  total_tokens: number;
}
/**
 * A pay-what-you-want recurring price for a product, i.e. a subscription.
 **Deprecated**: The recurring interval should be set on the product itself.
 */
interface LegacyRecurringProductPriceCustom {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the price.
   */
  id: string;
  /**
   * source
   */
  source: ProductPriceSource;
  /**
   * amount_type
   */
  amount_type: "custom";
  /**
   * The currency in which the customer will be charged.
   */
  price_currency: string;
  /**
   * The tax behavior of the price. If null, it defaults to the organization's default tax behavior.
   */
  tax_behavior: TaxBehaviorOption | null;
  /**
   * Whether the price is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the product owning the price.
   */
  product_id: string;
  /**
   * The type of the price.
   */
  type: "recurring";
  /**
   * recurring_interval
   */
  recurring_interval: RecurringInterval;
  /**
   * The minimum amount the customer can pay. If 0, the price is 'free or pay what you want'.
   */
  minimum_amount: number;
  /**
   * The maximum amount the customer can pay.
   */
  maximum_amount: number | null;
  /**
   * The initial amount shown to the customer.
   */
  preset_amount: number | null;
  /**
   * legacy
   */
  legacy: true;
}
/**
 * A recurring price for a product, i.e. a subscription.
 **Deprecated**: The recurring interval should be set on the product itself.
 */
interface LegacyRecurringProductPriceFixed {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the price.
   */
  id: string;
  /**
   * source
   */
  source: ProductPriceSource;
  /**
   * amount_type
   */
  amount_type: "fixed";
  /**
   * The currency in which the customer will be charged.
   */
  price_currency: string;
  /**
   * The tax behavior of the price. If null, it defaults to the organization's default tax behavior.
   */
  tax_behavior: TaxBehaviorOption | null;
  /**
   * Whether the price is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the product owning the price.
   */
  product_id: string;
  /**
   * The type of the price.
   */
  type: "recurring";
  /**
   * recurring_interval
   */
  recurring_interval: RecurringInterval;
  /**
   * The price in cents.
   */
  price_amount: number;
  /**
   * legacy
   */
  legacy: true;
}
/**
 * LicenseKeyActivate
 */
interface LicenseKeyActivate {
  /**
   * key
   */
  key: string;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * label
   */
  label: string;
  /**
     * Key-value object allowing you to set conditions that must match when validating the license key.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  conditions?: Record<string, string | number | number | boolean>;
  /**
     * Key-value object allowing you to store additional information about the activation
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  meta?: Record<string, string | number | number | boolean>;
}
/**
 * LicenseKeyActivationBase
 */
interface LicenseKeyActivationBase {
  /**
   * id
   */
  id: string;
  /**
   * license_key_id
   */
  license_key_id: string;
  /**
   * label
   */
  label: string;
  /**
   * meta
   */
  meta: Record<string, string | number | number | boolean>;
  /**
   * created_at
   */
  created_at: string;
  /**
   * modified_at
   */
  modified_at: string | null;
}
/**
 * LicenseKeyActivationRead
 */
interface LicenseKeyActivationRead {
  /**
   * id
   */
  id: string;
  /**
   * license_key_id
   */
  license_key_id: string;
  /**
   * label
   */
  label: string;
  /**
   * meta
   */
  meta: Record<string, string | number | number | boolean>;
  /**
   * created_at
   */
  created_at: string;
  /**
   * modified_at
   */
  modified_at: string | null;
  /**
   * license_key
   */
  license_key: LicenseKeyRead;
}
/**
 * LicenseKeyCustomer
 */
interface LicenseKeyCustomer {
  /**
   * The ID of the customer.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.
   */
  external_id?: string | null;
  /**
   * The email address of the customer. This must be unique within the organization.
   */
  email?: string | null;
  /**
   * Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address.
   */
  email_verified: boolean;
  /**
   * type
   */
  type: CustomerType;
  /**
   * The name of the customer.
   */
  name: string | null;
  /**
   * The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set.
   */
  billing_name: string | null;
  /**
   * billing_address
   */
  billing_address: Address | null;
  /**
   * tax_id
   */
  tax_id: unknown[] | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * The ID of the organization owning the customer.
   */
  organization_id: string;
  /**
   * The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details.
   */
  default_payment_method_id?: string | null;
  /**
   * Timestamp for when the customer was soft deleted.
   */
  deleted_at: string | null;
  /**
   * avatar_url
   */
  avatar_url: string | null;
}
/**
 * LicenseKeyDeactivate
 */
interface LicenseKeyDeactivate {
  /**
   * key
   */
  key: string;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * activation_id
   */
  activation_id: string;
}
/**
 * LicenseKeyRead
 */
interface LicenseKeyRead {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * customer
   */
  customer: LicenseKeyCustomer;
  /**
   * The benefit ID.
   */
  benefit_id: string;
  /**
   * key
   */
  key: string;
  /**
   * display_key
   */
  display_key: string;
  /**
   * status
   */
  status: LicenseKeyStatus;
  /**
   * limit_activations
   */
  limit_activations: number | null;
  /**
   * usage
   */
  usage: number;
  /**
   * limit_usage
   */
  limit_usage: number | null;
  /**
   * validations
   */
  validations: number;
  /**
   * last_validated_at
   */
  last_validated_at: string | null;
  /**
   * expires_at
   */
  expires_at: string | null;
}
/**
 * LicenseKeyUpdate
 */
interface LicenseKeyUpdate {
  /**
   * status
   */
  status?: LicenseKeyStatus | null;
  /**
   * usage
   */
  usage?: number;
  /**
   * limit_activations
   */
  limit_activations?: number | null;
  /**
   * limit_usage
   */
  limit_usage?: number | null;
  /**
   * expires_at
   */
  expires_at?: string | null;
}
/**
 * LicenseKeyValidate
 */
interface LicenseKeyValidate {
  /**
   * key
   */
  key: string;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * activation_id
   */
  activation_id?: string | null;
  /**
   * benefit_id
   */
  benefit_id?: string | null;
  /**
   * customer_id
   */
  customer_id?: string | null;
  /**
   * increment_usage
   */
  increment_usage?: number | null;
  /**
     * Key-value object allowing you to set conditions that must match when validating the license key.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  conditions?: Record<string, string | number | number | boolean>;
}
/**
 * LicenseKeyWithActivations
 */
interface LicenseKeyWithActivations {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * customer
   */
  customer: LicenseKeyCustomer;
  /**
   * The benefit ID.
   */
  benefit_id: string;
  /**
   * key
   */
  key: string;
  /**
   * display_key
   */
  display_key: string;
  /**
   * status
   */
  status: LicenseKeyStatus;
  /**
   * limit_activations
   */
  limit_activations: number | null;
  /**
   * usage
   */
  usage: number;
  /**
   * limit_usage
   */
  limit_usage: number | null;
  /**
   * validations
   */
  validations: number;
  /**
   * last_validated_at
   */
  last_validated_at: string | null;
  /**
   * expires_at
   */
  expires_at: string | null;
  /**
   * activations
   */
  activations: LicenseKeyActivationBase[];
}
/**
 * ListResourceBenefit
 */
interface ListResourceBenefit {
  /**
   * items
   */
  items: Benefit[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceBenefitGrant
 */
interface ListResourceBenefitGrant {
  /**
   * items
   */
  items: BenefitGrant[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceCheckout
 */
interface ListResourceCheckout {
  /**
   * items
   */
  items: Checkout[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceCheckoutLink
 */
interface ListResourceCheckoutLink {
  /**
   * items
   */
  items: CheckoutLink[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceCustomField
 */
interface ListResourceCustomField {
  /**
   * items
   */
  items: CustomField[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceCustomer
 */
interface ListResourceCustomer {
  /**
   * items
   */
  items: Customer[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceCustomerBenefitGrant
 */
interface ListResourceCustomerBenefitGrant {
  /**
   * items
   */
  items: CustomerBenefitGrant[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceCustomerCustomerMeter
 */
interface ListResourceCustomerCustomerMeter {
  /**
   * items
   */
  items: CustomerCustomerMeter[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceCustomerMeter
 */
interface ListResourceCustomerMeter {
  /**
   * items
   */
  items: CustomerMeter[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceCustomerOrder
 */
interface ListResourceCustomerOrder {
  /**
   * items
   */
  items: CustomerOrder[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceCustomerPaymentMethod
 */
interface ListResourceCustomerPaymentMethod {
  /**
   * items
   */
  items: CustomerPaymentMethod[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceCustomerPortalMember
 */
interface ListResourceCustomerPortalMember {
  /**
   * items
   */
  items: CustomerPortalMember[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceCustomerSubscription
 */
interface ListResourceCustomerSubscription {
  /**
   * items
   */
  items: CustomerSubscription[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceCustomerWallet
 */
interface ListResourceCustomerWallet {
  /**
   * items
   */
  items: CustomerWallet[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceDiscount
 */
interface ListResourceDiscount {
  /**
   * items
   */
  items: Discount[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceDispute
 */
interface ListResourceDispute {
  /**
   * items
   */
  items: Dispute[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceDownloadableRead
 */
interface ListResourceDownloadableRead {
  /**
   * items
   */
  items: DownloadableRead[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceEvent
 */
interface ListResourceEvent {
  /**
   * items
   */
  items: Event[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceEventName
 */
interface ListResourceEventName {
  /**
   * items
   */
  items: EventName[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceEventTypeWithStats
 */
interface ListResourceEventTypeWithStats {
  /**
   * items
   */
  items: EventTypeWithStats[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceFileRead
 */
interface ListResourceFileRead {
  /**
   * items
   */
  items: FileRead[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceLicenseKeyRead
 */
interface ListResourceLicenseKeyRead {
  /**
   * items
   */
  items: LicenseKeyRead[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceMember
 */
interface ListResourceMember {
  /**
   * items
   */
  items: Member[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceMeter
 */
interface ListResourceMeter {
  /**
   * items
   */
  items: Meter[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceOrder
 */
interface ListResourceOrder {
  /**
   * items
   */
  items: Order[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceOrganization
 */
interface ListResourceOrganization {
  /**
   * items
   */
  items: Organization[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourcePayment
 */
interface ListResourcePayment {
  /**
   * items
   */
  items: Payment[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourcePaymentMethod
 */
interface ListResourcePaymentMethod {
  /**
   * items
   */
  items: PaymentMethod[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceProduct
 */
interface ListResourceProduct {
  /**
   * items
   */
  items: Product[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceRefund
 */
interface ListResourceRefund {
  /**
   * items
   */
  items: Refund[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceSubscription
 */
interface ListResourceSubscription {
  /**
   * items
   */
  items: Subscription[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceWebhookDelivery
 */
interface ListResourceWebhookDelivery {
  /**
   * items
   */
  items: WebhookDelivery[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceWebhookEndpoint
 */
interface ListResourceWebhookEndpoint {
  /**
   * items
   */
  items: WebhookEndpoint[];
  /**
   * pagination
   */
  pagination: Pagination;
}
/**
 * ListResourceWithCursorPaginationEvent
 */
interface ListResourceWithCursorPaginationEvent {
  /**
   * items
   */
  items: Event[];
  /**
   * pagination
   */
  pagination: CursorPagination;
}
/**
 * ManualRetryLimitExceeded
 */
interface ManualRetryLimitExceeded$1 {
  /**
   * error
   */
  error: "ManualRetryLimitExceeded";
  /**
   * detail
   */
  detail: string;
}
/**
 * A member of a customer.
 */
interface Member {
  /**
   * The ID of the member.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the customer this member belongs to.
   */
  customer_id: string;
  /**
   * The email address of the member.
   */
  email: string;
  /**
   * The name of the member.
   */
  name: string | null;
  /**
   * The ID of the member in your system. This must be unique within the customer.
   */
  external_id: string | null;
  /**
   * role
   */
  role: MemberRole;
}
/**
 * Schema for creating a new member nested under a customer.

The customer is taken from the URL path, so it's not part of the body.
 */
interface MemberCreateFromCustomer {
  /**
   * The email address of the member.
   */
  email: string;
  /**
   * name
   */
  name?: string | null;
  /**
   * The ID of the member in your system. This must be unique within the customer.
   */
  external_id?: string | null;
  /**
   * The role of the member within the customer. To assign or transfer ownership, use the member update endpoint.
   */
  role?: Role;
}
/**
 * Schema for creating an owner member during customer creation.
 */
interface MemberOwnerCreate {
  /**
   * The email address of the member.
   */
  email: string;
  /**
   * name
   */
  name?: string | null;
  /**
   * The ID of the member in your system. This must be unique within the customer.
   */
  external_id?: string | null;
}
/**
 * Schema for updating a member.
 */
interface MemberUpdate {
  /**
   * name
   */
  name?: string | null;
  /**
   * email
   */
  email?: string | null;
  /**
   * The role of the member within the customer.
   */
  role?: MemberRole | null;
}
/**
 * Meter
 */
interface Meter {
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The name of the meter. Will be shown on customer's invoices and usage.
   */
  name: string;
  /**
   * unit
   */
  unit: MeterUnit;
  /**
   * The label for the custom unit.
   */
  custom_label?: string | null;
  /**
   * The multiplier to convert from base unit to display scale.
   */
  custom_multiplier?: number | null;
  /**
   * filter
   */
  filter: Filter;
  /**
   * The aggregation to apply on the filtered events to calculate the meter.
   */
  aggregation: CountAggregation | PropertyAggregation | UniqueAggregation;
  /**
   * The ID of the organization owning the meter.
   */
  organization_id: string;
  /**
   * Whether the meter is archived and the time it was archived.
   */
  archived_at?: string | null;
}
/**
 * MeterCreate
 */
interface MeterCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The name of the meter. Will be shown on customer's invoices and usage.
   */
  name: string;
  /**
   * unit
   */
  unit?: MeterUnit;
  /**
   * The label for the custom unit, e.g. 'request'. Required when unit is 'custom'.
   */
  custom_label?: string | null;
  /**
   * The multiplier to convert from the base unit to display scale, e.g. 1000 to display per 1000 units. Defaults to 1 when not provided.
   */
  custom_multiplier?: number | null;
  /**
   * filter
   */
  filter: Filter;
  /**
   * The aggregation to apply on the filtered events to calculate the meter.
   */
  aggregation: CountAggregation | PropertyAggregation | UniqueAggregation;
  /**
   * The ID of the organization owning the meter. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
}
/**
 * An event created by Pago when credits are added to a customer meter.
 */
interface MeterCreditEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "meter.credited";
  /**
   * metadata
   */
  metadata: MeterCreditedMetadata;
}
/**
 * MeterCreditedMetadata
 */
interface MeterCreditedMetadata {
  /**
   * meter_id
   */
  meter_id: string;
  /**
   * units
   */
  units: number;
  /**
   * rollover
   */
  rollover: boolean;
}
/**
 * MeterQuantities
 */
interface MeterQuantities {
  /**
   * quantities
   */
  quantities: MeterQuantity[];
  /**
   * The total quantity for the period.
   */
  total: number;
}
/**
 * MeterQuantity
 */
interface MeterQuantity {
  /**
   * The timestamp for the current period.
   */
  timestamp: string;
  /**
   * The quantity for the current period.
   */
  quantity: number;
}
/**
 * An event created by Pago when a customer meter is reset.
 */
interface MeterResetEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "meter.reset";
  /**
   * metadata
   */
  metadata: MeterResetMetadata;
}
/**
 * MeterResetMetadata
 */
interface MeterResetMetadata {
  /**
   * meter_id
   */
  meter_id: string;
}
/**
 * MeterUpdate
 */
interface MeterUpdate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The name of the meter. Will be shown on customer's invoices and usage.
   */
  name?: string | null;
  /**
   * The unit of the meter.
   */
  unit?: MeterUnit | null;
  /**
   * The label for the custom unit. Required when unit is 'custom'.
   */
  custom_label?: string | null;
  /**
   * The multiplier to convert from base unit to display scale. Required when unit is 'custom'.
   */
  custom_multiplier?: number | null;
  /**
   * The filter to apply on events that'll be used to calculate the meter.
   */
  filter?: Filter | null;
  /**
   * The aggregation to apply on the filtered events to calculate the meter.
   */
  aggregation?: (CountAggregation | PropertyAggregation | UniqueAggregation) | null;
  /**
   * Whether the meter is archived. Archived meters are no longer used for billing.
   */
  is_archived?: boolean | null;
}
/**
 * Information about a metric.
 */
interface Metric {
  /**
   * Unique identifier for the metric.
   */
  slug: string;
  /**
   * Human-readable name for the metric.
   */
  display_name: string;
  /**
   * type
   */
  type: MetricType;
}
/**
 * Schema for creating a metrics dashboard.
 */
interface MetricDashboardCreate {
  /**
   * Display name for the dashboard.
   */
  name: string;
  /**
   * List of metric slugs to display in this dashboard.
   */
  metrics?: string[];
  /**
   * The ID of the organization owning this dashboard. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
}
/**
 * A user-defined metrics dashboard.
 */
interface MetricDashboardSchema {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Display name for the dashboard.
   */
  name: string;
  /**
   * List of metric slugs displayed in this dashboard.
   */
  metrics: string[];
  /**
   * The ID of the organization owning this dashboard.
   */
  organization_id: string;
}
/**
 * Schema for updating a metrics dashboard.
 */
interface MetricDashboardUpdate {
  /**
   * Display name for the dashboard.
   */
  name?: string | null;
  /**
   * List of metric slugs to display in this dashboard.
   */
  metrics?: string[] | null;
}
/**
 * MetricPeriod
 */
interface MetricPeriod {
  /**
   * Timestamp of this period data.
   */
  timestamp: string;
  /**
   * active_subscriptions
   */
  active_subscriptions?: number | number | null;
  /**
   * committed_subscriptions
   */
  committed_subscriptions?: number | number | null;
  /**
   * monthly_recurring_revenue
   */
  monthly_recurring_revenue?: number | number | null;
  /**
   * trial_monthly_recurring_revenue
   */
  trial_monthly_recurring_revenue?: number | number | null;
  /**
   * committed_monthly_recurring_revenue
   */
  committed_monthly_recurring_revenue?: number | number | null;
  /**
   * trial_committed_monthly_recurring_revenue
   */
  trial_committed_monthly_recurring_revenue?: number | number | null;
  /**
   * average_revenue_per_user
   */
  average_revenue_per_user?: number | number | null;
  /**
   * checkouts
   */
  checkouts?: number | number | null;
  /**
   * succeeded_checkouts
   */
  succeeded_checkouts?: number | number | null;
  /**
   * churned_subscriptions
   */
  churned_subscriptions?: number | number | null;
  /**
   * churn_rate
   */
  churn_rate?: number | number | null;
  /**
   * seats_total
   */
  seats_total?: number | number | null;
  /**
   * seats_claimed
   */
  seats_claimed?: number | number | null;
  /**
   * seats_pending
   */
  seats_pending?: number | number | null;
  /**
   * seat_customers
   */
  seat_customers?: number | number | null;
  /**
   * new_seat_customers
   */
  new_seat_customers?: number | number | null;
  /**
   * churned_seat_customers
   */
  churned_seat_customers?: number | number | null;
  /**
   * orders
   */
  orders?: number | number | null;
  /**
   * revenue
   */
  revenue?: number | number | null;
  /**
   * net_revenue
   */
  net_revenue?: number | number | null;
  /**
   * cumulative_revenue
   */
  cumulative_revenue?: number | number | null;
  /**
   * net_cumulative_revenue
   */
  net_cumulative_revenue?: number | number | null;
  /**
   * costs
   */
  costs?: number | number | null;
  /**
   * cumulative_costs
   */
  cumulative_costs?: number | number | null;
  /**
   * average_order_value
   */
  average_order_value?: number | number | null;
  /**
   * net_average_order_value
   */
  net_average_order_value?: number | number | null;
  /**
   * cost_per_user
   */
  cost_per_user?: number | number | null;
  /**
   * active_user_by_event
   */
  active_user_by_event?: number | number | null;
  /**
   * one_time_products
   */
  one_time_products?: number | number | null;
  /**
   * one_time_products_revenue
   */
  one_time_products_revenue?: number | number | null;
  /**
   * one_time_products_net_revenue
   */
  one_time_products_net_revenue?: number | number | null;
  /**
   * new_subscriptions
   */
  new_subscriptions?: number | number | null;
  /**
   * new_subscriptions_revenue
   */
  new_subscriptions_revenue?: number | number | null;
  /**
   * new_subscriptions_net_revenue
   */
  new_subscriptions_net_revenue?: number | number | null;
  /**
   * renewed_subscriptions
   */
  renewed_subscriptions?: number | number | null;
  /**
   * renewed_subscriptions_revenue
   */
  renewed_subscriptions_revenue?: number | number | null;
  /**
   * renewed_subscriptions_net_revenue
   */
  renewed_subscriptions_net_revenue?: number | number | null;
  /**
   * canceled_subscriptions
   */
  canceled_subscriptions?: number | number | null;
  /**
   * canceled_subscriptions_customer_service
   */
  canceled_subscriptions_customer_service?: number | number | null;
  /**
   * canceled_subscriptions_low_quality
   */
  canceled_subscriptions_low_quality?: number | number | null;
  /**
   * canceled_subscriptions_missing_features
   */
  canceled_subscriptions_missing_features?: number | number | null;
  /**
   * canceled_subscriptions_switched_service
   */
  canceled_subscriptions_switched_service?: number | number | null;
  /**
   * canceled_subscriptions_too_complex
   */
  canceled_subscriptions_too_complex?: number | number | null;
  /**
   * canceled_subscriptions_too_expensive
   */
  canceled_subscriptions_too_expensive?: number | number | null;
  /**
   * canceled_subscriptions_unused
   */
  canceled_subscriptions_unused?: number | number | null;
  /**
   * canceled_subscriptions_other
   */
  canceled_subscriptions_other?: number | number | null;
  /**
   * annual_recurring_revenue
   */
  annual_recurring_revenue?: number | number | null;
  /**
   * committed_annual_recurring_revenue
   */
  committed_annual_recurring_revenue?: number | number | null;
  /**
   * checkouts_conversion
   */
  checkouts_conversion?: number | number | null;
  /**
   * ltv
   */
  ltv?: number | number | null;
  /**
   * gross_margin
   */
  gross_margin?: number | number | null;
  /**
   * gross_margin_percentage
   */
  gross_margin_percentage?: number | number | null;
  /**
   * cashflow
   */
  cashflow?: number | number | null;
  /**
   * average_seats_per_customer
   */
  average_seats_per_customer?: number | number | null;
  /**
   * seat_utilization_rate
   */
  seat_utilization_rate?: number | number | null;
}
/**
 * Metrics
 */
interface Metrics {
  /**
   * active_subscriptions
   */
  active_subscriptions?: Metric | null;
  /**
   * committed_subscriptions
   */
  committed_subscriptions?: Metric | null;
  /**
   * monthly_recurring_revenue
   */
  monthly_recurring_revenue?: Metric | null;
  /**
   * trial_monthly_recurring_revenue
   */
  trial_monthly_recurring_revenue?: Metric | null;
  /**
   * committed_monthly_recurring_revenue
   */
  committed_monthly_recurring_revenue?: Metric | null;
  /**
   * trial_committed_monthly_recurring_revenue
   */
  trial_committed_monthly_recurring_revenue?: Metric | null;
  /**
   * average_revenue_per_user
   */
  average_revenue_per_user?: Metric | null;
  /**
   * checkouts
   */
  checkouts?: Metric | null;
  /**
   * succeeded_checkouts
   */
  succeeded_checkouts?: Metric | null;
  /**
   * churned_subscriptions
   */
  churned_subscriptions?: Metric | null;
  /**
   * churn_rate
   */
  churn_rate?: Metric | null;
  /**
   * seats_total
   */
  seats_total?: Metric | null;
  /**
   * seats_claimed
   */
  seats_claimed?: Metric | null;
  /**
   * seats_pending
   */
  seats_pending?: Metric | null;
  /**
   * seat_customers
   */
  seat_customers?: Metric | null;
  /**
   * new_seat_customers
   */
  new_seat_customers?: Metric | null;
  /**
   * churned_seat_customers
   */
  churned_seat_customers?: Metric | null;
  /**
   * orders
   */
  orders?: Metric | null;
  /**
   * revenue
   */
  revenue?: Metric | null;
  /**
   * net_revenue
   */
  net_revenue?: Metric | null;
  /**
   * cumulative_revenue
   */
  cumulative_revenue?: Metric | null;
  /**
   * net_cumulative_revenue
   */
  net_cumulative_revenue?: Metric | null;
  /**
   * costs
   */
  costs?: Metric | null;
  /**
   * cumulative_costs
   */
  cumulative_costs?: Metric | null;
  /**
   * average_order_value
   */
  average_order_value?: Metric | null;
  /**
   * net_average_order_value
   */
  net_average_order_value?: Metric | null;
  /**
   * cost_per_user
   */
  cost_per_user?: Metric | null;
  /**
   * active_user_by_event
   */
  active_user_by_event?: Metric | null;
  /**
   * one_time_products
   */
  one_time_products?: Metric | null;
  /**
   * one_time_products_revenue
   */
  one_time_products_revenue?: Metric | null;
  /**
   * one_time_products_net_revenue
   */
  one_time_products_net_revenue?: Metric | null;
  /**
   * new_subscriptions
   */
  new_subscriptions?: Metric | null;
  /**
   * new_subscriptions_revenue
   */
  new_subscriptions_revenue?: Metric | null;
  /**
   * new_subscriptions_net_revenue
   */
  new_subscriptions_net_revenue?: Metric | null;
  /**
   * renewed_subscriptions
   */
  renewed_subscriptions?: Metric | null;
  /**
   * renewed_subscriptions_revenue
   */
  renewed_subscriptions_revenue?: Metric | null;
  /**
   * renewed_subscriptions_net_revenue
   */
  renewed_subscriptions_net_revenue?: Metric | null;
  /**
   * canceled_subscriptions
   */
  canceled_subscriptions?: Metric | null;
  /**
   * canceled_subscriptions_customer_service
   */
  canceled_subscriptions_customer_service?: Metric | null;
  /**
   * canceled_subscriptions_low_quality
   */
  canceled_subscriptions_low_quality?: Metric | null;
  /**
   * canceled_subscriptions_missing_features
   */
  canceled_subscriptions_missing_features?: Metric | null;
  /**
   * canceled_subscriptions_switched_service
   */
  canceled_subscriptions_switched_service?: Metric | null;
  /**
   * canceled_subscriptions_too_complex
   */
  canceled_subscriptions_too_complex?: Metric | null;
  /**
   * canceled_subscriptions_too_expensive
   */
  canceled_subscriptions_too_expensive?: Metric | null;
  /**
   * canceled_subscriptions_unused
   */
  canceled_subscriptions_unused?: Metric | null;
  /**
   * canceled_subscriptions_other
   */
  canceled_subscriptions_other?: Metric | null;
  /**
   * annual_recurring_revenue
   */
  annual_recurring_revenue?: Metric | null;
  /**
   * committed_annual_recurring_revenue
   */
  committed_annual_recurring_revenue?: Metric | null;
  /**
   * checkouts_conversion
   */
  checkouts_conversion?: Metric | null;
  /**
   * ltv
   */
  ltv?: Metric | null;
  /**
   * gross_margin
   */
  gross_margin?: Metric | null;
  /**
   * gross_margin_percentage
   */
  gross_margin_percentage?: Metric | null;
  /**
   * cashflow
   */
  cashflow?: Metric | null;
  /**
   * average_seats_per_customer
   */
  average_seats_per_customer?: Metric | null;
  /**
   * seat_utilization_rate
   */
  seat_utilization_rate?: Metric | null;
}
/**
 * Date interval limit to get metrics for a given interval.
 */
interface MetricsIntervalLimit {
  /**
   * Minimum number of days for this interval.
   */
  min_days: number;
  /**
   * Maximum number of days for this interval.
   */
  max_days: number;
}
/**
 * Date interval limits to get metrics for each interval.
 */
interface MetricsIntervalsLimits {
  /**
   * hour
   */
  hour: MetricsIntervalLimit;
  /**
   * day
   */
  day: MetricsIntervalLimit;
  /**
   * week
   */
  week: MetricsIntervalLimit;
  /**
   * month
   */
  month: MetricsIntervalLimit;
  /**
   * year
   */
  year: MetricsIntervalLimit;
}
/**
 * Date limits to get metrics.
 */
interface MetricsLimits {
  /**
   * Minimum date to get metrics.
   */
  min_date: string;
  /**
   * intervals
   */
  intervals: MetricsIntervalsLimits;
}
/**
 * Metrics response schema.
 */
interface MetricsResponse {
  /**
   * List of data for each timestamp.
   */
  periods: MetricPeriod[];
  /**
   * totals
   */
  totals: MetricsTotals;
  /**
   * metrics
   */
  metrics: Metrics;
}
/**
 * MetricsTotals
 */
interface MetricsTotals {
  /**
   * active_subscriptions
   */
  active_subscriptions?: number | number | null;
  /**
   * committed_subscriptions
   */
  committed_subscriptions?: number | number | null;
  /**
   * monthly_recurring_revenue
   */
  monthly_recurring_revenue?: number | number | null;
  /**
   * trial_monthly_recurring_revenue
   */
  trial_monthly_recurring_revenue?: number | number | null;
  /**
   * committed_monthly_recurring_revenue
   */
  committed_monthly_recurring_revenue?: number | number | null;
  /**
   * trial_committed_monthly_recurring_revenue
   */
  trial_committed_monthly_recurring_revenue?: number | number | null;
  /**
   * average_revenue_per_user
   */
  average_revenue_per_user?: number | number | null;
  /**
   * checkouts
   */
  checkouts?: number | number | null;
  /**
   * succeeded_checkouts
   */
  succeeded_checkouts?: number | number | null;
  /**
   * churned_subscriptions
   */
  churned_subscriptions?: number | number | null;
  /**
   * churn_rate
   */
  churn_rate?: number | number | null;
  /**
   * seats_total
   */
  seats_total?: number | number | null;
  /**
   * seats_claimed
   */
  seats_claimed?: number | number | null;
  /**
   * seats_pending
   */
  seats_pending?: number | number | null;
  /**
   * seat_customers
   */
  seat_customers?: number | number | null;
  /**
   * new_seat_customers
   */
  new_seat_customers?: number | number | null;
  /**
   * churned_seat_customers
   */
  churned_seat_customers?: number | number | null;
  /**
   * orders
   */
  orders?: number | number | null;
  /**
   * revenue
   */
  revenue?: number | number | null;
  /**
   * net_revenue
   */
  net_revenue?: number | number | null;
  /**
   * cumulative_revenue
   */
  cumulative_revenue?: number | number | null;
  /**
   * net_cumulative_revenue
   */
  net_cumulative_revenue?: number | number | null;
  /**
   * costs
   */
  costs?: number | number | null;
  /**
   * cumulative_costs
   */
  cumulative_costs?: number | number | null;
  /**
   * average_order_value
   */
  average_order_value?: number | number | null;
  /**
   * net_average_order_value
   */
  net_average_order_value?: number | number | null;
  /**
   * cost_per_user
   */
  cost_per_user?: number | number | null;
  /**
   * active_user_by_event
   */
  active_user_by_event?: number | number | null;
  /**
   * one_time_products
   */
  one_time_products?: number | number | null;
  /**
   * one_time_products_revenue
   */
  one_time_products_revenue?: number | number | null;
  /**
   * one_time_products_net_revenue
   */
  one_time_products_net_revenue?: number | number | null;
  /**
   * new_subscriptions
   */
  new_subscriptions?: number | number | null;
  /**
   * new_subscriptions_revenue
   */
  new_subscriptions_revenue?: number | number | null;
  /**
   * new_subscriptions_net_revenue
   */
  new_subscriptions_net_revenue?: number | number | null;
  /**
   * renewed_subscriptions
   */
  renewed_subscriptions?: number | number | null;
  /**
   * renewed_subscriptions_revenue
   */
  renewed_subscriptions_revenue?: number | number | null;
  /**
   * renewed_subscriptions_net_revenue
   */
  renewed_subscriptions_net_revenue?: number | number | null;
  /**
   * canceled_subscriptions
   */
  canceled_subscriptions?: number | number | null;
  /**
   * canceled_subscriptions_customer_service
   */
  canceled_subscriptions_customer_service?: number | number | null;
  /**
   * canceled_subscriptions_low_quality
   */
  canceled_subscriptions_low_quality?: number | number | null;
  /**
   * canceled_subscriptions_missing_features
   */
  canceled_subscriptions_missing_features?: number | number | null;
  /**
   * canceled_subscriptions_switched_service
   */
  canceled_subscriptions_switched_service?: number | number | null;
  /**
   * canceled_subscriptions_too_complex
   */
  canceled_subscriptions_too_complex?: number | number | null;
  /**
   * canceled_subscriptions_too_expensive
   */
  canceled_subscriptions_too_expensive?: number | number | null;
  /**
   * canceled_subscriptions_unused
   */
  canceled_subscriptions_unused?: number | number | null;
  /**
   * canceled_subscriptions_other
   */
  canceled_subscriptions_other?: number | number | null;
  /**
   * annual_recurring_revenue
   */
  annual_recurring_revenue?: number | number | null;
  /**
   * committed_annual_recurring_revenue
   */
  committed_annual_recurring_revenue?: number | number | null;
  /**
   * checkouts_conversion
   */
  checkouts_conversion?: number | number | null;
  /**
   * ltv
   */
  ltv?: number | number | null;
  /**
   * gross_margin
   */
  gross_margin?: number | number | null;
  /**
   * gross_margin_percentage
   */
  gross_margin_percentage?: number | number | null;
  /**
   * cashflow
   */
  cashflow?: number | number | null;
  /**
   * average_seats_per_customer
   */
  average_seats_per_customer?: number | number | null;
  /**
   * seat_utilization_rate
   */
  seat_utilization_rate?: number | number | null;
}
/**
 * MissingInvoiceBillingDetails
 */
interface MissingInvoiceBillingDetails$1 {
  /**
   * error
   */
  error: "MissingInvoiceBillingDetails";
  /**
   * detail
   */
  detail: string;
}
/**
 * NotOpenCheckout
 */
interface NotOpenCheckout {
  /**
   * error
   */
  error: "NotOpenCheckout";
  /**
   * detail
   */
  detail: string;
}
/**
 * NotPermitted
 */
interface NotPermitted$1 {
  /**
   * error
   */
  error: "NotPermitted";
  /**
   * detail
   */
  detail: string;
}
/**
 * OAuth2ClientConfiguration
 */
interface OAuth2ClientConfiguration {
  /**
   * redirect_uris
   */
  redirect_uris: string[];
  /**
   * token_endpoint_auth_method
   */
  token_endpoint_auth_method?: TokenEndpointAuthMethod;
  /**
   * grant_types
   */
  grant_types?: ("authorization_code" | "refresh_token")[];
  /**
   * response_types
   */
  response_types?: "code"[];
  /**
   * scope
   */
  scope?: string;
  /**
   * client_name
   */
  client_name: string;
  /**
   * client_uri
   */
  client_uri?: string | null;
  /**
   * logo_uri
   */
  logo_uri?: string | null;
  /**
   * tos_uri
   */
  tos_uri?: string | null;
  /**
   * policy_uri
   */
  policy_uri?: string | null;
  /**
   * default_sub_type
   */
  default_sub_type?: SubType;
}
/**
 * OAuth2ClientConfigurationUpdate
 */
interface OAuth2ClientConfigurationUpdate {
  /**
   * redirect_uris
   */
  redirect_uris: string[];
  /**
   * token_endpoint_auth_method
   */
  token_endpoint_auth_method?: TokenEndpointAuthMethod;
  /**
   * grant_types
   */
  grant_types?: ("authorization_code" | "refresh_token")[];
  /**
   * response_types
   */
  response_types?: "code"[];
  /**
   * scope
   */
  scope?: string;
  /**
   * client_name
   */
  client_name: string;
  /**
   * client_uri
   */
  client_uri?: string | null;
  /**
   * logo_uri
   */
  logo_uri?: string | null;
  /**
   * tos_uri
   */
  tos_uri?: string | null;
  /**
   * policy_uri
   */
  policy_uri?: string | null;
  /**
   * default_sub_type
   */
  default_sub_type?: SubType;
  /**
   * client_id
   */
  client_id: string;
}
/**
 * OAuth2ClientPublic
 */
interface OAuth2ClientPublic {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * client_id
   */
  client_id: string;
  /**
   * client_name
   */
  client_name: string | null;
  /**
   * client_uri
   */
  client_uri: string | null;
  /**
   * logo_uri
   */
  logo_uri: string | null;
  /**
   * tos_uri
   */
  tos_uri: string | null;
  /**
   * policy_uri
   */
  policy_uri: string | null;
}
/**
 * OffSessionChargesNotEnabled
 */
interface OffSessionChargesNotEnabled {
  /**
   * error
   */
  error: "OffSessionChargesNotEnabled";
  /**
   * detail
   */
  detail: string;
}
/**
 * Order
 */
interface Order {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * status
   */
  status: OrderStatus;
  /**
   * Whether the order has been paid for.
   */
  paid: boolean;
  /**
   * Amount in cents, before discounts and taxes.
   */
  subtotal_amount: number;
  /**
   * Discount amount in cents.
   */
  discount_amount: number;
  /**
   * Amount in cents, after discounts but before taxes.
   */
  net_amount: number;
  /**
   * Sales tax amount in cents.
   */
  tax_amount: number;
  /**
   * Amount in cents, after discounts and taxes.
   */
  total_amount: number;
  /**
   * Customer's balance amount applied to this invoice. Can increase the total amount paid, if the customer has a negative balance,  or decrease it, if the customer has a positive balance.Amount in cents.
   */
  applied_balance_amount: number;
  /**
   * Amount in cents that is due for this order.
   */
  due_amount: number;
  /**
   * Amount refunded in cents.
   */
  refunded_amount: number;
  /**
   * Sales tax refunded in cents.
   */
  refunded_tax_amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * billing_reason
   */
  billing_reason: OrderBillingReason;
  /**
   * The name of the customer that should appear on the invoice.
   */
  billing_name: string | null;
  /**
   * billing_address
   */
  billing_address: Address | null;
  /**
   * The invoice number associated with this order. `null` while the order is in `draft` status; assigned at finalize.
   */
  invoice_number: string | null;
  /**
   * Whether an invoice has been generated for this order.
   */
  is_invoice_generated: boolean;
  /**
   * The receipt number for this order. Set once the order is paid for organizations with receipts enabled. When set, a downloadable receipt PDF can be obtained via the receipt endpoint.
   */
  receipt_number: string | null;
  /**
   * Number of seats purchased (for seat-based one-time orders).
   */
  seats?: number | null;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * product_id
   */
  product_id: string | null;
  /**
   * discount_id
   */
  discount_id: string | null;
  /**
   * subscription_id
   */
  subscription_id: string | null;
  /**
   * checkout_id
   */
  checkout_id: string | null;
  /**
   * When the next automatic payment retry is scheduled. `null` if the order is not in dunning or all retries have been exhausted.
   */
  next_payment_attempt_at?: string | null;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * Key-value object storing custom field values.
   */
  custom_field_data?: Record<string, string | number | boolean | string | null>;
  /**
   * Platform fee amount in cents.
   */
  platform_fee_amount: number;
  /**
   * Currency of the platform fee.
   */
  platform_fee_currency: string | null;
  /**
   * customer
   */
  customer: OrderCustomer;
  /**
   * product
   */
  product: OrderProduct | null;
  /**
   * discount
   */
  discount: (DiscountFixedOnceForeverDurationBase | DiscountFixedRepeatDurationBase | DiscountPercentageOnceForeverDurationBase | DiscountPercentageRepeatDurationBase) | null;
  /**
   * subscription
   */
  subscription: OrderSubscription | null;
  /**
   * Line items composing the order.
   */
  items: OrderItemSchema[];
  /**
   * A summary description of the order.
   */
  description: string;
  /**
   * Amount in cents that can still be refunded (net, before taxes). Accounts for any applied customer balance and previous refunds.
   */
  refundable_amount: number;
  /**
   * Sales tax in cents that would be refunded if the full refundable amount is refunded.
   */
  refundable_tax_amount: number;
}
/**
 * Schema to create a draft order for an off-session charge.
 */
interface OrderCreate {
  /**
   * Key-value object storing custom field values.
   */
  custom_field_data?: Record<string, string | number | boolean | string | null>;
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The ID of the organization the order belongs to. **Required unless you use an organization token.** The customer and product must belong to this organization.
   */
  organization_id?: string | null;
  /**
   * The ID of the customer the order is for. Must belong to the order's organization.
   */
  customer_id: string;
  /**
   * The ID of the one-time product to charge for. Must belong to the order's organization. Only fixed-price and free products are supported.
   */
  product_id: string;
  /**
   * The currency to charge in (ISO 4217, lowercase, e.g. `usd`). Defaults to the organization's default currency; specify it to force a different one, or when the product isn't priced in the organization's default currency.
   */
  currency?: string | null;
  /**
   * A custom amount to charge, in the smallest currency unit. Overrides the product's price; defaults to the product's configured price (0 for free products). A positive amount must be at least the currency's minimum.
   */
  amount?: number | null;
  /**
   * A custom description for the order's line item, shown on the invoice and receipt (e.g. `5,000 tokens`). Defaults to the product name.
   */
  description?: string | null;
}
/**
 * OrderCustomer
 */
interface OrderCustomer {
  /**
   * The ID of the customer.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.
   */
  external_id?: string | null;
  /**
   * The email address of the customer. This must be unique within the organization.
   */
  email?: string | null;
  /**
   * Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address.
   */
  email_verified: boolean;
  /**
   * type
   */
  type: CustomerType;
  /**
   * The name of the customer.
   */
  name: string | null;
  /**
   * The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set.
   */
  billing_name: string | null;
  /**
   * billing_address
   */
  billing_address: Address | null;
  /**
   * tax_id
   */
  tax_id: unknown[] | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * The ID of the organization owning the customer.
   */
  organization_id: string;
  /**
   * The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details.
   */
  default_payment_method_id?: string | null;
  /**
   * Timestamp for when the customer was soft deleted.
   */
  deleted_at: string | null;
  /**
   * avatar_url
   */
  avatar_url: string | null;
}
/**
 * Schema to finalize a draft order and trigger an off-session charge.
 */
interface OrderFinalize {
  /**
   * ID of the payment method to charge. Must belong to the order's customer. Falls back to the customer's default payment method when unset.
   */
  payment_method_id?: string | null;
}
/**
 * Order's invoice data.
 */
interface OrderInvoice {
  /**
   * The URL to the invoice.
   */
  url: string;
}
/**
 * An order line item.
 */
interface OrderItemSchema {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Description of the line item charge.
   */
  label: string;
  /**
   * Amount in cents, before discounts and taxes.
   */
  amount: number;
  /**
   * Sales tax amount in cents.
   */
  tax_amount: number;
  /**
   * Whether this charge is due to a proration.
   */
  proration: boolean;
  /**
   * Associated price ID, if any.
   */
  product_price_id: string | null;
}
/**
 * OrderNotDraft
 */
interface OrderNotDraft$1 {
  /**
   * error
   */
  error: "OrderNotDraft";
  /**
   * detail
   */
  detail: string;
}
/**
 * OrderNotEligibleForInvoice
 */
interface OrderNotEligibleForInvoice$1 {
  /**
   * error
   */
  error: "OrderNotEligibleForInvoice";
  /**
   * detail
   */
  detail: string;
}
/**
 * OrderNotEligibleForRetry
 */
interface OrderNotEligibleForRetry$1 {
  /**
   * error
   */
  error: "OrderNotEligibleForRetry";
  /**
   * detail
   */
  detail: string;
}
/**
 * An event created by Pago when an order is paid.
 */
interface OrderPaidEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "order.paid";
  /**
   * metadata
   */
  metadata: OrderPaidMetadata;
}
/**
 * OrderPaidMetadata
 */
interface OrderPaidMetadata {
  /**
   * order_id
   */
  order_id: string;
  /**
   * product_id
   */
  product_id?: string;
  /**
   * billing_type
   */
  billing_type?: string;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency?: string;
  /**
   * net_amount
   */
  net_amount?: number;
  /**
   * tax_amount
   */
  tax_amount?: number;
  /**
   * applied_balance_amount
   */
  applied_balance_amount?: number;
  /**
   * discount_amount
   */
  discount_amount?: number;
  /**
   * discount_id
   */
  discount_id?: string;
  /**
   * platform_fee
   */
  platform_fee?: number;
  /**
   * subscription_id
   */
  subscription_id?: string;
  /**
   * recurring_interval
   */
  recurring_interval?: string;
  /**
   * recurring_interval_count
   */
  recurring_interval_count?: number;
}
/**
 * OrderProduct
 */
interface OrderProduct {
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The interval unit for the trial period.
   */
  trial_interval: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count: number | null;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * visibility
   */
  visibility: ProductVisibility;
  /**
   * The recurring interval of the product. If `None`, the product is a one-time purchase.
   */
  recurring_interval: RecurringInterval | null;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products.
   */
  recurring_interval_count: number | null;
  /**
   * The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval.
   */
  meter_interval: RecurringInterval | null;
  /**
   * Number of meter interval units. None when no meter cycle is set.
   */
  meter_interval_count: number | null;
  /**
   * Whether the product is a subscription.
   */
  is_recurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organization_id: string;
}
/**
 * Order's receipt data.
 */
interface OrderReceipt {
  /**
   * The URL to the receipt PDF.
   */
  url: string;
}
/**
 * An event created by Pago when an order is refunded.
 */
interface OrderRefundedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "order.refunded";
  /**
   * metadata
   */
  metadata: OrderRefundedMetadata;
}
/**
 * OrderRefundedMetadata
 */
interface OrderRefundedMetadata {
  /**
   * order_id
   */
  order_id: string;
  /**
   * refunded_amount
   */
  refunded_amount: number;
  /**
   * currency
   */
  currency: string;
}
/**
 * OrderSubscription
 */
interface OrderSubscription {
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The amount of the subscription.
   */
  amount: number;
  /**
   * The currency of the subscription.
   */
  currency: string;
  /**
   * recurring_interval
   */
  recurring_interval: RecurringInterval;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on.
   */
  recurring_interval_count: number;
  /**
   * status
   */
  status: SubscriptionStatus;
  /**
   * The start timestamp of the current billing period.
   */
  current_period_start: string;
  /**
   * The end timestamp of the current billing period.
   */
  current_period_end: string;
  /**
   * The start timestamp of the current meter period, if the product has a meter cycle set. Metered credits are granted and overage is settled on this cadence.
   */
  current_meter_period_start: string | null;
  /**
   * The end timestamp of the current meter period, if the product has a meter cycle set. This is when credits next renew.
   */
  current_meter_period_end: string | null;
  /**
   * The start timestamp of the trial period, if any.
   */
  trial_start: string | null;
  /**
   * The end timestamp of the trial period, if any.
   */
  trial_end: string | null;
  /**
   * Whether the subscription will be canceled at the end of the current period.
   */
  cancel_at_period_end: boolean;
  /**
   * The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`.
   */
  canceled_at: string | null;
  /**
   * The timestamp when the subscription started.
   */
  started_at: string | null;
  /**
   * The timestamp when the subscription will end.
   */
  ends_at: string | null;
  /**
   * The timestamp when the subscription ended.
   */
  ended_at: string | null;
  /**
   * The timestamp when the subscription entered `past_due` status.
   */
  past_due_at?: string | null;
  /**
   * Whether the subscription will be paused at the end of the current period.
   */
  pause_at_period_end: boolean;
  /**
   * The timestamp when the subscription was paused.
   */
  paused_at: string | null;
  /**
   * The timestamp when a paused subscription is scheduled to automatically resume, if set.
   */
  resumes_at: string | null;
  /**
   * The ID of the subscribed customer.
   */
  customer_id: string;
  /**
   * The ID of the subscribed product.
   */
  product_id: string;
  /**
   * The ID of the applied discount, if any.
   */
  discount_id: string | null;
  /**
   * checkout_id
   */
  checkout_id: string | null;
  /**
   * The number of seats for seat-based subscriptions. None for non-seat subscriptions.
   */
  seats?: number | null;
  /**
   * customer_cancellation_reason
   */
  customer_cancellation_reason: CustomerCancellationReason | null;
  /**
   * customer_cancellation_comment
   */
  customer_cancellation_comment: string | null;
}
/**
 * Schema to update an order.
 */
interface OrderUpdate {
  /**
   * The name of the customer that should appear on the invoice.
   */
  billing_name?: string | null;
  /**
   * The address of the customer that should appear on the invoice. Country and state fields cannot be updated.
   */
  billing_address?: AddressInput | null;
}
/**
 * An event created by Pago when an order is voided.
 */
interface OrderVoidedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "order.voided";
  /**
   * metadata
   */
  metadata: OrderVoidedMetadata;
}
/**
 * OrderVoidedMetadata
 */
interface OrderVoidedMetadata {
  /**
   * order_id
   */
  order_id: string;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
}
/**
 * Organization
 */
interface Organization {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Organization name shown in checkout, customer portal, emails etc.
   */
  name: string;
  /**
   * Unique organization slug in checkout, customer portal and credit card statements.
   */
  slug: string;
  /**
   * Avatar URL shown in checkout, customer portal, emails etc.
   */
  avatar_url: string | null;
  /**
   * proration_behavior
   */
  proration_behavior: SubscriptionProrationBehavior;
  /**
   * Whether customers can update their subscriptions from the customer portal.
   */
  allow_customer_updates: boolean;
  /**
   * Public support email.
   */
  email: string | null;
  /**
   * Official website of the organization.
   */
  website: string | null;
  /**
   * Links to social profiles.
   */
  socials: OrganizationSocialLink[];
  /**
   * status
   */
  status: OrganizationStatus;
  /**
   * When the business details were submitted for review.
   */
  details_submitted_at: string | null;
  /**
   * Whether members must access this organization through its SSO connection.
   */
  sso_enforced: boolean;
  /**
   * Default presentment currency. Used as fallback in checkout and customer portal, if the customer's local currency is not available.
   */
  default_presentment_currency: string;
  /**
   * default_tax_behavior
   */
  default_tax_behavior: TaxBehaviorOption;
  /**
   * Organization feature settings
   */
  feature_settings: OrganizationFeatureSettings | null;
  /**
   * subscription_settings
   */
  subscription_settings: OrganizationSubscriptionSettings;
  /**
   * customer_email_settings
   */
  customer_email_settings: OrganizationCustomerEmailSettings;
  /**
   * customer_portal_settings
   */
  customer_portal_settings: OrganizationCustomerPortalSettings;
  /**
   * Two-letter country code (ISO 3166-1 alpha-2).
   */
  country?: CountryAlpha2 | null;
  /**
   * ID of the transactions account.
   */
  account_id: string | null;
  /**
   * ID of the payout account.
   */
  payout_account_id: string | null;
  /**
   * capabilities
   */
  capabilities: OrganizationCapabilities;
}
/**
 * Schema to create a file to be used as an organization avatar.
 */
interface OrganizationAvatarFileCreate {
  /**
   * organization_id
   */
  organization_id?: string | null;
  /**
   * name
   */
  name: string;
  /**
   * MIME type of the file. Only images are supported for this type of file.
   */
  mime_type: string;
  /**
   * Size of the file. A maximum of 1 MB is allowed for this type of file.
   */
  size: number;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64?: string | null;
  /**
   * upload
   */
  upload: S3FileCreateMultipart;
  /**
   * service
   */
  service: "organization_avatar";
  /**
   * version
   */
  version?: string | null;
}
/**
 * File to be used as an organization avatar.
 */
interface OrganizationAvatarFileRead {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * name
   */
  name: string;
  /**
   * path
   */
  path: string;
  /**
   * mime_type
   */
  mime_type: string;
  /**
   * size
   */
  size: number;
  /**
   * storage_version
   */
  storage_version: string | null;
  /**
   * checksum_etag
   */
  checksum_etag: string | null;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64: string | null;
  /**
   * checksum_sha256_hex
   */
  checksum_sha256_hex: string | null;
  /**
   * last_modified_at
   */
  last_modified_at: string | null;
  /**
   * version
   */
  version: string | null;
  /**
   * service
   */
  service: "organization_avatar";
  /**
   * is_uploaded
   */
  is_uploaded: boolean;
  /**
   * created_at
   */
  created_at: string;
  /**
   * size_readable
   */
  size_readable: string;
  /**
   * public_url
   */
  public_url: string;
}
/**
 * OrganizationCapabilities
 */
interface OrganizationCapabilities {
  /**
   * Whether the organization can accept new checkout payments.
   */
  checkout_payments: boolean;
  /**
   * Whether the organization can process subscription renewals.
   */
  subscription_renewals: boolean;
  /**
   * Whether the organization can withdraw its balance.
   */
  payouts: boolean;
  /**
   * Whether the organization can issue refunds.
   */
  refunds: boolean;
  /**
   * Whether the organization can access the API.
   */
  api_access: boolean;
  /**
   * Whether the organization can access the dashboard.
   */
  dashboard_access: boolean;
}
/**
 * OrganizationCompanyLegalEntitySchema
 */
interface OrganizationCompanyLegalEntitySchema {
  /**
   * type
   */
  type: "company";
  /**
   * registered_name
   */
  registered_name: string;
}
/**
 * OrganizationCreate
 */
interface OrganizationCreate {
  /**
   * name
   */
  name: string;
  /**
   * slug
   */
  slug: string;
  /**
   * avatar_url
   */
  avatar_url?: string | null;
  /**
   * legal_entity
   */
  legal_entity?: (OrganizationIndividualLegalEntitySchema | OrganizationCompanyLegalEntitySchema) | null;
  /**
   * Public support email.
   */
  email?: string | null;
  /**
   * Official website of the organization.
   */
  website?: string | null;
  /**
   * Link to social profiles.
   */
  socials?: OrganizationSocialLink[] | null;
  /**
   * Additional, private, business details Pago needs about active organizations for compliance (KYC).
   */
  details?: OrganizationDetails | null;
  /**
   * Two-letter country code (ISO 3166-1 alpha-2).
   */
  country?: CountryAlpha2Input | null;
  /**
   * feature_settings
   */
  feature_settings?: OrganizationFeatureSettingsUpdate | null;
  /**
   * subscription_settings
   */
  subscription_settings?: OrganizationSubscriptionSettings | null;
  /**
   * customer_email_settings
   */
  customer_email_settings?: OrganizationCustomerEmailSettings | null;
  /**
   * customer_portal_settings
   */
  customer_portal_settings?: OrganizationCustomerPortalSettings | null;
  /**
   * default_presentment_currency
   */
  default_presentment_currency?: PresentmentCurrency;
  /**
   * default_tax_behavior
   */
  default_tax_behavior?: TaxBehaviorOption;
}
/**
 * OrganizationCustomerEmailSettings
 */
interface OrganizationCustomerEmailSettings {
  /**
   * order_confirmation
   */
  order_confirmation: boolean;
  /**
   * subscription_cancellation
   */
  subscription_cancellation: boolean;
  /**
   * subscription_confirmation
   */
  subscription_confirmation: boolean;
  /**
   * subscription_cycled
   */
  subscription_cycled: boolean;
  /**
   * subscription_cycled_after_trial
   */
  subscription_cycled_after_trial: boolean;
  /**
   * subscription_past_due
   */
  subscription_past_due: boolean;
  /**
   * subscription_paused
   */
  subscription_paused: boolean;
  /**
   * subscription_resumed
   */
  subscription_resumed: boolean;
  /**
   * subscription_renewal_reminder
   */
  subscription_renewal_reminder: boolean;
  /**
   * subscription_revoked
   */
  subscription_revoked: boolean;
  /**
   * subscription_trial_conversion_reminder
   */
  subscription_trial_conversion_reminder: boolean;
  /**
   * subscription_uncanceled
   */
  subscription_uncanceled: boolean;
  /**
   * subscription_updated
   */
  subscription_updated: boolean;
}
/**
 * OrganizationCustomerPortalSettings
 */
interface OrganizationCustomerPortalSettings {
  /**
   * usage
   */
  usage: CustomerPortalUsageSettings;
  /**
   * subscription
   */
  subscription: CustomerPortalSubscriptionSettings;
  /**
   * customer
   */
  customer?: CustomerPortalCustomerSettings;
}
/**
 * OrganizationDetails
 */
interface OrganizationDetails {
  /**
   * Brief information about you and your business.
   */
  about?: string | null;
  /**
   * Description of digital products being sold.
   */
  product_description?: string | null;
  /**
   * Categories of products being sold.
   */
  selling_categories?: string[];
  /**
   * Pricing models used by the organization.
   */
  pricing_models?: string[];
  /**
   * How the organization will integrate and use Pago.
   */
  intended_use?: string | null;
  /**
   * Main customer acquisition channels.
   */
  customer_acquisition?: string[];
  /**
   * Estimated revenue in the next 12 months
   */
  future_annual_revenue?: number | null;
  /**
   * Switching from another platform?
   */
  switching?: boolean;
  /**
   * Which platform the organization is migrating from.
   */
  switching_from?: ("paddle" | "lemon_squeezy" | "gumroad" | "stripe" | "other") | null;
  /**
   * Revenue from last year if applicable.
   */
  previous_annual_revenue?: number | null;
}
/**
 * OrganizationFeatureSettings
 */
interface OrganizationFeatureSettings {
  /**
   * If this organization has issue funding enabled
   */
  issue_funding_enabled?: boolean;
  /**
   * If this organization has seat-based pricing enabled
   */
  seat_based_pricing_enabled?: boolean;
  /**
   * If this organization has Wallets enabled
   */
  wallets_enabled?: boolean;
  /**
   * If this organization has the Member model enabled
   */
  member_model_enabled?: boolean;
  /**
   * If this organization has checkout localization enabled
   */
  checkout_localization_enabled?: boolean;
  /**
   * Ordered list of metric slugs shown on the dashboard overview.
   */
  overview_metrics?: string[] | null;
  /**
   * If this organization has access to reset proration behavior.
   */
  reset_proration_behavior_enabled?: boolean;
  /**
   * If this organization can create and finalize draft orders via the API (off-session charges against a saved payment method).
   */
  off_session_charges_enabled?: boolean;
  /**
   * Enables the slack shared channel benefit
   */
  slack_benefit_enabled?: boolean;
  /**
   * If this organization has preview access to new features enabled
   */
  preview_access_enabled?: boolean;
  /**
   * If this organization has the disputes dashboard enabled
   */
  disputes_enabled?: boolean;
  /**
   * If this organization has single sign-on configuration enabled
   */
  sso_enabled?: boolean;
  /**
   * If this organization has the split product navigation (Billing / Compass / Customers) enabled in the dashboard
   */
  compass_enabled?: boolean;
  /**
   * If this organization can migrate its billing from another provider (e.g. Stripe) to Pago.
   */
  merchant_migration_enabled?: boolean;
}
/**
 * Feature settings that organizations can update themselves.

Other feature settings are managed by Pago staff: they're ignored if
provided and keep their current value.
 */
interface OrganizationFeatureSettingsUpdate {
  /**
   * If this organization has seat-based pricing enabled
   */
  seat_based_pricing_enabled?: boolean;
  /**
   * If this organization has the Member model enabled
   */
  member_model_enabled?: boolean;
  /**
   * If this organization has checkout localization enabled
   */
  checkout_localization_enabled?: boolean;
  /**
   * Ordered list of metric slugs shown on the dashboard overview.
   */
  overview_metrics?: string[] | null;
}
/**
 * OrganizationIndividualLegalEntitySchema
 */
interface OrganizationIndividualLegalEntitySchema {
  /**
   * type
   */
  type: "individual";
}
/**
 * OrganizationNotReadyForPayments
 */
interface OrganizationNotReadyForPayments {
  /**
   * error
   */
  error: "OrganizationNotReadyForPayments";
  /**
   * detail
   */
  detail: string;
}
/**
 * OrganizationSocialLink
 */
interface OrganizationSocialLink {
  /**
   * platform
   */
  platform: OrganizationSocialPlatforms;
  /**
   * The URL to the organization profile
   */
  url: string;
}
/**
 * OrganizationSubscriptionSettings
 */
interface OrganizationSubscriptionSettings {
  /**
   * allow_multiple_subscriptions
   */
  allow_multiple_subscriptions: boolean;
  /**
   * proration_behavior
   */
  proration_behavior: PublicSubscriptionProrationBehavior;
  /**
   * benefit_revocation_grace_period
   */
  benefit_revocation_grace_period: number;
  /**
   * prevent_trial_abuse
   */
  prevent_trial_abuse: boolean;
  /**
   * allow_customer_updates
   */
  allow_customer_updates: boolean;
}
/**
 * OrganizationUpdate
 */
interface OrganizationUpdate {
  /**
   * name
   */
  name?: string | null;
  /**
   * avatar_url
   */
  avatar_url?: string | null;
  /**
   * Public support email.
   */
  email?: string | null;
  /**
   * Official website of the organization.
   */
  website?: string | null;
  /**
   * Links to social profiles.
   */
  socials?: OrganizationSocialLink[] | null;
  /**
   * Additional, private, business details Pago needs about active organizations for compliance (KYC).
   */
  details?: OrganizationDetails | null;
  /**
   * Two-letter country code (ISO 3166-1 alpha-2).
   */
  country?: CountryAlpha2Input | null;
  /**
   * feature_settings
   */
  feature_settings?: OrganizationFeatureSettingsUpdate | null;
  /**
   * subscription_settings
   */
  subscription_settings?: OrganizationSubscriptionSettings | null;
  /**
   * customer_email_settings
   */
  customer_email_settings?: OrganizationCustomerEmailSettings | null;
  /**
   * customer_portal_settings
   */
  customer_portal_settings?: OrganizationCustomerPortalSettings | null;
  /**
   * Default presentment currency for the organization
   */
  default_presentment_currency?: PresentmentCurrency | null;
  /**
   * Default tax behavior applied on products.
   */
  default_tax_behavior?: TaxBehaviorOption | null;
  /**
   * Whether members must access this organization through its SSO connection. Turning this on requires an active SSO session for this organization and at least one enabled SSO connection.
   */
  sso_enforced?: boolean | null;
}
/**
 * Pagination
 */
interface Pagination {
  /**
   * total_count
   */
  total_count: number;
  /**
   * max_page
   */
  max_page: number;
}
/**
 * PauseResumeNotAllowed
 */
interface PauseResumeNotAllowed {
  /**
   * error
   */
  error: "PauseResumeNotAllowed";
  /**
   * detail
   */
  detail: string;
}
/**
 * PaymentActionRequired
 */
interface PaymentActionRequired {
  /**
   * error
   */
  error: "PaymentActionRequired";
  /**
   * detail
   */
  detail: string;
}
/**
 * PaymentAlreadyInProgress
 */
interface PaymentAlreadyInProgress$1 {
  /**
   * error
   */
  error: "PaymentAlreadyInProgress";
  /**
   * detail
   */
  detail: string;
}
/**
 * PaymentError
 */
interface PaymentError$1 {
  /**
   * error
   */
  error: "PaymentError";
  /**
   * detail
   */
  detail: string;
}
/**
 * PaymentFailed
 */
interface PaymentFailed$1 {
  /**
   * error
   */
  error: "PaymentFailed";
  /**
   * detail
   */
  detail: string;
}
/**
 * PaymentMethodCard
 */
interface PaymentMethodCard {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * processor
   */
  processor: PaymentProcessor;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * type
   */
  type: "card";
  /**
   * method_metadata
   */
  method_metadata: PaymentMethodCardMetadata;
}
/**
 * PaymentMethodCardMetadata
 */
interface PaymentMethodCardMetadata {
  /**
   * brand
   */
  brand: string;
  /**
   * last4
   */
  last4: string;
  /**
   * exp_month
   */
  exp_month: number;
  /**
   * exp_year
   */
  exp_year: number;
  /**
   * wallet
   */
  wallet?: string | null;
}
/**
 * PaymentMethodGeneric
 */
interface PaymentMethodGeneric {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * processor
   */
  processor: PaymentProcessor;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * type
   */
  type: string;
}
/**
 * PaymentMethodInUseByActiveSubscription
 */
interface PaymentMethodInUseByActiveSubscription$1 {
  /**
   * error
   */
  error: "PaymentMethodInUseByActiveSubscription";
  /**
   * detail
   */
  detail: string;
}
/**
 * PaymentMethodSetupFailed
 */
interface PaymentMethodSetupFailed$1 {
  /**
   * error
   */
  error: "PaymentMethodSetupFailed";
  /**
   * detail
   */
  detail: string;
}
/**
 * PaymentNotReady
 */
interface PaymentNotReady {
  /**
   * error
   */
  error: "PaymentNotReady";
  /**
   * detail
   */
  detail: string;
}
/**
 * Pending update to be applied to a subscription at the beginning of the next period.
 */
interface PendingSubscriptionUpdate {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The date and time when the subscription update will be applied.
   */
  applies_at: string;
  /**
   * ID of the new product to apply to the subscription. If `null`, the product won't be changed.
   */
  product_id: string | null;
  /**
   * Number of seats to apply to the subscription. If `null`, the number of seats won't be changed.
   */
  seats: number | null;
}
/**
 * Information about the authenticated portal user.
 */
interface PortalAuthenticatedUser {
  /**
   * Type of authenticated user: 'customer' or 'member'
   */
  type: string;
  /**
   * User's name, if available.
   */
  name: string | null;
  /**
   * User's email address.
   */
  email: string;
  /**
   * Associated customer ID.
   */
  customer_id: string;
  /**
   * Member ID. Only set for members.
   */
  member_id?: string | null;
  /**
   * Member role (owner, billing_manager, member). Only set for members.
   */
  role?: string | null;
}
/**
 * A product.
 */
interface Product {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The interval unit for the trial period.
   */
  trial_interval: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count: number | null;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * visibility
   */
  visibility: ProductVisibility;
  /**
   * The recurring interval of the product. If `None`, the product is a one-time purchase.
   */
  recurring_interval: RecurringInterval | null;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products.
   */
  recurring_interval_count: number | null;
  /**
   * The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval.
   */
  meter_interval: RecurringInterval | null;
  /**
   * Number of meter interval units. None when no meter cycle is set.
   */
  meter_interval_count: number | null;
  /**
   * Whether the product is a subscription.
   */
  is_recurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organization_id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * List of prices for this product.
   */
  prices: (LegacyRecurringProductPrice | ProductPrice)[];
  /**
   * List of benefits granted by the product.
   */
  benefits: Benefit[];
  /**
   * List of medias associated to the product.
   */
  medias: ProductMediaFileRead[];
  /**
   * List of custom fields attached to the product.
   */
  attached_custom_fields: AttachedCustomField[];
}
/**
 * Schema to update the benefits granted by a product.
 */
interface ProductBenefitsUpdate {
  /**
   * List of benefit IDs. Each one must be on the same organization as the product.
   */
  benefits: string[];
}
/**
 * ProductCreateOneTime
 */
interface ProductCreateOneTime {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description?: string | null;
  /**
   * visibility
   */
  visibility?: ProductVisibility;
  /**
   * List of available prices for this product. It may combine at most one fixed price with one seat-based price (billed as `fixed + seat_charge`), or contain a single custom or free price, plus any number of metered prices. A free price cannot be combined with other prices, and a custom price cannot be combined with a fixed or seat-based price. Metered prices are not supported on one-time purchase products.
   */
  prices: (ProductPriceFixedCreate | ProductPriceCustomCreate | ProductPriceSeatBasedCreate | ProductPriceMeteredUnitCreate)[];
  /**
   * List of file IDs. Each one must be on the same organization as the product, of type `product_media` and correctly uploaded.
   */
  medias?: string[] | null;
  /**
   * List of custom fields to attach.
   */
  attached_custom_fields?: AttachedCustomFieldCreate[];
  /**
   * The ID of the organization owning the product. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * States that the product is a one-time purchase.
   */
  recurring_interval?: null;
  /**
   * One-time products don't have a recurring interval count.
   */
  recurring_interval_count?: null;
}
/**
 * ProductCreateRecurring
 */
interface ProductCreateRecurring {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description?: string | null;
  /**
   * visibility
   */
  visibility?: ProductVisibility;
  /**
   * List of available prices for this product. It may combine at most one fixed price with one seat-based price (billed as `fixed + seat_charge`), or contain a single custom or free price, plus any number of metered prices. A free price cannot be combined with other prices, and a custom price cannot be combined with a fixed or seat-based price. Metered prices are not supported on one-time purchase products.
   */
  prices: (ProductPriceFixedCreate | ProductPriceCustomCreate | ProductPriceSeatBasedCreate | ProductPriceMeteredUnitCreate)[];
  /**
   * List of file IDs. Each one must be on the same organization as the product, of type `product_media` and correctly uploaded.
   */
  medias?: string[] | null;
  /**
   * List of custom fields to attach.
   */
  attached_custom_fields?: AttachedCustomFieldCreate[];
  /**
   * The ID of the organization owning the product. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
  /**
   * The interval unit for the trial period.
   */
  trial_interval?: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count?: number | null;
  /**
   * recurring_interval
   */
  recurring_interval: RecurringInterval;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on.
   */
  recurring_interval_count?: number;
  /**
   * Optional meter cycle, independent of the billing interval. When set, overage settlement, meter resets and meter-credit grants run on this cadence rather than the billing interval — e.g. yearly billing with monthly credits. It must evenly divide the billing interval. If `None`, metered concerns follow the billing interval. **Once set, it can't be changed.**
   */
  meter_interval?: RecurringInterval | null;
  /**
   * Number of meter interval units. Defaults to 1 when `meter_interval` is set. Ignored when `meter_interval` is `None`.
   */
  meter_interval_count?: number | null;
}
/**
 * Schema to create a file to be used as a product media file.
 */
interface ProductMediaFileCreate {
  /**
   * organization_id
   */
  organization_id?: string | null;
  /**
   * name
   */
  name: string;
  /**
   * MIME type of the file. Only images are supported for this type of file.
   */
  mime_type: string;
  /**
   * Size of the file. A maximum of 10 MB is allowed for this type of file.
   */
  size: number;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64?: string | null;
  /**
   * upload
   */
  upload: S3FileCreateMultipart;
  /**
   * service
   */
  service: "product_media";
  /**
   * version
   */
  version?: string | null;
}
/**
 * File to be used as a product media file.
 */
interface ProductMediaFileRead {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * name
   */
  name: string;
  /**
   * path
   */
  path: string;
  /**
   * mime_type
   */
  mime_type: string;
  /**
   * size
   */
  size: number;
  /**
   * storage_version
   */
  storage_version: string | null;
  /**
   * checksum_etag
   */
  checksum_etag: string | null;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64: string | null;
  /**
   * checksum_sha256_hex
   */
  checksum_sha256_hex: string | null;
  /**
   * last_modified_at
   */
  last_modified_at: string | null;
  /**
   * version
   */
  version: string | null;
  /**
   * service
   */
  service: "product_media";
  /**
   * is_uploaded
   */
  is_uploaded: boolean;
  /**
   * created_at
   */
  created_at: string;
  /**
   * size_readable
   */
  size_readable: string;
  /**
   * public_url
   */
  public_url: string;
}
/**
 * A pay-what-you-want price for a product.
 */
interface ProductPriceCustom {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the price.
   */
  id: string;
  /**
   * source
   */
  source: ProductPriceSource;
  /**
   * amount_type
   */
  amount_type: "custom";
  /**
   * The currency in which the customer will be charged.
   */
  price_currency: string;
  /**
   * The tax behavior of the price. If null, it defaults to the organization's default tax behavior.
   */
  tax_behavior: TaxBehaviorOption | null;
  /**
   * Whether the price is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the product owning the price.
   */
  product_id: string;
  /**
   * The minimum amount the customer can pay. If 0, the price is 'free or pay what you want'.
   */
  minimum_amount: number;
  /**
   * The maximum amount the customer can pay.
   */
  maximum_amount: number | null;
  /**
   * The initial amount shown to the customer.
   */
  preset_amount: number | null;
}
/**
 * Schema to create a pay-what-you-want price.
 */
interface ProductPriceCustomCreate {
  /**
   * amount_type
   */
  amount_type: "custom";
  /**
   * price_currency
   */
  price_currency?: PresentmentCurrency;
  /**
   * The tax behavior of the price. If not set, it will default to the organization's default tax behavior.
   */
  tax_behavior?: TaxBehaviorOption | null;
  /**
     * The minimum amount the customer can pay. If set to 0, the price is 'free or pay what you want' and $0 is accepted. If set to a value below the minimum price amount for the currency, it will be rejected. Defaults to the minimum price amount for the currency. Minimum per currency:
  - USD: 0.5
  - AED: 2
  - ALL: 50
  - AMD: 200
  - AOA: 500
  - ARS: 750
  - AUD: 0.7
  - AWG: 1
  - AZN: 1
  - BAM: 1
  - BBD: 2
  - BDT: 70
  - BIF: 2,000
  - BMD: 1
  - BND: 1
  - BOB: 5
  - BRL: 2.5
  - BSD: 1
  - BWP: 10
  - BZD: 2
  - CAD: 0.7
  - CDF: 2,000
  - CHF: 0.5
  - CLP: 500
  - CNY: 5
  - COP: 2,000
  - CRC: 300
  - CVE: 50
  - CZK: 15
  - DJF: 100
  - DKK: 3.2
  - DOP: 40
  - DZD: 70
  - EGP: 30
  - ETB: 80
  - EUR: 0.5
  - FJD: 2
  - FKP: 1
  - GBP: 0.4
  - GEL: 2
  - GNF: 5,000
  - GIP: 1
  - GMD: 40
  - GTQ: 5
  - GYD: 200
  - HKD: 4
  - HNL: 20
  - HTG: 70
  - HUF: 175
  - IDR: 9,000
  - ILS: 1.5
  - INR: 60
  - ISK: 70
  - JMD: 80
  - JPY: 80
  - KES: 70
  - KGS: 50
  - KHR: 3,000
  - KMF: 500
  - KRW: 800
  - KYD: 1
  - KZT: 300
  - LAK: 20,000
  - LKR: 200
  - LRD: 100
  - LSL: 10
  - MAD: 5
  - MDL: 10
  - MGA: 3,000
  - MKD: 50
  - MNT: 2,000
  - MOP: 5
  - MUR: 50
  - MVR: 8
  - MXN: 9
  - MWK: 1,000
  - MYR: 2
  - MZN: 50
  - NAD: 10
  - NGN: 700
  - NIO: 20
  - NOK: 5
  - NPR: 80
  - NZD: 0.9
  - PAB: 1
  - PEN: 2
  - PGK: 3
  - PHP: 35
  - PKR: 200
  - PLN: 2
  - PYG: 4,000
  - QAR: 2
  - RON: 2.5
  - RSD: 60
  - RWF: 1,000
  - SAR: 2
  - SBD: 4
  - SCR: 8
  - SEK: 5
  - SGD: 0.7
  - SHP: 1
  - SOS: 500
  - SRD: 20
  - SZL: 10
  - THB: 20
  - TJS: 5
  - TOP: 2
  - TRY: 30
  - TTD: 4
  - TWD: 20
  - TZS: 2,000
  - UAH: 30
  - UGX: 2,000
  - UYU: 20
  - UZS: 7,000
  - VND: 20,000
  - VUV: 100
  - WST: 2
  - XAF: 500
  - XCD: 2
  - XCG: 1
  - XOF: 500
  - XPF: 100
  - YER: 200
  - ZAR: 9
  - ZMW: 10
  - Other currencies: 50 minor units
     */
  minimum_amount?: number;
  /**
     * The maximum amount the customer can pay. Maximum per currency:
  - USD: 999,999.99
  - EUR: 999,999.99
  - GBP: 999,999.99
  - ARS: 1,400,000
  - CDF: 2,800,000
  - COP: 4,000,000
  - IDR: 16,000,000
  - KHR: 4,000,000
  - LAK: 21,000,000
  - MNT: 3,500,000
  - MWK: 1,750,000
  - NGN: 1,550,000
  - TZS: 2,500,000
  - UGX: 3,700,000
  - UZS: 12,500,000
  - Other currencies: 99,999,999 minor units
     */
  maximum_amount?: number | null;
  /**
     * The initial amount shown to the customer. If 0, the customer will see $0 as the default. If set to a value below the minimum price amount for the currency, it will be rejected.Minimum per currency:
  - USD: 0.5
  - AED: 2
  - ALL: 50
  - AMD: 200
  - AOA: 500
  - ARS: 750
  - AUD: 0.7
  - AWG: 1
  - AZN: 1
  - BAM: 1
  - BBD: 2
  - BDT: 70
  - BIF: 2,000
  - BMD: 1
  - BND: 1
  - BOB: 5
  - BRL: 2.5
  - BSD: 1
  - BWP: 10
  - BZD: 2
  - CAD: 0.7
  - CDF: 2,000
  - CHF: 0.5
  - CLP: 500
  - CNY: 5
  - COP: 2,000
  - CRC: 300
  - CVE: 50
  - CZK: 15
  - DJF: 100
  - DKK: 3.2
  - DOP: 40
  - DZD: 70
  - EGP: 30
  - ETB: 80
  - EUR: 0.5
  - FJD: 2
  - FKP: 1
  - GBP: 0.4
  - GEL: 2
  - GNF: 5,000
  - GIP: 1
  - GMD: 40
  - GTQ: 5
  - GYD: 200
  - HKD: 4
  - HNL: 20
  - HTG: 70
  - HUF: 175
  - IDR: 9,000
  - ILS: 1.5
  - INR: 60
  - ISK: 70
  - JMD: 80
  - JPY: 80
  - KES: 70
  - KGS: 50
  - KHR: 3,000
  - KMF: 500
  - KRW: 800
  - KYD: 1
  - KZT: 300
  - LAK: 20,000
  - LKR: 200
  - LRD: 100
  - LSL: 10
  - MAD: 5
  - MDL: 10
  - MGA: 3,000
  - MKD: 50
  - MNT: 2,000
  - MOP: 5
  - MUR: 50
  - MVR: 8
  - MXN: 9
  - MWK: 1,000
  - MYR: 2
  - MZN: 50
  - NAD: 10
  - NGN: 700
  - NIO: 20
  - NOK: 5
  - NPR: 80
  - NZD: 0.9
  - PAB: 1
  - PEN: 2
  - PGK: 3
  - PHP: 35
  - PKR: 200
  - PLN: 2
  - PYG: 4,000
  - QAR: 2
  - RON: 2.5
  - RSD: 60
  - RWF: 1,000
  - SAR: 2
  - SBD: 4
  - SCR: 8
  - SEK: 5
  - SGD: 0.7
  - SHP: 1
  - SOS: 500
  - SRD: 20
  - SZL: 10
  - THB: 20
  - TJS: 5
  - TOP: 2
  - TRY: 30
  - TTD: 4
  - TWD: 20
  - TZS: 2,000
  - UAH: 30
  - UGX: 2,000
  - UYU: 20
  - UZS: 7,000
  - VND: 20,000
  - VUV: 100
  - WST: 2
  - XAF: 500
  - XCD: 2
  - XCG: 1
  - XOF: 500
  - XPF: 100
  - YER: 200
  - ZAR: 9
  - ZMW: 10
  - Other currencies: 50 minor units
     */
  preset_amount?: number | null;
}
/**
 * A fixed price for a product.
 */
interface ProductPriceFixed {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the price.
   */
  id: string;
  /**
   * source
   */
  source: ProductPriceSource;
  /**
   * amount_type
   */
  amount_type: "fixed";
  /**
   * The currency in which the customer will be charged.
   */
  price_currency: string;
  /**
   * The tax behavior of the price. If null, it defaults to the organization's default tax behavior.
   */
  tax_behavior: TaxBehaviorOption | null;
  /**
   * Whether the price is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the product owning the price.
   */
  product_id: string;
  /**
   * The price in cents.
   */
  price_amount: number;
}
/**
 * Schema to create a fixed price.
 */
interface ProductPriceFixedCreate {
  /**
   * amount_type
   */
  amount_type: "fixed";
  /**
   * price_currency
   */
  price_currency?: PresentmentCurrency;
  /**
   * The tax behavior of the price. If not set, it will default to the organization's default tax behavior.
   */
  tax_behavior?: TaxBehaviorOption | null;
  /**
     * The price in cents. Set to `0` for a free price.
  Minimum amounts per currency:
  - USD: 0.5
  - AED: 2
  - ALL: 50
  - AMD: 200
  - AOA: 500
  - ARS: 750
  - AUD: 0.7
  - AWG: 1
  - AZN: 1
  - BAM: 1
  - BBD: 2
  - BDT: 70
  - BIF: 2,000
  - BMD: 1
  - BND: 1
  - BOB: 5
  - BRL: 2.5
  - BSD: 1
  - BWP: 10
  - BZD: 2
  - CAD: 0.7
  - CDF: 2,000
  - CHF: 0.5
  - CLP: 500
  - CNY: 5
  - COP: 2,000
  - CRC: 300
  - CVE: 50
  - CZK: 15
  - DJF: 100
  - DKK: 3.2
  - DOP: 40
  - DZD: 70
  - EGP: 30
  - ETB: 80
  - EUR: 0.5
  - FJD: 2
  - FKP: 1
  - GBP: 0.4
  - GEL: 2
  - GNF: 5,000
  - GIP: 1
  - GMD: 40
  - GTQ: 5
  - GYD: 200
  - HKD: 4
  - HNL: 20
  - HTG: 70
  - HUF: 175
  - IDR: 9,000
  - ILS: 1.5
  - INR: 60
  - ISK: 70
  - JMD: 80
  - JPY: 80
  - KES: 70
  - KGS: 50
  - KHR: 3,000
  - KMF: 500
  - KRW: 800
  - KYD: 1
  - KZT: 300
  - LAK: 20,000
  - LKR: 200
  - LRD: 100
  - LSL: 10
  - MAD: 5
  - MDL: 10
  - MGA: 3,000
  - MKD: 50
  - MNT: 2,000
  - MOP: 5
  - MUR: 50
  - MVR: 8
  - MXN: 9
  - MWK: 1,000
  - MYR: 2
  - MZN: 50
  - NAD: 10
  - NGN: 700
  - NIO: 20
  - NOK: 5
  - NPR: 80
  - NZD: 0.9
  - PAB: 1
  - PEN: 2
  - PGK: 3
  - PHP: 35
  - PKR: 200
  - PLN: 2
  - PYG: 4,000
  - QAR: 2
  - RON: 2.5
  - RSD: 60
  - RWF: 1,000
  - SAR: 2
  - SBD: 4
  - SCR: 8
  - SEK: 5
  - SGD: 0.7
  - SHP: 1
  - SOS: 500
  - SRD: 20
  - SZL: 10
  - THB: 20
  - TJS: 5
  - TOP: 2
  - TRY: 30
  - TTD: 4
  - TWD: 20
  - TZS: 2,000
  - UAH: 30
  - UGX: 2,000
  - UYU: 20
  - UZS: 7,000
  - VND: 20,000
  - VUV: 100
  - WST: 2
  - XAF: 500
  - XCD: 2
  - XCG: 1
  - XOF: 500
  - XPF: 100
  - YER: 200
  - ZAR: 9
  - ZMW: 10
  - Other currencies: 50 minor units
     */
  price_amount: number;
}
/**
 * A meter associated to a metered price.
 */
interface ProductPriceMeter {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The name of the meter.
   */
  name: string;
  /**
   * unit
   */
  unit: MeterUnit;
  /**
   * The label for the custom unit.
   */
  custom_label: string | null;
  /**
   * The multiplier to convert from base unit to display scale.
   */
  custom_multiplier: number | null;
}
/**
 * A metered, usage-based, price for a product, with a fixed unit price.
 */
interface ProductPriceMeteredUnit {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the price.
   */
  id: string;
  /**
   * source
   */
  source: ProductPriceSource;
  /**
   * amount_type
   */
  amount_type: "metered_unit";
  /**
   * The currency in which the customer will be charged.
   */
  price_currency: string;
  /**
   * The tax behavior of the price. If null, it defaults to the organization's default tax behavior.
   */
  tax_behavior: TaxBehaviorOption | null;
  /**
   * Whether the price is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the product owning the price.
   */
  product_id: string;
  /**
   * The price per unit in cents.
   */
  unit_amount: string;
  /**
   * The maximum amount in cents that can be charged, regardless of the number of units consumed.
   */
  cap_amount: number | null;
  /**
   * The ID of the meter associated to the price.
   */
  meter_id: string;
  /**
   * meter
   */
  meter: ProductPriceMeter;
}
/**
 * Schema to create a metered price with a fixed unit price.
 */
interface ProductPriceMeteredUnitCreate {
  /**
   * amount_type
   */
  amount_type: "metered_unit";
  /**
   * price_currency
   */
  price_currency?: PresentmentCurrency;
  /**
   * The tax behavior of the price. If not set, it will default to the organization's default tax behavior.
   */
  tax_behavior?: TaxBehaviorOption | null;
  /**
   * The ID of the meter associated to the price.
   */
  meter_id: string;
  /**
   * The price per unit in cents. Supports up to 12 decimal places.
   */
  unit_amount: number | string;
  /**
   * Optional maximum amount in cents that can be charged, regardless of the number of units consumed.
   */
  cap_amount?: number | null;
}
/**
 * A seat-based price for a product.
 */
interface ProductPriceSeatBased {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the price.
   */
  id: string;
  /**
   * source
   */
  source: ProductPriceSource;
  /**
   * amount_type
   */
  amount_type: "seat_based";
  /**
   * The currency in which the customer will be charged.
   */
  price_currency: string;
  /**
   * The tax behavior of the price. If null, it defaults to the organization's default tax behavior.
   */
  tax_behavior: TaxBehaviorOption | null;
  /**
   * Whether the price is archived and no longer available.
   */
  is_archived: boolean;
  /**
   * The ID of the product owning the price.
   */
  product_id: string;
  /**
   * seat_tiers
   */
  seat_tiers: ProductPriceSeatTiersOutput;
}
/**
 * Schema to create a seat-based price with volume-based tiers.
 */
interface ProductPriceSeatBasedCreate {
  /**
   * amount_type
   */
  amount_type: "seat_based";
  /**
   * price_currency
   */
  price_currency?: PresentmentCurrency;
  /**
   * The tax behavior of the price. If not set, it will default to the organization's default tax behavior.
   */
  tax_behavior?: TaxBehaviorOption | null;
  /**
   * seat_tiers
   */
  seat_tiers: ProductPriceSeatTiersInput;
}
/**
 * A pricing tier for seat-based pricing.
 */
interface ProductPriceSeatTier {
  /**
   * Minimum number of seats (inclusive)
   */
  min_seats: number;
  /**
   * Maximum number of seats (inclusive). None for unlimited.
   */
  max_seats?: number | null;
  /**
   * Price per seat in cents for this tier
   */
  price_per_seat: number;
}
/**
 * List of pricing tiers for seat-based pricing.

The minimum and maximum seat limits are derived from the tiers:
- minimum_seats = first tier's min_seats
- maximum_seats = last tier's max_seats (None for unlimited)
 */
interface ProductPriceSeatTiersInput {
  /**
   * seat_tier_type
   */
  seat_tier_type?: SeatTierType;
  /**
   * List of pricing tiers
   */
  tiers: ProductPriceSeatTier[];
}
/**
 * List of pricing tiers for seat-based pricing.

The minimum and maximum seat limits are derived from the tiers:
- minimum_seats = first tier's min_seats
- maximum_seats = last tier's max_seats (None for unlimited)
 */
interface ProductPriceSeatTiersOutput {
  /**
   * seat_tier_type
   */
  seat_tier_type?: SeatTierType;
  /**
   * List of pricing tiers
   */
  tiers: ProductPriceSeatTier[];
  /**
   * Minimum number of seats required for purchase, derived from first tier.
   */
  minimum_seats: number;
  /**
   * Maximum number of seats allowed for purchase, derived from last tier. None for unlimited.
   */
  maximum_seats: number | null;
}
/**
 * Schema to update a product.
 */
interface ProductUpdate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The interval unit for the trial period.
   */
  trial_interval?: TrialInterval | null;
  /**
   * The number of interval units for the trial period.
   */
  trial_interval_count?: number | null;
  /**
   * name
   */
  name?: string | null;
  /**
   * The description of the product.
   */
  description?: string | null;
  /**
   * The recurring interval of the product. If `None`, the product is a one-time purchase. **Can only be set on legacy recurring products. Once set, it can't be changed.**
   */
  recurring_interval?: RecurringInterval | null;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. Once set, it can't be changed.**
   */
  recurring_interval_count?: number | null;
  /**
   * Whether the product is archived. If `true`, the product won't be available for purchase anymore. Existing customers will still have access to their benefits, and subscriptions will continue normally.
   */
  is_archived?: boolean | null;
  /**
   * The visibility of the product.
   */
  visibility?: ProductVisibility | null;
  /**
   * List of available prices for this product. If you want to keep existing prices, include them in the list as an `ExistingProductPrice` object.
   */
  prices?: (ExistingProductPrice | (ProductPriceFixedCreate | ProductPriceCustomCreate | ProductPriceSeatBasedCreate | ProductPriceMeteredUnitCreate))[] | null;
  /**
   * List of file IDs. Each one must be on the same organization as the product, of type `product_media` and correctly uploaded.
   */
  medias?: string[] | null;
  /**
   * attached_custom_fields
   */
  attached_custom_fields?: AttachedCustomFieldCreate[] | null;
}
/**
 * PropertyAggregation
 */
interface PropertyAggregation {
  /**
   * func
   */
  func: Func;
  /**
   * property
   */
  property: string;
}
/**
 * Refund
 */
interface Refund {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * status
   */
  status: RefundStatus;
  /**
   * reason
   */
  reason: RefundReason;
  /**
   * amount
   */
  amount: number;
  /**
   * tax_amount
   */
  tax_amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * order_id
   */
  order_id: string;
  /**
   * subscription_id
   */
  subscription_id: string | null;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * revoke_benefits
   */
  revoke_benefits: boolean;
  /**
   * dispute
   */
  dispute: RefundDispute | null;
}
/**
 * RefundCreate
 */
interface RefundCreate {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * order_id
   */
  order_id: string;
  /**
   * Reason for the refund.
   */
  reason: Reason;
  /**
   * Amount to refund in cents. Minimum is 1.
   */
  amount: number;
  /**
   * An internal comment about the refund.
   */
  comment?: string | null;
  /**
     * Should this refund trigger the associated customer benefits to be revoked?
  
  **Note:**
  Only allowed in case the `order` is a one-time purchase.
  Subscriptions automatically revoke customer benefits once the
  subscription itself is revoked, i.e fully canceled.
     */
  revoke_benefits?: boolean;
}
/**
 * Dispute associated with a refund,
in case we prevented a dispute by issuing a refund.
 */
interface RefundDispute {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * status
   */
  status: DisputeStatus;
  /**
   * Whether the dispute has been resolved (won or lost).
   */
  resolved: boolean;
  /**
   * Whether the dispute is closed (prevented, won, or lost).
   */
  closed: boolean;
  /**
   * Amount in cents disputed.
   */
  amount: number;
  /**
   * Tax amount in cents disputed.
   */
  tax_amount: number;
  /**
   * Currency code of the dispute.
   */
  currency: string;
  /**
   * The reason for the dispute as reported by the card network (e.g. `fraudulent`, `product_not_received`). `None` until the processor reports it.
   */
  reason: string | null;
  /**
   * Deadline to submit evidence in response to the dispute. `None` when no response is required.
   */
  evidence_due_by: string | null;
  /**
   * Whether the evidence submission deadline has passed.
   */
  past_due: boolean;
  /**
   * The ID of the order associated with the dispute.
   */
  order_id: string;
  /**
   * The ID of the payment associated with the dispute.
   */
  payment_id: string;
}
/**
 * RefundedAlready
 */
interface RefundedAlready$1 {
  /**
   * error
   */
  error: "RefundedAlready";
  /**
   * detail
   */
  detail: string;
}
/**
 * ResourceNotFound
 */
interface ResourceNotFound$1 {
  /**
   * error
   */
  error: "ResourceNotFound";
  /**
   * detail
   */
  detail: string;
}
/**
 * RevokeTokenResponse
 */
interface RevokeTokenResponse extends Record<string, never> {}
/**
 * S3DownloadURL
 */
interface S3DownloadURL {
  /**
   * url
   */
  url: string;
  /**
   * headers
   */
  headers?: Record<string, string>;
  /**
   * expires_at
   */
  expires_at: string;
}
/**
 * S3FileCreateMultipart
 */
interface S3FileCreateMultipart {
  /**
   * parts
   */
  parts: S3FileCreatePart[];
}
/**
 * S3FileCreatePart
 */
interface S3FileCreatePart {
  /**
   * number
   */
  number: number;
  /**
   * chunk_start
   */
  chunk_start: number;
  /**
   * chunk_end
   */
  chunk_end: number;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64?: string | null;
}
/**
 * S3FileUploadCompletedPart
 */
interface S3FileUploadCompletedPart {
  /**
   * number
   */
  number: number;
  /**
   * checksum_etag
   */
  checksum_etag: string;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64: string | null;
}
/**
 * S3FileUploadMultipart
 */
interface S3FileUploadMultipart {
  /**
   * id
   */
  id: string;
  /**
   * path
   */
  path: string;
  /**
   * parts
   */
  parts: S3FileUploadPart[];
}
/**
 * S3FileUploadPart
 */
interface S3FileUploadPart {
  /**
   * number
   */
  number: number;
  /**
   * chunk_start
   */
  chunk_start: number;
  /**
   * chunk_end
   */
  chunk_end: number;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64?: string | null;
  /**
   * url
   */
  url: string;
  /**
   * expires_at
   */
  expires_at: string;
  /**
   * headers
   */
  headers?: Record<string, string>;
}
/**
 * SSOEnforcementRequiresConnection
 */
interface SSOEnforcementRequiresConnection$1 {
  /**
   * error
   */
  error: "SSOEnforcementRequiresConnection";
  /**
   * detail
   */
  detail: string;
}
/**
 * SeatAssign
 */
interface SeatAssign {
  /**
   * Subscription ID. Required if neither order_id nor checkout_id is provided.
   */
  subscription_id?: string | null;
  /**
   * Order ID for one-time purchases. Required if subscription_id is not provided.
   */
  order_id?: string | null;
  /**
   * Email of the customer to assign the seat to
   */
  email?: string | null;
  /**
   * External customer ID for the seat assignment
   */
  external_customer_id?: string | null;
  /**
   * Customer ID for the seat assignment
   */
  customer_id?: string | null;
  /**
   * External member ID for the seat assignment. Can be used alone (lookup existing member) or with email (create/validate member).
   */
  external_member_id?: string | null;
  /**
   * Member ID for the seat assignment.
   */
  member_id?: string | null;
  /**
   * Additional metadata for the seat (max 10 keys, 1KB total)
   */
  metadata?: Record<string, unknown> | null;
  /**
   * If true, the seat will be immediately claimed without sending an invitation email. API-only feature.
   */
  immediate_claim?: boolean;
}
/**
 * SeatClaim
 */
interface SeatClaim {
  /**
   * Invitation token to claim the seat
   */
  invitation_token: string;
}
/**
 * Read-only information about a seat claim invitation.
Safe for email scanners - no side effects when fetched.
 */
interface SeatClaimInfo {
  /**
   * Name of the product
   */
  product_name: string;
  /**
   * ID of the product
   */
  product_id: string;
  /**
   * Name of the organization
   */
  organization_name: string;
  /**
   * Slug of the organization
   */
  organization_slug: string;
  /**
   * Email of the customer assigned to this seat
   */
  customer_email: string;
  /**
   * Whether the seat can be claimed
   */
  can_claim: boolean;
}
/**
 * SeatsList
 */
interface SeatsList {
  /**
   * List of seats
   */
  seats: CustomerSeat[];
  /**
   * Number of available seats
   */
  available_seats: number;
  /**
   * Total number of seats for the subscription
   */
  total_seats: number;
}
/**
 * Subscription
 */
interface Subscription {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The amount of the subscription.
   */
  amount: number;
  /**
   * The currency of the subscription.
   */
  currency: string;
  /**
   * recurring_interval
   */
  recurring_interval: RecurringInterval;
  /**
   * Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on.
   */
  recurring_interval_count: number;
  /**
   * status
   */
  status: SubscriptionStatus;
  /**
   * The start timestamp of the current billing period.
   */
  current_period_start: string;
  /**
   * The end timestamp of the current billing period.
   */
  current_period_end: string;
  /**
   * The start timestamp of the current meter period, if the product has a meter cycle set. Metered credits are granted and overage is settled on this cadence.
   */
  current_meter_period_start: string | null;
  /**
   * The end timestamp of the current meter period, if the product has a meter cycle set. This is when credits next renew.
   */
  current_meter_period_end: string | null;
  /**
   * The start timestamp of the trial period, if any.
   */
  trial_start: string | null;
  /**
   * The end timestamp of the trial period, if any.
   */
  trial_end: string | null;
  /**
   * Whether the subscription will be canceled at the end of the current period.
   */
  cancel_at_period_end: boolean;
  /**
   * The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`.
   */
  canceled_at: string | null;
  /**
   * The timestamp when the subscription started.
   */
  started_at: string | null;
  /**
   * The timestamp when the subscription will end.
   */
  ends_at: string | null;
  /**
   * The timestamp when the subscription ended.
   */
  ended_at: string | null;
  /**
   * The timestamp when the subscription entered `past_due` status.
   */
  past_due_at?: string | null;
  /**
   * Whether the subscription will be paused at the end of the current period.
   */
  pause_at_period_end: boolean;
  /**
   * The timestamp when the subscription was paused.
   */
  paused_at: string | null;
  /**
   * The timestamp when a paused subscription is scheduled to automatically resume, if set.
   */
  resumes_at: string | null;
  /**
   * The ID of the subscribed customer.
   */
  customer_id: string;
  /**
   * The ID of the subscribed product.
   */
  product_id: string;
  /**
   * The ID of the applied discount, if any.
   */
  discount_id: string | null;
  /**
   * checkout_id
   */
  checkout_id: string | null;
  /**
   * The number of seats for seat-based subscriptions. None for non-seat subscriptions.
   */
  seats?: number | null;
  /**
   * customer_cancellation_reason
   */
  customer_cancellation_reason: CustomerCancellationReason | null;
  /**
   * customer_cancellation_comment
   */
  customer_cancellation_comment: string | null;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * Key-value object storing custom field values.
   */
  custom_field_data?: Record<string, string | number | boolean | string | null>;
  /**
   * customer
   */
  customer: SubscriptionCustomer;
  /**
   * product
   */
  product: Product;
  /**
   * discount
   */
  discount: (DiscountFixedOnceForeverDurationBase | DiscountFixedRepeatDurationBase | DiscountPercentageOnceForeverDurationBase | DiscountPercentageRepeatDurationBase) | null;
  /**
   * List of enabled prices for the subscription.
   */
  prices: (LegacyRecurringProductPrice | ProductPrice)[];
  /**
   * List of meters associated with the subscription.
   */
  meters: SubscriptionMeter[];
  /**
   * Pending subscription update that will be applied at the beginning of the next period. If `null`, there is no pending update.
   */
  pending_update: PendingSubscriptionUpdate | null;
}
/**
 * An event created by Pago when a subscription billing period is updated.
 */
interface SubscriptionBillingPeriodUpdatedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.billing_period_updated";
  /**
   * metadata
   */
  metadata: SubscriptionBillingPeriodUpdatedMetadata;
}
/**
 * SubscriptionBillingPeriodUpdatedMetadata
 */
interface SubscriptionBillingPeriodUpdatedMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
  /**
   * old_period_end
   */
  old_period_end: string;
  /**
   * new_period_end
   */
  new_period_end: string;
}
/**
 * SubscriptionCancel
 */
interface SubscriptionCancel {
  /**
     * Customer reason for cancellation.
  
  Helpful to monitor reasons behind churn for future improvements.
  
  Only set this in case your own service is requesting the reason from the
  customer. Or you know based on direct conversations, i.e support, with
  the customer.
  
  * `too_expensive`: Too expensive for the customer.
  * `missing_features`: Customer is missing certain features.
  * `switched_service`: Customer switched to another service.
  * `unused`: Customer is not using it enough.
  * `customer_service`: Customer is not satisfied with the customer service.
  * `low_quality`: Customer is unhappy with the quality.
  * `too_complex`: Customer considers the service too complicated.
  * `other`: Other reason(s).
     */
  customer_cancellation_reason?: CustomerCancellationReason | null;
  /**
     * Customer feedback and why they decided to cancel.
  
  **IMPORTANT:**
  Do not use this to store internal notes! It's intended to be input
  from the customer and is therefore also available in their Pago
  purchases library.
  
  Only set this in case your own service is requesting the reason from the
  customer. Or you copy a message directly from a customer
  conversation, i.e support.
     */
  customer_cancellation_comment?: string | null;
  /**
     * Cancel an active subscription once the current period ends.
  
  Or uncancel a subscription currently set to be revoked at period end.
     */
  cancel_at_period_end: boolean;
}
/**
 * An event created by Pago when a subscription is canceled.
 */
interface SubscriptionCanceledEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.canceled";
  /**
   * metadata
   */
  metadata: SubscriptionCanceledMetadata;
}
/**
 * SubscriptionCanceledMetadata
 */
interface SubscriptionCanceledMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
  /**
   * product_id
   */
  product_id?: string;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * recurring_interval
   */
  recurring_interval: string;
  /**
   * recurring_interval_count
   */
  recurring_interval_count: number;
  /**
   * customer_cancellation_reason
   */
  customer_cancellation_reason?: string;
  /**
   * customer_cancellation_comment
   */
  customer_cancellation_comment?: string;
  /**
   * canceled_at
   */
  canceled_at: string;
  /**
   * ends_at
   */
  ends_at?: string;
  /**
   * cancel_at_period_end
   */
  cancel_at_period_end?: boolean;
}
/**
 * Create a subscription for an existing customer.
 */
interface SubscriptionCreateCustomer {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The ID of the recurring product to subscribe to. Must be a free product, otherwise the customer should go through a checkout flow.
   */
  product_id: string;
  /**
   * The ID of the customer to create the subscription for.
   */
  customer_id: string;
}
/**
 * Create a subscription for an existing customer identified by an external ID.
 */
interface SubscriptionCreateExternalCustomer {
  /**
     * Key-value object allowing you to store additional information.
  
  The key must be a string with a maximum length of **40 characters**.
  The value must be either:
  
  * A string with a maximum length of **500 characters**
  * An integer
  * A floating-point number
  * A boolean
  
  You can store up to **50 key-value pairs**.
     */
  metadata?: Record<string, string | number | number | boolean>;
  /**
   * The ID of the recurring product to subscribe to. Must be a free product, otherwise the customer should go through a checkout flow.
   */
  product_id: string;
  /**
   * The ID of the customer in your system to create the subscription for. It must already exist in Pago.
   */
  external_customer_id: string;
}
/**
 * An event created by Pago when a subscription is created.
 */
interface SubscriptionCreatedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.created";
  /**
   * metadata
   */
  metadata: SubscriptionCreatedMetadata;
}
/**
 * SubscriptionCreatedMetadata
 */
interface SubscriptionCreatedMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
  /**
   * product_id
   */
  product_id: string;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * recurring_interval
   */
  recurring_interval: string;
  /**
   * recurring_interval_count
   */
  recurring_interval_count: number;
  /**
   * started_at
   */
  started_at: string;
}
/**
 * SubscriptionCustomer
 */
interface SubscriptionCustomer {
  /**
   * The ID of the customer.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * metadata
   */
  metadata: Record<string, string | number | number | boolean>;
  /**
   * The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.
   */
  external_id?: string | null;
  /**
   * The email address of the customer. This must be unique within the organization.
   */
  email?: string | null;
  /**
   * Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address.
   */
  email_verified: boolean;
  /**
   * type
   */
  type: CustomerType;
  /**
   * The name of the customer.
   */
  name: string | null;
  /**
   * The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set.
   */
  billing_name: string | null;
  /**
   * billing_address
   */
  billing_address: Address | null;
  /**
   * tax_id
   */
  tax_id: unknown[] | null;
  /**
   * locale
   */
  locale?: string | null;
  /**
   * The ID of the organization owning the customer.
   */
  organization_id: string;
  /**
   * The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details.
   */
  default_payment_method_id?: string | null;
  /**
   * Timestamp for when the customer was soft deleted.
   */
  deleted_at: string | null;
  /**
   * avatar_url
   */
  avatar_url: string | null;
}
/**
 * An event created by Pago when a subscription is cycled.
 */
interface SubscriptionCycledEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.cycled";
  /**
   * metadata
   */
  metadata: SubscriptionCycledMetadata;
}
/**
 * SubscriptionCycledMetadata
 */
interface SubscriptionCycledMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
  /**
   * product_id
   */
  product_id?: string;
  /**
   * amount
   */
  amount?: number;
  /**
   * currency
   */
  currency?: string;
  /**
   * recurring_interval
   */
  recurring_interval?: string;
  /**
   * recurring_interval_count
   */
  recurring_interval_count?: number;
}
/**
 * SubscriptionLocked
 */
interface SubscriptionLocked$1 {
  /**
   * error
   */
  error: "SubscriptionLocked";
  /**
   * detail
   */
  detail: string;
}
/**
 * Current consumption and spending for a subscription meter.
 */
interface SubscriptionMeter {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The number of consumed units so far in this billing period.
   */
  consumed_units: number;
  /**
   * The number of credited units so far in this billing period.
   */
  credited_units: number;
  /**
   * The amount due in cents so far in this billing period.
   */
  amount: number;
  /**
   * The ID of the meter.
   */
  meter_id: string;
  /**
   * meter
   */
  meter: Meter;
}
/**
 * An event created by Pago when a subscription becomes past due.
 */
interface SubscriptionPastDueEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.past_due";
  /**
   * metadata
   */
  metadata: SubscriptionPastDueMetadata;
}
/**
 * SubscriptionPastDueMetadata
 */
interface SubscriptionPastDueMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
  /**
   * product_id
   */
  product_id?: string;
  /**
   * past_due_at
   */
  past_due_at: string;
  /**
   * amount
   */
  amount?: number;
  /**
   * currency
   */
  currency?: string;
  /**
   * recurring_interval
   */
  recurring_interval?: string;
  /**
   * recurring_interval_count
   */
  recurring_interval_count?: number;
}
/**
 * SubscriptionPause
 */
interface SubscriptionPause {
  /**
     * Pause an active subscription at the end of the current period.
  
  Or cancel a scheduled pause on a subscription set to be paused at
  period end.
     */
  pause_at_period_end: boolean;
  /**
     * Date at which the paused subscription should automatically resume.
  
  If not set, the subscription stays paused until it is resumed manually.
  Must be after the current period end.
     */
  resumes_at?: string | null;
}
/**
 * An event created by Pago when a subscription is paused.
 */
interface SubscriptionPausedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.paused";
  /**
   * metadata
   */
  metadata: SubscriptionPausedMetadata;
}
/**
 * SubscriptionPausedMetadata
 */
interface SubscriptionPausedMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
  /**
   * product_id
   */
  product_id?: string;
  /**
   * amount
   */
  amount?: number;
  /**
   * currency
   */
  currency?: string;
  /**
   * recurring_interval
   */
  recurring_interval?: string;
  /**
   * recurring_interval_count
   */
  recurring_interval_count?: number;
  /**
   * paused_at
   */
  paused_at: string;
  /**
   * resumes_at
   */
  resumes_at?: string;
}
/**
 * An event created by Pago when a subscription changes the product.
 */
interface SubscriptionProductUpdatedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.product_updated";
  /**
   * metadata
   */
  metadata: SubscriptionProductUpdatedMetadata;
}
/**
 * SubscriptionProductUpdatedMetadata
 */
interface SubscriptionProductUpdatedMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
  /**
   * old_product_id
   */
  old_product_id: string;
  /**
   * new_product_id
   */
  new_product_id: string;
}
/**
 * An event created by Pago when a past due subscription is recovered.
 */
interface SubscriptionReactivatedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.reactivated";
  /**
   * metadata
   */
  metadata: SubscriptionReactivatedMetadata;
}
/**
 * SubscriptionReactivatedMetadata
 */
interface SubscriptionReactivatedMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
  /**
   * product_id
   */
  product_id?: string;
  /**
   * amount
   */
  amount?: number;
  /**
   * currency
   */
  currency?: string;
  /**
   * recurring_interval
   */
  recurring_interval?: string;
  /**
   * recurring_interval_count
   */
  recurring_interval_count?: number;
}
/**
 * SubscriptionResume
 */
interface SubscriptionResume {
  /**
   * Resume a paused subscription immediately, starting a new billing period and charging the customer.
   */
  resume: true;
}
/**
 * An event created by Pago when a paused subscription is resumed.
 */
interface SubscriptionResumedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.resumed";
  /**
   * metadata
   */
  metadata: SubscriptionResumedMetadata;
}
/**
 * SubscriptionResumedMetadata
 */
interface SubscriptionResumedMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
  /**
   * product_id
   */
  product_id?: string;
  /**
   * amount
   */
  amount?: number;
  /**
   * currency
   */
  currency?: string;
  /**
   * recurring_interval
   */
  recurring_interval?: string;
  /**
   * recurring_interval_count
   */
  recurring_interval_count?: number;
}
/**
 * SubscriptionRevoke
 */
interface SubscriptionRevoke {
  /**
     * Customer reason for cancellation.
  
  Helpful to monitor reasons behind churn for future improvements.
  
  Only set this in case your own service is requesting the reason from the
  customer. Or you know based on direct conversations, i.e support, with
  the customer.
  
  * `too_expensive`: Too expensive for the customer.
  * `missing_features`: Customer is missing certain features.
  * `switched_service`: Customer switched to another service.
  * `unused`: Customer is not using it enough.
  * `customer_service`: Customer is not satisfied with the customer service.
  * `low_quality`: Customer is unhappy with the quality.
  * `too_complex`: Customer considers the service too complicated.
  * `other`: Other reason(s).
     */
  customer_cancellation_reason?: CustomerCancellationReason | null;
  /**
     * Customer feedback and why they decided to cancel.
  
  **IMPORTANT:**
  Do not use this to store internal notes! It's intended to be input
  from the customer and is therefore also available in their Pago
  purchases library.
  
  Only set this in case your own service is requesting the reason from the
  customer. Or you copy a message directly from a customer
  conversation, i.e support.
     */
  customer_cancellation_comment?: string | null;
  /**
   * Cancel and revoke an active subscription immediately
   */
  revoke: true;
}
/**
 * An event created by Pago when a subscription is revoked from a customer.
 */
interface SubscriptionRevokedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.revoked";
  /**
   * metadata
   */
  metadata: SubscriptionRevokedMetadata;
}
/**
 * SubscriptionRevokedMetadata
 */
interface SubscriptionRevokedMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
  /**
   * product_id
   */
  product_id?: string;
  /**
   * amount
   */
  amount?: number;
  /**
   * currency
   */
  currency?: string;
  /**
   * recurring_interval
   */
  recurring_interval?: string;
  /**
   * recurring_interval_count
   */
  recurring_interval_count?: number;
}
/**
 * An event created by Pago when a the seats on a subscription is changed.
 */
interface SubscriptionSeatsUpdatedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.seats_updated";
  /**
   * metadata
   */
  metadata: SubscriptionSeatsUpdatedMetadata;
}
/**
 * SubscriptionSeatsUpdatedMetadata
 */
interface SubscriptionSeatsUpdatedMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
  /**
   * old_seats
   */
  old_seats: number;
  /**
   * new_seats
   */
  new_seats: number;
  /**
   * proration_behavior
   */
  proration_behavior: string;
}
/**
 * An event created by Pago when a subscription cancellation is reversed.
 */
interface SubscriptionUncanceledEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.uncanceled";
  /**
   * metadata
   */
  metadata: SubscriptionUncanceledMetadata;
}
/**
 * SubscriptionUncanceledMetadata
 */
interface SubscriptionUncanceledMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
  /**
   * product_id
   */
  product_id: string;
  /**
   * amount
   */
  amount: number;
  /**
   * currency
   */
  currency: string;
  /**
   * recurring_interval
   */
  recurring_interval: string;
  /**
   * recurring_interval_count
   */
  recurring_interval_count: number;
}
/**
 * SubscriptionUpdateBase
 */
interface SubscriptionUpdateBase {
  /**
   * Update subscription to another product.
   */
  product_id?: string | null;
  /**
   * Determine how to handle the proration billing. If not provided, will use the default organization setting.
   */
  proration_behavior?: SubscriptionProrationBehavior | null;
  /**
   * Update the subscription to apply a new discount. If set to `null`, the discount will be removed. The change will be applied on the next billing cycle.
   */
  discount_id?: string | null;
  /**
   * Set or extend the trial period of the subscription. If set to `now`, the trial will end immediately.
   */
  trial_end?: string | "now" | null;
}
/**
 * SubscriptionUpdateBillingPeriod
 */
interface SubscriptionUpdateBillingPeriod {
  /**
     * Set a new date for the end of the current billing period. The subscription will renew on this date. The new date can be earlier or later than the current period end, as long as it's in the future.
  
  It is not possible to update the current billing period on a canceled subscription.
     */
  current_billing_period_end: string;
}
/**
 * SubscriptionUpdateClear
 */
interface SubscriptionUpdateClear {
  /**
   * Clear the pending subscription update. Set to null to remove scheduled changes.
   */
  pending_update: null;
}
/**
 * An event created by Pago when a pending subscription update is cleared without being applied.
 */
interface SubscriptionUpdateClearedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.update_cleared";
  /**
   * metadata
   */
  metadata: SubscriptionUpdateClearedMetadata;
}
/**
 * SubscriptionUpdateClearedMetadata
 */
interface SubscriptionUpdateClearedMetadata {
  /**
   * subscription_id
   */
  subscription_id: string;
}
/**
 * SubscriptionUpdateSeats
 */
interface SubscriptionUpdateSeats {
  /**
   * Update the number of seats for this subscription.
   */
  seats: number;
  /**
   * Determine how to handle the proration billing. If not provided, will use the default organization setting.
   */
  proration_behavior?: SubscriptionProrationBehavior | null;
}
/**
 * An event created by Pago when a subscription is updated.
 */
interface SubscriptionUpdatedEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "system";
  /**
   * The name of the event.
   */
  name: "subscription.updated";
  /**
   * metadata
   */
  metadata: SubscriptionUpdatedMetadata;
}
/**
 * SubscriptionUpdatedMetadata
 */
interface SubscriptionUpdatedMetadata {
  /**
   * product_id
   */
  product_id?: string;
  /**
   * proration_behavior
   */
  proration_behavior?: SubscriptionProrationBehavior;
  /**
   * discount_id
   */
  discount_id?: string | null;
  /**
   * trial_end
   */
  trial_end?: string;
  /**
   * seats
   */
  seats?: number;
  /**
   * billing_period_end
   */
  billing_period_end?: string;
  /**
   * subscription_id
   */
  subscription_id: string;
}
/**
 * Schema to create a file attached to a support case.
 */
interface SupportCaseAttachmentFileCreate {
  /**
   * organization_id
   */
  organization_id?: string | null;
  /**
   * name
   */
  name: string;
  /**
   * MIME type of the file. Images, videos, PDF, CSV, plain text, Word and Excel documents are supported.
   */
  mime_type: string;
  /**
   * Size of the file. A maximum of 250 MB is allowed for this type of file.
   */
  size: number;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64?: string | null;
  /**
   * upload
   */
  upload: S3FileCreateMultipart;
  /**
   * service
   */
  service: "support_case_attachment";
  /**
   * version
   */
  version?: string | null;
}
/**
 * File attached to a support case (private; fetched via presigned URL).
 */
interface SupportCaseAttachmentFileRead {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * name
   */
  name: string;
  /**
   * path
   */
  path: string;
  /**
   * mime_type
   */
  mime_type: string;
  /**
   * size
   */
  size: number;
  /**
   * storage_version
   */
  storage_version: string | null;
  /**
   * checksum_etag
   */
  checksum_etag: string | null;
  /**
   * checksum_sha256_base64
   */
  checksum_sha256_base64: string | null;
  /**
   * checksum_sha256_hex
   */
  checksum_sha256_hex: string | null;
  /**
   * last_modified_at
   */
  last_modified_at: string | null;
  /**
   * version
   */
  version: string | null;
  /**
   * service
   */
  service: "support_case_attachment";
  /**
   * is_uploaded
   */
  is_uploaded: boolean;
  /**
   * created_at
   */
  created_at: string;
  /**
   * size_readable
   */
  size_readable: string;
}
/**
 * TokenResponse
 */
interface TokenResponse {
  /**
   * access_token
   */
  access_token: string;
  /**
   * token_type
   */
  token_type: "Bearer";
  /**
   * expires_in
   */
  expires_in: number;
  /**
   * refresh_token
   */
  refresh_token?: string | null;
  /**
   * scope
   */
  scope: string;
  /**
   * id_token
   */
  id_token?: string | null;
}
/**
 * TrialAlreadyRedeemed
 */
interface TrialAlreadyRedeemed {
  /**
   * error
   */
  error: "TrialAlreadyRedeemed";
  /**
   * detail
   */
  detail: string;
}
/**
 * Unauthorized
 */
interface Unauthorized$1 {
  /**
   * error
   */
  error: "Unauthorized";
  /**
   * detail
   */
  detail: string;
}
/**
 * UniqueAggregation
 */
interface UniqueAggregation {
  /**
   * func
   */
  func?: "unique";
  /**
   * property
   */
  property: string;
}
/**
 * An event you created through the ingestion API.
 */
interface UserEvent {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: string;
  /**
   * The ID of the organization owning the event.
   */
  organization_id: string;
  /**
   * ID of the customer in your Pago organization associated with the event.
   */
  customer_id: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  external_customer_id: string | null;
  /**
   * ID of the member within the customer's organization who performed the action inside B2B.
   */
  member_id?: string | null;
  /**
   * ID of the member in your system within the customer's organization who performed the action inside B2B.
   */
  external_member_id?: string | null;
  /**
   * Number of direct child events linked to this event.
   */
  child_count?: number;
  /**
   * The ID of the parent event.
   */
  parent_id?: string | null;
  /**
   * Human readable label of the event type.
   */
  label: string;
  /**
   * The name of the event.
   */
  name: string;
  /**
   * The source of the event. `system` events are created by Pago. `user` events are the one you create through our ingestion API.
   */
  source: "user";
  /**
   * metadata
   */
  metadata: EventMetadataOutput;
}
/**
 * UserInfoOrganization
 */
interface UserInfoOrganization {
  /**
   * sub
   */
  sub: string;
  /**
   * name
   */
  name?: string | null;
}
/**
 * UserInfoUser
 */
interface UserInfoUser {
  /**
   * sub
   */
  sub: string;
  /**
   * name
   */
  name?: string | null;
  /**
   * email
   */
  email?: string | null;
  /**
   * email_verified
   */
  email_verified?: boolean | null;
}
/**
 * ValidatedLicenseKey
 */
interface ValidatedLicenseKey {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * organization_id
   */
  organization_id: string;
  /**
   * customer_id
   */
  customer_id: string;
  /**
   * customer
   */
  customer: LicenseKeyCustomer;
  /**
   * The benefit ID.
   */
  benefit_id: string;
  /**
   * key
   */
  key: string;
  /**
   * display_key
   */
  display_key: string;
  /**
   * status
   */
  status: LicenseKeyStatus;
  /**
   * limit_activations
   */
  limit_activations: number | null;
  /**
   * usage
   */
  usage: number;
  /**
   * limit_usage
   */
  limit_usage: number | null;
  /**
   * validations
   */
  validations: number;
  /**
   * last_validated_at
   */
  last_validated_at: string | null;
  /**
   * expires_at
   */
  expires_at: string | null;
  /**
   * activation
   */
  activation?: LicenseKeyActivationBase | null;
}
/**
 * ValidationError
 */
interface ValidationError {
  /**
   * loc
   */
  loc: (string | number)[];
  /**
   * msg
   */
  msg: string;
  /**
   * type
   */
  type: string;
  /**
   * input
   */
  input?: unknown;
  /**
   * ctx
   */
  ctx?: Context;
}
/**
 * A webhook delivery for a webhook event.
 */
interface WebhookDelivery {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Whether the delivery was successful.
   */
  succeeded: boolean;
  /**
   * The HTTP code returned by the URL. `null` if the endpoint was unreachable.
   */
  http_code: number | null;
  /**
   * The response body returned by the URL, or the error message if the endpoint was unreachable.
   */
  response: string | null;
  /**
   * webhook_event
   */
  webhook_event: WebhookEvent;
}
/**
 * A webhook endpoint.
 */
interface WebhookEndpoint {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL where the webhook events will be sent.
   */
  url: string;
  /**
   * An optional name for the webhook endpoint to help organize and identify it.
   */
  name?: string | null;
  /**
   * format
   */
  format: WebhookFormat;
  /**
   * The secret used to sign the webhook events.
   */
  secret: string;
  /**
   * The organization ID associated with the webhook endpoint.
   */
  organization_id: string;
  /**
   * The events that will trigger the webhook.
   */
  events: WebhookEventType[];
  /**
   * Whether the webhook endpoint is enabled and will receive events.
   */
  enabled: boolean;
}
/**
 * Schema to create a webhook endpoint.
 */
interface WebhookEndpointCreate {
  /**
   * The URL where the webhook events will be sent.
   */
  url: string;
  /**
   * An optional name for the webhook endpoint to help organize and identify it.
   */
  name?: string | null;
  /**
   * format
   */
  format: WebhookFormat;
  /**
   * The events that will trigger the webhook.
   */
  events: WebhookEventType[];
  /**
   * The organization ID associated with the webhook endpoint. **Required unless you use an organization token.**
   */
  organization_id?: string | null;
}
/**
 * Schema to update a webhook endpoint.
 */
interface WebhookEndpointUpdate {
  /**
   * url
   */
  url?: string | null;
  /**
   * An optional name for the webhook endpoint to help organize and identify it.
   */
  name?: string | null;
  /**
   * format
   */
  format?: WebhookFormat | null;
  /**
   * events
   */
  events?: WebhookEventType[] | null;
  /**
   * Whether the webhook endpoint is enabled.
   */
  enabled?: boolean | null;
}
/**
 * A webhook event.

An event represent something that happened in the system
that should be sent to the webhook endpoint.

It can be delivered multiple times until it's marked as succeeded,
each one creating a new delivery.
 */
interface WebhookEvent {
  /**
   * Creation timestamp of the object.
   */
  created_at: string;
  /**
   * Last modification timestamp of the object.
   */
  modified_at: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Last HTTP code returned by the URL. `null` if no delviery has been attempted or if the endpoint was unreachable.
   */
  last_http_code?: number | null;
  /**
   * Whether this event was successfully delivered. `null` if no delivery has been attempted.
   */
  succeeded?: boolean | null;
  /**
   * Whether this event was skipped because the webhook endpoint was disabled.
   */
  skipped: boolean;
  /**
   * The payload of the webhook event.
   */
  payload: string | null;
  /**
   * type
   */
  type: WebhookEventType;
  /**
   * Whether this event is archived. Archived events can't be redelivered, and the payload is not accessible anymore.
   */
  is_archived: boolean;
}
/**
 * Benefit
 */
type Benefit = BenefitCustom | BenefitDiscord | BenefitGitHubRepository | BenefitDownloadables | BenefitLicenseKeys | BenefitMeterCredit | BenefitFeatureFlag | BenefitSlackSharedChannel;
/**
 * BenefitCreate
 */
type BenefitCreate = BenefitCustomCreate | BenefitDiscordCreate | BenefitGitHubRepositoryCreate | BenefitDownloadablesCreate | BenefitLicenseKeysCreate | BenefitMeterCreditCreate | BenefitFeatureFlagCreate | BenefitSlackSharedChannelCreate;
/**
 * BenefitGrantWebhook
 */
type BenefitGrantWebhook = BenefitGrantDiscordWebhook | BenefitGrantCustomWebhook | BenefitGrantGitHubRepositoryWebhook | BenefitGrantDownloadablesWebhook | BenefitGrantLicenseKeysWebhook | BenefitGrantMeterCreditWebhook | BenefitGrantFeatureFlagWebhook | BenefitGrantSlackSharedChannelWebhook;
/**
 * CheckoutForbiddenError
 */
type CheckoutForbiddenError = AlreadyActiveSubscriptionError | NotOpenCheckout | PaymentNotReady | TrialAlreadyRedeemed;
/**
 * CheckoutLinkCreate
 */
type CheckoutLinkCreate = CheckoutLinkCreateProductPrice | CheckoutLinkCreateProduct | CheckoutLinkCreateProducts;
/**
 * CustomField
 */
type CustomField = CustomFieldText | CustomFieldNumber | CustomFieldDate | CustomFieldCheckbox | CustomFieldSelect;
/**
 * CustomFieldCreate
 */
type CustomFieldCreate = CustomFieldCreateText | CustomFieldCreateNumber | CustomFieldCreateDate | CustomFieldCreateCheckbox | CustomFieldCreateSelect;
/**
 * CustomFieldUpdate
 */
type CustomFieldUpdate = CustomFieldUpdateText | CustomFieldUpdateNumber | CustomFieldUpdateDate | CustomFieldUpdateCheckbox | CustomFieldUpdateSelect;
/**
 * Customer
 */
type Customer = CustomerIndividual | CustomerTeam;
/**
 * CustomerBenefitGrant
 */
type CustomerBenefitGrant = CustomerBenefitGrantDiscord | CustomerBenefitGrantGitHubRepository | CustomerBenefitGrantDownloadables | CustomerBenefitGrantLicenseKeys | CustomerBenefitGrantCustom | CustomerBenefitGrantMeterCredit | CustomerBenefitGrantFeatureFlag | CustomerBenefitGrantSlackSharedChannel;
/**
 * CustomerBenefitGrantUpdate
 */
type CustomerBenefitGrantUpdate = CustomerBenefitGrantDiscordUpdate | CustomerBenefitGrantGitHubRepositoryUpdate | CustomerBenefitGrantDownloadablesUpdate | CustomerBenefitGrantLicenseKeysUpdate | CustomerBenefitGrantCustomUpdate | CustomerBenefitGrantMeterCreditUpdate | CustomerBenefitGrantFeatureFlagUpdate | CustomerBenefitGrantSlackSharedChannelUpdate;
/**
 * CustomerCreate
 */
type CustomerCreate = CustomerIndividualCreate | CustomerTeamCreate;
/**
 * CustomerPaymentMethod
 */
type CustomerPaymentMethod = PaymentMethodCard | PaymentMethodGeneric;
/**
 * CustomerPaymentMethodCreateResponse
 */
type CustomerPaymentMethodCreateResponse = CustomerPaymentMethodCreateSucceededResponse | CustomerPaymentMethodCreateRequiresActionResponse;
/**
 * CustomerState
 */
type CustomerState = CustomerStateIndividual | CustomerStateTeam;
/**
 * CustomerSubscriptionUpdate
 */
type CustomerSubscriptionUpdate = CustomerSubscriptionUpdateProduct | CustomerSubscriptionUpdateSeats | CustomerSubscriptionCancel | CustomerSubscriptionPause | CustomerSubscriptionResume | CustomerSubscriptionUpdateClear;
/**
 * Discount
 */
type Discount = DiscountFixedOnceForeverDuration | DiscountFixedRepeatDuration | DiscountPercentageOnceForeverDuration | DiscountPercentageRepeatDuration;
/**
 * DiscountCreate
 */
type DiscountCreate = DiscountFixedCreate | DiscountPercentageCreate;
/**
 * Event
 */
type Event = SystemEvent | UserEvent;
/**
 * FileCreate
 */
type FileCreate = DownloadableFileCreate | ProductMediaFileCreate | OrganizationAvatarFileCreate | SupportCaseAttachmentFileCreate;
/**
 * FileRead
 */
type FileRead = DownloadableFileRead | ProductMediaFileRead | OrganizationAvatarFileRead | SupportCaseAttachmentFileRead;
/**
 * LegacyRecurringProductPrice
 */
type LegacyRecurringProductPrice = LegacyRecurringProductPriceFixed | LegacyRecurringProductPriceCustom;
/**
 * MetadataQuery
 */
type MetadataQuery = Record<string, string | number | boolean | string[] | number[] | boolean[]> | null;
/**
 * Payment
 */
type Payment = CardPayment | GenericPayment;
/**
 * PaymentMethod
 */
type PaymentMethod = CustomerPaymentMethodCard | CustomerPaymentMethodGeneric;
/**
 * ProductCreate
 */
type ProductCreate = ProductCreateRecurring | ProductCreateOneTime;
/**
 * ProductPrice
 */
type ProductPrice = ProductPriceFixed | ProductPriceCustom | ProductPriceSeatBased | ProductPriceMeteredUnit;
/**
 * SubscriptionUpdate
 */
type SubscriptionUpdate = SubscriptionUpdateBase | SubscriptionUpdateSeats | SubscriptionUpdateBillingPeriod | SubscriptionCancel | SubscriptionRevoke | SubscriptionPause | SubscriptionResume | SubscriptionUpdateClear;
/**
 * SystemEvent
 */
type SystemEvent = MeterCreditEvent | MeterResetEvent | BenefitGrantedEvent | BenefitCycledEvent | BenefitUpdatedEvent | BenefitRevokedEvent | SubscriptionCreatedEvent | SubscriptionUpdatedEvent | SubscriptionCycledEvent | SubscriptionCanceledEvent | SubscriptionRevokedEvent | SubscriptionPastDueEvent | SubscriptionReactivatedEvent | SubscriptionPausedEvent | SubscriptionResumedEvent | SubscriptionUncanceledEvent | SubscriptionProductUpdatedEvent | SubscriptionSeatsUpdatedEvent | SubscriptionBillingPeriodUpdatedEvent | SubscriptionUpdateClearedEvent | OrderPaidEvent | OrderRefundedEvent | OrderVoidedEvent | CheckoutCreatedEvent | CustomerCreatedEvent | CustomerUpdatedEvent | CustomerDeletedEvent | BalanceOrderEvent | BalanceCreditOrderEvent | BalanceRefundEvent | BalanceRefundReversalEvent | BalanceDisputeEvent | BalanceDisputeReversalEvent;
//#endregion
//#region src/2026-04/client.d.ts
interface PagoOptions extends Omit<ClientOptions, "version"> {
  version?: string;
}
declare function createPago(options: PagoOptions): {
  organizations: {
    list: (query?: {
      slug?: string | null;
      page?: number;
      limit?: number;
      sorting?: OrganizationSortProperty[] | null;
    }) => Promise<ListResourceOrganization>;
    create: (body: OrganizationCreate) => Promise<Organization>;
    get: (id: string) => Promise<Organization>;
    update: (id: string, body: OrganizationUpdate) => Promise<Organization>;
    iterlist: (query?: {
      slug?: string | null;
      page?: number;
      limit?: number;
      sorting?: OrganizationSortProperty[] | null;
    }) => AsyncGenerator<Organization>;
  };
  subscriptions: {
    list: (query?: {
      organization_id?: string | string[] | null;
      product_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      discount_id?: string | string[] | null;
      active?: boolean | null;
      status?: SubscriptionStatus | SubscriptionStatus[] | null;
      cancel_at_period_end?: boolean | null;
      customer_cancellation_reason?: CustomerCancellationReason | CustomerCancellationReason[] | null;
      canceled_at_after?: string | null;
      canceled_at_before?: string | null;
      page?: number;
      limit?: number;
      sorting?: SubscriptionSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => Promise<ListResourceSubscription>;
    create: (body: SubscriptionCreateCustomer | SubscriptionCreateExternalCustomer) => Promise<Subscription>;
    export: (query?: {
      organization_id?: string | string[] | null;
    }) => Promise<string>;
    get: (id: string) => Promise<Subscription>;
    revoke: (id: string) => Promise<Subscription>;
    update: (id: string, body: SubscriptionUpdate) => Promise<Subscription>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      product_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      discount_id?: string | string[] | null;
      active?: boolean | null;
      status?: SubscriptionStatus | SubscriptionStatus[] | null;
      cancel_at_period_end?: boolean | null;
      customer_cancellation_reason?: CustomerCancellationReason | CustomerCancellationReason[] | null;
      canceled_at_after?: string | null;
      canceled_at_before?: string | null;
      page?: number;
      limit?: number;
      sorting?: SubscriptionSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => AsyncGenerator<Subscription>;
  };
  oauth2: {
    authorize: () => Promise<AuthorizeResponseUser | AuthorizeResponseOrganization>;
    requestToken: () => Promise<TokenResponse>;
    revokeToken: () => Promise<RevokeTokenResponse>;
    introspectToken: () => Promise<IntrospectTokenResponse>;
    userinfo: () => Promise<UserInfoUser | UserInfoOrganization>;
    clients: {
      oauth2: {
        createClient: (body: OAuth2ClientConfiguration) => Promise<unknown>;
        getClient: (client_id: string) => Promise<unknown>;
        updateClient: (client_id_path: string, body: OAuth2ClientConfigurationUpdate) => Promise<unknown>;
        deleteClient: (client_id: string) => Promise<void>;
      };
    };
  };
  benefits: {
    list: (query?: {
      organization_id?: string | string[] | null;
      type?: BenefitType | BenefitType[] | null;
      id?: string | string[] | null;
      exclude_id?: string | string[] | null;
      query?: string | null;
      page?: number;
      limit?: number;
      sorting?: BenefitSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => Promise<ListResourceBenefit>;
    create: (body: BenefitCreate) => Promise<Benefit>;
    get: (id: string) => Promise<Benefit>;
    delete: (id: string) => Promise<void>;
    update: (id: string, body: BenefitCustomUpdate | BenefitDiscordUpdate | BenefitGitHubRepositoryUpdate | BenefitDownloadablesUpdate | BenefitLicenseKeysUpdate | BenefitMeterCreditUpdate | BenefitFeatureFlagUpdate | BenefitSlackSharedChannelUpdate) => Promise<Benefit>;
    grants: (id: string, query?: {
      is_granted?: boolean | null;
      customer_id?: string | string[] | null;
      member_id?: string | string[] | null;
      page?: number;
      limit?: number;
    }) => Promise<ListResourceBenefitGrant>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      type?: BenefitType | BenefitType[] | null;
      id?: string | string[] | null;
      exclude_id?: string | string[] | null;
      query?: string | null;
      page?: number;
      limit?: number;
      sorting?: BenefitSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => AsyncGenerator<Benefit>;
    itergrants: (id: string, query?: {
      is_granted?: boolean | null;
      customer_id?: string | string[] | null;
      member_id?: string | string[] | null;
      page?: number;
      limit?: number;
    }) => AsyncGenerator<BenefitGrant>;
  };
  benefitGrants: {
    list: (query?: {
      organization_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      is_granted?: boolean | null;
      page?: number;
      limit?: number;
      sorting?: BenefitGrantSortProperty[] | null;
    }) => Promise<ListResourceBenefitGrant>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      is_granted?: boolean | null;
      page?: number;
      limit?: number;
      sorting?: BenefitGrantSortProperty[] | null;
    }) => AsyncGenerator<BenefitGrant>;
  };
  webhooks: {
    listWebhookEndpoints: (query?: {
      organization_id?: string | string[] | null;
      page?: number;
      limit?: number;
    }) => Promise<ListResourceWebhookEndpoint>;
    createWebhookEndpoint: (body: WebhookEndpointCreate) => Promise<WebhookEndpoint>;
    getWebhookEndpoint: (id: string) => Promise<WebhookEndpoint>;
    deleteWebhookEndpoint: (id: string) => Promise<void>;
    updateWebhookEndpoint: (id: string, body: WebhookEndpointUpdate) => Promise<WebhookEndpoint>;
    resetWebhookEndpointSecret: (id: string) => Promise<WebhookEndpoint>;
    listWebhookDeliveries: (query?: {
      endpoint_id?: string | string[] | null;
      start_timestamp?: string | null;
      end_timestamp?: string | null;
      succeeded?: boolean | null;
      query?: string | null;
      http_code_class?: ("2xx" | "3xx" | "4xx" | "5xx") | null;
      event_type?: WebhookEventType | WebhookEventType[] | null;
      page?: number;
      limit?: number;
    }) => Promise<ListResourceWebhookDelivery>;
    redeliverWebhookEvent: (id: string) => Promise<unknown>;
    iterlistWebhookEndpoints: (query?: {
      organization_id?: string | string[] | null;
      page?: number;
      limit?: number;
    }) => AsyncGenerator<WebhookEndpoint>;
    iterlistWebhookDeliveries: (query?: {
      endpoint_id?: string | string[] | null;
      start_timestamp?: string | null;
      end_timestamp?: string | null;
      succeeded?: boolean | null;
      query?: string | null;
      http_code_class?: ("2xx" | "3xx" | "4xx" | "5xx") | null;
      event_type?: WebhookEventType | WebhookEventType[] | null;
      page?: number;
      limit?: number;
    }) => AsyncGenerator<WebhookDelivery>;
  };
  products: {
    list: (query?: {
      id?: string | string[] | null;
      organization_id?: string | string[] | null;
      query?: string | null;
      is_archived?: boolean | null;
      is_recurring?: boolean | null;
      benefit_id?: string | string[] | null;
      visibility?: ProductVisibility[] | null;
      page?: number;
      limit?: number;
      sorting?: ProductSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => Promise<ListResourceProduct>;
    create: (body: ProductCreate) => Promise<Product>;
    get: (id: string) => Promise<Product>;
    update: (id: string, body: ProductUpdate) => Promise<Product>;
    updateBenefits: (id: string, body: ProductBenefitsUpdate) => Promise<Product>;
    iterlist: (query?: {
      id?: string | string[] | null;
      organization_id?: string | string[] | null;
      query?: string | null;
      is_archived?: boolean | null;
      is_recurring?: boolean | null;
      benefit_id?: string | string[] | null;
      visibility?: ProductVisibility[] | null;
      page?: number;
      limit?: number;
      sorting?: ProductSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => AsyncGenerator<Product>;
  };
  orders: {
    list: (query?: {
      organization_id?: string | string[] | null;
      product_id?: string | string[] | null;
      product_billing_type?: ProductBillingType | ProductBillingType[] | null;
      discount_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      checkout_id?: string | string[] | null;
      subscription_id?: string | string[] | null;
      page?: number;
      limit?: number;
      sorting?: OrderSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => Promise<ListResourceOrder>;
    create: (body: OrderCreate) => Promise<Order>;
    export: (query?: {
      organization_id?: string | string[] | null;
      product_id?: string | string[] | null;
    }) => Promise<string>;
    get: (id: string) => Promise<Order>;
    update: (id: string, body: OrderUpdate) => Promise<Order>;
    finalize: (id: string, body: OrderFinalize) => Promise<Order>;
    invoice: (id: string) => Promise<OrderInvoice>;
    generateInvoice: (id: string) => Promise<unknown>;
    receipt: (id: string) => Promise<OrderReceipt>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      product_id?: string | string[] | null;
      product_billing_type?: ProductBillingType | ProductBillingType[] | null;
      discount_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      checkout_id?: string | string[] | null;
      subscription_id?: string | string[] | null;
      page?: number;
      limit?: number;
      sorting?: OrderSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => AsyncGenerator<Order>;
  };
  refunds: {
    list: (query?: {
      id?: string | string[] | null;
      organization_id?: string | string[] | null;
      order_id?: string | string[] | null;
      subscription_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      succeeded?: boolean | null;
      page?: number;
      limit?: number;
      sorting?: RefundSortProperty[] | null;
    }) => Promise<ListResourceRefund>;
    create: (body: RefundCreate) => Promise<Refund>;
    iterlist: (query?: {
      id?: string | string[] | null;
      organization_id?: string | string[] | null;
      order_id?: string | string[] | null;
      subscription_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      succeeded?: boolean | null;
      page?: number;
      limit?: number;
      sorting?: RefundSortProperty[] | null;
    }) => AsyncGenerator<Refund>;
  };
  disputes: {
    list: (query?: {
      organization_id?: string | string[] | null;
      order_id?: string | string[] | null;
      status?: DisputeStatus | DisputeStatus[] | null;
      page?: number;
      limit?: number;
      sorting?: DisputeSortProperty[] | null;
    }) => Promise<ListResourceDispute>;
    get: (id: string) => Promise<Dispute>;
    accept: (id: string) => Promise<Dispute>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      order_id?: string | string[] | null;
      status?: DisputeStatus | DisputeStatus[] | null;
      page?: number;
      limit?: number;
      sorting?: DisputeSortProperty[] | null;
    }) => AsyncGenerator<Dispute>;
  };
  checkouts: {
    list: (query?: {
      organization_id?: string | string[] | null;
      product_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      status?: CheckoutStatus | CheckoutStatus[] | null;
      query?: string | null;
      page?: number;
      limit?: number;
      sorting?: CheckoutSortProperty[] | null;
    }) => Promise<ListResourceCheckout>;
    create: (body: CheckoutCreate) => Promise<Checkout>;
    get: (id: string) => Promise<Checkout>;
    update: (id: string, body: CheckoutUpdate) => Promise<Checkout>;
    clientGet: (client_secret: string) => Promise<CheckoutPublic>;
    clientUpdate: (client_secret: string, body: CheckoutUpdatePublic) => Promise<CheckoutPublic>;
    clientConfirm: (client_secret: string, body: CheckoutConfirmStripe) => Promise<CheckoutPublicConfirmed>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      product_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      status?: CheckoutStatus | CheckoutStatus[] | null;
      query?: string | null;
      page?: number;
      limit?: number;
      sorting?: CheckoutSortProperty[] | null;
    }) => AsyncGenerator<Checkout>;
  };
  files: {
    list: (query?: {
      organization_id?: string | string[] | null;
      ids?: string | string[] | null;
      page?: number;
      limit?: number;
    }) => Promise<ListResourceFileRead>;
    create: (body: FileCreate) => Promise<FileUpload>;
    uploaded: (id_path: string, body: FileUploadCompleted) => Promise<FileRead>;
    delete: (id: string) => Promise<void>;
    update: (id: string, body: FilePatch) => Promise<FileRead>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      ids?: string | string[] | null;
      page?: number;
      limit?: number;
    }) => AsyncGenerator<FileRead>;
  };
  metrics: {
    get: (query: {
      start_date: string;
      end_date: string;
      timezone?: Timezone;
      interval: TimeInterval;
      organization_id?: string | string[] | null;
      product_id?: string | string[] | null;
      billing_type?: ProductBillingType | ProductBillingType[] | null;
      customer_id?: string | string[] | null;
      metrics?: string[] | null;
    }) => Promise<MetricsResponse>;
    export: (query: {
      start_date: string;
      end_date: string;
      timezone?: Timezone;
      interval: TimeInterval;
      organization_id?: string | string[] | null;
      product_id?: string | string[] | null;
      billing_type?: ProductBillingType | ProductBillingType[] | null;
      customer_id?: string | string[] | null;
      metrics?: string[] | null;
    }) => Promise<string>;
    limits: () => Promise<MetricsLimits>;
    listDashboards: (query?: {
      organization_id?: string | string[] | null;
    }) => Promise<MetricDashboardSchema[]>;
    createDashboard: (body: MetricDashboardCreate) => Promise<MetricDashboardSchema>;
    getDashboard: (id: string) => Promise<MetricDashboardSchema>;
    deleteDashboard: (id: string) => Promise<void>;
    updateDashboard: (id: string, body: MetricDashboardUpdate) => Promise<MetricDashboardSchema>;
  };
  licenseKeys: {
    list: (query?: {
      organization_id?: string | string[] | null;
      benefit_id?: string | string[] | null;
      status?: LicenseKeyStatus | LicenseKeyStatus[] | null;
      page?: number;
      limit?: number;
    }) => Promise<ListResourceLicenseKeyRead>;
    get: (id: string) => Promise<LicenseKeyWithActivations>;
    update: (id: string, body: LicenseKeyUpdate) => Promise<LicenseKeyRead>;
    getActivation: (id: string, activation_id: string) => Promise<LicenseKeyActivationRead>;
    validate: (body: LicenseKeyValidate) => Promise<ValidatedLicenseKey>;
    activate: (body: LicenseKeyActivate) => Promise<LicenseKeyActivationRead>;
    deactivate: (body: LicenseKeyDeactivate) => Promise<void>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      benefit_id?: string | string[] | null;
      status?: LicenseKeyStatus | LicenseKeyStatus[] | null;
      page?: number;
      limit?: number;
    }) => AsyncGenerator<LicenseKeyRead>;
  };
  checkoutLinks: {
    list: (query?: {
      organization_id?: string | string[] | null;
      product_id?: string | string[] | null;
      page?: number;
      limit?: number;
      sorting?: CheckoutLinkSortProperty[] | null;
    }) => Promise<ListResourceCheckoutLink>;
    create: (body: CheckoutLinkCreate) => Promise<CheckoutLink>;
    get: (id: string) => Promise<CheckoutLink>;
    delete: (id: string) => Promise<void>;
    update: (id: string, body: CheckoutLinkUpdate) => Promise<CheckoutLink>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      product_id?: string | string[] | null;
      page?: number;
      limit?: number;
      sorting?: CheckoutLinkSortProperty[] | null;
    }) => AsyncGenerator<CheckoutLink>;
  };
  customFields: {
    list: (query?: {
      organization_id?: string | string[] | null;
      query?: string | null;
      type?: CustomFieldType | CustomFieldType[] | null;
      page?: number;
      limit?: number;
      sorting?: CustomFieldSortProperty[] | null;
    }) => Promise<ListResourceCustomField>;
    create: (body: CustomFieldCreate) => Promise<CustomField>;
    get: (id: string) => Promise<CustomField>;
    delete: (id: string) => Promise<void>;
    update: (id: string, body: CustomFieldUpdate) => Promise<CustomField>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      query?: string | null;
      type?: CustomFieldType | CustomFieldType[] | null;
      page?: number;
      limit?: number;
      sorting?: CustomFieldSortProperty[] | null;
    }) => AsyncGenerator<CustomField>;
  };
  discounts: {
    list: (query?: {
      organization_id?: string | string[] | null;
      query?: string | null;
      page?: number;
      limit?: number;
      sorting?: DiscountSortProperty[] | null;
    }) => Promise<ListResourceDiscount>;
    create: (body: DiscountCreate) => Promise<Discount>;
    get: (id: string) => Promise<Discount>;
    delete: (id: string) => Promise<void>;
    update: (id: string, body: DiscountUpdate) => Promise<Discount>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      query?: string | null;
      page?: number;
      limit?: number;
      sorting?: DiscountSortProperty[] | null;
    }) => AsyncGenerator<Discount>;
  };
  customers: {
    list: (query?: {
      organization_id?: string | string[] | null;
      email?: string | null;
      query?: string | null;
      active?: boolean | null;
      page?: number;
      limit?: number;
      sorting?: CustomerSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => Promise<ListResourceCustomer>;
    create: (body: CustomerCreate) => Promise<Customer>;
    export: (query?: {
      organization_id?: string | string[] | null;
    }) => Promise<string>;
    get: (id: string) => Promise<Customer>;
    delete: (id: string, query?: {
      anonymize?: boolean;
    }) => Promise<void>;
    update: (id: string, body: CustomerUpdate) => Promise<Customer>;
    getExternal: (external_id: string) => Promise<Customer>;
    deleteExternal: (external_id: string, query?: {
      anonymize?: boolean;
    }) => Promise<void>;
    updateExternal: (external_id: string, body: CustomerUpdateExternalID) => Promise<Customer>;
    getState: (id: string) => Promise<CustomerState>;
    getStateExternal: (external_id: string) => Promise<CustomerState>;
    listPaymentMethods: (id: string, query?: {
      page?: number;
      limit?: number;
    }) => Promise<ListResourcePaymentMethod>;
    listPaymentMethodsExternal: (external_id: string, query?: {
      page?: number;
      limit?: number;
    }) => Promise<ListResourcePaymentMethod>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      email?: string | null;
      query?: string | null;
      active?: boolean | null;
      page?: number;
      limit?: number;
      sorting?: CustomerSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => AsyncGenerator<Customer>;
    iterlistPaymentMethods: (id: string, query?: {
      page?: number;
      limit?: number;
    }) => AsyncGenerator<PaymentMethod>;
    iterlistPaymentMethodsExternal: (external_id: string, query?: {
      page?: number;
      limit?: number;
    }) => AsyncGenerator<PaymentMethod>;
    members: {
      create: (id: string, body: MemberCreateFromCustomer) => Promise<Member>;
      createExternal: (external_id_path: string, body: MemberCreateFromCustomer) => Promise<Member>;
      get: (id: string, member_id: string) => Promise<Member>;
      delete: (id: string, member_id: string) => Promise<void>;
      update: (id: string, member_id: string, body: MemberUpdate) => Promise<Member>;
      getExternal: (external_id: string, member_external_id: string) => Promise<Member>;
      deleteExternal: (external_id: string, member_external_id: string) => Promise<void>;
      updateExternal: (external_id: string, member_external_id: string, body: MemberUpdate) => Promise<Member>;
    };
  };
  members: {
    listMembers: (query?: {
      customer_id?: string | null;
      external_customer_id?: string | null;
      role?: MemberRole | null;
      page?: number;
      limit?: number;
      sorting?: MemberSortProperty[] | null;
    }) => Promise<ListResourceMember>;
    iterlistMembers: (query?: {
      customer_id?: string | null;
      external_customer_id?: string | null;
      role?: MemberRole | null;
      page?: number;
      limit?: number;
      sorting?: MemberSortProperty[] | null;
    }) => AsyncGenerator<Member>;
  };
  customerPortal: {
    benefitGrants: {
      list: (query?: {
        query?: string | null;
        type?: BenefitType | BenefitType[] | null;
        benefit_id?: string | string[] | null;
        checkout_id?: string | string[] | null;
        order_id?: string | string[] | null;
        subscription_id?: string | string[] | null;
        member_id?: string | string[] | null;
        page?: number;
        limit?: number;
        sorting?: CustomerBenefitGrantSortProperty[] | null;
      }) => Promise<ListResourceCustomerBenefitGrant>;
      get: (id: string) => Promise<CustomerBenefitGrant>;
      update: (id: string, body: CustomerBenefitGrantUpdate) => Promise<CustomerBenefitGrant>;
      iterlist: (query?: {
        query?: string | null;
        type?: BenefitType | BenefitType[] | null;
        benefit_id?: string | string[] | null;
        checkout_id?: string | string[] | null;
        order_id?: string | string[] | null;
        subscription_id?: string | string[] | null;
        member_id?: string | string[] | null;
        page?: number;
        limit?: number;
        sorting?: CustomerBenefitGrantSortProperty[] | null;
      }) => AsyncGenerator<CustomerBenefitGrant>;
    };
    customers: {
      get: () => Promise<CustomerPortalCustomer>;
      update: (body: CustomerPortalCustomerUpdate) => Promise<CustomerPortalCustomer>;
      listPaymentMethods: (query?: {
        page?: number;
        limit?: number;
      }) => Promise<ListResourceCustomerPaymentMethod>;
      addPaymentMethod: (body: CustomerPaymentMethodCreate) => Promise<CustomerPaymentMethodCreateResponse>;
      confirmPaymentMethod: (body: CustomerPaymentMethodConfirm) => Promise<CustomerPaymentMethodCreateResponse>;
      deletePaymentMethod: (id: string) => Promise<void>;
      requestEmailUpdate: (body: CustomerEmailUpdateRequest) => Promise<unknown>;
      checkEmailUpdate: (query: {
        token: string;
      }) => Promise<void>;
      verifyEmailUpdate: (body: CustomerEmailUpdateVerifyRequest) => Promise<CustomerEmailUpdateVerifyResponse>;
      iterlistPaymentMethods: (query?: {
        page?: number;
        limit?: number;
      }) => AsyncGenerator<CustomerPaymentMethod>;
    };
    customerMeters: {
      list: (query?: {
        meter_id?: string | string[] | null;
        query?: string | null;
        page?: number;
        limit?: number;
        sorting?: CustomerCustomerMeterSortProperty[] | null;
      }) => Promise<ListResourceCustomerCustomerMeter>;
      get: (id: string) => Promise<CustomerCustomerMeter>;
      iterlist: (query?: {
        meter_id?: string | string[] | null;
        query?: string | null;
        page?: number;
        limit?: number;
        sorting?: CustomerCustomerMeterSortProperty[] | null;
      }) => AsyncGenerator<CustomerCustomerMeter>;
    };
    seats: {
      listSeats: (query?: {
        subscription_id?: string | null;
        order_id?: string | null;
      }) => Promise<SeatsList>;
      assignSeat: (body: CustomerSeatAssign) => Promise<CustomerSeat>;
      revokeSeat: (seat_id: string) => Promise<CustomerSeat>;
      resendInvitation: (seat_id: string) => Promise<CustomerSeat>;
      listClaimedSubscriptions: (query?: {
        page?: number;
        limit?: number;
      }) => Promise<ListResourceCustomerSubscription>;
      iterlistClaimedSubscriptions: (query?: {
        page?: number;
        limit?: number;
      }) => AsyncGenerator<CustomerSubscription>;
    };
    customerSession: {
      introspect: () => Promise<CustomerCustomerSession>;
      getAuthenticatedUser: () => Promise<PortalAuthenticatedUser>;
    };
    downloadables: {
      list: (query?: {
        benefit_id?: string | string[] | null;
        page?: number;
        limit?: number;
      }) => Promise<ListResourceDownloadableRead>;
      iterlist: (query?: {
        benefit_id?: string | string[] | null;
        page?: number;
        limit?: number;
      }) => AsyncGenerator<DownloadableRead>;
    };
    licenseKeys: {
      list: (query?: {
        benefit_id?: string | null;
        page?: number;
        limit?: number;
      }) => Promise<ListResourceLicenseKeyRead>;
      get: (id: string) => Promise<LicenseKeyWithActivations>;
      validate: (body: LicenseKeyValidate) => Promise<ValidatedLicenseKey>;
      activate: (body: LicenseKeyActivate) => Promise<LicenseKeyActivationRead>;
      deactivate: (body: LicenseKeyDeactivate) => Promise<void>;
      iterlist: (query?: {
        benefit_id?: string | null;
        page?: number;
        limit?: number;
      }) => AsyncGenerator<LicenseKeyRead>;
    };
    members: {
      listMembers: (query?: {
        page?: number;
        limit?: number;
      }) => Promise<ListResourceCustomerPortalMember>;
      addMember: (body: CustomerPortalMemberCreate) => Promise<CustomerPortalMember>;
      removeMember: (id: string) => Promise<void>;
      updateMember: (id: string, body: CustomerPortalMemberUpdate) => Promise<CustomerPortalMember>;
      iterlistMembers: (query?: {
        page?: number;
        limit?: number;
      }) => AsyncGenerator<CustomerPortalMember>;
    };
    orders: {
      list: (query?: {
        product_id?: string | string[] | null;
        product_billing_type?: ProductBillingType | ProductBillingType[] | null;
        subscription_id?: string | string[] | null;
        query?: string | null;
        page?: number;
        limit?: number;
        sorting?: CustomerOrderSortProperty[] | null;
      }) => Promise<ListResourceCustomerOrder>;
      get: (id: string) => Promise<CustomerOrder>;
      update: (id: string, body: CustomerOrderUpdate) => Promise<CustomerOrder>;
      invoice: (id: string) => Promise<CustomerOrderInvoice>;
      generateInvoice: (id: string) => Promise<unknown>;
      receipt: (id: string) => Promise<CustomerOrderReceipt>;
      getPaymentStatus: (id: string) => Promise<CustomerOrderPaymentStatus>;
      confirmRetryPayment: (id: string, body: CustomerOrderConfirmPayment) => Promise<CustomerOrderPaymentConfirmation>;
      iterlist: (query?: {
        product_id?: string | string[] | null;
        product_billing_type?: ProductBillingType | ProductBillingType[] | null;
        subscription_id?: string | string[] | null;
        query?: string | null;
        page?: number;
        limit?: number;
        sorting?: CustomerOrderSortProperty[] | null;
      }) => AsyncGenerator<CustomerOrder>;
    };
    organizations: {
      get: (slug: string) => Promise<CustomerOrganizationData>;
    };
    subscriptions: {
      list: (query?: {
        product_id?: string | string[] | null;
        active?: boolean | null;
        query?: string | null;
        page?: number;
        limit?: number;
        sorting?: CustomerSubscriptionSortProperty[] | null;
      }) => Promise<ListResourceCustomerSubscription>;
      get: (id: string) => Promise<CustomerSubscription>;
      cancel: (id: string) => Promise<CustomerSubscription>;
      update: (id: string, body: CustomerSubscriptionUpdate) => Promise<CustomerSubscription>;
      iterlist: (query?: {
        product_id?: string | string[] | null;
        active?: boolean | null;
        query?: string | null;
        page?: number;
        limit?: number;
        sorting?: CustomerSubscriptionSortProperty[] | null;
      }) => AsyncGenerator<CustomerSubscription>;
    };
    wallets: {
      list: (query?: {
        page?: number;
        limit?: number;
        sorting?: CustomerWalletSortProperty[] | null;
      }) => Promise<ListResourceCustomerWallet>;
      get: (id: string) => Promise<CustomerWallet>;
      iterlist: (query?: {
        page?: number;
        limit?: number;
        sorting?: CustomerWalletSortProperty[] | null;
      }) => AsyncGenerator<CustomerWallet>;
    };
  };
  customerSeats: {
    listSeats: (query?: {
      subscription_id?: string | null;
      order_id?: string | null;
    }) => Promise<SeatsList>;
    assignSeat: (body: SeatAssign) => Promise<CustomerSeat>;
    revokeSeat: (seat_id: string) => Promise<CustomerSeat>;
    resendInvitation: (seat_id: string) => Promise<CustomerSeat>;
    getClaimInfo: (invitation_token: string) => Promise<SeatClaimInfo>;
    claimSeat: (body: SeatClaim) => Promise<CustomerSeatClaimResponse>;
  };
  customerSessions: {
    create: (body: CustomerSessionCustomerIDCreate | CustomerSessionCustomerExternalIDCreate) => Promise<CustomerSession>;
  };
  events: {
    list: (query?: {
      filter?: string | null;
      start_timestamp?: string | null;
      end_timestamp?: string | null;
      organization_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      meter_id?: string | null;
      name?: string | string[] | null;
      source?: EventSource | EventSource[] | null;
      query?: string | null;
      parent_id?: string | null;
      depth?: number | null;
      page?: number;
      limit?: number;
      sorting?: EventSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => Promise<ListResourceEvent | ListResourceWithCursorPaginationEvent>;
    listNames: (query?: {
      organization_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      source?: EventSource | EventSource[] | null;
      query?: string | null;
      page?: number;
      limit?: number;
      sorting?: EventNamesSortProperty[] | null;
    }) => Promise<ListResourceEventName>;
    get: (id: string) => Promise<Event>;
    ingest: (body: EventsIngest) => Promise<EventsIngestResponse>;
    iterlistNames: (query?: {
      organization_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      source?: EventSource | EventSource[] | null;
      query?: string | null;
      page?: number;
      limit?: number;
      sorting?: EventNamesSortProperty[] | null;
    }) => AsyncGenerator<EventName>;
  };
  eventTypes: {
    list: (query?: {
      organization_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      query?: string | null;
      root_events?: boolean;
      parent_id?: string | null;
      source?: EventSource | null;
      page?: number;
      limit?: number;
      sorting?: EventTypesSortProperty[] | null;
    }) => Promise<ListResourceEventTypeWithStats>;
    update: (id: string, body: EventTypeUpdate) => Promise<EventType>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      query?: string | null;
      root_events?: boolean;
      parent_id?: string | null;
      source?: EventSource | null;
      page?: number;
      limit?: number;
      sorting?: EventTypesSortProperty[] | null;
    }) => AsyncGenerator<EventTypeWithStats>;
  };
  meters: {
    list: (query?: {
      organization_id?: string | string[] | null;
      query?: string | null;
      is_archived?: boolean | null;
      page?: number;
      limit?: number;
      sorting?: MeterSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => Promise<ListResourceMeter>;
    create: (body: MeterCreate) => Promise<Meter>;
    get: (id: string) => Promise<Meter>;
    update: (id: string, body: MeterUpdate) => Promise<Meter>;
    quantities: (id: string, query: {
      start_timestamp: string;
      end_timestamp: string;
      interval: TimeInterval;
      timezone?: Timezone;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      customer_aggregation_function?: AggregationFunction | null;
      metadata?: MetadataQuery;
    }) => Promise<MeterQuantities>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      query?: string | null;
      is_archived?: boolean | null;
      page?: number;
      limit?: number;
      sorting?: MeterSortProperty[] | null;
      metadata?: MetadataQuery;
    }) => AsyncGenerator<Meter>;
  };
  customerMeters: {
    list: (query?: {
      organization_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      meter_id?: string | string[] | null;
      page?: number;
      limit?: number;
      sorting?: CustomerMeterSortProperty[] | null;
    }) => Promise<ListResourceCustomerMeter>;
    get: (id: string) => Promise<CustomerMeter>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      external_customer_id?: string | string[] | null;
      meter_id?: string | string[] | null;
      page?: number;
      limit?: number;
      sorting?: CustomerMeterSortProperty[] | null;
    }) => AsyncGenerator<CustomerMeter>;
  };
  payments: {
    list: (query?: {
      organization_id?: string | string[] | null;
      checkout_id?: string | string[] | null;
      order_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      status?: PaymentStatus | PaymentStatus[] | null;
      method?: string | string[] | null;
      customer_email?: string | string[] | null;
      page?: number;
      limit?: number;
      sorting?: PaymentSortProperty[] | null;
    }) => Promise<ListResourcePayment>;
    get: (id: string) => Promise<Payment>;
    iterlist: (query?: {
      organization_id?: string | string[] | null;
      checkout_id?: string | string[] | null;
      order_id?: string | string[] | null;
      customer_id?: string | string[] | null;
      status?: PaymentStatus | PaymentStatus[] | null;
      method?: string | string[] | null;
      customer_email?: string | string[] | null;
      page?: number;
      limit?: number;
      sorting?: PaymentSortProperty[] | null;
    }) => AsyncGenerator<Payment>;
  };
};
type Pago = ReturnType<typeof createPago>;
declare namespace errors_d_exports {
  export { AddMember400Error, AddMember401Error, AddMember403Error, AlreadyCanceledSubscription, AmbiguousExternalCustomerID, AssignSeat400Error, AssignSeat401Error, AssignSeat403Error, AssignSeat404Error, CannotCreateOrganizationError, CheckEmailUpdate401Error, ClaimSeat400Error, ClaimSeat403Error, ClientConfirm403Error, ClientUpdate403Error, CustomerNotReady, DisputeNotOpenError, ExpiredCheckoutError, Finalize402Error, Finalize403Error, GetClaimInfo400Error, GetClaimInfo403Error, GetClaimInfo404Error, HTTPValidationError, ListClaimedSubscriptions401Error, ListMembers401Error, ListMembers403Error, ListSeats401Error, ListSeats403Error, ListSeats404Error, ManualRetryLimitExceeded, MissingInvoiceBillingDetails, NotPermitted, OrderNotDraft, OrderNotEligibleForInvoice, OrderNotEligibleForRetry, PaymentAlreadyInProgress, PaymentError, PaymentFailed, PaymentMethodInUseByActiveSubscription, PaymentMethodSetupFailed, RefundedAlready, RemoveMember400Error, RemoveMember401Error, RemoveMember403Error, RemoveMember404Error, ResendInvitation400Error, ResendInvitation401Error, ResendInvitation403Error, ResendInvitation404Error, ResourceNotFound, RevokeSeat401Error, RevokeSeat403Error, RevokeSeat404Error, SSOEnforcementRequiresConnection, SubscriptionLocked, Unauthorized, Update403Error, Update404Error, UpdateMember400Error, UpdateMember401Error, UpdateMember403Error, UpdateMember404Error, VerifyEmailUpdate401Error, VerifyEmailUpdate422Error };
}
/**
 * Validation Error
 */
declare class HTTPValidationError extends PagoClientError<HTTPValidationError$1> {
  readonly statusCode: 422;
  readonly error: HTTPValidationError$1;
  constructor(statusCode: 422, error: HTTPValidationError$1);
}
/**
 * Forbidden
 */
declare class CannotCreateOrganizationError extends PagoClientError<CannotCreateOrganizationError$1> {
  readonly statusCode: 403;
  readonly error: CannotCreateOrganizationError$1;
  constructor(statusCode: 403, error: CannotCreateOrganizationError$1);
}
/**
 * Organization not found.
 */
declare class ResourceNotFound extends PagoClientError<ResourceNotFound$1> {
  readonly statusCode: 404;
  readonly error: ResourceNotFound$1;
  constructor(statusCode: 404, error: ResourceNotFound$1);
}
/**
 * You don't have the permission to update this organization.
 */
declare class NotPermitted extends PagoClientError<NotPermitted$1> {
  readonly statusCode: 403;
  readonly error: NotPermitted$1;
  constructor(statusCode: 403, error: NotPermitted$1);
}
/**
 * Cannot enforce SSO without an enabled connection.
 */
declare class SSOEnforcementRequiresConnection extends PagoClientError<SSOEnforcementRequiresConnection$1> {
  readonly statusCode: 409;
  readonly error: SSOEnforcementRequiresConnection$1;
  constructor(statusCode: 409, error: SSOEnforcementRequiresConnection$1);
}
/**
 * This subscription is already revoked.
 */
declare class AlreadyCanceledSubscription extends PagoClientError<AlreadyCanceledSubscription$1> {
  readonly statusCode: 403;
  readonly error: AlreadyCanceledSubscription$1;
  constructor(statusCode: 403, error: AlreadyCanceledSubscription$1);
}
/**
 * Subscription is pending an update.
 */
declare class SubscriptionLocked extends PagoClientError<SubscriptionLocked$1> {
  readonly statusCode: 409;
  readonly error: SubscriptionLocked$1;
  constructor(statusCode: 409, error: SubscriptionLocked$1);
}
/**
 * Payment required to apply the subscription update.
 */
declare class PaymentFailed extends PagoClientError<PaymentFailed$1> {
  readonly statusCode: 402;
  readonly error: PaymentFailed$1;
  constructor(statusCode: 402, error: PaymentFailed$1);
}
/**
 * The charge failed, or requires customer authentication (e.g. a 3DS challenge) that can't be completed off-session.
 */
declare class Finalize402Error extends PagoClientError<PaymentFailed$1 | PaymentActionRequired> {
  readonly statusCode: 402;
  readonly error: PaymentFailed$1 | PaymentActionRequired;
  constructor(statusCode: 402, error: PaymentFailed$1 | PaymentActionRequired);
}
/**
 * Off-session charges are not enabled for this organization, or its account can't currently accept payments.
 */
declare class Finalize403Error extends PagoClientError<OffSessionChargesNotEnabled | OrganizationNotReadyForPayments> {
  readonly statusCode: 403;
  readonly error: OffSessionChargesNotEnabled | OrganizationNotReadyForPayments;
  constructor(statusCode: 403, error: OffSessionChargesNotEnabled | OrganizationNotReadyForPayments);
}
/**
 * The order is not in `draft` status.
 */
declare class OrderNotDraft extends PagoClientError<OrderNotDraft$1> {
  readonly statusCode: 412;
  readonly error: OrderNotDraft$1;
  constructor(statusCode: 412, error: OrderNotDraft$1);
}
/**
 * Order is not eligible for invoice generation (invalid status).
 */
declare class OrderNotEligibleForInvoice extends PagoClientError<OrderNotEligibleForInvoice$1> {
  readonly statusCode: 409;
  readonly error: OrderNotEligibleForInvoice$1;
  constructor(statusCode: 409, error: OrderNotEligibleForInvoice$1);
}
/**
 * Order is missing billing name or address.
 */
declare class MissingInvoiceBillingDetails extends PagoClientError<MissingInvoiceBillingDetails$1> {
  readonly statusCode: 422;
  readonly error: MissingInvoiceBillingDetails$1;
  constructor(statusCode: 422, error: MissingInvoiceBillingDetails$1);
}
/**
 * Order is already fully refunded.
 */
declare class RefundedAlready extends PagoClientError<RefundedAlready$1> {
  readonly statusCode: 403;
  readonly error: RefundedAlready$1;
  constructor(statusCode: 403, error: RefundedAlready$1);
}
/**
 * Conflict
 */
declare class DisputeNotOpenError extends PagoClientError<DisputeNotOpenError$1> {
  readonly statusCode: 409;
  readonly error: DisputeNotOpenError$1;
  constructor(statusCode: 409, error: DisputeNotOpenError$1);
}
/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
declare class Update403Error extends PagoClientError<CheckoutForbiddenError> {
  readonly statusCode: 403;
  readonly error: CheckoutForbiddenError;
  constructor(statusCode: 403, error: CheckoutForbiddenError);
}
/**
 * The checkout session is expired.
 */
declare class ExpiredCheckoutError extends PagoClientError<ExpiredCheckoutError$1> {
  readonly statusCode: 410;
  readonly error: ExpiredCheckoutError$1;
  constructor(statusCode: 410, error: ExpiredCheckoutError$1);
}
/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
declare class ClientUpdate403Error extends PagoClientError<CheckoutForbiddenError> {
  readonly statusCode: 403;
  readonly error: CheckoutForbiddenError;
  constructor(statusCode: 403, error: CheckoutForbiddenError);
}
/**
 * The payment failed.
 */
declare class PaymentError extends PagoClientError<PaymentError$1> {
  readonly statusCode: 400;
  readonly error: PaymentError$1;
  constructor(statusCode: 400, error: PaymentError$1);
}
/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
declare class ClientConfirm403Error extends PagoClientError<CheckoutForbiddenError> {
  readonly statusCode: 403;
  readonly error: CheckoutForbiddenError;
  constructor(statusCode: 403, error: CheckoutForbiddenError);
}
/**
 * Not authorized to manage license key.
 */
declare class Unauthorized extends PagoClientError<Unauthorized$1> {
  readonly statusCode: 401;
  readonly error: Unauthorized$1;
  constructor(statusCode: 401, error: Unauthorized$1);
}
/**
 * The external customer ID matches customers in several accessible organizations.
 */
declare class AmbiguousExternalCustomerID extends PagoClientError<AmbiguousExternalCustomerID$1> {
  readonly statusCode: 409;
  readonly error: AmbiguousExternalCustomerID$1;
  constructor(statusCode: 409, error: AmbiguousExternalCustomerID$1);
}
/**
 * The card was declined while setting up the payment method.
 */
declare class PaymentMethodSetupFailed extends PagoClientError<PaymentMethodSetupFailed$1> {
  readonly statusCode: 400;
  readonly error: PaymentMethodSetupFailed$1;
  constructor(statusCode: 400, error: PaymentMethodSetupFailed$1);
}
/**
 * Customer is not ready to confirm a payment method.
 */
declare class CustomerNotReady extends PagoClientError<CustomerNotReady$1> {
  readonly statusCode: 400;
  readonly error: CustomerNotReady$1;
  constructor(statusCode: 400, error: CustomerNotReady$1);
}
/**
 * Payment method is used by active subscription(s).
 */
declare class PaymentMethodInUseByActiveSubscription extends PagoClientError<PaymentMethodInUseByActiveSubscription$1> {
  readonly statusCode: 400;
  readonly error: PaymentMethodInUseByActiveSubscription$1;
  constructor(statusCode: 400, error: PaymentMethodInUseByActiveSubscription$1);
}
/**
 * Invalid or expired verification token.
 */
declare class CheckEmailUpdate401Error extends PagoClientError<null> {
  readonly statusCode: 401;
  readonly error: null;
  constructor(statusCode: 401, error: null);
}
/**
 * Invalid or expired verification token.
 */
declare class VerifyEmailUpdate401Error extends PagoClientError<null> {
  readonly statusCode: 401;
  readonly error: null;
  constructor(statusCode: 401, error: null);
}
/**
 * Email address is already in use.
 */
declare class VerifyEmailUpdate422Error extends PagoClientError<null> {
  readonly statusCode: 422;
  readonly error: null;
  constructor(statusCode: 422, error: null);
}
/**
 * Authentication required
 */
declare class ListSeats401Error extends PagoClientError<null> {
  readonly statusCode: 401;
  readonly error: null;
  constructor(statusCode: 401, error: null);
}
/**
 * Not permitted or seat-based pricing not enabled
 */
declare class ListSeats403Error extends PagoClientError<null> {
  readonly statusCode: 403;
  readonly error: null;
  constructor(statusCode: 403, error: null);
}
/**
 * Subscription or order not found
 */
declare class ListSeats404Error extends PagoClientError<null> {
  readonly statusCode: 404;
  readonly error: null;
  constructor(statusCode: 404, error: null);
}
/**
 * No available seats or customer already has a seat
 */
declare class AssignSeat400Error extends PagoClientError<null> {
  readonly statusCode: 400;
  readonly error: null;
  constructor(statusCode: 400, error: null);
}
/**
 * Authentication required
 */
declare class AssignSeat401Error extends PagoClientError<null> {
  readonly statusCode: 401;
  readonly error: null;
  constructor(statusCode: 401, error: null);
}
/**
 * Not permitted or seat-based pricing not enabled
 */
declare class AssignSeat403Error extends PagoClientError<null> {
  readonly statusCode: 403;
  readonly error: null;
  constructor(statusCode: 403, error: null);
}
/**
 * Subscription, order, or customer not found
 */
declare class AssignSeat404Error extends PagoClientError<null> {
  readonly statusCode: 404;
  readonly error: null;
  constructor(statusCode: 404, error: null);
}
/**
 * Authentication required
 */
declare class RevokeSeat401Error extends PagoClientError<null> {
  readonly statusCode: 401;
  readonly error: null;
  constructor(statusCode: 401, error: null);
}
/**
 * Not permitted or seat-based pricing not enabled
 */
declare class RevokeSeat403Error extends PagoClientError<null> {
  readonly statusCode: 403;
  readonly error: null;
  constructor(statusCode: 403, error: null);
}
/**
 * Seat not found
 */
declare class RevokeSeat404Error extends PagoClientError<null> {
  readonly statusCode: 404;
  readonly error: null;
  constructor(statusCode: 404, error: null);
}
/**
 * Seat is not pending or already claimed
 */
declare class ResendInvitation400Error extends PagoClientError<null> {
  readonly statusCode: 400;
  readonly error: null;
  constructor(statusCode: 400, error: null);
}
/**
 * Authentication required
 */
declare class ResendInvitation401Error extends PagoClientError<null> {
  readonly statusCode: 401;
  readonly error: null;
  constructor(statusCode: 401, error: null);
}
/**
 * Not permitted or seat-based pricing not enabled
 */
declare class ResendInvitation403Error extends PagoClientError<null> {
  readonly statusCode: 403;
  readonly error: null;
  constructor(statusCode: 403, error: null);
}
/**
 * Seat not found
 */
declare class ResendInvitation404Error extends PagoClientError<null> {
  readonly statusCode: 404;
  readonly error: null;
  constructor(statusCode: 404, error: null);
}
/**
 * Authentication required
 */
declare class ListClaimedSubscriptions401Error extends PagoClientError<null> {
  readonly statusCode: 401;
  readonly error: null;
  constructor(statusCode: 401, error: null);
}
/**
 * Authentication required
 */
declare class ListMembers401Error extends PagoClientError<null> {
  readonly statusCode: 401;
  readonly error: null;
  constructor(statusCode: 401, error: null);
}
/**
 * Not permitted - requires owner or billing manager role
 */
declare class ListMembers403Error extends PagoClientError<null> {
  readonly statusCode: 403;
  readonly error: null;
  constructor(statusCode: 403, error: null);
}
/**
 * Invalid request or member already exists.
 */
declare class AddMember400Error extends PagoClientError<null> {
  readonly statusCode: 400;
  readonly error: null;
  constructor(statusCode: 400, error: null);
}
/**
 * Authentication required
 */
declare class AddMember401Error extends PagoClientError<null> {
  readonly statusCode: 401;
  readonly error: null;
  constructor(statusCode: 401, error: null);
}
/**
 * Not permitted - requires owner or billing manager role
 */
declare class AddMember403Error extends PagoClientError<null> {
  readonly statusCode: 403;
  readonly error: null;
  constructor(statusCode: 403, error: null);
}
/**
 * Cannot remove the only owner.
 */
declare class RemoveMember400Error extends PagoClientError<null> {
  readonly statusCode: 400;
  readonly error: null;
  constructor(statusCode: 400, error: null);
}
/**
 * Authentication required
 */
declare class RemoveMember401Error extends PagoClientError<null> {
  readonly statusCode: 401;
  readonly error: null;
  constructor(statusCode: 401, error: null);
}
/**
 * Not permitted - requires owner or billing manager role
 */
declare class RemoveMember403Error extends PagoClientError<null> {
  readonly statusCode: 403;
  readonly error: null;
  constructor(statusCode: 403, error: null);
}
/**
 * Member not found.
 */
declare class RemoveMember404Error extends PagoClientError<null> {
  readonly statusCode: 404;
  readonly error: null;
  constructor(statusCode: 404, error: null);
}
/**
 * Invalid role change.
 */
declare class UpdateMember400Error extends PagoClientError<null> {
  readonly statusCode: 400;
  readonly error: null;
  constructor(statusCode: 400, error: null);
}
/**
 * Authentication required
 */
declare class UpdateMember401Error extends PagoClientError<null> {
  readonly statusCode: 401;
  readonly error: null;
  constructor(statusCode: 401, error: null);
}
/**
 * Not permitted - requires owner or billing manager role
 */
declare class UpdateMember403Error extends PagoClientError<null> {
  readonly statusCode: 403;
  readonly error: null;
  constructor(statusCode: 403, error: null);
}
/**
 * Member not found.
 */
declare class UpdateMember404Error extends PagoClientError<null> {
  readonly statusCode: 404;
  readonly error: null;
  constructor(statusCode: 404, error: null);
}
/**
 * Payment already in progress.
 */
declare class PaymentAlreadyInProgress extends PagoClientError<PaymentAlreadyInProgress$1> {
  readonly statusCode: 409;
  readonly error: PaymentAlreadyInProgress$1;
  constructor(statusCode: 409, error: PaymentAlreadyInProgress$1);
}
/**
 * Order not eligible for retry or payment confirmation failed.
 */
declare class OrderNotEligibleForRetry extends PagoClientError<OrderNotEligibleForRetry$1> {
  readonly statusCode: 422;
  readonly error: OrderNotEligibleForRetry$1;
  constructor(statusCode: 422, error: OrderNotEligibleForRetry$1);
}
/**
 * Manual retry limit exceeded.
 */
declare class ManualRetryLimitExceeded extends PagoClientError<ManualRetryLimitExceeded$1> {
  readonly statusCode: 429;
  readonly error: ManualRetryLimitExceeded$1;
  constructor(statusCode: 429, error: ManualRetryLimitExceeded$1);
}
/**
 * Invalid or expired invitation token
 */
declare class GetClaimInfo400Error extends PagoClientError<null> {
  readonly statusCode: 400;
  readonly error: null;
  constructor(statusCode: 400, error: null);
}
/**
 * Seat-based pricing not enabled for organization
 */
declare class GetClaimInfo403Error extends PagoClientError<null> {
  readonly statusCode: 403;
  readonly error: null;
  constructor(statusCode: 403, error: null);
}
/**
 * Seat not found
 */
declare class GetClaimInfo404Error extends PagoClientError<null> {
  readonly statusCode: 404;
  readonly error: null;
  constructor(statusCode: 404, error: null);
}
/**
 * Invalid, expired, or already claimed token
 */
declare class ClaimSeat400Error extends PagoClientError<null> {
  readonly statusCode: 400;
  readonly error: null;
  constructor(statusCode: 400, error: null);
}
/**
 * Seat-based pricing not enabled for organization
 */
declare class ClaimSeat403Error extends PagoClientError<null> {
  readonly statusCode: 403;
  readonly error: null;
  constructor(statusCode: 403, error: null);
}
/**
 * Not Found
 */
declare class Update404Error extends PagoClientError<null> {
  readonly statusCode: 404;
  readonly error: null;
  constructor(statusCode: 404, error: null);
}
declare namespace webhooks_d_exports {
  export { PagoWebhookError, PagoWebhookUnknownTypeError, PagoWebhookVerificationError, WebhookBenefitCreatedPayload, WebhookBenefitGrantCreatedPayload, WebhookBenefitGrantCycledPayload, WebhookBenefitGrantRevokedPayload, WebhookBenefitGrantUpdatedPayload, WebhookBenefitUpdatedPayload, WebhookCheckoutCreatedPayload, WebhookCheckoutExpiredPayload, WebhookCheckoutUpdatedPayload, WebhookCustomerCreatedPayload, WebhookCustomerDeletedPayload, WebhookCustomerSeatAssignedPayload, WebhookCustomerSeatClaimedPayload, WebhookCustomerSeatRevokedPayload, WebhookCustomerStateChangedPayload, WebhookCustomerUpdatedPayload, WebhookMemberCreatedPayload, WebhookMemberDeletedPayload, WebhookMemberUpdatedPayload, WebhookOrderCreatedPayload, WebhookOrderPaidPayload, WebhookOrderRefundedPayload, WebhookOrderUpdatedPayload, WebhookOrganizationUpdatedPayload, WebhookPayload, WebhookProductCreatedPayload, WebhookProductUpdatedPayload, WebhookRefundCreatedPayload, WebhookRefundUpdatedPayload, WebhookSubscriptionActivePayload, WebhookSubscriptionCanceledPayload, WebhookSubscriptionCreatedPayload, WebhookSubscriptionPastDuePayload, WebhookSubscriptionPausedPayload, WebhookSubscriptionResumedPayload, WebhookSubscriptionRevokedPayload, WebhookSubscriptionUncanceledPayload, WebhookSubscriptionUpdatedPayload, validateEvent };
}
/**
 * Sent when a new benefit is created.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookBenefitCreatedPayload {
  /**
   * type
   */
  type: "benefit.created";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Benefit;
}
/**
 * Sent when a new benefit grant is created.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookBenefitGrantCreatedPayload {
  /**
   * type
   */
  type: "benefit_grant.created";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: BenefitGrantWebhook;
}
/**
 * Sent when a benefit grant is cycled,
 * meaning the related subscription has been renewed for another period.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookBenefitGrantCycledPayload {
  /**
   * type
   */
  type: "benefit_grant.cycled";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: BenefitGrantWebhook;
}
/**
 * Sent when a benefit grant is revoked.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookBenefitGrantRevokedPayload {
  /**
   * type
   */
  type: "benefit_grant.revoked";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: BenefitGrantWebhook;
}
/**
 * Sent when a benefit grant is updated.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookBenefitGrantUpdatedPayload {
  /**
   * type
   */
  type: "benefit_grant.updated";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: BenefitGrantWebhook;
}
/**
 * Sent when a benefit is updated.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookBenefitUpdatedPayload {
  /**
   * type
   */
  type: "benefit.updated";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Benefit;
}
/**
 * Sent when a new checkout is created.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookCheckoutCreatedPayload {
  /**
   * type
   */
  type: "checkout.created";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Checkout;
}
/**
 * Sent when a checkout expires.
 *
 * This event fires when a checkout reaches its expiration time without being completed.
 * Developers can use this to send reminder emails or track checkout abandonment.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookCheckoutExpiredPayload {
  /**
   * type
   */
  type: "checkout.expired";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Checkout;
}
/**
 * Sent when a checkout is updated.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookCheckoutUpdatedPayload {
  /**
   * type
   */
  type: "checkout.updated";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Checkout;
}
/**
 * Sent when a new customer is created.
 *
 * A customer can be created:
 *
 * * After a successful checkout.
 * * Programmatically via the API.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookCustomerCreatedPayload {
  /**
   * type
   */
  type: "customer.created";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Customer;
}
/**
 * Sent when a customer is deleted.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookCustomerDeletedPayload {
  /**
   * type
   */
  type: "customer.deleted";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Customer;
}
/**
 * Sent when a new customer seat is assigned.
 *
 * This event is triggered when a seat is assigned to a customer by the organization.
 * The customer will receive an invitation email to claim the seat.
 */
interface WebhookCustomerSeatAssignedPayload {
  /**
   * type
   */
  type: "customer_seat.assigned";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: CustomerSeat;
}
/**
 * Sent when a customer seat is claimed.
 *
 * This event is triggered when a customer accepts the seat invitation and claims their access.
 */
interface WebhookCustomerSeatClaimedPayload {
  /**
   * type
   */
  type: "customer_seat.claimed";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: CustomerSeat;
}
/**
 * Sent when a customer seat is revoked.
 *
 * This event is triggered when access to a seat is revoked, either manually by the organization or automatically when a subscription is canceled.
 */
interface WebhookCustomerSeatRevokedPayload {
  /**
   * type
   */
  type: "customer_seat.revoked";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: CustomerSeat;
}
/**
 * Sent when a customer state has changed.
 *
 * It's triggered when:
 *
 * * Customer is created, updated or deleted.
 * * A subscription is created or updated.
 * * A benefit is granted or revoked.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookCustomerStateChangedPayload {
  /**
   * type
   */
  type: "customer.state_changed";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: CustomerState;
}
/**
 * Sent when a customer is updated.
 *
 * This event is fired when the customer details are updated.
 *
 * If you want to be notified when a customer subscription or benefit state changes, you should listen to the `customer_state_changed` event.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookCustomerUpdatedPayload {
  /**
   * type
   */
  type: "customer.updated";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Customer;
}
/**
 * Sent when a new member is created.
 *
 * A member represents an individual within a customer (team).
 * This event is triggered when a member is added to a customer,
 * either programmatically via the API or when an owner is automatically
 * created for a new customer.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookMemberCreatedPayload {
  /**
   * type
   */
  type: "member.created";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Member;
}
/**
 * Sent when a member is deleted.
 *
 * This event is triggered when a member is removed from a customer.
 * Any active seats assigned to the member will be automatically revoked.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookMemberDeletedPayload {
  /**
   * type
   */
  type: "member.deleted";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Member;
}
/**
 * Sent when a member is updated.
 *
 * This event is triggered when member details are updated,
 * such as their name or role within the customer.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookMemberUpdatedPayload {
  /**
   * type
   */
  type: "member.updated";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Member;
}
/**
 * Sent when a new order is created.
 *
 * A new order is created when:
 *
 * * A customer purchases a one-time product. In this case, `billing_reason` is set to `purchase`.
 * * A customer starts a subscription. In this case, `billing_reason` is set to `subscription_create`.
 * * A subscription is renewed. In this case, `billing_reason` is set to `subscription_cycle`.
 * * A subscription is upgraded or downgraded with an immediate proration invoice. In this case, `billing_reason` is set to `subscription_update`.
 *
 * > [!WARNING]
 * > The order might not be paid yet, so the `status` field might be `pending`.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookOrderCreatedPayload {
  /**
   * type
   */
  type: "order.created";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Order;
}
/**
 * Sent when an order is paid.
 *
 * When you receive this event, the order is fully processed and payment has been received.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookOrderPaidPayload {
  /**
   * type
   */
  type: "order.paid";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Order;
}
/**
 * Sent when an order is fully or partially refunded.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookOrderRefundedPayload {
  /**
   * type
   */
  type: "order.refunded";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Order;
}
/**
 * Sent when an order is updated.
 *
 * An order is updated when:
 *
 * * Its status changes, e.g. from `pending` to `paid`.
 * * It's refunded, partially or fully.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookOrderUpdatedPayload {
  /**
   * type
   */
  type: "order.updated";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Order;
}
/**
 * Sent when a organization is updated.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookOrganizationUpdatedPayload {
  /**
   * type
   */
  type: "organization.updated";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Organization;
}
/**
 * Sent when a new product is created.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookProductCreatedPayload {
  /**
   * type
   */
  type: "product.created";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Product;
}
/**
 * Sent when a product is updated.
 *
 * **Discord & Slack support:** Basic
 */
interface WebhookProductUpdatedPayload {
  /**
   * type
   */
  type: "product.updated";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Product;
}
/**
 * Sent when a refund is created regardless of status.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookRefundCreatedPayload {
  /**
   * type
   */
  type: "refund.created";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Refund;
}
/**
 * Sent when a refund is updated.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookRefundUpdatedPayload {
  /**
   * type
   */
  type: "refund.updated";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Refund;
}
/**
 * Sent when a subscription becomes active,
 * whether because it's a new paid subscription or because payment was recovered.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookSubscriptionActivePayload {
  /**
   * type
   */
  type: "subscription.active";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Subscription;
}
/**
 * Sent when a subscription is canceled.
 * Customers might still have access until the end of the current period.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookSubscriptionCanceledPayload {
  /**
   * type
   */
  type: "subscription.canceled";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Subscription;
}
/**
 * Sent when a new subscription is created.
 *
 * When this event occurs, the subscription `status` might not be `active` yet, as we can still have to wait for the first payment to be processed.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookSubscriptionCreatedPayload {
  /**
   * type
   */
  type: "subscription.created";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Subscription;
}
/**
 * Sent when a subscription payment fails and the subscription enters `past_due` status.
 *
 * This is a recoverable state - the customer can update their payment method to restore the subscription.
 * Benefits may be revoked depending on the organization's grace period settings.
 *
 * If payment retries are exhausted, a `subscription.revoked` event will be sent.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookSubscriptionPastDuePayload {
  /**
   * type
   */
  type: "subscription.past_due";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Subscription;
}
/**
 * Sent when a subscription is paused and the customer temporarily loses access.
 *
 * No order is created while paused. The subscription resumes either on its
 * scheduled resume date or when resumed manually, starting a new billing period.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookSubscriptionPausedPayload {
  /**
   * type
   */
  type: "subscription.paused";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Subscription;
}
/**
 * Sent when a paused subscription resumes, restoring the customer's access.
 *
 * Resuming starts a new billing period and charges the customer immediately.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookSubscriptionResumedPayload {
  /**
   * type
   */
  type: "subscription.resumed";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Subscription;
}
/**
 * Sent when a subscription is revoked and the user loses access immediately.
 * Happens when the subscription is canceled or payment retries are exhausted (status becomes `unpaid`).
 *
 * For payment failures that can still be recovered, see `subscription.past_due`.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookSubscriptionRevokedPayload {
  /**
   * type
   */
  type: "subscription.revoked";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Subscription;
}
/**
 * Sent when a customer revokes a pending cancellation.
 *
 * When a customer cancels with "at period end", they retain access until the
 * subscription would renew. During this time, they can change their mind and
 * undo the cancellation. This event is triggered when they do so.
 *
 * **Discord & Slack support:** Full
 */
interface WebhookSubscriptionUncanceledPayload {
  /**
   * type
   */
  type: "subscription.uncanceled";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Subscription;
}
/**
 * Sent when a subscription is updated. This event fires for all changes to the subscription, including renewals.
 *
 * If you want more specific events, you can listen to `subscription.active`, `subscription.canceled`, `subscription.past_due`, and `subscription.revoked`.
 *
 * To listen specifically for renewals, you can listen to `order.created` events and check the `billing_reason` field.
 *
 * **Discord & Slack support:** On cancellation, past due, and revocation. Renewals are skipped.
 */
interface WebhookSubscriptionUpdatedPayload {
  /**
   * type
   */
  type: "subscription.updated";
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * data
   */
  data: Subscription;
}
type WebhookPayload = WebhookBenefitCreatedPayload | WebhookBenefitGrantCreatedPayload | WebhookBenefitGrantCycledPayload | WebhookBenefitGrantRevokedPayload | WebhookBenefitGrantUpdatedPayload | WebhookBenefitUpdatedPayload | WebhookCheckoutCreatedPayload | WebhookCheckoutExpiredPayload | WebhookCheckoutUpdatedPayload | WebhookCustomerCreatedPayload | WebhookCustomerDeletedPayload | WebhookCustomerSeatAssignedPayload | WebhookCustomerSeatClaimedPayload | WebhookCustomerSeatRevokedPayload | WebhookCustomerStateChangedPayload | WebhookCustomerUpdatedPayload | WebhookMemberCreatedPayload | WebhookMemberDeletedPayload | WebhookMemberUpdatedPayload | WebhookOrderCreatedPayload | WebhookOrderPaidPayload | WebhookOrderRefundedPayload | WebhookOrderUpdatedPayload | WebhookOrganizationUpdatedPayload | WebhookProductCreatedPayload | WebhookProductUpdatedPayload | WebhookRefundCreatedPayload | WebhookRefundUpdatedPayload | WebhookSubscriptionActivePayload | WebhookSubscriptionCanceledPayload | WebhookSubscriptionCreatedPayload | WebhookSubscriptionPastDuePayload | WebhookSubscriptionPausedPayload | WebhookSubscriptionResumedPayload | WebhookSubscriptionRevokedPayload | WebhookSubscriptionUncanceledPayload | WebhookSubscriptionUpdatedPayload;
/**
 * Verify a raw Pago webhook request and return its typed payload.
 */
declare const validateEvent: (body: string | Uint8Array, headers: Record<string, string>, secret: string) => Promise<WebhookPayload>;
//#endregion
export { type Pago, createPago, errors_d_exports as errors, models_d_exports as models, webhooks_d_exports as webhooks };
//# sourceMappingURL=index.d.cts.map