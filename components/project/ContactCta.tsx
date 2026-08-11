import ContactRow, { type ContactLink } from "@/components/about/ContactRow";

export interface ContactCtaProps {
  headline?: string;
  paragraphs?: string[];
  /** href 없는 항목은 비활성 칩으로 렌더된다 (About 과 같은 규칙) */
  links?: ContactLink[];
}

export default function ContactCta({
  headline = "함께 일할 기회를 기다립니다.",
  paragraphs = ["채용 제안·협업 문의는 이메일로 편하게 연락 주세요."],
  links = [],
}: ContactCtaProps) {
  return (
    <section className="border-t border-[var(--color-divider-alternative)] pt-[var(--space-600)]">
      <h2 className="mb-[var(--space-150)] text-[length:var(--font-size-300)] leading-[var(--font-line-height-300)] tracking-[var(--font-letter-spacing-heading-sm)] [font-weight:var(--font-weight-700)]">
        {headline}
      </h2>

      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="max-w-[var(--site-prose-width)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] text-[var(--color-label-neutral)]"
        >
          {paragraph}
        </p>
      ))}

      <ContactRow links={links} />
    </section>
  );
}
