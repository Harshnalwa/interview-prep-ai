import React, { useState } from "react";

import HERO_IMG from "../assets/hero1.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="container mx-auto px-4 pt-6 pb-32 relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-20">
            <div className="text-2xl text-white font-bold flex items-center gap-3">
              <div className="w-8 h-8 bg-ai-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              Interview Prep AI
            </div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-ai-primary text-sm font-semibold text-white px-8 py-3 rounded-full hover:bg-ai-secondary border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/25"
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="flex items-center gap-3 text-sm text-purple-300 font-semibold bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30 ai-glow">
                  <LuSparkles className="animate-pulse" /> AI Powered Innovation
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl text-white font-bold mb-8 leading-tight">
                Master Interviews with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 animate-text-glow">
                  Next-Gen AI
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Experience the future of interview preparation. Get personalized, role-specific questions, 
                AI-powered insights, and adaptive learning that evolves with your progress.
              </p>

              <button
                className="bg-ai-primary text-lg font-semibold text-white px-10 py-4 rounded-full hover:bg-ai-secondary border border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/25"
                onClick={handleCTA}
              >
                Start Your AI Journey
              </button>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl"></div>
                <img
                  src={HERO_IMG}
                  alt="AI Interview Preparation"
                  className="relative w-full max-w-lg rounded-2xl shadow-2xl border border-purple-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-4 pt-20 pb-24">
          <section>
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              AI-Powered Features
            </h2>
            <p className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto">
              Experience cutting-edge technology designed to elevate your interview preparation
            </p>

            <div className="flex flex-col items-center gap-8">
              {/* First 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {APP_FEATURES.slice(0, 3).map((feature, index) => (
                  <div
                    key={feature.id}
                    className="bg-ai-card p-8 rounded-2xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105 hover:ai-glow group"
                  >
                    <div className="text-purple-400 text-3xl mb-4 group-hover:animate-pulse">
                      🤖
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Remaining 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {APP_FEATURES.slice(3).map((feature, index) => (
                  <div
                    key={feature.id}
                    className="bg-ai-card p-8 rounded-2xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105 hover:ai-glow group"
                  >
                    <div className="text-purple-400 text-3xl mb-4 group-hover:animate-pulse">
                      ⚡
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="text-sm bg-gray-900 text-gray-400 text-center p-6 border-t border-gray-800">
          <div className="flex items-center justify-center gap-2">
            Made with <span className="text-purple-400 animate-pulse">❤️</span> and AI Innovation
          </div>
        </div>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
