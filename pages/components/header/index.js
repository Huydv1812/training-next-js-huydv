import React, { useEffect, useState } from "react";
import { getListtag } from "../../api/getApi";
import { useRouter } from "next/router";

export const Header = () => {
  const [getListTag, setGetListTag] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getListtag().then((res) => {
      setGetListTag(res.data);
    });
    return () => {};
  }, []);

  const getListByTag = (tag) => {
    // router.push(`/tag/${tag}`);
  };

  return (
    <div className="header">
      <div className="header--top">
        <img
          src="https://tinmoi.vn/pc2021/static/images/logo-blue.svg"
          alt="title"
        />
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="list-tag">
            <div
              className="tag"
              onClick={() => {
                router.push(`/posts`);
              }}
            >
              <img
                src="https://tinmoi.vn/pc2021/static/images/icon-home.svg"
                alt=""
              />
            </div>

            {getListTag.map((item, idx) => {
              if (item && item !== "" && idx < 10) {
                return (
                  <div
                    key={idx}
                    className="tag"
                    onClick={() => getListByTag(item)}
                  >
                    {item}
                  </div>
                );
              }
              return;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
