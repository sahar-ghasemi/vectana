import { prisma } from "@/lib/prisma";

export const getRemainingRequestByMobile = async (mobile: string) => {
  const user = await prisma.user.findFirst({ where: { mobile } });
  if (!user) return { remainigRequests: 0 };
  const activeSubscription = await prisma.userSubscription.findFirst({
    where: { userId: user.id, isActive: true },
  });
  return { remainigRequests: activeSubscription?.remainingRequest ?? 0 };
};
