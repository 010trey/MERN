const express = require('express');
const {faker} = require('@faker-js/faker')
const app = express();
const port = 3000; // You can choose any port you prefer

    const createUser = () => {
        return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
        };
    };
    
    const createCompany = () => {
        return {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
        };
    };
    
        app.get('/api/users/new', (req, res) => {
            const newUser = createUser();
            res.json(newUser);
        });
        
        app.get('/api/companies/new', (req, res) => {
            const newCompany = createCompany();
            res.json(newCompany);
        });
        
        app.get('/api/user/company', (req, res) => {
            const newUser = createUser();
            const newCompany = createCompany();
            res.json({ user: newUser, company: newCompany });
        });
        
        
app.use(express.json(), express.urlencoded({extended:true}));
app.listen(port, ()=>console.log('Server is runnig on port '+port))

