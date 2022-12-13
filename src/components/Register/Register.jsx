import React from 'react'

const Register = () => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form className="mb-0 space-y-6">

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-start py-4">Name</label>
            <div>
              <input type="text" placeholder="Name" className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-start py-4">Email</label>
            <div>
              <input type="text" placeholder="Email" className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-start py-4">Username</label>
            <div>
              <input type="text" placeholder="Username" className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-start py-4">Password</label>
            <div>
              <input type="password" name="password" id="password" className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-start py-4">Confirm Password</label>
            <div>
              <input type="cfpassword" name="cfpassword" id="cfpassword" className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
            </div>
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 text-start py-4">Date of Birth</label>
            <input type="date" placeholder="Select date" className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
          </div>




          <div>
            <label className="block text-sm font-medium text-gray-700 text-start py-4">Gender</label>
            <div className='flex'>
              <div className='form-check'>
                <input type="radio" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' />
                <label className="form-check-label inline-block text-gray-800 px-2">
                  Male
                </label>
              </div>

              <div className='form-check'>
                <input type="radio" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' />
                <label className="form-check-label inline-block text-gray-800 px-2">
                  Female
                </label>
              </div>

              <div className='form-check'>
                <input type="radio" className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' />
                <label className="form-check-label inline-block text-gray-800 px-2">
                  Others
                </label>
              </div>
            </div>
          </div>

          {/*ion-datetime*/}



          <button className="focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400">Register</button>

        </form>
      </div>
    </div>
  )
}

export default Register
