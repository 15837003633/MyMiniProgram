import {wdrequest_instance} from "./index"

export function getMusicBanner(type = 0) {
  return wdrequest_instance.get({
    url: "/banner",
    data: {
      type
    }
  })
}