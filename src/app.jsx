import {Route, Routes} from 'react-router' ;
import  HomePage  from './pages/HomePage';
import  LoginPage  from './pages/LoginPage';
import  ChatPage  from './pages/ChatPage';
import SignUpPage from './pages/SignUpPage';
 import CallPage from './pages/CallPage';  
import NotificationPage from './pages/NotificationPage';
import  OnboardingPage  from './pages/OnboardingPage';
import './app.css'


export function App() {


  return (
  <div  className="h-screen">

        <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/call" element={<CallPage/>} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/Onboarding" element={<OnboardingPage />} />

        </Routes>
      </div>
  )
}
