import liveNames from '@/data/liveNames.json';
import { expect } from '@playwright/test';
import { test } from '@playwright/test';

test('最初の画面から通しで実行できる', async ({ page }) => {
  await page.goto('https://inori-track.vercel.app/');

  // 画面に「今すぐ始める！」ボタンが表示されることを確認
  await expect(page.getByRole('button', { name: '今すぐ始める！' })).toBeVisible();
  await page.getByRole('button', { name: '今すぐ始める！' }).click();

  // 画面に全てのライブが表示されていること
  for (const live of liveNames) {
    const checkbox = await page.getByLabel(live.name);
    await expect(checkbox).toBeVisible();
  }

  await page.getByLabel('LIVE TOUR 2019 Catch the').click();
  await page.getByLabel('LIVE TOUR 2022 glow').click();
  await page.getByLabel('LIVE TOUR 2023 SCRAP ART').click();
  await page.getByLabel('LIVE TOUR 2024 heart bookmark').click();
  await page.getByLabel('いのりまち町民集会2019').click();
  await page.getByLabel('いのりまち町民集会2023').click();
  await page.getByLabel('いのりまち町民集会2024 -ACOUSTIC LIVE').click();

  // 会場を選択するボタンが表示されている
  await expect(page.getByRole('button', { name: '会場を選択する' })).toBeVisible();
  await page.getByRole('button', { name: '会場を選択する' }).click();
  await page.getByRole('button', { name: '会場を選択する' }).click();

  // クエリパラメータに紐づく会場が画面に表示されていること
  // 現在のURLを取得する
  page.on('response', async (response) => {
    // レスポンスURLを取得する
    const responseURL = response.url();

    // レスポンスURLがinori-track.vercel.app/venueのものだけを抽出する。
    if (responseURL.match(/inori-track.vercel.app\/venue/g)) {
      const url = new URL(responseURL);
      // クエリパラメータを取得する
      const params = url.searchParams.getAll('live_id');

      // IDに紐づく会場名を取得する
      const venueList = liveNames.filter((live) => params.includes(live.id));

      // 会場名が画面に表示されていることを確認
      for (const venue of venueList) {
        await expect(page.getByLabel(venue.name)).toBeVisible();
      }
    }
  });

  await page.getByText('東京1日目').click();
  await page.getByText('東京2日目').click();
  await page.getByText('神奈川', { exact: true }).click();
  await page.getByText('兵庫').nth(1).click();
  await page.getByText('神奈川2日目').click();
  await page.getByText('東京昼公演').first().click();
  await page.getByText('東京夜公演').first().click();
  await page.getByText('東京昼公演').nth(1).click();
  await page.getByText('東京夜公演').nth(1).click();
  await page.getByText('埼玉昼公演').click();
  await page.getByText('兵庫').nth(4).click();
  await page.getByRole('button', { name: '結果を見る' }).click();
  await expect(
    page.getByRole('heading', { name: 'あなたが聴いたことのない曲は82曲中、8曲でした！' }),
  ).toBeVisible();
});
