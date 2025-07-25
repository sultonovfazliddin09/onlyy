import z from "zod";

export const contactSchame = z.object({
  messege: z.string().min(10),
  email: z.string().email(),
  name: z.string().min(3),
});
