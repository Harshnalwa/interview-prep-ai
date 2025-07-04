import React, { useState } from "react";

import HERO_IMG from "../assets/hero-img.png";
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
      <div className="w-full min-h-full matrix-bg relative overflow-hidden">
        {/* Neural Network Background */}
        <div className="absolute inset-0 neural-grid opacity-30" />
        
        {/* Floating AI Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 floating-element floating-element-1" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 floating-element floating-element-2" />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 floating-element floating-element-3" />

        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div className="text-xl text-slate-100 font-bold flex items-center gap-2">
              <div className="ai-logo">
                <span className="text-white font-mono text-sm">AI</span>
              </div>
              Interview Prep AI
            </div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="ai-button"
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-left mb-6">
                <div className="ai-badge">
                  <LuSparkles className="animate-spin" /> AI Powered Neural Engine
                </div>
              </div>

              <h1 className="text-5xl text-slate-100 font-medium mb-6 leading-tight">
                Master Interviews with <br />
                <span className="quantum-text font-bold text-6xl animate-hologram-flicker">
                  AI-Neural
                </span>{" "}
                <span className="text-slate-300">Intelligence</span>
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-slate-300 mr-0 md:mr-20 mb-8 leading-relaxed">
                Experience next-generation interview preparation with our AI-powered neural network. 
                Get personalized questions, instant explanations, and adaptive learning paths designed by advanced algorithms.
              </p>

              <button
                className="ai-button"
                onClick={handleCTA}
                style={{
                  background: 'linear-gradient(to right, #06b6d4, #4f46e5)',
                  boxShadow: '0 20px 25px -5px rgba(6, 182, 212, 0.3)'
                }}
              >
                <span className="flex items-center gap-2">
                  Initialize AI Training
                  <span className="animate-bounce">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full relative z-10 bg-gradient-to-b from-slate-900 to-slate-800">
        <div>
          <section className="flex items-center justify-center -mt-36">
            <div className="relative">
              <img
                src={HERO_IMG}
                alt="AI Interface"
                className="w-[80vw] rounded-2xl shadow-2xl shadow-indigo-500/20 animate-hologram-flicker border border-indigo-500/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent rounded-2xl" />
            </div>
          </section>
        </div>

        <div className="w-full min-h-full bg-gradient-to-b from-slate-800 to-slate-900 mt-10 relative">
          {/* Matrix rain effect */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute animate-matrix-rain text-green-400 text-xs font-mono" style={{left: '10%', animationDelay: '0s'}}>01001010</div>
            <div className="absolute animate-matrix-rain text-cyan-400 text-xs font-mono" style={{left: '30%', animationDelay: '2s'}}>11010110</div>
            <div className="absolute animate-matrix-rain text-purple-400 text-xs font-mono" style={{left: '50%', animationDelay: '4s'}}>10110101</div>
            <div className="absolute animate-matrix-rain text-indigo-400 text-xs font-mono" style={{left: '70%', animationDelay: '6s'}}>01110010</div>
            <div className="absolute animate-matrix-rain text-blue-400 text-xs font-mono" style={{left: '90%', animationDelay: '8s'}}>11001001</div>
          </div>
          <div className="container mx-auto px-4 pt-10 pb-20 relative z-10">
            <section className="mt-5">
              <h2 className="text-3xl font-medium text-center mb-4 text-slate-100">
                Neural Network Features
              </h2>
              <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                Powered by advanced AI algorithms to revolutionize your interview preparation
              </p>

              <div className="flex flex-col items-center gap-8">
                {/* First 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature, index) => (
                    <div
                      key={feature.id}
                      className="ai-card hover:scale-105 transform transition-all duration-500"
                      style={{animationDelay: `${index * 0.2}s`}}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 animate-neural-pulse">
                        <span className="text-white text-xl">🧠</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-slate-200">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-t-xl opacity-60"></div>
                    </div>
                  ))}
                </div>

                {/* Remaining 2 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {APP_FEATURES.slice(3).map((feature, index) => (
                    <div
                      key={feature.id}
                      className="ai-card hover:scale-105 transform transition-all duration-500"
                      style={{animationDelay: `${(index + 3) * 0.2}s`}}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 animate-quantum-shift">
                        <span className="text-white text-xl">⚡</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-slate-200">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-t-xl opacity-60"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="text-sm bg-gradient-to-r from-slate-900 to-slate-800 text-slate-400 text-center p-8 border-t border-slate-700/50">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="animate-pulse">🤖</span>
            <span>Powered by AI Neural Networks</span>
            <span className="animate-pulse">⚡</span>
          </div>
          <p className="text-xs opacity-60">Built with precision, designed for excellence</p>
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
