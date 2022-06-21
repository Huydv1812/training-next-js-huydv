import Head from "next/head";
import { useEffect, useState } from "react";
import { getListNews } from "../api/getApi";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import Link from "next/link";
import moment from "moment";
import { Pagination } from "antd";

export default function Category() {
  const [listPost, setListPost] = useState([]);
  const [total, setTotal] = useState([]);

  const [param, setParam] = useState(1);

  const onShowSizeChange = (current, pageSize) => {
    setParam(current);
  };

  useEffect(() => {
    getListNews(param).then((res) => {
      setListPost(res.data);
      setTotal(res.total);
    });
  }, [param]);

  return (
    <>
      <Head>
        <title>Danh sách bài viết</title>
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
        <div className="container">
          <h3 className="title-1">Tin tức mới</h3>
          {listPost && (
            <>
              <div className="list-post">
                {listPost.map((item, idx) => (
                  <div key={idx} className="post">
                    {item.image && <img src={`${item.image}`} alt="" />}

                    <div className="content">
                      <Link href={`/posts/${item.id}`}>
                        <a className="title">{item.text}</a>
                      </Link>
                      <div className="wrap">
                        <p className="time">
                          {moment(item.publishDate).format("MM/DD/YYYY HH:mm")}
                        </p>
                        <p className="user-name">
                          {item.owner.firstName + " " + item.owner.lastName}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination
                size="small"
                total={total ? total : 50}
                onChange={onShowSizeChange}
                defaultCurrent={param}
                showQuickJumper={false}
                showTitle={false}
                showLessItems={false}
                showTotal={false}
              />
            </>
          )}
        </div>
      </Layout>
    </>
  );
}
