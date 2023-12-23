import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({title,content})=> {
    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

BlogPost.propTypes={
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default BlogPost;