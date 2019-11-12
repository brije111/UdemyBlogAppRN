import React from 'react';
import BlogPost from '../interface/BlogPost';

export interface DataType {
    blogPosts:BlogPost[];
    addBlogPost:()=>void;
}

const data:DataType = {
    blogPosts:[],
    addBlogPost:undefined
}

export const BlogContext = React.createContext(data);

// export const BlogProvider = ({children}) => {
//     return <BlogContext.Provider value={'data'}>
//         {children}
//     </BlogContext.Provider>
// };