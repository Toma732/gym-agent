'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function GapAnalysis() {
  const [goalAnalysis, setGoalAnalysis] = useState<unknown>(null)
  const [currentAnalysis, setCurrentAnalysis] = useState<unknown>(null)
  const [gapAnalysis, setGapAnalysis] = useState<unknown>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [workoutPlan, setWorkoutPlan] = useState<unknown>(null)
  const router = useRouter()

  useEffect(() => {
    const goal = localStorage.getItem('goalAnalysis')
    const current = localStorage.getItem('currentAnalysis')
    
    if (!goal || !current) {
      router.push('/')
      return
    }
    
    setGoalAnalysis(JSON.parse(goal))
    setCurrentAnalysis(JSON.parse(current))
    
    // Auto-generate gap analysis
    generateGapAnalysis(JSON.parse(goal), JSON.parse(current))
  }, [router])

  const generateGapAnalysis = async (goal: unknown, current: unknown) => {
    setIsGenerating(true)
    
    try {
      const response = await fetch('/api/generate-gap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal, current })
      })

      const data = await response.json()
      setGapAnalysis(data.gap)
    } catch (error) {
      console.error('Gap analysis failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const generateWorkoutPlan = async () => {
    if (!gapAnalysis) return
    
    setIsGenerating(true)
    
    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          gap: gapAnalysis,
          frequency: 4 // Default to 4x per week
        })
      })

      const data = await response.json()
      setWorkoutPlan(data.plan)
    } catch (error) {
      console.error('Plan generation failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  if (!goalAnalysis || !currentAnalysis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Your Transformation Path 🎯</h1>
          <p className="text-gray-300 text-lg">
            Here&apos;s what you need to work on to reach your goal
          </p>
        </div>

        {/* Gap Analysis */}
        {isGenerating && !gapAnalysis ? (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl border border-white/20 text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="animate-spin h-12 w-12 text-purple-400" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
            <p className="text-white text-xl">Analyzing the gap...</p>
          </div>
        ) : gapAnalysis ? (
          <>
            {/* Gap Details */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">What You Need to Develop</h2>
              
              {(gapAnalysis as {priorities?: unknown[]}).priorities && (gapAnalysis as {priorities: unknown[]}).priorities.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    {((gapAnalysis as {priorities: unknown[]}).priorities as Record<string, unknown>[]).map((priority: Record<string, unknown>, index: number) => (
                      <div key={index} className="bg-purple-500/20 rounded-lg p-4">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {priority.area}
                        </h3>
                        <p className="text-gray-300 text-sm mb-2">{priority.description}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-purple-300 font-medium">Priority:</span>
                          <div className="flex-1 bg-white/10 rounded-full h-2">
                            <div 
                              className="bg-purple-500 h-2 rounded-full"
                              style={{ width: `${priority.priorityLevel}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {(gapAnalysis as {summary?: string}).summary && (
                    <div className="mt-6 bg-purple-500/10 rounded-lg p-4 border-l-4 border-purple-500">
                      <p className="text-white">{(gapAnalysis as {summary: string}).summary}</p>
                    </div>
                  )}
                </>
              ) : (gapAnalysis as {raw?: string}).raw ? (
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {(gapAnalysis as {raw: string}).raw}
                  </p>
                </div>
              ) : (
                <div className="text-gray-300">
                  <p>{JSON.stringify(gapAnalysis, null, 2)}</p>
                </div>
              )}
            </div>

            {/* Generate Plan Button */}
            {!workoutPlan && (
              <button
                onClick={generateWorkoutPlan}
                disabled={isGenerating}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed mb-8"
              >
                {isGenerating ? 'Generating your plan...' : 'Generate My Workout Plan →'}
              </button>
            )}

            {/* Workout Plan */}
            {workoutPlan && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Your Personalized Workout Plan</h2>
                
                <div className="space-y-6">
                  {((workoutPlan as {weeklyPlan?: unknown[]})?.weeklyPlan as Record<string, unknown>[] | undefined)?.map((day: Record<string, unknown>, index: number) => (
                    <div key={index} className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                        Day {index + 1}: {day.focus}
                      </h3>
                      
                      <div className="space-y-3">
                        {((day as {exercises?: unknown[]})?.exercises as Record<string, unknown>[] | undefined)?.map((exercise: Record<string, unknown>, exIndex: number) => (
                          <div key={exIndex} className="bg-white/5 rounded p-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-white font-medium">{exercise.name}</p>
                                <p className="text-gray-400 text-sm">{exercise.targetMuscle}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-purple-300 text-sm">{exercise.sets} sets × {exercise.reps} reps</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {(workoutPlan as {notes?: string}).notes && (
                  <div className="mt-6 bg-purple-500/20 rounded-lg p-4">
                    <p className="text-gray-300 text-sm">{(workoutPlan as {notes: string}).notes}</p>
                  </div>
                )}
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  )
}
