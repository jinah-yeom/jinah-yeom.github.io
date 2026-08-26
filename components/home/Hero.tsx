export interface HeroProps {
  /** 줄바꿈 단위로 나눈 스테이트먼트 */
  lines?: string[];
}

/** 줄 사이 지연 — 1줄이 다 오르기 전에 2줄이 출발해야 한 덩어리로 읽힌다 */
const STAGGER_MS = 120;

const TYPE =
  "text-[length:var(--font-size-550)] leading-[var(--font-line-height-600)] tracking-[var(--font-letter-spacing-none)] [font-weight:var(--font-weight-500)] max-[720px]:text-[length:var(--font-size-400)] max-[720px]:leading-[var(--font-line-height-400)] max-[480px]:text-[length:var(--font-size-200)] max-[480px]:leading-[var(--font-line-height-200)]";

export default function Hero({ lines = [] }: HeroProps) {
  return (
    <section className="flex min-h-[62vh] items-center">
      {/*
       * 영문 전용이라 트래킹을 none 으로 둔다 — display 토큰의 -0.4px 은
       * 한글 낱자 사이를 좁히려는 값이고, 라틴 문자에는 자간이 붙어 보인다.
       *
       * 줄바꿈 위치가 카피의 일부라, 세 줄이 접히지 않는 선에서 크기를 두 번
       * 내린다. 36px 은 673px 폭까지, 24px 은 432px 까지, 18px 은 331px 까지
       * 세 줄을 지킨다 — 흔한 폰 폭(360·375·390)이 전부 이 안에 들어온다.
       */}
      <p lang="en" className={TYPE}>
        {lines.map((line, index) => (
          /*
           * 마스크는 줄마다 따로 씌운다. 한 덩어리에 씌우면 위 줄이 아래 줄
           * 자리를 지나가며 겹쳐 보인다.
           * 여백은 두지 않는다 — line-height 상자가 y·p 꼬리보다 아래로 더
           * 내려가 잘리지 않고, 마스크를 키우면 시작 위치(110%)가 마스크를
           * 다 벗어나지 못해 대기 중에 글자 윗머리가 비친다.
           */
          <span key={line} className="block overflow-hidden">
            <span
              className="reveal-line block"
              style={{ animationDelay: `${index * STAGGER_MS}ms` }}
            >
              {line}
            </span>
          </span>
        ))}
      </p>
    </section>
  );
}
