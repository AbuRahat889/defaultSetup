"use client";

import logo2 from "@/assets/logo3.svg";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      console.log(userInfo);
      //   if (res?.data?.success) {
      //     Cookies.set("token", res?.data?.data?.accessToken);
      //     Cookies.set("currentUserRole", res?.data?.data?.role);
      //     dispatch(
      //       setUser({
      //         user: res?.data?.data,
      //         token: res?.data?.data?.accessToken,
      //         isAuthenticated: true,
      //       })
      //     );

      //     toast.success(res?.data?.message || "Login successful!");
      //     if (res?.data?.data?.role == "SUPERADMIN") {
      //       route.push("/dashboard");
      //     } else {
      //       route.push("/");
      //     }
      //   } else {
      //     // In case success is false but no error is thrown
      //     const errorMessage =
      //       (res?.error &&
      //         "data" in res.error &&
      //         (res.error as any).data?.message) ||
      //       "Login failed";
      //     toast.error(errorMessage);
      //   }
    } catch (error: any) {
      // Attempt to extract message from error response
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      toast.error(errorMessage);
    }
  };

  const handlegoogle = () => {
    window.location.href = "http://localhost:5135/api/v1/auth/google";
  };
  const handlefacebook = () => {
    window.location.href = "http://localhost:5135/api/v1/auth/facebook";
  };

  return (
    <div className="w-full min-h-screen relative bg-blue-600">
      <div className="container mx-auto py-28 flex flex-col justify-center items-center text-white">
        <Link href={"/"}>
          <Image
            src={logo2}
            alt="logo"
            height={100}
            width={100}
            className="h-28 w-52"
          />
        </Link>

        <div className="text-center mx-auto">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold leading-[52px] mb-2 w-full md:w-[450px]">
              Log in to your account
            </h2>
            <p className="text-lg font-normal font-satoshi mb-6">
              Don&apos;t have an account?
              <Link href="/signup" className="text-[#FF9500] cursor-pointer">
                {" "}
                Sign up
              </Link>
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:bg-white  md:p-10 rounded-lg md:shadow-lg"
          >
            <div>
              <label
                htmlFor="email"
                className="text-base text-start font-bold text-white md:text-[#171717] block mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Enter your email address"
                className="w-full border text-[#9E9E9E] border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="text-base text-start font-bold text-white md:text-[#171717] block mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                placeholder="Set your password"
                className="w-full border text-[#9E9E9E] border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center py-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-gray-400 rounded-sm focus:ring-blue-500 focus:ring-2"
                  {...register("remember")}
                />
                <span className="text-white md:text-[#171717] text-base font-normal leading-7">
                  Remember me
                </span>
              </label>
              <Link
                href={"/forgot-password"}
                className="text-base text-white md:text-[#3D53F5] font-bold leading-7"
              >
                Forgot your Password?
              </Link>
            </div>

            {/* <Button
              type="submit"
              variant="secondary"
            //   disabled={isLoading}
              className={`w-full font-bold ${
                isLoading ? "cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? <Loader /> : "Log in"}
            </Button> */}

            <h1 className="text-base font-normal text-white md:text-[#616161] pt-8 pb-4">
              Or continue with
            </h1>

            <div className="grid grid-cols-3 gap-3">
              <Button onClick={handlegoogle} variant="ghost">
                <FaGoogle />
              </Button>
              <Button onClick={handlefacebook} variant="ghost">
                <FaFacebookF />
              </Button>
              <Button variant="ghost">
                <FaApple />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
