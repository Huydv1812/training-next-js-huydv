import axios from "axios";

export async function getListNews(param) {
  console.log(param);
  const res = await axios({
    method: "GET",
    headers: { "app-id": "62aef3cc830230fe07e88408" },
    url: "https://dummyapi.io/data/v1/post",
    params: {
      page: param - 1,
      limit: 12,
    },
  });

  const data = await res.data;

  return data;
}

export async function getListCommentById(id) {
  const res = await axios({
    method: "GET",
    headers: { "app-id": "62aef3cc830230fe07e88408" },
    url: `https://dummyapi.io/data/v1/post/${id}/comment`,
    params: {
      page: 0,
      limit: 6,
    },
  });

  const data = await res.data;

  return data;
}

//post/:id/comment

// export async function getListtag(params) {
//   const { tag, param } = params;

//   const res = await axios({
//     method: "GET",
//     headers: { "app-id": "62aef3cc830230fe07e88408" },
//     url: `https://dummyapi.io/data/v1/tag/${tag}/post`,
//   });

//   const data = await res.data;
//   return data;
// }

export async function getListtag() {
  const res = await axios({
    method: "GET",
    headers: { "app-id": "62aef3cc830230fe07e88408" },
    url: "https://dummyapi.io/data/v1/tag",
  });

  const data = await res.data;
  return data;
}

export async function getItemPage(id) {
  const res = await axios({
    method: "GET",
    headers: { "app-id": "62aef3cc830230fe07e88408" },
    url: `https://dummyapi.io/data/v1/post/${id}`,
  });

  const data = await res.data;
  return data;
}
