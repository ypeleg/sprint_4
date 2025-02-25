

import {useEffect, useRef, useState} from "react"
import {useSelector} from "react-redux"
import {getEmptyGroup, updateBoard} from "../store/store"


import OpenAI from 'openai'
import { API_KEY } from '../services/secrets.js'



let openai = null

async function generatesText(prompt, temperature = 1.0, fallback = '', length = 128) {
    openai = new OpenAI({
        dangerouslyAllowBrowser: true,
        apiKey: API_KEY,
    })

    // console.log('PROMPT to GPT:\n', prompt)
    try {
        const response = await openai.chat.completions.create({
            // model: 'gpt-4o-mini',
            model: 'gpt-3.5-turbo',
            temperature,
            // max_tokens: 8192,
            max_tokens: length,
            messages: [{ role: 'user', content: prompt }],
        })
        let text = response.choices?.[0]?.message?.content?.trim() || ''
        while (text.length && !/[\w\d]/.test(text[0])) text = text.slice(1)
        while (text.length && !/[\w\d]/.test(text[text.length - 1])) {
            text = text.slice(0, -1)
        }
        if (!text) text = fallback
        else text = text.trim()

        // console.log('GPT RESPONSE:\n', text)
        return text
    } catch (error) {
        console.log('OpenAI API error:', error)
        console.error('OpenAI API error:', error)
        return fallback
    }
}


// import { useState } from 'react'
// import { useSelector } from 'react-redux'
// import OpenAI from 'openai'

// import { API_KEY } from '../services/secrets.js'
// import { getEmptyGroup, updateBoard } from '../store/store'

// Reuse or import your generateText function.
// It should match the one from your snippet:
async function generateText(prompt, temperature = 1.0, fallback = '', length = 128) {
    const openai = new OpenAI({
        dangerouslyAllowBrowser: true,
        apiKey: API_KEY,
    })

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            temperature,
            max_tokens: length,
            messages: [{ role: 'user', content: prompt }],
        })
        let text = response.choices?.[0]?.message?.content?.trim() || ''
        while (text.length && !/[\w\d]/.test(text[0])) text = text.slice(1)
        while (text.length && !/[\w\d]/.test(text[text.length - 1])) {
            text = text.slice(0, -1)
        }
        if (!text) text = fallback
        else text = text.trim()
        return text
    } catch (error) {
        console.error('OpenAI API error:', error)
        return fallback
    }
}

export function AddGPTGroup({ useDarkTextColors }) {
    const [isLoading, setIsLoading] = useState(false)
    const board = useSelector(state => state.boardModule.board)
    const user  = useSelector(state => state.userModule.user)

    async function onAddGroupByGPT() {
        try {
            setIsLoading(true)

            // --- Craft the prompt carefully so ChatGPT will return *only* valid JSON in the right shape ---
            const prompt = `
We have a Trello-like board named "${board?.title ?? 'Unknown'}".
It currently has these groups (by title): 
${board?.groups?.map(g => `- ${g.title}`).join('\n')}

Please create another group that fits well into this board's theme. 
Return ONLY valid JSON (no markdown, no extra text) in the exact shape below:

{
  "id": "g-randomUniqueId",
  "title": "Your group title here",
  "tasks": [
    {
      "id": "c-randomUniqueId",
      "title": "A task title",
      "description": "A task description",
      "labelIds": [],
      "members": []
    }
  ],
  "style": {
    "bgColor": "#ffffff"
  }
}
`
            // Generate text from ChatGPT
            const rawJson = await generateText(prompt, 1.0, 'NO_GROUP_GENERATED', 512)
            if (rawJson === 'NO_GROUP_GENERATED') {
                alert('Failed to generate a group. Try again later.')
                return
            }

            // Attempt to parse as JSON
            let generatedGroup
            try {
                generatedGroup = JSON.parse(rawJson)
            } catch (err) {
                console.error('Failed to parse ChatGPT JSON:', err)
                alert('GPT response was not valid JSON. Please try again.')
                return
            }

            // (Optional) Validate or fall back to an empty group structure
            if (!generatedGroup.id || !generatedGroup.title) {
                // If you want to fallback to an empty group, do so:
                // generatedGroup = getEmptyGroup()
                alert('GPT response is missing required fields. Please try again.')
                return
            }

            // Merge the new group onto the board
            const newBoard = {
                ...board,
                groups: [...board.groups, generatedGroup]
            }

            // Add a new activity entry for this creation
            const newActivity = {
                createdAt: Date.now(),
                byMember: { ...user },
                group: { id: generatedGroup.id, title: generatedGroup.title }
            }
            newBoard.activities = [newActivity, ...newBoard.activities]

            // Save board
            await updateBoard(newBoard)

        } catch (error) {
            console.error('Error while adding GPT group:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="add-group">
            <button
                onClick={onAddGroupByGPT}
                className="add-group-btn"
                style={{
                    background: !useDarkTextColors
                        ? 'rgba(0, 0, 0, 0.5)'
                        : 'rgba(255, 255, 255, 0.5)',
                    color: !useDarkTextColors ? 'white' : '#172b4d'
                }}
                disabled={isLoading}
            >
                {isLoading ? 'Generating...' : 'Add GPT-Generated List'}
            </button>
        </div>
    )
}

export function AddGroup({useDarkTextColors}) {
    const [showForm, setForm] = useState(false)
    const [group, setGroup] = useState(getEmptyGroup())
    const elTextArea  = useRef()
    const board = useSelector(state => state.boardModule.board)
    const user  =  useSelector(state => state.userModule.user)
    function handleChange({target}) {

        const {value, name: field} = target
        console.log(value)
        setGroup(prevGroup => {
            return {...prevGroup, [field]: value}
        })
    }
    useEffect(()=>{
        if(showForm && elTextArea.current    ){
            elTextArea?.current?.focus()
            elTextArea?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
         async function handleKey(ev){
            
            if(ev.key === "Enter"&&showForm){
                ev.preventDefault()
                
               
                await onSubmit(ev)
            }
        }
        window.addEventListener("keydown",handleKey)
        return ()=>{
            window.removeEventListener("keydown",handleKey)
        } 
    },[group])


    async function onSubmit(ev) {
    
       if(!group.title){
        setForm(false)
        return
       }
       
        const copyBoard = {...board,groups:[...board.groups,group]}
        const newActivity = {createdAt:Date.now(),byMember:{...user},group:{id:group.id,title:group.title}}
        copyBoard.activities = [newActivity,...copyBoard.activities]
        setGroup(getEmptyGroup())
        await updateBoard(copyBoard)
    }
    console.log(group)
    return (
        <div className="add-group">
            {(!showForm) ? <button onClick={() => setForm(true)} className="add-group-btn" style={{
                                            background: (!useDarkTextColors? 'rgba(0, 0, 0, 0.5)': 'rgba(255, 255, 255, 0.5)'),
                                            color: (!useDarkTextColors? 'white':'#172b4d')
                                            }}>
                    <span className="plus"><i class="fa-regular fa-plus"></i></span>
                    Add another list
                </button> :
                <div className="add-task-form add-group-form">
                    <textarea ref={elTextArea} autoFocus onChange={handleChange} value={group.title} placeholder="Enter a title or paste a link" className="task-title" name="title" id="title"></textarea>
                    <div>
                        <button onClick={(ev) =>{onSubmit(ev); setForm(false)}} className="add-card-btn extra" >Add list</button>
                        <button onClick={() => setForm(false)} className="cancel-btn" type="button">X</button>
                    </div>
                </div>}
        </div>
    )
}



