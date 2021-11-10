import React from 'react'
import "./post.css"
export default function Post() {
    return (
        <div className="post">
            <img
            className="postImg"
            src="https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8="
            alt="image"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Node</span>
                    <span className="postCat">FSD</span>
                </div>
                <span className="postTitle">
                    Node is browser less java script platform
                </span>
                <span className="postDate"  >5hrs</span>
                <hr/>
            </div>
            <p className="postDesc">
            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.
            </p>
        </div>
    )
}
