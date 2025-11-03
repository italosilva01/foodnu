/**
 * Teste simples para verificar se Jest e Testing Library estão configurados corretamente
 */

import { render } from '@testing-library/react';

describe('Configuração do Jest e Testing Library', () => {
  test('Jest está funcionando corretamente', () => {
    expect(1 + 1).toBe(2);
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
  });

  test('Testing Library está disponível', () => {
    expect(render).toBeDefined();
    expect(typeof render).toBe('function');
  });

  test('Matchers básicos do Jest funcionam', () => {
    const obj = { name: 'Foodnu' };
    const arr = [1, 2, 3];

    expect(obj).toHaveProperty('name');
    expect(obj.name).toBe('Foodnu');
    expect(arr).toContain(2);
    expect(arr).toHaveLength(3);
  });
});
