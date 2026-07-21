Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
const require_webhooks = require("../webhooks-CG-bSKxt.cjs");
//#region src/2026-04/errors.ts
var errors_exports = /* @__PURE__ */ __exportAll({
	AddMember400Error: () => AddMember400Error,
	AddMember401Error: () => AddMember401Error,
	AddMember403Error: () => AddMember403Error,
	AlreadyCanceledSubscription: () => AlreadyCanceledSubscription,
	AmbiguousExternalCustomerID: () => AmbiguousExternalCustomerID,
	AssignSeat400Error: () => AssignSeat400Error,
	AssignSeat401Error: () => AssignSeat401Error,
	AssignSeat403Error: () => AssignSeat403Error,
	AssignSeat404Error: () => AssignSeat404Error,
	CannotCreateOrganizationError: () => CannotCreateOrganizationError,
	CheckEmailUpdate401Error: () => CheckEmailUpdate401Error,
	ClaimSeat400Error: () => ClaimSeat400Error,
	ClaimSeat403Error: () => ClaimSeat403Error,
	ClientConfirm403Error: () => ClientConfirm403Error,
	ClientUpdate403Error: () => ClientUpdate403Error,
	CustomerNotReady: () => CustomerNotReady,
	DisputeNotOpenError: () => DisputeNotOpenError,
	ExpiredCheckoutError: () => ExpiredCheckoutError,
	Finalize402Error: () => Finalize402Error,
	Finalize403Error: () => Finalize403Error,
	GetClaimInfo400Error: () => GetClaimInfo400Error,
	GetClaimInfo403Error: () => GetClaimInfo403Error,
	GetClaimInfo404Error: () => GetClaimInfo404Error,
	HTTPValidationError: () => HTTPValidationError,
	ListClaimedSubscriptions401Error: () => ListClaimedSubscriptions401Error,
	ListMembers401Error: () => ListMembers401Error,
	ListMembers403Error: () => ListMembers403Error,
	ListSeats401Error: () => ListSeats401Error,
	ListSeats403Error: () => ListSeats403Error,
	ListSeats404Error: () => ListSeats404Error,
	ManualRetryLimitExceeded: () => ManualRetryLimitExceeded,
	MissingInvoiceBillingDetails: () => MissingInvoiceBillingDetails,
	NotPermitted: () => NotPermitted,
	OrderNotDraft: () => OrderNotDraft,
	OrderNotEligibleForInvoice: () => OrderNotEligibleForInvoice,
	OrderNotEligibleForRetry: () => OrderNotEligibleForRetry,
	PaymentAlreadyInProgress: () => PaymentAlreadyInProgress,
	PaymentError: () => PaymentError,
	PaymentFailed: () => PaymentFailed,
	PaymentMethodInUseByActiveSubscription: () => PaymentMethodInUseByActiveSubscription,
	PaymentMethodSetupFailed: () => PaymentMethodSetupFailed,
	RefundedAlready: () => RefundedAlready,
	RemoveMember400Error: () => RemoveMember400Error,
	RemoveMember401Error: () => RemoveMember401Error,
	RemoveMember403Error: () => RemoveMember403Error,
	RemoveMember404Error: () => RemoveMember404Error,
	ResendInvitation400Error: () => ResendInvitation400Error,
	ResendInvitation401Error: () => ResendInvitation401Error,
	ResendInvitation403Error: () => ResendInvitation403Error,
	ResendInvitation404Error: () => ResendInvitation404Error,
	ResourceNotFound: () => ResourceNotFound,
	RevokeSeat401Error: () => RevokeSeat401Error,
	RevokeSeat403Error: () => RevokeSeat403Error,
	RevokeSeat404Error: () => RevokeSeat404Error,
	SSOEnforcementRequiresConnection: () => SSOEnforcementRequiresConnection,
	SubscriptionLocked: () => SubscriptionLocked,
	Unauthorized: () => Unauthorized,
	Update403Error: () => Update403Error,
	Update404Error: () => Update404Error,
	UpdateMember400Error: () => UpdateMember400Error,
	UpdateMember401Error: () => UpdateMember401Error,
	UpdateMember403Error: () => UpdateMember403Error,
	UpdateMember404Error: () => UpdateMember404Error,
	VerifyEmailUpdate401Error: () => VerifyEmailUpdate401Error,
	VerifyEmailUpdate422Error: () => VerifyEmailUpdate422Error
});
/**
* Validation Error
*/
var HTTPValidationError = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "HTTPValidationError";
	}
};
/**
* Forbidden
*/
var CannotCreateOrganizationError = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "CannotCreateOrganizationError";
	}
};
/**
* Organization not found.
*/
var ResourceNotFound = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ResourceNotFound";
	}
};
/**
* You don't have the permission to update this organization.
*/
var NotPermitted = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "NotPermitted";
	}
};
/**
* Cannot enforce SSO without an enabled connection.
*/
var SSOEnforcementRequiresConnection = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "SSOEnforcementRequiresConnection";
	}
};
/**
* This subscription is already revoked.
*/
var AlreadyCanceledSubscription = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "AlreadyCanceledSubscription";
	}
};
/**
* Subscription is pending an update.
*/
var SubscriptionLocked = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "SubscriptionLocked";
	}
};
/**
* Payment required to apply the subscription update.
*/
var PaymentFailed = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "PaymentFailed";
	}
};
/**
* The charge failed, or requires customer authentication (e.g. a 3DS challenge) that can't be completed off-session.
*/
var Finalize402Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "Finalize402Error";
	}
};
/**
* Off-session charges are not enabled for this organization, or its account can't currently accept payments.
*/
var Finalize403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "Finalize403Error";
	}
};
/**
* The order is not in `draft` status.
*/
var OrderNotDraft = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "OrderNotDraft";
	}
};
/**
* Order is not eligible for invoice generation (invalid status).
*/
var OrderNotEligibleForInvoice = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "OrderNotEligibleForInvoice";
	}
};
/**
* Order is missing billing name or address.
*/
var MissingInvoiceBillingDetails = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "MissingInvoiceBillingDetails";
	}
};
/**
* Order is already fully refunded.
*/
var RefundedAlready = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "RefundedAlready";
	}
};
/**
* Conflict
*/
var DisputeNotOpenError = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "DisputeNotOpenError";
	}
};
/**
* The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
*/
var Update403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "Update403Error";
	}
};
/**
* The checkout session is expired.
*/
var ExpiredCheckoutError = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ExpiredCheckoutError";
	}
};
/**
* The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
*/
var ClientUpdate403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ClientUpdate403Error";
	}
};
/**
* The payment failed.
*/
var PaymentError = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "PaymentError";
	}
};
/**
* The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
*/
var ClientConfirm403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ClientConfirm403Error";
	}
};
/**
* Not authorized to manage license key.
*/
var Unauthorized = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "Unauthorized";
	}
};
/**
* The external customer ID matches customers in several accessible organizations.
*/
var AmbiguousExternalCustomerID = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "AmbiguousExternalCustomerID";
	}
};
/**
* The card was declined while setting up the payment method.
*/
var PaymentMethodSetupFailed = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "PaymentMethodSetupFailed";
	}
};
/**
* Customer is not ready to confirm a payment method.
*/
var CustomerNotReady = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "CustomerNotReady";
	}
};
/**
* Payment method is used by active subscription(s).
*/
var PaymentMethodInUseByActiveSubscription = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "PaymentMethodInUseByActiveSubscription";
	}
};
/**
* Invalid or expired verification token.
*/
var CheckEmailUpdate401Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "CheckEmailUpdate401Error";
	}
};
/**
* Invalid or expired verification token.
*/
var VerifyEmailUpdate401Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "VerifyEmailUpdate401Error";
	}
};
/**
* Email address is already in use.
*/
var VerifyEmailUpdate422Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "VerifyEmailUpdate422Error";
	}
};
/**
* Authentication required
*/
var ListSeats401Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ListSeats401Error";
	}
};
/**
* Not permitted or seat-based pricing not enabled
*/
var ListSeats403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ListSeats403Error";
	}
};
/**
* Subscription or order not found
*/
var ListSeats404Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ListSeats404Error";
	}
};
/**
* No available seats or customer already has a seat
*/
var AssignSeat400Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "AssignSeat400Error";
	}
};
/**
* Authentication required
*/
var AssignSeat401Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "AssignSeat401Error";
	}
};
/**
* Not permitted or seat-based pricing not enabled
*/
var AssignSeat403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "AssignSeat403Error";
	}
};
/**
* Subscription, order, or customer not found
*/
var AssignSeat404Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "AssignSeat404Error";
	}
};
/**
* Authentication required
*/
var RevokeSeat401Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "RevokeSeat401Error";
	}
};
/**
* Not permitted or seat-based pricing not enabled
*/
var RevokeSeat403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "RevokeSeat403Error";
	}
};
/**
* Seat not found
*/
var RevokeSeat404Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "RevokeSeat404Error";
	}
};
/**
* Seat is not pending or already claimed
*/
var ResendInvitation400Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ResendInvitation400Error";
	}
};
/**
* Authentication required
*/
var ResendInvitation401Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ResendInvitation401Error";
	}
};
/**
* Not permitted or seat-based pricing not enabled
*/
var ResendInvitation403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ResendInvitation403Error";
	}
};
/**
* Seat not found
*/
var ResendInvitation404Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ResendInvitation404Error";
	}
};
/**
* Authentication required
*/
var ListClaimedSubscriptions401Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ListClaimedSubscriptions401Error";
	}
};
/**
* Authentication required
*/
var ListMembers401Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ListMembers401Error";
	}
};
/**
* Not permitted - requires owner or billing manager role
*/
var ListMembers403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ListMembers403Error";
	}
};
/**
* Invalid request or member already exists.
*/
var AddMember400Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "AddMember400Error";
	}
};
/**
* Authentication required
*/
var AddMember401Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "AddMember401Error";
	}
};
/**
* Not permitted - requires owner or billing manager role
*/
var AddMember403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "AddMember403Error";
	}
};
/**
* Cannot remove the only owner.
*/
var RemoveMember400Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "RemoveMember400Error";
	}
};
/**
* Authentication required
*/
var RemoveMember401Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "RemoveMember401Error";
	}
};
/**
* Not permitted - requires owner or billing manager role
*/
var RemoveMember403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "RemoveMember403Error";
	}
};
/**
* Member not found.
*/
var RemoveMember404Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "RemoveMember404Error";
	}
};
/**
* Invalid role change.
*/
var UpdateMember400Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "UpdateMember400Error";
	}
};
/**
* Authentication required
*/
var UpdateMember401Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "UpdateMember401Error";
	}
};
/**
* Not permitted - requires owner or billing manager role
*/
var UpdateMember403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "UpdateMember403Error";
	}
};
/**
* Member not found.
*/
var UpdateMember404Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "UpdateMember404Error";
	}
};
/**
* Payment already in progress.
*/
var PaymentAlreadyInProgress = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "PaymentAlreadyInProgress";
	}
};
/**
* Order not eligible for retry or payment confirmation failed.
*/
var OrderNotEligibleForRetry = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "OrderNotEligibleForRetry";
	}
};
/**
* Manual retry limit exceeded.
*/
var ManualRetryLimitExceeded = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ManualRetryLimitExceeded";
	}
};
/**
* Invalid or expired invitation token
*/
var GetClaimInfo400Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "GetClaimInfo400Error";
	}
};
/**
* Seat-based pricing not enabled for organization
*/
var GetClaimInfo403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "GetClaimInfo403Error";
	}
};
/**
* Seat not found
*/
var GetClaimInfo404Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "GetClaimInfo404Error";
	}
};
/**
* Invalid, expired, or already claimed token
*/
var ClaimSeat400Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ClaimSeat400Error";
	}
};
/**
* Seat-based pricing not enabled for organization
*/
var ClaimSeat403Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "ClaimSeat403Error";
	}
};
/**
* Not Found
*/
var Update404Error = class extends require_webhooks.PagoClientError {
	statusCode;
	error;
	constructor(statusCode, error) {
		super(statusCode, error);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "Update404Error";
	}
};
//#endregion
//#region src/2026-04/services/benefit_grants.ts
const listBenefitGrants$1 = (client) => {
	/**
	* List benefit grants across all benefits accessible to the authenticated subject.
	*
	* **Scopes**: `benefits:read` `benefits:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceBenefitGrant}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			customer_id: query?.customer_id,
			external_customer_id: query?.external_customer_id,
			is_granted: query?.is_granted,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"]
		};
		const request = client.buildRequest("GET", "/v1/benefit-grants/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List benefit grants across all benefits accessible to the authenticated subject.
*
* **Scopes**: `benefits:read` `benefits:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<BenefitGrant>} A generator that yields items of type BenefitGrant.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistBenefitGrants$1 = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listBenefitGrants$1(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
function createBenefitGrantsService$1(client) {
	return {
		list: listBenefitGrants$1(client),
		iterlist: iterlistBenefitGrants$1(client)
	};
}
//#endregion
//#region src/2026-04/services/benefits.ts
const listBenefits = (client) => {
	/**
	* List benefits.
	*
	* **Scopes**: `benefits:read` `benefits:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceBenefit}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			type: query?.type,
			id: query?.id,
			exclude_id: query?.exclude_id,
			query: query?.query,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"],
			metadata: query?.metadata
		};
		const request = client.buildRequest("GET", "/v1/benefits/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List benefits.
*
* **Scopes**: `benefits:read` `benefits:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Benefit>} A generator that yields items of type Benefit.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistBenefits = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listBenefits(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createBenefits = (client) => {
	/**
	* Create a benefit.
	*
	* **Scopes**: `benefits:write`
	*
	* @param body - Request body
	* @returns {Benefit}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/benefits/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const getBenefits = (client) => {
	/**
	* Get a benefit by ID.
	*
	* **Scopes**: `benefits:read` `benefits:write`
	*
	* @param id
	* @returns {Benefit}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Benefit not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/benefits/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const deleteBenefits = (client) => {
	/**
	* Delete a benefit.
	*
	* > [!WARNING]
	* > Every grants associated with the benefit will be revoked.
	* > Users will lose access to the benefit.
	*
	* **Scopes**: `benefits:write`
	*
	* @param id
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {NotPermitted} This benefit is not deletable.
	* @throws {ResourceNotFound} Benefit not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("DELETE", "/v1/benefits/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			403: NotPermitted,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateBenefits = (client) => {
	/**
	* Update a benefit.
	*
	* **Scopes**: `benefits:write`
	*
	* @param id
	* @param body - Request body
	* @returns {Benefit}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Benefit not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/benefits/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const grantsBenefits = (client) => {
	/**
	* List the individual grants for a benefit.
	*
	* It's especially useful to check if a user has been granted a benefit.
	*
	* **Scopes**: `benefits:read` `benefits:write`
	*
	* @param id
	* @param query - Query parameters
	* @returns {ListResourceBenefitGrant}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Benefit not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, query) => {
		const pathParams = { id };
		const queryParams = {
			is_granted: query?.is_granted,
			customer_id: query?.customer_id,
			member_id: query?.member_id,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10
		};
		const request = client.buildRequest("GET", "/v1/benefits/{id}/grants", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
/**
* List the individual grants for a benefit.
*
* It's especially useful to check if a user has been granted a benefit.
*
* **Scopes**: `benefits:read` `benefits:write`
*
* @param id
* @param query - Query parameters
* @returns {AsyncGenerator<BenefitGrant>} A generator that yields items of type BenefitGrant.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {ResourceNotFound} Benefit not found.
* @throws {HTTPValidationError} Validation Error
*/
const itergrantsBenefits = (client) => {
	return async function* (id, query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await grantsBenefits(client)(id, {
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
function createBenefitsService(client) {
	return {
		list: listBenefits(client),
		create: createBenefits(client),
		get: getBenefits(client),
		delete: deleteBenefits(client),
		update: updateBenefits(client),
		grants: grantsBenefits(client),
		iterlist: iterlistBenefits(client),
		itergrants: itergrantsBenefits(client)
	};
}
//#endregion
//#region src/2026-04/services/checkout_links.ts
const listCheckoutLinks = (client) => {
	/**
	* List checkout links.
	*
	* **Scopes**: `checkout_links:read` `checkout_links:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceCheckoutLink}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			product_id: query?.product_id,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["created_at"]
		};
		const request = client.buildRequest("GET", "/v1/checkout-links/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List checkout links.
*
* **Scopes**: `checkout_links:read` `checkout_links:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<CheckoutLink>} A generator that yields items of type CheckoutLink.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistCheckoutLinks = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listCheckoutLinks(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createCheckoutLinks = (client) => {
	/**
	* Create a checkout link.
	*
	* **Scopes**: `checkout_links:write`
	*
	* @param body - Request body
	* @returns {CheckoutLink}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/checkout-links/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const getCheckoutLinks = (client) => {
	/**
	* Get a checkout link by ID.
	*
	* **Scopes**: `checkout_links:read` `checkout_links:write`
	*
	* @param id - The checkout link ID.
	* @returns {CheckoutLink}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Checkout link not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/checkout-links/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const deleteCheckoutLinks = (client) => {
	/**
	* Delete a checkout link.
	*
	* **Scopes**: `checkout_links:write`
	*
	* @param id - The checkout link ID.
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Checkout link not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("DELETE", "/v1/checkout-links/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateCheckoutLinks = (client) => {
	/**
	* Update a checkout link.
	*
	* **Scopes**: `checkout_links:write`
	*
	* @param id - The checkout link ID.
	* @param body - Request body
	* @returns {CheckoutLink}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Checkout link not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/checkout-links/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createCheckoutLinksService(client) {
	return {
		list: listCheckoutLinks(client),
		create: createCheckoutLinks(client),
		get: getCheckoutLinks(client),
		delete: deleteCheckoutLinks(client),
		update: updateCheckoutLinks(client),
		iterlist: iterlistCheckoutLinks(client)
	};
}
//#endregion
//#region src/2026-04/services/checkouts.ts
const listCheckouts = (client) => {
	/**
	* List checkout sessions.
	*
	* **Scopes**: `checkouts:read` `checkouts:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceCheckout}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			product_id: query?.product_id,
			customer_id: query?.customer_id,
			external_customer_id: query?.external_customer_id,
			status: query?.status,
			query: query?.query,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"]
		};
		const request = client.buildRequest("GET", "/v1/checkouts/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List checkout sessions.
*
* **Scopes**: `checkouts:read` `checkouts:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Checkout>} A generator that yields items of type Checkout.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistCheckouts = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listCheckouts(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createCheckouts = (client) => {
	/**
	* Create a checkout session.
	*
	* **Scopes**: `checkouts:write`
	*
	* @param body - Request body
	* @returns {Checkout}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/checkouts/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const getCheckouts = (client) => {
	/**
	* Get a checkout session by ID.
	*
	* **Scopes**: `checkouts:read` `checkouts:write`
	*
	* @param id - The checkout session ID.
	* @returns {Checkout}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Checkout session not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/checkouts/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateCheckouts = (client) => {
	/**
	* Update a checkout session.
	*
	* **Scopes**: `checkouts:write`
	*
	* @param id - The checkout session ID.
	* @param body - Request body
	* @returns {Checkout}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {Update403Error} The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
	* @throws {ResourceNotFound} Checkout session not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/checkouts/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: Update403Error,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const clientGetCheckouts = (client) => {
	/**
	* Get a checkout session by client secret.
	*
	* @param client_secret - The checkout session client secret.
	* @returns {CheckoutPublic}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Checkout session not found.
	* @throws {ExpiredCheckoutError} The checkout session is expired.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (client_secret) => {
		const pathParams = { client_secret };
		const request = client.buildRequest("GET", "/v1/checkouts/client/{client_secret}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			410: ExpiredCheckoutError,
			422: HTTPValidationError
		});
	};
};
const clientUpdateCheckouts = (client) => {
	/**
	* Update a checkout session by client secret.
	*
	* @param client_secret - The checkout session client secret.
	* @param body - Request body
	* @returns {CheckoutPublic}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ClientUpdate403Error} The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
	* @throws {ResourceNotFound} Checkout session not found.
	* @throws {ExpiredCheckoutError} The checkout session is expired.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (client_secret, body) => {
		const pathParams = { client_secret };
		const request = client.buildRequest("PATCH", "/v1/checkouts/client/{client_secret}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: ClientUpdate403Error,
			404: ResourceNotFound,
			410: ExpiredCheckoutError,
			422: HTTPValidationError
		});
	};
};
const clientConfirmCheckouts = (client) => {
	/**
	* Confirm a checkout session by client secret.
	*
	* Orders and subscriptions will be processed.
	*
	* @param client_secret - The checkout session client secret.
	* @param body - Request body
	* @returns {CheckoutPublicConfirmed}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {PaymentError} The payment failed.
	* @throws {ClientConfirm403Error} The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
	* @throws {ResourceNotFound} Checkout session not found.
	* @throws {ExpiredCheckoutError} The checkout session is expired.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (client_secret, body) => {
		const pathParams = { client_secret };
		const request = client.buildRequest("POST", "/v1/checkouts/client/{client_secret}/confirm", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			400: PaymentError,
			403: ClientConfirm403Error,
			404: ResourceNotFound,
			410: ExpiredCheckoutError,
			422: HTTPValidationError
		});
	};
};
function createCheckoutsService(client) {
	return {
		list: listCheckouts(client),
		create: createCheckouts(client),
		get: getCheckouts(client),
		update: updateCheckouts(client),
		clientGet: clientGetCheckouts(client),
		clientUpdate: clientUpdateCheckouts(client),
		clientConfirm: clientConfirmCheckouts(client),
		iterlist: iterlistCheckouts(client)
	};
}
//#endregion
//#region src/2026-04/services/custom_fields.ts
const listCustomFields = (client) => {
	/**
	* List custom fields.
	*
	* **Scopes**: `custom_fields:read` `custom_fields:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceCustomField}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			query: query?.query,
			type: query?.type,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["slug"]
		};
		const request = client.buildRequest("GET", "/v1/custom-fields/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List custom fields.
*
* **Scopes**: `custom_fields:read` `custom_fields:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<CustomField>} A generator that yields items of type CustomField.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistCustomFields = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listCustomFields(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createCustomFields = (client) => {
	/**
	* Create a custom field.
	*
	* **Scopes**: `custom_fields:write`
	*
	* @param body - Request body
	* @returns {CustomField}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/custom-fields/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const getCustomFields = (client) => {
	/**
	* Get a custom field by ID.
	*
	* **Scopes**: `custom_fields:read` `custom_fields:write`
	*
	* @param id - The custom field ID.
	* @returns {CustomField}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Custom field not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/custom-fields/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const deleteCustomFields = (client) => {
	/**
	* Delete a custom field.
	*
	* **Scopes**: `custom_fields:write`
	*
	* @param id - The custom field ID.
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Custom field not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("DELETE", "/v1/custom-fields/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateCustomFields = (client) => {
	/**
	* Update a custom field.
	*
	* **Scopes**: `custom_fields:write`
	*
	* @param id - The custom field ID.
	* @param body - Request body
	* @returns {CustomField}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Custom field not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/custom-fields/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createCustomFieldsService(client) {
	return {
		list: listCustomFields(client),
		create: createCustomFields(client),
		get: getCustomFields(client),
		delete: deleteCustomFields(client),
		update: updateCustomFields(client),
		iterlist: iterlistCustomFields(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_meters.ts
const listCustomerMeters$1 = (client) => {
	/**
	* List customer meters.
	*
	* **Scopes**: `customer_meters:read`
	*
	* @param query - Query parameters
	* @returns {ListResourceCustomerMeter}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			customer_id: query?.customer_id,
			external_customer_id: query?.external_customer_id,
			meter_id: query?.meter_id,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-modified_at"]
		};
		const request = client.buildRequest("GET", "/v1/customer-meters/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List customer meters.
*
* **Scopes**: `customer_meters:read`
*
* @param query - Query parameters
* @returns {AsyncGenerator<CustomerMeter>} A generator that yields items of type CustomerMeter.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistCustomerMeters$1 = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listCustomerMeters$1(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const getCustomerMeters$1 = (client) => {
	/**
	* Get a customer meter by ID.
	*
	* **Scopes**: `customer_meters:read`
	*
	* @param id - The customer meter ID.
	* @returns {CustomerMeter}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer meter not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/customer-meters/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createCustomerMetersService$1(client) {
	return {
		list: listCustomerMeters$1(client),
		get: getCustomerMeters$1(client),
		iterlist: iterlistCustomerMeters$1(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_portal/benefit_grants.ts
const listBenefitGrants = (client) => {
	/**
	* List benefits grants of the authenticated customer.
	*
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceCustomerBenefitGrant}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			query: query?.query,
			type: query?.type,
			benefit_id: query?.benefit_id,
			checkout_id: query?.checkout_id,
			order_id: query?.order_id,
			subscription_id: query?.subscription_id,
			member_id: query?.member_id,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["product_benefit", "-granted_at"]
		};
		const request = client.buildRequest("GET", "/v1/customer-portal/benefit-grants/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List benefits grants of the authenticated customer.
*
* **Scopes**: `customer_portal:read` `customer_portal:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<CustomerBenefitGrant>} A generator that yields items of type CustomerBenefitGrant.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistBenefitGrants = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listBenefitGrants(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const getBenefitGrants = (client) => {
	/**
	* Get a benefit grant by ID for the authenticated customer.
	*
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @param id - The benefit grant ID.
	* @returns {CustomerBenefitGrant}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Benefit grant not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/customer-portal/benefit-grants/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateBenefitGrants = (client) => {
	/**
	* Update a benefit grant for the authenticated customer.
	*
	* **Scopes**: `customer_portal:write`
	*
	* @param id - The benefit grant ID.
	* @param body - Request body
	* @returns {CustomerBenefitGrant}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {NotPermitted} The benefit grant is revoked and cannot be updated.
	* @throws {ResourceNotFound} Benefit grant not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/customer-portal/benefit-grants/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: NotPermitted,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createBenefitGrantsService(client) {
	return {
		list: listBenefitGrants(client),
		get: getBenefitGrants(client),
		update: updateBenefitGrants(client),
		iterlist: iterlistBenefitGrants(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_portal/customer_meters.ts
const listCustomerMeters = (client) => {
	/**
	* List meters of the authenticated customer.
	*
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceCustomerCustomerMeter}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			meter_id: query?.meter_id,
			query: query?.query,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-modified_at"]
		};
		const request = client.buildRequest("GET", "/v1/customer-portal/meters/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List meters of the authenticated customer.
*
* **Scopes**: `customer_portal:read` `customer_portal:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<CustomerCustomerMeter>} A generator that yields items of type CustomerCustomerMeter.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistCustomerMeters = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listCustomerMeters(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const getCustomerMeters = (client) => {
	/**
	* Get a meter by ID for the authenticated customer.
	*
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @param id - The customer meter ID.
	* @returns {CustomerCustomerMeter}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer meter not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/customer-portal/meters/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createCustomerMetersService(client) {
	return {
		list: listCustomerMeters(client),
		get: getCustomerMeters(client),
		iterlist: iterlistCustomerMeters(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_portal/customer_session.ts
const introspectCustomerSession = (client) => {
	/**
	* Introspect the current session and return its information.
	*
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @returns {CustomerCustomerSession}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	*/
	return async () => {
		const request = client.buildRequest("GET", "/v1/customer-portal/customer-session/introspect", {}, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {});
	};
};
const getAuthenticatedUserCustomerSession = (client) => {
	/**
	* Get information about the currently authenticated portal user.
	*
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @returns {PortalAuthenticatedUser}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	*/
	return async () => {
		const request = client.buildRequest("GET", "/v1/customer-portal/customer-session/user", {}, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {});
	};
};
function createCustomerSessionService(client) {
	return {
		introspect: introspectCustomerSession(client),
		getAuthenticatedUser: getAuthenticatedUserCustomerSession(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_portal/customers.ts
const getCustomers$1 = (client) => {
	/**
	* Get authenticated customer.
	*
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @returns {CustomerPortalCustomer}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	*/
	return async () => {
		const request = client.buildRequest("GET", "/v1/customer-portal/customers/me", {}, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {});
	};
};
const updateCustomers$1 = (client) => {
	/**
	* Update authenticated customer.
	*
	* @param body - Request body
	* @returns {CustomerPortalCustomer}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("PATCH", "/v1/customer-portal/customers/me", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const listPaymentMethodsCustomers$1 = (client) => {
	/**
	* Get saved payment methods of the authenticated customer.
	*
	* @param query - Query parameters
	* @returns {ListResourceCustomerPaymentMethod}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			page: query?.page ?? 1,
			limit: query?.limit ?? 10
		};
		const request = client.buildRequest("GET", "/v1/customer-portal/customers/me/payment-methods", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* Get saved payment methods of the authenticated customer.
*
* @param query - Query parameters
* @returns {AsyncGenerator<CustomerPaymentMethod>} A generator that yields items of type CustomerPaymentMethod.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistPaymentMethodsCustomers$1 = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listPaymentMethodsCustomers$1(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const addPaymentMethodCustomers = (client) => {
	/**
	* Add a payment method to the authenticated customer.
	*
	* @param body - Request body
	* @returns {CustomerPaymentMethodCreateResponse}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {PaymentMethodSetupFailed} The card was declined while setting up the payment method.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customer-portal/customers/me/payment-methods", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			400: PaymentMethodSetupFailed,
			422: HTTPValidationError
		});
	};
};
const confirmPaymentMethodCustomers = (client) => {
	/**
	* Confirm a payment method for the authenticated customer.
	*
	* @param body - Request body
	* @returns {CustomerPaymentMethodCreateResponse}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {CustomerNotReady} Customer is not ready to confirm a payment method.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customer-portal/customers/me/payment-methods/confirm", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			400: CustomerNotReady,
			422: HTTPValidationError
		});
	};
};
const deletePaymentMethodCustomers = (client) => {
	/**
	* Delete a payment method from the authenticated customer.
	*
	* @param id
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {PaymentMethodInUseByActiveSubscription} Payment method is used by active subscription(s).
	* @throws {ResourceNotFound} Payment method not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("DELETE", "/v1/customer-portal/customers/me/payment-methods/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			400: PaymentMethodInUseByActiveSubscription,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const requestEmailUpdateCustomers = (client) => {
	/**
	* Request an email change for the authenticated customer.
	*
	* @param body - Request body
	* @returns {unknown}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customer-portal/customers/me/email-update/request", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const checkEmailUpdateCustomers = (client) => {
	/**
	* Check if an email change verification token is still valid.
	*
	* @param query - Query parameters
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {CheckEmailUpdate401Error} Invalid or expired verification token.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = { token: query.token };
		const request = client.buildRequest("GET", "/v1/customer-portal/customers/me/email-update/check", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			401: CheckEmailUpdate401Error,
			422: HTTPValidationError
		});
	};
};
const verifyEmailUpdateCustomers = (client) => {
	/**
	* Verify an email change using the token from the verification email.
	*
	* @param body - Request body
	* @returns {CustomerEmailUpdateVerifyResponse}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {VerifyEmailUpdate401Error} Invalid or expired verification token.
	* @throws {VerifyEmailUpdate422Error} Email address is already in use.
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customer-portal/customers/me/email-update/verify", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			401: VerifyEmailUpdate401Error,
			422: VerifyEmailUpdate422Error
		});
	};
};
function createCustomersService$1(client) {
	return {
		get: getCustomers$1(client),
		update: updateCustomers$1(client),
		listPaymentMethods: listPaymentMethodsCustomers$1(client),
		addPaymentMethod: addPaymentMethodCustomers(client),
		confirmPaymentMethod: confirmPaymentMethodCustomers(client),
		deletePaymentMethod: deletePaymentMethodCustomers(client),
		requestEmailUpdate: requestEmailUpdateCustomers(client),
		checkEmailUpdate: checkEmailUpdateCustomers(client),
		verifyEmailUpdate: verifyEmailUpdateCustomers(client),
		iterlistPaymentMethods: iterlistPaymentMethodsCustomers$1(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_portal/downloadables.ts
const listDownloadables = (client) => {
	/**
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceDownloadableRead}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			benefit_id: query?.benefit_id,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10
		};
		const request = client.buildRequest("GET", "/v1/customer-portal/downloadables/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* **Scopes**: `customer_portal:read` `customer_portal:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<DownloadableRead>} A generator that yields items of type DownloadableRead.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistDownloadables = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listDownloadables(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
function createDownloadablesService(client) {
	return {
		list: listDownloadables(client),
		iterlist: iterlistDownloadables(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_portal/license_keys.ts
const listLicenseKeys$1 = (client) => {
	/**
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceLicenseKeyRead}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {Unauthorized} Not authorized to manage license key.
	* @throws {ResourceNotFound} License key not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			benefit_id: query?.benefit_id,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10
		};
		const request = client.buildRequest("GET", "/v1/customer-portal/license-keys/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			401: Unauthorized,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
/**
* **Scopes**: `customer_portal:read` `customer_portal:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<LicenseKeyRead>} A generator that yields items of type LicenseKeyRead.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {Unauthorized} Not authorized to manage license key.
* @throws {ResourceNotFound} License key not found.
* @throws {HTTPValidationError} Validation Error
*/
const iterlistLicenseKeys$1 = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listLicenseKeys$1(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const getLicenseKeys$1 = (client) => {
	/**
	* Get a license key.
	*
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @param id
	* @returns {LicenseKeyWithActivations}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} License key not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/customer-portal/license-keys/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const validateLicenseKeys$1 = (client) => {
	/**
	* Validate a license key.
	*
	* > This endpoint doesn't require authentication and can be safely used on a public
	* > client, like a desktop application or a mobile app.
	* > If you plan to validate a license key on a server, use the `/v1/license-keys/validate`
	* > endpoint instead.
	*
	* @param body - Request body
	* @returns {ValidatedLicenseKey}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} License key not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customer-portal/license-keys/validate", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const activateLicenseKeys$1 = (client) => {
	/**
	* Activate a license key instance.
	*
	* > This endpoint doesn't require authentication and can be safely used on a public
	* > client, like a desktop application or a mobile app.
	* > If you plan to validate a license key on a server, use the `/v1/license-keys/activate`
	* > endpoint instead.
	*
	* @param body - Request body
	* @returns {LicenseKeyActivationRead}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {NotPermitted} License key activation not supported or limit reached. Use /validate endpoint for licenses without activations.
	* @throws {ResourceNotFound} License key not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customer-portal/license-keys/activate", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: NotPermitted,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const deactivateLicenseKeys$1 = (client) => {
	/**
	* Deactivate a license key instance.
	*
	* > This endpoint doesn't require authentication and can be safely used on a public
	* > client, like a desktop application or a mobile app.
	* > If you plan to validate a license key on a server, use the `/v1/license-keys/deactivate`
	* > endpoint instead.
	*
	* @param body - Request body
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} License key not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customer-portal/license-keys/deactivate", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createLicenseKeysService$1(client) {
	return {
		list: listLicenseKeys$1(client),
		get: getLicenseKeys$1(client),
		validate: validateLicenseKeys$1(client),
		activate: activateLicenseKeys$1(client),
		deactivate: deactivateLicenseKeys$1(client),
		iterlist: iterlistLicenseKeys$1(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_portal/members.ts
const listMembersMembers$1 = (client) => {
	/**
	* List all members of the customer's team.
	*
	* Only available to owners and billing managers of team customers.
	*
	* @param query - Query parameters
	* @returns {ListResourceCustomerPortalMember}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ListMembers401Error} Authentication required
	* @throws {ListMembers403Error} Not permitted - requires owner or billing manager role
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			page: query?.page ?? 1,
			limit: query?.limit ?? 10
		};
		const request = client.buildRequest("GET", "/v1/customer-portal/members", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			401: ListMembers401Error,
			403: ListMembers403Error,
			422: HTTPValidationError
		});
	};
};
/**
* List all members of the customer's team.
*
* Only available to owners and billing managers of team customers.
*
* @param query - Query parameters
* @returns {AsyncGenerator<CustomerPortalMember>} A generator that yields items of type CustomerPortalMember.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {ListMembers401Error} Authentication required
* @throws {ListMembers403Error} Not permitted - requires owner or billing manager role
* @throws {HTTPValidationError} Validation Error
*/
const iterlistMembersMembers$1 = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listMembersMembers$1(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const addMemberMembers = (client) => {
	/**
	* Add a new member to the customer's team.
	*
	* Only available to owners and billing managers of team customers.
	*
	* Rules:
	* - Cannot add a member with the owner role (there must be exactly one owner)
	* - If a member with this email already exists, the existing member is returned
	*
	* @param body - Request body
	* @returns {CustomerPortalMember}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {AddMember400Error} Invalid request or member already exists.
	* @throws {AddMember401Error} Authentication required
	* @throws {AddMember403Error} Not permitted - requires owner or billing manager role
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customer-portal/members", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			400: AddMember400Error,
			401: AddMember401Error,
			403: AddMember403Error,
			422: HTTPValidationError
		});
	};
};
const removeMemberMembers = (client) => {
	/**
	* Remove a member from the team.
	*
	* Only available to owners and billing managers of team customers.
	*
	* Rules:
	* - Cannot remove yourself
	* - Cannot remove the only owner
	*
	* @param id
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {RemoveMember400Error} Cannot remove the only owner.
	* @throws {RemoveMember401Error} Authentication required
	* @throws {RemoveMember403Error} Not permitted - requires owner or billing manager role
	* @throws {RemoveMember404Error} Member not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("DELETE", "/v1/customer-portal/members/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			400: RemoveMember400Error,
			401: RemoveMember401Error,
			403: RemoveMember403Error,
			404: RemoveMember404Error,
			422: HTTPValidationError
		});
	};
};
const updateMemberMembers = (client) => {
	/**
	* Update a member's name or role.
	*
	* Only available to owners and billing managers of team customers.
	*
	* Rules:
	* - Cannot modify your own role (to prevent self-demotion)
	* - Customer must have exactly one owner at all times
	*
	* @param id
	* @param body - Request body
	* @returns {CustomerPortalMember}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {UpdateMember400Error} Invalid role change.
	* @throws {UpdateMember401Error} Authentication required
	* @throws {UpdateMember403Error} Not permitted - requires owner or billing manager role
	* @throws {UpdateMember404Error} Member not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/customer-portal/members/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			400: UpdateMember400Error,
			401: UpdateMember401Error,
			403: UpdateMember403Error,
			404: UpdateMember404Error,
			422: HTTPValidationError
		});
	};
};
function createMembersService$2(client) {
	return {
		listMembers: listMembersMembers$1(client),
		addMember: addMemberMembers(client),
		removeMember: removeMemberMembers(client),
		updateMember: updateMemberMembers(client),
		iterlistMembers: iterlistMembersMembers$1(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_portal/orders.ts
const listOrders$1 = (client) => {
	/**
	* List orders of the authenticated customer.
	*
	* @param query - Query parameters
	* @returns {ListResourceCustomerOrder}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			product_id: query?.product_id,
			product_billing_type: query?.product_billing_type,
			subscription_id: query?.subscription_id,
			query: query?.query,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"]
		};
		const request = client.buildRequest("GET", "/v1/customer-portal/orders/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List orders of the authenticated customer.
*
* @param query - Query parameters
* @returns {AsyncGenerator<CustomerOrder>} A generator that yields items of type CustomerOrder.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistOrders$1 = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listOrders$1(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const getOrders$1 = (client) => {
	/**
	* Get an order by ID for the authenticated customer.
	*
	* @param id - The order ID.
	* @returns {CustomerOrder}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Order not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/customer-portal/orders/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateOrders$1 = (client) => {
	/**
	* Update an order for the authenticated customer.
	*
	* @param id - The order ID.
	* @param body - Request body
	* @returns {CustomerOrder}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Order not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/customer-portal/orders/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const invoiceOrders$1 = (client) => {
	/**
	* Get an order's invoice data.
	*
	* @param id - The order ID.
	* @returns {CustomerOrderInvoice}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Order not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/customer-portal/orders/{id}/invoice", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const generateInvoiceOrders$1 = (client) => {
	/**
	* Trigger generation of an order's invoice.
	*
	* @param id - The order ID.
	* @returns {unknown}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Order not found.
	* @throws {OrderNotEligibleForInvoice} Order is not eligible for invoice generation (invalid status).
	* @throws {MissingInvoiceBillingDetails} Order is missing billing name or address.
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("POST", "/v1/customer-portal/orders/{id}/invoice", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			409: OrderNotEligibleForInvoice,
			422: MissingInvoiceBillingDetails
		});
	};
};
const receiptOrders$1 = (client) => {
	/**
	* Get a presigned URL to download an order's receipt PDF.
	*
	* @param id - The order ID.
	* @returns {CustomerOrderReceipt}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Order not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/customer-portal/orders/{id}/receipt", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const getPaymentStatusOrders = (client) => {
	/**
	* Get the current payment status for an order.
	*
	* @param id - The order ID.
	* @returns {CustomerOrderPaymentStatus}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Order not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/customer-portal/orders/{id}/payment-status", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const confirmRetryPaymentOrders = (client) => {
	/**
	* Confirm a retry payment using a Stripe confirmation token.
	*
	* @param id - The order ID.
	* @param body - Request body
	* @returns {CustomerOrderPaymentConfirmation}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Order not found.
	* @throws {PaymentAlreadyInProgress} Payment already in progress.
	* @throws {OrderNotEligibleForRetry} Order not eligible for retry or payment confirmation failed.
	* @throws {ManualRetryLimitExceeded} Manual retry limit exceeded.
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("POST", "/v1/customer-portal/orders/{id}/confirm-payment", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			409: PaymentAlreadyInProgress,
			422: OrderNotEligibleForRetry,
			429: ManualRetryLimitExceeded
		});
	};
};
function createOrdersService$1(client) {
	return {
		list: listOrders$1(client),
		get: getOrders$1(client),
		update: updateOrders$1(client),
		invoice: invoiceOrders$1(client),
		generateInvoice: generateInvoiceOrders$1(client),
		receipt: receiptOrders$1(client),
		getPaymentStatus: getPaymentStatusOrders(client),
		confirmRetryPayment: confirmRetryPaymentOrders(client),
		iterlist: iterlistOrders$1(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_portal/organizations.ts
const getOrganizations$1 = (client) => {
	/**
	* Get a customer portal's organization by slug.
	*
	* @param slug - The organization slug.
	* @returns {CustomerOrganizationData}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Organization not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (slug) => {
		const pathParams = { slug };
		const request = client.buildRequest("GET", "/v1/customer-portal/organizations/{slug}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createOrganizationsService$1(client) {
	return { get: getOrganizations$1(client) };
}
//#endregion
//#region src/2026-04/services/customer_portal/seats.ts
const listSeatsSeats = (client) => {
	/**
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @param query - Query parameters
	* @returns {SeatsList}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ListSeats401Error} Authentication required
	* @throws {ListSeats403Error} Not permitted or seat-based pricing not enabled
	* @throws {ListSeats404Error} Subscription or order not found
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			subscription_id: query?.subscription_id,
			order_id: query?.order_id
		};
		const request = client.buildRequest("GET", "/v1/customer-portal/seats", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			401: ListSeats401Error,
			403: ListSeats403Error,
			404: ListSeats404Error,
			422: HTTPValidationError
		});
	};
};
const assignSeatSeats = (client) => {
	/**
	*
	* @param body - Request body
	* @returns {CustomerSeat}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {AssignSeat400Error} No available seats or customer already has a seat
	* @throws {AssignSeat401Error} Authentication required
	* @throws {AssignSeat403Error} Not permitted or seat-based pricing not enabled
	* @throws {AssignSeat404Error} Subscription, order, or customer not found
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customer-portal/seats", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			400: AssignSeat400Error,
			401: AssignSeat401Error,
			403: AssignSeat403Error,
			404: AssignSeat404Error,
			422: HTTPValidationError
		});
	};
};
const revokeSeatSeats = (client) => {
	/**
	*
	* @param seat_id
	* @returns {CustomerSeat}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {RevokeSeat401Error} Authentication required
	* @throws {RevokeSeat403Error} Not permitted or seat-based pricing not enabled
	* @throws {RevokeSeat404Error} Seat not found
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (seat_id) => {
		const pathParams = { seat_id };
		const request = client.buildRequest("DELETE", "/v1/customer-portal/seats/{seat_id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			401: RevokeSeat401Error,
			403: RevokeSeat403Error,
			404: RevokeSeat404Error,
			422: HTTPValidationError
		});
	};
};
const resendInvitationSeats = (client) => {
	/**
	*
	* @param seat_id
	* @returns {CustomerSeat}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResendInvitation400Error} Seat is not pending or already claimed
	* @throws {ResendInvitation401Error} Authentication required
	* @throws {ResendInvitation403Error} Not permitted or seat-based pricing not enabled
	* @throws {ResendInvitation404Error} Seat not found
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (seat_id) => {
		const pathParams = { seat_id };
		const request = client.buildRequest("POST", "/v1/customer-portal/seats/{seat_id}/resend", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			400: ResendInvitation400Error,
			401: ResendInvitation401Error,
			403: ResendInvitation403Error,
			404: ResendInvitation404Error,
			422: HTTPValidationError
		});
	};
};
const listClaimedSubscriptionsSeats = (client) => {
	/**
	* List all subscriptions where the authenticated customer has claimed a seat.
	*
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceCustomerSubscription}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ListClaimedSubscriptions401Error} Authentication required
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			page: query?.page ?? 1,
			limit: query?.limit ?? 10
		};
		const request = client.buildRequest("GET", "/v1/customer-portal/seats/subscriptions", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			401: ListClaimedSubscriptions401Error,
			422: HTTPValidationError
		});
	};
};
/**
* List all subscriptions where the authenticated customer has claimed a seat.
*
* **Scopes**: `customer_portal:read` `customer_portal:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<CustomerSubscription>} A generator that yields items of type CustomerSubscription.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {ListClaimedSubscriptions401Error} Authentication required
* @throws {HTTPValidationError} Validation Error
*/
const iterlistClaimedSubscriptionsSeats = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listClaimedSubscriptionsSeats(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
function createSeatsService(client) {
	return {
		listSeats: listSeatsSeats(client),
		assignSeat: assignSeatSeats(client),
		revokeSeat: revokeSeatSeats(client),
		resendInvitation: resendInvitationSeats(client),
		listClaimedSubscriptions: listClaimedSubscriptionsSeats(client),
		iterlistClaimedSubscriptions: iterlistClaimedSubscriptionsSeats(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_portal/subscriptions.ts
const listSubscriptions$1 = (client) => {
	/**
	* List subscriptions of the authenticated customer.
	*
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceCustomerSubscription}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			product_id: query?.product_id,
			active: query?.active,
			query: query?.query,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-started_at"]
		};
		const request = client.buildRequest("GET", "/v1/customer-portal/subscriptions/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List subscriptions of the authenticated customer.
*
* **Scopes**: `customer_portal:read` `customer_portal:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<CustomerSubscription>} A generator that yields items of type CustomerSubscription.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistSubscriptions$1 = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listSubscriptions$1(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const getSubscriptions$1 = (client) => {
	/**
	* Get a subscription for the authenticated customer.
	*
	* **Scopes**: `customer_portal:read` `customer_portal:write`
	*
	* @param id - The subscription ID.
	* @returns {CustomerSubscription}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer subscription was not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/customer-portal/subscriptions/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const cancelSubscriptions = (client) => {
	/**
	* Cancel a subscription of the authenticated customer.
	*
	* @param id - The subscription ID.
	* @returns {CustomerSubscription}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {AlreadyCanceledSubscription} Customer subscription is already canceled or will be at the end of the period, or the user lacks billing permissions.
	* @throws {ResourceNotFound} Customer subscription was not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("DELETE", "/v1/customer-portal/subscriptions/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: AlreadyCanceledSubscription,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateSubscriptions$1 = (client) => {
	/**
	* Update a subscription of the authenticated customer.
	*
	* @param id - The subscription ID.
	* @param body - Request body
	* @returns {CustomerSubscription}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {PaymentFailed} Payment required to apply the subscription update.
	* @throws {Update403Error} Customer subscription is already canceled or will be at the end of the period, the user lacks billing permissions, or pausing/resuming is not enabled for the organization.
	* @throws {ResourceNotFound} Customer subscription was not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/customer-portal/subscriptions/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			402: PaymentFailed,
			403: Update403Error,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createSubscriptionsService$1(client) {
	return {
		list: listSubscriptions$1(client),
		get: getSubscriptions$1(client),
		cancel: cancelSubscriptions(client),
		update: updateSubscriptions$1(client),
		iterlist: iterlistSubscriptions$1(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_portal/wallets.ts
const listWallets = (client) => {
	/**
	* List wallets of the authenticated customer.
	*
	* @param query - Query parameters
	* @returns {ListResourceCustomerWallet}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"]
		};
		const request = client.buildRequest("GET", "/v1/customer-portal/wallets/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List wallets of the authenticated customer.
*
* @param query - Query parameters
* @returns {AsyncGenerator<CustomerWallet>} A generator that yields items of type CustomerWallet.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistWallets = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listWallets(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const getWallets = (client) => {
	/**
	* Get a wallet by ID for the authenticated customer.
	*
	* @param id - The wallet ID.
	* @returns {CustomerWallet}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Wallet not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/customer-portal/wallets/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createWalletsService(client) {
	return {
		list: listWallets(client),
		get: getWallets(client),
		iterlist: iterlistWallets(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_portal/index.ts
function createCustomerPortalService(client) {
	return {
		benefitGrants: createBenefitGrantsService(client),
		customers: createCustomersService$1(client),
		customerMeters: createCustomerMetersService(client),
		seats: createSeatsService(client),
		customerSession: createCustomerSessionService(client),
		downloadables: createDownloadablesService(client),
		licenseKeys: createLicenseKeysService$1(client),
		members: createMembersService$2(client),
		orders: createOrdersService$1(client),
		organizations: createOrganizationsService$1(client),
		subscriptions: createSubscriptionsService$1(client),
		wallets: createWalletsService(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_seats.ts
const listSeatsCustomerSeats = (client) => {
	/**
	* **Scopes**: `customer_seats:read`
	*
	* @param query - Query parameters
	* @returns {SeatsList}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ListSeats401Error} Authentication required
	* @throws {ListSeats403Error} Not permitted or seat-based pricing not enabled
	* @throws {ListSeats404Error} Subscription or order not found
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			subscription_id: query?.subscription_id,
			order_id: query?.order_id
		};
		const request = client.buildRequest("GET", "/v1/customer-seats", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			401: ListSeats401Error,
			403: ListSeats403Error,
			404: ListSeats404Error,
			422: HTTPValidationError
		});
	};
};
const assignSeatCustomerSeats = (client) => {
	/**
	* **Scopes**: `customer_seats:write`
	*
	* @param body - Request body
	* @returns {CustomerSeat}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {AssignSeat400Error} No available seats or customer already has a seat
	* @throws {AssignSeat401Error} Authentication required
	* @throws {AssignSeat403Error} Not permitted or seat-based pricing not enabled
	* @throws {AssignSeat404Error} Subscription, order, or customer not found
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customer-seats", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			400: AssignSeat400Error,
			401: AssignSeat401Error,
			403: AssignSeat403Error,
			404: AssignSeat404Error,
			422: HTTPValidationError
		});
	};
};
const revokeSeatCustomerSeats = (client) => {
	/**
	* **Scopes**: `customer_seats:write`
	*
	* @param seat_id
	* @returns {CustomerSeat}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {RevokeSeat401Error} Authentication required
	* @throws {RevokeSeat403Error} Not permitted or seat-based pricing not enabled
	* @throws {RevokeSeat404Error} Seat not found
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (seat_id) => {
		const pathParams = { seat_id };
		const request = client.buildRequest("DELETE", "/v1/customer-seats/{seat_id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			401: RevokeSeat401Error,
			403: RevokeSeat403Error,
			404: RevokeSeat404Error,
			422: HTTPValidationError
		});
	};
};
const resendInvitationCustomerSeats = (client) => {
	/**
	* **Scopes**: `customer_seats:write`
	*
	* @param seat_id
	* @returns {CustomerSeat}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResendInvitation400Error} Seat is not pending or already claimed
	* @throws {ResendInvitation401Error} Authentication required
	* @throws {ResendInvitation403Error} Not permitted or seat-based pricing not enabled
	* @throws {ResendInvitation404Error} Seat not found
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (seat_id) => {
		const pathParams = { seat_id };
		const request = client.buildRequest("POST", "/v1/customer-seats/{seat_id}/resend", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			400: ResendInvitation400Error,
			401: ResendInvitation401Error,
			403: ResendInvitation403Error,
			404: ResendInvitation404Error,
			422: HTTPValidationError
		});
	};
};
const getClaimInfoCustomerSeats = (client) => {
	/**
	*
	* @param invitation_token
	* @returns {SeatClaimInfo}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {GetClaimInfo400Error} Invalid or expired invitation token
	* @throws {GetClaimInfo403Error} Seat-based pricing not enabled for organization
	* @throws {GetClaimInfo404Error} Seat not found
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (invitation_token) => {
		const pathParams = { invitation_token };
		const request = client.buildRequest("GET", "/v1/customer-seats/claim/{invitation_token}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			400: GetClaimInfo400Error,
			403: GetClaimInfo403Error,
			404: GetClaimInfo404Error,
			422: HTTPValidationError
		});
	};
};
const claimSeatCustomerSeats = (client) => {
	/**
	*
	* @param body - Request body
	* @returns {CustomerSeatClaimResponse}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ClaimSeat400Error} Invalid, expired, or already claimed token
	* @throws {ClaimSeat403Error} Seat-based pricing not enabled for organization
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customer-seats/claim", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			400: ClaimSeat400Error,
			403: ClaimSeat403Error,
			422: HTTPValidationError
		});
	};
};
function createCustomerSeatsService(client) {
	return {
		listSeats: listSeatsCustomerSeats(client),
		assignSeat: assignSeatCustomerSeats(client),
		revokeSeat: revokeSeatCustomerSeats(client),
		resendInvitation: resendInvitationCustomerSeats(client),
		getClaimInfo: getClaimInfoCustomerSeats(client),
		claimSeat: claimSeatCustomerSeats(client)
	};
}
//#endregion
//#region src/2026-04/services/customer_sessions.ts
const createCustomerSessions = (client) => {
	/**
	* Create a customer session.
	*
	* For organizations with `member_model_enabled`, this will automatically
	* create a member session for the owner member of the customer.
	*
	* **Scopes**: `customer_sessions:write`
	*
	* @param body - Request body
	* @returns {CustomerSession}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customer-sessions/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
function createCustomerSessionsService(client) {
	return { create: createCustomerSessions(client) };
}
//#endregion
//#region src/2026-04/services/customers/members.ts
const createMembers = (client) => {
	/**
	* Create a new member for a customer.
	*
	* Only B2B customers with the member management feature enabled can add members.
	* The authenticated user or organization must have access to the customer's organization.
	*
	* **Scopes**: `members:write`
	*
	* @param id - The customer ID.
	* @param body - Request body
	* @returns {Member}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {NotPermitted} Not permitted to add members.
	* @throws {ResourceNotFound} Customer not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("POST", "/v1/customers/{id}/members", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: NotPermitted,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const createExternalMembers = (client) => {
	/**
	* Create a new member for a customer identified by its external ID.
	*
	* **Scopes**: `members:write`
	*
	* @param external_id_path - The customer external ID.
	* @param body - Request body
	* @returns {Member}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {NotPermitted} Not permitted to add members.
	* @throws {ResourceNotFound} Customer not found.
	* @throws {AmbiguousExternalCustomerID} The external customer ID matches customers in several accessible organizations.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (external_id_path, body) => {
		const pathParams = { external_id: external_id_path };
		const request = client.buildRequest("POST", "/v1/customers/external/{external_id}/members", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: NotPermitted,
			404: ResourceNotFound,
			409: AmbiguousExternalCustomerID,
			422: HTTPValidationError
		});
	};
};
const getMembers = (client) => {
	/**
	* Get a member of a customer by its ID.
	*
	* **Scopes**: `members:read` `members:write`
	*
	* @param id - The customer ID.
	* @param member_id
	* @returns {Member}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Member not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, member_id) => {
		const pathParams = {
			id,
			member_id
		};
		const request = client.buildRequest("GET", "/v1/customers/{id}/members/{member_id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const deleteMembers = (client) => {
	/**
	* Delete a member of a customer.
	*
	* **Scopes**: `members:write`
	*
	* @param id - The customer ID.
	* @param member_id
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Member not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, member_id) => {
		const pathParams = {
			id,
			member_id
		};
		const request = client.buildRequest("DELETE", "/v1/customers/{id}/members/{member_id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateMembers = (client) => {
	/**
	* Update a member of a customer.
	*
	* Only name, email and role can be updated.
	*
	* **Scopes**: `members:write`
	*
	* @param id - The customer ID.
	* @param member_id
	* @param body - Request body
	* @returns {Member}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Member not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, member_id, body) => {
		const pathParams = {
			id,
			member_id
		};
		const request = client.buildRequest("PATCH", "/v1/customers/{id}/members/{member_id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const getExternalMembers = (client) => {
	/**
	* Get a member by external ID for a customer identified by its external ID.
	*
	* **Scopes**: `members:read` `members:write`
	*
	* @param external_id - The customer external ID.
	* @param member_external_id - The member external ID.
	* @returns {Member}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Member not found.
	* @throws {AmbiguousExternalCustomerID} The external customer ID matches customers in several accessible organizations.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (external_id, member_external_id) => {
		const pathParams = {
			external_id,
			member_external_id
		};
		const request = client.buildRequest("GET", "/v1/customers/external/{external_id}/members/{member_external_id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			409: AmbiguousExternalCustomerID,
			422: HTTPValidationError
		});
	};
};
const deleteExternalMembers = (client) => {
	/**
	* Delete a member by external ID for a customer identified by its external ID.
	*
	* **Scopes**: `members:write`
	*
	* @param external_id - The customer external ID.
	* @param member_external_id - The member external ID.
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Member not found.
	* @throws {AmbiguousExternalCustomerID} The external customer ID matches customers in several accessible organizations.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (external_id, member_external_id) => {
		const pathParams = {
			external_id,
			member_external_id
		};
		const request = client.buildRequest("DELETE", "/v1/customers/external/{external_id}/members/{member_external_id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			404: ResourceNotFound,
			409: AmbiguousExternalCustomerID,
			422: HTTPValidationError
		});
	};
};
const updateExternalMembers = (client) => {
	/**
	* Update a member by external ID for a customer identified by its external ID.
	*
	* **Scopes**: `members:write`
	*
	* @param external_id - The customer external ID.
	* @param member_external_id - The member external ID.
	* @param body - Request body
	* @returns {Member}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Member not found.
	* @throws {AmbiguousExternalCustomerID} The external customer ID matches customers in several accessible organizations.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (external_id, member_external_id, body) => {
		const pathParams = {
			external_id,
			member_external_id
		};
		const request = client.buildRequest("PATCH", "/v1/customers/external/{external_id}/members/{member_external_id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			409: AmbiguousExternalCustomerID,
			422: HTTPValidationError
		});
	};
};
function createMembersService$1(client) {
	return {
		create: createMembers(client),
		createExternal: createExternalMembers(client),
		get: getMembers(client),
		delete: deleteMembers(client),
		update: updateMembers(client),
		getExternal: getExternalMembers(client),
		deleteExternal: deleteExternalMembers(client),
		updateExternal: updateExternalMembers(client)
	};
}
//#endregion
//#region src/2026-04/services/customers/index.ts
const listCustomers = (client) => {
	/**
	* List customers.
	*
	* **Scopes**: `customers:read` `customers:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceCustomer}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			email: query?.email,
			query: query?.query,
			active: query?.active,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"],
			metadata: query?.metadata
		};
		const request = client.buildRequest("GET", "/v1/customers/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List customers.
*
* **Scopes**: `customers:read` `customers:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Customer>} A generator that yields items of type Customer.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistCustomers = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listCustomers(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createCustomers = (client) => {
	/**
	* Create a customer.
	*
	* **Scopes**: `customers:write`
	*
	* @param body - Request body
	* @returns {Customer}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/customers/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const exportCustomers = (client) => {
	/**
	* Export customers as a CSV file.
	*
	* **Scopes**: `customers:read` `customers:write`
	*
	* @param query - Query parameters
	* @returns {string}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = { organization_id: query?.organization_id };
		const request = client.buildRequest("GET", "/v1/customers/export", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "text", { 422: HTTPValidationError });
	};
};
const getCustomers = (client) => {
	/**
	* Get a customer by ID.
	*
	* **Scopes**: `customers:read` `customers:write`
	*
	* @param id - The customer ID.
	* @returns {Customer}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/customers/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const deleteCustomers = (client) => {
	/**
	* Delete a customer.
	*
	* This action cannot be undone and will immediately:
	* - Cancel any active subscriptions for the customer
	* - Revoke all their benefits
	* - Clear any `external_id`
	*
	* Use it only in the context of deleting a user within your
	* own service. Otherwise, use more granular API endpoints to cancel
	* a specific subscription or revoke certain benefits.
	*
	* Note: The customers information will nonetheless be retained for historic
	* orders and subscriptions.
	*
	* Set `anonymize=true` to also anonymize PII for GDPR compliance.
	*
	* **Scopes**: `customers:write`
	*
	* @param id - The customer ID.
	* @param query - Query parameters
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, query) => {
		const pathParams = { id };
		const queryParams = { anonymize: query?.anonymize };
		const request = client.buildRequest("DELETE", "/v1/customers/{id}", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateCustomers = (client) => {
	/**
	* Update a customer.
	*
	* **Scopes**: `customers:write`
	*
	* @param id - The customer ID.
	* @param body - Request body
	* @returns {Customer}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/customers/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const getExternalCustomers = (client) => {
	/**
	* Get a customer by external ID.
	*
	* **Scopes**: `customers:read` `customers:write`
	*
	* @param external_id - The customer external ID.
	* @returns {Customer}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (external_id) => {
		const pathParams = { external_id };
		const request = client.buildRequest("GET", "/v1/customers/external/{external_id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const deleteExternalCustomers = (client) => {
	/**
	* Delete a customer by external ID.
	*
	* Immediately cancels any active subscriptions and revokes any active benefits.
	*
	* Set `anonymize=true` to also anonymize PII for GDPR compliance.
	*
	* **Scopes**: `customers:write`
	*
	* @param external_id - The customer external ID.
	* @param query - Query parameters
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (external_id, query) => {
		const pathParams = { external_id };
		const queryParams = { anonymize: query?.anonymize };
		const request = client.buildRequest("DELETE", "/v1/customers/external/{external_id}", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateExternalCustomers = (client) => {
	/**
	* Update a customer by external ID.
	*
	* **Scopes**: `customers:write`
	*
	* @param external_id - The customer external ID.
	* @param body - Request body
	* @returns {Customer}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (external_id, body) => {
		const pathParams = { external_id };
		const request = client.buildRequest("PATCH", "/v1/customers/external/{external_id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const getStateCustomers = (client) => {
	/**
	* Get a customer state by ID.
	*
	* The customer state includes information about
	* the customer's active subscriptions and benefits.
	*
	* It's the ideal endpoint to use when you need to get a full overview
	* of a customer's status.
	*
	* **Scopes**: `customers:read` `customers:write`
	*
	* @param id - The customer ID.
	* @returns {CustomerState}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/customers/{id}/state", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const getStateExternalCustomers = (client) => {
	/**
	* Get a customer state by external ID.
	*
	* The customer state includes information about
	* the customer's active subscriptions and benefits.
	*
	* It's the ideal endpoint to use when you need to get a full overview
	* of a customer's status.
	*
	* **Scopes**: `customers:read` `customers:write`
	*
	* @param external_id - The customer external ID.
	* @returns {CustomerState}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (external_id) => {
		const pathParams = { external_id };
		const request = client.buildRequest("GET", "/v1/customers/external/{external_id}/state", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const listPaymentMethodsCustomers = (client) => {
	/**
	* Get saved payment methods of a customer.
	*
	* **Scopes**: `customers:read` `customers:write`
	*
	* @param id - The customer ID.
	* @param query - Query parameters
	* @returns {ListResourcePaymentMethod}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, query) => {
		const pathParams = { id };
		const queryParams = {
			page: query?.page ?? 1,
			limit: query?.limit ?? 10
		};
		const request = client.buildRequest("GET", "/v1/customers/{id}/payment-methods", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
/**
* Get saved payment methods of a customer.
*
* **Scopes**: `customers:read` `customers:write`
*
* @param id - The customer ID.
* @param query - Query parameters
* @returns {AsyncGenerator<PaymentMethod>} A generator that yields items of type PaymentMethod.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {ResourceNotFound} Customer not found.
* @throws {HTTPValidationError} Validation Error
*/
const iterlistPaymentMethodsCustomers = (client) => {
	return async function* (id, query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listPaymentMethodsCustomers(client)(id, {
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const listPaymentMethodsExternalCustomers = (client) => {
	/**
	* Get saved payment methods of a customer by external ID.
	*
	* **Scopes**: `customers:read` `customers:write`
	*
	* @param external_id - The customer external ID.
	* @param query - Query parameters
	* @returns {ListResourcePaymentMethod}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Customer not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (external_id, query) => {
		const pathParams = { external_id };
		const queryParams = {
			page: query?.page ?? 1,
			limit: query?.limit ?? 10
		};
		const request = client.buildRequest("GET", "/v1/customers/external/{external_id}/payment-methods", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
/**
* Get saved payment methods of a customer by external ID.
*
* **Scopes**: `customers:read` `customers:write`
*
* @param external_id - The customer external ID.
* @param query - Query parameters
* @returns {AsyncGenerator<PaymentMethod>} A generator that yields items of type PaymentMethod.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {ResourceNotFound} Customer not found.
* @throws {HTTPValidationError} Validation Error
*/
const iterlistPaymentMethodsExternalCustomers = (client) => {
	return async function* (external_id, query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listPaymentMethodsExternalCustomers(client)(external_id, {
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
function createCustomersService(client) {
	return {
		list: listCustomers(client),
		create: createCustomers(client),
		export: exportCustomers(client),
		get: getCustomers(client),
		delete: deleteCustomers(client),
		update: updateCustomers(client),
		getExternal: getExternalCustomers(client),
		deleteExternal: deleteExternalCustomers(client),
		updateExternal: updateExternalCustomers(client),
		getState: getStateCustomers(client),
		getStateExternal: getStateExternalCustomers(client),
		listPaymentMethods: listPaymentMethodsCustomers(client),
		listPaymentMethodsExternal: listPaymentMethodsExternalCustomers(client),
		iterlist: iterlistCustomers(client),
		iterlistPaymentMethods: iterlistPaymentMethodsCustomers(client),
		iterlistPaymentMethodsExternal: iterlistPaymentMethodsExternalCustomers(client),
		members: createMembersService$1(client)
	};
}
//#endregion
//#region src/2026-04/services/discounts.ts
const listDiscounts = (client) => {
	/**
	* List discounts.
	*
	* **Scopes**: `discounts:read` `discounts:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceDiscount}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			query: query?.query,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"]
		};
		const request = client.buildRequest("GET", "/v1/discounts/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List discounts.
*
* **Scopes**: `discounts:read` `discounts:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Discount>} A generator that yields items of type Discount.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistDiscounts = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listDiscounts(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createDiscounts = (client) => {
	/**
	* Create a discount.
	*
	* **Scopes**: `discounts:write`
	*
	* @param body - Request body
	* @returns {Discount}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/discounts/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const getDiscounts = (client) => {
	/**
	* Get a discount by ID.
	*
	* **Scopes**: `discounts:read` `discounts:write`
	*
	* @param id - The discount ID.
	* @returns {Discount}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Discount not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/discounts/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const deleteDiscounts = (client) => {
	/**
	* Delete a discount.
	*
	* **Scopes**: `discounts:write`
	*
	* @param id - The discount ID.
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Discount not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("DELETE", "/v1/discounts/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateDiscounts = (client) => {
	/**
	* Update a discount.
	*
	* **Scopes**: `discounts:write`
	*
	* @param id - The discount ID.
	* @param body - Request body
	* @returns {Discount}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Discount not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/discounts/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createDiscountsService(client) {
	return {
		list: listDiscounts(client),
		create: createDiscounts(client),
		get: getDiscounts(client),
		delete: deleteDiscounts(client),
		update: updateDiscounts(client),
		iterlist: iterlistDiscounts(client)
	};
}
//#endregion
//#region src/2026-04/services/disputes.ts
const listDisputes = (client) => {
	/**
	* List disputes.
	*
	* **Scopes**: `disputes:read` `disputes:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceDispute}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			order_id: query?.order_id,
			status: query?.status,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"]
		};
		const request = client.buildRequest("GET", "/v1/disputes/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List disputes.
*
* **Scopes**: `disputes:read` `disputes:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Dispute>} A generator that yields items of type Dispute.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistDisputes = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listDisputes(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const getDisputes = (client) => {
	/**
	* Get a dispute by ID.
	*
	* **Scopes**: `disputes:read` `disputes:write`
	*
	* @param id - The dispute ID.
	* @returns {Dispute}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Dispute not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/disputes/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const acceptDisputes = (client) => {
	/**
	* Accept a dispute, conceding the chargeback.
	*
	* Closes the dispute with the processor (settling it as `lost`) and records
	* the merchant's decision on the dispute's support case.
	*
	* **Scopes**: `disputes:write`
	*
	* @param id - The dispute ID.
	* @returns {Dispute}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Dispute not found.
	* @throws {DisputeNotOpenError} Conflict
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("POST", "/v1/disputes/{id}/accept", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			409: DisputeNotOpenError,
			422: HTTPValidationError
		});
	};
};
function createDisputesService(client) {
	return {
		list: listDisputes(client),
		get: getDisputes(client),
		accept: acceptDisputes(client),
		iterlist: iterlistDisputes(client)
	};
}
//#endregion
//#region src/2026-04/services/event_types.ts
const listEventTypes = (client) => {
	/**
	* List event types with aggregated statistics.
	*
	* **Scopes**: `events:read` `events:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceEventTypeWithStats}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			customer_id: query?.customer_id,
			external_customer_id: query?.external_customer_id,
			query: query?.query,
			root_events: query?.root_events,
			parent_id: query?.parent_id,
			source: query?.source,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-last_seen"]
		};
		const request = client.buildRequest("GET", "/v1/event-types/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List event types with aggregated statistics.
*
* **Scopes**: `events:read` `events:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<EventTypeWithStats>} A generator that yields items of type EventTypeWithStats.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistEventTypes = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listEventTypes(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const updateEventTypes = (client) => {
	/**
	* Update an event type's label.
	*
	* **Scopes**: `events:write`
	*
	* @param id - The event type ID.
	* @param body - Request body
	* @returns {EventType}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {Update404Error} Not Found
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/event-types/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: Update404Error,
			422: HTTPValidationError
		});
	};
};
function createEventTypesService(client) {
	return {
		list: listEventTypes(client),
		update: updateEventTypes(client),
		iterlist: iterlistEventTypes(client)
	};
}
//#endregion
//#region src/2026-04/services/events.ts
const listEvents = (client) => {
	/**
	* List events.
	*
	* **Scopes**: `events:read` `events:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceEvent | ListResourceWithCursorPaginationEvent}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			filter: query?.filter,
			start_timestamp: query?.start_timestamp,
			end_timestamp: query?.end_timestamp,
			organization_id: query?.organization_id,
			customer_id: query?.customer_id,
			external_customer_id: query?.external_customer_id,
			meter_id: query?.meter_id,
			name: query?.name,
			source: query?.source,
			query: query?.query,
			parent_id: query?.parent_id,
			depth: query?.depth,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-timestamp"],
			metadata: query?.metadata
		};
		const request = client.buildRequest("GET", "/v1/events/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const listNamesEvents = (client) => {
	/**
	* List event names.
	*
	* **Scopes**: `events:read` `events:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceEventName}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			customer_id: query?.customer_id,
			external_customer_id: query?.external_customer_id,
			source: query?.source,
			query: query?.query,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-last_seen"]
		};
		const request = client.buildRequest("GET", "/v1/events/names", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List event names.
*
* **Scopes**: `events:read` `events:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<EventName>} A generator that yields items of type EventName.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistNamesEvents = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listNamesEvents(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const getEvents = (client) => {
	/**
	* Get an event by ID.
	*
	* **Scopes**: `events:read` `events:write`
	*
	* @param id - The event ID.
	* @returns {Event}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Event not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/events/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const ingestEvents = (client) => {
	/**
	* Ingest batch of events.
	*
	* **Scopes**: `events:write`
	*
	* @param body - Request body
	* @returns {EventsIngestResponse}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/events/ingest", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
function createEventsService(client) {
	return {
		list: listEvents(client),
		listNames: listNamesEvents(client),
		get: getEvents(client),
		ingest: ingestEvents(client),
		iterlistNames: iterlistNamesEvents(client)
	};
}
//#endregion
//#region src/2026-04/services/files.ts
const listFiles = (client) => {
	/**
	* List files.
	*
	* **Scopes**: `files:read` `files:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceFileRead}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			ids: query?.ids,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10
		};
		const request = client.buildRequest("GET", "/v1/files/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List files.
*
* **Scopes**: `files:read` `files:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<FileRead>} A generator that yields items of type FileRead.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistFiles = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listFiles(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createFiles = (client) => {
	/**
	* Create a file.
	*
	* **Scopes**: `files:write`
	*
	* @param body - Request body
	* @returns {FileUpload}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/files/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const uploadedFiles = (client) => {
	/**
	* Complete a file upload.
	*
	* **Scopes**: `files:write`
	*
	* @param id_path - The file ID.
	* @param body - Request body
	* @returns {FileRead}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {NotPermitted} You don't have the permission to update this file.
	* @throws {ResourceNotFound} File not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id_path, body) => {
		const pathParams = { id: id_path };
		const request = client.buildRequest("POST", "/v1/files/{id}/uploaded", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: NotPermitted,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const deleteFiles = (client) => {
	/**
	* Delete a file.
	*
	* **Scopes**: `files:write`
	*
	* @param id
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {NotPermitted} You don't have the permission to delete this file.
	* @throws {ResourceNotFound} File not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("DELETE", "/v1/files/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			403: NotPermitted,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateFiles = (client) => {
	/**
	* Update a file.
	*
	* **Scopes**: `files:write`
	*
	* @param id - The file ID.
	* @param body - Request body
	* @returns {FileRead}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {NotPermitted} You don't have the permission to update this file.
	* @throws {ResourceNotFound} File not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/files/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: NotPermitted,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createFilesService(client) {
	return {
		list: listFiles(client),
		create: createFiles(client),
		uploaded: uploadedFiles(client),
		delete: deleteFiles(client),
		update: updateFiles(client),
		iterlist: iterlistFiles(client)
	};
}
//#endregion
//#region src/2026-04/services/license_keys.ts
const listLicenseKeys = (client) => {
	/**
	* Get license keys connected to the given organization & filters.
	*
	* **Scopes**: `license_keys:read` `license_keys:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceLicenseKeyRead}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {Unauthorized} Not authorized to manage license key.
	* @throws {ResourceNotFound} License key not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			benefit_id: query?.benefit_id,
			status: query?.status,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10
		};
		const request = client.buildRequest("GET", "/v1/license-keys/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			401: Unauthorized,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
/**
* Get license keys connected to the given organization & filters.
*
* **Scopes**: `license_keys:read` `license_keys:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<LicenseKeyRead>} A generator that yields items of type LicenseKeyRead.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {Unauthorized} Not authorized to manage license key.
* @throws {ResourceNotFound} License key not found.
* @throws {HTTPValidationError} Validation Error
*/
const iterlistLicenseKeys = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listLicenseKeys(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const getLicenseKeys = (client) => {
	/**
	* Get a license key.
	*
	* **Scopes**: `license_keys:read` `license_keys:write`
	*
	* @param id
	* @returns {LicenseKeyWithActivations}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {Unauthorized} Not authorized to manage license key.
	* @throws {ResourceNotFound} License key not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/license-keys/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			401: Unauthorized,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateLicenseKeys = (client) => {
	/**
	* Update a license key.
	*
	* **Scopes**: `license_keys:write`
	*
	* @param id
	* @param body - Request body
	* @returns {LicenseKeyRead}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {Unauthorized} Not authorized to manage license key.
	* @throws {ResourceNotFound} License key not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/license-keys/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			401: Unauthorized,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const getActivationLicenseKeys = (client) => {
	/**
	* Get a license key activation.
	*
	* **Scopes**: `license_keys:read` `license_keys:write`
	*
	* @param id
	* @param activation_id
	* @returns {LicenseKeyActivationRead}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {Unauthorized} Not authorized to manage license key.
	* @throws {ResourceNotFound} License key not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, activation_id) => {
		const pathParams = {
			id,
			activation_id
		};
		const request = client.buildRequest("GET", "/v1/license-keys/{id}/activations/{activation_id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			401: Unauthorized,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const validateLicenseKeys = (client) => {
	/**
	* Validate a license key.
	*
	* **Scopes**: `license_keys:write`
	*
	* @param body - Request body
	* @returns {ValidatedLicenseKey}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} License key not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/license-keys/validate", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const activateLicenseKeys = (client) => {
	/**
	* Activate a license key instance.
	*
	* **Scopes**: `license_keys:write`
	*
	* @param body - Request body
	* @returns {LicenseKeyActivationRead}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {NotPermitted} License key activation not supported or limit reached. Use /validate endpoint for licenses without activations.
	* @throws {ResourceNotFound} License key not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/license-keys/activate", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: NotPermitted,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const deactivateLicenseKeys = (client) => {
	/**
	* Deactivate a license key instance.
	*
	* **Scopes**: `license_keys:write`
	*
	* @param body - Request body
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} License key not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/license-keys/deactivate", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createLicenseKeysService(client) {
	return {
		list: listLicenseKeys(client),
		get: getLicenseKeys(client),
		update: updateLicenseKeys(client),
		getActivation: getActivationLicenseKeys(client),
		validate: validateLicenseKeys(client),
		activate: activateLicenseKeys(client),
		deactivate: deactivateLicenseKeys(client),
		iterlist: iterlistLicenseKeys(client)
	};
}
//#endregion
//#region src/2026-04/services/members.ts
const listMembersMembers = (client) => {
	/**
	* List members with optional customer ID filter.
	*
	* **Scopes**: `members:read` `members:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceMember}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			customer_id: query?.customer_id,
			external_customer_id: query?.external_customer_id,
			role: query?.role,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"]
		};
		const request = client.buildRequest("GET", "/v1/members/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List members with optional customer ID filter.
*
* **Scopes**: `members:read` `members:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Member>} A generator that yields items of type Member.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistMembersMembers = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listMembersMembers(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
function createMembersService(client) {
	return {
		listMembers: listMembersMembers(client),
		iterlistMembers: iterlistMembersMembers(client)
	};
}
//#endregion
//#region src/2026-04/services/meters.ts
const listMeters = (client) => {
	/**
	* List meters.
	*
	* **Scopes**: `meters:read` `meters:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceMeter}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			query: query?.query,
			is_archived: query?.is_archived,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["name"],
			metadata: query?.metadata
		};
		const request = client.buildRequest("GET", "/v1/meters/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List meters.
*
* **Scopes**: `meters:read` `meters:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Meter>} A generator that yields items of type Meter.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistMeters = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listMeters(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createMeters = (client) => {
	/**
	* Create a meter.
	*
	* **Scopes**: `meters:write`
	*
	* @param body - Request body
	* @returns {Meter}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/meters/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const getMeters = (client) => {
	/**
	* Get a meter by ID.
	*
	* **Scopes**: `meters:read` `meters:write`
	*
	* @param id - The meter ID.
	* @returns {Meter}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Meter not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/meters/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateMeters = (client) => {
	/**
	* Update a meter.
	*
	* **Scopes**: `meters:write`
	*
	* @param id - The meter ID.
	* @param body - Request body
	* @returns {Meter}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Meter not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/meters/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const quantitiesMeters = (client) => {
	/**
	* Get quantities of a meter over a time period.
	*
	* **Scopes**: `meters:read` `meters:write`
	*
	* @param id - The meter ID.
	* @param query - Query parameters
	* @returns {MeterQuantities}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Meter not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, query) => {
		const pathParams = { id };
		const queryParams = {
			start_timestamp: query.start_timestamp,
			end_timestamp: query.end_timestamp,
			interval: query.interval,
			timezone: query?.timezone ?? "UTC",
			customer_id: query?.customer_id,
			external_customer_id: query?.external_customer_id,
			customer_aggregation_function: query?.customer_aggregation_function,
			metadata: query?.metadata
		};
		const request = client.buildRequest("GET", "/v1/meters/{id}/quantities", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createMetersService(client) {
	return {
		list: listMeters(client),
		create: createMeters(client),
		get: getMeters(client),
		update: updateMeters(client),
		quantities: quantitiesMeters(client),
		iterlist: iterlistMeters(client)
	};
}
//#endregion
//#region src/2026-04/services/metrics.ts
const getMetrics = (client) => {
	/**
	* Get metrics about your orders and subscriptions.
	*
	* Currency values are output in cents.
	*
	* **Scopes**: `metrics:read`
	*
	* @param query - Query parameters
	* @returns {MetricsResponse}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			start_date: query.start_date,
			end_date: query.end_date,
			timezone: query?.timezone ?? "UTC",
			interval: query.interval,
			organization_id: query?.organization_id,
			product_id: query?.product_id,
			billing_type: query?.billing_type,
			customer_id: query?.customer_id,
			metrics: query?.metrics
		};
		const request = client.buildRequest("GET", "/v1/metrics/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const exportMetrics = (client) => {
	/**
	* Export metrics as a CSV file.
	*
	* **Scopes**: `metrics:read`
	*
	* @param query - Query parameters
	* @returns {string}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			start_date: query.start_date,
			end_date: query.end_date,
			timezone: query?.timezone ?? "UTC",
			interval: query.interval,
			organization_id: query?.organization_id,
			product_id: query?.product_id,
			billing_type: query?.billing_type,
			customer_id: query?.customer_id,
			metrics: query?.metrics
		};
		const request = client.buildRequest("GET", "/v1/metrics/export", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "text", { 422: HTTPValidationError });
	};
};
const limitsMetrics = (client) => {
	/**
	* Get the interval limits for the metrics endpoint.
	*
	* **Scopes**: `metrics:read`
	*
	* @returns {MetricsLimits}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	*/
	return async () => {
		const request = client.buildRequest("GET", "/v1/metrics/limits", {}, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {});
	};
};
const listDashboardsMetrics = (client) => {
	/**
	* List user-defined metric dashboards.
	*
	* **Scopes**: `metrics:read`
	*
	* @param query - Query parameters
	* @returns {MetricDashboardSchema[]}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = { organization_id: query?.organization_id };
		const request = client.buildRequest("GET", "/v1/metrics/dashboards", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const createDashboardMetrics = (client) => {
	/**
	* Create a user-defined metric dashboard.
	*
	* **Scopes**: `metrics:write`
	*
	* @param body - Request body
	* @returns {MetricDashboardSchema}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/metrics/dashboards", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const getDashboardMetrics = (client) => {
	/**
	* Get a user-defined metric dashboard by ID.
	*
	* **Scopes**: `metrics:read`
	*
	* @param id - The metric dashboard ID.
	* @returns {MetricDashboardSchema}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/metrics/dashboards/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const deleteDashboardMetrics = (client) => {
	/**
	* Delete a user-defined metric dashboard.
	*
	* **Scopes**: `metrics:write`
	*
	* @param id - The metric dashboard ID.
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("DELETE", "/v1/metrics/dashboards/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", { 422: HTTPValidationError });
	};
};
const updateDashboardMetrics = (client) => {
	/**
	* Update a user-defined metric dashboard.
	*
	* **Scopes**: `metrics:write`
	*
	* @param id - The metric dashboard ID.
	* @param body - Request body
	* @returns {MetricDashboardSchema}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/metrics/dashboards/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
function createMetricsService(client) {
	return {
		get: getMetrics(client),
		export: exportMetrics(client),
		limits: limitsMetrics(client),
		listDashboards: listDashboardsMetrics(client),
		createDashboard: createDashboardMetrics(client),
		getDashboard: getDashboardMetrics(client),
		deleteDashboard: deleteDashboardMetrics(client),
		updateDashboard: updateDashboardMetrics(client)
	};
}
//#endregion
//#region src/2026-04/services/oauth2/clients/oauth2.ts
const createClientOauth2 = (client) => {
	/**
	* Create an OAuth2 client.
	*
	* @param body - Request body
	* @returns {unknown}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/oauth2/register", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const getClientOauth2 = (client) => {
	/**
	* Get an OAuth2 client by Client ID.
	*
	* @param client_id
	* @returns {unknown}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (client_id) => {
		const pathParams = { client_id };
		const request = client.buildRequest("GET", "/v1/oauth2/register/{client_id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const updateClientOauth2 = (client) => {
	/**
	* Update an OAuth2 client.
	*
	* @param client_id_path
	* @param body - Request body
	* @returns {unknown}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (client_id_path, body) => {
		const pathParams = { client_id: client_id_path };
		const request = client.buildRequest("PUT", "/v1/oauth2/register/{client_id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const deleteClientOauth2 = (client) => {
	/**
	* Delete an OAuth2 client.
	*
	* @param client_id
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (client_id) => {
		const pathParams = { client_id };
		const request = client.buildRequest("DELETE", "/v1/oauth2/register/{client_id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", { 422: HTTPValidationError });
	};
};
function createOauth2Service$1(client) {
	return {
		createClient: createClientOauth2(client),
		getClient: getClientOauth2(client),
		updateClient: updateClientOauth2(client),
		deleteClient: deleteClientOauth2(client)
	};
}
//#endregion
//#region src/2026-04/services/oauth2/clients/index.ts
function createClientsService(client) {
	return { oauth2: createOauth2Service$1(client) };
}
//#endregion
//#region src/2026-04/services/oauth2/index.ts
const authorizeOauth2 = (client) => {
	/**
	*
	* @returns {AuthorizeResponseUser | AuthorizeResponseOrganization}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	*/
	return async () => {
		const request = client.buildRequest("GET", "/v1/oauth2/authorize", {}, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {});
	};
};
const requestTokenOauth2 = (client) => {
	/**
	* Request an access token using a valid grant.
	*
	* @returns {TokenResponse}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	*/
	return async () => {
		const request = client.buildRequest("POST", "/v1/oauth2/token", {}, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {});
	};
};
const revokeTokenOauth2 = (client) => {
	/**
	* Revoke an access token or a refresh token.
	*
	* @returns {RevokeTokenResponse}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	*/
	return async () => {
		const request = client.buildRequest("POST", "/v1/oauth2/revoke", {}, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {});
	};
};
const introspectTokenOauth2 = (client) => {
	/**
	* Get information about an access token.
	*
	* @returns {IntrospectTokenResponse}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	*/
	return async () => {
		const request = client.buildRequest("POST", "/v1/oauth2/introspect", {}, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {});
	};
};
const userinfoOauth2 = (client) => {
	/**
	* Get information about the authenticated user.
	*
	* @returns {UserInfoUser | UserInfoOrganization}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	*/
	return async () => {
		const request = client.buildRequest("GET", "/v1/oauth2/userinfo", {}, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {});
	};
};
function createOauth2Service(client) {
	return {
		authorize: authorizeOauth2(client),
		requestToken: requestTokenOauth2(client),
		revokeToken: revokeTokenOauth2(client),
		introspectToken: introspectTokenOauth2(client),
		userinfo: userinfoOauth2(client),
		clients: createClientsService(client)
	};
}
//#endregion
//#region src/2026-04/services/orders.ts
const listOrders = (client) => {
	/**
	* List orders.
	*
	* **Scopes**: `orders:read`
	*
	* @param query - Query parameters
	* @returns {ListResourceOrder}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			product_id: query?.product_id,
			product_billing_type: query?.product_billing_type,
			discount_id: query?.discount_id,
			customer_id: query?.customer_id,
			external_customer_id: query?.external_customer_id,
			checkout_id: query?.checkout_id,
			subscription_id: query?.subscription_id,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"],
			metadata: query?.metadata
		};
		const request = client.buildRequest("GET", "/v1/orders/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List orders.
*
* **Scopes**: `orders:read`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Order>} A generator that yields items of type Order.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistOrders = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listOrders(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createOrders = (client) => {
	/**
	* Create a draft order for an off-session charge against a saved payment
	* method. The order is created with `status=draft` and no invoice number;
	* call `POST /v1/orders/{id}/finalize` to attempt the charge.
	*
	* The organization must have the `off_session_charges_enabled` feature flag.
	*
	* **Scopes**: `orders:write`
	*
	* @param body - Request body
	* @returns {Order}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/orders/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const exportOrders = (client) => {
	/**
	* Export orders as a CSV file.
	*
	* **Scopes**: `orders:read`
	*
	* @param query - Query parameters
	* @returns {string}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			product_id: query?.product_id
		};
		const request = client.buildRequest("GET", "/v1/orders/export", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "text", { 422: HTTPValidationError });
	};
};
const getOrders = (client) => {
	/**
	* Get an order by ID.
	*
	* **Scopes**: `orders:read`
	*
	* @param id - The order ID.
	* @returns {Order}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Order not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/orders/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateOrders = (client) => {
	/**
	* Update an order.
	*
	* **Scopes**: `orders:write`
	*
	* @param id - The order ID.
	* @param body - Request body
	* @returns {Order}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Order not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/orders/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const finalizeOrders = (client) => {
	/**
	* Finalize a draft order and synchronously attempt an off-session charge.
	*
	* On success, the order transitions to `paid` and benefit grants fire
	* before the response returns. On failure (decline, missing payment method,
	* SCA challenge), the order stays in `draft` and a 4xx error is returned.
	*
	* The request fails with 412 if the order is not in `draft` status.
	*
	* **Scopes**: `orders:write`
	*
	* @param id - The order ID.
	* @param body - Request body
	* @returns {Order}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {Finalize402Error} The charge failed, or requires customer authentication (e.g. a 3DS challenge) that can't be completed off-session.
	* @throws {Finalize403Error} Off-session charges are not enabled for this organization, or its account can't currently accept payments.
	* @throws {ResourceNotFound} Order not found.
	* @throws {OrderNotDraft} The order is not in `draft` status.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("POST", "/v1/orders/{id}/finalize", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			402: Finalize402Error,
			403: Finalize403Error,
			404: ResourceNotFound,
			412: OrderNotDraft,
			422: HTTPValidationError
		});
	};
};
const invoiceOrders = (client) => {
	/**
	* Get an order's invoice data.
	*
	* **Scopes**: `orders:read`
	*
	* @param id - The order ID.
	* @returns {OrderInvoice}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Order not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/orders/{id}/invoice", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const generateInvoiceOrders = (client) => {
	/**
	* Trigger generation of an order's invoice.
	*
	* **Scopes**: `orders:read`
	*
	* @param id - The order ID.
	* @returns {unknown}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Order not found.
	* @throws {OrderNotEligibleForInvoice} Order is not eligible for invoice generation (invalid status).
	* @throws {MissingInvoiceBillingDetails} Order is missing billing name or address.
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("POST", "/v1/orders/{id}/invoice", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			409: OrderNotEligibleForInvoice,
			422: MissingInvoiceBillingDetails
		});
	};
};
const receiptOrders = (client) => {
	/**
	* Get a presigned URL to download an order's receipt PDF.
	*
	* **Scopes**: `orders:read`
	*
	* @param id - The order ID.
	* @returns {OrderReceipt}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Order not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/orders/{id}/receipt", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createOrdersService(client) {
	return {
		list: listOrders(client),
		create: createOrders(client),
		export: exportOrders(client),
		get: getOrders(client),
		update: updateOrders(client),
		finalize: finalizeOrders(client),
		invoice: invoiceOrders(client),
		generateInvoice: generateInvoiceOrders(client),
		receipt: receiptOrders(client),
		iterlist: iterlistOrders(client)
	};
}
//#endregion
//#region src/2026-04/services/organizations.ts
const listOrganizations = (client) => {
	/**
	* List organizations.
	*
	* **Scopes**: `organizations:read` `organizations:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceOrganization}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			slug: query?.slug,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["created_at"]
		};
		const request = client.buildRequest("GET", "/v1/organizations/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List organizations.
*
* **Scopes**: `organizations:read` `organizations:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Organization>} A generator that yields items of type Organization.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistOrganizations = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listOrganizations(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createOrganizations = (client) => {
	/**
	* Create an organization.
	*
	* **Scopes**: `organizations:write`
	*
	* @param body - Request body
	* @returns {Organization}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {CannotCreateOrganizationError} Forbidden
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/organizations/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: CannotCreateOrganizationError,
			422: HTTPValidationError
		});
	};
};
const getOrganizations = (client) => {
	/**
	* Get an organization by ID.
	*
	* **Scopes**: `organizations:read` `organizations:write`
	*
	* @param id
	* @returns {Organization}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Organization not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/organizations/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateOrganizations = (client) => {
	/**
	* Update an organization.
	*
	* **Scopes**: `organizations:write`
	*
	* @param id
	* @param body - Request body
	* @returns {Organization}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {NotPermitted} You don't have the permission to update this organization.
	* @throws {ResourceNotFound} Organization not found.
	* @throws {SSOEnforcementRequiresConnection} Cannot enforce SSO without an enabled connection.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/organizations/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: NotPermitted,
			404: ResourceNotFound,
			409: SSOEnforcementRequiresConnection,
			422: HTTPValidationError
		});
	};
};
function createOrganizationsService(client) {
	return {
		list: listOrganizations(client),
		create: createOrganizations(client),
		get: getOrganizations(client),
		update: updateOrganizations(client),
		iterlist: iterlistOrganizations(client)
	};
}
//#endregion
//#region src/2026-04/services/payments.ts
const listPayments = (client) => {
	/**
	* List payments.
	*
	* **Scopes**: `payments:read`
	*
	* @param query - Query parameters
	* @returns {ListResourcePayment}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			checkout_id: query?.checkout_id,
			order_id: query?.order_id,
			customer_id: query?.customer_id,
			status: query?.status,
			method: query?.method,
			customer_email: query?.customer_email,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"]
		};
		const request = client.buildRequest("GET", "/v1/payments/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List payments.
*
* **Scopes**: `payments:read`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Payment>} A generator that yields items of type Payment.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistPayments = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listPayments(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const getPayments = (client) => {
	/**
	* Get a payment by ID.
	*
	* **Scopes**: `payments:read`
	*
	* @param id - The payment ID.
	* @returns {Payment}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Payment not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/payments/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createPaymentsService(client) {
	return {
		list: listPayments(client),
		get: getPayments(client),
		iterlist: iterlistPayments(client)
	};
}
//#endregion
//#region src/2026-04/services/products.ts
const listProducts = (client) => {
	/**
	* List products.
	*
	* **Scopes**: `products:read` `products:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceProduct}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			id: query?.id,
			organization_id: query?.organization_id,
			query: query?.query,
			is_archived: query?.is_archived,
			is_recurring: query?.is_recurring,
			benefit_id: query?.benefit_id,
			visibility: query?.visibility,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"],
			metadata: query?.metadata
		};
		const request = client.buildRequest("GET", "/v1/products/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List products.
*
* **Scopes**: `products:read` `products:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Product>} A generator that yields items of type Product.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistProducts = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listProducts(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createProducts = (client) => {
	/**
	* Create a product.
	*
	* **Scopes**: `products:write`
	*
	* @param body - Request body
	* @returns {Product}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/products/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const getProducts = (client) => {
	/**
	* Get a product by ID.
	*
	* **Scopes**: `products:read` `products:write`
	*
	* @param id
	* @returns {Product}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Product not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/products/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateProducts = (client) => {
	/**
	* Update a product.
	*
	* **Scopes**: `products:write`
	*
	* @param id
	* @param body - Request body
	* @returns {Product}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {NotPermitted} You don't have the permission to update this product.
	* @throws {ResourceNotFound} Product not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/products/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: NotPermitted,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateBenefitsProducts = (client) => {
	/**
	* Update benefits granted by a product.
	*
	* **Scopes**: `products:write`
	*
	* @param id
	* @param body - Request body
	* @returns {Product}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {NotPermitted} You don't have the permission to update this product.
	* @throws {ResourceNotFound} Product not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("POST", "/v1/products/{id}/benefits", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: NotPermitted,
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createProductsService(client) {
	return {
		list: listProducts(client),
		create: createProducts(client),
		get: getProducts(client),
		update: updateProducts(client),
		updateBenefits: updateBenefitsProducts(client),
		iterlist: iterlistProducts(client)
	};
}
//#endregion
//#region src/2026-04/services/refunds.ts
const listRefunds = (client) => {
	/**
	* List refunds.
	*
	* **Scopes**: `refunds:read` `refunds:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceRefund}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			id: query?.id,
			organization_id: query?.organization_id,
			order_id: query?.order_id,
			subscription_id: query?.subscription_id,
			customer_id: query?.customer_id,
			external_customer_id: query?.external_customer_id,
			succeeded: query?.succeeded,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-created_at"]
		};
		const request = client.buildRequest("GET", "/v1/refunds/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List refunds.
*
* **Scopes**: `refunds:read` `refunds:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Refund>} A generator that yields items of type Refund.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistRefunds = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listRefunds(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createRefunds = (client) => {
	/**
	* Create a refund.
	*
	* **Scopes**: `refunds:write`
	*
	* @param body - Request body
	* @returns {Refund}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {RefundedAlready} Order is already fully refunded.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/refunds/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: RefundedAlready,
			422: HTTPValidationError
		});
	};
};
function createRefundsService(client) {
	return {
		list: listRefunds(client),
		create: createRefunds(client),
		iterlist: iterlistRefunds(client)
	};
}
//#endregion
//#region src/2026-04/services/subscriptions.ts
const listSubscriptions = (client) => {
	/**
	* List subscriptions.
	*
	* **Scopes**: `subscriptions:read` `subscriptions:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceSubscription}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			product_id: query?.product_id,
			customer_id: query?.customer_id,
			external_customer_id: query?.external_customer_id,
			discount_id: query?.discount_id,
			active: query?.active,
			status: query?.status,
			cancel_at_period_end: query?.cancel_at_period_end,
			customer_cancellation_reason: query?.customer_cancellation_reason,
			canceled_at_after: query?.canceled_at_after,
			canceled_at_before: query?.canceled_at_before,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10,
			sorting: query?.sorting ?? ["-started_at"],
			metadata: query?.metadata
		};
		const request = client.buildRequest("GET", "/v1/subscriptions/", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List subscriptions.
*
* **Scopes**: `subscriptions:read` `subscriptions:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<Subscription>} A generator that yields items of type Subscription.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistSubscriptions = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listSubscriptions(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createSubscriptions = (client) => {
	/**
	* Create a subscription programmatically.
	*
	* This endpoint only allows to create subscription on free products.
	* For paid products, use the checkout flow.
	*
	* No initial order will be created and no confirmation email will be sent.
	*
	* **Scopes**: `subscriptions:write`
	*
	* @param body - Request body
	* @returns {Subscription}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/subscriptions/", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const exportSubscriptions = (client) => {
	/**
	* Export subscriptions as a CSV file.
	*
	* **Scopes**: `subscriptions:read` `subscriptions:write`
	*
	* @param query - Query parameters
	* @returns {string}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = { organization_id: query?.organization_id };
		const request = client.buildRequest("GET", "/v1/subscriptions/export", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "text", { 422: HTTPValidationError });
	};
};
const getSubscriptions = (client) => {
	/**
	* Get a subscription by ID.
	*
	* **Scopes**: `subscriptions:read` `subscriptions:write`
	*
	* @param id - The subscription ID.
	* @returns {Subscription}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Subscription not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/subscriptions/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const revokeSubscriptions = (client) => {
	/**
	* Revoke a subscription, i.e cancel immediately.
	*
	* **Scopes**: `subscriptions:write`
	*
	* @param id - The subscription ID.
	* @returns {Subscription}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {AlreadyCanceledSubscription} This subscription is already revoked.
	* @throws {ResourceNotFound} Subscription not found.
	* @throws {SubscriptionLocked} Subscription is pending an update.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("DELETE", "/v1/subscriptions/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			403: AlreadyCanceledSubscription,
			404: ResourceNotFound,
			409: SubscriptionLocked,
			422: HTTPValidationError
		});
	};
};
const updateSubscriptions = (client) => {
	/**
	* Update a subscription.
	*
	* **Scopes**: `subscriptions:write`
	*
	* @param id - The subscription ID.
	* @param body - Request body
	* @returns {Subscription}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {PaymentFailed} Payment required to apply the subscription update.
	* @throws {AlreadyCanceledSubscription} Subscription is already canceled or will be at the end of the period.
	* @throws {ResourceNotFound} Subscription not found.
	* @throws {SubscriptionLocked} Subscription is pending an update.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/subscriptions/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			402: PaymentFailed,
			403: AlreadyCanceledSubscription,
			404: ResourceNotFound,
			409: SubscriptionLocked,
			422: HTTPValidationError
		});
	};
};
function createSubscriptionsService(client) {
	return {
		list: listSubscriptions(client),
		create: createSubscriptions(client),
		export: exportSubscriptions(client),
		get: getSubscriptions(client),
		revoke: revokeSubscriptions(client),
		update: updateSubscriptions(client),
		iterlist: iterlistSubscriptions(client)
	};
}
//#endregion
//#region src/2026-04/services/webhooks.ts
const listWebhookEndpointsWebhooks = (client) => {
	/**
	* List webhook endpoints.
	*
	* **Scopes**: `webhooks:read` `webhooks:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceWebhookEndpoint}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			organization_id: query?.organization_id,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10
		};
		const request = client.buildRequest("GET", "/v1/webhooks/endpoints", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List webhook endpoints.
*
* **Scopes**: `webhooks:read` `webhooks:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<WebhookEndpoint>} A generator that yields items of type WebhookEndpoint.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistWebhookEndpointsWebhooks = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listWebhookEndpointsWebhooks(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const createWebhookEndpointWebhooks = (client) => {
	/**
	* Create a webhook endpoint.
	*
	* **Scopes**: `webhooks:write`
	*
	* @param body - Request body
	* @returns {WebhookEndpoint}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (body) => {
		const request = client.buildRequest("POST", "/v1/webhooks/endpoints", {}, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
const getWebhookEndpointWebhooks = (client) => {
	/**
	* Get a webhook endpoint by ID.
	*
	* **Scopes**: `webhooks:read` `webhooks:write`
	*
	* @param id - The webhook endpoint ID.
	* @returns {WebhookEndpoint}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Webhook endpoint not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("GET", "/v1/webhooks/endpoints/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const deleteWebhookEndpointWebhooks = (client) => {
	/**
	* Delete a webhook endpoint.
	*
	* **Scopes**: `webhooks:write`
	*
	* @param id - The webhook endpoint ID.
	* @returns {void}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Webhook endpoint not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("DELETE", "/v1/webhooks/endpoints/{id}", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "none", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const updateWebhookEndpointWebhooks = (client) => {
	/**
	* Update a webhook endpoint.
	*
	* **Scopes**: `webhooks:write`
	*
	* @param id - The webhook endpoint ID.
	* @param body - Request body
	* @returns {WebhookEndpoint}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Webhook endpoint not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id, body) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/webhooks/endpoints/{id}", pathParams, {}, body);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const resetWebhookEndpointSecretWebhooks = (client) => {
	/**
	* Regenerate a webhook endpoint secret.
	*
	* **Scopes**: `webhooks:write`
	*
	* @param id - The webhook endpoint ID.
	* @returns {WebhookEndpoint}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Webhook endpoint not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("PATCH", "/v1/webhooks/endpoints/{id}/secret", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
const listWebhookDeliveriesWebhooks = (client) => {
	/**
	* List webhook deliveries.
	*
	* Deliveries are all the attempts to deliver a webhook event to an endpoint.
	*
	* **Scopes**: `webhooks:read` `webhooks:write`
	*
	* @param query - Query parameters
	* @returns {ListResourceWebhookDelivery}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (query) => {
		const pathParams = {};
		const queryParams = {
			endpoint_id: query?.endpoint_id,
			start_timestamp: query?.start_timestamp,
			end_timestamp: query?.end_timestamp,
			succeeded: query?.succeeded,
			query: query?.query,
			http_code_class: query?.http_code_class,
			event_type: query?.event_type,
			page: query?.page ?? 1,
			limit: query?.limit ?? 10
		};
		const request = client.buildRequest("GET", "/v1/webhooks/deliveries", pathParams, queryParams, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", { 422: HTTPValidationError });
	};
};
/**
* List webhook deliveries.
*
* Deliveries are all the attempts to deliver a webhook event to an endpoint.
*
* **Scopes**: `webhooks:read` `webhooks:write`
*
* @param query - Query parameters
* @returns {AsyncGenerator<WebhookDelivery>} A generator that yields items of type WebhookDelivery.
* @throws {PagoNetworkError} When a network error occurs
* @throws {PagoRateLimitError} When the rate limit is exceeded
* @throws {PagoServerError} When the server returns a 5xx error
* @throws {HTTPValidationError} Validation Error
*/
const iterlistWebhookDeliveriesWebhooks = (client) => {
	return async function* (query) {
		let page;
		page = query?.page ?? 1;
		let limit;
		limit = query?.limit;
		while (true) {
			const response = await listWebhookDeliveriesWebhooks(client)({
				...query,
				page,
				limit
			});
			for (const item of response.items) yield item;
			if (page >= response.pagination.max_page) break;
			page++;
		}
	};
};
const redeliverWebhookEventWebhooks = (client) => {
	/**
	* Schedule the re-delivery of a webhook event.
	*
	* **Scopes**: `webhooks:write`
	*
	* @param id - The webhook event ID.
	* @returns {unknown}
	* @throws {PagoNetworkError} When a network error occurs
	* @throws {PagoRateLimitError} When the rate limit is exceeded
	* @throws {PagoServerError} When the server returns a 5xx error
	* @throws {ResourceNotFound} Webhook event not found.
	* @throws {HTTPValidationError} Validation Error
	*/
	return async (id) => {
		const pathParams = { id };
		const request = client.buildRequest("POST", "/v1/webhooks/events/{id}/redeliver", pathParams, {}, void 0);
		const response = await client.sendRequest(request);
		return client.parseResponse(response, "json", {
			404: ResourceNotFound,
			422: HTTPValidationError
		});
	};
};
function createWebhooksService(client) {
	return {
		listWebhookEndpoints: listWebhookEndpointsWebhooks(client),
		createWebhookEndpoint: createWebhookEndpointWebhooks(client),
		getWebhookEndpoint: getWebhookEndpointWebhooks(client),
		deleteWebhookEndpoint: deleteWebhookEndpointWebhooks(client),
		updateWebhookEndpoint: updateWebhookEndpointWebhooks(client),
		resetWebhookEndpointSecret: resetWebhookEndpointSecretWebhooks(client),
		listWebhookDeliveries: listWebhookDeliveriesWebhooks(client),
		redeliverWebhookEvent: redeliverWebhookEventWebhooks(client),
		iterlistWebhookEndpoints: iterlistWebhookEndpointsWebhooks(client),
		iterlistWebhookDeliveries: iterlistWebhookDeliveriesWebhooks(client)
	};
}
//#endregion
//#region src/2026-04/client.ts
function createPago(options) {
	const client = new require_webhooks.ClientBase({
		...options,
		version: options.version ?? "2026-04"
	});
	return {
		organizations: createOrganizationsService(client),
		subscriptions: createSubscriptionsService(client),
		oauth2: createOauth2Service(client),
		benefits: createBenefitsService(client),
		benefitGrants: createBenefitGrantsService$1(client),
		webhooks: createWebhooksService(client),
		products: createProductsService(client),
		orders: createOrdersService(client),
		refunds: createRefundsService(client),
		disputes: createDisputesService(client),
		checkouts: createCheckoutsService(client),
		files: createFilesService(client),
		metrics: createMetricsService(client),
		licenseKeys: createLicenseKeysService(client),
		checkoutLinks: createCheckoutLinksService(client),
		customFields: createCustomFieldsService(client),
		discounts: createDiscountsService(client),
		customers: createCustomersService(client),
		members: createMembersService(client),
		customerPortal: createCustomerPortalService(client),
		customerSeats: createCustomerSeatsService(client),
		customerSessions: createCustomerSessionsService(client),
		events: createEventsService(client),
		eventTypes: createEventTypesService(client),
		meters: createMetersService(client),
		customerMeters: createCustomerMetersService$1(client),
		payments: createPaymentsService(client)
	};
}
//#endregion
//#region src/2026-04/models.ts
var models_exports = /* @__PURE__ */ __exportAll({});
//#endregion
//#region src/2026-04/webhooks.ts
var webhooks_exports = /* @__PURE__ */ __exportAll({
	PagoWebhookError: () => require_webhooks.PagoWebhookError,
	PagoWebhookUnknownTypeError: () => require_webhooks.PagoWebhookUnknownTypeError,
	PagoWebhookVerificationError: () => require_webhooks.PagoWebhookVerificationError,
	validateEvent: () => validateEvent
});
const knownEventTypes = /* @__PURE__ */ new Set([
	"benefit.created",
	"benefit.updated",
	"benefit_grant.created",
	"benefit_grant.cycled",
	"benefit_grant.revoked",
	"benefit_grant.updated",
	"checkout.created",
	"checkout.expired",
	"checkout.updated",
	"customer.created",
	"customer.deleted",
	"customer.state_changed",
	"customer.updated",
	"customer_seat.assigned",
	"customer_seat.claimed",
	"customer_seat.revoked",
	"member.created",
	"member.deleted",
	"member.updated",
	"order.created",
	"order.paid",
	"order.refunded",
	"order.updated",
	"organization.updated",
	"product.created",
	"product.updated",
	"refund.created",
	"refund.updated",
	"subscription.active",
	"subscription.canceled",
	"subscription.created",
	"subscription.past_due",
	"subscription.paused",
	"subscription.resumed",
	"subscription.revoked",
	"subscription.uncanceled",
	"subscription.updated"
]);
/**
* Verify a raw Pago webhook request and return its typed payload.
*/
const validateEvent = (body, headers, secret) => {
	return require_webhooks.validateWebhook(body, headers, secret, knownEventTypes);
};
//#endregion
exports.createPago = createPago;
Object.defineProperty(exports, "errors", {
	enumerable: true,
	get: function() {
		return errors_exports;
	}
});
Object.defineProperty(exports, "models", {
	enumerable: true,
	get: function() {
		return models_exports;
	}
});
Object.defineProperty(exports, "webhooks", {
	enumerable: true,
	get: function() {
		return webhooks_exports;
	}
});

//# sourceMappingURL=index.cjs.map