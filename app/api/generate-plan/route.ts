import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request: NextRequest) {
  try {
    const { gap, frequency = 4 } = await request.json()

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are a professional strength and conditioning coach creating personalized workout plans.'
        },
        {
          role: 'user',
          content: `Create a weekly workout plan for someone with these goals:

**GAP ANALYSIS:**
${JSON.stringify(gap, null, 2)}

**TRAINING FREQUENCY:** ${frequency}x per week

Create a balanced plan that prioritizes the identified gaps while maintaining overall development.

Respond in JSON format:
{
  "weeklyPlan": [
    {
      "focus": "Day focus (e.g., Upper Body Push)",
      "exercises": [
        {
          "name": "Exercise name",
          "targetMuscle": "Primary muscle(s)",
          "sets": "3-4",
          "reps": "8-12"
        }
      ]
    }
  ],
  "notes": "Key training principles and progression notes"
}`
        }
      ],
      max_tokens: 2000
    })

    const planText = response.choices[0].message.content || ''
    
    let plan
    try {
      plan = JSON.parse(planText)
    } catch {
      // Try extracting JSON from markdown code blocks
      const jsonMatch = planText.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/)
      if (jsonMatch) {
        try {
          plan = JSON.parse(jsonMatch[1])
        } catch {
          plan = {
            raw: planText,
            notes: planText,
            weeklyPlan: []
          }
        }
      } else {
        plan = {
          raw: planText,
          notes: planText,
          weeklyPlan: []
        }
      }
    }

    return NextResponse.json({ 
      success: true, 
      plan,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Plan generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate workout plan', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
