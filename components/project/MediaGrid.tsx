import MediaSlot, { type MediaItem } from "./MediaSlot";

export interface MediaGridProps {
  /**
   * 그룹 이름 — 같은 흐름을 유형별로 나눠 보여줄 때만 붙인다.
   * 캡션이 아니라 구분자라, eyebrow 조합에서 색만 한 단계 올려 쓴다.
   */
  label?: string;
  /** 한 행에 놓을 슬롯 수. 화면 흐름을 좌→우로 읽히게 하려면 2, 견주려면 3 */
  columns?: 2 | 3;
  items?: MediaItem[];
}

const COLUMNS = {
  2: "grid-cols-2",
  3: "grid-cols-3",
} as const;

/** 그룹 라벨 — 섹션 eyebrow 와 같은 조합에서 색만 캡션보다 진하게 둔다 */
export const MEDIA_GROUP_LABEL =
  "mb-[var(--space-150)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] tracking-[var(--site-tracking-eyebrow)] [font-weight:var(--font-weight-600)] text-[var(--color-label-neutral)]";

/**
 * 같은 흐름의 화면 여러 장을 나란히 놓는 격자.
 * 슬롯 자체의 세로 여백은 끄고 이 컴포넌트가 한 덩어리로 여백을 잡는다 —
 * 슬롯마다 여백이 살아 있으면 행 사이가 두 배로 벌어진다.
 */
export default function MediaGrid({
  label,
  columns = 3,
  items = [],
}: MediaGridProps) {
  return (
    <div className="my-[var(--space-400)]">
      {label && <p className={MEDIA_GROUP_LABEL}>{label}</p>}

      <div
        className={`grid gap-[var(--space-250)] ${COLUMNS[columns]} max-[720px]:grid-cols-1 [&>figure]:my-0`}
      >
        {items.map((item) => (
          <MediaSlot key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}
