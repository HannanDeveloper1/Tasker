import * as z from "zod/v4";

export const registerSchema = z.object({
  name: z
    .string()
    .minLength(1, { message: "Name is required" })
    .minLength(3, { message: "Name must be at least 3 characters long" }),
  email: z
    .string()
    .minLength(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .minLength(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must be at least 8 characters, at least one uppercase letter, at least one lowercase letter, at least one number, and at least one special character",
      }
    ),
});
