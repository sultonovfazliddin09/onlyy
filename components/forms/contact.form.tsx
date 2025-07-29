"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import useTranslate from "@/hooks/use-translate";
import { contactSchame } from "@/lib/validation";
function ContactForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const t = useTranslate();

  const form = useForm<z.infer<typeof contactSchame>>({
    resolver: zodResolver(contactSchame),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchame>) {
    setIsLoading(true);

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      toast.error("Telegram sozlamalari mavjud emas.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: `📩 Yangi xabar:\n\n👤 Ismi: ${values.name}\n📧 Email: ${values.email}\n💬 Xabar: ${values.message}`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Xabar yuborishda xatolik yuz berdi.");
      }

      toast.success(t("successfully"));
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error(t("error"));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  disabled={isLoading}
                  className="h-32 resize-none"
                  placeholder={t("contactFormTextarea")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={t("contactFormEmail")}
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={t("contactFormName")}
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="w-fit rounded-full"
          size="lg"
          type="submit"
          disabled={isLoading}
        >
          <span>{t("send")}</span>
          <Send className="ml-2 size-4" />
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
