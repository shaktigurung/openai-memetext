import type { NextApiRequest, NextApiResponse } from 'next'
import openai from '@/utils/openai'

type Data = {
    name: string
}

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'generate text for a meme and can you format the response as JSON with name properties as memeText' }],
        model: 'gpt-3.5-turbo',
    });

    const responseText = completion.choices[0].message.content;
    const responseObject = JSON.parse(responseText)
  
    res.status(200).json(responseObject)
}