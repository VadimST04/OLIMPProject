import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/actions/userActions";

import logo from "../assets/OLIMPlogo.png";
import RegistrationFirstStep from "./RegistrationFirstStep";
import RegistrationSecondStep from "./RegistrationSecondStep";

const RegistrationForm = ({ closeFormCallback }) => {
  const formBg = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [appLanguage, setAppLanguage] = useState("");
  const [learningLanguages, setLearningLanguages] = useState([]);

  const [isFirstStep, setFirstStep] = useState(true);

  const textSize = "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]";
  const firstStepVisibility = isFirstStep ? "flex" : "hidden";
  const secondStepVisibility = isFirstStep ? "hidden" : "flex";

  const dispatch = useDispatch();
  const onSubmitClickHandler = () => {
    if (passwordConfirmation !== password) {
    } else {
      console.log("register dispatch");
      console.log(
        username,
        "email@gmail.com",
        password,
        appLanguage,
        learningLanguages,
      );
      dispatch(
        register(
          username,
          "email@gmail.com",
          password,
          appLanguage,
          learningLanguages,
        ),
      );
    }
    console.log(
      `dispatch[username: ${username}, password: ${password}, passwordConfirmation: ${passwordConfirmation}]`,
    );

    closeFormCallback();
  };

  const closeForm = (e) => {
    if (e.target === formBg.current) closeFormCallback();
  };

  return (
    <div
      ref={formBg}
      onClick={(e) => closeForm(e)}
      className="absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
    >
      <form className="flex w-52 flex-col items-center gap-5 overflow-y-auto rounded-md border bg-soft-white text-soft-black shadow-[0_0_30px_#00000090] md:w-64 lg:w-96">
        <div className="pointer-events-none aspect-square w-16 select-none overflow-hidden rounded-md md:w-20 lg:w-24 xl:w-28">
          <img src={logo} alt="" className="h-full w-full object-contain" />
        </div>
        <p className="font-semibold md:text-[18px] lg:text-[22px] xl:text-[24px]">
          Register new Account
        </p>
        <div className={"flex w-full flex-col gap-5"}>
          <div className={`${firstStepVisibility}`}>
            <RegistrationFirstStep
              setUsername={(value) => setUsername(value)}
              setPassword={(value) => setPassword(value)}
              setPasswordConfirmation={(value) =>
                setPasswordConfirmation(value)
              }
              setEmail={(value) => setEmail(value)}
              setFirstStep={(value) => setFirstStep(value)}
            />
          </div>
          <div className={`${secondStepVisibility}`}>
            <RegistrationSecondStep
              learningLanguages={learningLanguages}
              setLearningLanguages={(value) => setLearningLanguages(value)}
              setAppLanguage={(value) => setAppLanguage(value)}
              setFirstStep={(value) => setFirstStep(value)}
              onSubmitClickHandler={() => onSubmitClickHandler()}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
