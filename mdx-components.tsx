import type { MDXComponents } from "mdx/types";
import {
  PROSE_HEADLINE,
  PROSE_PARAGRAPH,
  PROSE_STRONG,
  PROSE_SUBHEADLINE,
} from "@/components/project/ProseSection";
import {
  CODE_SURFACE,
  CODE_TEXT,
} from "@/components/project/SnippetBlock";

/*
 * MDX 본문의 기본 태그 스타일.
 * 여기 정의한 스타일이 content/blog 의 모든 글에 적용된다.
 *
 * 본문 위계는 워크 상세와 같은 상수를 그대로 쓴다 — 같은 역할이면 같은 조합이어야
 * 하고, 한쪽만 바뀌어 어긋나는 일이 없어야 한다. 여백처럼 MDX 흐름에만 필요한
 * 값은 상수와 겹치지 않는 것만 덧붙인다.
 */
const components: MDXComponents = {
  h2: (props) => (
    <h2
      className={`mt-[var(--space-500)] border-t border-[var(--color-divider-alternative)] pt-[var(--space-300)] ${PROSE_HEADLINE}`}
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className={`mt-[var(--space-400)] ${PROSE_SUBHEADLINE}`} {...props} />
  ),
  p: (props) => <p className={PROSE_PARAGRAPH} {...props} />,
  ul: (props) => (
    <ul
      className={`ml-[var(--space-250)] flex list-disc flex-col gap-[var(--space-100)] ${PROSE_PARAGRAPH}`}
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className={`ml-[var(--space-250)] flex list-decimal flex-col gap-[var(--space-100)] ${PROSE_PARAGRAPH}`}
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="underline underline-offset-[var(--space-050)]"
      {...props}
    />
  ),
  strong: (props) => <strong className={PROSE_STRONG} {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-[var(--space-300)] border-l-[length:var(--dimension-025)] border-[var(--color-divider-normal)] pl-[var(--space-250)] text-[var(--color-label-alternative)]"
      {...props}
    />
  ),
  hr: (props) => (
    <hr
      className="my-[var(--space-500)] border-[var(--color-divider-alternative)]"
      {...props}
    />
  ),
  /*
   * 본문 이미지. next/image 를 쓰지 않는다 — static export 라
   * images.unoptimized 이고, MDX 가 넘기는 건 크기 정보 없는 img 다.
   * 설명은 앞뒤 본문이 하므로 캡션은 두지 않는다.
   */
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="my-[var(--space-300)] h-auto max-w-full rounded-[var(--radius-300)] border border-[var(--color-divider-alternative)]"
      alt=""
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-[var(--radius-100)] bg-[var(--color-gray-100)] px-[var(--space-050)] font-[family-name:var(--site-font-mono)] text-[length:var(--font-size-075)]"
      {...props}
    />
  ),
  /*
   * 스크롤은 래퍼가 맡고 표는 table 로 남긴다.
   * table 자체에 display:block 을 주면 표 레이아웃이 풀려 w-full 이 먹지 않고
   * 내용 폭만큼만 그려진다 — 그래서 감싸는 쪽에 overflow 를 건다.
   */
  table: (props) => (
    <div className="my-[var(--space-300)] overflow-x-auto">
      <table
        className="w-full border-collapse text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)]"
        {...props}
      />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-[var(--color-divider-normal)] px-[var(--space-150)] py-[var(--space-100)] text-left align-top whitespace-nowrap [font-weight:var(--font-weight-700)]"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-b border-[var(--color-divider-alternative)] px-[var(--space-150)] py-[var(--space-100)] text-left align-top text-[var(--color-label-neutral)]"
      {...props}
    />
  ),
  /*
   * 라이트 코드 블록. 신택스 색은 globals.css 의 --site-code-* 가 hljs 클래스에 준다.
   * pre 안의 code 는 인라인 코드 스타일(배경·패딩)을 걷어내 배경이 겹치지 않게 한다.
   */
  pre: (props) => (
    <pre
      className={`my-[var(--space-300)] ${CODE_SURFACE} ${CODE_TEXT} [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[length:inherit]`}
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
