import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(request: NextRequest) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  try {
    const { image } = await request.json()

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 })
    }

    // Call OpenAI Vision API
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `You are analyzing a physique photo for a fitness goal-setting app.

Analyze this physique in detail and provide a structured response covering:

1. **Shoulder Development** - Width, deltoid development, proportions
2. **Chest Development** - Pec thickness, upper/lower chest, overall volume
3. **Arm Development** - Biceps, triceps, forearms, estimated size
4. **Core/Abs** - Definition, thickness, visibility, estimated body fat %
5. **Body Composition** - Overall lean/muscular/bulk assessment
6. **V-Taper** - Shoulder-to-waist ratio
7. **Notable Features** - Any standout muscle groups or characteristics

Be specific, descriptive, and motivating. This will be used to set concrete fitness goals.

Format your response as JSON with these keys:
{
  "shoulders": "description",
  "chest": "description",
  "arms": "description",
  "abs": "description",
  "bodyComp": "description",
  "vTaper": "description",
  "notableFeatures": "description",
  "summary": "2-3 sentence overall assessment"
}`
            },
            {
              type: 'image_url',
              image_url: {
                url: image
              }
            }
          ]
        }
      ],
      max_tokens: 1000
    })

    const analysisText = response.choices[0].message.content || ''
    
    // Try to parse as JSON, fallback to structured text
    let analysis
    try {
      analysis = JSON.parse(analysisText)
    } catch {
      // Try extracting JSON from markdown code blocks
      const jsonMatch = analysisText.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/)
      if (jsonMatch) {
        try {
          analysis = JSON.parse(jsonMatch[1])
        } catch {
          analysis = {
            raw: analysisText,
            summary: analysisText.slice(0, 300) + '...'
          }
        }
      } else {
        analysis = {
          raw: analysisText,
          summary: analysisText.slice(0, 300) + '...'
        }
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
      { error: 'Failed to analyze image', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
