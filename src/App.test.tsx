import { render } from '@testing-library/react';
import App from './App';

describe('App コンポーネント', () => {
  test('ホームページが正しく表示される', () => {
    render(<App />);
  });
});
