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
                        What are the different ways to manage a state in a React application?

                    </a>
                    <p className="mb-5 text-gray-700">
                    In React apps, there are more than five ways to handle the state. Let us briefly explore a few of them in this part.
                    <br />
                    1. URL : It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change.
                    <br />
                    2. Web Storage: The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.
Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.
We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.
<br />
3. The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form
<br />
4. Lifted State : The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.
<br />
5. Derived State: The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.
<br />

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
                        How does prototypical inheritance work?

                    </a>
                    <p className="mb-5 text-gray-700">
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
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
                       What is a unit test? Why should we write unit tests?
                    </a>
                    <p className="mb-5 text-gray-700">
                    Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.
<br />
<span className='font-bold'> How unit tests work:</span>
A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.


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
                        React vs. Angular vs. Vue?
                    </a>
                    <p className="mb-5 text-gray-700">
                    <span className='font-bold'>Angular vs React</span> <br />                
If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.

<br /> React vs Vue <br />
The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
<br /> Angular vs Vue <br />
In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.
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