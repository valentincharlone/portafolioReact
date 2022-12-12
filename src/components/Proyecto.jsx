import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { works } from '../data/Work'

const Proyecto = () => {

    const params = useParams()
    const [proyect, setProyect] = useState('')

    useEffect(() => {
        let proyect = works.filter(work => work.id === params.id)
        setProyect(proyect[0])
    }, [])

    return (
        <div className='page'>
            <h1 className='heading'>{params.id}</h1>
            <h2><a href={proyect.url} target="_blank">Go to site</a></h2>
        </div>
    )
}

export default Proyecto