import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
function init() {
  Sentry.init({
    dsn:
      "https://02688902f69f11eaaf5f4201c0a8d030@o447901.ingest.sentry.io/5428424",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

function log() {}

export default {
  init,
  log,
};
