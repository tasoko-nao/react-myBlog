import { createContext, Dispatch, ReactNode, SetStateAction, useState, VFC } from "react"
import { Posts, PostType } from "../data/Data";


type PostContextType = {
    posts: Array<PostType>;
    setPosts: Dispatch<SetStateAction<Array<PostType>>>;
};
export const PostsContext = createContext<PostContextType>({} as PostContextType);

type Props = {
    children: ReactNode
}
export const PostProvider: VFC<Props> = (props) => {
    const { children } = props
    const [posts, setPosts] = useState<Array<PostType>>(Posts)
    return (
        <PostsContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostsContext.Provider>
    )
}