import prisma from "../lib/prisma.ts";
export default function Database({ professionals }) {

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


//professional users only get
export const getStaticProps = async () => {
  let professionals =  await prisma.user.findMany()
 
  professionals.map((x) => {
    x.createdAt = Math.floor(x.createdAt / 1000);
    x.updatedAt = Math.floor(x.createdAt / 1000);
    return x;
  });

  return { props: { professionals } };
};
