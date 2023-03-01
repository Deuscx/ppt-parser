import path from 'path'
import fs from 'fs'
import { describe, it } from 'vitest'
import { parse } from '../src/index'
function r(file: string) {
  return path.resolve(__dirname, file)
}
describe('export ', () => {
  it('test number eql', async () => {
    const filePath = r('./fixtures/Shape.pptx')
    const data = fs.readFileSync(filePath)
    await parse(data)
  })
})
