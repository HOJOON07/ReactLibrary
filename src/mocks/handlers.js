// import { rest } from "msw";
import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api/user-name", async (req, res, ctx) => {
    const id = req.res.searchParams.get("id");
    return res(
      ctx.json({
        name: id === "1" ? "The one" : "The others",
      })
    );
  }),
  // rest.get(
  //   "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
  //   async (req, res, ctx) => {
  //     const id = req.url.searchParams.get("id");
  //     const originalResponse = await ctx.fetch(req);
  //     const originalResponseData = await originalResponse.json();
  //     return res(
  //       ctx.status(403),
  //       ctx.json({
  //         errorMessage: "Data not Found",
  //       })
  //       // ctx.json({
  //       //   data: {
  //       //     people: [
  //       //       ...originalResponseData.data.people,
  //       //       {
  //       //         name: id,
  //       //         age: 135,
  //       //       },
  //       //     ],
  //       //   },
  //       // })
  //     );
  //   }
  // ),
];
