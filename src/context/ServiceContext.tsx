import { FC, ReactNode, createContext, useState } from "react";
import { BaseResponseModel } from "../model/BaseResponseModel";


type ServiceContextType = {
    posts?: BaseResponseModel
    fetchPosts: () => void
    fetchMorePosts: () => void
}

const ServiceContext = createContext<ServiceContextType>({} as ServiceContextType)

interface ServiceProviderProps {
    children: ReactNode;
}

const ServiceProvider: FC<ServiceProviderProps> = ({ children }) => {

    const [posts, setPosts] = useState<BaseResponseModel>();
    const [page, setPage] = useState<number>(1);

    const fetchPosts = async () => {
        await fetch('https://www.lenasoftware.com/api/v1/en/maestro/1?page=1&count=10')
            .then(async (response) => {
                const data: BaseResponseModel = await response.json()
                setPosts(data)
            }).catch(error => console.log(error))
    }

    const fetchMorePosts = async () => {
        await fetch('https://www.lenasoftware.com/api/v1/en/maestro/1?page=' + (page + 1) + '&count=10')
            .then(async (response) => {
                const data: BaseResponseModel = await response.json()
                data.result = [...posts!.result, ...data.result]
                setPosts(data)
            }).catch(error => console.log(error))
        setPage(page + 1)
    }

    return (
        <ServiceContext.Provider
            value={{
                fetchPosts,
                posts,
                fetchMorePosts
            }}
        >
            {children}
        </ServiceContext.Provider>
    )
}

export { ServiceContext, ServiceProvider }
