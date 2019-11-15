import React from 'react';
import BlogPost from '../interface/BlogPost';
import { Action } from '../../App';

export interface DataType {
    blogPosts: BlogPost[];
    dispatch?: React.Dispatch<Action>;
}

const data: DataType = {
    blogPosts:[]
}

export const BlogContext = React.createContext<DataType>(data);

// export const BlogProvider = ({children}) => {
//     return <BlogContext.Provider value={'data'}>
//         {children}
//     </BlogContext.Provider>
// };