import React from 'react'
import TrendingNewsSection from '../components/worldNews/trendingNewsSection'
import NewsCarousel from '../components/worldNews/NewsCarousel'

function News() {
  return (
    <div>
        <h1 className='border-b-4 border-black mx-20 text-3xl font-bold text-center my-5'>
        Latest News
        </h1>
        <NewsCarousel classname='h-auto'/>
        <TrendingNewsSection classname='h-[50svh]'/>
    </div>
  )
}

export default News