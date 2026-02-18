import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request: NextRequest) {
  try {
    const { photos } = await request.json()

    if (!photos || !photos.front) {
      return NextResponse.json({ error: 'Front photo is required' }, { status: 400 })
    }

    // Analyze the front photo (primary analysis)
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `You are analyzing a "current state" physique photo for a fitness tracking app.

Analyze this physique honestly and constructively:

1. **Shoulder Development** - Current width and development level
2. **Chest Development** - Current pec development
3. **Arm Development** - Current arm size and definition
4. **Core/Abs** - Current ab visibility and definition
5. **Body Composition** - Estimated body fat %, overall build (slim/average/muscular/bulky)
6. **Starting Point Assessment** - Where they are right now

Be honest but encouraging. Focus on potential, not just current state.

Format response as JSON:
{
  "shoulders": "description",
  "chest": "description",
  "arms": "description",
  "abs": "description",
  "bodyComp": "description",
  "bodyFatEstimate": "percentage range",
  "summary": "2-3 sentence honest but encouraging assessment"
}`
            },
            {
              type: 'image_url',
              image_url: {
                url: photos.front
              }
            }
          ]
        }
      ],
      max_tokens: 1000
    })

    const analysisText = response.choices[0].message.content || ''
    
    let analysis
    try {
      analysis = JSON.parse(analysisText)
    } catch {
      analysis = {
        raw: analysisText,
        summary: analysisText.slice(0, 300)
      }
    }

    return NextResponse.json({ 
      success: true, 
      analysis,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze photos', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
