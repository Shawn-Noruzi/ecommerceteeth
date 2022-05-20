import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Login({ users }) {
  const [isEmpty, setIsEmpty] = useState(false);
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (userData) => {
    return userService
      .login(userData)
      .then(() => {
        console.log("Registration Success", userData);
        // router.push('login');
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen bg-gray-100 my-3">
        <div className="px-8 py-6  text-left bg-white shadow-lg w-96 h-full ">
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
            {/* email */}
            <div className="mt-4 h-64">
              <div>
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("email", {
                    required: true,
                  })}
                  placeholder="bluebill1049@hotmail.com"
                  type="email"
                />
                {errors.email && (
                  <span className="text-xs tracking-wide text-red-600">
                    Email field is required
                  </span>
                )}
              </div>

              <div className="flex items-baseline justify-between">
                <button onClick={() => signIn()}>Sign in</button>
              </div>
              <button
                className="items-center w-full flex justify-center px-3 py-4 mt-4 border-solid border-2 rounded-md"
                onClick={() =>
                  signIn("google", { callbackUrl: "http://localhost:3000/" })
                }
              >
                <img
                  alt="google icon"
                  src="/Assets/googleIcon.png"
                  className="w-7 mx-3"
                />{" "}
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-0 md:w-1/2 bg-blue-500"></div>
    </div>
  );
}

export const getStaticProps = async () => {
  // const users = await prisma.user.findMany()
  // console.log("users", users)
  // users.map((x) => {
  //   x.createdAt = Math.floor(x.createdAt / 1000);
  //   x.updatedAt = Math.floor(x.createdAt / 1000);
  //   return x;
  // });

  return { props: { noLayout: true } };
};
