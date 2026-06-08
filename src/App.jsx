import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Program from "./components/Program";
import SpeakersPage from "./components/Speakers";
import RegistrationPage from "./components/Registration";
import DeadlinesPage from "./components/Deadlines";
import PublicationsPage from "./components/Publications";
import CommitteesPage from "./components/Committee";
import SponsorsAndExhibitorsPage from "./components/SponsorsAndExhibitors";
import TravelPage from "./components/Travel";
import VenuePage from "./components/Venue";
import ContactPage from "./components/Contact";
import AccommodationPage from "./components/Accomodation";
import AbstractSubmissionPage from "./components/AbstractSubmission";
import AdminPage from "./components/AdminPage";
import SpeakerSubmissionPage from "./components/SpeakerSubmissionPage";
import SpeakersPage2026 from "./components/Speakers2026";

// 1. Helper component to handle Google Analytics page tracking
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-WT73VVQQZ1", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      {/* 2. Tracker must be INSIDE <Router> so useLocation works */}
      <AnalyticsTracker />

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route
          path="/abstract-submission"
          element={<AbstractSubmissionPage />}
        />
        <Route path="/speakers2025" element={<SpeakersPage />} />
        <Route path="/speakers" element={<SpeakersPage2026 />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/deadlines" element={<DeadlinesPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/committees" element={<CommitteesPage />} />
        <Route path="/sponsors" element={<SponsorsAndExhibitorsPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/venue" element={<VenuePage />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/speakersubmission" element={<SpeakerSubmissionPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
