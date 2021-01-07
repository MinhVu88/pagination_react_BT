import React from 'react';

export const Pagination = ({postsPerPage, totalPosts, turnPage}) => {
    const pages = [];

    /* For example:

        1 page  : 10 posts
        ? pages : 100 posts
    
        -> The last page = the total number of pages = the total number of posts / the number of posts per page
    */ 
    const lastPage = Math.ceil(totalPosts / postsPerPage);

    for(let page = 1; page <= lastPage; page++) pages.push(page);

    return (
        <nav>
            <ul className='pagination'>
                {pages.map(page => 
                                    <li key={page} className='page-item'>
                                        <a onClick={() => turnPage(page)} href='!#' className='page-link'>{page}</a>
                                    </li>)}
            </ul>
        </nav>
    );
};
