# Pricing & Plan Details

This document outlines the pricing structures and the specific payloads (`plan_name`) sent to Razorpay during checkout across the different pages in the application.

## 1. Main Website Pricing Page (`Home.tsx`)
This is the standard pricing for new users checking out with an Indian phone number (`+91`).

| Plan Title | Price Paid (INR) | Original Price | `plan_name` Sent |
| :--- | :--- | :--- | :--- |
| **1 Year Including Diet** | ₹2399/- | ₹5999/- | `"12m_new_inr"` |
| **6 Months Plan** | ₹1899/- | ₹2999/- | `"6m_new_inr"` |
| **3 Months Plan** | ₹1399/- | ₹1499/- | `"3m_new_inr"` |

---

## 2. Renewal Page (`Renew.tsx`)
This page is for existing users and offers a discounted loyalty price. Users must have an Indian phone number.

| Plan Title | Price Paid (INR) | Original Price | `plan_name` Sent |
| :--- | :--- | :--- | :--- |
| **1 Year Including Diet** | ₹1999/- | ₹5999/- | `"12m_renew_inr"` |
| **6 Months Plan** | ₹1499/- | ₹2999/- | `"6m_renew_inr"` |
| **3 Months Plan** | ₹999/- | ₹1499/- | `"3m_renew_inr"` |

---

---

## 3. USD Pricing Page (`USDPricing.tsx`)
This page displays prices natively in USD for new users.

| Plan Title | Price Paid (USD) | Original Price (USD) | `plan_name` Sent |
| :--- | :--- | :--- | :--- |
| **1 Year Including Diet** | $49 | $125 | `"12m_new_usd"` |
| **6 Months Plan** | $39 | $62 | `"6m_new_usd"` |
| **3 Months Plan** | $29 | $31 | `"3m_new_usd"` |

---

## 4. USD Renewal Page (`USDRenew.tsx`)
This page displays prices natively in USD for existing users renewing their subscription.

| Plan Title | Price Paid (USD) | Original Price (USD) | `plan_name` Sent |
| :--- | :--- | :--- | :--- |
| **1 Year Including Diet** | $49 | $125 | `"12m_renew_usd"` |
| **6 Months Plan** | $39 | $62 | `"6m_renew_usd"` |
| **3 Months Plan** | $29 | $31 | `"3m_renew_usd"` |

---

## 5. Upgrade Page (`Upgrade.tsx`)
This page is for existing users upgrading their subscription. Users must have an Indian phone number.

| Plan Title | Price Paid (INR) | Original Price | `plan_name` Sent |
| :--- | :--- | :--- | :--- |
| **3 to 6 months upgrade** | ₹500/- | ₹1000/- | `"3_to_6_months_upgrade"` |
| **6 to 12 months upgrade** | ₹500/- | ₹1000/- | `"6_to_12_months_upgrade"` |
| **3 to 12 months upgrade** | ₹1000/- | ₹2000/- | `"3_to_12_months_upgrade"` |

---

## 6. USD Upgrade Page (`USDUpgrade.tsx`)
This page displays prices natively in USD for existing international users upgrading their subscription.

| Plan Title | Price Paid (USD) | Original Price (USD) | `plan_name` Sent |
| :--- | :--- | :--- | :--- |
| **3 to 6 months upgrade** | $10 | $20 | `"3_to_6_months_upgrade_usd"` |
| **6 to 12 months upgrade** | $10 | $20 | `"6_to_12_months_upgrade_usd"` |
| **3 to 12 months upgrade** | $20 | $40 | `"3_to_12_months_upgrade_usd"` |

---

## How it works technically:
- Each page defines its plans in an array (e.g., `plans` array) and passes the selected `plan` object to `PlanCheckout.tsx` via the router state.
- Each `plan` object now explicitly contains an `inrPlanName` and a `usdPlanName`.
- When the user selects a Country Dial Code in the checkout, `PlanCheckout.tsx` dynamically determines whether the user is an international buyer or an Indian buyer:
  - If they are Indian (`+91`), it extracts the `inrPlanName` (e.g., `12m_new_inr` or `12m_renew_inr`) to pass to the Razorpay webhook.
  - If they are International (anything other than `+91`), it automatically switches to the `usdPlanName` (e.g., `12m_usd`) and changes the currency to USD.
