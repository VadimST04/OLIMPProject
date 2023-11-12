import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const DetailedBook = ({ title, author, pages, closeBookHandler }) => {
  pages = 238;
  const [page, setPage] = useState(1);

  const leftClick = () => {
    setPage(page > 1 ? page - 1 : 1);
  };
  const rightClick = () => {
    setPage(page < pages ? page + 1 : pages);
  };

  return (
    <div className="grid h-full w-full grid-rows-[minmax(5rem,auto),1fr,minmax(5rem,auto)] gap-5 overflow-y-auto">
      <div className="grid grid-cols-[minmax(0,1fr),auto] gap-5">
        <div className="w-full self-center justify-self-start">
          <p className="w-full break-words text-3xl">{title}</p>
          <p className="w-full break-words text-2xl">{author}</p>
        </div>
        <div className="self-center justify-self-end">
          <p className="text-2xl">
            <span className="font-bold">{page}</span>
            <span>/{pages}</span>
          </p>
        </div>
      </div>
      <div className="overflow-y-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        perspiciatis molestiae, quo rem eaque consectetur placeat dicta,
        nesciunt provident est numquam tempore error. Dolore accusantium at
        officia? Suscipit numquam cumque aperiam neque sed voluptate recusandae
        consequatur hic magni praesentium provident molestiae iure vel aliquam,
        obcaecati pariatur illum quasi rerum? Reprehenderit exercitationem
        dolorum aspernatur quasi nemo. Porro ipsa iste voluptatibus tenetur,
        mollitia magni. Totam debitis explicabo quam sapiente repellat, quidem
        fugiat minus tempore veniam a nulla delectus veritatis maxime nesciunt
        dolores eveniet nemo quae unde ducimus maiores at culpa ut laudantium
        ullam! Placeat eveniet, quos dignissimos aperiam perspiciatis
        praesentium doloribus in a harum libero quia molestias! Inventore ea
        eaque necessitatibus, vitae voluptatibus obcaecati sed natus
        exercitationem minus accusantium quia error cum aliquam perferendis
        provident unde optio nostrum soluta quam eveniet. Eveniet deleniti hic
        veritatis nostrum animi atque culpa delectus architecto, aspernatur
        sapiente nesciunt vel, quam voluptatibus error? Dicta non blanditiis
        saepe repellendus beatae dolorum aut explicabo sequi. Omnis architecto
        mollitia aliquid hic minima, maiores itaque fuga nemo officia, fugit
        ullam impedit eveniet, ad nisi. Ratione consequatur, modi vel corporis
        nisi dolore maxime soluta officia aut quasi nulla eveniet sunt nihil
        consectetur nesciunt aperiam. Architecto sapiente, corrupti optio ullam
        vero a? Veritatis mollitia ex rerum explicabo autem adipisci, modi
        officiis cupiditate magnam cumque deserunt suscipit pariatur amet qui,
        quam, expedita atque! Explicabo voluptatum culpa reiciendis, odio atque
        ipsam ut quibusdam officiis rerum voluptate magnam dignissimos facere
        dolore nisi tempore quae? Temporibus laboriosam dignissimos ipsum amet
        provident cumque consequatur tempore hic rerum molestias, qui modi
        voluptas est iure officiis! Tenetur temporibus dicta eaque quisquam,
        laborum iusto voluptatem, at doloremque neque corporis obcaecati minus
        commodi modi unde laboriosam et necessitatibus nesciunt nisi! Ipsam
        magnam vel quibusdam ex ad nihil maxime, deserunt quisquam corrupti
        perspiciatis a expedita! Recusandae odio quos delectus ut eius debitis
        eaque labore architecto nulla possimus dicta consectetur, quae expedita
        tempora aut quam fugiat iusto amet itaque saepe illo velit adipisci,
        maiores natus. Dolores accusantium, dolor delectus beatae quas molestias
        expedita at atque rem distinctio sapiente, nostrum quia adipisci modi,
        vitae placeat. Debitis repellat atque suscipit aliquid, accusamus vero,
        dolorum nesciunt consectetur error reiciendis voluptates ullam odio
        autem quod modi placeat eius ex dolor, vel quae earum adipisci harum
        nostrum. Dolorum est ullam quos obcaecati error incidunt ad temporibus
        natus! Vero dolores iure, provident earum ut quos omnis ducimus illum
        impedit perspiciatis commodi. Reiciendis tenetur distinctio dolor veniam
        ducimus! Facilis deserunt voluptatum beatae aspernatur cum iste alias
        consequuntur optio impedit accusantium qui commodi architecto, illo,
        reiciendis fuga quis quam quasi, voluptate perferendis repellendus
        culpa. Vero dicta veniam quisquam ducimus tempora id exercitationem,
        totam, rerum accusamus repellendus accusantium et dolor labore
        laudantium in eius aut reprehenderit. Minima assumenda fugiat sapiente
        provident esse quibusdam iusto, dolor, quisquam magni vel voluptas et
        illum nam eos? Ipsa cum eos quidem fugit, reprehenderit expedita at
        facilis commodi dolore odit necessitatibus, similique possimus porro
        cumque quia eligendi ratione molestiae amet consequuntur rerum
        accusantium numquam! Sequi similique neque, veritatis tempore quasi
        dignissimos. Blanditiis, iure quibusdam. Voluptatum quia consectetur
        fuga!
      </div>
      <div className="self-center justify-self-center">
        <button
          onClick={leftClick}
          className="rounded-md p-2 text-2xl hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
        >
          <AiOutlineLeft />
        </button>
        <button
          onClick={rightClick}
          className="rounded-md p-2 text-2xl hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default DetailedBook;
