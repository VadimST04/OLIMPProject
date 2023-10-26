import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const DetailedMusic = ({
  lyrics,
  language,
  image,
  title,
  author,
  hideDetailedMusic,
}) => {
  const [isPaused, setPaused] = useState(false);

  return (
    <>
      <div
        onClick={() => hideDetailedMusic()}
        className="flex w-min cursor-pointer items-center text-[32px]"
      >
        <BsFillArrowLeftCircleFill />
      </div>
      <div className="flex h-full w-full gap-5">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <img
            src={image}
            alt=""
            className="h-[50%] w-[40%] select-none object-cover"
          />
          <div className="w-[40%]">
            <div className="flex w-full justify-center gap-2">
              Song language - <p className="font-semibold">{language}</p>
            </div>
            <p className="w-full truncate text-center text-[22px] font-bold">
              {title}
            </p>
            <p className="w-full truncate text-center">{author}</p>
            <input
              type="range"
              className="h-1 w-full bg-soft-white-hover accent-soft-black"
            />
            <div className="flex items-center justify-center gap-2 pt-4 text-[52px]">
              <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-soft-white-hover dark:hover:bg-soft-black-hover">
                <BiSkipPrevious />
              </div>
              {isPaused && (
                <div className="flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-soft-white-hover dark:hover:bg-soft-black-hover">
                  <AiFillPlayCircle />
                </div>
              )}
              {!isPaused && (
                <div className="flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-soft-white-hover dark:hover:bg-soft-black-hover">
                  <AiFillPlayCircle />
                </div>
              )}
              <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-soft-white-hover dark:hover:bg-soft-black-hover">
                <BiSkipNext />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full min-h-0 max-w-[40%] overflow-y-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam
          beatae fuga delectus esse sequi laudantium labore sit quas, autem
          ipsum excepturi laboriosam vitae praesentium aperiam tenetur error
          quam ipsam suscipit molestiae temporibus amet cupiditate soluta!
          Maxime vitae veritatis nisi? Laboriosam, rerum esse. Voluptates
          numquam quisquam provident atque praesentium? Optio dolore doloribus,
          asperiores architecto repellat dignissimos numquam iusto sed maxime
          debitis laudantium fugit similique! Placeat maiores corporis soluta in
          ratione, accusantium veniam qui, eum et eveniet dolores necessitatibus
          facilis. Fugiat debitis magnam sit quisquam ullam suscipit eaque
          voluptate accusamus consectetur nihil tenetur perferendis
          necessitatibus, expedita dolor laboriosam iure corrupti, quidem earum
          neque vero temporibus dolore aut iusto? Mollitia provident qui illum
          accusamus nesciunt itaque, quia beatae doloremque vitae delectus neque
          numquam accusantium inventore facere unde quod praesentium hic
          voluptate. Consequuntur culpa vero eveniet ad consequatur, nisi
          veritatis facere doloribus illo, dolorum rerum! Debitis ad delectus
          provident, labore dolore impedit quis cum voluptates explicabo
          praesentium suscipit velit ex soluta itaque optio ut iure nesciunt.
          Sunt neque distinctio voluptas ab vitae error dignissimos animi
          numquam nobis tenetur itaque amet sed placeat, ad asperiores debitis
          sequi, at maxime assumenda excepturi? Hic et doloribus, sequi quam vel
          cum deleniti, consequuntur corporis accusantium molestias doloremque
          rerum quaerat sit maxime dignissimos fugit quia quo similique laborum
          ullam id minima ipsam? Sed modi, molestias vel nostrum voluptatibus
          sapiente facere reprehenderit quibusdam temporibus praesentium eum
          repellendus repellat nemo explicabo magnam? Nam fugiat natus dolor
          aperiam ab quibusdam ratione possimus, consequatur eos enim temporibus
          saepe veniam praesentium laudantium quo modi repellendus, ut
          doloremque, rem aut! Unde rerum quo, commodi quisquam eos dolorum est
          architecto. Id rerum quod voluptatem fuga adipisci exercitationem
          fugit explicabo debitis qui fugiat non, dolorem reiciendis blanditiis
          sint magni. Commodi, eaque? Omnis repellat sit dolorem suscipit saepe
          corrupti voluptate nisi, iure, soluta aliquam enim dolores
          praesentium, reprehenderit asperiores molestiae et! Voluptatibus
          incidunt temporibus non, eveniet reprehenderit, rerum, porro dolore
          minima commodi vero dicta eum! Explicabo quisquam nemo praesentium
          perspiciatis magnam veritatis, culpa, reprehenderit eligendi quas
          ipsam veniam aspernatur sit error temporibus minima excepturi, aliquam
          debitis maiores eum cumque? At ipsam excepturi sequi quibusdam neque
          perferendis nulla similique saepe in cumque vitae animi laboriosam
          temporibus nesciunt nam, praesentium aperiam facilis voluptates minima
          nobis. Delectus excepturi hic necessitatibus aut obcaecati quidem
          quia, quae repellendus fugit. Aspernatur praesentium numquam quasi
          corporis dolore eos amet libero pariatur quae reprehenderit omnis
          labore esse molestiae, accusamus doloribus sunt, aperiam vero! Ipsam,
          unde. Reiciendis repudiandae deserunt libero, est magni perferendis
          dolor accusamus voluptatibus facilis in laborum? Earum quibusdam nemo
          animi quae obcaecati quaerat sit libero itaque ut pariatur laudantium,
          id repudiandae omnis voluptas. Commodi, quis amet. In, repudiandae
          placeat vitae vel, corrupti minima dolore magnam fuga voluptas
          reiciendis molestias ipsa officiis doloribus omnis labore ratione
          dolores nulla aliquam voluptates neque cum id. Repellendus quia
          similique autem quasi reprehenderit ab natus laudantium, voluptas
          omnis adipisci nulla sed aperiam, doloribus porro? Tempore, ad.
          Numquam, dolores quam? Id, soluta quisquam dolorum nam beatae itaque
          consequuntur maxime dolores minus aliquam optio voluptate eveniet
          mollitia reprehenderit doloribus unde provident placeat expedita
          laboriosam, modi sequi tempore vitae dicta perferendis! Amet alias
          dolore cum neque veniam quidem est qui labore dolorum, ipsam incidunt!
          Provident quod ipsa, dolor eum quas itaque doloremque illum rem
          voluptatem autem quisquam? Quaerat eum vel autem accusamus cupiditate
          natus culpa iure dolorum? Alias dolore optio et veniam qui sequi nemo,
          voluptates eveniet doloribus perferendis sapiente omnis, tenetur sint
          libero. In temporibus officia architecto omnis accusamus aliquid
          obcaecati iusto ratione quo quae dicta suscipit, ea labore reiciendis
          voluptatibus voluptates sapiente provident, eligendi, reprehenderit
          minus quisquam exercitationem expedita. Rem ab consequatur aut sed
          quos reprehenderit, voluptatibus adipisci, cupiditate facilis culpa,
          doloremque tempora architecto quis labore! Quasi repudiandae sunt
          distinctio facilis eaque ea beatae cumque suscipit! Totam sint quam
          ipsam illum. Illum odio, quos architecto doloremque corporis, mollitia
          officia facilis tempore est molestiae soluta quia? Aspernatur
          inventore hic earum, ex officia soluta minima sunt fuga explicabo
          assumenda, facilis culpa qui natus magnam vitae recusandae autem sequi
          animi? Possimus molestiae, ducimus, dolorem dolor qui consequatur
          reiciendis saepe, provident minima excepturi ratione nesciunt?
          Accusamus dicta, excepturi numquam atque modi quae voluptatem
          distinctio repudiandae commodi velit sit optio illum quia quisquam.
          Vitae, vel, blanditiis quo iure ipsa, temporibus eligendi sint natus
          id totam provident odio eveniet. Optio exercitationem autem
          consequuntur nam, quae dolor id deleniti commodi natus, laudantium
          numquam, suscipit officiis impedit. Nisi quidem, exercitationem esse
          quisquam quis deserunt molestiae veniam corporis perferendis provident
          architecto alias aliquid necessitatibus blanditiis fugiat aspernatur
          officiis. Ex veritatis nesciunt harum nihil, eos fugiat voluptas eum
          voluptate sed ullam ut alias provident unde enim nemo molestias
          quisquam necessitatibus maiores a consequatur eaque architecto totam
          facilis. Eum, nisi sunt! Provident nisi at facere tempore deleniti cum
          reprehenderit, dolor veritatis aspernatur soluta rem doloremque
          perferendis error praesentium sit qui veniam mollitia libero totam
          quas a? Commodi consectetur earum ea, voluptate illo ipsa cumque, eum
          dicta omnis reiciendis at in alias, accusantium atque maiores tenetur
          et cupiditate impedit. Voluptate repellendus quasi amet quo officia
          deserunt iusto. Cumque fugiat, eos fugit sequi sunt autem illum
          aspernatur beatae officiis doloribus! Libero, nihil? A nobis placeat
          praesentium nam quasi ab. Dolores cumque numquam placeat excepturi vel
          laborum libero nemo accusamus quos porro? Neque quam, at tempora iste
          rerum nostrum non et eveniet eligendi, cumque ad incidunt similique
          voluptatem dolores officiis. Eum sint veritatis explicabo, asperiores
          amet recusandae necessitatibus quam optio aliquam in enim dolores
          aspernatur doloremque! Placeat quibusdam laudantium eos quidem itaque
          consectetur nulla assumenda ducimus officiis nesciunt modi asperiores
          qui neque eum repellendus fugit, eius aspernatur voluptatum autem
          optio magni suscipit quasi vero. Distinctio, dolor! Quasi, eum in vero
          nesciunt praesentium, mollitia molestiae nostrum id sapiente, cum
          doloremque temporibus aut doloribus labore! Repellendus accusantium
          deserunt, labore magni quidem quasi eligendi voluptatem quis, quo
          totam, quod aspernatur. Totam esse nisi voluptatibus at. Quidem nihil
          odit ea corrupti provident, modi doloribus, adipisci sed cumque, sunt
          velit quis officiis unde veniam distinctio hic quam nobis? Doloremque
          saepe mollitia eum ipsa! Consectetur, facere cumque quidem alias
          perferendis odio recusandae quaerat ipsum sed ipsa excepturi? Sequi,
          quis?
        </div>
      </div>
    </>
  );
};

export default DetailedMusic;
