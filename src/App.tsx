import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const FreeProgrammes = lazy(() => import('./pages/free-programmes'));
const TwentyOneDays = lazy(() => import('./pages/21-days'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PlanCheckout = lazy(() => import('./pages/PlanCheckout'));
const Renew = lazy(() => import('./pages/Renew'));
const ReferralContestRegistration = lazy(() => import('./pages/referral-contest-registration'));

const JoinRedirect = () => {
  useEffect(() => {
    window.location.replace('https://healthyday.co.in/21days');
  }, []);
  return null;
};

/**
 * QR / Offline Campaign Redirect
 *
 * /ofl/ref=mp   → https://yoga.healthyday.co.in?ref=mp
 * /ofl/ref=hyd  → https://yoga.healthyday.co.in?ref=hyd
 * /ofl/source=qr&ref=abc → https://yoga.healthyday.co.in?source=qr&ref=abc
 */
const OFL_DESTINATION = 'https://yoga.healthyday.co.in';

const OflRedirect = () => {
  const { '*': wildcard } = useParams();
  useEffect(() => {
    const queryString = wildcard ? `?${wildcard}` : ''; https://yoga.healthyday.co.in/
    window.location.replace(`${OFL_DESTINATION}${queryString}`);
  }, [wildcard]);
  return null;
};

const PageLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
    <img src="/logo.webp" alt="Healthyday" style={{ height: 36, opacity: 0.7 }} />
  </div>
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Renew />} />
          <Route path="/English" element={<FreeProgrammes defaultLanguage="English" />} />
          <Route path="/english" element={<FreeProgrammes defaultLanguage="English" />} />
          <Route path="/englis" element={<FreeProgrammes defaultLanguage="English" />} />
          <Route path="/Telugu" element={<FreeProgrammes defaultLanguage="Telugu" />} />
          <Route path="/telugu" element={<FreeProgrammes defaultLanguage="Telugu" />} />
          <Route path="/talagu" element={<FreeProgrammes defaultLanguage="Telugu" />} />
          <Route path="/pricing" element={<Home />} />
          <Route path="/renew" element={<Renew />} />
          <Route path="/renew/:planType" element={<Renew />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/checkout" element={<PlanCheckout />} />
          <Route path="/:planId/checkout" element={<PlanCheckout />} />
          <Route path="/:planId/checkout/old" element={<PlanCheckout />} />
          <Route path="/free-programmes" element={<FreeProgrammes />} />
          <Route path="/FreeProgrammes" element={<FreeProgrammes />} />
          <Route path="/21days" element={<TwentyOneDays />} />
          <Route path="/21days/English" element={<TwentyOneDays defaultLanguage="English" />} />
          <Route path="/21days/english" element={<TwentyOneDays defaultLanguage="English" />} />
          <Route path="/21days/Telugu" element={<TwentyOneDays defaultLanguage="Telugu" />} />
          <Route path="/21days/telugu" element={<TwentyOneDays defaultLanguage="Telugu" />} />
          <Route path="/21days/telagu" element={<TwentyOneDays defaultLanguage="Telugu" />} />
          <Route path="/21-day" element={<TwentyOneDays />} />
          <Route path="/21-day/English" element={<TwentyOneDays defaultLanguage="English" />} />
          <Route path="/21-day/english" element={<TwentyOneDays defaultLanguage="English" />} />
          <Route path="/21-day/Telugu" element={<TwentyOneDays defaultLanguage="Telugu" />} />
          <Route path="/21-day/telugu" element={<TwentyOneDays defaultLanguage="Telugu" />} />
          <Route path="/21-day/telagu" element={<TwentyOneDays defaultLanguage="Telugu" />} />
          <Route path="/500yogakits" element={<ReferralContestRegistration />} />
          <Route path="/join" element={<JoinRedirect />} />
          <Route path="/ofl/*" element={<OflRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
