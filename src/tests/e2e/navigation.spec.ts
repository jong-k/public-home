import { expect, test } from "@playwright/test";

test.describe("네비게이션 및 라우팅", () => {
  test("About 페이지가 정상적으로 로드된다", async ({ page }) => {
    await page.goto("/about");

    // 페이지가 로드되었는지 확인
    await expect(page).toHaveURL("/about");
    await expect(page).not.toHaveTitle(/404/);
  });

  test("브라우저 뒤로가기 버튼이 정상 작동한다", async ({ page }) => {
    // 홈 -> 포스트 -> 뒤로가기 시나리오
    await page.goto("/");

    const firstPostLink = page.locator('a[href^="/posts/"]').first();
    await firstPostLink.click();

    // 포스트 페이지로 이동했는지 확인
    await expect(page).toHaveURL(/\/posts\/.+/);

    // 뒤로가기
    await page.goBack();
    await expect(page).toHaveURL("/");
  });

  test("직접 URL 입력으로도 페이지 접근이 가능하다", async ({ page }) => {
    // 직접 About 페이지로 이동
    await page.goto("/about");
    await expect(page).toHaveURL("/about");

    // 직접 포스트 페이지로 이동
    await page.goto("/posts/my-first-blog");
    await expect(page).toHaveURL("/posts/my-first-blog");
  });

  test("존재하지 않는 페이지는 404를 반환한다", async ({ page }) => {
    const response = await page.goto("/non-existent-page");
    expect(response?.status()).toBe(404);
  });
});
