import Image from "next/image";
import Link from "next/link";
import { SLOT_SURFACE } from "@/components/project/SlotFrame";

export interface WorkCard {
  title: string;
  /** 상세 페이지 경로 — 카드 전체가 이 링크가 된다 */
  href: string;
  /** 상세 Hero 를 그대로 재사용한다 — 목록과 상세가 같은 얼굴을 갖게 */
  thumbnail: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  /**
   * 카드 한 줄 요약. [도메인/분야, (메뉴·depth — 생략 가능), 프로젝트 목적] 순.
   * 최대 4개까지만 노출한다 — 카드 폭에서 두 줄을 넘기지 않기 위해서다.
   */
  tags: string[];
}

export interface WorkGridProps {
  cards?: WorkCard[];
}

/** 태그 노출 상한 — 넘는 값은 데이터에 남되 화면에는 나오지 않는다 */
const TAG_LIMIT = 4;

export default function WorkGrid({ cards = [] }: WorkGridProps) {
  return (
    <section className="grid grid-cols-3 gap-[var(--space-400)] border-t border-[var(--color-divider-alternative)] py-[var(--space-700)] max-[1024px]:grid-cols-2 max-[720px]:grid-cols-1">
      {cards.map((card) => (
        /*
         * hover 는 사이트 공통 문법을 따른다 — 색이 아니라 제목 밑줄.
         * 포커스 링은 카드 전체에 걸어 키보드로도 어디에 와 있는지 보이게 한다.
         */
        <Link
          key={card.href}
          href={card.href}
          aria-label={card.title}
          className="group rounded-[var(--radius-500)] focus-visible:outline-[length:var(--dimension-025)] focus-visible:outline-offset-[var(--space-100)] focus-visible:outline-[var(--color-label-normal)]"
        >
          <div className={`${SLOT_SURFACE} aspect-[16/10]`}>
            <Image
              src={card.thumbnail.src}
              alt={card.thumbnail.alt}
              width={card.thumbnail.width}
              height={card.thumbnail.height}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="mt-[var(--space-250)] text-[length:var(--font-size-200)] leading-[var(--font-line-height-200)] tracking-[var(--site-tracking-work-title)] [font-weight:var(--font-weight-700)] group-hover:underline">
            {card.title}
          </h2>

          {card.tags.length > 0 && (
            <p className="mt-[var(--space-050)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-alternative)]">
              {card.tags.slice(0, TAG_LIMIT).join(", ")}
            </p>
          )}
        </Link>
      ))}
    </section>
  );
}
