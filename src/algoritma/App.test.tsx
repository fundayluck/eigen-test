import { Test1 } from './Test1';
import { Test2 } from './Test2';
import { Test3 } from './Test3';
import { Test4 } from './Test4';

describe('Test Soal 1', function (): void {
  it('should return EIGEN1', function (): void {
    expect(Test1('NEGIE1')).toBe('EIGEN1')
  })
})

describe('Test Soal 2', function (): void {
  it('should return kata terbanyak', function (): void {
    expect(Test2('Saya sangat senang mengerjakan soal algoritma')).toBe('mengerjakan')
  })
})

describe('Test Soal 3', function (): void {
  const INPUT: string[] = ['xc', 'dz', 'bbb', 'dz'];
  const QUERY: string[] = ['bbb', 'ac', 'dz'];
  const tobe: number[] = [1, 0, 2]
  it('should return [1, 0, 2]', function (): void {
    expect(Test3(INPUT, QUERY)).toStrictEqual(tobe)
  })
})

describe('Test Soal 4', function (): void {
  const input = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
  it('should return 3', function (): void {
    expect(Test4(input)).toStrictEqual(3)
  })
})
