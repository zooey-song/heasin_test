import React from 'react';

function App() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <img
              src="/path-to-your-logo.png"
              alt="AIS Logo"
              className="h-12"
            />
          </div>
          <h1 className="text-xl font-semibold text-center mb-6">
            AIS 경로예측
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2"
              >
                아이디
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              로그인
            </button>
            <div className="mt-4 text-center">
              <a
                href="/register"
                className="text-blue-600 hover:underline"
              >
                회원가입
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
