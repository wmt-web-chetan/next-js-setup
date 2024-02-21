import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { users } from "@/helpers/constant";

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
    return decoded ? decoded?.username : null;
  } catch (err) {
    return null;
  }
}

export async function GET(request) {
  // Extract JWT from cookies
  const token = request.cookies.get("token")?.value;

  // Verify the token and get the user ID
  const userId = verifyToken(token);
  if (!userId) {
    return new NextResponse(
      JSON.stringify({ errors: "Unauthorized", status: 401, success: false }),
      {
        status: 401,
      }
    );
  }
  const user = users.find((u) => u.username === userId);
  if (user) {
    return new NextResponse(
      JSON.stringify({
        id: user?.id,
        username: user?.username,
        detail: user?.details,
        status: 200,
        success: true,
      }),
      {
        status: 200,
      }
    );
  } else {
    return new NextResponse(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }
}
