import { useI18n } from "@/context/I18nContext";

export default function PortfolioGrid() {
  const { t } = useI18n();

  return (
    <section className="px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold mb-8">{t("my_expertise")}</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">{t("fpv_title")}</h3>
          <p className="text-gray-400">{t("fpv_text")}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{t("tourism_title")}</h3>
          <p className="text-gray-400">{t("tourism_text")}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{t("musicvideos_title")}</h3>
          <p className="text-gray-400">{t("musicvideos_text")}</p>
        </div>
      </div>
    </section>
  );
}
