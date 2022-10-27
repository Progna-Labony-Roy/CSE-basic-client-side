import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4 className='fst-italic text-info'>1.What is cors?</h4>
            <p>CORS” stands for Cross-Origin Resource Sharing. CORS is a protocol and security standard for browsers that helps to maintain the integrity of a website and secure it from unauthorized access.It enables JavaScripts running in browsers to connect to APIs and other web resources like fonts, and stylesheets from multiple different providers.</p>


            <h4 className='fst-italic mt-4 text-info'>2.Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>


            <h4 className='fst-italic mt-4 text-info'>3.How does the private route work?</h4>
            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>


            <h4 className='fst-italic mt-4 text-info'>4.What is Node? How does Node work?</h4>
            <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </div>
    );
};

export default Blog;