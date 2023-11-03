module.exports = {
  docs: {
    Introduction: [
      'introduction/overview', 
      'introduction/support',
    ],
    "Getting Started": [
      'getting-started/setup',
      'getting-started/emulated-data',
    ],
    "Ingest, Process and Send":[
      'ingest-process-send/connecting-first-device',
      'ingest-process-send/viewing-device-data',
      'ingest-process-send/connecting-downstream-services',
    ],
    "Launch Cloud Apps": [
      'launch-cloud-apps/overview',
      'launch-cloud-apps/ready-to-go-launch-pad',
      'launch-cloud-apps/import-custom-apps',
      'launch-cloud-apps/integrate-iot-api',
      {
          'Reports and Dashboards': [
            'launch-cloud-apps/reports-dashboards/power-bi', 
            'launch-cloud-apps/reports-dashboards/grafana',
            'launch-cloud-apps/reports-dashboards/tableau',
            'launch-cloud-apps/reports-dashboards/sql-server',
        ]
      },
      {
          'Alerts': [
            "launch-cloud-apps/alerts/logic-apps",
            "launch-cloud-apps/alerts/grafana"
        ]
      },
      {
          'AI & ML': [
            'launch-cloud-apps/ai-ml/azure-ml',
        ]
      },      
    ],
    //Tutorials: [
      //{
          //'ESP32': [
          //"tutorials/esp32/arduino-esp32-and-enviro-sensor",
        //]
      //}, 
    //],
    "Deep Dive": [
      {
        'Device Setup': [
          'deep-dive/device-setup/overview',
          'deep-dive/device-setup/iot-best-practice-schema-explained',
          {
            Connect: [
              'deep-dive/device-setup/connect/http',
            ],
          },
        ],
      },
    ],
  },
};
