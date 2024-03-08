"use client"
import React, { useState } from 'react'
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
import "./style.css";

export default function counterPage() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Counter App</h1>
            <div className="counterDiv">
                <h4>{counter}</h4>
            </div>
            <div className='buttonsDiv d-flex gap-3'>
                <button
                    onClick={() => setCounter(counter - 1)}
                    disabled={counter <= 0 ? true : false}
                >
                    <LuMinusCircle />
                </button>
                <button
                    onClick={() => setCounter(0)}
                    disabled={counter <= 0 ? true : false}
                >
                    <FaArrowRotateLeft />
                </button>
                <button
                    onClick={() => setCounter(counter + 1)}
                >
                    <FiPlusCircle />
                </button>
            </div>
        </div>
    )
}
