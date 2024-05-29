import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center my-12">
        <h1 className="text-5xl font-bold text-blue-600">
          Welcome to PayTM App
        </h1>
        <p className="text-xl mt-4 text-gray-700">
          Your one-stop solution for all payment and transaction needs
        </p>
      </header>

      <main className="text-center mt-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-green-600">Join Us</h2>
            <p className="text-lg text-gray-600">
              Become a part of our community. Sign up now!
            </p>
            <Link
              to="/signup"
              className="inline-block mt-4 px-6 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
            >
              Signup
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-blue-600">
              Already a Member?
            </h2>
            <p className="text-lg text-gray-600">
              Log in to your account to continue
            </p>
            <Link
              to="/signin"
              className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
              Signin
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              About PayTM App
            </h2>
            <p className="text-lg text-gray-600">
              Learn more about what we offer and how we can help you
            </p>
            <Link
              to="/about"
              className="inline-block mt-4 px-6 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600"
            >
              About
            </Link>
          </div>
        </div>
      </main>

      <footer className="text-center mt-12 border-t pt-6">
        <p className="text-gray-600">Developed by Mayank Tiwari</p>
      </footer>
    </div>
  );
};

export default HomePage;
