import prisma from "../lib/prisma.ts";

//prisma.user.create() to make new user for sign up
//prisma.user.findMany() to get all users from user table
export default function Database({ professionals }) {
  console.log("pros", professionals);
  return (
    <div className="flex flex-col">
      {professionals.map((x) => (
        <div>
          <span>{x.id}</span>
          <span>{x.name}</span>
          <span>{x.email}</span>
          <span>{x.isProfessional ? "Yes" : "No"}</span>
          <span>{Math.floor(x.createdAt / 86400) + " Days"}</span>
        </div>
      ))}
    </div>
  );
}

// export const getStaticProps = async () => {
//     const feed = await prisma.post.findMany({
//       where: { published: true },
//       include: {
//         author: {
//           select: { name: true },
//         },
//       },
//     });
//     return { props: { feed } };
//   };

//professional users only get
export const getStaticProps = async () => {
  let professionals = await prisma.user.findMany({
    where: { isProfessional: true },
  });

  professionals.map((x) => {
    x.createdAt = Math.floor(x.createdAt / 1000);
    x.updatedAt = Math.floor(x.createdAt / 1000);
    return x;
  });

  return { props: { professionals } };
};
