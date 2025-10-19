import {config} from 'dotenv';
import {ChatGoogleGenerativeAI} from '@langchain/google-genai'
import {PromptTemplate} from'@langchain/core/prompts';

config();

const model = new ChatGoogleGenerativeAI({
    model : "gemini-2.0-flash",
    apiKey: process.env.GEMINI_API_KEY, 
})


const promptTemplate = PromptTemplate.fromTemplate(`
    explain the {topic} in very simple way lke ELI5,
    make sure toinclude thye code concepts and avod unnecessary jargon.
    make the answer as concide as possible.`)


    promptTemplate.pipe(model).invoke({topic:"express"}).then(response=>{
        console.log(response);
    })
