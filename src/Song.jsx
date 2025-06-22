import React, { useState, useRef, useEffect } from "react";

import Navbar from "./NavBar";

const songLink =
  "https://cdnt-preview.dzcdn.net/api/1/1/e/4/5/0/e4589311b7cdd524d1767bc2b7b6e17f.mp3?hdnea=exp=1750045488~acl=/api/1/1/e/4/5/0/e4589311b7cdd524d1767bc2b7b6e17f.mp3*~data=user_id=0,application_id=42~hmac=bb724a3c6c64f2f399f2c66487cf363ee794542ac5d76f5447f0cf64fdfb15f0";

function Song() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();

  const [playedMusic, setPlayedMusic] = useState();
  let audioRef = useRef();

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/message')
  //   .then(res => res.json()) //  setData(data)
  //   .then(data =>   setData(data));
  //   audioRef.current.load();

  //   audioRef.current.play();
  // }, [playedMusic])
  useEffect(() => {
    fetch("https://api.deezer.com/search?q=centralcee")
      .then((res) => res.json()) //  setData(data)
      .then((data) => setData(data));
    audioRef.current.load();
    console.log(data);
    audioRef.current.play();
  }, [search]);

  function handleMusicChange(index) {
    setPlayedMusic(data[index].music);
    console.log(data[index].name);
  }

  return (
    <>
      <Navbar setSearch={setSearch} /> {search}
      <div className="flex flex-col lg:flex-row">
        <div className="inline-flex flex-col justify-center items-center h-[50vh] w-[100vw] lg:h-[100vh] Lg:w-[50vw] bg-pink-300  ">
          <div className="inline-flex  h-[30vw] w-[30vw] bg-red-300 ">
            <img
              src="https://cdn-images.dzcdn.net/images/artist/bf74fc764097630ba58782ae79cfbee6/500x500-000000-80-0-0.jpg"
              className=" rounded-lg"
              style={{ width: "30vw", aspectRatio: 1 / 1 }}
            />
          </div>

          {/* <h1 className="text-[2.5vw]">{data[0].name}</h1> */}
          <audio controls ref={audioRef} autoPlay className="w-[20vw]">
            <source src={songLink} type="audio/mp3" autoPlay />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="bg-blue-200 inline-flex h-[50vh] w-[100vw]  lg:h-[100vh]  Lg:w-[50vw] p-[2vw] ">
          <ul className="bg-purple-200">
            {data.map((dat, index) => (
              <li
                key={index}
                className="text-[2rem] text-black cursor-pointer hover:bg-red-200"
                onClick={() => handleMusicChange(index)}
              >
                {dat.name}
              </li>
            ))}{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus
            iure tempore voluptatem quisquam voluptas laborum iste, ex dicta
            aliquid aperiam. Ratione soluta nostrum temporibus a distinctio
            facere ipsum pariatur optio eius saepe architecto rerum, quaerat
            facilis eos possimus culpa quisquam, consectetur quos, odit tempora
            corrupti? Numquam sed, corrupti nisi iste maiores eos ea esse
            dolorem omnis possimus enim, odit ex, nulla voluptas voluptatum id.
            Maiores, modi, molestias reiciendis dolorum ea corporis porro hic
            repellendus similique veritatis provident dicta, sequi facilis
            pariatur culpa tenetur architecto a itaque consequatur deserunt
            veniam animi consequuntur nulla? Ullam laboriosam nostrum ipsum
            debitis quo dolores doloremque cum vitae aut exercitationem aliquam,
            nisi beatae perferendis eum nihil, labore aperiam doloribus dolor
            quae ducimus. Adipisci, accusamus. Amet veritatis odit quas
            repudiandae maiores architecto eligendi sit? Aliquam vitae ut
            officiis perferendis magni dolorum, repellendus adipisci dolor, illo
            recusandae eos. Mollitia et ullam natus error beatae, quas, alias
            commodi voluptate architecto maxime, sunt accusantium. Magni veniam
            molestiae optio, illum veritatis eius sit ipsum? Laborum molestiae
            commodi accusantium, inventore excepturi illo consequatur architecto
            rerum aut fugit, magni quaerat et totam aliquid necessitatibus
            tempore perspiciatis enim corrupti dolorem beatae omnis ipsum sit
            molestias! Distinctio, repellat enim, molestias est quaerat
            perferendis itaque beatae illo dolores quod iste exercitationem
            culpa nisi optio incidunt similique, nam ea facere aliquid error ex
            reiciendis? Aut reprehenderit eos quas iure consectetur? Sit ipsam
            sequi voluptatibus unde dolore magni expedita, ab soluta
            necessitatibus totam in id sed consequuntur fugiat exercitationem
            nobis perferendis reiciendis odio. Omnis accusamus nihil expedita,
            minima eos aperiam deleniti magni incidunt vel quisquam tempore nemo
            maxime, hic corporis temporibus doloremque. Nemo velit, dolores
            dicta quisquam eum earum. Unde, quaerat ipsum harum perferendis
            veniam tenetur maiores rerum nesciunt natus cumque voluptatum quos
            corporis vitae quasi earum ratione illum dolore quod at. Neque
            voluptates ut repudiandae ipsam sit perspiciatis magnam possimus
            necessitatibus cupiditate quae, alias accusantium vel aliquam ipsa,
            fuga sint eius pariatur nemo eum culpa reprehenderit. Veritatis
            molestiae, voluptatibus excepturi cum sunt consequatur quod sint
            amet magnam, ad quisquam iusto nisi, aut ex non nihil tenetur quam
            sequi earum fugit voluptates optio eveniet ipsa. Minima, commodi
            odit. Temporibus at, recusandae fuga ab quam reiciendis iusto
            architecto cum delectus maxime. Soluta beatae, culpa autem
            accusantium ab voluptatum quam facilis reiciendis saepe libero
            debitis distinctio blanditiis fuga, molestiae voluptas aspernatur
            dolorum deserunt mollitia. Consectetur, dolorum! Illum, dicta. Sit
            enim est quo tempora cum consequatur quaerat. Exercitationem, quasi.
            Pariatur, maiores. Doloribus ipsam voluptatibus minima assumenda
            repellendus, possimus distinctio, aliquam eaque nobis iste, eius
            architecto? Amet quibusdam nam cumque incidunt mollitia vero
            repudiandae a quas minus praesentium voluptas excepturi nihil quia
            ipsum velit omnis esse totam, nesciunt eaque, explicabo at aperiam
            facere! Impedit adipisci ab ipsum facere, vitae ad ipsam inventore
            eveniet commodi quibusdam, debitis delectus magnam aspernatur
            consequuntur odio corporis? Fuga, voluptatibus voluptatum
            praesentium labore possimus tempore amet quibusdam. Sapiente laborum
            reprehenderit voluptatem enim labore dolorem possimus dignissimos
            eum soluta, alias maxime vel natus, provident consequuntur, beatae
            sunt quas aliquid nulla? Laboriosam numquam aspernatur aperiam illo,
            dignissimos totam reprehenderit ex asperiores nihil dolores nostrum
            fuga tenetur dolorem? Ducimus, aliquam maxime veniam quibusdam
            inventore aspernatur error omnis? Quidem perferendis quibusdam
            voluptatum quae corrupti, deleniti quam aliquam esse iste ab eius
            sapiente magnam dicta blanditiis accusamus libero tenetur iusto illo
            eligendi repellendus magni. Omnis odit hic odio libero reprehenderit
            alias modi, sed quas, asperiores quis laudantium id eos aliquid quae
            reiciendis, ut ipsam labore similique doloremque? Quos, sequi.
            Architecto corporis maxime a culpa quaerat nobis voluptate
            perferendis cupiditate obcaecati suscipit numquam, expedita nulla
            dignissimos tenetur cum voluptatum quibusdam incidunt. Tenetur
            molestias distinctio aliquid provident ab omnis, praesentium unde
            asperiores explicabo earum nobis veritatis voluptas ut nihil nostrum
            repellat possimus vel eos id. Rerum optio tempore atque qui
            voluptates perferendis cum, nulla consectetur! Culpa, placeat magni
            esse numquam quia molestias accusantium. Ut deserunt recusandae
            placeat tenetur magnam quibusdam culpa. Suscipit, sequi. Sed
            eligendi est harum accusantium facere qui eos omnis natus,
            voluptatem, quisquam suscipit. In, inventore velit! Error, non
            tenetur? Quis quaerat totam vel, exercitationem id reprehenderit
            facilis veniam quibusdam repellendus error quos dolorem quas labore
            ipsum iusto quisquam! Necessitatibus culpa provident soluta voluptas
            deleniti. Omnis commodi delectus est, non suscipit illum doloribus
            officiis ratione sit odit deleniti, nisi laborum impedit deserunt
            quod eos. Illo odit voluptatum aut ullam est voluptatibus adipisci
            nam vero placeat a nesciunt officia veniam asperiores aliquam velit,
            nostrum fuga consequatur dignissimos distinctio. Id, quos? Ut nihil
            cum quos illum, porro pariatur obcaecati placeat facere, quis id ex
            quod, reprehenderit quas suscipit exercitationem laudantium ducimus
            tenetur natus consequatur velit dolores ab enim! Consequatur culpa
            soluta doloremque blanditiis modi beatae quisquam, harum nobis a
            sapiente. Repellat atque omnis, saepe eligendi a doloribus maiores
            praesentium debitis, repellendus deserunt at asperiores sapiente
            molestias blanditiis numquam quasi quidem sequi, maxime veritatis
            enim fugit? Placeat aspernatur consectetur consequuntur similique
            praesentium tempore sed, amet illo atque veniam asperiores officia
            labore debitis eius, aliquid repudiandae quo ipsum temporibus. Fugit
            ipsum assumenda magni vero harum temporibus veniam velit aspernatur,
            neque in deserunt similique eligendi eos eveniet totam eum
            distinctio laboriosam cumque facere dolorem. Ullam magnam mollitia
            aspernatur qui quam ea eum vitae cumque! Consequuntur officia
            voluptatum voluptates voluptatem pariatur, quas sed veniam eligendi
            reiciendis adipisci commodi, eveniet modi placeat beatae similique
            suscipit necessitatibus corporis nihil. Repudiandae quo sint cum.
            Est blanditiis nisi, quod consequuntur repudiandae deserunt
            provident ad, id consequatur facilis sunt nulla. Blanditiis
            cupiditate maxime porro dicta recusandae temporibus beatae,
            consectetur ea asperiores, repellat repellendus accusantium aliquid,
            consequuntur voluptas fugit enim quos expedita neque nulla! Libero
            temporibus, iste maiores dolore obcaecati tenetur sapiente aliquid,
            atque dicta voluptas praesentium nisi dolores, est eum dolor. Ea
            asperiores accusamus tempore amet voluptatem quod nihil
            necessitatibus similique ipsam est. Nulla dicta, sit veniam non esse
            harum placeat at voluptatum sequi! Animi inventore impedit quod
            dolor ut ex, quis non optio molestiae quas, maxime vitae quisquam
            nulla. Officia obcaecati soluta alias, quia quis ad voluptas
            quibusdam excepturi deleniti necessitatibus sapiente architecto
            voluptatum eaque fugit corrupti impedit non! Veritatis ratione
            sapiente quas. Facilis magnam id iste quos molestiae odit modi
            necessitatibus.
          </ul>
        </div>
      </div>
    </>
  );
}

export default Song;
