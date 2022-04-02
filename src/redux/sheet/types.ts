export interface GetSheetRequestPayload {
  sheetName: SheetGlobal.sheetName
}

export interface GetSheetSuccessPayload {
  sheetData: SheetGlobal.Works
}

export interface GetSheetFailurePayload {
  errors: Errors
}

export type Payload = GetSheetRequestPayload | GetSheetSuccessPayload | GetSheetFailurePayload
