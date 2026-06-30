import React from 'react';
import SharedHeader from '../components/SharedHeader';
import SharedFooter from '../components/SharedFooter';

const ReferralTnc = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col overflow-x-hidden">
      <SharedHeader />
      
      <main className="flex-grow flex flex-col items-center justify-center pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-5xl mx-auto my-8">
          
          <div className="mb-10" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[2px] w-32 md:w-40 bg-[#feab27]"></div>
              <h2 className="text-[18px] md:text-[22px] font-bold text-[#0d468b]">Healthyday</h2>
            </div>
            <h1 className="text-[32px] md:text-[40px] font-bold text-[#202020]">Referral Contest - Terms & Conditions</h1>
          </div>

          <div 
            className="text-[#202020] space-y-8 leading-[1.8] text-[16px] font-medium" 
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            <p>
              These Terms & Conditions govern participation in the Healthyday Referral Contest. By participating in the contest, the participant ("Referrer") agrees to abide by these Terms & Conditions.
            </p>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">1. Contest Duration</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>1.1</strong> The contest is valid only for referrals made between 1st June 2026 (12:00 AM IST) and 30th June 2026 (11:59 PM IST).</li>
                <li><strong>1.2</strong> Only the Top 500 Referrers on the leaderboard as of 30th June 2026, 11:59 PM IST shall be considered eligible for rewards.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">2. Eligible Referrals</h3>
              <p className="mb-3"><strong>2.1</strong> A referral shall be considered valid only if:</p>
              <ul className="list-disc pl-10 space-y-2 mb-4">
                <li>the referred user completes registration through the referral link;</li>
                <li>the referred user verifies their WhatsApp number within 7 days of registration; or</li>
                <li>attends at least one Healthyday class on or before 30th June 2026.</li>
              </ul>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>2.2</strong> Referrals that remain unverified beyond 7 days from the date of registration shall automatically become ineligible for the contest.</li>
                <li><strong>2.3</strong> Healthyday reserves the right to determine whether a referral is valid based on its internal records.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">3. Consent & Genuine Registrations</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>3.1</strong> Every referral must register using their own device, their own phone number, and with their own knowledge and consent.</li>
                <li><strong>3.2</strong> Referrers must not submit registrations on behalf of another person using their own device or without the referred person's explicit consent.</li>
                <li><strong>3.3</strong> If Healthyday determines that registrations were submitted without the referred person's knowledge or consent, the Referrer shall be immediately disqualified.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">4. Fraudulent Activity</h3>
              <p className="mb-3">The following activities are strictly prohibited:</p>
              <ul className="list-disc pl-10 space-y-2 mb-4">
                <li>Fake registrations</li>
                <li>Self-referrals</li>
                <li>Duplicate registrations</li>
                <li>Multiple registrations using the same individual</li>
                <li>Registrations created using temporary, virtual or disposable phone numbers</li>
                <li>Bot-generated registrations</li>
                <li>Automated scripts</li>
                <li>Click farms</li>
                <li>Bulk submission software</li>
                <li>Device farms</li>
                <li>Identity impersonation</li>
                <li>Any attempt to manipulate referral counts or leaderboard rankings</li>
              </ul>
              <p>Healthyday reserves the sole right to determine whether any activity is fraudulent.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">5. Verification Quality Requirement</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>5.1</strong> Referrers are expected to invite genuine participants.</li>
                <li><strong>5.2</strong> Referrers whose overall WhatsApp verification rate falls below 25% may be blacklisted at Healthyday's discretion.</li>
                <li><strong>5.3</strong> Verification percentage shall be calculated using Healthyday's internal systems.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">6. Complaints from Referred Users</h3>
              <p className="mb-3">If any referred individual reports that:</p>
              <ul className="list-disc pl-10 space-y-2 mb-4">
                <li>they did not authorize the registration,</li>
                <li>they never intended to register,</li>
                <li>their number was submitted without consent, or</li>
                <li>they received unsolicited registrations,</li>
              </ul>
              <p>Healthyday may immediately blacklist the Referrer without prior notice.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">7. Blacklisting & Disqualification</h3>
              <p className="mb-3"><strong>7.1</strong> Healthyday may blacklist any Referrer at any time if it reasonably believes the participant has violated these Terms.</p>
              <p className="mb-3"><strong>7.2</strong> Upon blacklisting:</p>
              <ul className="list-disc pl-10 space-y-2 mb-4">
                <li>all pending referrals shall be removed;</li>
                <li>all previously verified referrals may also be removed;</li>
                <li>the participant shall become permanently ineligible for contest rewards;</li>
                <li>Healthyday shall have no obligation to reinstate the participant.</li>
              </ul>
              <p><strong>7.3</strong> Healthyday's decision regarding blacklisting shall be final.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">8. Referral Tracking & Technical Issues</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>8.1</strong> Referral tracking is performed using automated digital systems.</li>
                <li><strong>8.2</strong> While Healthyday makes reasonable efforts to ensure accurate tracking, technical issues, browser settings, device limitations, user actions, network failures or software bugs may occasionally affect referral attribution or counts.</li>
                <li><strong>8.3</strong> Any discrepancy must be reported by email to <a href="mailto:contact@healthyday.co.in" className="text-blue-600 hover:underline">contact@healthyday.co.in</a> before 30th June 2026, 11:59 PM IST.</li>
                <li><strong>8.4</strong> Healthyday will investigate reported issues using available logs where possible.</li>
                <li><strong>8.5</strong> Healthyday does not guarantee that every referral will be successfully tracked or recoverable.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">9. Reward Delivery</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>9.1</strong> Winners will be intimated via WhatsApp or other digital channels between 1st July to 5th July. Winners should submit the required reward claim details within 7 days from the date of intimation.</li>
                <li><strong>9.2</strong> Reward dispatch may take approximately 20–30 days from successful submission of the reward claim form as some items in the rewards needs to be customised as per winner</li>
                <li><strong>9.3</strong> Delivery timelines are estimates and may vary due to logistics or vendor availability.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">10. Non-Serviceable Locations</h3>
              <p className="mb-3">If the winner's address is outside the courier service area:</p>
              <ul className="list-disc pl-10 space-y-2">
                <li>Healthyday may request an alternate serviceable address.</li>
                <li>The alternate address must be provided within 7 days.</li>
                <li>Delivery timelines shall restart from the date the alternate address is received.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">11. Healthyday Rights</h3>
              <p className="mb-3">Healthyday reserves the absolute right to:</p>
              <ul className="list-disc pl-10 space-y-2 mb-4">
                <li>verify referrals;</li>
                <li>reject any referral;</li>
                <li>remove referrals;</li>
                <li>modify referral counts;</li>
                <li>blacklist participants;</li>
                <li>suspend participants;</li>
                <li>withhold rewards pending investigation;</li>
                <li>request additional verification;</li>
                <li>cancel or modify the contest if necessary.</li>
              </ul>
              <p>Healthyday's decision shall be final and binding.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">12. Reward Representation</h3>
              <p className="mb-3">Reward images shown in promotional materials are for illustration purposes only. Actual products may vary in:</p>
              <ul className="list-disc pl-10 space-y-2 mb-4">
                <li>colour, size, model, brand</li>
                <li>packaging, specifications, design, market value</li>
              </ul>
              <p className="mb-4">based on availability. No cash alternative shall be provided.</p>
              <p className="mb-2"><strong className="text-[#0d468b]">1 Valid Referral Reward:</strong> Participants who complete 1 valid referral shall receive a Healthyday Diet PDF on their registered WhatsApp number. The PDF may be delivered at any time on or before 30th June 2026.</p>
              <p className="mb-2"><strong className="text-[#0d468b]">3 Valid Referrals Reward:</strong> Participants who complete 3 valid referrals shall receive a 1-Month Free Yoga Coupon. The 1-Month Free Yoga Coupon:</p>
              <ul className="list-disc pl-10 space-y-2 mb-4">
                <li>must be redeemed on or before 31st July 2026;</li>
                <li>is applicable only towards eligible Healthyday paid subscriptions as specified here</li>
                <li>cannot be redeemed for cash, transferred, exchanged or combined with any other promotional offer unless explicitly permitted by Healthyday</li>
              </ul>
              <p>Healthyday reserves the right to verify referral eligibility before issuing any reward or coupon.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">13. Support & Queries</h3>
              <p className="mb-3">Queries regarding:</p>
              <ul className="list-disc pl-10 space-y-2 mb-4">
                <li>referral count, verification status, leaderboard rank, reward eligibility</li>
              </ul>
              <p>may be sent to: <a href="mailto:contact@healthyday.co.in" className="text-[#0d468b] hover:underline font-semibold">contact@healthyday.co.in</a></p>
              <p>Healthyday aims to respond within 7 business days.</p>
            </section>

            <div className="pt-8 pb-4">
              <h2 className="text-[24px] font-bold text-[#0d468b]">Additional Terms</h2>
            </div>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">14. One Referral Per Person</h3>
              <p>Only the first valid registration by an individual shall be counted. Multiple registrations by the same individual shall not generate multiple referral credits.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">15. Self Referrals</h3>
              <p>Participants are not permitted to refer to themselves using alternate phone numbers, email addresses or accounts. Healthyday may remove such referrals and blacklist the participant.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">16. Existing Users</h3>
              <p>Individuals who have already registered with Healthyday previously do not qualify as new referrals even if they register again. Healthyday's internal database shall determine referral eligibility.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">17. Leaderboard Updates</h3>
              <p>Leaderboard rankings are periodically refreshed and may not reflect real-time referral activity. The final leaderboard used for winner selection shall be Healthyday's internal verified records.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">18. Reward Eligibility</h3>
              <p>Winning a leaderboard position does not automatically guarantee a reward. Participants must satisfy all contest rules, verification requirements and fraud checks before rewards are approved.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">19. Identity Verification</h3>
              <p>Healthyday may request proof of identity, mobile ownership or address before dispatching rewards. Failure to provide requested information within the stipulated period may result in cancellation of the reward.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">20. Non-transferability</h3>
              <p>Rewards are non-transferable, non-exchangeable and cannot be redeemed for cash.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">21. Taxes</h3>
              <p>Any taxes, duties or statutory charges applicable under law shall be the responsibility of the winner unless otherwise specified by Healthyday.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">22. Limitation of Liability</h3>
              <p className="mb-3">Healthyday shall not be liable for:</p>
              <ul className="list-disc pl-10 space-y-2 mb-4">
                <li>internet failures, mobile network issues, device incompatibility</li>
                <li>courier delays, force majeure events, technical failures, participant mistakes</li>
                <li>or any indirect or consequential loss arising from participation.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">23. Force Majeure</h3>
              <p>Healthyday may postpone, suspend, modify or cancel the contest due to circumstances beyond its reasonable control, including natural disasters, government restrictions, internet outages, technical failures or other unforeseen events.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">24. Amendments</h3>
              <p>Healthyday reserves the right to amend these Terms & Conditions at any time without prior notice. Updated Terms shall become effective immediately upon publication.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-semibold text-[#0d468b] mb-4">25. Final Decision</h3>
              <p>In the event of any dispute relating to eligibility, referrals, leaderboard rankings, rewards, interpretation of these Terms or any other contest matter, Healthyday's decision shall be final, binding and not subject to further correspondence.</p>
            </section>
          </div>
        </div>
      </main>

      <SharedFooter />
    </div>
  );
};

export default ReferralTnc;
