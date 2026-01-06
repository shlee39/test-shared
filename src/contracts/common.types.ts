// Web -> App 공통 이벤트
export interface CommonWebToAppEvents {
  log_event: {
    payload: {
      event: string
      params?: Record<string, any>
    }
  }
}

// App -> Web 공통 이벤트
export interface CommonAppToWebEvents {
  auth_user: {
    payload: {
      token: string
    }
  }
}
