import React from "react";

const BookPreview = ({
  image,
  title,
  author,
  language,
  genre,
  firstPageContent,
}) => {
  image = "https://images.unsplash.com/photo-1589998059171-988d887df646";
  title = "Twisted love";
  genre = "Romance novels";
  author = "Ana Huang";
  language = "English";
  return (
    <div className="grid h-full w-full grid-cols-[0.4fr,1fr] gap-5">
      <div className="relative grid grid-rows-[1fr,0.5fr]">
        <div className="flex flex-col items-center gap-5 px-5">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover shadow-[0_5px_5px_#000] transition-all duration-300 will-change-transform hover:-translate-y-2 hover:shadow-[0_10px_10px_#000]"
          />
          <button className="w-48 rounded-md bg-main-green p-2 text-soft-white outline-none hover:bg-main-dark-green">
            Read more
          </button>
        </div>
      </div>
      <div className="space-y-2 overflow-y-auto pr-5 pt-5 text-lg">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">{title}</p>
          <p className="font-semibold text-[#737373]">{genre}</p>
        </div>
        <p>
          <span className="font-semibold">Author - </span>
          <span className="font-semibold">{author}</span>
        </p>
        <p>
          <span>Book language - </span>
          <span>{language}</span>
        </p>
        <div className="space-y-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolor
            sit reiciendis, libero sint soluta expedita. Dicta facilis
            aspernatur laudantium! At quasi impedit temporibus maiores ipsa
            delectus harum voluptatem libero.
          </p>
          <p>
            Ut, repellat maiores deleniti iure nostrum ex adipisci,
            exercitationem illo voluptatum expedita labore facere! Eos fugiat
            molestiae, voluptatem tempore facilis repellendus impedit doloremque
            quas excepturi? Laudantium earum voluptatum quo eligendi.
          </p>
          <p>
            Assumenda blanditiis, suscipit quasi maxime repellendus
            reprehenderit, temporibus soluta magni, quos molestiae vitae totam
            beatae laudantium consequatur tempora vero dicta eum sit? Beatae
            ratione unde facilis nihil sed sint? Veniam.
          </p>
          <p>
            Deserunt dolorem dicta voluptatem porro. Amet minima iusto vitae
            recusandae fugit asperiores aperiam at nesciunt unde aspernatur.
            Quas, illo optio! Autem consequuntur facere accusamus blanditiis ea
            illo vel itaque! Alias?
          </p>
          <p>
            Quas veniam, nisi ipsum placeat obcaecati tempore quibusdam!
            Accusamus neque quod ipsa enim aperiam, esse fuga sunt quibusdam
            ullam temporibus, veniam fugiat quas, iusto blanditiis ex qui
            perspiciatis reiciendis? Quae!
          </p>
          <p>
            Adipisci est amet laboriosam iste. Omnis quasi impedit magni. Sequi
            eligendi nobis vel, excepturi odit earum, illum distinctio beatae et
            sapiente asperiores totam soluta a nesciunt fugit delectus. Sed,
            ipsum?
          </p>
          <p>
            Quam sed expedita officiis eius! Voluptatum deserunt cupiditate,
            voluptatibus, accusamus quis assumenda quae nemo nam autem laborum
            mollitia? Quibusdam nulla consequatur, voluptates exercitationem hic
            dolorum accusantium quis eum impedit quos?
          </p>
          <p>
            Laudantium, quae suscipit tempore sequi incidunt earum velit culpa
            natus nihil sint. Assumenda quae, illo esse modi sequi quos itaque,
            ducimus accusantium quo repudiandae maxime rerum, possimus aliquam
            neque corrupti!
          </p>
          <p>
            Ut ullam placeat obcaecati nihil doloribus cum dolore, voluptate
            sapiente veritatis eius. Ea pariatur architecto libero obcaecati
            impedit consectetur ipsam reprehenderit eligendi cupiditate
            delectus, est nesciunt consequatur totam repudiandae tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookPreview;
