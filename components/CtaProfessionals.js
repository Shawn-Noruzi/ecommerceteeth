import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { SparklesIcon, MailOpenIcon, XIcon } from "@heroicons/react/outline";

const CtaProfessionals = ({ show = false, onClose = () => null }) => {
  const [disabled, setDisabled] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const closeModal = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />

        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:rounded-md max-w-md relative">
              {/* Close icon */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 shrink-0 p-1 rounded-md hover:bg-gray-100 transition focus:outline-none"
              >
                <XIcon className="w-5 h-5" />
              </button>

              <div className="py-12">
                <div className="px-4 sm:px-12">
                  <div className="flex justify-center">
                    <Link href="/">
                      <a className="flex items-center space-x-1">
                        <SparklesIcon className="shrink-0 w-8 h-8 text-rose-500" />
                        <span className="text-xl font-semibold tracking-wide">
                          <span className="">Beautiful Bright Smile</span>
                        </span>
                      </a>
                    </Link>
                  </div>

                  <Dialog.Title
                    as="h3"
                    className="mt-6 font-bold text-lg sm:text-2xl text-center mb-6"
                  >
                    Professional Products only avaialble to approved users
                  </Dialog.Title>

                  {!showSignIn ? (
                    <span className="mt-4 text-gray-500 text-base text-center">
                      To gain access to our full catalog of professional products please
                      <a className="ml-1 underline" href="mailto:INFO@BEAUTIFULBRIGHTSMILE.COM">
                        contact us here
                      </a>
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CtaProfessionals;
