import { GET_HEADLINES, GET_NEWS } from '../constant/news'
import axiosInstance from '../libs/axios'

export const getNews = async (queryParams: any) => {
    const response = await axiosInstance.get(GET_NEWS, {
        params: queryParams,
    })
    console.log(response?.data)
    return response?.data
}

export const getHeadlines = async () => {
    const response = await axiosInstance.get(GET_HEADLINES)
    console.log(response?.data)
    return response?.data
}
