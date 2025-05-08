import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// export async function GET(request: NextRequest) {
//   const users = await prisma.user.findMany();
//   return NextResponse.json(users);
// }

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newUser = await prisma.user.create({
    data: {
      name: body.name, //   continue with the rest of the fields
    },
  });
  return NextResponse.json(newUser);
}
