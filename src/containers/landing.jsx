import React, { useEffect } from 'react'
import axios from 'axios'

import Sidebar from '../components/sidebar'
import Header from '../components/header'
import Realtors from '../components/realtors'
import Features from '../components/features'
import Story from '../components/story'
import Homes from '../components/homes'
import Gallery from '../components/gallery'
import Footer from '../components/footer'

function Landing() {

    const fetchEstates = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/api/v1/estate')
            console.log(response)
        } catch {
            console.log('Error fetching estates')
        }
    }

    useEffect(() => {
        fetchEstates()
    }, [])

    return (
        <div className="container">
            <Sidebar />
            <Header />
            <Realtors />
            <Features />
            <Story />
            <Homes />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Landing
