import { CommonAppToWebEvents, CommonWebToAppEvents } from "./common.types"

// Web -> App 이벤트
export interface ShopWebToAppEvents extends CommonWebToAppEvents {
  log_purchase_event: {
    payload: {
      params: Record<string, any>
    }
  }
  exit_webview: undefined
  open_external_url: {
    payload: {
      url: string
    }
  }
  open_channel_talk: {
    payload: {
      workFlowId: number
    }
  }
  test_event: {
    payload: {
      params: Record<string, any>
    }
  }
}

// App -> Web 이벤트
export interface AppToShopWebEvents extends CommonAppToWebEvents {}
