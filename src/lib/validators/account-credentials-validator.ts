import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";


export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(5, { message: "password must be atleast 5 characters long" }),
  });

export type TauthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;