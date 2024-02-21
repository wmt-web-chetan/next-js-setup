import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { users } from "@/helpers/constant";

function validateUser(userName, password) {
  const user = users.find(
    (u) => u?.username === userName && u?.password === password
  );
  return !!user;
}

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const isValidUser = await validateUser(username, password);
    if (!isValidUser) {
      return new NextResponse(
        JSON.stringify({ error: "Invalid username or password" }),
        {
          status: 401,
        }
      );
    }
    const token = jwt.sign({ username }, process.env.JWT_SECRET);

    return new NextResponse(
      JSON.stringify({
        token: token,
        status: 200,
        success: true,
        message: "Login successful",
      }),
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=86400`,
        },
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        error: "An error occurred while processing your request",
      }),
      {
        status: 500,
      }
    );
  }
}
