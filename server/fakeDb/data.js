const mongoose = require('mongoose');

const user1Id= mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const data = {
    users: [
        {
            _id: user1Id,
            email: 'test1@test.com',
            name: 'test1',
            userName: 'test123',
            info: 'Im test.',
            password: '2lajdla',
            role: 'admin'

        },
        {
            _id: user2Id,
            email: 'test2@test.com',
            name: 'test2',
            userName: 'test233',
            info: 'Im test2.',
            password: 'dkhkahdk',

        }
    ],
    portfolios:[
    {
        title: 'Job in Update Promise',
        company: {
            name: 'Update Promise',
            city: 'Chino',
            state: 'California',
            country: 'USA',
            zipCode: '91710',
            website: 'https://www.updatepromise.com/'
        },
        jobTitle: 'Senior Front end web Developer',
        description: 'Update Promise was developed with one simple idea in mind, positively impact millions of auto industry consumer lives.Update promise provides the digital platform to automobile industry to better serve their clients needs and businesses.',
        jobResponsibilities: [],
        startDate: '06/29/2018',
        endDate: '12/03/2020',
        techStack: ['Angular 9+', 'React', 'Redux', 'React-Hooks', 'Node.js', 'GraphQL', 'Apollo', 'Mongo', 'Jasmine.js', 'CSS3','SCSS'],
        user: user1Id
    },
    {
        title: 'Job in Wells Fargo Bank',
        company: {
            name: 'Wells Fargo Bank',
            city: 'San Francisco',
            state: 'California',
            country: 'USA',
            zipCode: '',
            website: 'https://www.wellsfargo.com/'
        },
        jobTitle: 'UI Developer',
        description: 'Wells fargo is a leading banking domain which is providing variety of IT solutions in various areas.',
        jobResponsibilities: [],
        startDate: '11/11/2016',
        endDate: '04/28/2018',
        techStack: ['Angular 4+', 'Javascript', 'jquery', 'RestAPI', '.NET', 'SCSS', 'CSS3', 'Jasmine.js'],
        user: user1Id
    },
    {
        title: 'Job in CDW',
        company: {
            name: 'CDW',
            city: 'Chicago',
            state: 'Illinois',
            country: 'USA',
            zipCode: '',
            website: 'https://www.cdw.com/'
        },
        jobTitle: 'UI Developer',
        description: 'CDW is a leading provider of integrated information technology solutions. It helps 250,000 small, medium and large business, government, education and healthcare customers by delivering critical solutions to their increasingly complex IT needs. A Fortune 500 company, CDW was founded in 1984 and employs more than 8,400 coworkers. For the year ended December 31, 2015, the company generated net sales of over $12.9 billion.CDW broad array of offerings range from discrete hardware and software products to integrated IT solutions such as mobility, security, data center optimization, cloud computing, virtualization and collaboration.',
        jobResponsibilities: [],
        startDate: '02/20/2015',
        endDate: '11/01/2016',
        techStack: ['Javascript', 'Jquery', 'CSS3','SCSS', 'Webpack', 'Gulp.js', 'Karma.js','Mocha', 'Chai'],
        user: user1Id
    }
]};

module.exports = data;