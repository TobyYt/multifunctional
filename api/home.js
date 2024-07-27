import {
  requestApi1
} from "../services/request"

export const getKfcData = () => {
  return requestApi1.get({
    url: "/wl/yan/kfc"
  })
}

export const getTianGou = () => {
  return requestApi1.get({
    url: "/wl/yan/tiangou"
  })
}

export const getShiPin = () => {
  return requestApi1.get({
    url: "/video/short"
  })
}