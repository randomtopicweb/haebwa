// src/data/projects.ts (배너 관리 기능 추가 최종본)
export interface Project {
  id: string;
  title: string;
  category: '게임' | '테스트' | '만들기' | '유틸';
  description: string;
  longDescription: string;
  url: string;
  features: string[];
  image?: string; // 배너에 사용할 이미지 경로 (선택 사항)
  isFeatured?: boolean; // 이 프로젝트를 배너에 표시할지 여부 (선택 사항)
}

export const projects: Project[] = [
  { id: 'p1', title: '해봐 사이트 블로그', category: '유틸', description: '블로그 글 모음', longDescription: '블로그의 글을 모아둔 페이지 입니다.', url: '/blog', features: ['블로그 글', '다양한 주제', '만약에'], image: '/images/project-blog.png', isFeatured: true },
];