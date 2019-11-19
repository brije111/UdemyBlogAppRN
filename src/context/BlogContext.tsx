import React from 'react';
import BlogPost from '../interface/Contact';
import { Action } from '../../App';
import Contact from '../interface/Contact';

export interface DataType {
    contacts: Contact[];
    getContacts?: () => {};
    deleteContact?: (id: string) => {};
}

const data: DataType = {
    contacts: []
}

export const BlogContext = React.createContext<DataType>(data);

// export const BlogProvider = ({children}) => {
//     return <BlogContext.Provider value={'data'}>
//         {children}
//     </BlogContext.Provider>
// };