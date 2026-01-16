import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { apiRequest } from "../utils";
import { Login } from "../redux/userSlice";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";

const SignUp = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [isRegister, setIsRegister] = useState(true);
  const [accountType, setAccountType] = useState("seeker");
  const [loading, setLoading] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  let from = location.state?.from?.pathname || "/";

  const closeModal = () => setOpen(false);

  const onSubmit = async (data) => {
    let URL = null;

    if (isRegister) {
      if (accountType === "seeker") {
        URL = "auth/register";
      } else URL = "companies/register";
    } else {
      if (accountType === "seeker") {
        URL = "auth/login";
      } else {
        URL = "companies/login";
      }
    }

    try {
      setLoading(true);
      const res = await apiRequest({
        url: URL,
        data: data,
        method: "POST",
      });

      console.log(res);
      if (res?.status === "failed") {
        setErrMsg(res?.message);
      } else {
        setErrMsg("");
        const data = { token: res?.token, ...res?.user };
        dispatch(Login(data));
        localStorage.setItem("userInfo", JSON.stringify(data));
        window.location.replace(from);
      }
    } catch (error) {
      console.log(error);
      setErrMsg("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Transition appear show={open || false}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
            <div className="flex min-h-full w-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-8 text-left align-middle shadow-2xl transition-all">
                  {/* Logo Header */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1ADFA6] to-[#1676CC] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">HH</span>
                    </div>
                  </div>

                  <Dialog.Title as="h3" className="text-2xl font-bold text-center text-gray-900 mb-2">
                    {isRegister ? "Create Account" : "Welcome Back"}
                  </Dialog.Title>

                  <p className="text-center text-gray-500 text-sm mb-6">
                    {isRegister
                      ? "Join us and find your perfect opportunity"
                      : "Sign in to continue to your account"}
                  </p>

                  {/* Account Type Toggle */}
                  <div className="w-full flex gap-2 mb-6 bg-gray-100 p-1 rounded-full">
                    <button
                      type="button"
                      className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        accountType === "seeker"
                          ? "bg-white text-[#1676CC] shadow-md"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                      onClick={() => setAccountType("seeker")}
                    >
                      Job Seeker
                    </button>
                    <button
                      type="button"
                      className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        accountType !== "seeker"
                          ? "bg-white text-[#1676CC] shadow-md"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                      onClick={() => setAccountType("company")}
                    >
                      Company
                    </button>
                  </div>

                  {/* Form */}
                  <form
                    className="w-full flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {/* Email Input */}
                    <div className="relative">
                      <AiOutlineMail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <TextInput
                        name="email"
                        label="Email Address"
                        placeholder="your@email.com"
                        type="email"
                        styles="pl-10"
                        register={register("email", {
                          required: "Email Address is required!",
                        })}
                        error={errors.email ? errors.email.message : ""}
                      />
                    </div>                    {/* Name Inputs - Register Only */}
                    {isRegister && (
                      <div className="w-full flex gap-3">
                        <div className={accountType === "seeker" ? "w-1/2" : "w-full"}>
                          <div className="relative">
                            <AiOutlineUser
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={20}
                            />
                            <TextInput
                              name={accountType === "seeker" ? "firstName" : "name"}
                              label={
                                accountType === "seeker" ? "First Name" : "Company Name"
                              }
                              placeholder={
                                accountType === "seeker" ? "James" : "Company name"
                              }
                              type="text"
                              styles="pl-10"
                              register={register(
                                accountType === "seeker" ? "firstName" : "name",
                                {
                                  required:
                                    accountType === "seeker"
                                      ? "First Name is required"
                                      : "Company Name is required",
                                }
                              )}
                              error={
                                accountType === "seeker"
                                  ? errors.firstName?.message || ""
                                  : errors.name?.message || ""
                              }
                            />
                          </div>
                        </div>

                        {accountType === "seeker" && isRegister && (
                          <div className="w-1/2">
                            <div className="relative">
                              <AiOutlineUser
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={20}
                              />
                              <TextInput
                                name="lastName"
                                label="Last Name"
                                placeholder="Wagonner"
                                type="text"
                                styles="pl-10"
                                register={register("lastName", {
                                  required: "Last Name is required",
                                })}
                                error={errors.lastName?.message || ""}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}                    {/* Password Inputs */}
                    <div className="w-full flex gap-3">
                      <div className={isRegister ? "w-1/2" : "w-full"}>
                        <div className="relative">
                          <AiOutlineLock
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={20}
                          />
                          <TextInput
                            name="password"
                            label="Password"
                            placeholder="••••••••"
                            type="password"
                            styles="pl-10"
                            register={register("password", {
                              required: "Password is required!",
                            })}
                            error={errors.password?.message || ""}
                          />
                        </div>
                      </div>

                      {isRegister && (
                        <div className="w-1/2">
                          <div className="relative">
                            <AiOutlineLock
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={20}
                            />
                            <TextInput
                              label="Confirm Password"
                              placeholder="••••••••"
                              type="password"
                              styles="pl-10"
                              register={register("cPassword", {
                                validate: (value) => {
                                  const { password } = getValues();
                                  if (password != value) {
                                    return "Passwords do not match";
                                  }
                                },
                              })}
                              error={
                                errors.cPassword?.type === "validate"
                                  ? errors.cPassword?.message || ""
                                  : ""
                              }
                            />
                          </div>
                        </div>
                      )}
                    </div>
{/* Error Message */}
                    {errMsg && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3 mt-2">
                        <span
                          role="alert"
                          className="text-sm text-red-600 font-medium"
                        >
                          {errMsg}
                        </span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 bg-gradient-to-r from-[#1676CC] to-[#1ADFA6] text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading
                        ? isRegister
                          ? "Creating Account..."
                          : "Signing In..."
                        : isRegister
                        ? "Create Account"
                        : "Sign In"}
                    </button>
                  </form>

                  {/* Toggle Register/Login */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-600">
                      {isRegister
                        ? "Already have an account?"
                        : "Don't have an account?"}

                      <span
                        className="ml-2 font-semibold text-[#1676CC] hover:text-[#1ADFA6] cursor-pointer transition-colors"
                        onClick={() => setIsRegister((prev) => !prev)}
                      >
                        {isRegister ? "Sign In" : "Create Account"}
                      </span>
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SignUp;
