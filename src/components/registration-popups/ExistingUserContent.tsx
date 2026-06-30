import React from 'react';
import { ChildPopupProps } from './types';
import AlreadyRegisteredContent from './AlreadyRegisteredContent';
import SelfReferralContent from './SelfReferralContent';
import OldUserContent from './OldUserContent';
import DeviceLimitReachedContent from './DeviceLimitReachedContent';
import IsReferralContent from './IsReferralContent';

const OLD_USER_STATUSES = ['free_completed_recent', 'paid_user', 'subscription_expired_recently'];

const ExistingUserContent: React.FC<ChildPopupProps> = (props) => {
    if (props.status === 'isReferral') {
        return <IsReferralContent {...props} />;
    }
    if (props.status === 'device_limit_reached') {
        return <DeviceLimitReachedContent {...props} />;
    }
    if (props.status === 'self_referral') {
        return <SelfReferralContent {...props} />;
    }
    if (props.status === 'already_registered' || props.status === 'free_ongoing') {
        return <AlreadyRegisteredContent {...props} />;
    }
    if (OLD_USER_STATUSES.includes(props.status)) {
        return <OldUserContent {...props} />;
    }
    return <AlreadyRegisteredContent {...props} />;
};

export default ExistingUserContent;
