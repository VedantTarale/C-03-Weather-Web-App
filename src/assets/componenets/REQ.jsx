import styles from "../constants/style";

import { useState, useEffect } from "react";
import { http_rq_text } from "../constants/http-req";
import Head from "./Http/Req_topics/Header";
import Methods from "./Http/Req_topics/Method";
import Query from "./Http/Req_topics/Query";
import Requests from "./Http/Req_topics/Request";
import Response from "./Http/Req_topics/Response";
import Status from "./Http/Req_topics/Status";
import Url from "./Http/Req_topics/Url";
import Structure from "./Http/Req_topics/Structure";
function REQ() {
  const [topic, setTopic] = useState(0);
  return (
    <div className="py-6  flex justify-center text-offWhite  text-xl text-left">
      <div className="flex flex-wrap w-[100%] md:w-[60%]">
        <div className={`text-center basis-full ${styles.title}`}>Requests</div>

        <div className="basis-full flex justify-center">
          <div
            className={`flex justify-center flex-wrap  ${styles.btn_grp}`}
            id="button-grp"
          >
            <button
              onClick={() => setTopic(1)}
              className={`${
                topic == 1
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button_start}`}
            >
              Header
            </button>
            <button
              onClick={() => setTopic(2)}
              className={`${
                topic == 2
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button}`}
            >
              Methods
            </button>
            <button
              onClick={() => setTopic(3)}
              className={`${
                topic == 3
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button}`}
            >
              Query
            </button>
            <button
              onClick={() => setTopic(4)}
              className={`${
                topic == 4
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button}`}
            >
              Request
            </button>
            <button
              onClick={() => setTopic(5)}
              className={`${
                topic == 5
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button}`}
            >
              Response
            </button>
            <button
              onClick={() => setTopic(6)}
              className={`${
                topic == 6
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button}`}
            >
              Status
            </button>
            <button
              onClick={() => setTopic(7)}
              className={`${
                topic == 7
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button}`}
            >
              Structure
            </button>
            <button
              onClick={() => setTopic(8)}
              className={`${
                topic == 8
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button_end}`}
            >
              Url
            </button>
          </div>
        </div>
        <div className="w-full h-[5px] rounded-3xl bg-pink-300 my-3"></div>
        <div className="my-10 w-full">
          <div>
            <ul className={`ml-5 ${topic!=0? 'hidden':'inline'} md:inline`}>
              <li className="mb-1  text-left">{http_rq_text.para1}</li>
              <li className="mb-1 text-left">{http_rq_text.para3}</li>
            </ul>
          </div>
          {topic == 1 && <Head />}
          {topic == 2 && <Methods />}
          {topic == 3 && <Query />}
          {topic == 4 && <Requests />}
          {topic == 5 && <Response />}
          {topic == 6 && <Status />}
          {topic == 7 && <Structure />}
          {topic == 8 && <Url />}
        </div>
      </div>
    </div>
  );
}

export default REQ;
