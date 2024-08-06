import { EditForm } from "@/app/components/dashboard/EditForm";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!data) {
    return undefined;
  }

  return data;
}

export default async function EditRoute({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);

  if (!data) {
    return notFound();
  }

  return <EditForm data={data} />;
}
