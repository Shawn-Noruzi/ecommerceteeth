import { useState } from "react";
import { useForm } from "react-hook-form";
export default function Login() {
  const [isEmpty, setIsEmpty] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6  text-left bg-white shadow-lg">
          <div className="flex justify-center">
            <img
              src="/apple-touch-icon.png"
              alt="beautiful bright smile logo"
              className="smileLogo"
            />
          </div>
          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>
          {/* form input */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("email")}
                  placeholder="bluebill1049@hotmail.com"
                  type="email"
                />
                <span className="text-xs tracking-wide text-red-600">
                  Email field is required{" "}
                </span>
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <input
                  type="submit"
                  placeholder="Login"
                  className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                />

                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-0 md:w-1/2 bg-blue-500"></div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: { noLayout: true },
  };
}
