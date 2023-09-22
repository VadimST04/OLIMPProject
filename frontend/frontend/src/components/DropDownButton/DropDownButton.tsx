import {
  MouseEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { BsNewspaper, BsFillFileEarmarkPostFill } from "react-icons/bs";
import { MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { PiBooksDuotone } from "react-icons/pi";
import { LuUsers2 } from "react-icons/lu";
import { IoMusicalNotes } from "react-icons/io5";

function useOnClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: MouseEventHandler<HTMLButtonElement>
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [buttonName, setButtonName] = useState("News");
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const buttonClickHandler = (name: string) => {
    setButtonName(name);
    setIsOpen(false);
  }

  return (
    <div ref={ref} className={`dropdown ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <BsNewspaper />
        <span>{buttonName}</span>
        {isOpen ? <AiOutlineClose /> : <MdOutlineExpandMore />}
      </button>
      <div className="menu">
        <button onClick={() => buttonClickHandler("News")}></button>
        <button onClick={() => buttonClickHandler("News")}>
          <BsNewspaper />
          <span>News</span>
        </button>
        <button onClick={() => buttonClickHandler("Books")}>
          <PiBooksDuotone />
          <span>Books</span>
        </button>
        <button onClick={() => buttonClickHandler("Posts")}>
          <BsFillFileEarmarkPostFill />
          <span>Posts</span>
        </button>
        <button onClick={() => buttonClickHandler("Users")}>
          <LuUsers2 />
          <span>Users</span>
        </button>
        <button onClick={() => buttonClickHandler("Musik")}>
          <IoMusicalNotes />
          <span>Musik</span>
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
