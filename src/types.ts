/**
 * {@link https://learn.microsoft.com/en-us/office/open-xml/working-with-presentations | presentation.xml}
 */
export interface IPresentation {
  /**
   * a list of identification information for the slides that are available within the corresponding presentation.
   */
  sldIdList: {
    id: string
    rid: string
  }[]
  sldMasterIdList: {
    id: string
    rid: string
  }[]
  notesMasterIdList: {
    rId: string
  }
  /**
   * Slide Size
   */
  sldSz: {
    cx: number
    cy: number
  }
  /**
   * Notes Size
   * */
  notesSz: {
    cx: number
    cy: number
  }
}
