const { defineConfig } = require("cypress");
const MongoClient = require('mongodb').MongoClient;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async find ({ query, collectionName } ) {
          const uri = "mongodb://pattanapong.ju:4oio2t2wVG3WiLwo@172.24.2.11:27017/?tls=false&authSource=arcusairdb"
          const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
          try {
            await client.connect();
            const database = client.db('arcusairdb'); // Replace with your database name
            const collection = database.collection(collectionName);
            const results = await collection.find(query).toArray();
            return results;
          } finally {
            await client.close();
          }
        }
      });

      // implement node event listeners here
      const urls = {
        melive: "https://www.melivecode.com/api",
        api: "http://localhost:3000/users",
        stg: "https://www.facebook.com",
        uat: "https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6"
      }
      config.baseUrl = urls[config.env.run_env]
      config.baseUrl = "https://www.melivecode.com/api"
      return config
    },
    // baseUrl: "https://sit-eregistration.cfwplatform.com/v1.5/w-app",
  },
  viewportWidth: 1000,
  viewportHeight: 800,
  screenshotOnRunFailure: true,
  screenshotsFolder:'cypress/reports/screenshots',
  videosFolder : 'cypress/reports/video' ,
  video : true ,
  reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: 'cypress/reports',
  //   reportFilename: '[name].html',
  //   charts: true,
  //   overwrite: true,
  //   html: true,
  //   json: true,
  //   reportPageTitle: "Princ Test Report",
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   watchForFileChanges: false
  // }
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    reportFilename: 'mochawesome_[name].html',
    charts: true,
    overwrite: true,
    html: false,
    json: true
  }

});
