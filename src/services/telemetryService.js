import { CsTelemetryModule } from "@project-sunbird/client-services/telemetry";
const duration = new Date().getTime();

export const initialize = ({ did }) => {
  if (!CsTelemetryModule.instance.isInitialised) {
    CsTelemetryModule.instance.init({});
    const telemetryConfig = {
      config: {
        pdata: {
          id: import.meta.env.VITE_ID,
          ver: import.meta.env.VITE_VER,
          pid: import.meta.env.VITE_PID,
        },
        env: import.meta.env.VITE_ENV,
        channel: import.meta.env.VITE_CHANNEL,
        did: did,
        authtoken: "",
        uid:
          localStorage.getItem("virtualId") ||
          localStorage.getItem("token") ||
          "anonymous",
        sid: "",
        batchsize: 1,
        mode: "",
        host: import.meta.env.VITE_BASE_URL,
        apislug: import.meta.env.VITE_API_SLUG,
        endpoint: import.meta.env.VITE_ENDPOINT,
        tags: [],
        cdata: [
          { id: "", type: "ContentSession" },
          { id: "", type: "PlaySession" },
        ],
        // ,
        // dispatcher : {
        //   dispatch: function (event) {
        //     console.log('Event', event);
        //   }
        // }
      },
      userOrgDetails: {},
    };

    CsTelemetryModule.instance.telemetryService.initTelemetry(telemetryConfig);
  }
};

export const start = (duration) => {
  CsTelemetryModule.instance.telemetryService.raiseStartTelemetry({
    options: getEventOptions(),
    edata: {
      type: "content",
      mode: "play",
      stageid: "",
      duration: Number((duration / 1e3).toFixed(2)),
    },
  });
};

export const getEventOptions = () => {
  return {
    object: {},
    context: {
      pdata: {
        id: "",
        ver: "",
        pid: "",
      },
      env: import.meta.env.ENV,
      uid:
        localStorage.getItem("virtualId") ||
        localStorage.getItem("token") ||
        "anonymous",
      cdata: [],
      rollup: {},
    },
  };
};

export const startEvent = () => {
  start(duration);
};
