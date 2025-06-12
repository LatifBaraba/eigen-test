import { getHeadlines } from '@/app/api/news'
import { NewsApiResponse } from '@/app/types'
import { dataTagErrorSymbol, useQuery } from '@tanstack/react-query'
import React, { Suspense } from 'react'
import HeadlinesComponent from './HeadlinesComponent'

const SectionHeader = () => {
    return (
        <div className='w-full border-b-2 pb-4 px-5'>
            <h2 className='text-2xl font-semibold'>Top Headlines</h2>
        </div>
    )
}

const HeadlinesData = (data: any) => {
    if (!data) return null

    const { articles } = data.data as NewsApiResponse
    console.log(articles)
    return articles?.map(item => <HeadlinesComponent item={item} key={item.title} />)
}

const Headlines = () => {
    const { data: headlines, isLoading: isLoadingHeadlines } = useQuery<NewsApiResponse, Error>({
        queryKey: ['headlines'],
        queryFn: getHeadlines,
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-5'>
            {!isLoadingHeadlines && <HeadlinesData data={headlines} />}
        </div>
    )
}

const TopNews = () => {
    return (
        <div className='flex flex-col gap-2'>
            <SectionHeader />
            <Headlines />
        </div>
    )
}

export default TopNews
