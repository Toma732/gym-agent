import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request: NextRequest) {
  try {
    const { goal, current } = await request.json()

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are a professional fitness coach analyzing the gap between a user\'s current physique and their goal physique.'
        },
        {
          role: 'user',
          content: `Compare these two physique analyses and identify the key gaps:

**GOAL PHYSIQUE:**
${JSON.stringify(goal.analysis, null, 2)}

**CURRENT PHYSIQUE:**
${JSON.stringify(current.analysis, null, 2)}

Provide a detailed gap analysis in JSON format:
{
  "priorities": [
    {
      "area": "Muscle group name",
      "description": "What needs to be developed",
      "priorityLevel": 80-100 for critical, 50-79 for important, <50 for minor
    }
  ],
  "summary": "2-3 sentences summarizing the transformation needed",
  "estimatedTimeframe": "Realistic timeframe (e.g., '12-18 months for significant change')"
}`
        }
      ],
      max_tokens: 1000
    })

    const analysisText = response.choices[0].message.content || ''
    
    let gap
    try {
      gap = JSON.parse(analysisText)
    } catch {
      gap = {
        raw: analysisText,
        summary: analysisText
      }
    }

    return NextResponse.json({ 
      success: true, 
      gap,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Gap analysis error:', error)
    return NextResponse.json(
      { error: 'Failed to generate gap analysis', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
