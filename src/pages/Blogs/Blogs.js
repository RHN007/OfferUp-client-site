import React from 'react';

const Blogs = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="p-8 bg-white border rounded shadow-sm">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            aria-label="Category"
                        >
                            weekend
                        </a>{' '}
                        <span className="text-gray-600">— 1 Feb 2020</span>
                    </p>
                    <a
                        href="/"
                        aria-label="Article"
                        title="Jingle Bells"
                        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Difference between SQL and NoSQL

                    </a>
                    <p className="mb-5 text-gray-700">
                        A SQL Database follows a table like structure which can have an
                        unlimited number of rows and every data present inside the database
                        is properly structured with Predefined Schemas, it is basically used
                        to manipulate Relational Databases Management Systems.

                        A NoSQL Database is a Distributed Database where the data is very
                        unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited
                        rows but it follows a Standard Schema Definition and can store all
                        sorts of data models with large distributed data in the form of
                        key-value pairs, graph databases, documents or wide-column stores.
                        Source:hackernoon.com
                    </p>
                    <div className="flex items-center">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Vasile Melinte
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-white border rounded shadow-sm">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            aria-label="Category"
                        >
                            weekend
                        </a>{' '}
                        <span className="text-gray-600">— 1 Feb 2020</span>
                    </p>
                    <a
                        href="/"
                        aria-label="Article"
                        title="Jingle Bells"
                        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        What is the difference between javascript and NodeJS?

                    </a>
                    <p className="mb-5 text-gray-700">
                        1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                        As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.
                        <br />
                        2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                        <br />
                        3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                        <br />
                        4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.
                        <br />
                        Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
                        <br />
                        5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.

                        Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.
                    </p>
                    <div className="flex items-center">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Vasile Melinte
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-white border rounded shadow-sm">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            aria-label="Category"
                        >
                            holidays
                        </a>{' '}
                        <span className="text-gray-600">— 15 Nov 2020</span>
                    </p>
                    <a
                        href="/"
                        aria-label="Article"
                        title="Happy new Year"
                        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        What is JWT, and how does it work?
                    </a>
                    <p className="mb-5 text-gray-700">
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        WTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.

                    </p>
                    <div className="flex items-center">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                John Doe
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-white border rounded shadow-sm">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            aria-label="Category"
                        >
                            programming
                        </a>{' '}
                        <span className="text-gray-600">— 28 Dec 2020</span>
                    </p>
                    <a
                        href="/"
                        aria-label="Article"
                        title="Why i love C++"
                        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        How does NodeJS handle multiple requests at the same time?
                    </a>
                    <p className="mb-5 text-gray-700">
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.


                    </p>
                    <div className="flex items-center">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Andrew Larkin
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;