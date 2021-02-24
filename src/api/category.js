import http from './http'

export const getCategoryList = () => {
    return http.get('/catelist?istree=1')
}