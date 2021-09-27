import {AppVersion} from "./generated/openapi";

export const Version = ({appVersion}: {appVersion: AppVersion}) => {
  return (
    <span>BE version: {appVersion.version}</span>
  )
}