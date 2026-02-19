'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function StartingPhotos() {
  const [goalAnalysis, setGoalAnalysis] = useState<unknown>(null)
  const [photos, setPhotos] = useState<{
    front: string | null
    flex: string | null
    back: string | null
  }>({
    front: null,
    flex: null,
    back: null
  })
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem('goalAnalysis')
    if (!stored) {
      router.push('/')
      return
    }
    setGoalAnalysis(JSON.parse(stored))
  }, [router])

  const handlePhotoUpload = (type: 'front' | 'flex' | 'back') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotos(prev => ({ ...prev, [type]: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeProgress = async () => {
    if (!photos.front || !photos.flex) {
      alert('Please upload at least front and flex photos')
      return
    }

    setIsAnalyzing(true)

    try {
      const response = await fetch('/api/analyze-current', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ photos })
      })

      const data = await response.json()
      
      // Store current analysis
      localStorage.setItem('currentAnalysis', JSON.stringify(data))
      router.push('/gap-analysis')
      
    } catch (error) {
      console.error('Analysis failed:', error)
      alert('Failed to analyze photos. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const PhotoUploadBox = ({ 
    type, 
    label, 
    required = false 
  }: { 
    type: 'front' | 'flex' | 'back'
    label: string
    required?: boolean
  }) => (
    <div className="space-y-2">
      <label className="block text-white font-medium">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload(type)}
        className="hidden"
        id={`photo-${type}`}
      />
      <label
        htmlFor={`photo-${type}`}
        className="block w-full h-48 border-2 border-dashed border-white/30 rounded-xl hover:border-purple-400 transition cursor-pointer overflow-hidden"
      >
        {photos[type] ? (
          <img 
            src={photos[type]!} 
            alt={label} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-300">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <p className="text-sm">Upload photo</p>
          </div>
        )}
      </label>
    </div>
  )

  if (!goalAnalysis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 py-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Your Starting Point 📸</h1>
          <p className="text-gray-300 text-lg">
            Upload photos of your current physique so we can track your progress
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          
          {/* Photo Upload Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <PhotoUploadBox type="front" label="Front (Relaxed)" required />
            <PhotoUploadBox type="flex" label="Front (Flexed)" required />
            <PhotoUploadBox type="back" label="Back" />
          </div>

          {/* Instructions */}
          <div className="bg-purple-500/20 rounded-lg p-4 mb-6 text-sm text-gray-300">
            <p className="font-medium text-white mb-2">📝 Photo Tips:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Good lighting (natural light works best)</li>
              <li>Stand straight, same distance from camera</li>
              <li>Wear fitted clothing or shirtless</li>
              <li>Take photos at the same time of day</li>
            </ul>
          </div>

          {/* Continue Button */}
          <button
            onClick={analyzeProgress}
            disabled={isAnalyzing || !photos.front || !photos.flex}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Analyzing your physique...
              </span>
            ) : (
              'Analyze My Current State →'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
