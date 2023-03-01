import type JSZip from 'jszip'
import * as txml from 'txml'

export async function readXmlFile(zip: JSZip, filename: string) {
  const data = await zip.file(filename)?.async('string')
  if (!data) return {}
  return txml.simplifyLostLess(txml.parse(data))
}
