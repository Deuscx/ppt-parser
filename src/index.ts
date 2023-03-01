import JSZip from 'jszip'
import { readXmlFile } from './utils'

export async function parse(data: File | Buffer) {
  const zip = await JSZip.loadAsync(data)

  const contentData = await readXmlFile(zip, 'ppt/presentation.xml')
  return contentData
}
