# 핸드오프 프리플라이트 — 완료/취소 내역 기획 정합성 검사

파일키: gC4h···· / 대상 노드: 테이블 리스트 · 일감 정보 · edge cases

1. 토큰 검사 스킬과 동일한 Figma REST 인증 방식으로,
   각 노드 서브트리의 모든 TEXT characters를 추출하는 스크립트를 작성해줘.
   (인스턴스 내부 텍스트 포함)

2. 테이블에서 28개 컬럼명을 순서대로 뽑아 아래 API 응답 필드와
   1:1 매핑 표를 작성해줘. 매핑 안 되는 컬럼/필드는 각각 별도 표기.
   [응답 필드] id, status, name, settlementRemarkType, roomGroupName,
   assignedKeepers, cancelReason, canceledBy … (30여 종 명시)

3. edge cases 프레임을 아래 기대 케이스 9종과 대조하고
   커버/미커버를 표기해줘:
   - 조회 결과 0건(빈 상태)      - 사유 없는 취소(cancelReason null)
   - 시스템 자동 취소 주체 표기   - 클레임 없음/대기/완료 3분기
   - 완료→취소 전환 진입점       - 내려받기 실패/만료
   - 키퍼 0명/복수 키퍼          - 페이징 처리 방식

4. 일감 정보에서 취소 항목 조건부 필드 존재 여부를 확인해줘.
   (cancelReason · canceledBy · cancelBeforeStatus · 수정 진입점)

출력: 스캔 결과 보고만. 수정 작업 금지.
리포트는 [핸드오프 전 수정 필수 / 개발자 협의 / 커버 확인]
3분류 마크다운 표로 정리.
