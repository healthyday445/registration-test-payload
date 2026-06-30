export type ApiStatus =
    | 'success'
    | 'new_registration'
    | 'free_eligible_again'
    | 'already_registered'
    | 'free_ongoing'
    | 'free_completed_recent'
    | 'paid_user'
    | 'subscription_expired_recently'
    | 'self_referral'
    | 'isReferral';

export type PopupVariant = 'free' | '21days';

export interface ChildPopupProps {
    language: 'Telugu' | 'English';
    mobileNumber?: string;
    onClose: () => void;
    variant: PopupVariant;
    status: ApiStatus | string;
}
