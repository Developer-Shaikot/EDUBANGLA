import React from 'react';
import { useNavigate } from 'react-router-dom';

const Course = () => {
    const navigate = useNavigate();
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                       
                        <div class="flex flex-col items-center pb-10">
                            <img class="w-24 h-24 mt-3 mb-3 rounded-full shadow-lg" src="https://res.cloudinary.com/hostingimagesservice/image/upload/v1674789496/eduBangla/images/default-class-avatar_ipetqv.jpg" alt="Bonnie image" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div class="flex mt-4 space-x-3 md:mt-6">

                                <button onClick={()=>navigate("/view-course")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">View Courses</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                       
                        <div class="flex flex-col items-center pb-10">
                            <img class="w-24 h-24 mt-3 mb-3 rounded-full shadow-lg" src="https://res.cloudinary.com/hostingimagesservice/image/upload/v1674789496/eduBangla/images/default-class-avatar_ipetqv.jpg" alt="Bonnie image" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div class="flex mt-4 space-x-3 md:mt-6">
                                
                            <button onClick={()=>navigate("/view-course")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">View Courses</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        
                        <div class="flex flex-col items-center pb-10">
                            <img class="w-24 h-24 mt-3 mb-3 rounded-full shadow-lg" src="https://res.cloudinary.com/hostingimagesservice/image/upload/v1674789496/eduBangla/images/default-class-avatar_ipetqv.jpg" alt="Bonnie image" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div class="flex mt-4 space-x-3 md:mt-6">
                           
                            <button onClick={()=>navigate("/view-course")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">View Courses</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Course;