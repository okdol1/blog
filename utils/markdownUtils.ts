export const extractText = (content: string) => {
  return content
    .replace(/!\[.*?\]\(.*?\)/g, "") // 이미지 제거 ![alt](src)
    .replace(/\[.*?\]\(.*?\)/g, "") // 링크 제거 [text](url)
    .replace(/`.*?`/g, "") // 인라인 코드 제거 `code`
    .replace(/#+\s/g, "") // 헤더 제거 # Header
    .replace(/>\s/g, "") // 인용문 제거 > Quote
    .replace(/[-_*]{3,}/g, "") // 수평선 제거 --- ***
    .replace(/(\*|_){1,2}(.*?)\1/g, "$2") // 굵게/기울임체 제거 **text** *text*
    .replace(/~~(.*?)~~/g, "$1") // 취소선 제거 ~~text~~
    .replace(/\n+/g, " ") // 줄바꿈 제거
    .trim(); // 양끝 공백 제거
};

/** `![alt](src)` 형식의 첫 번째 이미지 추출 */
export const extractFirstImage = (content: string) => {
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const match = content.match(imageRegex);
  return match ? match[1] : null; // 이미지 src 반환 또는 null
};
