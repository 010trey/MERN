import React, { useState } from 'react';

const CreateCourseForm = ({formHandler,setCourse,course}) => {


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create a Course
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={(e) => formHandler(e, course)}
                        >
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Title
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        setCourse({
                                            ...course,
                                            title: e.target.value,
                                        })
                                    }
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Course Title"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Date(s)
                                </label>
                                {/* Allow input of multiple dates */}
                                <input
                                    type="datetime-local"
                                    className="datetime-input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Date and Time"
                                    onChange={(e) =>
                                        setCourse({
                                            ...course,
                                            dates: e.target.value, // Set the date and time as a string
                                        })
                                    }
                                    required
/>
                                {/* You can add more date input fields if needed */}
                            </div>
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Price
                                </label>
                                <input
                                    type="number"
                                    onChange={(e) =>
                                        setCourse({
                                            ...course,
                                            price: e.target.value,
                                        })
                                    }
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Price"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Class Grade
                                </label>
                                <select
                                    onChange={(e) =>
                                        setCourse({
                                            ...course,
                                            classGrade: e.target.value,
                                        })
                                    }
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                >
                                    <option value="Sixième">Sixième</option>
                                    <option value="Cinquième">Cinquième</option>
                                    <option value="Quatrième">Quatrième</option>
                                    <option value="Troisième">Troisième</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Create Course
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateCourseForm;