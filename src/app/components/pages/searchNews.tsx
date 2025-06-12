import { getNews } from '@/app/api/news'
import { NewsApiResponse } from '@/app/types'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import BasicInput from '../core/Input'
import HeadlinesComponent from './HeadlinesComponent'
import { Button } from 'antd'
import BasicButton from '../core/Button'

const NewsData = ({ data }: { data: NewsApiResponse }) => {
  if (!data) return null
  const { articles } = data
  console.log(articles)
  return articles?.map((item, idx) => <HeadlinesComponent item={item} key={idx} />)
}

const News = ({ data, isLoading }: { data: NewsApiResponse; isLoading: boolean }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-5'>
      {isLoading ? <div className='col-span-4 text-center'>Loading...</div> : <NewsData data={data} />}
    </div>
  )
}

const InputSearch = ({ setSearch }: { setSearch: (value: string) => void }) => {
  return (
    <div className='p-4 md:p-6 flex flex-col justify-center gap-2 text-center mx-auto'>
      <span>Search our latest news here</span>
      <BasicInput
        placeholder='search news...'
        className='!bg-transparent !rounded-2xl !text-white h-10 w-full'
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  )
}

const SearchNews = () => {
  const [search, setSearch] = useState('us')
  const [pageSize, setPageSize] = useState(8)

  const queryParams = {
    q: search,
    pageSize: pageSize,
  }

  const { data, refetch, isLoading } = useQuery({
    queryKey: ['news', queryParams],
    queryFn: () => getNews(queryParams),
    enabled: !!search,
  })

  const loadMore = async () => {
    await setPageSize(prev => prev + 8)
    refetch()
  }

  return (
    <div className='flex flex-col gap-2'>
      {/* <SectionHeader /> */}
      <InputSearch setSearch={setSearch} />
      <News data={data} isLoading={isLoading} />
      <div className='flex justify-center items-center p-4'>
        <BasicButton loading={isLoading} onClick={() => loadMore()}>
          {isLoading ? 'Loading...' : 'Load More'}
        </BasicButton>
      </div>
    </div>
  )
}

export default SearchNews
