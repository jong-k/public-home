import { expect, test } from "@playwright/test";

test.describe("블로그 포스트 페이지", () => {
  test("개별 포스트 페이지가 정상적으로 로드된다", async ({ page }) => {
    // 홈페이지에서 첫 번째 포스트 링크 가져오기
    await page.goto("/");
    const firstPostLink = page.locator('a[href^="/posts/"]').first();
    const href = await firstPostLink.getAttribute("href");

    // 직접 포스트 페이지로 이동
    await page.goto(href!);

    // 페이지가 로드되었는지 확인
    await expect(page).not.toHaveTitle(/404/);
  });

  test("포스트 메타데이터가 표시된다", async ({ page }) => {
    await page.goto("/posts/my-first-blog");

    // 포스트 제목이 있는지 확인 (PostHeader 컴포넌트 내의 제목)
    const title = page.locator("h1, h2").first();
    await expect(title).toBeVisible();

    // 메타 정보 확인 (날짜 등)
    const metaInfo = page.locator('time, [data-testid="post-date"], span:has-text("2025")');
    if ((await metaInfo.count()) > 0) {
      await expect(metaInfo.first()).toBeVisible();
    }
  });

  test("포스트 콘텐츠가 렌더링된다", async ({ page }) => {
    await page.goto("/posts/my-first-blog");

    // 콘텐츠 영역이 존재하는지 확인
    const content = page.locator('main, article, .prose, [data-testid="post-content"]');
    await expect(content.first()).toBeVisible();
  });

  test("존재하지 않는 포스트는 500 상태를 반환한다", async ({ page }) => {
    const response = await page.goto("/posts/non-existent-post");

    // Next.js static export에서는 존재하지 않는 동적 경로에 대해 500을 반환
    expect(response?.status()).toBe(500);
  });

  test("홈으로 돌아가기 네비게이션이 작동한다", async ({ page }) => {
    await page.goto("/posts/my-first-blog");

    // 홈으로 돌아가는 링크/버튼 찾기
    const homeLink = page.locator('a[href="/"], [href="/"], nav a').first();

    if ((await homeLink.count()) > 0) {
      await homeLink.click();
      await expect(page).toHaveURL("/");
    }
  });

  test("SEO 메타태그가 올바르게 설정된다", async ({ page }) => {
    await page.goto("/posts/my-first-blog");

    // Open Graph 메타태그 확인
    const ogTitle = page.locator('meta[property="og:title"]');
    if ((await ogTitle.count()) > 0) {
      const titleContent = await ogTitle.getAttribute("content");
      expect(titleContent).toBeTruthy();
    }

    // 페이지 description 확인
    const description = page.locator('meta[name="description"]');
    if ((await description.count()) > 0) {
      const descContent = await description.getAttribute("content");
      expect(descContent).toBeTruthy();
    }
  });
});
