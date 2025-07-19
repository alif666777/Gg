'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [generatedFuture, setGeneratedFuture] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const seriousRandomTexts = [
    "Your future holds significant challenges in the field of renewable energy management, where you will pioneer innovative solutions for sustainable urban development while maintaining work-life balance through structured meditation practices.",
    "You are destined to become a leading expert in artificial intelligence ethics, contributing to international policy frameworks while simultaneously developing educational programs for underprivileged communities in developing nations.",
    "Your path leads to groundbreaking research in marine biology, specifically focusing on coral reef restoration techniques that will revolutionize ocean conservation efforts and influence global environmental protection policies.",
    "You will establish a successful consulting firm specializing in organizational psychology, helping Fortune 500 companies improve employee wellness while maintaining profitability and ethical business practices.",
    "Your future involves becoming a published author and academic researcher in cognitive neuroscience, with your work focusing on memory enhancement techniques for elderly populations and dementia prevention.",
    "You are meant to develop innovative agricultural technologies that will increase crop yields in arid regions, directly contributing to food security solutions for millions of people worldwide.",
    "Your career will evolve into becoming a diplomatic mediator specializing in international trade negotiations, with expertise in resolving complex economic disputes between emerging market economies.",
    "You will pioneer new methodologies in educational technology, creating adaptive learning systems that personalize education for students with diverse learning abilities and cultural backgrounds.",
    "Your future includes leading a nonprofit organization focused on mental health advocacy, developing community-based support systems that reduce stigma and improve access to psychological services.",
    "You are destined to become a specialist in space exploration logistics, contributing to mission planning for Mars colonization while advancing sustainable life support systems for long-term space travel."
  ];

  const handleGenerateFuture = () => {
    if (!name.trim()) {
      return;
    }

    setIsGenerating(true);
    setShowResult(false);

    setTimeout(() => {
      const randomText = seriousRandomTexts[Math.floor(Math.random() * seriousRandomTexts.length)];
      setGeneratedFuture(randomText);
      setIsGenerating(false);
      setShowResult(true);
    }, 2000);
  };

  const handleTryAgain = () => {
    setShowResult(false);
    setGeneratedFuture('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/70 via-pink-500/60 to-orange-400/70"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block animate-bounce mb-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl text-purple-600">✨</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transform hover:scale-105 transition-transform">
              ✨ Future Text Generator ✨
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Enter your name and discover your serious future path!
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/30">
            <div className="mb-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What's your name? 🌟"
                className="px-8 py-4 rounded-full text-lg border-0 focus:outline-none focus:ring-4 focus:ring-yellow-300 text-gray-800 text-center min-w-80 shadow-lg"
                disabled={isGenerating}
              />
            </div>
            
            <button 
              onClick={handleGenerateFuture}
              disabled={isGenerating}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white text-xl font-bold py-4 px-12 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 whitespace-nowrap cursor-pointer disabled:opacity-70 disabled:transform-none"
            >
              {isGenerating ? (
                <>
                  <span className="inline-block animate-spin mr-3">🔮</span>
                  Generating your future...
                </>
              ) : (
                <>
                  <span className="mr-3">✨</span>
                  🎯 Generate My Path
                </>
              )}
            </button>
          </div>
          
          <div className="flex justify-center space-x-4">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </section>

      {/* Future Result Modal */}
      {showResult && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-3xl w-full mx-4 shadow-2xl transform scale-100 animate-pulse border-4 border-yellow-300">
            <div className="text-center mb-6">
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-white text-2xl">👤</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce delay-100">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce delay-200">
                  <span className="text-white text-2xl">🚀</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">🎉 {name}&apos;s Future Path</h3>
              <p className="text-gray-600 text-lg">Your serious journey awaits...</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border-l-8 border-purple-400">
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                {generatedFuture}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleTryAgain}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105"
              >
                <span className="mr-2">🔄</span>
                Try Another Path
              </button>
              <button
                onClick={() => setShowResult(false)}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105"
              >
                <span className="mr-2">✨</span>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fun Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="w-8 h-8 bg-pink-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-8 h-8 bg-purple-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🎪 How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to discover your professional future!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform shadow-2xl">
                <span className="text-white text-3xl">📝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Enter Your Name 📝</h3>
              <p className="text-gray-600 leading-relaxed">Just type in your name and let the magic begin!</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform shadow-2xl">
                <span className="text-white text-3xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">2. AI Processing 🤖</h3>
              <p className="text-gray-600 leading-relaxed">Our advanced system generates your unique path!</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform shadow-2xl">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Get Results 🎯</h3>
              <p className="text-gray-600 leading-relaxed">Discover your serious professional future!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex space-x-2 mb-4">
              <div className="w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-white rounded-full animate-bounce delay-100"></div>
              <div className="w-6 h-6 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Future Text Generator
            </h3>
            <p className="text-white/90 text-lg">Discover your professional destiny! ✨</p>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/80 text-sm">
              🌟 2024 Future Text Generator • Made with lots of colors and creativity 🎨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}