/*
 * × 를 글자가 아니라 막대 두 개로 그린다.
 * 글리프는 폰트마다 실제 렌더 크기가 제각각이라 토큰으로 크기를 못 잡는다.
 * 햄버거 막대와 같은 굵기(--dimension-025)를 쓴다.
 */
const BAR =
  "absolute block w-[var(--dimension-300)] [height:var(--dimension-025)] bg-current";

export default function CloseIcon() {
  return (
    <>
      <span aria-hidden className={`${BAR} rotate-45`} />
      <span aria-hidden className={`${BAR} -rotate-45`} />
    </>
  );
}
