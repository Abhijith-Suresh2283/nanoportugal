import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/program" element={<Program/>} />
        {/* <Route path="/abstract-submission" element={<AbstractSubmissionPage />} /> */}
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/deadlines" element={<DeadlinesPage />} />
        <Route path="/publications" element={<PublicationsPage/>} />
        <Route path="/committees" element={<CommitteesPage />} />
        <Route path="/sponsors" element={<SponsorsAndExhibitorsPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/venue" element={<VenuePage/>} />
        {/* <Route path="/accommodation" element={<AccommodationPage />} /> */}
        {/* <Route path="/venue" element={<VenuePage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
