import { test, expect } from 'vitest'
import { sum } from './script.js'

test('suma incorrecta', () => {
    expect(sum(2, 2)).toBe(5);  // Este test fallará intencionalmente
});