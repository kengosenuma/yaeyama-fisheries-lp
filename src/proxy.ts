import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USER = "user";
const PASSWORD = "password";

export function proxy(request: NextRequest) {
  const authorizationHeader = request.headers.get("Authorization");

  if (!authorizationHeader || !authorizationHeader.startsWith("Basic ")) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }

  const base64Credentials = authorizationHeader.split(" ")[1];
  try {
    const decodedCredentials = atob(base64Credentials);
    const [user, password] = decodedCredentials.split(":");

    if (user === USER && password === PASSWORD) {
      return NextResponse.next();
    }
  } catch {
    // fall through to 401 below
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|images/|favicon.ico|icon.png).*)"],
};
