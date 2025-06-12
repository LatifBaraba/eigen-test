'use client'

import TopNews from './components/pages/topNews'
import SearchNews from './components/pages/searchNews'

export default function Home() {
  return (
    <div className=''>
      <div className='flex flex-col gap-6 justify-center'>
        {/* Seach News */}
        <SearchNews />
        {/* Top News */}
        <TopNews />
      </div>
    </div>
  )
}
