import { useTranslation } from "@/i18next/client";
import { useParams } from "next/navigation";

function useTranslate() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string);

  return t;
}

export default useTranslate;
