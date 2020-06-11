import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
        <div className="h-full py-65 bg-red-200">

            <hi className="text-6xl m-20">Home</hi>
            <Link to="/order">
            <div className="bg-blue-600 rouded-xl inline">Order Now</div>
            </Link>
        </div>
        </div>
    )
}
