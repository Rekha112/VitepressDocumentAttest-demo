

module.exports = {
    title: ' ',
    

    themeConfig: {
        logo: '/logo-black.svg',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about/'},
            {text: 'Contact', link: '/contact'},
 
            ],
          
            sidebar:[
                {
                text: 'Attest Overview',
                collapsed: false,
                    items: [
                      { text: 'Test Environment Setup ', link: '/about/attestinstallation' } 
                    ]
                },
                {
                    text: 'Attest Functionalities',
                    collapsed: false,
                    items: [
                        { text: 'Overview', link: '/about/attestconfigurationoverview' },
                        {
                            text: 'Configuration',
                            collapsed: true,
                            items: [
                                { text: 'Track', link: '/about/attesttrack' },
                                { text: 'Functions', link: '/about/attestfunctions' },
                                { text: 'Scenario', link: '/about/attestscenario' },
                               // { text: 'TestSuite', link: '/about/attesttestsuite' },
                            ]
                        },
                       /* {
                            text: 'Data',
                            collapsed: true,
                            items: [
                                { text: 'Spreadsheet', link: '/about/attestdatasheets'},
                                { text: 'Data Sets', link: '/about/attestdatasets'},
                            ]
                        },*/
                        {
                            text: 'Execute',
                            collapsed: true,
                            items: [
                                { text: 'Impact Analysis'},
                              /*  { text: 'Test Cycles', link: '/about/attesttestcycle'},
                                { text: 'Test Runs', link: '/about/attesttestruns'},*/
                            ]
                        },
                        {
                            text: 'Administer',
                            collapsed: true,
                            items: [
                                { text: 'Signature Type', link: '/about/signaturetype'},
                            ]
                        },
                        {
                            text: 'Reports',
                            collapsed: true,
                            items: [
                                { text: 'Scenario Report', link: '/about/scenarioreport'},
                                { text: 'Scenario Detail Report', link: '/about/scenariodetailreport'}
                            ]
                        },
                         
                    ]
                },
            
                
                ],
    }
}