const axios = require('axios');

exports.sourceNodes =exports.sourceNodes = async ({ actions, createContentDigest}) => {
    const { createNode } = actions;
    // fetch raw data from the Old JSON hosted on Github api
    const fetchDevelopers = () => axios.get(`https://raw.githubusercontent.com/AngelGarcia13/DominicanWhoCodes/master/DWC.Blazor/wwwroot/data/developers.json`);
    
    // await for results
    const res = await fetchDevelopers();

    // map into these results and create nodes
    res.data.map((dev, i) => {
      
      // Create your node object
      const userNode = {
        // Fields used on the original API
        id: `${i}`,
        name: dev.name,
        initials: dev.initials,
        internal: {
          type: `Developer`,
        },
        skills: dev.skills.split(","),
        summary:dev.summary,
        img: dev.image,
        Media:{ 
          linkedin: dev.linkedin,
          github: dev.github,
          twitter: dev.twitter,
          webpage: dev.webpage
        }
      }
      // add it to userNode
      userNode.internal.contentDigest = createContentDigest(dev);
      // Create node with the gatsby createNode() API
      createNode(userNode);
    });

    return;
  }

exports.onPreInit = () => console.log("Trying to make this work")