'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [goalImage, setGoalImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const router = useRouter()

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setGoalImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeGoal = async () => {
    if (!goalImage) return

    setIsAnalyzing(true)
    
    try {
      const response = await fetch('/api/analyze-goal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: goalImage })
      })

      const data = await response.json()
      
      // Store the analysis and navigate to next step
      localStorage.setItem('goalAnalysis', JSON.stringify(data))
      router.push('/starting-photos')
      
    } catch (error) {
      console.error('Analysis failed:', error)
      alert('Failed to analyze image. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">GymAgent 🏋️</h1>
          <p className="text-gray-300 text-lg">
            Upload your goal physique and let AI create your personalized workout plan
          </p>
        </div>

        {/* Upload Area */}
        <div className="space-y-6">
          
          {/* Upload Box */}
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="goal-image"
            />
            <label
              htmlFor="goal-image"
              className="block w-full h-64 border-2 border-dashed border-white/30 rounded-xl hover:border-purple-400 transition cursor-pointer overflow-hidden"
            >
              {goalImage ? (
                <img 
                  src={goalImage} 
                  alt="Goal physique" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-300">
                  <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-lg font-medium">Upload your goal body photo</p>
                  <p className="text-sm text-gray-400 mt-2">Click or drag and drop</p>
                </div>
              )}
            </label>
          </div>

          {/* Analyze Button */}
          {goalImage && (
            <button
              onClick={analyzeGoal}
              disabled={isAnalyzing}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Analyzing physique...
                </span>
              ) : (
                'Analyze Goal Body →'
              )}
            </button>
          )}

          {/* Info */}
          <div className="bg-purple-500/20 rounded-lg p-4 text-sm text-gray-300">
            <p className="font-medium text-white mb-2">💡 Tip:</p>
            <p>Upload a clear photo of your goal physique (e.g., a fitness model, athlete, or influencer). AI will analyze muscle development, proportions, and body composition.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
