/**
 * Referral Fraud Guard
 *
 * Tracks how many times a user registers via a specific ?ref= link
 * using localStorage. After MAX_REFERRAL_USES (default 5) successful
 * registrations from the same browser, the ?ref= param is stripped
 * so the referral no longer counts.
 */

const STORAGE_KEY = 'hd_ref_usage';
const MAX_REFERRAL_USES = 5;

interface RefUsageMap {
  [refCode: string]: number;
}

/** Read the current usage map from localStorage */
function getUsageMap(): RefUsageMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/** Save the usage map back to localStorage */
function saveUsageMap(map: RefUsageMap): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // localStorage full or blocked — silently ignore
  }
}

/**
 * Call this before submitting. Returns true if the current ?ref= code
 * has been used MAX_REFERRAL_USES or more times.
 */
export function isReferralLimitReached(): boolean {
  const url = new URL(window.location.href);
  const ref = url.searchParams.get('ref') || url.searchParams.get('source');

  const map = getUsageMap();
  
  // Check global device total
  const deviceTotal = map['device_total'] ?? 0;
  if (deviceTotal >= MAX_REFERRAL_USES) return true;

  if (!ref) return false;

  const count = map[ref] ?? 0;
  return count >= MAX_REFERRAL_USES;
}

/**
 * Call this on page load.
 * We no longer redirect here so the user can see the form and we can show a popup on submit.
 */
export function enforceReferralLimit(): boolean {
  const url = new URL(window.location.href);
  const ref = url.searchParams.get('ref') || url.searchParams.get('source');

  const map = getUsageMap();
  
  const deviceTotal = map['device_total'] ?? 0;
  if (deviceTotal >= MAX_REFERRAL_USES) return true;

  if (!ref) return false; 

  const count = map[ref] ?? 0;
  if (count >= MAX_REFERRAL_USES) {
    return true; // limit reached
  }

  return false;
}

/**
 * Call this AFTER a successful registration to increment the usage
 * counter for the current ?ref= code.
 */
export function recordReferralUse(): void {
  const url = new URL(window.location.href);
  const ref = url.searchParams.get('ref') || url.searchParams.get('source');

  const map = getUsageMap();
  
  // Always increment the global device total
  map['device_total'] = (map['device_total'] ?? 0) + 1;

  if (ref) {
    map[ref] = (map[ref] ?? 0) + 1;
  }
  
  saveUsageMap(map);
}
