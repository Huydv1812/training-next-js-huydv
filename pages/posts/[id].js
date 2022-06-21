import Head from "next/head";
import { Layout } from "../components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getItemPage, getListCommentById } from "../api/getApi";
import { LikeFilled } from "@ant-design/icons";

import moment from "moment";

export default function ItemPage() {
  const router = useRouter();
  const [dataPost, setdataPost] = useState();
  const [listComment, setListComment] = useState([]);

  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getItemPage(id).then((res) => {
        setdataPost(res);
      });

      getListCommentById(id).then((res) => {
        setListComment(res.data);
      });
    }

  }, [id]);
  return (
    <>
      <Head>
        <title>Bài viết</title>
        <meta name="description" content="Danh sách bài viết" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <div className="container " style={{ minHeight: "100vh" }}>
          {dataPost && (
            <>
              <h3 className="title-1">{dataPost?.text}</h3>
              <div className="flex" style={{ gap: "50px" }}>
                <p className="time">
                  {"Ngày " +
                    moment(dataPost?.publishDate).format("MM/DD/YYYY HH:mm")}
                </p>
                <p className="user-name">
                  {dataPost?.owner.firstName + " " + dataPost?.owner.lastName}
                </p>
              </div>

              <div className="flex" style={{ margin: "10px 0" }}>
                <span>Tag:</span>
                {dataPost?.tags.map((item, idx) => (
                  <span className="user-name" key={idx}>
                    {item}
                  </span>
                ))}
              </div>
              <p>
                <LikeFilled /> {` ${dataPost?.likes}`}
              </p>
              <div
                style={{
                  maxWidth: "900px",
                  width: "100%",
                  margin: "50px 0",
                  maxHeight: "500px",
                }}
              >
                <img
                  style={{ width: "100%", height: "500px", objectFit: "cover" }}
                  src={dataPost?.image}
                  alt=""
                />
              </div>
              {listComment.length > 0 && (
                <h3 className="title-1">Danh sách comment</h3>
              )}
              <div
                style={{
                  gap: "16px",
                  flexDirection: "column",
                  display: "flex",
                  rowGap: "16px",
                }}
              >
                {listComment.length > 0 &&
                  listComment.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        borderRadius: "16px",
                        backgroundColor: "#bbb",
                        minHeight: "30px",
                        padding: "16px 20px",
                      }}
                    >
                      <div
                        v
                        style={{
                          display: "flex",
                          gap: "20px",
                          marginBottom: "10px",
                        }}
                      >
                        <img
                          src={item.owner.picture}
                          style={{
                            borderRadius: "50%",
                            height: "30px",
                            width: "30px",
                          }}
                        />
                        <h4>
                          {item.owner.firstName + " " + item.owner.lastName}
                        </h4>
                      </div>
                      <p
                        style={{
                          padding: "5px 3px",
                          backgroundColor: "#ddd",
                          borderRadius: "6px",
                        }}
                      >
                        {item.message}
                      </p>
                    </div>
                  ))}
              </div>
              {listComment <= 0 && <h3>Không có comment nào</h3>}
            </>
          )}
        </div>
      </Layout>
    </>
  );
}
