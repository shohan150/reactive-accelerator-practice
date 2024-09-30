"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";


//apply intercepting route. so that no need to navigate to pages ob each image view. view on home page directly but when user tries to access the image directly, then go to the single image page using the main lang/photos/id route.
const Modal = ({ children }) => {
  
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // dialog er open name e ekta attribute ache j bole dei j modal ta open ache kina. jodi open true hoi tahole oi modal er upor vanilla js e showModal name function invoke korle modal show korbe. 
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  //modal close korle (cross button e click kore na esc press kore) user k ager page e niye jao. in this case home e niye jabe. karon amra modal jokhon open korchi tokhon asole notun link e nicchi r link take intercept korchi. emon na j home link ei modal open korechi. 
  function onHide() {
    router.back();
  }

  //using create portal from react-dom and dialog tag from html to show and hide the modal. create portal is very compatible with createPoartal said tapas da. createPortal 2nd argument e portal ta kothai create korbe seta nei r first argument e jeta show korbe.
  return createPortal(
      <dialog
        ref={modalRef}
        onClose={onHide}
        className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
      >
        {/* the cross icon with onClose*/}
        <span onClick={onHide}
          className="flex justify-end cursor-pointer">
            <Image
              src="/xmark.svg"
              alt="close"
              width={30}
              height={30} />
          </span>

          {children}
      </dialog>
    ,
    document.getElementById("modal-root-content")
  );
};

export default Modal;