//Mock API의 동작을 정의하는 handler
import { rest } from "msw";

export const handler = [
  rest.get(`/api/user`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "mock",
        avatar_url:
          "https://avatars.githubusercontent.com/u/118494093?s=400&u=dda882584a3d9b8908710bd2dbcfee3f8b46677f&v=4",
        followers: 10,
        following: 10,
        repos: 10,
      })
    );
  }),
];
