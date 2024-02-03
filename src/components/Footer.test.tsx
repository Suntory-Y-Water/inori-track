import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { describe, expect, test } from 'vitest';

describe('Footer コンポーネントのテスト', () => {
  test('正しい内容が表示されている', () => {
    render(<Footer />);

    // フッターのテキストが正しく表示されている
    expect(screen.getByText(`© ${new Date().getFullYear()} Sui`)).toBeInTheDocument();
  });
});
