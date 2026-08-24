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

/*
 * 카드 hover — 밑줄 대신 글자만 흐려진다. 눌리는 느낌을 주는 쪽이라
 * 썸네일에는 걸지 않는다. 이미지까지 흐려지면 카드가 비활성처럼 보인다.
 */
const HOVER_FADE =
  "opacity-100 transition-opacity duration-[var(--motion-duration-d4)] ease-[var(--motion-easing-out)] group-hover:opacity-60";

export default function WorkGrid({ cards = [] }: WorkGridProps) {
  return (
    <section className="grid grid-cols-3 gap-[var(--space-400)] border-t border-[var(--color-divider-alternative)] py-[var(--space-700)] max-[1024px]:grid-cols-2 max-[720px]:grid-cols-1">
      {cards.map((card) => (
        /*
         * hover 는 HOVER_FADE 가 맡는다 — 글자만 흐려진다.
         * 포커스 링은 전역 :focus-visible 규칙이 그린다. 각진 썸네일에 맞춰
         * 링도 각지게 두고, 기본 오프셋(4px)만 8px 로 벌린다 — 4px 은
         * 썸네일 보더에 붙어 이중 테두리로 보인다.
         */
        <Link
          key={card.href}
          href={card.href}
          aria-label={card.title}
          className="group [--site-focus-ring-offset:var(--space-100)]"
        >
          {/* 522×335 비율. 그리드가 유동 폭이라 고정 px 대신 비율로 잡는다 */}
          <div className={`${SLOT_SURFACE} aspect-[522/335]`}>
            <Image
              src={card.thumbnail.src}
              alt={card.thumbnail.alt}
              width={card.thumbnail.width}
              height={card.thumbnail.height}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className={`mt-[var(--space-250)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] tracking-[var(--site-tracking-work-title)] [font-weight:var(--font-weight-600)] ${HOVER_FADE}`}>
            {card.title}
          </h2>

          {card.tags.length > 0 && (
            /* 13px 토큰이 없어 --font-size-050(12px). weight 300 도 스케일에 없어 400 */
            <p className={`mt-[var(--space-050)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] [font-weight:var(--font-weight-400)] text-[var(--color-label-normal)] ${HOVER_FADE}`}>
              {card.tags.slice(0, TAG_LIMIT).join(", ")}
            </p>
          )}
        </Link>
      ))}
    </section>
  );
}
