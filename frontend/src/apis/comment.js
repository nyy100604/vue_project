import { request } from "../utils/request";

export async function createComment(content, postId) {
  await request("/api/comments", {
    method: "POST",
    body: {
      // strapi要求傳data
      data: {
        content,
        // 關聯類型id
        post: postId,
      },
    },
  });
}

export async function loadComments(postId) {
  if (!postId) return [];
  const response = await request(
    // populate=* 加載comment的所有數據
    "/api/comments?populate=*&filters[post][id][$eq]=" + postId
  );

  return response.data.map((comment) => {
    const result = comment?.attributes;
    return {
      id: comment?.id,
      content: result?.content,
      pubDate: result?.publishedAt,
      user: {
        id: result?.user?.data?.id,
        ...result?.user?.data?.attributes,
      },
    };
  });
}
