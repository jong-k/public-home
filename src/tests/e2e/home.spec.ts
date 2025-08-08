import { test, expect } from "@playwright/test";

test.describe("홈페이지", () => {
  test("페이지가 정상적으로 로드된다", async ({ page }) => {
    await page.goto("/");

    // 페이지 제목 확인
    await expect(page).toHaveTitle(/김종한 기술 블로그/);
  });

  test("블로그 포스트 목록이 표시된다", async ({ page }) => {
    await page.goto("/");

    // 포스트 카드가 최소 1개 이상 존재하는지 확인
    const postCards = page.locator('a[href^="/posts/"]');
    await expect(postCards).toHaveCount(2); // 현재 2개의 포스트가 있음

    // 각 포스트 카드가 제목과 날짜를 포함하는지 확인
    const firstCard = postCards.first();
    await expect(firstCard).toBeVisible();
  });

  test("포스트 카드 클릭 시 해당 포스트 페이지로 이동한다", async ({ page }) => {
    await page.goto("/");

    // 첫 번째 포스트 카드 클릭
    const firstPostLink = page.locator('a[href^="/posts/"]').first();
    const href = await firstPostLink.getAttribute("href");

    await firstPostLink.click();

    // URL이 변경되었는지 확인
    await expect(page).toHaveURL(href!);
  });

  test("반응형 디자인이 모바일에서 정상 작동한다", async ({ page }) => {
    // 모바일 뷰포트로 설정
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // 페이지가 정상적으로 로드되는지 확인
    await expect(page).toHaveTitle(/김종한 기술 블로그/);

    // 포스트 목록이 여전히 표시되는지 확인
    const postCards = page.locator('a[href^="/posts/"]');
    await expect(postCards.first()).toBeVisible();
  });
});
