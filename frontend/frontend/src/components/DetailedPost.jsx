import React, { useRef, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { LuArrowDownSquare } from "react-icons/lu";
import CommentItem from "./CommentItem";
import { RxCross1 } from "react-icons/rx";

const DetailedPost = ({
  images,
  likes,
  comments,
  content,
  closePostCallback,
  commentDate,
  username = "",
}) => {
  const postBg = useRef(null);
  const closePost = (e) => {
    if (e.target === postBg.current) closePostCallback();
  };
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const testComments = [
    {
      profileImg:
        "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      commentDate: "Aug 30, 20203",
      username: "user1",
      commentContent: "Nice cars!",
    },
    {
      profileImg:
        "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      commentDate: "Aug 30, 20203",
      username: "user2",
      commentContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia repellendus modi, officia voluptas reiciendis accusamus et distinctio laudantium aut esse sit est odit dolorem quibusdam corporis libero autem delectus.",
    },
    {
      profileImg:
        "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      commentDate: "Aug 30, 20203",
      username: "user3",
      commentContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia repellendus modi, officia voluptas reiciendis accusamus et distinctio laudantium aut esse sit est odit dolorem quibusdam corporis libero autem delectus.",
    },
    {
      profileImg:
        "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      commentDate: "Aug 30, 20203",
      username: "user4",
      commentContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet nobis accusantium placeat delectus autem minus tempore repellendus fugit, cum quis atque esse voluptatem! Omnis tempora ducimus saepe, esse eligendi necessitatibus ipsum nemo error ipsam eveniet repellat facere minima quam porro, harum nisi vel velit consectetur nihil debitis? Laudantium cum repellendus nisi consectetur sequi sapiente. Et enim perferendis fugit distinctio dolor animi iure maxime quibusdam expedita ipsa amet doloribus neque, tenetur id repellat itaque nobis consequuntur aliquam? Officiis, velit voluptatem voluptatibus reiciendis veritatis, assumenda eligendi maxime iusto iure distinctio odio expedita nihil eum fugiat delectus illum omnis nisi voluptas? Corrupti laboriosam commodi soluta aspernatur quas, vel voluptatem. Laborum, autem natus labore corrupti, dicta porro voluptates, ipsum non magni ullam error! Aut explicabo, veritatis officiis exercitationem, animi dolor voluptas atque itaque ratione dolore harum eos ad omnis consequatur praesentium ea enim, minima necessitatibus et non! Ducimus minus, vitae ratione possimus adipisci itaque fugit fugiat dolores repellendus minima neque laudantium necessitatibus, voluptas, consequuntur sit libero placeat illum! Exercitationem neque veniam, reprehenderit, quo doloremque accusantium dolore qui ipsum quos inventore aut ex, officiis enim. Ea aliquid inventore sapiente magni ipsam recusandae impedit, dicta nisi laborum illo, laudantium repellendus mollitia tenetur perspiciatis provident illum. Sit dicta esse sequi quam perferendis libero atque cum ab voluptatum sint! Hic a doloremque ipsam minima incidunt dolore quas quisquam, quo quod mollitia magnam placeat tempore id magni dolores officia unde corporis. Ipsam quaerat culpa, hic quis nemo doloribus? Ipsa rem, molestiae similique ut alias ullam nisi, dicta accusantium quos voluptatibus, expedita deleniti officiis saepe quibusdam adipisci cumque! Itaque quasi officiis tenetur, magnam eius, ex quae harum ullam eligendi accusamus hic, nihil voluptate consequatur placeat. Quis necessitatibus tenetur id exercitationem quod omnis officiis debitis enim et itaque excepturi tempore minima consequuntur mollitia molestiae, odio ad voluptatem est, eius sed nemo suscipit qui beatae corrupti. Tempore id ab voluptatibus doloremque adipisci, dolor magni corrupti cum amet illum a iste, totam beatae consectetur odio ad ut et corporis sit. Tempora quisquam porro doloribus. Maxime dolor, nulla dolorem non illum dignissimos eveniet, natus harum culpa animi illo voluptatibus id, obcaecati deleniti labore atque. Quos delectus amet fugit, laborum eaque nulla praesentium fugiat, nemo tempora nobis maxime dolores deleniti excepturi ratione illum dicta doloremque voluptates officia? Nobis ullam molestias impedit tenetur, quia dolor eos fugit natus temporibus, sed et architecto, libero ea at deserunt. Temporibus ab ipsum debitis soluta alias ducimus qui rem aperiam explicabo laudantium necessitatibus magni illum molestiae, magnam totam non aliquam, quis, perferendis corporis. Fuga explicabo atque quasi nisi voluptatum quisquam reprehenderit nostrum. Quo voluptatum cum autem culpa ad praesentium repellat facilis libero sapiente! Laboriosam quia ut totam tempora repudiandae fugit provident, temporibus laborum dolorum sed libero unde id facere et, error vitae saepe. Aut ducimus nisi impedit veniam dolores soluta numquam molestiae odit ratione dignissimos. Neque sint dicta libero natus ratione, optio doloremque a pariatur illo praesentium quia quas quis vero velit animi rem voluptates! Ea soluta doloribus magnam minus sint qui et ut tempore doloremque ipsam officiis consectetur nobis, provident modi facere accusamus asperiores expedita obcaecati vel laboriosam odio fugit commodi delectus eius! Assumenda, voluptas fugit sint vero accusantium nisi neque laudantium aliquid earum eaque expedita nam labore, accusamus possimus iusto explicabo, architecto veritatis ratione similique blanditiis. Quae reprehenderit suscipit voluptatum, quo aperiam omnis similique debitis cum id iure dolor nemo magni, beatae aliquid cumque facere rem maxime hic, explicabo nulla maiores soluta porro unde. Suscipit quo, error consectetur, accusamus ipsam quia repudiandae optio velit et eligendi asperiores perferendis corporis sapiente, neque consequatur iure laudantium? Eum suscipit vitae ad, eligendi blanditiis praesentium alias illum debitis. Aliquid ducimus vel exercitationem excepturi itaque commodi explicabo, earum voluptas cumque nulla totam odit voluptatum iste assumenda ex dicta facere deserunt. Neque ad animi eveniet similique aliquam quo deleniti ex quam aperiam. Incidunt nisi ad earum ut aspernatur quam atque culpa, maxime, officia impedit doloremque alias odio suscipit hic! Ut doloribus natus impedit optio. Quas tempora ipsum incidunt possimus itaque, iusto totam quae accusamus, tenetur, voluptatum perferendis aliquam voluptate laboriosam? Sapiente, officia. Aut repellat sed ratione pariatur velit dolore, distinctio vel et nostrum aspernatur impedit officiis natus. Itaque sed officia tenetur. Minima illo veritatis officia corporis architecto, excepturi aspernatur voluptatem rem molestiae earum reprehenderit asperiores pariatur beatae dolorum ex dolore. Reiciendis fugit harum exercitationem debitis et rem quo sed repellat! Suscipit, consequuntur odit voluptatem ex vel et nesciunt velit facere incidunt libero atque magni vero animi unde ipsum adipisci error minima numquam eveniet fuga sed molestias, cupiditate saepe fugiat! Ab, expedita! Tempore officia dolor quaerat iusto corporis magnam laboriosam nihil excepturi tenetur nulla ipsam voluptatem delectus, tempora eligendi fuga beatae qui earum dolore fugit ipsum. Nemo unde dolores molestias, dignissimos facilis ut eos aliquam maxime quidem, minima eum, inventore molestiae architecto beatae iusto! A aliquid ratione sunt facilis iure accusantium labore nisi nostrum aperiam rem eligendi eius repellendus dignissimos impedit reiciendis eveniet asperiores voluptatibus expedita facere distinctio quia, excepturi magni. Necessitatibus laudantium officiis alias adipisci iusto perferendis aperiam reprehenderit, et illum, aliquam rerum unde, exercitationem repellat? Dolores ab repellat iusto accusamus aperiam unde natus dolorum voluptatibus labore harum blanditiis nam architecto laborum distinctio earum libero corrupti, cupiditate deleniti velit magni amet rem qui tempora? In dolor doloribus itaque dolorem maiores aperiam soluta harum doloremque suscipit voluptatem tenetur delectus, neque dicta quibusdam quasi pariatur aut praesentium, dolores, amet possimus reiciendis accusamus minima. Sunt ut minus dolore repudiandae accusamus rem nostrum maiores veniam beatae perferendis, laborum nesciunt voluptates magnam officia! Et velit totam itaque modi aspernatur dolor a? Officiis molestiae quisquam culpa? Asperiores reiciendis quas, fuga est, molestiae accusamus ducimus veniam impedit facere aspernatur, ratione tempore! Praesentium, animi odit corrupti aperiam facere perferendis ipsam ducimus suscipit, saepe quas nulla veniam ex molestiae, id libero voluptatibus. Nisi, amet, quod neque soluta nam quidem provident dicta unde expedita deleniti quos, labore dolorem. Corporis, maiores animi, sapiente nobis, incidunt voluptatem est sunt quis at illum modi earum consequuntur? Sapiente exercitationem magnam ut consectetur suscipit culpa praesentium repellendus, facere placeat consequuntur laborum delectus corporis aliquid vel accusamus dolorum deserunt!",
    },
  ];
  // TODO: change to grid layout
  return (
    <div
      ref={postBg}
      onClick={(e) => closePost(e)}
      className="absolute left-0 top-0 z-10 flex h-screen min-h-0 w-screen items-center justify-center overflow-hidden bg-black bg-opacity-80"
    >
      <div className="relative flex max-h-[70%] gap-4 overflow-hidden rounded-md bg-soft-white p-5 text-soft-black dark:bg-soft-black dark:text-soft-white">
        <div className="absolute -right-6 -top-6 z-10 cursor-pointer text-[20px] text-soft-white">
          <RxCross1 className="" onClick={() => closePostCallback()} />
        </div>
        {/* Post */}
        <div className="flex w-[29rem] flex-col self-center">
          <div
            className={"flex h-full items-center".concat(
              images.length > 1 ? " justify-between" : " justify-center",
            )}
          >
            {images.length > 1 && (
              <BsArrowLeftCircle
                onClick={() =>
                  setActiveImgIndex(
                    (activeImgIndex - 1 + images.length) % images.length,
                  )
                }
                className="cursor-pointer select-none text-[32px] hover:text-[#666666]"
              />
            )}

            <div className="flex h-full w-[24rem] flex-col gap-2">
              <img
                src={images[activeImgIndex].image}
                alt=""
                className={
                  "h-[31rem] w-full cursor-pointer select-none object-cover"
                }
              />
              <div className="space-y-1 ">
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                    <div className="flex cursor-pointer select-none items-center text-center font-bold hover:text-[#666666]">
                      <AiOutlineHeart className="text-[28px]" />
                      <p>{likes}</p>
                    </div>
                    <div className="flex cursor-pointer select-none items-center text-center font-bold hover:text-[#666666]">
                      <BiComment className="text-[26px] " />
                      <p>{comments.length}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiSend className="cursor-pointer text-[25px] hover:text-[#666666]" />
                    <LuArrowDownSquare className="cursor-pointer text-[27px] hover:text-[#666666]" />
                  </div>
                </div>
              </div>
            </div>
            {images.length > 1 && (
              <BsArrowRightCircle
                onClick={() =>
                  setActiveImgIndex((activeImgIndex + 1) % images.length)
                }
                className="cursor-pointer select-none text-[32px]  hover:text-[#666666]"
              />
            )}
          </div>
        </div>
        {/* Comments */}
        <div className="w-[24rem] flex-grow overflow-y-auto">
          <CommentItem
            username={username}
            commentContent={content}
            isContent={true}
            commentDate={commentDate}
          />
          {testComments.map((item, index) => (
            <CommentItem {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedPost;
