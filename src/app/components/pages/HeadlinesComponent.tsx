import React from 'react'
import { NewsArticle } from '@/app/types'
import { format } from 'date-fns'

interface HeadlinesComponentProps {
  item: NewsArticle
}

const HeadlinesComponent: React.FC<HeadlinesComponentProps> = ({ item }) => {
  return (
    <div className='relative p-4 border rounded-lg shadow-sm h-full flex flex-col hover:scale-95 transition duration-250 ease-in-out hover:bg-blue-950'>
      <a href={item?.url} target='_blank' rel='noopener noreferrer' className='block flex-grow'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-4'>
            {item.urlToImage ? (
              <div className='relative'>
                <img src={item.urlToImage} alt={item?.title || 'News image'} className='w-full h-40 object-cover rounded-md mb-2' />
                <a
                  className='absolute bottom-3 right-2 bg-white hover:bg-blue-200 hover:rounded-2xl px-2 border-2 border-white rounded-2xl'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='text-blue-500 text-xs font-semibold '>See News here</span>
                </a>
              </div>
            ) : (
              <img
                src='https://images.unsplash.com/photo-1600456899121-68eda5705257?q=80&w=2157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt={item?.title || 'No image'}
                className='w-full h-40 object-cover rounded-md mb-2'
              />
            )}
            <h3 className='text-lg font-semibold mb-1'>{item?.title}</h3>
            {item?.description && <span className='text-sm text-gray-400 break-words text-justify'>{item.description}</span>}
          </div>
          <a className='break-words hover:text-blue-700 text-xs mt-2' href={item.url} target='_blank' rel='noopener noreferrer'>
            {item.url}
          </a>
          <div className='mt-auto flex flex-col pt-4'>
            <span className='text-xs text-gray-300 truncate'>By {item?.author}</span>
            <span className='text-xs text-gray-400'>Published: {format(new Date(item?.publishedAt), 'dd MMMM yyyy')}</span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default HeadlinesComponent
