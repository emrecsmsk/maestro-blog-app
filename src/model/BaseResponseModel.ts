import { Result } from "./PostModel"

export interface BaseResponseModel {
    totalCount: number
    result: Result[]
    message: any
    success: boolean
    exception: any
}