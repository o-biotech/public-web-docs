module.exports = {
  docs: {
    Introduction: [
      'introduction/overview', 
      'introduction/support',
    ],
    "Getting Started": [
      'getting-started/enterprise',
      'getting-started/cloud',
      'getting-started/devices',
      'getting-started/data',
    ],
    "Integrations":[
      'integrations/connecting-downstream-services',
      {        
          'Reporting & Analytics': [
            'integrations/reports-dashboards/power-bi', 
            'integrations/reports-dashboards/grafana',
            //'integrations/reports-dashboards/tableau',
            //'integrations/reports-dashboards/sql-server',
        ]
      },
      {
          'Alerts': [
            "integrations/alerts/logic-apps",
            //"integrations/alerts/grafana"
        ]
      },
      //{
          //'AI & ML': [
          //{
            //Services:[
          //'integrations/ai-ml/azure-ml',
            //],
          //},
        //]
      //},
    ],
    "Cloud Apps": [
      'cloud-apps/overview',
      'cloud-apps/ready-to-go-launch-pad',
      'cloud-apps/import-custom-apps',
      'cloud-apps/integrate-iot-api',      
    ],
    "Deep Dive": [
      {
        'Device Setup': [
          //'deep-dive/device-setup/overview',
          'deep-dive/device-setup/iot-best-practice-schema-explained',
          {
            Connect: [
              'deep-dive/device-setup/connect/http',
            ],
          },
        ],
      },
    ],
    
    Tutorials: [
      'tutorials/cyton-biosensing-board',
    ],
  },
};
