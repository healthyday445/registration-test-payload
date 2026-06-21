import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';

export function validatePhone(phone: string, dialCode: string): boolean {
    try {
        return isValidPhoneNumber(dialCode + phone);
    } catch {
        return false;
    }
}

export function formatPhone(phone: string, dialCode: string): string {
    try {
        return parsePhoneNumber(dialCode + phone).number as string;
    } catch {
        return (dialCode + phone).replace(/\s+/g, '').replace(/-/g, '');
    }
}
