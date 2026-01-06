// Web -> App 이벤트
export interface ShopWebToAppEvents {
  log_event: {
    payload: {
      event: string
      params?: Record<string, any>
    }
  }
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
}

// App -> Web 이벤트
export interface AppToShopWebEvents {
  auth_user: {
    payload: {
      token: string
    }
  }
}
