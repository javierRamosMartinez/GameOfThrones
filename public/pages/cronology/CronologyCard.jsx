import React from 'react'
import { Link } from 'react-router-dom'
import "./CronologyCard.css"

export default function CronologyCard({ characters }) {
    return (
        <>
            {/* <div className='barra'></div>
            <div className='encabezadoDiv'><h1 className='encabezado'>0</h1></div> */}
            <div className='containerCronology'>
                {characters.map((elemento, i) =>
                    <div key={i} className={i % 2 === 0 ? 'b-cronology-impar' : 'b-cronology-par'} >
                        <p>{elemento.age}</p>
                        <p>{elemento.name}</p>
                        <div className='containerImgCronology'>
                            <img src={elemento.image} />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
